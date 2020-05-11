import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const TitleAnnouncer = (props) => {
  const [title, setTitle] = React.useState("");
  const titleRef = React.createRef();
  const { pathname } = useLocation();
  const onHelmetChange = ({ title }) => setTitle(title);

  React.useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, [pathname]);

  return (
    <>
      <h2 tabIndex={-1} ref={titleRef} className="sr-only">
        {title}
      </h2>

      <Helmet onChangeClientState={onHelmetChange} />
    </>
  );
};

export default TitleAnnouncer;
