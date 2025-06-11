import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'https://api.theporndb.net/specs?openapi.json',
  output: 'src/generated/theporndb-client',
  plugins: [
    {
      name: '@hey-api/client-next',
      runtimeConfigPath: './src/lib/theporndb/api.ts'
    }
  ]
})
