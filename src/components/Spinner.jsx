/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import ClipLoader from "react-spinner / ClipLoader";

const cssOverride = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
