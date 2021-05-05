import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Select from "react-select"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"


// GRAPHQL
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    allPositions {
      id
      positionName
    }
  }
`;

const AnnouncementsCreate = () => {
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [annDate, setannDate] = useState(new Date())
  const [selectedGroup, setselectedGroup] = useState(null)

  // GRAPHQL
  const { loading, error, data } = useQuery(FEED_QUERY);

  const annDateChange = date => {
    setannDate(date)
  }

  const startDateChange = date => {
    setstartDate(date)
  }

  const endDateChange = date => {
    setendDate(date)
  }

  // Option group for position
  const optionGroup = [
    {
      label: "Ünvanlar",
      options: [
        { label: "Dr. Öğretim üyesi", value: "Dr. Öğretim Üyesi" },
        { label: "Doçent", value: "Doçent" },
        { label: "Profesör", value: "Profesör" }
      ]
    },
  ]

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
          <title>Yeni ilan | {window.$appname}</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="İlanlar" breadcrumbItem="Yeni ilan" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Yeni ilan</CardTitle>
                  <AvForm className="needs-validation">
                    
                    <FormGroup className="mb-4" row>
                      <Label className="col-form-label col-lg-2">
                        Resmi gazete
                      </Label>
                      <Col lg="10">
                        <Row>
                          <Col md={4} className="pr-0">
                            <DatePicker
                              className="form-control"
                              selected={annDate}
                              onChange={annDateChange}
                            />
                          </Col>
                          <Col md={4} className="pl-0">
                            {" "}
                            <AvField
                                name="rg_number"
                                //label="Required  "
                                placeholder="Sayı"
                                type="number"
                                errorMessage="Resmi gazetenin sayısı"
                                validate={{ required: { value: true } }}
                            />
                          </Col>
                          <Col md={4} className="pl-0">
                            {" "}
                            <AvField
                                name="rg_url"
                                //label="Required  "
                                placeholder="URL"
                                type="url"
                                errorMessage="İlan linki"
                                validate={{ required: { value: true } }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>

                    <FormGroup className="mb-4" row>
                      <Label className="col-form-label col-lg-2">
                        Kurum
                      </Label>
                      <Col lg="10">
                        <Row>
                        <Col md={4} className="pl-0">
                            {" "}
                            <Select
                                value={selectedGroup}
                                placeholder="Üniversite seçiniz"
                                onChange={() => {
                                handleSelectGroup()
                                }}
                                options={optionGroup}
                                classNamePrefix="select2-selection"
                            />
                          </Col>
                          <Col md={4} className="pl-0">
                            {" "}
                            <Select
                                value={selectedGroup}
                                placeholder="Fakülte seçiniz"
                                onChange={() => {
                                handleSelectGroup()
                                }}
                                options={optionGroup}
                                classNamePrefix="select2-selection"
                            />
                          </Col>
                          <Col md={4} className="pl-0">
                            {" "}
                            <Select
                                value={selectedGroup}
                                placeholder="Bölüm seçiniz"
                                onChange={() => {
                                handleSelectGroup()
                                }}
                                options={optionGroup}
                                classNamePrefix="select2-selection"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                    
                    <FormGroup className="mb-4" row>
                      <Label className="col-form-label col-lg-2">
                        Pozisyon
                      </Label>
                      <Col lg="10">
                        <Row>
                          <Col md={4} className="pl-0">
                            {" "}

                            --  graphql --
                            {error ? error.message : 'error yok!'}
                           
                            { 
                            data && data.allPositions && 
                            data.allPositions.map(({ id, positionName }) => (
                              <p className="movie-card-name">{positionName}</p>
                                )
                            )}

                            <Select
                                value={selectedGroup}
                                placeholder="Ünvan seçiniz"
                                onChange={() => {
                                handleSelectGroup()
                                }}
                                options={optionGroup}
                                classNamePrefix="select2-selection"
                            />
                          </Col>
                          <Col md={4} className="pl-0">
                            {" "}
                            <AvField
                                name="amount"
                                //label="Required  "
                                placeholder="Kişi sayısı"
                                type="number"
                                value={1}
                                errorMessage="Kişi sayısı"
                                validate={{ required: { value: true } }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>

                    <FormGroup className="mb-4" row>
                      <Label
                        htmlFor="projectdesc"
                        className="col-form-label col-lg-2"
                      >
                        Ek şartlar
                      </Label>
                      <Col lg="10">
                        <textarea
                          className="form-control"
                          id="terms"
                          rows="3"
                          placeholder="Ek şartlar..."
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="mb-4" row>
                      <Label className="col-form-label col-lg-2">
                        Başvuru tarihleri
                      </Label>
                      <Col lg="10">
                        <Row>
                          <Col md={6} className="pr-0">
                            <DatePicker
                              className="form-control"
                              selected={startDate}
                              onChange={startDateChange}
                            />
                          </Col>
                          <Col md={6} className="pl-0">
                            {" "}
                            <DatePicker
                              className="form-control"
                              selected={endDate}
                              onChange={endDateChange}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>

                  </AvForm>

                 <Row className="justify-content-end">
                    <Col lg="10">
                      <Button type="submit" color="primary">
                        Create Project
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AnnouncementsCreate
