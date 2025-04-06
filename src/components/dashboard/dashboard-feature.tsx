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
    "3EFPjDTka29FG6Us2UMRqc6KuCKkEgFVGoDeTUUa1JKEf4ih6USo9nC3x6hMfmyAbhHonJFzAY3zwivhgzU68Hzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4et5dCtNg4oLhtXRgNv4eb21wmLyaGRZkcrJ854CheKYL4t9eVfRCMpT97qyT6tkJYpc7U584nwxJqmpoYd3zUTq",
  "key1": "5Z29jbpziFsBo7iF4xQYepYHYoLoUhRrm3XZEwJrDQ2BsHPf1bKLDJKm46Ji5aSQiZ2HdMp2pRCjFAnDrU28ChWk",
  "key2": "3sUxB5fmStuKqnaFsnsyRnP4YT8HXn7CfDj5h8TU7LoHZZG5aXxoNXBVoNYDADvf1MHikSr3CUuzVrsD4Kb3YCKe",
  "key3": "5ePTGWS18RZjBiQYSKekuCv24g4WZ1rRt93T8LLV1qnbmKXj2ScU7u5ZeJ4LmdauE1iPMgVj7kLowWfM5Dgp3wrQ",
  "key4": "XwrQmzRANYdDrbFAiZhqRz8JK9YxK7cj4tck313JzWBuMgNxFTnNbgPfr8GMMN8bUTk6RKhZPrBgbMPzE5BhadV",
  "key5": "ocmyUkrAB7pGa3GEvzYVLTqTyWYB6FQVjw9PURafV64c5bMdLTxWAJpjAiwREWrKJcWy6mWcp1k7MCVEo2EGcvi",
  "key6": "qNCHKSf2xn6zVRDZvzRhgpkcNBTzjAMjvqCs1nA28zbYrQiH6Aq74bs4PU96vJmy9MwuNFGCYoobn1WCGwyjTzP",
  "key7": "jXvq78zpchZxieGUVzqGHy1qA2qsDAL1syPqr92F7RSoMojTiHtgCLFSZJaN9Hq7VRQUpRyfs6RpNEcduJCz1kE",
  "key8": "NFjXtk4FMqJF9A7xGRtmhRkGeNaxHPWBdNcWdQEbAshnGFMneLSprDYhAsctFjkd5HxV31wnk7GYWZ6Jcxc77XP",
  "key9": "2rQKJcdfwAk1pwBTDqCxT6zagZf95pHNUE1T6XVyaZcbhvrmN8CE8zHP2Wa6MQCLtTzPsHuurBngDLifxbSsQTtg",
  "key10": "4C4njc4zjqLj7Z8tFkXLRCK3winSJFzy1NUCF7TFZ5eHrZ2EjpniJFuTTVvcVGR4BvhxDRE1ACVBjj2bF9NbKW6L",
  "key11": "4awDmVMj1vr2HWSWJZPz2rWCVJUYfjgnCi97hVndkUuW6PMMguYRiivUpc13yUWCKXWttvGF2sgxmquHi6Y9hrxt",
  "key12": "QJj4PqA9KVVfqbhiTh66wWGFfmNB3VG8xP3SAnwToe8HCBfbbeed7tcYjMyYHm3hrBNRnq9yMA57Du9RBD4ZoaC",
  "key13": "5vh4ZdpEbFpsTVm4vVwWeURF8KErzj1YpTGsFDDBn52NYR5C3sPFdkr6DMRwE9tFLoqUnR5aXh6Z8euUnkZoMzwC",
  "key14": "3R3Fw49kgbysQ9yTzknZDh3B8nikcywJQeT2yL6yHXNxpLmud3hUQE43NWxRerAVnZ6gt5AqDWYRpih3zZN3xdcJ",
  "key15": "2xVeLpJFFhs2iW4SdHYBsUDf2xNmCzgXDV9Frbv5tTDJkCZHyJd6MvWNSTCQVk9fsEb2dgBXwc41xLLxxcWLcz8B",
  "key16": "4WBatfrhYd5JYTLZSDvrC9Uk7cBZrNk3jr5QAcJhDmeYMVCrEDwUM1XVuiQJd1XSXAv72tycy6iA9pVxPEb111E1",
  "key17": "4jVK67JTo2MncQYeydqFU62nXkjotJCiL82yp9ctmZ3JFj9MvZDPzyVBgvRiniSMZY9niWUNENo5fCzSg2yxtXDE",
  "key18": "2FEnLVHhtDi2XnvYDxjBzND8efLZdXfLkKew7fj3rbEGDeAzn3dNjbpFk39Lz32GKVBCUnsRxtMrvWHQM7Abxu1D",
  "key19": "2VSPVoeiLzMf5RX2oju7omvZKBZLr8ig5NaVSpapWqTs4twBe1v1gxqBVkJcgaFTQmqHMM9oepHoW7cHVCJn2evu",
  "key20": "66PboWjangBMwS6LkdMDJPLAa2KQYDUPC4ZqMjTy46ZwTyAeWDJsHCFGSjtBTf2dGdARYHbbxkwo3HeRC4iwJYVr",
  "key21": "5hmbLVr37g9DSYXHzzE98RQvagDM8iuqT1Ra7QgLeCDwtn6PLsrEsCEcV32qKS3no4AkW72Ct9izDBhLxvxrwssR",
  "key22": "4Mbz5qM8KA7WumZYXXE7eHGxDrWzyjAeM1nB3WXu8BkibwWc2p282qS9GLK5fVCVpgWFMTZf2hof4Vy4hRubZLMJ",
  "key23": "ALUVtwDAdpjJsnMmZ2MkJAPuNp2uNtnDwt7mbhkfEMtDGLULKraQyGD8WXiJWGfzkCzPkfU6TqVJtgKEPV6ARV8",
  "key24": "5iupm5z1MwegD2wsXmWTP5fTSoD8GFkXvb36PmG1nk6GVvVxCm6ECBHb4oVp7W5rggeaJBjs6b1kvU9cHTbP2WX4",
  "key25": "fqy5BgqtBk6VSzpLSLpD3fLpnBah6qW1Znn9Lp6REGTe3n6q8vXYnpfYyRJSSRd5StUFhE51JVyrtzazUSj4qB1",
  "key26": "sDqHBW6oYJ6Q5e7Pp165FCYa9dnQpEySWJvVdCy885uuRkrXNpdkY2kY1CcAwfUvxHLVuXJrD6Q4KkFfjXKKUYH",
  "key27": "nL1EojqWuPKbg5drZmrKK1F7DGHtw1WJ7zFY3vDTyjZnmdXnXoh9vBtoqnBKPD3wDymzNuXzAUnVNJykDubXp3Z",
  "key28": "NoY2bJ4BgTqKbkn7xKhGjzGmwPvGRWSMrE9TnYvbaFbk1GwKDrXG2FAhG618RURqXsPoV19sDdgBxo7NBGsVhXK",
  "key29": "4QTx5q5BTdrJft8PYHz6YHxJVVsPgrqVvgKV1ek1AaqcuHgTL1KfvrohCX18pNYS5oL4sWVBZCYaa9vixnDhx4FQ",
  "key30": "o5RXW9rDC87NabzB1kb7fGTDj8AcgfRTEzx1ZtaCGcDdYU6DNMjjvVa3xbnyKCqDT5MoP6UUdabs9PogysZcbrM",
  "key31": "4ruMCVR4D5EeHCwEn1DMLt2e2YAyn1UFzHQYRcaa3Ffo3NYiCzr74Y2Gba9BVTpAJHXWmBxCtWc2Ay4Hvw9Rbzkq",
  "key32": "34DEzFXFvwpdoJDeMb7cPLv9XqXPJCzh1hGkCGtv9YFeUHzhexy3qsYS62AUhvhaqhVpt8687W1kHoXhjZawFnop",
  "key33": "3K5yN1JYovsqnahE2rJ7xUfyeHDPTJGUKLfwJ9K4bhdn7psb7dBwwAej6Na5jZHpeRCGycstYfMyJBkViG9zerQH",
  "key34": "5Rt2LBvDSeatLtc3sK9GVQtjeJfhabMN6SFvzckevm369NFfsVP3s5W23FnWn1VRUqzSEHWCL42yXrGKDz9PvoY6",
  "key35": "eJF1ciLmxnTXx9GUyhT542cJSNUJZ11mZgTibTH38Tx9BPyT3jtSp5KE4kjFXWVtEgAHQESR1NB2pDcrMZMSpxU",
  "key36": "3DXMPcAV9dDY4ytHe9wBWUwT34asG7CqgzQmDc18G64tZnGnx8mcmGZGoKYrjB8uTb4BfUf4xWaPS8eMFyCEtbXX",
  "key37": "3aZb57uCrqkoe5JF3TJsRoh3kYciaw8UdhVWiMSwTJQEhMA4jVZ7pNMzEBbGmEveDDjd6uWnDDVdm2JJYT2wspkF",
  "key38": "2QRkigrAKFAnDf95fJgxKMFUPfcy72XFYAPsYs8mXyho18vdZNZQej5vnH85ctAKi8NWSpTcgXYARe4e1dANHW5j",
  "key39": "5Jefwn3M7vNwEZ9ZNuts4KMwjTJTCBZZg5iPfVPefh4dcp7DgkZFycZmb7Vmaai3ht53iB7xPq8GSJG9V7x1LEdk",
  "key40": "5fTetLHbHuC5Kvetwwg5XKRx2n63hkSNyyXN9zGxjTxSkAwsJfMK4vQQybaR6WyqQD2Re4tBCjGUzSyo1LkdqZ1p",
  "key41": "5h2ZrWUL4jQAwFYANjerb5Mx7L2LoP8u5Q6Usas57ZHEkCshqWU1JM5tEXDwpq5q3aTMssaw2hF9cuY42ns8aj4w",
  "key42": "3v8R5JikN1UKXDNxpe2CxktB9gtHtndWN3Mss7bmwQepgVM3eCNngM8dwqoXz7k4G5JQHijccbmLDjak6GY8QmRD",
  "key43": "2Cy1iqEeeEnvduRvM4CHNV26r47sNGMWPFEoiX8cZspp6ePzbVuoMUhzD5LwEzH3aqDayRgn9FUb1RxETxaocxmy",
  "key44": "ZNTxgKoUVK6W93nkk9Yi1zZkpRGmp1a2zGmpwJTu33j5Y523nc5XKshro99E3FEt7WHvQ2vdxD5LXqDnrCtcHHT",
  "key45": "25yrQWyaiyxyuePmKK7yUDyqoEMcJRFDdtsxzFw1npSq4LfchkZVQPc4c3i5SRXp4YGCk1t5X2gpvutFKgy22evj",
  "key46": "3vGNg6uP4zL5cFBRERT1Y6YQACqtRtct1RfjsT8mdJJbkeyr3j6RiLNGh8uQaSeeS328pwsSnVbzjKPE54oNVdKs"
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
