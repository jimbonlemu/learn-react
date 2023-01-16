const MyButton = (props) => {
return (
    <div>
        <button onClick={()=>props.clicked()}>Tekan aku brah!</button>
    </div>
)

}

export default MyButton;