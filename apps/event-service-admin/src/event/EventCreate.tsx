import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="ddd" source="ddd" />
        <TextInput label="Name" source="name" />
        <TextInput label="ss" source="ss" />
        <TextInput label="sss" source="sss" />
      </SimpleForm>
    </Create>
  );
};
