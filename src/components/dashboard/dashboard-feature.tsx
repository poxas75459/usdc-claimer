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
    "3AM7G3Rr4ArdcQdu1qj1UN7JSLYY9hs3bgZ5gD2Sa8FYXPtYSCuWggcgDWjMuBkohxv34b8nM34pmYZFmCgmoDga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SxWSMkXTUycvjmGdbaHFVwn5mdpD74BFjzDW4KkpjmjvRXsWUb9jFiiX9VDpDCeD9jzfLw8kaHV8RDqpEH2ehRv",
  "key1": "2mTUR6fUEv93jR2DqBMBKfvNyBsbYHaaaVYpoKb7jUhJFeeMNBbPxe98UoGph4STCErfkKPNV8b76PDfBjCSdaVZ",
  "key2": "53AnU5zfTman8c4FizXHFJWTtLAsW67Uw1PbNWwrng4UursmFPKcb3c565BRpBs9cPZoNTZsDuZMTUzQk7YQ4BnB",
  "key3": "4b9ufsSG22kjHHgkhvYRf7wy4SmHVBn56WkvapBNQCzxbKqAFXQvSQxu25rqfvLjQ22yojNaV4u4FVCXp5KmZgx5",
  "key4": "58gHj3kd3K2ThGpTN33SUwsyMapsY6m2hy1KVNFeb5kmpbYbxBz5yzFZgiHegojzecegxq3ywThvz1sqxRGMGJi8",
  "key5": "33utqS7SMtv3BQ2REEUSaEMRW9Z9qvXFpDMmKbyJbWy23foq8fYdiik6jtXToLkBMeoCJQ5FYH2n33CqFYax2DNG",
  "key6": "3Dv9D9ZLzyFwWfFXwHKyqJ3ngMgEXe35RrR8VPLMsPfwcvCJrU6JQtBcU4XzuEzXhuQgg9rLPm68M9S5MbLzkPQE",
  "key7": "4t7VX3vgNVwKy2v9XQyE4knoCjdK4seUBUPGKDGqhRHDzoWCJJqsAWXjuhEkEUDjM6Gqda3RLBFSuNW89QGnqZxA",
  "key8": "2NEuLtNqAvUEiFMCodjAVqH4yoeZBShRpgdYeheuDho96t9jxUgKDmuVP1TtGWVfj4q5YLoEp86p3oFtxxfTA9ex",
  "key9": "3rrHwtiUzkwnuXkKDrs2jLhM9T7Y8z5yWPxHi8j2Lk4mpJDoU3GsTur2v2VqCR6G55wcDeuTuYGVFAEEg7ZnWLxL",
  "key10": "ppS6tCUWjtyAReVjutsFrQn6dGxX59PqfaSGob1nSmKY95ranT6UUvWi16i1gGGWRYHrjzJ24JxJoGMLMYU7Tka",
  "key11": "4GJdc9L2TxSZTDKAS8gt7KHxTPgkkttLSnLzvYGt3BnPWN8LWerV8ghxC1PfsKsWpoqqUaN3MKCUYozjtVgfpxAm",
  "key12": "2934wGQ1dvZrxaMuW5edFqnUP2imfukNN9qNXhJmWzfZY6MK5vX8RxG6gnAfYs7awG9j6rnisWR3wHx7etCyLuk5",
  "key13": "5uWjswMz4pzzDY183dembyKJjFfU6PJ3H8s4HDZ5hEsLcZCzdEM8oLcRd6vs1QCRBmJHvaSkZ3ovJJa1qrukv9MR",
  "key14": "5bKVwMC84TmtsjgzZVmMzQRYkTbMSRLHNdut3S6jAwz8rf5jrwuyxxoCubreBhzyX1caZ7LegC9he2jk1NGHYdjB",
  "key15": "2sgiiVYPmfDp2HVDBnmR3atBubCfy9njjNH4LCb4HmebKN9CXqy4c3VjWJjJjLkAoNeaUSy7RA9U1aJ9VZVzAWyz",
  "key16": "2AGUCQQ65iagcBzqvS4UTPuAcXZBc2miFsaHpfY123P1Pq8RS2g461ezTFWCeP6wNdTWBydWnTgqkDc7DTfr8Jfd",
  "key17": "8T2GjUmVAiTFZitvAmEqdmNami1PNLEn4FpPWzXbejtd2o3pb6UFLXJxFhYh8V9bp1X2sYQAFTXi4P1oeDaYUCK",
  "key18": "9PRA6CnMDjP8ZoqS1pXHzntQg6q3BKn5Kt81GAokW82ERSuGmuuEcny7ZYxeDLcUdUatkpCmAbd2meU2w7uD4Sp",
  "key19": "5DCEuHBQhKjdoWv9zwzab87cGNPwtap2e4pe5SZSNesNXFsbPyfuz2zztgL48HNLWkH9MU6DqG6ZidEiYHDaN4Pq",
  "key20": "43gSDNZiGq1peTXYMrPy4VtgJrHCqgP1H3tq42f5JAavYqggWs8v1rHsBAaN5puuJVDaWvoBNH5eXpaVfszukZg5",
  "key21": "5wZgx8MYy8fdThEjFD3Fu47w7E77F7epfGibMfAH4pGEdt92eYh1nyug7M7otf3zLWzg9esLhk4fcVNMvqowM93f",
  "key22": "MvsnWKkr6ASh9nngS5CUH2KNgJFhi983dLYCVcqMyGWRKrLRW6QYjYNBkZAJqXAqaf3xZkP6VWxKZu9G9Pi7kPu",
  "key23": "z72P3MpNPerRyhjBc56z6cyJsSkxLT2MEh7VPmxTUZF4E2AyigtJz9vU57gePeUCtBUCcAKPk4Wu9x4Eh6odXur",
  "key24": "X7Zvtsf2a5YvrTJSN1bkzhZi9tEBRW6x5bjf2KsyPu4GXkrdsD82Hvhkgga5L1yf1Eoj7162bLgovVtStVijqQT",
  "key25": "5yWLXdDVmaK7ex4PYAnb7qF7ix1WFpSugfjLdWuEfbuCsvG5Hi18PAjpu5tXpCz5cPxgPbHBtVUehrCvCGJCqWGe",
  "key26": "58ZXhBqx85hNEHLrAfnAC1FmaZx1hJKZXk2kdbw1g9caGBJfTeommSvvBfzj2kETg9HSJ17ZFaUBjrVqFXgao3fj",
  "key27": "51aXN6Xv4UQLrq7kaNCgcK1oGGMZbfYecXmyrgRyn5ksUPFKx545aJyhhjKL3tDgJ9yY6t2wqZKEf66V9AgzJStJ",
  "key28": "5ZpieHavApMmN57RtG5YzR5A4ojg9TJcgcyk2bJryzYvReL15zPF2ZDaWwemhEtTrLZ2UUXCdPP6LtLCbTMDTJfo",
  "key29": "3V5PxEnZeunuTL8qhbkUs1bDJDzyHKagZjcAum2axxomp58N44gAJk29z372Y2yhc5FdDBjgy6wQTrceEJNpMdGW",
  "key30": "2E26eVXz6jV3bLiqtchx6GUhRaedCxAJvneTbvZkQMZbY4vbRgu4e6mHdW1EthrZTdP6JzYL7SLKiZiwAbYL3PCx",
  "key31": "ZwbrDfgqPbK9RcfrCZRSEsBaUh7YZauPCnh4XAAoaZz1gPHx9NkhdKAVc5iDkUwLTearrYvHKtAVqDPGr1AP4ut",
  "key32": "5KnM18d4ieaMepj8vhvySrFG73JzEXWTXcJZWrwdkbn4ZxhGGrzVWBKabt3kVhQQfDZdnnB2pTZhFSD62dsx2eZE",
  "key33": "5RVW1vnQh1g2CMsBKn3CFkvfbeUz81o6zRX4raPFhKxZsV4nsfXMKzQCyx4hFwUBEm1yvgZucSwGEUUPebVdgk1g",
  "key34": "5FvGyZSpVGo6PtL5ciD9qNPEKiLpaKbvpD6m5PuYj5xYZ1HjiCbGFgnxiGuJYq6rbMFhN7eBvTHynga4rtQreFzF",
  "key35": "4iy4n1n8yLqGwNKpnj3Ltck2fGcbRwRWer12XfvnkMGRfbZaQVHD9GadTYVQ3VfqBY8SDphUAvC2NeZM1J5EoCHV",
  "key36": "5YfptRgAHu71MVkxY1JqQYSYff9871UFE7PVyXajK1jPzGHRdGumwDevebCCgkpTBCyJ3U29n7BvW8vV578LLG6w",
  "key37": "QfrbELNuiSgwu1EnCm24x2ZuB17xg4KfTfYJNoDaDc5qQ4VQWKgGcoYo1NmpjWvGf5vShjQ38EZPUWne8pQxfVS",
  "key38": "4tDoYjSqzwfWWug7PH9ERq6NndyTi57vPXgSjjJMXZPwF6kihYQ3NamvpxYsAzYcwSb1RCQQr61s6jXiB6D1Rz9a",
  "key39": "2Th5QKbnv4P7NH9BxmbEYQ5nR72MG8ng8jyq4Lmf6wmy6cK6JXHmz4KZuvg6pxPm4cXQPhKDgp8M6mdoZTmfgFG4",
  "key40": "5Z6StryB1xcVQKUG9hEe3RA1sSrzWTyVv9orWYbJLtkE4GFcHFqC4PYvLR9jLQs5RNHVvNsY6xS9wcmQzd3idmxP",
  "key41": "3AYfRycj5d3PGahm86QgvhqYzWhEShib34UwQTLxVGca3GKX29z8pov3tkZETXV6ZnC8k6nehCSqKqeeSCvYUcC3",
  "key42": "2dqNKd7ftqk94wEaTom8tjzdPyvX3RCvjyY8w29sgn8dyKucsoT4feaqPmeAeV98TKi71TrFczjMbCqZVudU6x1P"
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
