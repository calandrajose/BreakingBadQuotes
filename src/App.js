import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import Phrase from './components/Phrase'

const Button = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  /* outline:none; */

  :focus { outline: thin dotted; }
  :hover {
    cursor:pointer;
    background-size: 400px;
  }

`
const Container = styled.div`
display: flex;
align-items:center;
padding-top: 10rem;
flex-direction: column;
`

function App() {
const [phrase, setPhrase] = useState({})

  useEffect(() => {
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res=>res.json())
    .then(data=>setPhrase(data[0]))
  }, [])

  const fetchAPI = ()=>{
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res=>res.json())
    .then(data=>setPhrase(data[0]))
  }

  return (
    <div className="App">
      <Container>
        <Phrase content={phrase}/>
        <Button 
          onClick={fetchAPI}
        >
          Obtener frase
        </Button>

      </Container>
    </div>
  );
}

export default App;
