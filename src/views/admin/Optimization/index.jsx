import React, { useEffect, useState } from 'react';
import { Box, FormControl, Input, Text, Grid, GridItem, VStack, Badge, Image, Stack } from '@chakra-ui/react';

function UserReports() {
  const [map, setMap] = useState(null);
  const [newLocation, setNewLocation] = useState('');
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCloOFxFC3egPYUQFHQ2GaD1Tmtt9Pc6Zg&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 19.1300, lng: 72.8244 },
      });
      setMap(mapInstance);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (map && newLocation.trim() !== '') {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: newLocation }, (results, status) => {
        if (status === 'OK' && results[0]) {
          map.setCenter(results[0].geometry.location);
          map.setZoom(14);
          getHotspots(results[0].geometry.location);
        }
      });
    }
  }, [map, newLocation]);

  const getHotspots = (location) => {
    const request = {
      location: location,
      radius: '5000', // Search within a 5km radius
      type: 'establishment', // You can adjust the type as per your requirement
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHotspots(results.slice(1, 5)); // Limiting to first 5 results
      }
    });
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <FormControl width="100%" mb={4}>
        <Input type="text" placeholder="Enter city" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
      </FormControl>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Box id="map" height="500px" width="100%" />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Box>
            <Text fontSize="sm" mb={1}>Hotspots</Text>
            <VStack align="start" spacing={4}>
              {hotspots.map((spot, index) => (
                spot.name.toLowerCase() !== newLocation.toLowerCase() && (
                  <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" width="100%">
                    <Stack spacing={2} p={4}>
                      <Text fontWeight="bold">{spot.name}</Text>
                      <Text>{spot.vicinity}</Text>
                    </Stack>
                  </Box>
                )
              ))}
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default UserReports;
