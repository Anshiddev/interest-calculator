import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
 const [amount,setAmount] =useState(0)
 const [rate,setRate] =useState(0)
 const [year,setYear] =useState(0)
//  const [total,setTotal] =useState(0)

const[validAmount,setValidAmount] = useState(false)
const[validRate,setValidRate] = useState(false)
const[validYear,setValidYear] = useState(false)

const[result,setResult] = useState(0)

const validInput=(e)=>{
  const {name,value} = e.target

  if(value.match(/^[0-9]*.?[0-9]+$/)){
    if(name == 'pamount'){
      setAmount(value)
      setValidAmount(true)
    }
    else if(name == 'rate'){
      setRate(value)
      setValidRate(true)
    }
    else{
      setYear(value)
      setValidYear(true)
    }
  }
  else {
    if(name == 'pamount'){
      setAmount(0)
      setValidAmount(false)
    }
    else if(name == 'rate'){
      setRate(0)
      setValidRate(false)
    }
    else{
      setYear(0)
      setValidYear(false)
    }
  }
}

  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(amount,rate,year);
    let res=(amount*year*rate)/100
    console.log(res)
    setResult(res)
  }

  const resetform=()=>{
    setResult(0)

    setAmount(0)
    setRate(0)
    setYear(0)

    setValidAmount(false)
    setValidRate(false)
    setValidYear(false)
  }
  
  return (
    <>
      <div className='d-flex bg-dark w-100 justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='w-50 bg-light border roundered p-5'>

          <h1>simple Interest calculator</h1>
          <div className='p-5 text-center border rounded shadow' style={{ backgroundColor: 'cyan', width: '100%' }}>
            ₹ {result}
          </div>
          <form action="" className='mt-3' onSubmit={(e)=>{handlesubmit(e)}}>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='pamount' label="Principle Amount" variant="outlined" style={{ width: '100%' }} onChange={(e)=>{validInput(e)}} />
              {
                !validAmount &&
                <div className='text-danger'>
                  Invalid Principle Amount
                </div>
              }
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='rate' label="Rate of interest" variant="outlined" style={{ width: '100%' }} onChange={(e)=>{validInput(e)}}/>
              {
                !validRate &&
                <div className='text-danger'>
                  InvalidRate
                </div>
              }
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" name='year' label="Number of years" variant="outlined" style={{ width: '100%' }} onChange={(e)=>{validInput(e)}}/>
              {
                !validYear &&
                <div className='text-danger'>
                  InvalidYear
                </div>
              }
            </div>
            <Stack spacing={2} direction="row" className='mt-3'>
              <Button type="submit" disabled={validAmount&&validRate&&validYear?false:true} variant="contained" className='w-50'>Submit</Button>
              <Button type="reset" variant="outlined" className='w-50' onClick={resetform}>reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
