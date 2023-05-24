import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './feedback.styled';

export default function FeedbackOptions({
    options: { good, neutral, bad },
    onLeaveFeedback,
}) {
    // const { good, neutral, bad } = options;
    // const { onLeaveFeedback } = props.onLeaveFeed;
    return (
        <div onClick={onLeaveFeedback}>
            <Button type="button">{good}</Button>
            <Button type="button">{neutral}</Button>
            <Button type="button">{bad}</Button>
        </div>
    );
}
FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
