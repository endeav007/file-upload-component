import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FileUploader from './components/FileUploader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FileUploader />
  </StrictMode>,
)
