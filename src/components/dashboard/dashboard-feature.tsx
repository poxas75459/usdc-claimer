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
    "5w2BnKRi2jaEcbtxb9idVgFzrfjJqiguBYHvRhxPzxmtbq11pjTLBMnoJjPzU32MCUw482wxhPHxSSwFwGHiMdBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Un4z4BhEfMhnqv73cEm4QRXmXQGrb5JpqrtaGH65D9UquNm9DzZCZnuDENHpzF1xZt6XMRbabfZYPZffwWVSUXs",
  "key1": "2ZUb7qLBX2FVkaxWer4mZpimboVhNa1ifUTH3Co7ksR6Gb9vRmxRxWjNeTXbiRhTq7GCFDBa2Za3HoneR1Utu8wF",
  "key2": "4WcZTFrwBB2jsKGRbuxzTExDuqvSyUQ5RHuvEaWx1bZTcC4nrRv88v4jHoZKGWYSCpDPS3wNPxkwpyYP4TkG9SVf",
  "key3": "2cK4a4jToYQhaUXeKMn3q8wG9kway8gmEXMYx2Yju5kX5qg77GDzxT6d4b8E8MZZ3mWFaQQDYRUU9KtLhihakvNe",
  "key4": "5TJJvZewKg6jLFciZzWMo8GgHkaGBGBJL4QuQ12HxGqTrp25Q5jL6eN1mqY6kmz1w7L8aaK1VGWA3jYyViHF6KEo",
  "key5": "CZSVmqnWBK7v9vq4QAGmsWuUuJ8pr5JF6FoYvcssvLZYEf5WgLaGARnpokxRVJKNAjCmfTKWcPkSNRSZhmQBQMe",
  "key6": "26oZwsP9XXxDotJmngyWVaCYi2KN3oRf8cVbYcXWXUy7ukFd6411hgdPiBftQkWUPG95pH5znEUqdFoKVsQeZ8dt",
  "key7": "45x3J4Kgyfb45zSakryxsbbfV9kjMS7Wg2MQKgNmkrXwmrYhasTrHqBmMHdXP1e1aM1oSWqKoXcEauhVmPCbHBqe",
  "key8": "4Tz93FVCy7E6N8MvoxQyrv1BmKs7xvqHbvYMTPdrDagRrDuZq39KYPddjfg1hdq9toV55yiSJKwK6PEZjwfyKYYR",
  "key9": "5tfAPZM557yqCDFXnBQgK7xLLLrAd2pSM9dbaPYG7h4LVuxVfpCAMpZ2fdcnsSb4QaYFA1fTkNvXyxVAKFsbLNZ9",
  "key10": "2HytJgMBuycUddfbb7uQ6Sy7pHmfa61QaejRBVdjQLSfB3XfBqUFrHq3Y8wobhmXK7DJdPr8GGKwyuWHgFo55SYD",
  "key11": "jWuTbiUkjJPkjYPCQoPwV8XAxibwjpwcT31Ryc8Q5iubp5VtEHJ59sFvcZWEF7RSBK2GjpTZ3LzmgLcTCCXetRG",
  "key12": "4TTg9b2pviQYpEPz96Mdvg11rf437DxSPigf4N1ZUh2Nj8jMmkzVZaBxka74rzAKzUb8CsYct6jM2eeG3tEtyD65",
  "key13": "2peRN5hQUGJJ5sFXnAeVA3GznJdKmktAZgVBBLQUaYBMeRLyVyprxkZsG5fDbTgHECeZcctLjaSE86vtaxNiJZ6G",
  "key14": "59ggvBTs5aVRKUKzX893pHvG8us56aFjA3nWoTeXU8g1TKBDJGbR1pZCSKnoiLCHUPcuy1VuyFePaTZMf61ebNxt",
  "key15": "4LMv9azPMZYapPDCFhbocYP3GBZP3xjbyHtjbGy5FR2st2e99gJEogNpZ2v4Li17yQSD1bR86EbhV2u2UQkuv5k7",
  "key16": "43nWjG8DguhfU5XUEiMQnvpEkPHZSWvsZpogZ56sYbk3UdtUpAkuNYEqoSDp4PUu9YR2FLohNPECBnVD6fbezXCt",
  "key17": "4hSjXTB466Ukm98rqnQPtZGxVfdsKCPpkMcY8iJnfLjrz2f9QEzYHWT28Kn5oUsFctJQs7sHvcw565YjcQPJR5TJ",
  "key18": "38h5h1p7DmZwZdV7L5i35SeMFN9wdhHZQnRMN9Vu7jiSPU6ngHqCAVQwh3ZBmyJB2uDTA9Zr74t7HX8494orxyA5",
  "key19": "5y7jHfY7pBcSoigJoqhcwMfHhWe61wUv6aCdw4QJYe8BbiTxizG9D5yc5FHab3P9qVFWETpZqdZGji1Fs9MnxRpN",
  "key20": "5nfHXX8MSnshWmfcemfGj2vR2HEA8FLCwAEDHbiS1tiaTb4wKydLam9FHFFxsus845qziUhduWshyXMYwDUqxBFH",
  "key21": "47BafoECzNsH4voS92Hgr4yzEs86qcYKkGYiokuAnUkY52ALAVQuRWK8d8jDie5j2wuGsTH49doJ859RbmZuD24L",
  "key22": "2jgL28tdS7CJcG2PM3cXueieF1A2au3uzLcxY4NcDJSN4rabepoDFynW6PZ4xR5S94wEWaEm3hubJWKqLj1aPdSA",
  "key23": "4ffukN8nERfi6ybNcPHVwiF1A4B3UDNFvdaKTPNovCL3sgSgh1M8QzbPSakJ9JZNFicrj7LioqiWVYUfGqjMb4ND",
  "key24": "qFbYE9DLSaSLW89UERkDF6p3r2uUVBZrXCJhAyzF85dn3vxZpiSi5Pq5YVW5JWGKz7CR5FZpN8wU1rico926ts1",
  "key25": "5HpQQ9y2AkK8J2fYgqELNjnbHaLJYVJomjP2RiR3n5DyVPAW2CtbJgkVkdZb4JY6CbqW19AzA9PKSW7wtPQhwn3L",
  "key26": "3yvZAM3XamapjTZsPMPfdAqWg6DA5MTHx3ASGCmHU1Xd1GbQKcww8fEcs5gg87H54bz3rP8PyYn8NqfRLw3ctghL",
  "key27": "4Q7GeNy2T5qxZD1NZ8HxbuuEMMtAs3GVxg2QuFHPbZ5wow3v1bZ4gK8EHdtZdRHCQPcHm38kFcsU5BjUnQMcmW5c",
  "key28": "5QimaMeh33YCuN7jDhbEUu5LzrWzvPrufL7JRCHE7vFtGNFKcqzPz36D5Dmi5DNh8K6pxmaxvzcf7GJJYKvQ8zz",
  "key29": "2zvF5MQaxggAYHtJQZ4uQoiGUz7GVno8m6tcBCFHGBsVzo9MAArpxa5RaJbamX3hoV4feSdSf8GaAVixtvjXEaxu",
  "key30": "5TQGhXUPS1EQhuKCtVDUh2VZ2ZKLodQUxFwEPZHAGZ14yTqGUFcpAFrPh3kBBBqgBLqkhQDAze7bgWYMqNX8s8zN",
  "key31": "5Mgz39VQ1h6JMqVpZP3qBe22CWgR8uH466bWY4qNeWxrxU6kYvLLpE5jvgjETAKHsWKSqBz4vRxGwZQukmfAwrun",
  "key32": "3cjN9pSXpY9Hhooan8XWy9HpTMxi9DikQ6gdPsT6A5NEAsKBg6YpLnziggMKj3htS8J6hrJGcjjxVbTWeGq7wbQr",
  "key33": "9tPtRDwgzcjbwfdwGTfGeT1L6qaMUqefNuyz2vo3thXqa8KCukLr2dz86Cig5kbbRpPGgtTFE9jByuBdKvbAsft",
  "key34": "thTkUNtfWqidLksBx5PdkJkqNVD4qF1k59VnhxYKeYtoyXSRvHoQUkZTacUqwnGhkvNwgutPjpogs8aqx3jRLs3",
  "key35": "VnFBEfWQnv6cRxCNmuCSchZd3XgKKmXpd8uhU2UBPJ28Qvcvmsvcach3p65XeoKou9vPU3jxXrtE1DzoqAQgJaA",
  "key36": "5CoTNQw3bu7Q9i9vkChsgaD2LYBpuDeksvMridY2DTte3znud2nBSez3t9H6w1qEWawKdvzc4H1QG5KCjjkr3gu",
  "key37": "3fJBSqAaT2dMCCcyeHxSXsBcDnfFaARQV43BzdNGkQegNiFGNUV2KxNjPjypfjoiJ8ESvY1ivyQTCSk3e9tnPib",
  "key38": "xxSk5Pr8Jk2DJWUQKSBAR7uDghX7QmkTutHa6Ntda7GsGRwuwcJJ7zgcfo738rJzFaBp4dsEicmgHkV1UsQfQkj",
  "key39": "563DbAwLrZDG7RLbF5YxjRRQCwqWVqdzBL2cAAyxzRjKDTiNfULWnBw9zRTG1eBzcQtqzcoH89JSaafiQRZRFD5F",
  "key40": "2BXSXvMAmC3mDZC7b2AQfoqBUNwBQUfaNGHfwRQRdmXaY3iVoXK4qoognUSFWJGj6FL48FUL9J9GfzcjM3bWhFmm",
  "key41": "3RoHHtkHEj26HQ15XcvbXcRbPMWe3B6v3Tb2ijWE3bhz3ze5kLXZ9VdbNcCUa2XtRBGFKobmnSdw87fUyfnhs8Yb",
  "key42": "5S6KHqL4Sg5sDUfSe8P2yh5RjSPHygWBE2mPciYjpv2yNLfx2BNfhroKtzU5zKHaggSvzQDxodGn8BtZbs4ZyTpG",
  "key43": "XiWPfhxL4yCPsiFsuPSufyQea3r3WdkbUpnu9YQwNMwAEjXzLyzNhDvqmP6FfTM3H9fnAMGK6gaFbgjRFumz2ZD",
  "key44": "y7uK8qufkKBaVZd3KRMWmR5zzTTZWkATu3zxwB6DDW7pupgVqfkvPx5ic7fC1Df8NKC79uCxsQsPHGZQyFfFT7X",
  "key45": "3npffw9fLqCbdd4h46iHeX6pfR9d3kp2guXk6ddBmXpJCenHYEX1f5b5NTuA7NhD55JTLVvrHApBYu62yKcFWnAC",
  "key46": "4KUMqwM5AQqyZo3uQgi34s4QqQAcmqdpQvnaPSFtUuqQ6wZTnc2S4VUrderQE9FGYg7qDhTZ1Cn7iYi96DfBTHpW"
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
