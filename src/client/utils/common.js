export function responseAction(dispatch, code, data, successFunc, successParam, failFunc){
    code !== '9000' &&  data !== null? successParam !== null? dispatch(successFunc(successParam)):dispatch(successFunc()):dispatch(failFunc())
}