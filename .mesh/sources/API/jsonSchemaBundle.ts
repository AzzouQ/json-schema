// @ts-nocheck
export default {
  "name": "API",
  "baseUrl": "https:a.fake.api.com",
  "operations": [
    {
      "type": "Query",
      "field": "myObject",
      "path": "/any",
      "method": "GET",
      "responseSchema": "./schema.json#/definitions/MyObject"
    }
  ],
  "operationHeaders": {},
  "referencedSchema": {
    "$ref": "#/definitions/_schema",
    "definitions": {
      "_schema": {
        "type": "object",
        "title": "_schema",
        "properties": {
          "query": {
            "$ref": "#/definitions/Query"
          },
          "queryInput": {
            "$ref": "#/definitions/QueryInput"
          }
        },
        "required": [
          "query"
        ]
      },
      "Query": {
        "type": "object",
        "title": "Query",
        "properties": {
          "myObject": {
            "$ref": "#/definitions/MyObject"
          }
        },
        "readOnly": true
      },
      "MyObject": {
        "type": "object",
        "title": "MyObject",
        "properties": {
          "shouldBeStringOrNumber": {
            "$ref": "#/definitions/query_myObject_shouldBeStringOrNumber"
          }
        },
        "required": [
          "shouldBeStringOrNumber"
        ],
        "$resolvedRef": "/definitions/MyObject"
      },
      "query_myObject_shouldBeStringOrNumber": {
        "oneOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ],
        "title": "query_myObject_shouldBeStringOrNumber"
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "writeOnly": true,
        "additionalProperties": true
      }
    }
  }
}