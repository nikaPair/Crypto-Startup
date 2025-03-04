import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWallet, FaEthereum, FaExclamationTriangle } from "react-icons/fa";
import styled from "styled-components";
import { PrimaryButton } from "../styles/StyledComponents";

// Styled components
const WalletWrapper = styled.div`
    position: relative;
    z-index: 10;
`;

const ConnectButton = styled(motion(PrimaryButton))`
    display: flex;
    align-items: center;

    &:disabled {
        background-color: #4b5563;
        cursor: not-allowed;
    }

    svg {
        margin-right: 0.5rem;
    }
`;

const WalletInfo = styled(motion.div)`
    background-color: var(--color-dark-lighter);
    border: 1px solid #4b5563;
    border-radius: 0.5rem;
    padding: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const AccountRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    svg {
        color: var(--color-primary);
        margin-right: 0.5rem;
    }

    span {
        font-weight: 500;
    }
`;

const BalanceText = styled.div`
    color: #94a3b8;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
`;

const DisconnectButton = styled.button`
    font-size: 0.875rem;
    color: #94a3b8;
    background: none;
    transition: color 0.3s ease;

    &:hover {
        color: white;
    }
`;

const ErrorMessage = styled(motion.div)`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 0.5rem;
    background-color: rgba(185, 28, 28, 0.8);
    color: white;
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;

    svg {
        color: #fbbf24;
        margin-right: 0.5rem;
    }
`;

const LoadingSpinner = styled.svg`
    animation: spin 1s linear infinite;
    margin-right: 0.5rem;
    margin-left: -0.25rem;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const WalletConnect = () => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState("");
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);

    useEffect(() => {
        // Check if MetaMask is installed
        if (typeof window.ethereum === "undefined") {
            setIsMetaMaskInstalled(false);
        }
    }, []);

    // Function to connect to MetaMask
    const connectWallet = async () => {
        if (!isMetaMaskInstalled) {
            setError("Please install MetaMask to connect your wallet.");
            return;
        }

        setIsConnecting(true);
        setError("");

        try {
            // Request access to user accounts
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            if (accounts.length > 0) {
                setAccount(accounts[0]);

                // Get balance
                const balance = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [accounts[0], "latest"],
                });

                // Convert from wei to ETH
                const ethBalance = parseInt(balance, 16) / 1e18;
                setBalance(ethBalance.toFixed(4));
            }
        } catch (error) {
            console.error("Error connecting to wallet:", error);
            setError("Failed to connect to wallet. Please try again.");
        } finally {
            setIsConnecting(false);
        }
    };

    // Function to disconnect wallet
    const disconnectWallet = () => {
        setAccount("");
        setBalance("");
    };

    // Shorten wallet address for display
    const shortenAddress = (address) => {
        return `${address.substring(0, 6)}...${address.substring(
            address.length - 4
        )}`;
    };

    return (
        <WalletWrapper>
            {!account ? (
                <ConnectButton
                    onClick={connectWallet}
                    disabled={isConnecting || !isMetaMaskInstalled}
                    whileHover={isMetaMaskInstalled ? { scale: 1.05 } : {}}
                    whileTap={isMetaMaskInstalled ? { scale: 0.95 } : {}}>
                    {isConnecting ? (
                        <>
                            <LoadingSpinner
                                className="h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </LoadingSpinner>
                            Connecting...
                        </>
                    ) : (
                        <>
                            <FaWallet />
                            {isMetaMaskInstalled
                                ? "Connect Wallet"
                                : "Install MetaMask"}
                        </>
                    )}
                </ConnectButton>
            ) : (
                <WalletInfo
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <AccountRow>
                        <FaEthereum />
                        <span>{shortenAddress(account)}</span>
                    </AccountRow>
                    <BalanceText>Balance: {balance} ETH</BalanceText>
                    <DisconnectButton onClick={disconnectWallet}>
                        Disconnect
                    </DisconnectButton>
                </WalletInfo>
            )}

            {error && (
                <ErrorMessage
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <FaExclamationTriangle />
                    {error}
                </ErrorMessage>
            )}
        </WalletWrapper>
    );
};

export default WalletConnect;
