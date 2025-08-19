import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Food Delivery App</h1>
        <p>Welcome to our MERN Stack Food Delivery Application</p>
      </header>
      <main>
        <div className="card">
          <p>This is a placeholder for the Food Delivery App frontend.</p>
          <p>The actual application will include:</p>
          <ul>
            <li>User Authentication</li>
            <li>Food Item Browsing</li>
            <li>Cart Management</li>
            <li>Order Tracking</li>
            <li>Profile Management</li>
          </ul>
          <button onClick={() => setCount((count) => count + 1)}>
            Clicks: {count}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App