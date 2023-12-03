import path from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { getFormEntries } from '../getFormEntries.js'
import { describe, test, expect } from '@jest/globals'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


describe('getFormEntries()', () => {
  test('throws', () => {
    const id = 'fln__get-form-entries__invalid-data'
    const message = 'Please pass getFormEntries() FormData'
    const testValues = [ undefined, 1, 'foo', [], [ 1 ], [ 'foo' ], { hello: 'world' }, [ { hello: 'world' }] ]

    for (const testValue of testValues) {
      try { getFormEntries(testValue) } catch (e) { expect(e).toEqual({ id, message, _errorData: { data: testValue } }) }
    }
  })


  describe('works', () => {
    test('if empty', () => {
      const formData = new FormData()
      expect(getFormEntries(formData)).toEqual({})
    })


    describe('with', () => {
      test('one entry + entry "value" type === string', () => {
        const formData = new FormData()
        formData.append('foo', 'bar')
        expect(getFormEntries(formData)).toEqual({ foo: 'bar' })
      })


      test('multiple entries + each entry "value" type === string + each entry has a different "name"', () => {
        const formData = new FormData()
        formData.append('foo', 'bar')
        formData.append('hello', 'world')
        expect(getFormEntries(formData)).toEqual({ foo: 'bar', hello: 'world' })
      })


      test('multiple entries + each entry "value" type === string + each entry has the same "name"', () => {
        const formData = new FormData()
        formData.append('foo', 'bar')
        formData.append('foo', 'world')
        expect(getFormEntries(formData)).toEqual({ foo: ['bar', 'world'] })
      })


      test('one entry + entry "value" type === File', async () => { // https://stackoverflow.com/a/61731295/1549471
        const file = readFileSync(`${ __dirname }/smile.webp`)
        const buffer = Buffer.from(file)
        const blob = new Blob([buffer])

        const formData = new FormData()
        formData.append('foo', blob, 'smiling.webp')
        const result = getFormEntries(formData)

        expect(Object.keys(result)).toEqual([ 'foo' ])
        expect(result.foo instanceof File).toEqual(true)
        expect(result.foo.name).toEqual('smiling.webp')
        expect(result.foo.size).toEqual(4536)
      })


      test('multiple entries + each entry "value" type === File + each entry has a different "name"', async () => { // https://stackoverflow.com/a/61731295/1549471
        const file1 = readFileSync(`${ __dirname }/smile.webp`)
        const buffer1 = Buffer.from(file1)
        const blob1 = new Blob([buffer1])

        const file2 = readFileSync(`${ __dirname }/laugh.webp`)
        const buffer2 = Buffer.from(file2)
        const blob2 = new Blob([buffer2])

        const formData = new FormData()
        formData.append('smile', blob1, 'smile.webp')
        formData.append('laugh', blob2, 'laughing.webp')
        const result = getFormEntries(formData)

        expect(Object.keys(result)).toEqual([ 'smile', 'laugh' ])
        expect(result.smile instanceof File).toEqual(true)
        expect(result.laugh instanceof File).toEqual(true)
        expect(result.smile.name).toEqual('smile.webp')
        expect(result.laugh.name).toEqual('laughing.webp')
        expect(result.smile.size).toEqual(4536)
        expect(result.laugh.size).toEqual(5424)
      })


      test('multiple entries + each entry "value" type === File + each entry has the same "name"', async () => { // https://stackoverflow.com/a/61731295/1549471
        const file1 = readFileSync(`${ __dirname }/smile.webp`)
        const buffer1 = Buffer.from(file1)
        const blob1 = new Blob([buffer1])

        const file2 = readFileSync(`${ __dirname }/laugh.webp`)
        const buffer2 = Buffer.from(file2)
        const blob2 = new Blob([buffer2])

        const formData = new FormData()
        formData.append('foo', blob1, 'smile.webp')
        formData.append('foo', blob2, 'laughing.webp')
        const result = getFormEntries(formData)

        expect(Object.keys(result)).toEqual([ 'foo' ])
        expect(Array.isArray(result.foo)).toEqual(true)
        expect(result.foo[0] instanceof File).toEqual(true)
        expect(result.foo[1] instanceof File).toEqual(true)
        expect(result.foo[0].name).toEqual('smile.webp')
        expect(result.foo[1].name).toEqual('laughing.webp')
        expect(result.foo[0].size).toEqual(4536)
        expect(result.foo[1].size).toEqual(5424)
      })


      test('multiple entries + each entry "value" type is string or value', async () => { // https://stackoverflow.com/a/61731295/1549471
        const file1 = readFileSync(`${ __dirname }/smile.webp`)
        const buffer1 = Buffer.from(file1)
        const blob1 = new Blob([buffer1])

        const file2 = readFileSync(`${ __dirname }/laugh.webp`)
        const buffer2 = Buffer.from(file2)
        const blob2 = new Blob([buffer2])

        const formData = new FormData()
        formData.append('foo', blob1, 'smile.webp')
        formData.append('foo', blob2, 'laughing.webp')
        formData.append('bar', 'foo')
        formData.append('bar', 'bar')
        formData.append('hello', 'world')
        const result = getFormEntries(formData)

        expect(Object.keys(result)).toEqual([ 'foo', 'bar', 'hello' ])
        expect(Array.isArray(result.foo)).toEqual(true)
        expect(result.foo[0] instanceof File).toEqual(true)
        expect(result.foo[1] instanceof File).toEqual(true)
        expect(result.foo[0].name).toEqual('smile.webp')
        expect(result.foo[1].name).toEqual('laughing.webp')
        expect(result.foo[0].size).toEqual(4536)
        expect(result.foo[1].size).toEqual(5424)
        expect(result.bar).toEqual(['foo', 'bar'])
        expect(result.hello).toEqual('world')
      })
    })
  })
})
