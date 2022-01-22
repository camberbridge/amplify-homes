/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function INFO(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="column"
      width="3036px"
      overflow="hidden"
      position="relative"
      border="5px SOLID rgba(4.000000236555934,52.000000700354576,149.00000631809235,1)"
      padding="195px 195px 195px 195px"
      backgroundColor="rgba(184.00000423192978,206.0000029206276,249.00000035762787,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Inter"
        fontSize="150px"
        fontWeight="700"
        color="rgba(0,34.00000177323818,102.00000151991844,1)"
        lineHeight="175.78125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="2636px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Pre-Built Components"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="100px"
        fontWeight="400"
        color="rgba(0,34.00000177323818,102.00000151991844,1)"
        lineHeight="117.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="2636px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="These are some pre-built components to get you started. Feel free to delete all of these, delete some of them, or edit them. "
        {...getOverrideProps(overrides, "Flex.Text[1]")}
      ></Text>
    </Flex>
  );
}
