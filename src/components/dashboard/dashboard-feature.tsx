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
    "2kF3ejXVVroyVKsQ9YSWc8i6wmDXJ3Y7iYgXzKfE1Mg3UYC7RbCJEnbABpmVusNhabpW33d5iSH4MM9tXxHHdp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piMf1wM3PZ1tXcbztGDGnwmF8kupDPVQ8rdRqXE1XcFYybm4nGfasRh6M3UesDgUBbYKYdfLA2qtxkxduJ6WaSA",
  "key1": "2xoYNckX7y4fR8deQqVAbTNPuWXSEwNLsaQwyEmcV6bJxpy3fPoV21mEEFBYF3oiMVvePCNXnootCkSKama7CgZq",
  "key2": "oGNHfv21vh6Y5nApHjkqs1KsDDhpZ22okAgsJzfp2F6dCvFn6A1BR4QegAhUYgVC6vsX2PW5fUokPa8rBH65d8o",
  "key3": "33zZGgarXWuG6rHNXziKNCc3YCw6w5tfjU3Z8biNuDqpMcxmX9Azw6vNz3Zsbo6FRnNrhvozMJJSbZwhx8N7QSCG",
  "key4": "2UbWWh3itzYMUyg1wnoX2GK71UW2qDAvMZUN9rdY5rMQttwTcJXehkpdK8G9LcrV4BspT7uf6BsPypuJbrZhw8xL",
  "key5": "3fGZ6BdPpmJm7eSbg9PAnX6caseAqfBws4tm1pwnmoJqRBFqiPZbBTAaNv9mHw6nLPk5uWkP8pBjzfqjh9cKRr2z",
  "key6": "5p9xbaP5HtA5Fe9CeH3hwSpMwZuQRsQH23g6Zsj9CZLTiQvUEpnCUtfAgaWXRcRFNhNnf5FHAy6hVm8H8HzL6FeN",
  "key7": "gkYNd6YA943AorjBnC6GwBGLFcx8FBc9F8JBg5dDsK1E9phzaUMuWYh2pwRkUBXL1J9nRmpAvBweSkBWYRrQH12",
  "key8": "JXnMrGDQ6UoUNfodtR57unMrjHJq4soxK4VL97hD2fMnUG3BjyupxT4quFJwznYVQjtaXiMtHEazdp1BTMQ1GZo",
  "key9": "2eHBxhbzwnWyCsY5e4n7Tk26GUM3mDi55vkyydcueiR2z81QKhP5Yw95ZL3bKyQj5XTNQoC5X7vNLPmQTLcUXfD6",
  "key10": "k7Eqq8KodTqi1ob83Twz2FBS9hdVWLfUeScNP2qKiSHK7Ws76cVMpCUTVuERPiFkoA3EWuAkn3MZAZHjVYHEYc9",
  "key11": "Pcmcksg9i93h1Hht6cDyzqkDNJQEKiM5m33DHTiuYufz1z3vskQ46PHWvKCghSyeqaPXJ2kgdMcXf9qB1xLS9HB",
  "key12": "xXcZLmp514GmGpuzBRih2QbeseCWwmi2BWi8ypyLeMvtSMmtkPXhdNjvKdjL2d77UUHFkHZeA1hHmGK3JhqhmAK",
  "key13": "5U2bgq9uEdA8tocnxYrNk4KpHXFAbgZW5Mnoz9SUkJCgEXr8tWbX18pzVXjDJy7HAxtMmCXM3sX3kdovQ2cutwyx",
  "key14": "64CX3GjCXPmCA9neFnBfH7KB5GXTm6cqr5Ec7WQUCPaP26YP7MMTNM7B76RGxfskJe2yK2q4og4LjZUKq7MffAJh",
  "key15": "41Dqmti7inCjbhWU3AYMc976yTFi2ZAq4sYHaQVX514XMr5g4fMN7DoZWnRhSEHVc7br5gahruq76aaBg6Q2ELz6",
  "key16": "2uMmEjUk6mxCYruvUz6xwcjAv2gBgRWJW6FU2Umncdx6ePYNFFqGV6fSgW1SwrgTFkLJbHcHP8FbHa7aKdQcBSPz",
  "key17": "4qZr8tcGmVysyQzTDvkMF3dt6ZWqzxMWzaBEf1e57qLLKjrZkzbbAhitQ3j3XTcLXtWFjfnsf2ZpCZNve8fULE6B",
  "key18": "3wYeV2tR5khKgJssnWe8iNmPJeMPV6TSdnQpdpwYkt68RwgdxoiVYdiUorUZjDUPz9faZ89iirQ592nzQSMsCF4f",
  "key19": "3doCXpEni3Khg2vmpyHwiv5fhrvC3QuiubpQs3KEt97gRgqK58CrC3M88M7wDZdxwJ3b6gaA5kntU6zijgbHUBj3",
  "key20": "3ptvNH9VXQSi7bzgWUHDx4tFfoauh9ba1sYRpVeQ9FueSG1EUqriyeMK2FWJU67cBTyJZSzLKCXj9T1QZ3bTDpaq",
  "key21": "2RUzEM6kbqMKh3qVYgsGufvPKwy4uiJT6n1VkppzcTFgedFDg8ug2MRHKZQv9Ax8uXDTW1DHxK4enPcnGwvFRGRP",
  "key22": "4EVpPaCYK3NGv4ec3eshLsAgB7VJd3GF7rv6n6LGRSyNufnG4AgLtoZptBNS6v7qDbFS2scd65gK6vM1i98KCe1s",
  "key23": "2Zfaxrwn8hXSSTEG9iEXwkgjKL6nbiWHuMVxTStgxCpJJXDMGDWLLk6vdxcVM2wbq6DWYbgcEGsYqbQULkKdDpxF",
  "key24": "3qCxhRjpyC6ruxB8zXijjxrHWG7wXoinGXxHVchjKSZQ6YgJesKm6YaYpZ84tPCAdDBXLL3WG3LTvGTX9mTxev4v",
  "key25": "4DwD4jzGWKJ9R4r2SCTP3vAWG1LqnTzA5HotkGfiTYHoaJduL2b2YjVmCy1uxWezrANfffByLdvVeEoZBzJYPyDm",
  "key26": "WSMrLQ8AEYrk23MEh9cuJ1Bn8WDaiNhgUdzrgkf4apKh5RrVAWr9YWR2JhSYKMWdA7ADLn9XQnY52EVD87juYSJ",
  "key27": "21Ydzvn6bug6QdZoRbypFYKDVqdh7TFyHaRtQg64Mgfoxqg2f3qXVLxPD7iYc6ZqQK2s4GcdpQHFuWztEBqi1g4g",
  "key28": "42vbXtGU1rSynLERi7qjG6YZ4Bq512FA3PY5xdQ5c7g37PTG7SdHxjDDMD6LsZgpTz3WVrbACjv5WFZJe1HUXVWP",
  "key29": "5LNCTZQSJ1WfCwzB3VzAmHvaCSKK2F1hWydTAzc2wbEJdSoyMS5yZ6DeLZjXwh7NEP4q38CzxH7dWPEG3HfiGy1D",
  "key30": "65GrM1qZNNBmP3MQQacrCgzBxjxNchr8W5dVKGRPrtKzvYNaigtgwbRr1RxJgjhDhg7CyGn25fTZ2wpX8fend4dw",
  "key31": "28gD8aJnKLY6hw1W1uKtRgDEA5WoJhxtNYpXjUqcJ5kdSi1bGkpMKgxJmUVaTBkPUiKftitwRaiYM4R3VhEzTJUr",
  "key32": "3vTP67bDp4sjqXrbqLVd5RLiA3ydjJr84YfFYrwYChVGuQ3tsN31NzxGoh4uLPTMDfpVat5dwLr1BBcp8267LgkJ",
  "key33": "4Dcbxpbj2vVVewnUQP8AncRYBCR4rJBwFBS9g5VYL6jLBjuDvF731VWozgnqdYaazm6cBLFxKakM35MQWs4wVNUD",
  "key34": "2zqQSMhRsuKRkwSozYXT7j6ThVAEgvEEZyXnvSi4k8UC8n8dFrDMLzyeZoW3x78DaZ5FQXxLr4JtoSaDrcoWkSM6",
  "key35": "5diE64jEvsqTmj8nSDXxwXcRke56AT1t6vnvCbw3FuJ8ZuE2oFbv84u4pz56fgYNZhQgYc31cddkMivacQ7fv2iJ",
  "key36": "55RxcQXnFJagd6F1ak1YkA7W45p4ZTiVKgXtDU3hq4GE7f8s9KHcPGVgCMbSUd6EpozaXGf1wZJSb4nmnGsSjC91",
  "key37": "4pxhEJRBsEDjGQB7vAYgfoeMZXvZtbHkHsgRfCZg9dyJVkANMbshxZ9fZaMJqJ4gLU47nZDhFMxJPApbnZ5beL1n",
  "key38": "5L27DAr62kyn9nd6FGQXrrJQoVssFfH71VbRNijAkkt5kpMPJ8DSjEGbU93AqAh3RAHQS3F7knme4d8xRHyuYHzr"
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
