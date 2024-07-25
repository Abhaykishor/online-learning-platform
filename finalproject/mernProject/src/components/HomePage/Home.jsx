import React from "react";
import TypedLine from "../../widgets/TypedLine";
import Mssg from "../../widgets/Mssg";
import Buttons from "../../widgets/Buttons";
import SubTitle from "../../widgets/SubTitle";
import { Link } from "react-router-dom";

  

const Home = () => {

  return (
    <div className="homeContent flex flex-col ">
      <div className="homeContent-first flex justify-between  ">
        <div className=" mt">
          <Mssg cls="homeTitle text-indigo-500" mssg="Be The Best," />
          <Mssg cls="homeTitle" mssg="Coder with Right" />
          <Mssg cls="homeTitle" mssg="DSA Doc's" />
          <p className="typedline flex">
            &lt;&gt;{<TypedLine></TypedLine>}&lt;/&gt;
          </p>
          <div className="flex">
            <Link to="/study">
              <Buttons txt="Start DSA" cls="hometopbtn"></Buttons>
            </Link>
            <Link to="/course">
              <Buttons txt="Choose a Course" cls="hometopbtn"></Buttons>
            </Link>
          </div>
        </div>
        <div className="homeImage"></div>
      </div>
      <div className="homeContent-second flex  justify-between ">
        <div>
          {" "}
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/2ZLl8GAk1X4?si=-M5Ee5RuUEBBky1-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="home2txt">
          <Mssg
            cls="homeTitle text-indigo-500"
            mssg=" Tutorial with animated Video's "
          />
          <SubTitle txt="Amazing free content on youtube!" />
          <p>
          Are you looking to master Data Structures and Algorithms? Dive into our comprehensive DSA video designed for beginners and experienced coders alike.
          </p>
          <p>
          This video simplifies complex concepts with clear explanations and practical examples, helping you to enhance your problem-solving skills and ace technical interviews.
          </p>
        </div>
      </div>
      <div className="homeContent-third flex flex-col justify-around  items-center">
        <span>
          <Mssg
            mssg="Why Learn From Us!"
            cls="homeTitle text-purple-800 under"
          ></Mssg>
        </span>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-solid fa-globe text-purple-600 text-7xl"></i>
            <SubTitle txt="Best Content" />
            <h5 className="text-center">
              Collection Of Documents around the globe
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-regular fa-face-smile text-purple-600 text-7xl"></i>
            <SubTitle txt="Easy to Digest" />
            <h5 className="text-center">
              Around The Web Hundreds Of Daily Happy User's{" "}
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-solid fa-code text-purple-600 text-7xl"></i>
            <SubTitle txt="Code Centric" />
            <h5 className="text-center">Code Centeric Approach Of Study</h5>
          </div>
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-solid fa-user text-purple-600 text-7xl"></i>
            <SubTitle txt="User Friendly" />
            <h5 className="text-center">
              Simplest Design And Easy To Understand
            </h5>
          </div>
        </div>
      </div>
      <div className="homeContent-forth flex justify-evenly items-center ">
        <i className="fa-solid fa-circle-chevron-down rotate-90 text-2xl cursor-pointer"></i>
        <div className="testimonial flex flex-col items-center">
          <div className="pic1 testimonialPic "></div>
          <span>
            <SubTitle txt="Angelio wings" />
          </span>
          <img
            className="w-2/5"
            src="https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Review-Transparent-PNG.png"
            alt=""
          />
          <span className="p-5">
            <h4>
              I Really Like The Simple Design Of Doc's 👌😎, And The Quality Of
              Content Is Amazing
            </h4>
          </span>
        </div>
        <div className="testimonial flex flex-col items-center">
          <div className="testimonialPic pic2"></div>
          <span>
            <SubTitle txt="Dan Wander" />
          </span>
          <img
            className="w-2/5"
            src="https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Review-Transparent-PNG.png"
            alt=""
          />
          <span className="p-5">
            <h4>
              I Always Prefer This Web-site For My Exam Preperation, Keep It Up
              Guys 😁👍.
            </h4>
          </span>
        </div>
        <div className="testimonial flex flex-col items-center">
          <div className="testimonialPic pic3"></div>
          <span>
            <SubTitle txt="Christin Lotus" />
          </span>
          <img
            className="w-2/5"
            src="https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Review-Transparent-PNG.png"
            alt=""
          />
          <span className="p-5">
            <h4>
              I Have Tried Lot Of Other Sites But This Is The Best Among All.
            </h4>
          </span>
        </div>
        <div className="testimonial flex flex-col items-center">
          <div className="testimonialPic pic4"></div>
          <span>
            <SubTitle txt="Andrew Cloak" />
          </span>
          <img
            className="w-2/5"
            src="https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Review-Transparent-PNG.png"
            alt=""
          />
          <span className="p-5">
            <h4>
              The Courses And The Material Here Is Really Reliable, I'm As A
              Professional Also Use It
            </h4>
          </span>
        </div>
        <i className="fa-solid fa-circle-chevron-down -rotate-90 text-2xl cursor-pointer"></i>
      </div>
      <div className="homeContent-fifth flex flex-col justify-around  items-center">
        <span>
          <Mssg mssg="FAQ" cls="homeTitle text-purple-800 under"></Mssg>
        </span>
        <div className="flex  flex-col justify-evenly items-center accordian">
            <div className="question flex items-center cursor-pointer">
              <SubTitle txt = " Q1. what is why is app this is is which is is you?"/>
              <i className="fa-solid fa-caret-down text-xl ml-3.5 icon"></i> 
            </div>
            <div className="answer">
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae illo reiciendis consectetur ad tempora deleniti distinctio autem vel doloribus labore blanditiis quaerat maxime dolor, at recusandae? Itaque, non voluptatum.</h4>
            </div>
        </div>
        <div className="flex  flex-col justify-evenly items-center accordian">
            <div className="question flex items-center cursor-pointer">
              <SubTitle txt = " Q1. what is why is app this is is which is is you?"/>
              <i className="fa-solid fa-caret-down text-xl ml-3.5 icon"></i> 
            </div>
            <div className="answer">
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae illo reiciendis consectetur ad tempora deleniti distinctio autem vel doloribus labore blanditiis quaerat maxime dolor, at recusandae? Itaque, non voluptatum.</h4>
            </div>
        </div>
        <div className="flex  flex-col justify-evenly items-center accordian">
            <div className="question flex items-center cursor-pointer">
              <SubTitle txt = " Q1. what is why is app this is is which is is you?"/>
              <i className="fa-solid fa-caret-down text-xl ml-3.5 icon"></i> 
            </div>
            <div className="answer">
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae illo reiciendis consectetur ad tempora deleniti distinctio autem vel doloribus labore blanditiis quaerat maxime dolor, at recusandae? Itaque, non voluptatum.</h4>
            </div>
        </div>
      </div>
      <div className="foo flex justify-center items-center">
        <h2>All Right Reserve to &copy; JustDSA</h2>
      </div>
    </div>
  );
};

export default Home;
