/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

import Complex128 = require( '@stdlib/complex-float64-ctor' );
import Complex64 = require( '@stdlib/complex-float32-ctor' );

/**
* Returns a `Complex128` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'complex128' );
* // returns <Function>
*/
declare function ctors( dtype: 'complex128' ): typeof Complex128;

/**
* Returns a `Complex64` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'complex64' );
* // returns <Function>
*/
declare function ctors( dtype: 'complex64' ): typeof Complex64;

/**
* Returns a complex number constructor.
*
* @param dtype - data type
* @returns constructor or null
*
* @example
* var ctor = ctors( 'complex128' );
* // returns <Function>
*
* @example
* var ctor = ctors( 'float' );
* // returns null
*/
declare function ctors( dtype: string ): Function | null;


// EXPORTS //

export = ctors;
