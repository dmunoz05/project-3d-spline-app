import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to design 3D in React</h1>
      <div className='div-spline-viewer'>
        <spline-viewer className='spline-viewer' url="https://prod.spline.design/oRI7Fal11-Y2qygG/scene.splinecode"></spline-viewer>
      </div>      
    </>
  )
}

export default App;
