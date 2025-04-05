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
    "5Sz82urpCdKFoKf7HTu445Y2akFFzw62iuSBZZybDhL2QPLjok3edbgvg1Awmopcvz9B9QwSfq84qhfW8eodgy2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBt5BvEDYxkyjvZJxs5N691b6TkPMejKp1LN8vrqE2hUpLgtfuuAKNraFnNu4pooAsTNFe85ytcM1qz7xVMCpAe",
  "key1": "5qkva4C92BGiNJMiLtH5WEsp4kZ5k9djKt1k73GAtWW6rabYF8usqZpHsgLg73tAo7btMN7iTZEpfidAfC2tQeXH",
  "key2": "xwRptwwu5C5Fv1o2mLdKHBueY48r21esPrAY1AqHB9Mqohkgod55LiZmQ2P9refVuoss2srfsYvVFesuRfBJabk",
  "key3": "5pSzGkuV6tL2qhg5p8XMJnrSB4irTKeyayzPmmrJs64yS4fY4AWXjRPir4rVUrXuKxBbqTaQjt7pSSKBErcwTnro",
  "key4": "4BKN3XTzwxbwGsStFjzsjiJXyET63rr9NrRLGMAkQ1xcfWbgdMreDmVGJTuqBp5SY9ejawbk1JGoYE8YXUPEmv3Y",
  "key5": "3Yj6rV8SrRTRHTCAWBvEU8HMvtFVyxF5zB7ATx2CaPhn1pD2tDD4x3DDzMgHE7oLf8wUDJxi9dV8wPyMqx1qyw2r",
  "key6": "hkw2qCLDgC1FdZTxXGMLwdUeBt2JdMSBUjsy4jJEirkSTf8T1JUWYyHzQpU2e1SVgMMyRSbyd4cpGUjdNKs2KBa",
  "key7": "5k6qEhbytRS821udKM2ugs3h51mHboKjjHykGZWg4RtbA9CXQz9p8W3dMCmuoEqYegFBhgwt579uLLcNC6ckWmb2",
  "key8": "3Y3Kk41VKHBTdHWEVgLzwEFHskxyEimQuMcxdBHrvEgSEkKyQkqXsqZyWK2RmuC8LdsxBLJZ1GNxCCWs8NsggqXh",
  "key9": "5nAtXQ57wtm9vu8EgBMwcoL7wDZPtFd8Zus9Rru35FfcmWhUYzki2Vdgd1D1DvnUzx5acjcswuKsDcMzPWd2QmZs",
  "key10": "2SycMFmpWm9DyYouiniKAhBrsQwpvdH81fVgXfAhRmeJN7YhrVUk6knHsu1jrF1y5ZHLJ6P45MjvtKSpruSZJ1nR",
  "key11": "4BYc3zREyExDMyGvFwNBgn7Z4wjCe5Ujw9wk2kYtEQdnVYxNwDr2Z4pGTv6HVChVSbmKPQK7aXQqcLf9BxAybTNW",
  "key12": "65Ap4aQFv19fhNDiNfnUpKwbcPqjihvbYqEkcWLFxkhc2MaeJokjmtR1vd9cZ2y4APqS3gPU8MfyjUBirxZiXyvj",
  "key13": "4HZsAQBHdtEM1RGVpqD6eLbtqrGtKE6A59LWLJd2fpFzcEHDxGXxLDwA3MnkjWHoEVP252hnnq25TKsEESUEC6WK",
  "key14": "2U3tTVkZBqRf3443EchwxF7cDi9n9G7XiVt3fwFtvC64uRx2AFbfUmdq4EkGHzo1LEo7Si3ZKiP394iYULNpZZwz",
  "key15": "4RxhryL31erpxdCsdTHY12uzEsNovnFpWZzXU3crMTDSa5e1MQ5kh3pqCHUfZuiXZKoUJ8JbaDTNHLF7Y2bdkg1P",
  "key16": "8HB29SjYNuByswvcXzaRdyxJsKBM88houVKbd8Ndzonv9JPA8pUsytK9XzwnqUhUbALGaJ1KQVp3Pzp1RS2xjpu",
  "key17": "2FfYgAyJ6LdoERJaoXS5q7YpDRKzx3bY3ACCkQ93xbCKP6vHGxosLxcmUR1GNMumXBZNoc8spXqPu3mG2mMgFZCR",
  "key18": "3fJeqNbtyyRwaTtAFvPvqD3SQ97dm8zDsef86F5gT4LKZQfaeRNUaF1fmYuj1V76strE9VU5oFhFDcoYE48RN1W",
  "key19": "3tuci4WZ5qhoUTktg2wt15Qc7riEcE2pcT9HWvBJyQeBxx2PFnyXpgzs6nuyRJLg8n32mQ7zH8Amrf9e9wjiKcAK",
  "key20": "5ffDGbAyJXhSP2YMiCiSLtZBACQFgtC9tWqA9RcFXUnjCWawt4prPJdA5yTybdpTS1FKuYfzf5uxuGypVpaFo3sn",
  "key21": "4TN41aY7me2VhK4KpX2P4FKTuCkcwcETxFAFrWRkboeVr8z1QWRADS8E6AEPTDhF7k1Qq4RM7L9M56KpZKFKPa4m",
  "key22": "4vyrRfHnNZBXQbmLixNh51G5wNLv6SfcAQVuKaQWY6VRpJV7MFRzmdTkx5ozMjCCD1QmGH6DWB73uQFwkmDjxDmn",
  "key23": "4cS8ZGPb1iBFThK4iGH55CDFKxQaaBZe9QEpx1ZGVgRQAoHcZG6PUohcw3smch5BompJacZJGSaRgHegLPzASDpU",
  "key24": "3jwxRLgWriwufpR4KJp5WKfiyc7bsXFV3rk4tVqgVzu4WxPFAMnQjntekCcHDDNTwdLqbZxrBN7yDun3it13QHSA",
  "key25": "3Xy8ei8qSyfhrEnxMPkDsaDqBNRYiGH6Ji9NZDG3WbvuV5utywSNLtsFrQWHRkqap1ShLMyu1Lzojrkv6dNdkf5Z",
  "key26": "9qoSDodnqsSaxBVzgS6QCNz1T32xrLTwc7HLiWN1VgemMX9jZnDFwpsCnuJofBGjjtZZW3F75kQFkSYiUCRbBXk",
  "key27": "jjoeeiTuRcL8GWDcKcjRspPzxDWic6HFAhSYzpVTewHrKBsoQHmHav5Wu9kWamM7kSjoLzKi5AweLqtuYS5Xz8c",
  "key28": "3ebaCkTbdJF1BEhKdErNTQYqhZ9xwKEiKscdvr7RFgUHNxaJKeg1Bb3uBvq7zvi37WNTpLg3tnKtLfLEq9uWBnPm",
  "key29": "2WNVczgzf5TH1zpSr5ycH1RvA7F6YHoP2RZsEEMM3cGDBrARXS7hxhm3ERD3qXves7u3wohPtcwWPqgJ3hXqwKRL",
  "key30": "S5bgeXtotyd8K13uFwA8UXCNVQmvMe3c2ud6Rs1LJHapkWYGF1mY3fqEiAnLpVtbHSU1hy23aMUBgpWaVzng9jE",
  "key31": "5CVLViQaCN9gqpUx9wHdWHcxVzhzmRw2ikqEPaCTVesnZx6jt7YYtL8Us2hriDWbG5XhehDn5kUBdXUrMRW7XTEf",
  "key32": "5i6JfJv2ow6FtjWeQcmJaxm1qQCrYWgkqUsbrEc6PAua5u97ZERHK6kpAFxDuwdkWRdW3KZxzhF9G1svtpQcH6sL",
  "key33": "3wJKicRv1jeShDj5UZK9Yf7Uwuiug6GoiTjH1qtWXzeBJJtHe38ET7soRWM9zYaSkCsz5XoukVDf1otRq1SNd7P9",
  "key34": "2hWRZKCKNN9qfCNd3b3Xp5khBi9kpWGHw525uzsJmvZ9wjpt5K2jmbKXwjByVxBp99J19K3PQSaLHGqBS1uxTMbD",
  "key35": "X63BXXcWUM7GaQxnUDN6YkjBhDbQMVihtWWFWwakL15LDRdMiBgXsR9Dp9qJgbSUXmS7htGtYwD8E9U1q8vz2BG",
  "key36": "3QPDoVJdHZQMRASsH74y9nJDDopxo8XJ35dAbZ2bVdwpJajCPRrJs4vDg2Wu52VkTT7YYTPHTgNyLyVo3c6YasKS",
  "key37": "4C51rMaUSAJGqGPjYWvJtorffXBsRLSgXFh2ca8Jaqby6n7Nrfeb4YYW3DtbzrdzcjSwN3LvZVxvTBi7aXcqbtVK",
  "key38": "5hwNFF5bEvtr4wpHxfASAFZcnP2fPFn2mxYw1CntiVMS9kVTgkcAMBpwgJm7h2Zyp5iCnkCWNuoFdhXr64CDZLxD",
  "key39": "3312sXsCinBJxx34VszRcdDNNzVavhpvzHa7Zc9AwobBwqNqPznt1DnEzXMiEtKsZDLNoNoEBBidpTTJzkzj87RE",
  "key40": "5L7M8EVBrMj4Ei6iqFn1tM1a6YpKFJqQDt95AUvsa9WNC1oF2UwvVbDo4TZwkZv7soeZWRGAXmH5Tec5gP97zjxa"
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
