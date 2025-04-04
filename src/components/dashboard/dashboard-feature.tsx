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
    "mykrMu2jQsv6Ajtd6gxgRTyKWs7k6ahHhmV3ML4zQvWBqVqTi7NhpkRscNm9RoEyjDFwqPG7v9Sg1CLkUhbAmzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D6xaNn5s8S6Eh47R9A2kK7NNBeDenHVnyAG5ZbkRBJeeSu5xLHTyiVnBJYdV5KaaRv8KWcLpHn9yXr3iUCZLyDJ",
  "key1": "5mh71n1XAv7YnmedyowJ1RZP9FkHFbU1zbLudXC8pWJNeuPw2EZu9UaT6RD6Fj8ccSkLktivPpsDrpkdz493BikU",
  "key2": "5knhWiRh5WkW4EPvRDS9xez5hYnW6U2xsksiDdxaw86JQDokhYudXfzLTiN2wV6kVg7TxKLyQMbcbp4b33J8FYa2",
  "key3": "4hLuCYkWCmNzeySVxBfdHvJGSy8GCs9BdUmSZuP323f55jzvj7vfL6mv6EBn1qtcWfMwRXRiwV7NBP1yK5UoQJf8",
  "key4": "2xC1D79EZYnrHrVLMgBjFQoEFTWBZbjXmd7PoaXs44K2XR2FyC4KL6qb9KoybzkfzubM6WMNWvLRujUN7fyNcB3M",
  "key5": "9f7wQQffMnVwtTmyoqWMtHwWGR6kKm1dNg6bsK4VHnvKpgs3ndvoQk5kUW3e5z4YhYTWQkXXvzScmGvgefQavRj",
  "key6": "ot2oyqzcKD63rwbxMGGNMMtY76hzP3hGC7HxmVnkY2PS4y23ixqMnAJdYBhP13uQFYNf7A7ktZ96nyAWQfUaEZk",
  "key7": "5RaJpEwteAWBU258mf7n6sAKr71oXFenmN1tv1DokJD2eToBQKuXnJ9LmzbZGBz6osH3QLwRQqpJsntdbY2zdT2y",
  "key8": "5ny3WNJmCsw56syEZpyNGG6koPRx8QTKHMa2bPJX185EhY6EWH6gVPo2QUnLxDrFcKhjddEqJ8eHcjufLPdcFMej",
  "key9": "4SbB17eTiSiNhhW7hdvQFhLFdLa2Yndn3SkyywguyaF8gb9p44bVKZVdBgEkzLzcg8UPzFCqF7Z1zTw9LwcnetMi",
  "key10": "5aXrfQq1tiHpL8auccb5ETXv9uXHMLArrq6eqrVnsinQ71cL7PEPfAqo8YquRi5Deb9chqwz7CzrGZdv1kaSSwmR",
  "key11": "3zuP37jxe6aWyMvsz3y1Qfmf9PneayAy7yjFRmu9zRxY1FGu4mUqEsLdBfYDwpNKvvjU2xM86tzz517hJErtRngi",
  "key12": "3x7bxm9GgVd5qtZ6Wqw82Fd7fY5XfsaFkimWvL2sLaYu6dypM9tM6WfrMiSACP1HrqYeVEji62hJ5LECYoejfDZh",
  "key13": "2jAT37evzuvxkGMQRez6YMqoygCaxZvTB6XJ9YSMtnR1HohkQV139f25TDbQuXftev4GqfJwi8B44Co7gqw17tjQ",
  "key14": "2XDEisgEfwQ2aJMUwo3hpZmVUWizmW9WfjT7YC4tX9zTi8hbexju9PteEE4mxmt81umBWcvpPbfjkXoSTJyujoZV",
  "key15": "4v5yTteMum2xutGdgQGyMHUzZ8FS3HwZ2sDwxdTVYPBzj2e5obbssynKRsxdGKVvvFdH3QR89DWXYYNEQPKL7tGb",
  "key16": "3xusxXTJJeJHp4TGEnc4KbynGBUnLi2TCD1JsXQGM1SpXsaFbAvPZN5rfAmiJdSPcMc6aJ5dkQEPSeDCHSYc34Mx",
  "key17": "3Tam8972fvb3CJDRHgt1tyERBUtvdfHMoSkE34VU93Goi12xHrjuYmfWYEJmcGJ9Yc7ysZnPhfHTFK1jHYbPLWDH",
  "key18": "49vbqAAJYznLmmXEwActDUj1q4u7GTm7ArZXagkpGgQAe9h7Epxx1n25Xrsc5jjRE4ULoiHRshdpZofqDxYR1k2g",
  "key19": "5vPXyevvtUppGjpCSKYZn6wwmPxqMoaGVV1LuegxdmF4JxWQTrvEJbcrLW7x4twq1e9vMeh55MQ1CWT5UKP16b8w",
  "key20": "WTPWqYcfAQpwd8PpF4uAhxqy7oG6JsYUV4CyurMSiqt8VawbQphus6FrWhWyvTFWsWTCHpGrWr2kiahVgJPtR1p",
  "key21": "5u3M2Zdmv1xvk6rZhrcB6x1kYsmus76fQvFSSdtJDNZdHLseKpZbbFUvLxNNx5rbi3RBBdjW6apBVUgcZbWSRdUh",
  "key22": "2KaYAWXe5QoPxnB7CkBUzz4afBtTpGntumLuBNRsX4abvN9iA4EphB4nxCbVAkjKsJN8nr4xbvwShiCcMvJbLRoV",
  "key23": "4TNQ1hM9eHitH4npR5QKcJU5hSMPw5nHNcZdMuHa1NMY4VRjzA3WY6P5NsakU6xpTvusPsQGf6YRu4A3YhoXDxb9",
  "key24": "xYLjPhcTERssjr8vzm4wwbpdGkpmHkMCLwTdxuNfXNzBNjgRSLdw5CkwrndCHqgx1SwiyGC585f7wMQ9v9SYu52",
  "key25": "2Ka93Rw9G6a6egWMqi9zLNEpvJmDPUuTTt9JkDVAFZaz1SqhfqJJb3cKswzgc3v68baYkGZmFmC1TFMnJDt3B2z",
  "key26": "5YxUGPMciUTViTWGXBtMvfmh3JcKFV9GTvEzwgxa2ewo89ibjawTAXhBC3LnfCoezKKvJ9TCgj8JSbM67SfSFw4f",
  "key27": "567dVH6W5vbvdutNtdcNqGWwodJ6bLE1FTeiGYJUEkxUv6h2LuX4SuUYyaYuMcC2xcNR8qRcnhYuz5umkatmYzb2",
  "key28": "4M9hy7zyj3B7Y5215mQQpauE2abLgWerQLnRGmMpCUVnsBgQyUKpvvjqexRfi7kwza1HLr7QhoyMf9wK1W1Du9ma",
  "key29": "BHSAAYc1STw1Z9y9qkn48z5a6X7xKMZZVsGX1CRqQNqixQ35nUMzq9EfDNUo37HZG7dTArUExyiQYyjcw5Rw7zr",
  "key30": "5CS88SHV5AJEGd5gLPR3mB6VnrXVW4XGko15ggRMmJkMwnSwEQq9o9ZEaoKka3RAf1b15waGx6eRRm8qQbmRu39C",
  "key31": "5pURecwKxeT7J6giyuxY2Wab8Hih9mSAUYYhjJHPJhBGqPtibeRrexJTfidakgVXCGeXPGtB5i9K1nv41pGpD4Sr",
  "key32": "9r5JRqj5VRYv6prTUB7CEBrntiJv8iDCzP7trw4D1co5KSEjPnT358YqsWkGez7Ccjv9ggHzdwscX1BYi1T84Wb",
  "key33": "4saFjy45BcFs21WmxpqS8twQGbWBRrFbQUkq5MEZckPyZu6SFnZSTGr9PM4f4sYXqrqbA7kzbBkVQiLpwedEMybk",
  "key34": "2AHxjttq6uUVuDTjCoSvQAxvF9o3hyUiP4LCqjQEZJrtjqfavi16M7WEUizpvUrYYfboXUhvPeZkdtwhZJDATXr1",
  "key35": "618M54iHXSanrSf5VfpLtS7KwE8eQAAUuyMt7HCMog7omutg8AXy8eJBHwcJURYfYrNFe9A8FRtRSHKyDqtUjvDj",
  "key36": "2vjpjFpanLKYC4mZT6x7Y2cUiSoqB9fnWv6HkAG9JZCsdm9Nfc9DAmVG4V6SUuUJPVGQzkk8Fq9MqTcNHHVqWKBp",
  "key37": "2pHib7QUryDmmEH2y7k81nocfTxGFq4jrJPwKpnx4xYnuuPLFDo1sYGNttFw3MwmGdDYdmqhcVvoHNPQvfmTriru",
  "key38": "4bKXLQC9MYSA1E3BCwZNVfgk7TSEd3eRACyaaw6ffNeRYcwuZphLd3bcb1FDcy6rHa96hXrG5tx7p3xZrTicCjqw",
  "key39": "5PLjmrqDtSMjQkCnaQXwVforz1a3UcGapzKwZqjjaJ1r9RqUJqKZ9rjqrppg5jCbSRszh2yooinixszhFAb7CgA6",
  "key40": "2dW32mshwAM2AQ8Pr4BGcVZAGpGXqwaNuqv3xMbfDhB52ED7C6PTfSVpvCPbefWQzzKh8N8GTAqqnyYDbTUdSg4E"
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
