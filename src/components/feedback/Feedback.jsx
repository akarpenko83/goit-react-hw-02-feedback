import React, { Component } from 'react';

class Feedback extends Component {
    state = {
        good: 7,
        neutral: 5,
        bad: 2,
    };

    countTotalFeedback = () => {
        return (
            this.state.good +
            this.state.neutral +
            this.state.bad
        );
    };

    countPositiveFeedbackPercentage = () => {
        const total =
            this.state.good +
            this.state.neutral +
            this.state.bad;
        return (this.state.good / total).toFixed(2);
    };

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>
                    Positive feedback:{' '}
                    {this.countPositiveFeedbackPercentage()}
                    %
                </p>
            </div>
        );
    }
}

export default Feedback;
