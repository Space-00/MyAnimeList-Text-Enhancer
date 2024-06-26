# MyAnimeList Text Enhancer

[If you don't know Persian click here](https://github.com/Space-00/MyAnimeList-Text-Enhancer/blob/main/README.md)

سلام به همه فارسی زبونا, از اون جایی که همه ی شما اوتاکو ها می دونیین سایز فونت توی سایت مای انیمه لست افتضاحه, واسه همین من یه اسکریپت ساختم که برای همیشه از این مشکل خلاص بشیم

## ویژگی‌ها

- متن‌های فارسی و انگلیسی رو برای خوانایی بهتر بزرگ‌ تر و بولد می‌کنه.
- به‌طور خودکار محتوای جدیدو تشخیص می ده و متنو بختر می کنه.

## روش نصب

1. **نصب Tampermonkey** (اگر قبلاً نصب نکردین):
   - [Tampermonkey برای کروم](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey برای فایرفاکس](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey برای سایر مرورگرها](https://www.tampermonkey.net/)

2. **نصب MyAnimeList Text Enhancer**:
   - داشبورد Tampermonkey رو باز کنین.
   - روی ایکون `+` کلیک کنید تا یک اسکریپت جدید بسازین.
   - [اینجا](https://raw.githubusercontent.com/Space-00/MyAnimeList-Text-Enhancer/main/MyAnimeList%20Text%20Enhancer.js) رو کلیک کنین و کد رو کپی کنین (هرچی که اونجا هست رو کپی کنین)
   - حالا برگردین به صفحه اسکریپت تو Tampermonkey و هر چه که نوشته رو پاک کنین و کدی که کپی کردین رو جایگذاری کنین
   - اسکریپت رو ذخیره کنین.

## روش استفاده

اسکریپت به‌طور خودکار تو خر صفحه ی MyAnimeList کار می کنه. متن‌های فارسی و انگلیسی تو فونت بزرگ‌ تر و بولد برای خوانایی بهتر نشون می ده.

_________________________________________________________________________________
## ویرایش

برای تغییر اندازه فونت متن انگلیسی این لاینو زیر رو ادیت کینین:

```javascript
span.style.fontSize = '1.1em'; // Font size for English text
```

و برای تغییر اندازه فونت متن فارسی این لاینو زیر رو ادیت کینین:

```javascript
span.style.fontSize = '1.5em'; // Font size for Persian text
```

مقدار رو به اندازه فونت دلخواه خودتون تنظیم کنین.
_________________________________________________________________________________


## مشارکت

ااگه با مشکلی مواجه شدین یا پیشنهادی دارین، می‌تونین یه issue باز کنین یا یه pull request بفرستین.
