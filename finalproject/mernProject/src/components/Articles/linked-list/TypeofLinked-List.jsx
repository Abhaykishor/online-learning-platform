import React from "react";
import SideNav from "../sideNavBar/SideNav";
import Mssg from "../../../widgets/Mssg";
import SubTitle from "../../../widgets/SubTitle";
import Titles from "../../../widgets/Titles";
import Footer from "../../Footer";
const TypeofLinkedList = () => {
  return (
    <>
      <div className="flex spacing">
        <SideNav />
        <div className="w60 bg-gray-200">
          <Titles cls="" txt="Types of Linked List"></Titles>
          <div className="spacing">
            <Mssg mssg="Before knowing about the types of a linked list, we should know what is linked list. So, to know about the linked list, click on the link given below:" />
          </div>
          <div className="spacing">
            <div className="spacing">
              <SubTitle txt="Type's of linked list : "></SubTitle>
            </div>
            <div className="spacing">
              <SubTitle txt="Singly Linked list "></SubTitle>
              <Mssg mssg="It is the commonly used linked list in programs. If we are talking about the linked list, it means it is a singly linked list. The singly linked list is a data structure that contains two parts, i.e., one is the data part, and the other one is the address part, which contains the address of the next or the successor node. The address part in a node is also known as a pointer." />
            </div>
            <div className="spacing">
              <img src="https://static.javatpoint.com/ds/images/ds-types-of-linked-list.png" alt="" />
            </div>
            <Mssg mssg="We can observe in the above figure that there are three different nodes having address 100, 200 and 300 respectively. The first node contains the address of the next node, i.e., 200, the second node contains the address of the last node, i.e., 300, and the third node contains the NULL value in its address part as it does not point to any node. The pointer that holds the address of the initial node is known as a head pointer." />

            <div className="spacing">
              <SubTitle txt="Doubly linked list "></SubTitle>
              <Mssg mssg="As the name suggests, the doubly linked list contains two pointers. We can define the doubly linked list as a linear data structure with three parts: the data part and the other two address part. In other words, a doubly linked list is a list that has three parts in a single node, includes one data part, a pointer to its previous node, and a pointer to the next node.
Suppose we have three nodes, and the address of these nodes are 100, 200 and 300, respectively. The representation of these nodes in a doubly-linked list is shown below:" />
            </div>
            <div className="spacing">
              <img src="https://static.javatpoint.com/ds/images/ds-types-of-linked-list2.png" alt="" />
            </div>
            <Mssg mssg="As we can observe in the above figure, the node in a doubly-linked list has two address parts; one part stores the address of the next while the other part of the node stores the previous node's address. The initial node in the doubly linked list has the NULL value in the address part, which provides the address of the previous node." />

            <div className="spacing">
              <SubTitle txt="Circular linked list "></SubTitle>
              <Mssg mssg="A circular linked list is a variation of a singly linked list. The only difference between the singly linked list and a circular linked list is that the last node does not point to any node in a singly linked list, so its link part contains a NULL value. On the other hand, the circular linked list is a list in which the last node connects to the first node, so the link part of the last node holds the first node's address. The circular linked list has no starting and ending node. We can traverse in any direction, i.e., either backward or forward. The diagrammatic representation of the circular linked list is shown below:" />
            </div>
            <div className="spacing">
              <img src="https://static.javatpoint.com/ds/images/ds-types-of-linked-list3.png" alt="" />
            </div>
           

            <div className="spacing">
              <SubTitle txt="Doubly Circular linked list "></SubTitle>
              <Mssg mssg="The doubly circular linked list has the features of both the circular linked list and doubly linked list." />
            </div>
            <div className="spacing">
              <img src="https://static.javatpoint.com/ds/images/ds-types-of-linked-list4.png" alt="" />
            </div>
            <Mssg mssg="The above figure shows the representation of the doubly circular linked list in which the last node is attached to the first node and thus creates a circle. It is a doubly linked list also because each node holds the address of the previous node also. The main difference between the doubly linked list and doubly circular linked list is that the doubly circular linked list does not contain the NULL value in the previous field of the node. As the doubly circular linked contains three parts, i.e., two address parts and one data part so its representation is similar to the doubly linked list." />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TypeofLinkedList;
