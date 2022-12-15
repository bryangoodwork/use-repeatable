import React from "react";
export declare function RemoveButton({ onClick, children, removeItem, index, }: {
    onClick?: () => void;
    children: React.ReactNode;
    removeItem: (n: number) => void;
    index: number;
}): JSX.Element;
