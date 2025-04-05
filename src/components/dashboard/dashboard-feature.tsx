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
    "3kaFHU9xTRyBGmBHGckVTYVARBdmn8LuQ49fh1y2Fz4A6Kz571XvMPb6h7yBGMxHhLJiN1uSQmh5AmXTMtzKnE1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSViHoHx7jqrgFk5Xd6keZja9eAenN3osBEThnr4tpEGBJzTyGyQW8yX6Kkq638sGNiBkhbpZb5q4SBkY7Pax5n",
  "key1": "45xSYQLfVte8Z8nbzuXj4dTrkQfo5o1KqKec4bfFB9tCY5qnzzgVkxoQYB2NffXpoeZKFX3a6gjVbTqjctk1WxRb",
  "key2": "2XFC2LJdQDofhTt4ckidNzTxs4GM7jZrfv9eJUHrcqTw7DNiRQzhHduSSh57G3ZGDjbPtF22rBZtk8g6cXBaCmmj",
  "key3": "3MrSsJBzgzKLYhtKWdr4PDytUcVpAHZJAgkfVCuoKwK9X6HTWaKhNVt4AFzQNm2m4ydBes49scyAHA1b6Xz8tCkK",
  "key4": "3HUWuMAN8ohRhHeq7ZDgvZdMmrd3uQzfb2vXzFyotH1816Tzt79RbYDWrRiizAbdrfUvvoeKPaUw3Mrim9Moz8qR",
  "key5": "24vtXazu8NEMuqrQkUshuNRmrCdg9VrybQHLby4c8QAcaqoWghiXRUC5R7kWYNapxiUVcVcfjreNxpcvef1dUDCF",
  "key6": "2AsG9vLDATChqKKEsGKHLeLi3xiCH89Q4h6PpTyqZpnFPfgjUhDMYSnPFadsDXetSxhaFf62EndVruryaFXi7Pmf",
  "key7": "5RG3bZxRio6Wx3AyaHFqqwGRKCrep4MjftYhJkX1dQXsmAhsATiHPMDQMkijSae4qeRM7hVoejwbnjpYn7srRBNZ",
  "key8": "24D1z4r7jFPjK5MzWghjbwsX3334aNzSE14ACZZLkWKjnMhZyRqdeAZJCQCrha1AgiWsweBeG3yQtcCqZ21Xpu9z",
  "key9": "bD2LHhyQjoB6kVLjvRMbGaRsV9veGCfwALZ6SaUsGcsDwwkXhnENiDp7uj9qvnEq3NknDZQZVJokr5wU7CuiQxE",
  "key10": "3Uu2HUH9AxSXRWtm6nFJwTPrKCKHgmnehWkubst8iThuWVuic4ALmFP1ggR9mJAxVYCQv1gt11Ty55Z68TNTma8Z",
  "key11": "5g1h85F2T4cMj5CKGqJaLf6BfrktWNiTG5t7xghoYntF58vVdKswerfUVmHX2L7scQe9tMfhxdhg6QvtCqfQhmXe",
  "key12": "26gznYz7wBEs8a2qdC3hjw9ABrp5FPzywkMkdM3UKFBH9fg8E8b11pBHmGv3J3JtdzL8me8Ywp7Lw6Fc9tvhZXYz",
  "key13": "K3x5rirdd5gVDRuLX9rinyADWz2dwQTrUuCH7tJ6GgpM8RnhQWWeEsxX3UkH1ZcixanXp1ieYGj7b6udqBrChmQ",
  "key14": "52AE3pXC8mSkBi8729rvkogbcQNySaiCLQXfdjJVCm379kepikNwkNgn2WYqErKQDoBA9xYZxcJpgpKmM3VKGsEd",
  "key15": "2se89wq8vh7rgbKmN9oBkdSgidWxrNmrf2UX2tYbxvyApPQmyzVWV2AFEMDsj2Dmm1ZL6kKb8d4MbDivE5FdDxST",
  "key16": "2Wvz49ZiZsrDEvph6rUTY5hmuvEG3jUKUV8qSTn7BQiYWJp1Sxa5A3uNJsBohmuYRJpLo6Js873XD4DtDBXbxFrU",
  "key17": "otNym4vjUtYTCN4MsDgwNCqwdb5HCe2CqjEfE1V95RoA2Nhs6wucDkRLpP4rHQQ93nEjcTT7ti8JJPxaq9oh1J1",
  "key18": "4jCTMh8J4nj2wzNosTEkjtST1XoJBJ8RkjiKhy2Q8ngeJNP7kffEZDz2LmxuP6QcdLUBL1oEGL5gDQjWrsFY2sCE",
  "key19": "5bZN6tgwSpNDwwc84FzvPrFXXNZMmPz5a8zWtgQVVH7T6L5C7nWEvqsa8PPwEmAtBmoVxQ3rBQ9VdNKxZM3Q3Y3P",
  "key20": "45ZQVFG1bKk38RguK22jLDntRTAVogSLsc56Fy7kBgPCu4cyX8KVLFir5B6u731BeAAm44CL72PKbv1Bkw9DS8s4",
  "key21": "4A9hReW4Ysxi1LzLexpyJxyzjkBCajEJxW1pf8Ybf9SrWFkv76zyHUhBsRAm74F7pKnB8zhHDannpe6hfxyGWh53",
  "key22": "4AAeD1iuhwmSjoKfGZh3or2kcT5oi8BHUUjvkJXVCXGYkDhhRMwzdAiZKF9WQq78rGriFJsQtKMMDhBQ5XFksXPX",
  "key23": "5zPbSrAZnUwruDzaqKeqtUD5nNmR5vtLVwdkrFjQjrnXoGRHCjJ29CA8J2ZZGSUh5jWFu6w4VQmy5uuKPnGDywTg",
  "key24": "3Bub9mxgZPUXjCASbNhFws8P6UxeodQEh1TzGoZKebemKRTHhE3nwwC1x3ZFTgeM9Z7u5mKYxvh5tyWd7jKA4Ypv",
  "key25": "5QnoJ4EqEeztaG8F1ycnX18ak45eTQvdcNcv7ChEDYYAXZqBQoiVyW1w7ALHKTh6TeUXu2pbXRAhhgbKSAdgKC7G",
  "key26": "3fVz5apjYB76pJBVUbnvkQHQ9WAzZTxLNQzWEAsWw7aju8VQ8TBXec9v7oauwU1qT1kCHFQRyDnRMetPcUosERV",
  "key27": "2WCnUCxRDYbLq4uUawp5cSLCDysnsDDmXbBmrHH6oKUjKz5n8yTdT5UdcEYy7JoSWdrnc4rr1g7SEb2Wugokbe9f",
  "key28": "3mb7MPDzxATVwYe6TB83MGZEDYWfKAn1xFEaF5mTReBXRh6GgqunqK97j6P83e6QNbAe21ufs8UVuk7QmGdNrEhj",
  "key29": "4y1WuJ362SY3bm3j5anZ4H2Vk2SM1AHoozme2tjN9ZbeNsrv9FmHfcUXQbLzLWSTkrUiuTu7u8jHRRfzg4dXe26m",
  "key30": "5J6p6yhdeCMgD8wHMLGd982UM8Ahs2SCKmoKyUxF7Vp3CTJnH5E3LCGU5FwkcvRJtkC4gggHyieQPKifB9JtY7Uu",
  "key31": "4ksWXu69Q982Zgw1ii839rrkwL1NUtUuXyn3HdG12758tR6quUjKDHPa7tvaiifvgjJr48AdyL8mfiXviz9BwD1X",
  "key32": "339bfbLukysoEH8ZdrLEyvah3DEnGWFHpGtQtsWotnzJa8sc7RgXio7RZbtPfKPg7vkTrTgGRFVqDjhV3DSFjZkc",
  "key33": "dUbnA3MVrLHhfjt6tAPegZE5dw3VpU1wffqdgFGXWU2A8sUNc7Jusg79sBEMAABh9RKD4xhWsvcbRLDNqP9b4Ux",
  "key34": "3dr5hN9gGYY57CoEuWhhmn3wwNfLuG8xdbHQYCeGtTU96EB9u4omqdnXpCKrxe6cJyNTMKnyzxnqPkhaCi86cZk5",
  "key35": "5dULYecnjDneb7fkT5HraKbESo8rAyzJkuxqnAfhYh3yjVAFNWLko1G6EmLiJEyvTiMDLGfFLX7H4zPXET86tzcL"
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
