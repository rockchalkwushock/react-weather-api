module.exports = {
  getTest: `
    query {
      getTest
    }
  `,
  postTest: name => `
    mutation {
      postTest(name:"${name}")
    }
  `
}
