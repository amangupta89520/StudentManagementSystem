import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router';
import Layout from './Layout'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {

  const classes = useStyles()

  const history = useHistory();

  const [studId, setStudId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [mark1, setMark1] = useState('');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [studIdError, setStudIdError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [mark1Error, setMark1Error] = useState(false);
  const [mark2Error, setMark2Error] = useState(false);
  const [mark3Error, setMark3Error] = useState(false);

  const registerStudent = async () => {
    var Web3 = require('web3');
    var web3 = new Web3('http://127.0.0.1:7545');
    // var web3 = new Web3('https://ropsten.infura.io/v3/88e2db3b83b14e5683c8bb280e2ecf92');
    var abi = [{"constant":false,"inputs":[{"name":"studentId","type":"address"},{"name":"name","type":"string"},{"name":"course","type":"string"},{"name":"mark1","type":"uint256"},{"name":"mark2","type":"uint256"},{"name":"mark3","type":"uint256"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"studIdList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countStudents","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStudentsList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"incrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"},{"name":"totalWorkingDays","type":"uint256"}],"name":"getAttendanceDetails","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"}],"name":"getStudentDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"decrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

    var contractAddress = '0x42DE79EFAb7FeC1f0Abf5B98DB539f17F4A7B999';
    var contract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();

    await contract.methods.register(studId, name, course, mark1, mark2, mark3).send({from: accounts[0], gas: 1000000, gasPrice: 1e6}, (err, result) =>{if(err){ alert(err)}});
    
    await contract.methods.getStudentDetails(studId).call((err, result) => {
      fetch('http://localhost:8000/student_details', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ "studentId": result[0], "name": result[1], "course": result[2], "totalMarks": result[3], "percentage": result[4], "attendance": result[5]})
      }).then(() => {
        alert('student successfully registered')
        history.push('/');
      })
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudIdError(false);
    setNameError(false);
    setCourseError(false);
    setMark1Error(false);
    setMark2Error(false);
    setMark3Error(false);

    if(studId=='') {
      setStudIdError(true);
    }
    if(name=='') {
      setNameError(true);
    }
    if(course==''){
      setCourseError(true);
    }
    if(mark1==''){
      setMark1Error(true);
    }
    if(mark2==''){
      setMark2Error(true);
    }
    if(mark3==''){
      setMark3Error(true);
    }

    if(studId && name && course && mark1 && mark2 && mark3) {
      registerStudent();
    }
  }

  return (
    <Layout>
    <Container style={{padding: 40}}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Register Student
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setStudId(e.target.value)}
          className={classes.field} 
          label="Student ID"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={studIdError}
        />
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field} 
          label="Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={nameError}
        />
         <TextField
          onChange={(e) => setCourse(e.target.value)}
          className={classes.field} 
          label="Course"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={courseError}
        />
        <TextField
          onChange={(e) => setMark1(e.target.value)}
          className={classes.field} 
          label="Mark 1"
          variant="outlined"
          color="secondary"
          required
          error={mark1Error}
        />
        <TextField
          onChange={(e) => setMark2(e.target.value)}
          className={classes.field} 
          label="Mark 2"
          variant="outlined"
          color="secondary"
          required
          error={mark2Error}
        />
        <TextField
          onChange={(e) => setMark3(e.target.value)}
          className={classes.field} 
          label="Mark 3"
          variant="outlined"
          color="secondary"
          required
          error={mark3Error}
        />
      

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      </form>

    </Container>
    </Layout>
 )

}
