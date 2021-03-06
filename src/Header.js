import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import CustomerList from "./components/home/CustomerList";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const style = {
  display: "inline-block",
  margin: 10,
  textDecorationLine: "none",
  fontFamily: "RobotoCondensed",
  fontSize: 25,
  color: "white"
};

const Header = props => {
  let logLink = null;
  if (props.isAuthenticated)
    logLink = (
      <div style={{ float: "right" }}>
        <Link style={style} to="/logout">
          Logout
        </Link>
      </div>
    );
  else
    logLink = (
      <div style={{ float: "right" }}>
        <Link style={style} to="/login">
          Login
        </Link>
      </div>
    );

  return (
    <div>
      <div>
        <AppBar
          position="static"
          color="default"
          style={{
            background:
              "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => <CustomerList />}
            >
              <Link to="/" style={{ margin: 0 }}>
                <HomeIcon style={{ color: "white", marginTop: 5 }} />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              style={{ color: "white", width: "100%" }}
            >
              <div>
                <div style={{ float: "left" }}>
                  <Link to="/" style={style}>
                    Home
                  </Link>
                  <Link to="/database" style={style}>
                    Database
                  </Link>
                  <Link to="/calendar" style={style}>
                    Calendar
                  </Link>
                </div>
              </div>

              {logLink}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
