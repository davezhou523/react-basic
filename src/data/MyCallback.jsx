import React, { useCallback } from "react";
import { Card, Button } from "antd";

function useCounter() {
    const [count, setCount] = React.useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
        let i=0;
        console.log(count,i++);
    }, []);

    return { count, increment };
}

function MyCallback() {
    const { count, increment } = useCounter();

    return (
        <Card title="案例 demo">
            <p>Count: {count}</p>
            <Button onClick={increment} type="primary">
                Increment
            </Button>
        </Card>
    );
}

export default MyCallback;
