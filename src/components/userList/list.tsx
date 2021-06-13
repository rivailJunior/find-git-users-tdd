import { iUser } from "../../interfaceModel/user";
import TableList from '../table'

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

                <TableList
                    data={users}
                    headerProperties={[{ label: 'Login' }]}
                    bodyProperties={[{ key: 'login' }]}
                />
            )}
        </div>
    );
}
