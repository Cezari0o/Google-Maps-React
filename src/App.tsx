import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Layout, { Button, ButtonStack, Title } from './components/MainLayout';
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api';
import clsx from 'clsx';
import { FaMapMarkerAlt } from 'react-icons/fa';


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  const [zoom, setZoom] = useState(15);
  const [marker, setMarker] = useState<null | JSX.Element>(null);
  const [mapRef, setMapRef] = useState<null | google.maps.Map>(null);
  const [openedWindow, setOpenedWindow] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState(false);


  // useEffect(() => {
  //   setTimeout(() => { setZoom(z => z - 1); }, 500)
  // }, []);

  const markers = useMemo(() => [
    { lat: -15.795299487332993, lng: -47.87307051219112, address: 'Ministério da Educação' },
    { lat: -15.798197321482878, lng: -47.875550158900936, address: 'Catedral Metropolitana Nossa Senhora Aparecida' },
    { lat: -15.800601454168254, lng: -47.86730507403445, address: 'Palácio Itamaraty' },
  ], []);

  const center = useMemo(() => ({ lat: -15.795299487332993, lng: -47.87307051219112 }), []);

  const handleToggleMarker = () => {
    if (marker) {
      setMarker(null);
      return;
    }
    setMarker(<Marker position={center} draggable />);
  }

  const handleMapLoad = (someMap: google.maps.Map) => {
    setMapRef(someMap);

    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));

    someMap.fitBounds(bounds);
  }

  const handleMarkerClick = (point: { lat: number, lng: number }, markerIdx: number) => {
    mapRef?.panTo(point);

    setOpenedWindow(markerIdx);
    setIsOpen(true)
  }

  const handleWindowClose = () => {
    setOpenedWindow(null);
    setIsOpen(false);
  }


  return (
    <Layout>

      <Title>
        Teste da API do Google
      </Title>

      <ButtonStack>
        <Button onClick={() => setZoom(z => z + 1)} className='d-none'>
          Aumentar zoom
        </Button>
        <Button onClick={() => setZoom(z => z - 1)} className='d-none'>
          Diminuir Zoom
        </Button>
        <Button onClick={handleToggleMarker} className='d-none'>
          Adicionar Marcador
        </Button>
      </ButtonStack>


      {!isLoaded ?
        <h1>Carregando a API</h1>
        :
        (
          <GoogleMap
            mapContainerClassName={clsx('map-container')}
            zoom={zoom}
            onLoad={handleMapLoad}
          >
            {markers.map(({ lat, lng, address }, idx) => {
              const Mark = () => {

                return (
                  <Marker position={{ lat, lng }} onClick={() => handleMarkerClick({ lat, lng }, idx)}>
                    { false && <InfoWindow onCloseClick={handleWindowClose}>
                      <h3 className='color-1'>{address}</h3>
                    </InfoWindow>}
                  </Marker>);
              }
              return <Mark key={`mark-${idx}`} />;
            })}
          </GoogleMap>
        )
      }
    </Layout>
  );
}

export default App;
