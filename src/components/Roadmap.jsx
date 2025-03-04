import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import {
    Container,
    SectionTitle,
    FlexColumn,
} from "../styles/StyledComponents";

// Styled components
const RoadmapSection = styled.section`
    padding: 5rem 0;
    background-color: var(--color-dark-lighter);
`;

const Description = styled(motion.p)`
    font-size: 1.25rem;
    color: #94a3b8;
    max-width: 48rem;
    margin: 1.5rem auto 4rem;
    text-align: center;
`;

const Timeline = styled.div`
    position: relative;
`;

const TimelineLine = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 4px;
    background-color: var(--color-primary);
    opacity: 0.3;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

const MilestoneItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        flex-direction: ${(props) => (props.isEven ? "row-reverse" : "row")};
        align-items: flex-start;
    }
`;

const TimelinePoint = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--color-dark);
    border: 4px solid var(--color-primary);
    z-index: 10;
    margin: 0 2rem;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const TimelineDot = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) =>
        props.completed ? "var(--color-primary)" : "#4B5563"};
`;

const MilestoneCard = styled.div`
    background-color: var(--color-dark-lighter);
    border: 1px solid #2d3748;
    border-radius: 1rem;
    padding: 1.5rem;
    width: 100%;

    @media (min-width: 768px) {
        width: 41.666667%;
        text-align: ${(props) => (props.isEven ? "right" : "left")};
    }
`;

const QuarterBadge = styled.div`
    display: inline-block;
    padding: 0.25rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    background-color: ${(props) =>
        props.completed ? "rgba(79, 70, 229, 0.2)" : "#374151"};
    color: ${(props) => (props.completed ? "var(--color-primary)" : "#94A3B8")};
`;

const MilestoneTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const MilestoneList = styled.ul`
    margin-left: ${(props) => (props.isEven ? "0" : "0")};
    margin-right: ${(props) => (props.isEven ? "0" : "0")};

    @media (min-width: 768px) {
        margin-left: ${(props) => (props.isEven ? "auto" : "0")};
        margin-right: ${(props) => (props.isEven ? "0" : "auto")};
    }
`;

const MilestoneListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const ListItemDot = styled.span`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    margin: 0 0.5rem;
    order: ${(props) => (props.isEven ? "2" : "0")};
`;

const ListItemText = styled.span`
    order: ${(props) => (props.isEven ? "1" : "0")};
`;

const Roadmap = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const milestones = [
        {
            quarter: "Q1 2023",
            title: "Project Launch",
            completed: true,
            items: [
                "Team formation",
                "Concept development",
                "Technical documentation creation",
                "Smart contract development initiation",
            ],
        },
        {
            quarter: "Q2 2023",
            title: "MVP Development",
            completed: true,
            items: [
                "Smart contract development completion",
                "Security audit",
                "Testnet testing",
                "Platform beta version launch",
            ],
        },
        {
            quarter: "Q3-Q4 2023",
            title: "Launch and Expansion",
            completed: false,
            items: [
                "Public token sale",
                "Listing on decentralized exchanges",
                "Mainnet launch",
                "Wallet integrations",
            ],
        },
        {
            quarter: "Q1-Q2 2024",
            title: "Ecosystem Development",
            completed: false,
            items: [
                "Staking and farming launch",
                "Integration with other DeFi protocols",
                "Platform functionality expansion",
                "Listing on centralized exchanges",
            ],
        },
        {
            quarter: "Q3-Q4 2024",
            title: "Global Expansion",
            completed: false,
            items: [
                "Mobile app launch",
                "Payment system integrations",
                "Partnership network expansion",
                "International presence development",
            ],
        },
    ];

    return (
        <RoadmapSection id="roadmap" ref={ref}>
            <Container>
                <FlexColumn center>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}>
                        <SectionTitle>Roadmap</SectionTitle>
                    </motion.div>

                    <Description
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}>
                        Our project development plan, divided into key stages
                        and implementation timelines.
                    </Description>
                </FlexColumn>

                <Timeline>
                    <TimelineLine />

                    {milestones.map((milestone, index) => (
                        <MilestoneItem
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.1,
                            }}
                            isEven={index % 2 === 0}>
                            <TimelinePoint>
                                <TimelineDot completed={milestone.completed} />
                            </TimelinePoint>

                            <MilestoneCard isEven={index % 2 === 0}>
                                <QuarterBadge completed={milestone.completed}>
                                    {milestone.quarter}
                                </QuarterBadge>
                                <MilestoneTitle>
                                    {milestone.title}
                                </MilestoneTitle>
                                <MilestoneList isEven={index % 2 === 0}>
                                    {milestone.items.map((item, itemIndex) => (
                                        <MilestoneListItem key={itemIndex}>
                                            {index % 2 === 0 && (
                                                <ListItemText
                                                    isEven={index % 2 === 0}>
                                                    {item}
                                                </ListItemText>
                                            )}
                                            <ListItemDot
                                                isEven={index % 2 === 0}
                                            />
                                            {index % 2 !== 0 && (
                                                <ListItemText
                                                    isEven={index % 2 === 0}>
                                                    {item}
                                                </ListItemText>
                                            )}
                                        </MilestoneListItem>
                                    ))}
                                </MilestoneList>
                            </MilestoneCard>
                        </MilestoneItem>
                    ))}
                </Timeline>
            </Container>
        </RoadmapSection>
    );
};

export default Roadmap;
