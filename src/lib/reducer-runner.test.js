import { _ } from 'lodash'
import ReducerRunner from './reducer-runner'

it('single-action', () => {
  ReducerRunner.addReducer('test1', (state,action) => {
    return Object.assign(
      {},
      state,
      {counter: (state.counter||0) + 1}
    )
  })
  console.log(ReducerRunner.dumpReducers())
  expect(ReducerRunner({},'test1')).toEqual({counter:1})
})