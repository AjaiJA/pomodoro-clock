import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Tooltip,TextField} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ListMaintain() {
  const [dense, setDense] = useState(false);
  const [input, setInput] = useState(0);
  const listA=["Apple","Banana","Orange","Mango","Grapes","Beans"]
  const listB=["Tomato","Potato","Spinach","Cucumber","Beans","Chilli","Grapes"]
  const [lists,setLists]=useState([])
  const [listName,setListName]=useState("")

  const handleChange = (event) => {
    setInput(Number(event.target.value));
  };
  let handleList=()=>{
    if(input===0){
      setListName("Items present only in A")
      setLists(listA)
    }
    else if(input===1){
      setListName("Items present only in B")
      setLists(listB)
    }
    else if(input===2){
      setListName("Items present in both A and B")
      setLists(listA.concat(listB))
    }
    else if(input===3){
      setListName("Items combining both A and B (unique)")
      setLists([...new Set([...listA.concat(listB)])])
    }
    else{

    }
  }
  return (
    <div className="list-maintain-view">
      <div className="form-body">
        <div className="list-input-div">
          <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Operation</InputLabel>
            <Select
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={input}
              label="Select Operation"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="0">Items present only in A</MenuItem>
              <MenuItem value="1">Items present only in B</MenuItem>
              <MenuItem value="2">Items present in both A and B</MenuItem>
              <MenuItem value="3">Items combining both A and B (unique)</MenuItem>
            </Select>
            <FormHelperText>Select the value and click compute</FormHelperText>
          </FormControl><br/>
          <center>
            <Tooltip title="Continue" arrow>
              <button type="button" className="apply-btn" onClick={handleList} >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                  Compute
                </span>
              </button>
            </Tooltip>
          </center>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{color:"white"}} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {listName}
          </Typography>
          <Demo>
            <List dense={dense}>
              {
                lists.map((list,index)=>(
                  <ListItem key={index}>
                    <ListItemText
                      primary={list}
                    />
                  </ListItem>
                ))
              }
            </List>
          </Demo>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Typography style={{color:"white"}} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            List B
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}
      </Grid>
    </div>
  )
}
