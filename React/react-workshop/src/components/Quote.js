
import './Quote.css';

function Quote({author, text, date}){

    return (
        <div className="Quote">
            <h3>Quote By {author}</h3>
            <p>"{text}"</p>
            {date && <p>{date}</p>}
        </div>
    );
}

export default Quote;