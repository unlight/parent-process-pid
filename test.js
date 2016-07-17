import test from "ava";
const m = require("./index");
const w = require("./win32");
const p = require("./pstree");

test("smoke test", t => {
	t.truthy(m);
});

test("get ppid", async t => {
	var result = await m(process.pid);
	t.truthy(result);
});

test("parse", t => {
	var result = w.parse("ParentProcessId\n3620");
	t.is(result, 3620);
});

test("unexpected data", t => {
	var result = w.parse();
	t.falsy(result);
});

test("null data", t => {
	var result = w.parse("");
	t.falsy(result);
});

test("pstree", t => {
	var childPid = 1965;
	var result = p.parse("micro-inetd(1)───tmux(725)───bash(1502)───bash(1701)───node(1964)───{node}(1965)", childPid);
	t.is(result, 1964);
});

test("pstree garbage", t => {
	var childPid = 1965;
	var result = p.parse("bash1701 node1964 node1965", childPid);
	t.falsy(result);
});
