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
    "87GQsHeqgPn3CgyUyPFzUX2hRpMSAWjzbqqQ66hCmpG5AD6TMtHraenD7xwAUwAwg95SSkwD27t1YBJezXMmZPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lx88racXMmRcat2TUfNmv1ToZcM9sTVuPhxNwgaQRrYmb3Y31D1U2abuHMLWRL8apDvnFVUTrzVLinVEehv8f3a",
  "key1": "4gbKa5uZe3VosBQc41gB8YBdpEpHBnqEvWqmXra9tH61z3UcojFuYKxSm4o3h4rbdRfLpGQNBn4mT9JpBqVfgdmJ",
  "key2": "3ep1CYTVAV6x1D8xw4AZnycqVWH64es9ZvNZZ3iQrmPWT46dqUeD5nZBU4KHU63stFdDPqjoU6rxCasPf6AHVEL4",
  "key3": "ZmGXyYLgi73o78aqh8KUTa32rQj4ivVGYt95YeH1Q7YQ4nQ4GbEuwp7DpUqGdeey5AcH4wcsXGKTVJbcU2wrE7o",
  "key4": "55HpxdjFWT7LhL8Z6i3t9Tg6N145bWVgY9XTZuqVehX7Ftk4pUAq4YoXeNU6MhMNFA2BPH728kUiysZvYkhhoK5h",
  "key5": "3NXsTZ5q8s4iD94Ggy15a66o4fQepfDFJkgkWuDL3vD2HwdtQXi4RhqBGKACdrLhNq5fwLktLAzBbYhdBEwrxxXZ",
  "key6": "4abNFyrxp5Ahg66Q1eSFkjU4UZA2HeYrXe5aVZoEdKCVsgNuXXqw8DnA9GNY4LJqKgoHhD2FpeSqY1X699kfzQTS",
  "key7": "5gFZJEUXeWM8UhK5kR6GdYu8TVsNGUs5rcAwXp1Qv2kSEM2FRAoCQbXiyKqEdmzvBpmino2JHwx6TKWrfG5g164p",
  "key8": "kcwiNB6Njfs92KUqdhGSXpVLNMF5bCoRc4Fvo5iQWhdgrFAspc2TSWXqL5hpqfWwtxEdpdCJ9eHftLn8qdoP7Hh",
  "key9": "3HZhxL38T2NSywBY3qD6RoKLQ1zUZ8acPdLVb8NgJrYhqwBP5PmJUh77kpMnFnE9GUrKhhFxWJaGMjm21r7u4FNP",
  "key10": "2zrMmZwpgvbWUxhRUbqxYwsJ14SBeHRGtAHMgxAeGPUERB7z53D9wYixoUk2eDQT5E1XFUfWtxrPrgK3XNkgwUpa",
  "key11": "dFLchX4i6sapuT8daTdAwqb9gZrgd8b3KUfaiJ1TAEQpnKYMZjHFeogQvCEe5YMXz4iRbZbhM2TRinimDmXXUKH",
  "key12": "2bgDi9ESMHR3fNfBBeJmiDcTzP8HJabCN35iQpFNdwisHfJj2MBcgooWh6JJ5eTBzVuHKLEXhHism4KXGsV4n6vb",
  "key13": "5ktRRcNSuDgJgPHYejMTiEE5mp5BSG4X1ei52nWhuJVKfkM4JcNxZx9sRg3muVEZosKyoheKpjFeJ8oqkGZKtrNj",
  "key14": "Zr2Fk4W1QA6y7RWKajsxsWxxLzP9MT9CRix7Bnhy1S6KbrHtad1oy7pdGquQ1rL7u8hysoSMckuUsoewMzP5XWx",
  "key15": "4PWzbXawjb529zVp3d3Tgzas6N9Vqzqsq9ndM82mCS6RBvksjS3ia8bBoX3bJD42f5ctzXA9QkY3iWtzBnoAgofk",
  "key16": "48AJGcxmP6T3AnRDXXk494qPu28L92Dgqcvk8DujNSW2BTqTyLnrGLw29EADtwNTB5uHSGeV3WTJiZGjSd7F3JoS",
  "key17": "Nh7Qbsx18Zk9NgvLiHsKqnBKw5GKwTzSdkieGUFFQfN9tPYG3gSP8fVUrwZCpDANii1kmfkjTJXob2txs3gGW3o",
  "key18": "2npGh9uqhRamzSNCAbkeM8WoR4oZJDXwAxL633wxPsQYrkr3Bsq6j5wtUpD54JkxDXkSGeg6k2d1nDwk2TWe1knz",
  "key19": "5bSzuEyV3jA9US7YwCj4p1bcA9F5jA1nUUXxPMz8qPVTZnocsbzBrAm99hdzScRCf8zgwvzzyFvqpKQ4XgCzTeDd",
  "key20": "5YbhFmFxsLzpuwwWVCaRR8GqJBpqVfEsJGCW4P4HdugRPDLfR2wmyAmdkFc7PmZ75RYiVT9R5FwcPzWuuGQdNrcn",
  "key21": "5aRVMNeWRPa92gQvZEb7KwYFZhkAHJbsSnJg1ezke8BzjiJm7dSvdUUQofHc9HyQCMvLTZeqPLs1sfX8m2coaTDp",
  "key22": "Q2SwvFAFtx2mozbp6et23M1bhDXtYwWaniTGt1UjKVLb3H7EJFE3cdwnKuRBjQ1Xnfi4FiPhJL66eok3cFUMwm7",
  "key23": "3JagsucvYeZ5woU8GU2992xUGNZ48WSLVfiKCyein173rQLvU4tWR9uCYQ9t6Wq7jKbztGRVrhzfEfuUKeVNV5XK",
  "key24": "CD1nSL9SzoAT6Z8tRBpmWvXd27UBtAcUZhXMpWq9BWfbJnqwjrG5n778qh3ihzg2My41UnBXgz6fqEwwPU7td3M",
  "key25": "5tVuL9rV7nQdthXW4jTgAoRR4D6qZ3BoxEvS2pW6f4jM9XxY61APuDEFAFpCAAxqH1gx2nM8UpzrqZ442Z1HnLMn",
  "key26": "2vAF96fFC1YKXK85WTtRN5mcha9fFEe7owQAjJMUVLBwSsLm35quwS9pETpsp8wQbXeFophCNQuutLdnNKaLd6ZH",
  "key27": "KgtDYtK9vtsRr1qPqaDzSGgP5n5tALyqR2B9hBV6qMqZXAc7yMg9PDvckxWXvUmbVcgedHM8azbxo9Br7yDkKLy",
  "key28": "259NTBBtujPZe3NDoQgKPGuZaz9PmR6Ejawm5JU4d3NVkoP1VKrYywr8YJrMRpfr9NRTtJtZFchajrHbGqCtm1UK",
  "key29": "47BxveXe4223b8GjKdjzizebBqqVLHLtjmqHriwpbWfjGQ6C23dXmbAqdF4qoY61z8MekAoWceJPsHxn2f89ScN6",
  "key30": "5vtmBdj7qR2W8nHX5xWtv4JosXbU3gSSUFCHVu2UdA99ESiaFfpYDLGjkrDP6qhtyMJWHZY5yMxtdhDULhMmzsjx",
  "key31": "2im2Q2bnMov7BR63EG6kHz3TiT1jHTj2EXiiiEUtxj6kofCWi2vgETZGY7ABRYcGxtViMCFeqWMYwUdvAZasB9k9",
  "key32": "2Z1AkKXjWM1wfu5K5uc6pvASSo91UTzUxytYHGP9gAEqp8TxqFKq1WTKq8RH1NzD6ow4NTMxEUsB3bewzq9ngKtP",
  "key33": "3AMY7KnKMCdx9NDUWNDh28JsNcLDP2FFLByJidQDJzH6dePGBasb33kuQq3n93rnC6t3x8mnG9AS3f5smSSHR46u",
  "key34": "2Tz572fEzEmdExcVCs6uH7bLaXwZfU6JDwnpsoLsAigyfVXRvHcDK3zBPN58B3jRmdXk8GQpX8bRwkaqCj26rM5c",
  "key35": "4xcVD7gdnM6FgDBMUnv3SpxC53Uu15RYZG9uziJFiaknDhzvrCcw5cMBhQ6XWV9iMroqLmfkAxam53csCyP5zKY8",
  "key36": "2kEzSdxAmvzU4HGSAkQ9nkDc9gy2uiGYQGQtQshsETm8wCnh5UXacG3pihsntHTPFrFLQp4H3PQfPSnvYi2zFEnt",
  "key37": "FkbqZU9oRUJSNnQeJfJHLDa1Px9wNF4npKffDD25nPC2BQWKMT6SPbEEg6kSAKSYt1SqxSuSWow7xMtFYdNz7hQ",
  "key38": "5wr4hMjZiZ58p5U7wDGUg39XvawGNtK2rf5vtkC26vm54BikZW3zb3bTxUxbbsxVwMgMzsdZqSbTRSS8FEBnuFmH",
  "key39": "5cJZQiM8HFDC8Diq9pwjAcf6mRbPBTu8irsj3F1AvaBZrLaVqmMqN3QLsVfzJyB6LmeftULWrhg343YSep34f3TT",
  "key40": "boG7uL1PxSQ1t2haXiCAEt3rPbGXA4THmMZG7SKGGCb2udMFgtzyiThatqsgxSFhPn58fcGwiTQVHMK7Ep4r3uH"
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
