import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './redux-toolkit/Index.tsx'

createRoot(document.getElementById('root')!).render(<Index />)
