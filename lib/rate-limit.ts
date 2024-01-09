import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

export async function rateLimit(identifier: string) {
    const rateLimit = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(10, "10 s"),  //this enable a user to vall this endpoint only 10 times in 10 seconds
        analytics: true,
        prefix: "@upstash/ratelimit"
    })

    return await rateLimit.limit(identifier)
}
