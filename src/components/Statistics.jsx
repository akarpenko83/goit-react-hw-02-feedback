import PropTypes from 'prop-types';
import {
    Title,
    StatsContainer,
    StatsData,
} from './feedback.styled';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    posPercent,
}) {
    return (
        <StatsContainer>
            <Title>Statistics</Title>
            <StatsData>
                Good: <span>{good}</span>
            </StatsData>
            <StatsData>
                Neutral: <span>{neutral}</span>
            </StatsData>
            <StatsData>
                Bad: <span>{bad}</span>
            </StatsData>
            <StatsData>
                Total:<span>{total}</span>
            </StatsData>
            <StatsData>
                Positive feedback:
                <span>{posPercent}%</span>
            </StatsData>
        </StatsContainer>
    );
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    posPercent: PropTypes.number,
};
