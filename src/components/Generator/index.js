// import axios from 'axios';
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Generator() {
  useEffect(() => {
    function activateEventListener(event) {
      const { code } = event;

      console.log(event);

      if (code === "Space") {
        console.log("space bar");
        // call space bar handler here
      }
    }

    document.addEventListener("keydown", activateEventListener);

    return () => {
      //cleaning up
      document.removeEventListener("keydown", activateEventListener);
    };
  }, []);

  return (
    <>
      <Container>Task willl be rendered here</Container>
    </>
  );
}

//     const response = await axios.get("http://www.boredapi.com/api/activity");
//     const data = await response.data;
