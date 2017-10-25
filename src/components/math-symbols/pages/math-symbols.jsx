import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import MathSymbol, {TYPE, COLOR} from '../MathSymbol';

const MathSymbols = () =>
  <div>
    <DocsBlock>
      <ContrastBox>
        <ul className="icons-list">
          {Object.values(TYPE).map(type =>
            <li className="icons-list__element icons-list__element--wide" key={type}>
              <MathSymbol type={type} color={COLOR.LIGHT} />
              <span className="icons-list__element-info">&nbsp; - {type}</span>
            </li>)}
        </ul>
      </ContrastBox>
    </DocsBlock>
  </div>;

export default MathSymbols;