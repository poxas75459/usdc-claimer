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
    "2s93Y83tdEUZ487Xes4AvBgwEhCVNzP26vKB3b2bBypVRKkfGcbobnkfvWQe4Q27nP6o5kqyHwQPd3BSqM4DeQA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYQ18r4VH4SgFo8h7SBXy6JN5CxkWrWx9LLXS53XsUjtu8wGLimaninZ5Kc12MaTxGiEZScVLrrhMHSX6E6EHmv",
  "key1": "5Wb57TxMrix917s1J7hVDVt8TYcsV84RH5UYCTxhSF7oJfy64ztnoTCQmDRU5PiAyefPiS9FU8ic6HLhZwFCunM2",
  "key2": "4fHHvF69gVVj1YVfNmCKQvQKybu1FLUq9hUuFNivd3vGBynWYFvpoLKSBxYK2YoiHHFQhFASSqbQn4KXQqRm9vp6",
  "key3": "4sVSCTaMEsLDtsmg9YM5PkjZz6zgdAM5zPfoufJLsq1BEXeUxsmqNaRodYuXedRSmFRt6mw52y5QXNBMuESKbMWR",
  "key4": "5bnDw7v9Y4cAAa9o9GUfMjMyGa2fETfUzPbpMsacoVrFHqczcA8TgGMGtj4vUwfdTMESm2swoV37yed52uFpgH3U",
  "key5": "2dcJw4scuUQJ4UQKRkdheADDrWiGfmoH5EjPct1E7tnDkdowD4KaRoED3fb1qk8bqtLTu3D4eE7UCCUx4XSncU2M",
  "key6": "3ZZ3WsEgN8GM9cd7dCA7gFhvFtjymnJL9usq7xRzCsDKDT8ZELgcjs1gFTcupWDkWwTwVQjgkYsV8dGqbF1RgZgx",
  "key7": "2DYjqzgqdgg7fVRvQHwPDb2py1bn1465a14vcgpvDoLJE6efV8aatbujjvtpbDaW69sRNEVsUjyWA5CG5CAF4EKv",
  "key8": "4XdGhDMF1FQQAkCdXts7MVhQKqYYXGU9kYWoDyN3dnJZWZTMMhw2vt4VUrMVzuS9WcNgxaLMyMYs5a6CT1WySksb",
  "key9": "5kZsu5LShRd5GGD1Nd1GdPDUHFGFCakmdqmmdX58Xu6WJCFeFAu4PGec4ieQdDnKHnfu3zTFAso5rDJP8MPkoSBP",
  "key10": "2mznK7bCCZbmhEUueNav7cfCLNER1Ln2z6WFHvz3eX5VHftD2EFKau3k94GzYfyurfEJBvb45eziVYwpJHYui8W4",
  "key11": "3fCdzsDjjdkGqPLsBLbmsKTJEj2kfqvbx4VBfi9mKj14z7iXw7TXXX5WBHt7kNMbV8iD5fFyH7DRmi6nAGohBFqH",
  "key12": "5KXMxi43a43S4waSGXkQPbc68U7vbWDTYF2G2HmYdGGFTKFsEqVK8u1Ge3iGU6Vur2xvfLUyEAycNEntwESrJJwG",
  "key13": "w23bVzowKTmFzbhg5i6nYNcSUv3AAMZ4AwnWnTtjz6NmkgSGC32HHoG48UJV6C85L4JTeuq9dEGkpKF2fKgWX1w",
  "key14": "4Airyx7i6buHRnRiRAoQFfBXkQwTQBp4jvQM5UYxLihNHGABJhiWygbyCASnYLQk8ZXsphgCCMeyhbz4s2mEU7Mz",
  "key15": "Uv7fzw2iXRdjdpyWSHekFRBktKy6uMcvGGCDa474TK3YRH79YGyUUwqUgkLXmfxMH5UUDWswCexYETqLjFdEZQw",
  "key16": "KYJURrL3SpadVTxHGT9VkR2WesAUe5y1ngKYnbtTXhTQ2nS2sFBeQoMAF4yUjkVYJnoT8QY9rbP8Yd5q4WJ6r4B",
  "key17": "2zzAPHn5hfB7PBCKPKHAbR7BhX54C9ocEoESX4iDFigmoasEAum5PjKYCi73Vp8BjLkuPZwa6YM1FbVmynykW75u",
  "key18": "5z1umj67CzvQ3TJXNqoufxzuTNxZopoQTvdWQhfFCwLGr2PYbiH24YN8X8jfTGSUmuCz4kRZ9Y3NffYchoqmrxEL",
  "key19": "4UJcHvk7uHC5vQ5tLsLPRDGTr7JofxEfW5WhP4cyWicrrUhiiSCGXhm4L4zmJ1aFVJpzkQjY49egCZz7F5EqEb7",
  "key20": "4Gxjne7uKpi3MVK76bru4rGP7S9B6f1AoKdoS5Ly6UhNUJyjt4FeYQrDZ7b8asMyN5oXK99wLecgHgMDJeCboRP5",
  "key21": "2CkDqMF4NSXdrBSadrrNCc3wsV3TGpTtS433aAFkergcVSXA1C1JQ2kBTZ7uqkpU9r629dcQ1nfdMRoEdhhjMLo4",
  "key22": "4tMhNTGPeTTE4LqgqNMXXgQciMhPu9APx1CFSsRfNoU5WpLHZGHmrdYp9h69Rc7AXYSsjdhqP4JCBkvfMShGGdqC",
  "key23": "477aeSoHLNUubXfSzPTomgUg87KdBDmk72pPG9A9cTAcpkc7ZwnRr14FmuPRaEwDkaURE1gorUQU6VUMffmiRzis",
  "key24": "5ScSJvjwUaKMBd5V9YkyN3PGWdP6cobVGDdmpmfKcqV78cDwUHaym3UWezaPPHsb89g4J6Hm6G7Yfse1gm4GeNgd",
  "key25": "4getDoSvzp2e4EuV2KsuLaY6gdh2PyBVpudBftM6HmxzJAACj3eHhuDHN5ySftiFfMjK7fB5ze3HY1FYbrXcKv1G",
  "key26": "TmrGVQMke3K9kzBHt34wZVmdRvTc5m3KsXrjFHN8Apd69Q4VnRzETnk4dzieCpYGjX59Ep9SETzX7EUuzwTvR27",
  "key27": "2XsE8fAoUqxotHMdrJuKjCPSgrsrsXJi992ogH34GvzG85UCeyvDBo6vqWPcvxzBtB6RbmSSGVv2rscuG4YbArbU",
  "key28": "52CvJgW8yb2Y1B1mkNePhChzQMfzQy9iRHNJUTfbHuK47PYM8iwR8tLoLkd2Efs7t4E7mTMygytqnQvEdkBrdg2p",
  "key29": "2mRCFCpcx2vziow1KU5RG7Z1mPzts9k1nXJCoYqmJSR8WfXZmGatKwWFosb3TZQgnmSHtyw4nWqLbipZn1o89nEP",
  "key30": "ZGdWk72iFfJdLMkRvmwJHu2cGWTRsAafeYt24iEtVHuntvWM4H3o24njjTxJArdy883Rd5ChnboZH3ufDNZjeuy",
  "key31": "43qPHs2qRj9b3vkSDAXJp2S9Wb22WSB6cu2CszP5UHp6R3Gg5SAigaAMTxSNf6oF9Rmk7Fg2E5stwgEw9Ljod8db",
  "key32": "4c1fwV5ZNDh7tzNhiFsZjM1GzsYq8sUvSvWdvnca7azVn5oxzNQhR688oAPbAvThVgwGNNuWBb7AzY2UHP6KngHS",
  "key33": "2o8RtRMzyiCM7GqyCb5tE4eqmJddobTK46nRtmdVQT6eyxcMVrs7v2dDA9nHwYPWxpdkTkUfnPhbdtviRMrHbrfr",
  "key34": "4THrtb6PvexQSyZ6zcgNoYb4UT3HruS3EDjHqtACjC1QLjWt7mKkiXGkUwH2yjRHkGNa8Sg4U1HZrH8m8v2j5PCR",
  "key35": "zubhQHk5xSsGPE4mttV4Svxa2941X4jCsh2yVsahZzyywGbkEzqufVR59PSHEckv3iQ2yJXEfN9w1zaQQSS4Ccb",
  "key36": "572ZG9dSHNAGi47V6ZiRkcd7uTCBJVRsSQ7aTTM5J9FZQdU7L5wFnQodEvo3wJiaVtPVdvqHX4XmuLtk7aDNxgXb",
  "key37": "4hxa9FpSaSgevS7eUVbrfPaQMkJ7c9sXPw6TRdmWbsQFJjanHamAY1DHkrFomgHrARerijVQPGkKKsNvh1uwSP7C",
  "key38": "64ymzyCAeXsMejwEWT8untPNCk9HnxGSVA1jKLRd54gFJLpxq3bz1FXs2Du4uqL4B1mTnB9JUehxrHTKooe4etFZ",
  "key39": "oNANBjRVFxe5DdPPUufS2C7uW8s6qFqLfWdSWksZevS5GvZz3ShEz8S7ZBRMDTUjiGvCBDWK4cchQ8Fsb2qqZkK",
  "key40": "5wt37nzXrPrk52tivquw1aHsnKTSdqmBvZ9kqYxdnNTXkWiJTdc6ipVeNQe83PwKMaajFGHYzDgd2eyVC8hyWdez",
  "key41": "4Zq5CKfiJSE2LsXYSYjSSZ4BfYUSYi84BLkJWMLjvhCXFUXh6JkvDg2u2ZmFMJG4vZHkpoov9ap6Vcq4qrg7PC8X",
  "key42": "3GAFmWF2HA737oKQ2ggfkzsxaqaxydaAfu6soCM4Mh3DcM9vV9aFtNwMGXzSrUyvTgdVN41MjLFTUY2DPaoCgCna",
  "key43": "4b2cWvHmtQnhyQW3kwrJ2Z4EQ3XSYbb1YM2YL6wMFV2wedFABf77JjE1Jtwq7h29u3UvQybozR42L9NTQWvZzSTn",
  "key44": "4XESmQg7dZXrUAUSSpFktjQhNoGqqdBghhq9rkca1vvwW4kGqe3nZbimVSjR5LShL2GLEjczR78cVU9QowzazUGh",
  "key45": "NFzcroWi9X8TymXWu8URPyX44d1JNAnyHV576WjpTfzwkV4WgrF163aHHXLyGEKXAdPJNT9JUUrsYhuRWCkhcoi",
  "key46": "3XtVuTFtrcKXT4CFyzFVngS6XTdboaLAPB9pzGkKzSqGuwRBFSjAnG5zVHF88FBMKNxSmixZwYFnXDk1w8xf3MWM",
  "key47": "2ZfyRFA1mR8caEGxyFL1KCduiXeA2CSiErF2kYih2zKCaxTYFTGaki1PV4irpdKsT4yEFSAtjs1c6HKMpnJMfTRd",
  "key48": "41RVYaamGGUQbvVySZdE6YcZVY8AC4HsLzG7DU3Z6AX1CHpdNoYjvNGqSxjgByznwQdbsrCEGyv3SstwrVtVKHQt",
  "key49": "3xjTwj65X7cRbRZP5hgKgKg8S4FZQgVAmWeLufWtoBUqhxJ8SDnE2SjPn6mAeJQVL1DqZCsJabztFaaA3esbYQi3"
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
