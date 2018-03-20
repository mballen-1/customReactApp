tail, head, def

const head = ([x]) => x;
const def() = () =>
const undef = (x) => !def(x)


const def = (x) => typeof(x) !== "undefined"
const reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x]:[];


const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n-1)]:[];