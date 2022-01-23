import {Routes, Route, Navigate
} from 'react-router-dom';
import FormPay from '../Pages/FormPay';
import Product from '../Pages/Product'

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/formpay" element={<FormPay/>}/>
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default DashboardRoutes;
