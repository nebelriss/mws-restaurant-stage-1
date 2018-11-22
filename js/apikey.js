const apiKey = (() => {
  const apiKeyMapbox = '<your MAPBOX API KEY HERE>';

  return {
    getMapbox: () => apiKeyMapbox,
  }
})()