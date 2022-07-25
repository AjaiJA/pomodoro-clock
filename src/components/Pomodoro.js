import React,{useState,useEffect,useRef} from 'react'
import Settings from './Settings';
import Timer from './Timer';

function Pomodoro() {
  const [limit,setLimit]=useState(3)
  const [limitInput,setLimitInput]=useState(3)
  const [minute,setMinute]=useState(24)
  const [second,setSecond]=useState(59)
  const [display,setDisplay]=useState(0)
  const [mode, setMode] = useState('work'); 
  const [isAdjust,setIsAdjust]=useState(false)
  const [isBreak,setIsBreak]=useState(false)
  const [isRunning,setIsRunning]=useState(true)
  const isRunningRef=useRef(isRunning)
  const [time1,setTime1]=useState("00:25:0")
  const [time2,setTime2]=useState("00:0:00")

  let startTimer=()=>{
    
  }
  let getTotalSeconds=(time)=>{
    var split=time.split(":")
    return Number(split[0])*3600+Number(split[1]*60)+Number(split[2])
  }

  useEffect(()=>{
    let interval=setInterval(()=>{
      if(isRunningRef.current){return}
      else{setDisplay(display===0 ? 1 : display)}
      if(limitInput===0) {
        setDisplay(0)
        isRunningRef.current=true
        return
      }
      if(second===0){
        if(minute===0){
          setMinute(!isBreak ? 4 : 24)
          if(!isBreak) {
            setMode("break")
            setTime1("00:5:0")
            setIsBreak(()=>!isBreak)
          }
          else{
            if(limitInput===0){setDisplay(0)}
            else{setDisplay(display+1)}
            setLimitInput(limitInput-1)
            setMode("work")
            setTime1("00:25:0")
            setIsBreak(()=>!isBreak)
          }
          setSecond(59)
        }
        else{
          setMinute(minute-1)
          setSecond(59)
        }
        if(limitInput===0) {
          setDisplay(0)
        }
      }else{setSecond(second-1)}
      setTime2("00:"+ minute+ ":"+second)
    },1000)

    return ()=> clearInterval(interval)

  },[second,minute,time1,time2,limitInput,isBreak,display])

  let handleLimits=()=>{
    setSecond(59)
    setMinute(24)
    setLimitInput(limit)
    setIsAdjust(!isAdjust)
    setDisplay(1)
  }

  let AlertView=()=>{
    return mode==="work" ? <p style={{textAlign:"center",color:"#4aec8c"}}>Work Time is going on :)<br/> Cycle - {display} </p> : <p style={{textAlign:"center",color:"#f54e4e"}}>Just have a Break time :) <br/>Break - {display} </p>
  }

  return (
    <>
      <div className="App"><br/>
        {isRunningRef.current ? <p style={{textAlign:"center",color:"#f54e4e"}}>Start the Timer</p> : <AlertView />}
        <div style={{}}> 
          { 
          isAdjust ? 
            <Settings handleLimits={handleLimits} limit={limit} setLimit={setLimit} /> 
            : 
            <Timer
              startTimer={startTimer} percentage={Math.round((getTotalSeconds(time2)/getTotalSeconds(time1)) * 100)} minute={minute} 
              second={second} mode={mode} setIsRunning={setIsRunning} 
              isRunningRef={isRunningRef} setIsAdjust={setIsAdjust} isAdjust={isAdjust} 
            /> 
          }
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Pomodoro;
