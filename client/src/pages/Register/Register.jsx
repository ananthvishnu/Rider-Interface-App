import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Rider from "../../Assets/Rider.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './register.css'


const Register = () => {

  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    email: "",
    position: "",
    gender: "",
    nric: "",
  });


  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  //Status Options
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

  //setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  };

  //Status set
  const setStatusValue = (e) => {
    setStatus(e.value)
  };

  //profile set
  const setProfile = (e) => {
    setImage(e.target.files[0])
  };

  //submit userdata
  const submitUserData = (e) => {
    e.preventDefault();

    const {
      id,
      name,
      email,
      position,
      gender,
      nric,
    } = inputData

    if (id === "") {
      toast.error("Id is Required !");
    } else if (name === "") {
      toast.error("Name is Required !")
    } else if (email === "") {
      toast.error("Email is Required !")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    } else if (position === "") {
      toast.error("Position is Required !")
    } else if (gender === "") {
      toast.error("Gender is Required !")
    } else if (nric === "") {
      toast.error("NRIC is Required !")
    } else if (status === "") {
      toast.error("Status is required !")
    } else if (image === "") {
      toast.error("Profile is required !")
    } else {
      toast.success("Registration Succesfully done")
    }

  }

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }
  }, [image])



  return (
    <>
      <div className="container">
        <h2 className='text-center mt-1'>Register Rider Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className='profile_div text-center'>
            <img src={preview ? preview : Rider} alt="User" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" name='id' value={inputData.id} onChange={setInputValue} placeholder="Rider ID" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' value={inputData.name} onChange={setInputValue} placeholder="Rider Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={inputData.email} onChange={setInputValue} placeholder="Rider email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" name='position' value={inputData.position} onChange={setInputValue} placeholder="Enter Position" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Select
                  options={options}
                  onChange={setStatusValue}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>NRIC</Form.Label>
                <Form.Control type="text" name='nric' value={inputData.nric} onChange={setInputValue} placeholder="Enter NRIC" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder="Select Your Profile" />
              </Form.Group>


              <Button variant="primary" type="submit" onClick={submitUserData}>
                Submit
              </Button>
            </Row>
          </Form>

        </Card>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  )
}

export default Register