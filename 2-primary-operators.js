
console.log('%c\nprimary operators ', 'font-weight:bold');

console.log(`
  in boolean algebra there are 3 primary operations,
  they can be understood by studying their args & return values (truth tables)
`);

  console.log('%cnot:  !a ', 'font-style:italic')
    console.table({
      ['true']:    !true,
      ['false']:   !false
    })


  console.log('%cand:  a && b  ', 'font-style:italic')
    console.log('   native implementation ')
    console.table({ 
      ['true, true']:    true && true,
      ['true, false']:   true && false,
      ['false, true']:   false && true,
      ['false, false']:  false && false
    })
    console.log('   replication using ||, !')
    console.table({
      ['true, true']:    !(!true || !true),
      ['true, false']:   !(!true || !false),
      ['false, true']:   !(!false || !true),
      ['false, false']:  !(!false || !false)
    })

  console.log('%cor:  a || b  ', 'font-style:italic')
    console.log('    native implementation ')
    console.table({
      ['true, true']:    true || true,
      ['true, false']:   true || false,
      ['false, true']:   false || true,
      ['false, false']:  false || false
    })
    console.log('    replication using &&, !')
    console.table({ 
      ['true, true']:    !(!true && !true),
      ['true, false']:   !(!true && !false),
      ['false, true']:   !(!false && !true),
      ['false, false']:  !(!false && !false)
    })

