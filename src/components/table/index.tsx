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
    headerProperties: iHeader[];
    bodyProperties: iBody[];
    data: iUser[]
}


/**
 * This is not the best way to do a component
 * TODO: add compound architecture to this component
 */
const TableList = ({ headerProperties, data, bodyProperties }: iTableList): JSX.Element => {

    if (bodyProperties.length !== headerProperties.length) {
        throw new Error('Size of header columns is different of body columns.')
    }

    return (
        <Table striped bordered hover>
            <thead data-testid="tableHeader">
                <tr>
                    {headerProperties?.map((item, index) => {
                        return (<th key={index}>{item.label}</th>)
                    })}
                </tr>
            </thead>
            <tbody data-testid="userList">
                {data?.map((item: any, index) => {
                    return (
                        <tr key={index}>
                            {bodyProperties.map((i, id) => <td key={id}>{item[i.key]}</td>)}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default TableList;
