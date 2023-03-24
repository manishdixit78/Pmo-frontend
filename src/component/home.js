import React, { useState, useEffect } from 'react'
import axios from "axios";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    CardHeader,
} from '@material-ui/core/'
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollapsibleTable from './companyTable';
import BasicSelect from './filter';
import EmployeeTable from './updatedEmployee';
import ProjectTable from './projectTable';
import Paper from '@mui/material/Paper';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Home() {
    const classes = useStyles()
    const [apiData, setApiData] = useState();
    const [cardSelect, setCardSelect] = useState(false);
    const [selectedCard, setSelectedCard] = useState();
    const [cardData, setCardData] = useState({
        company: true,
        bussiness: false,
        projects: false,
        employees: false
    })
  const [searchData, setSearchData] = useState('');
  console.log('searchData : ', searchData)
    const data = [
        { title: 'COMPANY', total: 100, active: 30, key1: 'Total Employee', key2: 'Active Resources' },
        { title: 'BUSINESS UNIT', total: 100, active: 50, key1: 'Total Business Unit', key2: 'Active Business' },
        { title: 'PROJECTS', total: 100, active: 50, key1: 'Total Projects', key2: 'Active Projects' },
        { title: 'EMPLOYEES', total: 100, active: 10, key1: 'Total Employee', key2: 'Active Employees' }
    ]

    const handleSearch =(e)=>{
        setSearchData(e.target.value);
    }

    const handleCard = (title)=>{
        setSelectedCard(title);
        setCardSelect(true);
        if(title === 'BUSINESS UNIT'){
            title = 'bussiness';
        }
        setCardData({
            company: false,
            bussiness: false,
            projects: false,
            employees: false,
            [title.toLowerCase()]: true
        })
    };

    const getTableHeader = (cardData)=> {
        if(cardData.company){
            return 'Company Listing';
        } else if(cardData.bussiness){
            return 'Business Unit Listing';
        } else if(cardData.projects){
            return 'Project Listing';
        } else if(cardData.employees){
            return 'Employee Listing';
        }
    };

    // const getCardTitle = (title)=> {
    //     if(cardData.company && selectedCard === title){
    //         <Typography style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>{title}</Typography>
    //     } else {
    //         <Typography style={{fontSize: '25px', fontWeight: 'bold'}}>{title}</Typography>
    //     }
    // };

    return (
        <>
        <div className={classes.root}>
        <Box sx={{ justifyContent: 'flex-start' }} style={{fontSize: '25px', padding: '20px', fontWeight: 'bold'}}><WysiwygIcon />Organisation Dashboard</Box>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map((elem, index) => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                        <Card onClick={(e)=>handleCard(elem.title)}>
                        <CardActionArea sx={{  backgroundColor: (selectedCard === elem.title || (cardData.company && index === 0)) ? '#3366ff': 'white' }}>
                            <CardHeader
                            
                            avatar={
                                <AccountCircleIcon />
                              }
                                  title= {<Typography style={{fontSize: '25px', fontWeight: 'bold'}}>{elem.title}</Typography>} 
                                  action={
                                    <IconButton aria-label="settings">
                                      <MoreVertIcon />
                                    </IconButton>
                                  }
                            />
                            <CardContent>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                 <Grid item xs={6}>
                                    <Typography style={{color: "gray"}}>{elem.key1}</Typography>
                                    <Typography style={{fontSize: '27px', fontWeight: 'bold', m: 1 }}>{elem.total}</Typography>
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Typography style={{color: "gray"}}>{elem.key2}</Typography>
                                    <Typography style={{fontSize: '27px', fontWeight: 'bold', m: 1}}>{elem.active}</Typography>

                                 </Grid>
                              </Grid>
                            </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
        <br />
        <BasicSelect />
        {(cardSelect || cardData.company) && (
        <Paper sx={{ ml:1, width: '98%'}} elevation={3}>
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent='space-between'
            >
           <Box style={{fontSize: '25px', padding: '20px'}}>{getTableHeader(cardData)}</Box>
           <TextField
                id="search-bar"
                className="text"
                label="Search"
                onChange={(e)=>handleSearch(e)}
                value={searchData}
                variant="outlined"
                placeholder="Search..."
                size="small"
                style={{margin: '15px'}}
             />
        </Grid>
           { cardData.company && (
           <CollapsibleTable />
           )}
           { cardData.projects && (
               <ProjectTable />
           )}
           { cardData.employees && (
           <EmployeeTable />
           )}
        </Paper>
        )}
        </>
    )
};