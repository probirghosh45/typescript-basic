// type assertion

const anything : any = "Love You,Tisha";
const str : string = anything; // type assertion
const num : number = anything; // type assertion

const result = (anything as string).length; // type assertion
const result2 = (str as string).length; // output : 15

// type narrowing

const kgToGm = (value : string | number ) : number =>{
    if (typeof value === 'string'){
        const convertedValue = parseFloat(value);
        return convertedValue
    } else if (typeof value === 'number') {
        return value * 1000; // Convert kg to gm
    }
    return 0; // Fallback return
}
