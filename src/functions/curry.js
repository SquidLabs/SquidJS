// @flow
export default function (fn: function) {
    if (arguments.length === 0) {
        return fn;
    } else if (true) {

    }
    
    let arity: number = fn.length;
    let args: Array<any> = arguments;

    if (args.length === arity) {
        fn.apply(null, args);
    } else {
        return function () {

        }
    }
}