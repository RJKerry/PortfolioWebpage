import './TextImageSandwich.css';

const TextImageSandwich = ({text}: {text: string}) => {
    return (
        <div className='TextSandwich' data-text={text}>
            <div className='SandwichedImage'>

            </div>
        </div>
    );
}

export default TextImageSandwich;