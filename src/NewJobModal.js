import React,{ useState } from 'react'
import theme from './theme'
import {
    Box,
    Grid,
    Button,
    CircularProgress,
    IconButton,
    Typography,
    FilledInput,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    makeStyles,
    DialogActions
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme)=>({
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        border:`1px solid ${theme.palette.secondary.main} `,
        color:theme.palette.secondary.main,
        cursor:"pointer",
        '&:hover':{
            backgroundColor:theme.palette.secondary.main,
            color:"#fff" 
        },
    },
    included:{
        backgroundColor:theme.palette.secondary.main,
        color:"#fff" 
    }
  }));

  
const initState = {
    companyName:"",
    careersPageLink:"",
    jobWork:"",
    companyLink:"",
    location:"",
    skills:[],
    role:"",
    stipend:"",
    requirements:"2023 grad",
    employeeSize:"",
    yearsOfExperience:"",
    jobType:"Full time"
}

const NewJobModal = (props) => {
  const [loading,setLoading] = useState(false);
  const [jobDetails,setJobDetails] = useState(initState);

  const handleSubmit = async()=>{
    for(const field in jobDetails){
        if(typeof jobDetails[field] === 'string' && !jobDetails[field])
        {
            return console.log("Not validated");
        }
    }
    if(!jobDetails.skills.length)return console.log("Not validated");
    
    setLoading(true);
    await props.postJob(jobDetails);
    closeModal();
  }
  const closeModal = () =>{
    setJobDetails(initState);
    setLoading(false);
    props.closeNewJobModal();
  }
  const handleChange = (e) =>{
      e.persist();
      setJobDetails(oldState =>({
          ...oldState,
          [e.target.name]:e.target.value,
      }));
  };
  console.log(jobDetails);
  const addRemoveSkill = (skill)=>{
      jobDetails.skills.includes(skill)
      ?
      setJobDetails(oldState=>({
          ...oldState,
          skills:oldState.skills.filter((s) => s !== skill)
      }))
      //Remove
      :
      setJobDetails(oldState=>({...oldState,skills:oldState.skills.concat(skill)}))
      //Adding
      
  }

  const classes = useStyles(theme);
  const skills = ["Javascript","React.js","Node.js","Angular","Firebase","MongoDB","SQL","Bash","Kernel Programming","C++","Python","Java"];
  return (
    <Dialog open={props.newJobModal} fullWidth>

        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>


        <DialogContent>
            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="role"
                        value={jobDetails.role}
                        autoComplete="off"
                        placeholder="Job Role *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <Select 
                        onChange={handleChange}
                        name="jobType"
                        value={jobDetails.jobType}
                        fullWidth
                        disableUnderline 
                        variant="filled" 
                    >
                        <MenuItem value="Full time">Full time</MenuItem>
                        <MenuItem value="Part time">Part time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="companyName"
                        value={jobDetails.companyName}
                        autoComplete="off"
                        placeholder="Company Name *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="careersPageLink"
                        value={jobDetails.careersPageLink}
                        autoComplete="off"
                        placeholder="Careers Page Link *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="stipend"
                        value={jobDetails.stipend}
                        autoComplete="off"
                        placeholder="Stipend *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="employeeSize"
                        value={jobDetails.employeeSize}
                        autoComplete="off"
                        placeholder="Employee Size *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="yearsOfExperience"
                        value={jobDetails.yearsOfExperience}
                        autoComplete="off"
                        placeholder="Years of Experience *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="location"
                        value={jobDetails.location}
                        autoComplete="off"
                        placeholder="Location *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="requirements"
                        value={jobDetails.requirements}
                        autoComplete="off"
                        placeholder="Requirements *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>


                <Grid item xs={6}>
                    <FilledInput 
                        onChange={handleChange}
                        name="companyLink"
                        value={jobDetails.companyLink}
                        autoComplete="off"
                        placeholder="Company Link *" 
                        disableUnderline 
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <FilledInput 
                        onChange={handleChange}
                        name="jobWork"
                        value={jobDetails.jobWork}
                        autoComplete="off"
                        placeholder="Job Description *" 
                        disableUnderline 
                        fullWidth 
                        multiline 
                        rows={5}
                    />
                </Grid>

            </Grid>

            <Box mt={2}>
                <Typography>Skills *</Typography>
                <Box display="flex">
                    {skills.map(skill => (
                        <Box 
                            onClick={()=>addRemoveSkill(skill)} 
                            className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`} 
                            key={skill}
                        >
                            {skill}
                        </Box>
                    ))}
                </Box>
            </Box>
        </DialogContent>

        <DialogActions>
            <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption">Required Fields</Typography>
                <Button 
                    onClick={handleSubmit}
                    variant="contained" 
                    disableElevation color="primary"
                    disabled={loading}
                >
                    {loading ? (
                        <CircularProgress color="secondary" size={22}/>
                    ) : (
                        "Post Job"
                    )}
                    
                </Button>
            </Box>
        </DialogActions>

    </Dialog>
  )
}

export default NewJobModal

