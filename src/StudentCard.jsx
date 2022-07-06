const StudentCard = ({student}) => {
  return ( 
    <div className="student-card">
      <h2>This is {student.name}</h2>
      <h3>{student.bio}</h3>
    </div>
  );
}

export default StudentCard;