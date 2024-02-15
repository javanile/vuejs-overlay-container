

module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            prefix: '.vuetify',
            transform: function (prefix, selector, prefixedSelector) {
                if (selector.match(/:root/)) {
                    const updateSelector = selector.replace(/\.v-overlay-container/, '.v-overlay-container' + prefix);
                    console.log('- Selector:', selector);
                    console.log('  PrefixedSelector:', prefixedSelector);
                    console.log('  UpdatedSelector:', updateSelector);
                    return updateSelector;
                }

                if (selector.match(/v-overlay-container/)) {
                    const updateSelector = selector.replace(/\.v-overlay-container/, '.v-overlay-container' + prefix);
                    console.log('- Selector:', selector);
                    console.log('  PrefixedSelector:', prefixedSelector);
                    console.log('  UpdatedSelector:', updateSelector);
                    return selector;
                }
                /*

                if (selector.match(/^html\./)) {
                    return selector;
                }
                if (selector.match(/^html/)) {
                    const updateSelector = 'html ' + prefix + ' ' + selector.replace(/^html/, '');
                    //console.log('- Selector:', selector);
                    //console.log('  PrefixedSelector:', prefixedSelector);
                    //console.log('  UpdatedSelector:', updateSelector);
                    return updateSelector;
                }

                if (selector.match(/^body/)) {
                    const updateSelector = 'body ' + prefix + ' ' + selector.replace(/^body/, '');
                    //console.log('Selector:', selector);
                    //console.log('PrefixedSelector:', prefixedSelector);
                    //console.log('UpdatedSelector:', updateSelector);
                    return updateSelector;
                }
*/
                if (selector === 'html') {
                    return 'html';
                }

                if (selector === 'body') {
                    return 'body';
                }

                return prefixedSelector;
            }
        }),
    ],
};
