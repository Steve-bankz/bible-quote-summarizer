import { J as joinValues, K as stringifyPrimitive, $ as $ZodAny, L as $ZodArray, M as $ZodAsyncError, N as $ZodBase64, O as $ZodBase64URL, P as $ZodBigInt, Q as $ZodBigIntFormat, R as $ZodBoolean, S as $ZodCIDRv4, T as $ZodCIDRv6, U as $ZodCUID, V as $ZodCUID2, W as $ZodCatch, X as $ZodCheck, Y as $ZodCheckBigIntFormat, a0 as $ZodCheckEndsWith, a1 as $ZodCheckGreaterThan, a2 as $ZodCheckIncludes, a3 as $ZodCheckLengthEquals, a4 as $ZodCheckLessThan, a5 as $ZodCheckLowerCase, a6 as $ZodCheckMaxLength, a7 as $ZodCheckMaxSize, a8 as $ZodCheckMimeType, a9 as $ZodCheckMinLength, aa as $ZodCheckMinSize, ab as $ZodCheckMultipleOf, ac as $ZodCheckNumberFormat, ad as $ZodCheckOverwrite, ae as $ZodCheckProperty, af as $ZodCheckRegex, ag as $ZodCheckSizeEquals, ah as $ZodCheckStartsWith, ai as $ZodCheckStringFormat, aj as $ZodCheckUpperCase, ak as $ZodCodec, al as $ZodCustom, am as $ZodCustomStringFormat, an as $ZodDate, ao as $ZodDefault, ap as $ZodDiscriminatedUnion, aq as $ZodE164, ar as $ZodEmail, as as $ZodEmoji, at as $ZodEncodeError, au as $ZodEnum, av as $ZodError, aw as $ZodFile, ax as $ZodFunction, ay as $ZodGUID, az as $ZodIPv4, aA as $ZodIPv6, aB as $ZodISODate, aC as $ZodISODateTime, aD as $ZodISODuration, aE as $ZodISOTime, aF as $ZodIntersection, aG as $ZodJWT, aH as $ZodKSUID, aI as $ZodLazy, aJ as $ZodLiteral, aK as $ZodMap, aL as $ZodNaN, aM as $ZodNanoID, aN as $ZodNever, aO as $ZodNonOptional, aP as $ZodNull, aQ as $ZodNullable, aR as $ZodNumber, aS as $ZodNumberFormat, aT as $ZodObject, aU as $ZodObjectJIT, aV as $ZodOptional, aW as $ZodPipe, aX as $ZodPrefault, aY as $ZodPromise, aZ as $ZodReadonly, a_ as $ZodRealError, a$ as $ZodRecord, b0 as $ZodRegistry, b1 as $ZodSet, b2 as $ZodString, b3 as $ZodStringFormat, b4 as $ZodSuccess, b5 as $ZodSymbol, b6 as $ZodTemplateLiteral, b7 as $ZodTransform, b8 as $ZodTuple, b9 as $ZodType, ba as $ZodULID, bb as $ZodURL, bc as $ZodUUID, bd as $ZodUndefined, be as $ZodUnion, bf as $ZodUnknown, bg as $ZodVoid, bh as $ZodXID, bi as $brand, bj as $constructor, bk as $input, bl as $output, bm as Doc, bn as JSONSchemaGenerator, bo as NEVER, bp as TimePrecision, bq as _any, br as _array, bs as _base64, bt as _base64url, bu as _bigint, bv as _boolean, bw as _catch, bx as _check, by as _cidrv4, bz as _cidrv6, bA as _coercedBigint, bB as _coercedBoolean, bC as _coercedDate, bD as _coercedNumber, bE as _coercedString, bF as _cuid, bG as _cuid2, bH as _custom, bI as _date, bJ as _decode, bK as _decodeAsync, bL as _default, bM as _discriminatedUnion, bN as _e164, bO as _email, bP as _emoji, bQ as _encode, bR as _encodeAsync, bS as _endsWith, bT as _enum, bU as _file, bV as _float32, bW as _float64, bX as _gt, bY as _gte, bZ as _guid, b_ as _includes, b$ as _int, c0 as _int32, c1 as _int64, c2 as _intersection, c3 as _ipv4, c4 as _ipv6, c5 as _isoDate, c6 as _isoDateTime, c7 as _isoDuration, c8 as _isoTime, c9 as _jwt, ca as _ksuid, cb as _lazy, cc as _length, cd as _literal, ce as _lowercase, cf as _lt, cg as _lte, ch as _map, ci as _maxLength, cj as _maxSize, ck as _mime, cl as _minLength, cm as _minSize, cn as _multipleOf, co as _nan, cp as _nanoid, cq as _nativeEnum, cr as _negative, cs as _never, ct as _nonnegative, cu as _nonoptional, cv as _nonpositive, cw as _normalize, cx as _null, cy as _nullable, cz as _number, cA as _optional, cB as _overwrite, cC as _parse, cD as _parseAsync, cE as _pipe, cF as _positive, cG as _promise, cH as _property, cI as _readonly, cJ as _record, cK as _refine, cL as _regex, cM as _safeDecode, cN as _safeDecodeAsync, cO as _safeEncode, cP as _safeEncodeAsync, cQ as _safeParse, cR as _safeParseAsync, cS as _set, cT as _size, cU as _startsWith, cV as _string, cW as _stringFormat, cX as _stringbool, cY as _success, cZ as _superRefine, c_ as _symbol, c$ as _templateLiteral, d0 as _toLowerCase, d1 as _toUpperCase, d2 as _transform, d3 as _trim, d4 as _tuple, d5 as _uint32, d6 as _uint64, d7 as _ulid, d8 as _undefined, d9 as _union, da as _unknown, db as _uppercase, dc as _url, dd as _uuid, de as _uuidv4, df as _uuidv6, dg as _uuidv7, dh as _void, di as _xid, dj as clone, dk as config, dl as decode, dm as decodeAsync, dn as encode, dp as encodeAsync, dq as flattenError, dr as formatError, ds as globalConfig, dt as globalRegistry, du as isValidBase64, dv as isValidBase64URL, dw as isValidJWT, dx as parse, dy as parseAsync, dz as prettifyError, dA as regexes, dB as registry, dC as safeDecode, dD as safeDecodeAsync, dE as safeEncode, dF as safeEncodeAsync, dG as safeParse, dH as safeParseAsync, dI as toDotPath, t as toJSONSchema, dJ as treeifyError, dK as util, dL as version, dM as ZodAny, x as ZodArray, dN as ZodBase64, dO as ZodBase64URL, dP as ZodBigInt, dQ as ZodBigIntFormat, dR as ZodBoolean, dS as ZodCIDRv4, dT as ZodCIDRv6, dU as ZodCUID, dV as ZodCUID2, dW as ZodCatch, dX as ZodCodec, dY as ZodCustom, dZ as ZodCustomStringFormat, E as ZodDate, F as ZodDefault, d_ as ZodDiscriminatedUnion, d$ as ZodE164, e0 as ZodEmail, e1 as ZodEmoji, e2 as ZodEnum, e3 as ZodError, e4 as ZodFile, e5 as ZodFunction, e6 as ZodGUID, e7 as ZodIPv4, e8 as ZodIPv6, e9 as ZodISODate, ea as ZodISODateTime, eb as ZodISODuration, ec as ZodISOTime, ed as ZodIntersection, ee as ZodJWT, ef as ZodKSUID, eg as ZodLazy, eh as ZodLiteral, ei as ZodMap, ej as ZodNaN, ek as ZodNanoID, G as ZodNever, el as ZodNonOptional, C as ZodNull, em as ZodNullable, Z as ZodNumber, en as ZodNumberFormat, z as ZodObject, B as ZodOptional, eo as ZodPipe, ep as ZodPrefault, eq as ZodPromise, er as ZodReadonly, es as ZodRealError, A as ZodRecord, et as ZodSet, v as ZodString, eu as ZodStringFormat, ev as ZodSuccess, ew as ZodSymbol, ex as ZodTemplateLiteral, ey as ZodTransform, ez as ZodTuple, eA as ZodType, eB as ZodULID, eC as ZodURL, eD as ZodUUID, eE as ZodUndefined, D as ZodUnion, I as ZodUnknown, eF as ZodVoid, eG as ZodXID, eH as _ZodString, eI as _default$1, eJ as _function, a as any, g as array, p as base64, eK as base64url, eL as bigint, f as boolean, eM as _catch$1, eN as check, eO as cidrv4, eP as cidrv6, eQ as codec, eR as coerce, eS as cuid, eT as cuid2, d as custom, eU as date, eV as decode$1, eW as decodeAsync$1, j as discriminatedUnion, eX as e164, eY as email, eZ as emoji, e_ as encode$1, e$ as encodeAsync$1, _ as _enum$1, f0 as file, f1 as float32, f2 as float64, f3 as guid, f4 as hash, f5 as hex, f6 as hostname, f7 as httpUrl, c as _instanceof, f8 as int, f9 as int32, fa as int64, y as intersection, fb as ipv4, fc as ipv6, fd as iso, fe as json, ff as jwt, fg as keyof, fh as ksuid, l as lazy, h as literal, k as looseObject, fi as map, fj as nan, fk as nanoid, fl as nativeEnum, q as never, fm as nonoptional, e as _null$1, fn as nullable, fo as nullish, n as number, o as object, m as optional, fp as parse$1, fq as parseAsync$1, fr as partialRecord, fs as pipe, ft as prefault, fu as preprocess, fv as promise, fw as readonly, r as record, fx as refine, fy as safeDecode$1, fz as safeDecodeAsync$1, fA as safeEncode$1, fB as safeEncodeAsync$1, fC as safeParse$1, b as safeParseAsync$1, fD as set, H as strictObject, s as string, fE as stringFormat, fF as stringbool, fG as success, fH as superRefine, fI as symbol, fJ as templateLiteral, fK as transform, w as tuple, fL as uint32, fM as uint64, fN as ulid, fO as _undefined$1, u as union, i as unknown, fP as url, fQ as uuid, fR as uuidv4, fS as uuidv6, fT as uuidv7, fU as _void$1, fV as xid } from './coerce.mjs';

const error$I = () => {
    const Sizable = {
        string: { unit: "حرف", verb: "أن يحوي" },
        file: { unit: "بايت", verb: "أن يحوي" },
        array: { unit: "عنصر", verb: "أن يحوي" },
        set: { unit: "عنصر", verb: "أن يحوي" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "مدخل",
        email: "بريد إلكتروني",
        url: "رابط",
        emoji: "إيموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاريخ ووقت بمعيار ISO",
        date: "تاريخ بمعيار ISO",
        time: "وقت بمعيار ISO",
        duration: "مدة بمعيار ISO",
        ipv4: "عنوان IPv4",
        ipv6: "عنوان IPv6",
        cidrv4: "مدى عناوين بصيغة IPv4",
        cidrv6: "مدى عناوين بصيغة IPv6",
        base64: "نَص بترميز base64-encoded",
        base64url: "نَص بترميز base64url-encoded",
        json_string: "نَص على هيئة JSON",
        e164: "رقم هاتف بمعيار E.164",
        jwt: "JWT",
        template_literal: "مدخل",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `مدخلات غير مقبولة: يفترض إدخال ${issue.expected}، ولكن تم إدخال ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `مدخلات غير مقبولة: يفترض إدخال ${stringifyPrimitive(issue.values[0])}`;
                return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return ` أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
                return `أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `نَص غير مقبول: يجب أن يبدأ بـ "${issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} غير مقبول`;
            }
            case "not_multiple_of":
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue.divisor}`;
            case "unrecognized_keys":
                return `معرف${issue.keys.length > 1 ? "ات" : ""} غريب${issue.keys.length > 1 ? "ة" : ""}: ${joinValues(issue.keys, "، ")}`;
            case "invalid_key":
                return `معرف غير مقبول في ${issue.origin}`;
            case "invalid_union":
                return "مدخل غير مقبول";
            case "invalid_element":
                return `مدخل غير مقبول في ${issue.origin}`;
            default:
                return "مدخل غير مقبول";
        }
    };
};
function ar () {
    return {
        localeError: error$I(),
    };
}

const error$H = () => {
    const Sizable = {
        string: { unit: "simvol", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "element", verb: "olmalıdır" },
        set: { unit: "element", verb: "olmalıdır" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Yanlış dəyər: gözlənilən ${issue.expected}, daxil olan ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Yanlış dəyər: gözlənilən ${stringifyPrimitive(issue.values[0])}`;
                return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
                return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
                if (_issue.format === "ends_with")
                    return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
                if (_issue.format === "includes")
                    return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
                if (_issue.format === "regex")
                    return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
                return `Yanlış ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Yanlış ədəd: ${issue.divisor} ilə bölünə bilən olmalıdır`;
            case "unrecognized_keys":
                return `Tanınmayan açar${issue.keys.length > 1 ? "lar" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} daxilində yanlış açar`;
            case "invalid_union":
                return "Yanlış dəyər";
            case "invalid_element":
                return `${issue.origin} daxilində yanlış dəyər`;
            default:
                return `Yanlış dəyər`;
        }
    };
};
function az () {
    return {
        localeError: error$H(),
    };
}

function getBelarusianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error$G = () => {
    const Sizable = {
        string: {
            unit: {
                one: "сімвал",
                few: "сімвалы",
                many: "сімвалаў",
            },
            verb: "мець",
        },
        array: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў",
            },
            verb: "мець",
        },
        set: {
            unit: {
                one: "элемент",
                few: "элементы",
                many: "элементаў",
            },
            verb: "мець",
        },
        file: {
            unit: {
                one: "байт",
                few: "байты",
                many: "байтаў",
            },
            verb: "мець",
        },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "лік";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "масіў";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "увод",
        email: "email адрас",
        url: "URL",
        emoji: "эмодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата і час",
        date: "ISO дата",
        time: "ISO час",
        duration: "ISO працягласць",
        ipv4: "IPv4 адрас",
        ipv6: "IPv6 адрас",
        cidrv4: "IPv4 дыяпазон",
        cidrv6: "IPv6 дыяпазон",
        base64: "радок у фармаце base64",
        base64url: "радок у фармаце base64url",
        json_string: "JSON радок",
        e164: "нумар E.164",
        jwt: "JWT",
        template_literal: "увод",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Няправільны ўвод: чакаўся ${issue.expected}, атрымана ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Няправільны ўвод: чакалася ${stringifyPrimitive(issue.values[0])}`;
                return `Няправільны варыянт: чакаўся адзін з ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const maxValue = Number(issue.maximum);
                    const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue.maximum.toString()} ${unit}`;
                }
                return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна быць ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const minValue = Number(issue.minimum);
                    const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Занадта малы: чакалася, што ${issue.origin} павінна ${sizing.verb} ${adj}${issue.minimum.toString()} ${unit}`;
                }
                return `Занадта малы: чакалася, што ${issue.origin} павінна быць ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
                return `Няправільны ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Няправільны лік: павінен быць кратным ${issue.divisor}`;
            case "unrecognized_keys":
                return `Нераспазнаны ${issue.keys.length > 1 ? "ключы" : "ключ"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Няправільны ключ у ${issue.origin}`;
            case "invalid_union":
                return "Няправільны ўвод";
            case "invalid_element":
                return `Няправільнае значэнне ў ${issue.origin}`;
            default:
                return `Няправільны ўвод`;
        }
    };
};
function be () {
    return {
        localeError: error$G(),
    };
}

const parsedType$6 = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "число";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "масив";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
const error$F = () => {
    const Sizable = {
        string: { unit: "символа", verb: "да съдържа" },
        file: { unit: "байта", verb: "да съдържа" },
        array: { unit: "елемента", verb: "да съдържа" },
        set: { unit: "елемента", verb: "да съдържа" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "вход",
        email: "имейл адрес",
        url: "URL",
        emoji: "емоджи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO време",
        date: "ISO дата",
        time: "ISO време",
        duration: "ISO продължителност",
        ipv4: "IPv4 адрес",
        ipv6: "IPv6 адрес",
        cidrv4: "IPv4 диапазон",
        cidrv6: "IPv6 диапазон",
        base64: "base64-кодиран низ",
        base64url: "base64url-кодиран низ",
        json_string: "JSON низ",
        e164: "E.164 номер",
        jwt: "JWT",
        template_literal: "вход",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Невалиден вход: очакван ${issue.expected}, получен ${parsedType$6(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Невалиден вход: очакван ${stringifyPrimitive(issue.values[0])}`;
                return `Невалидна опция: очаквано едно от ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Твърде голямо: очаква се ${issue.origin ?? "стойност"} да съдържа ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елемента"}`;
                return `Твърде голямо: очаква се ${issue.origin ?? "стойност"} да бъде ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Твърде малко: очаква се ${issue.origin} да съдържа ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Твърде малко: очаква се ${issue.origin} да бъде ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Невалиден низ: трябва да започва с "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Невалиден низ: трябва да завършва с "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Невалиден низ: трябва да включва "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Невалиден низ: трябва да съвпада с ${_issue.pattern}`;
                let invalid_adj = "Невалиден";
                if (_issue.format === "emoji")
                    invalid_adj = "Невалидно";
                if (_issue.format === "datetime")
                    invalid_adj = "Невалидно";
                if (_issue.format === "date")
                    invalid_adj = "Невалидна";
                if (_issue.format === "time")
                    invalid_adj = "Невалидно";
                if (_issue.format === "duration")
                    invalid_adj = "Невалидна";
                return `${invalid_adj} ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Невалидно число: трябва да бъде кратно на ${issue.divisor}`;
            case "unrecognized_keys":
                return `Неразпознат${issue.keys.length > 1 ? "и" : ""} ключ${issue.keys.length > 1 ? "ове" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Невалиден ключ в ${issue.origin}`;
            case "invalid_union":
                return "Невалиден вход";
            case "invalid_element":
                return `Невалидна стойност в ${issue.origin}`;
            default:
                return `Невалиден вход`;
        }
    };
};
function bg () {
    return {
        localeError: error$F(),
    };
}

const error$E = () => {
    const Sizable = {
        string: { unit: "caràcters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "adreça electrònica",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adreça IPv4",
        ipv6: "adreça IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${parsedType(issue.input)}`;
            // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Valor invàlid: s'esperava ${stringifyPrimitive(issue.values[0])}`;
                return `Opció invàlida: s'esperava una de ${joinValues(issue.values, " o ")}`;
            case "too_big": {
                const adj = issue.inclusive ? "com a màxim" : "menys de";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} contingués ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} fos ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "com a mínim" : "més de";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Massa petit: s'esperava que ${issue.origin} contingués ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Massa petit: s'esperava que ${issue.origin} fos ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Format invàlid: ha d'incloure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
                return `Format invàlid per a ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Número invàlid: ha de ser múltiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clau${issue.keys.length > 1 ? "s" : ""} no reconeguda${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clau invàlida a ${issue.origin}`;
            case "invalid_union":
                return "Entrada invàlida"; // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
            case "invalid_element":
                return `Element invàlid a ${issue.origin}`;
            default:
                return `Entrada invàlida`;
        }
    };
};
function ca () {
    return {
        localeError: error$E(),
    };
}

const error$D = () => {
    const Sizable = {
        string: { unit: "znaků", verb: "mít" },
        file: { unit: "bajtů", verb: "mít" },
        array: { unit: "prvků", verb: "mít" },
        set: { unit: "prvků", verb: "mít" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "číslo";
            }
            case "string": {
                return "řetězec";
            }
            case "boolean": {
                return "boolean";
            }
            case "bigint": {
                return "bigint";
            }
            case "function": {
                return "funkce";
            }
            case "symbol": {
                return "symbol";
            }
            case "undefined": {
                return "undefined";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "pole";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "regulární výraz",
        email: "e-mailová adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a čas ve formátu ISO",
        date: "datum ve formátu ISO",
        time: "čas ve formátu ISO",
        duration: "doba trvání ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "řetězec zakódovaný ve formátu base64",
        base64url: "řetězec zakódovaný ve formátu base64url",
        json_string: "řetězec ve formátu JSON",
        e164: "číslo E.164",
        jwt: "JWT",
        template_literal: "vstup",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Neplatný vstup: očekáváno ${issue.expected}, obdrženo ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Neplatný vstup: očekáváno ${stringifyPrimitive(issue.values[0])}`;
                return `Neplatná možnost: očekávána jedna z hodnot ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.maximum.toString()} ${sizing.unit ?? "prvků"}`;
                }
                return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.minimum.toString()} ${sizing.unit ?? "prvků"}`;
                }
                return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
                return `Neplatný formát ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Neplatné číslo: musí být násobkem ${issue.divisor}`;
            case "unrecognized_keys":
                return `Neznámé klíče: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Neplatný klíč v ${issue.origin}`;
            case "invalid_union":
                return "Neplatný vstup";
            case "invalid_element":
                return `Neplatná hodnota v ${issue.origin}`;
            default:
                return `Neplatný vstup`;
        }
    };
};
function cs () {
    return {
        localeError: error$D(),
    };
}

const error$C = () => {
    const Sizable = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" },
    };
    const TypeNames = {
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "sæt",
        file: "fil",
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    function getTypeName(type) {
        return TypeNames[type] ?? type;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "tal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "liste";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
                return "objekt";
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-mailadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslæt",
        date: "ISO-dato",
        time: "ISO-klokkeslæt",
        duration: "ISO-varighed",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ugyldigt input: forventede ${getTypeName(issue.expected)}, fik ${getTypeName(parsedType(issue.input))}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ugyldig værdi: forventede ${stringifyPrimitive(issue.values[0])}`;
                return `Ugyldigt valg: forventede en af følgende ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                const origin = getTypeName(issue.origin);
                if (sizing)
                    return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
                return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                const origin = getTypeName(issue.origin);
                if (sizing) {
                    return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `For lille: forventede ${origin} havde ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ugyldig streng: skal matche mønsteret ${_issue.pattern}`;
                return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ugyldigt tal: skal være deleligt med ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøgle i ${issue.origin}`;
            case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
                return `Ugyldig værdi i ${issue.origin}`;
            default:
                return `Ugyldigt input`;
        }
    };
};
function da () {
    return {
        localeError: error$C(),
    };
}

const error$B = () => {
    const Sizable = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "Zahl";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "Array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ungültige Eingabe: erwartet ${issue.expected}, erhalten ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ungültige Eingabe: erwartet ${stringifyPrimitive(issue.values[0])}`;
                return `Ungültige Option: erwartet eine von ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
                return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ist`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} hat`;
                }
                return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ist`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
                if (_issue.format === "ends_with")
                    return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
                if (_issue.format === "includes")
                    return `Ungültiger String: muss "${_issue.includes}" enthalten`;
                if (_issue.format === "regex")
                    return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
                return `Ungültig: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ungültige Zahl: muss ein Vielfaches von ${issue.divisor} sein`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ungültiger Schlüssel in ${issue.origin}`;
            case "invalid_union":
                return "Ungültige Eingabe";
            case "invalid_element":
                return `Ungültiger Wert in ${issue.origin}`;
            default:
                return `Ungültige Eingabe`;
        }
    };
};
function de () {
    return {
        localeError: error$B(),
    };
}

const parsedType$5 = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
const error$A = () => {
    const Sizable = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Invalid input: expected ${issue.expected}, received ${parsedType$5(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
                return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Invalid string: must start with "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Invalid string: must end with "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Invalid string: must include "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Invalid string: must match pattern ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${issue.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${issue.origin}`;
            case "invalid_union":
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${issue.origin}`;
            default:
                return `Invalid input`;
        }
    };
};
function en () {
    return {
        localeError: error$A(),
    };
}

const parsedType$4 = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "nombro";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "tabelo";
            }
            if (data === null) {
                return "senvalora";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
const error$z = () => {
    const Sizable = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emoĝio",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-daŭro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Nevalida enigo: atendiĝis ${issue.expected}, riceviĝis ${parsedType$4(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Nevalida enigo: atendiĝis ${stringifyPrimitive(issue.values[0])}`;
                return `Nevalida opcio: atendiĝis unu el ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
                return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Tro malgranda: atendiĝis ke ${issue.origin} havu ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Tro malgranda: atendiĝis ke ${issue.origin} estu ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
                return `Nevalida ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Nekonata${issue.keys.length > 1 ? "j" : ""} ŝlosilo${issue.keys.length > 1 ? "j" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Nevalida ŝlosilo en ${issue.origin}`;
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return `Nevalida valoro en ${issue.origin}`;
            default:
                return `Nevalida enigo`;
        }
    };
};
function eo () {
    return {
        localeError: error$z(),
    };
}

const error$y = () => {
    const Sizable = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" },
    };
    const TypeNames = {
        string: "texto",
        number: "número",
        boolean: "booleano",
        array: "arreglo",
        object: "objeto",
        set: "conjunto",
        file: "archivo",
        date: "fecha",
        bigint: "número grande",
        symbol: "símbolo",
        undefined: "indefinido",
        null: "nulo",
        function: "función",
        map: "mapa",
        record: "registro",
        tuple: "tupla",
        enum: "enumeración",
        union: "unión",
        literal: "literal",
        promise: "promesa",
        void: "vacío",
        never: "nunca",
        unknown: "desconocido",
        any: "cualquiera",
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    function getTypeName(type) {
        return TypeNames[type] ?? type;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype) {
                    return data.constructor.name;
                }
                return "object";
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "dirección de correo electrónico",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duración ISO",
        ipv4: "dirección IPv4",
        ipv6: "dirección IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrada inválida: se esperaba ${getTypeName(issue.expected)}, recibido ${getTypeName(parsedType(issue.input))}`;
            // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrada inválida: se esperaba ${stringifyPrimitive(issue.values[0])}`;
                return `Opción inválida: se esperaba una de ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                const origin = getTypeName(issue.origin);
                if (sizing)
                    return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
                return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                const origin = getTypeName(issue.origin);
                if (sizing) {
                    return `Demasiado pequeño: se esperaba que ${origin} tuviera ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Demasiado pequeño: se esperaba que ${origin} fuera ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Cadena inválida: debe incluir "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
                return `Inválido ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Número inválido: debe ser múltiplo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Llave${issue.keys.length > 1 ? "s" : ""} desconocida${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Llave inválida en ${getTypeName(issue.origin)}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido en ${getTypeName(issue.origin)}`;
            default:
                return `Entrada inválida`;
        }
    };
};
function es () {
    return {
        localeError: error$y(),
    };
}

