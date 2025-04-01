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
    "yXoCuyGj3LLRQz12kkcpFMjszfzLJYJDSFUXGtaGpuTFFs5wT5de7CdYSTnRPxtcjKvQUNcR7BjZtoqP21mq7ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VjfYfjdTzzA68ky8uoxuVJUDmZhoAuKXQSKRdhaRX7uqZHd95tUHnz13o71iu5oAkrtUTkX3FBiN3EA17yUB83U",
  "key1": "5gKR2JMa7ZmACfdCXFb5nsG6xcw6SBD2TLqpSVePk6dFNxASADCDNgRZR8zwdP5GrCMKFZfj3bqNQWBS99tXiY91",
  "key2": "264DMkgEUZNrSXuAbB4BRaNAqNH3TzS9XbYaKLFKj2WDuFfayWw2tFAYe7bRHMLXv8qJBVRh8ums2XrYMqk9f6ak",
  "key3": "4GMZN4WSMu21y2x3RmJDJaJZ4f1M1hzTzkDbwZnr3G61NJZmDEFbdyUQ1RxAePsJDwG5UmVB6e5MH3MZ4FmaT2Ac",
  "key4": "2YGyVknBt9HtddFJ8Argz4hZMTjp4sDcgjFzeqJEgvoTSY6fzZjjF9j4ZzJX3ghZ4J3hpptGueo4Qn7KeRP6FJNN",
  "key5": "2uqh1nFD75qhhScH4GB45b68h8uvoM5dadcLpVmKCKiYAiEEDK3JpWiAZ72XESeZkjuMFzK6k5ubZVekWb9pr4oh",
  "key6": "2KXEyCF8Ls3DZ9YWCW47VybX3HUM7vkibAUrNn7qxuNNKadJJAz4249FsKgoupcjH177dndNKzhpcTvejSzQ19G6",
  "key7": "3FmowNvih4gGPX2NHi3UWZhGnUXemWG8qxzuNz1FMUPb8C3YAppsPNZ5xFYTUnJyEo2qZomSKLVto2RZTnyMSkjY",
  "key8": "jSc7BSAC7NpNecAecq5QHv6UzLUfhekibNabLp5utqW6Fyb9abmegNCNaFmNgcP8V35t8WAMYFRjBsuT9yRMHyT",
  "key9": "3epzZ8p5LjxcQs7eKo9XNNuaBLmVkuQKLpkhoHqrAsWCcgJRz8o5ZDjzMe3aMn8qohEjHEqwyyMRQnmKbDSiv2XT",
  "key10": "eNx9AcboWzkqdF3GvTLt3LLUetDAJGb4F64xiDkUeqHMxRSx4PgmVnEhSGBVevDCNtTxFvihrqtkMarMpEBVV8A",
  "key11": "5ohwbXCU1goCcy657BytjFFCVnm9UnBXtr5FbNUDzmpzCpoVp2n7FJo9TizJyEdanFvExfSX1BHxbfu4A3Hy8dHY",
  "key12": "4pV72SsnBPAcgxGPWxRC52GKA7vpMDPpX7hfkFXjwKPng5owBLQZUoHhmP8Qkc876mW8bd7KKMXcb2coAdHMiEU5",
  "key13": "ZrP2bo6ieDwmdMwvQg5Mm7ct35ARNCK82TJt8GVdqnJNMEUs7pvombh573Q5ygBHmvJeoG37hFqMWZaKJZVRGX5",
  "key14": "2CttcHyXYtpdHB3ZhEcxEbY63zAnUfbijgvkWrSa4hLtDetJXkeAPrDuBSD9ujh97QaUbXESCq6NBoNApkYE8Cs3",
  "key15": "3No9Yh5Z59XsyFqtYjeVKZdjV4z7hXHty9Dg1pAZtm1AwXdUjrWTEeZ2LaWd4vzdHe8CD1375eA43vutDEuYBGzk",
  "key16": "279i97aj8NUEcbKJ1AoZBurYucFK3YP5ZTsHh1ERWV1BN4PKHJVYxGtpDn5X2ZYRkMdjXEgQBzVucHrMKJkVuGEV",
  "key17": "7jw7NH2AsmyESJWAMfYtRpdJCiaZjqJPfewjaMwNkUSfmTmkXkJmdxnMDtReWXbRVWQZLFhJ126gpKoRw9qSBKT",
  "key18": "122jgVX8iyst3QyDEHjrBRq6RfoQLa3YzebCp17Cui7ToLGEzx2XeCZUR5nDJowtAdUx2ZYrTpRbhqFwh9D1gQr8",
  "key19": "3XzMZUeLoDEfYzix8CskWz5UBhoL7R5dpJwJ2hx8kTm9YYFX9CoNh7HH3QMrHwtf37QigRoe7sKv7vPgeesJd58m",
  "key20": "5Xsib4zJyHsFKakfE8gaJs7twEYZxt9jXfdHJUPbnkKRKzCJsQc6u8LjrnjthHCqNV6M1uyX8gmNmgodsM2QCXTV",
  "key21": "3PSzA8MwNNWHCEzYkuvkZDiSCjgQL3A48ezpR1peEqkdutpSMP7kx9xNQCvZdwqCDyvbZDST9zeqBg7Xe1PvmGbk",
  "key22": "2m5EXJyqDhP1chPgdKUuif8RMERBfrQR6MkKmjhHdBnoy2CLhtenJLcNFdMqHNa5Axx7ygLpyLneJ4uCFq6o3m9M",
  "key23": "5YJiyHQX1Vt2nZiAWsNHe24X2QG48fhj9CkKoVkzhp5kYCrMRZMDJjthiQMLGK7csDAd8D8nmDj6cX1zJWskhDZN",
  "key24": "51VswHJuTJvmTGofxZwqZMDrksHuQ5dJrtPggsoAzzHXjXzUDZQd8eiST8YN181YKymQDfxcLdqwZVTQg3wXFV3n",
  "key25": "3NYuCZ3KvreEDGqRBecSZacq3aGJqgpAi4nR3oRGu5wm8keSdFXSkdAmbALYTExwtpx2DXsQw6jmS9G6ufrn5Rox",
  "key26": "5WGx2KGsZJXcoMDjQTbRKFmGtM8XMyNXFxFa5GmCCiuAwut6YixmmZNqjZbV5fEU3KARaydxN3aWvhD2RaoQqdDV",
  "key27": "2qCw3b7moEskKhn3dG9XXcWeDRxJ7NnmRWiL3r7Vp6LX2UQ1P9HovHCBnRHRD1VZUAfHqHUow5D6YSmbTeLHQWKC",
  "key28": "4RKpW9ebUJ4NtPn1YNPVUdprmC3w53WVGAyjfE9kF1EzAhBVoVf5qoXuDLunBLoq6bbYEuUKUHPWCKHjSkFG6a4B",
  "key29": "2YwSvCUo7pB7h3vJmmcy8uMjP6Bs4otN1TdNapmFH4casTVRSYZSXkePt5j6rQ8jAc5guqb8Lsd5JNCbRzC8iYen",
  "key30": "3DJhc4BxEpsZ6s97nRajwehDXd8gYK2jh3QSWikSG8n3YnSj6K6R2rRUmNcf2CnJuxDaZP6f64ocMcpXJvytt185",
  "key31": "4bkNKTs9G2Rty9v9swgYWa1LBaL5uPjZVQXXXsmhseoAUUy26iABSkj1jhN4w5eovosAr4dCRKj746usf1Q6kqEu",
  "key32": "4D6V4vazV6bHLc2T6adTTFzJ216KVMYGEG2rVodnFQoL52ksgHCZHzsGyUxVbBazbPxXprDhkczpHk5GKDxEAi4V",
  "key33": "4wB1zadUm4patAGFbryxAbUrrSt4EQafSjj3P83hmHTZXQQ7aNUPo6Rm9q8hpF3rWZPxhrtyVPfYY2psNgWtVNpZ",
  "key34": "hGDhsiJMR5gYpV34jMwrDMHADbwEwne2fmdmPje8WERrEpcUgVF3PgK6ZeihFAWZTdvorviimbd3MTFzfUyqcKC",
  "key35": "5kHwHFTxiFSGjXdq8MqFHDLVJmZGGfRwZEPDXugafKuuBgphxpYiM1sU1dYkoXKRyKNeFdYTaBnfZEMofHKto1cF",
  "key36": "3fKK7vvAtV1CrK4qafKx7g9SaYT7JZWZ3MhYxZYPpw58D9ZhgpwCSWGzpSzjJzxk2uUgRBPciX52tJdjzMnkfLkh",
  "key37": "4USvumefHcjr4qggMwt4pQwwVR1zok3NCMdcLKHVN7sF1qDHyQDLDfG7L9kmG5FmpbqMzhuWC6uJogcyFcrjfinz",
  "key38": "2b9UPxkjRfsznaKWLWPg8Mxx57u4FcJHQVgkAKTGbFRbpG6rVYuisnjscujB6FhcB4byyPQMGdZWnJAv5x7iWzuc",
  "key39": "2qxyw3y2xigsxiejhZ1nWD4ZFPETi7CxanAkbf79Wk9NdQLey77DJqbKpgJ9VnhvpinbRvtTHBumpwEEsDoeVQtU",
  "key40": "5jwL5jD3SE97MH54FfSLNMXcghF3FhDLrE9334tpGszuTGBB5o9jtsMJtQeDekH2CKcwM4RK6MydkFyafNy7ZmjW",
  "key41": "5G6RcyZwsbfvGQBYqHNM5Y9tBtvtn6E5VNXczaBJQbNSJLhXnyWB1bSG5ZPsRW2DvKcG2n4idokxgrjinRa2ayaE",
  "key42": "jKBtAVvzea7wDnVffAvw3qG6HhBM3kkUy7jESdp9CFinzDp73CbsW2CAKQp2H7kW315zTL8QEAGXor7GtNXPfFk",
  "key43": "3ydzuVGEVLtnhPJpngcZMnGsscMppoKJbhxSr3csKoWqYcmDnMgMPQcGpK1Dw3HcKXRuHZuCyf6mF3MoocM9MFnb",
  "key44": "5TirL7QQ6Cqv2zZtgaXdR8XkdPrB4bV87KpYrfPcp2h9YqPV5wPXvS6PffUdG4ADnsbR8Kz1KdRHCdB3VTxm3hD7",
  "key45": "3aueebm2jQNHcAtsTtfMmcPeeo5JSCdTRS8eko2nJxU5ro69RYYdxZdto6U241wRfQPXeFTqoL6ZYsnXwxs4knLC",
  "key46": "35aXDz5urwYeJTeq1NjiuhGmbrpUUmsaetisj7BZsyKcURkhNfFXhXGcUhoaD8Yp7EvYZ45JpfFexBAJWrogafWd",
  "key47": "2Uy1LJHbAru5vgemVNTLqFrcV5zhdb46dFHDGvofytipbWZ5mvxmfUcCNgVXmMLAJXW1TMojAWtrLdVzG7W3JzaA"
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
