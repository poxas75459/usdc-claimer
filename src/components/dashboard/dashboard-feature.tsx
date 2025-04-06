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
    "3Zvji4fQEdt57NJrvmwtWBS1wSBwBrArtjkqEWQ2eWEMNoKjy7cuwFTq9g1uN4cgYkgT65YdPWZoKynnTf8rxsN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BM7gabfZ1pXs9nyazJKzqKNGTz5s7prhnztKCsL2NSJRnacjGk3XL8s2iguGTKtav7Y884WwQsRWoyYVVXkT5v",
  "key1": "4UfEWfBY2xjENPVckmL2w6nK3CoNzipKFe6cTwAMdEx3ZvAuiLhSGyTFT9WbuPnseWj65FQM6mfvXiyzLiinK7BG",
  "key2": "2WT75gBJA1BibqLY41io5tugBJoAzeu9kuaqft4BvJvUWc53dY3sfPM4ztX2qsxtCxoUYFqz9eCWwk9kbgPJPkJv",
  "key3": "61qq7cmHAHtevy2keeyzucWQwUSnx4hLm9DDRzF6gtRb5cVkwRHmqNDDkvBNWqPEx4b8eERoV9CYvNiEsaXvhr9B",
  "key4": "2W1ZVqEi7g1B1ZpcdHh3XZEsVLBAMiwUKQK7AAArhUWQChavjMGdbD9JsfFJQxAurmrZxKrqyPdDrbiuVvdHKbMo",
  "key5": "3NFEbY8ywV2XjsreSzde6vNKQJ8HvKdHaeA2Potqx89JC6jA8DUYaM1XynGBjtiLwrqasBmihvs57YKBPN9iQC4L",
  "key6": "5NRo5jwjnem5EuDJST4soxHenAJCYECeYTT5GfpbvmZJBZ5qN8qJ1FDbcnLrBr3kNLuJN29br9csq8wRfqZHBmoU",
  "key7": "5fd1Q3nCZrtiVGk3NK7GcNcasVmRVEcXhFBXUTw1TgV485iye4ZDFULDF51vHYL6WVTZZDV7EUru9m57Ls4Cvspd",
  "key8": "5EYNNiRH5UQZAFdj6JA3WhAeBtHtXsnuD7yKxK3awy1qvdeFUi7gegmDKZxvYBD5EVH36aE3qWNJSGCKRj9vVoBD",
  "key9": "4h2QVvhuUvv7mh5wQrZzkxc1N1zJZejYcXTyv2CDaPF1t86s19SF2tJnDTWfTZkJetXi7vhdsfynVeXUnTETTCLJ",
  "key10": "2KyEdFrtWQY2QLWgSS1JNTASmppzD9ksevrfGJ3Kpkft4SneR22MF9fp4PdEk98h6wnUb2jsD9VFbHpkL2xeiGZn",
  "key11": "34spV7MuwTPFgafYLXJpq2tvCAg9JApgexfosZfZj2dhoYjok4nSHzbCy6eizo1nLGChrtDVHAKqmzHikwxXS7LT",
  "key12": "4PeHQ6eW8RhRvS4BAeRoqwwVSgfCWXWc9jCWq93HiF3EtVvmt1NBo5pZUkTMxgZfApWTwXnT9x9NrdShnBFB5W4u",
  "key13": "4hoNv2jDgz9TRhwspDxfo2oFdkV2VHve92nmTvMTxhvMW9xf8a8Hj2JEjY3xyuyxY8VRTPwfjNcJDfxUvvP8qkPY",
  "key14": "25daDxpFTjTcPohhy4QmngLrnD9C7db5EHGX5nStZmCLUs7UyJ7hKMmXjN5iTHjJswpWXPVJ6Euo7T41ZzvCzXyi",
  "key15": "36Lg9uEiZWk5Wgy8vBgY7VGZajH8zrDvVUG68KQ28f1HPnZdhDLU6m3rVCxWZantahAeREeM1sPK3jCGySsBecU2",
  "key16": "WA1tEXiTd2JE8VWf8F5yZTtzsnohPL3jsWQfrRWCefTSLL4Zf4zJfMiwAinYMCW4y2c4MMZkBeNJYuxebatmy5r",
  "key17": "keZstb8b6VP3NihNCySqVyhpNDFs2rHUVGJYiZ7zyRAqXF6TkQkXD4dhfzva53vvi3udSLaLARL5vVPB643Y91L",
  "key18": "5zFE6yStoNrPkto1y6rqoqm4Y8fwBZoJeVdcajpvsbNqBYnhiwr9qrwfgkS59RqFmMKzzzoJGzvMz36VsKiBJGYP",
  "key19": "3JLBj1vriK2ojU1MVdcotNuboDyJBNV1Sk8Dth76BqJWojkd46srgBM3uJyapq67jJhwQYBzfYTUoo3Ni3wvy9pQ",
  "key20": "NNbkzkDZnnXVZZ8ybprTtHfqdnucQ9JHcR5msRJ44gxWGXFrvUp84uqpv2tBq7jxEGbdrLWod5uVFkZ4tv4LCY3",
  "key21": "2xHohpKnHhcbERtkTbiY3YnMSWsQw6xNvBNUJ4AUyhPYkwuTt5UApZmTmujFo4FU53GFfuwDdMWjd8WK7azSE5D3",
  "key22": "fn68JJypjmQX8iUESmRM1VRut9iKQzMejK49Y8qJPXnsfb38aCcgHwdb6V3amHXNnJoy4DJ73DqsusGPe5R26bM",
  "key23": "Wxs7fyiBVifJVc7YT56iDFgbRnZYg9sm7Asz7wdzPPswDPvdCKE1oa4Jk5Zvwh4k1VEuxUc48hfgVbXRB8Za5QP",
  "key24": "4oRAsti6am7GzBeKL6Qw1YCLAHEQaWvck6CCwwDZXbo49yX9oinxh3hxhvwgN9u1EMD8cS1JW9wTnNTYrYTy5k4d",
  "key25": "3UmZNYuW9zdfAr3JyHQCE4HMYN4us8myk5pH97ho5hpuHAXsshYZQ8hKc3jJiEidaHTMkDvWfZhnDn9NG5wjntNq",
  "key26": "66v3cQe195QbwEuDZEsJEvZFcYjJweo4H769LMehmQY5wxirvGSFn8usJuxxQxZYpQStHrUwP1j1pDV4QAvpN7sv",
  "key27": "3wyEEhyhXKFiQtUqGZqfe4kWpPKryYDGy8EjgPLYQb53ABWRCwbTURvw3PyGc8HPj3GP4D14mxg4arFfjahigZ4H",
  "key28": "2qnoiBUUYY1hpxijK5Z65bneNrynr6tYsPqEY8W3tHEFS7aztSsu3uucYJL4Z3uFgaPC1XYkhHYstPmqxB7s6iEN",
  "key29": "4oxVa8EyP55KGQoimcTQHk8zaEF2yhCZEEX64P6uYKX4B2aDHrQLrKyTPNvx254QVZAQvMgR99wE7KZ9KzWXULaQ",
  "key30": "4hMjKFhYTtzLShi2jAjxGhGZ76UeXkJd2wuzUkhtHwoVWuTnpAN9kEJ3uWtNicGHvR535JBgUvHM8zh3hYQyva3C",
  "key31": "4aGT4yNV2ZzvwtvUm5D8CyU8GD5PN3DJ16hQVe3NWjHJSyPjAAcuM8ruAiVcUaAm1mifCDxByXpdcqbw2Q2MjUza",
  "key32": "HoU8TFjn7mxu7rDFdgJrTYH2vTxUXuY8LcQ2PQ6ug4YYytVm58UYUojbn49JWDALEQ3MzZ82Zggppo4Zr2AsZz4",
  "key33": "58ydS3SNZyJTxS4C9GCqi4Nj85w6mhx3fREeUjee4S8rm3Hzfwm2iJoyzjNqD7rzk1cX1EjTKet7aeDoUJozHZkS",
  "key34": "334msQiSzjudU32gTMcVLgkbNTP5K5NRmYPtGGhsHad82M1ppi5khbTjKL5znwv4cXqv7CxyteRSy5nPbgTSKA6J",
  "key35": "2yUSeSMdbMVJQAiFxxQ6qrCjLip1nGzDFdMCbiGj5psquUfMDYwYQo94ojYkLMXtSJ4v7GCQofLkAPTdCwfKuyTb",
  "key36": "5mcXGGLwraawZjopgT4LN5FRuyLmpYNwxQknUykTcrLkGnEAKefNkffBAP1S9mLxXP8t9jHDPLwvLmvG51J894JX",
  "key37": "43k3uGff3tSHdurRyeNrp5pWu3vkrf7c5sFvnVF5anVag6DKjbdPB55vNDko641rUbcA36vNdKcgq1t8vyYJk9sk",
  "key38": "46b5qf8qJsFSECAitTu1g6tr5mXYgvKMEx4agNWk1iP1raZYCPKCk95HHuhTBCeBbDgPJCts5QCdjdMTxyV17MA4",
  "key39": "5G5A3rQ1prxiCbkuBnA1vxkV5Zmioq791Gd2QbGouzooQ28PtXyJqMov1FnxouvR3K4dtETwXiG7gJWdvyN3BEAR"
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
