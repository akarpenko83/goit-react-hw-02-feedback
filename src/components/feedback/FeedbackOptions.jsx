import React from 'react';
import { Button } from './feedback.styled';

export default function FeedbackOptions(props) {
    const { good, neutral, bad } = props.options;
    return (
        <div>
            <Button
                type="button"
                onClick={props.onLeavePositiveFeedback}
            >
                {good}
            </Button>
            <Button
                type="button"
                onClick={props.onLeaveNeutralFeedback}
            >
                {neutral}
            </Button>
            <Button
                type="button"
                onClick={props.onLeaveBadFeedback}
            >
                {bad}
            </Button>
        </div>
    );
}
