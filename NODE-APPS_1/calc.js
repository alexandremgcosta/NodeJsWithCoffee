process.stdin.on('data', (chunk) => {
    console.log(chunk.toString().trim());
});

process.stdin.write('Enter your simple equation: ');