export interface IimageManifest {
    schemaVersion: number,
    mediaType: string
    manifests: [{
        mediaType: string,
        digest: string,
        size: number,
        platform: {
            architecture: string,
            os: string
        }
    }]
}
