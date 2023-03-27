import axios from 'axios'
import './index.css'

function App() {
  const handleClick = async () => {
    let Name = "abhiraj"
    let Enrollment_No = 2015090038
    let Password = "abhirajB"

    await axios.post(`http://localhost:5000/api/v1/students`, {
      name: Name,
      enrollment_No: Enrollment_No,
      password: Password
    }).then(function(response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    }
  return (
    <button onClick={handleClick}>click me</button>
  );
}

export default App;
