
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GuestbookEntry
 * 
 */
export type GuestbookEntry = $Result.DefaultSelection<Prisma.$GuestbookEntryPayload>
/**
 * Model Etablissement
 * 
 */
export type Etablissement = $Result.DefaultSelection<Prisma.$EtablissementPayload>
/**
 * Model Candidat
 * 
 */
export type Candidat = $Result.DefaultSelection<Prisma.$CandidatPayload>
/**
 * Model Discipline
 * 
 */
export type Discipline = $Result.DefaultSelection<Prisma.$DisciplinePayload>
/**
 * Model Matiere
 * 
 */
export type Matiere = $Result.DefaultSelection<Prisma.$MatierePayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Centre
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type Centre = $Result.DefaultSelection<Prisma.$CentrePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Aptitude: {
  APTE: 'APTE',
  INAPTE: 'INAPTE'
};

export type Aptitude = (typeof Aptitude)[keyof typeof Aptitude]


export const EpOptionnel: {
  ESPAGNOL: 'ESPAGNOL',
  ALLEMAND: 'ALLEMAND',
  ITALIEN: 'ITALIEN',
  ARABE: 'ARABE',
  PORTUGAIS: 'PORTUGAIS',
  RUSSE: 'RUSSE',
  TECHNOLOGIE: 'TECHNOLOGIE',
  ECONOMIE_FAMILIALE: 'ECONOMIE_FAMILIALE'
};

export type EpOptionnel = (typeof EpOptionnel)[keyof typeof EpOptionnel]


export const Gender: {
  MASCULIN: 'MASCULIN',
  FEMININ: 'FEMININ'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Statut: {
  PU: 'PU',
  PR: 'PR',
  CL: 'CL'
};

export type Statut = (typeof Statut)[keyof typeof Statut]


export const TypeEtablissement: {
  COLLEGE: 'COLLEGE',
  LYCEE: 'LYCEE',
  MIXTE_LYCEE_COLLEGE: 'MIXTE_LYCEE_COLLEGE',
  COLLEGE_PRIVE: 'COLLEGE_PRIVE',
  COLLEGE_PRIVE_MIXTE: 'COLLEGE_PRIVE_MIXTE',
  LYCEE_PRIVE_MIXTE: 'LYCEE_PRIVE_MIXTE'
};

export type TypeEtablissement = (typeof TypeEtablissement)[keyof typeof TypeEtablissement]


export const PresenceType: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

export type PresenceType = (typeof PresenceType)[keyof typeof PresenceType]

}

export type Aptitude = $Enums.Aptitude

export const Aptitude: typeof $Enums.Aptitude

export type EpOptionnel = $Enums.EpOptionnel

export const EpOptionnel: typeof $Enums.EpOptionnel

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

export type TypeEtablissement = $Enums.TypeEtablissement

export const TypeEtablissement: typeof $Enums.TypeEtablissement

export type PresenceType = $Enums.PresenceType

