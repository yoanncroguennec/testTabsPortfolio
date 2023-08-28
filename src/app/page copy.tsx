"use client";

import { Box, Typography, styled, Paper, useTheme, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SwipeableViews from "react-swipeable-views";
import React, { SyntheticEvent, useState } from "react";
//
import { TabProjectsNextJS, TabProjectsReactJS, TabProjectsReactNative} from "./components/index"
// ICONS
import { SiNextdotjs, SiReact } from "react-icons/si";
const colorIconNext = "#000"
const colorIconReact = "#0000FF";
const sizeIcon = 40;

export default function Home() {

   const theme = useTheme();

  // STYLES
  const BoxProjects = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1300px",
    margin: "70px auto 0",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  }));

  const [value, setValue] = useState("1");

  function handleChange(e: SyntheticEvent, newValue: string) {
    setValue(newValue);
  }

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "500px" }}>
          <TabList
            aria-label='Tabs Exemple'
            onChange={handleChange}
            textColor='secondary'
            // centered
            indicatorColor='secondary'
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab
              icon={<SiNextdotjs color={colorIconNext} size={sizeIcon} />}
              iconPosition='start'
              label='Next JS'
              value='1'
            />
            <Tab
              icon={<SiReact color={colorIconReact} size={sizeIcon} />}
              iconPosition='start'
              label='React JS'
              value='2'
            />
            <Tab
              disabled
              icon={<SiReact color={colorIconReact} size={sizeIcon} />}
              iconPosition='start'
              label='React Native'
              value='3'
            />
            {/* <Tab label='Tab four' value='4' />
            <Tab label='Tab five' value='5' />
            <Tab label='Tab six' value='6' /> */}
          </TabList>
        </Box>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </SwipeableViews>

        {/* <TabPanel value='1'>
          <BoxProjects>
            <TabProjectsNextJS />
          </BoxProjects>
        </TabPanel>
        <TabPanel value='2'>
          <BoxProjects>
            <TabProjectsReactJS />
          </BoxProjects>
        </TabPanel>
        <TabPanel value='3'>
          <BoxProjects>
            <TabProjectsReactNative />
          </BoxProjects>
        </TabPanel> */}
        {/* <TabPanel value='4'>Panel four</TabPanel>
        <TabPanel value='5'>Panel five</TabPanel>
        <TabPanel value='6'>Panel six</TabPanel> */}
      </TabContext>
    </Box>
  );
}
