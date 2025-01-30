import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import TaskList from "./widget/TaskList.tsx";
import AddTaskForm from "./features/AddTaskForm.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AddTaskForm />
      <TaskList />
    {/*<App />*/}
  </StrictMode>,

)
