import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux'

function Cart (props) {
    return(
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                {
                    props.state.map((a,i)=> {
                        return(
                        <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.quan}</td>
                            <td><button onClick={()=> {props.dispatch({type:'increase'})}}>+</button>
                                <button onClick={()=> {props.dispatch({type:'decrease'})}}>-</button>
                            </td>
                        </tr>)
                    })
                }
            </Table>

            { props.alertState === true ?
                (
                <div className="my-alert2">
                <p>지금 구매하시면 신규 20%</p>
                <button onClick={() => {
                    props.dispatch({type: true})
                }}>닫기
                </button>
            </div>) : null
            }
        </div>
    )
}

function state를props화(state) {
    console.log(state)
    return {
       state : state.reducer,
        alertState : state.reducer2
    }
}

export default connect(state를props화)(Cart)


