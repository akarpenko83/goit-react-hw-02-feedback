import React, { Component } from 'react';

import Section from './feedback/Section';
import Statistics from './feedback/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Notification from './feedback/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = evt => {
        if (evt.target.id === 'good') {
            this.setState(prevState => ({
                good: (prevState.good += 1),
            }));
        } else if (evt.target.id === 'neutral') {
            this.setState(prevState => ({
                neutral: (prevState.neutral += 1),
            }));
        } else if (evt.target.id === 'bad') {
            this.setState(prevState => ({
                bad: (prevState.neutral += 1),
            }));
        }
    };
    render() {
        const total = Number(
            this.state.good +
                this.state.neutral +
                this.state.bad,
        );
        const positivePercentage = Math.round(
            (this.state.good / total) * 100,
        );
        return (
            <Section>
                <FeedbackOptions
                    options={{
                        good: 'Good',
                        neutral: 'Neutral',
                        bad: 'Bad',
                    }}
                    onLeaveFeedback={this.onLeaveFeedback}
                ></FeedbackOptions>
                {total ? (
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={total}
                        positivePercentage={
                            positivePercentage
                        }
                    ></Statistics>
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        );
    }
}
export default App;
