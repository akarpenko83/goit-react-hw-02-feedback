import React, { Component } from 'react';
import background from '../utils/background';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

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
        return Number(
            Object.values(this.state).reduce(
                (acc, value) => acc + value,
                0,
            ),
        );
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
