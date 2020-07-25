function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.arrPerPage = [];

  console.log("Succsess");
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length; 
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  var i = 0;
  while (i < this.collection.length) {
    this.arrPerPage.push(this.collection.slice(i, i + this.itemsPerPage));
    i = i + this.itemsPerPage;
  }
  
  return this.arrPerPage;
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return this.arrPerPage[pageIndex].length;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  var page = 0;
  var i = 0;
  while (i < this.collection.length) {
    i = i + this.itemsPerPage;
    if (i > itemIndex) return page;
    page++;
  }
  return -1;
}

var exp = new PaginationHelper([3,5,2,1,3,5,8], 3);

console.log(exp.pageCount());
console.log(exp.pageItemCount(2));
console.log(exp.pageIndex(36));
