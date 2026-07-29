import { useEffect } from 'react';

const useGoogleAnalytics = (gaMeasurementId) => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaMeasurementId);

    return () => {
      // Cleanup the script when component unmounts
      document.head.removeChild(script);
    };
  }, [gaMeasurementId]); // Only re-run the effect if gaMeasurementId changes
};

export default useGoogleAnalytics;
