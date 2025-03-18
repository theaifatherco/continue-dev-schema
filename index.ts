import { configYamlSchema } from "@continuedev/config-yaml";

import { zodToJsonSchema } from "zod-to-json-schema";

const schema = zodToJsonSchema(configYamlSchema, {
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  errorMessages: true,
  markdownDescription: true,
  $refStrategy: "root",
  removeAdditionalStrategy: "strict",
});

Bun.write("./schema.json", JSON.stringify(schema, null, 2));
