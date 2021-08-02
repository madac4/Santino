const rangeSlider = document.getElementById('range-slider');

if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [1, 3000],
        connect: true,
        step: 1,
        range: {
            'min': [1],
            'max': [3000]
        }
    });

    const inputMin = document.getElementById('input-min'),
          inputMax = document.getElementById('input-max'),
          inputs = [inputMin, inputMax];

    rangeSlider.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle])
    });

    const setRangeSlider = (i, value) =>{
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    }

    inputs.forEach((input, index) =>{
        input.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        })
    })
}