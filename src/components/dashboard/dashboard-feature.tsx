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
    "2QVdQnAnoc4bk2VtRFPcCmndNDKmoon1Nm8qWmauucgFnX4MopgKULwFcRt9JmS5WdRjqv1oTWMyPEGUu6DgZ34S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yv1iAHQMx6Y1P5zo3qiZJ4SKjkqSWAanp2e5GtWCYr3EKyWLeP4qdF8qmCeL7MCf843s2rsoEmfyzTQpPeC1ZVm",
  "key1": "5ZHx4NmJYsxu6Fzng1t6JhGe7qBHrr9tgvMNeDTRKw3JaGmFJPJ1dZQqY7peSn2WWJv9wBq4FVm4yFdm2QqLNKeS",
  "key2": "3yJzHXDVi4gznQQ94guvExnGQTBu5dZJfxKsrbmQxXzBaJVxUBxouS9zxD3AWBRKCZ2XmYByf4kSDcgHXYGXHPyZ",
  "key3": "2L3BUaE5w1dNGQSRiYaZPxirm289gFKPqiwL8bEvuKFErMJjM5qaTMR6jsWZ4ZXaNXiaesPfoM93ks43dPoy9C1h",
  "key4": "3CytqT8bToSScUhfLztidEdcTYNmqhwJb3jJjTH2kf1ezGqf8VeNxmFXM1ih8tm3Sxbz2zgwBr8TJhqDLQ1ZVoJB",
  "key5": "3YNjaLnh36DzeKyzRGnfLew7mEfEiECuY8x2TJLUpibMkVgduFeC4iH8g8LPLvg6HaVv2io66jRyfGEfaEEytyXb",
  "key6": "3W3YzcoZ79Cqhsjgznw4Va5Efn9T9Z2yo5nLD5QDHAfdHvARteRgnxvMSu7yCxC9D2rMxEgifZnWMVjAU7MypeAS",
  "key7": "4HRKF8iq1UfkBDs3ZGFCSen6BcMMVidi8tC8MmQNkUgypbLek71iXfMRQkQNYgv8RhH8mR2L8f3Q983ngPoUyoHb",
  "key8": "5YYBJYLvLTsViBqaBF84qq14q27PX5BYuWDibrFGF9NQYWp1cRHRMYcGA1HwhUxFJRK3MPaZCPxJDbRwVHtA1TCB",
  "key9": "243r6SbRRMidypL7UaLcswqZ5ZPMXUQ6Krmx54GvTJhfN37PfPTU5fskjxYDazjtJesFiT25NUQw8Gke5Nfw8nK1",
  "key10": "4kViaokmUM9cELya3mARDP9H2PYAfCxp48z1dmASYDAZ2LdxWh6yL8fJUGJw7xdzKd3Dt1PiKEEk221PbKqMTnxM",
  "key11": "5v5qrEAir3KEcp6mcDJsTy7NLrCFEtHsxATQdJuF5Yu2jDWzipHJCrUSJHkFbZxgwiW78ALLsdinMxURcY9X3avW",
  "key12": "2yiuN21381LXhdUgix3NgJ4bs8Co6KkdFBLmGg1GZGjriyVhQryYi483Z6q7dqRmjyd6ERgsc8GKxeBX7MJybTA4",
  "key13": "3GRAkwk4oQ5UPok49zccAf1phMBn8xS5u983Xzzdp1oakeBFea2nizt24EAJkNqcG4jdmn1wzmWT3rySbSenEySn",
  "key14": "3DLyeCUaxJ47oi1VoLyGUTsyq4zjCHo7MguYJ7qYnCojzMF7bgTnLWCx3GzAh76ra661UEtkpFRhJqMs3v2SDe8s",
  "key15": "3DVScgA9bi2HFyMyDadPtveKxXeQji2KW5SdRJnrXrFef8xdsLUrWnRgdD4agKWXZMJYvEA83BuR4CGN9BJeuJBU",
  "key16": "5gq2iTHHkaKm8ieJXXPEtXMD1pPQbz6GVfLYC32S7DXyiY4GKB9AHi3xkM1Kvt9trJmZvz6KUdRJEZuitiG4qTUK",
  "key17": "3bLisQFdVpWFhZxWo4DXhnzbdRkFuFpmR6GT64HvxYGaZnjtt19jRHcwfurqcvYQVUuWVeD6LCocGkz7Rt4iMsEL",
  "key18": "2Tfaoip9hniRKGpnfPqTrJzZUwfjvbF96zRBAne4o8RsV2rspRyUoTfYDET8B8gAuPkyw7toMSFrjP2nvDpnbYUC",
  "key19": "2iUKWVKCJ3GAFFThya7oy7z9fzG4TdtshBQZkPJWwfHM7zHr8EkN1kA9WxfXXf3wCe4mU4ikmXwTwJqqiSWv1jLA",
  "key20": "2Pqjdhe7VsKuouWqgXHSGGpaqDZmf2TMHzbMW9WmPQoJzTrHx4cj82jH19Nn2RMazm5ZWutXtSsW86VS63dxnrAe",
  "key21": "3grx1wwdADbJhSGVG6BPbKBJxK5aWCFBFPRaFL2Sw9H6SeLD8Yf7XjAP3xbwdWvG1ywFLgtxbHLQsV3Q3qtsq4uK",
  "key22": "5hwWBThoB1RnniaBgFpY6F9uSK2vQuroWjqB4z2E16bWBarVtiD26SHauHunjN9nhadVKFhBvmdeh2sU61MnT8oF",
  "key23": "4qfReVsy1vXzMCsaeB6Z4pQykzmnD78NYAFHEzJmasEFDjvVB2r86ktRNNteaFzY8i6BawBNjMmPi485j6MsAmWD",
  "key24": "3Y1JZwNZtqXN8eH6W2tD9kCbT9ExGoVg2o8zaJZ91LkPrBoYduoxgSRsy2kpGpkuk7ZtXg2Z5VM6Cg5vkXQeH2MC",
  "key25": "44UCz7EpEUGqrhRpYqq9v3Y7eKzAYbjL6LiwnXpMZpDDgSisQ3XSnmgBdm9a5tF44iSL9eCdQm4NpLQUGcW4RAgs",
  "key26": "4PjYwzDvYWJWBs3LRpxNNYkBuSCzzZ9UPdQv1SNHTpwpo4WJ8TNux44YTMzodCnFuvsk7HT5YUcJkgzrJnMcUt9p",
  "key27": "46gpUynqDcx1iWsNHHC8ztP19RAXGjCsG3vNiaR7YEeCbNrQ53FjsjQwvN8JXPixufbtJn9GZRNNaxMB9pep5CNS"
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
