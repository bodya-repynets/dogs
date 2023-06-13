import { useGlobalContext } from "../context";
import { Pagination, Stack } from "@mui/material";

const PaginationComponent = () => {
  const { currentPage, setCurrentPage, pageNum } = useGlobalContext();

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
    <Stack alignItems={"center"} margin={"20px 0px 20px 0px"}>
      <Pagination
        size="large"
        color="primary"
        sx={{ marginBottom: "40px", textAlign: "center" }}
        count={pageNum}
        page={currentPage}
        onChange={paginate}
      />
    </Stack>
  );
};

export default PaginationComponent;
