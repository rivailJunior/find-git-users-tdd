import { iUser } from "../../interfaceModel/user";

type iList = {
    loading: boolean;
    users: iUser[]
}
export default function List({ loading, users }: iList) {
    return (
        <div>
            <h3>Lista de Usuários</h3>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul data-testid="userList">
                    {users?.map((user, index) => {
                        return <li key={index}> {user.login} </li>;
                    })}
                </ul>
            )}
        </div>
    );
}
