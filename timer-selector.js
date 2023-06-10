// Constants
var SECONDS_MS = 1000;
var MINUTES_MS = SECONDS_MS * 60;
var HOURS_MS = MINUTES_MS * 60;
var DAYS_MS = HOURS_MS * 24;

// Initialization errors are only in English unfortunately.
function setError(primary, secondary = null) {
  var errorElement = document.getElementById('error');
  errorElement.classList.remove('hidden');
  errorElement.innerText = primary;

  var formElement = document.getElementById('form');
  formElement.classList.add('hidden');

  if (secondary) {
    var secondaryErrorElement = document.createElement('div');
    secondaryErrorElement.classList = ['error-secondary'];
    secondaryErrorElement.innerText = secondary;
    errorElement.appendChild(secondaryErrorElement);
  }
}

// Localization
function getMessage(language, messageKey) {
  var translations = {
    // English
    'en': {
      'timer-description': 'Timer expiring at',
      'timer-progress': 'This timer will expire in',
      'timer-finished': 'This timer has been expired since',
      'timer-type': 'Timer Type',
      'timer-type-generic': 'Generic',
      'timer-type-deletion': 'Deletion',
      'timer-type-ban': 'Ban',
      'duration': 'Duration',
      'duration-1d': '1 Day',
      'duration-1w': '1 Week',
      'duration-2w': '2 Weeks',
      'duration-1y': '1 Year',
      'duration-custom': 'Custom',
      'unit-minute': 'minutes',
      'unit-hour': 'hours',
      'unit-day': 'days',
      'unit-week': 'weeks',
      'unit-month': 'months',
      'unit-year': 'years',
      'start-time': 'Start Time',
      'start-time-now': 'Now',
      'start-time-later': 'Later',
      'messages': 'Messages',
      'message-progress': 'Timer in-progress (optional)',
      'message-finished': 'Timer finished (optional)',
      'advanced-section': 'Advanced',
      'height': 'Height',
      'width': 'Width',
      'css-extra': 'Custom timer CSS (optional)',
      'template': 'Output template',
      'template-deletion': 'Due to the low rating of this post (-X), it will be deleted:\n\n%%iframe%%\n\nPlease modify the post as soon as possible.\nIf the author fails to make changes in time, you can apply for a rewrite from the executive committee of the JW branch after confirmation.',
      'template-ban': 'Site member [[*user USERNAME]] has violated site regulations [Site Rules Section], and will receive a ban according to the website rules.\n\n%%iframe%%\n\nIf there are any questions about this punishment, please contact the executive committee of the JW branch.\nThis punishment is eligible for appeal.',
      'message-deletion-progress': 'This page will be eligible for deletion in',
      'message-deletion-finished': 'This page has been eligible for deletion since',
      'message-ban-progress': 'This user\'s ban will elapse in',
      'message-ban-finished': 'This user\'s ban has been expired since',
      'build-timer': 'Build timer',
      'info-help': 'help',
      'info-source': 'source',
      'error-missing': 'Please make a selection in each section first.',
      'error-invalid': 'Invalid internal state, please file a bug report.',
    },
    
    // Simplified Chinese
    'zh-hans': {
      'timer-description': '此计时器将过期于：',
      'timer-progress': '此计时器将过期于：',
      'timer-finished': '此计时器已过期：',
      'timer-type': '计时器类型',
      'timer-type-generic': '通用',
      'timer-type-deletion': '删除',
      'timer-type-ban': '封禁',
      'timer-type-restrict': '限制',
      'duration': '运行时间',
      'duration-1d': '1日',
      'duration-1w': '1周',
      'duration-2w': '2周',
      'duration-1y': '1年',
      'duration-custom': '自定义',
      'unit-minute': '分钟',
      'unit-hour': '小时',
      'unit-day': '日',
      'unit-week': '周',
      'unit-month': '月',
      'unit-year': '年',
      'start-time': '开始时间',
      'start-time-now': '现在',
      'start-time-later': '稍后',
      'messages': '通知内容',
      'message-progress': '此计时器运行中（可选）',
      'message-finished': '此计时器已到期（可选）',
      'advanced-section': '高级设置',
      'height': '高度',
      'width': '宽度',
      'css-extra': '自定计时器样式（可选）',
      'template': '输出模板',
      'template-deletion': '因为本文章评分已低至了-X的低分，在此宣告将删除此页面：\n\n%%iframe%%\n\n请本文章作者尽快进行修改。\n如果该页面作者无法及时做出更改，你也可以在确认后向JW分部常务委员会申请重写。',
      'template-ban': '网站成员[[*user USERNAME]]【违规行为】，违反了网站站规【网站站规条目】，依据网站站规，将对网站成员[[*user USERNAME]]进行封禁处分。\n\n%%iframe%%\n\n如果对此次处理结果有疑问，可以联系JW分部常务委员会。\n本次处分允许上诉。',
      'message-deletion-progress': '此页面将在计时器到期后可供删除：',
      'message-deletion-finished': '此页面在下列时间可前已可供删除：',
      'message-ban-progress': '此用户的封禁将到期于：',
      'message-ban-finished': '此用户的封禁已到期：',
      'message-restrict-progress': '此用户的限制将到期于：',
      'message-restrict-finished': '此用户的限制已到期：',
      'build-timer': '生成计时器',
      'info-help': '帮助',
      'info-source': '来源',
      'error-missing': '请先在每个项中做选择。',
      'error-invalid': '内部状态无效，请提交错误报告。',
    },
    
     // Traditional Chinese
    'zh-hant': {
      'timer-description': '此計時器將過期于：',
      'timer-progress': '此計時器將過期于：',
      'timer-finished': '此計時器已過期：',
      'timer-type': '計時器類型',
      'timer-type-generic': '通用',
      'timer-type-deletion': '刪除',
      'timer-type-ban': '封禁',
      'timer-type-restrict': '限制',
      'duration': '運行時間',
      'duration-1d': '1日',
      'duration-1w': '1周',
      'duration-2w': '2周',
      'duration-1y': '1年',
      'duration-custom': '自定義',
      'unit-minute': '分鐘',
      'unit-hour': '小時',
      'unit-day': '日',
      'unit-week': '周',
      'unit-month': '月',
      'unit-year': '年',
      'start-time': '開始時間',
      'start-time-now': '現在',
      'start-time-later': '稍後',
      'messages': '通知内容',
      'message-progress': '此計時器運行中（可選）',
      'message-finished': '此計時器已過期（可選）',
      'advanced-section': '高級設置',
      'height': '高度',
      'width': '寬度',
      'css-extra': '自定義計時器樣式（可選）',
      'template': '輸出内容模板',
      'template-deletion': '因爲本文章評分已低到-X分，故此宣告將刪除此頁面：\n\n%%iframe%%\n\n請本文章的作者快速修改内容提高質量。\n如果該頁面作者無法及時的修改，你也可以在確認后向JW新部常務委員會申請重寫。',
      'template-ban': '網站成員[[*user USERNAME]]【違規行爲】，違反了網站站規【網站站規條目】，依據網站站規，對[[*user USERNAME]]進行封禁處分。\n\n%%iframe%%\n\n如果對此次處理結果有疑問，可以聯係JW新部常務委員會。\n本次處分允許上訴。',
      'message-deletion-progress': '此页面将在计时器到期后可供删除：',
      'message-deletion-finished': '此页面在下列时间可前已可供删除：',
      'message-ban-progress': '此用户的封禁将過期于：',
      'message-ban-finished': '此用戶的封禁已過期：',
      'message-restrict-progress': '此用户的限制将過期于：',
      'message-restrict-finished': '此用戶的限制已過期：',
      'build-timer': '生成計時器',
      'info-help': '幫助',
      'info-source': '來源',
      'error-missing': '請先在每一個選擇項完成選擇。',
      'error-invalid': '內部狀態無效，請提交錯誤報告。',
    },
  };

  // Special case:
  // The 'test' language just echoes the message key back out.
  if (language === 'test') {
    return messageKey;
  }

  // Get message based on language
  var messages = translations[language];
  if (!messages) {
    setError('No translations for language: ' + language);
    return null;
  }

  var message = messages[messageKey];
  if (!message) {
    setError('No such message key: ' + messageKey);
    return null;
  }

  return message;
}

