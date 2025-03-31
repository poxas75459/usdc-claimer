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
    "TWsC4429inerDbDcvqTeFvYtvwbqNw24vXweuVY66BwzFQJAdGg7zV8bVDtBJn3CNmEhQjCJSgSmGbm3MZfUhXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JoZWoXmxRpisMCya4ZSkZDUVZewNWQVmdBPxZY1GhjpaNTi87dhyfUFagdoXYx4fQTfVCsjCscUbw8HjiijSC3U",
  "key1": "2GDLCJs3oUCHXcXEeeCZiy74KP36MYcLogeRZpV5PZeqKHpKqFhtRbxqZNGHLDcMRjMhHTtccoqMGuZfFg6z3ASL",
  "key2": "3mvZFi4L3KNS6EDapuuq7PDPHX2Hohw4wFz7sHfUkPYKp5jNY7sKGJseboAT9UXzpM6vQVaocQSMcvSMaxvqfQei",
  "key3": "5GUgYxWgkYYxTqPwQKYvb67EjEUiBNZLaxCApYwkSqNHWfL9MNMFJT9BPiwv7GTm6ymRL2RnpG4hswCmEwBjUHUA",
  "key4": "3hfgNVziygwTr9THR2nJP6uu1k4TnwnWs5ULcvdmmFJ7sF6aqsrSb2CrfeWyB3kLGKf1AjkkfrKGzeSnsnNSDeGX",
  "key5": "4fe9EnwiBX55i6bcUvnLD8x6YPcrrtrZEjFBmhBihBKx6EpPGXLAug4kC3ZGPat2es23A1qAmvNysnc1uK1235bf",
  "key6": "2TPaaNScMdXv3VWgfLvkXKzh27mvny1zmjyJeRzbtPqixjCxhFtAA3nVj1x7rWqzuHYDeC6LnA8udHoxpWykL3Zo",
  "key7": "Ffrmc4m748gAkEKNeGQ53vpDje9i2nWBBxScJyKoJ5CxfqoZtgakzDHVZZLeK5ykwZeCBgBYF74xirn31JVT6RU",
  "key8": "2Gg9qUw2CSfV2tmSejceSnfDXUnKjJLRTUQBXUGTUCQ8CPhasBDCRc8D8kQdBRYQQwPNi1uDUtLZBG6nYKSgPddC",
  "key9": "5QhQ1TjAABZgKfo8B7pPcXJEPa9E5dEYwvrT2XegfxL5eCbB7S2QAxd3d8A6aY4Ev81k1B62J5VnqWbjgUJRskaf",
  "key10": "3DR6rxF9A5zbA4BJAGopf2C89urncxtmeudHh3XQP42ir38D8CFxRdsx22efupViFy95X2mGfWeb1cnCe9w1w567",
  "key11": "2k7oa3KtoHEfPrRnsdTuZpaJ7JHGoTnQzZtRCLpj11aupQBew1TMojEhpcjXEjW3JGmxhPiufLuGr5a9L7nL14gn",
  "key12": "2rxpHXTU3aRktBd4TumJx6BJyo7ogThvsDmTz5aLJE71TRkajkLBY7T6fcMeYgXCjgJXSpfeeMkiLwN1ZK4cGvJt",
  "key13": "2MeUhqvXUiCkYxcep1HrzjivNH4V8sraXZcubvuNYvStSYo3VXNwSLsb5j5aWw56eW5SBc8HVtGPfmS1dvMEH4iy",
  "key14": "fixBPz1t6MG4SDdncaX1p9jse3f64XdncKxmZrx8qUhwruqppC9KgLhvibspzftuugMm8QfFKiK8JRu5m98TVnJ",
  "key15": "5cCLFGvgnCY2MzePBxd7YwX3q9ymAXGQZiMMke34RzL6Tf1ykgsTANZXWiaf64oQWLRoD5H7tUFhjNeGB91x3B34",
  "key16": "5cu8RGsK3E7R1DpF83duM7PkqQhzLSzU7dVdhLt3Ws9AmAcA83DaJQK94JuTWZj6SMswbbbYA5dgm7SE2XP7QedC",
  "key17": "3cv6afWfECk2mpbDNFkhb4643GPiLn11rLZ6dQVbcUzzFk6wCMoHrh6cfQCJyXVU5WjLGkn6R8MCc6MBkeS8p4Du",
  "key18": "3Xjz21aUUzPwaY22n9ed9ypFH9CoyRJYv86NJZ7Pr3VHzxx2Ksc2ryGdc1cn5b9hPLwvpoTweWG9B4wcMVQHASdZ",
  "key19": "5u1cYKgeVicssxQExVgyLA6cChj88orCPVjPM2xtSfpDBj8WTdBi2RyJdw1g4FC5V5Gx1wXWSPxi4c124tPbnw9Q",
  "key20": "2dHomNxnQbYLwVBGB6wjVV5niFVxbsBwwTURvyeMrx95mDFvqDdCSnWxqJrkEgdLGnfqSSEEcUjDt7NbqLem8HLT",
  "key21": "bukPR8GARgDRUaidjVycDmVmerAGjkcKLkVz2MZghGLfGjm52yF9v28dAnfndy44a31yjTyQFUBVTFxBGuGar8V",
  "key22": "2pmTzbabMkuf5t3CTiGBBL15sdabrQbXocXcYur6M9J4mFiyx9AjqUWoQNdhiGj6G26o9MV4iZog7W5NQDej1csS",
  "key23": "2TxjKC2mvNQ1jNiK9FUK6Si8T5UFcPtfnmcNaFWaKPDzeXTed4sLR5nErfXz1Cbv9t56gD79gQUnUStgMa4cDZ8q",
  "key24": "pRDszLc6M1Ep5NbPANcJLJqSSP6jPqXG6hAS3MCgE5obQCK2az16PSqT6EH9ZPyGpKajSgMfsuZmsxJMp25TEuH",
  "key25": "ZkgYK4HZ2Vv3LBFN4VPyKkxpjdujRM8CjiNpdu6RTiHxgWawG931xbBCRdhVbFh49fb8CsQqZXj3WMDAuqjTGKK",
  "key26": "5jJ8MqQX21S72a8RNKM11qhKuLhTkCvwx5BX7KTXCuPRkNc4eaDd9SU3NKwSvhxzWrnhS9vxCPvFEdB38LuCw5MA",
  "key27": "PomPkteag9Lt3k1v89Xtv78PaEar8H3JWpyb1cFTq6KXALGJ8L2KktUgQJf97Nz5aYDWFsyaqeL4dGc458AT3iH",
  "key28": "4baJ44xpRTf5kqLo6cD3QknmdsdxG4xwPtfYYfzen5jTvmNNFniCxpBEdsVBzM6QPnN2UrnKvpXMradJFxC5QK45",
  "key29": "5kd34SSRsqdMGoRVWEiYx9HVfFULt3zMgw944XEU1z3uyJA4XRejpAVoDSPcMJigCCevsyc3kMD1zCAHjKc4oYiD",
  "key30": "363mxjEx5uD9WAk6fidySW8K7skaeFgUUyDwLLys8z3xGWrauUQhCo7iwUT3DTqucTfBzBQt9sdyytpJN9Lf6C4",
  "key31": "5mdFqXvjeJTdUKrC2qMeioNQ1NtJ5FfsRxptbXB62xf9Q2W3c329ghETL1kek9xZgHfof6LZnGj7H8c74UFyhVyw",
  "key32": "336PgAxCpFo7SsMntG8DxvuaNkLLy2DinHERHR8SB11MgHseaxQXkcAErtJ3qAuAEEreVW57hFvTsWh23K5Q5TYj",
  "key33": "5nbcU9o8hWgqaa52U4S6XBRkTmNErUyVd1XUUCUbdwTKWzcRyRfD9zr3FGno5tAcaS8qSB2XrQgLmKP39WdvAfvS",
  "key34": "AwcG1xciDDNR6eizsKesqq3t4XPeD42bCjMoGKNd1dsNWKkGdQDT2LKWFcT4VvXkVxA71yvZByxdFfm75pNtdrh",
  "key35": "5q3GSyVP8SgtuujrLLNnQDvnK4g4wcFDVk42NAmsFqaBp1LNF6bXdYzCdPNuTM4Fby7GYLgre2jtcTVugPx8M5LG",
  "key36": "39apqHDfjWXK47ruRGd1MoyHn5am4Bby5J62jZ7RTXGxh2ZZvEnqGT5bos2q4msJyjpjNr7WVRZwdGVqju2kyJTN",
  "key37": "5rtsBLna4T5BTrZAzeuVReVC5w4Xmc1YbbR74wNXndpQSwTNz3jkZm8tbqN6DLeYXXqQthLKo3gKE29SiysTSn3G"
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
