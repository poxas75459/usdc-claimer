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
    "4mxJjjoej2nFtrAo71uS9BFfYpXKLkVE3tx83Rnzjp8CtMTCo5yUMr1jc5JT6VrKqDEUjychmzMspp7Wet3Rrtxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8jE2b2p9uuCHrFLZrcgsJu1VUchs1iF536wqnHTGz8FKASxjJmLMmWVgzYAU9MHDzvyAGnzNuCRvqajZX8yeE1",
  "key1": "5kK5nhMHvPE9FtAon82eJv4HN4f62e6rrPNUR7XWs8bi6aSpocSGX7ffF8UCbkjrsy8fwSopVwmsARHYG9xRqkKc",
  "key2": "46BDvx4ibJ7auxQ5ZD6sSyXMEETg1WD9GhkGssEr5uGKJMG7HWfJauFnKbVAwSq53ri6ne8u1r1dUEwEP1uiABt9",
  "key3": "5yipnHL4q2t1Y7XTrYa4YiXWTr9DgGWrP7GxkwVyAHMprY5jUfSGgmq1bGGzhuTwLcDVsYiachz6WtqSoRHdEvDc",
  "key4": "2fu8YF78sF1u74XeT1wkX3GCBe5i3hxTwfKmHBtLvNUxrFZrg5rhCFMnos2cuLNQNuNsoY28cEBWtikwijLpx7bV",
  "key5": "ydQpSS7VbGaqKf1acvAtjA1ES47et1FLnZiZqXqKeWaPbMHFjCnSmERtpVmWGjo2EhvK7sRpT3F4gg4YJK69QcH",
  "key6": "VFAhBjqevXkmvq8fTT7mBRVMcc654L6LW6Do6nADST8gKywYMKAh2HGbtBM5aQ2R7XPjM7vZMRrTt1T6fxmNDQv",
  "key7": "3AdH1sG8LjYh6HyvBPHx1J4CjxZnoJGy9CtpBoeqvxZHDnAjX6yaaqA1Q2EfDPtDdgWWGb55MWgdMgzbBoGs6w2h",
  "key8": "5hSV9C5TtPLPjerrYbDECN6VEoRKFUzrCJvegtXMRFh7YiRuN4FEif6RXvopa5VLSNZmVpjAEk6UyvzvCYbrhZv4",
  "key9": "3avojusK8g5BQ5uRyGJNzojEqQCh33UGgJbKmvx5Pop9N9QniWwX7wQF1vo1zTg42DnxPJoJmtxZ2rhnScuow6B7",
  "key10": "iWRHXyjP8fLbCmjmya2veXyPe8Q4igNMwtcCpPJfuiJZspN8XfmibVp7JBWzku5huBv4ozueXJ73KFQafcTpi7t",
  "key11": "4zYPPqfHGTpB18hFjCafoKkFqqdHPNvZ8QjMiwVWxUgJWm5XTXev7m25NCK4wuQhSek1jdV7DveNLkbeZVh6UyGD",
  "key12": "3rS3W1yJfhVqELajoqbkUsu15dKUB5TsTY8jQUcd9u2ZfYhocLA8495uQLza9eDb7GJPU3gebLPmFmFxrSEyqaXC",
  "key13": "4RbEMa1XFdQTu8AwRRNQhabyJjZZ6JVoVywGnpbYtuzrhmAPjwMq1SkdqztqDx3Bwuy1owUVNkb6Ft5EEFoJizNb",
  "key14": "3cSBAzsC8X7p8QtVYTj2rWsxAnaEC7jkvNqesRX2JJ1C2tG5GdMv7abq7P97tR3sKmCw94HvNyko4GvoN6Q6CuAU",
  "key15": "5mvA9g6HYAHhKjCpQfhy2rEoAJvQAFthmnPeTJuzpHKiYvedTD7vfFVG74WWFMAzMgk9UAhVRvEcurM2TZW6qoVa",
  "key16": "2qyGKAZQMvzBT1CRDn4TDEdSS3n9KVAw4L3atrgdv6t7PMwAWTigKawrhfS1USwREkvbwQS7gLeJebq5Yj69mB6S",
  "key17": "2ocwrZRt8aprshgF5AULk1DiNgWrLNiBQp6p4jA6Uqk7ouADJRGuvUFzWRmJWDCKsAX5Pcvrt7cRwENwu2pGUmX7",
  "key18": "5FfiN6f4oxAXzmEqjRryikwu4xML3T7gyM9FRxMFnANVaq8TqRotzwKG6Y2ahjKd124rDK4rSAFMyW4opqRz828J",
  "key19": "3VLEGALKSHNBBZ7Kp3eVZqrQ1sQpgN4dNYfNKWyTsDjhvGepkCrLEAeNoHmNAenEsPdwUizNDhKLWMuuNvaRF8oz",
  "key20": "3zGW5f2mzVTJfWtqVYGL4ZfUaubtVArvtsENvwRP37jtzeNLGeAKRZQKkvHXAGiNFR6J8Dz6QgPCigJQAAPBSiyg",
  "key21": "4Fmz13JB7xhkNVzdqYznSrkGExqL5fMExBEfbm6ZvmTaf7uLGNwYiSL6V8wcRXYTREDuYhExqdKagiuykGHheEdp",
  "key22": "8QonKG9q7gN4sJFFFGmi1P36vg456qs8Wor8orqj5wFpu3bVK2Fdh9T97ci8FyVLrm8vdWdMobgZQGxSQhU6ULj",
  "key23": "2qzpuitXjFjsAyQ6WGQDJnhPufB3FMdEjWt8sxRLobxV8FrzX7imQs2rQCYn4XTRR9KkcxTe694zjKtZHzwg62Uv",
  "key24": "35Ch9PYRDCQFAFmNw8ar1WvdU1dWGLdNdg61mZfEchf5KHgJNADu4x4iLxHCcASXgvkUs1hvfxCZJvKYcvKiXz87",
  "key25": "4yCcs6TdVvfZ3g2LR1BxR3roKS48mAMXvMWJBHJ8RFB7qqnxEhpjybF8QJ6UUWevhZMfRwenmw75GVLf5sUpHU28",
  "key26": "3d3YRKD3uJJT1Zn1ohvyYzpYFBVZjHfKhZggxqsqEDqijR7WDja55B9FG6BxV5EAGPXjYyEHeLBbXRXaiaJzFW2f",
  "key27": "2ggKnkkycbLZ3E2qCLyckk5br68Ccg5kzHDc9VPgNoX9ZwmcUL2reoSo4qGA9AJMW1eFLV8XfEXH5cZbeVAHsKzd",
  "key28": "5mzKNVX4UXvdFv6Q4pusqC2mq8VDtmCLNCTvNCMR5iK1fKcBPzdCgyyzCJSwGjZCdxn1YRoZxcu6prekX7BhKyLd",
  "key29": "3vqnMpWRtD2fDf8bQqrCGve6aYBahSQiAf5V8Y4R1BxnN4SQeqj5F3bodkYWtMPS5CvEkHmPdKGSiGhwd3hqQRX1",
  "key30": "2QWCdoTEcpZJpjr3MW25tfiSSTha7miNbPwXA7d6jhMe9JMJWRqMQp6B24WDzxeNmnLPyj26FESFLqiEHtGfNCVd",
  "key31": "4heraUFjBzgEYNScTCy1LewwZncmXwPvSBjQXo2ttzBPLLBrrFyM9rSSF7VmAtY1wyCi5JANwr9cTpULgWa2tu78",
  "key32": "bPZjma6W2TLJq56usVtqmgLL5ZG4X8WMMfD2BbZJ1M4QqmU5pzi87Z2gv6emsmEGmMdRhhjLBd4HvC1iF4BwGY2",
  "key33": "K927wy4UBnvySiKbgNnFKVujooc57MDmukahS8QuvfZ8sFa5uX4uAvgUu1TEEpahkxbYbcMKGBXLNnNUELNfaut",
  "key34": "4ASb34P4B2EzDHUgJo3X2JhkZTRs1iXJyZsfrjvJgNNi1YUn74SksDfMrtf7918asA3zyQaw31bgK5NiNPK6RGn3",
  "key35": "2pbxXn9cBpRv3MZg2U7abMisTeA1PdYhRG4ecnxJH3iJPBSM3pDPUUbWNiGmYZFNhBFjyXTffwh1c6RTm2FLe1EL",
  "key36": "34yTseaPPT5jqUNuCJGw7KA6FnmWJU3xHZx3N2snun43ab8FNQ9kfnzzjvqRnfMBGZKReyhwVfDWqNei4uAgqRRc",
  "key37": "21X9sa4sGuktTQWR5uqHrze85cfp7MnGWuaVjbeDkToZ91No2uedwjsoRiYWm6hqmdoGsvWiGuaUS5gY8fap5QrF",
  "key38": "inUXrqbYQoTcdegrgZLU9UjDBo5MDPCaMkNTpLoQ7M4UMotL2kU4EPuTUWs9CP3Vc46jDsjZ5Gyk3Z35So7bCkZ",
  "key39": "3ysgN9vWACY5MgRAQh7r7Voo4a2wow2zJrFK33TWQKrmV5UZtBNvqX3Kh73zuQSaxLgafM8g5d1FZyHWC2J4g2FQ",
  "key40": "2UjCjMcATRys7qjPEZULkziDR4bctKDJvh35ZqrxYB3Mk6esWhF2ArzARYjpuWmehuW66K386G7W6RGnEwqoqXu3",
  "key41": "2mqEbkahPurdUThcFzkpsZfmMDXDorr3DpHKJVYzhg8YhxWBj5448K16uVqwvRMFQxKRtiPEwBEdkj9haVtgQnBu"
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
