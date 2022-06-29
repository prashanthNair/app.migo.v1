import { Notifications, Search } from "@mui/icons-material";
import { Badge, Box, Button, styled, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import Globe from "components/icons/Globe";
import Toggle from "components/icons/Toggle";
import { useRouter } from "next/router";
import React from "react";
import AccountPopover from "./popovers/AccountPopover"; // custom styled components

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  color: theme.palette.text.primary,
}));
const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));
const ToggleWrapper = styled(FlexRowCenter)(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
}));
const CustomButton = styled(Button)(({ theme }) => ({
  minHeight: 40,
  flexShrink: 0,
  marginLeft: 16,
  padding: "0 20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: 200,
  padding: "5px 10px",
  borderRadius: "8px",
  color: theme.palette.grey[500],
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
})); // ===================================================================

// ===================================================================
const DashboardNavbar = ({ handleDrawerToggle }) => {
  const router = useRouter();
  const downLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <DashboardNavbarRoot position="sticky">
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          {downLg && (
            <ToggleWrapper onClick={handleDrawerToggle}>
              <Toggle />
            </ToggleWrapper>
          )}

          <CustomButton
            onClick={() => router.push("/")}
            startIcon={
              <Globe
                sx={{
                  color: "grey.900",
                }}
              />
            }
          >
            Browse Website
          </CustomButton>

          <Box flexGrow={1} />

          <FlexBox alignItems="center" gap={2}>
            <StyledInputBase
              placeholder="Search anything..."
              startAdornment={
                <Search
                  sx={{
                    color: "grey.500",
                    mr: 1,
                  }}
                />
              }
            />

            <IconButton>
              <Badge color="secondary" variant="dot" badgeContent={1}>
                <Notifications
                  sx={{
                    color: "grey.500",
                  }}
                />
              </Badge>
            </IconButton>

            <AccountPopover />
          </FlexBox>
        </StyledToolBar>
      </Container>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;