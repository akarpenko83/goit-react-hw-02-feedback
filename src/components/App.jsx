import React, { Component } from 'react';
import background from './utils/background';
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
    onLeaveFeedback = option => {
        // const buttonName = evt.target.firstChild.data;

        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));
    };
    render() {
        window.onload = background;

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
                    options={Object.keys(this.state)}
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
