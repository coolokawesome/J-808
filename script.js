Start = document.getElementById('startButton')
Start.addEventListener('click', (e => {
    e.preventDefault();
    sequencer();
    Start.disabled = true
}))
phonkKit = [
    'sounds/phonk_hat.wav',
    'sounds/808_snare.wav',
    'sounds/phonk_kick.wav',
    'sounds/808_bass.wav',
    'sounds/phonk_perc1.wav',
    'sounds/phonk_perc2.wav'
]


function sequencer() {

    //declaring the sound kit variables
    const hat = new Tone.Player(phonkKit[0]).toDestination();
    const snare = new Tone.Player(phonkKit[1]).toDestination();
    const kick = new Tone.Player(phonkKit[2]).toDestination();
    const bass = new Tone.Player(phonkKit[3]).toDestination();
    const perc1 = new Tone.Player(phonkKit[4]).toDestination();
    const perc2 = new Tone.Player(phonkKit[5]).toDestination();
    let index = 0;

    //
    Tone.Transport.scheduleRepeat(repeat, '16n')
    Tone.Transport.start()
    function repeat() {
        let step = index % 16;
        let selectedHat =   document.querySelector(`.hat_row input:nth-child(${step + 1})`)
        let selectedSnare = document.querySelector(`.snare_row input:nth-child(${step + 1})`)
        let selectedKick =  document.querySelector(`.kick_row input:nth-child(${step + 1})`)
        let selectedBass =  document.querySelector(`.bass_row input:nth-child(${step + 1})`)
        let selectedPerc1 = document.querySelector(`.perc1_row input:nth-child(${step + 1})`)
        let selectedPerc2 = document.querySelector(`.perc2_row input:nth-child(${step + 1})`)
        let selectedLight = document.querySelector(`.light_row :nth-child(${step + 1})`)
                let prev = document.querySelector(`.light_row :nth-child(${step})`)

        if (selectedHat.checked == true) {
            hat.start('1n').stop(repeat + 0.4);
        }
        if (selectedSnare.checked == true) {
            snare.start('1n').stop(repeat + 0.4);
        }
        if (selectedKick.checked == true) {
            kick.start('1n').stop(repeat + 0.4);
        }
        if (selectedBass.checked == true) {
            bass.start('1n').stop(repeat + 0.4);
        }
        if (selectedPerc1.checked == true) {
            perc1.start('1n').stop(repeat + 0.4);
        }
        if (selectedPerc2.checked == true) {
            perc2.start('1n').stop(repeat + 0.4);
        }
        if (index % 16) {
            prev.checked = false;
        }
        if (document.getElementById('light16').checked = true) {
            document.getElementById('light16').checked = false;
        }


        lightNum = step + 1
        currentLight = document.getElementById("light"+lightNum+"")
        prevLight = document.getElementById("light"+(lightNum - 1)+"")


        if (document.getElementById("light"+lightNum) == currentLight) {
            selectedLight.checked = true;
        }
        index++;
    }
}
Tone.Transport.bpm.value = 130;

startButton = document.querySelector('#startButton')

console.log(startButton)