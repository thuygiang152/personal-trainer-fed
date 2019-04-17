import React, { Component } from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          position="static"
          color="default"
          style={{
            background:
              "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"
          }}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer">
              <HomeIcon style={{ color: "white" }} />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              style={{ color: "white" }}
            >
              Personal Training
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>Customer Database</h1>
        <CustomerList />
      </div>
    );
  }
}

export default App;
