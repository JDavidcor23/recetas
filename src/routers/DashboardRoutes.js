import {Routes, Route, Navigate
} from 'react-router-dom';
import Product from '../Pages/Product'

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default DashboardRoutes;
