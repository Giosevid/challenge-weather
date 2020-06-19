import {storeFactory} from "../test/testUtils";
import { getWeatherActions } from "./weatherDuck";
import moxios from 'moxios'

describe('getWeatherActions actions distpacher', () => {
  const weather = {}
  let store;
  beforeEach(() => {
    store = storeFactory(weather)
  })
  test('update correctly state with empty nameCity', () => {
    store.dispatch(getWeatherActions())
    const expectedState =  {
        data: {},
        fetching: true,
    }
    const newState = store.getState()
    expect(newState).toEqual(expectedState)
  })
  test('update correctly state with full nameCity', () => {
    store.dispatch(getWeatherActions("Argentina"))
    const expectedState =  {
        data: {},
        fetching: true,
    }
    const newState = store.getState()
    expect(newState).toEqual(expectedState)
  })
})

describe('get weather by name city', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('adds response to word to state', () => {
    const word = 'Argentina'
    const store = storeFactory()
    moxios.wait(() => {
      request.respondWith({
        status: 200,
        respnse: word
      })
      return store.dispatch(getWeatherActions())
        .then(() => {
          const newState = store.getState()
          expect(newState.word).toBe(word)
        })
    })
  })
})
