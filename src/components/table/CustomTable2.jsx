import React from 'react'
import FakeData from "../../data/FakeData.json";
import ResponsiveCardTable from './component/ResponsiveCardTable';

const headers = ["Name", "Email", "Phone"];

export default function CustomTable2() {
    return (
        <div className="container mx-auto min-h-screen overflow-auto px-4 py-8 sm:flex sm:items-center sm:justify-center">
            <ResponsiveCardTable data={FakeData} headers={headers} actions />
        </div>
    )
}
