import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import axios from "axios";
import Button from "@mui/material/Button";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// import RefreshToken from "../../services/RefreshToken";
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: "#6e6b7b !important",
    textTransform: "none !important",
    padding: " 7px 20px !important",
    fontSize: "1rem",
    fontFamily: "'Montserrat', Helvetica, Arial, serif !important",
    letterSpacing: "0.01rem !important",
    fontWeight: "400 !important",
  },
  activeButtonStyle: {
    background: "rgba(158,31,96,1) !important",
    color: "#fff !important",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  let pathname = useLocation().pathname;
  console.log("pathname", pathname);

  const [active, setActive] = useState("Dashboard");

  const checkSupportsRoute = () => {
    const userPathname = [
      "/request-ticket",
      "/ticket-details",
      "/service-history",
      "/incident-list",
    ];
    if (userPathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };
  const checkUserRoute = () => {
    const userPathname = [
      "/user-list",
      "/profile-creation",
      "/user-access-control",
    ];
    if (userPathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };
  const checkConfigurationRoute = () => {
    const userPathname = [
      "/country",
      "/role",
      "/department",
      "/category",
      "/quick-list",
      "/urgency",
      "/company",
    ];
    if (userPathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${styles.button_style} ${
              pathname === "/dashboard" ? styles.active_button_style : null
            }`}
            startIcon={<DashboardOutlinedIcon />}
            component={Link}
            to="/dashboard"
          >
            Dashboard
          </Button>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${styles.button_style} ${
              checkSupportsRoute() ? styles.active_button_style : null
            }`}
            startIcon={<SupportAgentOutlinedIcon />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Supports
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/request-ticket" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>Request ticket</div>
              </section>
            </Link>
            <Link to="/ticket-details" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>Ticket details</div>
              </section>
            </Link>
            <Link to="/service-history" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Service history
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/incident-list" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Incident list
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>
              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Demo 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>demo 2</div>
                </Link>
              </section>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${styles.button_style} ${
              checkUserRoute() ? styles.active_button_style : null
            }`}
            startIcon={<GroupsOutlinedIcon />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Users
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/user-list" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  User list
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/profile-creation" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Profile creation
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/user-access-control" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  User access control
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${styles.button_style} ${
              checkConfigurationRoute() ? styles.active_button_style : null
            }`}
            startIcon={<ApiOutlinedIcon />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Configuration
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/country" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Counery
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/role" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Role
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/department" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Department
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/category" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Category
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/quick-list" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Quick list
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/urgency" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Urgency
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/company" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Copmany
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
