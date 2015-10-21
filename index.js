
function permutest(test) {
  var listVals = []; // if sets are passed by reference
  var listJson = []; // if sets are passed by value

  /*
    The function must be called once to load in the permutations.
    So, this function also must return some value to complete
      this first test.
  */
  function addSet(set) {
    assertSet(set);
    listVals.push(set);
    listJson.push(JSON.stringify(set));
    return set[0];
  }

  test(addSet);

  permutations(listVals)
    .slice(1) // dealt with in the initial addSet
    .forEach(function(vals) {
      function getValForSet(set) {
        assertSet(set);
        var idx = listVals.indexOf(set);
        if(idx === -1) idx = listJson.indexOf(JSON.stringify(set));
        if(idx === -1) {
          var msg = "permutest: set "+JSON.stringify(set)+" is unlike all known sets.";
          throw new Error(msg);
        }
        return vals[idx];
      }
      test(getValForSet);
    });
}

function assertSet(set) {
  if(!Array.isArray(set)) {
    throw new Error("permutest: all sets must be arrays.");
  }
  if(set.length === 0) {
    throw new Error("permutest: all sets must have a least one value.");
  }
}

function permutations(lists) {
  var groups = [];
  var head = lists[0];
  var tail = lists.slice(1);
  for(var i = 0; i < head.length; i++) {
    var x = head[i];
    if(tail.length) {
      permutations(tail)
        .map(function(vals) { return [x].concat(vals); })
        .forEach(function(vals) { groups.push(vals); });
    } else {
      groups.push([x]);
    }
  }
  return groups;
}

module.exports = permutest;
module.exports._permutations = permutations;

