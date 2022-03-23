import { useState, useEffect, SyntheticEvent } from "react";
import Header from "../Header/index";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { observer } from "mobx-react";

interface ILayout {
  path: string;
}

const Layout: React.FC<ILayout> = ({ path }) => {
  let navigate = useNavigate();
  const [value, setValue] = useState<string>("all-pools");
  const [activeLayout, setActiveLayout] = useState("pools");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    if (newValue !== "positions") {
      setValue("all-pools");
      navigate(`/${path}/pools/all-pools`);
      setActiveLayout("pools");
    } else {
      setValue(newValue);
      setActiveLayout("positions");
      navigate(`/${path}/${newValue}`);
    }
  };

  useEffect(() => {
    if (activeLayout !== "positions") {
      navigate(`/${path}/pools/${value}`);
    } else navigate(`/${path}/${activeLayout}`);
  }, [path, value, navigate, activeLayout]);

  return (
    <div>
      <Header />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="pools" value="all-pools" />
        <Tab label="positions" value="positions" />
      </Tabs>
    </div>
  );
};

export default observer(Layout);
