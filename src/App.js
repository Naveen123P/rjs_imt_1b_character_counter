import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import CounterItem from './CounterItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    charactersList: [],
    charText: '',
  }

  onChangeCharacters = event => {
    this.setState({charText: event.target.value})
  }

  onClickAdd = () => {
    const {charText} = this.state
    if (charText.length > 0) {
      this.setState(prevState => ({
        charactersList: [
          ...prevState.charactersList,
          {id: uuidV4(), char: prevState.charText},
        ],
        charText: '',
      }))
    }
  }

  render() {
    const {charactersList, charText} = this.state
    return (
      <div className="white-bg">
        <div className="bg2">
          <div className="yellow-bg">
            <h1 className="gray-heading">
              Count the characters like a Boss...
              <div className="yellow2-bg">
                {charactersList.length === 0 ? (
                  <>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                      alt="no user inputs"
                      className="no-user-inputs-img"
                    />
                  </>
                ) : (
                  <ul>
                    {charactersList.map(each => (
                      <CounterItem key={each.id} details={each} />
                    ))}
                  </ul>
                )}
              </div>
            </h1>
          </div>
          <div className="gray-bg">
            <h1 className="yellow-heading">Character Counter</h1>
            <form className="form">
              <input
                type="text"
                value={charText}
                onChange={this.onChangeCharacters}
                placeholder="Enter the Characters here"
                className="input"
              />
              <button
                type="button"
                onClick={this.onClickAdd}
                className="add-button"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
