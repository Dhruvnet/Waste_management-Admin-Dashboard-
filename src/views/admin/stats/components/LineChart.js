// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
// Import only the necessary data for the Pie Chart
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from "variables/charts";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Recycling rates over time 
        </Text>
      </Flex>
      <LineChart
        h='200%'
        w='100%'
        chartData={lineChartDataTotalSpent}
        chartOptions={lineChartOptionsTotalSpent}
      />
    </Card>
  );
}
