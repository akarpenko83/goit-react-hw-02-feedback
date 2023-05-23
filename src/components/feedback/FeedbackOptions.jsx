import React from 'react';
import { Button } from './feedback.styled';

export default function FeedbackOptions(props) {
    const { good, neutral, bad } = props.options;
    return (
        <div>
            <Button
                type="button"
                id="good"
                onClick={props.onLeaveFeedback}
            >
                {good}
            </Button>
            <Button
                type="button"
                id="neutral"
                onClick={props.onLeaveFeedback}
            >
                {neutral}
            </Button>
            <Button
                type="button"
                id="bad"
                onClick={props.onLeaveFeedback}
            >
                {bad}
            </Button>
        </div>
    );
}