const error$x = () => {
    const Sizable = {
        string: { unit: "کاراکتر", verb: "داشته باشد" },
        file: { unit: "بایت", verb: "داشته باشد" },
        array: { unit: "آیتم", verb: "داشته باشد" },
        set: { unit: "آیتم", verb: "داشته باشد" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "عدد";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "آرایه";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودی",
        email: "آدرس ایمیل",
        url: "URL",
        emoji: "ایموجی",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "تاریخ و زمان ایزو",
        date: "تاریخ ایزو",
        time: "زمان ایزو",
        duration: "مدت زمان ایزو",
        ipv4: "IPv4 آدرس",
        ipv6: "IPv6 آدرس",
        cidrv4: "IPv4 دامنه",
        cidrv6: "IPv6 دامنه",
        base64: "base64-encoded رشته",
        base64url: "base64url-encoded رشته",
        json_string: "JSON رشته",
        e164: "E.164 عدد",
        jwt: "JWT",
        template_literal: "ورودی",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ورودی نامعتبر: می‌بایست ${issue.expected} می‌بود، ${parsedType(issue.input)} دریافت شد`;
            case "invalid_value":
                if (issue.values.length === 1) {
                    return `ورودی نامعتبر: می‌بایست ${stringifyPrimitive(issue.values[0])} می‌بود`;
                }
                return `گزینه نامعتبر: می‌بایست یکی از ${joinValues(issue.values, "|")} می‌بود`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
                }
                return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} باشد`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} باشد`;
                }
                return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} باشد`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
                }
                if (_issue.format === "ends_with") {
                    return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
                }
                if (_issue.format === "includes") {
                    return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
                }
                if (_issue.format === "regex") {
                    return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
                }
                return `${Nouns[_issue.format] ?? issue.format} نامعتبر`;
            }
            case "not_multiple_of":
                return `عدد نامعتبر: باید مضرب ${issue.divisor} باشد`;
            case "unrecognized_keys":
                return `کلید${issue.keys.length > 1 ? "های" : ""} ناشناس: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `کلید ناشناس در ${issue.origin}`;
            case "invalid_union":
                return `ورودی نامعتبر`;
            case "invalid_element":
                return `مقدار نامعتبر در ${issue.origin}`;
            default:
                return `ورودی نامعتبر`;
        }
    };
};
function fa () {
    return {
        localeError: error$x(),
    };
}

const error$w = () => {
    const Sizable = {
        string: { unit: "merkkiä", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "päivämäärän" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "säännöllinen lauseke",
        email: "sähköpostiosoite",
        url: "URL-osoite",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-aikaleima",
        date: "ISO-päivämäärä",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Virheellinen tyyppi: odotettiin ${issue.expected}, oli ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Virheellinen syöte: täytyy olla ${stringifyPrimitive(issue.values[0])}`;
                return `Virheellinen valinta: täytyy olla yksi seuraavista: ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue.maximum.toString()} ${sizing.unit}`.trim();
                }
                return `Liian suuri: arvon täytyy olla ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue.minimum.toString()} ${sizing.unit}`.trim();
                }
                return `Liian pieni: arvon täytyy olla ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
                if (_issue.format === "regex") {
                    return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
                }
                return `Virheellinen ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Virheellinen luku: täytyy olla luvun ${issue.divisor} monikerta`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return "Virheellinen avain tietueessa";
            case "invalid_union":
                return "Virheellinen unioni";
            case "invalid_element":
                return "Virheellinen arvo joukossa";
            default:
                return `Virheellinen syöte`;
        }
    };
};
function fi () {
    return {
        localeError: error$w(),
    };
}

const error$v = () => {
    const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "nombre";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tableau";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date et heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrée invalide : ${issue.expected} attendu, ${parsedType(issue.input)} reçu`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrée invalide : ${stringifyPrimitive(issue.values[0])} attendu`;
                return `Option invalide : une valeur parmi ${joinValues(issue.values, "|")} attendue`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Trop grand : ${issue.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
                return `Trop grand : ${issue.origin ?? "valeur"} doit être ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Trop petit : ${issue.origin} doit ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Trop petit : ${issue.origin} doit être ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chaîne invalide : doit inclure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${issue.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${issue.origin}`;
            default:
                return `Entrée invalide`;
        }
    };
};
function fr () {
    return {
        localeError: error$v(),
    };
}

const error$u = () => {
    const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrée",
        email: "adresse courriel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrée invalide : attendu ${issue.expected}, reçu ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrée invalide : attendu ${stringifyPrimitive(issue.values[0])}`;
                return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "≤" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Trop grand : attendu que ${issue.origin ?? "la valeur"} ait ${adj}${issue.maximum.toString()} ${sizing.unit}`;
                return `Trop grand : attendu que ${issue.origin ?? "la valeur"} soit ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "≥" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Trop petit : attendu que ${issue.origin} ait ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Trop petit : attendu que ${issue.origin} soit ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chaîne invalide : doit inclure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${issue.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${issue.origin}`;
            default:
                return `Entrée invalide`;
        }
    };
};
function frCA () {
    return {
        localeError: error$u(),
    };
}

const error$t = () => {
    const Sizable = {
        string: { unit: "אותיות", verb: "לכלול" },
        file: { unit: "בייטים", verb: "לכלול" },
        array: { unit: "פריטים", verb: "לכלול" },
        set: { unit: "פריטים", verb: "לכלול" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "קלט",
        email: "כתובת אימייל",
        url: "כתובת רשת",
        emoji: "אימוג'י",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "תאריך וזמן ISO",
        date: "תאריך ISO",
        time: "זמן ISO",
        duration: "משך זמן ISO",
        ipv4: "כתובת IPv4",
        ipv6: "כתובת IPv6",
        cidrv4: "טווח IPv4",
        cidrv6: "טווח IPv6",
        base64: "מחרוזת בבסיס 64",
        base64url: "מחרוזת בבסיס 64 לכתובות רשת",
        json_string: "מחרוזת JSON",
        e164: "מספר E.164",
        jwt: "JWT",
        template_literal: "קלט",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `קלט לא תקין: צריך ${issue.expected}, התקבל ${parsedType(issue.input)}`;
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `קלט לא תקין: צריך ${stringifyPrimitive(issue.values[0])}`;
                return `קלט לא תקין: צריך אחת מהאפשרויות  ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
                return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `מחרוזת לא תקינה: חייבת להתחיל ב"${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `מחרוזת לא תקינה: חייבת להסתיים ב "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `מחרוזת לא תקינה: חייבת לכלול "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} לא תקין`;
            }
            case "not_multiple_of":
                return `מספר לא תקין: חייב להיות מכפלה של ${issue.divisor}`;
            case "unrecognized_keys":
                return `מפתח${issue.keys.length > 1 ? "ות" : ""} לא מזוה${issue.keys.length > 1 ? "ים" : "ה"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `מפתח לא תקין ב${issue.origin}`;
            case "invalid_union":
                return "קלט לא תקין";
            case "invalid_element":
                return `ערך לא תקין ב${issue.origin}`;
            default:
                return `קלט לא תקין`;
        }
    };
};
function he () {
    return {
        localeError: error$t(),
    };
}

const error$s = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "szám";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tömb";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "bemenet",
        email: "email cím",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO időbélyeg",
        date: "ISO dátum",
        time: "ISO idő",
        duration: "ISO időintervallum",
        ipv4: "IPv4 cím",
        ipv6: "IPv6 cím",
        cidrv4: "IPv4 tartomány",
        cidrv6: "IPv6 tartomány",
        base64: "base64-kódolt string",
        base64url: "base64url-kódolt string",
        json_string: "JSON string",
        e164: "E.164 szám",
        jwt: "JWT",
        template_literal: "bemenet",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Érvénytelen bemenet: a várt érték ${issue.expected}, a kapott érték ${parsedType(issue.input)}`;
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Érvénytelen bemenet: a várt érték ${stringifyPrimitive(issue.values[0])}`;
                return `Érvénytelen opció: valamelyik érték várt ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Túl nagy: ${issue.origin ?? "érték"} mérete túl nagy ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elem"}`;
                return `Túl nagy: a bemeneti érték ${issue.origin ?? "érték"} túl nagy: ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Túl kicsi: a bemeneti érték ${issue.origin} mérete túl kicsi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Túl kicsi: a bemeneti érték ${issue.origin} túl kicsi ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
                if (_issue.format === "ends_with")
                    return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
                if (_issue.format === "includes")
                    return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
                if (_issue.format === "regex")
                    return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
                return `Érvénytelen ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Érvénytelen szám: ${issue.divisor} többszörösének kell lennie`;
            case "unrecognized_keys":
                return `Ismeretlen kulcs${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Érvénytelen kulcs ${issue.origin}`;
            case "invalid_union":
                return "Érvénytelen bemenet";
            case "invalid_element":
                return `Érvénytelen érték: ${issue.origin}`;
            default:
                return `Érvénytelen bemenet`;
        }
    };
};
function hu () {
    return {
        localeError: error$s(),
    };
}

const error$r = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input tidak valid: diharapkan ${issue.expected}, diterima ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input tidak valid: diharapkan ${stringifyPrimitive(issue.values[0])}`;
                return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Terlalu besar: diharapkan ${issue.origin ?? "value"} memiliki ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
                return `Terlalu besar: diharapkan ${issue.origin ?? "value"} menjadi ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Terlalu kecil: diharapkan ${issue.origin} memiliki ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Terlalu kecil: diharapkan ${issue.origin} menjadi ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `String tidak valid: harus menyertakan "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} tidak valid`;
            }
            case "not_multiple_of":
                return `Angka tidak valid: harus kelipatan dari ${issue.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali ${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak valid di ${issue.origin}`;
            case "invalid_union":
                return "Input tidak valid";
            case "invalid_element":
                return `Nilai tidak valid di ${issue.origin}`;
            default:
                return `Input tidak valid`;
        }
    };
};
function id () {
    return {
        localeError: error$r(),
    };
}

const parsedType$3 = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "númer";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "fylki";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
const error$q = () => {
    const Sizable = {
        string: { unit: "stafi", verb: "að hafa" },
        file: { unit: "bæti", verb: "að hafa" },
        array: { unit: "hluti", verb: "að hafa" },
        set: { unit: "hluti", verb: "að hafa" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "gildi",
        email: "netfang",
        url: "vefslóð",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dagsetning og tími",
        date: "ISO dagsetning",
        time: "ISO tími",
        duration: "ISO tímalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 tölugildi",
        jwt: "JWT",
        template_literal: "gildi",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Rangt gildi: Þú slóst inn ${parsedType$3(issue.input)} þar sem á að vera ${issue.expected}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Rangt gildi: gert ráð fyrir ${stringifyPrimitive(issue.values[0])}`;
                return `Ógilt val: má vera eitt af eftirfarandi ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Of stórt: gert er ráð fyrir að ${issue.origin ?? "gildi"} hafi ${adj}${issue.maximum.toString()} ${sizing.unit ?? "hluti"}`;
                return `Of stórt: gert er ráð fyrir að ${issue.origin ?? "gildi"} sé ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Of lítið: gert er ráð fyrir að ${issue.origin} hafi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Of lítið: gert er ráð fyrir að ${issue.origin} sé ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ógildur strengur: verður að byrja á "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Ógildur strengur: verður að enda á "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ógildur strengur: verður að innihalda "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ógildur strengur: verður að fylgja mynstri ${_issue.pattern}`;
                return `Rangt ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Röng tala: verður að vera margfeldi af ${issue.divisor}`;
            case "unrecognized_keys":
                return `Óþekkt ${issue.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Rangur lykill í ${issue.origin}`;
            case "invalid_union":
                return "Rangt gildi";
            case "invalid_element":
                return `Rangt gildi í ${issue.origin}`;
            default:
                return `Rangt gildi`;
        }
    };
};
function is () {
    return {
        localeError: error$q(),
    };
}

const error$p = () => {
    const Sizable = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "numero";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "vettore";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "indirizzo email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input non valido: atteso ${issue.expected}, ricevuto ${parsedType(issue.input)}`;
            // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input non valido: atteso ${stringifyPrimitive(issue.values[0])}`;
                return `Opzione non valida: atteso uno tra ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Troppo grande: ${issue.origin ?? "valore"} deve avere ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementi"}`;
                return `Troppo grande: ${issue.origin ?? "valore"} deve essere ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Troppo piccolo: ${issue.origin} deve avere ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Troppo piccolo: ${issue.origin} deve essere ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Stringa non valida: deve includere "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${issue.divisor}`;
            case "unrecognized_keys":
                return `Chiav${issue.keys.length > 1 ? "i" : "e"} non riconosciut${issue.keys.length > 1 ? "e" : "a"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Chiave non valida in ${issue.origin}`;
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return `Valore non valido in ${issue.origin}`;
            default:
                return `Input non valido`;
        }
    };
};
function it () {
    return {
        localeError: error$p(),
    };
}

