import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import numeral from "numeral";
import "../../styles/styles.scss";
import { setPinnedFilter } from "../../actions/filters";
import { editAssignment } from "../../actions/assignments";

export class DashboardListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      id: this.props.id,
      course: this.props.course,
      dueDate: this.props.dueDate,
      dueTime: this.props.dueTime,
      title: this.props.title,
      type: this.props.type,
      pinned: this.props.pinned,
    };

    console.log("CONSTRUCTOR: " + this.state.pinned);
  }

  pinAction = (e) => {
    console.log("PINNED ACTION1: " + this.props.pinned);
    console.log("PINNED ACTION2: " + this.state.pinned);
    this.setState({ pinned: !this.props.pinned }, () => {
      console.log("PINNED ACTION3: " + this.state.pinned);
      this.props.editAssignment(this.props.id, this.state);
    });
    this.props.setPinnedFilter(this.state);
  };

  render() {
    return (
      <div className="list-item">
        <div>
          <h3 className="list-item__title">{this.props.type}</h3>
          <span className="list-item__sub-title">{this.props.course}</span>
        </div>
        <div>{this.props.title}</div>
        <h3 className="list-item__data">
          <button className="button" onClick={this.pinAction}>
            <b>{this.state.pinned ? "Unpin" : "Pin"}</b>
          </button>
          {moment(this.props.dueTime).format("hh:mm")}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assignment: state,
});

const mapDispatchToProps = (dispatch) => ({
  editAssignment: (id, assignment) => dispatch(editAssignment(id, assignment)),
  setPinnedFilter: (pinned) => dispatch(setPinnedFilter(pinned)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardListItem);
