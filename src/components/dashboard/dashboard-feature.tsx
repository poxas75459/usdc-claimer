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
    "4hEx8haq3ygUTfDDjvNR3eJwsVKjt7uh8txcJbkV3SGwcRTiyTXaCXrnzmCd4mMZFXmDZXGcDnX8haTUtLsPjRZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J5EbsUC8YUNMvtm9b8G4mtsmoi13TH2syioCCAqBRCQzfHP7Y3YF3FxLjK2UyNLDaHvBnxkvCnXtZP7nLGRoiyC",
  "key1": "39gdj93oZoY1aviuaAP92joQHW81uQKZCKcTrAC6XWjrZjt88u7DMmhfNv9kj7exy15fXEBXTFYkhYQiia3iD2pV",
  "key2": "NkQizqRRrv31QGoLeXrGm5wsZt1WgYKqx5w5W8zYfu3CgSdTJPiMs7NLpdgq7eVvMbRQnrMe2PaD7FpPFjcJLfo",
  "key3": "3pKwCywuy8H9PVuAzbzWXkh5GDkm3j3VG1bAg9gYM4HxKxjDVnznZfqrqG7JgzqAYzeo7teCYXnpLi5TB6q2k4xr",
  "key4": "3dVARsFjVwKnUFucGaekqYwi7eLjubxB3F1iNW8mSRPyadDVU5Lr6ujP2RLjxjFsPWGyrwyt4CFDsyw52vtReVLQ",
  "key5": "4TTfXq12v7juP5y7XV9YWzNvPvRnNFV4vUHc8VSW6LcyuvbuSoof7yJ6JG37rzwUBf58L9tdbdDv7soN4E6gYaTm",
  "key6": "591ve35X1CGWzA9RVy1JsTjoqPaCjyoyzvNYormhFXGjR2Lzy179GJucC7jrdM2yqsZ21LQA1Zodmxxqmw1gSZVk",
  "key7": "ZFTzJ2r4ptP5MTfiLLVw5wpT3CuGq6DYXpPPXPq3DPGseSUtih1YSJpJgQKQAELuJ1Us4oATWdwkQKhbydUyfKk",
  "key8": "2TrrSzZkpcWyVvWxS3UrdSdD1mj12RmrNMbsZHkBaocbMQLnEPYuvxYwNEKqcSqpuWxD8xgDHJFaSxxdeoNQB1x6",
  "key9": "42PnHY2oWCVzB7Fm2CcvaRTp4CcdyaSHpSEMRaQiXkRFeXFKH2wQfCVnsdk6MGvfPMREdJeHg48guyzgc8PYRjru",
  "key10": "4ks96yjmJPBTxDGaJqw53UufEzyDJEtzyehk58oBfNr5xrQbXuQLuYzuAVAxBENFEh6WKK17qKzMwKJkz4g1tscD",
  "key11": "ZGq8e8PRwrqfpWksHmCUktcxmXexXFjDJezRNT4zuidSy4VWDjZfL3Y7ZUdWgu3KjoVvHmvZueUWqGPooUiam5L",
  "key12": "3HVbTRo18p567uPhrqgN9VygBeo7C48UcFvZAethCwFwpNe1tk3tZFCyRnUrpN9NG11hQvzEpfv4UKM4U7KwexYD",
  "key13": "4Dz8q5SstVxsaXjaRbayTse41drR1d6YrkJtYU4zR5EGftfRvDGYUmx5Sdsm7BrY4Ukc69P2WckLvteVJE2vWMUa",
  "key14": "3UXuDWee6WUsd22myyTv79VUd9a28FgWPPHt3kgL7DKEEu8QSJxTpjfq6ACD28tZaZV8AQsff1o6simKwnQ9VBEE",
  "key15": "w5MPP4SyknrqsiSv86n49NYGLJJKY719JPu8kxtHBvnCFA1msT4WyfyUJeZBsWRHGqiAhnRBaUBfgT7YaT57gic",
  "key16": "3QkQCjwvFsyMKPgP4hbYt2RdMC94JANi8KZGADoGihfbvNpCkjKCjsUxPhdzBJruwhH2d6Z9qpBybhGdVdXiMJ5S",
  "key17": "3Yr6wMQTzMxjJYmN9WqsMYVxzGEzaAhkyXp1BQppCBYpAbwXpF4Eqp3gQoMvNuTmjSofkkuEwZGXGswLhAgW5pNL",
  "key18": "4q9cV7xLMQ3Wvnjmsq83HxkCHYp6voLwvuGhRCCmjojrAtv3JaAP6wAB1KxB3YPZiWmHvocUgKF6GmGUMt93QXzn",
  "key19": "3ZZo3583oWtcbHuoprrxn3rrtqRbxJbjjcsFxZK2vFUM1Na7u9H8g7kTEZSnFFrZub7zjUbCFEB2BcZCUDLT4FB1",
  "key20": "3WMGJZFNHt1gzF5arpJuuViDXzRDEAfhAsZeXu5k35kdJb9SnCqzyz1N3MiUop4WLAf7RCBWmfQXPW9xUd539BaS",
  "key21": "2EUhjQwQN5T5vGyHULsHejmaikRidssZZ22YAHX5VvrpHNYmxjmVmMJWrP5evzd6AZKzVHv8iSxgnKiH6FLxfkRR",
  "key22": "3pGm9Z9jsDSiKXRxpnhR93etBnoRyoLpwNcajPW5j2E2NLdXNW2Gf4c53ok7J1Qy6qcbZKco4WZgo3w27kcTBn1g",
  "key23": "4YYQrDCD39bDU3sXKhj5wQGNNWeVB9MrHfXx4pXJ9Ws9PGLwjge5VyNfzFmkKy9GXESmUtr8zzFkjfkaBCiftqYQ",
  "key24": "HAwnVFoMfk91mnzBdVhGzsNgh9vEpPui1Erswn3yZLre2tjrvcRPz4ht4T2kBsUQVRnabpYvcPvVPAKr4GNQoYf",
  "key25": "3ah1b3tiCPKgKgjsjeJXXp8jMRurQMCFVMRXodFEzpvPtMqFsdzffsg4xWHuLR893R7b2E47gH5ctmJUfSi9oqGM",
  "key26": "46NCyJjRGL3B1pLTeD6UJDUT4j5Qmo6vJXLsz4XxLzuCYeqpcU17m2zR6N9RjAMs74YPEv5yXZNwc6xJNDXqUJYU",
  "key27": "2ZJbwEvKLXHaLADsoQrtGeTAFCWEzjHJtmUKZLe4wqESeXTjuZZJkX6drdqzRkxev3aULP8ogmqHgA6WqUd9ndKx",
  "key28": "4LVe9JEtFsrDwmfo6Ss43zbCAA3D2UpmFgYhNmx1oAw4jvvayr4VymBavhtf7qXF5PzorbqjJQy56BKn6mvTt3Pw",
  "key29": "4LA1cX2krUnoUaK5371Ex4ypqfLSZZafATwKF3ZN1qRZTMG81ZozqPzhUKFZHfmnZPAscLAFTUydDyGHRiSxJ3NE",
  "key30": "hWoAz7fRVWKpcEKjm67gxznxDcRpDYdQYbQynFfn31Yct8K7KV8R3WxzTqA1RUiFdoAvdGsFui9KmMhJQovj15Y",
  "key31": "3DqM3qS3Bwa8AZnnr9LGWLKbPsvxuxy5MeRBHUExFSgfh4xFanKfXhcCRnqNMR2BL4bdgqJ4oowLpRQSJ4ejMMz7",
  "key32": "51DXzR7y92MjTvH8Ud2KnZN552sxeXDWxNsxxwD6NRUVBviAgXeh5WtogBQNknCFKwn8BcG4943SDZC5UhKFF15K",
  "key33": "5iB5A3Ld1TfPJprab1xWws8QWf6JpbrdPCdentguJBcmLsDUWgjNxoSrAAP65stxBTeAJZcHFPiuZPMyZo257Ae",
  "key34": "3Lx8GDaXDSN8WZ8CoBothmYYk8VSiV1nDUdb6hHTWH3nZewze2Mf7bWjv8E5dgEdaMhnoXuPJ6FBoyeAYYjpgc1p",
  "key35": "k8btCjRrNkZ6mNZBgqrapb7ej2AmzqcyHoqQLvohAKfqN9yKALr3vPziABL1fDw2YESrGG6x6qSXumMiaJtBvAg",
  "key36": "2CEdi5kQgofatojTfbtugFFFir2UtzqBgmWVckKQEB4xhghvySAvmCLpFLa27iXEVs2odUDPAhgNRyumn9XbRP74",
  "key37": "4GQHuV5MzY6msMSpZxw6mVbukMHU7WmQa5CpVRCn41es2DkAairRsMK9cgqWqvHwcCmkonB3hnvk4ZJBL41AiLdi",
  "key38": "nbC89BaVPgXEmcYuQDwXzRKDinXywRzeAUeUjkQN5Dgc1xbLWhsKTt3drbNyCqBypJrBsXHy1FRJhBtA3WHN9XP",
  "key39": "3LCBxWoNjiTNbfuJhvuZho61ndXT68ap6SbdCdcSH897zVopLqpn6MqcFFPTKdVi1y8BZ6EHSHcZZtd68Z5FHbcm",
  "key40": "83o46qEZkL6iqsC6uSdog7rdYBwC6i5TrX491s6atBCP5ncbHpk1FYBbd2cg5bkW6FoTZj3aD9G5TiTTF7amHui",
  "key41": "27RWUey5zXuNohYoQ5zwpQiAR4gZQuUWpGxkn1wtBpTkDcdxqZN2LFiLYyVXP4XUJUdSPHDDxw5xpABaG4SajbUk",
  "key42": "55uj8kZKrGHT15SxiGh3f24bDbkFajgHVKVB9Zj2vN6nsVAVbUiYHe67X3YW2DYPWUMWjdq1oqqjy8VHAjSjFbsN",
  "key43": "2PPwydQyBiH6DxKpyNSKgFte4yrwgoRyLVHDuAkzBGVFUzy1TgWg8jy2HdPmrMzDHc332t2KPcAn4ke6qyZ6UPS7",
  "key44": "8CQ43uektdjDr641CuMMLLfN8XpXt8HkciyUBpcXzrsMkP7xVkZDF8uET2aMrNh9AuaHQuicWZZMRdhqJgwKPWK"
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
