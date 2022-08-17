import { useEffect } from "react";
 import { connect } from "react-redux";
 import { handleInitialData } from '../action/common';

 const App = () => {
  useEffect((props) => {
    props.dispatch(handleInitialData());
  });
  return <div>Employee Poll</div>;
 };
export default connect()(App);
