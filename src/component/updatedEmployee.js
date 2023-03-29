// import * as React from "react";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
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
  uuid,
  empName,
  mrs,
  monthlyGm,
  yearlyGm,
  empDept,
  empLocation
) {
  return {
    uuid,
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
    '1',
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
    "2",
    "Operation Resources",
    "Rajat",
    "red",
    "50%",
    "30%",
    "Node",
    "Noida"
  ),
  createData(
    "3",
    "Vendor Resources(Delivery)",
    "Satish",
    "Darkorange",
    "10%",
    "20%",
    "HR",
    "Noida"
  ),
  createData(
    "4",
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
    "5",
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

function projectCreateDatarow(
  name,
  projName,
  projType,
  billingType,
  mrs,
  proMonthlyGm,
  yearlyGm,
  time
) {
  return {
  name,
  projName,
  projType,
  billingType,
  mrs,
  proMonthlyGm,
  yearlyGm,
  time
  };
}

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
    "Anil Kumar Chauhan",
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
    "Anil Kumar Chauhan",
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

let projectRows = [];
let updatedRow;

function Row(props) {
  const { row, selectedBar, order, orderBy, handleRequestSort, stableSort, getComparator, pg, open, setOpen } = props;
  const [set1, setSet1] = React.useState();
  // console.log("new->>>>>>315", row.empName);
  useEffect(()=>{
    setOpen(false);
  },[pg])

  const handleClick = (value, name) => {
    setOpen((prev) => (value === prev ? '' : value));
    setSet1(name);
  };

  // console.log('line 372->>>>>>>>>>>>>', open)

  // console.log('rows1->>>>>>>...338', stableSort(rows1, getComparator(order, orderBy)));
  // console.log('row====> : ', row)
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(event) => handleClick(row.uuid, row.empName)}
          >
            {open === row.uuid ? (
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
          <Collapse in={open === row.uuid} timeout="auto" unmountOnExit>
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
                {stableSort(updatedRow, getComparator(order, orderBy)).map(
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
  const [apiData, setApiData] = React.useState();
  const [order, setOrder] = React.useState();
  const [orderBy, setOrderBy] = React.useState();
  const [open, setOpen] = React.useState('');
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(50);
  const [loading, setLoading] = useState(false);

  
  let tokenStr = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWFuaXNoIERpeGl0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGFNdld5bnlPSzc1VWJ6WVNzODlpODRfenB4Ykk5TkpLQzhSUXBUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc291cmNlLWF2YWlhYmlsaXR5IiwiYXVkIjoicmVzb3VyY2UtYXZhaWFiaWxpdHkiLCJhdXRoX3RpbWUiOjE2ODAwNzM5NDIsInVzZXJfaWQiOiJMQ1k0UkVkRlhTWkYzTjlEbzlBQnFhMmo0S0IyIiwic3ViIjoiTENZNFJFZEZYU1pGM045RG85QUJxYTJqNEtCMiIsImlhdCI6MTY4MDA3Mzk0MiwiZXhwIjoxNjgwMDc3NTQyLCJlbWFpbCI6Im1hbmlzaC5kaXhpdEBzdWNjZXNzaXZlLnRlY2giLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExODM5NzE5ODMxNTY2OTY2OTUwNyJdLCJlbWFpbCI6WyJtYW5pc2guZGl4aXRAc3VjY2Vzc2l2ZS50ZWNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.A4GXsRTaMVDP-NnqbUNqekKXiDUft5cV2Tglk0rgIjWtQE8rMtWXrU1wV75xDUJl-8kZVh1Ta2whvZO9KpB172LuOrsme9ITgzQriI0mAzGHcU3s9bg--HkU-MkXF34mTTmpvtlbsIGb1j7cxhkAEkIXatU_OmcfG4haJ4c_QA8JwjYOaTrId-Y8qhOvoeqPglZpMFTQF7qoAIey6_EEBTtmCjzMey_Wd0dMc5cf1PRmSaFUPlv2V3nZkOMgbbSDlPKkm8hse2jE9DpCze5hEhJwpraZcNh--I0slZEinLpFsiJwqs5IiXEZ3tUaCK6RcIcYycqk_5ICmZYfMLUFOg"
  useEffect(() => {
      const baseURL = `https://dev.resource-api.writso.com/v1/get-employees-list?page=${pg+1}`;
      setLoading(true)
      axios.get(baseURL, { headers: {"Authorization" : tokenStr} }).then((response) => {
          setApiData(response.data.data.data);
          setLoading(false)
      });
    }, [pg]);

    let apiRows = []; 
  
    apiData?.forEach((data) =>{
      const { id: uuid, user_department: empDept, full_name: empName, mrs= 'green', monthlyGm, yearlyGm, location: empLocation, user_org_booking } = data;
      // console.log('response->>>>>>>>>>>', data);
      apiRows.push(createData(
        uuid,
        empName,
        mrs,
        monthlyGm,
        yearlyGm,
        empDept,
        empLocation
      ));
      // user_org_booking?.forEach((projectData) => {
      //     const { org_project, monthlyGm: projectMonthlyGm, yearlyGm: projectYearlyGm, hours_per_day } = projectData;
      //     projectRows.push(projectCreateDatarow(
      //       empName,
      //       org_project.project_name,
      //       'Internal',
      //       org_project.billing_type.name,
      //       'red',
      //       projectMonthlyGm,
      //       projectYearlyGm,
      //       hours_per_day
      //     ));
      //     });
  });

  const uniqueArray = projectRows.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === projectRows.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  updatedRow = uniqueArray;

  let aa2 = apiRows;
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
 
  console.log('data->>>>>>>>>578', loading);
  if (loading) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
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
                      setOpen={setOpen}
                      open={open}
                    />
                  ))
              : stableSort(apiRows, getComparator(order, orderBy))
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
                      setOpen={setOpen}
                      open={open}
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
