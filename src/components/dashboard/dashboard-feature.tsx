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
    "2E9P9qjvKtR31ugCV4tME2LvHDCz7gToC66MqdHCbrqbaosDMR9qVqjA6sxwjy16FW4vxqkJhZgPkYfVZEDDgp8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJh4oqJS6CTavbPBvhuUZttsCdEap2yNVbtmvi8JGK5s2oG2oU2bouLmtTv3zEuNHuvCLBDrEoJzPTKST4rModt",
  "key1": "4oCYkLyk3Pdz7EJNTadwku5XcYdaeBSncMzYJN2atrvPEfcWkQJrBSFUrrD1uVzmGXFbqbVESRTktV71TXYcJkbm",
  "key2": "2TBK2NDVKreaqxSLNbGTC72YZvgyPciS3DcPonvtfg7LMVeTAD8W8oKduM7daWduuJPGT32vnYBDA3SBDNVcXaHx",
  "key3": "XThstEsYWgFvDX7yBNB4FeR1rNYbrx8y9F18BUXgEgZJMcjned9EW11F2BhbDq7bJeGoCL5MESb4b4hBwaa6v4b",
  "key4": "4yX7fvb48ck7iutV9xRKNUjrjiz1sYKsq43En7ij8ThZd7PaYzhP4LEh1G1wQPgrJojmLujsKvVSopwWyyZMCNQy",
  "key5": "5LAQQhNEedPDana4he3Lq2TxCJkWUbwdQGj84FdnCU52Udve7wVB2r5pZxiqfJ9yjFVJcRd1Yk83juBjxRS5ZwGD",
  "key6": "wyJ7YGPi8uekjrt8rxHGtGWwF8P9caxMQE25wD4vdz6b5egkzeVWPW7F8gBZJMvDu7xx6BJfZdcB59Z78TXeius",
  "key7": "3absBWtj1ejnGPJMX51D65CZbWgCQg7Rqf8o81hUcAW3eomKr7Jvp4GzXEWdkYK4SvHNfWcGrKLXNC1feD8zSCFL",
  "key8": "4WX4M1bX1QXmfkbKGwis6G5K2jimGuXFqhJmfvNKyCxXX7zH95XkC5vXUzjMZxjTmuiHipmjxwt8VRHgLVVybbEV",
  "key9": "3Q2EJUGvNEyeRvMQJtDTB6Ls9KxngDUqch26Da5a2ZGXrMNy4GePdpEkUZ52vWYNqgkqe9zBFfwoSQT2a7K24qtK",
  "key10": "4RxUfZgw1nvHQEcXCAxWqiZ2wsjHxiqfN9Rb9mDh4o3YDxXkNa1dj69QmrPsuu5n3Q8dQFddhjKQF7yeJfEJKGVy",
  "key11": "4FMFMwVP4XZ2nzkz23GQSjoxwvupp5HDosoWHNyRDVvZ5JsFkRk22AKQBqSZW4gX7vrB62K5nWQxEnRvyGMYHQkA",
  "key12": "4uXC9KERtv1xL4EXrvH4DoFHZSzXutW3rXuzk4J36UmQznQ2EhREZZ5hF7xc1C4CGxhj4q69sbWFRC3yo3Tm9NX",
  "key13": "2Vw72FznBWJcgF7zmvwA3q8YuA6YFDK5nnVarHa1tRdzh1hSUWmThRAoZ8s5A7iznYUkV34DpkLRDzGGt3JYydYh",
  "key14": "4xZb2q8djhaoJoMc3SDjyQP8PZ9DJzyCpdZBXna7yUAmHgpTjCrWa484FCitTT8ywKzmHTbh8rpez5FhTUvmB8Ht",
  "key15": "2mzYYcbYdJD43HorF6C4NcA4RAhJQBGQVEx2FcQ3khZmVrhpc8LQQNaXY7ztj2pt6ySW2Se7biHmogS9BUmsKsFS",
  "key16": "36kxig8hV5kN2UZtWBazEDzxJrvtdxxcr6yo3LCLb9GnD4FF5ecdyTbUU93K4HTgUUSMv1i67RohoqMZgj6od8yg",
  "key17": "5LrHFKvy23PQV5WprhCNyELo4aHkNwaKYPHpnCGNU61xDyRLyXcX4WcSFCYxVGPDg86F6o8TZM95w5x2yBoG18R9",
  "key18": "QNupPj2YWimr8mfJ1MhCdyfQQmyy1JkMXTYe2H6HNnWLyvqZQmxvC6o1DQKTd985jXvXaZppnGhhV95XJwccyfD",
  "key19": "2Noiu8HwoZ9Rr7b9JbM5CDYMWG2GpN8e4BjzgbnkSPDf3DitEYTrfha83BkmpiG4HSGH3cV1mUHBdQbaPDFe7VpR",
  "key20": "2VpzwSx8dQNqZfeCYUTLMpomK9hGHHLxVFrJcG4YwB1xZpLCX8i9EZMJfxL1p41dQTKQEYvUBpEHCoEKzhbNmJbC",
  "key21": "5cNhDetVu1i44UtfEJNHFfHmHGr8YLgZLSgoiLyPZWyPJn9nHbs6cg1Q3NJhjyew6DYK45a5cEXPis13KkvhEnXj",
  "key22": "5oN2hLvNY6t9dyzm17rVQX2AuFgNX75XkmJY1VnEpyLb238njDXDxg6knCVKpFUi9CuhoXKaSKEbV1hMPqKCxXDU",
  "key23": "28VNhZm43DXaZPhSmwSwpkzcZksobZi98d7BTNJgKET79BZBCzVatAEin6GyzNRj4pKnC395JavhXmqfFa7kSdzU",
  "key24": "3ECi2EFvzjHzxqw1cyi2RKAdz2pzvDNF3vtvMuan2nrdc6DCwoSp8U7kyd2PG6KekFjazAVAVXaaB9undLyn16Z",
  "key25": "66xw6p9c37bA19kEtJ6V5fvXNQHNsnpReUH13Wbz2wGG5Q7KhVCDfjNAkFwETg4dD2d93ZdaWjKNaQY2RzuR3dqu",
  "key26": "4cnw1LD936DA9Y5qLuhT9Esa9ZRe8LhmJ167UYSPSmkmEU3i5k3AyKb3qW8r7UWCLeic4UGtkpE1rKoosXWfvZf6",
  "key27": "2Nb4e3dqGkYjFRfBWXSjVvjfQykNMU6gJ9SPwAPbzJqDTTq3E1S5LTReHQ2X3fWQbTmQLBWaTfdkq9fvWMGHucYi",
  "key28": "5XNvyNZhrp5sZVEobiTZfMwGxHfNuCJf8Y5is5zpk28Z1emsNW7NTKf7H7UqdKheBKMnJSwGy3TodsSvWPSAVBKh",
  "key29": "5UWa6kpPJYYnpr8BkS6y3vXfT7jfKk3BVyHj8tThN8uKy5mkY1ajPuTeVKm2V4Upm1AxUkAAGF5g8ZAHZbc6LNhe",
  "key30": "2UyHsqyXhbJ3d75qr9yPWhTBzS3dsKvAWFLXpEKPSwxz4sWdEcrP274Jx5TNGLqaLQNvW4oepvqt3gUXaLocsi8t",
  "key31": "q9jsi2wixN7u6EsfUGMuGtanEsiuvQFJX3gUFWST3ov4Dbra3h9AHoqUTmh9kgzRqt6T6ULZ3uxkaeCVvwzUZn9",
  "key32": "4KihkLP36m6Nrc6u5UZ9gHAeNhPLFASxkrfciRumRxQSL6Y5nUoGLbrRcFAPR8fV4GTPsUgadruv4skFAnGb8LzL",
  "key33": "5DpYGCTb9HuCdCCq5f2UoMaUEa9HhmSP3QSasBt7Y9bdgMs7ZRRMdKSfuaqydiyy3CCZUWJZnm18XEvmhGAxuMWQ",
  "key34": "4PrJoeDcw5QwmY6xE9DsgcduRvXwmimLPVnxKBZjdAkNJ3oFaNcshXf8JD9wazYECyzYKBbXSrqSMopCG5Apkc5v",
  "key35": "5kV3Kx7EzwG85gVKrdJuGY71JdZJ4zQgT3oYrwidBt5JqUNgdq1z8uzcwx1ZXRaRz5dZznqAd2KJCx4PLQAhatwr",
  "key36": "2XSEAWiWUwLUL3vBe6r5qNEwwBU1GCY9zGvxzjgBES46u1iRVXhPv6CpzMEzi7rQWaSgx9fCG2rTRb2KXiLBH71g",
  "key37": "2dhUY1Yr5tKJ5o6SeozQ7rKQQL8uwvDMivQN772jV4RJUFvBUEVZZiyBtT7PhbxfTb15mcKrArwpDbiRVgM1s9jc",
  "key38": "3kxk8AxV9HBugAJwwgsj24oJVh92vCdNmcBVttZk7v6JLtD3h1J3C2a3krVeL3xPs1zpzopkbydxL3ipD5bsvpJU",
  "key39": "9dcvHfZV37zFXAzpZSDQkJsji5o4qy7VM7dffaPKvcFfAMypSyAZ2dg9Gc5nL8QSTD2QiKapeVenDphpSntiHEp",
  "key40": "5GHPDQgm7LhWCxzAajLshndDTDDJGPAACqfynmyaCdFPDp4haL7PEPMCxwZxpb72ZmgMZrp5bYzM5AmRzjoXbKCv",
  "key41": "5LU4vnPnFSCGPo8oZsm536T79chTz2BHPHhg8FH8GZvGiVTQp6c6dD6K5AdsdvnHeTm17TxoaEWiFoZbFrfSAnRB",
  "key42": "55UcEAEvxHJYxMtFV8fpoL9t1MtLWDPGpsaMu5eA6n76YYLueNVbkw3D9AYVpw2J7DDhiJMJnE4Ywoe1Tb5Ft8cq",
  "key43": "5tfngGQEr4mJmRc4H7R2e8GDeJTdoWtCXcUeupHM9bYYEhs4bqz5m8uGt9njkCioSn7azSVxd7SgxtampfPQtJvy"
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
