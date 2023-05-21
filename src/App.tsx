import React, { useMemo, useState } from 'react';
import './App.css';
import Layout, { Button, ButtonStack, Title } from './components/MainLayout';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import clsx from 'clsx';


function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  const [zoom, setZoom] = useState(15);


  const center = useMemo(() => ({ lat: -15.795299487332993, lng: -47.87307051219112 }), []);

  return (
    <Layout>

      <Title>
        Teste da API do Google
      </Title>

      <ButtonStack>
        <Button onClick={() => setZoom(z => z + 1)}>
          Aumentar zoom
        </Button>
        <Button onClick={() => setZoom(z => z - 1)}>
          Diminuir Zoom
        </Button>
      </ButtonStack>


      {!isLoaded ?
        <h1>Carregando a API</h1>
        :
        (
          <GoogleMap
            mapContainerClassName={clsx('map-container')}
            center={center}
            zoom={zoom}
          />
        )
      }
    </Layout>
  );
}

export default App;
