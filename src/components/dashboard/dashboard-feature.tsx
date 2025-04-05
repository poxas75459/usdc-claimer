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
    "1dp5PgpfDZf6AfRdjyYTMWp6yzJE3rGnTicpQ5w6FLCLiHEmMzGZu6DGgKaFCwNbkMjHMCpseNSAPHJ73GPkjwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSRMRriVSiNtDVhXkYLYCMUWfaTW7MY4fXJJagdWXCWwWAj9dXXMGNCZJam4x2abx9L7GTYB5d9vNN8sNGPFhEz",
  "key1": "5YmHB57gemGqRjRZ4KjoacAu8aAhqqB3WYgztyP3Q8RfferLukGxFX1Siqjun94iasud2ZuZQATdfw4j6JrKxypT",
  "key2": "hq3fNPpgvv6tr7LyXUAcxKSf5DJ3SnKkXPmF7drxtLdBSBvKf3CvhadwWoRaxZo7LRKjmkbyA7WTZPqAFSvg3mA",
  "key3": "3TsLNyjrPYjKRNW9LM4x9QZzfw79djSEaY3XthV5Y1jvJzKXUaiYMBS6FUGwn5F4RR8SobetmtsyTisqSSnmvGVV",
  "key4": "355k9GNVQvyP81sVN6ncpiKY281zbJjkvgN5DxE4PPqgunLbigxPM9X9rttsmqNi33oxkymCsBxnQ8VZFBMG55Jk",
  "key5": "2yzU3mpKYqEdCzthciaiifGJer51SJagwm2xvryB8QRN8iqpDXKXHufm545eTK5V2AWFnxAmDLLh1XsnoRpRaTBN",
  "key6": "3oTZvpahiXNYv1vbXv8ypNHkoXK8qgD8tK46Rkg56yP9WvyUuDqKu8EoaKYGmEmpJLpd77FM6cRC5JzteHJamui5",
  "key7": "35L84qdrQttoSTxQRmJvKC22187EiFZujS3ijxXLg3qcyNkK8uBR9Ydy7eMvafDJTuxm2K8ycPt8ajjcTPCb5ZzC",
  "key8": "2WPTjPAALvgDVgLLkPjt6dWqgN71LvrMS4R92agqijWk4iUK1oDJGbDiyKqbiESKQboR7pR8G4kWcS5n5saqGExA",
  "key9": "bQvM4FscbWMcLBJ3mdBA3BkevaZqgGzeF6BEffympkK8ik9miahu3cMCCVecXNtKvAUvj3eSKJxEQtZaq9543H4",
  "key10": "4PFADEdVrjS3zRPpRjSjTgteDk4gakZu4nuxjTaPwaSghCSAhoEJpRmcpDAd9xJsadp8bZUSBdWFzzzvGsrwbBBN",
  "key11": "2ujj3XmxgLyLmMyxH6KqoQX14VYbWirAPD3UKMDgRuEdKe399SvNrMbnY8hQgMPRo47Dz7eZ1uzTwsMvoQP51NJF",
  "key12": "5PBXEcYHTow1Nx4od79e1zvuAcatw12rdPkPrDTdqQa1rvLMYBS4ALvHy4deCFq6u61ja2w4gEp9S7of9HnJnDeP",
  "key13": "3UKTgnz7dZ4Ww9c9PKU7q75AnXzMjbMP5KX8Lms8bk65Ma2bZT3bCgMbcejGdARWD1AoC75HT3sL9tqopu4azM4u",
  "key14": "59opz7yiSFBmSps4ykPhzV1nvukoEmzPWhJuJMwpE7ThqM5rr9otTTyavvSz9KMJdRmXZNp3UaQ3sW6cBX13pqeH",
  "key15": "kcJVC8YKbcgrFPfWJe6wQbzzVc3UZmvyvxsiYkxJH4xAqV36V4oVUB3L2Bs4msCCu8v3Dq9WqmnPEhWHCeiskrs",
  "key16": "NQDyek6raQ6aktxQHZub88cVE6QTcdaJRFQ6PaYEp3n5YZKWV3fDDJ2X4ee4djRAzjFh3hW8cmCZUrp8RUhBk5Q",
  "key17": "5W5tG7gBUcqA9nnWtiiXd1axXFfy3xfHWPnaGogEezySYhkuLz3NX2mMXaWZx6oCEe43LwskZkbn8hWKGkVTfGfS",
  "key18": "2Y46HPZywR8yCfcUQHhZXNMNDU9Jx74ou3YDLZ3FjCAdaxhSGyCK6zjUKUz9VLfqim76kMQZo229LmYuz329xX3a",
  "key19": "2jjLnV8p5gkgxZFvEnWnjm6BAztCPawToWCuC9apcKsyg3PTydR7Who9dxvtAuTvUDQyHP9mXofSbEBu784EZg2Q",
  "key20": "5f73dFqRRekiu2nqB3BG2rfQrjDtBne4LPm7jfWHg34XwPkgQCujjQhuDzkKDWqMxgumzpcVLTeoHgnqasoXrYw7",
  "key21": "5v4isYKNAR1PLVaD13PcuoMqF7LBUKZehYv6Q5cWfGr481sguAh1nVErSyJNybZ2YM7GTpNmX6rvU5tiVrKAhMMo",
  "key22": "5ryK98uEz3AXVXEKNyQK4TXaiGLmULoVEsE4SdxULdqRPxY4fjfAWkmLsE4KmujG1rnLD4TXX2qZfA6DtueMg8zE",
  "key23": "2BLXJc2PqF1DxDUFS4RnQaZZggNcQczceizykTVC1b4AMWr7GYQUbvAkxvU9Qf7FFUDA9PA6GEmvCMgMsQDEBiNS",
  "key24": "61TMpJn56t1pzgNLDzz9amR7mb3XNn67JUEVXfmdfCbnnc156bpEqMSU1YpKQGP4jqiTmiQPXef5JaTHxUFo8NqS",
  "key25": "2v4Mpynksajf5dVbBysa8vCnbFHy1XtfReoJfwfMMvSFMkuHLydem5nEHin3H7rwJgQyyLEbgxrw2Jb99kCm473R",
  "key26": "2cjqR1Sa6qvSpBa8wWPGEDdtojEwSCENJcbcewBmnR7ix32ob8gdAxU8u1e6sLeTikeB6eWjZZJtpkMBNUXcWrzY",
  "key27": "3uxcMHiKqfPwyFnQ6f351nQsDosRiq86i16ch1n19ZgSXPecjWhNNwyFeGAeCcuatTZCpLCFk8gKe4eBn7NQZ4sh",
  "key28": "29Nhp3KGuLs7FJBqT4nhLtEW6VPn3yKBrNuhjD1xpfGfgjLwjZHhbcpadENuU6qFpNikQTVhpe3z3qUzChUbw1s8",
  "key29": "4TwviiqytmNeQT7MJMQG4wxiyp9xdfeBRKCnFq7Hn9gPpuM4VT1d6sCrJn9YLDkGABheUiDw3VqH3fUEoqBjEwTv",
  "key30": "2butdX1Q4jzBrrpWECE5gRfPT8DAnuCcwaAXKuqKwRxbyqfnQHGeNqjP4jJ6mSgtf9zbBtrFHwPFAvLraytjk7vQ",
  "key31": "2eG1N3W2b578Xudxy6CtARAqUUUnT5jsNT17n2jCzvid8Y34CNhSEQtSD7esizXq1LgYre58o1svmbFmKxKPpzJc",
  "key32": "4HMDinqLQqvRsqiKnN1hCyXJGq6qJGncPq3nhjmjehDjDcf8z2fqGsLi9w9QKd2f2Vb2NWw7xtXN2St9fz1zCSkT",
  "key33": "52Z9VFVY6LFJXTHErv6DzbifJbQzELqaUnYfF37X6Nbepds7xB3comPpS6HLjgKE3yQHywp3Z8BaM86kkmUAngbb",
  "key34": "Fs2UYkTbnphKmNZLtuhwaMxtrs27CWCAZjNe9S1BjLJPfp4ATVe7UQ1qBf5QsHtVhY4M96SaKS2wZZSsCYMvEWt",
  "key35": "3LS67PBQSeWm6QrHh9hDJX4NziveJuXpEybZgdhKoguBc2Pd3ekNYxfskyt6KXJCY8J9XG4EWh26cvSVYZ1QjTDb",
  "key36": "4kHiye9Mm9Rs3Jevk3Jy1s9tn2dXs5fz2WYit9DxGSBs4mrtWGt8DjGvgAyXhJW6x65mUoP8tnPS5kr8k5uNcb1t",
  "key37": "dMxZrMxrJPtQL5AHRKq856rrivL2c2p4GLaJ9gKqPFhovQzSAmg9XeyZYoS1P3LBbEzApmtP5ACRQMzqS6Gfccy",
  "key38": "3xTMZwXBDk4WQuFduDCrFhyVfCFyEDFmhgjpw3ribS8ivjQTv8CXRfs195c5vw7ZvvBDUCCkRiBoHnJaFpuAaW7A",
  "key39": "2YJVsto2zU9JGN5n9FBkQoumB4ARXiRugzBBz3U2KWCiX6pjop2mPirEm1FinaeQnrkavemHQc5QCTVCxzBzL5YJ",
  "key40": "4wMTqi2hQqaTLZ4wJwN81cWQqpV7d8Su3bHxML6W2DF2dTBK4CM8xpPbN5sQ4EqaWCUXY96CWzRzHGYvoWFbN8Pu",
  "key41": "3T3JjCSjdepPAfRqTwgqvUs1x5Wf6MtsEGChRUkqXQDSQNefRPbaPuMN7HJTBfen7q9VEV4Qg453pYG2YEds9uSF",
  "key42": "5jnkT7KUdmppZg5nBUNF1Zx2Za5T9WtpRHXTndbNXhhBz9Zdw9KE8SZCtUcQ1SNuHF2sZrNJETmebHMxBspJNKGD",
  "key43": "5KGumtESjKm2bKjUUxjTP33cjpgNoZLHDeWJAqMdgtuiymNnA23zRnyxJwDRw5fcVFYwbbrB7j35Lh5QLc9S78xP",
  "key44": "e5E9UEZL8YbMZtqsMvLe1hr9mvNsVmbk175dAD42XxEK6yBimDxQPNueMJVU2x83bz295W7xyHteEPr2ximVZJR",
  "key45": "2NoqdhrJ8ufSkZfXiC2NhxhffLzPYw531LMnAysc9qikhQvi5nJFAw4LNEmjoCFrJrvL5vdE8oRNnidfY2xZQRP9",
  "key46": "4GQPbpMKCGfjE6UjXYA3waXrTkvxcsSKmDXAbGnSsXp88FJ3uPbPk8NqHUQiJAaYw1pxWvBDjsT94p3DVcBayS5S",
  "key47": "oNJzcWNbChBkh6uXopPCK7ks9whpCanGeD16oCEyKaNv2zghdyiFZzv3he1R9xBi8v2YRZki8ftU2jknVdYzzDc",
  "key48": "4Ur3qbn11NRH68ge58XbTfT7JficXJsNpMJ7zj6fe1Li2cJTp7mU7HkV8syd4HFxvJRS7VnGRcanb792KwrE9nuz"
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
