import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../Redux/Slice";
import { getOneUsers, updateUser } from "../API/Calls";
import { useState } from "react";

const Four = (props: any) => {
  const dispatch = useDispatch();
  const { array, callBack } = props;
  const [idValue, setIdValue] = useState<number>(0);

  const { name, email } = useSelector(
    (state: { comp1: { name: string; email: string } }) => state.comp1
  );

  const handleSelectChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = JSON.parse(e.target.value);
    setIdValue(selectedOption);
    const apiCall = (await getOneUsers(`${selectedOption}`)) as any;
    const data = apiCall.data;
    dispatch(incrementAction({ name: data.name, email: data.email }));
  };

  const handleSubmit = async (id: number) => {
    try {
      const data = { name: name, email: email };
      const adding = (await updateUser(`/update/${id}`, data)) as any;
      if (adding.status) callBack() && dispatch(incrementAction({ name: '', email: '' }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "block" }}>
      <select
        style={{ height: 40, width: 200, fontSize: 22 }}
        onChange={handleSelectChange}
      >
        <option value={""} disabled selected>
          --SELECT--
        </option>
        {array.map((option: any, index: number) => (
          <option key={index} value={option.id}>
            {option.id + " -- " + option.name}
          </option>
        ))}
      </select>
      <br />
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
      <br />
      <br />
      <button onClick={() => handleSubmit(idValue)}>SUBMIT RECORD</button>
    </div>
  );
};
export default Four;
