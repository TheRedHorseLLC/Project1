import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const API_KEY = 'YOUR_API_KEY';

const App = () => (
  <APIProvider apiKey={API_KEY}>
    <Map 
      defaultCenter={{ lat: 40.7128, lng: -74.0060 }} 
      defaultZoom={10} 
    >
      <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
    </Map>
  </APIProvider>
);

export default App;