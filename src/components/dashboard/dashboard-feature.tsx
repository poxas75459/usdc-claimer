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
    "4ZHG5hTttC8Nfz6US6ATkktXgXGRxzFwnJTDUUGtMpQcC2gVMa83M81uMZJiRgk2TvYRgFSUtu3eUabv9NDrkeD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58eh4BAB1hR6m9cPCnmLaqDEHA4jehB6SaaqHiYPMkwPF9dybyTxsMQs1Vn4mKYE9mvAhXzXZzx2bhbGpiDoKMQn",
  "key1": "3oe4YUdt65EA6tDMDzP5hM5AJEJf6wJivuEmUDeQN5Xxy58nCy5yWEpnSGb22bWeda5ghbGDCJeYqc6BkDjiEWoE",
  "key2": "2yynahWDi4X3rXKCWR7aiizEMxRvjtYyGpQ8bWVC8Fp7BDJwGAxThZkgiD7gDAXqBh1SoPHdtPPo5GScbyDNHRpy",
  "key3": "4nbPsmytMEDnef63YY6EDCXgsaaHhJoZTq2pSJdABfqoSUY4FLMpLQ3XKwkFapiGZtgyrpoo7psPFUQsUteYtZed",
  "key4": "4viitpVHV9J4eRs8UYGjtes7RLwCYq814scrYug4LGcL3NEqigaxiLn3vg592QbvjbdUS8zp5kJ726j3ZoYHQRfL",
  "key5": "2W9v5aWaHUu1nBvS2KMmoqRi9Tx1qyaDvMygbgNRkdKzAvsyRgR2mosWpqFgGzWA6Um34fT2nxjvxAC5Xgt2shH6",
  "key6": "3KxPHDM3CztRtyWDkWfw2NWdafYDtmvcxCa3iZECf9UHBtXMYQScCNtkFwvMQCC5jj9P4ZdqmGZqSyTVQ5dfvcJP",
  "key7": "4fwgKaqVi8gZ6H28hMgvVdHg1zgXiWvuaNUV7CrHcxwJfJxTMwzesJt3ybJSvv7U4q4QnT1ZARpbf5FxhE5Cwh6i",
  "key8": "833pxUQkoT6Mq1Koxn3soaEvRuVY8fKDkA4VT4zABM42u2zsV4kK2sdBfnGny3fwWFjTtxcpDq4WgP1VQVrLrhX",
  "key9": "4JQuywqZg56vwVytEghbE3G3hM8v23D9MepSjoQAPXG8FkyMTaWHBUvxUvWCPjb1bMPZtxaRtzahPuQgDLWFyxi9",
  "key10": "4RFpHs8PdK8soXo5qoBk5wH5YnxsnoL9wV9LRNYUAHHsdP8kZsnaqdeLTrVTVjdnjBV4krnrDqkHmPUg4b2uxs7S",
  "key11": "r38dGMY5rWBqWWWoTqq92cRpk2a5REkkgFhL2K2RiwpoyjGvhVeGsbm4TN3s5Au43xQkxdBq2vRMwTVMkEN5EGm",
  "key12": "SqC9PbzaAFDN1N4q7QcG7e9v5BE8qJGcsZXNsmixqrVL43ZMpkVqnFRyutcyQJertCJ3f4yh2AP4tNmBa5d793v",
  "key13": "49t2QuisEDRm2siiTMu7ihSPfNMTtQUHswA51akbZJfYRR3Bk2Pefd5mV2JTFEHnFkbqDWLZfoq4XGErY8HAGAyY",
  "key14": "3GujZRXX6GHPEZL7E4xKbWp4cs3THxdssxueBxPEiH4wQkL6AyE46viDYN2FT3NEL76mHFhMmSNWGggY4HEecdtf",
  "key15": "4avf3TLAgazNAXBuLYeKJxMmPv33rL2q8NhbKan8XSoCLGCydBgGLjK1KDXncLVzwqjaW6FpAytTxwCWKQvLQmSA",
  "key16": "5aURMPonjLfKiGSBsihF93TGc87zcZUKsZLGhXveHCE1mdSMD1XYQPcQUDgCaUmp3utHsmrBgDMH7TpKonQmMh9D",
  "key17": "3FX61R8MRF4tWF59JqbCsyani8E5733ZDTEVKmSGXZWCfJPvP9D3oK18DgcJDFaUe8c6g6FL2wMRqMJaKJWR5bVL",
  "key18": "iuP5hbfDBq432NBWsP3Ff1xtdPKtF3FuFMLnXeiHHh2BNHQSngK2JE5D9cF29t6YLtwE9J9QheTHaTnJs9H979M",
  "key19": "5uGTWPXqyZgG5Jr5Thgy98BxmKxUr8TmWxY646zro3JPs3DyvBR6FWWdB4kSHYK7j4W7naXD8ZtXX7GCruG7XSLY",
  "key20": "3ECh3vcRhQz7cr3kpPqjfDYT73F8tLExaiPcoo1GAKiXMhQq9CVsJQkCwd2W7AT4xmUbbLRXfWV6PLrAGHL6GHWR",
  "key21": "2aLGwxhwnUyyYsM2pW3p4Uj8Eu7paFK3kiQf5YKKhgqizJ34jjsj2rGcaEvAeGAAtSCpadqpcCW6J6J6yJ8kgKVR",
  "key22": "3QWZ8uvu6yAi7SC2TejgDJctZ7Zn4efij2b4SEoUkygbYHKZPcwWghgeaJ944WiyLQcKXxFvpnTG2Yez47Rcf1ur",
  "key23": "41s3wGh9cwdPH39epjCgaYaFesZJfMW9thkeNm6p3LgyFHbcr5sKKdA49RkPfYgZMopNvhqoyojwSTHL3gdThr7f",
  "key24": "3XbQd59j4h9mLkjBWrVYQemWLtYWUphTqmRKgCSz3y2UdJNnUHZzcVLMfRMVPqwzCqoQV7VNvVYaR618ZUF1CxZJ",
  "key25": "29wJxyozkQTjkfkKeBMSY1KVvCNa2pyRq5711BDRNq9CA6DLtyNacFcbrLHp5uKrD5xVJ3122AiEpExwFFwK4dhW",
  "key26": "2SV2LkVgZxjeNTDGwtJCo8YUzxQnHGko5rPcSegD4KGK3U8NQrtwsGVkPmtAR1GoMaywCoK2yJ3SNVaLwwgiGWr9",
  "key27": "4wxiJYagZQxdjnGK2ob3AzSo3r6HFa9HxtnTzkjg7Aut4Cu9Pz5NFBu1U9873f2w64hbmfU5uTkVZpVUo4nHeSeo",
  "key28": "4FY9frsmXJ4zQ1UMyRydMct6tLh6SrXyAv9D3UZtiJgbUAJi9cxKccX1asjaFGXVV6sN1FPSGxK1KTMXD4PRenCr",
  "key29": "3QX2Wk8r6QBCrQVGae6FrMyVXsJ8qcw7WxXkpK8m6BV5RXMnVMnrneAWAsK8yZpnB7ZKnWeqsPpioboX6eU8xd5T",
  "key30": "4FTmwgH1B9Ne6eWsKsnGhdB5ayQdAGeU5VKp5ajSGuDQRceVoinwgt5TkPdZYqoRrnDS1VKrduBfMaf7RrgdpjGv",
  "key31": "4Z1k1Fqn4t7KWPsksUH11b38aVtk477W1zpqWxaN7Nd9ii4TR6EmUnuNYE4mC1WyPA9WzzHzSNp2va2SifM9nyWe",
  "key32": "29gE7UutQYmrB4m9hUxDAxubJDWiZj6vPE9g1itBQL7TeBYpFzoBKPw7F941p1MPbbKYkASTKzLwqhE3fDvxnAYU",
  "key33": "2vHogpgiBuH3Qy9WNZiYbfAUp4NSFCTpmcadUuehvqTg85bQ5FKgAUAtUCSjHmtPsYpJe2TpZYVLT5RX8UHUSq3S",
  "key34": "2oxgC3uHSfF3CDNf1WPwedHak368dtSMunH8v1GbH1W1ZHMekoE6qA1QnURhHpeMTFLgQ6CSzz95QjFjAhJZmyac",
  "key35": "5o8X43YCsXyfvuMGitf4R5FuKRrPiB6riNF4nFmskAKht9u8BKVQdSdrQAvVpbf3G6HbD5bxL13kFhNqMHnrCMqU",
  "key36": "2sgnhX3Ber2YVAMZmgXnFaMuZV9Lba67wnTqVfnUZZ6hYP6CpRMa9TddwpT9e4EhRAzTgSRFQcZ4U3Eve2J8bpqM",
  "key37": "5GTwBrUVjaA2MdUoYapX1QLuFTuRr9zpu8vMBJAHkwBPyRoDHfBzoMdGsjvTz6PHKcFSbAhxNortEd4Z8EzBJeGd",
  "key38": "2PFfeGDC6u1ZncUTmH563gQwnMGpAxNCyJM74irYaZf9ipUvdhRXBJTUZXbEqy7AePcR18QACsyWQXBkN6iCb4Mz"
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
