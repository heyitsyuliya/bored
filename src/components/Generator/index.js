// import axios from 'axios';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Generator.css";

export default function Generator() {
  const [state, setState] = useState([]);

  useEffect(() => {
    function activateEventListener(event) {
      const { code } = event;

      if (code === "Space") {
        fetchData();
      }
    }

    document.addEventListener("keydown", activateEventListener);

    async function fetchData() {
      await axios
        .get("http://www.boredapi.com/api/activity")
        .then((response) => setState(response.data))
        .catch((error) =>
          console.error(
            "Something went wrong when fetching the data from the API ",
            error
          )
        );
    }

    return () => {
      //cleaning up to prevent memory leaks
      document.removeEventListener("keydown", activateEventListener);
    };
  }, []);

  return (
    <>
      <Container className="wrapper" fluid>
        <Container id="random-activity">
          <p>You can {state.activity}</p>
          <p>
            with{" "}
            {state.participants === 1
              ? "1 person "
              : `${state.participants} people `}
          </p>
          <p>{state.price === 0 ? "and it's free!" : null}</p>
          {state.link ? (
            <p>
              Here's the <a href={state.link}>link</a>
            </p>
          ) : null}
        </Container>
      </Container>
    </>
  );
}

// data format
// {
//   activity: "Clean out your closet and donate the clothes you've outgrown",
//   type: "charity",
//   participants : 1,
//   price: 0,
//   link: "",
//   key: "9026787",
//   accessibility: 0.1
// }
