// // Chakra imports
// import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// import PieChart from "components/charts/PieChart";
// import { resourcespieChartData, resoutcespieChartOptions } from "variables/charts";
// import { VSeparator } from "components/separator/Separator";
// import React from "react";

// export default function Conversion(props) {
//   const { ...rest } = props;

//   // Chakra Color Mode
//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const cardColor = useColorModeValue("white", "navy.700");
//   const cardShadow = useColorModeValue(
//     "0px 18px 40px rgba(112, 144, 176, 0.12)",
//     "unset"
//   );
//   return (
//     <Card p='20px' align='center' direction='column' w='100%' {...rest}>
//       <Flex
//         px={{ base: "0px", "2xl": "10px" }}
//         justifyContent='space-between'
//         alignItems='center'
//         w='100%'
//         mb='8px'>
//         <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
//           Fleet Status
//         </Text>
//       </Flex>

//       <PieChart
//         h='100%'
//         w='100%'
//         chartData={resourcespieChartData}
//         chartOptions={resoutcespieChartOptions}
//       />
//       <Card
//         bg={cardColor}
//         flexDirection='row'
//         boxShadow={cardShadow}
//         w='100%'
//         p='15px'
//         px='20px'
//         mt='15px'
//         mx='auto'>
//         <Flex direction='column' py='5px'>
//           <Flex align='center'>
//             <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
//             <Text
//               fontSize='xs'
//               color='secondaryGray.600'
//               fontWeight='700'
//               mb='5px'>
//               Running
//             </Text>
//           </Flex>
//           <Text fontSize='lg' color={textColor} fontWeight='700'>
//             5%
//           </Text>
//         </Flex>
//         <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
//         <Flex direction='column' py='5px' me='10px'>
//           <Flex align='center'>
//             <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
//             <Text
//               fontSize='xs'
//               color='secondaryGray.600'
//               fontWeight='700'
//               mb='5px'>
//               Idle
//             </Text>
//           </Flex>
//           <Text fontSize='lg' color={textColor} fontWeight='700'>
//             25%
//           </Text>
//         </Flex>
//         <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
//         <Flex direction='column' py='5px' me='10px'>
//           <Flex align='center'>
//             <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
//             <Text
//               fontSize='xs'
//               color='secondaryGray.600'
//               fontWeight='700'
//               mb='5px'>
//               Stopped
//             </Text>
//           </Flex>
//           <Text fontSize='lg' color={textColor} fontWeight='700'>
//             20%
//           </Text>
//         </Flex>
//         <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
//         <Flex direction='column' py='5px' me='10px'>
//           <Flex align='center'>
//             <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
//             <Text
//               fontSize='xs'
//               color='secondaryGray.600'
//               fontWeight='700'
//               mb='5px'>
//               Ready
//             </Text>
//           </Flex>
//           <Text fontSize='lg' color={textColor} fontWeight='700'>
//             50%
//           </Text>
//         </Flex>
//       </Card>
//     </Card>
//   );
// }


import React from 'react';
import { Box, Flex, Text, Select, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card.js';
import PieChart from 'components/charts/PieChart';
import { resourcespieChartData, resoutcespieChartOptions } from 'variables/charts';
import { VSeparator } from 'components/separator/Separator';

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardColor = useColorModeValue('white', 'navy.700');
  const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: '0px', '2xl': '10px' }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Fleet Status
        </Text>
      </Flex>

      <PieChart h="100%" w="100%" chartData={resourcespieChartData} chartOptions={resoutcespieChartOptions} />

      <Box bg={cardColor} boxShadow={cardShadow} w="100%" p="15px" mt="15px" mx="auto" borderRadius="lg">
        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" py="5px">
          <StatusItem color="#3182CE" label="Running" percentage="5%" />
          <VSeparator my={{ base: '10px', md: '0' }} mx={{ base: '0', md: '20px' }} />
          <StatusItem color="#63B3ED" label="Idle" percentage="25%" />
          <VSeparator my={{ base: '10px', md: '0' }} mx={{ base: '0', md: '20px' }} />
          <StatusItem color="#9CA3AF" label="Stopped" percentage="20%" />
          <VSeparator my={{ base: '10px', md: '0' }} mx={{ base: '0', md: '20px' }} />
          <StatusItem color="#CBD5E0" label="Ready" percentage="50%" />
        </Flex>
      </Box>
    </Card>
  );
}

// Custom component to display each status item
const StatusItem = ({ color, label, percentage }) => {
  const textColor = useColorModeValue('secondaryGray.600', 'white');

  return (
    <Flex direction="column" alignItems="center">
      <Box h="8px" w="8px" bg={color} borderRadius="50%" mb="5px" />
      <Text fontSize="xs" color={textColor} fontWeight="700" mb="5px">
        {label}
      </Text>
      <Text fontSize="lg" color={textColor} fontWeight="700">
        {percentage}
      </Text>
    </Flex>
  );
};
