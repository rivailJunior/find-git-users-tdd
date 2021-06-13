import { render, screen } from '@testing-library/react';
import List from '../../components/userList/list';
import { userList } from '../../mock/userList';

describe('List component', () => {
    describe('Create Snapshot', () => {
        test('Snapshot with loading active and no user on list', () => {
            const { container } = render(<List loading={true} users={[]} />);
            expect(container.firstChild).toMatchSnapshot();
        });
    })

    describe('When user list length is 0', () => {
        test('Show Component Title', () => {
            render(<List loading={true} users={[]} />);
            expect(screen.getByText(/Lista de usuários/i)).toBeInTheDocument()
        });

        test('Show loading feedback to user', () => {
            render(<List loading={true} users={[]} />);
            expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
        });
    });

    describe('When there are users on list', () => {
        test('Render list with 3 users found', () => {
            render(<List loading={false} users={userList} />);
            expect(screen.getByTestId('userList').children.length).toBe(3);
        });

        test('Remove loading information', () => {
            render(<List loading={false} users={userList} />);
            expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
        });
    })

})