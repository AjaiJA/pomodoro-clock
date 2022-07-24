import React from 'react'
import {Tooltip,TextField} from '@mui/material'

export default function Settings({handleLimits,limitInput,setLimitInput}){
  return(
    <div className="settings-view">
      <h2 className="form-apply">Set the Cycle Length</h2>
      <div className="form-body">
        <div className="input-div">
          <TextField
            fullWidth
            id="outlined-number"
            label="Enter Cycle Length"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min:1
            }}
            value={limitInput} onChange={(e)=>setLimitInput(e.target.value)}
          />
        </div><br/>
        <center>
          <Tooltip title="Apply Changes" arrow>
            <button type="button" className="apply-btn" onClick={handleLimits} >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                Apply &amp; Back
              </span>
            </button>
          </Tooltip>
        </center>
      </div>
    </div>
  )
}
