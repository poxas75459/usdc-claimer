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
    "3EKmHFnJ8abxkHD8NRkvGbhmdexjZkicAzB61JWi8MxTxjg73YucuJy958wqPZN4V7BoAQTQBfbSbJwrES3DFtBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v822QWWh2mrDPurUQoELnchiJEB4N8Rs3Qh52ggVd7iSz1iBcZDJxKxiYr42GDaXZUcqCvCxHJv58W42wEha6G8",
  "key1": "2cWFu7RLJDASbn4n7i8nCF6jGDaLuiWbEyE4QnijxVGgeoQBSHuxYNCwdCcGrR6RExs9eDdTrMHJWpcWjJSy4T7S",
  "key2": "4o6ckGyw9CFW5E4GCjyduBQaQrSFaYqz4NMTxXsfDWPy9jWjkEC7qPz7Sy6R59kBu9EsaKeSMHvA2jKDptGatyU2",
  "key3": "2rqsigBBoiM3SU4Dg9ShHdZmhiKJj84R6kepGBVDBJ4r8FWhAc41KJshDx9piNfuoUYHp9Jtv7tA39A72GGKqvsK",
  "key4": "53BZPMo3QRqHcafxoXmYZnR1onXX5aiPiueVb46b3Krwf6VE1m2sq4KuHAkETjegVGUFmDW2D1sRSQSwLWmKkJ3B",
  "key5": "4A7nYk9YBkhfcacNLFXn865R591QENd9ubASVJowcphJEBJX6hrxsXTAvjhej4NP4gJ8kFfNCtPNzVRM52wPrkzs",
  "key6": "3BW6yrQSU959nYhzGZ3L4krpzsyngs3feh6G3j51q61gn8snPhzZ2PQw5S82fa5kSGCSHBPTJkRbE5EtCaU85wpF",
  "key7": "5nyoMyAZLj4re9jDobXFdiQGroPqPF3nSKBwyuNWUgbQ6inrk7ns7Da1cpjFrCQhP6s7DC6wKQVeGGgGxAAxhMiC",
  "key8": "49HR4u4aARwkE7AG5vM93hmJiLBmAaf5sMgwPDvnvCeLEZVAC14uMgPiJjAKUAXYBB5vWAXWGUCWRhsaL1bGrnSy",
  "key9": "59Fg8XNZkn3R8AAeFm2B5BVRSyjJT71RjHuxUyjbocVb7vvFu9tdxCk4Hj6156Qfc9pMDn8yqrgYH8vhTvHeCYwQ",
  "key10": "5jpK9ZD4C5PgReR3LrE5yK8bCxXkKWPd67h4eKSbZYiziN9yUYzmHL6MS9jWK72L6ULVfzLZ8DtseNbCaP2ZorQq",
  "key11": "2DT2jbvxL51GTjKGHkAxoUFNEnMNeJghfcgJBXB3Z72pLbwMQDC8dX32KE1ySfZZd4XH3sXGFVY1SapStpHr7keK",
  "key12": "3i82tsSnKLTdGjxC9ShrBABM2Z9jhVhT92QN7GP2srfVvoWy2GAQ1FXeSnqamXHDXn8zpn7fEVLiSRdBJPhkYxjW",
  "key13": "2xSzfkay6pnfoeBqgRKA5sjxzQWhJNRYR6ThSPtrB8LBsEkpzi17T3dtRz2vjRQcGL8BDBfAHNxmRJVuxunnpeYd",
  "key14": "2kZzWwxW4VGfVY6q4CRGXtdmCfwnpMHazaufcrvkrnLjZHa1tW66mwJFfRwUqEZEsiBxTWULGpLTVSX32jP9bjof",
  "key15": "5vCfUQVc5kUVYp91RgxCJ6z4ECqXGu2mFRW6VC8o54zSFvTFV99FjgPiBNEmiexDnZ3g4eWK3tZ9L6ZsjwJ7Fiqx",
  "key16": "2pAJp78d6eKrdCgChaktpTgweF9k1XRqiF6ALPVriyc82g5huqpqhQAf8mb13ks9mgNQk1uNAZrdK4sxDVPr7Tuy",
  "key17": "YQvEie53HqC9srqkFqQSKjcopUUKbZSbWnK1f2LwPLixkwVkdmwoSqwHWvXaL9FHiAyMsiMWyjG9VXBoZsB1vjf",
  "key18": "5RCPSNKAwUCw3qp7dfGVTQ5YCVNP2iCg4WPKS6rtwJb4Szfxr8cw7R7C5K77HVrcvNeiwfRN64TSeZ5LCcuTHZfU",
  "key19": "22WSvCLHRpeP4y7LWkYB6Mwk3RhVrb9Zq8D755VgPwb4QEMYHc2Ayq9b2EaQPak75muCxxrPN1abXL1ShboGEz4w",
  "key20": "5Qsh3ZaaYuNnD316TkgnveRdTBNjFiDrwKYBEFkhujdn22gBez3E7iUvy9QcuMtXzoea4zCGaQYDgZnCjP5tup1W",
  "key21": "2AzGcz7ae9iAu8vDQ7TcmTpJnSwwSGTTcpKB86tjCx1KvBYu6jAxgaPc3vAisPvJDQMEkhphUdLpbSx1BNGXkwa4",
  "key22": "2Avku81NFn75aV9kAgX4p1517vYLortWornRTNPh7me6AzZRrAcX7Aume4crwqsJUzji1FTJAKT5wtUbWTr4ubq5",
  "key23": "4qCm8tsoo8xp2q1X13sn47vfhTZMH7pWihe6YN4TS72mm7bzWZ9oraGGxLmqaRsc9vy85MrwXNjor3VPj4SY68Lb",
  "key24": "Z2m4d41eTruva8442JsnnqLiZe4fhPHhfPrkq7ooGo4KniRCJgoUBXgxVHd2Kv22FZUGFBz4LpatXU9QXsALv6v",
  "key25": "3z6yt6Dz9nKqhbNoJCtHY7wcDVEzGWhrZF1Hjoj8awHoiHrMLLthi1tFVfGRnygmpVJJBBi17MJawDegwnhFqogg",
  "key26": "5DSyioyGH9b8GBsyexxP8GYpSL1n4PM4kKnkNUpEJYuqfbCHqM3H4kXuMff3tiZdRGU58iFCkEUK6m5QBVuWfFym",
  "key27": "3uZDCChunGNQW5NnxrnYPefNJjuawfppNpQTZmXhtTvyUWw2jGBkY52QNWcDysQ61jP7gc4pyTjQV6EN4mTD1tNz",
  "key28": "pqq1b98wcYQDus7rKiUmN9j4EuYTBqT1f5Ww4r1sTBDtpU9L6QaR6AwJntM1m9vbayvwrBrYQHnEMzcZmKotKWk",
  "key29": "3dEgnWSivNkHa31cqgTknQoWCdWWrL1AkzqP21PZwHLEmBsNDExvTYknhFAZwRrAiyrgzH2c9EbasVZtBfY4yzsa",
  "key30": "31Ge1F9YNpZsJcnbeQQicezUFkKSqEY3zxwZB9usVPRvQpC4RNcTPcTCBUnimMASkhkxk79jCppiEydYwupN6HT8",
  "key31": "3gUthXFwjZv9XYVRr47SuVqmpbGd3p9RuX84NYvPamSPMH855S5TDrajmn9iAMHj2RzhMv92CpNXc7yHBQ11GLRw",
  "key32": "2xaFsGQWa154V2zbsUjG9g5ZXLH9G4DMMVgnRJd5cCuFD6SJaCywodkH26WgKcHw7nYbEenuiYvLBtRjFi54p3oQ",
  "key33": "xE5MAWtKTdwmFnYdtie3dmkRbRCztStFde4a298ihxh1jdNqKxGBYCRsC8h7R1d27Jbb86wURoxgeVLm6YCpQbA",
  "key34": "2eWhkNCqjgZVVnPrjLagnxkLncvZ1fnJUaFw8nwUcJFfDCUZPQvG4ekziz6AA2DwD6fQwudhRLKi8aPhUjdjQ1Gq",
  "key35": "38LcQiXiNoJ4P8uLT18fHDMgSsPaj1yu2RqquXajDwHuHc8YaNWLvoQeTaX7neTW7QZuMkwGaAnonuyX6GywDeQ8"
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
