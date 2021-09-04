function getMaxLessThanK(n, k) {
    let min_result = 0;
    for (let i = 1; i < n; i++ ){
        for (let j = 2; j < n+1; j++ ) {
            if (i < j) {
                let andResult = i & j;
                    if (andResult > min_result && andResult < k) {
                        min_result = andResult;
                    }
            }
        }
    }
    return min_result;
}
