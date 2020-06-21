import React from "react";
import { shallow } from "enzyme";
import WeatherSearch, { mapStateToProps } from "./WeatherSearch";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [];
let mockStore,
  initialState = { currentWeather: "" };

const setup = () => {
  return shallow(<WeatherSearch store={mockStore(initialState)} />);
};

describe("testing compoenent WeatherSearch", () => {
  beforeEach(() => {
    mockStore = configureStore(middlewares);
  });
  test("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
