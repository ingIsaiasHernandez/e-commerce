import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const inputname = useSelector(state => state.inputName)
        // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(inputname === 'john@gmail.com'){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }
};

export default ProtectedRoutes;