/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss'

// ================================
// START YOUR APP HERE
// ================================

function foo() {
  import(
    /* webpackChunkName: "test" */
    './test',
  ).then(module => module.default)
}

export default foo
