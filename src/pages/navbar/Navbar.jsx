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
            className={`${classes.buttonStyle} ${
              pathname === "/dashboard" ? classes.activeButtonStyle : null
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
            className={`${classes.buttonStyle} ${
              checkSupportsRoute() ? classes.activeButtonStyle : null
            }`}
            startIcon={<SupportAgentOutlinedIcon />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Supports
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/request-ticket" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Request ticket</div>
            </Link>
            <Link to="/ticket-details" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Ticket details</div>
            </Link>
            <Link to="/service-history" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Service history</div>
            </Link>
            <Link to="/incident-list" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Incident list</div>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.buttonStyle} ${
              checkUserRoute() ? classes.activeButtonStyle : null
            }`}
            startIcon={<GroupsOutlinedIcon />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Users
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/user-list" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>User list</div>
            </Link>
            <Link to="/profile-creation" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Profile creation</div>
            </Link>
            <Link to="/user-access-control" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>User access control</div>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.buttonStyle} ${
              checkConfigurationRoute() ? classes.activeButtonStyle : null
            }`}
            startIcon={<ApiOutlinedIcon />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Configuration
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/country" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Country</div>
            </Link>
            <Link to="/role" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Role</div>
            </Link>
            <Link to="/department" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Department</div>
            </Link>
            <Link to="/category" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Category</div>
            </Link>
            <Link to="/quick-list" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Quick list</div>
            </Link>
            <Link to="/urgency" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Urgency</div>
            </Link>
            <Link to="/company" className={styles.nav_item}>
              <div className={styles.left_Icon}>
                <AcUnitOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
              <div>Company</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
