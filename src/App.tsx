import { useRoutes } from 'react-router-dom'
import routes from './router/index'

function App() {
  return <div className="h-full">{useRoutes(routes)}</div>
}

export default App
