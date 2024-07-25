import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

  return (
    <div className="w20 bg-gray-100 flex mar h-80">
      <ul className="flex flex-col justify-between ">
      <li>

<Link to="/Linked-List" >
 Linked-List</Link>
</li>
        <li>

          <Link to="/TypeofLinked-List" >
           Types of Linked-List</Link>
        </li>
        <li>
    
          <Link  to="/SiglyLinked-List">
          Singly Linked-List</Link>
        </li>
        <li>
          
          <Link to="/DoublyLinked-List" >
          Doubly Linked-List</Link>
        </li>
        <li>
          
          <Link to="/CircularLinked-List" >
          Circular Linked-List</Link>
        </li>
        <li>
          <Link to="/CircularDoublyLinked-List">
          Circular Doubly Linked-List</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
