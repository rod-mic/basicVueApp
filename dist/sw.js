importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5f13e5ba0e4e2ea91e6d.js",
    "revision": "4a5299f170a1303dc60ce70221e786eb"
  },
  {
    "url": "/_nuxt/921e5d2bec8ca64ab0dd.js",
    "revision": "4e15fc89b02842baac4d344d7bc90f66"
  },
  {
    "url": "/_nuxt/bb72259fd92e910820e1.js",
    "revision": "edf5ecfe2a2be897f6e23feaf9896341"
  },
  {
    "url": "/_nuxt/dc881c86b81e4605060f.js",
    "revision": "dd88b0be36fa1aa3e32f3b2ef1d36de2"
  },
  {
    "url": "/_nuxt/e298d72f2cfc8a48a7d9.js",
    "revision": "979367517cd6034942570653f805ffdb"
  }
], {
  "cacheId": "basicVueApp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
