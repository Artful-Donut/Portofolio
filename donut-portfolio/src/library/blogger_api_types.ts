export interface BloggerPostList {
    /**
     * Should be blogger#postList
     */
    "kind": string,
    "nextPageToken": string,
    "items": BloggerPost[]
}
export interface BloggerPost {
    /**
     * Should be blogger#postList
     */
    "kind": string,
    /**
     * Post ID for API GET purposes (integers represented with a string)
     */
    "id": string,
    /**
     * Secondary Interface to store Blog ID
     */
    "blog": {
        /**
         * Blog ID (integers represented with a string)
         */
        "id": string
    },
    /**
     * Date published (string format YYYY-MM-DD [T19:49:19-07:00])
     */
    "published": string,
    /**
     * Date updated (string format YYYY-MM-DD [T19:49:19-07:00])
     */
    "updated": string,
    /**
     * Post URL as seen on Blogger
     */
    "url": string,
    /**
     * Post URL as seen on Blogger API (no API key)
     */
    "selfLink": string,
    /**
     * Post Title
     */
    "title": string,
    /**
     * Post Content (HTML represented as string)
     */
    "content": string,
    /**
     * Post Author (Interface)
     */
    "author": BloggerAuthor,
    "replies": {
        "totalItems": string,
        "selfLink": string
    },
    "labels": string[],
    "etag": string
}

/**
 * interface for the BloggerComment JSON object
 * 
 */
export interface BloggerCommment {
    /**
     * Should be "blogger#commentList"
     */
    "kind": string,
    "nextPageToken": string,
    "prevPageToken": string,
    "items": [
        {
            "kind": string,
            "id": string,
            "post": {
                "id": string,
            },
            "blog": {
                "id": string,
            },
            "published": string,
            "updated": string,
            "selfLink": string,
            "content": string,
            "author": BloggerAuthor
        },
        {
            "kind": string,
            "id": string,
        }
    ]
}

/**
 * Interface for a blogger author
 */
interface BloggerAuthor {
        "id": string,
        "displayName": string,
        "url": string,
        "image": {
            "url": string
        }
    }