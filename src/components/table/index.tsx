import React from 'react';
import { Table } from 'react-bootstrap';
import { iUser } from '../../interfaceModel/user';

type iHeader = {
    label: string
}

type iBody = {
    key: string
};

type iTableList = {
    children: JSX.Element[]
}


/**
 * This is not the best way to do a component
 * TODO: add compound architecture to this component
 */
const TableList = ({ children }: iTableList): JSX.Element => {
    // if (bodyProperties?.length !== headerProperties.length) {
    //     throw new Error('Size of header columns is different of body columns.')
    // }
    return (
        <Table striped bordered hover>
            {children}
        </Table>
    );
}


type iTableHeader = {
    headerProperties: iHeader[];
}
const tableHeader = ({ headerProperties }: iTableHeader) => {
    return (
        <thead data-testid="tableHeader">
            <tr>
                {headerProperties?.map((item, index: number) => {
                    return (<th key={index}>{item.label}</th>)
                })}
            </tr>
        </thead>

    )
}

type iTableBody = {
    bodyProperties: iBody[];
    data: iUser[]
}
const tableBody = ({ data, bodyProperties }: iTableBody) => {
    return (
        <tbody data-testid="userList">
            {data?.map((item: any, index: number) => {
                return (
                    <tr key={index}>
                        {bodyProperties.map((i, id: number) => <td key={id}>{item[i.key]}</td>)}
                    </tr>
                )
            })}
        </tbody>
    )
}
TableList.Body = tableBody;
TableList.Header = tableHeader;

export default TableList;
