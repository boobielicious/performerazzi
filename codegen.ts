import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  generates: {
    'src/generated/stash/': {
      // @ts-expect-error - Apollo Engine schema options
      schema: [{ [`${process.env.STASH_BASE_URL ?? ''}/graphql`]: { headers: { ApiKey: process.env.STASH_API_KEY } } }],
      documents: ['src/lib/stash/**/*.ts'],
      preset: 'client',
      config: { documentMode: 'string' }
    },
    'src/generated/stashdb/': {
      schema: [
        // @ts-expect-error - Apollo Engine schema options
        { [`${process.env.STASHDB_BASE_URL ?? ''}/graphql`]: { headers: { ApiKey: process.env.STASHDB_API_KEY } } }
      ],
      documents: ['src/lib/stashdb/**/*.ts'],
      preset: 'client',
      config: { documentMode: 'string' }
    },
    'src/generated/theporndb/': {
      schema: [
        // @ts-expect-error - Apollo Engine schema options
        { [`${process.env.THEPORNDB_BASE_URL ?? ''}/graphql`]: { headers: { ApiKey: process.env.THEPORNDB_API_KEY } } }
      ],
      documents: ['src/lib/theporndb/**/*.ts'],
      preset: 'client',
      config: { documentMode: 'string' }
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier --write']
  }
}

export default config
