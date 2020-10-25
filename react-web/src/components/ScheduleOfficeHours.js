import React from 'react'
import { Avatar, Container, CssBaseline, Grid, MenuItem, Paper, TextField, Typography, Button } from '@material-ui/core';
import EventAvailableIconOutlined from '@material-ui/icons/EventAvailableOutlined'

const ScheduleOfficeHours = () => {
    return (
        <Container component='main' maxWidth='sm' justify='center'>
            <Paper style={{ 
                padding : 8 
                , display : 'flex'
                , flexDirection : 'column'
                , alignItems : 'center'
            }} >
                <EventAvailableIconOutlined fontSize='large' color='secondary' />
                <Typography component='h1' variant='h5' style={{padding : 8}} >
                    Schedule Office Hours
                </Typography>
                <form className='form' noValidate>
                    <Grid container spacing={1}>
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
                                    <MenuItem value='20'>IST659 M400</MenuItem>
                                    <MenuItem value='30'>IST659 M401</MenuItem>
                                    <MenuItem value='40'>IST659 M402</MenuItem>
                                    <MenuItem value='50'>IST722 M400</MenuItem>
                                    <MenuItem value='999'>Other or N/A</MenuItem>
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
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                id='standard-multiline-static'
                                label='What would you like to chat about?'
                                name='meeting_description'
                                multiline
                                rows={5}
                            />
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={2} style={{alignItems : 'center'}}>
                            <Button variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={5}></Grid>
                    </Grid>
                </form>
                </Paper>
        </Container>
    )
}

export default ScheduleOfficeHours;