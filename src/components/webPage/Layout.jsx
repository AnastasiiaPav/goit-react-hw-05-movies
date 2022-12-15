import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Links } from "components/All.styled";

   const Layout = () => {
    return(
        <div>
       <Links to={''}>Home</Links>
       <Links to={'film'}>Movies</Links>
       <Suspense>
        <Outlet/>
       </Suspense>
        </div>
    )
}

export default Layout