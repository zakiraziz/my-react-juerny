import Student from './Student.jsx';

function App() {
  return (
    <div className="student-list">
      <h1>📚 Student Information</h1>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
    </div>
    function Student({ name = "Unknown", age = "N/A", isStudent = false }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? "Currently a Student" : "Not a Student"}</p>
    </div>
  );
}

export default Student;

  );
}

export default App;
