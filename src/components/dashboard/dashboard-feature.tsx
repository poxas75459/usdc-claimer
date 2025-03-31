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
    "1LmCZNNfkn7iZmFKFipwqPhjXUEYvesxkAa2S2zpLCpSLBrEgtf1fA6SKvoa5MWXMY7oBFNJmE8LJCKpNrP8B5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24chGpKxFyRDnFB8zQea7hActYNZf5Sb2SuVBSjR1dqyPnpgyaxcyP3UKYEzZJ8x3KSFv7XPNtwQ59qo7UMA4gBF",
  "key1": "4es225u31PdVSasF3dV4fPgyGTjYdJwTb1khzhnLhnjwjQ3S9JsCv5iV5G183o6RPNBi3o927vbcBM6uv3VaHKYT",
  "key2": "3doMEuvrKa6ckY3fSxgJQGZCfTSqfPAqwGvj7mKXLRRXMwFUoJZG8MteKzsGT2tk3gAA1LfHhr4QqgTECbosLgLV",
  "key3": "3heGHQ4b2wfvJeVmPDENRxb79UZPdJbQdVgKSG3i87GQPgysZV98J5DVwk2JSQrg9qcG3M8PScU65nLTLk8mDRgb",
  "key4": "7Lv4ECHPuVvKi9PVNV6RsDZ6HPMVCb43T2HjPA88pyNrEnFqu5AiBNQXsULyAkhrvb7zqfUphc3NjKvGFj9DKnT",
  "key5": "5r9oXp7NcA59rJtnJLuvKC3Y3UbJUUZd93G7ANjDgc3VbwCqeLSayfW69kRKaZZY3kyYT4bTVEx5rJMs8UgvtY1y",
  "key6": "473qVCxK4GBqfRCyGzPWkWDpj9nhKqG4xof5bjnMZLtB1FMPPxWwDqEQ7rZZqPxsQRcCQMrE3rdmNgxZQerRvBLh",
  "key7": "419WFi6FNgjshPGtbmvWBLd3awrjGHasfYrFLPcHfW7Z9tNA6s8N6RtDhgWWqJNiyiUWjVuP2JLZUan3XjWCrf9",
  "key8": "5PC5opQ6doEhcfwz8qQ87m2fHPLHXZ8D2YRGLejdhj1PgXKCdPwRW5ew4kmcLMK26dTyxN6dVrHywXxcUn4se1j2",
  "key9": "65s44CW9hCaL5hwy8wp6rjMQzJesX5Xt2DweWNcVP9jTPGZRoBAjM52CTbVqcj5H75b74z5qq16yHT4iPq6CTbRX",
  "key10": "3kyQx1C6TJvKBRPa4fFvHA5ZDqszsKBABaUWCrMgwEcQqCJxw2DwEePk3jFYV4WfDu1A8uvEicyebpQwBNPRzip",
  "key11": "iageXfMzN9x92HD6ExsUQw6B8E3N6GZWX3rYWfhyeNpn5q79wbKuj8REywZiZWSbTSuJNi1Hhpg7uzf1NNkHLPs",
  "key12": "64mbiYPN7hqeWNqznTAwDQnF99PKb5hx2yemTJ1Mzu6UtfpW5oBJZDH6jDcUdHALhdfVB7dwDkaATCigs9Ktv5y6",
  "key13": "42Ni4YwMZJyEwcMctEJWfrdo1NwxmAvLz6QMWFC1xNqN7AxxSDsHoXxkDuDfUNso617pyuVw8QzaX6n87ucjbLZr",
  "key14": "5Rr7gBhiBMS6wHsiSQK5k6ipxXkSVs2x2f5wwVBoHbYXfb8EvYKREN7TY5Apq9jr2jMFk6fZwi7H4kNuar79y6Kf",
  "key15": "3ChhhgycpQ7m3vV7wKaBGKToCqtcdQGgZxenLJz5RKsSoBYRV9TfCv6ErS6WbEGW6CRkVjy1uC1k7knaGARHvTw7",
  "key16": "3mhovppHDsBb8T6YC197e9F4ZuHvPnW85u1BKrK9CXvLbdoJCf1sz5sEXMiE2Kwrs9oUrhGwWEd4KEoBzetyWNVm",
  "key17": "4iH7kFCZjZSL7yZ6Jsn5v7yYXBypbG72xdFhuJDYWrUHb1HmanmVvrUqEz7b4FEwEn7649zrSrTse3YKL1cS6Qt6",
  "key18": "4oCkUKEB6M7A41AohXYFYNtq8atTcZYXi5EZhiCT7mbrEgkDtibYaPAxz46W8CHiWBYTd5UCGy37zwubW3LKsCHn",
  "key19": "rdUovMbqeWsJYV7C2326yxnFsur7yiyesobtpXSRqC7cjZhqoDjPefu9gMt5o4UG7n8tr7DwSPzsQYSb1FHJVv1",
  "key20": "51NoKiUMwG1JfLZLfbgogCYnzY7X9VhnMHs2FpwHScRu7svNDhjP4sxFbygq6geY4WhYGMQQjwksGnWozJ8rhnpP",
  "key21": "a6jRDDv2CbTn8aSGDEbtaqV6kJ7nhEy64t2xYW6vn95vX2P6n7mqaUwBzNv7jdtRHKmysqBEaCQ734vNorNEGPG",
  "key22": "45MxhJUHkLFGnjHZSa7YHAU6B38ibyxbrPrPghcuWkXWt2Zh5tGJiCAJf5q8K97H7WGoqfyv865E6WDWkw8tR1ca",
  "key23": "4shcFPvGCWgs9mQMnyXszem6ziDJgdw4xSe3XmJdRxEJZvzmf8ZdxRc5WPMyeTC18D58GYREc7rsPsbAu14B9Vv2",
  "key24": "2dLYa6bdXoRoky4ZHEztz8UHxyZD2Ut3y6DdxppVbSzK38KzEowoE1g9gABYPPU9Wpz3GHM8wLZXyAcxqgp4dD3S",
  "key25": "3XQ2DQTwJU9M58h3S8sAjXaxHYcXQm8Qsqs9uSCNSbSXFku2jftjNS5M9ZzfWdKXxMokYMtYGQugiqmAcbnGJWUd",
  "key26": "m7USa7jsa9AFvAMxAdueBMbGwX1Soq1KQttquHbw32RkQMdwJdawgRQJtFuyURAgq5rvxnCLoTA9GrZvizJuHYe",
  "key27": "4yw5cj6ZCnNUK71aUvv2CkiYbM2t8Nn1rcToTqJXxu6sjT5t99LiN519afv1fzhBG3Raba9BJyHbeSzetZQ6owK6",
  "key28": "5Xm9zCovbEAirTsw7LJxUtn8x5ymoq56nNAQwjiHi8v4RTqvYvW5TUBsQHGzHD42zBf5RxRaqiDiv9MGEtddsq7v",
  "key29": "3qfwuiaUEodZmAWxz4Np2P2V1VGK68dxwgCxLvGNWFPNWXhRLwLbj7S7ns4WHisiUmGviyMdCGK6djHFE1uz157F",
  "key30": "2QQvQ1KzJCwmhRmJsk9zoXmzBncuSz9JvPmFbeVhPwLncoLppPBJjP1LdazaspLyF8LtoN1S1JjXCnKvvXXzTQJE",
  "key31": "3dNrr5EofuXERf8tav1iBwyyEJAD3mvwpmHNu8Q7aHhJ8EfCuGmWY28dq2TidM3jHAcHGLQUbA8qp9zSbnPNaDym",
  "key32": "2WZH88BjgbBMgVbufxpyNLagEHnCpPU7P1WdZj6mYvSziSVzgj967EPfTwoViTeFXXeGTvFcyGgwZjXBVVEEtqYT",
  "key33": "47baV1eoEm7QPpzbjxSuh8BFL24PgU1joTRxiZAzK1cpk9qbtwLDoccrvD4i2rK2UFfyDHtQQj2S9gF1Vm8kU1Jh",
  "key34": "4XvL9Ze8u7YWa447ZQriTF8mpD6kQTHjXgRCjMheGVUscAKkurhqQYP617GaBMHHQDE5DJaxXU1ms1Gf2DZ3wpiu",
  "key35": "4ni7i2F7u3xEVGdAmhLFU7VCQ2UfeQKGZpYGLjimTLFyj2ruPshxRYYeT78rRn5BkqwU7gGeC1QrymcXg4oxrnTn",
  "key36": "Q4evXWpA8qJCMSZuxn7rAfV1R9ee7Av667xfeXjGrEwcZryFH2AwWppAs6Zx3e9PKDxTzbSUSmGHPYWsdM5MvZD",
  "key37": "2QaHWvXLEqYuz8bv6m8QQ87YFkoCzSJtEyyCFit2gHALBVCduiULG5NRmDXCHDskVJ6LWrmbiHCZte67jC7CEqUS",
  "key38": "ZW8PuAtyAzj34xYMhBEMNiCKdya2Uupn8qfSzy79V7YUokJ3gk8SkDTCCqWPAoDLD5w8KeagXmzaYgHqD5iN8by",
  "key39": "436unYUMGkZpPLqo3NMFDPpfS99zNbPBf5DeHBya1TDUds6kC2bCXJVoZkw4LScLMx7Zh986SNjCGdmmBd2hjBZ4",
  "key40": "2Z1mfnELczXXdUj5gq8KbZw9S4qtAt17aiHKEmc1BF2N3FZkk4W6YzbdjkSv6xLwhfknpG7CW71bVzWFELzbbswi",
  "key41": "5cQigaWKmAS9zLtGFtKs9EiUnspLyp6SACjQVyZ2W4u9YchFHWX2kVU7n4AsAbW7Kt6iGPm8558ya6orWpWqQfeC",
  "key42": "3yQD5LdXt2HZgSz8ieim61BoXaF5JGcAnEmTbiuoKDYbdDKn3XhPQoMWZAL2AKZcr4MERsk7QxY3x2irDR9CNahM"
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
