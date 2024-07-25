import React from "react";
import SideNav from "../sideNavBar/SideNav";
import Mssg from "../../../widgets/Mssg";
import SubTitle from "../../../widgets/SubTitle";
import Titles from "../../../widgets/Titles";
import Footer from "../../Footer";
const LinkedList = () => {
  return (
    <>
      <div className="flex spacing">
        <SideNav />
        <div className="w60 bg-gray-200">
          <Titles cls="" txt="Linked list"></Titles>
          <div className="spacing">
            <SubTitle txt="Defination: "></SubTitle>
            <Mssg
              cls=""
              mssg="Linked list is a linear data structure that includes a series of connected nodes. Linked list can be defined as the nodes that are randomly stored in the memory. A node in the linked list contains two parts, i.e., first is the data part and second is the address part. The last node of the list contains a pointer to the null. After array, linked list is the second most used data structure. In a linked list, every link contains a connection to another link."
            ></Mssg>
          </div>
          <div className="spacing">
            <SubTitle txt="Representation of Linked list"></SubTitle>
            <Mssg mssg="Linked list can be represented as the connection of nodes in which each node points to the next node of the list. The representation of the linked list is shown below" />

            <div className="spacing">
              <img
                src="https://static.javatpoint.com/ds/images/ds-linked-list.png"
                alt=""
              />
            </div>
            <Mssg mssg="Till now, we have been using array data structure to organize the group of elements that are to be stored individually in the memory. However, Array has several advantages and disadvantages that must be known to decide the data structure that will be used throughout the program." />
          </div>
          <div className="spacing">
            <SubTitle txt="How to declare a linked list?" />
            <Mssg mssg="It is simple to declare an array, as it is of single type, while the declaration of linked list is a bit more typical than array. Linked list contains two parts, and both are of different types, i.e., one is the simple variable, while another is the pointer variable. We can declare the linked list by using the user-defined data type structure.The declaration of linked list is given as follows -" />
            <div className="bg-blue-200 p-4 spacing">
              <h2>struct node </h2>
              <h2>(</h2>
              <h2>int data;</h2>
              <h2>struct node *next</h2>
              <h2>)</h2>
            </div>
            <Mssg mssg="In the above declaration, we have defined a structure named as node that contains two variables, one is data that is of integer type, and another one is next that is a pointer which contains the address of next node." />
          </div>
          <div className="spacing">
            <Titles txt="Types of Linked list" />
            <div className="spacing">
              <SubTitle txt="Singly-linked list" />
              <Mssg mssg="Singly linked list can be defined as the collection of an ordered set of elements. A node in the singly linked list consists of two parts: data part and link part. Data part of the node stores actual information that is to be represented by the node, while the link part of the node stores the address of its immediate successor." />
            </div>
            <div className="spacing">
              <SubTitle txt="Doubly linked list" />
              <Mssg mssg="Doubly linked list is a complex type of linked list in which a node contains a pointer to the previous as well as the next node in the sequence. Therefore, in a doubly-linked list, a node consists of three parts: node data, pointer to the next node in sequence (next pointer), and pointer to the previous node (previous pointer)." />
            </div>
            <div className="spacing">
              <SubTitle txt="Circular singly linked list " />
              <Mssg mssg="In a circular singly linked list, the last node of the list contains a pointer to the first node of the list. We can have circular singly linked list as well as circular doubly linked list." />
            </div>
            <div className="spacing">
              <SubTitle txt="Circular doubly linked list" />
              <Mssg
                mssg="Circular doubly linked list is a more complex type of data structure in which a node contains pointers to its previous node as well as the next node. Circular doubly linked list doesn't contain NULL in any of the nodes. The last node of the list contains the address of the first node of the list. The first node of the list also contains the address of the last node in its previous pointer.
"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LinkedList;
