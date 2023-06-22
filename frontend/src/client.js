import  { createClient } from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '6253uo5c',
    dataset: 'production',
    apiVersion: '2023-06-19',
    useCdn: true,
    token: 'skHcL7NwELqnOjNiI8PID3UqTJdhsKKVRatUuV4hgnKgw9DGag3Lw0oMFuDQAvxfTrsNM11cmIF63pYzReHSGpXaoYFFu2NaRiYCzB6Gp3R7Trh8EHPibSFV7Ewfo9m3G0shBmkaYkGRF7FjUPp3FDEK0q3wVklTMcoO4TPoaEspJPpBxLfs',
}
);

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
