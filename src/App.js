import { useEffect, useState } from "react";
import  Header  from "./components/Header";
import  AddTask  from "./components/AddTask";
import  ShowTask  from "./components/ShowTask";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


import './App.css';


function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
      <Container>
            <div className="App ">
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}  
      />

    </div>
      </Container>
  );
}

export default App;