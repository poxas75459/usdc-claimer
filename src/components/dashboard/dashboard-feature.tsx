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
    "4nuhXCQ7XgG6ra3g6ZPefV2EjN6tW5kNsEGjMMfkq5Jzr3g9FYzbRJa5rjKG8cpXQoVs2DPGzDms1SXpyHm4MEyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVdCnpHrRnPaygfyNqkP2yke6qRvSWAwBH6JdzyidU3fDCU8NPouRNQfPxTxtRruDDFd7gQAUyT1v6m5fQHtqvx",
  "key1": "2PtHWBN7jwQPD784QVFXPSyFZs838zoEdzfzjp2skv8d755ddEqQZitXv7pGXrMzVjHQkUe33D52e92A33MSoE7r",
  "key2": "5yRsZWUtqmvj8o3AXR9TYX5EZ4ZEvPiiThxpBC22y2pvwRRkZA8uHsZEwMZzYWJjxeuGEsbJyQTh7fUCbRzKdXjX",
  "key3": "6wV31kqdjxZAhU2k1iw6uaQxB6Uw8cFFpszEPMss6KFAZZPdVcFm7yrfDpxi7MFipdHSNXYP9Jk1CBSkqoY7xao",
  "key4": "3PkGJhBRsgtwSzoNGEgT4Pj2Kg6aoBj5EHvHspaG74oSkTstxtFm6Pd3YrxpPKhsvpPaxiupM5PTve6GfpidfDNd",
  "key5": "5jjZWvhtxfKfswsupom9ddk4bjLwBvC7H2p63n4RqwJ8GZxMfwwzMLZuq5E2Xg8mMgTPjMutfCDHXGpNtV2KNS78",
  "key6": "5DQSg6wvh3G1CVPuJgEiNpsPRFdcsu6ZyNBeSHcn9Riytqub4boeQaqvdTqkdGiaXPTjb2RH1TajeJYL32Xgj2u4",
  "key7": "5gG6S1dSRoEjrQhrHeutGXpgPiZtbssvzAd9ofSFLmka6coDHjbo33CAK1Gpf5ewwRTypHaBPWAHqK2SfVSitgZi",
  "key8": "QttY797Y7KcG1PNq1mBcSpA1Usj8tKvKbAu2GgQTQnNLYghH9Vr5RqPqb6YiXV31rPQ3KfhziLJJXNbKSzFz9Sk",
  "key9": "2DqCe4f8iF4nCDtG2REAxknozKrCmtKmosNYdE86kCFXoZwzygnPWpiaCttFGPCMx8tD51h9eoS6YZmAzjVKwtNs",
  "key10": "MxfD25hYEeeLxpDfGyt8ZCvQ1ivSt9VpSAL4j9Fy2DjkHts59WKNLAfc4a4QKxjKcjAaXVfhvgonimhEt6v7etq",
  "key11": "3X5G7TRA3BfUyNEgfQk93k8Q5Dh1PtpzpHG17drcw2rgxCbmJaYD4NxFYi5U67rQ3i9Akb2ePJ7Hhg1f1LGm6dFi",
  "key12": "4m4UV16bZmYSG4CGrJR4AM6WGwPDR797Gqfpu5YESTtPMF6ZfevzFYDvZSicfUH78NxsiBedeU2phDezKY1Lgjgg",
  "key13": "4BQyYyC6zWgWBeMztBJ35YZW14L1cQNxyhjueZqMxnvLJdWEcwAh5r4xPgaUrXTtJ27mW8Y8FBFMbYsubwo3hvDF",
  "key14": "2hvZFTswgeNoVqNXvJcSSjomXUAgfJB1RkUQrg9ZsyAoftckjKH78M4XbEnkJ8s6L4sFY2oQfjVzgnNGoc4uzsiG",
  "key15": "4vMD5Kr2UL74FobtQjAovBZm3HR1WuV4NWACkswHtkWtW7YNJNQLJ4Sqdwf35tp4XtRZNG5crdbMV2aLFAC6y86n",
  "key16": "2SpboBXPsraTf4JpzzTfnrWgNKcgYNWF9tBJVCAMytLy7b6NDQbGjj8UZW4aJvoDZdMr9SHjk2vF1JbCH4hAGPv8",
  "key17": "xsdMt7SrUmEwvJvJUBx39m6xBrebk6pKbPJRpqsuhJWKHyVU3mnGrzk8C4Q3U75pcpBLRhG1ijbqsFBZL5kgYPR",
  "key18": "2rT3agqhAF1Dym3evqYTPfdJSN8fJy8uTVtQzhtsRtamkCdubnndP5Y9jpjsU3NRoJSPtC3wKapXBDg3r4FV2kWS",
  "key19": "5FDSKQ5VXKcP4SFYVcMpi4LH5rk2gNUbowpkmWiuLFB3rfto4zt4ZCqLroU7JSTna8BtgvDLfzztH3XAS1NAdhW8",
  "key20": "5CvcB7xLGVYojqt7C4FN1jaD8B5L8V5FjYETCqvcytYM8oXPWCMCnZYQ3qVu11EFmC9wH4xe7pjjyoakBJ94JEzF",
  "key21": "q6V6pev5n2cLgCZnGQUUndy4nFSokQoeTYwKkVWBu4UQU13bXHxYUEVK5MWoasPo6zGU1GM8KgVoW88KP2hA9ae",
  "key22": "4A93c48UjqKp5oDZPQSXvHwKZJ689YWQiQALdawQfEnijUQrK1hZJzGpEwzWueJ9ez6LcXwySHe5LkLfnGeuCAcS",
  "key23": "3gSnW4muGGFnPjQXkc8aU777R7heoeyN43kbaF3At7zHQ4NtWnYAwkSgnjB7Nw429mGBfkR1hNjgg2ZW6jbEHKDw",
  "key24": "2E6htQVWiGbXHThzWMYXevDWunLYuJP9rocTfTVKi9o1bunEY5nB21sQNbe8WcqFopmVu6aip2MGfFWZq7vz6WPF",
  "key25": "2yhqmGMvSJ7KUf8fZ6ydHhMiNxgnDeiEx5ynLtBM6wDeiGrRgbmRZwXoLTLMMr4EWGxMxRT5cQjoGN4PKtewhhKF",
  "key26": "8iiYwW1SNztuH33G9CD57hx3n5RrV6QamRVFqnHKY1ge3y9YoNh53WAwGsN2rjEE2YyMJ8neqDYsPP8rJRUSas6",
  "key27": "5geEF5V7fRsEDJJTKyxjfoBiTkEK8nXLGZoqiCv5kMmWseRiDyxvQPvkjaLH9XgBcaaVfpjhjsh2VFXXbu47AsoN",
  "key28": "jN6f2gxNX9gYjwicWsob7t9MbLaCNVpLgKpLZnjAF9PsE93ozdtVMwt8uFC1ypEzPHyugtxz5d6hfjt5HkHsq6B",
  "key29": "27AeqQJDitKL4m3z9D9WLL4UTm1UMNgtP2k8SSmCKui7dzpYthjKHr9stHMBbvuUgQkeYmjGBBAj8pqR4bfKBWsM",
  "key30": "4BZGvD6egBgiTWdKweqpwpfNqDzykc7qGJ5bhoThmHxQCXnq2EGxVCJmfTfYohz5ExdkzzH4cYUqVXzMCRc5xAHB",
  "key31": "3CRFM49T4FmH986rM848AUyqhiHRt5ooTxRoLP3rMbNHiEDREEpmsgiz7kE73ptGYA5KPghzvQp3ELanq3kYGyg4",
  "key32": "Pn5vGv23GxgDk88CJFQRfW8PW4DFKsyJd69LJWZ93bhh5ELxg1S6dSFVmimPAxg5H59CfWVrSonb64thHDL2UsL",
  "key33": "4x2DaC8A5qeV5hMB4spQVzWgTfiYhC6Kz71Me9sB5rbPqD6iacw2xp9jdFBZW4MFroxm26Wh6E1roH3vnZ8JuRbH",
  "key34": "62tJyjB8JANC2DBVCCaauUW5UHq3goxaujXHBMCfiwB3Uc7JvkaBbH3bdKHVv6khqFvo9sVnixyPFxx8xunWL4pg",
  "key35": "BBKzVLUTbZdxdiSzHsJnD1RwUF2DnYrHQXv2yzopYFudQHyxCumapHHdJ7NqTbqg2J4JSUwBjr7rKfkBXtBeacZ",
  "key36": "5FMjXZqR7EucCxwogV3mDVQab6N5rBGfSecW2YvWz7AEh6wbK7vZbsiJbs93eFWGsZdgfDT7F5YULELJ3AdF11dp",
  "key37": "5mRxREbxRBMLY5BiWEZMBosaXct33qhd3krvifxC3eUiVFkb5QKe2nAyfemczC4Vy4nW7GpaooepXK2ayXZcG2UY"
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
