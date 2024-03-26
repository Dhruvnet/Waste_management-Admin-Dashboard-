// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { resourcespieChartData, resoutcespieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Fleet Status
        </Text>
      </Flex>
      <PieChart
        h='200%'
        w='100%'
        chartData={resourcespieChartData}
        chartOptions={resoutcespieChartOptions}
      />


      <Flex justify="center" w="100%" mt="20px">
        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Running
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            5%
          </Text>
        </Flex>

        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='#4318FF' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Idle
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            25%
          </Text>
        </Flex>

        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='#2965CC' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Stopped
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            20%
          </Text>
        </Flex>

        <Flex direction="column" align="center" mx="10px">
          <Box h='8px' w='8px' bg='#CBD5E0' borderRadius='50%' mb='5px' />
          <Text fontSize='xs' color='secondaryGray.600' fontWeight='700' mb='5px'>
            Ready
          </Text>
          <Text fontSize='lg' color={textColor} fontWeight='700'>
            50%
          </Text>
        </Flex>
        {/* Add more Flex components as needed */}
      </Flex>
    </Card>
  );
}
