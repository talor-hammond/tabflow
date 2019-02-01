import React, { Component } from 'react'

class PopOut extends Component <{}> {
  componentDidMount () {
    // const tab = {
    //   // windowId: The window in which to create the new tab. Defaults to the current window.
    //   // index: The position the tab should take in the window. The provided value is clamped to between zero and the number of tabs in the window.,
    //   url: 'https://developer.chrome.com/extensions/tabs#method-create',
    //   active: true,
    //   pinned: false
    // }

    // window.chrome.tabs.create(tab)
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

export default PopOut
