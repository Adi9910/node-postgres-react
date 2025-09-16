import "./app.css";
import Two from "./Pages/Two";
import Three from "./Pages/Three";
import Four from "./Pages/Four";
import One from "./Pages/One";
import { useEffect, useState } from "react";
import { getAllUsers } from "./API/Calls";
import { useDispatch, useSelector } from "react-redux";
import { arrayUpdateAction, incrementAction } from "./Redux/Slice";

const Buttons = [
  { button: "Single User", index: 1 },
  { button: "Create User", index: 2 },
  { button: "Update User", index: 3 },
];

const App = () => {
  const [tab, setTab] = useState<number>(1);
  const dispatch = useDispatch();

  const { array } = useSelector(
    (state: { comp1: { array: any[] } }) => state.comp1
  );

  const fetchData = async () => {
    const response = (await getAllUsers("/")) as any;
    dispatch(arrayUpdateAction(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTab = (index: number) => {
    setTab(index);
    dispatch(incrementAction({ name: '', email: '' }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="tab-buttons">
        {Buttons.map((item) => (
          <button
            key={item.index}
            style={{ background: tab === item.index ? "skyblue" : "grey" }}
            onClick={() => handleTab(item.index)}
          >
            {item.button}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tab === 1 && <Two array={array} />}
        {tab === 2 && <Three array={array} callBack={fetchData} />}
        {tab === 3 && <Four array={array} callBack={fetchData}/>}
        <br/>
        <br/>
        <One array={array} fetchData={fetchData}/>

        
      </div>
    </div>
  );
};

export default App;
