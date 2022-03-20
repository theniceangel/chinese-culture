import { lazy, Suspense } from 'react'

const Home = lazy(() => import('pages/home'))
const InstantNoodlesColor = lazy(() => import('pages/instant-noodles/color'))

const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<>...</>}>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/instant-noodles',
    element: (
      <Suspense fallback={<>...</>}>
        <InstantNoodlesColor />
      </Suspense>
    )
  }
]

export default routes
