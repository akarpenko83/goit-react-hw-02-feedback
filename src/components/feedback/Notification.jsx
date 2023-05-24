import PropTypes from 'prop-types';
import { Title } from './feedback.styled';

export default function Feedback({ message }) {
    return <Title>{message}</Title>;
}
Feedback.propTypes = {
    message: PropTypes.string,
};
