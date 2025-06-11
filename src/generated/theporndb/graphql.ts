/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  /**
   * The `Upload` special type represents a file to be uploaded in the same HTTP request as specified by
   *  [graphql-multipart-request-spec](https://github.com/jaydenseric/graphql-multipart-request-spec).
   */
  Upload: { input: any; output: any }
}

/** A type */
export type BodyModification = {
  __typename?: 'BodyModification'
  description?: Maybe<Scalars['String']['output']>
  location?: Maybe<Scalars['String']['output']>
}

/** An example input */
export type DraftEntityInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name: Scalars['String']['input']
}

/** A type */
export type DraftSubmissionStatus = {
  __typename?: 'DraftSubmissionStatus'
  id?: Maybe<Scalars['ID']['output']>
}

export type Edit = {
  __typename?: 'Edit'
  id: Scalars['ID']['output']
}

export type Fingerprint = {
  __typename?: 'Fingerprint'
  algorithm?: Maybe<Scalars['String']['output']>
  created?: Maybe<Scalars['DateTime']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  hash?: Maybe<Scalars['String']['output']>
  submissions?: Maybe<Scalars['Int']['output']>
  updated?: Maybe<Scalars['DateTime']['output']>
  user_submitted?: Maybe<Scalars['Boolean']['output']>
}

/** An example input */
export type FingerprintInput = {
  algorithm: Scalars['String']['input']
  duration: Scalars['Int']['input']
  hash: Scalars['String']['input']
  user_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

/** An example input */
export type FingerprintQueryInput = {
  algorithm: Scalars['String']['input']
  hash: Scalars['String']['input']
}

export type FingerprintSubmission = {
  fingerprint: FingerprintInput
  scene_id: Scalars['ID']['input']
  unmatch?: InputMaybe<Scalars['Boolean']['input']>
}

/** A type */
export type FuzzyDate = {
  __typename?: 'FuzzyDate'
  accuracy?: Maybe<Scalars['String']['output']>
  date?: Maybe<Scalars['DateTime']['output']>
}

export type Image = {
  __typename?: 'Image'
  height: Scalars['Int']['output']
  id: Scalars['ID']['output']
  url: Scalars['String']['output']
  width: Scalars['Int']['output']
}

/** A type */
export type Measurements = {
  __typename?: 'Measurements'
  band_size?: Maybe<Scalars['Int']['output']>
  cup_size?: Maybe<Scalars['String']['output']>
  hip?: Maybe<Scalars['Int']['output']>
  waist?: Maybe<Scalars['Int']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** A mutation */
  favoritePerformer: Scalars['Boolean']['output']
  /** A mutation */
  favoriteStudio: Scalars['Boolean']['output']
  /** A mutation */
  submitFingerprint?: Maybe<Scalars['Boolean']['output']>
  /** A mutation */
  submitPerformerDraft?: Maybe<DraftSubmissionStatus>
  /** A mutation */
  submitSceneDraft?: Maybe<DraftSubmissionStatus>
}

export type MutationFavoritePerformerArgs = {
  favorite: Scalars['Boolean']['input']
  id: Scalars['ID']['input']
}

export type MutationFavoriteStudioArgs = {
  favorite: Scalars['Boolean']['input']
  id: Scalars['ID']['input']
}

export type MutationSubmitFingerprintArgs = {
  input?: InputMaybe<FingerprintSubmission>
}

export type MutationSubmitPerformerDraftArgs = {
  input?: InputMaybe<PerformerDraftInput>
}

export type MutationSubmitSceneDraftArgs = {
  input?: InputMaybe<SceneDraftInput>
}

/** A type */
export type Performer = {
  __typename?: 'Performer'
  age?: Maybe<Scalars['Int']['output']>
  aliases?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  band_size?: Maybe<Scalars['Int']['output']>
  birth_date?: Maybe<Scalars['String']['output']>
  birthdate?: Maybe<FuzzyDate>
  breast_type?: Maybe<Scalars['String']['output']>
  career_end_year?: Maybe<Scalars['Int']['output']>
  career_start_year?: Maybe<Scalars['Int']['output']>
  country?: Maybe<Scalars['String']['output']>
  created?: Maybe<Scalars['DateTime']['output']>
  cup_size?: Maybe<Scalars['String']['output']>
  death_date?: Maybe<Scalars['String']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  disambiguation?: Maybe<Scalars['String']['output']>
  edits?: Maybe<Array<Maybe<Edit>>>
  ethnicity?: Maybe<Scalars['String']['output']>
  eye_color?: Maybe<Scalars['String']['output']>
  gender?: Maybe<Scalars['String']['output']>
  hair_color?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  hip_size?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Array<Maybe<Image>>>
  is_favorite?: Maybe<Scalars['Boolean']['output']>
  measurements?: Maybe<Measurements>
  merged_ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>
  merged_into_id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
  piercings?: Maybe<Array<Maybe<BodyModification>>>
  scene_count?: Maybe<Scalars['Int']['output']>
  scenes?: Maybe<Array<Maybe<Scene>>>
  studios?: Maybe<Array<Maybe<Studio>>>
  tattoos?: Maybe<Array<Maybe<BodyModification>>>
  updated?: Maybe<Scalars['DateTime']['output']>
  urls?: Maybe<Array<Maybe<Url>>>
  waist_size?: Maybe<Scalars['Int']['output']>
}

export type PerformerAppearance = {
  __typename?: 'PerformerAppearance'
  as?: Maybe<Scalars['String']['output']>
  performer: Performer
}

/** An example input */
export type PerformerDraftInput = {
  aliases?: InputMaybe<Scalars['String']['input']>
  birthdate?: InputMaybe<Scalars['String']['input']>
  breast_type?: InputMaybe<Scalars['String']['input']>
  career_end_year?: InputMaybe<Scalars['Int']['input']>
  career_start_year?: InputMaybe<Scalars['Int']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  disambiguation?: InputMaybe<Scalars['String']['input']>
  ethnicity?: InputMaybe<Scalars['String']['input']>
  eye_color?: InputMaybe<Scalars['String']['input']>
  gender?: InputMaybe<Scalars['String']['input']>
  hair_color?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<Scalars['Upload']['input']>
  measurements?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  piercings?: InputMaybe<Scalars['String']['input']>
  tattoos?: InputMaybe<Scalars['String']['input']>
  urls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Query = {
  __typename?: 'Query'
  /** A query */
  findPerformer?: Maybe<Performer>
  findScene?: Maybe<Scene>
  /** A query */
  findScenesBySceneFingerprints?: Maybe<Array<Maybe<Array<Maybe<Scene>>>>>
  /** A query */
  findStudio?: Maybe<Studio>
  me?: Maybe<User>
  /** A query */
  searchPerformer?: Maybe<Array<Maybe<Performer>>>
  /** A query */
  searchScene?: Maybe<Array<Maybe<Scene>>>
}

export type QueryFindPerformerArgs = {
  id: Scalars['ID']['input']
}

export type QueryFindSceneArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryFindScenesBySceneFingerprintsArgs = {
  fingerprints?: InputMaybe<Array<InputMaybe<Array<InputMaybe<FingerprintQueryInput>>>>>
}

export type QueryFindStudioArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type QuerySearchPerformerArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  term: Scalars['String']['input']
}

export type QuerySearchSceneArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  term: Scalars['String']['input']
}

