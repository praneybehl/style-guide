import React from 'react';
import TopLayer from '../TopLayer';
import ButtonPrimary, {TYPE as BUTTON_TYPE} from '../../buttons/ButtonPrimary';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from '../../content-box/ContentBoxContent';
import Text, {WEIGHT} from '../../text/Text';
import HeaderSecondary, {TYPE as HEADER_TYPE} from '../../text/HeaderSecondary';
import List, {ICON_TYPE, ICON_COLOR} from '../../list/List';
import Overlay from '../../overlay/Overlay';

const content = <ContentBox>
  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <HeaderSecondary type={HEADER_TYPE.H2}>
      Why join Brainly?
    </HeaderSecondary>
    <List iconType={ICON_TYPE.PLUS} iconColor={ICON_COLOR.GRAY_SECONDARY} items={[
      <Text weight={WEIGHT.BOLD}>ask questions about your assignment</Text>,
      <Text weight={WEIGHT.BOLD}>get answer with explanation</Text>,
      <Text weight={WEIGHT.BOLD}>find similar questions</Text>
    ]}/>
  </ContentBoxContent>

  <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
    <ButtonPrimary type={BUTTON_TYPE.ALT}>Join us</ButtonPrimary>
  </ContentBoxContent>
</ContentBox>;

const SmallSpacedTopLayer = () =>
  <html>
    <head>
      <meta charSet="utf-8"/>
      <link rel="stylesheet" href="../../../style-guide.css"/>
    </head>
    <body>
      <Overlay>
        <TopLayer modal={true} smallSpaced={true}>
          {content}
        </TopLayer>
      </Overlay>
      <script src="images/icons.js"></script>
    </body>
  </html>;

export default SmallSpacedTopLayer;