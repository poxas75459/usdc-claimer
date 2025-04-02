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
    "3hr74z4AFcSqz4MeXQV3KKxv7FCqxqgmu9qwGpBXrT9Rue5PE64ccnPTqFyBSr3dchPeLTMCXm5Btf1R9pMJNznD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rqh3uAhA6T2Jx4YhxNEXThsPyRuTYc1MN5RRiSUGUcgX5MVheFUwFu1uxt2BpA2biBrjSKAMRM9RoUK3RVUtMvf",
  "key1": "4rFAUA6WZgXTRx994aFHgbf45jjFUYJ6JHvZkXc8bo1LPKH69sFDTHFu4tqzHYdLLdZ9N8Zu7nTqEbFb5UeuEn1x",
  "key2": "3x6nNgEVjGTxJVhnmiTTsAZ6JEE54emFqEHRAQW3spiycTXBUPjLMWjw3dzMKz8UoGvBYt6CL6ocBk77qazZrmUk",
  "key3": "4fCppdTkyNZGX7Roeb6ACDpHBuSTLjPbSSfS61bRzpgHyNp4gj8MPa1b4FV41LhA4tdysc7AmPGud2bA8hmBjF96",
  "key4": "Uf6ahkhwQMTeJkpiz47f5GfhUBYkRsvGEim2YUPuit6vxSLdjEr8zb6Y9YbQByN3EZGVE5nrCKAhW4Ac3HK5o81",
  "key5": "3VU1vxGjvYWEm4KUpJrci2uqNEqUnLZikbj1X1jxWKqLU2X3UYRTr4bCYRuwJ2AwfrAMDzns2Vh1MBtaZDsQ5e6",
  "key6": "4dzFtUuYy5NvE7yzsVgwPhvUT3VvcZr1fBc8PyuECRDCBxbatUxHBbh37zAaqp8b55hQjfkwLRno7TM9iZy6ajWM",
  "key7": "43Adv5pmng9feXiBtmVJ3BXozgLStsCKjDrXS2JsuxSKXDqsYuQoqzNiw7sA5WcFR5QP9nYjDewrRVCAKBxYDe1v",
  "key8": "2n5yYtvviSH5yUrvMbbKEJXj66psybEUdu5j6dViqCfGRssK7kfrFugCennjqqan1zp5rDr1sdrLggd7Z7HNviPk",
  "key9": "5YBBQh4cx4U1KMwVZRfiMvWgvCm4gDQkhVHEHfDXpx9E9X9RZ9JN3DWtqJm8JmrMa9hox4GE1AUTFoELvwirBKi4",
  "key10": "5B3qPxSL5XCgW9W2vJLrTdeZoBXXAXwaUnNjZf22cXrWg6Ux61DNJxzxDHyGXzMDLC17K1zRvotEVdWMoQGWC7vJ",
  "key11": "2cVZgAVXzw2T1wkD3L9EBs93GhQiGZstdbad5Y98JnYHEaH8rW5mvpqXAKJt2kL4u61hzoWgStEkkf3kUMfmMR74",
  "key12": "VNv1sprDMHXZSbkrWVoAQ3t3nTbSN7waaJjQeNX8iT3ZnJk4V9kWew1rTBG4cmP6ge5tiWUDCoVxLVkJrrPzRwB",
  "key13": "4QacfANp9kyE2rhjCezky1tUZ7JtmJ48H5v6PBZxWsSdRv5VV1qqE2jzEqsRUTSShEHesPviJxDAexJyBU64hacA",
  "key14": "353du9ukqTc4WQfg66wKQmm2nkeoQ3JkDN42kWrvtLxw1Xg1WWX4crDiXFn3QNmkt6x5xgREc8jbgksihsaNq1fi",
  "key15": "43C43oQY1AfCzMsnbnZXQZ3prKg9D1TzLbzr1P8FbsC2wsKZFjaMNZBjwQsj4mHhBdhBawifXn1WSHUiZo1cYQ93",
  "key16": "4MZbxwWLKRQqPVMhDEFhTh2XrMFvSExAiPotNQb7C5T9ikJXKr9U4ekv1dBtM34fBxWgFM8cngP8JKrjFCQawemY",
  "key17": "2uhQYBezSzXRnkXZ8G3T2MFKcbT1UiZ3qeoKHYY1V7YMYA16WA6YhHESfHqPW5WKG81h5mkxSw2ViT9AwVQT1CaX",
  "key18": "3EeFuDjfWGEkTz4KY3cwdBhVXhx8YtEHHArSjgBdvWgtRE8DgFfmoY2ajbHYxJ8zVi3hGy2rVVMyDeBAyZZjRLvp",
  "key19": "2quvGiVudA6ZB7k2Lp3X2Ax3qnntvVzfZGJ36W4WPCxUt69wWrXCvzhccGfqTbaYcpN7abN2KM9MscZ1ERTmCgLC",
  "key20": "4fR8DhZuYFmT4o8EDD42PzrQcofBrU1wHjGREUFZRdE742WNMexmJwcXRHpgQZGnKp88m2zzDSteBVRywMxMxyTN",
  "key21": "2JPqAt4DZxjaD8dN3PUfgDJ3oDThgDuRcWByRsKy3Y5BmjHQeTpLt3oFwFWVp9BL4HydbTtVmfxZpYbsPrbUDb9E",
  "key22": "2ZyAe6R9Gz2NvsTyHGfXXCYwruDh7zViGHU62BpyVUKoRGD3tMrAEMPszLUS5H6BuSJMnoHMi7SZGw8cwqx4mzwX",
  "key23": "5YKqtcdopRvkz46y7Y811j4GHeipH1aNQKGdn1R8RRCKcpiDvfRagxeTk8Z6HtG9egyCzQqKhxQsiTgYunHXptqs",
  "key24": "5JP1X4TPrDjJsag6dAT1WTmRZ1qMYkiG9VWnQLyJ3K2ShzDLU1KVNHzmpG874zFEifHo9BWoQbFxrNZr2LGUoo32",
  "key25": "3og55X66rS7cScBnYLuMHBqovbqvaeNrca9vzegRndZhTkfazcsD4V86yuRxk4VdaxVcYP1C6GtPq1pDc6c1HE83",
  "key26": "2RNrWzWa7cs18ce3QQuUXQgiYUeVYB6a9qB6kArBBQRYGpa4XECoBsyddbjVqXbAxFvS4WK2tQLWhk3yYT2BJHc9",
  "key27": "FYxVN6zmjk7rig3mDS6Y1JZPGxgpWetDsQfii5Ea57mpH31PzJ2wUk3BCxFq5S67sf3xHHR69hXAAFsMotjQx2U",
  "key28": "4ZsaVb5HyZzkcp2eiqdfaQLEvxkK6PA4hFd2Bh2c8Ji48MmshgeDLrZauCjLxkzauJLYLgvJQi9XFpBVg21A7TVx",
  "key29": "btULZtvYZE2gaFN4Ee4Rowep7BZk1FqLZe98mXBYMgfCrCvsyxZPxrTn7CtZDWRE6Q6xG8EyqWDwHWBjegyMwCc",
  "key30": "3BNdCZKvTey4QF3FP6JBAdfqH2knUxkCcxpTRa533TZ3rPmqED5TbKeR1FcG3ACJvn1Miy5681vfhYJaKVtDxrFG",
  "key31": "5FgwgacyuinpW4TLKpxdjNqpsAkS1YywAiTFgQiKHPzAh5L4RrSv5et6pjsrcQNmSaSEvhdcHAuZWGWTWTjmhTyf",
  "key32": "57nYStReWyapJWA8SaPHhFwTYzLP3i3nKABJsSU7YhSpF6qJfZ7XdpT6q6UwQApabvpXtkdoW3sPxGmMf1r4uF36",
  "key33": "4dV3SVW1T5zPGym7gcLDKuVdzFnhuMHVnKLrsCuMWRJqatwjd284VBeRBc4RTEjqR39oZYVsD7bC5L4AJZQ6jXZK",
  "key34": "61EyskMu2yQsSsRH5QDf1Xd9eLZxDCKUdw49dtBwpakTpz9DicSAvvJaWZSksF6Y5qEmEMvmWbDHNnhio9TM91fM",
  "key35": "54S8uMuqShX2RFPEHuSNm1kpBdbV7EC8t9Aqx1LjepZ1NsMbzet9hM77TvW6tMqpnBNhqwSYtTWB7DRgz3aabbRS",
  "key36": "2mAwtihHtDkHtWgcz5X1FzugPpBcuqikSmKgoZb4ocRB5ypy43Ym3MKMciXFPcniADpJoZicWhn1Kn5fTqUUZo5A",
  "key37": "3XiXAfYg83BCSYNNoZdRxrJTMY1Rok1uJWL9C6J61XjVsYop9wtmpGbedTjrJoZjvkMrx8Wf8oGvdGD3swzjiPSY",
  "key38": "zvMbt1EiGRJhEDfr5WcHHCm49h56EmeCa6B4B79AQ25UuYmh8d1cLQbtr44yDAzRLiH5JExB29f3R8vfED4pX2D",
  "key39": "4QGRSSjF337nHg7AyrkPePdNMqt6ZhFh82zYREpQCVgQ49PtumCHHXKLhHzjXRAGYAASTn9erVb8hDoiCYdAbsNW",
  "key40": "4fd9F4FCNfhZ7hWZvS14q9v5L19fQm23362aQhTVFu9tYsrChWrwrXNy6FATKUUTDvmMvKsiT3WmgA3gMfmSDNLP",
  "key41": "4hB8PEaAwDYCJxhr6NxzBtmgcdg2GMaiPVbU3TfrxYPPu8DeHP8c6dbKt3CfZt1zCrD6GAmH3zVsUQu3iFDrSiKg",
  "key42": "3Bo4veAzk1kqQLTEA23A7T5qk6RMKT7kwJoEzFbrzytnn4UPoDvS5FYq2g4XGvb7BWCtAeKqCv4FEdqvnK5vX3hZ",
  "key43": "3u9oeEn6wjssSh17JAcTJa74ejoNhyfvp8Vxknf4wyHCbMkEXYQ724JaQ48itEzBKTqjXwU9YtbFUVcgo7faD3pQ",
  "key44": "4nKDRRpMfTkG7CthMsHWFRAFseeZBf2WPPSHWVwyp9DNaHg6trPXon5LDTSe6ZZ2mzSgziYSBp8XNUAqiDqr6Lfk",
  "key45": "3WR4sjLzyuS9fHyUjeZEPzwqCjktnH7gmX81c5BQ37fevVTQmQn5aBGLA8pcBPeTAPmGhKfG5X7ryZXPhk5JtYS"
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
