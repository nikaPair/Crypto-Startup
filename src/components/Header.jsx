import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import {
    Container,
    NavLink,
    GradientText,
    FlexRow,
} from "../styles/StyledComponents";
import WalletConnect from "./WalletConnect";

// Styled components
const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 2rem;
    transition: all 0.3s ease;
    background-color: ${(props) =>
        props.scrolled ? "rgba(13, 17, 28, 0.95)" : "transparent"};
    backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
    box-shadow: ${(props) =>
        props.scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none"};

    @media (max-width: 768px) {
        padding: 0.75rem 1rem;
    }
`;

const NavContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(motion.div)`
    font-size: 1.75rem;
    font-weight: 700;
    color: white;

    span {
        color: var(--color-primary);
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const NavLinkStyled = styled.a`
    color: white;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;

    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: var(--color-primary);
        transition: width 0.3s ease;
    }

    &:hover {
        color: var(--color-primary);

        &:after {
            width: 100%;
        }
    }
`;

const ConnectButton = styled.button`
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-primary-dark);
        transform: translateY(-2px);
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1001;

    @media (max-width: 1024px) {
        display: block;
    }
`;

const MobileMenu = styled(motion.div)`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(13, 17, 28, 0.98);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 5rem 2rem 2rem;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    @media (max-width: 1024px) {
        display: flex;
    }
`;

const MobileNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    width: 100%;
`;

const MobileNavLink = styled.a`
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.75rem 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        color: var(--color-primary);
    }
`;

const MobileConnectButton = styled.button`
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1.125rem;
    margin-top: 1rem;
    width: 100%;
    max-width: 250px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-primary-dark);
    }
`;

const WalletWrapper = styled(motion.div)`
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`;

const Header = ({ onConnectWallet }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Tokenomics", href: "#tokenomics" },
        { name: "Roadmap", href: "#roadmap" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <HeaderContainer scrolled={scrolled}>
            <Container>
                <FlexRow spaceBetween>
                    {/* Logo */}
                    <Logo
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
                        Crypto<span>Finance</span>
                    </Logo>

                    {/* Desktop navigation */}
                    <NavLinks
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                }}>
                                <NavLinkStyled href={link.href}>
                                    {link.name}
                                </NavLinkStyled>
                            </motion.div>
                        ))}
                    </NavLinks>

                    {/* Wallet connect button */}
                    <WalletWrapper
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <WalletConnect />
                    </WalletWrapper>

                    {/* Mobile menu button */}
                    <MobileMenuButton
                        onClick={toggleMobileMenu}
                        aria-label={
                            mobileMenuOpen ? "Close menu" : "Open menu"
                        }>
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </MobileMenuButton>

                    {/* Mobile menu */}
                    <MobileMenu
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: mobileMenuOpen ? 1 : 0,
                            y: mobileMenuOpen ? 0 : -100,
                            display: mobileMenuOpen ? "flex" : "none",
                        }}
                        transition={{ duration: 0.3 }}>
                        <MobileNavLinks>
                            {navLinks.map((link, index) => (
                                <MobileNavLink
                                    key={index}
                                    href={link.href}
                                    onClick={closeMobileMenu}>
                                    {link.name}
                                </MobileNavLink>
                            ))}
                        </MobileNavLinks>
                        <MobileConnectButton
                            onClick={() => {
                                if (onConnectWallet) onConnectWallet();
                                closeMobileMenu();
                            }}>
                            Connect Wallet
                        </MobileConnectButton>
                    </MobileMenu>
                </FlexRow>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
