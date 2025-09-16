import { deleteUser } from "../API/Calls";
const One = (props: any) => {
  const { array, fetchData } = props;

  const Delete = async (item: any) => {
    const response = (await deleteUser("/delete/" + item.id)) as any;
    if (response.status) fetchData();
  };

  const style = { border: "2px solid white", padding: "10px" };

  return (
    <div>
      <table style={{ fontSize: "20px" }}>
        <thead>
          <tr>
            <th style={style}>ID</th>
            <th style={style}>NAME</th>
            <th style={style}>EMAIL</th>
            <th style={style}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item: any, index: number) => (
            <tr key={index}>
              <td style={style}> {item.id} </td>
              <td style={style}> {item.name} </td>
              <td style={style}> {item.email} </td>
              <td style={style} onClick={() => Delete(item)}>
                DELETE
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default One;