export const PresenceType: typeof $Enums.PresenceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  post: any;
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestbookEntry`: Exposes CRUD operations for the **GuestbookEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestbookEntries
    * const guestbookEntries = await prisma.guestbookEntry.findMany()
    * ```
    */
  get guestbookEntry(): Prisma.GuestbookEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etablissement`: Exposes CRUD operations for the **Etablissement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etablissements
    * const etablissements = await prisma.etablissement.findMany()
    * ```
    */
  get etablissement(): Prisma.EtablissementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidat`: Exposes CRUD operations for the **Candidat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidats
    * const candidats = await prisma.candidat.findMany()
    * ```
    */
  get candidat(): Prisma.CandidatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discipline`: Exposes CRUD operations for the **Discipline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplines
    * const disciplines = await prisma.discipline.findMany()
    * ```
    */
  get discipline(): Prisma.DisciplineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matiere`: Exposes CRUD operations for the **Matiere** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matieres
    * const matieres = await prisma.matiere.findMany()
    * ```
    */
  get matiere(): Prisma.MatiereDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centre`: Exposes CRUD operations for the **Centre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centres
    * const centres = await prisma.centre.findMany()
    * ```
    */
  get centre(): Prisma.CentreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    GuestbookEntry: 'GuestbookEntry',
    Etablissement: 'Etablissement',
    Candidat: 'Candidat',
    Discipline: 'Discipline',
    Matiere: 'Matiere',
    Note: 'Note',
    Centre: 'Centre',
    Contact: 'Contact',
    Student: 'Student'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "guestbookEntry" | "etablissement" | "candidat" | "discipline" | "matiere" | "note" | "centre" | "contact" | "student"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GuestbookEntry: {
        payload: Prisma.$GuestbookEntryPayload<ExtArgs>
        fields: Prisma.GuestbookEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestbookEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestbookEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          findFirst: {
            args: Prisma.GuestbookEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestbookEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          findMany: {
            args: Prisma.GuestbookEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[]
          }
          create: {
            args: Prisma.GuestbookEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          createMany: {
            args: Prisma.GuestbookEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestbookEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[]
          }
          delete: {
            args: Prisma.GuestbookEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          update: {
            args: Prisma.GuestbookEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          deleteMany: {
            args: Prisma.GuestbookEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestbookEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestbookEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[]
          }
          upsert: {
            args: Prisma.GuestbookEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>
          }
          aggregate: {
            args: Prisma.GuestbookEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestbookEntry>
          }
          groupBy: {
            args: Prisma.GuestbookEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestbookEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestbookEntryCountArgs<ExtArgs>
            result: $Utils.Optional<GuestbookEntryCountAggregateOutputType> | number
          }
        }
      }
      Etablissement: {
        payload: Prisma.$EtablissementPayload<ExtArgs>
        fields: Prisma.EtablissementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtablissementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtablissementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          findFirst: {
            args: Prisma.EtablissementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtablissementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          findMany: {
            args: Prisma.EtablissementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          create: {
            args: Prisma.EtablissementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          createMany: {
            args: Prisma.EtablissementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtablissementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          delete: {
            args: Prisma.EtablissementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          update: {
            args: Prisma.EtablissementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          deleteMany: {
            args: Prisma.EtablissementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtablissementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtablissementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          upsert: {
            args: Prisma.EtablissementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          aggregate: {
            args: Prisma.EtablissementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtablissement>
          }
          groupBy: {
            args: Prisma.EtablissementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtablissementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtablissementCountArgs<ExtArgs>
            result: $Utils.Optional<EtablissementCountAggregateOutputType> | number
          }
        }
      }
      Candidat: {
        payload: Prisma.$CandidatPayload<ExtArgs>
        fields: Prisma.CandidatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          findFirst: {
            args: Prisma.CandidatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          findMany: {
            args: Prisma.CandidatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>[]
          }
          create: {
            args: Prisma.CandidatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          createMany: {
            args: Prisma.CandidatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>[]
          }
          delete: {
            args: Prisma.CandidatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          update: {
            args: Prisma.CandidatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          deleteMany: {
            args: Prisma.CandidatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>[]
          }
          upsert: {
            args: Prisma.CandidatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatPayload>
          }
          aggregate: {
            args: Prisma.CandidatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidat>
          }
          groupBy: {
            args: Prisma.CandidatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatCountAggregateOutputType> | number
          }
        }
      }
      Discipline: {
        payload: Prisma.$DisciplinePayload<ExtArgs>
        fields: Prisma.DisciplineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findFirst: {
            args: Prisma.DisciplineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          findMany: {
            args: Prisma.DisciplineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          create: {
            args: Prisma.DisciplineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          createMany: {
            args: Prisma.DisciplineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          delete: {
            args: Prisma.DisciplineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          update: {
            args: Prisma.DisciplineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          deleteMany: {
            args: Prisma.DisciplineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>[]
          }
          upsert: {
            args: Prisma.DisciplineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinePayload>
          }
          aggregate: {
            args: Prisma.DisciplineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscipline>
          }
          groupBy: {
            args: Prisma.DisciplineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCountAggregateOutputType> | number
          }
        }
      }
      Matiere: {
        payload: Prisma.$MatierePayload<ExtArgs>
        fields: Prisma.MatiereFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatiereFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatiereFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          findFirst: {
            args: Prisma.MatiereFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatiereFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          findMany: {
            args: Prisma.MatiereFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>[]
          }
          create: {
            args: Prisma.MatiereCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          createMany: {
            args: Prisma.MatiereCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatiereCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>[]
          }
          delete: {
            args: Prisma.MatiereDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          update: {
            args: Prisma.MatiereUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          deleteMany: {
            args: Prisma.MatiereDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatiereUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatiereUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>[]
          }
          upsert: {
            args: Prisma.MatiereUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatierePayload>
          }
          aggregate: {
            args: Prisma.MatiereAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatiere>
          }
          groupBy: {
            args: Prisma.MatiereGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatiereGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatiereCountArgs<ExtArgs>
            result: $Utils.Optional<MatiereCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Centre: {
        payload: Prisma.$CentrePayload<ExtArgs>
        fields: Prisma.CentreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CentreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CentreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          findFirst: {
            args: Prisma.CentreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CentreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          findMany: {
            args: Prisma.CentreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>[]
          }
          create: {
            args: Prisma.CentreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          createMany: {
            args: Prisma.CentreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CentreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>[]
          }
          delete: {
            args: Prisma.CentreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          update: {
            args: Prisma.CentreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          deleteMany: {
            args: Prisma.CentreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CentreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CentreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>[]
          }
          upsert: {
            args: Prisma.CentreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentrePayload>
          }
          aggregate: {
            args: Prisma.CentreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentre>
          }
          groupBy: {
            args: Prisma.CentreGroupByArgs<ExtArgs>
            result: $Utils.Optional<CentreGroupByOutputType>[]
          }
          count: {
            args: Prisma.CentreCountArgs<ExtArgs>
            result: $Utils.Optional<CentreCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    guestbookEntry?: GuestbookEntryOmit
    etablissement?: EtablissementOmit
    candidat?: CandidatOmit
    discipline?: DisciplineOmit
    matiere?: MatiereOmit
    note?: NoteOmit
    centre?: CentreOmit
    contact?: ContactOmit
    student?: StudentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Guestbook: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guestbook?: boolean | UserCountOutputTypeCountGuestbookArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuestbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestbookEntryWhereInput
  }


  /**
   * Count Type EtablissementCountOutputType
   */

  export type EtablissementCountOutputType = {
    candidats: number
    Student: number
  }

  export type EtablissementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidats?: boolean | EtablissementCountOutputTypeCountCandidatsArgs
    Student?: boolean | EtablissementCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementCountOutputType
     */
    select?: EtablissementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeCountCandidatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatWhereInput
  }

  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type CandidatCountOutputType
   */

  export type CandidatCountOutputType = {
    notes: number
  }

  export type CandidatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | CandidatCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * CandidatCountOutputType without action
   */
  export type CandidatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatCountOutputType
     */
    select?: CandidatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatCountOutputType without action
   */
  export type CandidatCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type DisciplineCountOutputType
   */

  export type DisciplineCountOutputType = {
    matieres: number
  }

  export type DisciplineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matieres?: boolean | DisciplineCountOutputTypeCountMatieresArgs
  }

  // Custom InputTypes
  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCountOutputType
     */
    select?: DisciplineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplineCountOutputType without action
   */
  export type DisciplineCountOutputTypeCountMatieresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatiereWhereInput
  }


  /**
   * Count Type MatiereCountOutputType
   */

  export type MatiereCountOutputType = {
    notes: number
  }

  export type MatiereCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | MatiereCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * MatiereCountOutputType without action
   */
  export type MatiereCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatiereCountOutputType
     */
    select?: MatiereCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatiereCountOutputType without action
   */
  export type MatiereCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Guestbook?: boolean | User$GuestbookArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "profileImage" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guestbook?: boolean | User$GuestbookArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Guestbook: Prisma.$GuestbookEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      profileImage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Guestbook<T extends User$GuestbookArgs<ExtArgs> = {}>(args?: Subset<T, User$GuestbookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Guestbook
   */
  export type User$GuestbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    where?: GuestbookEntryWhereInput
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    cursor?: GuestbookEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GuestbookEntry
   */

  export type AggregateGuestbookEntry = {
    _count: GuestbookEntryCountAggregateOutputType | null
    _min: GuestbookEntryMinAggregateOutputType | null
    _max: GuestbookEntryMaxAggregateOutputType | null
  }

  export type GuestbookEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestbookEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestbookEntryCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestbookEntryMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestbookEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestbookEntryCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestbookEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestbookEntry to aggregate.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestbookEntries
    **/
    _count?: true | GuestbookEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestbookEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestbookEntryMaxAggregateInputType
  }

  export type GetGuestbookEntryAggregateType<T extends GuestbookEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestbookEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestbookEntry[P]>
      : GetScalarType<T[P], AggregateGuestbookEntry[P]>
  }




  export type GuestbookEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestbookEntryWhereInput
    orderBy?: GuestbookEntryOrderByWithAggregationInput | GuestbookEntryOrderByWithAggregationInput[]
    by: GuestbookEntryScalarFieldEnum[] | GuestbookEntryScalarFieldEnum
    having?: GuestbookEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestbookEntryCountAggregateInputType | true
    _min?: GuestbookEntryMinAggregateInputType
    _max?: GuestbookEntryMaxAggregateInputType
  }

  export type GuestbookEntryGroupByOutputType = {
    id: string
    userId: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: GuestbookEntryCountAggregateOutputType | null
    _min: GuestbookEntryMinAggregateOutputType | null
    _max: GuestbookEntryMaxAggregateOutputType | null
  }

  type GetGuestbookEntryGroupByPayload<T extends GuestbookEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestbookEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestbookEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestbookEntryGroupByOutputType[P]>
            : GetScalarType<T[P], GuestbookEntryGroupByOutputType[P]>
        }
      >
    >


  export type GuestbookEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestbookEntry"]>

  export type GuestbookEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestbookEntry"]>

  export type GuestbookEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestbookEntry"]>

  export type GuestbookEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestbookEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["guestbookEntry"]>
  export type GuestbookEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuestbookEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuestbookEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GuestbookEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestbookEntry"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guestbookEntry"]>
    composites: {}
  }

  type GuestbookEntryGetPayload<S extends boolean | null | undefined | GuestbookEntryDefaultArgs> = $Result.GetResult<Prisma.$GuestbookEntryPayload, S>

  type GuestbookEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestbookEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestbookEntryCountAggregateInputType | true
    }

  export interface GuestbookEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestbookEntry'], meta: { name: 'GuestbookEntry' } }
    /**
     * Find zero or one GuestbookEntry that matches the filter.
     * @param {GuestbookEntryFindUniqueArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestbookEntryFindUniqueArgs>(args: SelectSubset<T, GuestbookEntryFindUniqueArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestbookEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestbookEntryFindUniqueOrThrowArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestbookEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestbookEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestbookEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryFindFirstArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestbookEntryFindFirstArgs>(args?: SelectSubset<T, GuestbookEntryFindFirstArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestbookEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryFindFirstOrThrowArgs} args - Arguments to find a GuestbookEntry
     * @example
     * // Get one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestbookEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestbookEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestbookEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestbookEntries
     * const guestbookEntries = await prisma.guestbookEntry.findMany()
     * 
     * // Get first 10 GuestbookEntries
     * const guestbookEntries = await prisma.guestbookEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestbookEntryWithIdOnly = await prisma.guestbookEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestbookEntryFindManyArgs>(args?: SelectSubset<T, GuestbookEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestbookEntry.
     * @param {GuestbookEntryCreateArgs} args - Arguments to create a GuestbookEntry.
     * @example
     * // Create one GuestbookEntry
     * const GuestbookEntry = await prisma.guestbookEntry.create({
     *   data: {
     *     // ... data to create a GuestbookEntry
     *   }
     * })
     * 
     */
    create<T extends GuestbookEntryCreateArgs>(args: SelectSubset<T, GuestbookEntryCreateArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestbookEntries.
     * @param {GuestbookEntryCreateManyArgs} args - Arguments to create many GuestbookEntries.
     * @example
     * // Create many GuestbookEntries
     * const guestbookEntry = await prisma.guestbookEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestbookEntryCreateManyArgs>(args?: SelectSubset<T, GuestbookEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestbookEntries and returns the data saved in the database.
     * @param {GuestbookEntryCreateManyAndReturnArgs} args - Arguments to create many GuestbookEntries.
     * @example
     * // Create many GuestbookEntries
     * const guestbookEntry = await prisma.guestbookEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestbookEntries and only return the `id`
     * const guestbookEntryWithIdOnly = await prisma.guestbookEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestbookEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestbookEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuestbookEntry.
     * @param {GuestbookEntryDeleteArgs} args - Arguments to delete one GuestbookEntry.
     * @example
     * // Delete one GuestbookEntry
     * const GuestbookEntry = await prisma.guestbookEntry.delete({
     *   where: {
     *     // ... filter to delete one GuestbookEntry
     *   }
     * })
     * 
     */
    delete<T extends GuestbookEntryDeleteArgs>(args: SelectSubset<T, GuestbookEntryDeleteArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestbookEntry.
     * @param {GuestbookEntryUpdateArgs} args - Arguments to update one GuestbookEntry.
     * @example
     * // Update one GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestbookEntryUpdateArgs>(args: SelectSubset<T, GuestbookEntryUpdateArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestbookEntries.
     * @param {GuestbookEntryDeleteManyArgs} args - Arguments to filter GuestbookEntries to delete.
     * @example
     * // Delete a few GuestbookEntries
     * const { count } = await prisma.guestbookEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestbookEntryDeleteManyArgs>(args?: SelectSubset<T, GuestbookEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestbookEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestbookEntries
     * const guestbookEntry = await prisma.guestbookEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestbookEntryUpdateManyArgs>(args: SelectSubset<T, GuestbookEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestbookEntries and returns the data updated in the database.
     * @param {GuestbookEntryUpdateManyAndReturnArgs} args - Arguments to update many GuestbookEntries.
     * @example
     * // Update many GuestbookEntries
     * const guestbookEntry = await prisma.guestbookEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestbookEntries and only return the `id`
     * const guestbookEntryWithIdOnly = await prisma.guestbookEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestbookEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestbookEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuestbookEntry.
     * @param {GuestbookEntryUpsertArgs} args - Arguments to update or create a GuestbookEntry.
     * @example
     * // Update or create a GuestbookEntry
     * const guestbookEntry = await prisma.guestbookEntry.upsert({
     *   create: {
     *     // ... data to create a GuestbookEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestbookEntry we want to update
     *   }
     * })
     */
    upsert<T extends GuestbookEntryUpsertArgs>(args: SelectSubset<T, GuestbookEntryUpsertArgs<ExtArgs>>): Prisma__GuestbookEntryClient<$Result.GetResult<Prisma.$GuestbookEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestbookEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryCountArgs} args - Arguments to filter GuestbookEntries to count.
     * @example
     * // Count the number of GuestbookEntries
     * const count = await prisma.guestbookEntry.count({
     *   where: {
     *     // ... the filter for the GuestbookEntries we want to count
     *   }
     * })
    **/
    count<T extends GuestbookEntryCountArgs>(
      args?: Subset<T, GuestbookEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestbookEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestbookEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestbookEntryAggregateArgs>(args: Subset<T, GuestbookEntryAggregateArgs>): Prisma.PrismaPromise<GetGuestbookEntryAggregateType<T>>

    /**
     * Group by GuestbookEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestbookEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestbookEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestbookEntryGroupByArgs['orderBy'] }
        : { orderBy?: GuestbookEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestbookEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestbookEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestbookEntry model
   */
  readonly fields: GuestbookEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestbookEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestbookEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuestbookEntry model
   */
  interface GuestbookEntryFieldRefs {
    readonly id: FieldRef<"GuestbookEntry", 'String'>
    readonly userId: FieldRef<"GuestbookEntry", 'String'>
    readonly message: FieldRef<"GuestbookEntry", 'String'>
    readonly createdAt: FieldRef<"GuestbookEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"GuestbookEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuestbookEntry findUnique
   */
  export type GuestbookEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry findUniqueOrThrow
   */
  export type GuestbookEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry findFirst
   */
  export type GuestbookEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestbookEntries.
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestbookEntries.
     */
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * GuestbookEntry findFirstOrThrow
   */
  export type GuestbookEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntry to fetch.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestbookEntries.
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestbookEntries.
     */
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * GuestbookEntry findMany
   */
  export type GuestbookEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter, which GuestbookEntries to fetch.
     */
    where?: GuestbookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestbookEntries to fetch.
     */
    orderBy?: GuestbookEntryOrderByWithRelationInput | GuestbookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestbookEntries.
     */
    cursor?: GuestbookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestbookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestbookEntries.
     */
    skip?: number
    distinct?: GuestbookEntryScalarFieldEnum | GuestbookEntryScalarFieldEnum[]
  }

  /**
   * GuestbookEntry create
   */
  export type GuestbookEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestbookEntry.
     */
    data: XOR<GuestbookEntryCreateInput, GuestbookEntryUncheckedCreateInput>
  }

  /**
   * GuestbookEntry createMany
   */
  export type GuestbookEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestbookEntries.
     */
    data: GuestbookEntryCreateManyInput | GuestbookEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestbookEntry createManyAndReturn
   */
  export type GuestbookEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * The data used to create many GuestbookEntries.
     */
    data: GuestbookEntryCreateManyInput | GuestbookEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestbookEntry update
   */
  export type GuestbookEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestbookEntry.
     */
    data: XOR<GuestbookEntryUpdateInput, GuestbookEntryUncheckedUpdateInput>
    /**
     * Choose, which GuestbookEntry to update.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry updateMany
   */
  export type GuestbookEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestbookEntries.
     */
    data: XOR<GuestbookEntryUpdateManyMutationInput, GuestbookEntryUncheckedUpdateManyInput>
    /**
     * Filter which GuestbookEntries to update
     */
    where?: GuestbookEntryWhereInput
    /**
     * Limit how many GuestbookEntries to update.
     */
    limit?: number
  }

  /**
   * GuestbookEntry updateManyAndReturn
   */
  export type GuestbookEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * The data used to update GuestbookEntries.
     */
    data: XOR<GuestbookEntryUpdateManyMutationInput, GuestbookEntryUncheckedUpdateManyInput>
    /**
     * Filter which GuestbookEntries to update
     */
    where?: GuestbookEntryWhereInput
    /**
     * Limit how many GuestbookEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestbookEntry upsert
   */
  export type GuestbookEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestbookEntry to update in case it exists.
     */
    where: GuestbookEntryWhereUniqueInput
    /**
     * In case the GuestbookEntry found by the `where` argument doesn't exist, create a new GuestbookEntry with this data.
     */
    create: XOR<GuestbookEntryCreateInput, GuestbookEntryUncheckedCreateInput>
    /**
     * In case the GuestbookEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestbookEntryUpdateInput, GuestbookEntryUncheckedUpdateInput>
  }

  /**
   * GuestbookEntry delete
   */
  export type GuestbookEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
    /**
     * Filter which GuestbookEntry to delete.
     */
    where: GuestbookEntryWhereUniqueInput
  }

  /**
   * GuestbookEntry deleteMany
   */
  export type GuestbookEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestbookEntries to delete
     */
    where?: GuestbookEntryWhereInput
    /**
     * Limit how many GuestbookEntries to delete.
     */
    limit?: number
  }

  /**
   * GuestbookEntry without action
   */
  export type GuestbookEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestbookEntry
     */
    select?: GuestbookEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestbookEntry
     */
    omit?: GuestbookEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestbookEntryInclude<ExtArgs> | null
  }


  /**
   * Model Etablissement
   */

  export type AggregateEtablissement = {
    _count: EtablissementCountAggregateOutputType | null
    _avg: EtablissementAvgAggregateOutputType | null
    _sum: EtablissementSumAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  export type EtablissementAvgAggregateOutputType = {
    id: number | null
    jury: number | null
    effectif: number | null
  }

  export type EtablissementSumAggregateOutputType = {
    id: number | null
    jury: number | null
    effectif: number | null
  }

  export type EtablissementMinAggregateOutputType = {
    id: number | null
    nom: string | null
    slug: string | null
    type: $Enums.TypeEtablissement | null
    jury: number | null
    effectif: number | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EtablissementMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    slug: string | null
    type: $Enums.TypeEtablissement | null
    jury: number | null
    effectif: number | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EtablissementCountAggregateOutputType = {
    id: number
    nom: number
    slug: number
    type: number
    jury: number
    effectif: number
    adresse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EtablissementAvgAggregateInputType = {
    id?: true
    jury?: true
    effectif?: true
  }

  export type EtablissementSumAggregateInputType = {
    id?: true
    jury?: true
    effectif?: true
  }

  export type EtablissementMinAggregateInputType = {
    id?: true
    nom?: true
    slug?: true
    type?: true
    jury?: true
    effectif?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EtablissementMaxAggregateInputType = {
    id?: true
    nom?: true
    slug?: true
    type?: true
    jury?: true
    effectif?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EtablissementCountAggregateInputType = {
    id?: true
    nom?: true
    slug?: true
    type?: true
    jury?: true
    effectif?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EtablissementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissement to aggregate.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etablissements
    **/
    _count?: true | EtablissementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtablissementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtablissementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtablissementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtablissementMaxAggregateInputType
  }

  export type GetEtablissementAggregateType<T extends EtablissementAggregateArgs> = {
        [P in keyof T & keyof AggregateEtablissement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtablissement[P]>
      : GetScalarType<T[P], AggregateEtablissement[P]>
  }




  export type EtablissementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtablissementWhereInput
    orderBy?: EtablissementOrderByWithAggregationInput | EtablissementOrderByWithAggregationInput[]
    by: EtablissementScalarFieldEnum[] | EtablissementScalarFieldEnum
    having?: EtablissementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtablissementCountAggregateInputType | true
    _avg?: EtablissementAvgAggregateInputType
    _sum?: EtablissementSumAggregateInputType
    _min?: EtablissementMinAggregateInputType
    _max?: EtablissementMaxAggregateInputType
  }

  export type EtablissementGroupByOutputType = {
    id: number
    nom: string
    slug: string
    type: $Enums.TypeEtablissement
    jury: number | null
    effectif: number | null
    adresse: string
    createdAt: Date
    updatedAt: Date
    _count: EtablissementCountAggregateOutputType | null
    _avg: EtablissementAvgAggregateOutputType | null
    _sum: EtablissementSumAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  type GetEtablissementGroupByPayload<T extends EtablissementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtablissementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtablissementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
            : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
        }
      >
    >


  export type EtablissementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    slug?: boolean
    type?: boolean
    jury?: boolean
    effectif?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidats?: boolean | Etablissement$candidatsArgs<ExtArgs>
    Student?: boolean | Etablissement$StudentArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etablissement"]>

  export type EtablissementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    slug?: boolean
    type?: boolean
    jury?: boolean
    effectif?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["etablissement"]>

  export type EtablissementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    slug?: boolean
    type?: boolean
    jury?: boolean
    effectif?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["etablissement"]>

  export type EtablissementSelectScalar = {
    id?: boolean
    nom?: boolean
    slug?: boolean
    type?: boolean
    jury?: boolean
    effectif?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EtablissementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "slug" | "type" | "jury" | "effectif" | "adresse" | "createdAt" | "updatedAt", ExtArgs["result"]["etablissement"]>
  export type EtablissementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidats?: boolean | Etablissement$candidatsArgs<ExtArgs>
    Student?: boolean | Etablissement$StudentArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EtablissementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EtablissementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EtablissementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etablissement"
    objects: {
      candidats: Prisma.$CandidatPayload<ExtArgs>[]
      Student: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      slug: string
      type: $Enums.TypeEtablissement
      jury: number | null
      effectif: number | null
      adresse: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["etablissement"]>
    composites: {}
  }

  type EtablissementGetPayload<S extends boolean | null | undefined | EtablissementDefaultArgs> = $Result.GetResult<Prisma.$EtablissementPayload, S>

  type EtablissementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtablissementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtablissementCountAggregateInputType | true
    }

  export interface EtablissementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etablissement'], meta: { name: 'Etablissement' } }
    /**
     * Find zero or one Etablissement that matches the filter.
     * @param {EtablissementFindUniqueArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtablissementFindUniqueArgs>(args: SelectSubset<T, EtablissementFindUniqueArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etablissement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtablissementFindUniqueOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtablissementFindUniqueOrThrowArgs>(args: SelectSubset<T, EtablissementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtablissementFindFirstArgs>(args?: SelectSubset<T, EtablissementFindFirstArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtablissementFindFirstOrThrowArgs>(args?: SelectSubset<T, EtablissementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etablissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etablissements
     * const etablissements = await prisma.etablissement.findMany()
     * 
     * // Get first 10 Etablissements
     * const etablissements = await prisma.etablissement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtablissementFindManyArgs>(args?: SelectSubset<T, EtablissementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etablissement.
     * @param {EtablissementCreateArgs} args - Arguments to create a Etablissement.
     * @example
     * // Create one Etablissement
     * const Etablissement = await prisma.etablissement.create({
     *   data: {
     *     // ... data to create a Etablissement
     *   }
     * })
     * 
     */
    create<T extends EtablissementCreateArgs>(args: SelectSubset<T, EtablissementCreateArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etablissements.
     * @param {EtablissementCreateManyArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtablissementCreateManyArgs>(args?: SelectSubset<T, EtablissementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etablissements and returns the data saved in the database.
     * @param {EtablissementCreateManyAndReturnArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etablissements and only return the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtablissementCreateManyAndReturnArgs>(args?: SelectSubset<T, EtablissementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etablissement.
     * @param {EtablissementDeleteArgs} args - Arguments to delete one Etablissement.
     * @example
     * // Delete one Etablissement
     * const Etablissement = await prisma.etablissement.delete({
     *   where: {
     *     // ... filter to delete one Etablissement
     *   }
     * })
     * 
     */
    delete<T extends EtablissementDeleteArgs>(args: SelectSubset<T, EtablissementDeleteArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etablissement.
     * @param {EtablissementUpdateArgs} args - Arguments to update one Etablissement.
     * @example
     * // Update one Etablissement
     * const etablissement = await prisma.etablissement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtablissementUpdateArgs>(args: SelectSubset<T, EtablissementUpdateArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etablissements.
     * @param {EtablissementDeleteManyArgs} args - Arguments to filter Etablissements to delete.
     * @example
     * // Delete a few Etablissements
     * const { count } = await prisma.etablissement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtablissementDeleteManyArgs>(args?: SelectSubset<T, EtablissementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtablissementUpdateManyArgs>(args: SelectSubset<T, EtablissementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etablissements and returns the data updated in the database.
     * @param {EtablissementUpdateManyAndReturnArgs} args - Arguments to update many Etablissements.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etablissements and only return the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtablissementUpdateManyAndReturnArgs>(args: SelectSubset<T, EtablissementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etablissement.
     * @param {EtablissementUpsertArgs} args - Arguments to update or create a Etablissement.
     * @example
     * // Update or create a Etablissement
     * const etablissement = await prisma.etablissement.upsert({
     *   create: {
     *     // ... data to create a Etablissement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etablissement we want to update
     *   }
     * })
     */
    upsert<T extends EtablissementUpsertArgs>(args: SelectSubset<T, EtablissementUpsertArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementCountArgs} args - Arguments to filter Etablissements to count.
     * @example
     * // Count the number of Etablissements
     * const count = await prisma.etablissement.count({
     *   where: {
     *     // ... the filter for the Etablissements we want to count
     *   }
     * })
    **/
    count<T extends EtablissementCountArgs>(
      args?: Subset<T, EtablissementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtablissementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtablissementAggregateArgs>(args: Subset<T, EtablissementAggregateArgs>): Prisma.PrismaPromise<GetEtablissementAggregateType<T>>

    /**
     * Group by Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtablissementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtablissementGroupByArgs['orderBy'] }
        : { orderBy?: EtablissementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtablissementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtablissementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etablissement model
   */
  readonly fields: EtablissementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etablissement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtablissementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidats<T extends Etablissement$candidatsArgs<ExtArgs> = {}>(args?: Subset<T, Etablissement$candidatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Student<T extends Etablissement$StudentArgs<ExtArgs> = {}>(args?: Subset<T, Etablissement$StudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etablissement model
   */
  interface EtablissementFieldRefs {
    readonly id: FieldRef<"Etablissement", 'Int'>
    readonly nom: FieldRef<"Etablissement", 'String'>
    readonly slug: FieldRef<"Etablissement", 'String'>
    readonly type: FieldRef<"Etablissement", 'TypeEtablissement'>
    readonly jury: FieldRef<"Etablissement", 'Int'>
    readonly effectif: FieldRef<"Etablissement", 'Int'>
    readonly adresse: FieldRef<"Etablissement", 'String'>
    readonly createdAt: FieldRef<"Etablissement", 'DateTime'>
    readonly updatedAt: FieldRef<"Etablissement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etablissement findUnique
   */
  export type EtablissementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement findUniqueOrThrow
   */
  export type EtablissementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement findFirst
   */
  export type EtablissementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement findFirstOrThrow
   */
  export type EtablissementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement findMany
   */
  export type EtablissementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissements to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement create
   */
  export type EtablissementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The data needed to create a Etablissement.
     */
    data: XOR<EtablissementCreateInput, EtablissementUncheckedCreateInput>
  }

  /**
   * Etablissement createMany
   */
  export type EtablissementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etablissements.
     */
    data: EtablissementCreateManyInput | EtablissementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etablissement createManyAndReturn
   */
  export type EtablissementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * The data used to create many Etablissements.
     */
    data: EtablissementCreateManyInput | EtablissementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etablissement update
   */
  export type EtablissementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The data needed to update a Etablissement.
     */
    data: XOR<EtablissementUpdateInput, EtablissementUncheckedUpdateInput>
    /**
     * Choose, which Etablissement to update.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement updateMany
   */
  export type EtablissementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etablissements.
     */
    data: XOR<EtablissementUpdateManyMutationInput, EtablissementUncheckedUpdateManyInput>
    /**
     * Filter which Etablissements to update
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number
  }

  /**
   * Etablissement updateManyAndReturn
   */
  export type EtablissementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * The data used to update Etablissements.
     */
    data: XOR<EtablissementUpdateManyMutationInput, EtablissementUncheckedUpdateManyInput>
    /**
     * Filter which Etablissements to update
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number
  }

  /**
   * Etablissement upsert
   */
  export type EtablissementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The filter to search for the Etablissement to update in case it exists.
     */
    where: EtablissementWhereUniqueInput
    /**
     * In case the Etablissement found by the `where` argument doesn't exist, create a new Etablissement with this data.
     */
    create: XOR<EtablissementCreateInput, EtablissementUncheckedCreateInput>
    /**
     * In case the Etablissement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtablissementUpdateInput, EtablissementUncheckedUpdateInput>
  }

  /**
   * Etablissement delete
   */
  export type EtablissementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter which Etablissement to delete.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement deleteMany
   */
  export type EtablissementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissements to delete
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to delete.
     */
    limit?: number
  }

  /**
   * Etablissement.candidats
   */
  export type Etablissement$candidatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    where?: CandidatWhereInput
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    cursor?: CandidatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Etablissement.Student
   */
  export type Etablissement$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Etablissement without action
   */
  export type EtablissementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
  }


  /**
   * Model Candidat
   */

  export type AggregateCandidat = {
    _count: CandidatCountAggregateOutputType | null
    _avg: CandidatAvgAggregateOutputType | null
    _sum: CandidatSumAggregateOutputType | null
    _min: CandidatMinAggregateOutputType | null
    _max: CandidatMaxAggregateOutputType | null
  }

  export type CandidatAvgAggregateOutputType = {
    id: number | null
    num: number | null
    jury: number | null
    etablissementId: number | null
  }

  export type CandidatSumAggregateOutputType = {
    id: number | null
    num: number | null
    jury: number | null
    etablissementId: number | null
  }

  export type CandidatMinAggregateOutputType = {
    id: number | null
    code: string | null
    num: number | null
    prenom: string | null
    nom: string | null
    sexe: string | null
    datnais: string | null
    lieunais: string | null
    aptitude: string | null
    option: string | null
    section: string | null
    jury: number | null
    firstEpPart: string | null
    secondEpPart: string | null
    centre: string | null
    etablissementId: number | null
    presence: $Enums.PresenceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidatMaxAggregateOutputType = {
    id: number | null
    code: string | null
    num: number | null
    prenom: string | null
    nom: string | null
    sexe: string | null
    datnais: string | null
    lieunais: string | null
    aptitude: string | null
    option: string | null
    section: string | null
    jury: number | null
    firstEpPart: string | null
    secondEpPart: string | null
    centre: string | null
    etablissementId: number | null
    presence: $Enums.PresenceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidatCountAggregateOutputType = {
    id: number
    code: number
    num: number
    prenom: number
    nom: number
    sexe: number
    datnais: number
    lieunais: number
    aptitude: number
    option: number
    section: number
    jury: number
    firstEpPart: number
    secondEpPart: number
    centre: number
    etablissementId: number
    presence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CandidatAvgAggregateInputType = {
    id?: true
    num?: true
    jury?: true
    etablissementId?: true
  }

  export type CandidatSumAggregateInputType = {
    id?: true
    num?: true
    jury?: true
    etablissementId?: true
  }

  export type CandidatMinAggregateInputType = {
    id?: true
    code?: true
    num?: true
    prenom?: true
    nom?: true
    sexe?: true
    datnais?: true
    lieunais?: true
    aptitude?: true
    option?: true
    section?: true
    jury?: true
    firstEpPart?: true
    secondEpPart?: true
    centre?: true
    etablissementId?: true
    presence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidatMaxAggregateInputType = {
    id?: true
    code?: true
    num?: true
    prenom?: true
    nom?: true
    sexe?: true
    datnais?: true
    lieunais?: true
    aptitude?: true
    option?: true
    section?: true
    jury?: true
    firstEpPart?: true
    secondEpPart?: true
    centre?: true
    etablissementId?: true
    presence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidatCountAggregateInputType = {
    id?: true
    code?: true
    num?: true
    prenom?: true
    nom?: true
    sexe?: true
    datnais?: true
    lieunais?: true
    aptitude?: true
    option?: true
    section?: true
    jury?: true
    firstEpPart?: true
    secondEpPart?: true
    centre?: true
    etablissementId?: true
    presence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CandidatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidat to aggregate.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidats
    **/
    _count?: true | CandidatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatMaxAggregateInputType
  }

  export type GetCandidatAggregateType<T extends CandidatAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidat[P]>
      : GetScalarType<T[P], AggregateCandidat[P]>
  }




  export type CandidatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatWhereInput
    orderBy?: CandidatOrderByWithAggregationInput | CandidatOrderByWithAggregationInput[]
    by: CandidatScalarFieldEnum[] | CandidatScalarFieldEnum
    having?: CandidatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatCountAggregateInputType | true
    _avg?: CandidatAvgAggregateInputType
    _sum?: CandidatSumAggregateInputType
    _min?: CandidatMinAggregateInputType
    _max?: CandidatMaxAggregateInputType
  }

  export type CandidatGroupByOutputType = {
    id: number
    code: string | null
    num: number | null
    prenom: string | null
    nom: string | null
    sexe: string | null
    datnais: string | null
    lieunais: string | null
    aptitude: string | null
    option: string | null
    section: string | null
    jury: number | null
    firstEpPart: string | null
    secondEpPart: string | null
    centre: string | null
    etablissementId: number
    presence: $Enums.PresenceType
    createdAt: Date
    updatedAt: Date
    _count: CandidatCountAggregateOutputType | null
    _avg: CandidatAvgAggregateOutputType | null
    _sum: CandidatSumAggregateOutputType | null
    _min: CandidatMinAggregateOutputType | null
    _max: CandidatMaxAggregateOutputType | null
  }

  type GetCandidatGroupByPayload<T extends CandidatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatGroupByOutputType[P]>
        }
      >
    >


  export type CandidatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    num?: boolean
    prenom?: boolean
    nom?: boolean
    sexe?: boolean
    datnais?: boolean
    lieunais?: boolean
    aptitude?: boolean
    option?: boolean
    section?: boolean
    jury?: boolean
    firstEpPart?: boolean
    secondEpPart?: boolean
    centre?: boolean
    etablissementId?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
    notes?: boolean | Candidat$notesArgs<ExtArgs>
    _count?: boolean | CandidatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidat"]>

  export type CandidatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    num?: boolean
    prenom?: boolean
    nom?: boolean
    sexe?: boolean
    datnais?: boolean
    lieunais?: boolean
    aptitude?: boolean
    option?: boolean
    section?: boolean
    jury?: boolean
    firstEpPart?: boolean
    secondEpPart?: boolean
    centre?: boolean
    etablissementId?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidat"]>

  export type CandidatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    num?: boolean
    prenom?: boolean
    nom?: boolean
    sexe?: boolean
    datnais?: boolean
    lieunais?: boolean
    aptitude?: boolean
    option?: boolean
    section?: boolean
    jury?: boolean
    firstEpPart?: boolean
    secondEpPart?: boolean
    centre?: boolean
    etablissementId?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidat"]>

  export type CandidatSelectScalar = {
    id?: boolean
    code?: boolean
    num?: boolean
    prenom?: boolean
    nom?: boolean
    sexe?: boolean
    datnais?: boolean
    lieunais?: boolean
    aptitude?: boolean
    option?: boolean
    section?: boolean
    jury?: boolean
    firstEpPart?: boolean
    secondEpPart?: boolean
    centre?: boolean
    etablissementId?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CandidatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "num" | "prenom" | "nom" | "sexe" | "datnais" | "lieunais" | "aptitude" | "option" | "section" | "jury" | "firstEpPart" | "secondEpPart" | "centre" | "etablissementId" | "presence" | "createdAt" | "updatedAt", ExtArgs["result"]["candidat"]>
  export type CandidatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
    notes?: boolean | Candidat$notesArgs<ExtArgs>
    _count?: boolean | CandidatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }
  export type CandidatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }

  export type $CandidatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidat"
    objects: {
      Etablissement: Prisma.$EtablissementPayload<ExtArgs>
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string | null
      num: number | null
      prenom: string | null
      nom: string | null
      sexe: string | null
      datnais: string | null
      lieunais: string | null
      aptitude: string | null
      option: string | null
      section: string | null
      jury: number | null
      firstEpPart: string | null
      secondEpPart: string | null
      centre: string | null
      etablissementId: number
      presence: $Enums.PresenceType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["candidat"]>
    composites: {}
  }

  type CandidatGetPayload<S extends boolean | null | undefined | CandidatDefaultArgs> = $Result.GetResult<Prisma.$CandidatPayload, S>

  type CandidatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatCountAggregateInputType | true
    }

  export interface CandidatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidat'], meta: { name: 'Candidat' } }
    /**
     * Find zero or one Candidat that matches the filter.
     * @param {CandidatFindUniqueArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatFindUniqueArgs>(args: SelectSubset<T, CandidatFindUniqueArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidatFindUniqueOrThrowArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatFindFirstArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatFindFirstArgs>(args?: SelectSubset<T, CandidatFindFirstArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatFindFirstOrThrowArgs} args - Arguments to find a Candidat
     * @example
     * // Get one Candidat
     * const candidat = await prisma.candidat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidats
     * const candidats = await prisma.candidat.findMany()
     * 
     * // Get first 10 Candidats
     * const candidats = await prisma.candidat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatWithIdOnly = await prisma.candidat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidatFindManyArgs>(args?: SelectSubset<T, CandidatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidat.
     * @param {CandidatCreateArgs} args - Arguments to create a Candidat.
     * @example
     * // Create one Candidat
     * const Candidat = await prisma.candidat.create({
     *   data: {
     *     // ... data to create a Candidat
     *   }
     * })
     * 
     */
    create<T extends CandidatCreateArgs>(args: SelectSubset<T, CandidatCreateArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidats.
     * @param {CandidatCreateManyArgs} args - Arguments to create many Candidats.
     * @example
     * // Create many Candidats
     * const candidat = await prisma.candidat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatCreateManyArgs>(args?: SelectSubset<T, CandidatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidats and returns the data saved in the database.
     * @param {CandidatCreateManyAndReturnArgs} args - Arguments to create many Candidats.
     * @example
     * // Create many Candidats
     * const candidat = await prisma.candidat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidats and only return the `id`
     * const candidatWithIdOnly = await prisma.candidat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidatCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidat.
     * @param {CandidatDeleteArgs} args - Arguments to delete one Candidat.
     * @example
     * // Delete one Candidat
     * const Candidat = await prisma.candidat.delete({
     *   where: {
     *     // ... filter to delete one Candidat
     *   }
     * })
     * 
     */
    delete<T extends CandidatDeleteArgs>(args: SelectSubset<T, CandidatDeleteArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidat.
     * @param {CandidatUpdateArgs} args - Arguments to update one Candidat.
     * @example
     * // Update one Candidat
     * const candidat = await prisma.candidat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatUpdateArgs>(args: SelectSubset<T, CandidatUpdateArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidats.
     * @param {CandidatDeleteManyArgs} args - Arguments to filter Candidats to delete.
     * @example
     * // Delete a few Candidats
     * const { count } = await prisma.candidat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatDeleteManyArgs>(args?: SelectSubset<T, CandidatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidats
     * const candidat = await prisma.candidat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatUpdateManyArgs>(args: SelectSubset<T, CandidatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidats and returns the data updated in the database.
     * @param {CandidatUpdateManyAndReturnArgs} args - Arguments to update many Candidats.
     * @example
     * // Update many Candidats
     * const candidat = await prisma.candidat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidats and only return the `id`
     * const candidatWithIdOnly = await prisma.candidat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidatUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidat.
     * @param {CandidatUpsertArgs} args - Arguments to update or create a Candidat.
     * @example
     * // Update or create a Candidat
     * const candidat = await prisma.candidat.upsert({
     *   create: {
     *     // ... data to create a Candidat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidat we want to update
     *   }
     * })
     */
    upsert<T extends CandidatUpsertArgs>(args: SelectSubset<T, CandidatUpsertArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatCountArgs} args - Arguments to filter Candidats to count.
     * @example
     * // Count the number of Candidats
     * const count = await prisma.candidat.count({
     *   where: {
     *     // ... the filter for the Candidats we want to count
     *   }
     * })
    **/
    count<T extends CandidatCountArgs>(
      args?: Subset<T, CandidatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatAggregateArgs>(args: Subset<T, CandidatAggregateArgs>): Prisma.PrismaPromise<GetCandidatAggregateType<T>>

    /**
     * Group by Candidat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatGroupByArgs['orderBy'] }
        : { orderBy?: CandidatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidat model
   */
  readonly fields: CandidatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Etablissement<T extends EtablissementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtablissementDefaultArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends Candidat$notesArgs<ExtArgs> = {}>(args?: Subset<T, Candidat$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidat model
   */
  interface CandidatFieldRefs {
    readonly id: FieldRef<"Candidat", 'Int'>
    readonly code: FieldRef<"Candidat", 'String'>
    readonly num: FieldRef<"Candidat", 'Int'>
    readonly prenom: FieldRef<"Candidat", 'String'>
    readonly nom: FieldRef<"Candidat", 'String'>
    readonly sexe: FieldRef<"Candidat", 'String'>
    readonly datnais: FieldRef<"Candidat", 'String'>
    readonly lieunais: FieldRef<"Candidat", 'String'>
    readonly aptitude: FieldRef<"Candidat", 'String'>
    readonly option: FieldRef<"Candidat", 'String'>
    readonly section: FieldRef<"Candidat", 'String'>
    readonly jury: FieldRef<"Candidat", 'Int'>
    readonly firstEpPart: FieldRef<"Candidat", 'String'>
    readonly secondEpPart: FieldRef<"Candidat", 'String'>
    readonly centre: FieldRef<"Candidat", 'String'>
    readonly etablissementId: FieldRef<"Candidat", 'Int'>
    readonly presence: FieldRef<"Candidat", 'PresenceType'>
    readonly createdAt: FieldRef<"Candidat", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidat findUnique
   */
  export type CandidatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat findUniqueOrThrow
   */
  export type CandidatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat findFirst
   */
  export type CandidatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidats.
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidats.
     */
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Candidat findFirstOrThrow
   */
  export type CandidatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidat to fetch.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidats.
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidats.
     */
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Candidat findMany
   */
  export type CandidatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter, which Candidats to fetch.
     */
    where?: CandidatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidats to fetch.
     */
    orderBy?: CandidatOrderByWithRelationInput | CandidatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidats.
     */
    cursor?: CandidatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidats.
     */
    skip?: number
    distinct?: CandidatScalarFieldEnum | CandidatScalarFieldEnum[]
  }

  /**
   * Candidat create
   */
  export type CandidatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidat.
     */
    data: XOR<CandidatCreateInput, CandidatUncheckedCreateInput>
  }

  /**
   * Candidat createMany
   */
  export type CandidatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidats.
     */
    data: CandidatCreateManyInput | CandidatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidat createManyAndReturn
   */
  export type CandidatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * The data used to create many Candidats.
     */
    data: CandidatCreateManyInput | CandidatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidat update
   */
  export type CandidatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidat.
     */
    data: XOR<CandidatUpdateInput, CandidatUncheckedUpdateInput>
    /**
     * Choose, which Candidat to update.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat updateMany
   */
  export type CandidatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidats.
     */
    data: XOR<CandidatUpdateManyMutationInput, CandidatUncheckedUpdateManyInput>
    /**
     * Filter which Candidats to update
     */
    where?: CandidatWhereInput
    /**
     * Limit how many Candidats to update.
     */
    limit?: number
  }

  /**
   * Candidat updateManyAndReturn
   */
  export type CandidatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * The data used to update Candidats.
     */
    data: XOR<CandidatUpdateManyMutationInput, CandidatUncheckedUpdateManyInput>
    /**
     * Filter which Candidats to update
     */
    where?: CandidatWhereInput
    /**
     * Limit how many Candidats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidat upsert
   */
  export type CandidatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidat to update in case it exists.
     */
    where: CandidatWhereUniqueInput
    /**
     * In case the Candidat found by the `where` argument doesn't exist, create a new Candidat with this data.
     */
    create: XOR<CandidatCreateInput, CandidatUncheckedCreateInput>
    /**
     * In case the Candidat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatUpdateInput, CandidatUncheckedUpdateInput>
  }

  /**
   * Candidat delete
   */
  export type CandidatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
    /**
     * Filter which Candidat to delete.
     */
    where: CandidatWhereUniqueInput
  }

  /**
   * Candidat deleteMany
   */
  export type CandidatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidats to delete
     */
    where?: CandidatWhereInput
    /**
     * Limit how many Candidats to delete.
     */
    limit?: number
  }

  /**
   * Candidat.notes
   */
  export type Candidat$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Candidat without action
   */
  export type CandidatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidat
     */
    select?: CandidatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidat
     */
    omit?: CandidatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatInclude<ExtArgs> | null
  }


  /**
   * Model Discipline
   */

  export type AggregateDiscipline = {
    _count: DisciplineCountAggregateOutputType | null
    _avg: DisciplineAvgAggregateOutputType | null
    _sum: DisciplineSumAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  export type DisciplineAvgAggregateOutputType = {
    id: number | null
  }

  export type DisciplineSumAggregateOutputType = {
    id: number | null
  }

  export type DisciplineMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplineCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisciplineAvgAggregateInputType = {
    id?: true
  }

  export type DisciplineSumAggregateInputType = {
    id?: true
  }

  export type DisciplineMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplineMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplineCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisciplineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discipline to aggregate.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplines
    **/
    _count?: true | DisciplineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineMaxAggregateInputType
  }

  export type GetDisciplineAggregateType<T extends DisciplineAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscipline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscipline[P]>
      : GetScalarType<T[P], AggregateDiscipline[P]>
  }




  export type DisciplineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineWhereInput
    orderBy?: DisciplineOrderByWithAggregationInput | DisciplineOrderByWithAggregationInput[]
    by: DisciplineScalarFieldEnum[] | DisciplineScalarFieldEnum
    having?: DisciplineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineCountAggregateInputType | true
    _avg?: DisciplineAvgAggregateInputType
    _sum?: DisciplineSumAggregateInputType
    _min?: DisciplineMinAggregateInputType
    _max?: DisciplineMaxAggregateInputType
  }

  export type DisciplineGroupByOutputType = {
    id: number
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: DisciplineCountAggregateOutputType | null
    _avg: DisciplineAvgAggregateOutputType | null
    _sum: DisciplineSumAggregateOutputType | null
    _min: DisciplineMinAggregateOutputType | null
    _max: DisciplineMaxAggregateOutputType | null
  }

  type GetDisciplineGroupByPayload<T extends DisciplineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matieres?: boolean | Discipline$matieresArgs<ExtArgs>
    _count?: boolean | DisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discipline"]>

  export type DisciplineSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisciplineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["discipline"]>
  export type DisciplineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matieres?: boolean | Discipline$matieresArgs<ExtArgs>
    _count?: boolean | DisciplineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisciplineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisciplinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discipline"
    objects: {
      matieres: Prisma.$MatierePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["discipline"]>
    composites: {}
  }

  type DisciplineGetPayload<S extends boolean | null | undefined | DisciplineDefaultArgs> = $Result.GetResult<Prisma.$DisciplinePayload, S>

  type DisciplineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineCountAggregateInputType | true
    }

  export interface DisciplineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discipline'], meta: { name: 'Discipline' } }
    /**
     * Find zero or one Discipline that matches the filter.
     * @param {DisciplineFindUniqueArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineFindUniqueArgs>(args: SelectSubset<T, DisciplineFindUniqueArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discipline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineFindUniqueOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineFindFirstArgs>(args?: SelectSubset<T, DisciplineFindFirstArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discipline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindFirstOrThrowArgs} args - Arguments to find a Discipline
     * @example
     * // Get one Discipline
     * const discipline = await prisma.discipline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplines
     * const disciplines = await prisma.discipline.findMany()
     * 
     * // Get first 10 Disciplines
     * const disciplines = await prisma.discipline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineWithIdOnly = await prisma.discipline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineFindManyArgs>(args?: SelectSubset<T, DisciplineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discipline.
     * @param {DisciplineCreateArgs} args - Arguments to create a Discipline.
     * @example
     * // Create one Discipline
     * const Discipline = await prisma.discipline.create({
     *   data: {
     *     // ... data to create a Discipline
     *   }
     * })
     * 
     */
    create<T extends DisciplineCreateArgs>(args: SelectSubset<T, DisciplineCreateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplines.
     * @param {DisciplineCreateManyArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineCreateManyArgs>(args?: SelectSubset<T, DisciplineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplines and returns the data saved in the database.
     * @param {DisciplineCreateManyAndReturnArgs} args - Arguments to create many Disciplines.
     * @example
     * // Create many Disciplines
     * const discipline = await prisma.discipline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discipline.
     * @param {DisciplineDeleteArgs} args - Arguments to delete one Discipline.
     * @example
     * // Delete one Discipline
     * const Discipline = await prisma.discipline.delete({
     *   where: {
     *     // ... filter to delete one Discipline
     *   }
     * })
     * 
     */
    delete<T extends DisciplineDeleteArgs>(args: SelectSubset<T, DisciplineDeleteArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discipline.
     * @param {DisciplineUpdateArgs} args - Arguments to update one Discipline.
     * @example
     * // Update one Discipline
     * const discipline = await prisma.discipline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineUpdateArgs>(args: SelectSubset<T, DisciplineUpdateArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplines.
     * @param {DisciplineDeleteManyArgs} args - Arguments to filter Disciplines to delete.
     * @example
     * // Delete a few Disciplines
     * const { count } = await prisma.discipline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineDeleteManyArgs>(args?: SelectSubset<T, DisciplineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineUpdateManyArgs>(args: SelectSubset<T, DisciplineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines and returns the data updated in the database.
     * @param {DisciplineUpdateManyAndReturnArgs} args - Arguments to update many Disciplines.
     * @example
     * // Update many Disciplines
     * const discipline = await prisma.discipline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplines and only return the `id`
     * const disciplineWithIdOnly = await prisma.discipline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplineUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discipline.
     * @param {DisciplineUpsertArgs} args - Arguments to update or create a Discipline.
     * @example
     * // Update or create a Discipline
     * const discipline = await prisma.discipline.upsert({
     *   create: {
     *     // ... data to create a Discipline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discipline we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineUpsertArgs>(args: SelectSubset<T, DisciplineUpsertArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCountArgs} args - Arguments to filter Disciplines to count.
     * @example
     * // Count the number of Disciplines
     * const count = await prisma.discipline.count({
     *   where: {
     *     // ... the filter for the Disciplines we want to count
     *   }
     * })
    **/
    count<T extends DisciplineCountArgs>(
      args?: Subset<T, DisciplineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplineAggregateArgs>(args: Subset<T, DisciplineAggregateArgs>): Prisma.PrismaPromise<GetDisciplineAggregateType<T>>

    /**
     * Group by Discipline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discipline model
   */
  readonly fields: DisciplineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discipline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matieres<T extends Discipline$matieresArgs<ExtArgs> = {}>(args?: Subset<T, Discipline$matieresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discipline model
   */
  interface DisciplineFieldRefs {
    readonly id: FieldRef<"Discipline", 'Int'>
    readonly name: FieldRef<"Discipline", 'String'>
    readonly slug: FieldRef<"Discipline", 'String'>
    readonly createdAt: FieldRef<"Discipline", 'DateTime'>
    readonly updatedAt: FieldRef<"Discipline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discipline findUnique
   */
  export type DisciplineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findUniqueOrThrow
   */
  export type DisciplineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline findFirst
   */
  export type DisciplineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findFirstOrThrow
   */
  export type DisciplineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Discipline to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     */
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline findMany
   */
  export type DisciplineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter, which Disciplines to fetch.
     */
    where?: DisciplineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     */
    orderBy?: DisciplineOrderByWithRelationInput | DisciplineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplines.
     */
    cursor?: DisciplineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     */
    skip?: number
    distinct?: DisciplineScalarFieldEnum | DisciplineScalarFieldEnum[]
  }

  /**
   * Discipline create
   */
  export type DisciplineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The data needed to create a Discipline.
     */
    data: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
  }

  /**
   * Discipline createMany
   */
  export type DisciplineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline createManyAndReturn
   */
  export type DisciplineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplines.
     */
    data: DisciplineCreateManyInput | DisciplineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discipline update
   */
  export type DisciplineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The data needed to update a Discipline.
     */
    data: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
    /**
     * Choose, which Discipline to update.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline updateMany
   */
  export type DisciplineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline updateManyAndReturn
   */
  export type DisciplineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * The data used to update Disciplines.
     */
    data: XOR<DisciplineUpdateManyMutationInput, DisciplineUncheckedUpdateManyInput>
    /**
     * Filter which Disciplines to update
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to update.
     */
    limit?: number
  }

  /**
   * Discipline upsert
   */
  export type DisciplineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * The filter to search for the Discipline to update in case it exists.
     */
    where: DisciplineWhereUniqueInput
    /**
     * In case the Discipline found by the `where` argument doesn't exist, create a new Discipline with this data.
     */
    create: XOR<DisciplineCreateInput, DisciplineUncheckedCreateInput>
    /**
     * In case the Discipline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineUpdateInput, DisciplineUncheckedUpdateInput>
  }

  /**
   * Discipline delete
   */
  export type DisciplineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
    /**
     * Filter which Discipline to delete.
     */
    where: DisciplineWhereUniqueInput
  }

  /**
   * Discipline deleteMany
   */
  export type DisciplineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplines to delete
     */
    where?: DisciplineWhereInput
    /**
     * Limit how many Disciplines to delete.
     */
    limit?: number
  }

  /**
   * Discipline.matieres
   */
  export type Discipline$matieresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    where?: MatiereWhereInput
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    cursor?: MatiereWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Discipline without action
   */
  export type DisciplineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discipline
     */
    select?: DisciplineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discipline
     */
    omit?: DisciplineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineInclude<ExtArgs> | null
  }


  /**
   * Model Matiere
   */

  export type AggregateMatiere = {
    _count: MatiereCountAggregateOutputType | null
    _avg: MatiereAvgAggregateOutputType | null
    _sum: MatiereSumAggregateOutputType | null
    _min: MatiereMinAggregateOutputType | null
    _max: MatiereMaxAggregateOutputType | null
  }

  export type MatiereAvgAggregateOutputType = {
    id: number | null
    coefficient: number | null
    disciplineId: number | null
  }

  export type MatiereSumAggregateOutputType = {
    id: number | null
    coefficient: number | null
    disciplineId: number | null
  }

  export type MatiereMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    coefficient: number | null
    disciplineId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatiereMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    coefficient: number | null
    disciplineId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatiereCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    coefficient: number
    disciplineId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatiereAvgAggregateInputType = {
    id?: true
    coefficient?: true
    disciplineId?: true
  }

  export type MatiereSumAggregateInputType = {
    id?: true
    coefficient?: true
    disciplineId?: true
  }

  export type MatiereMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    coefficient?: true
    disciplineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatiereMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    coefficient?: true
    disciplineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatiereCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    coefficient?: true
    disciplineId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatiereAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matiere to aggregate.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matieres
    **/
    _count?: true | MatiereCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatiereAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatiereSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatiereMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatiereMaxAggregateInputType
  }

  export type GetMatiereAggregateType<T extends MatiereAggregateArgs> = {
        [P in keyof T & keyof AggregateMatiere]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatiere[P]>
      : GetScalarType<T[P], AggregateMatiere[P]>
  }




  export type MatiereGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatiereWhereInput
    orderBy?: MatiereOrderByWithAggregationInput | MatiereOrderByWithAggregationInput[]
    by: MatiereScalarFieldEnum[] | MatiereScalarFieldEnum
    having?: MatiereScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatiereCountAggregateInputType | true
    _avg?: MatiereAvgAggregateInputType
    _sum?: MatiereSumAggregateInputType
    _min?: MatiereMinAggregateInputType
    _max?: MatiereMaxAggregateInputType
  }

  export type MatiereGroupByOutputType = {
    id: number
    name: string
    slug: string
    coefficient: number
    disciplineId: number
    createdAt: Date
    updatedAt: Date
    _count: MatiereCountAggregateOutputType | null
    _avg: MatiereAvgAggregateOutputType | null
    _sum: MatiereSumAggregateOutputType | null
    _min: MatiereMinAggregateOutputType | null
    _max: MatiereMaxAggregateOutputType | null
  }

  type GetMatiereGroupByPayload<T extends MatiereGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatiereGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatiereGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatiereGroupByOutputType[P]>
            : GetScalarType<T[P], MatiereGroupByOutputType[P]>
        }
      >
    >


  export type MatiereSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
    notes?: boolean | Matiere$notesArgs<ExtArgs>
    _count?: boolean | MatiereCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matiere"]>

  export type MatiereSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matiere"]>

  export type MatiereSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matiere"]>

  export type MatiereSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    coefficient?: boolean
    disciplineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatiereOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "coefficient" | "disciplineId" | "createdAt" | "updatedAt", ExtArgs["result"]["matiere"]>
  export type MatiereInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
    notes?: boolean | Matiere$notesArgs<ExtArgs>
    _count?: boolean | MatiereCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatiereIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }
  export type MatiereIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discipline?: boolean | DisciplineDefaultArgs<ExtArgs>
  }

  export type $MatierePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matiere"
    objects: {
      discipline: Prisma.$DisciplinePayload<ExtArgs>
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      coefficient: number
      disciplineId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matiere"]>
    composites: {}
  }

  type MatiereGetPayload<S extends boolean | null | undefined | MatiereDefaultArgs> = $Result.GetResult<Prisma.$MatierePayload, S>

  type MatiereCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatiereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatiereCountAggregateInputType | true
    }

  export interface MatiereDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matiere'], meta: { name: 'Matiere' } }
    /**
     * Find zero or one Matiere that matches the filter.
     * @param {MatiereFindUniqueArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatiereFindUniqueArgs>(args: SelectSubset<T, MatiereFindUniqueArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matiere that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatiereFindUniqueOrThrowArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatiereFindUniqueOrThrowArgs>(args: SelectSubset<T, MatiereFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matiere that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereFindFirstArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatiereFindFirstArgs>(args?: SelectSubset<T, MatiereFindFirstArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matiere that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereFindFirstOrThrowArgs} args - Arguments to find a Matiere
     * @example
     * // Get one Matiere
     * const matiere = await prisma.matiere.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatiereFindFirstOrThrowArgs>(args?: SelectSubset<T, MatiereFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matieres
     * const matieres = await prisma.matiere.findMany()
     * 
     * // Get first 10 Matieres
     * const matieres = await prisma.matiere.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matiereWithIdOnly = await prisma.matiere.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatiereFindManyArgs>(args?: SelectSubset<T, MatiereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matiere.
     * @param {MatiereCreateArgs} args - Arguments to create a Matiere.
     * @example
     * // Create one Matiere
     * const Matiere = await prisma.matiere.create({
     *   data: {
     *     // ... data to create a Matiere
     *   }
     * })
     * 
     */
    create<T extends MatiereCreateArgs>(args: SelectSubset<T, MatiereCreateArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matieres.
     * @param {MatiereCreateManyArgs} args - Arguments to create many Matieres.
     * @example
     * // Create many Matieres
     * const matiere = await prisma.matiere.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatiereCreateManyArgs>(args?: SelectSubset<T, MatiereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matieres and returns the data saved in the database.
     * @param {MatiereCreateManyAndReturnArgs} args - Arguments to create many Matieres.
     * @example
     * // Create many Matieres
     * const matiere = await prisma.matiere.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matieres and only return the `id`
     * const matiereWithIdOnly = await prisma.matiere.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatiereCreateManyAndReturnArgs>(args?: SelectSubset<T, MatiereCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matiere.
     * @param {MatiereDeleteArgs} args - Arguments to delete one Matiere.
     * @example
     * // Delete one Matiere
     * const Matiere = await prisma.matiere.delete({
     *   where: {
     *     // ... filter to delete one Matiere
     *   }
     * })
     * 
     */
    delete<T extends MatiereDeleteArgs>(args: SelectSubset<T, MatiereDeleteArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matiere.
     * @param {MatiereUpdateArgs} args - Arguments to update one Matiere.
     * @example
     * // Update one Matiere
     * const matiere = await prisma.matiere.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatiereUpdateArgs>(args: SelectSubset<T, MatiereUpdateArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matieres.
     * @param {MatiereDeleteManyArgs} args - Arguments to filter Matieres to delete.
     * @example
     * // Delete a few Matieres
     * const { count } = await prisma.matiere.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatiereDeleteManyArgs>(args?: SelectSubset<T, MatiereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matieres
     * const matiere = await prisma.matiere.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatiereUpdateManyArgs>(args: SelectSubset<T, MatiereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matieres and returns the data updated in the database.
     * @param {MatiereUpdateManyAndReturnArgs} args - Arguments to update many Matieres.
     * @example
     * // Update many Matieres
     * const matiere = await prisma.matiere.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matieres and only return the `id`
     * const matiereWithIdOnly = await prisma.matiere.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatiereUpdateManyAndReturnArgs>(args: SelectSubset<T, MatiereUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matiere.
     * @param {MatiereUpsertArgs} args - Arguments to update or create a Matiere.
     * @example
     * // Update or create a Matiere
     * const matiere = await prisma.matiere.upsert({
     *   create: {
     *     // ... data to create a Matiere
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matiere we want to update
     *   }
     * })
     */
    upsert<T extends MatiereUpsertArgs>(args: SelectSubset<T, MatiereUpsertArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereCountArgs} args - Arguments to filter Matieres to count.
     * @example
     * // Count the number of Matieres
     * const count = await prisma.matiere.count({
     *   where: {
     *     // ... the filter for the Matieres we want to count
     *   }
     * })
    **/
    count<T extends MatiereCountArgs>(
      args?: Subset<T, MatiereCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatiereCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matiere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatiereAggregateArgs>(args: Subset<T, MatiereAggregateArgs>): Prisma.PrismaPromise<GetMatiereAggregateType<T>>

    /**
     * Group by Matiere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatiereGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatiereGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatiereGroupByArgs['orderBy'] }
        : { orderBy?: MatiereGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatiereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatiereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matiere model
   */
  readonly fields: MatiereFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matiere.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatiereClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discipline<T extends DisciplineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplineDefaultArgs<ExtArgs>>): Prisma__DisciplineClient<$Result.GetResult<Prisma.$DisciplinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends Matiere$notesArgs<ExtArgs> = {}>(args?: Subset<T, Matiere$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Matiere model
   */
  interface MatiereFieldRefs {
    readonly id: FieldRef<"Matiere", 'Int'>
    readonly name: FieldRef<"Matiere", 'String'>
    readonly slug: FieldRef<"Matiere", 'String'>
    readonly coefficient: FieldRef<"Matiere", 'Int'>
    readonly disciplineId: FieldRef<"Matiere", 'Int'>
    readonly createdAt: FieldRef<"Matiere", 'DateTime'>
    readonly updatedAt: FieldRef<"Matiere", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matiere findUnique
   */
  export type MatiereFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere findUniqueOrThrow
   */
  export type MatiereFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere findFirst
   */
  export type MatiereFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matieres.
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matieres.
     */
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Matiere findFirstOrThrow
   */
  export type MatiereFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matiere to fetch.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matieres.
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matieres.
     */
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Matiere findMany
   */
  export type MatiereFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where?: MatiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatiereOrderByWithRelationInput | MatiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matieres.
     */
    cursor?: MatiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    distinct?: MatiereScalarFieldEnum | MatiereScalarFieldEnum[]
  }

  /**
   * Matiere create
   */
  export type MatiereCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * The data needed to create a Matiere.
     */
    data: XOR<MatiereCreateInput, MatiereUncheckedCreateInput>
  }

  /**
   * Matiere createMany
   */
  export type MatiereCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matieres.
     */
    data: MatiereCreateManyInput | MatiereCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matiere createManyAndReturn
   */
  export type MatiereCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * The data used to create many Matieres.
     */
    data: MatiereCreateManyInput | MatiereCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matiere update
   */
  export type MatiereUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * The data needed to update a Matiere.
     */
    data: XOR<MatiereUpdateInput, MatiereUncheckedUpdateInput>
    /**
     * Choose, which Matiere to update.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere updateMany
   */
  export type MatiereUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matieres.
     */
    data: XOR<MatiereUpdateManyMutationInput, MatiereUncheckedUpdateManyInput>
    /**
     * Filter which Matieres to update
     */
    where?: MatiereWhereInput
    /**
     * Limit how many Matieres to update.
     */
    limit?: number
  }

  /**
   * Matiere updateManyAndReturn
   */
  export type MatiereUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * The data used to update Matieres.
     */
    data: XOR<MatiereUpdateManyMutationInput, MatiereUncheckedUpdateManyInput>
    /**
     * Filter which Matieres to update
     */
    where?: MatiereWhereInput
    /**
     * Limit how many Matieres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matiere upsert
   */
  export type MatiereUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * The filter to search for the Matiere to update in case it exists.
     */
    where: MatiereWhereUniqueInput
    /**
     * In case the Matiere found by the `where` argument doesn't exist, create a new Matiere with this data.
     */
    create: XOR<MatiereCreateInput, MatiereUncheckedCreateInput>
    /**
     * In case the Matiere was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatiereUpdateInput, MatiereUncheckedUpdateInput>
  }

  /**
   * Matiere delete
   */
  export type MatiereDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
    /**
     * Filter which Matiere to delete.
     */
    where: MatiereWhereUniqueInput
  }

  /**
   * Matiere deleteMany
   */
  export type MatiereDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matieres to delete
     */
    where?: MatiereWhereInput
    /**
     * Limit how many Matieres to delete.
     */
    limit?: number
  }

  /**
   * Matiere.notes
   */
  export type Matiere$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Matiere without action
   */
  export type MatiereDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matiere
     */
    select?: MatiereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matiere
     */
    omit?: MatiereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatiereInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    score: number | null
    matiereId: number | null
    candidatId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    score: number | null
    matiereId: number | null
    candidatId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    score: number | null
    matiereId: number | null
    candidatId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    score: number | null
    matiereId: number | null
    candidatId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    score: number
    matiereId: number
    candidatId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    score?: true
    matiereId?: true
    candidatId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    score?: true
    matiereId?: true
    candidatId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    score?: true
    matiereId?: true
    candidatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    score?: true
    matiereId?: true
    candidatId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    score?: true
    matiereId?: true
    candidatId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    score: number
    matiereId: number
    candidatId: number
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    matiereId?: boolean
    candidatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidats?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    matiereId?: boolean
    candidatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidats?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    matiereId?: boolean
    candidatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidats?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    score?: boolean
    matiereId?: boolean
    candidatId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "matiereId" | "candidatId" | "createdAt" | "updatedAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidats?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidats?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidats?: boolean | CandidatDefaultArgs<ExtArgs>
    matiere?: boolean | MatiereDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      candidats: Prisma.$CandidatPayload<ExtArgs>
      matiere: Prisma.$MatierePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      score: number
      matiereId: number
      candidatId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidats<T extends CandidatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatDefaultArgs<ExtArgs>>): Prisma__CandidatClient<$Result.GetResult<Prisma.$CandidatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matiere<T extends MatiereDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatiereDefaultArgs<ExtArgs>>): Prisma__MatiereClient<$Result.GetResult<Prisma.$MatierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly score: FieldRef<"Note", 'Int'>
    readonly matiereId: FieldRef<"Note", 'Int'>
    readonly candidatId: FieldRef<"Note", 'Int'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Centre
   */

  export type AggregateCentre = {
    _count: CentreCountAggregateOutputType | null
    _avg: CentreAvgAggregateOutputType | null
    _sum: CentreSumAggregateOutputType | null
    _min: CentreMinAggregateOutputType | null
    _max: CentreMaxAggregateOutputType | null
  }

  export type CentreAvgAggregateOutputType = {
    id: number | null
    nb_candidats: number | null
  }

  export type CentreSumAggregateOutputType = {
    id: number | null
    nb_candidats: number | null
  }

  export type CentreMinAggregateOutputType = {
    id: number | null
    centre: string | null
    nb_candidats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CentreMaxAggregateOutputType = {
    id: number | null
    centre: string | null
    nb_candidats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CentreCountAggregateOutputType = {
    id: number
    centre: number
    nb_candidats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CentreAvgAggregateInputType = {
    id?: true
    nb_candidats?: true
  }

  export type CentreSumAggregateInputType = {
    id?: true
    nb_candidats?: true
  }

  export type CentreMinAggregateInputType = {
    id?: true
    centre?: true
    nb_candidats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CentreMaxAggregateInputType = {
    id?: true
    centre?: true
    nb_candidats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CentreCountAggregateInputType = {
    id?: true
    centre?: true
    nb_candidats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CentreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centre to aggregate.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Centres
    **/
    _count?: true | CentreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CentreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CentreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentreMaxAggregateInputType
  }

  export type GetCentreAggregateType<T extends CentreAggregateArgs> = {
        [P in keyof T & keyof AggregateCentre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentre[P]>
      : GetScalarType<T[P], AggregateCentre[P]>
  }




  export type CentreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentreWhereInput
    orderBy?: CentreOrderByWithAggregationInput | CentreOrderByWithAggregationInput[]
    by: CentreScalarFieldEnum[] | CentreScalarFieldEnum
    having?: CentreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentreCountAggregateInputType | true
    _avg?: CentreAvgAggregateInputType
    _sum?: CentreSumAggregateInputType
    _min?: CentreMinAggregateInputType
    _max?: CentreMaxAggregateInputType
  }

  export type CentreGroupByOutputType = {
    id: number
    centre: string | null
    nb_candidats: number | null
    createdAt: Date
    updatedAt: Date
    _count: CentreCountAggregateOutputType | null
    _avg: CentreAvgAggregateOutputType | null
    _sum: CentreSumAggregateOutputType | null
    _min: CentreMinAggregateOutputType | null
    _max: CentreMaxAggregateOutputType | null
  }

  type GetCentreGroupByPayload<T extends CentreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentreGroupByOutputType[P]>
            : GetScalarType<T[P], CentreGroupByOutputType[P]>
        }
      >
    >


  export type CentreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centre?: boolean
    nb_candidats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["centre"]>

  export type CentreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centre?: boolean
    nb_candidats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["centre"]>

  export type CentreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centre?: boolean
    nb_candidats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["centre"]>

  export type CentreSelectScalar = {
    id?: boolean
    centre?: boolean
    nb_candidats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CentreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "centre" | "nb_candidats" | "createdAt" | "updatedAt", ExtArgs["result"]["centre"]>

  export type $CentrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Centre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      centre: string | null
      nb_candidats: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["centre"]>
    composites: {}
  }

  type CentreGetPayload<S extends boolean | null | undefined | CentreDefaultArgs> = $Result.GetResult<Prisma.$CentrePayload, S>

  type CentreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CentreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CentreCountAggregateInputType | true
    }

  export interface CentreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Centre'], meta: { name: 'Centre' } }
    /**
     * Find zero or one Centre that matches the filter.
     * @param {CentreFindUniqueArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CentreFindUniqueArgs>(args: SelectSubset<T, CentreFindUniqueArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Centre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CentreFindUniqueOrThrowArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CentreFindUniqueOrThrowArgs>(args: SelectSubset<T, CentreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreFindFirstArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CentreFindFirstArgs>(args?: SelectSubset<T, CentreFindFirstArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreFindFirstOrThrowArgs} args - Arguments to find a Centre
     * @example
     * // Get one Centre
     * const centre = await prisma.centre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CentreFindFirstOrThrowArgs>(args?: SelectSubset<T, CentreFindFirstOrThrowArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centres
     * const centres = await prisma.centre.findMany()
     * 
     * // Get first 10 Centres
     * const centres = await prisma.centre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centreWithIdOnly = await prisma.centre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CentreFindManyArgs>(args?: SelectSubset<T, CentreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Centre.
     * @param {CentreCreateArgs} args - Arguments to create a Centre.
     * @example
     * // Create one Centre
     * const Centre = await prisma.centre.create({
     *   data: {
     *     // ... data to create a Centre
     *   }
     * })
     * 
     */
    create<T extends CentreCreateArgs>(args: SelectSubset<T, CentreCreateArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centres.
     * @param {CentreCreateManyArgs} args - Arguments to create many Centres.
     * @example
     * // Create many Centres
     * const centre = await prisma.centre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CentreCreateManyArgs>(args?: SelectSubset<T, CentreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Centres and returns the data saved in the database.
     * @param {CentreCreateManyAndReturnArgs} args - Arguments to create many Centres.
     * @example
     * // Create many Centres
     * const centre = await prisma.centre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Centres and only return the `id`
     * const centreWithIdOnly = await prisma.centre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CentreCreateManyAndReturnArgs>(args?: SelectSubset<T, CentreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Centre.
     * @param {CentreDeleteArgs} args - Arguments to delete one Centre.
     * @example
     * // Delete one Centre
     * const Centre = await prisma.centre.delete({
     *   where: {
     *     // ... filter to delete one Centre
     *   }
     * })
     * 
     */
    delete<T extends CentreDeleteArgs>(args: SelectSubset<T, CentreDeleteArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Centre.
     * @param {CentreUpdateArgs} args - Arguments to update one Centre.
     * @example
     * // Update one Centre
     * const centre = await prisma.centre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CentreUpdateArgs>(args: SelectSubset<T, CentreUpdateArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centres.
     * @param {CentreDeleteManyArgs} args - Arguments to filter Centres to delete.
     * @example
     * // Delete a few Centres
     * const { count } = await prisma.centre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CentreDeleteManyArgs>(args?: SelectSubset<T, CentreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centres
     * const centre = await prisma.centre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CentreUpdateManyArgs>(args: SelectSubset<T, CentreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centres and returns the data updated in the database.
     * @param {CentreUpdateManyAndReturnArgs} args - Arguments to update many Centres.
     * @example
     * // Update many Centres
     * const centre = await prisma.centre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Centres and only return the `id`
     * const centreWithIdOnly = await prisma.centre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CentreUpdateManyAndReturnArgs>(args: SelectSubset<T, CentreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Centre.
     * @param {CentreUpsertArgs} args - Arguments to update or create a Centre.
     * @example
     * // Update or create a Centre
     * const centre = await prisma.centre.upsert({
     *   create: {
     *     // ... data to create a Centre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centre we want to update
     *   }
     * })
     */
    upsert<T extends CentreUpsertArgs>(args: SelectSubset<T, CentreUpsertArgs<ExtArgs>>): Prisma__CentreClient<$Result.GetResult<Prisma.$CentrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreCountArgs} args - Arguments to filter Centres to count.
     * @example
     * // Count the number of Centres
     * const count = await prisma.centre.count({
     *   where: {
     *     // ... the filter for the Centres we want to count
     *   }
     * })
    **/
    count<T extends CentreCountArgs>(
      args?: Subset<T, CentreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Centre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CentreAggregateArgs>(args: Subset<T, CentreAggregateArgs>): Prisma.PrismaPromise<GetCentreAggregateType<T>>

    /**
     * Group by Centre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CentreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CentreGroupByArgs['orderBy'] }
        : { orderBy?: CentreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CentreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Centre model
   */
  readonly fields: CentreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Centre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CentreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Centre model
   */
  interface CentreFieldRefs {
    readonly id: FieldRef<"Centre", 'Int'>
    readonly centre: FieldRef<"Centre", 'String'>
    readonly nb_candidats: FieldRef<"Centre", 'Int'>
    readonly createdAt: FieldRef<"Centre", 'DateTime'>
    readonly updatedAt: FieldRef<"Centre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Centre findUnique
   */
  export type CentreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre findUniqueOrThrow
   */
  export type CentreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre findFirst
   */
  export type CentreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centres.
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centres.
     */
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Centre findFirstOrThrow
   */
  export type CentreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Filter, which Centre to fetch.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centres.
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centres.
     */
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Centre findMany
   */
  export type CentreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Filter, which Centres to fetch.
     */
    where?: CentreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centres to fetch.
     */
    orderBy?: CentreOrderByWithRelationInput | CentreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Centres.
     */
    cursor?: CentreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centres.
     */
    skip?: number
    distinct?: CentreScalarFieldEnum | CentreScalarFieldEnum[]
  }

  /**
   * Centre create
   */
  export type CentreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The data needed to create a Centre.
     */
    data: XOR<CentreCreateInput, CentreUncheckedCreateInput>
  }

  /**
   * Centre createMany
   */
  export type CentreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Centres.
     */
    data: CentreCreateManyInput | CentreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Centre createManyAndReturn
   */
  export type CentreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The data used to create many Centres.
     */
    data: CentreCreateManyInput | CentreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Centre update
   */
  export type CentreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The data needed to update a Centre.
     */
    data: XOR<CentreUpdateInput, CentreUncheckedUpdateInput>
    /**
     * Choose, which Centre to update.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre updateMany
   */
  export type CentreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Centres.
     */
    data: XOR<CentreUpdateManyMutationInput, CentreUncheckedUpdateManyInput>
    /**
     * Filter which Centres to update
     */
    where?: CentreWhereInput
    /**
     * Limit how many Centres to update.
     */
    limit?: number
  }

  /**
   * Centre updateManyAndReturn
   */
  export type CentreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The data used to update Centres.
     */
    data: XOR<CentreUpdateManyMutationInput, CentreUncheckedUpdateManyInput>
    /**
     * Filter which Centres to update
     */
    where?: CentreWhereInput
    /**
     * Limit how many Centres to update.
     */
    limit?: number
  }

  /**
   * Centre upsert
   */
  export type CentreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * The filter to search for the Centre to update in case it exists.
     */
    where: CentreWhereUniqueInput
    /**
     * In case the Centre found by the `where` argument doesn't exist, create a new Centre with this data.
     */
    create: XOR<CentreCreateInput, CentreUncheckedCreateInput>
    /**
     * In case the Centre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CentreUpdateInput, CentreUncheckedUpdateInput>
  }

  /**
   * Centre delete
   */
  export type CentreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
    /**
     * Filter which Centre to delete.
     */
    where: CentreWhereUniqueInput
  }

  /**
   * Centre deleteMany
   */
  export type CentreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centres to delete
     */
    where?: CentreWhereInput
    /**
     * Limit how many Centres to delete.
     */
    limit?: number
  }

  /**
   * Centre without action
   */
  export type CentreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Centre
     */
    select?: CentreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Centre
     */
    omit?: CentreOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    suggessions: string | null
    phone: string | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    suggessions: string | null
    phone: string | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    email: number
    suggessions: number
    phone: number
    adresse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    suggessions?: true
    phone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    suggessions?: true
    phone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    suggessions?: true
    phone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    prenom: string
    nom: string
    email: string
    suggessions: string | null
    phone: string | null
    adresse: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    suggessions?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    suggessions?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    suggessions?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    suggessions?: boolean
    phone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prenom" | "nom" | "email" | "suggessions" | "phone" | "adresse" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prenom: string
      nom: string
      email: string
      suggessions: string | null
      phone: string | null
      adresse: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly prenom: FieldRef<"Contact", 'String'>
    readonly nom: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly suggessions: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly adresse: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    etablissementId: number | null
    numero: number | null
    total: number | null
    moyenne: number | null
    rang: number | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
    eps: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    etablissementId: number | null
    numero: number | null
    total: number | null
    moyenne: number | null
    rang: number | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
    eps: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    ien: string | null
    etablissementId: number | null
    numero: number | null
    prenom: string | null
    nom: string | null
    dateNaissance: Date | null
    lieuNaissance: string | null
    photo: string | null
    statut: $Enums.Statut | null
    epOptionnel: $Enums.EpOptionnel | null
    aptitude: $Enums.Aptitude | null
    sexe: $Enums.Gender | null
    total: number | null
    moyenne: number | null
    rang: number | null
    resultat: string | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
    eps: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    ien: string | null
    etablissementId: number | null
    numero: number | null
    prenom: string | null
    nom: string | null
    dateNaissance: Date | null
    lieuNaissance: string | null
    photo: string | null
    statut: $Enums.Statut | null
    epOptionnel: $Enums.EpOptionnel | null
    aptitude: $Enums.Aptitude | null
    sexe: $Enums.Gender | null
    total: number | null
    moyenne: number | null
    rang: number | null
    resultat: string | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
    eps: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    ien: number
    etablissementId: number
    numero: number
    prenom: number
    nom: number
    dateNaissance: number
    lieuNaissance: number
    photo: number
    statut: number
    epOptionnel: number
    aptitude: number
    sexe: number
    total: number
    moyenne: number
    rang: number
    resultat: number
    red: number
    dic: number
    tsq: number
    svt: number
    lv1: number
    mat: number
    hg: number
    ec: number
    sp: number
    part: number
    orale: number
    eps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    etablissementId?: true
    numero?: true
    total?: true
    moyenne?: true
    rang?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
    eps?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    etablissementId?: true
    numero?: true
    total?: true
    moyenne?: true
    rang?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
    eps?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    ien?: true
    etablissementId?: true
    numero?: true
    prenom?: true
    nom?: true
    dateNaissance?: true
    lieuNaissance?: true
    photo?: true
    statut?: true
    epOptionnel?: true
    aptitude?: true
    sexe?: true
    total?: true
    moyenne?: true
    rang?: true
    resultat?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
    eps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    ien?: true
    etablissementId?: true
    numero?: true
    prenom?: true
    nom?: true
    dateNaissance?: true
    lieuNaissance?: true
    photo?: true
    statut?: true
    epOptionnel?: true
    aptitude?: true
    sexe?: true
    total?: true
    moyenne?: true
    rang?: true
    resultat?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
    eps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    ien?: true
    etablissementId?: true
    numero?: true
    prenom?: true
    nom?: true
    dateNaissance?: true
    lieuNaissance?: true
    photo?: true
    statut?: true
    epOptionnel?: true
    aptitude?: true
    sexe?: true
    total?: true
    moyenne?: true
    rang?: true
    resultat?: true
    red?: true
    dic?: true
    tsq?: true
    svt?: true
    lv1?: true
    mat?: true
    hg?: true
    ec?: true
    sp?: true
    part?: true
    orale?: true
    eps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    ien: string
    etablissementId: number
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date
    lieuNaissance: string | null
    photo: string | null
    statut: $Enums.Statut
    epOptionnel: $Enums.EpOptionnel
    aptitude: $Enums.Aptitude
    sexe: $Enums.Gender
    total: number | null
    moyenne: number | null
    rang: number | null
    resultat: string | null
    red: number | null
    dic: number | null
    tsq: number | null
    svt: number | null
    lv1: number | null
    mat: number | null
    hg: number | null
    ec: number | null
    sp: number | null
    part: number | null
    orale: number | null
    eps: number | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ien?: boolean
    etablissementId?: boolean
    numero?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    lieuNaissance?: boolean
    photo?: boolean
    statut?: boolean
    epOptionnel?: boolean
    aptitude?: boolean
    sexe?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    resultat?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    eps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ien?: boolean
    etablissementId?: boolean
    numero?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    lieuNaissance?: boolean
    photo?: boolean
    statut?: boolean
    epOptionnel?: boolean
    aptitude?: boolean
    sexe?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    resultat?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    eps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ien?: boolean
    etablissementId?: boolean
    numero?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    lieuNaissance?: boolean
    photo?: boolean
    statut?: boolean
    epOptionnel?: boolean
    aptitude?: boolean
    sexe?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    resultat?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    eps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    ien?: boolean
    etablissementId?: boolean
    numero?: boolean
    prenom?: boolean
    nom?: boolean
    dateNaissance?: boolean
    lieuNaissance?: boolean
    photo?: boolean
    statut?: boolean
    epOptionnel?: boolean
    aptitude?: boolean
    sexe?: boolean
    total?: boolean
    moyenne?: boolean
    rang?: boolean
    resultat?: boolean
    red?: boolean
    dic?: boolean
    tsq?: boolean
    svt?: boolean
    lv1?: boolean
    mat?: boolean
    hg?: boolean
    ec?: boolean
    sp?: boolean
    part?: boolean
    orale?: boolean
    eps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ien" | "etablissementId" | "numero" | "prenom" | "nom" | "dateNaissance" | "lieuNaissance" | "photo" | "statut" | "epOptionnel" | "aptitude" | "sexe" | "total" | "moyenne" | "rang" | "resultat" | "red" | "dic" | "tsq" | "svt" | "lv1" | "mat" | "hg" | "ec" | "sp" | "part" | "orale" | "eps" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      Etablissement: Prisma.$EtablissementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ien: string
      etablissementId: number
      numero: number
      prenom: string
      nom: string
      dateNaissance: Date
      lieuNaissance: string | null
      photo: string | null
      statut: $Enums.Statut
      epOptionnel: $Enums.EpOptionnel
      aptitude: $Enums.Aptitude
      sexe: $Enums.Gender
      total: number | null
      moyenne: number | null
      rang: number | null
      resultat: string | null
      red: number | null
      dic: number | null
      tsq: number | null
      svt: number | null
      lv1: number | null
      mat: number | null
      hg: number | null
      ec: number | null
      sp: number | null
      part: number | null
      orale: number | null
      eps: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Etablissement<T extends EtablissementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtablissementDefaultArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly ien: FieldRef<"Student", 'String'>
    readonly etablissementId: FieldRef<"Student", 'Int'>
    readonly numero: FieldRef<"Student", 'Int'>
    readonly prenom: FieldRef<"Student", 'String'>
    readonly nom: FieldRef<"Student", 'String'>
    readonly dateNaissance: FieldRef<"Student", 'DateTime'>
    readonly lieuNaissance: FieldRef<"Student", 'String'>
    readonly photo: FieldRef<"Student", 'String'>
    readonly statut: FieldRef<"Student", 'Statut'>
    readonly epOptionnel: FieldRef<"Student", 'EpOptionnel'>
    readonly aptitude: FieldRef<"Student", 'Aptitude'>
    readonly sexe: FieldRef<"Student", 'Gender'>
    readonly total: FieldRef<"Student", 'Float'>
    readonly moyenne: FieldRef<"Student", 'Float'>
    readonly rang: FieldRef<"Student", 'Int'>
    readonly resultat: FieldRef<"Student", 'String'>
    readonly red: FieldRef<"Student", 'Float'>
    readonly dic: FieldRef<"Student", 'Float'>
    readonly tsq: FieldRef<"Student", 'Float'>
    readonly svt: FieldRef<"Student", 'Float'>
    readonly lv1: FieldRef<"Student", 'Float'>
    readonly mat: FieldRef<"Student", 'Float'>
    readonly hg: FieldRef<"Student", 'Float'>
    readonly ec: FieldRef<"Student", 'Float'>
    readonly sp: FieldRef<"Student", 'Float'>
    readonly part: FieldRef<"Student", 'Float'>
    readonly orale: FieldRef<"Student", 'Float'>
    readonly eps: FieldRef<"Student", 'Float'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GuestbookEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestbookEntryScalarFieldEnum = (typeof GuestbookEntryScalarFieldEnum)[keyof typeof GuestbookEntryScalarFieldEnum]


  export const EtablissementScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    slug: 'slug',
    type: 'type',
    jury: 'jury',
    effectif: 'effectif',
    adresse: 'adresse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EtablissementScalarFieldEnum = (typeof EtablissementScalarFieldEnum)[keyof typeof EtablissementScalarFieldEnum]


  export const CandidatScalarFieldEnum: {
    id: 'id',
    code: 'code',
    num: 'num',
    prenom: 'prenom',
    nom: 'nom',
    sexe: 'sexe',
    datnais: 'datnais',
    lieunais: 'lieunais',
    aptitude: 'aptitude',
    option: 'option',
    section: 'section',
    jury: 'jury',
    firstEpPart: 'firstEpPart',
    secondEpPart: 'secondEpPart',
    centre: 'centre',
    etablissementId: 'etablissementId',
    presence: 'presence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CandidatScalarFieldEnum = (typeof CandidatScalarFieldEnum)[keyof typeof CandidatScalarFieldEnum]


  export const DisciplineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisciplineScalarFieldEnum = (typeof DisciplineScalarFieldEnum)[keyof typeof DisciplineScalarFieldEnum]


  export const MatiereScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    coefficient: 'coefficient',
    disciplineId: 'disciplineId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatiereScalarFieldEnum = (typeof MatiereScalarFieldEnum)[keyof typeof MatiereScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    score: 'score',
    matiereId: 'matiereId',
    candidatId: 'candidatId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const CentreScalarFieldEnum: {
    id: 'id',
    centre: 'centre',
    nb_candidats: 'nb_candidats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CentreScalarFieldEnum = (typeof CentreScalarFieldEnum)[keyof typeof CentreScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    suggessions: 'suggessions',
    phone: 'phone',
    adresse: 'adresse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    ien: 'ien',
    etablissementId: 'etablissementId',
    numero: 'numero',
    prenom: 'prenom',
    nom: 'nom',
    dateNaissance: 'dateNaissance',
    lieuNaissance: 'lieuNaissance',
    photo: 'photo',
    statut: 'statut',
    epOptionnel: 'epOptionnel',
    aptitude: 'aptitude',
    sexe: 'sexe',
    total: 'total',
    moyenne: 'moyenne',
    rang: 'rang',
    resultat: 'resultat',
    red: 'red',
    dic: 'dic',
    tsq: 'tsq',
    svt: 'svt',
    lv1: 'lv1',
    mat: 'mat',
    hg: 'hg',
    ec: 'ec',
    sp: 'sp',
    part: 'part',
    orale: 'orale',
    eps: 'eps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TypeEtablissement'
   */
  export type EnumTypeEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtablissement'>
    


  /**
   * Reference to a field of type 'TypeEtablissement[]'
   */
  export type ListEnumTypeEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtablissement[]'>
    


  /**
   * Reference to a field of type 'PresenceType'
   */
  export type EnumPresenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresenceType'>
    


  /**
   * Reference to a field of type 'PresenceType[]'
   */
  export type ListEnumPresenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresenceType[]'>
    


  /**
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Statut[]'
   */
  export type ListEnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut[]'>
    


  /**
   * Reference to a field of type 'EpOptionnel'
   */
  export type EnumEpOptionnelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EpOptionnel'>
    


  /**
   * Reference to a field of type 'EpOptionnel[]'
   */
  export type ListEnumEpOptionnelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EpOptionnel[]'>
    


  /**
   * Reference to a field of type 'Aptitude'
   */
  export type EnumAptitudeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Aptitude'>
    


  /**
   * Reference to a field of type 'Aptitude[]'
   */
  export type ListEnumAptitudeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Aptitude[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Guestbook?: GuestbookEntryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Guestbook?: GuestbookEntryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Guestbook?: GuestbookEntryListRelationFilter
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GuestbookEntryWhereInput = {
    AND?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    OR?: GuestbookEntryWhereInput[]
    NOT?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    id?: StringFilter<"GuestbookEntry"> | string
    userId?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GuestbookEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type GuestbookEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    OR?: GuestbookEntryWhereInput[]
    NOT?: GuestbookEntryWhereInput | GuestbookEntryWhereInput[]
    userId?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GuestbookEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestbookEntryCountOrderByAggregateInput
    _max?: GuestbookEntryMaxOrderByAggregateInput
    _min?: GuestbookEntryMinOrderByAggregateInput
  }

  export type GuestbookEntryScalarWhereWithAggregatesInput = {
    AND?: GuestbookEntryScalarWhereWithAggregatesInput | GuestbookEntryScalarWhereWithAggregatesInput[]
    OR?: GuestbookEntryScalarWhereWithAggregatesInput[]
    NOT?: GuestbookEntryScalarWhereWithAggregatesInput | GuestbookEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuestbookEntry"> | string
    userId?: StringWithAggregatesFilter<"GuestbookEntry"> | string
    message?: StringWithAggregatesFilter<"GuestbookEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GuestbookEntry"> | Date | string
  }

  export type EtablissementWhereInput = {
    AND?: EtablissementWhereInput | EtablissementWhereInput[]
    OR?: EtablissementWhereInput[]
    NOT?: EtablissementWhereInput | EtablissementWhereInput[]
    id?: IntFilter<"Etablissement"> | number
    nom?: StringFilter<"Etablissement"> | string
    slug?: StringFilter<"Etablissement"> | string
    type?: EnumTypeEtablissementFilter<"Etablissement"> | $Enums.TypeEtablissement
    jury?: IntNullableFilter<"Etablissement"> | number | null
    effectif?: IntNullableFilter<"Etablissement"> | number | null
    adresse?: StringFilter<"Etablissement"> | string
    createdAt?: DateTimeFilter<"Etablissement"> | Date | string
    updatedAt?: DateTimeFilter<"Etablissement"> | Date | string
    candidats?: CandidatListRelationFilter
    Student?: StudentListRelationFilter
  }

  export type EtablissementOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    jury?: SortOrderInput | SortOrder
    effectif?: SortOrderInput | SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidats?: CandidatOrderByRelationAggregateInput
    Student?: StudentOrderByRelationAggregateInput
  }

  export type EtablissementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    slug?: string
    AND?: EtablissementWhereInput | EtablissementWhereInput[]
    OR?: EtablissementWhereInput[]
    NOT?: EtablissementWhereInput | EtablissementWhereInput[]
    type?: EnumTypeEtablissementFilter<"Etablissement"> | $Enums.TypeEtablissement
    jury?: IntNullableFilter<"Etablissement"> | number | null
    effectif?: IntNullableFilter<"Etablissement"> | number | null
    adresse?: StringFilter<"Etablissement"> | string
    createdAt?: DateTimeFilter<"Etablissement"> | Date | string
    updatedAt?: DateTimeFilter<"Etablissement"> | Date | string
    candidats?: CandidatListRelationFilter
    Student?: StudentListRelationFilter
  }, "id" | "nom" | "slug">

  export type EtablissementOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    jury?: SortOrderInput | SortOrder
    effectif?: SortOrderInput | SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EtablissementCountOrderByAggregateInput
    _avg?: EtablissementAvgOrderByAggregateInput
    _max?: EtablissementMaxOrderByAggregateInput
    _min?: EtablissementMinOrderByAggregateInput
    _sum?: EtablissementSumOrderByAggregateInput
  }

  export type EtablissementScalarWhereWithAggregatesInput = {
    AND?: EtablissementScalarWhereWithAggregatesInput | EtablissementScalarWhereWithAggregatesInput[]
    OR?: EtablissementScalarWhereWithAggregatesInput[]
    NOT?: EtablissementScalarWhereWithAggregatesInput | EtablissementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etablissement"> | number
    nom?: StringWithAggregatesFilter<"Etablissement"> | string
    slug?: StringWithAggregatesFilter<"Etablissement"> | string
    type?: EnumTypeEtablissementWithAggregatesFilter<"Etablissement"> | $Enums.TypeEtablissement
    jury?: IntNullableWithAggregatesFilter<"Etablissement"> | number | null
    effectif?: IntNullableWithAggregatesFilter<"Etablissement"> | number | null
    adresse?: StringWithAggregatesFilter<"Etablissement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Etablissement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Etablissement"> | Date | string
  }

  export type CandidatWhereInput = {
    AND?: CandidatWhereInput | CandidatWhereInput[]
    OR?: CandidatWhereInput[]
    NOT?: CandidatWhereInput | CandidatWhereInput[]
    id?: IntFilter<"Candidat"> | number
    code?: StringNullableFilter<"Candidat"> | string | null
    num?: IntNullableFilter<"Candidat"> | number | null
    prenom?: StringNullableFilter<"Candidat"> | string | null
    nom?: StringNullableFilter<"Candidat"> | string | null
    sexe?: StringNullableFilter<"Candidat"> | string | null
    datnais?: StringNullableFilter<"Candidat"> | string | null
    lieunais?: StringNullableFilter<"Candidat"> | string | null
    aptitude?: StringNullableFilter<"Candidat"> | string | null
    option?: StringNullableFilter<"Candidat"> | string | null
    section?: StringNullableFilter<"Candidat"> | string | null
    jury?: IntNullableFilter<"Candidat"> | number | null
    firstEpPart?: StringNullableFilter<"Candidat"> | string | null
    secondEpPart?: StringNullableFilter<"Candidat"> | string | null
    centre?: StringNullableFilter<"Candidat"> | string | null
    etablissementId?: IntFilter<"Candidat"> | number
    presence?: EnumPresenceTypeFilter<"Candidat"> | $Enums.PresenceType
    createdAt?: DateTimeFilter<"Candidat"> | Date | string
    updatedAt?: DateTimeFilter<"Candidat"> | Date | string
    Etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
    notes?: NoteListRelationFilter
  }

  export type CandidatOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    num?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    nom?: SortOrderInput | SortOrder
    sexe?: SortOrderInput | SortOrder
    datnais?: SortOrderInput | SortOrder
    lieunais?: SortOrderInput | SortOrder
    aptitude?: SortOrderInput | SortOrder
    option?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    jury?: SortOrderInput | SortOrder
    firstEpPart?: SortOrderInput | SortOrder
    secondEpPart?: SortOrderInput | SortOrder
    centre?: SortOrderInput | SortOrder
    etablissementId?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Etablissement?: EtablissementOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type CandidatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CandidatWhereInput | CandidatWhereInput[]
    OR?: CandidatWhereInput[]
    NOT?: CandidatWhereInput | CandidatWhereInput[]
    code?: StringNullableFilter<"Candidat"> | string | null
    num?: IntNullableFilter<"Candidat"> | number | null
    prenom?: StringNullableFilter<"Candidat"> | string | null
    nom?: StringNullableFilter<"Candidat"> | string | null
    sexe?: StringNullableFilter<"Candidat"> | string | null
    datnais?: StringNullableFilter<"Candidat"> | string | null
    lieunais?: StringNullableFilter<"Candidat"> | string | null
    aptitude?: StringNullableFilter<"Candidat"> | string | null
    option?: StringNullableFilter<"Candidat"> | string | null
    section?: StringNullableFilter<"Candidat"> | string | null
    jury?: IntNullableFilter<"Candidat"> | number | null
    firstEpPart?: StringNullableFilter<"Candidat"> | string | null
    secondEpPart?: StringNullableFilter<"Candidat"> | string | null
    centre?: StringNullableFilter<"Candidat"> | string | null
    etablissementId?: IntFilter<"Candidat"> | number
    presence?: EnumPresenceTypeFilter<"Candidat"> | $Enums.PresenceType
    createdAt?: DateTimeFilter<"Candidat"> | Date | string
    updatedAt?: DateTimeFilter<"Candidat"> | Date | string
    Etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
    notes?: NoteListRelationFilter
  }, "id">

  export type CandidatOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    num?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    nom?: SortOrderInput | SortOrder
    sexe?: SortOrderInput | SortOrder
    datnais?: SortOrderInput | SortOrder
    lieunais?: SortOrderInput | SortOrder
    aptitude?: SortOrderInput | SortOrder
    option?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    jury?: SortOrderInput | SortOrder
    firstEpPart?: SortOrderInput | SortOrder
    secondEpPart?: SortOrderInput | SortOrder
    centre?: SortOrderInput | SortOrder
    etablissementId?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CandidatCountOrderByAggregateInput
    _avg?: CandidatAvgOrderByAggregateInput
    _max?: CandidatMaxOrderByAggregateInput
    _min?: CandidatMinOrderByAggregateInput
    _sum?: CandidatSumOrderByAggregateInput
  }

  export type CandidatScalarWhereWithAggregatesInput = {
    AND?: CandidatScalarWhereWithAggregatesInput | CandidatScalarWhereWithAggregatesInput[]
    OR?: CandidatScalarWhereWithAggregatesInput[]
    NOT?: CandidatScalarWhereWithAggregatesInput | CandidatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Candidat"> | number
    code?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    num?: IntNullableWithAggregatesFilter<"Candidat"> | number | null
    prenom?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    nom?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    sexe?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    datnais?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    lieunais?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    aptitude?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    option?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    section?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    jury?: IntNullableWithAggregatesFilter<"Candidat"> | number | null
    firstEpPart?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    secondEpPart?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    centre?: StringNullableWithAggregatesFilter<"Candidat"> | string | null
    etablissementId?: IntWithAggregatesFilter<"Candidat"> | number
    presence?: EnumPresenceTypeWithAggregatesFilter<"Candidat"> | $Enums.PresenceType
    createdAt?: DateTimeWithAggregatesFilter<"Candidat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidat"> | Date | string
  }

  export type DisciplineWhereInput = {
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    id?: IntFilter<"Discipline"> | number
    name?: StringFilter<"Discipline"> | string
    slug?: StringFilter<"Discipline"> | string
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeFilter<"Discipline"> | Date | string
    matieres?: MatiereListRelationFilter
  }

  export type DisciplineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matieres?: MatiereOrderByRelationAggregateInput
  }

  export type DisciplineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: DisciplineWhereInput | DisciplineWhereInput[]
    OR?: DisciplineWhereInput[]
    NOT?: DisciplineWhereInput | DisciplineWhereInput[]
    name?: StringFilter<"Discipline"> | string
    createdAt?: DateTimeFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeFilter<"Discipline"> | Date | string
    matieres?: MatiereListRelationFilter
  }, "id" | "slug">

  export type DisciplineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisciplineCountOrderByAggregateInput
    _avg?: DisciplineAvgOrderByAggregateInput
    _max?: DisciplineMaxOrderByAggregateInput
    _min?: DisciplineMinOrderByAggregateInput
    _sum?: DisciplineSumOrderByAggregateInput
  }

  export type DisciplineScalarWhereWithAggregatesInput = {
    AND?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    OR?: DisciplineScalarWhereWithAggregatesInput[]
    NOT?: DisciplineScalarWhereWithAggregatesInput | DisciplineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Discipline"> | number
    name?: StringWithAggregatesFilter<"Discipline"> | string
    slug?: StringWithAggregatesFilter<"Discipline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discipline"> | Date | string
  }

  export type MatiereWhereInput = {
    AND?: MatiereWhereInput | MatiereWhereInput[]
    OR?: MatiereWhereInput[]
    NOT?: MatiereWhereInput | MatiereWhereInput[]
    id?: IntFilter<"Matiere"> | number
    name?: StringFilter<"Matiere"> | string
    slug?: StringFilter<"Matiere"> | string
    coefficient?: IntFilter<"Matiere"> | number
    disciplineId?: IntFilter<"Matiere"> | number
    createdAt?: DateTimeFilter<"Matiere"> | Date | string
    updatedAt?: DateTimeFilter<"Matiere"> | Date | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
    notes?: NoteListRelationFilter
  }

  export type MatiereOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discipline?: DisciplineOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type MatiereWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: MatiereWhereInput | MatiereWhereInput[]
    OR?: MatiereWhereInput[]
    NOT?: MatiereWhereInput | MatiereWhereInput[]
    name?: StringFilter<"Matiere"> | string
    coefficient?: IntFilter<"Matiere"> | number
    disciplineId?: IntFilter<"Matiere"> | number
    createdAt?: DateTimeFilter<"Matiere"> | Date | string
    updatedAt?: DateTimeFilter<"Matiere"> | Date | string
    discipline?: XOR<DisciplineScalarRelationFilter, DisciplineWhereInput>
    notes?: NoteListRelationFilter
  }, "id" | "slug">

  export type MatiereOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatiereCountOrderByAggregateInput
    _avg?: MatiereAvgOrderByAggregateInput
    _max?: MatiereMaxOrderByAggregateInput
    _min?: MatiereMinOrderByAggregateInput
    _sum?: MatiereSumOrderByAggregateInput
  }

  export type MatiereScalarWhereWithAggregatesInput = {
    AND?: MatiereScalarWhereWithAggregatesInput | MatiereScalarWhereWithAggregatesInput[]
    OR?: MatiereScalarWhereWithAggregatesInput[]
    NOT?: MatiereScalarWhereWithAggregatesInput | MatiereScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matiere"> | number
    name?: StringWithAggregatesFilter<"Matiere"> | string
    slug?: StringWithAggregatesFilter<"Matiere"> | string
    coefficient?: IntWithAggregatesFilter<"Matiere"> | number
    disciplineId?: IntWithAggregatesFilter<"Matiere"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Matiere"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Matiere"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    score?: IntFilter<"Note"> | number
    matiereId?: IntFilter<"Note"> | number
    candidatId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    candidats?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
    matiere?: XOR<MatiereScalarRelationFilter, MatiereWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidats?: CandidatOrderByWithRelationInput
    matiere?: MatiereOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    score?: IntFilter<"Note"> | number
    matiereId?: IntFilter<"Note"> | number
    candidatId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    candidats?: XOR<CandidatScalarRelationFilter, CandidatWhereInput>
    matiere?: XOR<MatiereScalarRelationFilter, MatiereWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    score?: IntWithAggregatesFilter<"Note"> | number
    matiereId?: IntWithAggregatesFilter<"Note"> | number
    candidatId?: IntWithAggregatesFilter<"Note"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type CentreWhereInput = {
    AND?: CentreWhereInput | CentreWhereInput[]
    OR?: CentreWhereInput[]
    NOT?: CentreWhereInput | CentreWhereInput[]
    id?: IntFilter<"Centre"> | number
    centre?: StringNullableFilter<"Centre"> | string | null
    nb_candidats?: IntNullableFilter<"Centre"> | number | null
    createdAt?: DateTimeFilter<"Centre"> | Date | string
    updatedAt?: DateTimeFilter<"Centre"> | Date | string
  }

  export type CentreOrderByWithRelationInput = {
    id?: SortOrder
    centre?: SortOrderInput | SortOrder
    nb_candidats?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CentreWhereInput | CentreWhereInput[]
    OR?: CentreWhereInput[]
    NOT?: CentreWhereInput | CentreWhereInput[]
    centre?: StringNullableFilter<"Centre"> | string | null
    nb_candidats?: IntNullableFilter<"Centre"> | number | null
    createdAt?: DateTimeFilter<"Centre"> | Date | string
    updatedAt?: DateTimeFilter<"Centre"> | Date | string
  }, "id">

  export type CentreOrderByWithAggregationInput = {
    id?: SortOrder
    centre?: SortOrderInput | SortOrder
    nb_candidats?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CentreCountOrderByAggregateInput
    _avg?: CentreAvgOrderByAggregateInput
    _max?: CentreMaxOrderByAggregateInput
    _min?: CentreMinOrderByAggregateInput
    _sum?: CentreSumOrderByAggregateInput
  }

  export type CentreScalarWhereWithAggregatesInput = {
    AND?: CentreScalarWhereWithAggregatesInput | CentreScalarWhereWithAggregatesInput[]
    OR?: CentreScalarWhereWithAggregatesInput[]
    NOT?: CentreScalarWhereWithAggregatesInput | CentreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Centre"> | number
    centre?: StringNullableWithAggregatesFilter<"Centre"> | string | null
    nb_candidats?: IntNullableWithAggregatesFilter<"Centre"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Centre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Centre"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    prenom?: StringFilter<"Contact"> | string
    nom?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    suggessions?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    adresse?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    suggessions?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    prenom?: StringFilter<"Contact"> | string
    nom?: StringFilter<"Contact"> | string
    suggessions?: StringNullableFilter<"Contact"> | string | null
    adresse?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id" | "email" | "phone">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    suggessions?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    prenom?: StringWithAggregatesFilter<"Contact"> | string
    nom?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    suggessions?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    ien?: StringFilter<"Student"> | string
    etablissementId?: IntFilter<"Student"> | number
    numero?: IntFilter<"Student"> | number
    prenom?: StringFilter<"Student"> | string
    nom?: StringFilter<"Student"> | string
    dateNaissance?: DateTimeFilter<"Student"> | Date | string
    lieuNaissance?: StringNullableFilter<"Student"> | string | null
    photo?: StringNullableFilter<"Student"> | string | null
    statut?: EnumStatutFilter<"Student"> | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFilter<"Student"> | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFilter<"Student"> | $Enums.Aptitude
    sexe?: EnumGenderFilter<"Student"> | $Enums.Gender
    total?: FloatNullableFilter<"Student"> | number | null
    moyenne?: FloatNullableFilter<"Student"> | number | null
    rang?: IntNullableFilter<"Student"> | number | null
    resultat?: StringNullableFilter<"Student"> | string | null
    red?: FloatNullableFilter<"Student"> | number | null
    dic?: FloatNullableFilter<"Student"> | number | null
    tsq?: FloatNullableFilter<"Student"> | number | null
    svt?: FloatNullableFilter<"Student"> | number | null
    lv1?: FloatNullableFilter<"Student"> | number | null
    mat?: FloatNullableFilter<"Student"> | number | null
    hg?: FloatNullableFilter<"Student"> | number | null
    ec?: FloatNullableFilter<"Student"> | number | null
    sp?: FloatNullableFilter<"Student"> | number | null
    part?: FloatNullableFilter<"Student"> | number | null
    orale?: FloatNullableFilter<"Student"> | number | null
    eps?: FloatNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    Etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    ien?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    lieuNaissance?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    statut?: SortOrder
    epOptionnel?: SortOrder
    aptitude?: SortOrder
    sexe?: SortOrder
    total?: SortOrderInput | SortOrder
    moyenne?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    resultat?: SortOrderInput | SortOrder
    red?: SortOrderInput | SortOrder
    dic?: SortOrderInput | SortOrder
    tsq?: SortOrderInput | SortOrder
    svt?: SortOrderInput | SortOrder
    lv1?: SortOrderInput | SortOrder
    mat?: SortOrderInput | SortOrder
    hg?: SortOrderInput | SortOrder
    ec?: SortOrderInput | SortOrder
    sp?: SortOrderInput | SortOrder
    part?: SortOrderInput | SortOrder
    orale?: SortOrderInput | SortOrder
    eps?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Etablissement?: EtablissementOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    ien?: StringFilter<"Student"> | string
    etablissementId?: IntFilter<"Student"> | number
    numero?: IntFilter<"Student"> | number
    prenom?: StringFilter<"Student"> | string
    nom?: StringFilter<"Student"> | string
    dateNaissance?: DateTimeFilter<"Student"> | Date | string
    lieuNaissance?: StringNullableFilter<"Student"> | string | null
    photo?: StringNullableFilter<"Student"> | string | null
    statut?: EnumStatutFilter<"Student"> | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFilter<"Student"> | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFilter<"Student"> | $Enums.Aptitude
    sexe?: EnumGenderFilter<"Student"> | $Enums.Gender
    total?: FloatNullableFilter<"Student"> | number | null
    moyenne?: FloatNullableFilter<"Student"> | number | null
    rang?: IntNullableFilter<"Student"> | number | null
    resultat?: StringNullableFilter<"Student"> | string | null
    red?: FloatNullableFilter<"Student"> | number | null
    dic?: FloatNullableFilter<"Student"> | number | null
    tsq?: FloatNullableFilter<"Student"> | number | null
    svt?: FloatNullableFilter<"Student"> | number | null
    lv1?: FloatNullableFilter<"Student"> | number | null
    mat?: FloatNullableFilter<"Student"> | number | null
    hg?: FloatNullableFilter<"Student"> | number | null
    ec?: FloatNullableFilter<"Student"> | number | null
    sp?: FloatNullableFilter<"Student"> | number | null
    part?: FloatNullableFilter<"Student"> | number | null
    orale?: FloatNullableFilter<"Student"> | number | null
    eps?: FloatNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    Etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    ien?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    lieuNaissance?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    statut?: SortOrder
    epOptionnel?: SortOrder
    aptitude?: SortOrder
    sexe?: SortOrder
    total?: SortOrderInput | SortOrder
    moyenne?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    resultat?: SortOrderInput | SortOrder
    red?: SortOrderInput | SortOrder
    dic?: SortOrderInput | SortOrder
    tsq?: SortOrderInput | SortOrder
    svt?: SortOrderInput | SortOrder
    lv1?: SortOrderInput | SortOrder
    mat?: SortOrderInput | SortOrder
    hg?: SortOrderInput | SortOrder
    ec?: SortOrderInput | SortOrder
    sp?: SortOrderInput | SortOrder
    part?: SortOrderInput | SortOrder
    orale?: SortOrderInput | SortOrder
    eps?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    ien?: StringWithAggregatesFilter<"Student"> | string
    etablissementId?: IntWithAggregatesFilter<"Student"> | number
    numero?: IntWithAggregatesFilter<"Student"> | number
    prenom?: StringWithAggregatesFilter<"Student"> | string
    nom?: StringWithAggregatesFilter<"Student"> | string
    dateNaissance?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    lieuNaissance?: StringNullableWithAggregatesFilter<"Student"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    statut?: EnumStatutWithAggregatesFilter<"Student"> | $Enums.Statut
    epOptionnel?: EnumEpOptionnelWithAggregatesFilter<"Student"> | $Enums.EpOptionnel
    aptitude?: EnumAptitudeWithAggregatesFilter<"Student"> | $Enums.Aptitude
    sexe?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    total?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    moyenne?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    rang?: IntNullableWithAggregatesFilter<"Student"> | number | null
    resultat?: StringNullableWithAggregatesFilter<"Student"> | string | null
    red?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    dic?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    tsq?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    svt?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    lv1?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    mat?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    hg?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    ec?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    sp?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    part?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    orale?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    eps?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Guestbook?: GuestbookEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Guestbook?: GuestbookEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Guestbook?: GuestbookEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Guestbook?: GuestbookEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutGuestbookInput
  }

  export type GuestbookEntryUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGuestbookNestedInput
  }

  export type GuestbookEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryCreateManyInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtablissementCreateInput = {
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    candidats?: CandidatCreateNestedManyWithoutEtablissementInput
    Student?: StudentCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUncheckedCreateInput = {
    id?: number
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    candidats?: CandidatUncheckedCreateNestedManyWithoutEtablissementInput
    Student?: StudentUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidats?: CandidatUpdateManyWithoutEtablissementNestedInput
    Student?: StudentUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidats?: CandidatUncheckedUpdateManyWithoutEtablissementNestedInput
    Student?: StudentUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementCreateManyInput = {
    id?: number
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EtablissementUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtablissementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatCreateInput = {
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    Etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
    notes?: NoteCreateNestedManyWithoutCandidatsInput
  }

  export type CandidatUncheckedCreateInput = {
    id?: number
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    etablissementId: number
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatsInput
  }

  export type CandidatUpdateInput = {
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
    notes?: NoteUpdateManyWithoutCandidatsNestedInput
  }

  export type CandidatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    etablissementId?: IntFieldUpdateOperationsInput | number
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutCandidatsNestedInput
  }

  export type CandidatCreateManyInput = {
    id?: number
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    etablissementId: number
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidatUpdateManyMutationInput = {
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    etablissementId?: IntFieldUpdateOperationsInput | number
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineCreateInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres?: MatiereCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres?: MatiereUncheckedCreateNestedManyWithoutDisciplineInput
  }

  export type DisciplineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatiereUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatiereUncheckedUpdateManyWithoutDisciplineNestedInput
  }

  export type DisciplineCreateManyInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatiereCreateInput = {
    name: string
    slug: string
    coefficient?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutMatieresInput
    notes?: NoteCreateNestedManyWithoutMatiereInput
  }

  export type MatiereUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    coefficient?: number
    disciplineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutMatiereInput
  }

  export type MatiereUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutMatieresNestedInput
    notes?: NoteUpdateManyWithoutMatiereNestedInput
  }

  export type MatiereUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    disciplineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutMatiereNestedInput
  }

  export type MatiereCreateManyInput = {
    id?: number
    name: string
    slug: string
    coefficient?: number
    disciplineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatiereUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatiereUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    disciplineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    candidats: CandidatCreateNestedOneWithoutNotesInput
    matiere: MatiereCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    score?: number
    matiereId: number
    candidatId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidats?: CandidatUpdateOneRequiredWithoutNotesNestedInput
    matiere?: MatiereUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matiereId?: IntFieldUpdateOperationsInput | number
    candidatId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: number
    score?: number
    matiereId: number
    candidatId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matiereId?: IntFieldUpdateOperationsInput | number
    candidatId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentreCreateInput = {
    centre?: string | null
    nb_candidats?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentreUncheckedCreateInput = {
    id?: number
    centre?: string | null
    nb_candidats?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentreUpdateInput = {
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    nb_candidats?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    nb_candidats?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentreCreateManyInput = {
    id?: number
    centre?: string | null
    nb_candidats?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentreUpdateManyMutationInput = {
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    nb_candidats?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    nb_candidats?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    prenom: string
    nom: string
    email: string
    suggessions?: string | null
    phone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    suggessions?: string | null
    phone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    suggessions?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    suggessions?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    suggessions?: string | null
    phone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    suggessions?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    suggessions?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    ien: string
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    lieuNaissance?: string | null
    photo?: string | null
    statut?: $Enums.Statut
    epOptionnel?: $Enums.EpOptionnel
    aptitude?: $Enums.Aptitude
    sexe?: $Enums.Gender
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    resultat?: string | null
    red?: number | null
    dic?: number | null
    tsq?: number | null
    svt?: number | null
    lv1?: number | null
    mat?: number | null
    hg?: number | null
    ec?: number | null
    sp?: number | null
    part?: number | null
    orale?: number | null
    eps?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Etablissement: EtablissementCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    ien: string
    etablissementId: number
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    lieuNaissance?: string | null
    photo?: string | null
    statut?: $Enums.Statut
    epOptionnel?: $Enums.EpOptionnel
    aptitude?: $Enums.Aptitude
    sexe?: $Enums.Gender
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    resultat?: string | null
    red?: number | null
    dic?: number | null
    tsq?: number | null
    svt?: number | null
    lv1?: number | null
    mat?: number | null
    hg?: number | null
    ec?: number | null
    sp?: number | null
    part?: number | null
    orale?: number | null
    eps?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateInput = {
    ien?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Etablissement?: EtablissementUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ien?: StringFieldUpdateOperationsInput | string
    etablissementId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyInput = {
    id?: number
    ien: string
    etablissementId: number
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    lieuNaissance?: string | null
    photo?: string | null
    statut?: $Enums.Statut
    epOptionnel?: $Enums.EpOptionnel
    aptitude?: $Enums.Aptitude
    sexe?: $Enums.Gender
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    resultat?: string | null
    red?: number | null
    dic?: number | null
    tsq?: number | null
    svt?: number | null
    lv1?: number | null
    mat?: number | null
    hg?: number | null
    ec?: number | null
    sp?: number | null
    part?: number | null
    orale?: number | null
    eps?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    ien?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ien?: StringFieldUpdateOperationsInput | string
    etablissementId?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuestbookEntryListRelationFilter = {
    every?: GuestbookEntryWhereInput
    some?: GuestbookEntryWhereInput
    none?: GuestbookEntryWhereInput
  }

  export type GuestbookEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GuestbookEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestbookEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestbookEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTypeEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | EnumTypeEtablissementFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEtablissementFilter<$PrismaModel> | $Enums.TypeEtablissement
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CandidatListRelationFilter = {
    every?: CandidatWhereInput
    some?: CandidatWhereInput
    none?: CandidatWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CandidatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtablissementCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    jury?: SortOrder
    effectif?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtablissementAvgOrderByAggregateInput = {
    id?: SortOrder
    jury?: SortOrder
    effectif?: SortOrder
  }

  export type EtablissementMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    jury?: SortOrder
    effectif?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtablissementMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    jury?: SortOrder
    effectif?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtablissementSumOrderByAggregateInput = {
    id?: SortOrder
    jury?: SortOrder
    effectif?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTypeEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | EnumTypeEtablissementFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.TypeEtablissement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeEtablissementFilter<$PrismaModel>
    _max?: NestedEnumTypeEtablissementFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPresenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceType | EnumPresenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceTypeFilter<$PrismaModel> | $Enums.PresenceType
  }

  export type EtablissementScalarRelationFilter = {
    is?: EtablissementWhereInput
    isNot?: EtablissementWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidatCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    num?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    sexe?: SortOrder
    datnais?: SortOrder
    lieunais?: SortOrder
    aptitude?: SortOrder
    option?: SortOrder
    section?: SortOrder
    jury?: SortOrder
    firstEpPart?: SortOrder
    secondEpPart?: SortOrder
    centre?: SortOrder
    etablissementId?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidatAvgOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    jury?: SortOrder
    etablissementId?: SortOrder
  }

  export type CandidatMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    num?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    sexe?: SortOrder
    datnais?: SortOrder
    lieunais?: SortOrder
    aptitude?: SortOrder
    option?: SortOrder
    section?: SortOrder
    jury?: SortOrder
    firstEpPart?: SortOrder
    secondEpPart?: SortOrder
    centre?: SortOrder
    etablissementId?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidatMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    num?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    sexe?: SortOrder
    datnais?: SortOrder
    lieunais?: SortOrder
    aptitude?: SortOrder
    option?: SortOrder
    section?: SortOrder
    jury?: SortOrder
    firstEpPart?: SortOrder
    secondEpPart?: SortOrder
    centre?: SortOrder
    etablissementId?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidatSumOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    jury?: SortOrder
    etablissementId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPresenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceType | EnumPresenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PresenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceTypeFilter<$PrismaModel>
    _max?: NestedEnumPresenceTypeFilter<$PrismaModel>
  }

  export type MatiereListRelationFilter = {
    every?: MatiereWhereInput
    some?: MatiereWhereInput
    none?: MatiereWhereInput
  }

  export type MatiereOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisciplineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisciplineScalarRelationFilter = {
    is?: DisciplineWhereInput
    isNot?: DisciplineWhereInput
  }

  export type MatiereCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatiereAvgOrderByAggregateInput = {
    id?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
  }

  export type MatiereMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatiereMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatiereSumOrderByAggregateInput = {
    id?: SortOrder
    coefficient?: SortOrder
    disciplineId?: SortOrder
  }

  export type CandidatScalarRelationFilter = {
    is?: CandidatWhereInput
    isNot?: CandidatWhereInput
  }

  export type MatiereScalarRelationFilter = {
    is?: MatiereWhereInput
    isNot?: MatiereWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    matiereId?: SortOrder
    candidatId?: SortOrder
  }

  export type CentreCountOrderByAggregateInput = {
    id?: SortOrder
    centre?: SortOrder
    nb_candidats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentreAvgOrderByAggregateInput = {
    id?: SortOrder
    nb_candidats?: SortOrder
  }

  export type CentreMaxOrderByAggregateInput = {
    id?: SortOrder
    centre?: SortOrder
    nb_candidats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentreMinOrderByAggregateInput = {
    id?: SortOrder
    centre?: SortOrder
    nb_candidats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentreSumOrderByAggregateInput = {
    id?: SortOrder
    nb_candidats?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    suggessions?: SortOrder
    phone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    suggessions?: SortOrder
    phone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    suggessions?: SortOrder
    phone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type EnumEpOptionnelFilter<$PrismaModel = never> = {
    equals?: $Enums.EpOptionnel | EnumEpOptionnelFieldRefInput<$PrismaModel>
    in?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    not?: NestedEnumEpOptionnelFilter<$PrismaModel> | $Enums.EpOptionnel
  }

  export type EnumAptitudeFilter<$PrismaModel = never> = {
    equals?: $Enums.Aptitude | EnumAptitudeFieldRefInput<$PrismaModel>
    in?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    not?: NestedEnumAptitudeFilter<$PrismaModel> | $Enums.Aptitude
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    ien?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    lieuNaissance?: SortOrder
    photo?: SortOrder
    statut?: SortOrder
    epOptionnel?: SortOrder
    aptitude?: SortOrder
    sexe?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
    resultat?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    eps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    eps?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    ien?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    lieuNaissance?: SortOrder
    photo?: SortOrder
    statut?: SortOrder
    epOptionnel?: SortOrder
    aptitude?: SortOrder
    sexe?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
    resultat?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    eps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    ien?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    dateNaissance?: SortOrder
    lieuNaissance?: SortOrder
    photo?: SortOrder
    statut?: SortOrder
    epOptionnel?: SortOrder
    aptitude?: SortOrder
    sexe?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
    resultat?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    eps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    etablissementId?: SortOrder
    numero?: SortOrder
    total?: SortOrder
    moyenne?: SortOrder
    rang?: SortOrder
    red?: SortOrder
    dic?: SortOrder
    tsq?: SortOrder
    svt?: SortOrder
    lv1?: SortOrder
    mat?: SortOrder
    hg?: SortOrder
    ec?: SortOrder
    sp?: SortOrder
    part?: SortOrder
    orale?: SortOrder
    eps?: SortOrder
  }

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type EnumEpOptionnelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EpOptionnel | EnumEpOptionnelFieldRefInput<$PrismaModel>
    in?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    not?: NestedEnumEpOptionnelWithAggregatesFilter<$PrismaModel> | $Enums.EpOptionnel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEpOptionnelFilter<$PrismaModel>
    _max?: NestedEnumEpOptionnelFilter<$PrismaModel>
  }

  export type EnumAptitudeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Aptitude | EnumAptitudeFieldRefInput<$PrismaModel>
    in?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    not?: NestedEnumAptitudeWithAggregatesFilter<$PrismaModel> | $Enums.Aptitude
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAptitudeFilter<$PrismaModel>
    _max?: NestedEnumAptitudeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type GuestbookEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<GuestbookEntryCreateWithoutUserInput, GuestbookEntryUncheckedCreateWithoutUserInput> | GuestbookEntryCreateWithoutUserInput[] | GuestbookEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutUserInput | GuestbookEntryCreateOrConnectWithoutUserInput[]
    createMany?: GuestbookEntryCreateManyUserInputEnvelope
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
  }

  export type GuestbookEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GuestbookEntryCreateWithoutUserInput, GuestbookEntryUncheckedCreateWithoutUserInput> | GuestbookEntryCreateWithoutUserInput[] | GuestbookEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutUserInput | GuestbookEntryCreateOrConnectWithoutUserInput[]
    createMany?: GuestbookEntryCreateManyUserInputEnvelope
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuestbookEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuestbookEntryCreateWithoutUserInput, GuestbookEntryUncheckedCreateWithoutUserInput> | GuestbookEntryCreateWithoutUserInput[] | GuestbookEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutUserInput | GuestbookEntryCreateOrConnectWithoutUserInput[]
    upsert?: GuestbookEntryUpsertWithWhereUniqueWithoutUserInput | GuestbookEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuestbookEntryCreateManyUserInputEnvelope
    set?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    disconnect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    delete?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    update?: GuestbookEntryUpdateWithWhereUniqueWithoutUserInput | GuestbookEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuestbookEntryUpdateManyWithWhereWithoutUserInput | GuestbookEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
  }

  export type GuestbookEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuestbookEntryCreateWithoutUserInput, GuestbookEntryUncheckedCreateWithoutUserInput> | GuestbookEntryCreateWithoutUserInput[] | GuestbookEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuestbookEntryCreateOrConnectWithoutUserInput | GuestbookEntryCreateOrConnectWithoutUserInput[]
    upsert?: GuestbookEntryUpsertWithWhereUniqueWithoutUserInput | GuestbookEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuestbookEntryCreateManyUserInputEnvelope
    set?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    disconnect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    delete?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    connect?: GuestbookEntryWhereUniqueInput | GuestbookEntryWhereUniqueInput[]
    update?: GuestbookEntryUpdateWithWhereUniqueWithoutUserInput | GuestbookEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuestbookEntryUpdateManyWithWhereWithoutUserInput | GuestbookEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGuestbookInput = {
    create?: XOR<UserCreateWithoutGuestbookInput, UserUncheckedCreateWithoutGuestbookInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestbookInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGuestbookNestedInput = {
    create?: XOR<UserCreateWithoutGuestbookInput, UserUncheckedCreateWithoutGuestbookInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestbookInput
    upsert?: UserUpsertWithoutGuestbookInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuestbookInput, UserUpdateWithoutGuestbookInput>, UserUncheckedUpdateWithoutGuestbookInput>
  }

  export type CandidatCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<StudentCreateWithoutEtablissementInput, StudentUncheckedCreateWithoutEtablissementInput> | StudentCreateWithoutEtablissementInput[] | StudentUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEtablissementInput | StudentCreateOrConnectWithoutEtablissementInput[]
    createMany?: StudentCreateManyEtablissementInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CandidatUncheckedCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<StudentCreateWithoutEtablissementInput, StudentUncheckedCreateWithoutEtablissementInput> | StudentCreateWithoutEtablissementInput[] | StudentUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEtablissementInput | StudentCreateOrConnectWithoutEtablissementInput[]
    createMany?: StudentCreateManyEtablissementInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumTypeEtablissementFieldUpdateOperationsInput = {
    set?: $Enums.TypeEtablissement
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidatUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    upsert?: CandidatUpsertWithWhereUniqueWithoutEtablissementInput | CandidatUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    set?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    disconnect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    delete?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    update?: CandidatUpdateWithWhereUniqueWithoutEtablissementInput | CandidatUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: CandidatUpdateManyWithWhereWithoutEtablissementInput | CandidatUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<StudentCreateWithoutEtablissementInput, StudentUncheckedCreateWithoutEtablissementInput> | StudentCreateWithoutEtablissementInput[] | StudentUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEtablissementInput | StudentCreateOrConnectWithoutEtablissementInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutEtablissementInput | StudentUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: StudentCreateManyEtablissementInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutEtablissementInput | StudentUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutEtablissementInput | StudentUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidatUncheckedUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput> | CandidatCreateWithoutEtablissementInput[] | CandidatUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: CandidatCreateOrConnectWithoutEtablissementInput | CandidatCreateOrConnectWithoutEtablissementInput[]
    upsert?: CandidatUpsertWithWhereUniqueWithoutEtablissementInput | CandidatUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: CandidatCreateManyEtablissementInputEnvelope
    set?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    disconnect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    delete?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    connect?: CandidatWhereUniqueInput | CandidatWhereUniqueInput[]
    update?: CandidatUpdateWithWhereUniqueWithoutEtablissementInput | CandidatUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: CandidatUpdateManyWithWhereWithoutEtablissementInput | CandidatUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<StudentCreateWithoutEtablissementInput, StudentUncheckedCreateWithoutEtablissementInput> | StudentCreateWithoutEtablissementInput[] | StudentUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEtablissementInput | StudentCreateOrConnectWithoutEtablissementInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutEtablissementInput | StudentUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: StudentCreateManyEtablissementInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutEtablissementInput | StudentUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutEtablissementInput | StudentUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type EtablissementCreateNestedOneWithoutCandidatsInput = {
    create?: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutCandidatsInput
    connect?: EtablissementWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutCandidatsInput = {
    create?: XOR<NoteCreateWithoutCandidatsInput, NoteUncheckedCreateWithoutCandidatsInput> | NoteCreateWithoutCandidatsInput[] | NoteUncheckedCreateWithoutCandidatsInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatsInput | NoteCreateOrConnectWithoutCandidatsInput[]
    createMany?: NoteCreateManyCandidatsInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutCandidatsInput = {
    create?: XOR<NoteCreateWithoutCandidatsInput, NoteUncheckedCreateWithoutCandidatsInput> | NoteCreateWithoutCandidatsInput[] | NoteUncheckedCreateWithoutCandidatsInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatsInput | NoteCreateOrConnectWithoutCandidatsInput[]
    createMany?: NoteCreateManyCandidatsInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPresenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PresenceType
  }

  export type EtablissementUpdateOneRequiredWithoutCandidatsNestedInput = {
    create?: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutCandidatsInput
    upsert?: EtablissementUpsertWithoutCandidatsInput
    connect?: EtablissementWhereUniqueInput
    update?: XOR<XOR<EtablissementUpdateToOneWithWhereWithoutCandidatsInput, EtablissementUpdateWithoutCandidatsInput>, EtablissementUncheckedUpdateWithoutCandidatsInput>
  }

  export type NoteUpdateManyWithoutCandidatsNestedInput = {
    create?: XOR<NoteCreateWithoutCandidatsInput, NoteUncheckedCreateWithoutCandidatsInput> | NoteCreateWithoutCandidatsInput[] | NoteUncheckedCreateWithoutCandidatsInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatsInput | NoteCreateOrConnectWithoutCandidatsInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCandidatsInput | NoteUpsertWithWhereUniqueWithoutCandidatsInput[]
    createMany?: NoteCreateManyCandidatsInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCandidatsInput | NoteUpdateWithWhereUniqueWithoutCandidatsInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCandidatsInput | NoteUpdateManyWithWhereWithoutCandidatsInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutCandidatsNestedInput = {
    create?: XOR<NoteCreateWithoutCandidatsInput, NoteUncheckedCreateWithoutCandidatsInput> | NoteCreateWithoutCandidatsInput[] | NoteUncheckedCreateWithoutCandidatsInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCandidatsInput | NoteCreateOrConnectWithoutCandidatsInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCandidatsInput | NoteUpsertWithWhereUniqueWithoutCandidatsInput[]
    createMany?: NoteCreateManyCandidatsInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCandidatsInput | NoteUpdateWithWhereUniqueWithoutCandidatsInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCandidatsInput | NoteUpdateManyWithWhereWithoutCandidatsInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type MatiereCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<MatiereCreateWithoutDisciplineInput, MatiereUncheckedCreateWithoutDisciplineInput> | MatiereCreateWithoutDisciplineInput[] | MatiereUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: MatiereCreateOrConnectWithoutDisciplineInput | MatiereCreateOrConnectWithoutDisciplineInput[]
    createMany?: MatiereCreateManyDisciplineInputEnvelope
    connect?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
  }

  export type MatiereUncheckedCreateNestedManyWithoutDisciplineInput = {
    create?: XOR<MatiereCreateWithoutDisciplineInput, MatiereUncheckedCreateWithoutDisciplineInput> | MatiereCreateWithoutDisciplineInput[] | MatiereUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: MatiereCreateOrConnectWithoutDisciplineInput | MatiereCreateOrConnectWithoutDisciplineInput[]
    createMany?: MatiereCreateManyDisciplineInputEnvelope
    connect?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
  }

  export type MatiereUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<MatiereCreateWithoutDisciplineInput, MatiereUncheckedCreateWithoutDisciplineInput> | MatiereCreateWithoutDisciplineInput[] | MatiereUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: MatiereCreateOrConnectWithoutDisciplineInput | MatiereCreateOrConnectWithoutDisciplineInput[]
    upsert?: MatiereUpsertWithWhereUniqueWithoutDisciplineInput | MatiereUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: MatiereCreateManyDisciplineInputEnvelope
    set?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    disconnect?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    delete?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    connect?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    update?: MatiereUpdateWithWhereUniqueWithoutDisciplineInput | MatiereUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: MatiereUpdateManyWithWhereWithoutDisciplineInput | MatiereUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: MatiereScalarWhereInput | MatiereScalarWhereInput[]
  }

  export type MatiereUncheckedUpdateManyWithoutDisciplineNestedInput = {
    create?: XOR<MatiereCreateWithoutDisciplineInput, MatiereUncheckedCreateWithoutDisciplineInput> | MatiereCreateWithoutDisciplineInput[] | MatiereUncheckedCreateWithoutDisciplineInput[]
    connectOrCreate?: MatiereCreateOrConnectWithoutDisciplineInput | MatiereCreateOrConnectWithoutDisciplineInput[]
    upsert?: MatiereUpsertWithWhereUniqueWithoutDisciplineInput | MatiereUpsertWithWhereUniqueWithoutDisciplineInput[]
    createMany?: MatiereCreateManyDisciplineInputEnvelope
    set?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    disconnect?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    delete?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    connect?: MatiereWhereUniqueInput | MatiereWhereUniqueInput[]
    update?: MatiereUpdateWithWhereUniqueWithoutDisciplineInput | MatiereUpdateWithWhereUniqueWithoutDisciplineInput[]
    updateMany?: MatiereUpdateManyWithWhereWithoutDisciplineInput | MatiereUpdateManyWithWhereWithoutDisciplineInput[]
    deleteMany?: MatiereScalarWhereInput | MatiereScalarWhereInput[]
  }

  export type DisciplineCreateNestedOneWithoutMatieresInput = {
    create?: XOR<DisciplineCreateWithoutMatieresInput, DisciplineUncheckedCreateWithoutMatieresInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutMatieresInput
    connect?: DisciplineWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutMatiereInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type DisciplineUpdateOneRequiredWithoutMatieresNestedInput = {
    create?: XOR<DisciplineCreateWithoutMatieresInput, DisciplineUncheckedCreateWithoutMatieresInput>
    connectOrCreate?: DisciplineCreateOrConnectWithoutMatieresInput
    upsert?: DisciplineUpsertWithoutMatieresInput
    connect?: DisciplineWhereUniqueInput
    update?: XOR<XOR<DisciplineUpdateToOneWithWhereWithoutMatieresInput, DisciplineUpdateWithoutMatieresInput>, DisciplineUncheckedUpdateWithoutMatieresInput>
  }

  export type NoteUpdateManyWithoutMatiereNestedInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutMatiereInput | NoteUpsertWithWhereUniqueWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutMatiereInput | NoteUpdateWithWhereUniqueWithoutMatiereInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutMatiereInput | NoteUpdateManyWithWhereWithoutMatiereInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput> | NoteCreateWithoutMatiereInput[] | NoteUncheckedCreateWithoutMatiereInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutMatiereInput | NoteCreateOrConnectWithoutMatiereInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutMatiereInput | NoteUpsertWithWhereUniqueWithoutMatiereInput[]
    createMany?: NoteCreateManyMatiereInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutMatiereInput | NoteUpdateWithWhereUniqueWithoutMatiereInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutMatiereInput | NoteUpdateManyWithWhereWithoutMatiereInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CandidatCreateNestedOneWithoutNotesInput = {
    create?: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutNotesInput
    connect?: CandidatWhereUniqueInput
  }

  export type MatiereCreateNestedOneWithoutNotesInput = {
    create?: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
    connectOrCreate?: MatiereCreateOrConnectWithoutNotesInput
    connect?: MatiereWhereUniqueInput
  }

  export type CandidatUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CandidatCreateOrConnectWithoutNotesInput
    upsert?: CandidatUpsertWithoutNotesInput
    connect?: CandidatWhereUniqueInput
    update?: XOR<XOR<CandidatUpdateToOneWithWhereWithoutNotesInput, CandidatUpdateWithoutNotesInput>, CandidatUncheckedUpdateWithoutNotesInput>
  }

  export type MatiereUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
    connectOrCreate?: MatiereCreateOrConnectWithoutNotesInput
    upsert?: MatiereUpsertWithoutNotesInput
    connect?: MatiereWhereUniqueInput
    update?: XOR<XOR<MatiereUpdateToOneWithWhereWithoutNotesInput, MatiereUpdateWithoutNotesInput>, MatiereUncheckedUpdateWithoutNotesInput>
  }

  export type EtablissementCreateNestedOneWithoutStudentInput = {
    create?: XOR<EtablissementCreateWithoutStudentInput, EtablissementUncheckedCreateWithoutStudentInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutStudentInput
    connect?: EtablissementWhereUniqueInput
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type EnumEpOptionnelFieldUpdateOperationsInput = {
    set?: $Enums.EpOptionnel
  }

  export type EnumAptitudeFieldUpdateOperationsInput = {
    set?: $Enums.Aptitude
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EtablissementUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<EtablissementCreateWithoutStudentInput, EtablissementUncheckedCreateWithoutStudentInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutStudentInput
    upsert?: EtablissementUpsertWithoutStudentInput
    connect?: EtablissementWhereUniqueInput
    update?: XOR<XOR<EtablissementUpdateToOneWithWhereWithoutStudentInput, EtablissementUpdateWithoutStudentInput>, EtablissementUncheckedUpdateWithoutStudentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | EnumTypeEtablissementFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEtablissementFilter<$PrismaModel> | $Enums.TypeEtablissement
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | EnumTypeEtablissementFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEtablissement[] | ListEnumTypeEtablissementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.TypeEtablissement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeEtablissementFilter<$PrismaModel>
    _max?: NestedEnumTypeEtablissementFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPresenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceType | EnumPresenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceTypeFilter<$PrismaModel> | $Enums.PresenceType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPresenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceType | EnumPresenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceType[] | ListEnumPresenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PresenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceTypeFilter<$PrismaModel>
    _max?: NestedEnumPresenceTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type NestedEnumEpOptionnelFilter<$PrismaModel = never> = {
    equals?: $Enums.EpOptionnel | EnumEpOptionnelFieldRefInput<$PrismaModel>
    in?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    not?: NestedEnumEpOptionnelFilter<$PrismaModel> | $Enums.EpOptionnel
  }

  export type NestedEnumAptitudeFilter<$PrismaModel = never> = {
    equals?: $Enums.Aptitude | EnumAptitudeFieldRefInput<$PrismaModel>
    in?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    not?: NestedEnumAptitudeFilter<$PrismaModel> | $Enums.Aptitude
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type NestedEnumEpOptionnelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EpOptionnel | EnumEpOptionnelFieldRefInput<$PrismaModel>
    in?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpOptionnel[] | ListEnumEpOptionnelFieldRefInput<$PrismaModel>
    not?: NestedEnumEpOptionnelWithAggregatesFilter<$PrismaModel> | $Enums.EpOptionnel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEpOptionnelFilter<$PrismaModel>
    _max?: NestedEnumEpOptionnelFilter<$PrismaModel>
  }

  export type NestedEnumAptitudeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Aptitude | EnumAptitudeFieldRefInput<$PrismaModel>
    in?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Aptitude[] | ListEnumAptitudeFieldRefInput<$PrismaModel>
    not?: NestedEnumAptitudeWithAggregatesFilter<$PrismaModel> | $Enums.Aptitude
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAptitudeFilter<$PrismaModel>
    _max?: NestedEnumAptitudeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type GuestbookEntryCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryCreateOrConnectWithoutUserInput = {
    where: GuestbookEntryWhereUniqueInput
    create: XOR<GuestbookEntryCreateWithoutUserInput, GuestbookEntryUncheckedCreateWithoutUserInput>
  }

  export type GuestbookEntryCreateManyUserInputEnvelope = {
    data: GuestbookEntryCreateManyUserInput | GuestbookEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuestbookEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: GuestbookEntryWhereUniqueInput
    update: XOR<GuestbookEntryUpdateWithoutUserInput, GuestbookEntryUncheckedUpdateWithoutUserInput>
    create: XOR<GuestbookEntryCreateWithoutUserInput, GuestbookEntryUncheckedCreateWithoutUserInput>
  }

  export type GuestbookEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: GuestbookEntryWhereUniqueInput
    data: XOR<GuestbookEntryUpdateWithoutUserInput, GuestbookEntryUncheckedUpdateWithoutUserInput>
  }

  export type GuestbookEntryUpdateManyWithWhereWithoutUserInput = {
    where: GuestbookEntryScalarWhereInput
    data: XOR<GuestbookEntryUpdateManyMutationInput, GuestbookEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type GuestbookEntryScalarWhereInput = {
    AND?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
    OR?: GuestbookEntryScalarWhereInput[]
    NOT?: GuestbookEntryScalarWhereInput | GuestbookEntryScalarWhereInput[]
    id?: StringFilter<"GuestbookEntry"> | string
    userId?: StringFilter<"GuestbookEntry"> | string
    message?: StringFilter<"GuestbookEntry"> | string
    createdAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
    updatedAt?: DateTimeFilter<"GuestbookEntry"> | Date | string
  }

  export type UserCreateWithoutGuestbookInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGuestbookInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGuestbookInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuestbookInput, UserUncheckedCreateWithoutGuestbookInput>
  }

  export type UserUpsertWithoutGuestbookInput = {
    update: XOR<UserUpdateWithoutGuestbookInput, UserUncheckedUpdateWithoutGuestbookInput>
    create: XOR<UserCreateWithoutGuestbookInput, UserUncheckedCreateWithoutGuestbookInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuestbookInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuestbookInput, UserUncheckedUpdateWithoutGuestbookInput>
  }

  export type UserUpdateWithoutGuestbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGuestbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatCreateWithoutEtablissementInput = {
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutCandidatsInput
  }

  export type CandidatUncheckedCreateWithoutEtablissementInput = {
    id?: number
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutCandidatsInput
  }

  export type CandidatCreateOrConnectWithoutEtablissementInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput>
  }

  export type CandidatCreateManyEtablissementInputEnvelope = {
    data: CandidatCreateManyEtablissementInput | CandidatCreateManyEtablissementInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutEtablissementInput = {
    ien: string
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    lieuNaissance?: string | null
    photo?: string | null
    statut?: $Enums.Statut
    epOptionnel?: $Enums.EpOptionnel
    aptitude?: $Enums.Aptitude
    sexe?: $Enums.Gender
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    resultat?: string | null
    red?: number | null
    dic?: number | null
    tsq?: number | null
    svt?: number | null
    lv1?: number | null
    mat?: number | null
    hg?: number | null
    ec?: number | null
    sp?: number | null
    part?: number | null
    orale?: number | null
    eps?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUncheckedCreateWithoutEtablissementInput = {
    id?: number
    ien: string
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    lieuNaissance?: string | null
    photo?: string | null
    statut?: $Enums.Statut
    epOptionnel?: $Enums.EpOptionnel
    aptitude?: $Enums.Aptitude
    sexe?: $Enums.Gender
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    resultat?: string | null
    red?: number | null
    dic?: number | null
    tsq?: number | null
    svt?: number | null
    lv1?: number | null
    mat?: number | null
    hg?: number | null
    ec?: number | null
    sp?: number | null
    part?: number | null
    orale?: number | null
    eps?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutEtablissementInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEtablissementInput, StudentUncheckedCreateWithoutEtablissementInput>
  }

  export type StudentCreateManyEtablissementInputEnvelope = {
    data: StudentCreateManyEtablissementInput | StudentCreateManyEtablissementInput[]
    skipDuplicates?: boolean
  }

  export type CandidatUpsertWithWhereUniqueWithoutEtablissementInput = {
    where: CandidatWhereUniqueInput
    update: XOR<CandidatUpdateWithoutEtablissementInput, CandidatUncheckedUpdateWithoutEtablissementInput>
    create: XOR<CandidatCreateWithoutEtablissementInput, CandidatUncheckedCreateWithoutEtablissementInput>
  }

  export type CandidatUpdateWithWhereUniqueWithoutEtablissementInput = {
    where: CandidatWhereUniqueInput
    data: XOR<CandidatUpdateWithoutEtablissementInput, CandidatUncheckedUpdateWithoutEtablissementInput>
  }

  export type CandidatUpdateManyWithWhereWithoutEtablissementInput = {
    where: CandidatScalarWhereInput
    data: XOR<CandidatUpdateManyMutationInput, CandidatUncheckedUpdateManyWithoutEtablissementInput>
  }

  export type CandidatScalarWhereInput = {
    AND?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
    OR?: CandidatScalarWhereInput[]
    NOT?: CandidatScalarWhereInput | CandidatScalarWhereInput[]
    id?: IntFilter<"Candidat"> | number
    code?: StringNullableFilter<"Candidat"> | string | null
    num?: IntNullableFilter<"Candidat"> | number | null
    prenom?: StringNullableFilter<"Candidat"> | string | null
    nom?: StringNullableFilter<"Candidat"> | string | null
    sexe?: StringNullableFilter<"Candidat"> | string | null
    datnais?: StringNullableFilter<"Candidat"> | string | null
    lieunais?: StringNullableFilter<"Candidat"> | string | null
    aptitude?: StringNullableFilter<"Candidat"> | string | null
    option?: StringNullableFilter<"Candidat"> | string | null
    section?: StringNullableFilter<"Candidat"> | string | null
    jury?: IntNullableFilter<"Candidat"> | number | null
    firstEpPart?: StringNullableFilter<"Candidat"> | string | null
    secondEpPart?: StringNullableFilter<"Candidat"> | string | null
    centre?: StringNullableFilter<"Candidat"> | string | null
    etablissementId?: IntFilter<"Candidat"> | number
    presence?: EnumPresenceTypeFilter<"Candidat"> | $Enums.PresenceType
    createdAt?: DateTimeFilter<"Candidat"> | Date | string
    updatedAt?: DateTimeFilter<"Candidat"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutEtablissementInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutEtablissementInput, StudentUncheckedUpdateWithoutEtablissementInput>
    create: XOR<StudentCreateWithoutEtablissementInput, StudentUncheckedCreateWithoutEtablissementInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutEtablissementInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutEtablissementInput, StudentUncheckedUpdateWithoutEtablissementInput>
  }

  export type StudentUpdateManyWithWhereWithoutEtablissementInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutEtablissementInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    ien?: StringFilter<"Student"> | string
    etablissementId?: IntFilter<"Student"> | number
    numero?: IntFilter<"Student"> | number
    prenom?: StringFilter<"Student"> | string
    nom?: StringFilter<"Student"> | string
    dateNaissance?: DateTimeFilter<"Student"> | Date | string
    lieuNaissance?: StringNullableFilter<"Student"> | string | null
    photo?: StringNullableFilter<"Student"> | string | null
    statut?: EnumStatutFilter<"Student"> | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFilter<"Student"> | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFilter<"Student"> | $Enums.Aptitude
    sexe?: EnumGenderFilter<"Student"> | $Enums.Gender
    total?: FloatNullableFilter<"Student"> | number | null
    moyenne?: FloatNullableFilter<"Student"> | number | null
    rang?: IntNullableFilter<"Student"> | number | null
    resultat?: StringNullableFilter<"Student"> | string | null
    red?: FloatNullableFilter<"Student"> | number | null
    dic?: FloatNullableFilter<"Student"> | number | null
    tsq?: FloatNullableFilter<"Student"> | number | null
    svt?: FloatNullableFilter<"Student"> | number | null
    lv1?: FloatNullableFilter<"Student"> | number | null
    mat?: FloatNullableFilter<"Student"> | number | null
    hg?: FloatNullableFilter<"Student"> | number | null
    ec?: FloatNullableFilter<"Student"> | number | null
    sp?: FloatNullableFilter<"Student"> | number | null
    part?: FloatNullableFilter<"Student"> | number | null
    orale?: FloatNullableFilter<"Student"> | number | null
    eps?: FloatNullableFilter<"Student"> | number | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type EtablissementCreateWithoutCandidatsInput = {
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUncheckedCreateWithoutCandidatsInput = {
    id?: number
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementCreateOrConnectWithoutCandidatsInput = {
    where: EtablissementWhereUniqueInput
    create: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
  }

  export type NoteCreateWithoutCandidatsInput = {
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matiere: MatiereCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutCandidatsInput = {
    id?: number
    score?: number
    matiereId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutCandidatsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCandidatsInput, NoteUncheckedCreateWithoutCandidatsInput>
  }

  export type NoteCreateManyCandidatsInputEnvelope = {
    data: NoteCreateManyCandidatsInput | NoteCreateManyCandidatsInput[]
    skipDuplicates?: boolean
  }

  export type EtablissementUpsertWithoutCandidatsInput = {
    update: XOR<EtablissementUpdateWithoutCandidatsInput, EtablissementUncheckedUpdateWithoutCandidatsInput>
    create: XOR<EtablissementCreateWithoutCandidatsInput, EtablissementUncheckedCreateWithoutCandidatsInput>
    where?: EtablissementWhereInput
  }

  export type EtablissementUpdateToOneWithWhereWithoutCandidatsInput = {
    where?: EtablissementWhereInput
    data: XOR<EtablissementUpdateWithoutCandidatsInput, EtablissementUncheckedUpdateWithoutCandidatsInput>
  }

  export type EtablissementUpdateWithoutCandidatsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateWithoutCandidatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type NoteUpsertWithWhereUniqueWithoutCandidatsInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutCandidatsInput, NoteUncheckedUpdateWithoutCandidatsInput>
    create: XOR<NoteCreateWithoutCandidatsInput, NoteUncheckedCreateWithoutCandidatsInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutCandidatsInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutCandidatsInput, NoteUncheckedUpdateWithoutCandidatsInput>
  }

  export type NoteUpdateManyWithWhereWithoutCandidatsInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutCandidatsInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    score?: IntFilter<"Note"> | number
    matiereId?: IntFilter<"Note"> | number
    candidatId?: IntFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type MatiereCreateWithoutDisciplineInput = {
    name: string
    slug: string
    coefficient?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutMatiereInput
  }

  export type MatiereUncheckedCreateWithoutDisciplineInput = {
    id?: number
    name: string
    slug: string
    coefficient?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutMatiereInput
  }

  export type MatiereCreateOrConnectWithoutDisciplineInput = {
    where: MatiereWhereUniqueInput
    create: XOR<MatiereCreateWithoutDisciplineInput, MatiereUncheckedCreateWithoutDisciplineInput>
  }

  export type MatiereCreateManyDisciplineInputEnvelope = {
    data: MatiereCreateManyDisciplineInput | MatiereCreateManyDisciplineInput[]
    skipDuplicates?: boolean
  }

  export type MatiereUpsertWithWhereUniqueWithoutDisciplineInput = {
    where: MatiereWhereUniqueInput
    update: XOR<MatiereUpdateWithoutDisciplineInput, MatiereUncheckedUpdateWithoutDisciplineInput>
    create: XOR<MatiereCreateWithoutDisciplineInput, MatiereUncheckedCreateWithoutDisciplineInput>
  }

  export type MatiereUpdateWithWhereUniqueWithoutDisciplineInput = {
    where: MatiereWhereUniqueInput
    data: XOR<MatiereUpdateWithoutDisciplineInput, MatiereUncheckedUpdateWithoutDisciplineInput>
  }

  export type MatiereUpdateManyWithWhereWithoutDisciplineInput = {
    where: MatiereScalarWhereInput
    data: XOR<MatiereUpdateManyMutationInput, MatiereUncheckedUpdateManyWithoutDisciplineInput>
  }

  export type MatiereScalarWhereInput = {
    AND?: MatiereScalarWhereInput | MatiereScalarWhereInput[]
    OR?: MatiereScalarWhereInput[]
    NOT?: MatiereScalarWhereInput | MatiereScalarWhereInput[]
    id?: IntFilter<"Matiere"> | number
    name?: StringFilter<"Matiere"> | string
    slug?: StringFilter<"Matiere"> | string
    coefficient?: IntFilter<"Matiere"> | number
    disciplineId?: IntFilter<"Matiere"> | number
    createdAt?: DateTimeFilter<"Matiere"> | Date | string
    updatedAt?: DateTimeFilter<"Matiere"> | Date | string
  }

  export type DisciplineCreateWithoutMatieresInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineUncheckedCreateWithoutMatieresInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineCreateOrConnectWithoutMatieresInput = {
    where: DisciplineWhereUniqueInput
    create: XOR<DisciplineCreateWithoutMatieresInput, DisciplineUncheckedCreateWithoutMatieresInput>
  }

  export type NoteCreateWithoutMatiereInput = {
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    candidats: CandidatCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutMatiereInput = {
    id?: number
    score?: number
    candidatId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutMatiereInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput>
  }

  export type NoteCreateManyMatiereInputEnvelope = {
    data: NoteCreateManyMatiereInput | NoteCreateManyMatiereInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineUpsertWithoutMatieresInput = {
    update: XOR<DisciplineUpdateWithoutMatieresInput, DisciplineUncheckedUpdateWithoutMatieresInput>
    create: XOR<DisciplineCreateWithoutMatieresInput, DisciplineUncheckedCreateWithoutMatieresInput>
    where?: DisciplineWhereInput
  }

  export type DisciplineUpdateToOneWithWhereWithoutMatieresInput = {
    where?: DisciplineWhereInput
    data: XOR<DisciplineUpdateWithoutMatieresInput, DisciplineUncheckedUpdateWithoutMatieresInput>
  }

  export type DisciplineUpdateWithoutMatieresInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineUncheckedUpdateWithoutMatieresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutMatiereInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutMatiereInput, NoteUncheckedUpdateWithoutMatiereInput>
    create: XOR<NoteCreateWithoutMatiereInput, NoteUncheckedCreateWithoutMatiereInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutMatiereInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutMatiereInput, NoteUncheckedUpdateWithoutMatiereInput>
  }

  export type NoteUpdateManyWithWhereWithoutMatiereInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutMatiereInput>
  }

  export type CandidatCreateWithoutNotesInput = {
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
    Etablissement: EtablissementCreateNestedOneWithoutCandidatsInput
  }

  export type CandidatUncheckedCreateWithoutNotesInput = {
    id?: number
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    etablissementId: number
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidatCreateOrConnectWithoutNotesInput = {
    where: CandidatWhereUniqueInput
    create: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
  }

  export type MatiereCreateWithoutNotesInput = {
    name: string
    slug: string
    coefficient?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    discipline: DisciplineCreateNestedOneWithoutMatieresInput
  }

  export type MatiereUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    slug: string
    coefficient?: number
    disciplineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatiereCreateOrConnectWithoutNotesInput = {
    where: MatiereWhereUniqueInput
    create: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
  }

  export type CandidatUpsertWithoutNotesInput = {
    update: XOR<CandidatUpdateWithoutNotesInput, CandidatUncheckedUpdateWithoutNotesInput>
    create: XOR<CandidatCreateWithoutNotesInput, CandidatUncheckedCreateWithoutNotesInput>
    where?: CandidatWhereInput
  }

  export type CandidatUpdateToOneWithWhereWithoutNotesInput = {
    where?: CandidatWhereInput
    data: XOR<CandidatUpdateWithoutNotesInput, CandidatUncheckedUpdateWithoutNotesInput>
  }

  export type CandidatUpdateWithoutNotesInput = {
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Etablissement?: EtablissementUpdateOneRequiredWithoutCandidatsNestedInput
  }

  export type CandidatUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    etablissementId?: IntFieldUpdateOperationsInput | number
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatiereUpsertWithoutNotesInput = {
    update: XOR<MatiereUpdateWithoutNotesInput, MatiereUncheckedUpdateWithoutNotesInput>
    create: XOR<MatiereCreateWithoutNotesInput, MatiereUncheckedCreateWithoutNotesInput>
    where?: MatiereWhereInput
  }

  export type MatiereUpdateToOneWithWhereWithoutNotesInput = {
    where?: MatiereWhereInput
    data: XOR<MatiereUpdateWithoutNotesInput, MatiereUncheckedUpdateWithoutNotesInput>
  }

  export type MatiereUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discipline?: DisciplineUpdateOneRequiredWithoutMatieresNestedInput
  }

  export type MatiereUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    disciplineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtablissementCreateWithoutStudentInput = {
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    candidats?: CandidatCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUncheckedCreateWithoutStudentInput = {
    id?: number
    nom: string
    slug: string
    type?: $Enums.TypeEtablissement
    jury?: number | null
    effectif?: number | null
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    candidats?: CandidatUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementCreateOrConnectWithoutStudentInput = {
    where: EtablissementWhereUniqueInput
    create: XOR<EtablissementCreateWithoutStudentInput, EtablissementUncheckedCreateWithoutStudentInput>
  }

  export type EtablissementUpsertWithoutStudentInput = {
    update: XOR<EtablissementUpdateWithoutStudentInput, EtablissementUncheckedUpdateWithoutStudentInput>
    create: XOR<EtablissementCreateWithoutStudentInput, EtablissementUncheckedCreateWithoutStudentInput>
    where?: EtablissementWhereInput
  }

  export type EtablissementUpdateToOneWithWhereWithoutStudentInput = {
    where?: EtablissementWhereInput
    data: XOR<EtablissementUpdateWithoutStudentInput, EtablissementUncheckedUpdateWithoutStudentInput>
  }

  export type EtablissementUpdateWithoutStudentInput = {
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidats?: CandidatUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    effectif?: NullableIntFieldUpdateOperationsInput | number | null
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidats?: CandidatUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type GuestbookEntryCreateManyUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestbookEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestbookEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatCreateManyEtablissementInput = {
    id?: number
    code?: string | null
    num?: number | null
    prenom?: string | null
    nom?: string | null
    sexe?: string | null
    datnais?: string | null
    lieunais?: string | null
    aptitude?: string | null
    option?: string | null
    section?: string | null
    jury?: number | null
    firstEpPart?: string | null
    secondEpPart?: string | null
    centre?: string | null
    presence?: $Enums.PresenceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyEtablissementInput = {
    id?: number
    ien: string
    numero: number
    prenom: string
    nom: string
    dateNaissance: Date | string
    lieuNaissance?: string | null
    photo?: string | null
    statut?: $Enums.Statut
    epOptionnel?: $Enums.EpOptionnel
    aptitude?: $Enums.Aptitude
    sexe?: $Enums.Gender
    total?: number | null
    moyenne?: number | null
    rang?: number | null
    resultat?: string | null
    red?: number | null
    dic?: number | null
    tsq?: number | null
    svt?: number | null
    lv1?: number | null
    mat?: number | null
    hg?: number | null
    ec?: number | null
    sp?: number | null
    part?: number | null
    orale?: number | null
    eps?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidatUpdateWithoutEtablissementInput = {
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutCandidatsNestedInput
  }

  export type CandidatUncheckedUpdateWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutCandidatsNestedInput
  }

  export type CandidatUncheckedUpdateManyWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    num?: NullableIntFieldUpdateOperationsInput | number | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    datnais?: NullableStringFieldUpdateOperationsInput | string | null
    lieunais?: NullableStringFieldUpdateOperationsInput | string | null
    aptitude?: NullableStringFieldUpdateOperationsInput | string | null
    option?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    jury?: NullableIntFieldUpdateOperationsInput | number | null
    firstEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    secondEpPart?: NullableStringFieldUpdateOperationsInput | string | null
    centre?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: EnumPresenceTypeFieldUpdateOperationsInput | $Enums.PresenceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutEtablissementInput = {
    ien?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    ien?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    ien?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    lieuNaissance?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    epOptionnel?: EnumEpOptionnelFieldUpdateOperationsInput | $Enums.EpOptionnel
    aptitude?: EnumAptitudeFieldUpdateOperationsInput | $Enums.Aptitude
    sexe?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    moyenne?: NullableFloatFieldUpdateOperationsInput | number | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    red?: NullableFloatFieldUpdateOperationsInput | number | null
    dic?: NullableFloatFieldUpdateOperationsInput | number | null
    tsq?: NullableFloatFieldUpdateOperationsInput | number | null
    svt?: NullableFloatFieldUpdateOperationsInput | number | null
    lv1?: NullableFloatFieldUpdateOperationsInput | number | null
    mat?: NullableFloatFieldUpdateOperationsInput | number | null
    hg?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    sp?: NullableFloatFieldUpdateOperationsInput | number | null
    part?: NullableFloatFieldUpdateOperationsInput | number | null
    orale?: NullableFloatFieldUpdateOperationsInput | number | null
    eps?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyCandidatsInput = {
    id?: number
    score?: number
    matiereId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateWithoutCandidatsInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matiere?: MatiereUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutCandidatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matiereId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutCandidatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    matiereId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatiereCreateManyDisciplineInput = {
    id?: number
    name: string
    slug: string
    coefficient?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatiereUpdateWithoutDisciplineInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutMatiereNestedInput
  }

  export type MatiereUncheckedUpdateWithoutDisciplineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutMatiereNestedInput
  }

  export type MatiereUncheckedUpdateManyWithoutDisciplineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coefficient?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyMatiereInput = {
    id?: number
    score?: number
    candidatId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateWithoutMatiereInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidats?: CandidatUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutMatiereInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    candidatId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutMatiereInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    candidatId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}