export interface IimageManifest {
    digest: string,
    size: number,
    platform : {
        architecture: string,
        os: string
    },
    annotations?: {
        "vnd.docker.reference.digest": string,
        "vnd.docker.reference.type": string
    } 
}
