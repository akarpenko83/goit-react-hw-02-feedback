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
        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));
    };
    getTotalFeedback = () => {
        let total = 0;
        for (let key in this.state) {
            total += this.state[key];
        }
        return Number(total);
    };
    getPositivePercentage = () => {
        return Math.round(
            (this.state.good / this.getTotalFeedback()) *
                100,
        );
    };

    render() {
        window.onload = background;

        const total = this.getTotalFeedback();

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
                        posPercent={this.getPositivePercentage()}
                    ></Statistics>
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        );
    }
}
export default App;
