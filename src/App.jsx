import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import WalletConnect from "./components/WalletConnect";

const AppWrapper = styled.div`
    min-height: 100vh;
    background-color: var(--color-dark);
    color: var(--color-text);
`;

function App() {
    const [showWalletModal, setShowWalletModal] = useState(false);

    // Функция для открытия модального окна подключения кошелька
    const handleConnectWallet = () => {
        setShowWalletModal(true);
    };

    // Функция для закрытия модального окна подключения кошелька
    const handleCloseWalletModal = () => {
        setShowWalletModal(false);
    };

    // Плавная прокрутка для якорных ссылок
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest("a");
            if (target && target.getAttribute("href")?.startsWith("#")) {
                e.preventDefault();
                const id = target.getAttribute("href").slice(1);
                const element = document.getElementById(id);

                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80, // Учитываем высоту шапки
                        behavior: "smooth",
                    });
                }
            }
        };

        document.body.addEventListener("click", handleAnchorClick);

        return () => {
            document.body.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return (
        <>
            <GlobalStyles />
            <AppWrapper>
                <Header onConnectWallet={handleConnectWallet} />
                <main>
                    <Hero onConnectWallet={handleConnectWallet} />
                    <About />
                    <Tokenomics />
                    <Roadmap />
                </main>
                <Footer />
                {showWalletModal && (
                    <WalletConnect onClose={handleCloseWalletModal} />
                )}
            </AppWrapper>
        </>
    );
}

export default App;
