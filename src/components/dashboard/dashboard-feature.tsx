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
    "5JKyo1K9qheDjX1Y18P61KG1SK2wxmrepmMJS1ZGAKDFn8YdR9N7sBSJvsZEpVBzQqGo4yYo7T614vERSVT9xULW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ETRnDYgRadYE5VfUjdN7FtKGz3uTLnKcxeKn4FRX7iB8Tykz3GoRmws2Lyybx9DJRPd8fVUCvYFLBPsG93HwK9n",
  "key1": "5e16rZBZjWqCtQdtFAhH8Bu6J7jP5vReEYx5jjCmLrgufN4uvkRkgehKCbibzMdYLXLKHxuXmE2QyGAufHB11pmS",
  "key2": "3ZxhHgEYnbm8Qsfs9AvGYTUiXvTSQuNqmLTEGTY6BNGYQGWGxXu6CBcELNWsPjhMd8a6zYnGTK6hYbQSHLjCB64A",
  "key3": "3MGzJGhfcYC3nMV2KfNaAH98myJZXHpRydWtdJ2c1aVajMkPoY98gc1QnYtaNwLZFvQaugsMJWAiVttnW4ZgcAcC",
  "key4": "28FD76RGjYQjuwXx826VN8vR6SftbNCpiVgHB7dDAjBsTm5UD591G81CBSfKdkzEnbitc5cF3dCtiXNvtMt5Zmco",
  "key5": "4r2g5Dx8oB4JvTJDyXeFCh1dU33KHQrm8bqJ7xh15ByVi66FuYccFZ46DSrkgFDkRg9k38Nt8Qn4iPcdfD132c8A",
  "key6": "ff6eAT8ZDvmCeTg9o9T2Yk5uazh1isyqwVoR569Yr97V9kgzz3RTBrUMYU1iXkVxyqvj69JCMxsZA1kVAJqsvRf",
  "key7": "5UFFFHH5PnUrpAX8Vp4TX9d6eKQcAJusoEDWSrFoNZj7vLpZYvJBrMiMMniyY91hoECVguGan9Yq3M4JqgtZWeE5",
  "key8": "5J73kS6mpbdK6gyzrELySNEm6Z2U4YoLx8LDJWYXTEZ8dJyWSmN2F5SY2ABEsYonkyQVPSyVj45xVr3z64pbwvLR",
  "key9": "2dTWNJeyMmWkLDHTPQVtiEeXxDVvJ6165u9VBGAhxD37fCWYjQAYein3T45iP6LVyr12uEEcmfpaGNWioGjqCgnT",
  "key10": "2PFJKXdyRJHAmLtrqHVKCa5vo1mxomQwgktWZxEDZF97psR6eJ2AihZK7gRf18aodgDD3WDLWbEZyEgRABaqM2qF",
  "key11": "3wVK1VsT3UeNywEq8oWFMUPUJwndK4jjwZGTG4KMbWac3kfzotAH1ZfZgHhdXKRYkB4Qm9KMBTY9M3r3VfYEbbjH",
  "key12": "66QysYhkJSYVkwyjFK37EfR2EWNC4g69FKkYbymwYi5zqHFaN8fBXCHCVjZkHVshY8mGrhzCNoadHawFj6JaSX3B",
  "key13": "iyxunnXTgn9m6LTLMDFaJk7bw31ZoMZJvcQ538z7zs6gSnsuTHZkHUq4MRZPF85M7hyDfhgcp8QPuakhHpbj5rE",
  "key14": "2dQc2QWwcrpVsR9jn77Ca5mbCftf3rXfVWqNKmyFdFn9oyPoXw2MNN3ernofGYXatq6cXE3R1DDEMDKmxvyCpfD6",
  "key15": "5cwwwUMbN6bUBcKd2a72XrscFG6aiATTejnbLCYPuyESNw51U7jRQLn2jc37UiRRTEvweG44sTDkgeLeTtpmGHzj",
  "key16": "65Sd2QkvnF3Cv9KMf6CTVGdnvEaw1HJexECiBa2fovFZP4w4nzqbkFcW6Vr2LQBM152owjgxEAR84ai9Jie8nPNM",
  "key17": "irg3NSCUP1cRVHuKAAYoDkksLXPHZsx2ttE83FNJpCcFVcRUTdvJaq719m6RHhwy3MEMRZ3J5QDtVwHJDGpSxkh",
  "key18": "3AqqrFwE11DLW5HjKPng7ZqvXmRyU2wqkpv1PneHwSMPpa4DwEyTYFT9qYh484paiJrTfc73uD3MWSc6ry2axTne",
  "key19": "5q5cG8id1R2CVuqoMDgPfWUY48wsSSHMG54cYZ2VikACW6SdR54iTbzsoTD6cKL5mysiMtJW2wXYAJriAq93SsqT",
  "key20": "42gtJpD62Xz8FKCudaKm32B265zhS2jumbtmPwBCUK5JuYU8uHr6EoRg7gty9h633uAK9F7SSa9kFik4rgs3Gfoy",
  "key21": "3MxdaVuCPaxYqwWACGFr2EjdpNBrqvjrjyxB8myM2fGnzCuVEvBzJ6vQreKB9X4iHXQgeZwAfCjTsBLaeHgHmoXc",
  "key22": "5N146s16hAwrZ4CZ1XgtwPRoTc3nB3EastQVbWwiqxLsF56eN74Wx6D8LPeACNkciQe6ke2ghC3uwdQ5VyYGs7dq",
  "key23": "2Nrbfi7ns9bCN1N22qvhFrTCSzS5TjqFuGvEniecT2TaBBEmmi47a7SRiYc9Se6uiB38NME1Uyyju4zEmMfyyYtz",
  "key24": "5gEjqgKXXeWiZ6HNAr7VZVd8Y71S6vbjA3xJZzvDR4gjzbte7LdSqsgpf36PHbjRwb6nC6nn7e3gUhaHCLrgC63G",
  "key25": "3LUssrXhHizQZ3RREZpEyuzhPbmbpHvHbDBdKbHQ4dHHrmLRBnjBTyXQnBHwEermcaNtAuuWdAf89jJDTYWv5ep2",
  "key26": "4j8XwPm1DPq9zioV6dM6SRaYvwwfdgP3aCRZovyLcFoK94cezRoazUyrS7MPF91pntg1mHQnnRnU7deKfYSbxJJC",
  "key27": "578tcbkxASQsbD6gmpH18P2DVe2aLUguJg16ASbdNUWuNwsWDc7NKWyyhaG4coEYYuXGx1JcwQG11zZs6eYyirA9",
  "key28": "3QVnZRVJ2ynSZrMZDPsz8vyDn3BDCmUao68jqoxFcvHZNXjwSVgNsasKwjutDT6ihM352YmauXSNpL31bzB8MXs8",
  "key29": "3whQ6mBwVqFondNNT5pWgZsLtyK69AW8ojRjay49G9Zm9zZ9r4XdHYb67WgweYEqXrVcgdpczmTJHQVbH7Q3Rprp",
  "key30": "pLg1nkAPSXoQXNRTXZmBd5i1qYrivqLfhDgKiQDaivC5WRgzUw4DWbG8EXpv2PKDWcy2tzVf2ePcvqcqJk1Yhxq",
  "key31": "3Rt72L7hrseJqhVpNB2V28k4uDiJtXehJxWJTw17hBT2jsNFrn8iXy1QbTrbJTKspnFAY2MCeV39Y6rtBGsd4edA",
  "key32": "3dsW2PxLqxApyGHmiBEj3eASMNjGjaBQccstBS4wLWt6m7F9D91qa2KcaAaN2ajLuPbrbhqanR7bVAqMwJw1yJFD",
  "key33": "33CJMGdXTbYMvNPkzySzko5YpyDQ4faJth74DP3GH1f27CSq5tCHVsaJkmEWfY7AtyStysdPQFmD1VNpuoH1zi69",
  "key34": "5rXnUcwXrVzJn92Twmm8AnBqckRbmTGtVnAWroktK985jH1sYqmpxpMfsfT6TxcpxL5r3g8ebcCLqu94dcN9ruJX",
  "key35": "3kyUdQnzQKKkqa9TYTnueYy1rSHQdx4zbF9Hf9VieiZESazJAn9qhuRwrYwDYDTkeRzWv2NQGMMmsbp7SssG7YGV",
  "key36": "2tyVt4xuRXNsPjuqJ3czwUKRc5VfBHff8i1Ezey8U7X5iDbEvPEw8Pmwm4hX1FyRKLuDpsPjhdeMKAHZg1KRDVCM",
  "key37": "44KDk1L5wvaQk9Tu4zM9CTnZApDt7rR5PnPY9n3UqLUaA2bs3Ppw3Z7oeJZu96uMtcHR4G4Dk2JZH873ERiQAAU9",
  "key38": "4REQ9cFux1HYLte9oyvZEtaXDZqgApqL1TiyHUfqjq1SCs1err497Hh3Ghwq8nrMVJcdr1tAe5vZUZRj39B4bgxw",
  "key39": "4GM83nQEAVFPenBAE5cJBxZBEfHWTATAW6prRuSKeN6Qr1GJx6f4XhhPsqmQoUscPhVKRB931rxHtNMYjm2SkRqw",
  "key40": "54b64oTTDUMm5vJSrHZZyctbBxNUEfhvPPZsMdPdrBaAaW9dWd2nybzcn3z6AAuJ64mVd3MozcugKtNp9syWyJ9d",
  "key41": "4nU59VDgbDdMmQSQyCuqGVEv6o9y2gtpnNjNtBwtnjLLatEzgfusv9Rfm99NDwssDC1GT3cTv7hH4R5N6Hj823wY",
  "key42": "2vJ7ADTmkrw1cQdPQm4m6ZEWBNpeeWkH84TeEgJCVuhr2ZF2YqfTpkvGhF57FdgSbta3qfW1VYFAmP4gme2yUoAi",
  "key43": "2K6V6HBdLHAT6qMW5D6jmUcuMwqiQisQASRp7hWbEmHfymj8gM3mp26jfyonMPQEaha6qwHBuexUzv59Xdotv9SV",
  "key44": "3wdQjZEQbmyep9PQ2PsfHxxmmUy6BstBVQsVrsoeiDtShdCneqZtpGKWZoSsHP7SsEEnbiGotppEKEhvbBQkRdzm"
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
