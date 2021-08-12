import classes from './DropDown.module.css';


const DropDown = () => {
    return (
        <div className={classes.list}>

            <ul>
                <li>Low</li>
                <li>Medium</li>
                <li>High</li>
                <li>Critical</li>
                <li>Clear</li>
            </ul>
        </div>
    );
}

export default DropDown;