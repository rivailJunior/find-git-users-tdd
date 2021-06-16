import { render, screen } from '@testing-library/react'
import TableList from '../../components/table'
import { userList } from '../../mock/userList'

const Wrapper = () => {
    return (
        <TableList>
            <TableList.Header headerProperties={[{ label: 'Login' }]} />
            <TableList.Body bodyProperties={[{ key: 'login' }]} data={userList} />
        </TableList>
    )
}

describe('Render Table', () => {
    it('Snapshot', () => {

        const { container } = render(<Wrapper />);
        expect(container.firstChild).toMatchSnapshot()
    });

    // describe('When try pass a different size of objects to header and body', () => {
    //     it('Show an diff size error', () => {
    //         const header = [
    //             { label: 'Login' },
    //             { label: 'Email' },
    //         ];
    //         expect(() => render(<TableList bodyProperties={[{ key: 'login' }]} data={userList} headerProperties={header} />)).toThrowError('Size of header columns is different of body columns.');
    //     });
    // })
})