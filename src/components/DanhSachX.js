import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Navbar, Form, DropdownButton, FormControl, Button, Dropdown, Container, Col, Row} from 'react-bootstrap'

const ColoredDivideLine = ({color}) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.2
        }}
    />
);


const DanhSachX = () => {
    return (
        <div>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand>
                            <Form inline>
                                <FormControl type="text" placeholder="Ngành, Nghề, Trường" className="mr-sm-2" />
                                <Button className="rounded-pill" variant="outline-light">Search</Button>
                                <Button variant="outline-light" className='danhsachXbtn rounded-pill btn-primary'>
                                    Login
                                </Button>
                                <Button variant="outline-light" className='danhsachXbtn rounded-pill btn-primary'>
                                    Register
                                </Button>
                            </Form>
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div>
                <Container className="danhsachXcontent">
                    <Row>
                        <Col></Col>
                        <Col md="auto">
                            <Form inline>
                                <FormControl type="text" placeholder="Ngành, Nghề, Trường" className="mr-sm-2" />
                                <Button className="rounded-pill btn btn-primary" variant="outline-light">Search</Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className="danhsachXcontent">
                        <Col></Col>
                        <Col md="auto">
                            Tags: 
                            <Button className="danhsachXtag rounded-pill btn btn-primary">Trường Đại học X</Button>
                            <Button className="danhsachXtag rounded-pill btn btn-primary">Công nghệ thông tin</Button>
                            <Button className="danhsachXtag rounded-pill btn btn-primary">Đại học Quốc gia</Button>
                            <Button className="danhsachXtag rounded-pill btn btn-primary">Thành phố Hồ Chí Minh</Button>
                        </Col>
                        <Col></Col>
                    </Row>

                    <ColoredDivideLine color="lightgray"/>

                    <Row className="danhsachXcontent">
                        <Col></Col>
                        <Col md="auto">
                            <DropdownButton id="dropdown-basic-button" variant="success" title="Chọn theo Ngành/ Nghề/ Trường">
                                <Dropdown.Item href="#/action-1">Ngành</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Nghề</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Trường</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col></Col>
                    </Row>

                    <ColoredDivideLine color="lightgray"/>

                    <Row className="danhsachXcontent">
                        
                        <Col></Col>
                        <Col md="auto">
                            <Row>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học X</Button>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học Y</Button>
                            </Row>
                            <Row>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học Z</Button>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học XYZ</Button>
                            </Row>
                            <Row>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học A</Button>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học B</Button>
                            </Row>
                            <Row>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học C</Button>
                                <Button className="danhsachXtarget btn btn-primary">Trường Đại học ABC</Button>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    
                </Container>
            </div>

            <div>

            </div>
        </div>
    )
}

export default DanhSachX;
