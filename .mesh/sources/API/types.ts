// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ApiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents empty values */
  Void: void;
};

export type Query = {
  myObject?: Maybe<MyObject>;
};

export type MyObject = {
  shouldBeStringOrNull: query_myObject_shouldBeStringOrNull;
};

export type query_myObject_shouldBeStringOrNull = Void_container | String_container;

export type Void_container = {
  Void?: Maybe<Scalars['Void']>;
};

export type String_container = {
  String?: Maybe<Scalars['String']>;
};

  export type QuerySdk = {
      /** undefined **/
  myObject: InContextSdkMethod<Query['myObject'], {}, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["API"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
