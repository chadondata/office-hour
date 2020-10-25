import { Link, Typography, makeStyles, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import React, { Component } from 'react'
import ScheduleOfficeHours from './components/ScheduleOfficeHours'
import NavBar from './components/NavBar'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette : {
    primary : {
      main : blue[900]
    },
    secondary : {
      main : '#f06600'
    }
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/chadondata/">
        Chad Harper
      </Link>{' '}
      { new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <p></p>
          {ScheduleOfficeHours()}
          <p></p>
          {Copyright()}
        </ThemeProvider>
      </div>
    )
  }
}
