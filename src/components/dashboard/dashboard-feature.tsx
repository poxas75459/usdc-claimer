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
    "61F9ecE5SMHaYGC9p24myqFayTTrNTYo3CnTKVkK2EuRkXBf7MQ1ZaCxadYa63NgZkSYCctHKKJZdXZAVhnY4MmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65at9vooSPyiBXCHGWhzt3zXAo4X9BGCGDPJnbWXMAH427wrtoxe6d36U2Uisc74oK5hAdJNpzcZNkZjKgMFro3V",
  "key1": "2mc3Ujb5BjzEKFaAUqEHdke4aV7FKt4HU5z1bomemFAyjn2sDTmhyNR4JigFis9J3PdzNbQo3G265jDLSHmXh7bX",
  "key2": "5DouVeMULrAF5gLufQVK7WQEQYinSV5rpnmvQPL2GRoqHBEeQLtvSWFTZrzGTXUDRkRa9sKHJBbNUc8xgPVp5Yu1",
  "key3": "Y4u7DSgKPr3KeBMxvsuBbovGKJ4Ci5JYWDTU1d3bDGbPSyTFBmTf9hKCfAB8H2m5Rp81XbUR4LtKcDkzp4A1gGA",
  "key4": "2QjjJEP2ureoPJKLYURLaGGqP5Kjh1pxbzTgTk964AmnLdnMK5dfuFaMvhpefKtUBTftEKGYmFAGyRy4Bcg8FY65",
  "key5": "2KiyttQCsdKV5Y8LZ6kJsBP4eyeKxH7KckGv9aDUAR5TmKddQLGscSjFtmpC12BF4RjE1SbGV77hv6SFbZLfvU7U",
  "key6": "5a4SB7N9AXzRGCD42Q1bdjE8LaYsnc2TULwASun25KdNyLPXvjSA9deLh7hNVE5QJkAHyyakRV7Eh3VwCXvN7z2e",
  "key7": "67bFFJ6V5YaFwbeuApbgJfdvaatdmzEX5Uhxds4S6GFgC8fNcwZkwyHCigNA64ACqboGbkMsB8CByRxW1CBFBN34",
  "key8": "5yp4CyXbgVMRnThiyLb7kaUYhTztwE1CbVjWkzaDJHPZaG5H66owMg18YZy962Akqx5ZNrqQmahQuXMYTUnWvBiv",
  "key9": "5s917H18L9AVfWqUPmknzSRdDdBJqEs2vKMNhLknpmaceZoaJs8W1PFx8s89irwtK2X1wrp1pxnq6tXc8tAQ3KqH",
  "key10": "4E9eVQy3tJKCS7jGQWeDL4oKMuEXnpEEuBmpQy3Z7aKLHZQc3mzuj2w66dmNWUZW5CHoNZbPpTE6vcRwGh5U5HMR",
  "key11": "62xz9x9JWceAUuT6CKuF8zVrEDKUB1aRAZcwPRbrNSaqW5q8ACR6HoNDkJMYDuC6tntz1rk8CyRTyFe6knkVhtsr",
  "key12": "D5B4ACfFnWRLuRuLp4FgpAmJcKetC72YinphRqdKsziLDNirAqX7wwX7KSsvMWLzJwZ1CvoEYqofx1h4vcNmkMs",
  "key13": "2z333WeaFWdGquRhuqvRMbG3uHrq43saSHxgK2U3inUb8aQ7uPEJsRoig98AheVAARYCCmMiEZiyxivegBMEKDqy",
  "key14": "qpGEmHWZtFFL2WfiQLFDzLZQvxK1GfsfCVBaA1ymqPRKTN72Ej95hNdQzGCBdqieNJcvX8hAT3f2tsnqAw9XXUE",
  "key15": "5jkuk1fJJtHrCgLQUSvi2dqYVPfo21TyywMsaWNZpP99W3yhswQguY2THALaphGXjond4GER3gcJ3HJJNweUpC9R",
  "key16": "2fc1Si6wRw7qGkMfHFFZyNEQbNSzJL42crPVfwFperrd7uM8xZ3syrmgxEbQKKkoSyYbBDcqDAKHXxoSxudEZHtd",
  "key17": "2t2xg1cYpMQUfk5hcLTd2vM7QWbWiD46jErJwULG7e6WoY9yAkFqCNjHQPpAFLPyueLabW9VrtYcZe53bViRzKv7",
  "key18": "2mPVyuLpZjLdAVaKwiUXg5Jr1W3znCa6Gp2SDJHw6FbQkeEianoMxEB5wJESCyKf32T9xWx3k1hzfMJvnQLMAeEQ",
  "key19": "52hFZJp9L6x2WX4ZCyFWEsuwcQ7w1ySx6zxEd15jaKj8bdSfBepHUNuFXDY9oJTbHScxgqicnr4woyGgGmdV56Ja",
  "key20": "5UC71o9w8hywtbx1FsDUMJzDoAixXLN6sXsv9puNtjrbQoY5JJoGNajTPR1DzgB6FjypWnVJVi6DkpHVSWJymtGG",
  "key21": "5LbNUuywGFGcVf1t1W6gCPPDYXqZhhB4xyLh8BBgGzyb5rfE1e7Q8ZUARbmVG5Rk4fPNrSvdCtY4rk74YJrpJFvQ",
  "key22": "3ULNonxDBwkNMEbsbu3fxjiHATpt3Qpw15GiLVuKSTTByqD1xowauG3mrg5scANKnNgcMm2oWzJJbzarNCQn1qZU",
  "key23": "2wHVv9YY36ws63xdrTdp6c9KxZpMYMjrL1CwNmL1Jn5MvQHenqrVds6UGkBfcC8Q3juN7VXZu2tgwDjtAuMeMvn1",
  "key24": "61aGucc2E42Pc3kMgxqqJ7CPzsonG2iqWbqBLTFe9NyniRpKuNbfNHnyjYgmS2HfziYbdVEpfjWmjHeMSjCWAkMy",
  "key25": "cc8w445g9k6Pmxx5CBhxKVQCfUVoCee6XTvoAsyQMb5CYesj3P88pfvA3MQEt26fKyhvwaWZ52bRcpzimmC95Wx",
  "key26": "4xWcuLEN6i1J4HVTuXDEATeuFDtJ8QqVd2NijUmyJzK6zsKnrEvD9J3djhkMhc1Z68TcNrfaguwCHr6eNoyXPpEr",
  "key27": "5Yu3WZuqsQYMqUJ3dAWSNQw7ZXYz5BmaTGF8wkTHtm1TB51awu1ywofKrvi6hhYQqhZbyReyem1mzPLinnLjEskU",
  "key28": "24zkbtxoSo3zpgzdG2hoRNbPQ4m3Q5uVYCKDdJ7kfon1nnsQonLvYCpjLh7ezAYDPU6hwHU71s59qYe3dTqHW2uM",
  "key29": "5rHrdfzRxKfidZedQhfgdZcCAPczAqBAZycrjxV6ikz8qDqWHeQ5bwSJhU9pTvq5vtdzEh21zU2np57ysAfTG1C9",
  "key30": "3abAkFbmnny2ynxbmxszrnAwuKe8gnwLebC9potEWZ774eAsJT81D8RLKBzszHTnVjitqJQRx8rBeUdmW8mYuMZN",
  "key31": "2h9eYozqTy2E4HhvFq2ruhX9n4rwSGpK7yc34Gx47VjMzLknW9eP3F56wtxz9o7MH495q8zCCuCu953Zc5qwiq83",
  "key32": "428PwutbX8hJXMzyg4Yv8ERzT1DXvELMgBPMkQxTX7hdm2cjnDEHjWoAJVtqbiKPVmNtKdZwEwZvG6wWJYTukXG9",
  "key33": "5mo7Nw7xXErTA7eGNV7TsS2UrvekSVdnwhV6cRHDcXL8dokgtp1drnCPP6WPUup9rJEYXRPDEW9By8TwNBmUonTq",
  "key34": "e2V4bfCCJyFmsriPy5vaCg3qXCTxX1G8JkgwPQdNEzhVZqdqWGF7GArWBnAzv4DRaZL9TVkV9GbTrC15kBYjm2A",
  "key35": "ew9fp7Bd9Z8u7ewbaD5eWE9EYN2RrHkGA24dTSaZsKGfwsG57rLXy9jZjjegzPs2ojPjAYbauXEb9TMQELKrRhF",
  "key36": "2McvujxzsgeveeNkKeAxwSMFHcbY2PrUVLbJNyvTSx9Hzd1dD3fZpVoR2w8RjfhCnxQt1wZKHc19S3SKKEWYu1BF",
  "key37": "39s37H6Qm7Krm7V5Z5E1NdcVhibxyXV2ECvFtULfh2GQT6TnQCsMPdEsvjnaqxLXtkpiw17ukYvMXttEaKtvMVP",
  "key38": "66YRJDofrx5HeJgkJPPReqvfPL5qom5kH1TavJK1jyTiB7xh56o7vfNbEuT5GE8quLqELD8NXBrY9FEM97Z1cgnS"
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
