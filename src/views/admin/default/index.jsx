import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex, // Import the Flex component
  IconButton, // Assuming you use IconButton as well
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { MdAdd } from 'react-icons/md';

function UserReports() {
  const [map, setMap] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newLocation, setNewLocation] = useState('');
  const [capacity, setCapacity] = useState('empty');
  const [dustbins, setDustbins] = useState([
    { name: "Versova Beach", location: { lat: 19.1376, lng: 72.7937 }, capacity: "Full" },
    { name: "Juhu Beach", location: { lat: 19.0970, lng: 72.8271 }, capacity: "Half Full" },
    { name: "Infiniti Mall", location: { lat: 19.1285, lng: 72.8271 }, capacity: "Empty" },
    { name: "Andheri Sports Complex", location: { lat: 19.1312, lng: 72.8258 }, capacity: "Full" }
  ]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCloOFxFC3egPYUQFHQ2GaD1Tmtt9Pc6Zg&libraries=places";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12, // Default zoom level
        center: { lat: 19.1300, lng: 72.8244 },
      });
      setMap(mapInstance);

      // Add predefined POIs
      const predefinedPOIs = [
        { name: "Gateway of India", location: { lat: 18.9217, lng: 72.8347 }, capacity: "Full" },
        { name: "Chhatrapati Shivaji Maharaj Terminus", location: { lat: 18.9401, lng: 72.8356 }, capacity: "Half Full" },
        // Add more predefined POIs as needed
      ];

      // Add markers for predefined POIs
      predefinedPOIs.forEach(poi => addMarker(poi));
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
          map.setZoom(14); // Zoom in on the entered city
        }
      });
    }
  }, [map, newLocation]);

  // const addNewBin = () => {
  //   if (newLocation.trim() !== '') {
  //     const geocoder = new window.google.maps.Geocoder();
  //     geocoder.geocode({ 'address': newLocation }, (results, status) => {
  //       if (status === 'OK' && results[0]) {
  //         const newBin = {
  //           name: "Bin",
  //           location: results[0].geometry.location,
  //           capacity: capacity
  //         };

  //         // Update the dustbins state by adding the new bin
  //         setDustbins(prevDustbins => [...prevDustbins, newBin]);

  //         // Add the new bin marker to the map
  //         addMarker(newBin);

  //         setShowForm(false);
  //       } else {
  //         alert('Geocode was not successful for the following reason: ' + status);
  //       }
  //     });
  //   } else {
  //     alert('Please enter a location for the new bin.');
  //   }
  // };

  const addNewBin = () => {
    if (newLocation.trim() !== '') {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ 'address': newLocation }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const newBin = {
            name: "Bin",
            location: results[0].geometry.location,
            capacity: capacity
          };
          setDustbins(prevDustbins => [...prevDustbins, newBin]);
          const markerIconUrl = getMarkerIcon(newBin.capacity);
          addMarker(newBin, markerIconUrl);
          setShowForm(false);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    } else {
      alert('Please enter a location for the new bin.');
    }
  };

  const addMarker = (locationInfo, markerIconUrl) => {
    if (map) {
      const marker = new window.google.maps.Marker({
        position: locationInfo.location,
        map: map,
        title: locationInfo.name,
        icon: {
          url: markerIconUrl,
        }
      });

      const infoWindowContent = '<div class="info-window"><strong>' + locationInfo.name + '</strong><br>Capacity: ' + locationInfo.capacity + '</div>';
      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContent
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
  };

  // const getMarkerIcon = (capacity) => {
  //   switch (capacity) {
  //     case "Full":
  //       return "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
  //     case "Half Full":
  //       return "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
  //     default:
  //       return "https://maps.google.com/mapfiles/ms/icons/green-dot.png";
  //   }
  // };






  const getMarkerIcon = (capacity) => {
    if (capacity === "Full") {
      return "https://raw.githubusercontent.com/Dhruvnet/svg_codes/main/redbin.jpg?token=GHSAT0AAAAAACNM6XGAESUM6JGY3DKGADJ6ZP5PFZQ";
    } else if (capacity === "Half Full") {
      return "https://raw.githubusercontent.com/Dhruvnet/svg_codes/main/yellowbin.png?token=GHSAT0AAAAAACNM6XGABDXRPH7TAF3FSVVMZP5PEBQ";
    } else {
      return "https://raw.githubusercontent.com/Dhruvnet/svg_codes/main/greenbin.png?token=GHSAT0AAAAAACNM6XGAOPXR63C63L3OXYCGZQBGA5A";
    }
  };

 



  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Box>
        <FormControl mt="4" mb="4">
          <Flex align="center">
            <Box flex="1">
              <Flex align="center" borderRadius="full" bg="gray.100" p="2" pr="3">
                <SearchIcon color="gray.500" />
                <Input
                  type="text"
                  width="20%"  // Adjusted width to cover 50% of the container
                  placeholder="Enter city"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  bg="transparent"
                  borderRadius="none"
                  border="none"
                  _focus={{
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />
              </Flex>
            </Box>
            <Box ml="4">
              <Button leftIcon={<MdAdd />} colorScheme="purple" onClick={() => setShowForm(true)}>Add New Bin</Button>
            </Box>
          </Flex>
        </FormControl>

        <Box id="map" height="500px" width="100%" />
        <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Bin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input type="text" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Capacity</FormLabel>
                <Select value={capacity} onChange={(e) => {
                  setCapacity(e.target.value);
                }}>
                  <option value="empty">Empty</option>
                  <option value="half">Half Full</option>
                  <option value="full">Full</option>
                </Select>

              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="purple" onClick={addNewBin}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
export default UserReports;


// <-- firebase code -->
// src/views/admin/default/index.jsx