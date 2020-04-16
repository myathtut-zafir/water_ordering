import React, {Component} from "react";
import {fetchOrder} from "../actions/insertActionsFirebase";
import {connect} from "react-redux";

class Home extends Component {
    state = {
        items: [false]
    };

    componentWillMount() {
        this.props.fetchOrder();
        console.log(this.props.orders);
    }

    render() {
        let orderDatas = this.props.orders;
        let data = orderDatas !== undefined && orderDatas !== {}
            ? Object.keys(orderDatas).map((item, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{orderDatas[item].name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{orderDatas[item].brand} - {orderDatas[item].order_amount} ဗူး
                                လိုအပ်ပါသည်။</h6>
                            <p className="card-text">phone - {orderDatas[item].brand}</p>
                            <p className="card-text">ပို့ဆောင်ရမည် လိပ်စာ -
                                အမှတ် {orderDatas[item].houseNumber} | {orderDatas[item].street} လမ်း |
                                {orderDatas[item].ward} ရပ်ကွက် | {orderDatas[item].township} မြို့နယ် </p>
                            <a href="#" className="card-link">Accept Order</a>
                            <a href="#" className="card-link">Reject Accept</a>
                        </div>
                    </div>
                </div>
            )) : "";
        return (
            <React.Fragment>
                <h1>ရေသန့် order များ</h1>
                <div className="row">

                    {data}

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

