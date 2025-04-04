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
    "4AuTeX9MNtdw4jbXkV4wYhSEDmv49Je9Ncw2Q9zS3B6goJQScm8op8t4V1nsxaUwVYhPkgzAuXFVtQ3Z8tQGKgtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274DfqfcCt2ghnLJUTq7ht3UbLWB3hazBNZWcMDVi2wb2FBPFtpprQJDCS91g1xAKL3X8azgVp6HN9sT8Hc71gQJ",
  "key1": "3Zoe5eJX5RxR9sZ9eCVkZsoSfCr7X9GC4PECeHHUX8ASAKpFtehbXDnzLbAsBW26Ygc3F1uraf6aagiR1ntFaqbt",
  "key2": "28kp544YQZVbp1HmXfQSRFesvktwqLo7YGTkQK3hP8VVgKYfi9Gq2fFLEJnamZqPmdcyxeKudU1NY3ZUZdRUj8ef",
  "key3": "5JyiKsJogb4tzeZ9ArqCeTmbsoLfuhwMrzUzPBSQyfBw5v7qodhNx3PsC9KcJqKfLWPEx5p8sZ7oc1JySmsc4L5o",
  "key4": "2fTwVac5qbjHCkYizK7QKY6PyftMrHjvqrdPXxvcUfiSYeFzS5omH4mQF23SaD5xm6zknbMibEUhXzg82oJiBrJR",
  "key5": "39bQH62GRDgxuhjc3VQu9xYmm78CfpmAc5ayS4m7zkBxpcAFc3zNAh5KPjpvV4MVWGWJdfkLosfVvC7WRZMcHmLC",
  "key6": "CenshVdqb5ddukeAHwLuEo5nbbgXAo6dSFk4tszh9bauhm5To21b7MmnLNPs9ZroUCFABmBj6ER42voQwRnZQ97",
  "key7": "4pBivM8HS6p5U35WcUgfZ98hA67WEzWngvtyDqjuoMVLgNJKYA18QmjsLN5tKVhMudxFFU5UEBJbLXju7PTiny4X",
  "key8": "3LnjWFs5kvBye1ypWRWv3dEYZGnKMy9M3PJShyenPyqWRyrGnARi8sURy1wLWhmCwfjaMREXKpAqSfyXKYLmBAkw",
  "key9": "2QDa7dwxRBjMCbQi4oJHKAVZjAgrxBtV9mhyyZm96MEQQ9b6ABN1sV45aWJ4xhraAHN4sVd8xtf8CcgXqnhVnReZ",
  "key10": "4BXcgSSvhyb7zeFSHeBQdjSvRWYUUfFPLMGxgECCbFuejqzhMmBGhoD4GpGzy2cvCLYmAyEYLUe5fxe2iMTXNGgK",
  "key11": "2jbRUrxYjZdspKPvLutSgWzWEumKb7Km1pJXwR8MfJh3igH7xCztmzCZyWFnU9ugaFhSstoYmU9DZiG2yfxqqivQ",
  "key12": "3XYam1zaWhhaSCFnaetXEGyTGWofR83GLWLUTn59HDbzrv4tfjE36ewvXGcN1FAW99xtdWbwdJgiWoPYZ2dQTkBg",
  "key13": "2Ys1mvJSun4Zth7aXdbuUrHGjQGFtJwXmFL8SvZDjiGmNQd3FFTN4zznYTbxdPuVy93sa7i2CadbyTxAWTy1Win4",
  "key14": "mxCo6qjNtxKbsPMHRsToaZbu6AdcqgRsT1Kw7JqsCrDvAYZ9Xn7X1XtjDQtXmWfw51DmUYGat1vhNrP9DtEBeDM",
  "key15": "3MAphEwWBHBNTKtc1HsMrn1Q3YR7HCtdUyxfxDBoFQzKFyaGYV8DGS9N118zSCPLKYYneAVjtiwHFr6Sp4HMyW6o",
  "key16": "3zChSnYWaGvaEJtektckCJQTMiASDSeA2APmZJ5bmVXjrA9mhnYwkdAwFv4dYVBvnNZ6VvdGz7VV3ai89HJwZK1y",
  "key17": "5mU58RL8V6K2nUtGnAnz9vFzgCYnMUfJkaH1kAWaVuKguXx7FDEcrFADEYx1gza6TCfbKVDbmFLGYXpMj8wMWa46",
  "key18": "5gbLnzFZTbZom14cyTN6SfoxJHZZgaau1mtqwwuNw4C2V8CaHLUqCfPZu4ycP6G2eEcrR1ZbceJk6giKFVaeE9aA",
  "key19": "311KKvYji1jt3yYKdYsx9Y6QeKQK8zxnbZQYPBXUrjHB95PZStRFJAhnL7D7mhNUZ8Rd9hMZ3ELiCaMZJ9uGwgZV",
  "key20": "3nHEtaUejvFrnSmWCA1gZtq81ZfqkYbjEPER5YkNBzXk9Uj6TZtFzRG8WtfWsXeeBPGvNo3LKb5JHWiuT9dLYgRT",
  "key21": "4cJKZdtyMdWDNkA6awiz3U3hkdEHXejoT6FZNUPxU3Qn417dMUgHkptuexxiMhx1rCmcUiUFaZQqv3B9WfJeCee2",
  "key22": "4EBzKfFihLrTb8MCK46JNWaJqAhWFTBrEE99BGruetnaJGi5chydjrDTCsshUPQCSQEqs2dnKDX5NeY3LFiqZoEA",
  "key23": "43TJxv3ac3VFN4uXPqtRPNXJNJkY2UFiR1WDbJytTuyAS1qttXAC615EWDjwrzX9M6E2yGy4FFbznGY6bGS8eSia",
  "key24": "2BRahsNe1J6AbdanR6QJossRFcM44ZetpibzsvsyubxnHqGzhAMCZCuWNe8HhbQWRxQ89YkAS9Nu6Y6qkgnKPBvL",
  "key25": "3MmaKYh5rmGUHfxDRM3GEs1Ku8FcLgSsspHBczy4VUGvchwNd2ZrwvQ6CYUAhherVXqjTsoHmTpyAtKrUGsS3vuG",
  "key26": "2zqB6VuveNpG9c2B3T6ykHai7ZdBDwdj7RdCVcAny8e5Tt9KXDD2HUYNj8gjrYBsiZzMfG35DHwdXLNRX5bXUt2L",
  "key27": "r5n5YZCcyBVQzT3oUfyXneyddmbFCG6QQJCGCVktx1PzVRavWkcPm4Gs7m92B8HqJambcAv6oe157B2VSkeY9Cd",
  "key28": "3oCbs21tuqhGdzUxHVjfDCYDj3LhaWQbtEJftovPY6V6JTWZ23PGbuVhtiMgwtdypyuv2XK3YeUZvDy548Bws7F9",
  "key29": "2NPsSFpyEgai51Am3REA3XbKKEQVf3ZL7xK8jiteCa3FwPtiGeSgPiCUh19Cz9HGrtwCEoF8JdS5bGEQmhkZK5ot",
  "key30": "4uL4GSUPQ1aaLHtsBDK8TtE9FXPwMLZ3UYnZrTeVj8TT5GgKu4KPrkuFbD8QoBr6r7VTq9Y9qRUztC2CmfBpeHf8",
  "key31": "4LCKjQtEGnVxF9Mq7kWGseUGB4wCdYYqCeeEYCFd1hSt32LNHfWQjCk7tTjS5MimwPJkQoAF9gD5YzqcPTsswfnT",
  "key32": "4vV3EheSWz5CSJe7RLhbAKmweN5NXSWqcWpRF6Mcn7i2U5gSBRLMq55Z9CLsvB6upWCCA5F6sZvDrrRrSDHkqjrg",
  "key33": "4W1LAX16Eh5DUm4fmqs3oEaSh8NwUASsbJxKfMC3HyQLy63oHnYSJ6bj27J8i2gVP7taKBfAntEWnZxWt6ffXD3p",
  "key34": "3ck6S6YzYMKnYVoqrGYsuNzJzUDDR1pHZhTYp4ic3zXEKsj6uprjctL83kov2Wrr89DPBFgU51ZBuRAMGmGexEJT",
  "key35": "3PgBYtk8P2Yzarkki8awPodG4CBV9qJ7AjG8JSaEzwuN5u2UPoNj8btmqcUbFKvwQoRVVq6hPT1JArJK46nTFTdY",
  "key36": "2kD98eiAMen4tetLdUNEHRaaEttEyJicb45EysVJbr8WZ93NELreTntoE2ARwZ7LzQdfoyrtC5PPDXkGt6yDmNXE",
  "key37": "2MD4U7XJjV8AXf2ug7fu7GC2r7bTyKP7wFg5skA7QfE3t4kpMSt6qnt77WJYrqp43eDw2NcNDAT9xb6cqiAvGn2A",
  "key38": "3MzAW1AEAYvgoxyNFZCVjRbeDNv56YFRCYwoSFDLvSkTCa9hp2hYBQhXMyCWXRGH89FiwYr51zNcB7WGmJEytdac",
  "key39": "2M7iBK2nNizK25TRCXGuGaYLf6UvQNofqGUEn5cdGCTm4CTJFv2kXLenLatN9k6LCA52VgL8hqnT49tjG1BSuKCt",
  "key40": "3fEUotBYNBywiiLeedGQnvfRS4wScD6ju9GVJ8Ff3gDHXGnaUnPg7QYahHp8aQKuLzWi6g5jPMnF2aBmFmSSWvQs",
  "key41": "5oucqrXNTKuCz2tKWNWhjDTsrZs9xSZhsKtuWhbkPWLDqVxLcwiZnQn76mW2Yg3z8wKF5CPka8i4SjtwjyTVTCjs",
  "key42": "HnxjAMwqUiKKvwikAqyVmQzswhKvcyEjCxRpDayHHoN14ESob3dEysXXgk7muEfB4ZWeuc1WV4Rme1vTCZTPdvg",
  "key43": "3BNBb2JwJedg2iJG6oWcGrk6V5Tv4nBohfUxUTWWigRdc3QN47ZBiNaUH9LyKEJEn8B3AgSmokdAnCFn9MtKoBem",
  "key44": "QKrcoJCEEAGSLLWQoJSfh1XZDpUbNsWrfybrthUDez6SYh6Auxi3x4SeZV4edfUGdfng8Py43QpyCRaVi8EMyQn"
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
