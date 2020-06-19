import checkPropTypes from 'check-prop-types';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {rootReducer} from "../redux/store";

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Throw error if conformingProps do not pass propTypes validation.
 * @param {React.Component} component - Component to check props against.
 * @param {object} conformingProps - Props we expect to conform to defined propTypes.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}
