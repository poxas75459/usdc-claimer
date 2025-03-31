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
    "32uXTHQNwCpKGNxgWHuLwEp9k58u3yZo5ypn3iMgRPQMwYH88a8py5TrpAMRaaCVGibryGQUbgqR98wp6YZZLaRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xFahpJ8W5awXutULTX8tjGVqzdqZwLbvCqg8of2xMN91QfeAWJRtKi83Xk8qu8ezKhVuv953UXTnUV8hBZnUcB9",
  "key1": "4GQTKMBvZcNxq8siLyErvB1VZfFYV2HkQ61jxpPK9GJqVvdXvAkxhDf33N4D9nKyfmAnF7Xj2RJpvqDahxQZULCY",
  "key2": "nFLqQVRkrB6AxwkW2fHkMbAGj3SWv95ase7ye6vrdqeuP531wUyCp36pZNzDmdU1Ajfqe22CJsHC9JLMMBqXrmk",
  "key3": "46SrkRQS3Zw46t5G2pnh3EjLYuUTSugtPKy84bvBEC2A4885JUU4QZYzJGAAJ2TvcY13Q2MKC6bQiQJXeCAYaeDp",
  "key4": "2viufmQ1rLFL5QrWygB89kjQPCDUVo24QLVv3s8jbFUNg9FsfXfpLE8MxFDCJP1hZbQRVQkRFNKZk3Fu48WdE1Pk",
  "key5": "2Wyo3JqBHT5sAomWZWzuKTmrVqdhTDku1ikzp8qVhntgK6x5XxGfFsQgPUGRvBg8Fj7pWTh1KFiCCmKvf5o1MrnK",
  "key6": "3xVJNDR69K2J27TJWKCjBkZuAQxbyffc3uatwi8Xfs6SayqQWiec1spDo9qXcE5tHqvyxzCpRYmndUhZCk8hnRDv",
  "key7": "5WNLYJLyGmiexpG9tzHPKJfGgo4YKE7PvJFeHQanJ47zQeykFwjRCnGZ7jcpQHWHFJuACznRP5mWXqyqvHSisbov",
  "key8": "555cgtFXtG9f6UJU4U1EvwV9fY9JTr6MvTRHaSgCfHpa2bXnaNDrYcreZShSuLDE4ijwgExRsbho9KsDqGbM2iT",
  "key9": "2DQ8YXpc1XBTm94CcmuDFJc9sTx1W2cLuY1eNzYkymkvFdmav25W9RKoNozsJbDnbfzCQWK1myVhuBaAGjzcgoBr",
  "key10": "4kRpHoSJRbJoUxYSVr5eh7sdxa9fLCwGKvGcH98hF2o92KMGUYjd3Qo7potMTmEy3A8u5omEFkEPZkpWYxPtXEbS",
  "key11": "3iyopLvcYWpqyQqYAHTqBuUW182ncXDnsjmZDWhEq6GBqREN37p7MnMUt4gqr3xztyuoFD9rPPQ6gRpei5dd19uM",
  "key12": "3VzUgj8C57KE9RvTJaZm61ZS1RUmgQMKLpb3p51h2auGoxuACLk9Vsx4aeGQwEWchG9A8HCY3DwhmbY3U83anwyy",
  "key13": "67DH3xtVNGENa1F4eAgBc7Pdh9TwU63PvQrBMFRSsKwqcAy2PDsGPrFFekMTMncVdW6dqsprg95tjE8sXpUrdHDT",
  "key14": "2Bi4xa2Qc8v6hLubSGCp9Db3mBWF4GLtJpDbRiUb1jKDTYLWPw8zgveMh53CA4uHDU3KDRJZm9wj5f7oDUuuwW6a",
  "key15": "3vEvUFxJZD89GWjcxWAeLSVjbBSQUpbQpmUyGu43HVPB6CoJswSS9dhmYT2BcpX3DqKSCVYMJ7dPRzFMirWzDxV",
  "key16": "mE2sHapKAnJpot5o4BvFoPoJtTqfYXRTfgzAtPi4eSZLVEQrxDm35aZqfCNKrq2iBUXbgJhfGkNFhFbgVE8kxr9",
  "key17": "5Ty6rhF7xbhpkN2mdMRpHW1mPqLUd4rwGZFvCoTdpAtYHo5XD8FSn3jRyERojkWhPuDDoFr4ujZsG1zq9EDNtZRd",
  "key18": "2S97SLNbpCduuR39fQJrSz3X4j32TXLCM3ajdnWKJWhskRNWUFYvXFsUrZk73YkFCd5ZXo8omKqpbahymQvyk9Dk",
  "key19": "5Qh9AYmUQtuqptN2AkfZaMpVAEKbQD4DHPwMnswZLXNw3dr7AEM6aBbHhTUVaEh9JAewaoaoKsV1T6V1aXuRR1v6",
  "key20": "uaWn3kKVcjkS6fFzF9bfsG3envFS9Xgwi5dGnwGxDEDWpHWoEfrnAqZZnaBPD3ZTgFLjcan2abiNiuBZYdyuDG1",
  "key21": "5mGJwz7SZDZXgcdcFJ9aUGUUqwFNdUAnF2o4subDYwWhcLZdTFHWVvBnrScSut9x6iyLvJQZ376i2cYBRWci8JKN",
  "key22": "26avVUu1gvjNDoc3Z3Gt85ff2CnQ4gNi4ezD6yMaHSpTECWa8wUHRCUhgWxtpAdqvqyzzmdSvNP4oEstMcZxtTGp",
  "key23": "4AR2N4j8PmyzhSgbYW3nAi3ZGcDJkgk3EeYNbweZNMNNg4A7HN6ikyWKuZQvAqdnT5DFftP4n828QPZNZndswY4U",
  "key24": "4qdXbBnPkAB9MVXCWRoDe4kEg1aNG61gdzZzQBDiYqEHeHt5mf1hTRwukTxp1qeJqJ1ZuamGeRpxXLvKapuqyc1U",
  "key25": "58brgf9PZECvufwNgF247CwecZjwKYWztQmUoBz6w82hk4A9dUuqvgPRjBGJCLRfmgLoczPF14Uk6S95eXK2YPyw",
  "key26": "4GTRCwCTS7yARi8sZXRNLDjCdFY1RyTFmqtcXwZaLfmtB2xvseb2EgwUZSYUvy7CgxE82JyrUtBYjZ93YzJBoBPh",
  "key27": "5J7Mnk7zAtGtbS8oLU5En7Tn8WBfviBLFRpTf2ruE6mtsZu6wzni7WKMiVmGvBmv4WtkkESYw34mjKfeaTBRiELe",
  "key28": "5m6niDAEkEYzN7f52mQoBqpGRkU5jCixYSKbB3vEafD7n7adSFvcqrPvi2Z1HgR2DnD3Ro2GpPiFcXwDsjCv9wQf"
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
