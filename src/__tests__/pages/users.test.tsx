import { render, screen } from "@testing-library/react"
import Users from '../../pages/users';
import RequestApi from '../../helper/apiHelper';
import { userList } from "../../mock/userList";
import { iUser } from "../../interfaceModel/user";

let mockUsers: iUser[] = [];
beforeAll(() => {
    mockUsers = userList;
    return mockUsers
})

jest.mock('../../helper/apiHelper');
describe('When Users page is called', () => {
    describe('and everything is ok', () => {
        it('Snapshot with users', async () => {
            (RequestApi.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            const { container } = render(<Users />);
            await screen.findByTestId('userList');
            expect(container.firstChild).toMatchSnapshot()
        })
        it('Show User List', async () => {
            (RequestApi.getUsers as jest.Mock).mockResolvedValue(mockUsers);
            render(<Users />);
            const userList = await screen.findByTestId('userList');
            expect(userList.children.length).toBe(3);
        });

    });

    describe('or when there is no user on list', () => {
        it('Show Empty List', async () => {
            (RequestApi.getUsers as jest.Mock).mockResolvedValue([]);
            render(<Users />);
            const loading = await screen.findByText(/Loading.../);
            expect(loading).toBeInTheDocument()
        })
    })


})