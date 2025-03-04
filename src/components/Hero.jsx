import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import ParticlesBackground from "./ParticlesBackground";
import {
    Container,
    GradientText,
    PrimaryButton,
    OutlineButton,
    FlexColumn,
    FlexRow,
} from "../styles/StyledComponents";

// Стилизованные компоненты
const HeroSection = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem;
    overflow: hidden;
    background: linear-gradient(
        135deg,
        var(--color-dark) 0%,
        var(--color-dark-lighter) 100%
    );

    @media (max-width: 768px) {
        padding: 5rem 1.5rem;
        min-height: 90vh;
    }
`;

const ContentContainer = styled.div`
    position: relative;
    z-index: 10;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

const GradientTitle = styled(motion.h1)`
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #8a2be2 0%, #ff69b4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: 1024px) {
        font-size: 3.5rem;
    }

    @media (max-width: 768px) {
        font-size: 2.75rem;
    }

    @media (max-width: 480px) {
        font-size: 2.25rem;
    }
`;

const Subtitle = styled(motion.p)`
    font-size: 1.5rem;
    color: #94a3b8;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.125rem;
        margin-bottom: 2rem;
    }
`;

const ButtonContainer = styled(motion.div)`
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
`;

const HeroPrimaryButton = styled(motion.button)`
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.125rem;

    &:hover {
        background-color: var(--color-primary-dark);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 250px;
        padding: 0.75rem 1.5rem;
    }
`;

const HeroSecondaryButton = styled(motion.button)`
    background-color: transparent;
    color: white;
    font-weight: 600;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.125rem;

    &:hover {
        background-color: rgba(79, 70, 229, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 250px;
        padding: 0.75rem 1.5rem;
    }
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
        bottom: 1.5rem;
    }
`;

const ScrollText = styled.span`
    color: #94a3b8;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
`;

const ScrollIcon = styled(motion.div)`
    width: 1.5rem;
    height: 2.5rem;
    border: 2px solid #94a3b8;
    border-radius: 1rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background-color: #94a3b8;
        border-radius: 50%;
        left: 50%;
        top: 0.5rem;
        transform: translateX(-50%);
        animation: scrollAnimation 2s infinite;
    }

    @keyframes scrollAnimation {
        0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(1rem);
        }
    }
`;

const Hero = ({ onConnectWallet }) => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <HeroSection id="hero">
            <ParticlesBackground />

            <ContentContainer>
                <GradientTitle
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    Fast, Secure and Transparent Transactions
                </GradientTitle>

                <Subtitle
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    Use our platform for instant transfers, staking, and asset
                    management.
                </Subtitle>

                <ButtonContainer
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    <HeroPrimaryButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onConnectWallet}>
                        Get Started
                    </HeroPrimaryButton>

                    <HeroSecondaryButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToAbout}>
                        Learn More
                    </HeroSecondaryButton>
                </ButtonContainer>
            </ContentContainer>

            <ScrollIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onClick={scrollToAbout}>
                <ScrollText>Scroll Down</ScrollText>
                <ScrollIcon
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </ScrollIndicator>
        </HeroSection>
    );
};

export default Hero;
