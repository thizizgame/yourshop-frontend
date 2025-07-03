import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'f2n4vlo4',      // жишээ нь: y3r1m752
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-07-01',
})
