import React, {Component} from "react";
import {fetchOrder} from "../actions/insertActionsFirebase";
import {connect} from "react-redux";

class Home extends Component {

    componentWillMount() {
        this.props.fetchOrder();
    }

    render() {
        let orderData = this.props.orders;

        let showOrderData = orderData !== undefined && orderData !== {}
            ? Object.keys(orderData).map((item, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{orderData[item].name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{orderData[item].brand} - {orderData[item].order_amount} ဗူး
                                လိုအပ်ပါသည်။</h6>
                            <p className="card-text">phone - {orderData[item].brand}</p>
                            <p className="card-text">ပို့ဆောင်ရမည် လိပ်စာ -
                                အမှတ် {orderData[item].houseNumber} | {orderData[item].street} လမ်း |
                                {orderData[item].ward} ရပ်ကွက် | {orderData[item].township} မြို့နယ် </p>
                            <a href="#" className="card-link">Accept Order</a>
                            <a href="#" className="card-link">Report Order</a>
                        </div>
                    </div>
                </div>
            )) : "";
        return (
            <React.Fragment>

                <h1>ရေသန့် order များ</h1>

                <div className="row">
                    {showOrderData}
                </div>

            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    orders: state.orders.items,
});
export default connect(
    mapStateToProps,
    {
        fetchOrder,
    }
)(Home);

