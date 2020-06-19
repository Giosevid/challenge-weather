import React from 'react'
import { connect } from "react-redux"
import Layout from "../common/layout";
import Loader from 'react-loader-spinner'
import moment from 'moment'
import {convertKelvinToCelsius, removeDuplicates} from "../utils";

const WeatherDetails = ({ error, fetching, currentWeather, otherDays }) => {

const newWeather = otherDays.map(weatherElement => ({
  ...weatherElement,
  filterDate: moment(weatherElement.dt_txt, 'YYYY-MM-DD').format('DD')
}))

  const newWeathersArray = removeDuplicates(newWeather, 'filterDate')

  if (fetching) {
    return (
      <div className="container text-center">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    )
  }


  return ( !error ? (
    <div className="album" data-test="component-weather-detail">
    <article className="container">
      <article className="row">
        {newWeathersArray.map((weatherElemnt, idx) => {
          const {dt_txt, weather, main: {feels_like, temp, temp_max, temp_min, humidity}} = weatherElemnt
          return (
            <Layout key={idx} title={moment(dt_txt, 'YYYY-MM-DD').format('DD-MM-YYYY')} image={weather[0].icon}>
              Ciudad:  {currentWeather?.name}<br/>
              Temperatura: {convertKelvinToCelsius(temp)}ºC<br/>
              Sensación térmica: {convertKelvinToCelsius(feels_like)}ºC<br/>
              Temperatura máxima: {convertKelvinToCelsius(temp_max)}ºC<br/>
              Tempera mínima: {convertKelvinToCelsius(temp_min)}ºC<br/>
              Humedad: {humidity} %
            </Layout>
          )
        })}
      </article>
    </article>
  </div>) : null
  )
}

const mapStateToProps = ({ weather }) => ({
  currentWeather: weather?.currentWeather,
  otherDays: weather?.otherDays,
  error: weather?.error,
  fetching: weather?.fetching
})

export default connect(mapStateToProps, null) (WeatherDetails)
