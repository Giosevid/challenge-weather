import React from 'react'
import {Card} from "react-bootstrap";

const Layout = ({title, children, image}) => {
  return(
    <section className="col-md-4 wrapper">
      <Card className="text-center wrap-card" >
        <Card.Header className="header-card" >
          <div className="wrap-title">
            <h4>{title}</h4>{' '}
            <img alt="icon" src={`http://openweathermap.org/img/w/${image}.png`} />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-left">
            {children}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Layout
