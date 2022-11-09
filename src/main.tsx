import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import IndexPage from 'pages';
import ErrorBoundary from 'components/ErrorBoundary';
import 'styles/index.scss';
import MainLayout from 'components/layout';
import NotFoundPage from 'pages/404';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/photo/:photoId', element: <IndexPage /> },
  { path: '/*', element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <RouterProvider router={router} />
        </MainLayout>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
