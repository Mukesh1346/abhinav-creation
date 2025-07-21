'use client';
import Script from 'next/script';
// import React from 'react'

export default function BootstrapLoader() {
  return (
    <Script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
      crossOrigin="anonymous"
    />
  )
}
