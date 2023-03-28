// import * as React from "react";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableSortLabel from '@mui/material/TableSortLabel';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TablePagination from "@mui/material/TablePagination";

function createData(
  deptName,
  empName,
  mrs,
  monthlyGm,
  yearlyGm,
  empDept,
  empLocation
) {
  return {
    deptName,
    empName,
    mrs,
    monthlyGm,
    yearlyGm,
    empDept,
    empLocation,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const rows = [
  createData(
    "Delivery Resources",
    "Aman",
    "green",
    "30%",
    "10%",
    "PHP Js",
    "Pune"
  ),
  // createData(
  //   "Delivery Resources",
  //   "Test2",
  //   "green",
  //   "30%",
  //   "10%",
  //   "PHP Js",
  //   "Pune"
  // ),
  createData(
    "Operation Resources",
    "Rajat",
    "red",
    "50%",
    "30%",
    "Node",
    "Noida"
  ),
  createData(
    "Vendor Resources(Delivery)",
    "Satish",
    "Darkorange",
    "10%",
    "20%",
    "HR",
    "Noida"
  ),
  createData(
    "Vendor Resources(Delivery)",
    "Test",
    "Darkorange",
    "10%",
    "20%",
    "HR",
    "Noida"
  ),
  // createData(
  //   "Vendor Resources(Operations)",
  //   "Mohit",
  //   "red",
  //   "60%",
  //   "40%",
  //   "Node",
  //   "Pune"
  // ),
  // createData(
  //   "Vendor Resources(Operations)",
  //   "Amit",
  //   "orange",
  //   "11%",
  //   "55%",
  //   "R&D",
  //   "Noida"
  // ),
  createData(
    "Vendor Resources(Operations)",
    "ABC",
    "green",
    "16%",
    "59%",
    "R&D",
    "Noida"
  )
];

// const rows2 = [
//     createData('Delivery Resources', 'Prince', 'warning', '40%', '20%', 'PHP Js', 'Noida'),
//     createData('Operation Resources', 'Vinay', 'warning', '10%', '30%', 'Node', 'Pune'),
//     createData('Vendor Resources(Delivery)', 'Ravi', 'warning', '10%', '20%', 'HR', 'Noida'),
//     createData('Vendor Resources(Operations)', 'Santosh', 'warning', '30%', '20%', 'Node', 'Noida'),
//   ];


function createDatarow1(
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
  mrs,
  proMonthlyGm,
  yearlyGm,
  time
) {
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
    mrs,
    proMonthlyGm,
    yearlyGm,
    time,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}
const rows1 = [
  createDatarow1(
    "Delivery Resources",
    "Aman",
    12345678,
    "aman@successive.tech",
    "Noida",
    "Akshay Chauhan",
    "01-01-2023",
    "Dentsu",
    "Managed Services(Hourly)",
    "Bilable",
    "red",
    "12%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Delivery Resources",
    "Aman",
    123456,
    "aman@successive.tech",
    "Noida",
    "Akshay Chauhan",
    "01-01-2023",
    "Dentsu1",
    "Managed Services(Hourly)",
    "Bilable",
    "green",
    "25%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Delivery Resources",
    "Aman",
    123458,
    "aman@successive.tech",
    "Noida",
    "Akshay Chauhan",
    "01-01-2023",
    "PMO",
    "Managed Services(Hourly)",
    "Bilable",
    "Darkorange",
    "22%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Delivery Resources",
    "Aman",
    1234345,
    "rajat@successive.tech",
    "Pune",
    "Akshay Chauhan",
    "01-01-2023",
    "PMO1",
    "Managed Services(Hourly)",
    "Bilable",
    "red",
    "98%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Delivery Resources",
    "Rajat",
    12,
    "rajat@successive.tech",
    "Pune",
    "Akshay",
    "11-01-2023",
    "ABC",
    "Managed",
    "Bilable",
    "red",
    "2%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Operation Resources",
    "Rajat",
    12345678,
    "satish@successive.tech",
    "Noida",
    "Akshay Chauhan",
    "01-01-2023",
    "Marketcube",
    "Managed Services(Hourly)",
    "Bilable",
    "green",
    "22%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Operation Resources",
    "Rajat",
    1234345,
    "prashant@successive.tech",
    "Pune",
    "Akshay Chauhan",
    "01-01-2023",
    "Citizin",
    "Managed Services(Hourly)",
    "Bilable",
    "Darkorange",
    "20%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Vendor Resources(Delivery)",
    "Ravi",
    12345678,
    "ravi@successive.tech",
    "Noida",
    "Akshay Chauhan",
    "01-01-2023",
    "Paya",
    "Managed Services(Hourly)",
    "Bilable",
    "green",
    "22%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Vendor Resources(Delivery)",
    "Test",
    1234345,
    "sumit@successive.tech",
    "Pune",
    "Akshay Chauhan",
    "01-01-2023",
    "DMO",
    "Managed Services(Hourly)",
    "Bilable",
    "green",
    "22%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Vendor Resources(Operations)",
    "Satish",
    12345678,
    "vishal@successive.tech",
    "Noida",
    "Akshay Chauhan",
    "01-01-2023",
    "RMO",
    "Managed Services(Hourly)",
    "Bilable",
    "red",
    "22%",
    "20%",
    "8 Hours"
  ),
  createDatarow1(
    "Vendor Resources(Operations)",
    "ABC",
    1234345,
    "pradeep@successive.tech",
    "Pune",
    "Akshay Chauhan",
    "01-01-2023",
    "PHP",
    "Managed Services(Hourly)",
    "Bilable",
    "green",
    "22%",
    "20%",
    "8 Hours"
  ),
];

function Row(props) {
  const { row, selectedBar, order, orderBy, handleRequestSort, stableSort, getComparator, pg } = props;
  const [open, setOpen] = React.useState(false);
  const [set1, setSet1] = React.useState();
  const [selectedRow, setSelectedRow] = React.useState(null);
  // console.log("new->>>>>>315", row.empName);
  useEffect(()=>{
    setOpen(false);
  },[pg])

  const handleClick = (name) => {
    // console.log('data->>>>>>>>374', selectedRow, name);
    // if (selectedRow === name) {
    //   console.log("inside ---------------------------373")
    //   setSelectedRow(null);
    //   setOpen(false);
    // } else {
    //   console.log("inside else---------------------------377")
    //   setSelectedRow(name);
    //   setOpen(true);
    // }
    // console.log('line 372->>>>>>>>>>>>>', selectedRow, name)
    setOpen(!open);
    setSet1(name);
    // setOpen(!open);
  };

  console.log('line 372->>>>>>>>>>>>>', selectedRow)

  // console.log('rows1->>>>>>>...338', stableSort(rows1, getComparator(order, orderBy)));
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(event) => handleClick(row.empName)}
          >
            {open ? (
              <RemoveCircleIcon style={{ color: "2559C3" }} />
            ) : (
              <AddCircleIcon style={{ color: "2559C3" }} />
            )}
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
        <TableCell align="right">
          <Chip
            style={{
              width: "50px",
              height: "25px",
              backgroundColor: row.mrs,
              // selectedBar.green && rows[2] === "success"
              //   ? "#3CC026"
              //   : selectedBar.orange
              //   ? "#EB7B14"
              //   : "#EA111E",
            }}
            color="primary"
          />
        </TableCell>
        <TableCell align="right">{row.monthlyGm}</TableCell>
        <TableCell align="right">{row.yearlyGm}</TableCell>
        <TableCell align="right">{row.empDept}</TableCell>
        <TableCell align="right">{row.empLocation}</TableCell>
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
                  <TableCell align="right">Monthly RAG Status</TableCell>
                  <TableCell align="right">
                  <TableSortLabel 
                  // key={row.empName}
                    active={true}
                    direction={orderBy === 'proMonthlyGm' ? order : 'asc'}
                    onClick={() => {handleRequestSort('proMonthlyGm')}}
                    style={{flexDirection: 'row'}}
                    >
                    Monthly GM%
                   </TableSortLabel>
                    </TableCell>
                  <TableCell align="right">Yearly GM%</TableCell>
                  <TableCell align="right">Allocated hrs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(rows1, getComparator(order, orderBy)).map(
                  (row) =>
                    set1 === row.name ? (
                      <TableRow
                        // key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.projName}
                        </TableCell>
                        <TableCell align="right">{row.projType}</TableCell>
                        <TableCell align="right">{row.billingType}</TableCell>
                        <TableCell align="right">
                          {" "}
                          <Chip
                            style={{
                              width: "50px",
                              height: "25px",
                              backgroundColor: row.mrs,
                            }}
                            color="primary"
                          />
                        </TableCell>
                        <TableCell align="right">{row.proMonthlyGm}</TableCell>
                        <TableCell align="right">{row.yearlyGm}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                      </TableRow>
                    ) : null
                )}
              </TableBody>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function EmployeeTable(props) {
  const { selectedBar, handleCallback } = props;
  const [order, setOrder] = React.useState();
  const [orderBy, setOrderBy] = React.useState();
  let aa2 = rows;
  let newArray = aa2.filter(function (el) {
    if (selectedBar.green) {
      return el.mrs === "green";
    }
    if (selectedBar.orange) {
      return el.mrs === "Darkorange";
    }
    if (selectedBar.red) {
      return el.mrs === "red";
    }
  });
  
  const isBarSelected = Object.values(selectedBar).some(
    (value) => value === true
  );
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(3);

  const tableref = React.useRef(null);

  handleCallback(tableref);
  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const handleRequestSort = (property) => {
    setOrderBy(property);
    // console.log('propert-->>>>453', property, orderBy)
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
 
  return (
    <>
        {/* <Button onClick={onDownload}>Export</Button> */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" ref={tableref}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Resource Name</TableCell>
              <TableCell align="right">Monthly RAG Status</TableCell>
              <TableCell align="right">
              <TableSortLabel 
              active={true}
              direction={orderBy === 'monthlyGm' ? order : 'asc'}
              onClick={() => {handleRequestSort('monthlyGm')}}
              style={{flexDirection: 'row'}}
              >
                Monthly GM%
                </TableSortLabel>
                </TableCell>
              <TableCell align="right">
              <TableSortLabel
              active={true}
              direction={orderBy === 'yearlyGm' ? order : 'asc'}
              onClick={() => {handleRequestSort('yearlyGm')}}
              style={{flexDirection: 'row'}}
              >
                Yearly GM%
                </TableSortLabel>
                </TableCell>
              <TableCell align="right">
              <TableSortLabel
              active={true}
              direction={orderBy === 'empDept' ? order : 'asc'}
              onClick={() => {handleRequestSort('empDept')}}
              style={{flexDirection: 'row'}}
              >
                Business Unit
                </TableSortLabel>
                </TableCell>
              <TableCell align="right">
              <TableSortLabel
              active={true}
              direction={orderBy === 'empLocation' ? order : 'asc'}
              onClick={() => {handleRequestSort('empLocation')}}
              style={{flexDirection: 'row'}}
              >
                Location
                </TableSortLabel>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isBarSelected
              ? stableSort(newArray, getComparator(order, orderBy))
                  .slice(pg * rpg, pg * rpg + rpg)
                  .map((row) => (
                    <Row
                      // key={row.deptName}
                      row={row}
                      selectedBar={selectedBar}
                      order={order}
                      orderBy={orderBy}
                      handleRequestSort={handleRequestSort}
                      getComparator={getComparator}
                      stableSort={stableSort}
                      pg={pg}
                    />
                  ))
              : stableSort(rows, getComparator(order, orderBy))
                  .slice(pg * rpg, pg * rpg + rpg)
                  .map((row) => (
                    <Row
                      // key={row.deptName}
                      row={row}
                      selectedBar={selectedBar}
                      order={order}
                      orderBy={orderBy}
                      handleRequestSort={handleRequestSort}
                      getComparator={getComparator}
                      stableSort={stableSort}
                      pg={pg}
                    />
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
