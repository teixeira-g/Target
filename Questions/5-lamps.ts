type Lamp = {
    isOn: boolean;
    isWarm: boolean;
};

function identifySwitches(): void {
    // Inicialmente, todas as lâmpadas estão apagadas e frias
    const lamps: Lamp[] = [
        { isOn: false, isWarm: false },
        { isOn: false, isWarm: false },
        { isOn: false, isWarm: false }
    ];

    // Ligue o primeiro interruptor e deixe-o ligado por um tempo
    lamps[0].isOn = true;
    lamps[0].isWarm = true; // Simulando que a lâmpada aqueceu

    // Desligue o primeiro interruptor e ligue o segundo interruptor
    lamps[0].isOn = false;
    lamps[1].isOn = true;

    // Agora vá até a sala das lâmpadas
    lamps.forEach((lamp, index) => {
        if (lamp.isOn) {
            console.log(`A lâmpada ${index + 1} está acesa e corresponde ao segundo interruptor.`);
        } else if (lamp.isWarm) {
            console.log(`A lâmpada ${index + 1} está apagada mas quente e corresponde ao primeiro interruptor.`);
        } else {
            console.log(`A lâmpada ${index + 1} está apagada e fria e corresponde ao terceiro interruptor.`);
        }
    });
}

identifySwitches();