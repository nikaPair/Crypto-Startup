import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaShieldAlt, FaBolt, FaChartLine, FaUsers } from "react-icons/fa";
import styled from "styled-components";
import {
    Container,
    SectionTitle,
    Card,
    Grid,
    FlexColumn,
    PrimaryButton,
} from "../styles/StyledComponents";

// Стилизованные компоненты
const AboutSection = styled.section`
    padding: 6rem 2rem;
    background-color: var(--color-dark);
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 4rem 1.5rem;
    }
`;

const Description = styled(motion.p)`
    font-size: 1.25rem;
    color: #94a3b8;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1.125rem;
        margin-bottom: 3rem;
    }
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }
`;

const FeatureCard = styled(motion.div)`
    background-color: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const IconWrapper = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.75rem;
    background-color: rgba(79, 70, 229, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--color-primary);
    font-size: 1.5rem;

    @media (max-width: 768px) {
        width: 3rem;
        height: 3rem;
        font-size: 1.25rem;
    }
`;

const FeatureTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const FeatureDescription = styled.p`
    color: #94a3b8;
    line-height: 1.6;
`;

const CtaSection = styled(motion.div)`
    text-align: center;
    margin-top: 2rem;
`;

const AboutCtaButton = styled(motion.button)`
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

// Декоративный элемент
const GradientCircle = styled.div`
    position: absolute;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    background: radial-gradient(
        circle,
        rgba(79, 70, 229, 0.2) 0%,
        rgba(79, 70, 229, 0) 70%
    );
    z-index: 0;

    &.top-left {
        top: -15rem;
        left: -15rem;
    }

    &.bottom-right {
        bottom: -15rem;
        right: -15rem;
    }
`;

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const features = [
        {
            icon: <FaShieldAlt />,
            title: "Security",
            description:
                "Our platform uses advanced encryption technologies and multi-factor authentication to protect your assets.",
        },
        {
            icon: <FaBolt />,
            title: "Fast Transactions",
            description:
                "Instant transfers and exchanges thanks to optimized infrastructure and innovative solutions.",
        },
        {
            icon: <FaChartLine />,
            title: "Investment Opportunities",
            description:
                "Access to a wide range of investment instruments with high returns and low fees.",
        },
        {
            icon: <FaUsers />,
            title: "Community",
            description:
                "Join a growing community of users and get support from experienced participants and experts.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <AboutSection id="about" ref={ref}>
            <GradientCircle className="top-left" />
            <GradientCircle className="bottom-right" />

            <Container>
                <SectionTitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}>
                    About Our Platform
                </SectionTitle>

                <Description
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}>
                    We've created an innovative platform that combines
                    cutting-edge blockchain technology with a user-friendly
                    interface to provide secure and efficient financial
                    operations.
                </Description>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}>
                    <FeaturesGrid>
                        {features.map((feature, index) => (
                            <FeatureCard key={index} variants={itemVariants}>
                                <IconWrapper>{feature.icon}</IconWrapper>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>
                                    {feature.description}
                                </FeatureDescription>
                            </FeatureCard>
                        ))}
                    </FeaturesGrid>
                </motion.div>

                <CtaSection
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}>
                    <AboutCtaButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        Start Using
                    </AboutCtaButton>
                </CtaSection>
            </Container>
        </AboutSection>
    );
};

export default About;
