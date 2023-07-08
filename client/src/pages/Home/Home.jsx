import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Spiner from "../../components/Spinner/Spinner"
import { useNavigate } from "react-router-dom";
import Tables from '../../components/Tables/Tables';
import './home.css'

const Home = () => {
  
  const [showSpin,setShowSpin] = useState(true);

  const navigate = useNavigate();


  const adduser = () => {
    navigate("/register")
  }

  useEffect(()=>{
    
    setTimeout(()=>{
        setShowSpin(false)
    },1200)
  },[])


  return (
    <>
      <div className="container">

        <div className="main_div">
          {/*search add btn*/}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className='search_btn'>Search</Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}><i class="fa-solid fa-plus"></i>&nbsp;Add User</Button>
            </div>
          </div>
          {/* export,gender,status*/}
          <div className="filer_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className='export_btn'>Export To CSV</Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Gender</h3>
                <div className="gender d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="gender"
                    value={"ALL"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    defaultChecked
                  />
                </div>
              </div>
            </div>
            {/*short by value*/}
            <div className="filter_newold">
              <h3>Short By Value</h3>
              <Dropdown className='text-center'>
                <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >New</Dropdown.Item>
                  <Dropdown.Item >Old</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/*filter by status*/}
            <div className="filter_status">
              <div className="status">
                <h3>Filter By Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="status"
                    value={"All"}
                    // onChange={(e)=>setStatus(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name="status"
                    value={"Active"}
                  // onChange={(e)=>setStatus(e.target.value)}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`InActive`}
                    name="status"
                    value={"InActive"}
                  // onChange={(e)=>setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        {showSpin ? <Spiner/> : <Tables/>}
      </div>
    </>
  )
}

export default Home