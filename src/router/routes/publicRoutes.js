import { lazy } from 'react'

const Login = lazy(() => import('../../views/auth/Login'))
const Register = lazy(() => import('../../views/auth/Register'))
const BackOffice = lazy(() => import('../../views/auth/BackOffice'))

const publicRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/admin',
        element: <BackOffice />
    },
]

export default publicRoutes