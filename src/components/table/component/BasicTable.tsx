import React from 'react'


type MasterTableProps = {
    headers: string[];
    data: Array<{ [key: string]: unknown }>;
}


export default function BasicTable({ headers = [], data = [] }: MasterTableProps) {
    if (data.length === 0) return (<div>Data not found!</div>)
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-6 py-3 whitespace-nowrap">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            {headers.map((header, i) => (
                                <td key={i} className="px-6 py-4 whitespace-break-spaces text-gray-800">
                                    {String(row[header.toLowerCase()]) ?? "-"}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
