import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core/";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DownloadIcon from "@mui/icons-material/Download";
import Select from "@mui/material/Select";
import TextField from "@mui/material/Select";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// let names ;

export default function BasicSelect(props) {
  const { onDownload } = props;
  const [buName, setBuName] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [ names, setNames ] = useState();
  const [ projectData, setProjectData ] = useState();
  // const [filter, setFilter] = useState({
  //   bu: [],
  //   project: [],
  // });

  // const handleChange = (event, key) => {
  //   setFilter({
  //     ...filter,
  //     [key]: event.target.value,
  //   });
  // };

  const buURL = "https://dev.resource-api.writso.com/v1/departments";

  const projectURL = "https://dev.resource-api.writso.com/v1/projects";
  
  let tokenStr = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWFuaXNoIERpeGl0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGFNdld5bnlPSzc1VWJ6WVNzODlpODRfenB4Ykk5TkpLQzhSUXBUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc291cmNlLWF2YWlhYmlsaXR5IiwiYXVkIjoicmVzb3VyY2UtYXZhaWFiaWxpdHkiLCJhdXRoX3RpbWUiOjE2Nzk5OTU0MTUsInVzZXJfaWQiOiJMQ1k0UkVkRlhTWkYzTjlEbzlBQnFhMmo0S0IyIiwic3ViIjoiTENZNFJFZEZYU1pGM045RG85QUJxYTJqNEtCMiIsImlhdCI6MTY3OTk5NTQxNSwiZXhwIjoxNjc5OTk5MDE1LCJlbWFpbCI6Im1hbmlzaC5kaXhpdEBzdWNjZXNzaXZlLnRlY2giLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExODM5NzE5ODMxNTY2OTY2OTUwNyJdLCJlbWFpbCI6WyJtYW5pc2guZGl4aXRAc3VjY2Vzc2l2ZS50ZWNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.X_ZY7TUkAkYb9vubIbQpkHq0GZEw6FAIqxeaLJ1O2Za8f-R3FLEXNTc1932bU3uLVOQJoHmXoZ-tP_FvQUSElLiTsnvU-TtqCaEzjR9p3yDm7xLNxoHKX0YPCZsv8c_wNmfJXfCbuAYnsAAVnYqiVwi3CZ4DwlF-BwzCc_DMvSUpas9BR4yxWPmqEQuATcI4HA18ZvAf6eShJKBrknJ2-8k_HrMgOT1HY0zpghjtfxUMO9Hz0s5tfg-KMug7GD5zZ1dPND9yT5WjKxCC5LOHL4yi_ZE7ojwNrSg00JNU86DIJSwIlL-SEb-wgYkwT4PyV3PBQFZF1pNemrT2bUe1ZA"
  useEffect(() => {
      axios.get(buURL, { headers: {"Authorization" : tokenStr} }).then((response) => {
        setNames(response.data.data);
      });
      axios.get(projectURL, { headers: {"Authorization" : tokenStr} }).then((response) => {
        const { data } = response;
        let projectList = data?.data?.map((project)=>{
            return project.name;
        });
        setProjectData(projectList);
      });
    }, []);
  const handleChange1 = (event, key) => {
    // console.log('event->>>', key);
    const {
      target: { value },
    } = event;
    if (key === 'bu') {
    setBuName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    }
    if (key === 'project') {
      setSelectedProject(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
      }
  };

  const handleDelete = (event, val, key) => {
    // console.log("valval : ", val);
    // console.log("personName : ", buName);
    if (key === 'bu') {
    const filteredArray = buName.filter((e) => e !== val);
    setBuName(filteredArray);
    }
    if (key === 'project') {
      const filteredArray = selectedProject.filter((e) => e !== val);
      setSelectedProject(filteredArray);
      }
  };
  // console.log('projectData->>>', projectData);
  // console.log('buData->>>', selectedProject);
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      // justifyContent='space-between'
      flexGrow="1"
    >
      <Button
        variant="success"
        sx={{ mt: 2, ml: 2, mb: 3 }}
        onClick={onDownload}
      >
        <DownloadIcon />
        Export Report
      </Button>
      {/* <FormControl sx={{ m: 1,ml:'53%', mt:2, mb:3, width: '15%' }}>
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
      </FormControl> */}
      <FormControl sx={{ m: 1, mt: 2, mb: 3, width: "15%" }}>
        <InputLabel id="demo-multiple-checkbox-label">Select BU</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={buName}
          onChange={(value)=>handleChange1(value, 'bu')}
          input={<TextField label="Select option"/>}
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="primary"
                  onDelete={(e) => handleDelete(e, item, "bu")}
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Box>
          )}
        >
          {names?.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={buName?.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, mt: 2, mb: 3, width: "15%" }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Project</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedProject}
          onChange={(value)=>handleChange1(value, 'project')}
          input={<TextField label="selectProject" />}
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="primary"
                  onDelete={(e) => handleDelete(e, item, "project")}
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Box>
          )}
        >
          {projectData?.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedProject?.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
