import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useGetUsersQuery } from '../Api/services';
import { useEffect } from "react";

const MyTable = () => {
  const { data: userData, isLoading, isError } = useGetUsersQuery();
  console.log(userData)

  useEffect(() => {
    // Fetch the user data
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div style={{ maxWidth: "80%" }}>
      <TableContainer sx={{ backgroundColor: "#fff" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "50px", fontSize: "12px" }}>No:</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Name</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Email</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Phone</TableCell>
              {/* Hide remaining columns on xs devices */}
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" }, fontSize: "12px" }}>
                Website
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" }, fontSize: "12px" }}>
                Company
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" }, fontSize: "12px" }}>
                City
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ width: "50px", fontSize: "12px" }}>{user.id}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{user.name}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{user.email}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{user.phone}</TableCell>
                {/* Hide remaining columns on xs devices */}
                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    fontSize: "12px",
                  }}
                >
                  {user.website}
                </TableCell>
                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    fontSize: "12px",
                  }}
                >
                  {user.company.name}
                </TableCell>
                <TableCell
                  sx={{
                    display: { xs: "none", sm: "table-cell" },
                    fontSize: "12px",
                  }}
                >
                  {user.address.city}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
