import "./Item.scss";
import BorderButton from '../UI/Button/BorderButton/BorderButton.tsx';
import {TPromoBlock} from "../../utils/consts/Consts.ts";

interface IItemProps {
    block: TPromoBlock;
}

function Item({ block }: IItemProps) {

    const onClick = () => {
        console.log(block.action)
    }
    return (
<div className="">
    <h2 className="">{block.title}</h2>
    <p className="">{block.text}</p>
    <BorderButton handleClick={onClick}>{block.actionText}</BorderButton>
</div>
    )
}

export default Item

