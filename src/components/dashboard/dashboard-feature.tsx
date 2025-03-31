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
    "3n2nahLFiTVpPowfz2GcurVNkWPfKHKb2LAETPk1VkbSTXGQmFQPG6FQ7VXC5NY8A3MYSTUmwrvhUutkpN1j3amu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQBqec2sKPsqvzkkHoEb58zumUdkAKD3KovGXZetUAQhS2qKsxFtzDqdKdAWeTuvNYQdbpf1UmDQg66j1TL51Fq",
  "key1": "3JrR538JXpdkuLGAiak3BTSVk4gZiAryzEqgyWqD5qSUBSjMwsqNQsWQEEeXqK1Kk5KLeoXBHbNCyGbJRth3Zv7Z",
  "key2": "27BBXzvihXwDfmF8njR1BuiCHbfdXQnLkiv22rZfKUVYuHV2yoKu7GPBW278m1Tc1uhZDL1bumy8wRuQ2okiD1Jj",
  "key3": "9gmR6jKS7zcRCP33aqTT1wyZbPgBFjPTvHUHBSknouKuFnfrF2b5th8M2A2NV5EFsfNzCRwf6A8Lj7d474TXXvR",
  "key4": "dp8Eb89CU2fMYqqNxcYroDhxhGu4951hBuFvfXJHy2RiMUcPwxLB3KH9H9bHmXZEYBo3z1jaHfSzPi9DbjyuwF2",
  "key5": "6BCBaWpbdubmqQ46tA9szxMPWkuDe7mgLinrer4QNqjhzWfJT4Ax2m6omuBTEyoA7TcfWocLr5mjtW8SqMctSpk",
  "key6": "3jkDRkBM3uPEvRo6Ci8n3qYRh67NJoNneEi8SmCd3CQr19BRvVBxEqdK2VvjB8DgZz2UvVzcm2PDNxPvP2eEVeoL",
  "key7": "9QFRm5evcSzbNVYkPkDq39RYcNb7eEBFy8RA41PLu7Cj5PHLExiNLTmSLUbnbcJVq6xqpU2u8ShQHymPnz6fV4s",
  "key8": "4Dn8a8GmAtgEErGEKxwgJP88RPxJW5o8SrbRmQbzaP62vo9UfLExS4nVTeS8tFmeQrVxhz9PDfe7SFzqQTQDeUAj",
  "key9": "4LAnH5Ahm2AnnJzw1obtR7gHVcPSGoVrVBNCCvcXXeunwH3HEoa2u5JQh747JQdjFd93dEjeigrWSirKCH3qpF11",
  "key10": "2U1uGd1qcvA2L6aEa9CoXDDsJQkMBXywrwPqafFbgWoPQo6N9LQtp8osT6xcTqL4LEoePYUJSX4kaxwT8zxeU41w",
  "key11": "21kXmFHAsqhSK4PoQktNBircWUwr75QvjMQAcqUgr6juKaRaqJ3mvN1yyw9TLWqHq2sWVrngVYSrSaNkZbbDmBbx",
  "key12": "43Q2Y2mtcWqL1AqWmMucoJHBiWaoipqG3LHwFxKjknM31y7ifmN35hHgGdWiazQ31qKMrXms19VpknA7jr4A4HVm",
  "key13": "3zxjT5wDJfRUfCtbx6oKV23MwFQQ8emCozuGKzbuHASQ1SDSmc9spYva34nnC6aoFpVQe9krG5Kir3atxTrbxVGt",
  "key14": "6fi5xdGWjtLerpEyuKPVPqpBLMZRgGxSTk72v6qu97GXvWqT42cSdHxzgbTev7Qv4yEvmeu9rtGD5HxS2f5X52f",
  "key15": "4GM7GCtncWgroVEV5ThbBYy6eaQSGn5Wf1M7uKJ8ebS4U3PpSUb7nJiqT8LbuWuk3NKgVb74a2zymtU6Z3kk4Tb4",
  "key16": "2krwPXXScQLzF8gxeF9p85eKXMQdbNttRcPvQAHMe6Z4evgB5eiVe5GdEReFyj3ioEJQaRTWNXvMhvrQn4MWgGvC",
  "key17": "3P7YTfzHkQ1Ea9UoJxBshVRowAz6pZPVBuPvkhvedTJZjqpnLfRjLq2fxJcDcymBoG1XmYNFd49z5Ky3wn5Lj66c",
  "key18": "4PLm9buqawBfYto4iFRFDcXC4yKycHfFrMUm441KWLh5cGdFR2CkVxbarajVJvpGZZF3voVk3D679mag3GV1ggdE",
  "key19": "3W9mv9ytzSWujrBxy1UJ1mg1niZ7ZwBX8nJtWskouChXLf7wZHxSWRa1QgXxgoQZTfeKuPuJCL5zgMfs9rAcf2oV",
  "key20": "ZegpM3Dnt5N1puDWfhasJD5UhyEMwCJsSDujGs1RTECMzuqEBxxxbzPYDT6W6zE2HFxJYZkBCFXNNotqaAcFazj",
  "key21": "jhcCsYoBn5SPfTdddV5qKjvZzDk4FmHb89t6b5hWAQUgN8yenGmY58CpsrHA4Vdei7JM4jySNY63U6wfzPNUEG3",
  "key22": "4a6nSe3noYY7isfdffRHG7nPDGdMmRd8wxHUbSyKHAFTNPhvuP2UZ8oxhm2ovzbEpyUETsjkLYbCpHz4qdzvsiRP",
  "key23": "4hvmKwuqUnSyCPtGMiCN9NiN8zd1EeH91fHRJJ6oXqmP8a9VNhbQEJtPtziZTZKwjopkYB1rcJrrKEDsuJ9r9WQX",
  "key24": "4KKqzZs81g3h9cpdxZW1456LSykLxCBB4ogQorgsyxLu7T42qaWWK61qm7N3tCN9B5TXKPgZ6ffHPjMVar1ngEPA",
  "key25": "463PjDpaWH715tyXHVsygBGFvPniT91QHyhb9KBu6jwK4TmVhuDDBrfggmaZW1rdYuyftdpxfv77pcLk2dDJrEAL",
  "key26": "4eywh357Ma6eDREkHbJpXuwPw1ZpDjJN6bVJkb8saq1zysPganEwjURBdUNdeGCQ25F32hoYdtzuseBupfM5ssQq",
  "key27": "cQDGHLTJ3inJZ5zorbWYaH2jpVjg6uFTFemLU4qZhRBvVg5D7h6C5vgiV7jqCtJ7CWobKiEdDo2G8FKeLomc1sU",
  "key28": "49wmnuuk59tLx4i8Wt79CKbXYdUWsqfM19ocrvfbhfw8tHjmx6yXeProhJF1vJ7TrBZ5q24QVhbCmCgYRR28xJhJ",
  "key29": "3HWDfDW8YZQMbP4t2bg9ibb7N7L3sGmU9ZiezxF8K17UNzK6GyAApwbzuWiaJJHaxakiUDpT8nqCqn1kWCDUtVJc",
  "key30": "3ad3WVWCm5BkFKij81U5eV8F9mRh2BAA2bXVcJEFjzVnLcyifdCgAYDr6gPGmTXKZCmPeKSKSn7Rpeh7iW6GpaH6",
  "key31": "2iN1VAZD3weMKoDj9n81fCMyFbwKSqsy3uC2qWAQNZB7wwZ7S6cq6j1HHubdz8RJtcgiEroUKEEHUk8vR3RSRGj9",
  "key32": "9bAzt9iXBNd3mLGQPWkjFtBPGt993aiuycKtDcLxEtDPYG2DNjB2Y786rcGUrnsUgtWFC2zFtyewEq4DL5ThQ5T",
  "key33": "3RxopSGRgDJ35LKEN2qMWtJ5tSHBGMDgtvF5X3jbmgUsbTB6dLhpRaoHpxNHXisstwVL4YaUTyShNA1MqiVhDGBd",
  "key34": "5bzdnpnXuJ4HRNY1N9M9V9UWsg34Cs5pMeb8yhFuBQLeGSGGKDzodBP9kzGHHvS9xqL83bxwhoYxYwcnKEPjFRhT",
  "key35": "5LxKYfn1H8EhJCzZLKszzzusoXfo1odSzQ1zEAgYcHd5fnQRZWgRcPuhonfBF3mVqTdR4ZyFoWwuHhtigVAprk1s",
  "key36": "5afn3aYFcgk2J3BpnHtnppsUxhDASZfjFtWnEWosirpbJYquY73NErBM5Kqkz76gsUVj4aqrxZNTSTRKgkTVs1bG",
  "key37": "27pa9xiKhMiFB4HXHGoNaWu9Ls9QG3gSJwxfpXuDg51XKQivdNykbKWgweJjSwrHZVLqT4ek4rphVvKaTysq3pnm",
  "key38": "yehmPehbTFVTtsXXLyFZcJXbhtD9NzdgeFAHbDPxbsAzUFUQ8yxRFQW7evRm7WFSox5Kw9MTaZN9Mua4FmMQdKr",
  "key39": "24F5kdNkzFs2KCm43fus85RUyLHrYCRQFnFNM9fZzAXQYUKqP9nDeMADvtsa2RwcKPdfUT1curXxsxksfh21vf36",
  "key40": "bwWLrLr8BKH1c1Jys3r2LTWncpzDb5sUiBwKnEcb7AG1BoxT1HVXjXb783byBn2FDeQw8A8noq8MtukJcyAMmBX"
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
