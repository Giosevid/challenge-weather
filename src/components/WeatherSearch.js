import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Button } from "react-bootstrap";
import SignupSchema from "../config/validationsForm";
import { getWeatherActions, cleanWeather } from "../redux/weatherDuck";

const WeatherSearch = ({ getWeatherActions, cleanWeather, cityName }) => {

  const cleanInput = (setFieldValue) => {
    setFieldValue("cityName", "");
    cleanWeather();
  };

  const onSubmit = ({ cityName, setErrors }) => getWeatherActions(cityName, setErrors);

  return (
    <article className="jumbotron text-center">
      <section className="container">
        <h1 className="jumbotron-heading">¡Busca tu ciudad!</h1>
        <p className="lead text-muted">
          Conoce toda la información del clima referente a tu ciudad en un solo
          lugar.
        </p>
        <Formik
          initialValues={{ cityName }}
          onSubmit={onSubmit}
          validationSchema={SignupSchema}
        >
          {({ setFieldValue }) => (
            <Form>
              <Field
                name="cityName"
                type="text"
                className="form-control text-center"
                placeholder="Ingresa tu ciudad"
              />
              <ErrorMessage name="cityName">{msg => <div className="text-danger">{msg}</div>}</ErrorMessage>
              <div className="wrap-button">
                <Button type="submit" variant="primary">
                  Consultar
                </Button>{" "}
                <Button
                  variant="light"
                  onClick={() => cleanInput(setFieldValue)}
                >
                  Limpiar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </article>
  );
};

WeatherSearch.propTypes = {
  getWeatherActions: PropTypes.func.isRequired,
  cleanWeather: PropTypes.func.isRequired,
  cityName: PropTypes.string
}

WeatherSearch.defaultProps = {
  cityName: ''
}

export const mapStateToProps = ({ weather }) => ({
  cityName: weather?.currentWeather?.name,
});

export default connect(mapStateToProps, { getWeatherActions, cleanWeather })(
  WeatherSearch
);
