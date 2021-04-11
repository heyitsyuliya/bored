import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Generator.css";
import RandomActivity from "./RandomActivity";
import EmptyState from "../EmptyState";
import axios from "axios";

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
        {state.length === 0 ? (
          <EmptyState />
        ) : (
          <RandomActivity activity={state} />
        )}
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
