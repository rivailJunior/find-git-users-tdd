import { useState, useEffect } from 'react';
import List from '../components/userList/list';
import RequestApi from '../helper/apiHelper';
import { iUser } from '../interfaceModel/user';

const Users = () => {
    const [users, setUsers] = useState<iUser[] | []>([]);
    const [loading, setLoading] = useState(true);

    const loadUsers = async () => {
        const userList = await RequestApi.getUsers('/users');
        setUsers(userList);
        setLoading(!userList.length)
    }

    useEffect(() => {
        loadUsers();
    }, []);


    return (
        <div>
            <List users={users} loading={loading} />
        </div>
    );
}

export default Users;
