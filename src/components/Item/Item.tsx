import "./Item.scss";
import BorderButton from '../UI/Button/BorderButton/BorderButton.tsx';
import {TPromoBlock} from "../../utils/consts/Consts.ts";

interface IItemProps {
    block: TPromoBlock;
    className: string;
}

function Item({ block, className }: IItemProps) {

    const onClick = () => {
        console.log(block.action)
    }
    return (
<div className={className}>
    <div>
    <h2 className="item__title">{block.title}</h2>
    <p className="item__text">{block.text}</p>
    </div>
    <BorderButton handleClick={onClick}>{block.actionText}</BorderButton>
</div>
    )
}

export default Item