function insertCSS(styling) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(styling));
  head.appendChild(style);
}

// Timer creation
function buildUrl(language, startDate, durationMs, progressMessage, finishedMessage, styling) {
  // Calculate target datetime
  var targetDate = new Date(startDate.getTime() + durationMs);

  // Finally, build URL
  var parameters = new URLSearchParams();
  parameters.append('lang', language);
  parameters.append('time', targetDate.toISOString());

  if (progressMessage) {
    parameters.append('progress', progressMessage);
  }

  if (finishedMessage) {
    parameters.append('finished', finishedMessage);
  }

  if (styling) {
    parameters.append('style', styling);
  }

  return 'https://lest-day.github.io/SCPJW-timer/timer.html?' + parameters;
}

function buildWikitext(template, url, height, width) {
  var iframe = [
    '[[iframe ', url, ' style="width: ', width, '; height: ', height, '; border: 0; text-align: center;"]]',
  ].join('');

  return template
    .replace('%%url%%', url)
    .replace('%%iframe%%', iframe);
}

function findCheckedItem(selector) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i];
    }
  }

  alert(getMessage(language, 'error-missing'));
  throw new Error('Could not find a checked radio button item');
}

function getStartDate(language) {
  var element = findCheckedItem('#start input');
  switch (element.id) {
    case 'start-now':
      return new Date();
    case 'start-later':
      var dateElement = document.getElementById('start-later-date');
      var timeElement = document.getElementById('start-later-time');
      if (dateElement === null || timeElement === null) {
        alert(getMessage(language, 'error-missing'));
        throw new Error('Missing date or time element in getStartDate()');
      }

      return new Date(dateElement.value + ' ' + timeElement.value);
    default:
      alert(getMessage(language, 'error-invalid'));
      throw new Error('Invalid element ID in getStartDate()');
  }
}

