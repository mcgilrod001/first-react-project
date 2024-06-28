// pascal casing
function Message() {
    //jsx js xml whatever that means
    const name = 'Roddy';
    function getName() {
        return name
    }
    return <h1>hello {getName()}</h1>;
}

export default Message;