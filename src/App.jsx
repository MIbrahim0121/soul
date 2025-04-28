import React from 'react'
import Main1 from './component/Main1'
// import Main2 from './component/Main2'
import Main3 from './component/Main3'
import Main4 from './component/Main4'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
<Main1/>
{/* <Main2/> */}
<Main3/>
<Main4/>
    </div>
  )
}

export default App