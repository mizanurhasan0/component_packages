import React from 'react'
import { MasterTableProps } from '../table_types/TblType'


export default function ResponsiveCardTable({ headers = [], data = [], ...props }: MasterTableProps) {
    if (!(data.length && headers.length)) return (<div>Data not found!</div>)
    return (
        <div className="overflow-x-auto w-full">
            <table className="min-w-full text-sm text-left">
                <thead className="hidden sm:table-header-group bg-gray-100 text-gray-600 uppercase">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-6 py-3 whitespace-nowrap">
                                {header}
                            </th>
                        ))}
                        {props?.actions && (
                            <th className="px-6 py-3 whitespace-nowrap">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200" >
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="block sm:table-row bg-white sm:bg-transparent mb-4 sm:mb-0 rounded sm:rounded-none shadow sm:shadow-none border sm:border-0"
                        >
                            {headers.map((header, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="block sm:table-cell px-6 py-4 text-gray-800 whitespace-break-spaces relative sm:static before:absolute before:left-6 before:top-4 before:font-semibold before:text-xs before:uppercase before:text-gray-500 sm:before:content-none"
                                    style={{ content: 'none' }}
                                    data-label={header}
                                >
                                    <span className="sm:hidden block mb-1 text-xs font-semibold text-gray-500 uppercase">
                                        {header}
                                    </span>
                                    {String(row[header.toLowerCase()]) ?? "-"}
                                </td>
                            ))}
                            {props?.actions && (
                                <th className="px-6 py-3 whitespace-nowrap">
                                    <button type='button' onClick={props?.onEdit}>Edit</button>
                                    <button type='button' onClick={props?.onDelete}>delete</button>
                                </th>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
