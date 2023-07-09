import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spinner/Spinner"
import { useNavigate } from "react-router-dom"
import { addData , dltdata, updateData} from '../../components/context/ContextProvider';
import {usergetfunc,deletfunc} from "../../services/Apis";
import Alert from 'react-bootstrap/Alert';
import "./home.css"
import { toast } from 'react-toastify';
import Footer from '../../components/Footer/footer';


const Home = () => {

  const [userdata,setUserData] = useState([]);
  const [showspin,setShowSpin] = useState(true);
  const [search,setSearch] = useState("");
  const [status,setStatus] = useState("All");
  const [page,setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0);

  const { useradd, setUseradd } = useContext(addData);
  
  const {update,setUpdate} = useContext(updateData);
  const {deletedata, setDLtdata} = useContext(dltdata);

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/register")
  }

  // get user
  const userGet = async()=>{
    const response = await usergetfunc(search,status,page);
    if(response.status === 200){
      setUserData(response.data.usersdata);
      setPageCount(response.data.Pagination.pageCount)
    }else{
      console.log("error for get user data")
    }
  }

  // user delete
  const deleteUser = async(id)=>{
    const response = await deletfunc(id);
    if(response.status === 200){
      userGet();
      setDLtdata(response.data)
    }else{
      toast.error("error")
    }
  }

  

  // pagination
  // handle prev btn
  const handlePrevious = ()=>{
    setPage(()=>{
      if(page === 1) return page;
      return page - 1
    })
  }

  // handle next btn
  const handleNext = ()=>{
    setPage(()=>{
      if(page === pageCount) return page;
      return page + 1
    })
  }

  useEffect(()=>{
    userGet();
    setTimeout(()=>{
        setShowSpin(false)
    },1200)
  },[search,status,page])

  return (
    <>
    {
      useradd ?  <Alert variant="success" onClose={() => setUseradd("")} dismissible>{useradd.fname.toUpperCase()} Succesfully Added</Alert>:""
    }

    {
      update ? <Alert variant="primary" onClose={() => setUpdate("")} dismissible>{update.fname.toUpperCase()} Succesfully Update</Alert>:""
    }

    {
      deletedata ? <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>{deletedata.fname.toUpperCase()} Succesfully Delete</Alert>:""
    }

      <div className="container">
        <div className="main_div">
          {/* search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e)=>setSearch(e.target.value)}
                />
                <Button variant="success" className='search_btn'>Search</Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}> <i class="fa-solid fa-plus"></i>&nbsp; Add Rider</Button>
            </div>
          </div>

          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            
            {/* filter by status */}
            <div className="filter_status">
              <div className="status">
                <h3 style={{color:"white"}}>Filter Riders By Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap" style={{color:"white",fontSize:"18px"}}>
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="status"
                    value={"All"}
                    onChange={(e)=>setStatus(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name="status"
                    value={"Active"}
                    onChange={(e)=>setStatus(e.target.value)}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`InActive`}
                    name="status"
                    value={"InActive"}
                    onChange={(e)=>setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          showspin ? <Spiner /> : <Tables
                                    userdata={userdata}
                                    deleteUser={deleteUser}
                                    userGet={userGet}
                                    handlePrevious={handlePrevious}
                                    handleNext={handleNext}
                                    page={page}
                                    pageCount={pageCount}
                                    setPage={setPage}
                                  />
        }

      </div>
      <Footer/>
    </>
  )
}

export default Home