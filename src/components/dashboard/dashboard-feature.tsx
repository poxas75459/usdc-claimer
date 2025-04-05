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
    "La51AJ51GHHwD3ovfd8US9AzAK5oVEJSfieKUDZvVV6ap6hE8VZ2oqYAbWDjDVHR4KqA3oe4CtVhW1YTLTkaCEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53DdQufFPQaGyhA5kMToAxD5Yk6nXWmadSZuere4hRttD86VyLUTbyX9ZEwq1PDqk2HBEGKVncKYVKTPTLAWpj6v",
  "key1": "4T44DWmHXuV89widXqCYH9TwBwDwKyUgFM4c6EB9H6reL74m8C1kTh22K9uZxJTH2gnNUrUJaiZVT8rWKFKjWk2o",
  "key2": "57RZ4h8q3GcaiwFeV5aHCSEvMkukynswdF9bUpxLL9fC6Abf4fvD2s7KR1FW7ZiJ1gn1pJB2A7tSvzg6exZL7B23",
  "key3": "v1bdnAFXP6oiemZ7qf8pR1MCTz48xK2mJNHdLrytwsoX1M8Gi64nHAcQehdTQfwuw1GXZa7iP3GViwcofKhjRUQ",
  "key4": "J58KMzqJQ2NVqYnYAvtdFL5vHXydXdH4HEHKGtxci4QfVWxCsriAoHpGErzbRAk5rD6oBWfYfUzxHQ2B4fKs7pi",
  "key5": "3rXr2a2pzANAo3U2qmd7yCWWLFDSEHJ91XE63QgHWWfJyaurdaPJtDBE3rgxSokyw9JMqf4QL1cZYBJegMu2BPEa",
  "key6": "5MAS9B7ia6u8jGybcFA9mXBYWvGChzLynHjE9szCkYQT4ttjjLEQaTtgRAPtQv2wQxAHin1xPFGsNQsoPDnDJenH",
  "key7": "2qNTkKxFdzCTkSWVPBaMcVhwdDZUsKvngZqnKAMjiyDXNEmBemGRJPzw39jiJ5mPq6c3AmJw2WbHgWp1KuuBnmYT",
  "key8": "5wvP1NBywp18pRm7hnZGkZpHAkfWZSbtGH14omttksdjgBNyzWSiXGZjtC8KCgM1bGNuDbMrzmyuwWott4a8SvSv",
  "key9": "3KPt3pHay6aSSuHZqtiph3y4jrhwbFqcuEskdsJHGtJyLQ5durva5QBcvc4SphFbpa2KkZREYk4tmaq1kf2iiyg3",
  "key10": "5HfqsRuExydkjw3bfgFfzvmHUAZGwqfmSdadVpL65wVfB8VzAiorzKKFpHJkkA7X39qZwvhZEwkLonC8uJewZVWr",
  "key11": "yGFrLg7kAVmc4DAmAYbEWxwDU2iWEiiPE9osrXPkFrUJ31H87BpYVhUS8ASxag6KLFkxTirpxMZ6XFB5CGrVxsp",
  "key12": "5jy6msUnubbBv5iZatvCr9P1CNjvDntrb2wskqxXVXAUvomtbjKvZEyg8RKqjszLo9WRwCuHQtqntjvatY245YPy",
  "key13": "5FXxssQRvMUUArEasDoQYn5Pw5JZAYgjjSrsxTtQ718vPZzrP8XcnMqPicKFjghk1TnwSpqXUW9HNYiPPzmGRpDb",
  "key14": "51LUzabU9baa1mdexPBnMbSfTRPHewYHkRfrakmZ1wqVyn2ZvYKsshHUvnUTbFSGLWjkiJZ13TTTUCjniFB4nYS3",
  "key15": "2o6vxyDEBD3JN5gyHgfcJ672YnEubPanBh6DBhwViRCzbJJbSt2uFooxPmu22bG98jEFYtdcq6sumSkwrwzYRiB1",
  "key16": "3o5qiLD5t83gJstb4n5Y5eHKwUEu6ee5uLSB37LT51NguKNkBTcGWF8yyELuwZiYDnjvDBGjM1fnsBrp34fxgAer",
  "key17": "5Y4UiNwBRM8wHJpyM8PCKQG7n8MwMiDSo5DBb6Q1hHrHgkaBvZRYjJLmDWGSqeRLfHCYRwsmZXPYTWm1fJ9uqt99",
  "key18": "4Gb9GMqV2DGKo793zZupwsjeudiN9aLebxH37qicFmnhctS9HMsYXjrwW8J9bH45KhactjF4VWC1prYmXqrCusfc",
  "key19": "TRyU6HdSPWm1H8vi5TRz5ZxNkf9Y6dLDfGFqgkpdJx6KDS9uWz4krKES1tQ4sFyyJw9nDovBe5Ms5xmqeHwX9Kq",
  "key20": "3ae3PXmnFVqMkpdksG1Rz37u86cjTJazNNRKFZzyPjNKdZ8WZv5aiVP2ziseFv3BHaFKg4o9ggwTJ8v2ctkNSzx3",
  "key21": "RYNXnBrSqf3q5iCE8qhHBAm7drR23Gb13NA3upqyzz2yveu1t6zy3Aufy4TAxoQkJaH6qJ6NVhpRC64eTf7N8xc",
  "key22": "4Fo9C221aPczkFN4CE3aBQpz7FSR9KiSVHCushgmDtxSYEqzRjEDanviDzJZHhNq5wp6zqnDJoVae4HPgmVjLsJD",
  "key23": "8KnaPqeMzkUSDqTuXALLza74GipUofWjQCJvP7nb9abYZPnNRLiDGHsWiAUXGsGgkMUeYdFNZWfXpfJ9YQ8ro2s",
  "key24": "3F8yxER33CPjjsL3WiqbCZxfzG5AAeiA7B6jFVM18KCx4QPze17reXqb3GpAc8Vghnz3KUEY1DHzNPh8HQJDUvHh",
  "key25": "35B8WU716REseobWtDRdB819ViomRQb8R3Lxfq2s56Ukeq6NwQxGkv4eUnQjVvmDzC1MCTptFDHgVKMA7mcqjMsf",
  "key26": "5HfuZwhptVc3nD64krXrUzRWU1E9CsM1ENiDnoSfGoBBK7E7T7AiEudWdyisoJfHriwjUqN4fVzHSQ12NX7mTRPi",
  "key27": "2UpCye2575mkRwAjHgzmyNVoRsvMbjKgCYpJVyPvTzox3g2g5gmy5N3jET8L6Nt4ZuHuJDmQoTdrmTwamvW4G8K2",
  "key28": "2bhK1CHLwHskdoDzBkGuBXizZcqMFcK9HQpuFz9fb3Lqftpm6AYSF2WsXBv4wWA42XKRpSu8wzmn1dvE7uC4Mo49",
  "key29": "5iECqkvnjACUKRYKg1diSZ8QEVUrC9TANchyqoTXUeSqFdJqATEaGdgVV2Johtg3rh8DumqXt7WwHKwA7hqpczg6",
  "key30": "5Hj34kd9Cp4A2jGCebmN2egc7T7znS3ypeBnkDcQhW2zBxqjrv5zsFiWUnXkapP2r51KLh8jCNFxCkvE92RGybk4",
  "key31": "qPhgZC5JhE2EJ5DhMV34khXBWHuu7d6ohMPT7xFKjzi7aN6sWUEeKnvV1iowUPoidgJNYE7SR1CFK4StMLEbA2N",
  "key32": "x13JiT4sw3S6v11J4ch4eeqQkPcksQhZZJbjTeWivPpREqnYs6Q4J6WnUHGu7iVLqzv9xNVUXYwpKMXFBQURU1g",
  "key33": "3Qv1JVA4qaSPT2jr1uWYpzaLQZjCrPsczAAt67MH4DGi3Kkky6aBv8LAJEBN3FfaP9ymRpZbZ2zF1yCDDpXnDeiP",
  "key34": "3NXVTyBEU96B9QZeBj6dYduuRUmk6XMNrZvkridG8zL8kFcYAgYbsknoXkkaEhyefWCx7eb3ZgF1emrQnUih5rvc",
  "key35": "3NwUraHbri4UJYZBhZDYAvT8Lo3dPXizAfKPpRhPKYQLXgJv2FmJvs57wrMe5dF9J1xUGpAe57WGVoud6yns5qYj",
  "key36": "3p6nwW2oFgWYZ5Dhg2cUADFpzGKQutzJu85vqxMDrM64XYbmwGGuHFusvjRNFSSPBA7Wbdn9ySHBVbfsNxYXDAjh",
  "key37": "46o4qQepBA3qPyrid9PbqRE6sbMvPs7Juk9UvGwjDvywWRjCkECinMUJu63SekXybNjK4JqfTwzA2y5vBM9vJ1UG",
  "key38": "4Q36Huukb5SQg4smjr117zk7UexckverxwC9x7kyW9CjY3dsk78vuUFNc1iy3j6BkRudo8CySRnMq8hT37XvBVTQ"
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
