import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

function createData(deptName, totalEmployees, activeResources, inactiveResources, deptHead, date, empName, empId, empEmail, empLoc) {
    return {
      deptName,
      totalEmployees,
      activeResources,
      inactiveResources,
      deptHead,
      date,
      detail:[ empName, empId, empEmail, empLoc ],
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
    createData('Delivery Resources', 150, 100, 24, 'Akshay Chauhan', '01-01-2023', 'Aman Raj1', 12345678, 'aman@successive.tech', 'Noida1'),
    createData('Delivery Resources', 123, 40, 37, 'Akshay Chauhan', '01-01-2023', 'Aman Raj2', 12345678, 'aman@successive.tech', 'Noida2'),
    createData('Vendor Resources(Delivery)', 262, 160, 24, 'Akshay Chauhan', '01-01-2023', 'Aman Raj3', 12345678, 'aman@successive.tech', 'Noida3'),
    createData('Vendor Resources(Operations)', 305, 37, 67, 'Akshay Chauhan', '01-01-2023', 'Aman Raj4', 12345678, 'aman@successive.tech', 'Noida4'),
  ];

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <React.Fragment key={row.name}>
              <TableRow>
                <TableCell padding="checkbox">
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            </React.Fragment>
          ))} */}
          {rows.map((row) => (
            <ExpandableTableRow
              key={row.deptName}
              expandComponent={<TableCell colSpan="5">{row.detail}</TableCell>}
            >
              <TableCell component="th" scope="row">
                {row.deptName}
              </TableCell>
              <TableCell align="right">{row.totalEmployees}</TableCell>
              <TableCell align="right">{row.activeResources}</TableCell>
              <TableCell align="right">{row.inactiveResources}</TableCell>
              <TableCell align="right">{row.deptHead}</TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
