export function formatCurr(number){
    return new Intl.NumberFormat('en-US', {style: "currency", currency:"USD"}).format(number)
}