import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import numeral from "numeral";
import "../../styles/styles.scss";

function togglePin(props) {
  props = !props;
}

export class DashboardListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      pinned: this.props.pinned,
    };
  }

  render() {
    return (
      <div className="list-item">
        <div>
          <h3 className="list-item__title">{this.props.type}</h3>
          <span className="list-item__sub-title">{this.props.course}</span>
        </div>
        <div>{this.props.title}</div>
        <h3 className="list-item__data">
          <button
            className="button"
            onClick={() => this.setState({ pinned: !this.state.pinned })}
          >
            <b>{this.state.pinned ? "Unpin" : "Pin"}</b>
          </button>
          {moment(this.props.dueTime).format("hh:mm")}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pinned: state.pinned,
});

export default connect(mapStateToProps)(DashboardListItem);
