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
    "3hb3qUTvwcH25FbESWJinDJRXTJTydPVrfH7RNZSPFNrJD7FMQqtR3jTFR8fCBnpgnarzRksx6rZte1uXhFjVfSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28u6sKkZDeggBb9BkXz2cBy27gvyYj4WykW6Qnt1Ze9iYWySDHcUL7gRUvJU6yToYwsW8MYFsyCiMMWWok7umpWu",
  "key1": "5EyFVo3smTbsi5sPJM36z3Qk8A6VZEC23R6yeheKsRSQe5F1nigWx8B5mX23PGUkTY4VYYYgmDjCEuGU4njk3Lfs",
  "key2": "55t5dfapdY4Vjm33N3yC3D5AZ45C71eANDS5UKNVeDtBp8H1dZHdv1tDpT7qBxzbydEwXvNRqMXoxuMcQrtmL2ng",
  "key3": "4JdGS1BVwNQJ1ZgNyM56BwP2n31tRpf8n968o31kmrCpgmKje6vgnrYkuqhnmw5NkzMbsM6GxQYsni5vsokECpxe",
  "key4": "VJ2dufYyVpqC2F4xHJ4T8gwgozqNw55kWu8wXB4MD9GTExNNzMKmSqwhs2FoqEzrYaP6pMjMgUkutTHBZyUytC1",
  "key5": "3G6QyePy6L3YzGdh3Shk8EyqctTXpqQMymppWT2QvPfdgYmq1YgvjyFdrbaar8RfpFgJAaJce65SE7D39MJYLRWd",
  "key6": "5Q2rkNT1v6MxA9ZFFj334jDYPzXarzskXTpmTE8SXYrds2iP5rAEB9T6a69vjAnk57zCbUfZuWnaZgLD8qrhDnda",
  "key7": "o1Cs39ctdhuY4aKyE6ELcibEPsjzPdNy16KNdHz17wiVWuDY8vKCNtMaoBYvxadsWayb6s3naKE8Av9tVp9Lbc7",
  "key8": "42GuaFpAhCJ7fyyE1tZf4dcvtFFio8WvFEeA1G6QfEbajVR1j4fNQqZ3C35BT8ZLKykwvoD7E1Gki7GXSenPawy7",
  "key9": "2ffZiFEqPwhE4sFZvJoLqBAWTG5MwEiE7VBftXHoJDhm7gRwjAvueRjx72stKnUm8WacRP2qEQe37XvpASAy5fnL",
  "key10": "31errd8znBKomCxYcpfhFtyRtDwJ87wbqpEG82sYZF1PErtLxcuXT2GpcbZuNGcfij3LwaXDorC8qSDQq9xmhJPf",
  "key11": "4cgpnimFVx1zGzmvyozpQRu6b4pMCrWTnmVVbGPsncND8GzQdA65ccRk1QE4daHwJc1CWpCKzv7hs6TPiYwzQBW6",
  "key12": "63x2ixqNPb8zRwUMS88gu5RSKRdc4SVzntKqCtJQm4NY97qoiFGeKy7GqdaXysaSsWW9eX36rEwXAWJj8MahM8ki",
  "key13": "2MY2qFbNuRwrxTDUHc6B139M7YdnK7dv52XZMrmRnhqw6gj1GdYQFF1J6mUvP1TP4x7maq8CkANjQnGP6FUBCsFA",
  "key14": "4MRCofs6bKHA18bwRUtWzqAiW88nS6hmsnMjKcwSYYH7vmmw4gjzhsmhoYBx3YdcVkuyFgXLVeCxeKq3Yug8tB1f",
  "key15": "4Hvp5e4DH8CmnwYLt2bvd5Pdmaid29u2otKnznK8o8ZphCCCXJGQPMGBckBd4CafnpL9fr6kuzVdVhx4PW3Q3G7s",
  "key16": "3bW9jZMBFrULdcqgPvmujKVqyK5MEvrskoDkipVpUhVDfenCnPe46gbfbysptCLE2YE1mK7g4otCow4Kqt2T9DGQ",
  "key17": "4frkmTCJgj7Hfd9Qt8QwpkNeJtvF1foqk3FVaZ9BHvcntfRYjJN9gecJ9JHFJWDqHiWJpgfjaRXNhdCnupfdjtTT",
  "key18": "5M1FJTXk9pejRGvmLDcVJLdHBApeNxh9LqMdfxXSNPrhX1b1yQaWLUopM8RdUwRrTeMwXnrABfSNGvDtp46sFSmW",
  "key19": "2s9KeKp2XsJfYErX2XC4qtKr1Dx389d9SoqcVWF2eVMekmBM6fYZQmjDEaCwXFZxFW3hVam8ypQs8u4hhSb61hx2",
  "key20": "2zvnKUChGAcAoWJpS3wx4mgvLqsnT3nmhci4J1kR9QDJ2QCNtkDjSSMqRs7j7EXmh98aX4CbhY7vnNCkhWfEw4x4",
  "key21": "4RjYD4Na3vM6rWBRWE58sEhuj8ozN2Rmh9kfLNM9erE8ezFpzfBu78yHBdih7djJxVBQ7Yn41GmziKwFjcNQ9rir",
  "key22": "5NvEnkaTibBezeaCeDvpVqDDH7AhqFA9Za93VrsxeRKsrfiWkzy95gMJhhtrEqtozdGVcw6SzvTc76sJpijg9bNZ",
  "key23": "3GCC9SFduHupJfS41uFFRq9HofPKKXbXa2sR7zXFnbGPB6kZ7sTs5eFpwDhXJha6UckqvxJkNJK62cYMAakox4J4",
  "key24": "3EYtbNdiqXtY9L6N5x4N9sbDWF9XVTVTuuDkLnJGtUnW8htfGRJhPugV3HXVpu3aNrWfoMCCtSqdPkkKnKBDb1LR",
  "key25": "3xUK8jYwfo6c9iN6bbkZYFP7v6TCigfrfo4ky7QxzoDA4F2HH67CeCzb2bJyvCMR5x8pHfvY1eqXphUmg6byrsQs",
  "key26": "2jxXLyuLJ8pCApSVyv5YF7mEydPBuk9huAB9sPRgHxejLiG9sHwNRYUdBK3VtGVtf4VTzq6Ph2JwfQggE1p1QXgT",
  "key27": "2QzWWwPbj85VYMXbAkGHCPaXWV7H2qJEM1KqKtHu4Ug3BRWodTvrFNPHpw5i4cTiLHMM5rw6Rsyfdv3HFEcAfUPt",
  "key28": "5SuUoio1M9aZnK6vfQQSBL5yRfa5qXQVzi5TbsMC87sqyYbwowaSeoLH7oDGLiFSAbRYbPj5dQcnp1Ax3fgiH5Pd",
  "key29": "5Qm5ABhZ3KB9ULwEhhxDMTDNUBn8acJY6QmxzYSu7SSDAMUY1VUesrFADPfYCxyLarqyuKEpRhVh3Un2pVc2BAPR",
  "key30": "28VJz74NU9rJRRAc6A4TRE2y3zLj5h6Sm6eqe5AUhX9jak75ZRSvWfZk7qrQLUUM9641iSUbtTVQzEEFgZS18X5r",
  "key31": "TUWdVnAanee1AN6C6xVW5JpUANUXHEBDZahdRVAvjxoTboGdR4Z4Jvt73QhJPFPtJGP8fv6kVqHq7PV4iKe8ZGu",
  "key32": "55wYrJdfVuh8Qce5d6tqM3rzrGmwPLvvKqD4bxxydLWy8pAJzwCfjknZP2bsyv7N5qywpMGdK3dsgoLBuUXEZPde",
  "key33": "3KDKnTnQhQoyKYkyHkdEs2RHayRTwQ1AkAv6HmyfDrFnQ7cbV7KUkUMAJkRHsiW1tMSRGja7cY3mSkdza16NGPRZ",
  "key34": "62cxPe37qS115c532ZZurxUPH7iv8WZCY86QVAVfNYPZ6oTDkfPXHrLPpiXeY8v4oppjFQ9ftQbumtByS29yK9Qq",
  "key35": "2NR2Wrqu4MfhbLW3bYyH6EFjcxb9aTPyr9FZYAkccpVpwz5KmgVjWBPcg1Ap9oLW542k7f7zjZo6jqJbEEdXYya4",
  "key36": "5rPV2JSeEroYDbbDUtcE8g6wAwtbEGKNTMSKJqEE1YDoQS7TrL4zX82gu35yjJcRrmiLUY2jZupFLMduvbk8tX9w",
  "key37": "5UMKgpyraLYDZ342Wxfp38Xa7RSUwFmyKqWgBR7n9aEWhgyY3ore4jkDjvhDnyScEkFZxwkCxbSxcyDtHQ5Z7Dcd",
  "key38": "3JniGNaj99b64XF7Uf9GMXNMDieBqcqsHnWU5WpYE4ntHBd7ZQB6mqUw4S6oMFRZeEVFcyEHuhKrGgae6VMgQeZK",
  "key39": "3abZ4M72NMJpn6TAJ64dvkds3CYJ1mt7qDBQuX6qZK9khioRiMKJWynk4NWfU9BQ5tgR3Kho2UwkNTJLAWz51H1z",
  "key40": "xLCM4JiVHPTUKQmGQGzMgzWRffZhtfxDFVH58TT9mQcRbpixvsp7kU7xrkjsXPKsJdT15LSfAKCf51Tw27GpoXr",
  "key41": "56RHJdYvQRTTZy8obpmtRbhTf99RjJuQk2X4rpaEAx8xoJ2jz3W234MfK6xnTAQXcjCvr1fxZT7WYgEzboR9LHi8",
  "key42": "2uhpBSizgMQ93uDE9tm26twHRuzNAfe38xwE6VpSgh9gboSsCMgXgLUd4yPCZYk851mYekfNWgR3fYJKxj5422Vm"
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