const error$o = () => {
    const Sizable = {
        string: { unit: "文字", verb: "である" },
        file: { unit: "バイト", verb: "である" },
        array: { unit: "要素", verb: "である" },
        set: { unit: "要素", verb: "である" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "数値";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "配列";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "入力値",
        email: "メールアドレス",
        url: "URL",
        emoji: "絵文字",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日時",
        date: "ISO日付",
        time: "ISO時刻",
        duration: "ISO期間",
        ipv4: "IPv4アドレス",
        ipv6: "IPv6アドレス",
        cidrv4: "IPv4範囲",
        cidrv6: "IPv6範囲",
        base64: "base64エンコード文字列",
        base64url: "base64urlエンコード文字列",
        json_string: "JSON文字列",
        e164: "E.164番号",
        jwt: "JWT",
        template_literal: "入力値",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `無効な入力: ${issue.expected}が期待されましたが、${parsedType(issue.input)}が入力されました`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `無効な入力: ${stringifyPrimitive(issue.values[0])}が期待されました`;
                return `無効な選択: ${joinValues(issue.values, "、")}のいずれかである必要があります`;
            case "too_big": {
                const adj = issue.inclusive ? "以下である" : "より小さい";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
                return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${adj}必要があります`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "以上である" : "より大きい";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${sizing.unit}${adj}必要があります`;
                return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${adj}必要があります`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
                if (_issue.format === "ends_with")
                    return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
                if (_issue.format === "includes")
                    return `無効な文字列: "${_issue.includes}"を含む必要があります`;
                if (_issue.format === "regex")
                    return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
                return `無効な${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `無効な数値: ${issue.divisor}の倍数である必要があります`;
            case "unrecognized_keys":
                return `認識されていないキー${issue.keys.length > 1 ? "群" : ""}: ${joinValues(issue.keys, "、")}`;
            case "invalid_key":
                return `${issue.origin}内の無効なキー`;
            case "invalid_union":
                return "無効な入力";
            case "invalid_element":
                return `${issue.origin}内の無効な値`;
            default:
                return `無効な入力`;
        }
    };
};
function ja () {
    return {
        localeError: error$o(),
    };
}

const parsedType$2 = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "რიცხვი";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "მასივი";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    const typeMap = {
        string: "სტრინგი",
        boolean: "ბულეანი",
        undefined: "undefined",
        bigint: "bigint",
        symbol: "symbol",
        function: "ფუნქცია",
    };
    return typeMap[t] ?? t;
};
const error$n = () => {
    const Sizable = {
        string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
        file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
        array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
        set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "შეყვანა",
        email: "ელ-ფოსტის მისამართი",
        url: "URL",
        emoji: "ემოჯი",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "თარიღი-დრო",
        date: "თარიღი",
        time: "დრო",
        duration: "ხანგრძლივობა",
        ipv4: "IPv4 მისამართი",
        ipv6: "IPv6 მისამართი",
        cidrv4: "IPv4 დიაპაზონი",
        cidrv6: "IPv6 დიაპაზონი",
        base64: "base64-კოდირებული სტრინგი",
        base64url: "base64url-კოდირებული სტრინგი",
        json_string: "JSON სტრინგი",
        e164: "E.164 ნომერი",
        jwt: "JWT",
        template_literal: "შეყვანა",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `არასწორი შეყვანა: მოსალოდნელი ${issue.expected}, მიღებული ${parsedType$2(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `არასწორი შეყვანა: მოსალოდნელი ${stringifyPrimitive(issue.values[0])}`;
                return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${joinValues(issue.values, "|")}-დან`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `ზედმეტად დიდი: მოსალოდნელი ${issue.origin ?? "მნიშვნელობა"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit}`;
                return `ზედმეტად დიდი: მოსალოდნელი ${issue.origin ?? "მნიშვნელობა"} იყოს ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `ზედმეტად პატარა: მოსალოდნელი ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `ზედმეტად პატარა: მოსალოდნელი ${issue.origin} იყოს ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `არასწორი სტრინგი: უნდა იწყებოდეს "${_issue.prefix}"-ით`;
                }
                if (_issue.format === "ends_with")
                    return `არასწორი სტრინგი: უნდა მთავრდებოდეს "${_issue.suffix}"-ით`;
                if (_issue.format === "includes")
                    return `არასწორი სტრინგი: უნდა შეიცავდეს "${_issue.includes}"-ს`;
                if (_issue.format === "regex")
                    return `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${_issue.pattern}`;
                return `არასწორი ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `არასწორი რიცხვი: უნდა იყოს ${issue.divisor}-ის ჯერადი`;
            case "unrecognized_keys":
                return `უცნობი გასაღებ${issue.keys.length > 1 ? "ები" : "ი"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `არასწორი გასაღები ${issue.origin}-ში`;
            case "invalid_union":
                return "არასწორი შეყვანა";
            case "invalid_element":
                return `არასწორი მნიშვნელობა ${issue.origin}-ში`;
            default:
                return `არასწორი შეყვანა`;
        }
    };
};
function ka () {
    return {
        localeError: error$n(),
    };
}

const error$m = () => {
    const Sizable = {
        string: { unit: "តួអក្សរ", verb: "គួរមាន" },
        file: { unit: "បៃ", verb: "គួរមាន" },
        array: { unit: "ធាតុ", verb: "គួរមាន" },
        set: { unit: "ធាតុ", verb: "គួរមាន" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "អារេ (Array)";
                }
                if (data === null) {
                    return "គ្មានតម្លៃ (null)";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ទិន្នន័យបញ្ចូល",
        email: "អាសយដ្ឋានអ៊ីមែល",
        url: "URL",
        emoji: "សញ្ញាអារម្មណ៍",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
        date: "កាលបរិច្ឆេទ ISO",
        time: "ម៉ោង ISO",
        duration: "រយៈពេល ISO",
        ipv4: "អាសយដ្ឋាន IPv4",
        ipv6: "អាសយដ្ឋាន IPv6",
        cidrv4: "ដែនអាសយដ្ឋាន IPv4",
        cidrv6: "ដែនអាសយដ្ឋាន IPv6",
        base64: "ខ្សែអក្សរអ៊ិកូដ base64",
        base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
        json_string: "ខ្សែអក្សរ JSON",
        e164: "លេខ E.164",
        jwt: "JWT",
        template_literal: "ទិន្នន័យបញ្ចូល",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${issue.expected} ប៉ុន្តែទទួលបាន ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${stringifyPrimitive(issue.values[0])}`;
                return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
                return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
                return `មិនត្រឹមត្រូវ៖ ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue.divisor}`;
            case "unrecognized_keys":
                return `រកឃើញសោមិនស្គាល់៖ ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
            case "invalid_union":
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
            case "invalid_element":
                return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
            default:
                return `ទិន្នន័យមិនត្រឹមត្រូវ`;
        }
    };
};
function km () {
    return {
        localeError: error$m(),
    };
}

/** @deprecated Use `km` instead. */
function kh () {
    return km();
}

const error$l = () => {
    const Sizable = {
        string: { unit: "문자", verb: "to have" },
        file: { unit: "바이트", verb: "to have" },
        array: { unit: "개", verb: "to have" },
        set: { unit: "개", verb: "to have" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "입력",
        email: "이메일 주소",
        url: "URL",
        emoji: "이모지",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 날짜시간",
        date: "ISO 날짜",
        time: "ISO 시간",
        duration: "ISO 기간",
        ipv4: "IPv4 주소",
        ipv6: "IPv6 주소",
        cidrv4: "IPv4 범위",
        cidrv6: "IPv6 범위",
        base64: "base64 인코딩 문자열",
        base64url: "base64url 인코딩 문자열",
        json_string: "JSON 문자열",
        e164: "E.164 번호",
        jwt: "JWT",
        template_literal: "입력",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `잘못된 입력: 예상 타입은 ${issue.expected}, 받은 타입은 ${parsedType(issue.input)}입니다`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `잘못된 입력: 값은 ${stringifyPrimitive(issue.values[0])} 이어야 합니다`;
                return `잘못된 옵션: ${joinValues(issue.values, "또는 ")} 중 하나여야 합니다`;
            case "too_big": {
                const adj = issue.inclusive ? "이하" : "미만";
                const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
                const sizing = getSizing(issue.origin);
                const unit = sizing?.unit ?? "요소";
                if (sizing)
                    return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()}${unit} ${adj}${suffix}`;
                return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()} ${adj}${suffix}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "이상" : "초과";
                const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
                const sizing = getSizing(issue.origin);
                const unit = sizing?.unit ?? "요소";
                if (sizing) {
                    return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()}${unit} ${adj}${suffix}`;
                }
                return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()} ${adj}${suffix}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
                }
                if (_issue.format === "ends_with")
                    return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
                if (_issue.format === "includes")
                    return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
                if (_issue.format === "regex")
                    return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
                return `잘못된 ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `잘못된 숫자: ${issue.divisor}의 배수여야 합니다`;
            case "unrecognized_keys":
                return `인식할 수 없는 키: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `잘못된 키: ${issue.origin}`;
            case "invalid_union":
                return `잘못된 입력`;
            case "invalid_element":
                return `잘못된 값: ${issue.origin}`;
            default:
                return `잘못된 입력`;
        }
    };
};
function ko () {
    return {
        localeError: error$l(),
    };
}

const parsedType$1 = (data) => {
    const t = typeof data;
    return parsedTypeFromType(t, data);
};
const parsedTypeFromType = (t, data = undefined) => {
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "skaičius";
        }
        case "bigint": {
            return "sveikasis skaičius";
        }
        case "string": {
            return "eilutė";
        }
        case "boolean": {
            return "loginė reikšmė";
        }
        case "undefined":
        case "void": {
            return "neapibrėžta reikšmė";
        }
        case "function": {
            return "funkcija";
        }
        case "symbol": {
            return "simbolis";
        }
        case "object": {
            if (data === undefined)
                return "nežinomas objektas";
            if (data === null)
                return "nulinė reikšmė";
            if (Array.isArray(data))
                return "masyvas";
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
            return "objektas";
        }
        //Zod types below
        case "null": {
            return "nulinė reikšmė";
        }
    }
    return t;
};
const capitalizeFirstCharacter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number) {
    const abs = Math.abs(number);
    const last = abs % 10;
    const last2 = abs % 100;
    if ((last2 >= 11 && last2 <= 19) || last === 0)
        return "many";
    if (last === 1)
        return "one";
    return "few";
}
const error$k = () => {
    const Sizable = {
        string: {
            unit: {
                one: "simbolis",
                few: "simboliai",
                many: "simbolių",
            },
            verb: {
                smaller: {
                    inclusive: "turi būti ne ilgesnė kaip",
                    notInclusive: "turi būti trumpesnė kaip",
                },
                bigger: {
                    inclusive: "turi būti ne trumpesnė kaip",
                    notInclusive: "turi būti ilgesnė kaip",
                },
            },
        },
        file: {
            unit: {
                one: "baitas",
                few: "baitai",
                many: "baitų",
            },
            verb: {
                smaller: {
                    inclusive: "turi būti ne didesnis kaip",
                    notInclusive: "turi būti mažesnis kaip",
                },
                bigger: {
                    inclusive: "turi būti ne mažesnis kaip",
                    notInclusive: "turi būti didesnis kaip",
                },
            },
        },
        array: {
            unit: {
                one: "elementą",
                few: "elementus",
                many: "elementų",
            },
            verb: {
                smaller: {
                    inclusive: "turi turėti ne daugiau kaip",
                    notInclusive: "turi turėti mažiau kaip",
                },
                bigger: {
                    inclusive: "turi turėti ne mažiau kaip",
                    notInclusive: "turi turėti daugiau kaip",
                },
            },
        },
        set: {
            unit: {
                one: "elementą",
                few: "elementus",
                many: "elementų",
            },
            verb: {
                smaller: {
                    inclusive: "turi turėti ne daugiau kaip",
                    notInclusive: "turi turėti mažiau kaip",
                },
                bigger: {
                    inclusive: "turi turėti ne mažiau kaip",
                    notInclusive: "turi turėti daugiau kaip",
                },
            },
        },
    };
    function getSizing(origin, unitType, inclusive, targetShouldBe) {
        const result = Sizable[origin] ?? null;
        if (result === null)
            return result;
        return {
            unit: result.unit[unitType],
            verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"],
        };
    }
    const Nouns = {
        regex: "įvestis",
        email: "el. pašto adresas",
        url: "URL",
        emoji: "jaustukas",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO data ir laikas",
        date: "ISO data",
        time: "ISO laikas",
        duration: "ISO trukmė",
        ipv4: "IPv4 adresas",
        ipv6: "IPv6 adresas",
        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
        base64: "base64 užkoduota eilutė",
        base64url: "base64url užkoduota eilutė",
        json_string: "JSON eilutė",
        e164: "E.164 numeris",
        jwt: "JWT",
        template_literal: "įvestis",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Gautas tipas ${parsedType$1(issue.input)}, o tikėtasi - ${parsedTypeFromType(issue.expected)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Privalo būti ${stringifyPrimitive(issue.values[0])}`;
                return `Privalo būti vienas iš ${joinValues(issue.values, "|")} pasirinkimų`;
            case "too_big": {
                const origin = parsedTypeFromType(issue.origin);
                const sizing = getSizing(issue.origin, getUnitTypeFromNumber(Number(issue.maximum)), issue.inclusive ?? false, "smaller");
                if (sizing?.verb)
                    return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} ${sizing.verb} ${issue.maximum.toString()} ${sizing.unit ?? "elementų"}`;
                const adj = issue.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
                return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} turi būti ${adj} ${issue.maximum.toString()} ${sizing?.unit}`;
            }
            case "too_small": {
                const origin = parsedTypeFromType(issue.origin);
                const sizing = getSizing(issue.origin, getUnitTypeFromNumber(Number(issue.minimum)), issue.inclusive ?? false, "bigger");
                if (sizing?.verb)
                    return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} ${sizing.verb} ${issue.minimum.toString()} ${sizing.unit ?? "elementų"}`;
                const adj = issue.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
                return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} turi būti ${adj} ${issue.minimum.toString()} ${sizing?.unit}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Eilutė privalo prasidėti "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Eilutė privalo pasibaigti "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Eilutė privalo įtraukti "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Eilutė privalo atitikti ${_issue.pattern}`;
                return `Neteisingas ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Skaičius privalo būti ${issue.divisor} kartotinis.`;
            case "unrecognized_keys":
                return `Neatpažint${issue.keys.length > 1 ? "i" : "as"} rakt${issue.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return "Rastas klaidingas raktas";
            case "invalid_union":
                return "Klaidinga įvestis";
            case "invalid_element": {
                const origin = parsedTypeFromType(issue.origin);
                return `${capitalizeFirstCharacter(origin ?? issue.origin ?? "reikšmė")} turi klaidingą įvestį`;
            }
            default:
                return "Klaidinga įvestis";
        }
    };
};
function lt () {
    return {
        localeError: error$k(),
    };
}

const error$j = () => {
    const Sizable = {
        string: { unit: "знаци", verb: "да имаат" },
        file: { unit: "бајти", verb: "да имаат" },
        array: { unit: "ставки", verb: "да имаат" },
        set: { unit: "ставки", verb: "да имаат" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "број";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "низа";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "внес",
        email: "адреса на е-пошта",
        url: "URL",
        emoji: "емоџи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO датум и време",
        date: "ISO датум",
        time: "ISO време",
        duration: "ISO времетраење",
        ipv4: "IPv4 адреса",
        ipv6: "IPv6 адреса",
        cidrv4: "IPv4 опсег",
        cidrv6: "IPv6 опсег",
        base64: "base64-енкодирана низа",
        base64url: "base64url-енкодирана низа",
        json_string: "JSON низа",
        e164: "E.164 број",
        jwt: "JWT",
        template_literal: "внес",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Грешен внес: се очекува ${issue.expected}, примено ${parsedType(issue.input)}`;
            // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
                return `Грешана опција: се очекува една ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да има ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементи"}`;
                return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да биде ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Премногу мал: се очекува ${issue.origin} да има ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Премногу мал: се очекува ${issue.origin} да биде ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Грешен број: мора да биде делив со ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Грешен клуч во ${issue.origin}`;
            case "invalid_union":
                return "Грешен внес";
            case "invalid_element":
                return `Грешна вредност во ${issue.origin}`;
            default:
                return `Грешен внес`;
        }
    };
};
function mk () {
    return {
        localeError: error$j(),
    };
}

const error$i = () => {
    const Sizable = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "nombor";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input tidak sah: dijangka ${issue.expected}, diterima ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input tidak sah: dijangka ${stringifyPrimitive(issue.values[0])}`;
                return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
                return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} adalah ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Terlalu kecil: dijangka ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Terlalu kecil: dijangka ${issue.origin} adalah ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} tidak sah`;
            }
            case "not_multiple_of":
                return `Nombor tidak sah: perlu gandaan ${issue.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak sah dalam ${issue.origin}`;
            case "invalid_union":
                return "Input tidak sah";
            case "invalid_element":
                return `Nilai tidak sah dalam ${issue.origin}`;
            default:
                return `Input tidak sah`;
        }
    };
};
function ms () {
    return {
        localeError: error$i(),
    };
}

const error$h = () => {
    const Sizable = {
        string: { unit: "tekens" },
        file: { unit: "bytes" },
        array: { unit: "elementen" },
        set: { unit: "elementen" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "getal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "invoer",
        email: "emailadres",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ongeldige invoer: verwacht ${issue.expected}, ontving ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue.values[0])}`;
                return `Ongeldige optie: verwacht één van ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementen"} bevat`;
                return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} is`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} bevat`;
                }
                return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} is`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
                }
                if (_issue.format === "ends_with")
                    return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
                if (_issue.format === "includes")
                    return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
                if (_issue.format === "regex")
                    return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
                return `Ongeldig: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ongeldig getal: moet een veelvoud van ${issue.divisor} zijn`;
            case "unrecognized_keys":
                return `Onbekende key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ongeldige key in ${issue.origin}`;
            case "invalid_union":
                return "Ongeldige invoer";
            case "invalid_element":
                return `Ongeldige waarde in ${issue.origin}`;
            default:
                return `Ongeldige invoer`;
        }
    };
};
function nl () {
    return {
        localeError: error$h(),
    };
}

const error$g = () => {
    const Sizable = {
        string: { unit: "tegn", verb: "å ha" },
        file: { unit: "bytes", verb: "å ha" },
        array: { unit: "elementer", verb: "å inneholde" },
        set: { unit: "elementer", verb: "å inneholde" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "tall";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "liste";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ugyldig input: forventet ${issue.expected}, fikk ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ugyldig verdi: forventet ${stringifyPrimitive(issue.values[0])}`;
                return `Ugyldig valg: forventet en av ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
                return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ugyldig streng: må starte med "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ugyldig streng: må ende med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ugyldig streng: må inneholde "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
                return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ugyldig tall: må være et multiplum av ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøkkel i ${issue.origin}`;
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return `Ugyldig verdi i ${issue.origin}`;
            default:
                return `Ugyldig input`;
        }
    };
};
function no () {
    return {
        localeError: error$g(),
    };
}

