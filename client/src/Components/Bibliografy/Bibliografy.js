import './Bibliografy.css';

const Bibliography = (props) => {
    const {name, text} = props;
    return(
        <div className="bibliography">
            <h1 className="name">{name}</h1>
            <p className="text">{text}</p>
        </div>
    );
}

export default Bibliography;