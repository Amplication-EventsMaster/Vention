import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
