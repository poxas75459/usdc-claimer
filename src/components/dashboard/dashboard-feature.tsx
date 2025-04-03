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
    "4rQUpJpihqaT9qy4Z1W9dBZt5auhKczwwghmaX7vA3VBQ6vcjCuLfgzmCsrYwyYxsK4re9jBEi7bQNoQhNCbYsYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZEtijDgWUPUEw1x4gH8rGkbLwfqTawKYgUxGs6oQphHwy9YR1RtAi5fWqT54pfc4iZeM5N7XAYBYJodxxWuuvy",
  "key1": "4w9pUHJjZ7XcQtbmzRJUMyKzinMtaXJLq1zfnh8xGJS7dht7k8xCwjdzG7aNgGE65d3uksAU2yU3kVYarp8VwwsC",
  "key2": "hbDyzyskeEdnnKa4J7ymd2eq3fBfCkcbQnzBMsjfvWnZqdhCKo1QTxrK9sHHyDRFJkJEaMd5aDqvNKqtnv1rnYQ",
  "key3": "22sCX5FBJSMqDvsfFHau7pzJzotR7xiLN3KuiCfoGMsfGDaRm4AdgaeFadw5syVS2P3JUAPdiaM2yN2xagGHWj5N",
  "key4": "2nPRtHCe3JCBdy6AzEV6MQcetbBWE2emEnaKCsPpqMLAcR63nkhsfPgjU4c1pPzTkYiWk815cKYybobxowkyzKEd",
  "key5": "3jYGiS46SiG6ZwdCLwPf8yqXnxzg53Zz6ywjrxNonN6WczaoNtpoXgm1ba6phWcFQQsW8WJBnsU6Sn1C5QC7YBLk",
  "key6": "3838SBGWWkjvERir3SQqrrm7vjPbZ53HUGi1WCRHBNT6UTnMcosQiikSgzDAREeZPkHNJWW7m2hJeADdwiUJwb87",
  "key7": "3LrY7YA7mzn3535NHyBMtL7kTu1dK2J1sXXJMxtNQoeaYwvWaKimG1Ws3Xf51q2AeXBEU89ogbB3dFqgiaYZFSVD",
  "key8": "39cdBEDCAB79xGE9ySWY7xXY5Axa6uRHAmKhwqgVXhrgEXeNfN3H12mRU8d7pQQZ7ZTsEEuqSC3r7TyfL1DHnpAg",
  "key9": "3tQNVJVEBC6TiJUcdvePvJA5AjmHqxmh9qejY2QPpgg9T2t6DdprC5ZRzUeJWyvoRNPupKhwpU2A627YpiF84Veu",
  "key10": "57Ya1hhdftgNxULt6BHdvBviJvVsZoNauzuDtyPiHZ7cqpJuLc1zNLAqzP2fncTfNgeq6hf9jNvxrLj4Z2MHfeDn",
  "key11": "2GKaVAGrKfgTiugNi2oLd8ebKmXMFx1rAXR5YNugeV4UHtz2jJLvtZwUho9fCYkTpMR5LBYZcbEiwVgDMZdzVd77",
  "key12": "2QtYspQ2anNtrNYkqK1A9qxDUJFLBQBL8t4vBwNXLvY7aR7xGCnB5rprYrBA9AVoakVjHDDf7sT4mnYneBZoJmoW",
  "key13": "62c1c6FWZ9QWEqEEUbzhHgmwu5n6QZruDyLzWK7xaaLMCwjasw5smTQsxukB9ZKC78CNAWA7dkPxFqf5wnn9uPzu",
  "key14": "34z4S96oL4quFS1xwwefS3TNcANQiYEVs33Kpf9naZCMqrBVaCTtaReahwoMSYpxkf3RzuKYve9GNSeZ6bvTDP8L",
  "key15": "2XNCHAfAZa3aim4zvBvVSgBs3SEgkZP2SL2tuaxXRaps2XtMMAo8wrcbrbBCvrRwHqJN5cCrvKqXThGZzK6wWtRg",
  "key16": "22kY1JG79WLS73gJqgQnGQ1r4y2kW9UJiJBNPCAzGhhpYK1RyBbCQgm6GgMdJ9SXgqPMyeP5gvmdGmJkfHvwMxtG",
  "key17": "5MmH9vHVvxFyrNbjsNyqPSudYd9KpJE9SR7uFK4pih8DJe9CRjGXVw5qgLYpjzf2VLYjR5kiCU1kSDvWaELj2eMy",
  "key18": "2sGcDXjKm6sseDJGtuGGj777wefFRb7LwRVh2usSqm3eCHKJGumXnGDiA9QG3ai7rHX6gE7h1y4eVZSan6UcyqvM",
  "key19": "5JjY8G3ZVv6oUa7cJ65x8s8qzMKqjWjAX8tbiwq5TxSpxQtfihg5rSaXpzyCpXGk1M764sfbxkbnrgyQZp9QAJor",
  "key20": "31Nddr4idUUYWkscTqGL1jxc5jrBk1GAvx3TZYBjW1cfX3VzApZrbjxVwoGW45eMvCWKhQpEPRE6BkE3dSA64Rp9",
  "key21": "4u6VVBvhXV7AckG2aQE66298dY7nSyFwbZFGhYfpYqqa4bNhVP2iqFdjnTmbEK1NRG16uW3RQdD7ys3K44j3Cruy",
  "key22": "2V5fmtx3HiyH8NjkNZHhMjQoqJ8XgCJJiBL7tUqUAUAdZuYbDHmReP31xqQfEBnKjnYXqF2RYUFq6Ra8bp9qMCAg",
  "key23": "9CW2KTKvwf5hXgkstF24iY5NV9b7oFxnhtnUYx46nQFQMaUdRMPqHGSD8R19YTMBqP6E4Ap2dFoW9XcdZNu4Vdj",
  "key24": "3uARoviTReoHd1zr4RNHHfePH1XvZk8zaJbZPLncqvh5Zm3NmL5BetggwHJTBAt9PYxouTgukRwVpZR7onqxjvS",
  "key25": "4tJ7bNjHKBVUZbe3MwzZE7iPeoGGVQ2ag5C6wz3GQarDaggnyeiYybpXSxBqtKEj6SZ58mk82chYaFKE3U8iMD9f",
  "key26": "2GuGadFdox7CVRqzge2h4jjUMx85LP3Pb5CGTfeJzUxGxPWjUFpHhRdpQSkG7BwEeprxfr8Fm57Q87N9KVfAxbNL",
  "key27": "53MvydcZzK9pbb6rZTpNDm6YiWaYHtf7GiWcejte18Hia85ZaMiosFFJg6qD4ZpYgPNhSPhLaBtTApVbznJkGW7w",
  "key28": "2BY1n5qCzveD4uLm595H7uZ55isTUiatTezVwubnPLVmqbaUsst8LvHsS6fqi97H63LvUWRoRXUWU1p3TcS5ESwt",
  "key29": "3zsNYV19EEwUNDwBpnCQ7BjqVasBqxWdMRFjbtSzZgMn52BewE794Rn1ZBkqmJeJht19G2dcJ2HcKAbGNJdw3nK9",
  "key30": "2SDVdsMvjA3Wv2xvAUXLgSRPZ5FfkaJEmEvzb2j6pF3FXeH4B6H34gA9yHJJSWxrxPUvbDWR2QxK3cFfbzYg1KXs",
  "key31": "37YVKf76qCKdyP5zZ8xBkX1LD1YZXZZaLdmmSEPbby8DbWy2q8kKThEd7VkocabAV5JegtNfhbBFMXnfVACZJZPh",
  "key32": "4fGqkNPJQJC2ZjthygtYk1NGuGfjnV71pRwUSoqMJcKJFzk58bZBzLrN85iYngBRKkWxne6BjqRtGRr4tXxX7nYs",
  "key33": "3SuLt5kaRgUZnZsc4AswYu8sfuCZC3dKhBSgAppFpbLtkgRyWrNXC9WHw8iVsrFQer6YaQCPaHAGdLLV3oR7NMf7",
  "key34": "31xUZ2mNgNMFDiCP1LyEdtSGnt4JmqL7j3zfxincVh66D5AYghWEZLinXNSkbbXBQKqJut6aEgkqjVEyTVsa2VVw",
  "key35": "2VYvY9RPYW1QJgoLcoxWFNTAmfdpTPfFpgkqa5qgMhUDZT6W3em7tEiZyBaeDCaChhLwVKBDz7EaLBtyEjdL3dCk",
  "key36": "K1E36WrBY9xaPcXn2iaMhditXU3mX8Nvmfbnfigxet6sCx8yhGw3MEuGcr5FKkeuFNcfFbEpRUfSU2XsNEZuYVp",
  "key37": "4B55a3R7cuRZLzn4bhmk6Zc8xuMxCZ4K3mSpoDpG8UQimXE6kQ3wWBXsbSBFNVtgfhX1tmX5E3yoYXDEte1wqRaR",
  "key38": "2Ystz1ppkNUYuvX1mYXtJCkHTDwZ4FpKtXTXZ1mm2255fFkvXbK7HZ8fXxggnJicUAX1KxjxHGGfkowAz8FmQfjo",
  "key39": "2Y333LDd6fTNQCszFWNNBaWWUwDmk3sSCKZe55eRduMnqUbZhT2bViDzAwPUVEwzfmnFEYdHtq9MSgJJhxdq2CQk",
  "key40": "5FnwdgcpWZ75i2QhSACxq5tkZMEaWV3crcqsdJSeNUkUiP5HZSna8UfHe23sHwr7aPR5Eg5n6ozmsqKGDxRjTJ89",
  "key41": "2FQWCW2cyajrMBpzio5Kdbn81fKH2rsunYmqtr6WHqvuX3Q57DVsjhRA2fgLRZk6SmNrt7Nb7kxGww5Fn9akmTwJ",
  "key42": "4Uq9M8XgTpXwhrXHpJGareqE7pjobk8LvTnZz41cFQbZouowPuzmWxdgsZ5fybvZZ3uGTrQ9BNZqh25JiBCR8dAZ",
  "key43": "3Mueubk6yWLBwyZnCSqDeDJ8b9a6q6JLiYaVY53m3HUAehvemtntuk1AWP8qbCv9YidEz9GJS7qjiZyjgXxMTNqN",
  "key44": "pjwxDZrV6EPvDfVfDuF2KJxLV26CHvRneTZXaYFKDnuMsoJ5WKvmmVs51NJR3xPFWGZ5ZHogzXGv9rGnfH5yN4w"
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
