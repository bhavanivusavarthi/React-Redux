import React from 'react'
import {connect} from 'react-redux';
import { IncAction } from './Actions';
import{DecAction} from './Actions';

const App=({local_variable,IncAction,DecAction})=>{
  return(
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick ={() => IncAction(5)}>Increment</button>
        <button onClick ={ () =>DecAction (2)}>Decrement</button>
      </center>
    </div>
  )

}
const mapStateTpProps = state =>({
  local_variable :state
})
export default connect (mapStateTpProps,{IncAction,DecAction})(App);