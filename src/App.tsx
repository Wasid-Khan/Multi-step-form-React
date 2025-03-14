import NotFoundPage from "./pages/NotFoundPage"
import PersonalInfoPage from "./pages/PersonalInfoPage"
import AddressPage from "./pages/AddressPage"
import PreferencesPage from "./pages/PreferencesPage"
import SummaryPage from "./pages/SummaryPage"
import Layout from "./layouts/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FormProvider from "./context/formContext"


const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <PersonalInfoPage />
      },
      {
        path: "/address",
        element: <AddressPage />
      },
      {
        path: "/preferences",
        element: <PreferencesPage />
      },
      {
        path: "/summary",
        element: <SummaryPage />
      },
    ]

  }
]

const router = createBrowserRouter(routes);


export default function App(){
  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>

  );
}

