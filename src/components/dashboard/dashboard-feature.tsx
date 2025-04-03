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
    "5K4PzBTtzRNwn1ADkiKKKRGKGfKvbL5X7Y6F33mzsJU7KybK8MmKvMCjKpbCKeC9uDufRxGufdF2VhPH6n2wtekU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDxhu7HsWvP8neJqThtxnB17QFkkQC9t6wpk9MqcyRAhKm38HEg7wmapF9KM6PjsKqdD3F54yjTbAQEPMo4wV5M",
  "key1": "5WAo8YfMuiLMPNz43pMGXUpPc9gtBkdB6C4QyvE1JJckRmWqUFZmmey9HX6SRPiQj9bedcR78ERA7j3k2ACJma7B",
  "key2": "3xsxa3dKtztXthGJ8BB6TKNNiWHmqL27hfGq93rFsv1nEj9PQ5fEVC2c72n78XSjMdVfp2pdrVyGx4H4tJjAsiKM",
  "key3": "5Faob5kWUgtggWFhczztAw9bBEsHmHejmskrWsb9u85oyQLqZdTWUqfq2bAY78wf5AyDSW5CwbiaKEjjd3NW1Tqm",
  "key4": "5yECA2xdJVd5gKGKGwuYkDBeQYrk3onXG7LMFpNcDCkv9GiS96pjP5bei1Ks8uSPBc8X9GaHgPDqjDs46vxccS9D",
  "key5": "R3mnSBX2SzxKdHzwQv6d655BCRnqueboh75fGoMK2AGcznwy3eGFW8CZxxTLqfZuRqYy2f9SWfnJA9wy6kNXpwt",
  "key6": "2QeheP8szGsqAyXNThR9uPHA2Q1HcXtuaxEf7g5nuKSkF2L8oBsjeTxtsmAcDgpYR2DvuVzNTSE238D7Uegtfd7a",
  "key7": "5516y7vsoVQuRt3SS2zedQuUUGYQYZ73iTgvEtJkCeH9zdKd7sCTahS1V6iyjBkPQiRxSpvvBQnaiNERf9WGKsFH",
  "key8": "4U3ZyuPwiLpPPF24HuA73BWFDGXqPw6d9w7tZrbV51DnUKa7vQBYb9KJC7nrZZx8MjMMbFthuUZtmdraqXR5BvGL",
  "key9": "45zWQBxTw3xDjhWSUCZzJ78kGyiHWYVZYHYXw2hQzPmwXdtwXxDHoyvc2csQJ1d9inLh71sxNauwKjkbdLZwhnXK",
  "key10": "4KpxQi57v2vmXVE8Hz4GcpjNt6pnnF7naYXw6cP5UKzDLnWtFC1zSQbXGyXAPyeaXYrLxi4nWUzQ1tH75fAPZQhu",
  "key11": "4TbbC3wUuAFK6yWDFBbRwoX9bm8PDLdLTU7Yqw9quTurDXXFVVP79pxdgY5JNJno4i7XXzJuzgQ7WcN96FpSJgBs",
  "key12": "5oL5QQteBQdLHWBN9bUoQFQuhLP86H9KM8TEPm6JhNNRZ9mqfTdMTc2uPoobTqVZ8TayQxPMM82xHcX9s4aoaq9B",
  "key13": "p1WySJ3vX5o47QfcmaBfk6g8D3VzW2fgS3x5EC6dqERUAvHHPgmvp2oy6dnLmrcTqFBUoM6cX5tdaJJDkfv2pCf",
  "key14": "6325EtHmj4WnEWWH8BTn6SUTbDABvf9mCpzeAPH4DAa4kvBBEXmJihtRCfyhgQd4eqmMdY3JM59J6utg1QjzG5pR",
  "key15": "3hLhQTpbfvPWueF73gRErcNcqQaRsK53HDayzEXMNWUqzmtKey3fqCAzSN8twEBy2FTrQ62yqhgkGjuCMaJ8WuFo",
  "key16": "3L9si37aSbpcRiBDBijWXF1ABeDZCTCkX1kDFhg8P1ZCYm6DDnsErGZoEViYR5oarWQbhmMQESJT92RdJWb4FMdQ",
  "key17": "5qE7vBjMDiTbxhvWx6uUPBWFwyKXkksvouDgfELFSVs1MFVGdYR1kyZAMMkUnQbMnXkCWEpntQcUs7FW32ajdacY",
  "key18": "37EgiqEMPXJauGhyrRh3AHSrichyXjV9r8wJHPLMZgadACkDtdKXKjLqN9bfhcpUsoDMwZKyy3SxKzZSN5N1F5zt",
  "key19": "asjPsH2MmZGuLP2iE2TDJdZftQ63SXZJESfg98aXkUR7sDpHyd5FSawhaDsXwH3kcp7g3ooXM8ZU7kerVHdSidN",
  "key20": "4sDdHBsdaVCvNSpGX5hw2QPVufZR2NmE9byd4NYen645AbeBWRMMfRpd3cSiQTEphk5duu5sSK3L4S3wZr9x9Gi1",
  "key21": "4hXL5JgAFiQUWEfgKiztMBTrmRiBNMxtQBPVVdTGZQTvLPkwsx31H6NhSKMawtS8McEGsSF6RF6aVhCBUqv7r7Ro",
  "key22": "5XTpamq59Bqa4VPGpew1uKAP8QE3UjRDUmyqaPtGqHmgHueErES4i3hKtEj7eEsY5YJULC3Ht2pqWWxe8GJrQx6P",
  "key23": "2EeyCRiSed5QL3iP8vytpSFKYYdP7oUrk9KQjyHbmYJwqvLDUb6vo2zP3Lpma7cwFHZcQMbX8YBz9e525XuwWQU5",
  "key24": "3qMfVLYjGw8f6CVSqwAn6NmxfPM2LULyEpk1VxKnssnWxacWftXTLVPBRfeKbnfS5SEeT4duLz1aZaCYBAz32hWy",
  "key25": "2gbBciti7x6p944aGcL6RAeuReDoEbMjQmL8QMr9HNdDB7YMz5Uw9HKViDhohDZ4DTHxxX25xfDrTQzUDuXo3sph",
  "key26": "5B6H3LNosSV46EYXLhh9MvPrvC41xHQNRnAkXfvdH1dU99eTtXJDvexrM5cgjzZpbMScNvtFN8j3SEGh7JdQLAUP",
  "key27": "3o8Auj5vMwSFEkUT1J5RQHcMg2RQCRzpXkq4MqUywGFTtiPcrvnnHUH4zzeWqmyq8qS111Frrka2aUkERqwFinpo",
  "key28": "4nbgp7GdhJpyxbGkob7NaivBNN76rCsaxdzotd8pp13d8yDcrHS8iNit2CN3DRgZQ6NodRW4wDyKmNDshJgmHZ2D",
  "key29": "2XSRRrTU3i4vh4unLPrSv9rJADwWHMPkyCWpnS1Ybramy7NexqGYzbftmEp9HvTD73884Zdo14vq2MQAQYYJ39QH",
  "key30": "2uXhX1gp7eAai8JF31UWnEqCR5QqC1iBPFxAQJUXkF4EDhCw3oNbfVERDAxjScm4qQ4GdvjVBjjaGFrgUdn5mjFC",
  "key31": "5tYiVP67aiAXqwZfopbssDSrtcELLc4zMvs2x45LiEnt3XsGcPa7QutUq1ZABc3yLGo5tpnJDuHRs6D4BQ2NKDnK",
  "key32": "3dxhLRTrih27o87NTdzriTjvGz5cw1q6djuQPBW7jtZ29yYXheLmtG1gbLgJ7E9CjagzSiWoUPN8hifgjUZqgQky",
  "key33": "5S33cwaULCMGhJ31cjxQsBvnWu9NLTCucbewsHVgsReUSd2GxevMCLJJSsjEnSmTgHFHxRzb7RVQDBybXCi21Mik",
  "key34": "4jj8JR37hukJTanSYrJZrwHk4q23RZFv4Zdo7dSVZtnZhrZPspszwUv5TJRF6EmDWF16ykszFowqHXAvAin8KkHA"
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
