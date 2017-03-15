import React from 'react';

import Project from './Project.js';
import projects from './data/Projects.js'

import './App.css';

const App = React.createClass({
    getInitialState: function() {
        return ({
            projects: projects,
            answers: [],
        })
    },

    calculateScore: function() {
        const answers = this.state.answers
        let score = 0;

        for (let i = 0; i < answers.length; i++) {
            if ( answers[i] === "like" ) {
                score += 1
            }
        }

        return( score );
    },

    answerQuestion: function(answerIndex, answer) {
        return () => {
            this.setState(({answers}, _props) => {
                let newAnswers = answers;
                newAnswers[answerIndex] = answer;

                return( newAnswers );
            });
        }
    },

    projectIsShowing: function(questionIndex) {
        if (questionIndex === 0) {
            // always show the first one
            return( true )
        } else {
            // otherwise, show if the previous answer exists
            const previousQuestionAnswer = this.state.answers[questionIndex - 1];
            return( typeof previousQuestionAnswer !== "undefined" )
        }
    },

    renderProjects: function() {
        const projects = this.state.projects
        const answers = this.state.answers

        let projectComponents = [];

        for (let i = 0; i < projects.length; i++) {
            let project = projects[i];
            let isShowing = this.projectIsShowing(i)
            let answer = answers[i]

            projectComponents[i] =
                <Project
                    project={project}
                    answerQuestion={this.answerQuestion}
                    index={i}
                    isShowing={isShowing}
                    answer={answer}
                    key={"key" + i}
                />
        }

        return( projectComponents )
    },

    renderScore: function() {
        const answers = this.state.answers;
        const projects = this.state.projects;

        if (answers.length === projects.length) {
            return (
                <h1>You scored: {this.calculateScore()}/{projects.length}</h1>
            )
        } else {
            return ( null )
        }
    },

    render() {
        return (
            <div className="App" >
                <h1>Ben Designed This...</h1>

                <div className="App-projects">
                    { this.renderProjects() }
                </div>

                <div className="App-score">
                    { this.renderScore() }
                </div>
            </div>
        );
    },
});

 export default App;
