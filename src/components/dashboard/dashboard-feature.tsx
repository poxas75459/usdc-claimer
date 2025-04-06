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
    "66LZJ8vyZPRLAvHPsAGmf4bHNCHDyhq1VnciM4xVXvEZ34jEgLUFYrZp8iaH7TBWP2hPe3UeMM1ECXFjY8q9ANoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qvPcH6c3f3SeKFknnGYd9nVCRdM5NUksfTM9majg7buTA1q4QpjxdTwEAzWB3AJ7j1cMS4kzj9SvibR4dPyVRe",
  "key1": "q2i91w9mypxaLbfLAenHBjuppYa8Ak1yuPhFJDL7y6p9Lky9gK4wGFiyssThZ6KHqr5bzUcJPUzj8TCxBsr8fLa",
  "key2": "3BVgauFDK2ka2emnTmMMGqGsMcXKbMhk9iDkXkNDjQ8yKvhCNeFgVKnhuN71qVkKkFGQGv4gqDdFU1U6awDGmavk",
  "key3": "4r6kNAZdDKR599LWXP2h1sUsovF7WKKbU35ZUz69XtDmeq3KyaPqsRqwEoStcxgbfuAewVSuJH4XQNQzvKyAb3Sq",
  "key4": "5Ld46GGJpSw8UbmYXn7LszhHRaudbkG7uZ9K3fTenuSL88gY6rbs4sZ3C8Am7VRDwqiYX2ZujW24HiFxfwNBVkf2",
  "key5": "43TGgDGnivpoiJzy2fznVCeRSu7mFgJGaWVs1DCq1BjyD22DyCiKsmQ6t3TYCkveErn3hLdYttnzLVaHD3XC5Yp9",
  "key6": "mnhWpyGEDsK4cgAseNwEezMkmW1RRDgK3fWzF7afURAaaxBa86vNZ3AFqrSzSzMpMo3vJDqfRuUYGQreLq4t1pR",
  "key7": "598qkwxaxDoWjMikWJ4cRbHHqQ8Q1QoRyU1bmQPsLiWw3gw74mApJ5ALTnPTwjMRwYiCsxksM9S5cbsdhB2M6qzZ",
  "key8": "bEjdnr3bnJjRxoNc2gT9y8YbJNf9aYC9bPjxyLJTWqX8rd8p9uRvef9sVqJbQtGEVC8VQT8srG7FnS5uEjQbZpB",
  "key9": "4jpqUyif1PjVAgSN1GrrH9wVRjcxKStEAG45sXbj8uMozDrLoGcMoYydihv7pZJG3qUgyBLyqHKj8QZDC9yL4JBk",
  "key10": "FFLEaCG8Ei7893BjAe8h1RRLbuCo2ZCpcshgdt5ckLtw4Kz42SHg5oUphBbdn3UFHhZbhxLfVhJqVm4gWyzLHTQ",
  "key11": "3Ru42vqo6V1LCNrkGaeocnHanEYz6v1VF2WzQ3qPUBzR4KN2JZyWiU8cd6wrwkffm1pNXePsg5mDuamDQ3mBUNX5",
  "key12": "3DNa8u9Twn7NsETK4SMo2WttSrNuDu7ZRpxGs4FyvpcxEJPkBmwDxGR2pHzzyxn6X3LWf7LPRAi1dA8UAgK6JtpJ",
  "key13": "4CwvNV1UFuUbtrMq3E9No6mawESKz1yTCe32P7pZF2FyG3XfDNHfD3XVb5gnJz86S1jdkRDDkBRVxM1B5VThEPu5",
  "key14": "3nS2QH7sGPWtPUfeqYnBgyzCH7bnd4YNmSKTdAYavWefuykjfq72xpVdfs358ayKSA7AKCRJ5xieVLX4i75GmQsK",
  "key15": "35UEy2TRANE1DVFKEVgSpL6SQk7rT74nsTYB1LSfxrXPQZqachkgtRrScgiek63zpcN2P4g6Te8J2qKCkvAR9Xi7",
  "key16": "57eE3WHNV497gvxFEsE7Khcjh2PmxTMcgwwpnBS86aZKKE4L5TVhAtin4gPHWp86aykUj9DSkMjqFg6bsrJg8mwm",
  "key17": "5M1LekNGAxhJ9vzdNddJ3uVEnvf8shXcBbw4AMKearimzH6CAbLronnj6R5Co4MJqhQ2ED1gUxCMFYe8k9bex2um",
  "key18": "2iWiDEX1qGYZMRvRjmibYku4rooKoy13MNGUrfjmf6j9G9TGK4gtdKAMTigpwLfDMqkUbQ3W5z92f9sx7ZSmLEYi",
  "key19": "24NCNQuYZyVtqSBmE2rwxbQ3ZBsSCwa4Jv9cuqz4VG5akAQXZbkcGdSaFf7gMEWdyYfEKroTzBynF5rvR8avX7hc",
  "key20": "wsDFBdfsKPEqDhH2AUMp6KbpftRwXEpLE8s2SpJDBdnaymGGhhBszpuCmVddn35byX91VBrZE2crGAhT7KRwro1",
  "key21": "4op2pjFN1RJSELD5z9pGJS3TwBvrHT7UAGBBaVtx8W8qzVZMpmkaD3wiUcfBEaC49YWU46DcmHLJJWVKzhdrp1Do",
  "key22": "5eiHoJzyXFKfc4DtLFNSuuvd4t8DfWahjEBAewNLL1rmpiwRZjcMVZ6hW7NNT2tSMcT1tKvNwdpuXiWXjBaoH1Kw",
  "key23": "4ipoofYWpSv1AiwFMS95ejGwbnC2bA3opgsAeUckxGXxxNvc8yFB9Jzb6HVpwcwbQWRCviYeJ22fUmrCYzKuQDRo",
  "key24": "pvGtmwrg5qYEWNs78dwkYH46rdPx1zdniJEcWQYm9P6K5iiGnoikJSZTcw2Rq1U7PA58Y2sXhoh4dTEQrKsZmDU",
  "key25": "5XWQjiAhY3krMUvLHRUrDebdE7zFPAsFmarmyXBcdSu42JUp734Fg5axMQneUWzTq9fWc2fuHLsDc3Z1VgcUVw21",
  "key26": "497hrQ8kAPwuzTAnmQitmr1wH6P1HwFZ4H7UUmMRPh8Mh3WowKcbgcVurebMyUSamWCR7yTbhCZJnFSsQKqUrmn3",
  "key27": "3tEDYrLD5UQbrWcWkRABAZwESe74DzJWnrAkz4NxTMeEVKuK8dFtbbQkmsy7Gghf8xCMQtMQapTZWJuxcxoHHbeN",
  "key28": "5vtFbkAwywhw3nTnv53br15F7MnPeT3cFi7yopqV99UKH3P8izRM7wJYa1VGWgQ7hwfYZjp3VPLrpZsmLASTmHtN",
  "key29": "5JUmx3UA18HhzNVnNyKTq7Vj1YcHabSC8dusXA9ujYKYhAsmi7tjYyMAJzRjqdhS1Cjmeovt3XCYP1U2ZZaXrhNv",
  "key30": "4XHPgtweU751Fc6f3H9QbXvHPiJFvywq86uCKDYo9qoWmAwoRMNZxwJFWGa4vfJ9M879U7iZd67MXQjGqnYeUmQ7",
  "key31": "2sp6q16TP85eMwpUswXQxvLnPEqTtvHv9CizzgNJf8iXy4zd6cXqhbfSpD3Lk2TGNEaaL57iXDKgAfhc3CCkM4hM",
  "key32": "2JSWtY9K9jSYLBVb8giEAXLAvSLzn35miZS54cUBGke9aS2aMecU9FhATztq85THxHY1ozmePsoY5CvV95cqiaGM",
  "key33": "3Y4PrcqbxAy9d7cz5r9cHFNHtqf7Kmf8nd7eZ4gith1gPE4d9GL9ENswAo1gD35djPFKJ6AGzoMkTfrJ4EkUMsWG",
  "key34": "KoGkJRrUxVJbr2jFEdjdRSNQCqqRRz4t1YBZxYJ2gb9x97Q5Ab3qbfjR89g3EXTj5jvkrQXMym9QxAtpqbLF1Dh",
  "key35": "5ECG3ygUd3TUGDfAFJHTHvi9TQyijPmvsbgLWHD11iePP8ymc7WLJ7myzWZM2ev4KfjvoBr683BEVciqfukyUj9T",
  "key36": "3PuTo7qLRuBeEnzZiCqGniStSND6quYEx1C53w5yP5VP8sA8KXuwovZ5CoetnDPwmpvvpR2midr9ax19Wks9434t",
  "key37": "3sfT3XGf8qhYePErP28a11kHmxjCoBZrKyFPm3Emhzwv1t1qdaSWFbWUnzmExt4aRtD98Du56nJHswJ54iSnbYqf",
  "key38": "2HBk3Bp7WoVj97XKi877aGYMTLfY2imVZbjkbMf7Wi5CEfDunntvcTKHFFPnS45VHFvCqdKoKnryg1D9T8j9gcvr",
  "key39": "3qrfexGUVYjmc9PwaxobfpHT1HBusXBGjLyyffC57aYPDufZajLLDrYZeXcDATJiJZPo9HRX3zzmYhcvx58yM3nH",
  "key40": "3kUWKwZg5JP6SAr94xfappo54ijgGdnagKzDnqyva1dtVzcdQsuZ82mdDErQpaDNCJUaDgUAX2PPdKtDXs1o9ep",
  "key41": "KCPZgwmKhV43piaBHoQZXpXagwDNiUqeXi37dhC2G6rd6LcoVp7qnXUsuGSL85qUWyDZiwxuz8KiAoUxyGBSmTz"
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
