import React, { Component } from 'react'
import { Avatar, Container, CssBaseline, Grid, MenuItem, Paper, TextField, Typography } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined'

class ScheduleNew extends Component {
    constructor(props) {
        super(props);
        this.setState({
            full_name : ''
            , email_address : ''
            , schedule_date : ''
            , course_section : ''
            , request_description : ''
        });   
    }

    render() {
        return (
            <Container component='main' maxwith='xs'>
                <CssBaseline />
                <div className='paper'>
                    <Avatar className='avatar'>
                        <CalendarTodayOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Schedule Office Hours
                    </Typography>
                    <form className='form' noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    autoComplete='full_name'
                                    name='full_name'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='full_name'
                                    label='Full Name'
                                    placeholder='e.g. Saul Hudson'
                                    autoFocus />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='select'
                                    label='Current Course and Section'
                                    name='course_section'
                                    select>
                                        <MenuItem value='10'>IST359 M006</MenuItem>
                                        <MenuItem value='10'>IST659 M400</MenuItem>
                                        <MenuItem value='10'>IST659 M401</MenuItem>
                                        <MenuItem value='10'>IST659 M402</MenuItem>
                                        <MenuItem value='10'>IST722 M400</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='datetime-local'
                                    label='Date and Time'
                                    name='schedule_date'
                                    type='datetime-local'
                                    InputLabelProps={{
                                        shrink : true
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default ScheduleNew;