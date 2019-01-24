import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setMessageActionCreator } from "../redux/activeString";

import Input from "./Input.component";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setMessage: bindActionCreators(setMessageActionCreator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
