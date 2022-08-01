
export function TableRow({first_name, last_name, phone, image}){

    return(
        <tr>
            <td><img style={{height:"50px", width:"auto"}} src={image} alt={first_name}/></td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{phone}</td>
        </tr>
    )

}