const error$f = () => {
    const Sizable = {
        string: { unit: "harf", verb: "olmalıdır" },
        file: { unit: "bayt", verb: "olmalıdır" },
        array: { unit: "unsur", verb: "olmalıdır" },
        set: { unit: "unsur", verb: "olmalıdır" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "numara";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "saf";
                }
                if (data === null) {
                    return "gayb";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "giren",
        email: "epostagâh",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO hengâmı",
        date: "ISO tarihi",
        time: "ISO zamanı",
        duration: "ISO müddeti",
        ipv4: "IPv4 nişânı",
        ipv6: "IPv6 nişânı",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-şifreli metin",
        base64url: "base64url-şifreli metin",
        json_string: "JSON metin",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "giren",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Fâsit giren: umulan ${issue.expected}, alınan ${parsedType(issue.input)}`;
            // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Fâsit giren: umulan ${stringifyPrimitive(issue.values[0])}`;
                return `Fâsit tercih: mûteberler ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
                return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} olmalıydı.`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
                }
                return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} olmalıydı.`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
                if (_issue.format === "ends_with")
                    return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
                if (_issue.format === "includes")
                    return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
                if (_issue.format === "regex")
                    return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
                return `Fâsit ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Fâsit sayı: ${issue.divisor} katı olmalıydı.`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar ${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} için tanınmayan anahtar var.`;
            case "invalid_union":
                return "Giren tanınamadı.";
            case "invalid_element":
                return `${issue.origin} için tanınmayan kıymet var.`;
            default:
                return `Kıymet tanınamadı.`;
        }
    };
};
function ota () {
    return {
        localeError: error$f(),
    };
}

const error$e = () => {
    const Sizable = {
        string: { unit: "توکي", verb: "ولري" },
        file: { unit: "بایټس", verb: "ولري" },
        array: { unit: "توکي", verb: "ولري" },
        set: { unit: "توکي", verb: "ولري" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "عدد";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "ارې";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ورودي",
        email: "بریښنالیک",
        url: "یو آر ال",
        emoji: "ایموجي",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "نیټه او وخت",
        date: "نېټه",
        time: "وخت",
        duration: "موده",
        ipv4: "د IPv4 پته",
        ipv6: "د IPv6 پته",
        cidrv4: "د IPv4 ساحه",
        cidrv6: "د IPv6 ساحه",
        base64: "base64-encoded متن",
        base64url: "base64url-encoded متن",
        json_string: "JSON متن",
        e164: "د E.164 شمېره",
        jwt: "JWT",
        template_literal: "ورودي",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ناسم ورودي: باید ${issue.expected} وای, مګر ${parsedType(issue.input)} ترلاسه شو`;
            case "invalid_value":
                if (issue.values.length === 1) {
                    return `ناسم ورودي: باید ${stringifyPrimitive(issue.values[0])} وای`;
                }
                return `ناسم انتخاب: باید یو له ${joinValues(issue.values, "|")} څخه وای`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
                }
                return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} وي`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} ولري`;
                }
                return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} وي`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
                }
                if (_issue.format === "ends_with") {
                    return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
                }
                if (_issue.format === "includes") {
                    return `ناسم متن: باید "${_issue.includes}" ولري`;
                }
                if (_issue.format === "regex") {
                    return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
                }
                return `${Nouns[_issue.format] ?? issue.format} ناسم دی`;
            }
            case "not_multiple_of":
                return `ناسم عدد: باید د ${issue.divisor} مضرب وي`;
            case "unrecognized_keys":
                return `ناسم ${issue.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `ناسم کلیډ په ${issue.origin} کې`;
            case "invalid_union":
                return `ناسمه ورودي`;
            case "invalid_element":
                return `ناسم عنصر په ${issue.origin} کې`;
            default:
                return `ناسمه ورودي`;
        }
    };
};
function ps () {
    return {
        localeError: error$e(),
    };
}

const error$d = () => {
    const Sizable = {
        string: { unit: "znaków", verb: "mieć" },
        file: { unit: "bajtów", verb: "mieć" },
        array: { unit: "elementów", verb: "mieć" },
        set: { unit: "elementów", verb: "mieć" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "liczba";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tablica";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "wyrażenie",
        email: "adres email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ciąg znaków zakodowany w formacie base64",
        base64url: "ciąg znaków zakodowany w formacie base64url",
        json_string: "ciąg znaków w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wejście",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Nieprawidłowe dane wejściowe: oczekiwano ${issue.expected}, otrzymano ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Nieprawidłowe dane wejściowe: oczekiwano ${stringifyPrimitive(issue.values[0])}`;
                return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Za duża wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementów"}`;
                }
                return `Zbyt duż(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Za mała wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.minimum.toString()} ${sizing.unit ?? "elementów"}`;
                }
                return `Zbyt mał(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
                return `Nieprawidłow(y/a/e) ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nieprawidłowa liczba: musi być wielokrotnością ${issue.divisor}`;
            case "unrecognized_keys":
                return `Nierozpoznane klucze${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Nieprawidłowy klucz w ${issue.origin}`;
            case "invalid_union":
                return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
                return `Nieprawidłowa wartość w ${issue.origin}`;
            default:
                return `Nieprawidłowe dane wejściowe`;
        }
    };
};
function pl () {
    return {
        localeError: error$d(),
    };
}

const error$c = () => {
    const Sizable = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "número";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "nulo";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "padrão",
        email: "endereço de e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "duração ISO",
        ipv4: "endereço IPv4",
        ipv6: "endereço IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Tipo inválido: esperado ${issue.expected}, recebido ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrada inválida: esperado ${stringifyPrimitive(issue.values[0])}`;
                return `Opção inválida: esperada uma das ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Muito grande: esperado que ${issue.origin ?? "valor"} tivesse ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
                return `Muito grande: esperado que ${issue.origin ?? "valor"} fosse ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Muito pequeno: esperado que ${issue.origin} tivesse ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Muito pequeno: esperado que ${issue.origin} fosse ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Texto inválido: deve começar com "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Texto inválido: deve terminar com "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Texto inválido: deve incluir "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} inválido`;
            }
            case "not_multiple_of":
                return `Número inválido: deve ser múltiplo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Chave${issue.keys.length > 1 ? "s" : ""} desconhecida${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Chave inválida em ${issue.origin}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido em ${issue.origin}`;
            default:
                return `Campo inválido`;
        }
    };
};
function pt () {
    return {
        localeError: error$c(),
    };
}

function getRussianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return many;
    }
    if (lastDigit === 1) {
        return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return few;
    }
    return many;
}
const error$b = () => {
    const Sizable = {
        string: {
            unit: {
                one: "символ",
                few: "символа",
                many: "символов",
            },
            verb: "иметь",
        },
        file: {
            unit: {
                one: "байт",
                few: "байта",
                many: "байт",
            },
            verb: "иметь",
        },
        array: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов",
            },
            verb: "иметь",
        },
        set: {
            unit: {
                one: "элемент",
                few: "элемента",
                many: "элементов",
            },
            verb: "иметь",
        },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "число";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "массив";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ввод",
        email: "email адрес",
        url: "URL",
        emoji: "эмодзи",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO дата и время",
        date: "ISO дата",
        time: "ISO время",
        duration: "ISO длительность",
        ipv4: "IPv4 адрес",
        ipv6: "IPv6 адрес",
        cidrv4: "IPv4 диапазон",
        cidrv6: "IPv6 диапазон",
        base64: "строка в формате base64",
        base64url: "строка в формате base64url",
        json_string: "JSON строка",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "ввод",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Неверный ввод: ожидалось ${issue.expected}, получено ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Неверный ввод: ожидалось ${stringifyPrimitive(issue.values[0])}`;
                return `Неверный вариант: ожидалось одно из ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const maxValue = Number(issue.maximum);
                    const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет иметь ${adj}${issue.maximum.toString()} ${unit}`;
                }
                return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    const minValue = Number(issue.minimum);
                    const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
                    return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет иметь ${adj}${issue.minimum.toString()} ${unit}`;
                }
                return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Неверная строка: должна содержать "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
                return `Неверный ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Неверное число: должно быть кратным ${issue.divisor}`;
            case "unrecognized_keys":
                return `Нераспознанн${issue.keys.length > 1 ? "ые" : "ый"} ключ${issue.keys.length > 1 ? "и" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Неверный ключ в ${issue.origin}`;
            case "invalid_union":
                return "Неверные входные данные";
            case "invalid_element":
                return `Неверное значение в ${issue.origin}`;
            default:
                return `Неверные входные данные`;
        }
    };
};
function ru () {
    return {
        localeError: error$b(),
    };
}

const error$a = () => {
    const Sizable = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "število";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tabela";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "vnos",
        email: "e-poštni naslov",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum in čas",
        date: "ISO datum",
        time: "ISO čas",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 številka",
        jwt: "JWT",
        template_literal: "vnos",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Neveljaven vnos: pričakovano ${issue.expected}, prejeto ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Neveljaven vnos: pričakovano ${stringifyPrimitive(issue.values[0])}`;
                return `Neveljavna možnost: pričakovano eno izmed ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} imelo ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementov"}`;
                return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Premajhno: pričakovano, da bo ${issue.origin} imelo ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Premajhno: pričakovano, da bo ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
                return `Neveljaven ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Neveljavno število: mora biti večkratnik ${issue.divisor}`;
            case "unrecognized_keys":
                return `Neprepoznan${issue.keys.length > 1 ? "i ključi" : " ključ"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Neveljaven ključ v ${issue.origin}`;
            case "invalid_union":
                return "Neveljaven vnos";
            case "invalid_element":
                return `Neveljavna vrednost v ${issue.origin}`;
            default:
                return "Neveljaven vnos";
        }
    };
};
function sl () {
    return {
        localeError: error$a(),
    };
}

const error$9 = () => {
    const Sizable = {
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att innehålla" },
        set: { unit: "objekt", verb: "att innehålla" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "antal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "lista";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "reguljärt uttryck",
        email: "e-postadress",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad sträng",
        base64url: "base64url-kodad sträng",
        json_string: "JSON-sträng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ogiltig inmatning: förväntat ${issue.expected}, fick ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ogiltig inmatning: förväntat ${stringifyPrimitive(issue.values[0])}`;
                return `Ogiltigt val: förväntade en av ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `För stor(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
                }
                return `För stor(t): förväntat ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
                return `Ogiltig(t) ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ogiltigt tal: måste vara en multipel av ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ogiltig nyckel i ${issue.origin ?? "värdet"}`;
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                return `Ogiltigt värde i ${issue.origin ?? "värdet"}`;
            default:
                return `Ogiltig input`;
        }
    };
};
function sv () {
    return {
        localeError: error$9(),
    };
}

const error$8 = () => {
    const Sizable = {
        string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
        file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
        array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
        set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "அணி";
                }
                if (data === null) {
                    return "வெறுமை";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "உள்ளீடு",
        email: "மின்னஞ்சல் முகவரி",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO தேதி நேரம்",
        date: "ISO தேதி",
        time: "ISO நேரம்",
        duration: "ISO கால அளவு",
        ipv4: "IPv4 முகவரி",
        ipv6: "IPv6 முகவரி",
        cidrv4: "IPv4 வரம்பு",
        cidrv6: "IPv6 வரம்பு",
        base64: "base64-encoded சரம்",
        base64url: "base64url-encoded சரம்",
        json_string: "JSON சரம்",
        e164: "E.164 எண்",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${issue.expected}, பெறப்பட்டது ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${stringifyPrimitive(issue.values[0])}`;
                return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${joinValues(issue.values, "|")} இல் ஒன்று`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
                }
                return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`; //
                }
                return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
                if (_issue.format === "ends_with")
                    return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
                if (_issue.format === "includes")
                    return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
                if (_issue.format === "regex")
                    return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                return `தவறான ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `தவறான எண்: ${issue.divisor} இன் பலமாக இருக்க வேண்டும்`;
            case "unrecognized_keys":
                return `அடையாளம் தெரியாத விசை${issue.keys.length > 1 ? "கள்" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} இல் தவறான விசை`;
            case "invalid_union":
                return "தவறான உள்ளீடு";
            case "invalid_element":
                return `${issue.origin} இல் தவறான மதிப்பு`;
            default:
                return `தவறான உள்ளீடு`;
        }
    };
};
function ta () {
    return {
        localeError: error$8(),
    };
}

const error$7 = () => {
    const Sizable = {
        string: { unit: "ตัวอักษร", verb: "ควรมี" },
        file: { unit: "ไบต์", verb: "ควรมี" },
        array: { unit: "รายการ", verb: "ควรมี" },
        set: { unit: "รายการ", verb: "ควรมี" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "อาร์เรย์ (Array)";
                }
                if (data === null) {
                    return "ไม่มีค่า (null)";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ข้อมูลที่ป้อน",
        email: "ที่อยู่อีเมล",
        url: "URL",
        emoji: "อิโมจิ",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "วันที่เวลาแบบ ISO",
        date: "วันที่แบบ ISO",
        time: "เวลาแบบ ISO",
        duration: "ช่วงเวลาแบบ ISO",
        ipv4: "ที่อยู่ IPv4",
        ipv6: "ที่อยู่ IPv6",
        cidrv4: "ช่วง IP แบบ IPv4",
        cidrv6: "ช่วง IP แบบ IPv6",
        base64: "ข้อความแบบ Base64",
        base64url: "ข้อความแบบ Base64 สำหรับ URL",
        json_string: "ข้อความแบบ JSON",
        e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
        jwt: "โทเคน JWT",
        template_literal: "ข้อมูลที่ป้อน",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${issue.expected} แต่ได้รับ ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `ค่าไม่ถูกต้อง: ควรเป็น ${stringifyPrimitive(issue.values[0])}`;
                return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "ไม่เกิน" : "น้อยกว่า";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
                return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "อย่างน้อย" : "มากกว่า";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
                if (_issue.format === "regex")
                    return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
                return `รูปแบบไม่ถูกต้อง: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue.divisor} ได้ลงตัว`;
            case "unrecognized_keys":
                return `พบคีย์ที่ไม่รู้จัก: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `คีย์ไม่ถูกต้องใน ${issue.origin}`;
            case "invalid_union":
                return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
                return `ข้อมูลไม่ถูกต้องใน ${issue.origin}`;
            default:
                return `ข้อมูลไม่ถูกต้อง`;
        }
    };
};
function th () {
    return {
        localeError: error$7(),
    };
}

const parsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
const error$6 = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "olmalı" },
        file: { unit: "bayt", verb: "olmalı" },
        array: { unit: "öğe", verb: "olmalı" },
        set: { unit: "öğe", verb: "olmalı" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "girdi",
        email: "e-posta adresi",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO süre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aralığı",
        cidrv6: "IPv6 aralığı",
        base64: "base64 ile şifrelenmiş metin",
        base64url: "base64url ile şifrelenmiş metin",
        json_string: "JSON dizesi",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "Şablon dizesi",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Geçersiz değer: beklenen ${issue.expected}, alınan ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Geçersiz değer: beklenen ${stringifyPrimitive(issue.values[0])}`;
                return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "öğe"}`;
                return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
                if (_issue.format === "ends_with")
                    return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
                if (_issue.format === "includes")
                    return `Geçersiz metin: "${_issue.includes}" içermeli`;
                if (_issue.format === "regex")
                    return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
                return `Geçersiz ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Geçersiz sayı: ${issue.divisor} ile tam bölünebilmeli`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar${issue.keys.length > 1 ? "lar" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} içinde geçersiz anahtar`;
            case "invalid_union":
                return "Geçersiz değer";
            case "invalid_element":
                return `${issue.origin} içinde geçersiz değer`;
            default:
                return `Geçersiz değer`;
        }
    };
};
function tr () {
    return {
        localeError: error$6(),
    };
}

const error$5 = () => {
    const Sizable = {
        string: { unit: "символів", verb: "матиме" },
        file: { unit: "байтів", verb: "матиме" },
        array: { unit: "елементів", verb: "матиме" },
        set: { unit: "елементів", verb: "матиме" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "число";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "масив";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "вхідні дані",
        email: "адреса електронної пошти",
        url: "URL",
        emoji: "емодзі",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "дата та час ISO",
        date: "дата ISO",
        time: "час ISO",
        duration: "тривалість ISO",
        ipv4: "адреса IPv4",
        ipv6: "адреса IPv6",
        cidrv4: "діапазон IPv4",
        cidrv6: "діапазон IPv6",
        base64: "рядок у кодуванні base64",
        base64url: "рядок у кодуванні base64url",
        json_string: "рядок JSON",
        e164: "номер E.164",
        jwt: "JWT",
        template_literal: "вхідні дані",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${parsedType(issue.input)}`;
            // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Неправильні вхідні дані: очікується ${stringifyPrimitive(issue.values[0])}`;
                return `Неправильна опція: очікується одне з ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Занадто велике: очікується, що ${issue.origin ?? "значення"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементів"}`;
                return `Занадто велике: очікується, що ${issue.origin ?? "значення"} буде ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Занадто мале: очікується, що ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Занадто мале: очікується, що ${issue.origin} буде ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Неправильний рядок: повинен містити "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
                return `Неправильний ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Неправильне число: повинно бути кратним ${issue.divisor}`;
            case "unrecognized_keys":
                return `Нерозпізнаний ключ${issue.keys.length > 1 ? "і" : ""}: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Неправильний ключ у ${issue.origin}`;
            case "invalid_union":
                return "Неправильні вхідні дані";
            case "invalid_element":
                return `Неправильне значення у ${issue.origin}`;
            default:
                return `Неправильні вхідні дані`;
        }
    };
};
function uk () {
    return {
        localeError: error$5(),
    };
}

/** @deprecated Use `uk` instead. */
function ua () {
    return uk();
}

const error$4 = () => {
    const Sizable = {
        string: { unit: "حروف", verb: "ہونا" },
        file: { unit: "بائٹس", verb: "ہونا" },
        array: { unit: "آئٹمز", verb: "ہونا" },
        set: { unit: "آئٹمز", verb: "ہونا" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "نمبر";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "آرے";
                }
                if (data === null) {
                    return "نل";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ان پٹ",
        email: "ای میل ایڈریس",
        url: "یو آر ایل",
        emoji: "ایموجی",
        uuid: "یو یو آئی ڈی",
        uuidv4: "یو یو آئی ڈی وی 4",
        uuidv6: "یو یو آئی ڈی وی 6",
        nanoid: "نینو آئی ڈی",
        guid: "جی یو آئی ڈی",
        cuid: "سی یو آئی ڈی",
        cuid2: "سی یو آئی ڈی 2",
        ulid: "یو ایل آئی ڈی",
        xid: "ایکس آئی ڈی",
        ksuid: "کے ایس یو آئی ڈی",
        datetime: "آئی ایس او ڈیٹ ٹائم",
        date: "آئی ایس او تاریخ",
        time: "آئی ایس او وقت",
        duration: "آئی ایس او مدت",
        ipv4: "آئی پی وی 4 ایڈریس",
        ipv6: "آئی پی وی 6 ایڈریس",
        cidrv4: "آئی پی وی 4 رینج",
        cidrv6: "آئی پی وی 6 رینج",
        base64: "بیس 64 ان کوڈڈ سٹرنگ",
        base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
        json_string: "جے ایس او این سٹرنگ",
        e164: "ای 164 نمبر",
        jwt: "جے ڈبلیو ٹی",
        template_literal: "ان پٹ",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `غلط ان پٹ: ${issue.expected} متوقع تھا، ${parsedType(issue.input)} موصول ہوا`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `غلط ان پٹ: ${stringifyPrimitive(issue.values[0])} متوقع تھا`;
                return `غلط آپشن: ${joinValues(issue.values, "|")} میں سے ایک متوقع تھا`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `بہت بڑا: ${issue.origin ?? "ویلیو"} کے ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
                return `بہت بڑا: ${issue.origin ?? "ویلیو"} کا ${adj}${issue.maximum.toString()} ہونا متوقع تھا`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `بہت چھوٹا: ${issue.origin} کے ${adj}${issue.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
                }
                return `بہت چھوٹا: ${issue.origin} کا ${adj}${issue.minimum.toString()} ہونا متوقع تھا`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
                }
                if (_issue.format === "ends_with")
                    return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
                if (_issue.format === "includes")
                    return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
                if (_issue.format === "regex")
                    return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
                return `غلط ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `غلط نمبر: ${issue.divisor} کا مضاعف ہونا چاہیے`;
            case "unrecognized_keys":
                return `غیر تسلیم شدہ کی${issue.keys.length > 1 ? "ز" : ""}: ${joinValues(issue.keys, "، ")}`;
            case "invalid_key":
                return `${issue.origin} میں غلط کی`;
            case "invalid_union":
                return "غلط ان پٹ";
            case "invalid_element":
                return `${issue.origin} میں غلط ویلیو`;
            default:
                return `غلط ان پٹ`;
        }
    };
};
function ur () {
    return {
        localeError: error$4(),
    };
}

