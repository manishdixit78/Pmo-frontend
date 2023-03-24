import React,{useState} from 'react';
import {
    Grid,
} from '@material-ui/core/'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DownloadIcon from '@mui/icons-material/Download';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const buMock=['PHP JS','Node','HR'];
const projectMock= ['Dentsu', 'PMO', 'Marketcube'];
export default function BasicSelect() {
  const [filter, setFilter] = useState({
     bu: [],
     project: []
  });


  const handleChange = (event,key) => {
    setFilter({
        ...filter,
        [key]: event.target.value
  });
  };

  return (
    <Grid container
    spacing={2}
    direction="row"
    // justifyContent='space-between'
    flexGrow= '1'
    >
      <Button variant="success" sx={{ mt:2, ml:2, mb:3}}><DownloadIcon />Export Report</Button>
      <FormControl sx={{ m: 1,ml:'53%', mt:2, mb:3, width: '15%' }}>
        <InputLabel id="demo-simple-select-label">Select Bu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter.bu}
          label="Select Bu"
          onChange={(event) => handleChange(event, 'bu')}
    >
        {buMock.map((name) => (
            <MenuItem
                key={name}
                value={name}
            >
                {name}
            </MenuItem>
        ))}
        </Select>
      </FormControl>
      <FormControl sx={{m: 1, mt:2, mb:3,width: '15%'  }}>
        <InputLabel id="demo-simple-select-label">Select Projects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter.project}
          label="Select Projects"
          onChange={(event) => handleChange(event, 'project')}
    >
        {projectMock.map((name) => (
            <MenuItem
                key={name}
                value={name}
            >
                {name}
            </MenuItem>
        ))}
        </Select>
      </FormControl>
    </Grid>
  );
}