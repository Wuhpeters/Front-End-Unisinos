import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Formulario from './componentes/Formulario';
import Perfil from './PaginaInicial/Perfil';
import RegistroDespesas from './PaginaInicial/RegistroDespesas';
import ImportacaoDados from './PaginaInicial/ImportacaoDados';
import CategorizacaoGastos from './PaginaInicial/CategorizacaoGastos';

const router = createBrowserRouter ([
  {
  path: "/",
  element: <App />
  },
  {
    path: "/Fomulario",
    element: <Formulario />
  },
  {
    path: "/Perfil",
    element: <Perfil />
  },
  {
    path: "/RegistroDespesas",
    element: <RegistroDespesas />
  },
  {
    path: "/ImportacaoDados",
    element: <ImportacaoDados />
  },
  {
    path: "/CategorizacaoGastos",
    element: <CategorizacaoGastos />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
