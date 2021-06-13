import { render, screen } from '@testing-library/react'
import TableList from '../../components/table'
import { userList } from '../../mock/userList'

describe('Render Table', () => {
    it('Snapshot', () => {
        const { container } = render(<TableList
            bodyProperties={[{ key: 'login' }]}
            data={userList}
            headerProperties={[{ label: 'Login' }]} />);
        expect(container.firstChild).toMatchSnapshot()
    });

    describe('When try pass a different size of objects to header and body', () => {
        it('Show an diff size error', () => {
            const header = [
                { label: 'Login' },
                { label: 'Email' },
            ];
            expect(() => render(<TableList bodyProperties={[{ key: 'login' }]} data={userList} headerProperties={header} />)).toThrowError('Size of header columns is different of body columns.');
        });
    })
})