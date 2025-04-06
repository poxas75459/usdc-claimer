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
    "648uTTtDYPvuNEJysmzhknkeofBsQ1nmVNUGLmoHtmi4UM7bR1xDmhDmerFCSjPcN8mt84z4TQjzazLWgGCDZcbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEibqfMtKa7jRgymPUJ5yH26fZsE8AK1dsCZfULz7t561RtZXE8QqER9YfTDWpvieX75T5xrx6aLEkU2dc8pQ1F",
  "key1": "22bDs639cFztk5HywyLCnrV1GaLs4rxwdoK6Pn8FSD3sFLToScNf1He6W3twZG3RnSQt86TSrS1mM2WqXVcJMNbk",
  "key2": "2exKyaGrEPd6Eng3QDGoNLCJ6QkQiCPu2UDFyDNf2Prmg8skPBfEhCdpxr1dqj1q44BLkNDeSoLJjMYQU83E7YVE",
  "key3": "3qXQkb9KNnRVnTv6GwfauYfjmoqsvFC8tcc26MpimTgk3KpQ7JN1RNGFenpf5Q6z8E422sD1PX77YTNj7n2y7W9f",
  "key4": "2LVRwMMiUriCyiDvVs9Q1jwvTzAiD5B3uZ4nnxPyQkEXWzKvjX4aDnWkV616maETU54PypsngiLxFH6MdUDLjbW8",
  "key5": "3TZEwwW5BXGPaVJiiA3QHTFGqusmyxzhQZnk1qvomS3w9SGif3JWZArwwCQe9YCey8CLsDD2kWecTL87jvEQeH2J",
  "key6": "2hVVBxmaXDp55RcB6jjD9EUDMmo9ZuWde2FDsS1FeRd8G1YeEyWLuRNGYB8XSFxnkE8TgPNHa2npvHBsFFsDvYeS",
  "key7": "4AQCnJMhR4sw9yXKHmWaJy7wsTx2Rx6V2GrCJTH28utRLUW95u68HEHVXEE7XbP93omvAwy242y6mX9fgdTdJH74",
  "key8": "4EF74sxm95Zk1TjazQdV7e2vgLzLk1rtR45S6cDPg9BRKNbdBCCswfcgkwRHN2bGEvejmGXLEAX17KkRxBbi2bPd",
  "key9": "5EkUR3srApcBa6o6VArFmBncKUq3oBmDhu5U93VNAZZjPsrDfYrHQFma4BCHFGKfYQJvyHZRF4dRUPvNpm4orLvd",
  "key10": "2XhV9DiBA3eYm9aCVMN3L2YtrKTmwzonab97iCiy4jbGXdPJxVrgBo4vCBuwMnU6CDuYU3EZo2XXsiCyU9yMbjP8",
  "key11": "2AzGXZvZFpgyp2qUUD9QersCNcepVch5e41LJN9KrJjKktADMyjQJBGgM6osiJKsfWMXrfdsJwvEuBNYrjHx9nHm",
  "key12": "3nCZe16FKkdk4wogerVxptNNrakTLHoxLoZ7g2A7C4VpfJLnHQUJ1WCfqnEktvPwGruLzCDxAwdydtV3S96vXFfu",
  "key13": "5iWvkdXPoGCzfHNaTixr2vnLmmq3CmtivMMQ7D43q4t4BiJY6e3rKQgL7dkucVkqAJ9BfRssLDCmNyb23xfAWRms",
  "key14": "34ksGTZwfWtw5U7BRFD3zRf9YD3QUB9wv8P7FXiiVABaKR3WC9Uo7U3k9dR3K3MWLzhRdUK3yYAdXzesDLuevrqH",
  "key15": "5sovVtMoPtspgosaHTgureRkBHHBe7KLxxQ6fV7qDHxjLXvdtRG9Cs3KvLYcdr4mGx132F9z3mFWBEn9JJtNWruN",
  "key16": "3g27jmwmi6pMsuqZ6qzDi3i2Tv2ayW6aqGEBgtDYqx4GZPxwSWH1NTpnJVKaxDZX7FC5cxzoGmXZg9bRVgkG4X21",
  "key17": "5eNYW1kUGWUZ4B3CTGi3EaxCHX1VFo8wYM3eRz2G2cbPWxuuiDZC2tua7MHu6r3wWd9k2281yqDnhPkXubQGH69v",
  "key18": "3JY98sQrJmyg2csCYYxAX5bLET2XnYr5f1MfuaUPfcswutjGggn4PWGFn8azjB5hbC6XwFe9aAH1uiDWoS3hRPx1",
  "key19": "483PyTQtj3j6PhWD1oYHCD9h3CSNBf3nmCbwVhC7ZQBv9Rby5bcyuLFK7zzgQBnVKbZxDPdCwuLxydjywyHdFb7j",
  "key20": "4TVd3srQ13k7jZs1W26Qp27gvwWETX9NAQeaZQ2MLYYQahLApM7T9Tn1h46F5dQw3pV4cjUaWLp3WnxfbpmCg6ai",
  "key21": "3iziTi126h4QnseiLAWypu7kbaj8kfQ1173bV7vfC2HQRE9CVB1TwwMKJf1gk2qiPnDjtN1pzwaxbweXU2xnPR7h",
  "key22": "3EFNkcGB9XHgDEYUiFraRRNim8WmUVNZV7Zi2z64tr9KrKKkVFYTMBZUdmstLS8QKP6XfZSisZWeG56wcSRWHbo8",
  "key23": "4iDSPipF9iPEV1JmoJabLr2XkcPxE3qdrE96NR1oyqVcA3Wy2NnCy3RtvZp3gyXSJhiKYdEWPrM2zwXTUh56Qn7n",
  "key24": "2FXSo26BXGUjpfB1WgAjoRapodoE8XYxJsoGgtsVyXUTHTUXrpfHhYHeXohTpQvWriDJusn2xp3466Ujn1jZggXt",
  "key25": "TFxEZabgJ586fwsuAQd2S8mWNeL9toCTRv7HjHWGQzyNYbw7Ju6We7Z9gwkPR9enb3EjRfU4MfkpAUwr3Bjn84e",
  "key26": "3BA2r6wfJDjJPgnqW5CMfZHBaxWuCcpcr96omc3QNfgFAFfCBcD41p1937G6tKbGqC64prXoTDA7GEdG5exdKsC1",
  "key27": "31GpEYSJnXFgRcE3GbaZDE2nAEhnwkgHqVLkiAanFSRW8EFCUmApNsc8WzHR98uFtf1Rs14686vxkZAPiStRQYDi",
  "key28": "5LuhyDW3YJ4xEswLBfDPZ4Ex1qFPQoTsHpBz6XvTLLANXyzEnpHd6opk2m1qAJoFAtYZeKnvyibhVRrhCYagBUFu",
  "key29": "4Kw7zEdKLSxP87NpcGLfFVxvLvcGy75A5c5gsPvUNVPEQ8khG1k8HFNNs5PF723pRPXvhQsNcpqFSgtXn8n7xwT3",
  "key30": "57KMxtkBDpqpfUAcwAyfbmNVZmDMxG8Gc9otmqLp2f8zpqp7KuP2EfrAaDqBSv4y74BD6QS4gVDdczHCCT4StraT",
  "key31": "2mhrQRL9HgHjZEQDskuLXSk7ZH7ncmr7bNiCtH2p4fV1Q2sY9pWpimtRTSz7P56ypgRddVrDYsAdsCJVUj66UpoK",
  "key32": "4LCo2HpywyW7WFmc7qBA2WvxXXmDQ2vAPVynrNPFwYt9rKoCVKifVLX4HLVbEUHBytUDT7wqKyGR1ETdFN3E56Xj",
  "key33": "4TmMzCmtfsLKaBgFJXgNJsefioRaEcWzH6sKJRgaJ7tbZUSujW7T6Qq1e5KcNMomx2TgekWHaGB2KnU4tg6R3v5h",
  "key34": "kVak3ray1q79FygBuESQufhKDZxyTFKVQigCfRExRhzF1RHDB5rRjK3e4KTv3g55nSnH5Ju2RFAecN3ZK9tVozK",
  "key35": "5tSj8Q58q5xZ8jFoRLbv85c3E6kRHnMTqKQk5pe96aJ3t7taXD5UarbtBopr5J7j8Pb8cMJjkwNwYfNACZpNK8JZ",
  "key36": "3YsSr4SYTot2b3hspyP72fi34wYUiV9uJRvFF2hEP35JJJ7UBsekuQeXVqvudKnaNHFb8XqwYfQnG7g2xKeZZWqf",
  "key37": "5PwmUS5Egjz9NQD2jekdQYkYbc4P9rvq6K4npeBcJM67eG7ZVFoQfGewWKT1dspgacMSTzrTpDqmPbtRYULrZKK",
  "key38": "5uhLgV2Mp7t3wZhzdBVH9SJ9qxFgaQsTwgi5RMj2S3SnJvNGtxLwV6YigPJWst6uYfDqSsh7H2Kgs8aiLzgAPkhk",
  "key39": "2a4aAo2ZX2G9Bz4Fi4BTTGY4n5nrUM1rHBnh8Bs6Cqk3VNmkcsmMyoDveCRAqpYRvq8msojZQZ32ZyC8YBpJcs14",
  "key40": "pdxRD5pEDJV73h7UBKZWW3hhzSuK8pTjn2U2eorQW6nwF9LkLyA3XjZ878AMF6PUaZSsTSRqNrsZcDSe55Q3TRv",
  "key41": "XUbweNTcmS5MAHiNofAA4R9NcbibqVUtzsgfpTyKSwmFeUB7VppJtdrhcVUduPvBUUVEhGgoBVDwqjFZhk1UsjY"
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
