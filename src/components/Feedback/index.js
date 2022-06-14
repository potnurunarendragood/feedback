// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => this.setState({isFeedback: true})

  renderFeedbackQuestion() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-lists">
          {emojis.map(emoji => (
            <li>
              <button type="button" onClick={this.onClickEmoji}>
                <img
                  src={emoji.imgUrl}
                  type="button"
                  className="image"
                  alt={emoji}
                />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="image" />
        <h1 className="feedback-question">Thank You!</h1>
        <p className="emoji-name">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedback ? renderFeedbackQuestion() : renderThankYouScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
