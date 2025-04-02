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
    "2t6JxDYEqmkHcRwJ9BLmBzRZNTkgtzDbch7ofZR6avXqQRJyHGediBESXAU9wFwVZcaCEe9zX8V5cXHSHvZT6Zbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KK2FaKZqe6z3DZKthhC1nQCYih9ofCESfWfx9vkAhecQ41wkm2grhJ2eDp9pcvJF69BnJDDfGF7NeY86VUJ1wA2",
  "key1": "4FvvV4fHc642FSXKrbN5hDu9iLmtxPDGRmpN6X2VLKhp6WqPZR3KKH8VAJBFpScXipjxqUHYKDa1M94PHQptz2bS",
  "key2": "4GbZTgaAFFqUSjRsv2323o2tSuMpZhmvafxLZAuEWkphLWMqJWxZB3ZrNzAm2CvPrDuy7xyf5MR6w4a4xbDwDUUr",
  "key3": "4ZKQTGo99LXPZ9TehEid54v3fg6p7VeiXC1gA3JEQeV9ZuznQYcc5gA662RLgcwkPf1Z22BnGwK2PVGBY8eFZpnd",
  "key4": "3KU1Ly6tx6CsvoEx6vfmAJ2JFWzYCisLKsgiuQsqwHa55ZNHtMBo2rj6Tx9RuYowRf7rQAPWTCYWSRLhqx4S8b8Q",
  "key5": "DdB863yYLqLW8RnqDAJHuBMfMxkSzykt547oH7TyNrUuoBPwt7R6sB7MKEUMzxGeuC3Ciem88Ugn5yTmGXGiVi9",
  "key6": "33T5PVZxHQCSVD6EBUHMJmz668uw4Ag79iJirywKhdF29ZAj5mJivXN72pUNh28daPr6DeR17GHg7wUvMx3ijBkB",
  "key7": "2fTxA7f3aVgQ5LEqWVVB1Y9TNzr1KnE7w8dZZBDyyJCNdr8a9P3Fwb5Rku4rBXHs8azNMGHH9nSnTYCxTUQ3u253",
  "key8": "5CWZB2TjCX9y3gxpmxyQpPBUGSZiAVUdRNn9zKFNXyYysGVLfiCWU6QpYLCs1oPQehRwMnp3fuitVidYsvNjp8Du",
  "key9": "2oofkFx6jFUVBbbZaZT5jXxn5bcTDkbb9hCgHdxSbmPxjLkKEQWXJgp81m97ekCemZgPNaXVAHSD6h7BnLu5KPTx",
  "key10": "4FmrtPJFUk2Sbcq5k8LroeiM5WhuVKxMxWKyGML5wopQQkDf3rZD1EHjwXk4V1DnWTFHsKuSfUzVfTEvpkPNAkP9",
  "key11": "2tDfvrP2m2eGoLjcykqqhRvLizvyEzN1HJBmZzkcYNBKXPYgkwBgU3KjcVJXKAqE8FmfGPH2gTUH6dgsv8qL1bUK",
  "key12": "532VN9KTWY1ZbwDHpHJigdTSwWWW2cjyo88KL3UwQ9L4mavXuTeWxUjc3Mk8WZ4wEGhK7qEgyS3TTFdv9v5Yrqvv",
  "key13": "4zjkQuYCgr6bDwZ6JhQXahhjQgDpM6wSpmUY1WTJBroMjozWec1amMqsBRThGAFtpGY7d1iq1jaMLDYyZy7kGRtM",
  "key14": "5zJa8JW5Fv2sS5hqNwfjxbQWQNLo9PjdRriogVmN4FCCx7kFyk34B7F7D1LizUPvSyGQFwbuobdpNy3Y3SEQSan1",
  "key15": "5zwLfpNvjaLaHtkVJ4iviyDo9VmJxekhM5uEMr4msmRd6mukgyMg3LK4oFLzGQhh3RAWKodGTZU9X9Gu68BezhBb",
  "key16": "2x3ceVFaUfawGNM99aSPJm4ZmjEWwpKs789ehA3FKjGzgQb4zwaxnA3o4LYcATreu5Bkgs2kXZyrKnr4DaJc382z",
  "key17": "KAjEHtoE9nygewxVFb96tkeVzqhHDTqsCCKDwKsfoqzr34KYgpyKjR4zgs3DEZP98H9he85FvfB8Qka1mUFag1i",
  "key18": "4RLBKXEVnWKB26fSpPxcePmGympYBVvc5AzCsDbbKDdr6Zz6bDn9Acpyu3UuhGJd7Kcc14X9Tg28ExcbyWvXi15j",
  "key19": "48A3a9ZVToSeu5zghmjegNJa3i4qiMB64vaMCjwpt1Qo3qKXpwo1UGhnvoE8vpts85ph4iFb1CuP3HMHVvNtxxHy",
  "key20": "4KyK3cDZCbqos1VSpKd6Y2DWjLQB9nJkwbPB96XDZDrFpuwf128RADchW6haq3xjgSbirMYW6uUCGgbWdSuyzt5G",
  "key21": "2wDLVAXvza1tVg1LX1chtSJTXG6PiCxByRDPjwep2zKnvtBjqHnsUYbdeVCR5yGsKpepxe5JEE6HRXA4CUkFFKhe",
  "key22": "225MGkxWUKpFMTVVXdQxiViEqBb2SPzTNDbi4Qv2Mnvt6BJcq6WBXQD3g73BVF4gs7MhEDQpfkmcNZDGC4D4ucQ3",
  "key23": "4BMEa3EX48rundfy9azXkPWxATYBo2QaKcYHUgzUJU2ZLejFyBk17CUhsTByEJLLw8EXnVwTnM4sB5AgMQmsTVSw",
  "key24": "CwVfpm4Uq9c3JmkcL6ifrEKiR692HHBtEvtC3YM7s5mDP1jwU6DFobFnjb1fnAEDYDZFnbiGWfZmioZN7YTFUGg",
  "key25": "3gPwC8msreoYbBaRQM2ztddT6YKCG1BgcJVGWbG6r2ocyBMv7tq5hBkenTrTjtDMRZgLiWiagnTf5Ufv3vySvxGH",
  "key26": "5T171cPy3a2njNKMExDhrtVjDXZRnTEse5US4BD6ziW69j3CyUGhqoEtChgKjcY6heQbDHuMT19UQByUmoyiQRzC",
  "key27": "4csj7WFynoVHVsJk9TVZPmU7Ygxq5JLunGXjd8GKsRzrnBPYWRN1bYYXaJ5r1AyJfNRA7wR7VtuuNLPkEefkG8Eb",
  "key28": "3SWrynG11utUJtQ6XpdzfDJ8CJLXvdaaBeatERLuPt1ejdjY1V9hnkaJU6uNHeQwdPdUYE1BmKg28E33SsFAUDAq",
  "key29": "3vq3VjNfSy94qLQMV6bU9WRV9dAz8oNKnqT83YoDG14HphmVPxheRWZ8VJKQHixhnKhNbNhcaExSustPWhzobQ5w",
  "key30": "3H2teqqwbN6uz8KBapugC5sYbx5yYto8YyAuNGvVasQDLHkDy7HE4jEwuAHjEyLs8KdJGXwP9DFdFhC1qNKsG3et",
  "key31": "2HoEg3Kg2mMk2eysse2SVgqqkhcxGyh5N7kDX7gGH53MjDkkd5Hkq1YdEM8xFCx3CbFSQbYeWQZv2HAiHKTK18h3",
  "key32": "3CUNzM6arSZ1nccxmiZWkFAu9wnYL6y43uayjiP7JzC6sjr2zbiPyC3awJDPukAtmCbrNQNNvwFHic674D2H1Ggd",
  "key33": "59ovo5dBkMt5H5CbMgwnz9qriJU3QEcd7sGiDJKFSFGs2RtnxvLKiDxiascAXxfULxSTeBUfeWp9Lozj285N85GT",
  "key34": "2XC2MbkD8AJxTbYECtCXDtECyZQwbqAytdEmeinJFaeZeFx3wJzqReNGTZstjbNZwL8Kf5fjGD4DC69TBBrsrtpm",
  "key35": "5Zqey1xKpjktGNhjk2mH2CXKTYFAQm24h25cHB9vbaUfeBiUA3UNrd4Juck72mLhkjFov7NDEvZosnzpScSSxKMp",
  "key36": "61iKC9UFDhsaU2ZGhdw3DTAnXzHin1M7CQn4rPuKZ9aHNCURyZKBhQjrC4X6uHdzYvA9S9SajFN2A88ky76bhyuE",
  "key37": "z7HMYYjFYPt4XYgp8gBurwmzNbKUfnz9QKeWPGbLJn287oYLMm6Pa63YwY926eKcjsHiXeFE58j66DVbcCHDXWh",
  "key38": "2zqEULUmaiQYsPwSK2gKY4FQz3wQsuTFkk8cBfUuyB2EKCztuAd5yvkmiAg1wxtyYM6yfxDajY1mehF5ihinVy55"
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
