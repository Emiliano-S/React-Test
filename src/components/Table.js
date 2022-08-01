import { TableRow } from "./TableRow"

export function Table({list}){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Cellulare</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((contact, index)=>{
                        return <TableRow key={index} {...contact} />
                    })}
                </tbody>
            </table>
        </div>
    )

}