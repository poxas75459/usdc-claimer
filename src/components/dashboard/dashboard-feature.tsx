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
    "5WCyhpdAuCBijzaR2ZucTro8NPYYyRAtrpGK8TJxA4drGZs2PN7D6oodrtoaVTMLzp17g9XKZaid1xBAWsNgvYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fM5QLNA4RvuTgc4N5Pz7MkVvYR6Low98HhLwSGE1Frb1duJaDWzxC3GD6SJ4g2PLUG3PtuzsKLhswk4LBnLGjCa",
  "key1": "5ta1qv5qiLxke8DsQoNrXtqNjxK47Mime7NLreuTjVGVz9QjJyg36HGqhDekLNDs9AUoVU9G3K7Emavi8oJbqCnE",
  "key2": "34vwU1WDda64F7NujU2MTeMdUbpc3VnCWnxV9gePrrQjMtBiQPReBXQD3hBajLyhQFe2zx7FQdaF3f8jsDVdhZyu",
  "key3": "4M7pfytqAu5NTjRwLW1aStumZZAChNaEaK7QHx8K3FQFEwfUaKwbqDqN1jERDD9rrnXHtVFZNFYqub6fF56Cji1U",
  "key4": "2e4WKAraZLQUj76bAGQUvy2DERRguTQSBjVgMQnNp58wBvtCfsnhMtQEBh5R7x9zEbkHM5o7F6biP9q5ffoLw1R7",
  "key5": "4fUyk19aVr2wY9Toyo9g9tnsdvwkLkp3WpVqX7n1qvRDQTMPRNvbH7gaytjbBW4wRaTTeiGRgN6nK8w4L8VcXD5K",
  "key6": "23AAkfrUonJnHxpgt6qyB4J6BLJ6595N5WKnhY7ufoFezQQEiEREC8PJVzKeMqgaVRPRNzXG6SzB8C8jFsqkSjDQ",
  "key7": "4PuYDswXHTe92J2BBubmZSTp1qmddHqCQ6N6bJdFrReDFsqfrHFFWttoW7e6H6JYobac3tsRcu7MT3UaMuZFGf1N",
  "key8": "47jNTWRgC3fXdyY3QrULsTZrL5vzbT68jmhK7cyURikKaV9GyFPAyhJT25vPxasFoPQU6iA4rdEKqNw82kpYXDPc",
  "key9": "2HgVnjR1TyVz8w1BSby6TmTdMRVk4je7ByzZDi8nvfbd4f6dhjjfenKZV7ZvPN1srdZcCQD25pPtXADo7dRvGRWk",
  "key10": "4yn9pTuW8Gob8dqCGv4X9zFvCbnyjkBDqB4WksRaPzvZoNNK5QbuQyvakZCBvi6YHnJpbrV7A2odkGREfPTDruWy",
  "key11": "2u5a64vQTCD9qe1VyjUqzRYrAnzzbiuPDSaCsa7wLbSCzkQMP1UygLdVQuFXZg9ukJGTivLEdyLAQfv7EKuuaHj3",
  "key12": "RonLtgYw8iXcS71BAh9A3iiepAJmyPr81ZppULf1VpzB8dfQDXU4EZcf3cCozi7h6uZGxbXoqLBEPmHxWGG5Esw",
  "key13": "55sWUXM29awKVqUSZSKkgStLCsv5t9u12yuSWbJAkLJzksVNv6CsPYtM4i46wyL5BUSSMo9zcVDmRQniAMAoHMR5",
  "key14": "5vPcaYH9m2PvNRUL4B6sgThCxDJ8Hr24zYn5wuAACUctKz7V767bT9MDshrhx9Q8XqzMaeY9Ymxf635Ti1ivjdzk",
  "key15": "ELxdWicXtuAd1NZsAdbYBZwkr12YtgvCs9X54k6YnVf28EQnLi1nqHYewqcQeeAf2Ngh5Xx5ok7bcAbZAdCYWQy",
  "key16": "5gXk375HykRJw5HBEiHFrx1u9EWrxuie1FMHtc8UyA9UGmzqVR39EQt7ojbf3FAr4z8Ks2ZE6fbpCg9d4MeQSgYR",
  "key17": "2Bc6VXyuBWXZ8cneNNMSH9CvQFJdrymXMtV3WZSp7nYFcwnu5kYwrrDuxPr7BWDHvC5uWJ3CK2bwpJuogxR4Bvwe",
  "key18": "5opeTHWhLS85ckMWi1Fy3KZ3fNjhae43kaQrgYTMHaUWpbLwhNGTx1kS6MfqmMeQJJRr1ee5CkWXVRD7Vtn5g99a",
  "key19": "5Gk128ULMCwmL1gaCD5Q6amDdiqZWASM1ynbmJyZbELdbBXTVXcfkLoWbkMrpZs9es1X66BkzCUrR2pqLKgHHkhu",
  "key20": "3iYbiaXqi3cuBtAHHvKdmHknJXo7LmjvHrAprwq4L8HpbF4kHbdNfxDxd3SmnkreaBST6Q7tmEVD8tmPRGTxPXL4",
  "key21": "2mabhcc2Yt8kscoJfSxu9nRv82ohMyYukLJDgTy7fsJhzVRya4yH7QB5oTa9n44WHP4J3NvN2DnBhyv4rHcm7jjA",
  "key22": "3JxtCqr4caTVKABrrzyhtdqdkEYdCYJRFTkiynqZCZrg1RQ2ExEpn74TmdnYWbsvz6zeYVb1fvZdStRydg6pkgFA",
  "key23": "4drjV2845tab7hQfUwDLFV6sHXsPY4jh6pbUCU48kxzH23H6R9w9HitfprhKFJA3Hq1HaZdEkwDwcQuRtFHv5yv2",
  "key24": "2h7ZzXBGx5VxQAQtmguXv3f45nTMBa1mGcFh6S99RgprUTtr6QvU34EWHdBYDt9ypdBWCkhJrXQorvBjH7XioDJZ",
  "key25": "3ccBwErHKz4t2f7n98GhL4wdmdYxSqhPxK6ofATmtMbAFXtyjXS1FLvd8JzaYxQZ3X1cZM4xnAKPxsPGKnwHiUXv",
  "key26": "5wSmHSVThgBXaKb4KFi1pUmSdKg2E4JVQ3v3jx9NFdZPi3MKdSZG6S22ncTc9GS8Fo1JrRBT5XQZ6N6PMpUczPSY",
  "key27": "3FozivxHaS1ySYWP5J3xh7wKNigp884jLKyvc8ofSt2Ufs8Jt6M1Tj6q4wF4UWzT7WYLhb6r38mro6AKyQWgt7W1",
  "key28": "4FWQBNknYccCpDP97TVCpuzLiB9bGatFmriAWqX3AA7oeit6Lpg3nRDD7NrihgavN6oLcags6tZGNLotAwp1WnyM",
  "key29": "5VXJV1ub54Hds7hHiRanwpCEk6MneaiozryY51ixLm986XdVa77oxKQtAoUWo5n5xbSpbxGyn2eJyfuXTBetFRcQ",
  "key30": "4dutVadsJL2ETTT8zh2Cqdec7vYtqgdGqUgkHwA1Xxec1tiW3w3fwRiq73XGWMTY4pTccjykG4bursEDYxtCGHSA",
  "key31": "2iJ4DedUa3Bf84E7i3Byw7w2h5uBJJsjw3AHCKWixTrtwXSSxEdoRDzQFVVzki3STzMb3sYvNtyZeZ3gRs6R7LgL",
  "key32": "5YkSnA3Q8N92rZeENPdG5oiezG2MFWPvnYY5t1JKmRtnGPEtvgs8XSJmkLA88w3aKV6Th2ro81uxrPXhNZiCBrBG",
  "key33": "kGtvNf9FYLFDTNs2XMdGB6dnsa961T7MaowVzbJDbWYwqHzQ1biiAH2WDoxcFaWuvkpGAT9cS9TuGvpenL3T3Bj",
  "key34": "57d77hEw6gBUYxhT5EebTCra1YHsvHW25i82gmQaLt5cnPnzbxhSHYuTekjhSaVPbygXxbVeePHWNqRf95xZx7qJ",
  "key35": "5SFRhvZLPN6QWewL3xN6QvXiWZtnbFuPZE7oMkuii6gHbGJQquscnRmfzDug6kyukBFnp6ag8W6ze6MBRQ23ekoS",
  "key36": "4W9S6yBTrJg8MSroLFv2g1NEJ29BpuueMmFsjASg1HoJBA3UZpaZJZ4nYkMeAYwtCx5iB7rDSLx6abN8ZNaqJarj",
  "key37": "5KH7jfqGhPNeixwvBazwYVX6sKEFWhWa5ZtH6Eybtm7nt6fqJZdWAeMQxEgqsoRs2FsdKXHCABLv9P91AmXp3rat",
  "key38": "3jBMpFZLvk1Ffre9auua9kzTXmNYXJi2EjWZkGj35JVGhzsDZUiSM5b4YTkrME9nRM7equuLEv1bQ3LyKHVqTq1x",
  "key39": "3wDCbJ2jc5LKjqDkiBs3ko8brTFZ7g4vGLCuPXEUJLLsmTJ9CP51y3VyhJQZTbmUZakt6zXsF2CEVMadAgYgYh6k",
  "key40": "2XUEWyJrUKDd96GoAzzZsRDv1h9VA45AZyPDgY5HkLzoBvHxRLdStHuQpci327N2JJMpVcX3cNLoUpv6g3SgM7r7",
  "key41": "5NKopwy5MtBi1LyZf1HQdpufdY2dycBBMjmz2E2yeFmp1fbZ7eC4V4kPdHkcWLD4AVhL2S1UCAGQrNewvnFtj6nU",
  "key42": "5YvuDpARgqESCgvsSfHoRQEzXZxaEQv72RdTcEtHhBSJQSg4jnHj6Af4A5U3ShhsBvSarFkb5warUrPjfjKk7xxM",
  "key43": "3GXua4iLKuQ5jRQLnXxu7ZuPwm6DXxCcUVbt2KHQgwaR8YC43jUyiZf3xrpoCfvmMsWnUoSxMoVey4an9f3teHGM",
  "key44": "27mHrRzfiRk4hXnTaq9dZ8VeuTJArpGGxm7S6MBzW9LBb7nB74A1ENTdUvwTqioErH5H868giSNiowpT1PHxY6A6",
  "key45": "44VHP6qdsh5y2Gnb6KDwVB76RC3QFWzrSyzZxe5ePYE9r5swsEqhMsqohejNxZq9oHR6PHhyLtPjReKbmofgvEig",
  "key46": "5onhzfrBJd4EGA4bbbZS3tsksphoXxGK52UVU8i6jymYuHyVUssukAmzwzv7roqa32eQHm9UvK3uBTVNK3qFRvpY",
  "key47": "55fzBYaz1spGSUwYbh1hvVRdqHAiPZzWN5W6u6Tj6VJuWpZh2A5YAz7hcpGwhnYJ4753eivx2HiAbGrAHZPUD27P",
  "key48": "vuo1B2JpVbK7Yjbr6TA6DJejSaCsro5QnzCqiQZRBpBsKQU9gJ6BwC3poPnV87GZtDy7YwQtCj7VoZS3fgPous3",
  "key49": "5uj7RKDcxKhhbaT3Dcth7pcoo9xeAbwt5pKnUg4rua8vzDYXYGtwtkZJ6xrjxtp3wnUNC5UAqKSc8a3fp7ftB4MX"
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
