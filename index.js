window.onload = function(){
    const btn = document.getElementById('submit');
    btn.addEventListener('click', get_result)
}

function get_result() {
    const width = document.getElementById('width');
    const lengths = document.getElementById('length');
    const output = document.getElementById('output');

    get_width = Number(width.value);
    get_length = Number(lengths.value);
    
    console.log(lengths.value);
    if (get_width <= 0 || get_length <= 0) {
        if (String(width.value) === '' && String(lengths.value))
            output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>กรุณากรอกจำนวนจุดบนด้านกว้างให้ครบถ้วน"
        else if (String(width.value) && String(lengths.value) === '')
            output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>กรุณากรอกจำนวนจุดบนด้านยาวให้ครบถ้วน"
        else if (String(width.value) === '' && String(lengths.value) === '')
            output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>กรุณากรอกจำนวนจุดบนด้านกว้างและด้านยาวให้ครบถ้วน"
        else
            output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>จำนวนจุดบนด้านกว้างและด้านยาวต้องมีค่ามากกว่า 0"
    }

    else if (get_width > get_length) 
        output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>จำนวนจุดบนด้านกว้างต้องมีค่าน้อยกว่าหรือเท่ากับจำนวนจุดบนด้านยาว"

    else {
        if (get_width > 330975 || get_length > 330975) 
            output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>ข้อมูลที่ input มีค่ามากเกินไป"
        else if (!Number.isInteger(get_width) || !Number.isInteger(get_length)) 
            output.innerHTML = "⚠️ เกิดข้อผิดพลาด<br>จำนวนจุดบนด้านกว้างและด้านยาวต้องเป็นจำนวนเต็ม"
        else {
            answer = (get_width * (2 * get_length - get_width) * (get_width * get_width - 1)) / 12;
            if (answer == 0) 
                output.innerHTML = `<b>Result</b> : ไม่มีรูปสี่เหลี่ยมจัตุรัสเลย ( ${answer} รูป )`
            else
                output.innerHTML = `<b>Result</b> : มีจำนวนรูปทั้งหมด ${answer.toLocaleString("en-US")} รูป`;
        }
    }
}

function reset_state() {
    window.location.reload(true);
}
