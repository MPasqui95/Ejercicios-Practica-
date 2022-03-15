function dividir (A, B){
    if (B === 0){
        return "No se puede dividir por cero"
    } else{
        return A / B
    };
};

module.exports = dividir;