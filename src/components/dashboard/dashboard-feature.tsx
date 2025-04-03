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
    "4WM4uMnjvHPtBkUqyhtAC9uQoF2dXzoJHjP7Zc8Ld6LRKvApwxxNrMHY6KtFqyW4a1WHiFs7eFzu8YBW1qf5xRyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeuxvePM8MKtZNf5G4ihkuiaJ52SER6f27PhoV3rwchFSdiP8xYu3vmjgMXqo6g6zaaZEc6aA2bBuB6kAboXJ2V",
  "key1": "28S5Y6ZcryPBaKUEnyYc6WZhzRVapLH44fpHF9LpzSWZAPG78u4LzNzLs3rBGsVChhHnrUoAFasstbTbR43eBsYQ",
  "key2": "5S9BtesyPUUeBTCwJXtLQpgtU3dSAeQdxHnJYFhQRqWSevvxWYeZjnT6ow2mcCKQgU37RBxaJ3WYWkZo7Z4xVngV",
  "key3": "4VZZ32N1G2SrZs5LcjELV1gNMQsg5RoYWgoy8Q5ZJH1P8RYvSmPWn8BFQmidt4MYwJvP9VtCERht32XbvViSx4uB",
  "key4": "3wNkgXQbGpLUu9GzdxcHzQEppTnNYo1aK1WAjMCweibHpeqqn8zrddgP5SkDRBkx6MYd1pw8GEUYe2iKqi65ZcLn",
  "key5": "3Kzuxs26HtZrSvVFHMziC6jXSG8HFJSwM8C6rsK8innj61Tx2xWfXJAaT66J1jRzAthifgJDFcNRNvMoFM84krVs",
  "key6": "62MzqNraNfVxu6mjhUjNp97kppX2y86G5qhLXxYiRv9b31pvVr2pAmxhVSe2n8rK3ZH9PQYx34jpaJKp8pywqe4C",
  "key7": "3LeBt8tUxNkMePwyZignpvH1npqzHa6gdRpxa9vEQ15wQgcUTvh1jVV5qLxNboUdUMk45wmFHFPzN88ZMxzBvH3E",
  "key8": "GruCcCZGa5H8g3YKjX7SrKZdBue4FoRGqRXxEZK9q33SEnGNTeeFDpvBQQ6n1bDbjGSsE32VzE7gHySfHTLsVfp",
  "key9": "631pR5fYUpeQHetk5VJtqxS5fSJcqnxDHtwp3ZVsE6NsEQMWnrJcSegzLGHaiz2DVqaGjFFkmvTZkwjztHKrsRPP",
  "key10": "2pfKLA6SL6MY6Hf58GQypiWyAs1EyiGK7JR5bEnKsJ1sqxh39Q2iZS4MJSqXzypSkqeTpvaWixa6Gv2udV7Pm8uG",
  "key11": "J6LsB8jCLhAQ3Mk9vXzTVUT9bbccxU7NBA8FQ6ZbuPnBtkNKph3v4bEdjeK9s76J3vfZFLtthbU6aaZVibB1P9j",
  "key12": "4BQ44WeSw6L5i4B82FApcPkBvFpBs7i9D9HAaQHBQAhJ2Pq11EaUfsUNd2qTSjAPbduA477wCmKSUn6rmqbdqfKT",
  "key13": "3mdHuXeetRJMAA7Zrn4gVC5uem7HeaMhwP5Rq8N2QatxJYN6kZy9Ms3iAZ398vhkhtvcV7stK6gyw3qAMzHw4hf6",
  "key14": "4Cuh3LQDsPkS382yT6DeuCBKPSWyHMWk8MGQX4ZNsnKHwBJ6ASch5AfvSRAiBriuXfjW9wSZsSeUBeNz5QcCrkM3",
  "key15": "4fFv1eG6Qefw2jSDNP5WjmHHzbGCUUXU6CWJUJuWCNu6jPnmt4e4wgjU4PvZ6qovYY6aF8uaRjgD4MzdvAoW6Tft",
  "key16": "2LNjRJhiNejxGC2eo3g5bo1dWRVfk8XVKt8zpqnLmvfg5dkfFd6x2iuk7BQUQzatWT7zcq2HRLVLESD4q4KMPeeL",
  "key17": "4PqFtG8arqi8ZU1VkeTiJv8Z5UmS8xSbjiSarTxETuH7PUZKKjDgWKC6wV6EnZSXZWD2yUFWieNeUiNMG33gVXgx",
  "key18": "34FzXEbufVmML6D8q5BV4faaH6zmD16mQF61VpgP6P4ZSqP7Sx52iFb2EBqMpB9oLcsTHt3ru182X39HRqMc8ZGA",
  "key19": "2qeDuPV11Ws1PJQxkLrPorsfnG3ahwC1jaWguDqLdYU4SaeFWjmc2ZqYnUKRDsz37MboPhJVNLDsSaZJSePFuS6k",
  "key20": "3npk3WjrFPCaHRPEiaPnEELS3s1QKruVq7gwqbrGKsKkSTKwC3ZAjH9vj2nYWaWb9pDdrp7aW39SShdcuczXguVm",
  "key21": "7vjgNEo6pvU21QzT5hvaTQk1tx2SouQtpGmntXtveMbnkeoUPpMBGB7vJiL7hA9djaeEWWDMc29UP5T1Apzf4bU",
  "key22": "63NDikG2ubguuSk4rDZJEkB5MoEr7uFLsM71trrWjHhEskdrM7dyUfeW7oGk49NszdzGqvXs7eXq262cyFW8ivme",
  "key23": "2Wa8KKLZHZn5Yd4FiMLubYdpvSEoET1Vg785QXSReQrowiYMhFwp6UdE5L31ihYqbZNQPwf1W6ribk4fsjdFbRQT",
  "key24": "5AQjr9iiAYCVQx64wt7A7J9fgJ5XdYNJeWGKt7rot13CPdWkNGHUH3tbvcDTupPf62BeC3Eto9YTeRszpncwsUZP",
  "key25": "c2iBnALjqYC2cr47e2NkzYpiWm45hHURqvBg2SLqsT7RHdvYWcF2sVpCS9SCD2r8jPdNkKsUSHxnAVh14ChsQG7",
  "key26": "5tYWSWcXGBwJcX985vipoSFBvnsyLJdiYxB91CUMVRXHTrQptqN8btg7kDq8XxQwm5WWjFGaaU4PdxX7MhGvteBV",
  "key27": "2p6jhN5qJADfF43Y2yepyo5a4B8h463fhkgaAX2K234Go2rsMatbiq5USixkfeuT6mMDJJ9yUguWpXxNcarVjPuF",
  "key28": "4iVtDiSkEh1KsbhuWL7wcp36JyuqQqmmhJi5a9T1y9FfuYjpPQLQ5XWGLNFAx1m25QpSowyFmwdARAdEso2Gd6RW",
  "key29": "3y3mctjhmZhyX2jhGt84vQiz1VHrimzcgRn2ssCG9Hsbiftd4DbDRhobNLgyfSMTJnX9PFpkGygDtGSjw6ASoRWo",
  "key30": "3ihJE59pzexh7veH4LqnGcgAMiNZcCzPaN3qAnqvE9noCnbYT2hELuzi9nmiD2sWvP7C9pyA45wo4qukhZrAw42H",
  "key31": "2zPknPona7fXrR6U3W47wvRtsFqKfeLPx8ZPzuzZHgP1oVYP4PqyghVX9tYRHWMziBXCqTuTADMEnjpfpyVyr6Ph",
  "key32": "5RC2koDJdCRWT29rBVZQKVHpiQzR8tNQ3n1xSDc9PWKXx9Uhoyh96QKUrTfVYUqasq5fBKRnH3471RWrAPqnScDV",
  "key33": "5FcPE4bFiJiS7E7z6b3Tg8FfrCjreTCPYuoTUgF4F9rDntftQ1JtEQm1EAReayH9xneRKkcnas1CQDiQaAzmQdZA",
  "key34": "3nixPW8bPnLELpTEx8XpeEz1hWWhVfWSjcJKzgqxkxphfcpFgwSNa2sSM8YyHW7dnyTEXi6FL51ysyZdTp6HABLX"
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
