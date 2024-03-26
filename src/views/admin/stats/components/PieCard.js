// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import React from "react";
// Import only the necessary data for the Pie Chart
import { pieChartData, pieChartOptions } from "variables/charts";

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
          Different Category of Waste we collect
        </Text>
      </Flex>
      <PieChart
        h='200%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />


      <Flex justify="center" w="100%" mt="20px">
        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Recyclable
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            30%
          </Text>
        </Flex>

        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='#4318FF' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Non-Recyclable
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            20%
          </Text>
        </Flex>

        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='#2965CC' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Biodegradable
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            25%
          </Text>
        </Flex>

        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='#CBD5E0' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            E-waste
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            25%
          </Text>
        </Flex>
        {/* Add more Flex components as needed */}
      </Flex>

    </Card>
  );
}
