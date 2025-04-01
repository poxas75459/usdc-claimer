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
    "4Uix3m6573teMiSYtbS5shaKUvN5B7L631qnYWt2Cstxi775cU5rSNqSstjDhhuM7JJ2VWYnFCnWwsGYbGHLDgpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HheQaXitPkwmU3FzDLcH4Vk4Bn6paKuwuefL5aaG5AmqLB3vNqeSEwuaJoA5EcQfrM8HAMkiJVvHTwxpb8ThCmV",
  "key1": "5MuoftPPDtGgq53EqL6eC5egMnvrCjpBqaNK55qivA7CjMep9Rn5S2zeBLw5gigNHrdk7pbS7p6S1FkmFy4WzDMo",
  "key2": "2hX5aRkcMrSAJkNk6cS3i39567BDcZZY9ZGZ1iyGMiBRw5ZNaX8eTLZZVFXVSuEyaVNueAcwnytV75MRmEeu3v5y",
  "key3": "3F6KH41rqKVnJ1FcfRKHHzzpPcTqh9einMmZUQytRXLkjE9DTtitbrJY9MY2zWGkmqngtKxmCEqMzoyQxqSPejXr",
  "key4": "4jFD4vMDAmkb2WuNGETEJWcnjidHZGtt99UsjmRbij9oBt4YDYuHHSjuKGdGWwxvbiAVJ8cZURxZR1Gz3w1UAabu",
  "key5": "4N8QRc7g2boNZeWs1vH7Ph8YMwLddtjqSNnf5qUfa8gx9hgqnyrGjG9nVRis7s8b3wCgHCUi1H7ATZPec57e512R",
  "key6": "2weBfQ9XNKxtdF7eu93dHfyDKcBBzKRxyzsT8Uq7kDR8NZAsXt3qerc5RW1NnLj1Wi1786zC3YzNySWUzdTdQQJ2",
  "key7": "4hbCMHVWRuoNZ2jBdUub8gAk6RpDVJ1XXjAh2QB8ycjrbDwvMJNqmPCFqvF3BkPFCNehgVuiHc8FxzwF7dXad6Si",
  "key8": "2GS5eJ6gojGTHfnwg6cs2cM6VrCzLT4py9qvULEZErcJmMR3GJAddzADtYxTQExGZZC11jR4uGGpQxopgbhp3ixY",
  "key9": "ukikJBiGwZw57TSn7ptsJ22zDBJXeWJgmQYGbGh6PHQaCsVHX3oRuDNMiYAsWoDLKm2sQXpTbkattiXk56Rwqg1",
  "key10": "2P5NtoRjsELid5JegdpFq5oDWgcdo9NiZ1JQnD2ipfgikLfs8hBnqn4TSzJoLbfi1V2ttfbgHQnevvpyvtXCRLUJ",
  "key11": "5frMEq6DtiSvukzkNntvwWRYFaUF3YpYPQ5B7rJSEYxpMaVL98zgMACrY8DWBxjYkAw3SaJFQfuxoWfrwiGwekwZ",
  "key12": "dLH1Hvi7j4ZaQBbabR2emNS1UvDyCJAvMtK9w3V4vPtJfbpr4jmWYoQNLjNSEoKQu4mwVZHzwgk8KgZZWMmfPfU",
  "key13": "3Bz96N2M5qTBnyzUbExFPqFmyonZiYjwNWBGnUfA23eep5hpxJQMRfVP9keRLgMc4MaPm24CzSLjt5a7FeYKsmUM",
  "key14": "fEAcqo6EynRF7y7kLKmpV9cfZfFjNb3ZoRbYzf8ZnSDhUWR3GziVPws9ckviq3RsYfXANpUMPXRsAYhapGoEgvo",
  "key15": "5SRkGr4nVd2qqjzJdfzMVeVo3PVzhNSzfi2VXRZ75nqPhSbN8SSCi8P28KviTP1FHWD7WH5su1ti2Qz1AnazgRHC",
  "key16": "5TA1XAzsf7YTs86ALRBCw8HbCprPrBbVZC1q6tCQgeuiQbdFUjYNf5TXoyQ4jjfsG1JcfxGyzvMMYGUMcLkk2sNB",
  "key17": "27NxLNSChfakmWSgcVkcq4FnJyREGiJXqaqi9SDJEwhzoqApvHqBvRVtm2cxJxkawJAH6VeLBmSatZLXzBXgjeyL",
  "key18": "2JGNTYTgUtBy2KzvjJu5bwhh3on8JvR3gH1TS6rzkk2kxErt6rABXUqaMdRnJKSiVahuq5j6hTMXk4kX4AVa6P6c",
  "key19": "E7TeP1YmrfR5PHeQ2XjnWKq49tFwuLXM4Bykt7C1LqcBWw4ydETdoqRvzgJzPbkQhRkpe39iUHuuWgpksZrU9Zj",
  "key20": "2nddFbaRcp4KRBAqkjFPBmuPJhBEsXDeYeaT6zey9JWbf7e47VLjgfAC3ZLggxYYaAxpgzjW7FELoAubVwRwmxis",
  "key21": "3wXCNtQV7yyx7bmcwf2hJbx1g3YPvj6qytyGdc8qTp8EZxS6YkBVjgLSijimgwgEoxAEMEQkXpJywcp9zvfUiAGS",
  "key22": "497SrSrqTnrU8mfyCz8VNTm9iBJHDiVNgk2SHiENvwZZMZCioYuUe9wxcYw72Q731hs6DXQV1JoBNKpggAxRaLuy",
  "key23": "4SbKsfS9Fdac1AM97u1Dgw326SsDXhETFWa9T6oiXsXsZNoJkEoxkqy6gVLPCz4933P4omJfza59sKbFWjZB5rjy",
  "key24": "5jz3WsA7Nz98hMhq3zLUj69kFqwxu7NyaFKiwDF4F5CxYGgyZEg2YWaCFsQk1PXNNrFNckAUKio7b2mQbqKUp1TJ",
  "key25": "2EVFBZ9SYRpcPYovSyB5ksLQRwXcXcJqTvc7rAQGR38PTKKc55JehqBYJf4gvbuMbXCXF9F43zKBhMkNqPVCBf1i",
  "key26": "4qrb2TyaKbdYhRXEJTuSa9JSAteD9gPwkBa1ZRx8kMpBgrZEgapNSeQHLHtDDoQbjSi9GrhvjRYtdoqDj6vzZvre",
  "key27": "3q76dK46YRSUWo6upbvggwmp1FvAMERrHeMtZzCebLcbF3nDv5b5XtahQzBUvZjqoFH769ywkK4BZ93k3wNRUPhb",
  "key28": "4SVsLbbJ3nLCZB9wyerVucrEDdBCi2aaLbiLwKBCYD1kjQJPBWuxXiTxXGLnxHrCupQg8CXYpdiKp55hgt7sQcHu",
  "key29": "3zUTpCuFSt8NjkKXNHaTczUnzXmgMZ9h2wGAk6mD4f5ErTvMLgSSWCspxLFsScn8H3FVSfR2XdNjQoz4nQzyV4Vc",
  "key30": "4T7MRktDEPJRyaRGi5UAydVJkWZZxEefZbLWQepDipnze9BWWRGcQkps9j5NdDoZHr57TQ2TKRJpLa3YchfxM3zx",
  "key31": "bSYcq2AS1oNMT33bU4Papt8q2eDxsCX5ttvBwyST38wGa17mDoX8WAAAiSnAhCnaXfoZfdESDiZoUtQ26CyDbW6",
  "key32": "jyzvuamAK9g5RbfdcPKbnXnd4gGU5NbK3VqqNj7PfYeUQPKiY49pnCUb9eA8vSPX1ADeNjA8Yn4TSuqJXgWeGUL",
  "key33": "65vMw3ftW5ugSEoDN5Zs4oqsbSJ53Una1BRMMUC1Frnt41zmVNZxKzVVdvfxcLS7UxhYH7pxdjrpSY3Et56UuhwC",
  "key34": "sY4cxYNMDX9vZmuFDMJY7Q1ZZCnARFtaGGGVwFdctCF8MYMvpdXFgY7dfrvAjq66kiHPUPbw8q6xd5hSAtTN1mx",
  "key35": "4BuGWS8uyi8QQChXRHKcVF8dFCwe8i54YViC9MinoBg9oUbRowJ323B45XeCGAqmpotjrdu6gTuZ7T3HLPmU39rM",
  "key36": "5FZR6FLRSUwCWaHuxZj3egwziHgYJczZj19jVbA1znUtt9H7aUzTWWhiX6aCEn9botkj5s4eArUqj4M5PztWkKGq",
  "key37": "4cdbu8dw5E5JXuQbwd32qMRvKRZpqmEAj6Z7Pv3eyGNwYvefGXSta8Vxrsf1vBvbmv3R6dxX4NYrHk8J691YDXQM",
  "key38": "Vzshdr431NJED5jcnkRkLybXHCaG46QChXBHKnvfi1mFdLB2vdJ9mnwsZbxA7erAWhi8mVEbYzJvbRBemygFacJ"
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
