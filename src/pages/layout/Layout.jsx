import React, { useState, useEffect, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import Visibility from "@mui/icons-material/Visibility";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LockResetIcon from "@mui/icons-material/LockReset";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AppsIcon from "@mui/icons-material/Apps";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { makeStyles } from "@mui/styles";
import Navigation from "../navigation/Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import { getDataWithToken } from "../../services/GetDataService";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import CircleIcon from "@mui/icons-material/Circle";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../navbar/Navbar";
const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
    color: "#858e9b",
  },
  menuItem: {
    marginBottom: "5px !important",
    padding: "6px 16px !important",

    "& span": {
      fontSize: "17px",
      fontWeight: "500 !important",
      [theme.breakpoints.down("xl")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "46px",
    },
    ["& .MuiSvgIcon-root"]: {
      position: "relative",
      top: "-2px",
      color: "#858e9b",
      fontSize: "24px",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    ["&.MuiListItemButton-root:hover"]: {
      color: "rgba(158,31,96,0.7) !important",
      background: "rgba(158,31,96,0.2) !important",
      borderRadius: "10px !important",
      ["& .MuiSvgIcon-root"]: {
        color: "rgba(158,31,96,0.7) !important",
      },
    },
  },

  menuItemActive: {
    color: "rgba(158,31,96,0.7) !important",
    background: "rgba(158,31,96,0.2) !important",
    borderRadius: "10px !important",
    ["& .MuiSvgIcon-root"]: {
      color: "rgba(158,31,96,0.7) !important",
    },
  },
  menuSubItem: {
    padding: "6px 16px !important",
    "& span": {
      fontSize: "17px",
      fontWeight: "500 !important",
      [theme.breakpoints.down("xl")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "15px",
    },
    ["& .MuiSvgIcon-root"]: {
      position: "relative",
      top: "-2px",
      color: "#858e9b",
      fontSize: "7px",
      [theme.breakpoints.down("md")]: {
        fontSize: "7px",
      },
    },
    ["&.MuiListItemButton-root:hover"]: {
      backgroundColor: "transparent !important",
      color: "rgba(158,31,96,0.7) !important",
      ["& .MuiSvgIcon-root"]: {
        color: "rgba(158,31,96,0.7) !important",
      },
    },
  },
  subMenuItemActive: {
    color: "rgba(158,31,96,0.7) !important",
    // background: "rgba(158,31,96,0.2) !important",
    // borderRadius: "10px !important",
    ["& .MuiSvgIcon-root"]: {
      color: "rgba(158,31,96,0.7) !important",
    },
  },
  // menuSubItem: {
  //   padding: "6px 32px 2px 38px !important",
  //   "& span": {
  //     fontSize: "16px",
  //     fontWeight: 500,
  //     [theme.breakpoints.down("xl")]: {
  //       fontSize: "12px",
  //     },
  //     [theme.breakpoints.down("md")]: {
  //       fontSize: "10px",
  //     },
  //   },
  //   ["& .MuiListItemIcon-root"]: {
  //     minWidth: "46px",
  //   },
  //   ["& .MuiSvgIcon-root"]: {
  //     color: "#858e9b",
  //     fontSize: "24px",
  //     [theme.breakpoints.down("md")]: {
  //       fontSize: "10px",
  //     },
  //   },
  // },

  MuiDrawer: {
    backgroundColor: "#fff !important",
    color: "#858e9b !important",
    // paddingRight: "7px",
    // paddingLeft: "7px",
  },
  logoStyle: {
    position: "relative",
    top: "8px",
    left: "-11px",
    cursor: "pointer",
    maxWidth: "155px",
  },
}));

const drawerWidth = 270;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   // background: "#fff !important",
//   // boxShadow: "none !important",
//   borderBottom: "1px solid #dddddd !important",
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   zIndex: `${theme.zIndex.drawer + 1} !important`,
//   background: "#fff !important",
//   boxShadow: "none !important",
//   ...(open && {
//     // background: "#fff !important",
//     // boxShadow: "none !important",
//     borderBottom: "1px solid #dddddd !important",
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "#fff !important",
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: "1px solid #dddddd !important",
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout() {
  const classes = useStyles();
  let navigate = useNavigate();
  let pathname = useLocation().pathname;
  console.log("pathname", pathname);

  const { login, tuso_admin_panel, logout } = useContext(AuthContext);
  console.log("tuso_admin_panel", tuso_admin_panel);

  const theme = useTheme();
  const [kycRequestOpen, setKycRequestOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [manageRolesOpen, setManageRolesOpen] = useState(false);
  const [manageAccessOpen, setManageAccessOpen] = useState(false);
  const [bankingLogOpen, setBankingLogOpen] = useState(false);

  const [openLoadingDialog, setOpenLoadingDialog] = useState(false);
  const time = parseInt(1000 * 60 * 120);

  const navigateRoutes = (routeName) => {
    navigate(routeName, { replace: true });
  };

  const fnLogout = () => {
    logout();
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
   
  

  const [open, setOpen] = useState(true);
  
  

   
  const withoutLayout = ["/", "/forgot-password", "/reset-password", "/verify"];
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 1000,
          paddingTop: "20px",
          background: "#f5f5f5",
        }}
      >
        <Navbar />
      </div>
      {/* <div style={{ width: "calc(100% - 4rem)", margin: "20px auto 0" }}>
        <Navigation />
      </div> */}
    </div>
  );
  
}
