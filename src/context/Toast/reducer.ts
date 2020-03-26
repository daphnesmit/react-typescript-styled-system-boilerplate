import { Toast } from './types'

interface ActionAdd {
  type: 'ADD'
  toast: Toast
}
interface ActionRemove {
  type: 'REMOVE'
  id: number
}

type Action = ActionAdd | ActionRemove
type State = Toast[]

export const reducer = (state: State, payload: Action) => {
  switch (payload.type) {
    case 'REMOVE':
      const newState = state.filter((t: Toast) => t.id !== payload.id)
      return newState
    case 'ADD':
      return [...state, payload.toast]
    default:
      return state
  }
}
