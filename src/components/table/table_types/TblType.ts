import { HTMLAttributes } from "react";

export type TablePropsType = {
    headers: string
}
export type HeadersTypes = {
    [key: string]: Array<string>;
}

export interface MasterTableProps extends HTMLAttributes<HTMLDivElement> {
    headers: Array<string>;
    // data: Array<{ [key: string]: unknown }>;
    data: Record<string, unknown>[],
    actions?: boolean,
    onDelete?: () => 0,
    onEdit?: () => null
}
