import { Card, CardContent, Typography } from "@mui/material";

function Article({ title, text }) {
  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
}

export default Article;
