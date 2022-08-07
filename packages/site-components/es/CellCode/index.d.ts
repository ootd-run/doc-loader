import React, { PropsWithChildren, ReactNode } from 'react';
interface CellCodeProps {
    tsx?: ReactNode;
    cssCode?: string;
}
interface CellCodeState {
    showAll: boolean;
    codeType: 'jsx' | 'tsx';
}
declare class CellCode extends React.Component<PropsWithChildren<CellCodeProps>, CellCodeState> {
    private btnCopy;
    private codeEle;
    private lang;
    constructor(props: any);
    componentDidMount(): void;
    gotoCodepen: () => void;
    getData: (code: any) => {
        title: string;
        html: any;
        js: any;
        css: string;
        js_pre_processor: string;
        css_external: any;
        js_external: any;
        editors: string;
    };
    post: (code: any, codesandbox?: {
        url?: string;
        parameters;
        name?: string;
    }) => void;
    toggleCodeType: () => void;
    toggleCode: (e: any) => void;
    gotoCodeSandBox: () => void;
    renderOperations: () => JSX.Element;
    render(): JSX.Element;
}
declare type CellCodeType = typeof CellCode & {
    Css: any;
    Short: any;
};
declare const _default: CellCodeType;
export default _default;