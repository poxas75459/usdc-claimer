/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5DABJF4CssG92Ugk7FMKLP9tT2aUqEQUhnqH1jTTzEkKdshn466wZMu2PW16U1SuW7PD77YBcpaPaQWDN5tNe1tT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjSdfJRFQwBb9A2L1bM1fKDzN5NsxhpcuY7w6PgNX3QqGnPRySR25JmSKc129KVYVuzvDELh1xDnkU3M85j8uNg",
  "key1": "5S2pTKfsngpdBRJRDFtBinR9DyWV6kXB7qGjPC33mdUqytrn4Ppj7kq8vMbcu8DSBQaEc9RwUb775N5M1GHayTcE",
  "key2": "3TCW2u5eSFMGXzXc1UZ5p1iKiPVBeMNZ36S79x3EHhdSJYM7fZWYmjJ9ES3qpTrjDKoBDdCDV2ziK1ghkZH3Wkr2",
  "key3": "zj4CrpxWBDUGtwtAH5G6uXHEZ3TwGcBCkFs24n9XJmaMqRrDLL61o7dNKA9Mehceav9Se7L9gsuWAASsM1dPize",
  "key4": "KhDFiV59csLwyfzwHKhYrKnGpWRQjWPVMu7xLddgXTmvY2MmznVgyt79kwsoRVdzh75ipDEWFProiuM2ZPy8R6w",
  "key5": "B2fzd92AYmiHWgvRXi3bKWNgBkZ2m6HAFosbdfyeFakNMz8gKfqH5EGUK1i22CPCtrgLnkuFkcNwNHimGE6DYtY",
  "key6": "5AbwkAMKLoJXm8B5fEJ3mSeFnJhWqUUxxjXLRKoLBKsxca6HLg7eUviCLvKWMV83EwwNsaTXHjzwAXRZuUR9cF1e",
  "key7": "yqmLoy4PtkkGuoABWGkaJfb4yu9z4HS7NBHSMXn3mWGFo42RNx6nrDoLVkvVZZE2Pd2V25mXX2ViwvS7AYU9Qbi",
  "key8": "XcNie2qygQPCokYj7ryfnkMzWYqiMReGnRkETeJhXgwT7csRBAicRvGEpYSBRafuVbU9nN6kqa7hvWNvwvg9DfJ",
  "key9": "4FipC8mLzV1bErHzThfY5fYzNU8uTpwsohZK9fujUQAtBU49kdyzJ1nQtczzcHrpbpK7WaH6GNeDZVXtiFuuhGkw",
  "key10": "3Wr6qWUtmB8FQEkfpCQ98AgBY3TJuUg9Sw1MmMrqS1AQbTsP8raZHew4BVMJxPCwNEqoDPyKk2JFDrcYgr25VQPj",
  "key11": "4bLrCVfGbf24D36FrZixn4jCRiz217ZDJ8EW9h8nAhhRZsJHC1JJeMd9AbR3TuVaL6Son8BWSCoGp6tM2dsRBzED",
  "key12": "5VTxEwQYxoWR3h6ov8JfHwchH3Mq6Dp414ag4ZXiRDFQtpEPNy5afu4CUN2uXvwBMyeJa3AEwGdQjGs26Bj1EtX3",
  "key13": "dGxJ5DgJzL9i6jE2vwJzVFBvmZTxAPEZVJV9qptoP5fGcXmtpiDkd5JCUVpQHZpFdmqHhxeVasjXgoNPRSb8VYG",
  "key14": "Wy9b5G3Nn1RKPmHYdNyUXWwqzMsmK2JsYanoxfBVHoXXA8GBN72PWMoiKR5R5poE7uvyAxy8o9K88Scm7w5EjYo",
  "key15": "23ncaqm6wD98qExLnswBkPmAPYPzJV5HhMoD1d9fu9uJWTVoz552nCfEr5gXbUGk2CsfVd1zpnXvPp6PoJmLDzjV",
  "key16": "a6BbNZYeFAs3yNJ6h2tU8HQxJgy625yrPcTMjcrJoNFgQPhcPLE2b7AukYHgFpgBHrzU6NM4k4oW3tDvoJGoiER",
  "key17": "fFPKaY23bkZ4RKPsD1HhptApRHKCWV9jcic7uof4nDezsXsUEaKnSUG7xxPBVCkUM4CnuLSwDqjs16r2MKXReEF",
  "key18": "21dtA7eSxUpfcSMHJE3wjtantbtrpsCBknwPjZPmGmUYyGVdokLnoKwNkkx4CH8xNGCj31mL5hR5XsoKoqHSCEwb",
  "key19": "5W29ujNHzQJQjfBHY8A519C5zBU7sJBvVxTLvyNAxc9FNKZeviP5xnyEznxszDbqQihncK34cmbWrTwwPoRXTHsZ",
  "key20": "328kZtHynuxJd7oqEohGu1WhK94mAhziu5Y7uNYWZmsQt18jMhDmSEJqGAZUhQuFZ5wCrZb4GQmQKcA4tKp2bFdp",
  "key21": "PsemS4SE3rgdhqmtNtZSakKHVwQy25vMfqAKv2Gstv8rbLA9HJSEQWc3XTWFEnyPCDC8tjd3SaAMukVigYa3UMv",
  "key22": "Lbo9wJehj4TMg8eVDANLCcfdYasNBLXj1oYEPegLLiwUPcrkZqdAoScH1pqG3wU1vHfQrPfrCSJCsn4bVHvgUCw",
  "key23": "3ANiBMrjwLtoth5cTjS4deRDSnQFRJrcZvCnSmwKrAhTEG65sgPJxoCQ6hvHi2aCHbtYGmNiJ3eeRSqbFL3YCALB",
  "key24": "4GuKEm2DSsX44UveFUe63cR6oUfX8djsvGGpzmtxAR3Qw7HYFQadAvi23WavAxpaXWvq6QvXMNz6EbsGpc2xYoPK",
  "key25": "24kjutnLe9jwTcU634EniQLmeYfMBxB8s2axf5a9hpk7XJy6dNMev2RRdLtQVMpxSNhHEe48u3r4p2c6RqeDyEU6",
  "key26": "5xhuD6quMNwCgasM2EQy9eHo4N7Cn7YBNCwoMsdeB42nuehitkeNjHNDEG5k8VMvaLdB36bLsdjYSLoSRiHZHSKx",
  "key27": "3Be25wZtAEG2VF53e4VDYbjVrXVZXCN1ru197TAc6VDGpzRH1cPpEJYbM49gcdhsW9DSHgzTW1ijFs8o7A2mXWSh",
  "key28": "SkRAwAp7F4Vyf3hFBWp9NKtT7NJ75ZcQp11D8wvwVhqhcuo3BZ58LCNL6oBHUaY6dew5iVFhd2eAK674abre1bL",
  "key29": "48LiT4bbEa3hg9HQVC7rMdryrWkpsfyafcYq96Nh4ZzCcx9KgeCmLhQcTdP3j6imL5dF6oYKyBabySPrv7E78XBk",
  "key30": "3o3mVoYSUmdcauWF8VKetN3h6zxusGr3oLFYWnKqxEQULVi3VgyeQkrdDhJpcHt8tVGJHU3MQymsDwYVxUsAj2G3",
  "key31": "5dgM2UrxAiX9hRmfKZsE4vNnd6ZEkR1bxcpGtyPWAbPNj1hKSSajwFJuLTGuuU68rdCcze1ucScs9wEbyKM31vsv",
  "key32": "5uH2nDUrc9wpqzNFWq9CXun8sBemMV4boWJemUBngt8Acx2NKjFi7QLGGdGquzW8pRa4Ligyj3gBH2Dyah6Hh8Pt",
  "key33": "46kwb464FrjmwFkM4aK3wZbPfKG4FqZq6jD6Jvq4dcfYkJB7pPbrd6Rfi298pJPhmuLpo3Vz7MrfrKUABUgizFgR",
  "key34": "v4PXwN2Le9Ec7Q3h5kwzy9CRQgVVtc8ahqwpxtUUM39dT3QjWhrdY1bxjXbN281rJAAxSHfxNkABodjS7wuzDC1",
  "key35": "Pt5HsEwoGNZe4eqqR9R3yBZdZoj5kssT11tcXP26XvnKgn72xatMWBtfJ4rJ5D1rm8j9HDgkQyUK7TBQMRCfXd4",
  "key36": "4AZneVqDfWeB9DHg2kxXLpF28UcUpbNmvbNdeW1yChAstDGXncTVNWohaDLFFuWdUg6R2f5tYPi4jqJkGNz1dPMp",
  "key37": "5HVsKVSDDLXv6rC6iPZwgjg1jugux4xcb4QLuBmmkLGUW72Xa4kDMxTDq8Whn74NBSycX2pXutB9wPC8HPRFnhNf"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
