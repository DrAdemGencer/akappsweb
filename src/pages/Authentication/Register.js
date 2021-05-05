import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import profileImg from "../../assets/images/profile-img.png"
import logoImg from "../../assets/images/logo.svg"

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
  }, []);

  return (
    <React.Fragment>
     <MetaTags>
          <title>Kayıt ol | {window.$appname}</title>
        </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Ücretsiz kayıt</h5>
                        <p>Hemen bir AKAPPS hesabı oluşturabilirsiniz.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Kullanıcı başarıyla oluşturuldu.
                        </Alert>
                      ) : null}
            
                      {props.registrationError &&
                      props.registrationError ? (
                        <Alert color="danger">
                          {props.registrationError}
                        </Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Eposta"
                          className="form-control"
                          placeholder="Eposta adresi giriniz"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="username"
                          label="Kullanıcı adı"
                          type="text"
                          required
                          placeholder="Kullanıcı adı giriniz"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Şifre"
                          type="password"
                          required
                          placeholder="Şifre giriniz"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Kayıt ol
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Kayıt olarak {" "}
                          <Link to="#" className="text-primary">
                            kullanım koşullarını
                          </Link> kabul etmiş olursunuz.
                        </p>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Zaten bir hesabınız var mı ?{" "}
                  <Link to="/login" className="font-weight-medium text-primary">
                    {" "}
                    Giriş yapın
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} AKAPPS. Designed {" "}
                  <i className="mdi mdi-heart text-danger" /> by GNCR
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
