

import classes from './Flag.module.css';

const Flag = (props) => {
    return (
        <div className={classes.circle} onClick={props.onClick}>
            <h2 className={classes.text}> {props.tital}</h2>
            <div className={classes.flag} >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            </div>
            <i class="fa fa-flag" aria-hidden="true" ></i>
        </div>
    );
};


export default Flag;