import React from 'react'

const Test = (props) => {
  console.log('props.hello >>', props.hello)
  return <div>Test Componet {props.hello}</div>
}

function Items() {
  return (
    <>
      <div>상품 정보</div>

      {/* boolean, null, undefined는 무시 */}
      {/* 자식으로 올 수 있으나, 렌더링되지 않음 */}
      <div />
      <div></div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>

      {/* ------------ [조건부 렌더링] ------------ */}
      {true && '하이'}
      {true && true}
      {true && <Test hello='쉬고 싶다' />}
      {false && <Test />}
      {0 && <Test />}
      {<Test /> && false}
    </>
  )
}

export default Items