export default function FeedbackOptions(props) {
    const { good, neutral, bad } = props.options;
    return (
        <div>
            <button>{good}</button>
            <button>{neutral}</button>
            <button>{bad}</button>
        </div>
    );
}
