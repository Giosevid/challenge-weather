import React from "react";
import { shallow } from "enzyme";
import WeatherDetails from "./WeatherDetails";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [];
let mockStore, initialState;

const setup = () => {
  return shallow(<WeatherDetails store={mockStore(initialState)} />);
};

describe("Renders correctly WeatherDetails component", () => {
  beforeEach(() => {
    mockStore = configureStore(middlewares);
  });
  test("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