const error$3 = () => {
    const Sizable = {
        string: { unit: "ký tự", verb: "có" },
        file: { unit: "byte", verb: "có" },
        array: { unit: "phần tử", verb: "có" },
        set: { unit: "phần tử", verb: "có" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "số";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "mảng";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "đầu vào",
        email: "địa chỉ email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ngày giờ ISO",
        date: "ngày ISO",
        time: "giờ ISO",
        duration: "khoảng thời gian ISO",
        ipv4: "địa chỉ IPv4",
        ipv6: "địa chỉ IPv6",
        cidrv4: "dải IPv4",
        cidrv6: "dải IPv6",
        base64: "chuỗi mã hóa base64",
        base64url: "chuỗi mã hóa base64url",
        json_string: "chuỗi JSON",
        e164: "số E.164",
        jwt: "JWT",
        template_literal: "đầu vào",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Đầu vào không hợp lệ: mong đợi ${issue.expected}, nhận được ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Đầu vào không hợp lệ: mong đợi ${stringifyPrimitive(issue.values[0])}`;
                return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
                return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Quá nhỏ: mong đợi ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Quá nhỏ: mong đợi ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} không hợp lệ`;
            }
            case "not_multiple_of":
                return `Số không hợp lệ: phải là bội số của ${issue.divisor}`;
            case "unrecognized_keys":
                return `Khóa không được nhận dạng: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Khóa không hợp lệ trong ${issue.origin}`;
            case "invalid_union":
                return "Đầu vào không hợp lệ";
            case "invalid_element":
                return `Giá trị không hợp lệ trong ${issue.origin}`;
            default:
                return `Đầu vào không hợp lệ`;
        }
    };
};
function vi () {
    return {
        localeError: error$3(),
    };
}

const error$2 = () => {
    const Sizable = {
        string: { unit: "字符", verb: "包含" },
        file: { unit: "字节", verb: "包含" },
        array: { unit: "项", verb: "包含" },
        set: { unit: "项", verb: "包含" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "非数字(NaN)" : "数字";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "数组";
                }
                if (data === null) {
                    return "空值(null)";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "输入",
        email: "电子邮件",
        url: "URL",
        emoji: "表情符号",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO日期时间",
        date: "ISO日期",
        time: "ISO时间",
        duration: "ISO时长",
        ipv4: "IPv4地址",
        ipv6: "IPv6地址",
        cidrv4: "IPv4网段",
        cidrv6: "IPv6网段",
        base64: "base64编码字符串",
        base64url: "base64url编码字符串",
        json_string: "JSON字符串",
        e164: "E.164号码",
        jwt: "JWT",
        template_literal: "输入",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `无效输入：期望 ${issue.expected}，实际接收 ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `无效输入：期望 ${stringifyPrimitive(issue.values[0])}`;
                return `无效选项：期望以下之一 ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "个元素"}`;
                return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `无效字符串：必须以 "${_issue.prefix}" 开头`;
                if (_issue.format === "ends_with")
                    return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
                if (_issue.format === "includes")
                    return `无效字符串：必须包含 "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
                return `无效${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `无效数字：必须是 ${issue.divisor} 的倍数`;
            case "unrecognized_keys":
                return `出现未知的键(key): ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} 中的键(key)无效`;
            case "invalid_union":
                return "无效输入";
            case "invalid_element":
                return `${issue.origin} 中包含无效值(value)`;
            default:
                return `无效输入`;
        }
    };
};
function zhCN () {
    return {
        localeError: error$2(),
    };
}

const error$1 = () => {
    const Sizable = {
        string: { unit: "字元", verb: "擁有" },
        file: { unit: "位元組", verb: "擁有" },
        array: { unit: "項目", verb: "擁有" },
        set: { unit: "項目", verb: "擁有" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "number";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "array";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "輸入",
        email: "郵件地址",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO 日期時間",
        date: "ISO 日期",
        time: "ISO 時間",
        duration: "ISO 期間",
        ipv4: "IPv4 位址",
        ipv6: "IPv6 位址",
        cidrv4: "IPv4 範圍",
        cidrv6: "IPv6 範圍",
        base64: "base64 編碼字串",
        base64url: "base64url 編碼字串",
        json_string: "JSON 字串",
        e164: "E.164 數值",
        jwt: "JWT",
        template_literal: "輸入",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `無效的輸入值：預期為 ${issue.expected}，但收到 ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `無效的輸入值：預期為 ${stringifyPrimitive(issue.values[0])}`;
                return `無效的選項：預期為以下其中之一 ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()} ${sizing.unit ?? "個元素"}`;
                return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
                }
                if (_issue.format === "ends_with")
                    return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
                if (_issue.format === "includes")
                    return `無效的字串：必須包含 "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `無效的字串：必須符合格式 ${_issue.pattern}`;
                return `無效的 ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `無效的數字：必須為 ${issue.divisor} 的倍數`;
            case "unrecognized_keys":
                return `無法識別的鍵值${issue.keys.length > 1 ? "們" : ""}：${joinValues(issue.keys, "、")}`;
            case "invalid_key":
                return `${issue.origin} 中有無效的鍵值`;
            case "invalid_union":
                return "無效的輸入值";
            case "invalid_element":
                return `${issue.origin} 中有無效的值`;
            default:
                return `無效的輸入值`;
        }
    };
};
function zhTW () {
    return {
        localeError: error$1(),
    };
}

