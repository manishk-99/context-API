import React, {Fragment} from 'react'
import Provider from './provider'
import Context from './context'

const Agents = () => (
  <AgentsOne />
)

const AgentsOne = () => (
  <AgentsTwo />
)

const AgentsTwo = () => (
  <AgentsBonds />
)

const AgentsBonds = () => {
  return (
    <Context.Consumer>
      {context => (
          <Fragment>
            <h3>Mission Information</h3>
            <p>Mission Name: {context.data.mname}</p>
            <p>Mission Status: {context.data.accept}</p>
            <button onClick={context.IsMissionAccepted}>Choose to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}


const App = () => {
  return (
    <div>
      <h1>Context API</h1>
        <Provider>
          <Agents />
        </Provider>
    </div>
  )
}

export default App;