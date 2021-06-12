import { userList } from './../../mock/userList';
import ApiRequest from '../../helper/apiHelper';
import axios from "axios";
jest.mock('axios');
describe('When do an user request', () => {
    describe('and there is no error', () => {
        test('Show empty response', async () => {
            (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: [] }))
            await expect(ApiRequest.getUsers('/users')).resolves.toHaveLength(0)
        });
        test('Show user list response', async () => {
            (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: userList }))
            await expect(ApiRequest.getUsers('/users')).resolves.toHaveLength(3)
        });
    });

    describe('When there is an error', () => {
        test('and gotta a networkError because did not pass any endpoint', async () => {
            const errorMessage = 'Network Error';
            (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
            await expect(ApiRequest.getUsers('')).rejects.toThrow(errorMessage)
        })

        test('trying to get wrong endpoint', async () => {
            const errorMessage = 'Error: Network Error';
            (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
            await expect(ApiRequest.getUsers('/usersTest')).rejects.toThrow(errorMessage);
        })
    })

})