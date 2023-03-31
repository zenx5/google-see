import useGoogleSearch from './services/GoogleSearchService.js';

const google = useGoogleSearch()
console.log( google )

const keywords = ['geografia']
const result = []

async function run() {
    for( const keyword of keywords ){
        result.push( await google.search(keyword) )
    }
    console.log( result )
}

run()