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
    "2zkeZ6bxmeqik3VGzY4563DrzLKU6stcyk1FGGvCXb18aHaoWaRkZk6RvzED4GP2P4wuoQcWjPbPCqWPu3Mh7EBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hfGjsvaUgozDpa62Q6D93z64KtECW85ZnnaXnB9R9EfAVgeLuRsmCXt2ewBUR9jbvpNTwsy5YTrAETQFcgPWvjq",
  "key1": "4mBb91PnpvDvKtx91hk3V4G9m53wUyDN7TV8BcXXF4YxcJNn56ShFnd1z9kYgh7insDXaGYFRagm96p33ybdf7cG",
  "key2": "49eANTpXAvqqyyY2obLMEkityJn4c6EpP27f9TNbfFmesZDMQYFQw9wHnDPsX5GJwWUDxk4BC32pCgFPJBNp3yPa",
  "key3": "vbfzPr5uFUqj1zwErrbwjQCw9ya4TdW19vnrPrxRHnT41AXnBdEqJELzdFJyyZv94mWoQkyc6vZoN9ZQwmduhEj",
  "key4": "4qdNC14cjkUsxFVRSerQQXnBYF83hLYS2en41jtzRvMQz3nwom5AU1TMPXRtGTqvNCK1CC5T5KR2G3yByuT4FLyk",
  "key5": "39ursZD7db4SqeRuv2SKmwDquFyJxrJp3VttM6Y9jvCJMeXijJj71WJRDC3tnbv4FCx9GDQ7ZbXDyo8NRc6h13Cx",
  "key6": "2by7rC1NohRmZrZCr8o4T2yzSerB85V3xijBSonXZRYLvH7w5zFp5HjemCH9ZknXyy5Wdfb4YKrSsXj698eogLwH",
  "key7": "3EDj7cdwYaCwDW6u46q69GaJEJPajetkeudw2ZKTgmXdzpxgVnfefunTSUGa3rVdbrS48qJP8sXw5KDVX83A46VE",
  "key8": "2JBHGqzNQNK65c2D77E45uwvPAdCqjFzxkPC7qs4ApWaXfMhaG2vi3bJXjo4VMMrHfSxPww5AzbfcsgmBgQ8heuJ",
  "key9": "2fj56ro9DcwPFoVZRDoBbHp4yi57LPSWaveRHUk1szwjJKXj7JvjEUtn6FxYq41tb9tMs22Yv1oBL9xkx4T1qhni",
  "key10": "4FtVfQ9y33q8yTTXer4xUEi5yhwYi8k6MVJ9iKN3GVdnEkMNVSSd4bwLVNqi4TGv8F3UQRR9JsD88Wf9kHRMkTwV",
  "key11": "4aVQ7fyEdorHwbVYB7FQGje8JcLJc9dkW6oaVUdYVsAVVb48F9EV89U6XS8ATYw8iqWKwkirteAwkvqqKS9GXZ96",
  "key12": "2Q1EwPiPdMExz25MEEbmok3jbXzhDfjL8SYHvFtkFDCKWmze9hBfdDiyNWq3nExPUK5r6uG6isVU2u3tCSWmULbR",
  "key13": "66ARP2GxTwS8TgZVV1BeqF17xRcLM6AX9FdcqXxfeX6Tf6w32ND3yUSc9jXjzPxc1WjQFN3BKhPoHeZy7Ma8yctf",
  "key14": "5iJPmPZDaomrPytwqwcED4y4ihBV1EjcjHiJaWxAyduEBW7BEBWVUeyX483YYxqNwCTy9jLfzMyEV4wJKAN87Hu8",
  "key15": "2BEVab5RfUdq52zFmkP2zS5EpRUtLxQyDfXqns22QXMARY72f9xvTFwQQ6b1TgZYCBnEsSNDfrTbMa7v7YkCdZjr",
  "key16": "51hK4NzKzpTiRHy2a8uJdeCLR1TX3iq14acMbxYsCSNMYZbeAJWRJDobySkY8Cw3qCDbE1ZmfseYwakh7ZNsAkBN",
  "key17": "2GM5DcSAssmJCEseyJfWK5m7gHFriV2sBdeKEJS9Vnzv4zEs3hgMqNviY6v34AKKKjuReRrSeF8nV9bS7CKKHdjZ",
  "key18": "4DoLqriz1ySHCpsV3z5zDHaUjdp9HgfyeY4RoN7FcCT4WBtYCTaxcwJ9WgdVPhriU2NkhA4idaPa5kcdWD5RPGQi",
  "key19": "3bd1fy92dekqZ3gL3UWLEhxRq79wyna31KB4UCASe3U9AyhF7iAMsTqDZYN8YWSHqxpFrFzP4zGir3hag283ZZPL",
  "key20": "VP2tZ75PKj2x1z34UxVK9XS5SRW2hLebNN3aQFJpb2hya8Ea2gGcZwsJYBdYWeco8kRQWd4HitkYD5ougewDHFg",
  "key21": "j2aBM6RfNFRuTcZVwbELMRnw1D8kYUVTGkHAssvr5wWVYxZQYsdSgS2rq77qwczQzG8vbory8kq82bibGHhiXCt",
  "key22": "sQ1eYmyTrcUM442maWWehE5SKm8un5ACMUiNecVf41YTBth9pNeSR3rXkT9hEaxnYsqZzMKnXxJvUMSQCJUU6Be",
  "key23": "39Pwhn362uCYZtPDCrvwJe7ydi3USifYuoo9JMhk4mdyPNWk9A4XrAbvwaMeWVqRwXw4SQMc6BSQExLXkpzXCJnr",
  "key24": "3GYhSYsVvNwUCQqRjg7PQRnXDk5EFj9XE5Rk4nK8vAoi9Px975wvfVFxvJy9pze4jp31frVNiztLMoYRKUCc5RtT",
  "key25": "3LJW57PuokgqNpeGkfUYnwu1y13NyMZJTRwqFxiA69qSuFctxCZrsnK2TfhuooDEoNBh4wQc5HaNKkEWai6RNerq",
  "key26": "2TLcZuKnxek31AoLYfrmyzvaJwsyte7mL9zM1WdUV8TurDjnpBrSW7vwj6FX153UAGYEjn62pSzHjUYwWoiqVdHP",
  "key27": "4MhFn4Ea2K8PepKofAvapzFibK6wTZkXw2boaD3Bf7cDQkkM7zxTAvvXa9FxWoTZov8BqQ8dGgdGZ5CNH7G2VFYN",
  "key28": "331uFJFc91ZHoYdsJMTGHra6Qdjk5xbL1vFkd9BUqN6ohxYKu616Up9m4xE8xdFHjAuheqZZg193QcnXbHqb2jdH",
  "key29": "2LWHYxomwQoaj5RndhPNyjipiUR6eBHAQPkbvzx95zgxuVQGhkCgCMFr3mYQZLV5ZhQbUbpAZkgC8j712nDS3Wbw",
  "key30": "YCPNWFmrXq5kYFTLZYdQdt5jFCcGMtsYRwVcghcqeX264zytEpc8BRCKzja8trAjFCbzPPmKynYBH84ZZfyuDZB",
  "key31": "33gJjrDEo68rhRz9q1rUQKn9cguKQkToXzSnmsLtbiWQLGC94hs4MuhREKvD2dmY6F2ZR3zjCmmKs5VnaCUH97kM",
  "key32": "3bp1VeZwW69Ye1ETHgwkfektV5Aa3XKWKFu4KpsQgTGv7yWfPi4s4sa6yZAh1Ldeg18HL4U9ZBtzX2KPtHWAnqgV",
  "key33": "4TAwmFSVRfScGHaW1rNyRWPvPsZFbwzett4K14unawDddVRtqqi4jvYVfbWAXTvJsU6D1Tsqom6SFhG2JUcepMfN",
  "key34": "2dJY7gyzXnP6dJ7X8aY4rWT9Kybk1UU9Xj8q3ZrvtnX8iM6M6zFpUNx8VYkpzAueyqb5HPjtTQopnZuiHTf4PGaK",
  "key35": "5bcAqBDNjmUP8XXi16JakajqjURW86W1EzFQ7etDD76eHvH4byCgmrQ8bWu3fXCEjZiva8wCgCHvdzwssBHtLHbZ",
  "key36": "22Sb1jSFjBXyvbvj8M42fumqfQgthd632CpvAdDnbRLWvvB75SRWQaF7Yo214kgdDWELoZoVcEdiQhfhi96irRMk",
  "key37": "2WY59XDMvAeCZ32FYYhzPijn6fcxhRvU4vprjm2HRZfxrZofmn8WwdniQrYPiYVr2rkG9FVahRYphmmxMbWq9hDK",
  "key38": "rfaxbVBs6CV9bewMm46SYQjXA2kQ2Zkgij6vBaBePHBoVJCimekXf922JCf6bffPMAE5cpLSCKw8F1PDhZfbfWd",
  "key39": "5y4zxMx4tFf3RqE9bxaYXN7Hqov2NGgkBRANSUSByCJ1aTtPYW63FSf5DKvgm2vpJMJCrmDYogwju1jATs9y684M",
  "key40": "Z38PbZCouuCmh5Y9nzsJzbmLokFvX3dkbKqQKdKqw8sLGhSqq3C3vwTiWUgFkDXjF8EwGuJMVqEr4kL8JcWY7UT"
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
