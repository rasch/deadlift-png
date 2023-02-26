import { test } from "fvb"
import { leftPad } from "./index.js"

test("leftPad", t => {
  t.equal(
    leftPad()(13)("hello world"),
    "  hello world",
    "basic padding test with odd number"
  )

  t.equal(
    leftPad()(18)("hello world"),
    "       hello world",
    "basic padding test with even number"
  )

  t.equal(
    leftPad("0")(4)(42),
    "0042",
    "integer padded to 4 places"
  )

  t.equal(
    leftPad("0")(7)(42),
    "0000042",
    "integer padded to 7 places"
  )

  t.equal(
    leftPad("0")(23)(42),
    "00000000000000000000042",
    "integer padded to 23 places"
  )

  t.equal(
    leftPad("0")(4)("999"),
    "0999",
    "string integer padded to 4 places"
  )

  t.equal(
    leftPad("0")(7)("999"),
    "0000999",
    "string integer padded to 7 places"
  )

  t.equal(
    leftPad("0")(23)("999"),
    "00000000000000000000999",
    "string integer padded to 23 places"
  )

  t.equal(
    leftPad()(0)("hello").length,
    5,
    "target length is zero, string prevails"
  )

  t.equal(
    leftPad()(3)("hello").length,
    5,
    "target length is less than length of string, string prevails"
  )

  t.equal(
    leftPad()(4)("hello").length,
    5,
    "target length is less than length of string, string prevails"
  )

  t.equal(
    leftPad()(5)("hello").length,
    5,
    "target length is same length as string"
  )

  t.equal(
    leftPad()(0)("").length,
    0,
    "string length and target length are both zero"
  )

  t.equal(
    leftPad()(101)("").length,
    101,
    "string length is zero and target length is 101"
  )

  t.equal(
    leftPad()(1001)("").length,
    1001,
    "string length is zero and target length is 1001"
  )

  t.equal(
    leftPad()(12)("hello world"),
    "hello world".padStart(12),
    "compare `leftPad` with `String.prototype.padStart()`"
  )

  t.equal(
    leftPad("0")(4)("42"),
    "42".padStart(4, "0"),
    "compare `leftPad` with `String.prototype.padStart()`"
  )

  t.plan(17)
})
