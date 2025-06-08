import { HTMLAttributes } from "react";

export interface DropdwonPropsTypes extends HTMLAttributes<HTMLDivElement> {
    defaultSelectedValue?: string,
    options: Record<string, unknown>[]
}