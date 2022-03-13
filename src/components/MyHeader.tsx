import { Paper, Typography } from "@mui/material";

export default function MyHeader() {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#2F3337",
        height: "100px",
      }}
      square={true}
    >
      <Typography variant={"h3"} sx={{ color: "white" }}>
        {"Todolist"}
      </Typography>
    </Paper>
  );
}
