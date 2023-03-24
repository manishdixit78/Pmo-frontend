import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TablePagination from "@mui/material/TablePagination";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function createData(projectName, totalResources, projectType) {
  return {
    projectName,
    totalResources,
    projectType,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

const rows = [
    createData('Dentsu', '200', 'Hourly'),
    createData('Career Direct', '400', 'Retainer'),
    createData('Marketcube', '300', 'Fixed Cost'),
  ];

function createDatarow1(projectName, name, employeeId, billingType, startDate, EndDate, time, cut) {
    return {
      projectName,
      name,
      employeeId,
      billingType, 
      startDate, 
      EndDate, 
      time, 
      cut,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }
const rows1 = [
    createDatarow1('Dentsu', 'Aman', 12345678, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
    createDatarow1('Dentsu', 'Rajat', 1234345, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
    createDatarow1('Career Direct', 'Mohit', 1234345, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
    createDatarow1('Career Direct', 'Ravi', 12345678, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
    createDatarow1('Marketcube', 'Sumit', 1234345, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
    createDatarow1('Marketcube', 'Vishal', 12345678, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
    createDatarow1('Marketcube', 'Pradeep', 1234345, 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Scheduled'),
  ];
// let rows1 = [];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [set1, setSet1] = React.useState();
  const handleClick = (name) => {
      setSet1(name);
      setOpen(!open)
    }
 
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleClick(row.projectName)}
          >
            {open ? <RemoveCircleIcon style={{ color: "2559C3" }}/> : <AddCircleIcon style={{ color: "2559C3" }}/>}
          </IconButton>
        </TableCell>
        <TableCell component="th">
        <CardHeader
           avatar={
               <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            }
            title={row.projectName}
        />
        </TableCell>
        <TableCell align="right">{row.totalResources}</TableCell>
        <TableCell align="right">{row.projectType}</TableCell>
      </TableRow>
      <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
            <TableHead >
          <TableRow>
            <TableCell sx={{pt:0, pb:0, mt:0, mb:0}}>Resource Name</TableCell>
            <TableCell sx={{p:8}}>Resource ID</TableCell>
            <TableCell sx={{p:8}}>Billing Type</TableCell>
            <TableCell sx={{p:8}}>Allocation Start Date</TableCell>
            <TableCell sx={{p:8}}>Allocation End Date</TableCell>
            <TableCell sx={{p:8}}>Hours Allocated</TableCell>
            <TableCell sx={{p:8}}>Current Utilization Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => ( 
              (set1 === row.projectName) && 
            <TableRow
            // colSpan={5} 
            //   key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{width:'100%'}}>
                {row.name}
              </TableCell>
              <TableCell>{row.employeeId}</TableCell>
              <TableCell>{row.billingType}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.EndDate}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.cut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
    </React.Fragment>
  );
}

export default function ProjectTable() {
    // const [page, setPage] = React.useState(1);
    // const handleChange1 = (event, value) => {
    //   setPage(value);
    // };
    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(2);
  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
 
  return (
      <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project (s)</TableCell>
            <TableCell align="right">Total Resources</TableCell>
            <TableCell align="right">Project Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(pg * rpg, pg *
                            rpg + rpg).map((row) => (
            <Row key={row.deptName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={10}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
    {/* <Stack spacing={3}>
    <Typography>Page: {page}</Typography>
    <Pagination count={10} page={page} onChange={handleChange1} size={'medium'}/>
  </Stack> */}
  </>
  );
}

Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };