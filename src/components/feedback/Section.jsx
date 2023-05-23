import { Container, Title } from './feedback.styled';

export default function Section({ children }) {
    return (
        <Container title="">
            <Title>Please leave a feedback</Title>
            {children}
        </Container>
    );
}
