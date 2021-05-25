import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['Estudar react', 'Almocar', 'Momento de Soft-skills'];
  return (
    <ul>
      {tasks.map(taskItem => (Task(taskItem)))}
    </ul>
  );
}

export default App;
