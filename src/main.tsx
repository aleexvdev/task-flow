import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskFlow } from './TaskFlow.tsx'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskFlow />
  </React.StrictMode>,
)
