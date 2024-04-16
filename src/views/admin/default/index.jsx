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
  Icon,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { MdSearch, MdAdd } from 'react-icons/md';


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
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCloOFxFC3egPYUQFHQ2GaD1Tmtt9Pc6Zg&libraries=places`;
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

  const addMarker = (locationInfo) => {
    if (map) {
      const markerIcon = getMarkerIcon(locationInfo.capacity);
      const marker = new window.google.maps.Marker({
        position: locationInfo.location,
        map: map,
        title: locationInfo.name,
        icon: markerIcon
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

  const addNewBin = () => {
    if (newLocation.trim() !== '') {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ 'address': newLocation }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const newBin = {
            name: "New Bin",
            location: results[0].geometry.location,
            capacity: capacity
          };

          // Update the dustbins state by adding the new bin
          setDustbins(prevDustbins => [...prevDustbins, newBin]);

          // Add the new bin marker to the map
          addMarker(newBin);

          setShowForm(false);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    } else {
      alert('Please enter a location for the new bin.');
    }
  };

  const getMarkerIcon = (capacity) => {
    if (capacity === "Full") {
      return "https://raw.githubusercontent.com/Dhruvnet/svg_codes/main/greenbin.png?token=GHSAT0AAAAAACNM6XGBDENM4KYFGXWRJIO6ZQ6XVDQ";
    } else if (capacity === "Half Full") {
      return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    } else {
      return "https://raw.githubusercontent.com/Dhruvnet/svg_codes/main/greenbin.png?token=GHSAT0AAAAAACNM6XGBDENM4KYFGXWRJIO6ZQ6XVDQ";
    }
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Box marginBottom="20px">
        <FormControl display="flex" alignItems="center">
          <Icon as={MdSearch} marginRight="10px" color="gray.400" />

          <Input
            flex="1"
            type="text"
            placeholder="Enter city"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            borderRadius="full"
            border="1px solid #ccc"
            py="2"
            px="3"
          />

          <Button
            ml="2"
            onClick={() => setShowForm(true)}
            leftIcon={<Icon as={MdAdd} />}
            borderRadius="full"
            colorScheme="blue"
            px="4"
          >
            Add New Bin
          </Button>
        </FormControl>
      </Box>
      <Box id="map" height="510px" width="100%" />
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
              <Select value={capacity} onChange={(e) => setCapacity(e.target.value)}>
                <option value="empty">Empty</option>
                <option value="half">Half Full</option>
                <option value="full">Full</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={addNewBin}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default UserReports;
