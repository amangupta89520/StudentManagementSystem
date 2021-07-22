import React, { useEffect } from 'react';
import Layout from './Layout'

const Attendance2 = () => {

    const [studentDetails, setStudentDetails] = React.useState([]);
    const [attendanceValue, setAttendanceValue] = React.useState(null);
    

    useEffect(() => {
      // const abortController = new AbortController()
      // const signal = abortController.signal

      fetch('http://localhost:8000/student_details')
        .then(res => res.json())
        .then(data => setStudentDetails(data))
        .catch(err => console.log(err));

      // return function cleanup() {
      //   abortController.abort()
      // }
    }, []);

    const incrementAttendance = async (studentId) => {
        var Web3 = require('web3');
        var web3 = new Web3('http://127.0.0.1:7545');
        var abi = [{"constant":false,"inputs":[{"name":"studentId","type":"address"},{"name":"name","type":"string"},{"name":"course","type":"string"},{"name":"mark1","type":"uint256"},{"name":"mark2","type":"uint256"},{"name":"mark3","type":"uint256"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"studIdList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countStudents","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStudentsList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"incrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"},{"name":"totalWorkingDays","type":"uint256"}],"name":"getAttendanceDetails","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"}],"name":"getStudentDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"decrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
    
        var contractAddress = '0x42DE79EFAb7FeC1f0Abf5B98DB539f17F4A7B999';
        var contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();

    
        await contract.methods.incrementAttendance(studentId).send({from: accounts[0], gas: 1000000, gasPrice: 1e6}, (err, result) => {if(err){ alert(err)}});

    }

    const decrementAttendance = async (studentId) => {
        var Web3 = require('web3');
        var web3 = new Web3('http://127.0.0.1:7545');
        var abi = [{"constant":false,"inputs":[{"name":"studentId","type":"address"},{"name":"name","type":"string"},{"name":"course","type":"string"},{"name":"mark1","type":"uint256"},{"name":"mark2","type":"uint256"},{"name":"mark3","type":"uint256"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"studIdList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countStudents","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStudentsList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"incrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"},{"name":"totalWorkingDays","type":"uint256"}],"name":"getAttendanceDetails","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"}],"name":"getStudentDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"decrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
    
        var contractAddress = '0x42DE79EFAb7FeC1f0Abf5B98DB539f17F4A7B999';
        var contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();

    
        await contract.methods.decrementAttendance(studentId).send({from: accounts[0], gas: 1000000, gasPrice: 1e6}, (err, result) => {if(err){ alert(err)}});

    }

    const getAttendanceDetails = async (studentId, name, course, totalMarks, percentage, id) => {
        var Web3 = require('web3');
        var web3 = new Web3('http://127.0.0.1:7545');
        var abi = [{"constant":false,"inputs":[{"name":"studentId","type":"address"},{"name":"name","type":"string"},{"name":"course","type":"string"},{"name":"mark1","type":"uint256"},{"name":"mark2","type":"uint256"},{"name":"mark3","type":"uint256"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"studIdList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countStudents","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStudentsList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"incrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"},{"name":"totalWorkingDays","type":"uint256"}],"name":"getAttendanceDetails","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"studentId","type":"address"}],"name":"getStudentDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_studId","type":"address"}],"name":"decrementAttendance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
    
        var contractAddress = '0x42DE79EFAb7FeC1f0Abf5B98DB539f17F4A7B999';
        var contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();
        await contract.methods.getAttendanceDetails(studentId, 100).call((err, result) => {
            // console.log(result);
            fetch('http://localhost:8000/student_details/' + id, {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ "studentId": studentId, "name": name, "course": course, "totalMarks": totalMarks, "percentage": percentage, "attendance": result})
                })
                .then((response) => response.json())
                .then((data) => setAttendanceValue(data.attendance));
          });
      }
 
      const [state, setState] = React.useState({
        checkedB: false
      });

      const handleChange = (event,studentId, name, course, totalMarks, percentage, id) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        // console.log(event.target.name);
        // console.log(studentId, name, course, totalMarks, percentage, id)
        // let count = 0
        if(state.checkedB == false) {
            // count = 0;
            // getAttendanceDetails(studentId, name, course, totalMarks, percentage, id, count);
            incrementAttendance(studentId);
            getAttendanceDetails(studentId, name, course, totalMarks, percentage, id);
        }else {
            // count += 1;
            decrementAttendance(studentId);
            getAttendanceDetails(studentId, name, course, totalMarks, percentage, id);
        }
      };

  


    return (
        <Layout>
        <div class="container" style={{padding: 40}}>
            <p class="fs-1">Attendance</p>
            {studentDetails.map(studDetail => (
                <div class="accordion" id="accordionExample" key={studDetail.id}>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p>{studDetail.studentId}</p>
                    </button>
                  </h2>

                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" key={studDetail.id}>
                    <div class="accordion-body">
                        <p><strong>Name: </strong>{studDetail.name}</p>
                        <p><strong>Student ID: </strong>{studDetail.studentId}</p>
                        {/* {attendanceValue? <p>Attendance: {attendanceValue}</p> : setAttendanceValue(studDetail.attendance) } */}
                        {/* {attendanceValue? getAttendanceDetails(studDetail.studentId,studDetail.name,studDetail.course, studDetail.totalMarks, studDetail.percentage,studDetail.id) : (<p>{studDetail.attendance}</p>)  } */}
                        <p><strong>Attendance: </strong>{studDetail.attendance}</p>
                        <div class="form-check form-switch" style={{paddingLeft: 40}}>
                          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={(e) => handleChange(e,studDetail.studentId,studDetail.name,studDetail.course, studDetail.totalMarks, studDetail.percentage, studDetail.id)} name="checkedB"/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </Layout>
    );
}
 
export default Attendance2;