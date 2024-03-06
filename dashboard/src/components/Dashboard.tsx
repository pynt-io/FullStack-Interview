import { useEffect } from "react";
import { Box } from "@mui/material";
import { getHelloWorld } from "../services/HelloWorldService";

function Dashboard() {
  useEffect(() => {
    // example request
    const interval = setInterval(() => {
      getHelloWorld().then(console.log).catch(console.error);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Box>This is the dashboard</Box>;
}

export default Dashboard;
