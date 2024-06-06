import { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  InputBase,
  Box,
  ButtonBase,
  styled,
} from "@mui/material";


const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginLeft: "1px",
  padding: "4px 8px",
  borderLeft: "1px solid #D9D9D9",
  borderRight: "1px solid #D9D9D9",
  '&:has(.Mui-focused)': {
    borderLeft: "2px solid #D9D9D9",
    borderRight: "2px solid #D9D9D9",
  },
  '&:hover': {
    backgroundColor: "#f0f0f0"
  },
});

const StyledButtonBase = styled(ButtonBase)({
  width: "50px",
  height: "32px",
  borderRadius: "11.5px",
  textTransform: "uppercase",
  backgroundColor: "#D9D9D9",
  marginLeft: "8px",
});

export default function SearchField({
  initialSearchText,
  handleSearch,
  loading,
}: {
  initialSearchText: string,
  handleSearch: () => void,
  loading: boolean,
}) {

  const [searchText, setSearchText] = useState(initialSearchText || "");
  const handleSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    handleSearch(searchText);
  };

  return (
    <Stack direction="row" spacing={2}>
      <StyledBox>
        <form onSubmit={handleSubmit}>
          <InputBase
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            inputProps={{
              style: {
                padding: "0px"
              }
            }}
          />
          <StyledButtonBase
            onClick={handleSubmit}
            type="submit"
            disabled={loading || searchText.trim().length === 0}
            variant="contained"
          >
            Go
          </StyledButtonBase>
        </form>
      </StyledBox>
    </Stack>
  );
};