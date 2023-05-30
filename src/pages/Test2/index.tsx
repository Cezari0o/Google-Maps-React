import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useMemo, useState } from "react";
import { MyLayout } from "./style";

function Test2() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  const center = useMemo(() => ({ lat: -15.795299487332993, lng: -47.87307051219112, }), []);

  return (<MyLayout>

    {isLoaded ?
      <GoogleMap mapContainerClassName='map-full-window' center={center} zoom={15}>

      </GoogleMap>
      : <div>Carregando...</div>
    }
  </MyLayout>
  );
}

export default Test2;