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
    "3FZRtbSZkV5vuxRVRqzkXTcmaZVofBdkqCgtGi4zm4SWDNMz82VWtPHhrkETdKibk8WWKa6XCpFMYYRvxNLypXWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTxCrfGy58mUj8Qd1qLrZFM2dkJ1Ye7n1bQCtQFaVnmFdXPWVuBomJrbsH4zhRXSvtccpwRV5SBsShoo5L61Gc5",
  "key1": "2UkE9WhW3UqfhF5rFSWbk99chEGviCwh5xMPwLytgHsUvp2YRnXMKL7s81L4VRXVA4yHEgvSN1LC6icMPoPVey6M",
  "key2": "4fMzriFL8roQFEL6HT4rZB9xA92PPrZFrFofYM7JyBJgEFCxbyUBoKRiYw1tewLZ3H12ZPkHeYxhQseWyJCNWJtA",
  "key3": "2ex92KnfHDjxaLpf472CxVj58bAsagbix6eq37JkSH18MdyzS7d3UEnnpMN7cuD4BwhyeCdMC4WBFqjUse64sgHg",
  "key4": "4sfUcrio4Hf3qg2xDUroTuQkSxXRySVwjG1Z7AHWzKvPZ5qeYCoBh54vkiAsfyL2pjFvWN7WAhM8CVgQDWBU7Uwn",
  "key5": "4TfiNg3uD9M83wzPNzCmeyxzVCLGq87X3A6na3pfJfoHkUfVGkjaLAhEgpM8skwvt9eRpC5LQEj1LmgNNq3NndXV",
  "key6": "3c3mZYu4Dtynynz93t1M1gUh4DT1xwpBigCG5A3twTPQdLuLuo924wvQv4LX1HCNXrnfNqfvyCSEzyW8TF4qRDGx",
  "key7": "2Ph79yE9sHHXJ9W6ssX3XurCrjgcB7gfK36MsXWjpNxSEniYYZrNLsGVCF4jEn2nUzJT5qgbQA2Xou8nGqpEDM55",
  "key8": "4DAoGLPCNVR5p7vTZJBNQ3DvkQQUwDzv6iFb5UZLwqSrmqDesHD5P2joMKrQyAUDQB93ZrbuQGtzDYx5cCkwYFS2",
  "key9": "5yTaNiRGRF1BNs3YojdaUGiE2FdqEsXdquUsZ6hJmo6nx7KijHAMu2d4GLKX5HWoPwzE7AHPYQoKyLFzcwYRrbhC",
  "key10": "4MHRsvt8BTAx4ppS4vgr8PP6EtWvLc9Ah2ozyS5jEiPwy3duWjxsKHpYjLrfcoxgK1Sz3k4Qgk4azLGhvhbY495X",
  "key11": "qo2T3LVKaW8YWqZxuLH1dvDjadEURg9eRXTcdq8XLLFAsjDGDyDKZ2ksjXfpuzbNVLmsafBUMXekiAfk6gTg9hT",
  "key12": "od4K9VJ8wYPXm4opbdR2SHuDof4Snz8hobqJ3mxKvZyeAk8NR5LL5jNtEaVR5HkQEhzfeueRbY6A4d1r6ZcEgE9",
  "key13": "3RfZKqP3b4byEvRAFfbZfHpymLwyU9v9yePSqPYXfbwNbNoVa9EKATdmaRyyCk46KemNGxCJRUbvFVvY3Ca83GCc",
  "key14": "H4GM29i238vR9JKbN4xfQjAy1a3GQVxfGXUk4su9s96ZdhnNm12qt977Lkxp1jdMeYdo4hsNg3WEfLsXBR4bUqN",
  "key15": "4ZXfyHgyHge4c9dxux4DevRtnbHNg6XhAuUyCBUV57EZqB9ugQtkuYVAhBG9YxxSyzqRho3ZmvSWBA9hG9xpjpJF",
  "key16": "vFzQMucMRLJbdUKUM33YrCh1aRPDFHjK3bpHw4LvyCbsEB9uW3qxq2P6YFxTAcqSYkMmiDoM4FAbsREp9jdLeZf",
  "key17": "2B55tv57RAdnpgvdcpGrZ1v4Xi6BnLzL8WrxWrBs1e9xr9CwogsFnStZHLBd5mCXwq13CCzeQeN4knFJpcZ3ksUC",
  "key18": "4EUKP9hh8EXg9m3oNZ8yEhQzDx4pUKgreP5vtjrC7gxgGgxn9tNZDF8i4ebenLmcrCakStFYZwUjZie38yCB218U",
  "key19": "5fPre7ae6uWETA9qNmk3NVjw2j6HUV3cQawHfnephck5GQMHvsnHxq6GeLWw8c9sdCR9vB5dNS3LWLYe4MUH36KP",
  "key20": "TazUrqT1rwFPmyYHCgfD5vrE6kQyjZiYE5EYpptcZL2hBZr5DkGhYAjMbxkTFdtHAzWUPZkD2WCghM3y8Djs8nr",
  "key21": "4bbvzp2ScrM81CoM3R6j3JuCwd89nstqJQNWw2XmtRpJ7W19kYzwj7WnihBbag27grPZUQZycBxPpkiBJUyiKkT2",
  "key22": "53QFxZvpRGF56Lb89kyUZ2DAeXwTJKDbvYZ3QuqrT2URdjt97dzCRZkqX5VD2No9ESugsy4sbyrMbrFM1otvZZQL",
  "key23": "2RSkSCzvGuEZAfYSpLLZdajkKsAC4nkrbM4KCMHvGGkwtBorqPdh1fKFRxTofD5PQHi7PDJnqMLsG7d622YZdDt6",
  "key24": "5rvCorSs6fgesNaoYJ7eWUrFnrU5ZQnyejUTjeBcwcmo3N4Qg2NiH6eqji3G9Bo1gxG5ySfyiwdZuYjGiNAX4oks",
  "key25": "43HeTYdHnCppTTt69AJ5YfADtwSPA4HeN9PiLbcF8mzsfRCykydhG9DP8kfNqL4dtq284UxXF8gjDbu6wz6aX41X",
  "key26": "owaxJQQdY7NZ26L9yspQ4B4N9K5HEhdW5ZYGSuF2KsCaiX7B7UzuSBe8sr1eFyWgAan7nBWSYr9Rj9CDvp4ALfY",
  "key27": "VPwdC448PUXgekzWq4ammzwfkMUXmD3pTiYQ5TaSqz5bYh5onFfeP2hTLhf8aurZ7KdghLEzwKgUuxb54JG4tse",
  "key28": "3X7TMnKeTghQwqbRVgs9hSh6hkqi153dJDqzraMBbMkza3Aa5BfBH1BV2pgR6etsfFgAqJ45GHPLrBEfHTa8aVLh",
  "key29": "2rpnNxq2newH3Feahp7bQW6jwqzHcmXp5J9RmiwDsrP86wxSZN8mzfpXQddGmTK6ZZmtZwKRWwCa6hp7agZie7uQ",
  "key30": "5i9arsRhiH8MQDs7TpVYyaECdLbphy68pykszuhBwU7tYh96hQ7XbebrxzNwdLxN7iGGR3EUNKZFRychHqqjK11R",
  "key31": "5XS4gbSraNrqhWv3PfL9bpzjgSsN8htzbn9na4eq1451AQ7USxfcbFDGhESfAKwKVwWRfopmcwjMQwdFVV9RVAZ1",
  "key32": "4Kk4gaEaL2VX1qLcV9Y4P1iyz9LFmxaWtcZUtMZLr2TcjWm3CaPxnP3tA3MF39N8aiJcpeXG6iDCUZB6AKRBn4zN",
  "key33": "4auKuzeRfpg95UffvEdDQ5E5a8hXjYt8z1Zr7pYgAwS8LUXLL9E1cpDb1A3USYbgV9TTTHQ9XjC2d6bXtdjqnvVx",
  "key34": "5F9aSKbeK7XeEV6ixd7Yzb4FofAWC9bbdoK21aepZv7uJWQMWggkm3gVvpjVXSkFrc5sYzZjm2WgRzsEC9JiuwWF",
  "key35": "53Uuco1fEyax7y3F1bkJxnLjfU8s2VtB3jw66UnC7BZfouAR2fkx5wPjKz2X7DCMHpATiHb3URKu1oXJEcL2Z7yX",
  "key36": "R9CvGV1M7GqdwarHPCemNzwPA8AcGMMGcuntui7HNKUT3AsgcM9QTThhWzr98FS5EqLsz9MQNkuChiCtPasNrvi",
  "key37": "54DGxsGUPfvLK8qVQobscAoJiisoct44aSTS9j2596WpKswinYZtzNB6G6fJZTgmFh5qwyv5CkJbQVHZfnHjTehV",
  "key38": "39cytycepchfYCosEVEMvi9oatydofDmqHuCAV8EMZJniEaGEFGV1XVeJHD9JhHfBk6Wa513QeUaNEbXXFVX4zTj",
  "key39": "3T5ZvmTt1wjR3VbAU2za5yeYST8vpSKEjcttCTQF67G5vnnaAJxdSFgnDxU2bConJsZhFk5gKFdSdDMjWA7uTDXY",
  "key40": "BkpHkRdneaJSR1coaTL2eCYq3zpzQkbBQMQqrqNVQYwEz5sfM6tXTQ3twFyAwHr6ZDEdJQeLs4XkTQpeh8ZgiAR",
  "key41": "29jVM1LcJyGzHTipUDxXgxGSve2LScFW4yi3RJkDkCForyg4xNdYhGQaUK2P7XXy5AfNQgBuFPPLnxucGw8j2yS2",
  "key42": "1MVUjxTWfoCdvzcg6Y85Lfwr9BK9mJ6wK9eT4M4RxBSTUZwenvp1hG6vSLy7PBHU8c1g6QvtJCavPT4gUDMWY1F",
  "key43": "5XxEHwuNbx9FGs6SYNfrPyCgQL4KuxF5GK45qDr1czeMCp6Bwp1wgcDHLyi9Umg25vnyVHPqrNwwdpmFLN6YTbcZ"
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
