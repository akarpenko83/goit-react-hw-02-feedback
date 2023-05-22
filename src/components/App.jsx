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

    onLeaveFeedback = () => {};

    render() {
        const total = Number(
            this.state.good +
                this.state.neutral +
                this.state.bad,
        );
        const positivePercentage = Number(
            (this.state.good / total).toFixed(2),
        );

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101',
                }}
            >
                <Section>
                    <FeedbackOptions
                        options={{
                            good: 'Good',
                            neutral: 'Neutral',
                            bad: 'Bad',
                        }}
                        onLeaveFeedback={
                            this.onLeaveFeedback
                        }
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
            </div>
        );
    }
}
export default App;
