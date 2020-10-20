//TODO: Implement hexToRgb
export function hexToRgb(hex: string) : {r: number, g: number, b: number} {
    let hex6 = hex;
    if (hex.length === 3) {
        hex6 = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    let [r, g, b] = [0, 2, 4].map(offset => hex6.substr(offset, 2))
    .map(hexCh => parseInt(hexCh, 16));

    // const r = parseInt(hex6.substr(0,2), 16);
    // const g = parseInt(hex6.substr(2,2), 16);
    // const b = parseInt(hex6.substr(4,2), 16);

    return {r, g, b};
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number) : string {
    return [r, g, b]
    .map(c => Math.max(0, Math.min(255, c)).toString(16))
    .map(c => c.length===1 ? `${c}${c}` : c)
    .join('');

    // r = r < 0 ? 0 : r;
    // g = g < 0 ? 0 : g;
    // b = b < 0 ? 0 : b;
    // r = r > 255 ? 255 : r;
    // g = g > 255 ? 255 : g;
    // b = b > 255 ? 255 : b;
    // let rs = r.toString(16);
    // let gs = g.toString(16);
    // let bs = b.toString(16);  
    // if (rs.length === 1) rs = rs + rs;
    // if (gs.length === 1) gs = gs + gs;
    // if (bs.length === 1) bs = bs + bs;

    //return rs + gs + bs;
}