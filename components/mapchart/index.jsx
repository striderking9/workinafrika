import dynamic from 'next/dynamic';

const MapChart = dynamic(() => import('./mapchart'), {
  ssr: false
});

export default Map;