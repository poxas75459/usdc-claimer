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
    "snXxC4N1vxaqUoNg2EJCMCYDend8DrUsYQ4K8ojHPQ5JJwLgrYcDBCMgnysBrG4cN4SAWNGrroeVjt4xfHF42Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V4YFH1emPVeThsCaYx5Tkr63G6oA6NiCZ2joBFa9DG2RhXgQWQS4qj3ojXv1KT485fic8zsSHTFawxDvW4fW6B5",
  "key1": "3sZcEZN6wJG9jjHBJXxUCGJaJfv5fWRK7quhCSGQiiyURrq8dWgrgvRqEMMtw3yJL87CYGoc684N7BjPq3HxTsbz",
  "key2": "3nCWuoNMZPspzFw2VEFbCHR6vTMWM6DxmD1VK7aWZmUhX41ayoFeJAi6ZVqihab8iEQU3nazyaYknkfAaW5mrNsq",
  "key3": "2rvDgNnF7xFT6tmwfciuT8nLD8Dr1cBhbcKh8WE3aeFg3MBscfWgsbB83CotdK566HNDy1VTSoxTWpWW1iCLUshT",
  "key4": "5piCAz5EUrW5KiPHhF1MXtkay8EcN5JdD53ZE1sXzi7fLRocHFFpz7rbRUoLmxKXq6wP4GpLhfT6FywyXX2NwmN6",
  "key5": "5Zwv2nmJwFyLxs1N686vLkyuHNdYszeBtRviM52EA9MKZxaW2kARAnMyYanYZU94Y32knxN2mcnJeoXHAK6c8Xxi",
  "key6": "5eZ9HaWRtoLDtPnRueaNLYXZvZ5tcpkDoETeymtVeAbnXCHKoXQmpokD2CPnxX91f7sY2Bz57gvT3yEd6zw7ThAv",
  "key7": "3ZHqBP1QNt2pxCxh3mN52Tfzd5xkrce6dRVpNt38PHXDKbQYaoBoD8YLrLxCMa4nBYLJgXdzfZbTVj48igPPck9V",
  "key8": "ZL3x8m9egvqLg9pzeUgRnzFC6a1GfP6TxAyM2DQUm1adSWRSXyf9jDdeD8Hd94NdchQKNrxhGTG3mSU4LkQdanE",
  "key9": "5PjWVA1vDQryUmmKkDSeTjbdW257Rv9DLhGUZUaUQa5YXtouHDbkPHzfJWXmiRjwyQfAQmC1RwJQGhRVw37aaQrH",
  "key10": "2VKS3Esc7ArPoaANUdxjqBiE2t84LtQHoi3vxafxtbKCk8crLUkY5oZQ2mi9HRyjw1L3pHBAjkHQ8Jw8FhTatW5x",
  "key11": "2cQ2bCMQ78D5MZzJTGPWtciajN9hMLuDrKypwd8t7JXM5nuXMws3GfbqaoaY1L2TyYhWhazBecbQxPy2DqJDzsen",
  "key12": "3yUutBboeFojYCMttAi6XbzAEmnyZQt3SBvvrrhMU6DgBqHqdQwR4mQRE4LBAy4C87dMtCjrSZCpfC3amcyueus3",
  "key13": "3iGngtMg3gqYnCJNQVrtea7hAbTeRpKrMWuAoAQtugnesyR7QBG76THLNdM4ppAn6rSUwDJMkgukLoxhQWyPMY1X",
  "key14": "SEVNrkVmtN1xStffmiHX8uSEEtMdd3mvxQzKiag6rfBLZnzeQ9XYeEPEdjDbeAX78tTXNFve2w3cpdb5KVZmBMF",
  "key15": "2tAce13FfucZ2CthbGc3jSrXGp2zyaipvxgcbtHMhCtgw7yZBeA4BMqUQWNxJZK6zuLDboAyCGXtuS3qbRacgGHL",
  "key16": "5RwgE2fugdzFHzwdA4t1PVv1sRYMve4w4CvBtoriC9APGwYxzvopFwBfBfabktJfQCrHxRHKuZ4XEewh6Fqg7viW",
  "key17": "37QCimH1RZ1GfxHQRBzKaYtWqxp9q3AdDHQFFsn6okEBieaGdyrcf8JbHnd2N1k7cfCQDUFmyKspDahR1DNX6HqA",
  "key18": "rkJ5GUVvPtREP1t3rcT4C2B9Ewjs44Xoo8CGNkpfJrsEPnAYgQrwavn3vM9KzfyQjmz5SDd1fNKZfJfcPk7CWX5",
  "key19": "35DkvHpbTWWDj28gGhyqKLURoHMVAoJcxL4Cw88iaTp8ECbpLPL4zGB8znMsPquhLW1TUWgTxdWgjNpcYprwzDsJ",
  "key20": "4DxehVXuA4a48nADeWRvgKdM9aTTqa2gSHhvhkWJGZjaBGP9pHw4rUfmjNgeWPJRV9nrnXEdeSQqyENosCM2bbdy",
  "key21": "rLZXM1m6y3UEDqiXsEtX1KaFgrzjh9YwmNrsowoVWvgiZWvp6b81QPbeEmP5pLATqe8FXqpjfZAskCA8xHWey6z",
  "key22": "4aVfhmH8vYzGQJnd1TXyNW7a6CwAWq6BZ4eFDLQDgnVCUFi7JatTfFPiNpoHRAVB5ccy9u7r4WxisckUrt6sGxPF",
  "key23": "39Sr6J4y1oourv94x1PtZeC4y1pNeN9R7XcKG2vxRMLrfLfWeeMfytoFRjnarEoEggWtrjhFAoA76yrGJGH8PxUh",
  "key24": "4j2kJDUBtG26qfbNxTYUQhDAKog29C8uMdcMNMAG3BYB3iurDWnsoxdU78i9AYdHsUuXEPyeq2DXgzJTQprgmNjQ",
  "key25": "5TF6GLWY2BfLdCupJ8xYpp1ZQmfrqukYtjatPV8DS3vC9sEA1MERRMcAdiuFqwenR2SeSRwF26yD6hqENvi17cXx",
  "key26": "64iBKkNzEEpxWuVZZnKC2YtMYJV5SD9DsWkMzqpTZQYpyghqU6FpjjJ2UXbDdjZrienWic9KLdStNRRyeyvDmDGs",
  "key27": "5ucPivM8h1FYRJJfqh5z6G1rmLsmQzEA94CMv5QVweoZe3Skg9v5hpepm176zs2Tnsgmt7Y5i5xM1iVWf8MbcKHW",
  "key28": "3CFKE4MoMYyUWxPERWfHjkUabJFNpR84h3wCQqMQEfbPz7SWNhdPNK4jYvkcin59WxbBgfaDcGi3mePchFzAS6AS",
  "key29": "5YhXpkzSe8ACBA2cRoRJjLT5ENX8p8Crdjnidh4UYedFHHg5s9HyfUzsZxtL8fNJsJkjA34vXiYBjrZtwz2nrTeA",
  "key30": "3X5mqFMGdziHAi2CTNJvvfsizY3uoRgKJj76taUyuV1KhRzDPysdTEL8kxMaM13V9wKc7VLceNs4X2jqKA6Edugh",
  "key31": "3t3f7CaDTt5aCTGyXArjDMA55CjRPpopTtBka1yWPo9CxCrxSzjoSwoF2bhX7m7869nM72dw4trawHHwZA89s2ig",
  "key32": "5hWmEwVemCfdGkRKPFChbbkAR3QL26nebL1Fy8U3gMfw8yBk2X4bPPfwL98viKriuPfUmWMzwrpD2K9TNGgHXacN",
  "key33": "Q5N2xPR3iSutEqDohiC4qFXJAxiTLAvY23T2yKGWNTUc68pxKqsuvLD5G4XNJdEynQbsfRkXzjdNNes29yddxWn",
  "key34": "2RQ3rN8fzGjpevAuLBhHxtLmrUopE6r7neM7pePhAzVm7DtmQ8BP6km6BM7K4FNQjrZJ4qowwnfrhsHBFWM595tf",
  "key35": "nBCMQ3foai7YYVYRspf3KDfTjysM9P9sBasXTSy9fZEMCWphDDv8krwGDZQNxECWeq88s2AEZhZYdATuZWFYRMr",
  "key36": "3yKk65gUzA76co3AjE1rHWae6PAEjFSA5RYSjKf6UwZLTt1PppD2pPZY3ob7faW1Yukv3MffB3ZGPPHgrcbt1teV",
  "key37": "9HAr19KBq9H4CJcQLL32B8E6gNKGyisBsxG73h5iCQaDKc5Gacd9MN8mrM6YHi1AP82Yt4X62hz5k8h2tMkFKpL"
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
