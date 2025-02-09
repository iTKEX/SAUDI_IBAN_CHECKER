const banks = [
    {
        'samaCode': '55',
        'bankName': 'Banque Saudi Fransi',
        'nameEn': 'Banque Saudi Fransi',
        'nameAr': 'البنك السعودي الفرنسي',
    },
    {

        'samaCode': '80',
        'bankName': 'Alrajhi Bank',
        'nameEn': 'Alrajhi Bank',
        'nameAr': 'بنك الراجحي',
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank',
        'nameEn': 'National Commertial Bank',
        'nameAr': 'البنك الأهلي التجاري',
    },
    {
        'samaCode': '45',
        'bankName': 'Saudi British Bank',
        'nameEn': 'SABB',
        'nameAr': 'ساب',
    },
    {

        'samaCode': '20',
        'bankName': 'Riyadh Bank',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
    },
    {

        'samaCode': '40',
        'bankName': 'Saudi American Bank',
        'nameEn': 'SAMBA',
        'nameAr': 'سامبا',
    },
    {
        'samaCode': '05',
        'bankName': 'Alinma Bank',
        'nameEn': 'AL Inma Bank',
        'nameAr': 'بنك الانماء',
    },
    {
        'samaCode': '50',
        'bankName': 'Alawwal bank',
        'nameEn': 'AlAwwal Bank',
        'nameAr': 'البنك الأول',
    },
    {
        'samaCode': '60',
        'bankName': 'Bank AlJazira',
        'nameEn': 'Bank Aljazerah',
        'nameAr': 'بنك الجزيرة',
    },
    {
        'samaCode': '65',
        'bankName': 'Saudi Investment Bank',
        'nameEn': 'Saudi Investment Bank',
        'nameAr': 'البنك السعودي للأستثمار',
    },
    {
        'samaCode': '15',
        'bankName': 'Bank AlBilad ',
        'nameEn': 'BANK ALBELAD',
        'nameAr': 'بنك البلاد',
    },
    {
        'samaCode': '30',
        'bankName': 'Arab National Bank',
        'nameEn': 'Arab National Bank',
        'nameAr': 'البنك العربي الوطني',
    },
    {
        'samaCode': '90',
        'bankName': 'GULF Bank',
        'sarieCode': 'GULFSARI',
        'nameEn': 'Gulf International Bank',
        'nameAr': 'بنك الخليج',
    },
    {
        'samaCode': '95',
        'bankName': 'Emirates Bank',
        'nameEn': 'EMARITE BANK',
        'nameAr': 'بنك الامارات',
    },
    {
        'samaCode': '76',
        'bankName': 'Bank Muscat',
        'nameEn': 'Bank Muscat',
        'nameAr': 'بنك مسقط',
    },
    {
        'samaCode': '71',
        'bankName': 'National Bank of Bahrain',
        'nameEn': 'National Bank Of Bahrain',
        'nameAr': 'بنك البحرين الوطني',
    },
    {
        'samaCode': '75',
        'bankName': 'National Bank of Kuwait',
        'nameEn': 'National Bank of Kuwait',
        'nameAr': 'بنك الكويت الوطني',
    },
    {
        'samaCode': '85',
        'bankName': 'BNP Paribas Bank',
        'nameEn': 'BNP PARIBAS SAUDI ARABIA',
        'nameAr': 'بي ان بي باريبوس',
    },
];

var bankInfo;
var message;


function checkIBAN(IBAN) {

    let checker = true;
    // Check empty IBAN
    if (!IBAN) {
        checker = false;
        message = "* Enter correct IBAN"
        return checker
    }

    //reomve spaces
    IBAN = IBAN.replaceAll(" ", '');

    //Check length of IBAN is 24
    if (IBAN.length !== 24) {
        checker = false;
        message = "* IBAN should contain 24 Digit";
        return checker
    }

    //check if start with SA
    if (!IBAN.startsWith('SA')) {
        checker = false;
        message = "* IBAN should start with 'SA'";
        return checker
    }

    let samaCode = IBAN.substring(4, 6);
    let samaCodeChecker = false;

    banks.forEach(e => {
        if (e.samaCode == samaCode) {
            bankInfo = e;
            samaCodeChecker = true;
        }
    });

    if (samaCodeChecker == false) {
        checker ==false;
        message = "* IBAN isn't Correct";
        return checker;
    }

    if (checker == true) {
        message = "IBAN is Correct";
    }

    return checker;

}

function validation() {
    checker = true;
    let IBAN = document.getElementById('iban-filed').value;
    let result = document.getElementById('result');

    checkIBAN(IBAN);
    let sama = document.getElementById('samaCode');
    let bank = document.getElementById('bankName');

    result.textContent = message;

    if (checkIBAN(IBAN) == true) {
        bank.textContent = bankInfo.bankName;
        sama.textContent = bankInfo.samaCode;
    } else {
        bank.textContent = '';
        sama.textContent = '';
    }

}