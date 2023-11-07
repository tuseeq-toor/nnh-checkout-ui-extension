import {
  reactExtension,
  BlockStack,
  View,
  Text,
  Heading,
  HeadingGroup,
  Image,
  Style,
  TextBlock
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {

  return (
    <View
      inlineAlignment='center'
    >
      <BlockStack inlineAlignment='center' maxInlineSize='fill'>
        <View inlineAlignment='center'>
          <TextBlock emphasis='bold' size='small' inlineAlignment='center'>
            More than 40,000 Happy Customers
          </TextBlock>
          <HeadingGroup>
            <Heading level="1" inlineAlignment='center'>
              Trusted By Thousands
            </Heading>
          </HeadingGroup>
          <TextBlock inlineAlignment='center'>
            Why not hear from some of our thousands of happy customers?
          </TextBlock>
        </View>
        <Image source='https://cdn.shopify.com/s/files/1/0579/2143/7876/files/jacq.svg' />
        <Image source='https://cdn.shopify.com/s/files/1/0579/2143/7876/files/krys.svg' />
        <Image source='https://cdn.shopify.com/s/files/1/0579/2143/7876/files/nat.svg' />
      </BlockStack>
    </View >
  );
}