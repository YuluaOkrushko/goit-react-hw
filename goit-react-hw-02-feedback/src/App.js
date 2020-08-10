import React, { Component } from "react";
import FeedbackButtons from "./components/FeedbackOptions/FeedbackButtons";
import Section from "./components/Section/Section";
import Notifications from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = (tot) => {
    return tot.reduce((a, b) => a + b);
  };
  GetFeedback = (e) => {
    const getName = e.target.name;
    this.setState((state) => ({
      [getName]: state[getName] + 1,
    }));
  };

  render() {
    const stateValues = Object.values(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackButtons
            options={this.state}
            onLeaveFeedback={this.GetFeedback}
          ></FeedbackButtons>
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback(stateValues) > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(stateValues)}
            ></Statistics>
          ) : (
            <Notifications message={"No feedback given"}></Notifications>
          )}
        </Section>
      </div>
    );
  }
}
