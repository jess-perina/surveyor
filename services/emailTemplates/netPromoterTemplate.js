const keys = require('../../config/keys')

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>How likely are you to recomend us to a friend or family member?</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/1">1</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/2">2</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/3">3</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/4">4</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/5">5</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/6">6</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/7">7</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/8">8</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/9">9</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/10">10</a>
          </div>
        </div>
      </body>
    </html>
  `
}