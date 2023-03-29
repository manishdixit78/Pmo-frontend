import React, { useState, useEffect } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
} from '@material-ui/core/'
import { CardActionArea } from '@mui/material';
import CollapsibleTable from './companyTable';
import BasicSelect from './filter';
import EmployeeTable from './updatedEmployee';
import ProjectTable from './projectTable';
import Paper from '@mui/material/Paper';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BusinessIcon from '@mui/icons-material/Business';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import BarChart from './test';


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
    const [cardSelect, setCardSelect] = useState(false);
    const [selectedCard, setSelectedCard] = useState();
    const [cardData, setCardData] = useState({
        company: true,
        bussiness: false,
        projects: false,
        employees: false
    })
    const [selectedBar, setSelectedBar] = useState({
        green: false,
        orange: false,
        red: false
    });
  const [exportData, setExportData] = useState(null);
  const [searchData, setSearchData] = useState('');
    const data = [
        { title: 'COMPANY', total: 500, active: 30, key1: 'Total Employee', key2: 'Active Resources' },
        { title: 'BUSINESS UNIT', total: 200, active: 50, key1: 'Total Business Unit', key2: 'Active Business' },
        { title: 'PROJECTS', total: 300, active: 50, key1: 'Total Projects', key2: 'Active Projects' },
        { title: 'EMPLOYEES', total: 200, active: 10, key1: 'Total Employee', key2: 'Active Employees' }
    ];

    function CallBack (childData){
        setExportData(childData);
    }

    const {onDownload} = useDownloadExcel({
      currentTableRef: exportData?.current,
      filename: 'Table_Data',
      sheet: 'TableData'
  
    })

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

    const getCardTitle = (title)=> {
        if(selectedCard === title){
           return <Typography style={{fontSize: '25px', fontWeight: 'bold', color: 'white'}}>{title}</Typography>
        } else {
           return  <Typography style={{fontSize: '25px', fontWeight: 'bold'}}>{title}</Typography>
        }
    };

    const getCardSubTitle = (key)=>{
       if(selectedCard === 'EMPLOYEES' && cardData.employees) {
        return <Typography style={{color: "White"}}>{key}</Typography>
       } else {
        return <Typography style={{color: "gray"}}>{key}</Typography>  
       }
    };

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
               <Grid item xs={12} sm={6} md={3} key={data.indexOf('')}>
                        <Card onClick={(e)=>handleCard(data[0].title)}>
                        <CardActionArea sx={{  backgroundColor: (selectedCard === data[0].title || (cardData.company)) ? '#1E479C': 'white' }}>
                            {/* <CardHeader
                            
                            // avatar={
                            //     <AccountCircleIcon />
                            //   }
                                  title= {getCardTitle(data[0].title)} 
                                //   action={
                                //     <IconButton aria-label="settings">
                                //       <MoreVertIcon />
                                //     </IconButton>
                                //   }
                            /> */}
                            <Box style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 flexWrap: 'wrap',
                                 marginLeft: '20px',
                                 marginTop: '15px'
                               }}>
                                <Box>
                                   <ApartmentIcon style = {{ fontSize: "-webkit-xxx-large"}}/>
                                </Box>
                              <Box >{getCardTitle(data[0].title)}</Box>
                            </Box>
                            <CardContent>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                 <Grid item xs={8}>
                                    <Typography style={{color: "gray"}}>{data[0].key1}</Typography>
                                    <Typography style={{fontSize: '27px', fontWeight: 'bold', m: 1, color: '#3CC026'}}>{data[0].total}</Typography>
                                 </Grid>
                                 <Grid item xs={4}>
                                 <BarChart setSelectedBar={setSelectedBar} selectedBar={selectedBar}/>
                                 </Grid>
                              </Grid>
                            </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={3} key={data.indexOf('')}>
                        <Card onClick={(e)=>handleCard(data[1].title)}>
                        <CardActionArea sx={{  backgroundColor: (selectedCard === data[1].title || (cardData.bussiness)) ? '#1E479C': 'white' }}>
                            {/* <CardHeader
                            
                            // avatar={
                            //     <AccountCircleIcon />
                            //   }
                                  title= {getCardTitle(data[1].title)} 
                                //   action={
                                //     <IconButton aria-label="settings">
                                //       <MoreVertIcon />
                                //     </IconButton>
                                //   }
                            /> */}
                            <Box style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 flexWrap: 'wrap',
                                 marginLeft: '20px',
                                 marginTop: '15px'
                               }}>
                                <Box>
                                   <BusinessIcon style = {{ fontSize: "-webkit-xxx-large"}}/>
                                </Box>
                              <Box >{getCardTitle(data[1].title)}</Box>
                            </Box>
                             {/* <Box style={{padding: "16px", marginLeft: "30px"}}>{getCardTitle(data[1].title)}</Box> */}
                            <CardContent>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                 <Grid item xs={8}>
                                    <Typography style={{color: "gray"}}>{data[1].key1}</Typography>
                                    <Typography style={{fontSize: '27px', fontWeight: 'bold', m: 1, color: '#EB7B14'}}>{data[1].total}</Typography>
                                 </Grid>
                                 <Grid item xs={4}>
                                 <BarChart setSelectedBar={setSelectedBar} selectedBar={selectedBar}/>
                                 </Grid>
                              </Grid>
                            </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={3} key={data.indexOf('')}>
                        <Card onClick={(e)=>handleCard(data[2].title)}>
                        <CardActionArea sx={{  backgroundColor: (selectedCard === data[2].title || (cardData.projects)) ? '#1E479C': 'white' }}>
                            {/* <CardHeader
                            
                            // avatar={
                            //     <AccountCircleIcon />
                            //   }
                             title= {getCardTitle(data[2].title)}
                                //   action={
                                //     <IconButton aria-label="settings">
                                //       <MoreVertIcon />
                                //     </IconButton>
                                //   }
                            /> */}
                            <Box style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 flexWrap: 'wrap',
                                 marginLeft: '20px',
                                 marginTop: '15px'
                               }}>
                                <Box>
                                   <ListAltIcon style = {{ fontSize: "-webkit-xxx-large"}}/>
                                </Box>
                              <Box >{getCardTitle(data[2].title)}</Box>
                            </Box>
                             {/* <Box style={{padding: "16px", marginLeft: "30px"}}>{getCardTitle(data[2].title)}</Box> */}
                            <CardContent>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                 <Grid item xs={8}>
                                    <Typography style={{color: "gray"}}>{data[2].key1}</Typography>
                                    <Typography style={{fontSize: '27px', fontWeight: 'bold', m: 1 , color: '#3CC026'}}>{data[2].total}</Typography>
                                 </Grid>
                                 <Grid item xs={4}>
                                 <BarChart setSelectedBar={setSelectedBar} selectedBar={selectedBar}/>
                                 </Grid>
                              </Grid>
                            </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={3} key={data.indexOf('')}>
                        <Card onClick={(e)=>handleCard(data[3].title)}>
                        <CardActionArea sx={{  backgroundColor: (selectedCard === data[3].title || (cardData.employees)) ? '#1E479C': 'white' }}>
                            {/* <CardHeader
                            
                            // avatar={
                            //     <AccountCircleIcon />
                            //   }
                            title= {getCardTitle(data[3].title)}
                            /> */}
                            <Box style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 flexWrap: 'wrap',
                                 marginLeft: '20px',
                                 marginTop: '15px'
                               }}>
                                <Box>
                                   <PersonIcon style = {{ fontSize: "-webkit-xxx-large"}}/>
                                </Box>
                              <Box >{getCardTitle(data[3].title)}</Box>
                            </Box>
                             {/* <Box style={{padding: "16px", marginLeft: "30px"}}>{getCardTitle(data[3].title)}</Box> */}
                            <CardContent>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                 <Grid item xs={8}>
                                     {getCardSubTitle(data[3].key1)}
                                    <Typography style={{fontSize: '27px', fontWeight: 'bold', m: 1, color: 'red' }}>{data[3].total}</Typography>
                                 </Grid>
                                 <Grid item xs={4}>
                                 <BarChart setSelectedBar={setSelectedBar} selectedBar={selectedBar}/>
                                 </Grid>
                              </Grid>
                            </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                     </Grid>
            </Grid>
        </div>
        <br />
        { (cardData.employees) && (
        <BasicSelect onDownload={onDownload}/>
        )}
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
           { (cardData.employees) && (
           <EmployeeTable selectedBar={selectedBar} handleCallback={CallBack}/>
              )}
           {/* { (cardData.employees && selectedBar.green) ? (
           <EmployeeTable />
           ): (cardData.employees) ? <ProjectTable /> : null} */}
        </Paper>
        )}
        </>
    )
};