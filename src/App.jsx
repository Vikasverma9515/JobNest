import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layout.jsx';
import React from 'react';
import LandingPage from './pages/landing.jsx';
import Onboarding from './pages/onboarding.jsx';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import SavedJobs from './pages/saved-jobs';
import MyJobs from './pages/my-jobs';
import PostJob from './pages/post-jobs';
import { ThemeProvider }  from './components/theme-provider';
import Header from './components/header';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/jobs',
        element: <JobListing />,
      },
      {
        path: '/job/:id',
        element: <JobPage />,
      },
      {
        path: '/post-job',
        element: <PostJob />,
      },
      {
        path: '/saved-job',
        element: <SavedJobs />,
      },
      {
        path: '/my-jobs',
        element: <MyJobs />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;