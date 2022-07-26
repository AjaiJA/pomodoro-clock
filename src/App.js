import React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab,Box,Typography} from '@mui/material';
import ListMaintain from './components/ListMaintain';
import Pomodoro from './components/Pomodoro';
import './App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "white",
//   },
//   tab: {
//     background: 'white',
//     '&.Mui-selected': {
//       background: 'red'
//     }
//   },
// }));

export default function App() {
  const [value, setValue] = React.useState(0);
  // const classes = useStyles();
  //  const tabClasses = {root: classes.tab};
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs centered 
          TabIndicatorProps={{style: {background:'#646FD4',height:5},}}
          sx={{
            "& button":{backgroundColor:"white"},
            "& button:active":{backgroundColor:"#646FD4"},          
          }}
          value={value} onChange={handleChange} aria-label="basic tabs example"
        >
          <Tab label="Pomodoro Clock" {...a11yProps(0)} />
          <Tab label="List Maintainance" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Pomodoro />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListMaintain />
      </TabPanel>
    </div>
  )
}
