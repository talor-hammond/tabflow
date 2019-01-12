// Notes:
// -- Get it functioning w just one workflow
// -- Let users add different workflows
// -- Give user ability to add a tab to a workflow from the page they are on within the extension
// -- Initiate multiple workflows in different windows, or tabs in different windows per one workflow
// -- Authentication and persistence of workflow data

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      // An array of workflows (this might be better suited as an object), users can add
      // an array of tab objects (with 'pinned', 'urls' set)
      workflows: []
    }
  }

  componentDidMount () {
    console.log(window.chrome.tabs)
  }

  render () {
    return (
      <div style={{ width: 500, height: 800 }}>
        <h1>tabflow</h1>
        <hr />
        <h2>Pre-define the tabs you want for different work-flows.</h2>
      </div>
    )
  }
}

export default App
