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
    "48q5GAEoyCciTT7cZn2DNS99LpNYPurJYafwopJYNuDGPksaj4yscFqhddLWCFDca8VdfYxLiQ9RFavNEpnrCopm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TpAJLiYPMAaRt1zdR8SbwMFKAztyzucpA3xy4w1FwS6obrQMsbm6nxSXcqGdP8Up9ayRQ4zQTZGLnxzf4kvkuW2",
  "key1": "r3niEQJgBVMrAsMXJs9gEXVFCHgZyH5fHCVzcivYzgwpbGvdsfcq4WCZBMv3tdYhVLGjjPahRUPAjGhMd3dj25Q",
  "key2": "3DcJvhm1o8BEqmb5PSRoR6YYe8vRYrPU1Lrf83CYo62CHc7NFYA2UcLYuaT7FAgNwY9Nc9mjHWynduSKcz2Rvamy",
  "key3": "2NJH9zChNKnRwoaBwuYhiHDdC673wQgfdE5LsDyhmQ8PbhNHk8D8TDF3H6UFfvb8MsCS7VLTjZobwcTMbrEusDj",
  "key4": "3XKCJijnYhTxNckuGW5LHWnB5SVXs24aK9hCfXSX3seYmkUumEL3EpFem8W8HBy6dPVUhGDBpyAhmmdpauwg6JPL",
  "key5": "52uxZG7ir2LZ8Qyz8Ecsb93bmJBtCbUaB7kaYa9HB383vhnEc5tuVF2mZaZycGJMSRefC2Jv22BrsBTkkamCbsW",
  "key6": "5iqPSbo7RHZi7sTKpo6kwQLgFZNXtL1CLDuB9fN2eXECjKeqbtMQLA1oXybBnKqfnNbU5dWXsSYNUUd9S94967jE",
  "key7": "4RUGRRH2z833mzdCB6cYQR9vWFJrumJPoR8TGBGVUaoQpa7avmMJHKwzRN6baaPXCZtMZMWxYhUS1s19jbpk3onD",
  "key8": "4mdMnVs8XL3PyTBf2oquAbjmoZ35d5YDbgdFfEdn2ZvW7TM6nooy1qPM4uuo8TVMFtXcjvz7bmtBK5tAKkyPWcgg",
  "key9": "45kUZx38N14e82GigSQ8QWAiQg12Eia5BQsJcPQFfciQpTQnntt9trHddCsXrZAAQ7A2HaTPrxaqof8646siRQUz",
  "key10": "4Pg3YNFBjH8gjpXKHEn25jdxsuy7WvgaYmkFARYYKUuhDcFXgHxehY8k3yeq5bcphT7zT9ax5fXBgQ2WNnHFtDtY",
  "key11": "3NjqfzzvdhzB8eRVuucW5KcrpP2Ek5CQ9VoqcExxRfuophdbCxnFsJo6yPmW5ShXpgm95UAHAGJ6NFzhPfJB3hoR",
  "key12": "3e6eJiUGTDcFHV6vPLeQpLZS4FU9K3RyFYuvwora6Mcr9UeNDZ3YfzYmvEPmDxNEYhMGEt1zLfpzPhCsygYDvM56",
  "key13": "5St2897bLP1MTYUx22ReGGsm39mFQbKJei3KA94zQVdZbytH3MWo4V1bdM1nbzsMEz5hWYrgmeXspsrF6hDVvQ81",
  "key14": "moGXrt5WyaoaFURfBqe6qwqAogvBb14Q2hEZ6CksJaeSyxHhHUBQ4ugFbuiY871K3CxUDSbf2DDwyApUie5E21A",
  "key15": "3ubfrCfNhFDkfb2XiCK5MZsHD6jNBNXcSr3xDQepuhuiT62Z1xpLN9PdHTVVtKKY2TGYNJq1Tv1zC75pRRCFKCG1",
  "key16": "3f2rz8ebga9oV87ca2rX7nPdJ6pb8VaAjtZqNQ6V9f7Bjxo6JKtRoX4sQFRiUGeA98JK7noi7hFDpRDrxib3AYEZ",
  "key17": "5mrJk6pfTeZWC7qPKQWZ4XZ26iffrS27aNxtDVXhAXK2gJTwAHXvVFBYz8n3Go69bjawF5ZcP7soLHZBSGUZq1K8",
  "key18": "4cK3x9brj3uCnKAVX6Rhm34gmFGt5BzwErvuECBJNrPxis99gozJSHE9rRG4QP3hw5X3dNptFYPuYphAFuHhnQMX",
  "key19": "3785Tz4Hv1CYD2pwUFH7dMi51HQmBNVXknn5SDFuPzqnSegzbU2kPiUJHpbZtCL3hek9zmHuZWNvMj3pLSPzRitV",
  "key20": "4ctSLQze1JZWabfCH3VRxqURJp1Yy4i6YVVnY8EtkN3hPJxm2nwxnS8V9yBeRwMjAH4aFhtfqvxVAh3oQoxebsTx",
  "key21": "3fbjWi3xk34wEmkHPo1nUo8Gd5wGGs9mWZXB8StEmm7GyrHZMrkjLjWvSnU2hXS6RVwArf2VaaXBtTrPP1Kidgh4",
  "key22": "4MArFDdBK1Jn3SG25bJXQX46p5qcEk9eiDcrKoi5n95uqQMECxatcKGnrM4pBUkofFAnRjZeRcW8Y57WRnNYqDeF",
  "key23": "4BFkKjtnExmRcefXuz5LcqQPHk6RFWmpJTBhj89nvcVxo9W4nwgTWQtYk7j7zReA98NWHJ2N7UA4XUGP85KHurm7",
  "key24": "4VH2h92ZVt5GJGTkrVv4174eMKaXhce5iZrqLQaZ85Br4BMi84T6CTZg27cDuXwTmgtfvgwKyJenWhH76gkcxbg6",
  "key25": "5kq5VxKM4y6v9iHZRBnnStP9TTt1AKuqSJHhKKtcg5BXaybNKSufq7CNYEVYYPu5csqohE2Pd3tAjoVkJNv8pJeP",
  "key26": "N667E1A8pZDVhDwom7Nw4rcQdAfceXii3Rr3NBv27BP4Jtr3CFKHaB7YaPCkg6dW3b3nG6wFaVBfxLU8LJ9tmgq",
  "key27": "2pPnw8mWfxcJHDqoLcbK1WzNShgK8vD8i2tcwHXi1cB2XrZ1Rdkj4VZpGGw4j5hk3jEQUzCBVw5svcZE6zyUnVAS",
  "key28": "4Qy7NcfiGs8V18zNhYh7CocEDykgoXjcrNVLiCZfo5HDsrWPTivMZF7ika2x8WR7VCKVi7auvM3PAKWTBMr5nzFm",
  "key29": "H5VAqX6xR2is3o6qx6s25VCbQEvJPBc3Y4diWCuHQ6F7R8fzuLtu5RRp3tWydcTHnvojCDrYYuw48vSYDFXETz8",
  "key30": "3Er5swDbrqNEAvkb5QZap363mYkj5ikHRek9Wr4iXc3Cn8kWPparSt54Kpo6BVqvKYGe3WeT6mN5tBAXjEvN7r47",
  "key31": "4LheXFoCEcrYSKbLn6kEMhEdRf45prrLtNawTYHjirbdZFiLZhKTdY8HtA2YLah8b4uqo628wysPGM3MDDPBBz5",
  "key32": "4Q36t3mYBz7LWdfEtZZEJjNDsWgYzaqktMQ1tBFpfSgx7VExUJAVeFyAUH35BQjkWGjXh6wB61g64oRFXRf3HSpU",
  "key33": "4yGAyLwLTjV4MVkwLcBMeokpaJ7ZXMDZPyDqtEES8Lt6tXR8e29ewZ8W55QCn85H4Uopkp22PjJ5Q9YN5Y6WGtKj",
  "key34": "5Bmko2Uw1V2mLdQ3UjXexm8WucmrXsebghUiEuWVEj1hBWgNE4rquFfppP2WsP4rRBMHct9qd5VQE3oSxcBtDouS",
  "key35": "2EkbkPiaKU1pn85ukXUqjR7bxtT64sNhi7d8CuCB5bFTsk8rudnzLX2UqySSHNLTRbV9nGNeCyvC1nVuGvgNCXgi"
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
