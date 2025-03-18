export default function changeToSlug(string, separator = '-', fa = false) {
    if (!string) return '';

    const charMap = {
        'áàảạãăắằẳẵặâấầẩẫậ': 'a',
        'éèẻẽẹêếềểễệ': 'e',
        'iíìỉĩị': 'i',
        'óòỏõọôốồổỗộơớờởỡợ': 'o',
        'úùủũụưứừửữự': 'u',
        'ýỳỷỹỵ': 'y',
        'đ': 'd',
        '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴٤': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'

    };

    if (fa) {
        Object.assign(charMap, {
            'آأإء': 'a', 'ب': 'b', 'پ': 'p', 'ت': 't', 'ث': 'th', 'ج': 'j', 'چ': 'ch', 'ح': 'h',
            'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'ژ': 'zh', 'س': 's', 'ش': 'sh',
            'ص': 's', 'ض': 'z', 'ط': 't', 'ظ': 'z', 'ع': 'a', 'غ': 'gh', 'ف': 'f', 'ق': 'gh',
            'کك': 'k', 'گ': 'g', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'v', 'يی': 'y'
        });
    }

    let slug = string.toLowerCase().trim();

    for (const [chars, replacement] of Object.entries(charMap)) {
        slug = slug.replace(new RegExp(`[${chars}]`, 'g'), replacement);
    }

    slug = slug
        .replace(/[^a-z0-9]+/g, separator) // Replace non-alphanumeric chars with separator
        .replace(new RegExp(`${separator}{2,}`, 'g'), separator) // Remove duplicate separators
        .replace(new RegExp(`^${separator}|${separator}$`, 'g'), ''); // Trim separators from start/end

    return slug;
}

export function slugify(selector = 'input[name="slug"]' ,seperator = '-', fa =false){
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener('focusout', () => {
            if (item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) {
                item.value = changeToSlug(item.value , seperator , fa);
            } else {
                item.textContent = changeToSlug(item.textContent , seperator , fa);
            }
        });
    });
}