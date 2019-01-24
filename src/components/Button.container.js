import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { applyActionCreator, clearActionCreator } from "../redux/activeString";
import { addOneActionCreator } from "../redux/numberOfChange";

import Button from "./Button.component";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  applyMessage: bindActionCreators(applyActionCreator, dispatch),
  addOne: bindActionCreators(addOneActionCreator, dispatch),
  clearInput: bindActionCreators(clearActionCreator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
