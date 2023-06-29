import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="center">
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="inherit" size={80} />
        <CircularProgress color="success" size={100} />
        <CircularProgress color="inherit" size={120} />
      </Stack>
    </div>
  );
}
