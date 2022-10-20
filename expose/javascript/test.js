function dp(p, d) {
    const disc = [];
    const l = p.length;

    for (let i = 0; i < l; i++) {
        const dp = p[i] * (1 - d);
        disc.push(dp);
        console.log(disc);
    }
    console.log(i);
    return disc;
}

dp([100, 200, 300], 0.5);