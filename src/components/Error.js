import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { cleanWeather } from "../redux/weatherDuck";

const Error = ({ error, cleanWeather }) => {
  return error ? (
    <article className="container text-center" data-test="error-component">
      <section>
        <Alert variant="danger" onClose={cleanWeather} dismissible>
          <Alert.Link>Ops! Ocurrio un error</Alert.Link>
          <p>{error}</p>
        </Alert>
      </section>
    </article>
  ) : null;
};

const mapStateToProps = ({ weather }) => ({
  error: weather?.error,
});

export default connect(mapStateToProps, { cleanWeather })(Error);
