import React,{useState,useEffect} from 'react'
import Navbar from './Navbar.js'
import {ThemeProvider} from '@material-ui/core/styles'
import {Box,Grid,CircularProgress,Button} from '@material-ui/core';
import theme from './theme'
import {firestore,app} from './firebase';
import NewJobModal from './NewJobModal';
import Header from "./Header"

const Companies = () => {
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
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Header 
          openNewJobModal={() => setNewJobModal(true)}
        />
        <NewJobModal  
          closeNewJobModal={() => setNewJobModal(false)} 
          newJobModal={newJobModal} 
          postJob={postJob} 
        />
      </ThemeProvider>
    </div>
  )
}

export default Companies