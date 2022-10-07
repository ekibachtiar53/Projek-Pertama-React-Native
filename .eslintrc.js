{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "globals":{
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOption": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": "off"
  }
}
	