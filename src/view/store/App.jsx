import { connect } from "react-redux";
import Form from "../root/Form.js";



function mapStateToProps(acc) {
    return {
        currVal: acc.name
    }
}

var formValue = {type: "value"};

function mapDispatchToProps(dispatch) {
    return {
        formValue: function() {
            return dispatch(formValue);
        }
    }
}

var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form);
  
  export default connectedComponent;
   