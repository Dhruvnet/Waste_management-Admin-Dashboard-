
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/stats/components/PieCard";
import disposalimg from "../../../assets/img/disposal.png";
import trashcanimg from "../../../assets/img/trash-can.png";
import wasteimg from "../../../assets/img/waste.png";
import LineChart from "views/admin/stats/components/LineChart";
import UserActivity from "views/admin/stats/components/UserActivity";
import { MdHome } from "react-icons/md";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
              <img src={wasteimg} alt="Disposal Icon" style={{ width: '56px', height: '56px'}} />
          }
          name='Waste Detection and Minimization'
          value='43%'
        />
        <MiniStatistics
          startContent={
            <img src={trashcanimg} alt="Disposal Icon" style={{ width: '56px', height: '56px'}} />
          }
          name='Recycling and Resources Recovery'
          value='65%'
        />
        <MiniStatistics
          startContent={
            <img src={disposalimg} alt="Disposal Icon" style={{ width: '56px', height: '56px'}} />
          }
          name='Safe Disposal and Treatement'
          value='70%'
        />
      </SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <LineChart />
        <PieCard />

      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <UserActivity />

      </SimpleGrid>
    </Box>
  );
}
