/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FAQItem from "./FAQItem";
import { Collection } from "@aws-amplify/ui-react";
export default function FAQItemCollection(props) {
  const {
    pdfpolly,
    items: itemsProp,
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <FAQItem
          pdfpolly={item}
          margin="0 10px 0 10px"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.FAQItem[0]")}
        ></FAQItem>
      )}
    </Collection>
  );
}
