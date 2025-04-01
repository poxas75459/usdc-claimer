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
    "559hepqubxtdSw5ffP9usvZTfD2Jd14irLHagVqB4eh55mrRj9VGU2SjsrcA7cyz5aqsPRjUbLDcikUokpg4S8YF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDxdmFDWtVRT4Wij6igJUC6zQ6Xs6sHQdn2ivRHoPRjjD5GTZGoap3JosJM8JKcYsij9P4ZYf4JdG7dH3VvMypJ",
  "key1": "376eEoetcW6G9E6SPrRMMCzE8fqRxAvXhhV4zi9AQzrwH53CQSVTcf3pS5VdMktpRAWzV8iz3HUTLt9ZshdYahrD",
  "key2": "2N7478S4vra29JWUdc1uGWbtyJgm6NGQVGB9kU3yDDXUaT2mQ2WiCT7fNhxciyPV3r5QbhR8Z1MiSrpgZajfruxR",
  "key3": "4uhYNqPbAUCydATXsoJGFeeytN8VVTdDw4GE3GHQUWrUQEMyb2tJHV4v3aeth7FkAmWZXPbZVnRBi5PAJ34TuW76",
  "key4": "4orS7Jvi4ABtcGAbjUQxE6fTbNAW5nm2AfQ7QdRKUbESsBKXzVsc1aaWk3pE1zXkW8Vw2oL5DXRRB2dVF3y25HU4",
  "key5": "2QBj9odrcFncWQyLfWwA7A8vkNBgLpM2PYJN8rTzipvS9yhbAiG3oZTRRUbUL4NZjhgcUbwTwdDrfV5fo5PUrs9B",
  "key6": "3X2kGnssF1Uw84D5yQUaZzTKLCz8ScCGUm6BqGoLCd2539CDTPoML656RzgfMUnUXY6GxumQTi3VpSLLAwVtXjwQ",
  "key7": "VxguTxKjVC9irnft5zrk9JHRV4eVVk9E7CoWWfZ4JpP4yZE8Yi8tMv1DLc9eoZv3dDf4qyqMi9BjXT6gdxWGmog",
  "key8": "4wEu6v9rZ4mhPAdwQ2nLh31XPwJuAVtkv7mzr6spZgnXk47xJp21cuipXN7ahxVgofWw9ry8CSnrhaVpdNkx3gGN",
  "key9": "28BvtNexHXpkRyz4aFKNLEYqsXakGH9Pe7cWev6xPeu8SJsvTtxd2HqNiq41CnHsq8bfWVwLpVbHXDQZQ7uThsLK",
  "key10": "E2AMyv1wkg5Bnex1owS3CYnBiriX31BdHzuVKbTjBgS93gkW6mB4fQmGuYqKQczsC6HrprWCQHYVGhswiwyusZi",
  "key11": "2ZpYxfKtA4zqZN17jKu2vNhSWQLGRkAeTx8dRQAyCtqEmqsvPP2msKsFMkzWyje8gdE99qMYGmkGY1rwn6MV49bM",
  "key12": "4nNd4YXBFwLxzxotj22DzvBLFUycP9Er6ZemZUfz5EUpBxaHEsmWrFcPHd3Jxb3ex79tFRFR79X9QLAHmsdfb7VM",
  "key13": "2oGCag3cFodpwUE2nR8VuJsND7TUKDMrkk9zXfJhKgE4DGTX6BXZUSb1GUqJdADpcapLLaWKtDFSnsfh8BE2D3dJ",
  "key14": "3imbXvptafdvxd8XKSMERcoidsuAneQAxoXGs7qimymhN36kmHwWFVvcUCecjJkpQvm8fJAubrX8Nd6JMWkSynw9",
  "key15": "UpTgxE7ux3j5DqKQJhrn3dnPWW7xLdVgowk4372XDbwMfkuYjxyhtkpyjVF6N4QhQCDCecYosCHdrQagD21p8KT",
  "key16": "3MxBKaLisGriycHsX8Re7oLkg9kg9Q9wzn66CrmwWyAYVQosQCjb4dLEgKYUf261W12AfvJfgsEp3g9q4u3bRHnb",
  "key17": "4tovshV3tUEAJurU3BnCSXmXvSBRjsg35tC6zPZgQPAQLudw3aADyCQA2Tv2TejRL4RZWn1zvweJAJ3JJj3KBZAt",
  "key18": "5SYGeLw1yoSjxbADqv7uodwrqnnC9nd9VY2qR6LzuY8kTk3kvf87pCcCSinhwNSuoJ5Mii3dKdhMbnAdnZc3wuRU",
  "key19": "4VUJtM1N5N9wH83MNSBECtNRpA3VyRCYEchG8sVzLvBv8s9DiaSk39pRTLoqVuAbL97WBmQUCxhCkSPnEWHbE595",
  "key20": "2hi8hkuSAn4d1UPzuwDn98h4L63rEMTv3Nj4CSLjtEvdBGiJiMZ8XmV6QKPWmkRSXX7jAQXVpnYdHXmWRCKDqobK",
  "key21": "58BcVbUSXrLGvWGx4iuVVSbp2wKug8KYRWUvLZZnBLpRSQ1454abxKT8uEZkisCs7ztSrE9dreDdCZDana3FHj9m",
  "key22": "3U1KMp9SNobdyZsNL7SLoXH7EF6pHSuuh9X7rgMYdJCEf1mJfwXD4iNPgUKN6YgVsZMWDegoEzt9j1SLpX3ZH9cg",
  "key23": "gySJpxhQxSgS6XNFp6rH8mTq9YeG2e1HGtEwA3g9yWdfrVPKuBdRMk2ewCzXer7nN5JXFyKxUUFiUYJstWTBSg8",
  "key24": "ihUKJBN8MpVHmYJrKq9VqPsDtkPPQ6DCokCFMUyxjGBbeNFSEuSY2JfjQFrX8oMegDbsMrJbX14FvW2W9AD95N7",
  "key25": "52nxiXjUBY8oX918dw3tqmY3ZPoJERF9Ys2eR698TbFggm7gFQGxFavhPQ5Fs6mBhwTZtt3cTGkVPhm7doaZyR9W",
  "key26": "4hroRcDQgEE22joVnkS68ivtws3mYUL9zq32AWRSdEoFJf299vSeGWkwFKmzbErRKCXHaubRK4rNKYLhryP7R7Xs",
  "key27": "5yNTmBu6J6BFuqNeTyJxSiYqiuVDxhtNcNsVe37BJyiSK3RjLRdgPSYAkqCqNFe7KtTaDcrmP8jHGZKJk4aMZpsb",
  "key28": "2sUzvVNnxkjCGpNhH8T1UdNTaZTQusPK5x4Mki1NLEx3SyRihAzmAdf6ktRdeJKfgknHRu1Ge1vV88Jqo6EPrMo2",
  "key29": "3mKqttuCRQc7pE4iThMKbEiF8zD7jyTzxqAsgKjGVfUDXnVyBpNbW3cMaGWXKnNYc3Yjqp85DT14rmrMivSdPqYi",
  "key30": "eseUoYU7TN5gYM25tUaA4qmrTvzo41w6ucG6F6A9ZgCGhBDJqWc22eq3tk9dS73uQPtYYYDsE9pPDNrUTueVnSw",
  "key31": "5g6s7Li457ZuCFRjygRkLykCpvHzDBmy4P1M34HhVUMSZx28YANz4FgLUyjsrcctnFaWZY8FSf8md1iueoiDMKbb",
  "key32": "5snkx3hKPhNyx11AcY9xqXAf2kyqcqqXGRafoaPHLmbR7Rkhw12pJAfuRtSrPTujvW4ynqqJvFcfRfGZ9NwR8kng",
  "key33": "3NBHkX96CsivnFKBK5WeNLv8qQDEfVgVMMWSbFJhhmjyBATxKuaNLXy8ShRUYXrbX9QjTM8W52LRQypypC92P3iL",
  "key34": "UVRZNdkHVmEU4QcNMtavfpdkciCc7HTfDH8qrxkp2EojgVVA6boeL7ycEgbkz9cAbbn43938QYoH9FpRqQsvu6n",
  "key35": "4RdH7voLFCCzeCm7XE4xkZTVUzgE1UKnxkgEqpgAKGYSpF4yQgAqnWNLe9Mv9gkBcgbBj6V33EE7AMMdPxBWY5hw",
  "key36": "3u22NcNz29eRfmvpe5ewWZVLXBsutaKwGHKmibUcgqJ2WvLpuN8cqsZzZACiYDbB4yaCW7Khq1sot7WQcio1bRj9"
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
