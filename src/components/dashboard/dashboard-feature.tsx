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
    "4dMznXMuEZgAwEFwBiPn11xJcQqcBXRrBUKwZCPmKniD6vb1xS82haPMD5uzFqVGhjjP4X1DmUgzgnB63nFX5Z2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AEmSe42EhqtZKa8sYvpfutibtMqRcrj2YT7wbdBvFmrX2jjhEcR5T6aVawCWTgdZqMkKebEaEoFbhDfRecsxQXG",
  "key1": "39vmyRAwqbG8NkY9KUdkWfyuZNj25KcLinAW7jQAfTBeokobSkoUwqRQPFKK7vhWXrrdo1PwrodgaBYZFcosLN7W",
  "key2": "24ufwsv9rzBjthfhGyQHBqQTyqFsBmNhA57A9bgdDB4cMof4JFLVZ7gVnDKvppgD5pMNUKqMMEJPNB1hbMn43tit",
  "key3": "F2wsiV7wwMK3AbQMuowEzzByhiCjHe6En2feW35qkauPpk8R5gAwuGJpEmLuvd2ieKtzpjJL7CnvipNZ32SPZnS",
  "key4": "5b1hUu9eWufpKFVT4MTGBf3BjtZDerEKox2D65kYgCuC1YLMVbhBh3YeEX1cnz3eCvhfDDj1etFDfUPAF5VbkA3o",
  "key5": "Nm6mzpPemm97cq4EgK5RcbDQc9jPKXqVhTKhRQJmL4KwWXWQV5njS4rTx1E5isRAe7iX6hSVkJXEvEn2JrSNbiL",
  "key6": "2XBkEERUBTY9toacMacqUfPRcqiRjeKVKWferGqnhKkytrduZtttvc2kyP3D8jTryRnGaRLSwGtB93ufmp1kz71c",
  "key7": "qx7xxGAJvNbYrpwhrfDLAFGwrtJXCGfZPXQLK7wMVULNh6osxCAq93nb5v2fn4GkZBhcyfhjCvzbENCHvDpaPnq",
  "key8": "67LVcykCRk7opv1TrdFtmwNp7KUHqB7mTRMP3HhiLZjn1yCmkETYiEMvXAFH3j7xJezAd1SGHi7rmKf4fmHBzqhq",
  "key9": "2Gm7EFQgUAhVYiUXLgZ1W6i8xWLKuyFrtD7VWEsLrT2TwPtFfCSbWckAn6ZspE3YUPT4nqGTX2WmYn9PurTXQfEu",
  "key10": "4HrvaEpLax6ZEeR9xGD5f1WBVCst29GLZEJWMZMhUvfn46pKjjXkmFaqkgN6T1Dg4UFqL4A48japcmDEvaNzu2dh",
  "key11": "5uqeNHs1iyTqSnRYSfnunGTpXRQBUKwRCaXwpY986VR4dhVYFnhWsWvjYBGXbxsjw4ocgADvXzi1mYR7b1P6KKYJ",
  "key12": "5bgRAaVSfFeMJhEs4ddHttmcKLjZVgsShX3CzztbrVPmxZkAcAya3ooakjGdbhqQf1BAyKvZhz9fs1ST3grGi1r4",
  "key13": "2RUbrbidD61gEwZBdkeWiRFW5M83S85t1fs9MnGZDrcoAjt8KGBSxhumPaWgXXjDWeyonh9wxL6X3R9FHZeMRPuT",
  "key14": "67e2MpRHMMYCSwFEmYckp1KtKvW86d5nUpes82LoJ8st9xC2Eknau8BUcY7x6BE6dAY5TWT1ST9RCrZVk7gmuDV8",
  "key15": "4mtrzgWN96hXayMXtsgnNtLTxg5jrZtRMpe2MVK4HjtAUiXSJ9rHxmYHkzDQxhw5dQpVHyCBzzmxzYqaPMcEyjr4",
  "key16": "5HuTnQmCQC2EdCENpSTnAbSBXaaFMS1f1JK1bGN5CLs6KQJRcNNHuF3JxiLsEhEFtZ5wrdbNvPRreEqjW8UnXer6",
  "key17": "HeLeqimUutiMkSBSC8osfY2WXd4sa4hSPSyvcSPdqpSa8gpqQXe7URNWn5nKEv2sBHBR8Sg23Cui6kB86mrWFG2",
  "key18": "3P8dQjgTRACtmD5Bu7fK8mkDjrBwzbHeAX639ML6nzLgjbPEtLuMFP9FJ1V7JgjEX6QTqch8L3we5RXFcomrGNqR",
  "key19": "3EuXdUL83WxFg7kFdVbBkFfDeEuXUd4cQBFhkdTaBQzgnehScdrBPsR9WxbMDyUjzZh96M4sPrGbQUA1bpCPM8NH",
  "key20": "3VoykUvhaQ1Ms4Gmvi5E6HuLqpEhhz7VQgKqRykXYAyRgckxD7QLfSCpCbudZcU5Sq4K2DnE69V7uuxiCfYgq5Ja",
  "key21": "4dENfUwFAWquZMbuGtWtofQq9z74Z2tknk6xXepCgJJwiNwKsXUkH3Nbf6NBb3i4R6yLYwbyx3B7UtdXvTvBQ3Eq",
  "key22": "2b7EdZXABpc3zio6BmfcFWU4Q4fAL5FDgD1B8mD8ApE7fskKhcmggEMt6vjREBT7cjfizTzFCfWKspqw4AoTi5L3",
  "key23": "5uRdagdB13nwmkG3T3zWVZQWBkx5f3WdJK6zHyAzQ9bJkGidbsqqzWzWDzrpACuSiU9po2FdfyujbkHMVByaqDVZ",
  "key24": "4kfRj6T4wwSJQwMLXzgfTUcwkdkbgSfjyCu4bNJ6nid7BEB6JHTkUpJVitHxjhExGB6jH6mNsdF8w5fL2EjSqDeq",
  "key25": "4bRDWUw65vTHh6WboVA5uXrU1J5t3rkZQL9LZSbwvvkWZTsdr8kUAUoDabFqBLqL1Z32DtbCY9ArfXwbGM1Xs5Uh",
  "key26": "3QHhKmPSv1fULvVDkedxnrsqJ7fuJdaEQeyvBPzdaYaNVtFMvvJ2mXNnyWiPPqWVTGS9XBwgbvJYC9RPywpUHXBX",
  "key27": "4wfKRH39oqKdMJwxLSfnmi2kwB9tQMLqQQYfyUifQAzU5GdxrvoMivTdzuJcA1Vtah9qTTUWD4kQ1Qmmm2J3TZZ8",
  "key28": "4NcKYQWNgqxH9tY57t7PLW3sjs1vHrRUYc2Jm27mxKjsc2GYQvQaJuLfX3wiAJ2s7Njp1bnRrTKt2ApHNNge723d",
  "key29": "36o1mwAk1G4EpXwokcoVGox1qhG2ykuXYXjR7Xo3t1qXnoC1eGbgM3Q84mQKkvSTF67TKFHq16XbV4pfMwTj1Rrb",
  "key30": "TvSDgD1fFr8NVpCxTUNxDJouPBw52xxXxub4HUrGAgv5yvwaqKhwZyLPLSXWeQBha3zqjfr11WAcKBcw22gzwzZ",
  "key31": "3tqW4xUK2VDBYiJC76YfXTLXrJiHLUdnutJjbWtvxEPLrAKR7rDcdhcj5meCa7DhHzTau9dEnwGj7tLGNYeDbPKQ",
  "key32": "3QcHSEWfZhDJpYHrT8WcVoEijyF9Wj7T7g7kcGiFHkLyq7GfcFcZEM5SEQHFFAr1heD4EtH3XrAVEFdNRExvbnaV",
  "key33": "5eUXV5rTi8Tj5vC8EUH9nm7EZKsmc3ShMXeNc6dAGLVYWC1N7pqrUR3EY7xzye6EC1frfZVj1cS52ihb6nBU5d8b",
  "key34": "zXYg7rGmsuTWEhJuX7jUiA6p79K6vPE8mz8FCCjk2fKMbeYNBM7uoZyeW1Zw2y55Wvai5YdZei51GYngaGDprdr",
  "key35": "2B7mahivri3sCv5RtsniEfWoJcDdXGG3KypghrUHUnbQtoY2LMvJuWmBb6QV7vPrixfY5vbsb791vsggRkbpQ43p",
  "key36": "49HU4ZizyNd7rZ3f9j8oHm3Yod34iM12GBV7Ly1noepRz8RRYUgFnNK8cDJX129NAL6LeMq2Ai7hvgoT6mq6cE98",
  "key37": "32juqxVTgmiDfn3m8Cd9t2usromp8sn3WupGjeYHyennAdgohpRcAThtssCzsVDxr1fKpKjcrUkChTW5DPYyczAo",
  "key38": "5Ud5Kx7aCkdULjd8zTYE4NT1cpwSwPE3sRK9VoFcrQvdWKNRJZiL8VLuEHZp5VqWNth3mnJYaTVXb19rCuQCjmsc",
  "key39": "33Ky8LzLkgvnUQfFa8J8e2Xayx8sLvsWvMdMWTaNJpv57heUe4xz6d3NcG1nZ2DJaHUPAtYLfTgqXbHZ6TbRAZB1",
  "key40": "2d6WjL74goub7cdkhvWvXvM7gubbEYVkvD9BAs4BSBx5tyGkW93CvnehiUYkLKzjFEkHXQVMZFe9Mz4rXKdmQYAp",
  "key41": "2gHaNLhKh5cCuJJyZXYckUju4UHYfTQDZUUFVZMbEEXgvwEJ3r8Hhkd4jtEELMuPc2PJajM2uc4YcgMGkrK8CqN8",
  "key42": "5cyivZU5QCUyGgu6hxcCKgPRFWbtVfk3g4bqLPyg8oMNU8CX3e2GWVuYQwLNRMfmeGF4eLuLWzZYjinKejXhkeRR",
  "key43": "3gdDYCendwgsEVB8FrVUjLuJ2bfhReDPmPfeJXqekYq4MNLsaWrGPJeGQF4HebLwCeRrytqKerGSveRtj8fv3W9y"
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