function getDuration() {
  var element = findCheckedItem('#duration input');
  if (element.value !== 'custom') {
    return parseInt(element.value);
  }

  var valueElement = document.getElementById('duration-custom-value');
  var value = parseInt(valueElement.value);
  if (isNaN(value)) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('No value in custom duration selector');
  }

  var unitElement = document.getElementById('duration-custom-unit');
  var unit = parseInt(unitElement.value);

  return value * unit;
}

function getTextData(language) {
  var progressElement = document.getElementById('message-progress');
  if (progressElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing progress element in getTextData()');
  }

  var finishedElement = document.getElementById('message-finished');
  if (finishedElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing finished element in getTextData()');
  }

  var heightElement = document.getElementById('height');
  if (heightElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing height element in getTextData()');
  }

  var widthElement = document.getElementById('width');
  if (widthElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing width element in getTextData()');
  }

  var customCssElement = document.getElementById('custom-css');
  if (customCssElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing custom CSS element in getTextData()');
  }

  var templateElement = document.getElementById('template');
  if (templateElement === null) {
    alert(getMessage(language, 'error-missing'));
    throw new Error('Missing template element in getTextData()');
  }

  return {
    progressMessage: progressElement.value,
    finishedMessage: finishedElement.value,
    height: heightElement.value,
    width: widthElement.value,
    styling: customCssElement.value,
    template: templateElement.value,
  };
}

function buildTimer(language) {
  // Unhide output
  var outputElement = document.getElementById('output');
  outputElement.classList.remove('hidden');

  // Gather values
  var startDate = getStartDate(language);
  var durationMs = getDuration(language);
  var data = getTextData(language);

  // Build wikitext and output
  var url = buildUrl(
    language,
    startDate,
    durationMs,
    data.progressMessage,
    data.finishedMessage,
    data.styling,
  );

  outputElement.value = buildWikitext(data.template, url, data.height, data.width);
}

