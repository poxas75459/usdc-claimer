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
    "2xijH7j7CiojUpitgHmhTY3fJbTcWAsdzdoGSMmNRUdN4Lm9vR1MDJPGNw6nf46s5f3FRVQ1wB6jtb54WwPhm7Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SEek51YvTZYRWHzKFczKv8FyM1vpKtSwVjqQCc4WYgvjDzTaTDQqnePFDz1dwvyugqforHthjEheMaXvK4Dso6",
  "key1": "5xZwkfmi38oVNEW5n5EeNH8pEy3sVAfb14hTkKU34xebQMh1warzzio8AHkQHFqvaFVKWtw6A4RygVU6AbQUFg68",
  "key2": "3wighApnFkGaSy539Vp1xwptFobBduKNjThWkjTx3qgrQ7fZKQd6nXiJZP572BhnkDfy5T5TWnMmzXz5psGKNk2Z",
  "key3": "2DKVSkZ3tPnL5z7fXrE7AcuqM4QTdLJWKtgyqj4UM9cja2Zb58dDQDX25gwqAhjSBTMzmMBN6AjkviJJThrGQddW",
  "key4": "5VQtFLTbmadYxtGtWfRgs7Q9ES17YiejYdEw6aZUfugQMycsWhimhLRjzQwKsRMMpjLRiQzsDcSgqRh8nRhqDeLf",
  "key5": "2g7MMFNbYY3Vb8yM7nmosGGyCJiNF1w9EL7BhZ22QwmLvzuwMmvhkZ1HaCXkeFk85ob8tSMaBGs9oUeGhUrqbLU",
  "key6": "2z5EJWqUw6iiED6bwpYrUFeP1tAkR91LJFcAmq83PFftDmHavV3y4NSHcYtK72NtLhbJg8kLmFcfVDWECJgE8Kdv",
  "key7": "2pVLGucrPMGuNo34d9oow7yn9nKQbzV91fa4MhkjfWMRHWg4ovtTQprM9wWy9X3T1cwXYfiYdg2Ze7NQ6izuDbNH",
  "key8": "66iNUBVRZmm2uKoPFSVqWXjFSJk819fAGswkBUeR1dM8Hj2VHeuCAE5nWiJoHS5ZZABBqkkJEmcU8UwStCWwtc4D",
  "key9": "zDnXUEyQmtDmPuJLj8c4FRP3B4mDGZjhm5YAkBieMAJS9hzxuHpajUMBmb5qXUeqhZQaNPhFoSpadAKGvoBxG9w",
  "key10": "PDFFnes6pQsppB8fr3g6JaYWDqbv6LG5Szsck4Bo1TSLpmAqX13SThkHAVcyXNL7BzfRp5xmqqpiTEfWnU35Qum",
  "key11": "3EhzhHj3ybsqDJz1EdMeocZgrnvCmDEQ87oE6Zaz7jo4WWJVdj5ju5nSDo85QESkmMGf2R7UA82VAn9RjUVw5JZ4",
  "key12": "3QB9JjxVXyafq6EqpxRRjxgLz3Lz4NeoZtRsazWxfB9zHBSGJT3bnk1XarxHb6RoETZH3khzxJrjF6TKWnrbosao",
  "key13": "4S1syDwLtmrxfiHKiua3kQ9JYRRTSZjxsrr3SyLmvJLbyuyygh2Y6LMEtJoTAm7P85XNvZKnuzSFNuxom1U5f2fF",
  "key14": "KUiaBH714KkycpJVbmJch8wpgRoqH81jAg1QwzEQmu5zjszK3UpHk9d8b2wiQLbq9qWNT96s5YS87e3FpNAuRrf",
  "key15": "3wmtEnTUNUKHpFURDkfZRZpBzxxsAPgsnKL2x2vMPTbpR2HraXB63ExUu1iva2NraTYuXQNFsSupBHE2aNbYCrY8",
  "key16": "sckJr6gywdyycu5H8kDS4wCC4epJNGHUk1c56GkH2z5bDWoYwrr8so37PZGGoBNLcQaETbYBqWfKQ1PC7GMeX68",
  "key17": "2sSCB8KwvvRnriMNe5tZXs5mvx8UxvTVbnMUWMFnchbBaCfwcT5FhVLCEZbMoEi3C22tergQBK3efQtTWa4qnxSU",
  "key18": "2B7b3KKjpRiCj7d8MFF9RrWQXwejM9741E99G9QjrC3ECosQB2i6RWMuQCj2FDyLhYnwyNgeEyzCP389SWZokRWd",
  "key19": "38jmnrSNo6e2g4jWKnW4Mzky2VTFuyC5pyAhSS3wP3SLsJtf8SfAG88SvW3Gopb58D7yzsoBfSGGSAf9KdSAJoTo",
  "key20": "5BUDBEYdiPHvxxbgsUuGX95z5RzN7t7X9KyK1DKHmcum6DwFStvYCEivvq1EFcWY8ADMnn1tyLK2JfvZk1k1dRMo",
  "key21": "2Tp9d1ai2hy8DS2avdpdSyXGrottqjPFVdK8Jy7sTbyG3pj6yF27EqcgAZvpLv5fCXg2ucwdZ4UEvDJX1EnFLy6E",
  "key22": "2irzeFNxBsRyttk4JJQDoSvSjXkubDToHgtoaC2qZ2DRF4AaVigpxuNATXrqCRy2NrrEzksizY6KxRCKBBKxdKqW",
  "key23": "3Tr4u2t9Ft4URwDwpTjc6cEETHDyyvjuvwwqfRPhCm3fMY15zjJENSQiEMBzVA6LuLjyGHHcMdq6ZuGNyESk7ccM",
  "key24": "4RyhWiydx62VqvGarr1UmNPo9utZ9sHyaW7NFWnuuT7z21oXHTpwAGVBEgBKiXtPuTz6FnwjoUSfgmpMUPoR4yHe",
  "key25": "UhaWdKUwWNAwP9hm1PHpjU8uLfwy7Q3yDwGogbroKFD8PvAAM4c2b8zyaKStWXQEr6Fn1dFxF3mS6PvLdgvhZ7q",
  "key26": "2xS6PoUjsvrnkoQj34GKtqEaGPZdktm3VM3uAZcotRH4Mqn535DbQjRpg9TPXh5fW9gMoDQv9XZuGFL6cfP18WUo",
  "key27": "2vuw8Lz8u7bK6ZfdGnXQx3TUazpF5dnrwvbgWzdnF6r83eyc8ENvHADDxgCJLwHWizpaVsqngEznMuHMkMd14wGJ",
  "key28": "KCtkaWarjfnukiR1LHs27ox5TWbUuxhs3tXMLxYpkq5KStfwfa1hstFixtnibhpM5wYGwmtf31X7tTbtDSTpNt1",
  "key29": "2jKfKbG4wW8dRKf8J4R2eU6TeQtaSHC5hdD55SQ56gk2KSds2zkyPCZLgSkpbQq21PL2jHw6Lu8Ge7eiiTcrhD5M",
  "key30": "62rUZ1pXiPPHpBQc3eE6aRQEwNv4tEr7deWFCt4JzdZ1BgBKoe1ykZweVFRU1KS3nNeA8LH2SbiidyWZoJYZg4yy",
  "key31": "4hWBk5RpVX5rqjNk6KPGi125FZu5v72NuXj7D32RJYZoSNdJePMUfeHuFcYADqpLbMYrfmDW4BDdJfU4QgLtcEPe",
  "key32": "3UJg97zqSSnUn3vm2AnKQMwgDnSSUbAHXjJ75UHbovh58oV715ogVcSakM9Shy7tK663PZkPy8vRezPMiTcpnh6u",
  "key33": "4rAzEDsuBC79tD1ZVAKqWVa2U7ctifmNaVydDyj8243SpdaSCm9M7YPUDM2vrYQbaUbyNXnWCywXY3AoSWDWEPjS",
  "key34": "464nDVZy9vxDGEbVbMUBkcBAVzBZUZGJc7rVvuTHq7AqFniX9YsxB2yAuAXcegQ975B8RhXnhSrU89K1jg1FYPjM",
  "key35": "4sqhPz7Vg1avgVa4BHLz19dtxUmRozczivzpdVGkDcXurUvJsT139AcLvXnRWZiCqxWnAN3W86GDoN6v5eL4E43t",
  "key36": "5G9x9LoiYTRNP6aS39hiVuRTJuC1wYcLTgwDS88DPXjKxHQuTreEVD13rUrBVaZ7yRJR6FCeNtTYTfmcodhSoMKS",
  "key37": "4sAYamCrA2Hr8UC7dRXdgcVvku2btJdxCbck3HTdjbFcbugLZvBrp3TQ73jjC3tCK5aEPbfSQXFewNwcfraPXxh3",
  "key38": "Cgp5xW23K5tZnJkkeih6brgawniSWZw544fdh1DuH9dBBcRQLcKUcuRfXu6ev3H86LMEy2o7hhjPX3BzdaN5TH8",
  "key39": "5UCrMj7ZkgrfKrdBcpj5LhT2XYc1xjQoXAeSH54a9M8ZwEbgKjTsPUukMCqiAX7EENTM3oBwNAHzkL43bMeuZpTk",
  "key40": "es6UumpGUnNVzbgQWu7TVBc1m2eWQBrpNbe3UM9o2WgRktwiuh5amb7kjsNzDsH3yZw28c8JTCCDxwZJXYtHP4F"
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
