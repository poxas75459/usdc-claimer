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
    "Evgt73rh31TeKt7eyBgBrKu5aF3FqcFiFdVUEpoagPgcwSTTPm2KZQ7hbUE3XSv74udNRTk3XQBEAv6fgKiosci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzXqxe3vtCSXRd4M5Zxn2WbnrDnxQrBpzmip5PG3L3DB9ijyCBNzxnMp6eKLQdAWRZ2iNgjJ349qw5hyPTc48HQ",
  "key1": "63rndq39JHKb7fdWwxzxbF4ZhoKaYxwbAY5M55ckV3ztNHXCr1sPrYyMiNGsutZ9whUEzAhFUUYqE2xmZpnkQhUD",
  "key2": "3uJT1XsRC1ddT9eTLx7SWpyg4gorAVu6EffVVMTxSCCQA1J6f4eUbSL1ykG8XG4jHqXrWCvCgry7igne6WjDRmuu",
  "key3": "oXgqQPDbeweD68Dk4us6517BB5AfuFuSXsPi6NqoBmmzfimou5MHdoeVUQiywAiDMakobQwZNpePUDjLS7edMVd",
  "key4": "3FXz7rBnLWzYWsyL6Tx9UK8LJ7NisuPTDq1dR2JB7Tmzs1k5aERhbW3D3jQg9MSmsmDcA3nUXDzgiruNPvor1zGU",
  "key5": "4tXWVGsA2QcL16QD5koDyDkffuSBa7UugyTF2Nw8nBCpUSzrCzjqgzvTcgm82p7yhL6LH8n3LvMzxegujFQwYySv",
  "key6": "2GKwBMBHGxpmZA3fGhxEFeGH2MZPAxooLTr4WJVvUaG7cwQiMp8sb59Ws7sQPxm6PosfQQKYrk3iGTRq8K6Bc9uQ",
  "key7": "53Nc3KPco3S3LGDXd9Gn168tQ7vaKKCB1r54YBqJSDFwHn6EpqfkNFyGEvPFE3kmPZcjyU1BuCG6mo96hRn94d22",
  "key8": "32YrcjRGBBCK3YznJGkfxKSueMZ1W3UeRSeRzPYb1Hu6GqHE6zXyykMzSgVaMbmNvPgPpzTLd45wJdxp59KFLorD",
  "key9": "Eh5WJNkEPMsgLhFPseDrDG57Px9iwqHYCs9VAiSKdt3xrDZudnoM13cqoPCVoguaCsCeQMd4uCsWUDgVB2GLQ1o",
  "key10": "3jN2t4xgDUDfJtM3bJ5Zh8S43ciszBJrbsbD8GLwmo6gJ9UMHng2Uqc8hCEQ9oZhkZVp3XS2THJswAzX3a1A9Pys",
  "key11": "5x28Htpzjyif3rRbm9bNvVcvYwDUdERSrHWDXCXT8NauHTzQrRAihD59VA1ud2RbUb773jb5mNyXvH154TZ2cMDc",
  "key12": "AZSRujWkqxEMChsuHk3jCCY2feLNHuPkic1seNrSmUGe2pVm1M6Ecsz8RmVtZnnyzVUSrN8HKdJAFPEtZWFTt1v",
  "key13": "4thPHhcMhEgEMVumwQcT68KqhVBu6ZrBwsgEw4FTS1WoduTBCUuYtSkYaRvyv6F9m4mszdqoz3Pd9ea4tjjz4aV7",
  "key14": "5tPywNheTK1TBDuzJa6K9eLZPuBgnt778GMe4D4Y8fbBEUuRKWvbzLkzMZt4NjVWnwGH3kfGCtbZg13bweegYQCX",
  "key15": "CKgmDotZgivxeHg6cnD2NQcuHorRy8zu4jRWxrbhdrj6wvYTxmQYPRBo5FNw49beQPWSLEH7KYbHk9BGe6wdwVZ",
  "key16": "5nVRWFoMfb9kHXMBXW2a1efgKtLWEVJ87z4PKQ1xuodGkHvBJd985psNA2AdwCQcXdo3fTrBkWLSB12Bwtchf41z",
  "key17": "uHHeCJd6oMyj57DDtAPmQ8tZPFnyQioeDp8njEfKBP4j5Pfu4tBtGbeaH9LA59ooavHFKzNosXrA5Lept785dA3",
  "key18": "35g38m2DdeY64iboVRoTe4CLnqWGkxGpuSzYj9UXGEkjJimb6kTBrzdtCJT7MdwJL4GtmwtZ8pysdTo5zSe2ZwSS",
  "key19": "UMkFemUQjrsjTKWYnbJ5r5RgTNf2Hfim7AkpMCQyHtW9vdep4rymee1oDaW1BTPdkKA86aRaW5fiTYYN9c3acgt",
  "key20": "2z5erbTyk8oaWXdDGhiyDZARgAB65fszDSGg7H5pPTivWXWC1MC8jQDn8fK6tuv1j38rRczNQLjGXTr2JN7k1sEx",
  "key21": "3NmM8inM9tdNEToZMd7NehbRne1i7q8iLoPydSrDnbr4mcHcSpPDxNzesAtpuiEk9J4z7JLFQpD5dELBA7MirG7K",
  "key22": "cPc7x5LZbHs4jZtVGbGdCzJMcC524KcESvyFZxBs6cTciRH6bpK9J2ccsLBsxjef3LKUPr3UVxjMD9GUwPYc7Hj",
  "key23": "4jrDqtpY6bcEYDL1EuXJDst3XLZRp8rKZBTA7FCrmA9X17fonRBMgLNRd4PaWsGmg7MzHVAgnscpunSbzDmAzp72",
  "key24": "26GKoWJLP7kdWpKr3wErz4NTxxLP6hTPqsWpFszcGTsenpLoXnnKT6sGS3JPBTL9jgbKV93Vrz4Dvzw6cAEYe6au",
  "key25": "3HXTeURvWqsd7q9iNY5bnCDzKp6KeY4YkSByJCYGcb5oRsgrvRiQcyRwqNN5mzD4PVDGg5YA1mpFC8mnf6UwApF2",
  "key26": "5SKh3DjLFwwfQvaGaXa57fLbud5TGpEPd8jB8ya5uNUhFRq7b5ahq3xzRKNxYARGKzmCwwNe46s19rQg3HP5KMYE",
  "key27": "4naWgz1wYmPCGEcsnKHzUoernnFD7mo4N2xLwpXqDvT4jWuKSPDZ7ggF1xecfUZ5crFi9cGm63kpqyx2aycV6VK5",
  "key28": "2aMvJLdaqpg3LzGuRKyqsWq6rCJPeVmmw2tQSvtqsXnkT8QPiyUy6CuD3q5strKoJpR5vGYHMpt8oZNVzpfAoRFd",
  "key29": "3mG31MYQREzW3JF68e9seuGRWmZT8nefQyxD7P9iAU5XGSarULktLc4EqVrnUSnGYWPQ76kqwtdYEobgcwZkVMmS",
  "key30": "3Zbo2hZRc6wV5NMZsi1W3aXK2uNZuVwP8YN8CCqrLffPr77zSEimrJBod6kkJjbpZFexxGUdvVKGN9JiGAA3YYRs",
  "key31": "5xULhuNWvysNLtJXiteHYkSpUJbsam2j1sHj1QDyFG7JKsjybsLskAbkHBFCxuJJrMdUvLm1Zni84yuN4HYWDc1h",
  "key32": "5UrDY9NbcYzR5MLjiGwhcH8t39eyox19UnwGfkmtQeVX3WXcErPmc6LwnL6D97M7jFCv7ptpLHtFzNnbvfii7WXG",
  "key33": "55CrdqoA2DdjHu9g8AevD3ZEy954RiQVhmeTYThLNrGA4oPNjASqrn8RcRwdRA3RSUNQR7uRJ2oRCPhTgAdk5vMH",
  "key34": "9KnY9AHTuZeP5jfiWM9eJQoD9Vvg71WKAANEs8CBR2GLjYpfYbKoQHkFgw4cSZK6QUBdCFoh2VoQMmQedkCdqxU",
  "key35": "5qhuQ4RhK5SqMUz5cK1zyvrcQxXPkXskKxRT7rzUgbWw2mV9hhkMkXfiotQUvJ9dDhXLr6t8B7H142143RripL9S",
  "key36": "2XSSdAMWUQWkYcYiQXwbBWX4aksQiTCPKqDmtEjmjGbtAVASzGwZuzJHbo6JPHy2ydSQRF5afyTATY9nxVmsAPa9",
  "key37": "s2wNA8iDFute8oMWqVwqenT6R1DifrnUApADrtHbduJq5JnQHsDeBmhX2mK9seDU8VunCqyAgUMJ2BKbnC8Ro39",
  "key38": "5gTFqKuWF3vrnQHEPcCWofGQQx6kZjqacqbotcvfedWqo78RJDueEe4d3d2KPyaCPzYMDvJm8Q7NTU8kf9ZisAs5",
  "key39": "4zAfMicqhAaEC2PAtGgsiJKZMbmySF4erxC92nJp9XJRKBLsyAuTevuaX4MYftsvy6o768h23UXbCNYFPHoCrJEz",
  "key40": "4ky6DAVVd8hx1fzfiuiX7vzAGkQwgFVc9pnWWHmpy7L67ZVKuewzBdKV78hHXZverwAmPEGBqxTKd7xm8XYRXrsy",
  "key41": "4jNv1b7WjVv2bEevFd8c87nTaPtdu8hzWs1L1S7ZEq2zBsiwgh3iLkYohuhD2oHvgfK7c8vAA2JkNSfLbC1uovvx",
  "key42": "dbSFmKzjeiEALwZXf1bjKdm5CpWqnrTbqj9STzEuJaic7CSA8qtxr6gNfhzQUNZY8zvEgMSL4YrQXcZxAxXJvfx",
  "key43": "2yYazWcx4Ct71eepUkAny1pR4XiyxUarF8F6pYfLQJrxq5UYkLLF1rpj2Kj689RNw4YhLzAxzak1REghbhxWwzc3",
  "key44": "3KJYXCHXhWAFb92MwT7pGUc6aycQ4GeaiJK5exgQGzCSXfFsfJsdF5xy2vZzWhB4gr2johqqegMqiXvv2FE88cT8",
  "key45": "5NtmtAS3Uks5SaeGdsweTud5sJahUwr2891a2AGV7X9XtQFTJ6iWgvnvk78ZYoXJU2W8LB92qWApKBFs4HZ21fna",
  "key46": "3WKTkHtwU47XvsYc6ChgZy77VbqFeMb9AzjF6HJTQeHf9GseuibRD7aLJiGKBLbfgwYtnpNjJEmGGxrCxL6aX9S8",
  "key47": "3aN4Dnm5YtXvpPSF7aQNTB7Cpcbt7sxakBH3ugPCZnxHe2S9QjcXT5jPsQXqnAfVs2atZBHYNNW1i37YKN4Lawi5"
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
