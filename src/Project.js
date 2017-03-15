import React from 'react';

import './Project.css'

const Project = React.createClass({
    maybeRenderAndThis: function() {
        const projectIndex = this.props.index;

        if ( projectIndex === 0 ) {
            return( null )
        } else {
            return(
                <h1>and this...</h1>
            )
        }
    },

    renderResponse: function(answer) {
        if ( answer === "like" ) {
            return(
                <h2>Thanks</h2>
            )
        } else if ( answer === "hate" ) {
            return(
                <h2>You're a jerk</h2>
            )
        } else {
            return( null )
        }
    },

    renderProject: function() {
        const project = this.props.project;
        const answerQuestion = this.props.answerQuestion;
        const projectIndex = this.props.index
        const answer = this.props.answer;

        return(
            <div className="Project">
                { this.maybeRenderAndThis() }

                <img src={project.src} alt={project.title} />

                <div className="Project-response">
                    { this.renderResponse(answer) }
                </div>

                <div className="Project-good-button" onClick={answerQuestion(projectIndex, "like")}>
                    I like it!
                </div>

                <div className="Project-bad-button" onClick={answerQuestion(projectIndex, "hate")}>
                    I hate it!
                </div>
            </div>
        )
    },

    render: function() {
        const isShowing = this.props.isShowing;

        if( isShowing ) {
            return( this.renderProject() )
        } else {
            return( null )
        }
    }
});

export default Project;
