import Item from '../../components/Item/Item.tsx';
import "./MainPage.scss";
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle.tsx';
import {PROMO_BLOCKS, PROMO_HEADER} from "../../utils/consts/Consts.ts";


function MainPage() {

    return (
        <section>
          <SectionTitle>{PROMO_HEADER[0].actionText}</SectionTitle>
          <ul className="items__container">
            {PROMO_BLOCKS?.map((block) => (
              <Item key={block.id}
                    block={block}
                    className={`item item_type_${block.id}`}
              />
            ))}
          </ul>
        </section>
    )
}

export default MainPage
