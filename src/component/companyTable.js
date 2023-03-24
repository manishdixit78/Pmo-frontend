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
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function createData(deptName, totalEmployees, activeResources, inactiveResources, deptHead, date) {
  return {
    deptName,
    totalEmployees,
    activeResources,
    inactiveResources,
    deptHead,
    date,
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
    createDatarow1('Delivery Resources', 'Aman', 12345678, 'aman@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Dentsu', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Delivery Resources', 'Rajat', 1234345, 'rajat@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'PMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Operation Resources', 'Satish', 12345678, 'satish@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Marketcube', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Operation Resources', 'Prashant', 1234345, 'prashant@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'Citizin', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Vendor Resources(Delivery)', 'Ravi', 12345678, 'ravi@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'Paya', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Vendor Resources(Delivery)', 'Sumit', 1234345, 'sumit@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'DMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Vendor Resources(Operations)', 'Vishal', 12345678, 'vishal@successive.tech', 'Noida', 'Akshay Chauhan', '01-01-2023', 'RMO', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
    createDatarow1('Vendor Resources(Operations)', 'Pradeep', 1234345, 'pradeep@successive.tech', 'Pune', 'Akshay Chauhan', '01-01-2023', 'PHP', 'Hourly', 'Billable', 'Oct 20,2022', 'Dec 31, 2020', '8 Hours', 'Lorem lpsum Data'),
  ];

function CollapsibleTable1(props) {
    const { rowsData } = props;
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Resource Name</TableCell>
              <TableCell align="right">Resource ID</TableCell>
              <TableCell align="right">Resource Email</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Reporting To</TableCell>
              <TableCell align="right">Date Joined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
                ( row.deptName === rowsData.deptName) &&
              <Row2 key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
function Row2(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [set1, setSet1] = React.useState();
    const handleClick = (name) => {
        console.log('The link was clicked.', name);
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
            onClick={() => handleClick(row.name)}
            >
              {open ? <RemoveCircleIcon /> : <AddCircleIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.employeeId}</TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.location}</TableCell>
          <TableCell align="right">{row.manager}</TableCell>
          <TableCell align="right">{row.date}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
              <TableHead>
          <TableRow>
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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveCircleIcon /> : <AddCircleIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.deptName}
        </TableCell>
        <TableCell align="right">{row.totalEmployees}</TableCell>
        <TableCell align="right">{row.activeResources}</TableCell>
        <TableCell align="right">{row.inactiveResources}</TableCell>
        <TableCell align="right">{row.deptHead}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
                <CollapsibleTable1 rowsData={row}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
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

const rows = [
  createData('Delivery Resources', 150, 100, 24, 'Akshay Chauhan', '01-01-2023'),
  createData('Operation Resources', 123, 40, 37, 'Akshay Chauhan', '01-01-2023'),
  createData('Vendor Resources(Delivery)', 262, 160, 24, 'Akshay Chauhan', '01-01-2023'),
  createData('Vendor Resources(Operations)', 305, 37, 67, 'Akshay Chauhan', '01-01-2023'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Department</TableCell>
            <TableCell align="right">Total Employees</TableCell>
            <TableCell align="right">Active Resources</TableCell>
            <TableCell align="right">Inactive Resources</TableCell>
            <TableCell align="right">Department Head</TableCell>
            <TableCell align="right">Creation Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.deptName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
