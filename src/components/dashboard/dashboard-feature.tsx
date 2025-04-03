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
    "47BQtLjkxrVow3CLBtHC5iYPP9LPfvQarLkJ68vfxuUzuffVkrorSJNoUrWZEp5rchhjdK6EdPbGj1F4mQ2FC4qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215Hq9D1ghvmymqnZ3wbv9daQbAdb2HkpTBoay7Jextj86RxHfBPbf8gzRxCKcsFKnWB1ZtB2ohHmUv1y4N6ex5y",
  "key1": "5TP8Mnyc512tz8QRakyfd6GQdBxeTVTt5mwc6k4pcxm1JM86UBmVucp6wPojNBfmsj9AUEWxF3MrZzb9Hm1W473h",
  "key2": "23CXFZSesDkRfxWtrUNe1V3ECiyTC4nJZiq8pfxWo1iXtAsCUuZT8EpQqZCvwcEw3aCgsjmG5yNUzEChvy3khVK4",
  "key3": "4YDHms5zPQMDv56xXRrYuYSb6faKsZ4Wc2ME6gSodGUedUNd3EYbTfuUJZnRhBNXQuDhz2oLtZr6zZwcbbgZ7xzQ",
  "key4": "2VKA2Pbo1ggqkco73HVfdP7ToPAdDEX7z3dt4K8z2611x9Kds5wkarCqHhX1T5sQs3UKQU472rRML4bLphUp9SfH",
  "key5": "5WEyuH3AT7NSdamXk5rmxmpDVGPQRWE3CHEDYFvwr5H68akxY7dHyqk7GipinD4CH7jJY6CPaEuXsnz7XW7DBd1",
  "key6": "gaWu6sLEYeuRuSKajPPQZzvCCuQMqJX9M1UeXzecAGmYgxQopr6g58FHhk52qnamS5wUcaFSrE4SuyD4UaqrfGE",
  "key7": "4FzKzkSmvSN6KYQxwfvEMvmPvkV8amoXXELUnPK9ix6scXDWEH5fhK4MNwkinn6JEWTDYAAXLMv2Z3xyBFHGsAFc",
  "key8": "3UJUujMPKiBf1N6rmHkkq5CFDneQwc8T4zrNsAFaCzNrv31o5xrYUQEVDtzqoStkYjbzhpmBJaMYGAuDXQMThCTD",
  "key9": "4DYcvYq1ectzmfwouwwBeZPJbxmm8phZe2wTgnogVpKpmwFHNp3Jn68z2m3FdxMk52KzX3knzHKP6f2xuLBdfGfe",
  "key10": "3ev9k7VNExQTGUKJcuud8tVkrvyv2YSGcuauDYZ7k6hazV9TjugWkPmJ9WcbqjbcbwuifJtoj47tnnym2DxZnqGY",
  "key11": "4yNyKbDNH56jdLHdTtxsv7HntCHig8cCmwYuHDaTdMJmdhC1dPzxEVQioh8oagcJ8jFwUcnxJHDAE7gvM3BuF7Qy",
  "key12": "4sznnsfDAZwjfgDurbDYDgJAtfAvWYQf1HgaLb7WYmxjtiJqspKUWmwsrZZ34CQHmaBkDvjtMDXmbXigGRrbUZGV",
  "key13": "4eemNCLAaJbp2iyK7ui1tHoD72obwtSs2LQLtMmgmSNBCuwDM8i999q15LK5b5USxSzchQRNp3hs1LUKre7YEiaA",
  "key14": "57VQGHYJheNthmnQ9WeLXWUgCUkXqxbRTUJgNpTmbe6iQkiPwJL1iuJ7qQR2sfxCqi9d2NijjDxqrHfpKVBavjLi",
  "key15": "1XW2gAg5j5DFpe955BBkQSYw8cRdgwPASknfDzKHc37Hpz32uynQr1AE5SmcJ5biJ5THFVTbGrXvESqxufwLdoR",
  "key16": "ykuUxwQnRfxwZzbgKtChaEVUfyUWy7oNFuxuB7tNfbCtBdi9n8BHsMqcXbzfkbNUnSvSRredZEnQgXSifpCi2vS",
  "key17": "5R2BXPq5rKHhZKJRn3YGBYTcf9qnCzHCj7ocn7iG8KxQ9ZLhacTkzWLWao26GNa6UnGzjFBLPSgfviT5A7ziczdr",
  "key18": "Loeij4J77ffNudXY2Hoxy863RWcFJ7pgTNwM5YePay6RamcKnXoWmmPycbY8hHEK7JqMvvRzej6b65bTm5eQeAo",
  "key19": "3qc94wJ6RNYscBVWWHxmXaxPLuq3jaEPN9o2ictWXxQSiZDrHDms6w1Pc4aSjrmyATE2btrUu83ssmtxonAk44Pm",
  "key20": "291bVRNuSpn5bWqCZgjxR9HR6hzmiHrZiQENGRDnaKgZ2rQVWuHRXFPYJ5ZYBj8BKkhu46K7Xs1ZWfEkGT6d9nNB",
  "key21": "466KHvKB5X5Sf3P4LFYJdJLQVRbbByAcC34iqBE1YY1v99nWaDY3YVgXuDY9R36TwARn6AfpRjayhQUirAZVHuif",
  "key22": "CcH9hRFXd7LvoerPPsphYkWdZitsmDXTnReNeG25dFTnhRwxKGpwMfusqebtQHwhNkqMd91tgq9qaLfCpncUAU5",
  "key23": "3EfiPNPyNYM83CghCA6m2LJxcSMXgV95bLSEdm5GVmmMYuvVvA4rghjQ1QE4wQ3ZApU1cwKWsw9y5F3PK3oPxKQH",
  "key24": "4Et7D7MovvHzz2naLU9JYERcCdo7hwoZ44HhSb9bTAZV7WFU4VXbQM2AadaKUoneY3C6HwnrjyVyU6Zr7Np28yg6",
  "key25": "3mnYBjADFyR18n1zLCKyoePhwGjyYZ1Bo9zZkVMKnddsMU3P46HywU3k7Rkb1m6pvG1PE5UpvjZ6BfGNEeZKHqEj",
  "key26": "udjiYNFPKTEwiCw8qPCtm8pCKZ3RFWjjanYZTm4mQeNEfgshsmZ8sMc7RaPDk6f8HL2fW9Ns5rYNxZ1JQR8a23D",
  "key27": "4hx6J6XKL2Aubv8H9zAU3tP7B1tQa2W4CV6Q6GRnxL6U1Ph1y4CJkMSbUaftyo37hnojtqUXQfYbQ7dHEMzMVNn9",
  "key28": "49kDyrZuZRWEaHFeT4tx1pbtkTqnb6Z9Ytpetd83oCWHzWtMsRZ2fzffbQF4d9jVAMyJC6A4BzxWLxpMCeP1EGa",
  "key29": "2wcGogdc1UY5P7DQbEieACtXrgyUzDut8jnXXp1WUqkNjhBPVt4ujA4tgF2rQcJ5nAK7v5A9e1m1yGeMNaSqTApS",
  "key30": "4ff7nHnftDxy7HFHKaCqCJy7BJ7w5DLaD9MHgVkLTtRCSFzor3Y3jTH8gujpi7c4U7VgvASMHaY8q69NmXpRmGej",
  "key31": "RX8go2EJoUCjyicx2Fcdy7VM1SBCFRwWP2Erxjs8tfRB934Fviszs4ZmhPByYWY5oZpVFeVXHhnQnRuKiSpJzsf",
  "key32": "5NdzPS5RjbA9X3NsD4qDjhP5deyXWNgK8TUfPxRvnwCSzBH85FaymJio8BNDEC3UW5zWqo42D28EsiyVyFVBWcQB",
  "key33": "2U4f9DxYGExzD3w1sLzE3UpVBBDF5jqfygUcQbumi2tzBj3o1eczR3EPG2fA39GTJ9hfNnEwjnPb8tEhFtzKUmJJ",
  "key34": "4WM7Bw7GKDBAeyVXkqnquNZEMJ2W5zJ7ETgvKCcspkdFbxAiRyeiwUxyMRmTG2oqDS797ia9NbCZtAdwsGQ8mkRe",
  "key35": "Tz6wQqEkM37FZBVDJ7hGXeCgRGbsgG1MGumWGJbJhZdvzvJkaj9azdpstv97tez8Zk5wuyff7aZKHkRbW7MWMo4",
  "key36": "a8M2Hun2CkuNhtSBSLYGjWVrqyYGWDpPyHY9LDVSsydGg6JmVN9aY6SBCdDUhvwtWpKymP4yGs7VYn5LScQbfQJ",
  "key37": "37TQrZDDzc2shyJNdwGrL5wr2eaj9Q8bw2fguioCUDwiJaGsJHfeLq94dHXtfpxpUjGy3rdbT9UnsGCQMqLnrasd",
  "key38": "4m1p64mR5S72NvGTckjYXtLrHZha8wVeyVtdWgBY7WmKrx6j1LNrD5QVTopp9H5CwM56z1BdUsVbGVqxWSTHJhZ1",
  "key39": "x1QYGmZD9x7rNzbeH2sHQkcxUJbqTVMmHfdSRVsqv85nQMusau5vHKZtX1kCHRhjL8pFWLic7mJCK5yJ5WpTnSx",
  "key40": "3q3K1Gd9uLWZVh3PN4pJHbjst9RjqspUoD1QnZ75yovCb8j732i9aQCNqvyeumUicUSJp5Hq4vFKEWw4rncczPmE",
  "key41": "4v8gDmcgbRUohZZPs2nUyWD2bThZccvmCMJWVrtqD3HtNUowYaqVgjHLuu6KhjwWLG7ZR4JcwG9dRkjwgouW1EP"
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
