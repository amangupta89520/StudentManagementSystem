import React, { useEffect } from 'react'
import Layout from './Layout'

export default function Notes() {

  const [studentDetails, setStudentDetails] = React.useState([]);
  const [value, setValue] = React.useState('');

  useEffect(() => {
    fetch('http://localhost:8000/student_details')
      .then(res => res.json())
      .then(data => setStudentDetails(data))
      .catch(err => console.log(err));
  }, []);

  const searchArray = studentDetails.filter(studDetail => {
    const str = studDetail.name
    const lowerstr = str.toLowerCase()
    const trimstr = lowerstr.trim()
    return trimstr.includes(value)
  });

  console.log(searchArray);

  const handleValue = (e) => {
    const str = e.target.value;
    const lowerstr = str.toLowerCase();
    const trimstr = lowerstr.trim();
    setValue(trimstr);
  }

  return (
    <Layout>
    <div class="container" style={{padding: 40}}>
      <p class="fs-1">Student Records</p>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="StudentID" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleValue}/>
      </div>


      <ul class="list-group list-group-flush">      
      {searchArray.map((studDetail) => (
        <li class="list-group-item">
        <div class="row">
          <div class="col">
            <p><strong>StudentID: </strong>{studDetail.studentId}</p>
            <p><strong>Name: </strong>{studDetail.name}</p>
            <p><strong>Course: </strong>{studDetail.course}</p>
          </div>
          <div class="col">
            <p><strong>Total Marks: </strong>{studDetail.totalMarks}</p>
            <p><strong>Percentage: </strong>{studDetail.percentage}</p>
            <p><strong>Attendance: </strong>{studDetail.attendance}</p>
          </div>
        </div>
        </li>
      ))}
      </ul>
    </div>
    </Layout>
  );
}