export type Scene = {
  __typename?: 'Scene'
  code?: Maybe<Scalars['String']['output']>
  created?: Maybe<Scalars['DateTime']['output']>
  date?: Maybe<Scalars['String']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  details?: Maybe<Scalars['String']['output']>
  director?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  edits?: Maybe<Array<Maybe<Edit>>>
  fingerprints?: Maybe<Array<Maybe<Fingerprint>>>
  id: Scalars['ID']['output']
  images?: Maybe<Array<Maybe<Image>>>
  performers?: Maybe<Array<Maybe<PerformerAppearance>>>
  production_date?: Maybe<Scalars['String']['output']>
  release_date?: Maybe<Scalars['String']['output']>
  studio?: Maybe<Studio>
  tags?: Maybe<Array<Maybe<Tag>>>
  title: Scalars['String']['output']
  updated?: Maybe<Scalars['DateTime']['output']>
  urls?: Maybe<Array<Maybe<Url>>>
}

/** An example input */
export type SceneDraftInput = {
  code?: InputMaybe<Scalars['String']['input']>
  date?: InputMaybe<Scalars['String']['input']>
  details?: InputMaybe<Scalars['String']['input']>
  director?: InputMaybe<Scalars['String']['input']>
  fingerprints?: InputMaybe<Array<InputMaybe<FingerprintInput>>>
  id?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<Scalars['Upload']['input']>
  performers?: InputMaybe<Array<InputMaybe<DraftEntityInput>>>
  studio?: InputMaybe<DraftEntityInput>
  tags?: InputMaybe<Array<InputMaybe<DraftEntityInput>>>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type Site = {
  __typename?: 'Site'
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Studio = {
  __typename?: 'Studio'
  aliases?: Maybe<Array<Scalars['String']['output']>>
  child_studios?: Maybe<Array<Maybe<Studio>>>
  created?: Maybe<Scalars['DateTime']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Array<Maybe<Image>>>
  is_favorite?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  parent?: Maybe<Studio>
  updated?: Maybe<Scalars['DateTime']['output']>
  urls?: Maybe<Array<Maybe<Url>>>
}

export type Tag = {
  __typename?: 'Tag'
  aliases?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  category?: Maybe<TagCategory>
  created?: Maybe<Scalars['DateTime']['output']>
  deleted?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  edits?: Maybe<Array<Maybe<Edit>>>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  updated?: Maybe<Scalars['DateTime']['output']>
}

export type TagCategory = {
  __typename?: 'TagCategory'
  description?: Maybe<Scalars['String']['output']>
  group?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Url = {
  __typename?: 'URL'
  site?: Maybe<Site>
  /** @deprecated Use the site field instead */
  type?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type User = {
  __typename?: 'User'
  api_key?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>
}

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']
  private value: string
  public __meta__?: Record<string, any> | undefined

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value)
    this.value = value
    this.__meta__ = __meta__
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value
  }
}
