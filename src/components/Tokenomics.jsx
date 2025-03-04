import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaLock,
    FaExchangeAlt,
    FaChartLine,
    FaShieldAlt,
} from "react-icons/fa";
import styled from "styled-components";
import { Section, Container, SectionTitle } from "../styles/StyledComponents";

const TokenomicsSection = styled(Section)`
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

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

const TokenCard = styled(motion.div)`
    background-color: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 2rem;
    height: 100%;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const DistributionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }
`;

const DistributionItem = styled.div`
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const DistributionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 0.75rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    overflow: hidden;
`;

const ProgressBar = styled.div`
    height: 100%;
    border-radius: 1rem;
    background: ${(props) => props.color || "var(--color-primary)"};
    width: ${(props) => props.width || "0%"};
`;

const FeaturesCard = styled(TokenCard)``;

const FeaturesTitle = styled(DistributionTitle)``;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

const FeatureItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

const FeatureIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: rgba(79, 70, 229, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    font-size: 1.25rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 2.25rem;
        height: 2.25rem;
        font-size: 1.125rem;
    }
`;

const FeatureContent = styled.div`
    flex: 1;
`;

const FeatureTitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const FeatureDescription = styled.p`
    color: #94a3b8;
    font-size: 0.875rem;
    line-height: 1.5;
`;

const CtaSection = styled(motion.div)`
    text-align: center;
    margin-top: 2rem;
`;

const TokenomicsCtaButton = styled(motion.button)`
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

    &.top-right {
        top: -15rem;
        right: -15rem;
    }

    &.bottom-left {
        bottom: -15rem;
        left: -15rem;
    }
`;

const Tokenomics = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const distribution = [
        { name: "Public Sale", percentage: 40, color: "#4F46E5" },
        { name: "Team & Advisors", percentage: 20, color: "#8B5CF6" },
        { name: "Ecosystem & Development", percentage: 25, color: "#EC4899" },
        { name: "Liquidity & Reserves", percentage: 15, color: "#F59E0B" },
    ];

    const features = [
        {
            icon: <FaLock />,
            title: "Vesting",
            description:
                "Team tokens are locked with a 12-month cliff and 24-month vesting period.",
        },
        {
            icon: <FaExchangeAlt />,
            title: "Utility",
            description:
                "The token is used for platform fees, governance, and staking rewards.",
        },
        {
            icon: <FaChartLine />,
            title: "Deflationary",
            description:
                "2% of each transaction is burned, reducing the total supply over time.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Security",
            description:
                "Smart contracts are audited by leading security firms in the industry.",
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
        <TokenomicsSection id="tokenomics" ref={ref}>
            <GradientCircle className="top-right" />
            <GradientCircle className="bottom-left" />

            <Container>
                <SectionTitle
                    as={motion.h2}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}>
                    Tokenomics
                </SectionTitle>

                <Description
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}>
                    Our token is designed to provide value to holders while
                    ensuring the long-term sustainability and growth of the
                    ecosystem.
                </Description>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}>
                    <ContentGrid>
                        <TokenCard variants={itemVariants}>
                            <DistributionTitle>
                                Token Distribution
                            </DistributionTitle>
                            {distribution.map((item, index) => (
                                <DistributionItem key={index}>
                                    <DistributionHeader>
                                        <span>{item.name}</span>
                                        <span>{item.percentage}%</span>
                                    </DistributionHeader>
                                    <ProgressBarContainer>
                                        <ProgressBar
                                            width={`${item.percentage}%`}
                                            color={item.color}
                                        />
                                    </ProgressBarContainer>
                                </DistributionItem>
                            ))}
                        </TokenCard>

                        <FeaturesCard variants={itemVariants}>
                            <FeaturesTitle>Token Features</FeaturesTitle>
                            <FeaturesGrid>
                                {features.map((feature, index) => (
                                    <FeatureItem key={index}>
                                        <FeatureIcon>
                                            {feature.icon}
                                        </FeatureIcon>
                                        <FeatureContent>
                                            <FeatureTitle>
                                                {feature.title}
                                            </FeatureTitle>
                                            <FeatureDescription>
                                                {feature.description}
                                            </FeatureDescription>
                                        </FeatureContent>
                                    </FeatureItem>
                                ))}
                            </FeaturesGrid>
                        </FeaturesCard>
                    </ContentGrid>
                </motion.div>

                <CtaSection
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}>
                    <TokenomicsCtaButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        View Whitepaper
                    </TokenomicsCtaButton>
                </CtaSection>
            </Container>
        </TokenomicsSection>
    );
};

export default Tokenomics;
