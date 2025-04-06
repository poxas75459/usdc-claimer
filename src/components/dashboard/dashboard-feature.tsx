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
    "5XeswjFwzmzo21XC2V9mEEYo3Ufr26tKt8Je9mWv1a8q1NSaKLEtnLXKEcCuPqRVX47AZqSLJQWjTRRvjhAnHApd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CyNsnqcvZnWm2AUbXg8nP5wPbjSZcMec9safnqggSPmpySwTpf3nVuNRAs1Moj7qT1u7wzoge9XDkmu16p5Z6NM",
  "key1": "Aym3rqwkFdYpoisZXds4js8W42KS7SFzknFnQobuw4BBsxHoScCVhDjrz2M2xt7585k8sQFKyMEGvzQYSLNHUez",
  "key2": "4QpBMncwAvXETx3jWgJj4XdM5Xkt2oP2B54brDjN5HA8srXMTV8QS2HtFWsAFMcJT1wfvUhcbZwTDencs5whJ8ex",
  "key3": "5Ko4J4eRcaGGCG4Fi6AaXmEnQDrQLFuMcncdtaSU97qW3Kb465ArhfTi99rG2v5TdACjnddh59zrssKunHfsLcFR",
  "key4": "YWRhCkepmPkFkeothtVzZj9i7NeThf9NC1eAQxoeHQu6X1w23LaM1LmLC2J6qzAod3uZyUo1iZP1mvEDfZcrQKb",
  "key5": "4G7TfBrjLKFVsjBdRDtwwbDERAY3SyN94wPxY6GMHENdmPGD7pLUResKmd8H41hhvPnJKeorqTnhouoduNFNhAm8",
  "key6": "VTotJvt5NxemQVS5QBU51TpBSTz4tqLdpTqzS7RKnJYLxPnT2xx6gqoqN6XXHktB6pt8WdiUb72DGJv5sHL6YsC",
  "key7": "2S54ftAkHUZ1C1tAFGtZLzftTu9C81Jd8wVeS7jHp4PeoDu7zoWG9hkb7CA9QbKyCfXY9gctTbbBr7ytHM9Dji4",
  "key8": "4MVUuE5zzUJNJ9N4s7B5emUPvUU38MioAKP1nZndxwvggANok49TMmwwGPvgudxX1wyZR1wEn9Ur7Uxnx8ZJJVQk",
  "key9": "2Bn2iyytFcCa9vgjhd3M2HeKBRLGLw1CZarFwLTX6oTMfYBzfHU35kXLbz8xQ9qSMG8MhiAnJ9LSY81NJnkKXFuJ",
  "key10": "3LTAVYJ5cBNAEAsWw7TgoTEyxZGYoGDN2zrrUzhDkGBZw5vYom1jHiYsGw66GjGxvP9Ps9oBZ7oExERM4SaaEayr",
  "key11": "4zfuHiA22woePh1CHgLwgomd5s1YfbD841GGU1dWrveZZ28DKaTmUQWds4mRAkGEXsiofuJvrXLbXH7B1Bz1XYsz",
  "key12": "aYPUVzxH4ZnkNqJ4WepNZrZZfgsVC4dQvX7aqBK4e2mFcaJxEA2t4qbYEoNwdyjxp8mibmG49qkwi9Fk6EzV23j",
  "key13": "2a9eEj8yHUxzur1HgMcdFwrpwtC2AVKEmoRmTmcaERBVxuEwsmNkheJUtGg7LPX4HrXh8UEQtLdYk393s8fMes7w",
  "key14": "5vyJSsxk1DSwjd2mU8tvq4wHz2NWPNdpZogm3T6vNtDa3pGxZXyfQjJoRGAr1jJgF8zJA2m9vxUvdV3pjaZTqBLL",
  "key15": "3XUHJ4eUuR6ozHBd2zWpDY5mBiRTuw9YKwyth7j7EysGe6zx1T4VqwZSwPSF74T1tEhwKqp3FzMATJiXChfLbEag",
  "key16": "5P2YLVtqGhHPFkc62jAzmYBEisKqmcs6DifU3krJ93t8S7PDEeCJDhjcVBcbwchCGs9QTEfUxiW75J3z5rhKYXPc",
  "key17": "4nMPHst4DmiyzgBj6a5HWXh66SdfHH3dkCB1b84MYLNqq9SJGdjaoDvL39z2wphqG18DB8TUqbp1udw3cboeU8q5",
  "key18": "2qR1yBsZELsbMs4LvTKmbMXT8dzGfHByjSgsXsHYorBGjjpxVg5VHefxdr92ez2NZgFV8iYqUR6EXD684jR4aeq4",
  "key19": "5cMRjo8oBDGtjRj3MvsYqTKoxDucn7QAT2GFGJPzfJNKsqCeze8CHw7FbyXhHLLTr9XbTiVVjXgtAS9pdoEvfvJm",
  "key20": "4crbM8z1WpEbfRja4mN3dfTYjCryBFU3NYKGjo5KW4SADWErUvfSgNafSdQQjPjReh9vsNbJnGCY1VzsSxWmPMZB",
  "key21": "3EQWnxav7gZZAAXa3eceF38xZGsv7R8DksfMr5jYCLpBBDUReZs3nFxxYauzkzdKBQwoLHZqnv9Z46yLGJqn7Fpd",
  "key22": "4F3VG7AKWcjfsTxoUkaANBsyhiEYdgYz6riApswzBx5H5ZmgPSvKwgbByRPeTofRa1UiUGz8u5f7W361fMi44yMN",
  "key23": "2b6inJFVE1dDYZd7X1L3p5piAmpx31Zao4uTu8JY2VPX79u2X1rtCyJQ4o1kV5sT6Dgp4Y8zaXv4VqkyJzeoMiuf",
  "key24": "4DAmFyB92mjQ8HuiVt36j1SQ7tnJKvFnAdGGhLbVa6MxoRFwWaZjE2F64LHQkXx2fSgfuoLCbFRJo9Pp7tXfK8ux",
  "key25": "4bgDxrfGqTdbqkkVfoUgwNoLegtevXRYQPKk1XNfiLMB2BwniFWmiFjoANtsgM5YCwSkyqefpk8Eaq4wfFDBgSnJ",
  "key26": "5HcnBCBqDn4pdhWK6GS5TJBi744Ek4qnGwdWo9JCu19f63BVRsuFKe98bG8c9jottDBuUweUEzC3y2Mcb3dF4z3Y",
  "key27": "4fNWxB8LkaGMQkcSDkF4TBR1uCRvR8XvPsv89koHtq9jivENednmoNPdFKA9DDmhAh7x1m3mBJxTkReJze6pukcq",
  "key28": "3Pvd6BUgXyFEox51SJjHWVnFQwrrnrrofbKg33JW3UNu9ep3M3ohs8ZtC7aCNuh96QVBrfzDYYWP5EJPw52RVDMJ",
  "key29": "649DLmymkxTV2TYgiCL9rQp6UkF11ygf6DtkUVkwQnP2SDLDNhxQ6i5Krvit2BMFk5wkxEEq4DyszKVp4L4QMn2m",
  "key30": "5PBwWs6h2ioEwdPY6ZjUt2BvmAiBpTBpAwvFKX9Jd7MJrDNbN6RccxGn8iayPLsTeELHnuvW82bWRa9EiaefeLk1",
  "key31": "4JkZ9gkDHH4BEreUFgEWB69j6KXJxxVK4shqc332PPBSfFhfoJY11pZAuG9yb3udnQpDScfcyGc39E6zos7HAM7J",
  "key32": "2QBYboeibfQ6wwqEuT1mvC4FCP5VUAp29xeEcEjaNZxJzfCPzJATVbuXcPCE9SuXhgRR7FgpxEkLr4QFSRNnMHsU",
  "key33": "v8sNEoGdTtKfy8dQSZXWgFBeHXjmgJVKXV2TUssXefRkrFn939j1mhYuPTLPYL2bQXQUR8Lc9MXWXXQHxZonoZU",
  "key34": "5SAoRzEU9NXhn97xcccyhP9cq8GDEzf59UKkpLQc2x4LHNxLgM822YpzLmuBmhQYfrVNCia3MZW5iqTTg5dzmzda",
  "key35": "35SJMKZbjhgC2K4X8eBHbJfQBQ2UD5jAmrpaNjV845hN2WjCUqFYDPryzS5jQazEVpUocJkGdkLT9oLeGapD8fok",
  "key36": "31Rcm8PkFgAnUbqhUuhrGKcJDVeh38jSyrJL24Lq4tyvzWiYJ87LsNZ2nGf56hV5tTtF3ksHNdA1Bko4gkXFJjvK",
  "key37": "2AbjXRt19536KqomHy4tLbPsqnKBVGxDFBsQT6QfCpNrkPSUJqGeGWqVPrZKUPKyhbcvwaCvpzmkpQhzugrHXReB",
  "key38": "5MkfU5rfHyxAr5iErEPPAN2yJMAhVf68chao5ZBMLy3AFKid2EbBkdb4zwSFN1g5Cy6N6JRB34Nc3pSXwBadF9So",
  "key39": "2XYGZGmReDyKkASszDaJZCH6YN1ivfueWhP9ezDrL5ucPKRBJiiYvSHDMEkfLxxyRmutBYUmisq2NQYzuwoZ58CW",
  "key40": "5do6kcQj9VioGFSC5ZDqcdsu8FNGfkXVZeibAofZjECAUSidHKeebdpqw331ZjY7k18LQpENf7EVyheu1c3z5bXS",
  "key41": "MBHC3QyS99YNqtPa8YbFLpNb15KXvqMmGQUWxTNc8zAJSrUckDhmDZjUzKoBgUkqUBYqLbetXU9gJkbKCECJjBr"
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
