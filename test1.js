QUnit.test( "TestArea", function( assert ) 
{
            var res = area(2,3);
            assert.equal( res, "3", "Area of triangle with these inputs will be 3" );
});
         
         
QUnit.test( "TestArea", function( assert ) 
{
            var result = area(6,6);
            assert.equal( result, "18", "Area of triangle with these inputs will be 18" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(4,3);
            assert.equal( res, "6", "Area of triangle with these inputs will be 6" );
});


QUnit.test( "TestArea", function( assert ) 
{
            var res = area(3,6);
            assert.equal( res, "9", "Area of triangle with these inputs will be 9" );
});

QUnit.test("TestArea", function(assert){
    var res = area (265, 565);
    assert.equal( res, "74862.5", "Area of triangle with these inputs will be 74862.5" );
});
