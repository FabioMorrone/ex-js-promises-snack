// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.

const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        console.log('dado lanciato ');
        setTimeout(() => {
            const dadoIncastrato = Math.random() < 0.2;
            if (dadoIncastrato) {
                reject("Il dado si è incastrato!");
            } else {
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato);
            }
        }, 3000);
    });
}

lanciaDado()
    .then(numero => console.log("Hai tirato:", numero))
    .catch(err => console.error("Errore:", err));