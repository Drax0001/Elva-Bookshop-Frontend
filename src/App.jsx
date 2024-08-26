import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { userContext } from './components/Contexts/userContext'

// Client side pages
import HomePage from './pages/client/HomePage'  
import CatalogPage from './pages/client/CatalogPage'  
import MyAccountPage from './pages/client/MyAccountPage'
import MaterialDetailPage from './pages/client/MaterialDetailPage'
import Contact from './pages/client/Contact'
import RootLayout from './pages/client/RootLayout'

// Admin Pages 
import AdminLayout from './pages/admin/AdminLayout'
import Books from './pages/admin/Books'
import BookDetail from './pages/admin/BookDetail'
import Account from './pages/admin/Account'
import Dashboard from './pages/admin/Dashboard'

// Not found page
import PageNotFound from './pages/PageNotFound'

// Auth pages
// import AuthPage from './pages/auth/AuthPage'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import { useState } from 'react'


const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        //<Route></Route>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          
          <Route path='user' element={<RootLayout />}>
            <Route index element={<HomePage />} /> 
            <Route path='catalog' element={<CatalogPage />} /> 
            <Route path='catalog/:materialId' element={<MaterialDetailPage />} /> 
            <Route path='account' element={<MyAccountPage />} /> 
            <Route path='contact' element={<Contact />} /> 
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} /> 
            <Route path='books' element={<Books />} /> 
            <Route path='books/:bookId' element={<BookDetail />} /> 
            <Route path='account' element={<Account />} /> 
            {/* <Route path='contact' element={<Contact />} />  */}
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
    ))

    const [userInfo, setUserInfo] = useState({})

    return (
      <>
        <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
        <userContext.Provider value={{ userInfo, setUserInfo }}>
          <RouterProvider router={router} />
        </userContext.Provider>
      </>
      
    )
}

export default App