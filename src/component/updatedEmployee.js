import * as React from 'react';
// import { useState, useEffect } from 'react'
import axios from "axios";
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
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TablePagination from "@mui/material/TablePagination";

function createData(deptName, empName, empId, empEmail, empLocation, empDept, empManager, empJoinDate) {
  return {
    deptName,
    empName,
    empId,
    empEmail,
    empLocation,
    empDept,
    empManager,
    empJoinDate,
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
    createData('Delivery Resources', 'Aman', '', '30%', '20%', 'PHP Js', 'Noida'),
    createData('Operation Resources', 'Rajat', '', '50%', '30%', 'Node', 'Pune'),
    createData('Vendor Resources(Delivery)', 'Satish', '', '10%', '20%', 'HR', 'Noida'),
    createData('Vendor Resources(Operations)', 'Mohit', '', '60%', '20%', 'Node', 'Noida'),
  ];

const rows2 = [
    createData('Delivery Resources', 'Prince', '', '40%', '20%', 'PHP Js', 'Noida'),
    createData('Operation Resources', 'Vinay', '', '10%', '30%', 'Node', 'Pune'),
    createData('Vendor Resources(Delivery)', 'Ravi', '', '10%', '20%', 'HR', 'Noida'),
    createData('Vendor Resources(Operations)', 'Santosh', '', '30%', '20%', 'Node', 'Noida'),
  ];

function createDatarow1(deptName, name, employeeId, email, location, manager, date, projName, projType, billingType, startDate, EndDate, time, cut) {
    return {
      deptName,
      name,
      employeeId,
      email,
      location,
      manager,
      date,
      projName, 
      projType, 
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
    createDatarow1('Delivery Resources', 'Aman', 12345678, 'aman@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Dentsu', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Delivery Resources', 'Aman', 12345678, 'aman@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'PMO', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Delivery Resources', 'Rajat', 1234345, 'rajat@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'PMO', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Operation Resources', 'Satish', 12345678, 'satish@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Marketcube', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Operation Resources', 'Mohit', 1234345, 'prashant@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'Citizin', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Vendor Resources(Delivery)', 'Ravi', 12345678, 'ravi@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Paya', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Vendor Resources(Delivery)', 'Prince', 1234345, 'sumit@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'DMO', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Vendor Resources(Operations)', 'Vinay', 12345678, 'vishal@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'RMO', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
    createDatarow1('Vendor Resources(Operations)', 'Santosh', 1234345, 'pradeep@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'PHP', 'Managed Services(Hourly)', 'Bilable', '', '22%', '20%', '8 Hours'),
  ];

function Row(props) {
  const { row, selectedBar } = props;
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
            onClick={() => handleClick(row.empName)}
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
  title={row.empName}
/>
        </TableCell>
        <TableCell align="right"><Chip style={{ width: '50px', height: '25px', backgroundColor: selectedBar.green ? '#3CC026' : selectedBar.orange ? '#EB7B14' : '#EA111E'}} color="error" /></TableCell>
        <TableCell align="right">{row.empEmail}</TableCell>
        <TableCell align="right">{row.empLocation}</TableCell>
        <TableCell align="right">{row.empDept}</TableCell>
        <TableCell align="right">{row.empManager}</TableCell>
      </TableRow>
      <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
        <TableHead >
          <TableRow >
            <TableCell>Project(s)</TableCell>
            <TableCell align="right">Project Type</TableCell>
            <TableCell align="right">Billing Type</TableCell>
            <TableCell align="right">Monthly RAG Status</TableCell>
            <TableCell align="right">Monthly GM%</TableCell>
            <TableCell align="right">Yearly GM%</TableCell>
            <TableCell align="right">Allocated hrs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => ( 
              (set1 === row.name) && 
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.projName}
              </TableCell>
              <TableCell align="right">{row.projType}</TableCell>
              <TableCell align="right">{row.billingType}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.EndDate}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.cut}</TableCell>
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

export default function EmployeeTable(props) {
    
    const { selectedBar } = props;
    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(50);
  
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
            <TableCell>Resource Name</TableCell>
            <TableCell align="right">Monthly RAG Status</TableCell>
            <TableCell align="right">Monthly GM%</TableCell>
            <TableCell align="right">Yearly GM%</TableCell>
            <TableCell align="right">Business Unit</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(selectedBar.green ? rows : rows2).slice(pg * rpg, pg *
                            rpg + rpg).map((row) => (
            <Row key={row.deptName} row={row} selectedBar={selectedBar}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
     rowsPerPageOptions={[5, 10, 25]}
     component="div"
     count={500}
     rowsPerPage={rpg}
     page={pg}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
     />
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