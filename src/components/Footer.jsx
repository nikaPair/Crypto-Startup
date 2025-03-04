import { motion } from "framer-motion";
import {
    FaTwitter,
    FaTelegram,
    FaDiscord,
    FaGithub,
    FaMedium,
} from "react-icons/fa";
import styled from "styled-components";
import { Container } from "../styles/StyledComponents";

// Styled components
const FooterSection = styled.footer`
    padding: 4rem 0 2rem;
    background-color: var(--color-dark);
    border-top: 1px solid #2d3748;
`;

const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`;

const TopSection = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }
`;

const BrandSection = styled.div`
    margin-bottom: 1.5rem;
`;

const Logo = styled.div`
    font-size: 1.875rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;

    span {
        color: var(--color-primary);
    }
`;

const BrandDescription = styled.p`
    color: #94a3b8;
    margin-bottom: 1.5rem;
    max-width: 24rem;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    background-color: #1f2937;
    color: white;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-primary);
        transform: translateY(-3px);
    }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: white;
`;

const FooterLinks = styled.ul`
    list-style-type: none;
`;

const FooterLink = styled.li`
    margin-bottom: 0.75rem;

    a {
        color: #94a3b8;
        transition: color 0.3s ease;

        &:hover {
            color: var(--color-primary);
        }
    }
`;

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    border-top: 1px solid #2d3748;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Copyright = styled.p`
    color: #94a3b8;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const LegalLinks = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const LegalLink = styled.a`
    color: #94a3b8;
    font-size: 0.875rem;
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-primary);
    }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterSection>
            <FooterContainer>
                <TopSection>
                    <BrandSection>
                        <Logo>
                            Crypto<span>Pulse</span>
                        </Logo>
                        <BrandDescription>
                            Innovative platform for secure and fast
                            cryptocurrency transactions with cutting-edge
                            blockchain technologies.
                        </BrandDescription>
                        <SocialLinks>
                            <SocialLink
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTwitter size={18} />
                            </SocialLink>
                            <SocialLink
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTelegram size={18} />
                            </SocialLink>
                            <SocialLink
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaDiscord size={18} />
                            </SocialLink>
                            <SocialLink
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub size={18} />
                            </SocialLink>
                            <SocialLink
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaMedium size={18} />
                            </SocialLink>
                        </SocialLinks>
                    </BrandSection>

                    <FooterColumn>
                        <ColumnTitle>Company</ColumnTitle>
                        <FooterLinks>
                            <FooterLink>
                                <a href="#about">About</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#tokenomics">Tokenomics</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#roadmap">Roadmap</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Team</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Careers</a>
                            </FooterLink>
                        </FooterLinks>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Resources</ColumnTitle>
                        <FooterLinks>
                            <FooterLink>
                                <a href="#">Documentation</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Whitepaper</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">API</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Guides</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Community</a>
                            </FooterLink>
                        </FooterLinks>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Support</ColumnTitle>
                        <FooterLinks>
                            <FooterLink>
                                <a href="#">Help</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">FAQ</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Contact</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Network Status</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="#">Security</a>
                            </FooterLink>
                        </FooterLinks>
                    </FooterColumn>
                </TopSection>

                <BottomSection>
                    <Copyright>
                        © {currentYear} CryptoPulse. All rights reserved.
                    </Copyright>
                    <LegalLinks>
                        <LegalLink href="#">Terms of Service</LegalLink>
                        <LegalLink href="#">Privacy Policy</LegalLink>
                        <LegalLink href="#">Cookies</LegalLink>
                    </LegalLinks>
                </BottomSection>
            </FooterContainer>
        </FooterSection>
    );
};

export default Footer;
