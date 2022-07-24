import React from 'react'
import {Tooltip} from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const workColor= '#646FD4';
const breakColor = '#47B5FF';

export default function Timer(props){

  let minute=props.minute
  let second=props.second
  const convMinute = minute < 10 ? `0${minute}` : minute;
  const convSecond = second < 10 ? `0${second}` : second;

  return(
    <div className="timer-bar">
      <div className="">
        <CircularProgressbar
          value={props.percentage}
          background={true}
          text={convMinute + ':' + convSecond}
          styles={buildStyles({
          textColor:'#fff',
          pathTransitionDuration: 0.5,
          pathColor:props.mode === 'work' ? workColor: breakColor,
          tailColor:'#F6E7D8',
          backgroundColor: '#000957',
        })} />
      </div><br/>
      <Tooltip title="Adjust" arrow>
        <button type="button" className="adjust-btn" onClick={()=>{props.setIsAdjust(!props.isAdjust)}}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Adjust
          </span>
        </button>
      </Tooltip> &nbsp; &nbsp; &nbsp; 
      {
        props.isRunningRef.current ? 
          <Tooltip title="Click to start timer" arrow>
            <button type="button" className="start-btn" onClick={() => { props.setIsRunning(false); props.isRunningRef.current = false; }}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>Start
              </span>
            </button> 
          </Tooltip>
          :
          <Tooltip title="Click to pause timer" arrow>
            <button type="button" className="pause-btn" onClick={() => { props.setIsRunning(true); props.isRunningRef.current = true; }}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>Pause
              </span>
            </button>
          </Tooltip>
      }
    </div>
  )
}
