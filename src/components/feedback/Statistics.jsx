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
    positivePercentage,
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
                <span>{positivePercentage}%</span>
            </StatsData>
        </StatsContainer>
    );
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
