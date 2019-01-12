// Notes:
// -- Get it functioning w just one workflow
// -- Let users add different workflows
// -- Give user ability to add a tab to a workflow from the page they are on within the extension
// -- Initiate multiple workflows in different windows, or tabs in different windows per one workflow
// -- Authentication and persistence of workflow data
// -- Have the pop-up display when a user opens Chrome for the first time

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
    const tab = {
      // index: 0,
      url: 'https://developer.chrome.com/extensions/tabs#method-create',
      active: true,
      pinned: false
    }

    window.chrome.tabs.create(tab)
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
