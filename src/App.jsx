import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Hero2 from './component/Hero2'
// import Test from './component/Test'
import TermsOfService from './component/TermsOfService' // if you created this
import TermOfCondition from './component/TermOfCondition' // if you created this
import Privacy from './component/PrivacyPolicy' // if you created this

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero2 />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/legal" element={<TermsOfService />} />
          <Route path="/terms" element={<TermOfCondition />} />
          <Route path="/policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App



// const App = () => {
//   return (
//     <div  className='overflow-x-hidden ' >
//       <Navbar/>
//     {/* <Hero/> */}
//     <Hero2/>
//     {/* <Test/> */}
//     </div>
//   )
// }

