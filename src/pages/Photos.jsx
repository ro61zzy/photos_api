import { useGetPhotosQuery } from "../Api/services";
import { Grid } from "@mui/material";

function Photos() {
  const { data } = useGetPhotosQuery();
  console.log(data);

  if (!data) {
    // Handle loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((photo) => (
          <Grid item xs={6} key={photo.id}>
            <h1>{photo.title}</h1>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Photos;