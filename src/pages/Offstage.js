import { Button } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 10px;
  .title {
    text-align: center;
  }
  .table {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .table table {
    font-size: 1.5rem;
    width: 100%;
  }
  table,
  th,
  tr,
  td {
    border: 1px solid grey;
  }
  @media screen and (max-width: 700px) {
    .table table {
      font-size: 1rem;
    }
  }
`;

const Offstage = () => {
  const [data, setdata] = useState();

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://sheet2api.com/v1/nRud6Y64SHuv/arts-detail/offstage"
      );
      //   const data = await res.json();
      setdata(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <h1 className="title">OFFSTAGE ITEMS</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>title1</th>
              <th>title2</th>
              <th>title3</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{item.title1}</td>
                <td>{item.title2}</td>
                <td>{item.title3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Offstage;
