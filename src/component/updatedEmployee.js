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
import { data } from "../mock"

function createData(
  uuid,
  empName,
  mrs,
  monthlyGm,
  yearlyGm,
  empDept,
  empLocation,
  user_org_booking,
) {
  return {
    uuid,
    empName,
    mrs,
    monthlyGm,
    yearlyGm,
    empDept,
    empLocation,
    user_org_booking
  };
}

function Row(props) {
  const { row, selectedBar, order, orderBy, handleRequestSort, stableSort, getComparator, pg, open, setOpen } = props;
  const { user_org_booking = [] } = row; 

  useEffect(()=>{
    setOpen(false);
  },[pg])

  const handleClick = (value) => {
    setOpen((prev) => (value === prev ? '' : value));
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(event) => handleClick(row.uuid)}
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
                {stableSort(user_org_booking, getComparator(order, orderBy)).map(
                  (row) =>
                      <TableRow
                        // key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.org_project.project_name}
                        </TableCell>
                        <TableCell align="right">internal</TableCell>
                        <TableCell align="right">{row.org_project.billing_type.name}</TableCell>
                        <TableCell align="right">
                          {" "}
                          <Chip
                            style={{
                              width: "50px",
                              height: "25px",
                              backgroundColor: 'red',
                            }}
                            color="primary"
                          />
                        </TableCell>
                        <TableCell align="right">{row.monthlyGm}</TableCell>
                        <TableCell align="right">{row.yearlyGm}</TableCell>
                        <TableCell align="right">{row.hours_per_day}</TableCell>
                      </TableRow>
                    )
                }
              </TableBody>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function EmployeeTable(props) {
  
  const { selectedBar, handleCallback } = props;
  const [apiData, setApiData] = useState([]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();
  const [open, setOpen] = useState('');
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(50);
  const [allEmployessData, setAllEmployessData] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [loading, setLoading] = useState(false);

  
  let tokenStr = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWFuaXNoIERpeGl0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGFNdld5bnlPSzc1VWJ6WVNzODlpODRfenB4Ykk5TkpLQzhSUXBUPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3Jlc291cmNlLWF2YWlhYmlsaXR5IiwiYXVkIjoicmVzb3VyY2UtYXZhaWFiaWxpdHkiLCJhdXRoX3RpbWUiOjE2ODAwNzM5NDIsInVzZXJfaWQiOiJMQ1k0UkVkRlhTWkYzTjlEbzlBQnFhMmo0S0IyIiwic3ViIjoiTENZNFJFZEZYU1pGM045RG85QUJxYTJqNEtCMiIsImlhdCI6MTY4MDA4ODMyNiwiZXhwIjoxNjgwMDkxOTI2LCJlbWFpbCI6Im1hbmlzaC5kaXhpdEBzdWNjZXNzaXZlLnRlY2giLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExODM5NzE5ODMxNTY2OTY2OTUwNyJdLCJlbWFpbCI6WyJtYW5pc2guZGl4aXRAc3VjY2Vzc2l2ZS50ZWNoIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.E5i8TDBwQSRjHSZGtpiBYeVJiKLdkTF0WUVPRa7hE1mL1o3udbO9VSA3r1csN-7kT3qoVlTz2aI2Z5Viv2FRXNMVtwasOsySK3fgmXvrMzneKYh5EbQFYZgEX5rPcbbN1AlJfISvvIscu1gSAc-eyKP4CBZ4mQ6dGvCzkLqqgj_bR2Hl2vXjV7F37znUoPD-hPksWX7GQHXZBwMNnmalogIaVVlTjjEdtw3Jymtev2-Wckgd2Lmqc_spIlOa_wOHLc_rHHo7EACscOY4w9dERMCw2cB_X305vryRry4zoSLX03Zc9dR6OP8oOJYh6tdfS9nNFoJizF7qpZqyUAFWUw"
  useEffect(() => {
      const baseURL = `https://dev.resource-api.writso.com/v1/get-employees-list?page=${pg+1}`;
      setLoading(true)
      axios.get(baseURL, { headers: {"Authorization" : tokenStr} }).then((response) => {
          setApiData(data);
          setAllEmployessData(response.data.data)
          setLoading(false)
      });
    }, [pg]); 

    useEffect(()=>{
      setTotalCount(data.length);
    }, [allEmployessData]);
  
    const formatedData = apiData?.map((data) =>{
      const { id: uuid, user_department: empDept, full_name: empName, mrs= 'green', monthlyGm, yearlyGm, location: empLocation, user_org_booking } = data;
      return createData(
        uuid,
        empName,
        mrs,
        monthlyGm,
        yearlyGm,
        empDept,
        empLocation,
        user_org_booking
      )
  });

  let newArray = formatedData?.filter(function (el) {
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
              : stableSort(formatedData, getComparator(order, orderBy))
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
        count={totalCount}
        rowsPerPage={rpg}
        page={pg}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
