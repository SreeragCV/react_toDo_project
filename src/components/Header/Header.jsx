import React from "react";
import image from "../../assets/toDo.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={classes.header}>
        <h1>To Do List</h1>
        <img className={classes["todo-logo"]} src={image} alt="" />
      </div>
        <div className={classes['p-heading']}>
          <h3 className={classes.h3}>Add your <span className={classes.to}>to</span>-<span className={classes.do}>do</span> list here</h3>
        </div>
    </>
  );
}

export default Header;
