import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys, deleteSurvey } from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  surveyDelete(id) {
    this.props.deleteSurvey(id)
  }

  renderSurveys() {
    console.log(this.props.surveys)
    return this.props.surveys.sort((a, b) => new Date(b.dateSent) - new Date(a.dateSent))
      .map(survey => {
        return (
          <div key={survey._id} className="card blue-grey lighten-1 white-text">
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action" style={{padding: '20px 24px'}}>
              <a href="!#">YES: {survey.yes}</a>
              <a href="!#">NO: {survey.no}</a>
              <button className="right btn-flat red white-text"
                onClick={() => {this.surveyDelete(survey._id)}}>
                Delete
              </button>
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

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList)