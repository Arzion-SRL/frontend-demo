const aliases = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@constants': `${prefix}/constants`,
  '@store': `${prefix}/store`,
  '@reducers': `${prefix}/reducers`,
  '@utils': `${prefix}/utils`,
  '@actions': `${prefix}/actions`,
  '@hooks': `${prefix}/lib/hooks`,
});

module.exports = aliases;