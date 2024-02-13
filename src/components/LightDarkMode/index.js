// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isdarkMode: true}

  onClickButton = () => {
    this.setState(prevState => {
      console.log(`prevState mode ${!prevState.isChange}`)
      return {isChange: !prevState.isChange}
    })
  }

  render() {
    const {isDarkMode} = this.state
    const classMode = isDarkMode ? 'Dark-mode' : 'Light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`content ${classMode}`}>
          <h1>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
