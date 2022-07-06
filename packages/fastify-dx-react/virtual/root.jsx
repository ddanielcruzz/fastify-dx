import { Suspense } from 'react'
import { DXRoute } from '/dx:core.jsx'

export default function Root ({ url, serverInit }) {
  return (
    <Suspense>
      <Router location={url}>
        <Routes>{
          routes.map(({ path, component: Component }) =>
            <Route
              key={path}
              path={path}
              element={
                <DXRoute
                  head={head}
                  ctxHydration={ctxHydration}
                  ctx={routeMap[path]}>
                  <Component />
                </DXRoute>
              } />,
          )
        }</Routes>
      </Router>
    </Suspense>
  )
}
