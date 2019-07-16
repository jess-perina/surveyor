import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} class="card blue-grey lighten-1 white-text">
          <div class="card-content">
            <span class="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div class="card-action">
            <a href="!#">YES: {survey.yes}</a>
            <a href="!#">NO: {survey.no}</a>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)