// @ts-check
import React, {useState} from 'react'


const Calculator = () => {

  let [op, setOp] = useState()
  let [currentSteps, setCurrentSteps] = useState('')
  let [num,setNum] = useState(0)
  let [pastRes, setPastRes] = useState(0)
  let [lastStep, setLastStep] = useState('')


  let handleNumClick = (val) => {
    let newNo = parseInt(num+val)
    setNum(newNo)
    addToStr(val)
  }

  let handleOpClick = (operation) => {
      if(!pastRes) setPastRes(num)
      if(pastRes && op && num) handleEvaluate()
      setOp(operation)
      setNum(0)
      addToStr(operation)
  }


  let handleEvaluate = () => {
    let newRes = 0
    switch(op){
      case('+'):
        newRes = num + pastRes
        break

      case('-'):
        newRes = pastRes - num
        break

      case('*'):
        newRes =pastRes * num
        break

      case('/'):
        if(num === 0) break
        newRes = pastRes / num
        break

      // default:
      //   setNum(0)
      //   setPastRes(0)  
    }
    setPastRes(newRes)
    setNum(0)
    setOp(undefined)
    setCurrentSteps('')
   
  }

  let handleReset = () => {
    setNum(0)
    setPastRes(0)
    setOp(undefined)
    setCurrentSteps('')
  }

  let addToStr = (elem) => {
    let operationArr = ['+', '-', '*', '/']
    if(operationArr.includes(lastStep) && operationArr.includes(elem)){
      let newStep = currentSteps.substr(0,currentSteps.length-1) + elem
      setCurrentSteps(newStep)
    } else {
      setCurrentSteps(currentSteps+elem)
    }
    setLastStep(elem)

   
  }


  return(
    <>
    <div className="container">
      <div className="headText">
        <h3> Calculator </h3>
      </div>
      <div className="screen"> 
        <div className="row">
            {currentSteps}
        </div>
        <div className="row resText">
          {pastRes}
        </div>
       
      </div>

      <div className="row m10">
        <div className="col-md-3">
          <button className="btnnumpad" onClick={() => handleNumClick('1')}> 1 </button>
        </div>
        <div className="col-md-3">
          <button className="btnnumpad" onClick={() => handleNumClick('2')}>2 </button>
        </div>
        <div className="col-md-3">
        <button className="btnnumpad" onClick={() => handleNumClick('3')}> 3 </button>
        </div>
        <div className="col-md-3">
          <button className="btnOp" onClick={() => handleOpClick('+')}> + </button>
        </div>
      </div>

      <div className="row m10">
        <div className="col-md-3">
          <button className="btnnumpad" onClick={() => handleNumClick('4')}> 4 </button>
        </div>
        <div className="col-md-3">
          <button className="btnnumpad" onClick={() => handleNumClick('5')}> 5 </button>
        </div>
        <div className="col-md-3">
        <button className="btnnumpad" onClick={() => handleNumClick('6')}> 6 </button>
        </div>
        <div className="col-md-3">
          <button className="btnOp" onClick={() => handleOpClick('-')}> - </button>
        </div>
      </div>

      <div className="row m10">
        <div className="col-md-3">
          <button className="btnnumpad" onClick={() => handleNumClick('7')}> 7 </button>
        </div>
        <div className="col-md-3">
          <button className="btnnumpad" onClick={() => handleNumClick('8')}> 8 </button>
        </div>
        <div className="col-md-3">
        <button className="btnnumpad" onClick={() => handleNumClick('9')}> 9 </button>
        </div>
        <div className="col-md-3">
          <button className="btnOp" onClick={() => handleOpClick('*')}> * </button>
        </div>
      </div>

      <div className="row m10">
        <div className="col-md-3">
          <button className="btnOp" onClick={handleReset}> Reset </button>
        </div>
        <div className="col-md-3">
        <button className="btnnumpad" onClick={() => handleNumClick('0')}> 0 </button>
        </div>
        <div className="col-md-3">
          <button className="btnOp"  onClick={handleEvaluate}> = </button>
        </div>
        <div className="col-md-3">
          <button className="btnOp" onClick={() => handleOpClick('/')}> / </button>
        </div>
        
        
      </div>

     
    </div>

    </>
  )
}

export default Calculator