// Initialization
function initializeMessages(language) {
  function setMessage(id, messageKey = null) {
    document.getElementById(id).innerText = getMessage(language, messageKey || id);
  }

  var element;

  setMessage('timer-type-label', 'timer-type');
  setMessage('timer-type-generic-label', 'timer-type-generic');
  setMessage('timer-type-deletion-label', 'timer-type-deletion');
  setMessage('timer-type-ban-label', 'timer-type-ban');

  setMessage('start-label', 'start-time');
  setMessage('start-now-label', 'start-time-now');
  setMessage('start-later-label', 'start-time-later');

  setMessage('duration-label', 'duration');
  setMessage('duration-1d-label', 'duration-1d');
  setMessage('duration-1w-label', 'duration-1w');
  setMessage('duration-2w-label', 'duration-2w');
  setMessage('duration-1y-label', 'duration-1y');
  setMessage('duration-custom-label', 'duration-custom');

  setMessage('unit-minute');
  setMessage('unit-hour');
  setMessage('unit-day');
  setMessage('unit-week');
  setMessage('unit-month');
  setMessage('unit-year');

  setMessage('messages-label', 'messages');
  document.getElementById('message-progress').placeholder = getMessage(language, 'timer-progress');
  document.getElementById('message-finished').placeholder = getMessage(language, 'timer-finished');
  setMessage('message-progress-label', 'message-progress');
  setMessage('message-finished-label', 'message-finished');

  setMessage('advanced-label', 'advanced-section');
  setMessage('height-label', 'height');
  setMessage('width-label', 'width');
  setMessage('custom-css-label', 'css-extra');
  setMessage('template-label', 'template');
  document.getElementById('custom-css').placeholder = '#title {\n  color: #008080;\n}';

  setMessage('build', 'build-timer');
  setMessage('info-help');
  setMessage('info-source');
}

function initializeHooks(language) {
  document.getElementById('timer-type-generic').onclick = function () {
    document.getElementById('message-progress').value = '';
    document.getElementById('message-finished').value = '';
    document.getElementById('template').value = '%%iframe%%';
  };

  document.getElementById('timer-type-deletion').onclick = function () {
    document.getElementById('duration-1d').click();
    document.getElementById('message-progress').value = getMessage(language, 'message-deletion-progress');
    document.getElementById('message-finished').value = getMessage(language, 'message-deletion-finished');
    document.getElementById('template').value = getMessage(language, 'template-deletion');
  };

  document.getElementById('timer-type-ban').onclick = function () {
    document.getElementById('message-progress').value = getMessage(language, 'message-ban-progress');
    document.getElementById('message-finished').value = getMessage(language, 'message-ban-finished');
    document.getElementById('template').value = getMessage(language, 'template-ban');
  };

  function onClickStartDate() {
    document.getElementById('start-later').click();
  }

  document.getElementById('start-later-date').onclick = onClickStartDate;
  document.getElementById('start-later-time').onclick = onClickStartDate;

  function onClickCustom() {
    document.getElementById('duration-custom').click();
  }

  document.getElementById('duration-custom-value').onclick = onClickCustom;
  document.getElementById('duration-custom-unit').onclick = onClickCustom;

  document.getElementById('build').onclick = function () {
    buildTimer(language);
  };
}

function setup() {
  // Get parameters
  var url = new URL(window.location.href);
  var parameters = new URLSearchParams(url.search);
  var language = parameters.get('lang');
  var styling = parameters.get('style');

  // Check parameters
  if (!language) {
    setError('No language set', 'Parameter is "lang". Use "en" for English.');
    return;
  }

  // Insert custom CSS, if any
  if (styling !== null) {
    insertCSS(styling);
  }

  initializeMessages(language);
  initializeHooks(language);
}

setTimeout(setup, 5);
