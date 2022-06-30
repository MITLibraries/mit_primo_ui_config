(function () {
    'use strict';

    angular.module('viewCustom', ['angularLoad'])
    .component('prmSearchBookmarkFilterAfter', {
        template: '<div id="ask-us-mit"><a href="https://libraries.mit.edu/ask" aria-expanded="false" aria-controls="collapsible--1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16.593px" height="16px" viewBox="0 0 16.593 16" enable-background="new 0 0 16.593 16" xml:space="preserve"><path d="M16.593 6.278c0 1.074-0.074 2.148-0.241 3.185 -0.204 1.353-1.722 2.574-3.055 2.722 -1.353 0.131-2.686 0.204-4.02 0.223L5.74 15.833C5.63 15.944 5.481 16 5.334 16c-0.094 0-0.167-0.019-0.241-0.037C4.871 15.87 4.74 15.647 4.74 15.407V12.37c-0.481-0.036-0.963-0.055-1.443-0.111 -1.334-0.148-2.853-1.443-3.074-2.796C0.074 8.426 0 7.352 0 6.296c0-1.092 0.074-2.185 0.223-3.24 0.222-1.352 1.74-2.648 3.074-2.797C4.963 0.093 6.63 0 8.297 0s3.333 0.093 5 0.259c1.333 0.149 2.851 1.445 3.055 2.797C16.519 4.111 16.593 5.204 16.593 6.278"></path></svg><span>Ask Us</span></a></div>'
    })
    .component('prmLogoAfter', {
        template: '<div id="title-mit"><a href="https://mit.primo.exlibrisgroup.com/discovery/search?vid=01MIT_INST:MIT&lang=en">Search Our Collections</a></div>'
    })
    .controller('prmNoSearchResultAfterController', [function () {
        var vm = this;
        vm.getSearchTerm = getSearchTerm;
        function getSearchTerm() {
            return vm.parentCtrl.term;
        }
    }
    ])
    .component('prmNoSearchResultAfter', {
        bindings: {
            parentCtrl: '<'
        },
        controller: 'prmNoSearchResultAfterController',
        template: '<md-card class="default-card zero-margin _md md-primoExplore-theme">\
    <md-card-title>\
      <md-card-title-text>\
        <span translate="" class="md-headline ng-scope">No records found.</span>\
      </md-card-title-text>\
    </md-card-title>\
    <md-card-content>\
      <p><span>There are no results matching your search: <i>{{$ctrl.getSearchTerm()}}</i>. </span></p>\
      <p><span translate="" class="bold-text ng-scope">Common troubleshooting:</span></p>\
      <ul>\
        <li translate="" class="ng-scope">Make sure that all words are spelled correctly, and no abbreviations are used</li>\
        <li translate="" class="ng-scope">Log in to ensure access to all materials.</li>\
        <li translate="" class="ng-scope">Try different keywords, more general keywords, or fewer keywords.</li>\
        <li>Select "<a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=EverythingUBSUNY&search_scope=UBSUNY&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true&pcAvailability=true" target="_self">Expand my results</a>" to include articles outside of UB\'s full text online holdings available for request via Delivery+.</li>\
        <li translate="" class="ng-scope">If your original search specified a field, try another search without selecting a field.</li>\
        <li translate="" class="ng-scope">If your original search was filtered, try clearing your filters to improve your results.</li>\
        </ul>\
      <p><span translate="" class="bold-text ng-scope">Try a different search scope:</span></p>\
      <ul>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=EverythingUBSUNY&search_scope=UBSUNY&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">Everything UB + SUNY</a> - materials owned by UB and SUNY, and print and electronic articles available at UB;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=Everything&search_scope=MyInst_and_CI&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">Everything UB</a> - materials owned by UB, including articles;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=OnlineResources&search_scope=OnlineResources&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">Online Resources</a> - materials available online, including articles, ebooks, and more;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=LibraryCatalog&search_scope=MyInstitution&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">Library Catalog</a> - materials owned by UB, excluding articles;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=CentralIndex&search_scope=CentralIndex&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">Articles</a> - print and electronic articles available at UB;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=NEWSUNY&search_scope=NewDiscoveryNetwork&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">SUNY Catalog</a> - materials owned by UB and SUNY, excluding articles;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/search?vid=01SUNY_BUF:everything&tab=UBSUNYPLUS&search_scope=UBSUNYPLUS&mode=basic&displayMode=full&bulkSize=10&highlight=true&dum=true&query=any,contains,{{$ctrl.getSearchTerm()}}&displayField=all&pcAvailabiltyMode=true" target="_self">Everything UB + SUNY + WorldCat</a> - materials owned by UB and SUNY, articles owned by UB, and records in the WorldCat database;</li>\
        <li><a href="https://search.lib.buffalo.edu/discovery/npsearch?vid=01SUNY_BUF:everything&search_scope=all&query=any,contains,{{$ctrl.getSearchTerm()}}&pcAvailabiltyMode=true" target="_self">Newspapers Search</a> - newspaper articles owned by UB.</li>\
      </ul>\
      <p><span translate="" class="bold-text ng-scope">Need more help?</span></p>\
      <ul>\
        <li>Chat now with a librarian by clicking "<strong>Chat with us</strong>" on the right or consult our <a href="https://research.lib.buffalo.edu/search-tips/everything-help">Search Tips and Videos</a>.</li>\
      </ul>\
    </md-card-content>\
    </md-card>'
    });
})();



 