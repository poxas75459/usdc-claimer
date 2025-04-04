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
    "2q5nqDmCNUfhcwvdehokbTowFK6wNDgPwxGEPU1zmdJG4vcL1y2Ve7PqQfuchXEewnjs6MGN25fXWPicJTsPqgiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339bRtzuDtEM2W4GKcHBoWit7Ks78VZEtSHLCnYRourLrj4DR8mwqrVXsveaSnYA3xKenu56c7zC4JaCuFiziXUg",
  "key1": "5TtZzCtayKSLtbm95qpzWzGw2K499nbBbvN3ZwVfsUMRQ8NGPMzZ2b67k3Ydm17XXTm4xACpG7NzhnXNCcVBQZrk",
  "key2": "5zvTqYSzpJ3ceSrsaBZVVrj4VPMnVk2ojy2dwbdUaSRfvg9Zze3pfREFcSwq7VFYc3GuDGjGW7LKx4mn5NP54cvj",
  "key3": "5fh6pYh7ghEhkgiiJ8puBNLgQGZ1wE6y8dShbRBHcQPkEZpYcr7gbBCRTG2wDuwYXLCRy5Gd8MqTFqUYRvBTyQP2",
  "key4": "5RV4MwJiRMFwyNzZy2ghY1fi4UzMFFpFaLw8kLd1x6nBqjwtj2kgTvYvAmBnXz4cwLYEizo8A299NaGZiah4Gexf",
  "key5": "3W4dTqeovyou3Hw3wngcR58K92ZDq9SBubfs8H7B7LmZWTH1qmCN4vo6ZQpnBx4ekVg6mGS66zzMR8Gg7YDrv4B6",
  "key6": "tycLYXGHK8dS6FBxxcC4zmoNuAzHfod4LRHZBcRmiZpBKQBw8mycvTL9sVay4axVVpGjfs9mHj2YbJdBwDVR5VS",
  "key7": "3xRcuJEYF1LLW7fNwMMS9AVR2L5uvi37HnRadJic5hN6jFDAiD7gWZHnekE3UspzJcG7DDTJckBJ7TcWJs6US6fd",
  "key8": "eXRbm8EM8QtpVGuk3bYqSdHPFEs9Wpu3t5dZqiAAC35qaqddcXMNDonFX62VfsqoKtgtt3MLJTn7GX7nReQk3AY",
  "key9": "38waN1eZp42f6bD53YUK6tzBnWSddLKVFcj2RYB3hdwV2A6qC5b3arsY7Vq6knQ9LXjLJ2mT5aWvXGbsMDbdXujZ",
  "key10": "5DJmyQ3ihKpWLnmQPANQeCTVMiiVjLy41eKz2cp2KQ5SvcCEsS1SLiq7qeAa6fozcWfhmcQCj4adECJSAEBHhBMs",
  "key11": "iMKzpcmBYac2cHSe7GD8GSTjribbg9CVzjYCxcxkyz4j2jnGmCCRAPsMcEzwT2FAnhiBRGmt55NviUaCiDeksLj",
  "key12": "UgHqABk83dStFKPfSqhBLqwTonrnz12Zh39pfEgcVqpDReg5KFJkGBp2kxxAV3WgoUZbSYcm2GtKu5NJ32DD3SK",
  "key13": "359dbwSVbodu4vaP1VsRPLJpq3FKunp7615nrBK3grqGZYE3jXjaYKEE9gacVYshKdUiChfmsfybYqLFxksJciZ4",
  "key14": "2Lejaa79FM8xAPimHEyhVz3aLjRuGu3yDocySChTu2vQ4sUsWqLs8njKwzMZZ7A9aKbDnA7HdiTZbcGcE5BuAieN",
  "key15": "4BqhjSp8NgiKRon6fUAA2UVV8JbNhBEtjh4GDsnMuzfjWKdA7GK68Px6HBcqvhnyPVyxbNnPDdXxBRK7cRD8h5GY",
  "key16": "49kGmRuCEzXatFmMznKnm3ktcGEohUFRvknKiDnHPMtVBrmiEf6m7baXbMazakpFVzwG2h6C7dE5VVHM5VWKyhts",
  "key17": "3chc7DC91bLj8pDHEYv8nV769pNsBb7DA4f4mxy5kFyvpQGMJFebSSP7gZppG7VREa9RTW7ma4PrcVLFbejmi9SD",
  "key18": "4qynDeKXPrhHg4xuMMyr3bWbnfbEzUjk1fXNpMnUxLrEiXCXmAnfAY8VVwc6koNEY93uNdmacjLnwRHo2eWS3dEM",
  "key19": "5CzfRJhoHL4PeHCqz5nf79H7uR1pKdqZ8aNnzuCj4panEHkwzzbTPh1dNA8it4BASigAPmPckBdgEXvD2D8vsE6C",
  "key20": "gcqzVgM4Jjqaxp2oRsMknLRbZTDv5Ye1Vwf3zCbF2B99cYrqDF1QhDszc1wJhJfbouYbe1bMdoutSwMBnmWcv1p",
  "key21": "PH1TV5yntRySVpqDHE41oVCovyKEapKVWQoB2UuL9EQi36nuSgDmFuofp3bwvAsyLb7NNFyFvDqb3w4A4yx8S6H",
  "key22": "4RdNizfvPqoQMtJMsV8rkG1qVHv1Aw6Ch1PzkTMGtrvum2SA6tfTRpfpBCJ6Yy9qv83GRYkpTKS4GTUkQA9yYYxp",
  "key23": "sQmSxhFXhMaf9fNxELh3jTkhqBSw3WtMCrrsYgGxSWzt4NME3ZGjKxs2FLv5zMqjzNETv36LuoBt3uyjuhvzzSb",
  "key24": "2k66BF2sVbNNHGX7ZYtU36uar8RT42gN68KMdgi6r1394zBLVHLm44vkc9XN2Bpm8Xa6NvofKpyxUSCPTfdyy2Rp",
  "key25": "5nJQMxCevciXEW6mE6FZsshqXXZDkZ52gB1SFfrRJaXJy1x78P9qgfwhKza6wVwE1o5PvZiYJxtDR8ZFGgjjrJyX",
  "key26": "2RkKfFe6sa1YTv8k5FgFV7AJRd6cGJwP3SVqfg6mkyAagCEMcktYbsoSbRW8vovNmMkodXLheCLroWjiAV4TsG51",
  "key27": "5qnu2urY6DMRSxv35jkwxpbgqKVR67wYL1aQVzxCAt2md2z16V8NpivKvsPabrkfSduPR6gBns5QSKVEWmNWCj9n",
  "key28": "4C8rMf8fwHbou4NZXz4ToqbMioUhUBvWRDbtVF6MvPnj2tMwTsWZkPa7RgbHZAcaPuCcq9Y8Gh1PTk1oHi7tgF53",
  "key29": "qBWNW1U68mjPZnWrLxYTyLMiuEzmQmxe2meHsAFSoKjncKR717c8NTzwrWbzMQ7fgEQWTzBVFg4Ty4ZUB8jFq4f",
  "key30": "3PA44Qnm1Hzzd6LM2jAo7cVLEw2cNhjTo8c5mao8wEgdWpXkLAk7wQuFPdwyJDUku4zr7wWBdgYNMDenVzvHefEV",
  "key31": "4QifwLoDTvSnxtPyky4sjYu5BekdZ8yJK4RTCqVuVhSKDHFoUBkdeW39G7PU2gtLXAVpTqY2X8A4866wz7Fgq8nL",
  "key32": "5u7Sunrm6S2Cxt8VtbsSWkzcpruZGFvQmuzmuSq1wthduwmGqrxRP7DgiXoJq7vYSDizh9sbHS7aVNCgUKsjsFu5",
  "key33": "uW5LnHSKsQ7FgdDTa1gJYZqBLXzdwLZRm9KLUd46fxgcHfSyN1KqUXhCaAt7KaZ6tQkc8r26UFnNmhMe43PXiqq",
  "key34": "6JWzz3QksW8hyimH4Bf9friAFASYjpqxov1LWQ2YAJqCA5JqK6jCgSWAmNrhMZCPsz35N7ogTZgAHAw4CziKKsQ",
  "key35": "2mdMcs288mXBBjmzjtRkfNmM9sEQGQXbNTYE5pFzUbP7B1CDUrJG9ar5PNdaYDCEke8xaKqhrcBfy6UFHwLRB3r5",
  "key36": "U2mt6Sq2tgx6Vkm2RqL55kAStUWFpRytwB38i4yu1SqUfpKQ8MLCy37s7D4rPV3tofBT2Up7EWdVNPgmRjaDfdq"
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
