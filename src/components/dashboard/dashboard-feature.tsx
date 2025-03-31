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
    "2knvLJEUxAbsGaE1w3JozjXnSWWX1YMHFp2DQNNY2L2JW4h7tWjor3HGTSeNdQpr59xzg2qm4PKFUVHqkssXtkVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTPsW6A99TdtxF6BubxF6tUAKFwWRYacyKpUCmL2RPaMt1FYnSgQKEaJkPPYpPG8zdittvu4sWtasakpJqd63W6",
  "key1": "5iASmTFK1WhAgCp3zFZWJbWg9iiE4xJ9mGkvA8NwSAUeCtrrjxUDor7gQuJopHAikwiDypuxv9Dq2WTtwCgf98Sf",
  "key2": "5wc4u2sSfdeC76A97WRVkhhs9WwC9DSPGvAR3tWzfvz2Mv95NeMqvyECogFUJTLVQYK1XyoswR3v7JCtvj6HZLKk",
  "key3": "3MX942ryXyiZUmeb9ZX8MznRWhQywKfqfEoy24WHDCbdYGeq4yKUTKehniMyvWFEAHzWoiifBGb1K77v6g5yYodB",
  "key4": "3yv1nQKif9QzwzCrLMyS6K2Y3TEXts8WaLyfmbL8Lhcdziszehq5zVqfQsZNWRD9z1RdvVcRWAG8w4JyNmQaRay3",
  "key5": "4JkUWiNdrJRqZi3coD2vosme3swHUakXxL6hTkJghB2Aa1YUHKu8iEtfG3EuV5NyoBQhUc7rW51YMU75qenee6cF",
  "key6": "4wyZeUr4Pq32npQ6oD3ZJG1j6jkjC3EFMDqe15U8KxbAAU5Y4QgKYWcmM4oi15A8PzXpJwTFnjx3E37N5LuYzoCL",
  "key7": "4E37GxSwP8eoHNMuWgqoeFKu9VFGBWCHxKzykDXaFUCbmESi3U73Lto7eRmHbaMLy4ELMNPzs7rte6V7T69XFitY",
  "key8": "5XwTVTnPreS1Vz9cGWE9BGefBc2ZGNhQMxUBH64JiNFZdCNWH5dWDE5TbLhnBrPMadoea7QQwHApVA1DJsZLP4AH",
  "key9": "PmXNAoXkLDuZTN7yLhse5X7iow83wUYcFSTNh3eBzhzyGX7LB2LzdTXNNnKi7ZFuNErawAN3QDaRA4hKbxFYDpN",
  "key10": "59HSL6MXaPvV73tDotoXsiEc6qFNM3n7TtoYM2H8ocapwwoYCqExWNyGDvfq2faZGvXS63YWR7oH31tvHpe5SpxM",
  "key11": "5EKrShS5SpjzR7XTsKy55Rk3MqEnYEH3riMAvqfCdNbz4A9FS3HMcgMB3RawtjNaF8BVUe5Z9CtTXi9aD1pEjpTr",
  "key12": "46BFf11wNsWmYjry1WLF52KzcvrKZsSZ7ichJQ5rUj63NQpRK4eqvQghoVnQrbnMdPNhQa7YrNd6gGkXzcJc5MbP",
  "key13": "2BSfc1AgtzWr6p6JmyXKdiH4H5S1myB4Q4ybtZ8B1q2FdjJwdhp73u9mkjQccyA7AogiocYomD2krhYdr6tXt7Eb",
  "key14": "2o6Fz5qEvH64LnTnC8gd1QZiBCBvENv1rFRQQwqVhGFZnWfWoDiqS8PMDpfKuAUZwsjqkR7rrhMFF2r6tU9APNBr",
  "key15": "4osHKxcLazcpu7Qt8nahVQ7N9EHRuw6YcrJYGBzV83WN7SPvSadXLp6ehQWMgqov3UG5CiyG216gzZEtwSQx7FqT",
  "key16": "25CRQmmgZheUo2uo1B85dgd4TWR4B9jr71hA7q76mp3YMXdLshuUpSqGTbELnXEPajQgBmP7BWWoWupfvmhtcuKq",
  "key17": "bGV7ho3T4kVXSufmtMnwuoQGK8p5JpCu484UiT88kTe7gKcrYetjwmbfuSsLa1vdCQyEqBtn5HMUEVQWEof8k4f",
  "key18": "5Jf21t1K7mzvNkPHJFD5xCRHpd6P72opfhybbvxbmrFh9rad7YhPe5NscaEKc6zoHYNWVW3o3Tek1mfWoxFN8gia",
  "key19": "2NfszqA9HDp6qH39WrqDurjJXSa2v5YxXRMucDqmfNzqUmkiCctEo8e2Kyvg7vhep2NfNkX9R5kjXyVvKKt5oNfJ",
  "key20": "5zAowVK8z3fHTpcHZpQVhbjj3RK5gNmFXZEQjFrRBmbk2H161YpM5Qhzru46YzsT1K2WS3F2TYcXhES72SvRzP8s",
  "key21": "445jD1xQziwdpDoafg7NFjzMfvbsjYSYefEdmpWvUMiyYiiKJLEckiRfTifgapkPM89SFrCwbjgXkakx8wm1qEaE",
  "key22": "2fVaopgpf6FvfzhsXGSrYw2mcNh5znKZiiCB1RNeyf3zZFJZEztugFnRG2XxjAMLrmugSEGFitcRfpyn5aT6pVCh",
  "key23": "4NX5S7p5ARj9FmycSxJPW6Ka5JEx42yLrSiMy2EAb1q8qQ5H7NRZg3g5rVyx9tGTsAbhAnLmmCGeSkDJjxygmcmu",
  "key24": "PhDRppM2SoCddVUHSMWNaESrPL4YjJk8qg1m4JwMVkGZ7eP4shRSAh8RV8efQh77okqY3HSiFkAUBGAC39RL98p",
  "key25": "4BiugPxFvy7YbKa87yg8krkUiFeTjrvPLzRWVAjPRueWvjnRRotdxuHZdEbQuQmsYm95UQkQ6WfRfMZp7o6pXRYE",
  "key26": "3uPbbPG9EqHDhf6xPf2h4gvwaF7oKM2SxTwvGfuU1BBuUm5xoKAKu2wqubR4jLsk7m9RPnnoWhzxRtHUtgwKxWEE",
  "key27": "3Qvgu5kqPtZetcJR3QxoHCC7AhkjTPiW4UMvFBnSPxPG7VQJtKk9v5eAzn22sDbhPpPnHwu6DJ2R9WoQSxGHttw6",
  "key28": "2B2FKTbAraYB8JDkjd6BJnvGdsha2pZn6Tpsx8bnHUceF1UUrB547jvPBgAziDa3fxmeht6qkFE7oieH7kj4jVfT",
  "key29": "9iab5HuKqd47Mh1XzqY9GgARMFuuxazSvBqDEk8aUL7zckzVFjFis11Wi21fA7Wg2DBeeAyqwxfKGsG9EFwVdJi",
  "key30": "LbSdqC8xHMBMNquSFvAApoWmNpqYRGYk72RjcMyGKQZP7SbLxEi1wcdvdutdzMifzZqEFyTsyKu4zWvWKqcyhxJ",
  "key31": "3nf3FCWR5PiGvHpnWMPdjoRsVisubwiM62CfHLAHsjCAHj7inzzF3Ujo9j3UGo5N57SvwignLG6e6dTuqv8YBkdF",
  "key32": "29pw1rz2SHeXzQb3qZzCajrhwvutmp96dHzVT2z4VLHX2en8Bssbcv1B5hkwyoVxKM9mWvqzw4ybEGTnGb6yZiJY",
  "key33": "2gJ8dj9e3nErzjbLSGsezNxjKE3dwDYky5mf8TvG3fYLDrpZJ4sQRyGiWUcuXNfHDs1j9FrZP4CYZo6mqaoYKWDo",
  "key34": "4JjRmmrzN4ThPizz7cx748VVPqsf7Zs56q85JWZxkCwomEj2SwQ6pR8wwTGmND4e7CEHhwwDYmF7NtuHpFcRmWwg",
  "key35": "5j3gLhfEDMddV5rJAxoS4akoFvBeU9rvxYyv6TPvCPWX62xMMn7NxCLGWU2Wkfjjw12Quub4SogupdKyUuPdQVpc",
  "key36": "5otTYEb1Mw7zBwTXHSGGxto3qL1wB9254rBEmufj48ztvvQ6kQLqaRXFUjGCijEcMoMsi5a7Rs7grLQ5ju8hcbh",
  "key37": "4XpS4iVQmCnun6ZqiKRaojAW2qXPZxAer7HJFuUGNYQaAYMAmXi7VmhECoKK7atkePkPt7rprn433FjAz7tsvb47",
  "key38": "mfmxopoTCTv8QubLJYDKcfk8DpgNWECU7Hc7Z9xp6RetwiuxckNPAPHqBrffFVevXCzK6C321sUP3KjxQcCE5n5",
  "key39": "2jbbLDXxGdwmPhejdrAkbQs7SCZJg67DfAWLFGMgkhokQ4seBu4foA6ybowTGbZw3rth9K8E3yqhjiswA7mAyHKe",
  "key40": "4CMNcntSN7ZUX7q65FSboW6zh8825cTuYRxZdk67sN2a81GLJ71KXkdmjXiaJR4AM3s1bFybHP8hHtNLpYjDkEjE",
  "key41": "2wR1nwFoJeiTsoRwWfU8DoAK3e1qxEsq1fegmJcirJm3n81qam3L3C9bYPZAaHgVQRTQ7DcenKXnAb73twozKSXV",
  "key42": "5tRrSZPBEyXXRoEVSUApDv6wVkThQc6RtT8kgVhnTitBKSPJkdBy4X8gjnqsg9A2UKPzGeGHEWUZjyo9p62isex7",
  "key43": "5PV36c7u57W5WKj7hFd7vQ8JYnKnBgSgKyEw6usy1VzPsw4p1TL5WnqopL96pznXAb8P4Xe3DfZe4KsgisuEdYAz"
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
