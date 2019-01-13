// action.type(s):
import {
  ADD_WORKFLOW
} from '../actions/workflowActions'

let initialState = {
  workflows: []
}

export default function workflows (state = initialState, action) {
  switch (action.type) {
    case ADD_WORKFLOW:
      return [...state, action.workflow]
    default:
      return state
  }
}
