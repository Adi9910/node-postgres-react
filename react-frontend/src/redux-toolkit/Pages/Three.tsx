import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../Redux/Slice";
import { addUser } from "../API/Calls";
import "../app.css";

const Three = (props: any) => {
  const dispatch = useDispatch();
  const { array, callBack } = props;

  const { name, email } = useSelector(
    (state: { comp1: { name: string; email: string } }) => state.comp1
  );

  const handleSubmit = async () => {
    const data = { id: array.length, name: name, email: email };
    const adding = (await addUser("/add", data)) as any;
    if (adding.status) callBack() && dispatch(incrementAction({ name: '', email: '' }));
  };

  return (
    <>
      <div style={{ display: "block" }}>
        <h5>NAME</h5>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            dispatch(incrementAction({ name: e.target.value, email: email }))
        }
        />
        <h5>EMAIL</h5>
        <input
          type="text"
          value={email}
          onChange={(e) =>
            dispatch(incrementAction({ name: name, email: e.target.value }))
          }
        />
      </div>
      <br/>
      <button onClick={() => handleSubmit()}>SUBMIT RECORD</button>
    </>
  );
};
export default Three;
