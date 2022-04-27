import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/image1.jpeg";

const Container = styled.div`
  .navbar {
    padding: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray;
    height: 50vh;
    background: url("https://images.unsplash.com/photo-1543198926-22fea2a870dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: white;
  }
  .loginbtn {
    position: absolute;
    right: 10px;
  }
  @media screen and (max-width: 708px) {
    .navbar {
      padding: 10px;
      height: 40vh;
    }
    .title {
    }
    .loginbtn {
      transform: scale(0.8);
    }
  }
  @media screen and (max-width: 400px) {
    .navbar {
      padding: 5px;
      height: 30vh;
    }
    .title {
      font-size: 2rem;
    }
    .loginbtn {
      transform: scale(0.7);
      right: 0px;
    }
  }
  .content1 {
    display: flex;
    border-bottom: 1px solid gray;
    padding: 5px;
  }
  .item1,
  .item2 {
    margin-left: 40px;
    font-size: 1.2rem;
    text-decoration: none;
  }
  @media screen and (max-width: 400px) {
    .item1,
    .item2 {
      margin-left: 40px;
      font-size: 1rem;
    }
  }
  .content2 {
    display: flex;
  }
  .score_details {
    width: 65%;
    border-right: 1px solid grey;
    padding: 10px;
  }

  .score_title {
    text-decoration: none;
    border: none;
    text-align: center;
  }
  .teams {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .team1 {
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 150px;
    height: 150px;
    background: coral;
  }

  .logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .score {
    text-align: center;
  }
  /* winner details */
  .winnner_details {
    width: 35%;
    padding: 10px;
  }
  .winner_title {
    text-align: center;
  }
  .winner {
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo_winner {
    width: 150px;
    height: 150px;
    background: coral;
  }
  .logo_winner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 700px) {
    .score_details {
      width: 50%;
    }
    .winnner_details {
      width: 50%;
      padding: 10px;
    }
    .winner {
      width: 150px;
      height: 150px;
    }
    .logo_winner {
      width: 120px;
      height: 120px;
    }
    .team1 {
      width: 150px;
      height: 150px;
    }
    .logo {
      width: 120px;
      height: 120px;
    }
  }
`;

const Home = () => {
  const [data, setdata] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://sheet2api.com/v1/nRud6Y64SHuv/arts-detail/Scores"
      );
      //   const data = await res.json();
      setdata(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <div className="navbar">
        <div className="title">Spandanam 2k22</div>
      </div>
      <div className="content1">
        <a href="/onstage" className="item1">
          Onstage items
        </a>
        <a href="/offstage" className="item2">
          Offstage items
        </a>
      </div>
      <div className="content2">
        <div className="score_details">
          <h2 className="score_title">Score Board</h2>
          <div className="teams">
            <div className="team1">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="score">score : 0</div>
            </div>
            <div className="team1">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="score">score : 0</div>
            </div>{" "}
            <div className="team1">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="score">score : 0</div>
            </div>{" "}
            <div className="team1">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="score">score : 0</div>
            </div>
          </div>
        </div>
        <div className="winnner_details">
          <h2 className="winner_title">Winner</h2>
          <div className="winner">
            <div className="logo_winner">
              <img src={logo} alt="" />
            </div>
            <div className="score">score : 0</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
