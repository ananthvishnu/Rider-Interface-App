import React from 'react'
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card";
import Dropdown from 'react-bootstrap/Dropdown';
import Rider from "../../Assets/Rider.png"

import "./table.css"
const Tables = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className='align-align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>NRIC</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>Vishnu</td>
                    <td>vishnu@gmail.com</td>
                    <td>developer</td>
                    <td>23v</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                          <Badge bg='primary'>Active <i class="fa-solid fa-angle-down"></i> </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Active</Dropdown.Item>
                          <Dropdown.Item >InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src={Rider} alt="" />
                    </td>
                    <td>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle variant="light" className='action' id="dropdown-basic">
                          <Badge bg='primary'><i class="fa-solid fa-ellipsis-vertical"></i></Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >
                            <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>Vishnu</td>
                    <td>vishnu@gmail.com</td>
                    <td>developer</td>
                    <td>23v</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                          <Badge bg='primary'>Active <i class="fa-solid fa-angle-down"></i> </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Active</Dropdown.Item>
                          <Dropdown.Item >InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src={Rider} alt="" />
                    </td>
                    <td>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle variant="light" className='action' id="dropdown-basic">
                          <Badge bg='primary'><i class="fa-solid fa-ellipsis-vertical"></i></Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >
                            <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                          </Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>

    </>
  )
}

export default Tables