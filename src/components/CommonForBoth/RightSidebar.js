import React from "react"
import PropTypes from 'prop-types'
import { FormGroup } from "reactstrap"

import { connect } from "react-redux"
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
  showRightSidebarAction,
} from "../../store/actions"

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

import "../../components/CommonForBoth/rightbar.scss"
//Import images

//Import images
import bgimg1 from "../../assets/images/sidebar/img1.jpg";
import bgimg2 from "../../assets/images/sidebar/img2.jpg";
import bgimg3 from "../../assets/images/sidebar/img3.jpg";
import bgimg4 from "../../assets/images/sidebar/img4.jpg";
import layout1 from "../../assets/images/layouts/layout-1.jpg"
import layout2 from "../../assets/images/layouts/layout-2.jpg"
import layout3 from "../../assets/images/layouts/layout-3.jpg"

const RightSidebar = props => {
  const onCloseRightBar = () => {
    const { onClose } = props;
    if (onClose) {
      onClose();
    }
  }
  return (
    <React.Fragment>
      <SimpleBar style={{ height: "900px" }}>
        <div data-simplebar className="h-100">
          <div className="rightbar-title px-3 py-4">
            <Link
              to="#"
              onClick={e => {
                onCloseRightBar();
              }}
              className="right-bar-toggle float-end"
            >
              <i className="mdi mdi-close noti-icon" />
            </Link>
            <h5 className="m-0">Ayarlar</h5>
          </div>

          <hr className="my-0" />

          <div className="p-4">

            <div className="radio-toolbar">
              <span className="mb-2 d-block" id="radio-title">
                Üst menü
                </span>
              <input
                type="radio"
                id="radioThemeLight"
                name="radioTheme"
                value="light"
                checked={props.topbarTheme === "light"}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value)
                  }
                }}
              />
              <label htmlFor="radioThemeLight">Açık renk</label>
              {"   "}
              <input
                type="radio"
                id="radioThemeDark"
                name="radioTheme"
                value="dark"
                checked={props.topbarTheme === "dark"}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value)
                  }
                }}
              />
              <label htmlFor="radioThemeDark">Koyu renk</label>
              {"   "}
              {props.layoutType === "vertical" ? null : (
                <>
                  {" "}
                  <input
                    type="radio"
                    id="radioThemeColored"
                    name="radioTheme"
                    value="colored"
                    checked={props.topbarTheme === "colored"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeTopbarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="radioThemeColored">Renkli</label>{" "}
                </>
              )}
            </div>

            {props.layoutType === "vertical" ? (
              <React.Fragment>
                <hr className="mt-1" />
                <div className="radio-toolbar">
                  <span className="mb-2 d-block" id="radio-title">
                    Menü türü{" "}
                  </span>
                  <input
                    type="radio"
                    id="sidebarDefault"
                    name="sidebarType"
                    value="default"
                    checked={props.leftSideBarType === "default"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarType(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="sidebarDefault">Yatay</label>
                  {"   "}
                  <input
                    type="radio"
                    id="sidebarCompact"
                    name="sidebarType"
                    value="compact"
                    checked={props.leftSideBarType === "compact"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarType(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="sidebarCompact">Dikey</label>
                  {"   "}
                  <input
                    type="radio"
                    id="sidebarIcon"
                    name="sidebarType"
                    value="icon"
                    checked={props.leftSideBarType === "icon"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarType(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="sidebarIcon">Simge</label>
                </div>

                <hr className="mt-1" />

                <div className="radio-toolbar coloropt-radio">
                  <span className="mb-2 d-block" id="radio-title">
                    Renk seçenekleri
                    </span>
                  <input
                    type="radio"
                    id="leftsidebarThemelight"
                    name="leftsidebarTheme"
                    value="light"
                    checked={props.leftSideBarTheme === "light"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />

                  <label htmlFor="leftsidebarThemelight" className="bg-light rounded-circle wh-30"></label>
                  {"   "}
                  <input
                    type="radio"
                    id="leftsidebarThemedark"
                    name="leftsidebarTheme"
                    value="dark"
                    checked={props.leftSideBarTheme === "dark"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="leftsidebarThemedark" className="bg-dark rounded-circle wh-30"></label>
                  {"   "}
                  <input
                    type="radio"
                    id="leftsidebarThemewinter"
                    name="leftsidebarTheme"
                    value="winter"
                    checked={props.leftSideBarTheme === "winter"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="leftsidebarThemewinter" className="gradient-winter rounded-circle wh-30"></label>
                  {"   "}
                  <input
                    type="radio"
                    id="leftsidebarThemeladylip"
                    name="leftsidebarTheme"
                    value="ladylip"
                    checked={props.leftSideBarTheme === "ladylip"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="leftsidebarThemeladylip" className="gradient-lady-lip rounded-circle wh-30"></label>
                  {"   "}
                  <input
                    type="radio"
                    id="leftsidebarThemeplumplate"
                    name="leftsidebarTheme"
                    value="plumplate"
                    checked={props.leftSideBarTheme === "plumplate"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="leftsidebarThemeplumplate" className="gradient-plum-plate rounded-circle wh-30"></label>
                  {"   "}
                  <input
                    type="radio"
                    id="leftsidebarThemestrongbliss"
                    name="leftsidebarTheme"
                    value="strongbliss"
                    checked={props.leftSideBarTheme === "strongbliss"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="leftsidebarThemestrongbliss" className="gradient-strong-bliss rounded-circle wh-30"></label>
                  <input
                    type="radio"
                    id="leftsidebarThemesgreatwhale"
                    name="leftsidebarTheme"
                    value="greatwhale"
                    checked={props.leftSideBarTheme === "greatwhale"}
                    onChange={e => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="leftsidebarThemesgreatwhale" className="gradient-strong-great-whale rounded-circle wh-30"></label>
                </div>
       
                <hr className="mt-1" />
              </React.Fragment>
            ) : null}

            

            <h6 className="text-left">Tema seçenekleri</h6>

            <div className="mb-2">
              <Link
                to="//skote-v-light.react.themesbrand.com"
                target="_blank"
              >
                <img
                  src={layout1}
                  className="img-fluid img-thumbnail"
                  alt=""
                />
              </Link>
            </div>

            <div className="mb-2">
              <Link to="//skote-v-dark.react.themesbrand.com" target="_blank">
                <img
                  src={layout2}
                  className="img-fluid img-thumbnail"
                  alt=""
                />
              </Link>
            </div>

            <Link
              to="//1.envato.market/skotereact"
              className="btn btn-primary btn-block mt-3"
              target="_blank"
            >
              <i className="mdi mdi-cart ms-1" /> Satın al
              </Link>
          </div>
        </div>
      </SimpleBar>
    </React.Fragment>

  )
}

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarThemeImage: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  isPreloader: PropTypes.any,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarThemeImage: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
  onClose: PropTypes.func
}

const mapStateToProps = state => {
  return { ...state.Layout }
}

export default connect(mapStateToProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
  showRightSidebarAction,
})(RightSidebar)
