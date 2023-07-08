import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Rider from "../../Assets/Rider.png"

import './profile.css'

const Profile = () => {
  return (
    <div className='container'>
      <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>

          <Row>
            <div className="col">
              <div className="card-profile-stats d-flex justify-content-center">
                <img src={Rider} alt="" />
              </div>
            </div>
          </Row>
        </Card.Body>


      </Card>
    </div>


  )
}

export default Profile