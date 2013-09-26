describe("An immutable list", function () {
    var list = List(1, List(2, List(3, List(4, Nil))))
    it("can be mapped", function () {
        var mappedList = list.map(function (a) {
            return a + 1
        })
        expect(mappedList.head).toBe(2)
        expect(mappedList.tail.head).toBe(3)
        expect(mappedList.tail.tail.head).toBe(4)
        expect(mappedList.tail.tail.tail.head).toBe(5)
    })
})