import { _ } from 'lodash'

const reducers = {}

/**
 * This runs reducers in the order in which they were queued
 */
const ReducerRunner =
      (state, action) => {
        if (reducers.hasOwnProperty(action.type)) {
          return _.merge(
            ...(reducers[action.type]).map(r => r(state,action))
          )
        }
        return state
      }

ReducerRunner.addReducer =
  (action, fn) => reducers[action] = _.concat([], reducers[action], fn)

ReducerRunner.dumpReducers = () => reducers

export default ReducerRunner;