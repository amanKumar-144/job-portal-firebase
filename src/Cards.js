import React from 'react'
import './Cards.css'
import theme from "./theme"
import {Box,Grid,Typography,Button,makeStyles} from '@material-ui/core';
import { differenceInMinutes } from 'date-fns';

const useStyles = makeStyles((theme)=>({
    wrapper:{
        border:'1px solid #e8e8e8',
        cursor:"pointer",
        transition:"0.5s",
        "&:hover" :{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.5)",
            borderLeft:"6px solid #4D64E4"
        }
    },
    companyName : {
        fontSize:"13.5px",
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:"#fff"
    }
}));

const skills = ["C++","Python","Java","MySQL"]
const Cards = (props) => {
    const classes = useStyles(theme);
    return (
      <div className='training'>
        <div className='containElements'>
            <h1>Available Jobs</h1>
            <div className='card-container'>    
                {skills.map((skill,key)=>{
                    return(
                        <div className='card' key={key}>
                            <h3>-- Job Details --</h3>
                            <span className='bar'></span>
                            <p className='btc'>{props.title}</p>
                            <p>{props.companyName}</p>
                            <Grid className={classes.skillChip} key={skill} item>
                              {skill}
                            </Grid>
                        </div>
                    )})
                }  
            </div>
        </div>
      </div>
    )
}

export default Cards