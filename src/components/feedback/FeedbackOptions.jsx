import React from 'react';
import { Button } from './feedback.styled';

export default function FeedbackOptions(props) {
    const { good, neutral, bad } = props.options;
    return (
        <div onClick={props.onLeaveFeedback}>
            <Button type="button">{good}</Button>
            <Button type="button">{neutral}</Button>
            <Button type="button">{bad}</Button>
        </div>
    );
}
