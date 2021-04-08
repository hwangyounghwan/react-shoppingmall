import {Route} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import './Detail.scss'

let 박스 = styled.div`
padding : 20px
`;
let 제목 = styled.h4`
fontSize : 25px
`


function Detail (props) {
    let [alert, alertChange] = useState(true);
    let [inputData, dataChange] = useState();
    useEffect(() =>{
            setTimeout(() => {alertChange(false);
            } , 2000)

        return function pageMove () {
                clearTimeout();
        }
    },[alert])

    return(
    <div className="container" >
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <박스>
                    <제목 className= "red">
                        상세페이지
                    </제목>
                </박스>{
                alert === true
                ?(<div className="my-alert">
                    <p>재고가 얼마 남지 않았습니다!</p>
                </div>):
                    null
            }
            < input onChange={(e)=> {dataChange(e.target.value)}}/>
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <Info info = {props.info}/>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </div>
    </div>
)
}
function Info (props) {
    return(
        <p>재고 : {props.info} </p>
    )
}
export default Detail;