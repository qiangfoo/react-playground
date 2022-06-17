import { createRoot } from 'react-dom/client'

import App from './App'

const appElement = document.querySelector('#app')
const root = createRoot(appElement)
root.render(<App />)
