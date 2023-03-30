import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Grid } from "@material-ui/core/";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from '@mui/material/CircularProgress';
import {
  Typography,
  Paper,
  Avatar,
  IconButton,
  Tooltip
} from "@mui/material";

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
import {deepOrange} from "@mui/material/colors";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import tokenStr from "../config";

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

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '33px',
  height: '35px',
  };

export default function BasicSelect(props) {
  const { onDownload } = props;
  const [buName, setBuName] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [names, setNames] = useState();
  const [isBuToolpitOpen, setIsBuToolpitOpen] = useState();
  const [isProjectToolpitOpen, setIsProjectToolpitOpen] = useState();
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState();
  const [ arrowDirection, setArrowDirection] = useState(true);

  const ref = useRef(null);

  const buURL = "https://dev.resource-api.writso.com/v1/departments";

  const projectURL = "https://dev.resource-api.writso.com/v1/projects";

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setIsBuToolpitOpen(false);
  //       setIsProjectToolpitOpen(false);
  //     }
  //   }

  //   // Bind the event listener
  //   window.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     window.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [ref]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(buURL, { headers: { Authorization: tokenStr } })
      .then((response) => {
        setNames(response.data.data);
        setLoading(false)
      });
    axios
      .get(projectURL, { headers: { Authorization: tokenStr } })
      .then((response) => {
        const { data } = response;
        let projectList = data?.data?.map((project) => {
          return project.name;
        });
        setProjectData(projectList);
      });
  }, []);
  const handleChange1 = (event, key) => {
    // setArrowDirection(!arrowDirection);
    const {
      target: { value },
    } = event;
    if (key === "bu") {
      setBuName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
    if (key === "project") {
      setSelectedProject(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };

  const handleDelete = (event, val, key) => {
    if (key === "bu") {
      const filteredArray = buName.filter((e) => e !== val);
      setBuName(filteredArray);
    }
    if (key === "project") {
      const filteredArray = selectedProject.filter((e) => e !== val);
      setSelectedProject(filteredArray);
    }
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: "170px",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const handleTooltipOpen = (value)=>{
    if ( value === 'buFilter') {
      setIsBuToolpitOpen(true);
      setIsProjectToolpitOpen(false);
    }
    if ( value === 'projectFilter') {
      setIsProjectToolpitOpen(true);
      setIsBuToolpitOpen(false);
    }
  }
  const handleTooltipClose = (value)=>{
    if ( value === 'buFilter') {
      setIsBuToolpitOpen(false);
    }
    if ( value === 'projectFilter') {
      setIsProjectToolpitOpen(false);
    }
  }

  console.log('buData->>>', buName);
  // if(loading){
  //   return (
  //     <Box sx={{ display: 'flex' }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }
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
      <FormControl sx={{ m: 1, mt: 2, mb: 3, width: "15%" }}>
        <InputLabel id="demo-multiple-checkbox-label">Select BU</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={buName}
          isLoading={loading}
          onChange={(value) => handleChange1(value, "bu")}
          input={<TextField label="Select option" />}
          MenuProps={MenuProps}
          IconComponent={() =>
            <>
            {buName.length > 2 ? (
              <Tooltip ref={ref}
                PopperProps={{
                  disablePortal: true,
                }}
                sx={{ borderColor: "none" }}
                style={{ borderColor: "none" }}
                onClose={() => handleTooltipClose('buFilter')}
                open={isBuToolpitOpen}
                disableHoverListener
                // disableTouchListener
                title={
                  <div style={{ borderColor: "none" }}>
                    <Box
                      sx={{
                        border: "none",
                        display: "flex",
                        margin: -2,
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: "200px",
                          maxHeight: "800px",
                        },
                      }}
                    >
                      <Paper
                        elevation={3}
                        style={{
                          maxHeight: buName.length > 5 ? 250 : 400,
                          overflow: buName.length > 5 ? "auto" : "",
                        }}
                      >
                        {buName.slice(2).map((itm) => {
                          return (
                            <Chip
                              avatar={
                                <Avatar
                                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                                  sx={{
                                    mr: 1,
                                    width: 30,
                                    height: 30,
                                    bgcolor: deepOrange[400],
                                  }}
                                >
                                  {itm}
                                </Avatar>
                              }
                              key={itm}
                              variant="outlined"
                              clickable
                              onDelete={(e) => handleDelete(e, itm, "bu")}
                              deleteIcon={
                                <CancelIcon
                                  onMouseDown={(event) =>
                                    event.stopPropagation()
                                  }
                                />
                              }
                              onClick={(e) => handleDelete(e, itm, "bu")}
                              sx={{ border: "none", margin: 1 }}
                              label={
                                <div>
                                  <Typography
                                    sx={{ fontSize: "14px" }}
                                  >{itm}</Typography>
                                </div>
                              }
                            />
                          );
                        })}
                      </Paper>
                    </Box>
                  </div>
                }
              >
                <IconButton
                  onClick={()=> handleTooltipOpen('buFilter')}
                  sx={{ ...commonStyles, color: "blue" }}
                  size="small"
                  variant="outlined"
                >
                  <span style={{ fontSize: "15px" }}>{`+${
                    buName.slice(2).length
                  }`}</span>
                </IconButton>
              </Tooltip>
            ) : (
             ""
            )}
            {arrowDirection ? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
            </>
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.slice(0,2).map((item) => (
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
        <InputLabel id="demo-multiple-checkbox-label">
          Select Project
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedProject}
          onChange={(value) => handleChange1(value, "project")}
          input={<TextField label="selectProject" />}
          MenuProps={MenuProps}
          IconComponent={() =>
            <>
            {selectedProject.length > 2 ? (
              <Tooltip ref={ref}
                PopperProps={{
                  disablePortal: true,
                }}
                sx={{ borderColor: "none" }}
                style={{ borderColor: "none" }}
                onClose={() => handleTooltipClose('projectFilter')}
                open={isProjectToolpitOpen}
                disableHoverListener
                // disableTouchListener
                title={
                  <div style={{ borderColor: "none" }}>
                    <Box
                      sx={{
                        border: "none",
                        display: "flex",
                        margin: -2,
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: "250px",
                          maxHeight: "800px",
                        },
                      }}
                    >
                      <Paper
                        elevation={3}
                        style={{
                          maxHeight: selectedProject.length > 5 ? 250 : 400,
                          overflow: selectedProject.length > 5 ? "auto" : "",
                        }}
                      >
                        {selectedProject.slice(2).map((itm) => {
                          return (
                            <Chip
                              avatar={
                                <Avatar
                                  src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                                  sx={{
                                    mr: 1,
                                    width: 30,
                                    height: 30,
                                    bgcolor: deepOrange[400],
                                  }}
                                >
                                  {itm}
                                </Avatar>
                              }
                              key={itm}
                              variant="outlined"
                              clickable
                              onDelete={(e) => handleDelete(e, itm, "project")}
                              deleteIcon={
                                <CancelIcon
                                  onMouseDown={(event) =>
                                    event.stopPropagation()
                                  }
                                />
                              }
                              onClick={(e) => handleDelete(e, itm, "project")}
                              sx={{ border: "none", margin: 1 }}
                              label={
                                <div>
                                  <Typography
                                    sx={{ fontSize: "14px" }}
                                  >{itm}</Typography>
                                </div>
                              }
                            />
                          );
                        })}
                      </Paper>
                    </Box>
                  </div>
                }
              >
                <IconButton
                  onClick={()=> handleTooltipOpen('projectFilter')}
                  sx={{ ...commonStyles, color: "blue" }}
                  size="small"
                  variant="outlined"
                >
                  <span style={{ fontSize: "15px" }}>{`+${
                    selectedProject.slice(2).length
                  }`}</span>
                </IconButton>
              </Tooltip>
            ) : (
             ""
            )}
            {arrowDirection ? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
            </>
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.slice(0,2).map((item) => (
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
      {/* <FormControl sx={{ m: 1, mt: 2, mb: 3, width: "15%" }}>
      <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={50} />
      </Box>
      </FormControl> */}
    </Grid>
  );
}
