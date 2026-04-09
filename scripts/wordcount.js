'use strict';

const { stripHTML } = require('hexo-util');

var config = (hexo.config.symbols_count_time = Object.assign(
    {
        symbols: true,
        time: true,
        total_symbols: true,
        total_time: true,
        exclude_codeblock: false,
        awl: 4,
        wpm: 275,
        suffix: 'mins.',
    },
    hexo.config.symbols_count_time
));

hexo.extend.filter.register(
    'after_post_render',
    function (data) {
        var content = data.content;
        if (config.exclude_codeblock) content = content.replace(/<pre>.*?<\/pre>/g, '');
        data.length = stripHTML(content)
            .replace(/\r?\n|\r/g, '')
            .replace(/\s+/g, '').length;
    },
    0
);

const getSymbols = (post) => {
    return post.length;
};

const getFormatTime = (minutes, suffix) => {
    var fHours = Math.floor(minutes / 60);
    var fMinutes = Math.floor(minutes - fHours * 60);
    if (fMinutes < 1) {
        fMinutes = 1; // 0 => 1
    }
    return fHours < 1
        ? fMinutes + ' ' + suffix // < 59 => 59 mins.
        : fHours + ':' + ('00' + fMinutes).slice(-2); // = 61 => 1:01
};

const symbolsCount = (post) => {
    var symbolsResult = getSymbols(post);
    if (symbolsResult > 9999) {
        symbolsResult = Math.round(symbolsResult / 1000) + ' 千字'; // > 9999 => 11k
    } else if (symbolsResult > 999) {
        symbolsResult = Math.round(symbolsResult / 100) / 10 + ' 千字'; // > 999 => 1.1k
    } else {
        symbolsResult = symbolsResult.toString() + ' 字'; // < 999 => 111
    }
    return symbolsResult;
};

const symbolsTime = (post, awl = config.awl, wpm = config.wpm, suffix = config.suffix) => {
    var minutes = Math.round(getSymbols(post) / (awl * wpm));
    return getFormatTime(minutes, suffix);
};

const getSymbolsTotal = (site) => {
    var symbolsResultCount = 0;
    site.posts.forEach((post) => {
        symbolsResultCount += getSymbols(post);
    });
    return symbolsResultCount;
};

const symbolsCountTotal = (site) => {
    var symbolsResultTotal = getSymbolsTotal(site);
    return symbolsResultTotal < 10000
        ? Math.round(symbolsResultTotal / 1000) + ' 千字'
        : Math.round(symbolsResultTotal / 1000) / 10 + ' 万字';
};

const symbolsTimeTotal = (site, awl = config.awl, wpm = config.wpm, suffix = config.suffix) => {
    var minutes = Math.round(getSymbolsTotal(site) / (awl * wpm));
    return getFormatTime(minutes, suffix);
};

hexo.extend.helper.register('symbolsCount', symbolsCount);
hexo.extend.helper.register('symbolsTime', symbolsTime);
hexo.extend.helper.register('symbolsCountTotal', symbolsCountTotal);
hexo.extend.helper.register('symbolsTimeTotal', symbolsTimeTotal);
hexo.extend.helper.register('symbolsTotal', getSymbolsTotal);
