import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 1:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    }
  ])

  //delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : ( 
          'No More Task to Show'
        )}
    </div>
  );
}

export default App;
