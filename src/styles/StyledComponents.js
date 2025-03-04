import styled, { keyframes, css } from "styled-components";

// Контейнер
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    width: 100%;
`;

// Секция
export const Section = styled.section`
    padding: 5rem 0;
    position: relative;
    ${(props) =>
        props.dark &&
        `
    background-color: var(--color-dark-lighter);
  `}
`;

// Заголовки
export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(
        to right,
        var(--color-primary),
        var(--color-secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const GradientText = styled.span`
    background: linear-gradient(
        to right,
        var(--color-primary),
        var(--color-secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

// Кнопки
export const Button = styled.button`
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-block;
    font-size: 1rem;
`;

export const PrimaryButton = styled(Button)`
    background-color: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);

    &:hover {
        background-color: var(--color-primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
    }
`;

export const OutlineButton = styled(Button)`
    background-color: transparent;
    border: 2px solid var(--color-primary);
    color: white;

    &:hover {
        background-color: rgba(79, 70, 229, 0.1);
        transform: translateY(-2px);
    }
`;

// Карточка
export const Card = styled.div`
    background-color: var(--color-dark-lighter);
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
        border-color: rgba(79, 70, 229, 0.3);
        transform: translateY(-5px);
    }
`;

// Флекс контейнеры
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    ${(props) =>
        props.center && "justify-content: center; align-items: center;"}
    ${(props) => props.spaceBetween && "justify-content: space-between;"}
  ${(props) => props.gap && `gap: ${props.gap}rem;`}
  ${(props) => props.wrap && "flex-wrap: wrap;"}
  
  @media (max-width: 768px) {
        ${(props) => props.mobileColumn && "flex-direction: column;"}
    }
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.center && "justify-content: center; align-items: center;"}
    ${(props) => props.gap && `gap: ${props.gap}rem;`}
`;

// Анимации
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInAnimation = css`
    animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const floatAnimation = css`
    animation: ${float} 3s ease-in-out infinite;
`;

// Сетка
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
    gap: ${(props) => props.gap || 2}rem;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

// Навигационные ссылки
export const NavLink = styled.a`
    position: relative;
    padding: 0.5rem 0.75rem;
    color: var(--color-text-secondary);
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-text);
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-primary);
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;
