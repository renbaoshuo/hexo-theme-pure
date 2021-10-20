'use strict';

const https = require('https');
const path = require('path');
const { version } = require(path.normalize(path.join(hexo.theme_dir, 'package.json')));

hexo.extend.filter.register('before_exit', () => {
    if (!hexo.theme.config.check_update) return;

    const errorLog = (error) => {
        hexo.log.warn('无法获取最新版本信息，请访问 https://github.com/renbaoshuo/hexo-theme-pure 了解详情');
        hexo.log.debug(error);
    };

    https.get('https://api.github.com/repos/renbaoshuo/hexo-theme-pure/releases/latest', {
        headers: {
            'User-Agent': `hexo-theme-pure/${version}`
        }
    }, (res) => {
        let result = '';
        res.on('data', data => {
            result += data;
        });
        res.on('end', () => {
            try {
                const tag = JSON.parse(result).tag_name;
                if (!tag) {
                    errorLog('Missing release tag');
                    return;
                }
                const latest = tag.replace('v', '').split('.');
                const current = version.split('.');

                let isOutdated = false;
                for (let i = 0; i < Math.max(latest.length, current.length); i++) {
                    if (!current[i] || latest[i] > current[i]) {
                        isOutdated = true;
                        break;
                    }
                    if (latest[i] < current[i]) {
                        break;
                    }
                }

                if (isOutdated) {
                    hexo.log.warn('检测到主题更新，请前往 https://github.com/renbaoshuo/hexo-theme-pure/releases 页面下载');
                    hexo.log.warn(`当前版本为 v${current.join('.')}，最新版本为 v${latest.join('.')}`);
                } else {
                    hexo.log.info(`当前使用的是最新版本的主题（v${current.join('.')}）`);
                }
            } catch (err) {
                errorLog(err);
            }
        });
    }).on('error', err => {
        errorLog(err);
    });
});
