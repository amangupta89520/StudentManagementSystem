pragma solidity >=0.4.0<=0.6.0;


contract StudentRegister{


    address public owner;
  
    mapping (address=>student)students;

    constructor() public {
        owner=msg.sender;
    }
    
    modifier onlyOwner {
        require(msg.sender==owner);
        _;
    }

    struct student{
        
        address studentId;
        string  name;
        string course;
        uint256 mark1;
        uint256 mark2;
        uint256 mark3;
        uint256 totalMarks;
        uint256 percentage;
        bool isExist;
        uint256 attendanceValue;
    }
    
    address[] public studIdList;

    function register(address studentId,string memory name,string memory course,uint256 mark1,uint256 mark2,uint256 mark3) public onlyOwner {

            require(students[studentId].isExist==false,"ha.. ha... Fraud Not Possible,student details already registered and cannot be altered");
            
            uint256 totalMarks;
            uint256 percentage;

            
            totalMarks=(mark1+mark2+mark3);
            
            percentage=(totalMarks/3);
            
            studIdList.push(studentId);
            
            uint attendance = 0;

            students[studentId]=student(studentId,name,course,mark1,mark2,mark3,totalMarks,percentage,true,attendance);
    }
    
            
    function getStudentDetails(address studentId) public view returns (address,string memory,string memory,uint256,uint256,uint256){
        

        return(students[studentId].studentId,students[studentId].name,students[studentId].course,students[studentId].totalMarks,students[studentId].percentage,students[studentId].attendanceValue);
    }
    
    function incrementAttendance(address _studId) onlyOwner public {
        students[_studId].attendanceValue = students[_studId].attendanceValue+1;
    }
    
    function decrementAttendance(address _studId) onlyOwner public {
        students[_studId].attendanceValue = students[_studId].attendanceValue-1;
    }
    
    
    
    function getStudentsList() view public returns(address[]) {
        require(studIdList.length > 0);
        return studIdList;
    }
    
    function countStudents() view public returns (uint) {
        return studIdList.length;
    }
    
    function getAttendanceDetails(address studentId, uint256 totalWorkingDays) public view returns(uint256) {
        return students[studentId].attendanceValue * 100 / totalWorkingDays;
        
    }
    
}