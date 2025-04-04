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
    "3vS3cARFk94QH5ixGWwgfM62ZpiybcLmi9vPLspZVr7dLXDkaxadkhHY9whjvauonbCkDSVwPWbLUVXfuxMXpTZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3c2b1gfvphM5w2j57t2LN6ev8UgqPnSn8FJxPYCPrysQ1UJ966GxoZGLV45XhogbAmNV6cdmgkzPnydUL5F1km",
  "key1": "4sKbyWNF7dcMYABoiepc9ShHHE9pydSCmUEjzgtx9Gz3mJWuDcpWi8HLd8t1isQdTqst697mxvxnHs8XLuipLsic",
  "key2": "46Z6oD8r6HsZGRjkfL5TKcrhXbVv82hmqLmPeG3XvTyDFVRSPLhBAsYqLYiP5dg2JfH4GqEjjKaAYrbj1v3Lpssg",
  "key3": "4ecqYjjqJkyhQuCT9719SWZ6NdTkHBLcpJdjDJpdV17yQuHcPYxHryGyGkBiddYsb4Fp8vYuYaEHXovNsqFaCkQG",
  "key4": "4oUpGdsqRJ4CNHytceAktQU2EYvZwdyR9pTvRCVLHe9iPm3vYXzg3xRcpMirRbWkGB3d8DzTvLRMgPcNsVRsyvuY",
  "key5": "f5hMV7it73SKdYQbsyhMkXk3fRv1zwwWWdQw58boaSoNKcpZfXJKCQXYMVBTEdPdLk68TUxEJcZwocZTQcwduwK",
  "key6": "42bhDisRXw1GcFs1BgGe7MFPsngj1Y5oz5vabPGyADqiAVJKehcaXN7bwbNkyCEYWBAXXu4QzjRZTM11to1dqYQn",
  "key7": "PD9m6LGaHKKPBkBc8CySx2yKNmtKkZ7Z11y8F1BCADuJ8WZA9LVMeED51a73Jg8cqs85fTtRkTToDs7n4p8TyZg",
  "key8": "2R9zqHp5V49fmG59xbCgh7nMnSJAqRp97M34ugQsrrTpKAYBAmRC1AKnezBLGWHJqT3mHqiDn9D9e5dMLmzJhoC1",
  "key9": "5bhvQW714R5rnjjtVShhFXHYniNfcKxgHbQecNgkdGncBKu1X4vZD3gWqjQ6g1ZQBKcCATkDJVNZaPYUHqg2VRoP",
  "key10": "49zgtjbaEqzmhZEpDK7WVwZxGJH6tE9apTsZjPnmdpc9vnHwBgsqZfpgoBP27p3WSpfVEuYhjRwfKANh6mM4bsPE",
  "key11": "3B9wfS5sV4qSx2mbo8temvt7vALfLQKjGHa4BDvFd8bP9QukGCeopwuPsDJB6qATNVaT8CR2D2vqy3FZZwhGCaHq",
  "key12": "37ChriqRoH27MPCS23sCxUMDRuTaSEQUBD22THcHyokyWxUTK21yxSj8NMovSb9NyoUCNu2WaLdsrcvtAhAa8Vup",
  "key13": "39rr1NtYyzdbrHwcb62w4oZvReVn5RaJTBWHR2s1FVJrxD4eLdZpXk4uZz8DphoF6dFpWzhoc5ZJkewKX49WkZA",
  "key14": "3V5Hg5Q7e43nEDtvRie8PRQ3hVEr6bHSWwq8VQJGTYzjxVfP71RKnyHoi98a8GQcqrsBDM7WSYy4yYmQDg9EFqhJ",
  "key15": "9erX9yzA9HNfu9iYQQJVbKbGFpZyA8qp9RtGFgQNTLwZUtpTmYGvB1gH5wVTuoLbAfHiRwP4eTubH3MDSp8m6f1",
  "key16": "vfj1FMLJ4pBuob4KcZ9M5bscJUSM61wzK18sjweaMa6gVbHeY5Q1fLh3DNbUCeZUWV6oqSKwy6Ax32PHz9rJZux",
  "key17": "4Eb6gmeA4nk8ngWHeEL6hzcXh8GjP1fowHyhNQFuo2wPrXaFtNM39666oXco7bBd9KfvN9v6426vyCU3XosyHLYz",
  "key18": "X1nS6P6u5pPEWpsbmTDUNnsER3okbE9r3kYfLGqvXuvTu2g3MRUvDpN6hpfmbVZ9Y9t6G7u1CzAQt6Cim2VGyFu",
  "key19": "5PyqhYQCKrTy89zKozKrQ6mrWgD9AU5U29nZZVvFTVbHqZNmtLacM2ZfBJqfYg1T5H2cSWKTPEkAPVJxfW5YVt1r",
  "key20": "5bZC7NiggzeKwHhGJRAqNvK866Wyfz14NmkdAbtrFmAnPXzMD96qKLuXQqPfufVV3xRjKMJC2Q2bx2yv5MC7Laav",
  "key21": "63yCfS3CTNqjos8E9Ne7vckNUw5rdAq3NwcCkDM5Wo8WsHUzDKyyLSc8C9nRV44KeiJeitZS8EASyQoCj9oYJf96",
  "key22": "569CZ6xU8ksqbL2op4MWBkfrWXFgLCf3CgDzNiNso6Vyh3BzvsDH7zTRcRW7767AdaQLtfu5T5tsuzjmje22Kkf1",
  "key23": "5x9vvSahcxEUT1dEakWyaBoZgzuuTYQ3UbWNF3wsF1s2f31APWojrnvmhdFTBw9CePSRATDwLnPDErtfEfiCgQ4e",
  "key24": "568hDkrR7FjABMXtFH6mQ9Hcch7tqhy9q2PxrtL1jrahR2trevMnXJdf1kZ2oSBGKFAHBqKShJ8JPCAazMnAsQqp",
  "key25": "2SrGWLc4CbGXSoD8a6Z9qtgjthnEBREN4VQZNsWH15Mc3KwTF7wG5zKWQ3j4cb3gFG9CgWVYLRox3X9aQNN7iUN7",
  "key26": "2uNAJSEEfakS1RQ1xcuiezXysaSLrRio8Dh3VBnmjcVW9432rFgcAvz17yYQeyTiRcUJJ3YzFLgw7xVvn5hRqUCG",
  "key27": "5HGpdFAiRrMEF4ZhfPbxUMDavFnJYJfsENTGRcS73xBoXZH21j7XogJA9g3BhaXLTiUtTpvk7WeAuxq8k1RtMBLx",
  "key28": "39Uugdr43X22NoB2JWDPxRtHoP3HVTGfN2bKakhcUwLNvURoWrN1BLJzKmCuzym9tXDozAxxHmTBnXuWQn1u8ME1",
  "key29": "4jHThJ7C5FBrJkWkRQvsTzM5V1cEMGDvmhuQkwbFEUjfA2CLTtEMFshQDK38qeJwA5fKcd7CBBiEVXRhBZPrMfne",
  "key30": "4H31kgxn2PPVRhr6b26P3fbcPNsrC7LkJzH4tD28iRYTGvFtTrCiPN6x5c9sgCH1TKk6sQUv3TZPmjs72a5omCF1",
  "key31": "5nQ6x1vs4KvQZGVY1nUj3G2qfoYi3iwdC1uVreeZYsAPoMdx53TYHs69PSiDJ11HtmqNUe4KiKxgtG64NHECV6Nf",
  "key32": "D4HSfyGeZ99Ljt5P2qhzShABFtaJrqV1MrXTh7yYhhiZBjhnZ2SHSuMFrP8GCqyJa85n4Jpo8KHBgNPzVs1S8Vk",
  "key33": "5LofNBCncUda1GCo2dAmxWfaND1mB3RtQhmTFkQPTia5ghEE4vHRV68EyvX41BBLmJ97r8BQLq1Ygc7okcE85ey4",
  "key34": "4JUMx3UgzVyJHfLQwMfrBu1XiH4GSBf1BvHP16HpNQM52zhYCEykd3uL6pdCWq1bi3SexzY3EuKMVcGW2EoiaPcE",
  "key35": "3aafoGQ5oEcfipW5q8Lpis3cQNZkeCc3AfxxEbwsiLBDvcseG4Ef7tVrEjpkYkdVdQPL5HuUgLmcdoUpszgEqiVo",
  "key36": "5aLT8Nit8nsRjdZ6ZgFQdVYnaGKVV2EzEpnxZ71TsJC5YjxSwKj9JzHgudzXmja5tXFLZEaK3gTGEda2p9tf4f9a",
  "key37": "4VXuupFs815kNgZdLwkUsP39psVn6G8Ca2WUWWrkrd9wAHxp4TqrB6seZxfqZa6XevoZisBJUGbHhy8s5VVJGix2",
  "key38": "74mXZEkhousLzgV4z4mbuRSpmwePqSSH3Y2GRA1U44UnJ82nr3x4vU9cpsSyTi6Xv7CPuXWj7HaJdECh7R6HmDV"
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
