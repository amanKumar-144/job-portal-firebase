import React from 'react'
import {Box,Grid,Typography,Button} from '@material-ui/core';
const CourseHeader = (props) => {
  return (
    <Box py={10} bgcolor="secondary.main" color="white">
      <Grid container justifyContent="center">
        <Grid item xs={10}>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3">
              Add Courses
            </Typography>
            <Button 
              onClick={props.openNewJobModal}
              variant="contained" 
              color="primary" 
              disableElevation
            >
              Post a Course
            </Button>
          </Box>
          
        </Grid>
      </Grid>
    </Box>
  )
}

export default CourseHeader

