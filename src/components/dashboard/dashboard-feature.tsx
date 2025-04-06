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
    "519ektbcmQFMTH6WBfKpFioMSQv666skSHh3iXhtpGxYRXiLMcrDPqMTQAV47QXzAzHYka7wgj2zTAYxPHBYxupG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXtc6vUy6aW7JFmZL13QLwKUaB1umuuPfFvtE4RR7GzTb2bG5hAAyXgWy9WangvQUXHnakLn2J5DeuAALFcywSR",
  "key1": "524KDykczd8XeKhbv8wHRoRguZpndccdED3cAcu5cVtLTSuVn4grHfS8RkjDNgt8BbNGbj35Se1e3ifx47Vr4vCc",
  "key2": "5JFcSSSAFguG25UGJUcJFojYt9t4Nq9evsjQ7D8n62Hi3u8RgEjmHWGeuUFeqrvP3CAPWvuPw5wbYaUUcBmmwWSN",
  "key3": "64YfoDhXYSvhTUGygchLasbsKBBJZjUQsU57S7RA8jRpD32GXmCLZN3eBSnNfj5GBztWY8YCBYT4gVUT8kPVKrVV",
  "key4": "46dFiSn2EWxxXgKPJKwJzAQEGHLjBhhf99WN6K1BkpYuDinsZuDDWDTfAbYuKateRDNL1LbhVvhnxSpEdp7pmWtJ",
  "key5": "554BVA2u9f3g4Z5nnje58k93ydiUxdLgxHvPyMWgDpWfmQ2BbbEpqjWMGjZFJg3qxJ23VDMrpxV5T1WTwXLab4Hx",
  "key6": "5bTbjUM1Muo8u2iWGjVHA25i1mJw291J3w7GcxmyXGmsRUX5JLVHxgbtmdLCFA6kQVtptgADN6mafJB9rFPDuSee",
  "key7": "25gk2oaRRy3JK5mfCesUCf9QMGd1QihF1BN2MLiCC3tJEjHy55xRt8fXkrhsLigpWyWZQjU82PRFmTmJ9JbGHFXX",
  "key8": "2NtBKWa6WUVGGSeroC6jy6JPzmFvNaA7PMSBBk78xteHxEgACy87sM1cpyz1iB3h5FME2KEpF36fCzm4Lx3rnCtY",
  "key9": "38ciTUjma9qEzzMGKBGbmvnZTgWUqzk6i9KvwY7Dqiod9ox2SzAUPSSRDQ5kD3TGE4wXjGe1tts1RLpje2ejzmvA",
  "key10": "C9pMgqpjtEgnx6exn5mK8bpnqDbbF2ajoaTCHocCB45Czoe3D21ghcnTgkrJwpBUUrrLjuNWAsbgXj6rYXqh8gA",
  "key11": "44Mc5bk3NCHQ7RFLwj31e9ELJvkAFkEACNTproJWXFsbowHz3tfZYmpcZJkVCkeLLMYjKB4X3votXSQS9zDGkp9k",
  "key12": "FkDPYNpeMqB4z4G8fy8VS6bGDpAXQGbFCrrH6DEMa9rx4Nm1kn41DkvELJCcqVqLcdyJmwDBMXM5eSrdwNMWULW",
  "key13": "5v5irEKz7JddYi4ciP4ERPs55p8DyhX1PnP2R3BhF3NYE7iSQXWojrnXpsP9ByMY6LjAqudAVBNfZczQqr4Mawka",
  "key14": "2A5WuHth5iAmZY8thiDhQE8hJQtnZrvrU9ihoL5dedhLUn57b6K9zqFKgiqRhRbDjUcdkDSEA9BM5qjW3KRoYBW1",
  "key15": "3UPsPYhu33JGcH1HBWhwi2k3mA8P1HKEDRNNP5H7i8mfdj9nGzVqZXXZtrzxDnWAsC5iYKnN9ZS7KZCMNdsH1VxY",
  "key16": "3AuTFWdokRX2xESvTjfYb4djxxWm6UU2FMnbYQCAkyZSayTDJUSWM6t2Td3WdeiBL314j79DRJF9HzzkP3trrSBD",
  "key17": "44CeP4EjiZZNfnr6iXrnuUkE8p9XnbRDEiXjUhbodvL18NnWF6uCUjDDNNSqJt9GG6k3rCtNh5kh3Q2WZG4q8dS5",
  "key18": "2VpiuaCqrM1xWJ4Z1pJNRuznspXopi5ERXyaTDxx4QiVFHX2t9Bfm6YtrfqHtQPHdp3onMjwKGzHgazZnugkeaTg",
  "key19": "5Lp53KsEPUWQt3nsTNmSetSm8YYg2icP6LADGVFLZLYznKdnpsvLUH3mtWi8ujA7doz53P9oK42L5KEsRtuNrYPM",
  "key20": "wpLzZZSoFdMA5qk78fiLFhfHBw5RfTxtsCWqqxVvxgpnFYPsBxC42gCJzzpRWHNGgk2vkZgwWSiEwSxdv2P5fKY",
  "key21": "1tzK36MEU3vrq5yhjuUStLhV2DqJM8KtCdbcX8fAGocnqn5F7HqvqLdTK2wCCiyWYJFbfXA2ukCnSmq1vvG5HR8",
  "key22": "4mpYvE3Z38PjVJVNunXZAm4ga9e8GhWkcHkZi4SKMohnrwkEowwB5fJgP3vHqQfb7YF2FmbznZRwHtajYfN1bxzk",
  "key23": "3z1VMYsk1oCkpy5K8Yd5TxeiYiT7M4m7FVkdrg2h4xVvQGMn5P4fYpk7V9P5zU1ECe5ao6ktrJ9SJ4eZYYxKP7Gq",
  "key24": "5p7nf4Mzqbnm8p4JgPrTNEsGVzydi7MFS79U4gdULu4GCr6DyiPibSEZwBSLt3inEtM42NaQmFjWiFZLBSJiohRU",
  "key25": "4QMCY8HTka4sz14oMXvNNJzfmb8M5h8gWJjzGimci5PbjPZMtUVCUALRg6oTQ31WxWuyfC53UjjSrgqnAx9v7ymk",
  "key26": "5CcsfHqrJPg2c5vLtz4BsVoF5FLn6Wm83WS7fZPixiKKRL57UtraMPQB4puzVbzK1adTfChhYw9GtFx7DtHg5Cyp",
  "key27": "2brLGUdNG1i7BGhoGQh6FprvM5yWGPQk3X76CKRGjBootJvSzN85AHzG8sWGKBKJUH7wyLXfUHywaCzYTpgn6tPJ",
  "key28": "5LzJqH76KJhNT2RXAWs3go7yBoRp2Q61yhNYnPUcszYSi6wo1hyMzUyZh4Kw9v3sBqznC8R5tAJ9p9C39QXv5poL",
  "key29": "3DNdjyKefk9cBr7LwrsWVZRou3V2EYpnhvskPkmMtkRGRkh5aBPoekpYT7VUsTFiRFj2fiPXn51hN5bP8zGNb2fx",
  "key30": "zWZ4EN5d7iyVLku7ZCD2JBA8Vw6s8daXQttXygVS8CBDzNEvUNs1zAHGAApCaHjfyPUXgByhnSefWiTq196ttYe",
  "key31": "4KceBWHwJa43UT5GKJqYUCoKmmvq83gtvSJE2tpwFba1HRFW6NkWNJVT6MUfRNjVL4MBe48V6GTKr6DPVrgWxVHq",
  "key32": "2zHiFM7YrRM1soCVVns798GLhtBU6sqLSpAv4H5nHjKLjRtT7xQA5D5ifBoxxcfrmuS9AojUzGCn56RPmF9MRDHR",
  "key33": "nXTC95MyFRzhknuCCDg16st9Dczzi6JMJaj8MWR1acvo57EFdYp6xDjM8RkWpHLjhzh6HFqXHM2seiqq3ke5pho"
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
