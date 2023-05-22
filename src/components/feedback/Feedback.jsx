import React, { Component } from 'react';

class Feedback extends Component {
    state = {
        good: 3,
        neutral: 5,
        bad: 1,
    };

    countTotalFeedback = () => {};

    countPositiveFeedbackPercentage = () => {};

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
                <p>Positive feedback: %</p>
            </div>
        );
    }
}

export default Feedback;
