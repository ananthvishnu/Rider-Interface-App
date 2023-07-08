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
        <div className="text-center">
          <h3>Vishnurathan</h3>
          <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- <span>vishnu@gmail.com</span> </h4>
          <h5><i className="fa-solid fa-mobile"></i>&nbsp;:- <span>id</span> </h5>
          <h4><i className="fa-solid fa-person"></i>&nbsp;:- <span>gender</span> </h4>
          <h4><i className="fa-solid fa-location-pin location"></i>&nbsp;:- <span>position</span> </h4>
          <h4>Status&nbsp;:- <span>status</span> </h4>
          <h5><i className="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Created&nbsp;:- <span>create</span> </h5>
          <h5> <i className="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Updated&nbsp;:- <span>updated</span> </h5>

        </div>


      </Card>
    </div>


  )
}

export default Profile