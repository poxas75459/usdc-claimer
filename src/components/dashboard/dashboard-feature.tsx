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
    "2KEmkLTKEQprDNhgQmAYJ8CDdQWvA57a2xPwzdAuDyiZVeMU3YyUddk9mWoJG8K9TfWWHYyVfNUSh5FuSvvotsge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j48cVHnteS4wmgTFGBXimg8tmTQFthzhKwKegGvDwYtdQtrZaQBJHHAzKcUnQkh5YW1Du1YA5L8Tq3BDrvbVDRM",
  "key1": "3riiizWLxpNsQ7vjtuNs5mzGHBsxQ8ctXkiYDdQ52JoF9L6fWDzijjAsZb9dHibAdtBbN5UhiQadirNkzdtx7ZAq",
  "key2": "Kk4FGLLgqtaJZRgAaco2oTKtHTXdCpx9LkEYZzV8ZumF459TfEfMHSuxctzCVkjBY3S3wu3CPccK8EdwjXbsHeP",
  "key3": "3TvbYg9R1zNcdoj5ZD13XjRg7J9CAe9ZtyNLyy1UZthCyDoGawZzN4cy2uznY3qua63dBagpBKqy2nDnaAVFenGy",
  "key4": "3FRE5TdtKvMdi5Aa4J4qkGRt2ebtPhSk38mpEbJNMVgSaVa2rGcEg6AtjtAaChD3Ff8Cqc86W5SVvEuhuDfk8Fuv",
  "key5": "35DQV5TSodSZYP7VxG8Z2aaHjgum5vRnPKrr925DwyRRKN9WNx9JmjYmFQMGo5sg9aB8HtUrqUDuN2QpVMAfquSn",
  "key6": "66xGiKTqgrjioPpv24WcTeEUERzAHe3dNLg8KNdsqXvvQPbMdpCFTRFxEAqkF2MJrHmpzEpHke8Av23uoXnSX3gr",
  "key7": "CP7SgRgXhRJXrBS85m3THFkYQketMymmm6ndKauWgZgQCj4wpiy6qVCiJpwUhgGVCf3n3U9BZSFLHUuKcbAqbiG",
  "key8": "dB4iFvRpAYWXigpQybn1ccpV6r3EfHqsCV8i2ccx5K8gxuV38JcBZTePEv2sMYKZpiTZ5p2hQNCtmL5e1usVq4E",
  "key9": "4YVyg9WVK4w66jeQfP9Sn1x3p1jxbk9YrH1YoeffVWqdHXQ2YRhBywvQz92snBX9JvCPRwgf4U34NYNhC9PJWM3z",
  "key10": "4gie63GhCqkmr7Qao68oAUqmVgBgonXWzCntcemfmZhob9q6trDf1RaVpJvpgiMwWEXB6JnPAowxXcECSz9u53tY",
  "key11": "2uuvvViwo2WXjPnR78sV3aPLWpFAEs5k9gxLHght5a3DhpBJb78Z8qPbxG3hfMcLh9XRCcomerMGJ9fT1KtYXy6g",
  "key12": "4pznhgKoFA8XVYWyb1GHnahaHn7tTv6eBDKDGpvEFbk5K4BZTGHxSX5rW5yx1xyTbZk7ASif7hhtM2gvturtTaoz",
  "key13": "5ffmA4nz98uVnvay9bATP1ggQxqqvFK7DVxPouPs9qVRX35WewQjSiyiHcFhSzuEscn9j5aCfrKptRfhvM6ChCaM",
  "key14": "5EuNhASNbhffjMqKvJqmVLs9nPfMSteDWC8MnL8Sb4ina8znzMABSXLj9mtUd2eA6S7KkRxFiwscz13cvMPNp14S",
  "key15": "oKpAeBAvZKw5ousApuaPi7ciBysVbPdM4ZNUmUrzVK62MYFoFnehZQvt3PR9CAeGC9Lk5rvofzjDQ4j8rLaUVRy",
  "key16": "4uCtfN1SdV7CDjjWronNze5EE3htk2A9mh4APis6nwLqX3vLXaUW6SwW2EVjVFvCc9xmZ2AX5cTcEkAC5PAp2jFa",
  "key17": "NjFhcKhLuVnm1acvGrTkwMX6g4hHnEcgQxbDR7EvQXnnhvYACLAzjX8HKQSbzqr8rzKwE4W2PnHmupvdAfqHdGZ",
  "key18": "3XDXGeJrEyWiWWZQcTG8JTbuZ3bC5ZLMzc1ZurcyUX7pLFRAf2t3Abn5NTFvsyvMG5qHCqNoVJ6HtaQDqd3Jv5N6",
  "key19": "3tSH6rBAxM7fd3a7Za14f45XuJJKD5Zy8EGbRPpSuH7KvLhRPXrm91UxKuL7rPXwqpCVcCMKLjcAFUw2BMXsnqHT",
  "key20": "3tr8zSmKbaMPKYDUNHCenfxk3wRUkV4Czb2uhNDaJF1ybZUv9mGNczG3GXvRDbz5X4XydqAPtwHJox2uWEbUEmtj",
  "key21": "4NQ2wYdVzcdgW7Fro1Hoo4E4TEgeb9CL3eGe3bDL6aGKAMDfp1yxUV2bc79ijNmoXBjHTqp2WLe4aHE1JMLkC2ce",
  "key22": "2LjJcwAuZEeFtMeTiunZvUsunXYqJdy4S9vfkG1bPWboGv9z25fJG7wv7dQZeCPHZsaLbCwM5QnBUFMYUXJaeGct",
  "key23": "3X9HJELhoCApqtLkBmHHRt2VT8JmZSzK32SC2j1epme1Xo81qDjY2dzXk4AwUemQz1rtm5zwpagHi71ZaCHEYWAM",
  "key24": "5cvnKaWaZtUwCk5RLM2RPn9ivhsZZZHc27zsATjJmEasW8wuFG2e4tFFCeCBvBVRvZfgv1NJ4xUWHxL3CnEwjM3p",
  "key25": "584ZBs7PyFHEvN1W6qmbVemGixXY2EzUKuyW5XeR8PaqonpS6Tk8xDQfdxSnrbAW3AkL6LpgRwPwhtifZFd3uZbi",
  "key26": "3kyzheTzm3xo6wFoaCRNN9p6wsc8tNyrjvchUwZXHyXcUovXsz5auARnHDicgfZt9E4zVZQfDDV4k4GpqgJFSnrk",
  "key27": "56FY1LSmyKRowyt9f2jadPYUE1WXYJSxzS7yFYHCv2XsUuXBytqMvc63WkTw81f55H36aayJHxs48C3Gd2VCf89y",
  "key28": "63W1656erQrah7rjtSBgKfgKQhVDpRXF3eeQ4Euf9fe6tmnXahCN3snu6QAq8dtRAvvJd7oBBjAqt9SDGn6kLL51",
  "key29": "4qs2JSN5kpB7BaTuqHR5B9Ur7rHvBYwj6WcdAuVVzc7bm7yfZ513NM4eWbZ1pvSkgJ3AQGVCzbM6hH8fGdJZEKJY",
  "key30": "37wdgSxJNvbFNQ647Q9Nk8v6S2XdPS7CBpPeT6Y84gkEUXJvjAggKNg58satVcPbagEttnoXsrkGayXZfjaZqTf",
  "key31": "35TkUwiJ2eeBjkn7B3b6hje8y1bHKNj5y7AgUtriNRRhgs3J75Ke4amQc6HF2bpcWhavLUnojz1kkUkwonDWXwDw",
  "key32": "5M9NgRGtQK8ocJGXM4AjSP2jNxLrxftqiiM2ruvWFChj3MggzRX2Cy7yCc5FeTWtdcjrAPPYN7R7Tw8JF2WDhgcS",
  "key33": "4YnmMxjHdiXzFZ6EdScQLkBXpo86ftoHcyxsp4BMC5vmZMWwsGyEEhLA29nFH9zsQEKZ2FfzFwH28HPmUXhNotkF",
  "key34": "3Siuk5x2QQTeoLTbX52yxX7cWLs3utwMFqUY13ugESmUW5jG54kkEM9TgZi2CFiUDudd2iHNE239yqbR7ewPz6gV",
  "key35": "3QiVGi2MXQPRuzmY4nZY5aQkF6eA7j7PtpVrF5YhsfQUM8kLqQPSY3XXXgDcscLqM5T1hnfBvhmvLCo6k6RZ1L6Z",
  "key36": "2BseyZsUCdmxh7PfYsDVTXmj1rGsGW52uGT2WAQpGWkjqoNFJETiDcg3wwAiHyKVj3yUP3CrKfSDfx6EacnQ5gzb",
  "key37": "5UyMo7hjZaEsuZvYKx4qGh7MQN1h5n7tPmpQGzUsRSLCjwtk3JFqHjfZNCwuCwSd9VD8vRDfnCiyZb9r4Wx5BJJb",
  "key38": "6DjVFYFqyrSo97MgugaLkiLKMdkaRfUWHbvnvCWZiyGpWKyQBwDGbxZWMW7QzjziGdpYZnPX6bMfcowY84jYDPs",
  "key39": "2zf3rv4GCgc73JozFy2jfEMWVHyaMpKaV86wzLjAQior4zb9aHz91vfdCoGNuDb7Nvm4gqA25qbCkiRK635yWqCk"
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
