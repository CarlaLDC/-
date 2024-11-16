import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Symbol from './pages/home/index';


export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Symbol />} />
            </Routes>
        </BrowserRouter >

    )

}
