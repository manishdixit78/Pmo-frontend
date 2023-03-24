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

// const rows = [
//     createData('Delivery Resources', 'Aman', 1234, 'aman@successive.tech', 'Noida', 'Node', 'Akshay Chauhan', '12 Oct 2022'),
//     createData('Operation Resources', 'Rajat', 1234, 'rajat@successive.tech', 'Pune', 'Node', 'Akshay Chauhan', '13 Oct 2022'),
//     createData('Vendor Resources(Delivery)', 'Satish', 1234, 'satish@successive.tech', 'Noida', 'Php Js', 'Akshay Chauhan', '14 Oct 2022'),
//     createData('Vendor Resources(Operations)', 'Mohit', 1234, 'mohit@successive.tech', 'Noida', 'Php Js', 'Akshay Chauhan', '15 Oct 2022'),
//   ];

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
// const rows1 = [
//     createDatarow1('Delivery Resources', 'Aman', 12345678, 'aman@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Dentsu', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Delivery Resources', 'Aman', 12345678, 'aman@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'PMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Delivery Resources', 'Rajat', 1234345, 'rajat@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'PMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Operation Resources', 'Satish', 12345678, 'satish@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Marketcube', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Operation Resources', 'Mohit', 1234345, 'prashant@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'Citizin', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Vendor Resources(Delivery)', 'Ravi', 12345678, 'ravi@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Paya', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Vendor Resources(Delivery)', 'Sumit', 1234345, 'sumit@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'DMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Vendor Resources(Operations)', 'Vishal', 12345678, 'vishal@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'RMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//     createDatarow1('Vendor Resources(Operations)', 'Pradeep', 1234345, 'pradeep@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'PHP', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
//   ];
let rows1 = [];
let updatedRow;

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
        <TableCell align="right">{row.empId}</TableCell>
        <TableCell align="right">{row.empEmail}</TableCell>
        <TableCell align="right">{row.empLocation}</TableCell>
        <TableCell align="right">{row.empDept}</TableCell>
        <TableCell align="right">{row.empManager}</TableCell>
        <TableCell align="right">{row.empJoinDate}</TableCell>
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
            <TableCell align="right">Allocation Start Date</TableCell>
            <TableCell align="right">Allocation End Date</TableCell>
            <TableCell align="right">No. of Hrs(day) allocated</TableCell>
            <TableCell align="right">Current Utilization Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedRow.map((row) => ( 
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

export default function EmployeeTable() {
    const [apiData, setApiData] = React.useState();
    const [projectData, setProjectData] = React.useState([])
    let rows = []; 
    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(50);
  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
    const baseURL = "https://test.resource-api.writso.com/v3/resources-availability-download-new?location=&department=&availability=All&billing=&projects=&exclude_trainee=false&name=&page=1";
  
    let tokenStr = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWFuaXNoIERpeGl0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGFNdld5bnlPSzc1VWJ6WVNzODlpODRfenB4Ykk5TkpLQzhSUXBUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc291cmNlLWF2YWlhYmlsaXR5IiwiYXVkIjoicmVzb3VyY2UtYXZhaWFiaWxpdHkiLCJhdXRoX3RpbWUiOjE2Nzk1NTQ5NDQsInVzZXJfaWQiOiJMQ1k0UkVkRlhTWkYzTjlEbzlBQnFhMmo0S0IyIiwic3ViIjoiTENZNFJFZEZYU1pGM045RG85QUJxYTJqNEtCMiIsImlhdCI6MTY3OTU1NDk0NCwiZXhwIjoxNjc5NTU4NTQ0LCJlbWFpbCI6Im1hbmlzaC5kaXhpdEBzdWNjZXNzaXZlLnRlY2giLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExODM5NzE5ODMxNTY2OTY2OTUwNyJdLCJlbWFpbCI6WyJtYW5pc2guZGl4aXRAc3VjY2Vzc2l2ZS50ZWNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.OnRoBFvgdjRzQ7_lh1qXOu-Kjr96o68saqQe4We3EYtX_2m5LxH2-2SD6Ztjn3AQF-nBMmf26CuCxUFHZfi54yR7DidaEd_uFYgRMrYn1YQBYL85gySzx_sJlw4HQQbbQ8v5QBSC2_4C7yQMUK9JFHpdcFD5RSzx18RGmKeAWruVJ-8mRK-UGRvcjzZoQbfYMPKMi479EN8pZKcQrVcO9jdS0pCTspldBh2v-gb_JqBwTqcsg4fh99shz54dKizqlFMTE34a7Wo-oOvEFaR8tS0hQsjK0jvhdMDfWiuXjapDPaI2qRCtlke6pEeDncioLwvDQnIA8HL_8kjF-8fqyQ"
    React.useEffect(() => {
        axios.get(baseURL, { headers: {"Authorization" : tokenStr} }).then((response) => {
           setApiData(response.data.data.allResources);
        });
      }, []);
    console.log('Api data->>>>>>>67',apiData);

    apiData?.forEach((data) =>{
        const { user_department, full_name, employee_id, email, location, user_booking  } = data;
        rows.push(createData(user_department, full_name, employee_id, email, location, user_department, '', ''));
        user_booking?.forEach((projectData) => {
            const { hours_per_day, start_date, end_date, project } = projectData;
            rows1.push(createDatarow1(user_department, full_name, employee_id, email, location, '', '', project.project_name, 'Internal', project.billing_type.name, start_date, end_date, hours_per_day, ''));
            });
    });

    // console.log('200->>>>>>>>', rows1);
    const uniqueArray = rows1.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === rows1.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        });
      });
    updatedRow = uniqueArray;
    console.log('207->>>>>>>>', updatedRow);
  return (
      <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Resource Name</TableCell>
            <TableCell align="right">Resource ID</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Business Unit</TableCell>
            <TableCell align="right">Reporting to</TableCell>
            <TableCell align="right">Date of Joining</TableCell>
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