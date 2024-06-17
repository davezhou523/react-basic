export default function ExpressJs() {
    const num=100
    let n=2
    // let m=0
    return (
        <div>

            <p>{'大括号{}是javascript表达式，使用引号、变量，常量、方法、函数、对象表达式'}</p>
            <p>{"常量"+num}</p>
            <p>{"变量"+n++}</p>
            <p>{n}</p>
            {/*<p>{if (n>0){n+2}}</p>*/}
            {/*不能使用语句if */}
            {"方法"+new Date().getDate()}
            <p>{fngetName()}</p>
            <p style={{'color':'red'}} >{'使用对象'}</p>
    </div>
    );

}
function fngetName() {
    return "dave"
}