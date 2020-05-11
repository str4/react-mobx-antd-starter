import React from "react";
import { Input } from "antd";
import { observer } from "mobx-react";
import { Helmet } from "react-helmet"
import { useStores } from "../../hooks/useStores";

const Home = observer(() => {
  const { uiStore } = useStores();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Input
        onChange={uiStore.onChange}
        name="message"
        placeholder="Type a message here..."
        style={{ width: "300px" }}
        value={uiStore.message}
      />
      <br />
      <br />
      Your message coming back from mobX store is: {uiStore.message}
    </div>
  );
});

export default Home;
