export default function Buttons(props) {
    return (
        <button onClick={props.onClick} className={props.className}>{props.title}</button>
    )
}