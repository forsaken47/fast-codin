/**
 * 定义测试（入口）名称
 */
KISSY.add(function(S,O){
	describe("Test for welData:", function(){
		it("1.prepare for data test", function(){
				var ib = new O();
				//测试点1
				//expect(ib.jsonObj.fw).toBe('123');
				//测试点2
				expect(ib.jsonObj.fw).toBe(
						'Kissy Framework successfully loaded.<br />BUI_basedonKissy Kit successfully loaded'
						);//passed

			
		});
		it("2.prepare for another data test", function(){
			var ib = new O();
			//测试点1
			//expect(ib.jsonObj.fw).toBe('123');
			//测试点2
			expect(ib.jsonObj.dcount).toBe(0);//pass
		});
	});
},{
//	attach:true,
	requires:['moduleNo1/src/welData']});

