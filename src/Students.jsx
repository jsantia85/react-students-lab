import StudentCard from "./StudentCard";

const Students = (props) => {
  return ( 
    <>
      {props.students.map(student => 
          <StudentCard key={student.name} student={student}/>
        )}
    </>
  );
}

export default Students;