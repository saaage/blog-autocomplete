import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from 'App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    font-size: 16px;
    font-family: Alegreya, serif;
  }
`

if (module.hot) {
  module.hot.accept(App)
}
