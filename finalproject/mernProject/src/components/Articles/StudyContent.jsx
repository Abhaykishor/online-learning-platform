import React, { useLayoutEffect } from "react";
import ArticlesMain from "./ArticlesMain";
import SideNav from "./sideNavBar/SideNav";
import Titles from "../../widgets/Titles";
import Mssg from "../../widgets/Mssg";
import Picture from "../../widgets/Picture";
import SubTitle from "../../widgets/SubTitle";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Outlet,
// } from "react-router-dom";

const StudyContent = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="w60 bg-gray-200">
        <Titles cls="" txt="DSA Basics"></Titles>
        <SubTitle txt="What are Data Structures?"></SubTitle>
        <Mssg
          cls=""
          mssg="Data structures are ways of organizing and storing data so that they can be accessed and modified efficiently. Different data structures are suited for different kinds of applications, and understanding them is crucial for writing efficient code."
        ></Mssg>

        <SubTitle txt="Types of Data Structures"></SubTitle>

        <Mssg
          cls=""
          mssg={
            <ol>
              Linear Data Structures: Data elements are arranged in a sequential
              mannerl
              <li>
                <ul>
                  <li>
                    Arrays: A collection of elements identified by index or key.
                  </li>
                  <li>
                    Linked Lists: A collection of nodes where each node contains
                    data and a reference to the next node.
                  </li>
                  <li>
                    Stacks: A collection of elements that follows Last In, First
                    Out (LIFO) principle.
                  </li>
                  <li>
                    Queues: A collection of elements that follows First In,
                    First Out (FIFO) principle.
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ol>
          }
        ></Mssg>

        <Titles cls="" txt="Why Learn DSA"></Titles>
        <Mssg
          cls=""
          mssg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem ratione nobis! Ducimus rerum quod soluta labore minima voluptate culpa saepe omnis id facilis tempora dolorem harum, possimus magnam at ex quidem cumque voluptas? Non temporibus, repellat nemo consectetur illo deleniti sunt dolor quasi quis, harum incidunt autem rem facere beatae quisquam! Laboriosam, vel eum."
        ></Mssg>
      </div>
    </div>
  );
};

export default StudyContent;
