interface FetchCountCalllback {
    (count: number): void
}
export default function fetchCount(cb: FetchCountCalllback) {
    cb(0)
}