import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
