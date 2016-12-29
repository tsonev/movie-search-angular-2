export class Query {
    constructor(
        public s: string,
        public type?: string,
        public y?: string,
        public r?: string,
        public page?: number,
        public callback?: string,
        public v?: number
    ) { }
}

export class QueryByTitle {
    constructor(
        public i?: string,
        public t?: string,
        public type?: string,
        public y?: string,
        public plot?: string,
        public r?: string,
        public tomatoes?: boolean,
        public callback?: string,
        public v?: number
    ) { }
}