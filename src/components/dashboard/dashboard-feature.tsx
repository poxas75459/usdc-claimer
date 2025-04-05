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
    "323kZEJCDiLipuxQfMiidpxdn3pEukkhUzEn4QPiXDMnJkuX8vW1bcsX72qtSeawLYminLLhUuKZYnsr3MYiBMsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzxaJsndPQmmByoGr9Gwsnbbgu6GwNpKnCKmmHJVpwnb74AEEnLP1bFasv9z6vwvEP2UBY71ttcdHGQBmwoP4Jk",
  "key1": "45hLh9S4D2B9itqvfvLYyVwzfcNuUpcttjQpcpUFx8FLYRzFTqVsBf3KSAHkb8yWHub5SfLcp9wHgKeKFkXAiL5h",
  "key2": "43mFPWdPDR9gujXsQu1ZdPrZ87z1YMLzh56L9pheQs2EuJupaQakHz4hdzzuLsDGSGvgHSu5Ni1BBirCa2Z4J6iq",
  "key3": "5seYzUnkABGyAPokV99YPSXSTm5dJFbWjY1Ujqfnms1CYbh6zcD1G47ykyFjKA5xxm5Cp8mYEMcphFAGozsutehy",
  "key4": "5hVWPWGqBjVqeGXyCwbcuB9igepVT6zYb5ktMuo2oF8ju9PqwsXwTRk8DWhwLHXQ8jdrQceU5tJedL2iazRwANMJ",
  "key5": "4xiKhZ41XR8Bw5khfom4ot9YauLdhNPemstgojvYR9v2T8Qb49kc29TQ7jaJmU1gnvhfjH7kK88Uf1L9Uu2QePCm",
  "key6": "4PVoXMPpMMmJhTSRUJijrBWw1bbkE3UWVzSCstzZwXKJ8sNbCXhB2qd69PL2wVMxgL2UfJioQuJavDYBmw1UnJ4L",
  "key7": "3rH6ZX1YfbjRMK8qn9uCxgpeaSND42JZ7WqT6411qepSvY7cP9a183J5AGVi9ndXLYaLVWCuWdnGzjzwB94TgBoJ",
  "key8": "42H1hEyJvAuyBshM5wVtiNM9FyNyqYaKKE8sf3qDKSRJjsZ1BreLQknB6oRsHwsoeUWAsfX2fSMagWkz9cKQ3fg1",
  "key9": "2azQijkgRbEBEApik7gS953w5oDS6Fj1GG5nV8FiNZkqVJht2KsQwpnSWWRtSK5mKTcdJtxzPFnU2aPQzroyXpLP",
  "key10": "3fVGUowPbEYfhJHqbXWM6ccpTeLJNcjLE17HMDME3gwTeA2BrLvjPp5jo4v3pj87rpZ8MzHbbwfXQ5vhXtc2TZ7k",
  "key11": "5SR7bYCuU2YYSvG7Mf42YMEwaoHE6kiPhg3Draj46sbyrmpcGSyU5MccjTi5kyZ3c6DTrze1ivCJtjPTQo5fcsUZ",
  "key12": "5wLf2esdisMwzFFgySNAH28xfzbcn9ibfibbCC8d3EouEFARfg7N6fTqUaRafn4zg2QJwCFcvbpBVCfCZyEnuzy",
  "key13": "53Ri4XQGuhKTpbt2V9PXhVex9wmw48rDMTV87rErLhV6ppWprswoQgpmhDXinEUqoYRvZPokspFyQGbgaxN41Xxf",
  "key14": "4t8xdgKYS6tjgEM1AScCx9Pf1WHtUh2mn23ZWfj3rQfdBQqxXPuc45dmPEokcCCCs4sfYcweHZ7Qc2mvHznNLNAK",
  "key15": "2WQXpTwdgEzXbpoxAKVwRiutV2dMuoTZVKrAuq2JLXEPsFfDybMu9w47yyokwVG3Tx12q7LGmVooHdiRJNmjYcZv",
  "key16": "61iJHaa9Y4MmVLHXUBySmxRKjTYErcwyyWzG2c55UKrFytZiQbydywujK2ztoVJ3y9Keoo6vZdmq9bdqxUhViPF4",
  "key17": "K9HtKNvi5aZw7tqLWgGR4ULJR2mfRhCVGE9wRvpMe2arfEK8iudmHM2aMxASY79ZNMv9pqY2wYjdW9gZsXJa7jE",
  "key18": "2wodENvfkSgMsuoTFuD9c5wBs7LxABobuZJky9Ra4CWCNNjUv94WkEsVKyc8y2jxsSt49oDuv9dSfCiiJgLL8oij",
  "key19": "4ZL8Fi4TD8sRh9ycwrhhhnz3pi6cdM4ywroMN9AGdAGj3NqmB1eU2oKUSRE2qmSW2JkgtRutKHRqxs6UGjV6ppU2",
  "key20": "ewETnzjResJzz5xQp5886MVPST746NdeLdP1CMG8UwuBjsES3pNiJjfZqBMgKqKyG9QrLWSmqP8i9qCNiMu8fFC",
  "key21": "3cU7YPqzdwuxmAeGQStthzrLwkkU72XH1Jm8eLu7rfUxaimETQMB4ik6nM1JhdFjMNmweN5DHhSAYXbHtYTYcX52",
  "key22": "3deNFzHJuAoB4kQ7hmhmF5J9siT5NVRxVFsoZqTvEyHRUjpdDAHTybj9qhPudQpcgzgpyGdAeJL4D9o9ttqgh98y",
  "key23": "2YA3kruLDhLV99qdh97xfdSV4C6rq7fgV4c1mzzPHj9cdPKqw4LCvrtszNktSRRqA4T5LgiQup9Tcpr4e24YjU5S",
  "key24": "2XqtpSQES2qEoiB8mGPDymFvmbfBei9PNAyDXGwEHevWUepGjfRWmDYCockAXj8qDpENpYuELdjWQpv6SHC9r1ef",
  "key25": "3uCSHvikyD6qrPbnSiVKarbAtR1vrfhKkNwNFmwGGxKGnm4pByaqfp1m6fxHLGzPmQB3uS9TLYExmExY2W8hzm3N",
  "key26": "2Y2UPJb6GgP47G7hsKoZTsNSsX1oWhfnpRjaH9Y4NchMvPyzVc3BuW5kTwkXTspMgvyqf3pVJPJoe4KtCtGJkbn3",
  "key27": "pUAF7FEEhBAvfn1JhsuNVRipSwURt8Wpn7BemnijSH5MgaDeeZcFeZ6HoxVfxceUgAuRTAN24K2wSgVnBCXK87R",
  "key28": "2Qx5rQoEAG9esRbZ6sAQoQYnpZXpWTxN5nRwpLMf1L81jUW188mcBFYDm4Hjdx6k4hzMXWpzpS2TjFtW6dbc39b",
  "key29": "5grquh1U3bhQvYLKaHc4gN5ZC82CiXSAoj6aWF5XGA7grfYZKNbVBx2fZNb3FVz62xv2V6DPymaGZvfmLxZNjweN",
  "key30": "4VgRaUfdYeZJp5AZirdcH62q6pveb3cam5G3jsecjuy5XBJZDpY9vWcKSCYB2hsmfbvhiYgwmqfvuwLYfaZrD5CZ",
  "key31": "5jbjFDiaMxuutAZfNb9HPkfziHryzV5SiNEZvLhNLKKJrUSmmmr7h9wwyAMLjSwZmdfa3N4zTcYimHceDBaitcpL",
  "key32": "3cm5q9sw2muLZJFejdmKx6gZ3VpFeR5L94bfQ6DkJs9LJqd27DzmDZQiPCK4hFr432y5tHquvkyShcA1Sd172Vzc",
  "key33": "4f6jBehuuqcSVoRvYU8w3EYPTrrz35MJ7YHJS5cQATEDqmCMAoEKGZAUri5KRFPstsGMRwaeCHgmNjYcDvyoyBsz",
  "key34": "2m7phGWmorgo2f9LDGNqCNzDvLd4o39M3nqRfaDSG4cyziK1joQjx3CyG5hPZT7tmT8eFJwDVdiREfAyQhn4Nhzv",
  "key35": "4KpRgSbREsipaZGf4Y94DqWcwkA8wQHFJKzW9L4Q7crT2VWkTgjvdUf2iM3v87XjJ1jkUo95nEzjBuqdfYPPUXZP",
  "key36": "3G6tQNqH7Jsz93RzNE1rmeKRB595311RAbxje4Nx7D1EaYvucCbqDNVTN3hGGAEG9szSB7SKHZ96A85ktMtyxwZE",
  "key37": "4ZEYnuqBHNk3kBXR4rrwwBhLjZXoM3SD5mKRHHd2uQ3Jq2YsysQhQoQ2mTNjvVQkGQ9WxvvjpY9htdk3EDsaQx57",
  "key38": "34DnbrMEjvDTc9v47USzQhW4vZRWySqgttb7GAshtdLqkVhxp3wSuxMdgZJVKAF4FNdvvwEXLawemS4ZD5qNC1BQ",
  "key39": "TQzg6N5CSTxZCuVm9rwmtGLX6PkeymQ89SnX93P1fHnHjoV12CLCxdVHacCfcnEBdk7eZvNFzXc7dyR72Dgnm4W",
  "key40": "5gmxCxwcQXynCXw4iRmDuoGMRu4HbWJfcFCYF96GJ5VPZpv9yh6rZPawHCuht8EUjMYMw5QL74c5WmJngSZXjk2F",
  "key41": "3Gb15ZivPPwmZjxVDdbf4goiQSGX3EVk26VQw4H2M2CS3B2VDgp5of6NHf18ro5pxrmBEn91NxwySsB1yQd5hzox",
  "key42": "4q99PLfE5VgetoBHYTUMZwPLgu8sk6smnkbkGnFMQ6rFFGbp8V6vR55srWEYzAxZ9GcyavRde5gFfnqeCr8Wf4XG",
  "key43": "2tbxnRbaJYhWUdkTeo8b2JA4iJL7KMDi9WMFewC3d3QWtX2pr5ei63hDKuNtMe5p6gsHFdAooScfJiE4sXfHybR8",
  "key44": "4biy4X5qvbZSHVWBmDzUfMDPCv9NnFUFGr4kdeNc7KqfQdbPyAgHw6SKshwGDzmEnqbbxEHjL1GTPHhW6gft1WJ9",
  "key45": "jZUQKHrMJ1ZmpZ7kaUTSwXN6zk7QVQ2fq1YfRoZpUQxyVEvnMebwRwcZiMFMZ2k6s6BLDycn1wfoWkERh8K2JDw",
  "key46": "48Stg195ZBsJBfmvD287k66brLY51X47WGTe8cuBHW6AAA9VDKctRrxy77NrinUUkpwxdkVhcdTMA2WnBqozTyeC",
  "key47": "3ByUGny34iXG4Aiw4n429inKpv8b16Zvf83SfJa5EWb4KmQeokYa8dFDuipoxuw3oy3QUmaY8vmmtgQLStsToMm7",
  "key48": "3bm8rdKZaV5nTFHDS17ErzLQry9JiQXqt1UV17iuUAGdeAjqUFPjrQHrz3DjsSiGN4jbA1qnQ6sTob9zV4pG9d6D"
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
