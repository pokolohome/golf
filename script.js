function setValue(variable, value) {
    // 선택된 값을 표시하기 위한 요소를 업데이트
    document.getElementById('display' + variable).innerText = value;
}

function calculate() {
    const A = parseFloat(document.getElementById('displayA').innerText);
    const B = parseFloat(document.getElementById('displayB').innerText);

    if (!A) {
        document.getElementById('result').innerText = 'A 값을 입력해 주세요.';
        return;
    }

    const C = (1 / (A / 3)) * B;
    document.getElementById('result').innerText = C.toFixed(1); // 결과를 소수 첫 번째 자리까지 표시
}
