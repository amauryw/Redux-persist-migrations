import { connect } from "react-redux";
import { getConfirmedMessage } from "../redux/activeString";
import { getNumberOfChange } from "../redux/numberOfChange";
import Result from "./Result.component";

const mapStateToProps = state => ({
  confirmedMessage: getConfirmedMessage(state),
  numberOfChange: getNumberOfChange(state)
});

export default connect(mapStateToProps)(Result);
