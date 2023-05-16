import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './homePage'
import TestPage from './testPage'
import Dashboard from './dashboard.jsx'
import TestPageStart from './testPageStart'


function RoutePage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/test-page" element={<TestPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/test-page-start/:id" element={<TestPageStart />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RoutePage;