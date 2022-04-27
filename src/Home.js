import React,{useState,useEffect} from 'react'
import Header from "./Header"
import JobCard from "./JobCard"
import {ThemeProvider} from '@material-ui/core/styles'
import {Box,Grid,CircularProgress,Button,Typography} from '@material-ui/core';
import theme from './theme'
import {firestore,app} from './firebase';
import CloseIcon from '@material-ui/icons/Close';
import NewJobModal from './NewJobModal';
import ViewJobModal from './ViewJobModal';
import SearchBar from './SearchBar';

import Navbar from './Navbar.js'

const Home = () => {

  const [jobs,setJobs] = useState([]);
  const [loading,setLoading] = useState(true);
  const [newJobModal,setNewJobModal] = useState(false);
  const [customSearch,setCustomSearch] = useState(false);
  const [viewJob,setViewJob] = useState({});

  const fetchJobs = async() => {
    setLoading(true);
    setCustomSearch(false);
    const req = await firestore
      .collection('jobs')
      .orderBy('dateOfPost','desc')
      .get();
    const tempJob = req.docs.map((job) => (
      {...job.data(),
      id:job.id,
      dateOfPost:job.data().dateOfPost.toDate()
    }));
    console.log(tempJob);
    setJobs(tempJob);
    setLoading(false);
  };

  const fetchJobsCustom =async(jobSearch) =>{
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
    .collection('jobs')
    .orderBy('dateOfPost','desc')
    .where('jobType','==',jobSearch.jobType)
    .get()
    const tempJob = req.docs.map((job) => (
      {...job.data(),
      id:job.id,
      dateOfPost:job.data().dateOfPost.toDate()
    }));
    setJobs(tempJob);
    setLoading(false);
  }

  const postJob = async(jobDetails) =>{
    await firestore.collection('jobs').add({
      ...jobDetails,
      dateOfPost:app.firestore.FieldValue.serverTimestamp()
    });
    fetchJobs();
  }

  useEffect(()=>{
    fetchJobs();
  },[]);

  return (
    <ThemeProvider theme={theme}>
    
    <Navbar />
    
    <ViewJobModal job={viewJob} closeModal={()=>setViewJob({})}/>
    <Box mb={3}>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom} />
          {
            loading ? <Box display="flex" justifyContent="center"><CircularProgress /></Box>
            :(
              <>
              {customSearch && 
              ( 
                <Box my={2} display="flex" justifyContent="flex-end">
                 <Button onClick={fetchJobs}>
                   <CloseIcon size={20}/>
                   Custom Search
                 </Button>
                </Box>
              )}
              {jobs.map((job) => (
                  <JobCard open={()=>setViewJob(job)} key={job.id} {...job}/>
                ))}
              </>
            )
          }        
        </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
  )
}

export default Home