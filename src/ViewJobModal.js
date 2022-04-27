import React from 'react'
import theme from './theme'
import {
    Box,
    Grid,
    Button,
    IconButton,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    makeStyles,
    DialogActions
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close';
import {format} from 'date-fns';

const useStyles = makeStyles((theme)=>({
    info:{
        '& > *':{
            margin:'4px'
        },
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        border:`1px solid ${theme.palette.secondary.main} `,
        color:theme.palette.secondary.main,
        cursor:"pointer",
        backgroundColor:theme.palette.secondary.main,
        color:"#fff" 
        
    }
}));

const ViewJobModal = (props) => {
  const classes = useStyles();
  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                {props.job.role}@{props.job.companyName}
                <IconButton onClick={props.closeModal}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>


        <DialogContent>
            <Box>
                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Posted on:</Typography>
                    <Typography variant="caption">
                        {props.job.dateOfPost && format(props.job.dateOfPost,"dd/MMM/yyyy HH:MM")}
                    </Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Job Work:</Typography>
                    <Typography variant="caption">{props.job.jobWork}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Job Location:</Typography>
                    <Typography variant="caption">{props.job.location}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Job Requirements:</Typography>
                    <Typography variant="caption">{props.job.requirements}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Stipend:</Typography>
                    <Typography variant="caption">{props.job.stipend} for {props.job.jobType}</Typography>
                </Box>

                

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Company Link:</Typography>
                    <Typography variant="caption">{props.job.companyLink}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Employee Size:</Typography>
                    <Typography variant="caption">{props.job.employeeSize}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant="body2">Years of Experience:</Typography>
                    <Typography variant="caption">{props.job.yearsOfExperience}</Typography>
                </Box>
                
                <Box ml={0.5}>
                    <Typography variant="body2">Skills:</Typography>
                    <Grid container alignItems="center">
                        {props.job.skills &&
                            props.job.skills.map((skill) => (
                                <Grid item key={skill} className={classes.skillChip}>
                                    {skill}
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                
            </Box>
        </DialogContent>

        <DialogActions>
            <Button 
                variant="outlined" 
                component="a"
                href={props.job.careersPageLink}
                target="_blank"
            >
                Apply
            </Button>
        </DialogActions>
    </Dialog>

  )
}

export default ViewJobModal