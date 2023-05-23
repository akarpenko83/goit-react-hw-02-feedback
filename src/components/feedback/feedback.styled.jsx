import styled from '@emotion/styled';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 100%;
    outline: solid 1px lightgray;
    margin: 0 auto;
    padding: 20px;
    align-items: center;

    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
`;

export const Button = styled.button`
    margin-right: 0.5rem;
    margin-bottom: 2rem;
    border-radius: 3px;
    padding: 0.75rem 2.5rem;
    color: white;
    background-color: gray;
    border-color: gray;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        background-color: lightgray;
        border-color: lightgray;
        color: black;
        cursor: pointer;
        scale: 1.07;
        box-shadow: none;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
export const StatsData = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
`;
