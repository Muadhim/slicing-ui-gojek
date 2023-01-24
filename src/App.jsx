import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Bantuan from './pages/bantuan/Bantuan';
import Beranda from './pages/beranda/Beranda';
import Blog from './pages/blog/Blog';
import Karir from './pages/karir/Karir';
import Produk from './pages/produk/Produk';
import Root from './routes/Root';
import MitraDriver from './pages/gabungMitra/mitraDriver/MitraDriver';
import MitraUsaha from './pages/gabungMitra/mitraUsaha/MitraUsaha';
import Tentang from './pages/perusahaan/tentang/Tentang';
import Newsroom from './pages/perusahaan/newsroom/Newsroom';
import Aman from './pages/perusahaan/aman/Aman';
import Sustainability from './pages/perusahaan/sustainability/Sustainability';

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Beranda />
      },
      {
        path: '/mitra-driver',
        element: <MitraDriver />
      },
      {
        path: '/mitra-usaha',
        element: <MitraUsaha />
      },
      {
        path: '/karir',
        element: <Karir />
      },
      {
        path: '/tentang',
        element: <Tentang />
      },
      {
        path: '/newsroom',
        element: <Newsroom />
      },
      {
        path: '/aman',
        element: <Aman />
      },
      {
        path: '/sustainability',
        element: <Sustainability />
      },
      {
        path: '/produk',
        element: <Produk />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/bantuan',
        element: <Bantuan />
      },
    ],
    
  }
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={mainRouter} />
    </React.StrictMode>
  );
}

export default App;
