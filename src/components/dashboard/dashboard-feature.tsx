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
    "anGg3DjSgM6GNwJCixD35REyZHTvh3s9Ut43JXpWenQKcnVPgB8nvX4z7ZMiW8gggBe3JtbditZy2RPoiT1rymK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PdR5ucjwkPeKMHBSq3Y6PS3qSjkWchFnhc7mRq5XQsB7P7aTzKRpTQGpWcekSFV6ZNRe3pb27RN7SGfeRoohuXN",
  "key1": "NXzcmHhiTNkRHfiNxxeQBotrjjeFEZb5fnT8Sa77Xo8uXtuFw9nM3mKYxyQuH1gc5Hs9MAeqA98ZNPmERB1C64h",
  "key2": "z7Umzd71Q66ActjUouPTUQmXG5jsZfL7yEVMRK7AnY2ZjiiudkjbkzfgaUavsj2JUihiKwRDG4kkPLswZg8EHhT",
  "key3": "4aZEKp4kTHtQXPujFYw1vfiidB1upY2VJGNCcGkMS6rBnn2CBSQpYvZHWjnwtBSzonf34LiQtENFCqFzNkYuCAyt",
  "key4": "4aUPXKZBffrGmYdFtA2A7JT9or4Z5e1Zcmt5nQBVHEoEdyxGXg9oVZjWgqSDqm6RAHvxXC8gZiMpw1Z3Fqn1corf",
  "key5": "28cCbfBGcWwcQaSyWu39AHLx4nXM9XPaTogwMTGi7Cn6TJnv39R1t5uAuZ57Ys45oyndrJmmtEQAYqiuB1dCuB7B",
  "key6": "4DenbG25qDFfrStDt28dd1BXr31da7K9exnTXoDcMBXHsJevfo1EP7f5LS1x5rm2xop9ABFgDJdvvmQXHJnQKQb",
  "key7": "5ykQrpKZJK2pjhHBXzMAjHWsskWP3J29gnWQToiSffcJdF8nGtcha8y2xKs9KPT4GidX74se4Upsr9QwQZKxjUzd",
  "key8": "2dLQJ6VXMo47d5ypE8NxrB4NmdqM3DXncMghxLG2EiEfxAFX7thx7RcBa4ZvighDqse4WXmLHZgLg1mK1QY5Lght",
  "key9": "5cMzCNT8DgGYTKq4hCL57g8egVwBtPATonNpFehb9Uryo19QqeAndrX4KdxjjXBCh8W7U4pM4H1Y4bVyTZMuBKZj",
  "key10": "hDihtzpJ9SJQHC6odMFuxXZLtVKMKHbanaNe9abGERaQrY8JT6XdBXj4xu6eL5kCY9jcz1EXvdPeKyUz772hQQs",
  "key11": "3nGCKC8dGbKS3t9ugDADEPUbKptQVLGYc9aFXSyzTT4UDri1m9WhHGTmihfwCrzP5DSJQLoEakavUmbgkW4hZLRr",
  "key12": "JJsaitMd64zPXeAqwJmqd3vbGbQAD55erZeXXAQpDyJR5dizNRhz2e5AeXqhRHNfFU4g6FVpyXcLU8jLz5zz22n",
  "key13": "3g6cDB49xTU3tAEELHpbKUX62yS1y964ZVPC8SLCQ89ktkbXPTpnhJf3JT74dxjn9gpMMBiirjgqFkB6DAHNb7Cn",
  "key14": "3PmWUhidBsSTRiD4LxrABX52Pc8BXuFzNfY1fWNT7KaVChgs5nVrRgsgL9WognxCywyuVYv9ftEdeNqjstuzQHN3",
  "key15": "4HtXRF85d7iQef191zHrCJDHfS8JJny5AiyhFbxouKMKrBQc3VKBS2EzijEqBpjA8RLDHnMW2eKywwe2LdEn3BAB",
  "key16": "5hBRzjeBvJfhiZHLvgE2fy46Ameb7MDHscqxczDAwXf18g1s4EGCJF4kbAHq2AvezGbaU35TqfZXdVbxBPQ9RUTd",
  "key17": "5zD2Qjo6xhhb5YRfoE7qYZ9gWU58i3BiZuWvDLtJv4TFV5qNJd1vRtWZ8YsTyGbAYEsW1YucqtBX8NR7CUPVgZ5k",
  "key18": "BD3tWZEZpuwfYnJx3WJbPfUb5jLHfAUKkRkmmgL59M251VZoswa8RfMQPAwFhKyXBHrrMzbWCho6U5kPxRmLK1V",
  "key19": "3WWtsMZhSZTdahhyfQvvU6XFFoec6KPnucxH2Fkc8xQycrFz7v8ZyLpoMPnxKXBg5t6oGtEm8WnZDPedvzngZcWL",
  "key20": "3wiBs2qqch8mztM84YbvdeQHFeUgpoZwL8k4mKkwfhMbdENaen7VWrX63FQTaowDYJPtTqU3c4tSkvsNZnfDuqfQ",
  "key21": "281o9ttkfSUcmXdQNwV7pwMn2FupSa6gYYQLyxLW3DLeGod2qqHcyE9tBs3S1T8SshnQBp3wCop65rDZgmTKR82k",
  "key22": "2pT5mjPyzNuJvvXBG3oZVhnXELtU1TpuhKWB3eE3SEx46EQLRHJ2orkteURaDKAa2NVsy63tZm7zU3oqcYu7W9Fx",
  "key23": "gatnf54jyyEEmAsk3sxYJQ1GCdPStcadN5HArk9BdAj5gBeTGwJLMjoUBjGctp11j7juXqK48KjQi31ErMVXnxK",
  "key24": "Zm2PXXb6VZrjGXSSvatHABEQNfmvHixT82NX67mDKZY9B3ZW59jDw5RMeSeP5vV6MhiuQ6ATHoJu1DfxuvdoGC1",
  "key25": "ABCKxLbmVKjiu7QZowHdym2CjiFahXmDFofDsJYyso5kaxF7owMXGFYDqibcKdKxsKgSNeKMTzLMpCdhqxEw47b",
  "key26": "2EdPA6yohEym4QdTKJVeKNyBFdSDH6uDKzDUC9SvGjTsnWfYzE7AC8abwwDJnDjXBgqF2quwgPMjMhb8ih657WjZ",
  "key27": "2WdJmgGiHZDmv7Wz2t542QvoTL7kXxvmmxzP3YPuFnjE4XX8ShtULvgBHPLN8ZnNGwgQ7HBmWZPNr4YjsbQBtYNr",
  "key28": "5EuGjBvqtEt63Q4GB9fBjjZgvenQSNgrKptVkv9JCSx9V4fUknSACPVvbCWYAyyT5AG4EGvphij7C7WxmWAGdaSP",
  "key29": "2V5cQ38sgNQfKMjGMCHwQ5tEbbHNNmCpayRR7XCpEEBwPtAfR5otEJJXZfmoy2sv7oSYWVW7PQfFna3TDiLLRJh7",
  "key30": "2qKbGs9XqK9jPx2zy5nN5mjpMkJHJ3zJduKmuutuFQNstANTsXBuZGJkCqNHJKxAt8ZzVeZJyWLxXbWnzLhcvWg6",
  "key31": "4CwJSgvRB2ce6865VEEAYzgb6pvG7FNvqD6xcCcvR3JdKBzBPSgpf7Y4bsDgRQ1aXgfF8t5CecgHkVj6Z7ycS5EU",
  "key32": "4J66BLN2YZJYTRqF9WvbZcddjzvEvUPVphFBk6avRcrxbBPb1awjge5cgRigMg41SijCwHAeukMMFvzfZwxkPFWh",
  "key33": "2oD87ig6xumXPxEoq7y5ecZbNJzJkszQpPBitWoAaBkzcDazn83MjjrfPhR49y3LVvwARCyJRao6Db6dkHNci46a",
  "key34": "61ETqtPAQUzXhUSsCwdq6fjDB4bG419ka9uqj3udr34maUFpPLd9FihBR2nEtAmra2nLfsoqMyaRq3R7KzzGwqyW",
  "key35": "2dUFkZCbCFFz5EnfYLLeGgTTj7NFQhDpUbecEGu5rAmunNdqP1ZF6EfddAj5qvQ2B4oUdWWXnd9DYbaGeFyWFRpE",
  "key36": "2YCDA3gCRDt4zPbJAfTVXRpErvvd9T1KgCndmR4HayWymdY22a8xmriys9qnYb1SxH3jHqpZWUzcjrgCdZ4YXVD7",
  "key37": "42KvT2LeGn4ncBgnTUb8aB8WCPsGXJvdSeca63L6oE9tZPrUcnvAf6pNog97stS3xqPNoW5aKxGWxzHx7weZoJSt",
  "key38": "4t6VWvLqJNGybZTPwc9friT5W8CDKv9cE5EbTVizh83xdFBQWnPnWaQ5CU1AGXKXgQSqsjMamysPmR2cpov1qECJ",
  "key39": "2Q4FBHz6UtZ2QHn3tEbPeMj9Y7FjTkPfcZpo2dou9kaavvoBq6jmSBhptEwqDw98FyLG7bpdagcCzEyksUPW5SkM",
  "key40": "3ZPcDzh6Rz5t1Ph5yDJC7g7iMu5dXGf11vkMbuwiGaP5jExqWMGp1t4QmCnHRmhFaWsrkF26UGwMQxcTHMPTHePX",
  "key41": "2HmQsfrfQ7UGUSCcacim2yiY7RFp2BSgUgv9Mxb8fV3hxDyxMScSG166FrVMyK4D6ntpJcuBZmB2vMgqLXSTua28"
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
