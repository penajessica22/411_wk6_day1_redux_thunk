import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
  } from "@material-ui/core";

  const ITEM_HEIGHT = 48;
const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div>
        <p>Import Component</p>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
       <Table>
       <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.makes.map((make, index) => {
                return(
                    <TableRow key={make.MakeId}>
                    <TableCell align="right">{make.MakeId}</TableCell>
                    <TableCell align="right">{make.MakeName}</TableCell>
                    <TableCell align="right">
                    <IconButton
                        aria-label="more"
                            aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
          <MenuItem key='1'>
         delete
          </MenuItem>
      </Menu>
                    </TableCell>
                  </TableRow> 
                )
            })}
        </TableBody>
       </Table>
{/* 
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
          <MenuItem key='1'>
         delete
          </MenuItem>
      </Menu> */}
   
    
    </div>
    )
}


export default Import