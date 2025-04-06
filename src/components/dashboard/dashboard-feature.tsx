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
    "2XqgPhFB11NaL9tiF2Y2wRZmS9Eqs5DivJgPZ1AfDs4xGNuMFKSrTn7uh9bCmWhqnpiLvkpszkwu6qGgnxo8bKso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ov8aAr7cGZAM9xaynDQhNqU3TYSyte2Wu5SCn4gG3Tvr7o7eKTj4J6Ezsp1f646JmWW2TuqZNrBm7LgiMteXPhc",
  "key1": "3CGNof9xEsqNuLrTSvFtUKcxsbBb2KzxhmjQ8RuCUzZ3Jf6MdMwCZhuWGTikdCqAzXsyfH8TtPWFEsF8PZfVA95R",
  "key2": "2tMsn4wuN7sRHhnru7m1LpckNagCgxFJaz8UqHPutL7252pP9AUPecueFZUKCHjiPRaKSLQVfiU6ZFMw6vwcEY5Q",
  "key3": "5K1gKwccMRVsYkAqqgik6rcLCi9XDvaGypzBxTxfujpACGy9wG5wju1vE8PcKPVMBP4z2E1sx49ZaYMhbqeWg1be",
  "key4": "41P7TL6fmaqhC9R3RAwvQn9SkjW1bboQvUKmWgYWZSigrmpMpnqzJGnBH8EkDXuZ9KT68MQNNdPVGBiGC6G2bd81",
  "key5": "4hGnszLo5T3izRxg6MWx977YKf7Y1r6ytgRYCKBaQXs6bakvSsB2WxbFuRxCtvEZWUVA5eAVJAzfzynWZYTg284m",
  "key6": "JNiiam9LVMSa2rH8wxe7MrCUPCGVtVNDVfymPv9ZXaVNoYdNjNy3Q5mzFnxERD63KM6M7UTvb9eEDdV4BXkJv3s",
  "key7": "3dy6WKiRuAzPAsPLuh3SYVQNRz8SrSYxjs3vFw81RTe1bbm4pjWFCHm29idem97rRXQnd65fXHFrGpv8HAFYCkGP",
  "key8": "4iqmRGMTJWwZA3aXbSSPLk9qxr6k8csM78qTvwtG1JtRMbbG32v8cGLmX6Lgd1eSuPe8ZqR1LBqxJrmTzBUPnEit",
  "key9": "4YrAX6LX7XysRFu9Cntxdqtxa2f7CCzopYRjgkwaT6VMYAAW3ShuuJjF3LJf3YCpL5mBh3Ttw9C4JYuKX3YK6t1o",
  "key10": "38y87pHxnTvV7b9d8hF8xgoorKRHscd85bzRGXSZCszTzXjFhUSW8swjiXpSuJxYVUjNorJuHmhktdFCkpaXit8L",
  "key11": "448g5LjjjJseS5XrT1vBGymbufpoe89uWjKuc1a8sdhFSaxTPwLQCZHtZgWZ16kfbGJsT93VnubBpoZJ9oUhwfZh",
  "key12": "3ukg4EeiSqzvoXP5avFKTJUbv9AJEcafzP78wiS2RJK3qJRpBj9juKzNNBHEZ9nxSw4wA5W3dAWJdFpuJqZcD6Sf",
  "key13": "4jmkM77i9ecXabGh8egXWyoyrkTYxCo8ebLofVqJ9fkE5fW234Ko1Re3WhpeQQPXnmmkCngDEfJC4cPcfvvcagz7",
  "key14": "57wtUBKpvYFMcMQZSjCKXgZ13po2WjNpfnHCVXNTJDb2o5GeReCRQvxPQ1oBwREg8nuTHA2xTfz872an13uWyg37",
  "key15": "43ipnhnQnGJmuaPn9Eoq4MayAbxGQWzZ5DZgA2EicND7Sn8pB5RAkFuBXJMNsSkYyEJwDJPokjg1Ws6CTnu8XbXr",
  "key16": "521BtHmGRCBeNxSo2T8iZU6KMTGopBfzP3AXWZDDNXCt4gGJvDRZoGSskWJSaC9FMndUNhrT6fPNYU7Eybmw158o",
  "key17": "42eZeZjESg4STsjzZcjDzcA8HqfGniSxccmUiob93csDgd3gyMKUTGzbUm9X43tihdo6VRewUUgzFUeP8PhmUcAK",
  "key18": "5ZLgm9Gvd1XTb8mXryxKotnQe9CeCS7B6REecdwj391BXDUw3SqVCwvEEcKRuKFyQ4SdxXrahyGupVfxQS8rURCS",
  "key19": "5Mh9wtMZhcKkTizv3YAXZox3HnBAshCZe2jiTCppSUv2RepgjVjm7aoZSVJ3wvA5yQ2z3Go91VsssnJv7DQ6cPau",
  "key20": "D4UAKkXAXo1k4B2jpBkyJY6Cc616KNvymyXZDNDpkTHxYYzaA7vRSDhnrBoXvmiMhjQ4J2QoFWwRTHhP5txmMST",
  "key21": "23gx7X5hH7VqL8wJgEiHEJV9A6nSHZ33ymXJve4MK7QuLLZA8r2JnqJBxwt2JDXKqZTvbugC2FC5eM79treCZriB",
  "key22": "4jQ3KRLxhMfWLo2XEWBHLzz7ixNpj5reYjxyPHDLcozP3c8Gyxh5v3Ke4RxftSZq8tPqJofLvCBgD1XdgXpuZcdw",
  "key23": "5nkZRstfGcHRokLXUdpFP1FLzoUnrXtU4Y4wSNz87361kpXu2EDd4YEZ4irGezTFMVX4WEgnmC8Gnrg7uXrcs4nA",
  "key24": "27MuSjsWAT6BALpLzkdEMyzVSk4j4pM2M7iZGSfw7JvD77EhZYW58Bn2HGKD9w1KLD9Dq5NAvbbuTamjmXuw2YvJ",
  "key25": "59hs3E9LVqR1CXsxSqUhEK4jvpCk2PmrzU3kz71V1TzA5wgQfMzkNcFXJvNUYEKG3855FW6p4ZDgrH67wE9TNpgS",
  "key26": "45GBkJMDBFZkJvivywtHwsZMtfPa895Zh9r1vCHmT7sC6B18YqD71sjQUn4typVmaHHTKS3Hm5ttb9QWUxFzV7zE",
  "key27": "4LeUuCGD5Crm1YM231kGC5CeH8jSDE2PPzUeS1UHLL3WZPkqX4XqDXwjdvi8yWGrT8gdvgpby5DWFpRdxCEstbbE",
  "key28": "3o5fvg4XmVfFBZjSbkaGwJPhGwdV5m6q3cXpE3iiQLWRwLiJvcsXjywBh7U8scYr5gm1zpKdnpRT8XWd4SySqkdQ",
  "key29": "2gm6BJij1KuGZ6ULX1nNT9KscK4hbmx9zdenzDXeHZhnXQy2MeRBzSLQctXZS9j9P2ZYZDpsVCF4r9gT9z82yNUQ",
  "key30": "2VeYEHqRJkEQ2JJmtHyBrqPLnYnzEZswHQDmhwtV1w2FjvvFqwMRVnvQJJnYakaZb9fER342rKR8MUvoopDwuE33",
  "key31": "2pgEQ9ADenivexWsJ53FU3j5hPj36yKRbCE1srNTx2DR1AhknkKo4nWVuTryTwTg9JVuPz1z3tLAcyh3EV2sunip",
  "key32": "3wPMobdtc3tKZivwQA3uPFhPxDo7Fae7921MaokhM79oaUNraoH1wZhWBE7vrkvLXWqvU5EH91ECWJRGorSAQvzd",
  "key33": "58jSNqc26gdoBrGB59faxnNvkMRXbi8hDMNJCEpeMsvwZHSm8qEvRxmc9tn3sujiU111zrRvyZkfLgJgBMk963qm",
  "key34": "4BTAVEyFUmuQHNNSC9HvaSWPwhx1tGGanRLjTzmEuSQ7Fpzt8vdMGocbNGPbFm8ucJj5e61HhqQBvBfZBBVTVs47"
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
