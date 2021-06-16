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
                <TableList>
                    <TableList.Header headerProperties={[{ label: 'Login' }]} />
                    <TableList.Body data={users} bodyProperties={[{ key: 'login' }]} />
                </TableList>
            )}
        </div>
    );
}
