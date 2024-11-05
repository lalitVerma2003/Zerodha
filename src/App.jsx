import { Box, Text } from "@chakra-ui/react"
import Header from "./Components/Header"
import Main from "./Components/Main"
import './App.css';
import Footer from "./Components/Footer";

function App() {

  return (
    <Box
      backgroundColor={"#fbfdff"}
    >
      <h1>Zerodha Advance Application</h1>
      <Main/>
      <Footer/>

    </Box>
    
  )
}

export default App
