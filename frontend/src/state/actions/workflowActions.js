export const ADD_WORKFLOW = 'ADD_WORKFLOW'

export function addWorkflow (workflow) {
  return {
    type: ADD_WORKFLOW,
    workflow
  }
}
