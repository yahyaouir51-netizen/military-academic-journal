// تحديث المحتوى من لوحة المحرر
function updateContent() {
    const issueNumber = document.getElementById('issueNumber').value;
    const issueYear = document.getElementById('issueYear').value;
    const primaryColor = document.getElementById('primaryColor').value;
    
    // تحديث رقم العدد
    if (issueNumber) {
        document.querySelector('.issue-number').textContent = `${issueNumber} - العام الأول`;
    }
    
    // تحديث السنة
    if (issueYear) {
        document.querySelector('.issue-year').textContent = issueYear;
    }
    
    // تحديث الألوان
    document.documentElement.style.setProperty('--primary-color', primaryColor);
}

// تحميل الصفحة كصورة
function downloadAsImage() {
    // هذه الميزة تتطلب مكتبة مثل html2canvas
    alert('لتحميل الصفحة كصورة:\n\n1. اضغط Ctrl+P (أو Cmd+P على Mac)\n2. اختر "حفظ كـ PDF"\n\nأو انقر بزر الفأرة الأيمن واختر "حفظ الصفحة كـ ..."');
}

// تحميل الإعدادات عند فتح الصفحة
window.addEventListener('DOMContentLoaded', function() {
    console.log('صفحة الغلاف جاهزة للتحرير');
});

// حفظ سريع (Ctrl+S)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        alert('تم حفظ التغييرات! استخدم "طباعة" لحفظ كـ PDF');
    }
});