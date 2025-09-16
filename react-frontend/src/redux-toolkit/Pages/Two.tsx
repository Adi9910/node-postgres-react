import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../Redux/Slice";
import { getOneUsers } from "../API/Calls";

const Two = (props: any) => {
  const dispatch = useDispatch();
  const { array } = props;

  const { name, email } = useSelector(
    (state: { comp1: { name: string; email: string } }) => state.comp1
  );

  const handleSelectChange = async(e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = JSON.parse(e.target.value);
    const apiCall = await getOneUsers(`${selectedOption}`) as any;
    const data = apiCall.data;
    dispatch(incrementAction({ name: data.name, email: data.email }));
  };
  
  return (
      <div style={{ display: "block" }}>
        <select
            style={{ height: 40, width: 200, fontSize: 22 }}
            onChange={handleSelectChange}
        >
          <option value={''} disabled selected>--SELECT--</option>
            {array.length > 0 ? array.map((option: any, index: number) => (
                <option key={index} value={option.id}>
                    {option.id + " -- " + option.name}
                </option>
            )) : null}
        </select>
        <br />
        <h5>NAME</h5>
        <input type="text" value={name} disabled />
        <h5>EMAIL</h5>
        <input type="text" value={email} disabled />
      </div>
    );
};
export default Two;
