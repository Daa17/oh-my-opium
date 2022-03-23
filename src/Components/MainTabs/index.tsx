import { FC, useState, SyntheticEvent } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./styles.scss";

interface ITabs {
  tabs: ITabItem[];
}

interface ITabItem {
  label: string;
  value: string;
}

const MainTabs: FC<ITabs> = ({ tabs }) => {
  let navigate = useNavigate();

  const [value, setValue] = useState<string>("");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/eth/pools/${newValue}`);
  };

  return (
    <div className="main_tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabs?.map(({ label, value }) => (
          <Link to={`${value}`}>
            <Tab label={label} value={value}></Tab>
          </Link>
        ))}
      </Tabs>
      <Outlet />
    </div>
  );
};

export default MainTabs;
