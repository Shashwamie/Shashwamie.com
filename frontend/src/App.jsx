import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import Onboard from './Pages/Onboard.jsx'
import { useColorModeValue } from './components/ui/color-mode.jsx'
import CreateAccount from './Pages/CreateAccount.jsx'
import Login from './Pages/Login.jsx'

function App() {
  return (
    <>
      <Box bg={useColorModeValue('gray.300', 'gray.900')} minH={"100vh"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/Onboard' element={<Onboard />} />
          <Route path='/CreateAccount' element={<CreateAccount />}/>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
