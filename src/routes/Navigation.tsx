import { Suspense } from "react"
import { Routes,Route,NavLink,Navigate } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
// import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages"
import { routes } from "./routes"


import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense>

    <BrowserRouter>
    <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo"/>
        <ul>
            {/* TODO: crear navlink dinámicos */}

            {routes.map(data => (
                <li key={data.to}>
                    <NavLink to={data.to}className={({isActive}) => isActive ? 'nav-active' : ''} >{data.name}</NavLink>
                </li>
            )) }
        </ul>
        </nav>
        <Routes>
            {
                routes.map(({to,path,Component:Component}) => (
                    <Route key={to} path={path} element={<Component/>}/>
                ))
            }
            {/* <Route path="lazy1" element={<LazyPage1/>}/> */}
            {/* <Route path="lazy2" element={<LazyPage2/>}/> */}
            {/* <Route path="lazy3" element={<LazyPage3/>}/> */}
            <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </Suspense>
  )
}
