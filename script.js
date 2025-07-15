function calculate() {
    const f = document.forms['gradeForm'];

    function getVal(name) {
        return parseFloat(f[name].value) || 0;
    }

    // Moyennes de chaque module
    const org = (getVal('org_emd1') * 33 + getVal('org_emd2') * 33 + getVal('org_td') * 34) / 100;
    const bio = (getVal('bio_emd1') * 22 + getVal('bio_emd2') * 22 + getVal('bio_emd3') * 22 + getVal('bio_td') * 34) / 100;
    const gen = (getVal('gen_emd1') * 33 + getVal('gen_emd2') * 33 + getVal('gen_td') * 34) / 100;
    const math = (getVal('math_emd1') * 33 + getVal('math_emd2') * 33 + getVal('math_td') * 34) / 100;
    const bv = (getVal('bv_emd1') * 33 + getVal('bv_emd2') * 33 + getVal('bv_td') * 34) / 100;
    const phy = (getVal('phy_emd1') * 33 + getVal('phy_emd2') * 33 + getVal('phy_td') * 34) / 100;

    const anato = getVal('anato');
    const sh = getVal('sh');
    const physio = getVal('physio');
    const fr = getVal('fr');

    // Moyenne générale = (somme des modules * coeff) / total coeffs (22)
    const total =
        org * 3 + bio * 3 + gen * 3 + math * 3 +
        bv * 2 + phy * 2 + anato * 2 + physio * 2 +
        sh * 1 + fr * 1;

    const moyenne = total / 22;

    document.getElementById('result').innerText = `المعدل: ${moyenne.toFixed(2)}`;
}
