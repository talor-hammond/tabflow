// Notes:
// -- Wire-framesss
// -- Get it functioning w just one workflow
// -- Let users add different workflows
// -- Give user ability to add a tab to a workflow from the page they are on within the extension
// -- Initiate multiple workflows in different windows, or tabs in different windows per one workflow
// -- Authentication and persistence of workflow data
// -- Have the pop-up display when a user opens Chrome for the first time

import React, { Component } from 'react'
import './index.css'

// Components:
import PopOut from './components/PopOut'

class App extends Component {
  render () {
    return (
      <PopOut />
    )
  }
}

export default App