const error = () => {
    const Sizable = {
        string: { unit: "àmi", verb: "ní" },
        file: { unit: "bytes", verb: "ní" },
        array: { unit: "nkan", verb: "ní" },
        set: { unit: "nkan", verb: "ní" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "nọ́mbà";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "akopọ";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "ẹ̀rọ ìbáwọlé",
        email: "àdírẹ́sì ìmẹ́lì",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "àkókò ISO",
        date: "ọjọ́ ISO",
        time: "àkókò ISO",
        duration: "àkókò tó pé ISO",
        ipv4: "àdírẹ́sì IPv4",
        ipv6: "àdírẹ́sì IPv6",
        cidrv4: "àgbègbè IPv4",
        cidrv6: "àgbègbè IPv6",
        base64: "ọ̀rọ̀ tí a kọ́ ní base64",
        base64url: "ọ̀rọ̀ base64url",
        json_string: "ọ̀rọ̀ JSON",
        e164: "nọ́mbà E.164",
        jwt: "JWT",
        template_literal: "ẹ̀rọ ìbáwọlé",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ìbáwọlé aṣìṣe: a ní láti fi ${issue.expected}, àmọ̀ a rí ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ìbáwọlé aṣìṣe: a ní láti fi ${stringifyPrimitive(issue.values[0])}`;
                return `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Tó pọ̀ jù: a ní láti jẹ́ pé ${issue.origin ?? "iye"} ${sizing.verb} ${adj}${issue.maximum} ${sizing.unit}`;
                return `Tó pọ̀ jù: a ní láti jẹ́ ${adj}${issue.maximum}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Kéré ju: a ní láti jẹ́ pé ${issue.origin} ${sizing.verb} ${adj}${issue.minimum} ${sizing.unit}`;
                return `Kéré ju: a ní láti jẹ́ ${adj}${issue.minimum}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_issue.pattern}`;
                return `Aṣìṣe: ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${issue.divisor}`;
            case "unrecognized_keys":
                return `Bọtìnì àìmọ̀: ${joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Bọtìnì aṣìṣe nínú ${issue.origin}`;
            case "invalid_union":
                return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
                return `Iye aṣìṣe nínú ${issue.origin}`;
            default:
                return "Ìbáwọlé aṣìṣe";
        }
    };
};
function yo () {
    return {
        localeError: error(),
    };
}

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ar: ar,
    az: az,
    be: be,
    bg: bg,
    ca: ca,
    cs: cs,
    da: da,
    de: de,
    en: en,
    eo: eo,
    es: es,
    fa: fa,
    fi: fi,
    fr: fr,
    frCA: frCA,
    he: he,
    hu: hu,
    id: id,
    is: is,
    it: it,
    ja: ja,
    ka: ka,
    kh: kh,
    km: km,
    ko: ko,
    lt: lt,
    mk: mk,
    ms: ms,
    nl: nl,
    no: no,
    ota: ota,
    pl: pl,
    ps: ps,
    pt: pt,
    ru: ru,
    sl: sl,
    sv: sv,
    ta: ta,
    th: th,
    tr: tr,
    ua: ua,
    uk: uk,
    ur: ur,
    vi: vi,
    yo: yo,
    zhCN: zhCN,
    zhTW: zhTW
});

var jsonSchema = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $ZodAny: $ZodAny,
    $ZodArray: $ZodArray,
    $ZodAsyncError: $ZodAsyncError,
    $ZodBase64: $ZodBase64,
    $ZodBase64URL: $ZodBase64URL,
    $ZodBigInt: $ZodBigInt,
    $ZodBigIntFormat: $ZodBigIntFormat,
    $ZodBoolean: $ZodBoolean,
    $ZodCIDRv4: $ZodCIDRv4,
    $ZodCIDRv6: $ZodCIDRv6,
    $ZodCUID: $ZodCUID,
    $ZodCUID2: $ZodCUID2,
    $ZodCatch: $ZodCatch,
    $ZodCheck: $ZodCheck,
    $ZodCheckBigIntFormat: $ZodCheckBigIntFormat,
    $ZodCheckEndsWith: $ZodCheckEndsWith,
    $ZodCheckGreaterThan: $ZodCheckGreaterThan,
    $ZodCheckIncludes: $ZodCheckIncludes,
    $ZodCheckLengthEquals: $ZodCheckLengthEquals,
    $ZodCheckLessThan: $ZodCheckLessThan,
    $ZodCheckLowerCase: $ZodCheckLowerCase,
    $ZodCheckMaxLength: $ZodCheckMaxLength,
    $ZodCheckMaxSize: $ZodCheckMaxSize,
    $ZodCheckMimeType: $ZodCheckMimeType,
    $ZodCheckMinLength: $ZodCheckMinLength,
    $ZodCheckMinSize: $ZodCheckMinSize,
    $ZodCheckMultipleOf: $ZodCheckMultipleOf,
    $ZodCheckNumberFormat: $ZodCheckNumberFormat,
    $ZodCheckOverwrite: $ZodCheckOverwrite,
    $ZodCheckProperty: $ZodCheckProperty,
    $ZodCheckRegex: $ZodCheckRegex,
    $ZodCheckSizeEquals: $ZodCheckSizeEquals,
    $ZodCheckStartsWith: $ZodCheckStartsWith,
    $ZodCheckStringFormat: $ZodCheckStringFormat,
    $ZodCheckUpperCase: $ZodCheckUpperCase,
    $ZodCodec: $ZodCodec,
    $ZodCustom: $ZodCustom,
    $ZodCustomStringFormat: $ZodCustomStringFormat,
    $ZodDate: $ZodDate,
    $ZodDefault: $ZodDefault,
    $ZodDiscriminatedUnion: $ZodDiscriminatedUnion,
    $ZodE164: $ZodE164,
    $ZodEmail: $ZodEmail,
    $ZodEmoji: $ZodEmoji,
    $ZodEncodeError: $ZodEncodeError,
    $ZodEnum: $ZodEnum,
    $ZodError: $ZodError,
    $ZodFile: $ZodFile,
    $ZodFunction: $ZodFunction,
    $ZodGUID: $ZodGUID,
    $ZodIPv4: $ZodIPv4,
    $ZodIPv6: $ZodIPv6,
    $ZodISODate: $ZodISODate,
    $ZodISODateTime: $ZodISODateTime,
    $ZodISODuration: $ZodISODuration,
    $ZodISOTime: $ZodISOTime,
    $ZodIntersection: $ZodIntersection,
    $ZodJWT: $ZodJWT,
    $ZodKSUID: $ZodKSUID,
    $ZodLazy: $ZodLazy,
    $ZodLiteral: $ZodLiteral,
    $ZodMap: $ZodMap,
    $ZodNaN: $ZodNaN,
    $ZodNanoID: $ZodNanoID,
    $ZodNever: $ZodNever,
    $ZodNonOptional: $ZodNonOptional,
    $ZodNull: $ZodNull,
    $ZodNullable: $ZodNullable,
    $ZodNumber: $ZodNumber,
    $ZodNumberFormat: $ZodNumberFormat,
    $ZodObject: $ZodObject,
    $ZodObjectJIT: $ZodObjectJIT,
    $ZodOptional: $ZodOptional,
    $ZodPipe: $ZodPipe,
    $ZodPrefault: $ZodPrefault,
    $ZodPromise: $ZodPromise,
    $ZodReadonly: $ZodReadonly,
    $ZodRealError: $ZodRealError,
    $ZodRecord: $ZodRecord,
    $ZodRegistry: $ZodRegistry,
    $ZodSet: $ZodSet,
    $ZodString: $ZodString,
    $ZodStringFormat: $ZodStringFormat,
    $ZodSuccess: $ZodSuccess,
    $ZodSymbol: $ZodSymbol,
    $ZodTemplateLiteral: $ZodTemplateLiteral,
    $ZodTransform: $ZodTransform,
    $ZodTuple: $ZodTuple,
    $ZodType: $ZodType,
    $ZodULID: $ZodULID,
    $ZodURL: $ZodURL,
    $ZodUUID: $ZodUUID,
    $ZodUndefined: $ZodUndefined,
    $ZodUnion: $ZodUnion,
    $ZodUnknown: $ZodUnknown,
    $ZodVoid: $ZodVoid,
    $ZodXID: $ZodXID,
    $brand: $brand,
    $constructor: $constructor,
    $input: $input,
    $output: $output,
    Doc: Doc,
    JSONSchema: jsonSchema,
    JSONSchemaGenerator: JSONSchemaGenerator,
    NEVER: NEVER,
    TimePrecision: TimePrecision,
    _any: _any,
    _array: _array,
    _base64: _base64,
    _base64url: _base64url,
    _bigint: _bigint,
    _boolean: _boolean,
    _catch: _catch,
    _check: _check,
    _cidrv4: _cidrv4,
    _cidrv6: _cidrv6,
    _coercedBigint: _coercedBigint,
    _coercedBoolean: _coercedBoolean,
    _coercedDate: _coercedDate,
    _coercedNumber: _coercedNumber,
    _coercedString: _coercedString,
    _cuid: _cuid,
    _cuid2: _cuid2,
    _custom: _custom,
    _date: _date,
    _decode: _decode,
    _decodeAsync: _decodeAsync,
    _default: _default,
    _discriminatedUnion: _discriminatedUnion,
    _e164: _e164,
    _email: _email,
    _emoji: _emoji,
    _encode: _encode,
    _encodeAsync: _encodeAsync,
    _endsWith: _endsWith,
    _enum: _enum,
    _file: _file,
    _float32: _float32,
    _float64: _float64,
    _gt: _gt,
    _gte: _gte,
    _guid: _guid,
    _includes: _includes,
    _int: _int,
    _int32: _int32,
    _int64: _int64,
    _intersection: _intersection,
    _ipv4: _ipv4,
    _ipv6: _ipv6,
    _isoDate: _isoDate,
    _isoDateTime: _isoDateTime,
    _isoDuration: _isoDuration,
    _isoTime: _isoTime,
    _jwt: _jwt,
    _ksuid: _ksuid,
    _lazy: _lazy,
    _length: _length,
    _literal: _literal,
    _lowercase: _lowercase,
    _lt: _lt,
    _lte: _lte,
    _map: _map,
    _max: _lte,
    _maxLength: _maxLength,
    _maxSize: _maxSize,
    _mime: _mime,
    _min: _gte,
    _minLength: _minLength,
    _minSize: _minSize,
    _multipleOf: _multipleOf,
    _nan: _nan,
    _nanoid: _nanoid,
    _nativeEnum: _nativeEnum,
    _negative: _negative,
    _never: _never,
    _nonnegative: _nonnegative,
    _nonoptional: _nonoptional,
    _nonpositive: _nonpositive,
    _normalize: _normalize,
    _null: _null,
    _nullable: _nullable,
    _number: _number,
    _optional: _optional,
    _overwrite: _overwrite,
    _parse: _parse,
    _parseAsync: _parseAsync,
    _pipe: _pipe,
    _positive: _positive,
    _promise: _promise,
    _property: _property,
    _readonly: _readonly,
    _record: _record,
    _refine: _refine,
    _regex: _regex,
    _safeDecode: _safeDecode,
    _safeDecodeAsync: _safeDecodeAsync,
    _safeEncode: _safeEncode,
    _safeEncodeAsync: _safeEncodeAsync,
    _safeParse: _safeParse,
    _safeParseAsync: _safeParseAsync,
    _set: _set,
    _size: _size,
    _startsWith: _startsWith,
    _string: _string,
    _stringFormat: _stringFormat,
    _stringbool: _stringbool,
    _success: _success,
    _superRefine: _superRefine,
    _symbol: _symbol,
    _templateLiteral: _templateLiteral,
    _toLowerCase: _toLowerCase,
    _toUpperCase: _toUpperCase,
    _transform: _transform,
    _trim: _trim,
    _tuple: _tuple,
    _uint32: _uint32,
    _uint64: _uint64,
    _ulid: _ulid,
    _undefined: _undefined,
    _union: _union,
    _unknown: _unknown,
    _uppercase: _uppercase,
    _url: _url,
    _uuid: _uuid,
    _uuidv4: _uuidv4,
    _uuidv6: _uuidv6,
    _uuidv7: _uuidv7,
    _void: _void,
    _xid: _xid,
    clone: clone,
    config: config,
    decode: decode,
    decodeAsync: decodeAsync,
    encode: encode,
    encodeAsync: encodeAsync,
    flattenError: flattenError,
    formatError: formatError,
    globalConfig: globalConfig,
    globalRegistry: globalRegistry,
    isValidBase64: isValidBase64,
    isValidBase64URL: isValidBase64URL,
    isValidJWT: isValidJWT,
    locales: index$1,
    parse: parse,
    parseAsync: parseAsync,
    prettifyError: prettifyError,
    regexes: regexes,
    registry: registry,
    safeDecode: safeDecode,
    safeDecodeAsync: safeDecodeAsync,
    safeEncode: safeEncode,
    safeEncodeAsync: safeEncodeAsync,
    safeParse: safeParse,
    safeParseAsync: safeParseAsync,
    toDotPath: toDotPath,
    toJSONSchema: toJSONSchema,
    treeifyError: treeifyError,
    util: util,
    version: version
});

// Zod 3 compat layer
/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
const ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
};
/** @deprecated Use `z.config(params)` instead. */
function setErrorMap(map) {
    config({
        customError: map,
    });
}
/** @deprecated Use `z.config()` instead. */
function getErrorMap() {
    return config().customError;
}
/** @deprecated Do not use. Stub definition, only included for zod-to-json-schema compatibility. */
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));

config(en());

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $brand: $brand,
    $input: $input,
    $output: $output,
    NEVER: NEVER,
    TimePrecision: TimePrecision,
    ZodAny: ZodAny,
    ZodArray: ZodArray,
    ZodBase64: ZodBase64,
    ZodBase64URL: ZodBase64URL,
    ZodBigInt: ZodBigInt,
    ZodBigIntFormat: ZodBigIntFormat,
    ZodBoolean: ZodBoolean,
    ZodCIDRv4: ZodCIDRv4,
    ZodCIDRv6: ZodCIDRv6,
    ZodCUID: ZodCUID,
    ZodCUID2: ZodCUID2,
    ZodCatch: ZodCatch,
    ZodCodec: ZodCodec,
    ZodCustom: ZodCustom,
    ZodCustomStringFormat: ZodCustomStringFormat,
    ZodDate: ZodDate,
    ZodDefault: ZodDefault,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodE164: ZodE164,
    ZodEmail: ZodEmail,
    ZodEmoji: ZodEmoji,
    ZodEnum: ZodEnum,
    ZodError: ZodError,
    ZodFile: ZodFile,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    ZodFunction: ZodFunction,
    ZodGUID: ZodGUID,
    ZodIPv4: ZodIPv4,
    ZodIPv6: ZodIPv6,
    ZodISODate: ZodISODate,
    ZodISODateTime: ZodISODateTime,
    ZodISODuration: ZodISODuration,
    ZodISOTime: ZodISOTime,
    ZodIntersection: ZodIntersection,
    ZodIssueCode: ZodIssueCode,
    ZodJWT: ZodJWT,
    ZodKSUID: ZodKSUID,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodMap: ZodMap,
    ZodNaN: ZodNaN,
    ZodNanoID: ZodNanoID,
    ZodNever: ZodNever,
    ZodNonOptional: ZodNonOptional,
    ZodNull: ZodNull,
    ZodNullable: ZodNullable,
    ZodNumber: ZodNumber,
    ZodNumberFormat: ZodNumberFormat,
    ZodObject: ZodObject,
    ZodOptional: ZodOptional,
    ZodPipe: ZodPipe,
    ZodPrefault: ZodPrefault,
    ZodPromise: ZodPromise,
    ZodReadonly: ZodReadonly,
    ZodRealError: ZodRealError,
    ZodRecord: ZodRecord,
    ZodSet: ZodSet,
    ZodString: ZodString,
    ZodStringFormat: ZodStringFormat,
    ZodSuccess: ZodSuccess,
    ZodSymbol: ZodSymbol,
    ZodTemplateLiteral: ZodTemplateLiteral,
    ZodTransform: ZodTransform,
    ZodTuple: ZodTuple,
    ZodType: ZodType,
    ZodULID: ZodULID,
    ZodURL: ZodURL,
    ZodUUID: ZodUUID,
    ZodUndefined: ZodUndefined,
    ZodUnion: ZodUnion,
    ZodUnknown: ZodUnknown,
    ZodVoid: ZodVoid,
    ZodXID: ZodXID,
    _ZodString: _ZodString,
    _default: _default$1,
    _function: _function,
    any: any,
    array: array,
    base64: base64,
    base64url: base64url,
    bigint: bigint,
    boolean: boolean,
    catch: _catch$1,
    check: check,
    cidrv4: cidrv4,
    cidrv6: cidrv6,
    clone: clone,
    codec: codec,
    coerce: coerce,
    config: config,
    core: index,
    cuid: cuid,
    cuid2: cuid2,
    custom: custom,
    date: date,
    decode: decode$1,
    decodeAsync: decodeAsync$1,
    discriminatedUnion: discriminatedUnion,
    e164: e164,
    email: email,
    emoji: emoji,
    encode: encode$1,
    encodeAsync: encodeAsync$1,
    endsWith: _endsWith,
    enum: _enum$1,
    file: file,
    flattenError: flattenError,
    float32: float32,
    float64: float64,
    formatError: formatError,
    function: _function,
    getErrorMap: getErrorMap,
    globalRegistry: globalRegistry,
    gt: _gt,
    gte: _gte,
    guid: guid,
    hash: hash,
    hex: hex,
    hostname: hostname,
    httpUrl: httpUrl,
    includes: _includes,
    instanceof: _instanceof,
    int: int,
    int32: int32,
    int64: int64,
    intersection: intersection,
    ipv4: ipv4,
    ipv6: ipv6,
    iso: iso,
    json: json,
    jwt: jwt,
    keyof: keyof,
    ksuid: ksuid,
    lazy: lazy,
    length: _length,
    literal: literal,
    locales: index$1,
    looseObject: looseObject,
    lowercase: _lowercase,
    lt: _lt,
    lte: _lte,
    map: map,
    maxLength: _maxLength,
    maxSize: _maxSize,
    mime: _mime,
    minLength: _minLength,
    minSize: _minSize,
    multipleOf: _multipleOf,
    nan: nan,
    nanoid: nanoid,
    nativeEnum: nativeEnum,
    negative: _negative,
    never: never,
    nonnegative: _nonnegative,
    nonoptional: nonoptional,
    nonpositive: _nonpositive,
    normalize: _normalize,
    null: _null$1,
    nullable: nullable,
    nullish: nullish,
    number: number,
    object: object,
    optional: optional,
    overwrite: _overwrite,
    parse: parse$1,
    parseAsync: parseAsync$1,
    partialRecord: partialRecord,
    pipe: pipe,
    positive: _positive,
    prefault: prefault,
    preprocess: preprocess,
    prettifyError: prettifyError,
    promise: promise,
    property: _property,
    readonly: readonly,
    record: record,
    refine: refine,
    regex: _regex,
    regexes: regexes,
    registry: registry,
    safeDecode: safeDecode$1,
    safeDecodeAsync: safeDecodeAsync$1,
    safeEncode: safeEncode$1,
    safeEncodeAsync: safeEncodeAsync$1,
    safeParse: safeParse$1,
    safeParseAsync: safeParseAsync$1,
    set: set,
    setErrorMap: setErrorMap,
    size: _size,
    startsWith: _startsWith,
    strictObject: strictObject,
    string: string,
    stringFormat: stringFormat,
    stringbool: stringbool,
    success: success,
    superRefine: superRefine,
    symbol: symbol,
    templateLiteral: templateLiteral,
    toJSONSchema: toJSONSchema,
    toLowerCase: _toLowerCase,
    toUpperCase: _toUpperCase,
    transform: transform,
    treeifyError: treeifyError,
    trim: _trim,
    tuple: tuple,
    uint32: uint32,
    uint64: uint64,
    ulid: ulid,
    undefined: _undefined$1,
    union: union,
    unknown: unknown,
    uppercase: _uppercase,
    url: url,
    util: util,
    uuid: uuid,
    uuidv4: uuidv4,
    uuidv6: uuidv6,
    uuidv7: uuidv7,
    void: _void$1,
    xid: xid
});

export { ZodIssueCode as Z, ZodFirstPartyTypeKind, ZodObject, index$1 as a, getErrorMap as g, index as i, setErrorMap as s, z };
