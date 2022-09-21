export const drawReact = (detections, ctx) => {
    detections.forEach(predictions => {
        const [x, y, width, height] = predictions["bbox"];
        const text = predictions['class']

        const color = 'green'
        ctx.strokeSylt = color
        ctx.font='18px Arial'
        ctx.fillStye = color

        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}
export const noOfPersons = (detections) => {
    var countPersons = 0;
    detections.forEach(predictions => {
       // const [x, y, width, height] = predictions["bbox"];
        const text = predictions['class']
        console.log(text)
        if (text === 'person') {
            countPersons = countPersons + 1
        }
    })
    return countPersons;
}