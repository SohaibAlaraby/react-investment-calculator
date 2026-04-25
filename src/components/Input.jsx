export default function Input({id,title,defaultValue,type = "number"}) {
    return (
        <p>
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} defaultValue={defaultValue} required/>
        </p>
    );
}