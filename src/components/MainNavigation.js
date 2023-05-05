import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';
import { useState } from 'react';

function MainNavigation() {

// create a use state, and make the starting positon false/a collapsed bar
const [drawerIsOpen, setDrawerIsOpen] = useState(false);

// functions to handle when the drawer is open and closed
function openDrawerHandler(event){
    setDrawerIsOpen(true);
}

function closeDrawerHandler(event){
    setDrawerIsOpen(false);
}

  return (
    <>
    <header className={classes.header}>
      <h1>Demo App</h1>
      <button className={classes.btn} onClick={openDrawerHandler}>
        <div />
        <div />
        <div />
      </button>
    </header>

    {drawerIsOpen && <SideDrawer onClose={closeDrawerHandler} />}
    </>
  );
}

export default MainNavigation;