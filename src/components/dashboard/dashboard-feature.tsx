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
    "5xhXXbHPw2XFnH2kb2koXNcFprfKK5RF8RFTZ6D73tznFePUgFnAPaXi4dQsX7CYwgh3Xf75eVw4BovUXiT7fyRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iu5qm1DFTeiBFGwMezRC1RS4B9haAVLnStgNnn597AXpRCuqC9ELCXkvJhuLUsaUSi2vZVz8CPLiZZVSidwUQ3P",
  "key1": "5ySNGxGMspjevkfiA9omBz3xMHxDugnMxAexsaAFyYMkKMdxeQB6nxxki5vpqSCdyzVzCCge4TugefuYfTMiUvtK",
  "key2": "3zPptU27gFiYAnKYD6Wj4HGhHXB1CiN7NHg24nPSbTsruQQgVyykBoAzxL8mXCs3Xqmn763747bgdZf93GhFmiRb",
  "key3": "35RZK9PvQBkYEFtBEWbwYPsQm8cDG89phkFYUqXKeZx1rYTTsYy2DVdF4Jeux8LD9Myx9haheMpUCo773r2ERTKZ",
  "key4": "29CmSdgpNQ5bzQX53kAdoDM91SerUmXZDmJzGxLZmwNvcmQVu6LYXNd2gZk3H1GHDmqLFcvN9qYQ6jo7QVtAV56P",
  "key5": "2seya5awkQbCiQiScXnMxx7opbucUBGcmkUcYd7yJEcBhraBSzWpjyEacbMYNfUYHgh2gqmNLVb5fRU1f7EEEeft",
  "key6": "PUT1FX7tZWGaXeu2FSy8Kb4G6mSwvVV4gM7zkQ9zAu8cAwWQ2Ap8Fkxzd9Zr6YfeDqsmXgo2G7cnUN3WybV4KU5",
  "key7": "3xyUSFytbhSaGSZLTwiBbdHJYBkspcuVk3sYATCepArhZ5RANTsK6bMnP1DVRWTswqo1yAjpjKAQSShLTyyMXsAQ",
  "key8": "3C6X7Rz6BBiXxRa5CF4wNgHEVCrzq6CQApRNuGVYMkBoDUDxqXx5fWERS99LBV1xBdQeEcZAjaMkkiVMrDQPEnEw",
  "key9": "2vhBSPmSSts67aDoLudSWq3LxE15G8xZ2ripGncJEB9dH3eooB7KWK3uQiAq7bhngkW1vZNqxfsqMPs7KG5oUqSe",
  "key10": "3SFgaZBB7AzNMuXbzkoGasuh6GiEy5ao7mpkhJz5So7pqZFFqwz6FKtauHqobLded427uWUsUjMAE7sMmpL2cAiU",
  "key11": "3iqvneoNaQfkP7vZdKGQywsqHZ8P6TBXAGfBeEhYQKxxQduGTvQ8NsdA92heg4drM5FURKYo4ymsGszQLKU7rFmc",
  "key12": "2a4PsV95Hp3jpM8nBe7BV5UzawuJEJKrB5XqjTo7iaQti61A4BVMvYGtCbFAFHiGrFMYBTULzDgPLCtUwUCumwSv",
  "key13": "WyrZy1Pkg9uVubPsrrKQZDi3NcRQsETBU5Rdg6MzuQ2A4hb5KZAxTMNdR2ozhRLkv5RuPNmPbBtgaYN9rsFhGYs",
  "key14": "3Rj8N2oLKqafFrjpGWu2AtpspZwCJyEmkA6PpHW3hppPJHPnAHHUHVgvK4QtBwyxcixmEhVFVFHf7P4BssCXfCV7",
  "key15": "AMj1VMnULeBgZTvM3WN3KyvkHb5vYkPoqo35SywWZBiYz6a7uevPeCWixuxc6ASM9anHRLGvHmn49tE8dWF9h6H",
  "key16": "3Tf2aJkM1EbvEkLGorGAbsEwCDQA81jts2fstyU9VFmXjFXWWTy99fvMq3kAWdz5yHYvG6gFCWmjyU1C1wqe8EoG",
  "key17": "wgL7Fk6ZAoLGEBZGqXZwiFNRtg4SHcf9TyKLaeN42SVcMa4daNwT8h3iGzosoj6rTSg9vqgdHCFpuGjANPCyi8N",
  "key18": "2VQCwzxg27SzChZcCctQsTGjZ4nJnGbyxbLw7iKx2GRPZZTTeo9Jzxmu5aYK31yhBDXVRXQoggdrU33PdcMst5ss",
  "key19": "5yPCfzin3Xmh359CWErrNg2c9vZYia6bcfCujKwUmWFRYEm2w2ShD5xwTugTP7AKQi5AH1qnexyM8sot9UxrcJE9",
  "key20": "2F4mLnPaRziokkQtTj3YT9zyQA2Py4PQ3HNNw2ZK79DTGTWfLf4gwNPDhUiJeCi4VgA17C7w7SeeQsvE2Tv3fs1B",
  "key21": "5iyuJUtQdq3K6KQvzWKTQ7bBvmduf9AhGMHVPih1FCcznNVyiNRN7xYgkbJnP9hBkLxhokWRBsJzVtk73HLx7BZT",
  "key22": "51mNSz5gjthNfPkHU3emgHhocAUQZbYebBYBBBScQ7G1zT2L9jweq4ywWdcGDmtd3v3bPXh6L5XQnrqpicV5zav1",
  "key23": "34erJSQSq8TJBqWD95KAT8TbFNQSz54bR6pWC3Ly826YuxCfpFiV53gYL17UuuT1wENJ5PrFSqL8722vUt24vKs9",
  "key24": "553EWLEbwFQaj1jk2zBt24gDrDVicFrDD742Ab75cCUjmWQVFXYr72a29Af45o4hJA3NRhArLhYKfXXdq49B1NyV",
  "key25": "3LWam3yVR5UPhA2HLDXyxTTaUUxAXswq2rJc2aCH4udVJZYwXxUweoKf5Fs4qjJtyydjr7GmKviNuzCJNudGQUiF",
  "key26": "35SeFBLhqajHceNoTACGPgThk4VzEWgDpEgeaxsqSpUVXBMBVt6P9AKiiD2VBcoex25PAMwgSH5pGvxiA5de9E79",
  "key27": "4mmW7k9E84pUnS3XkN5p62igg1vKLG41P9wLnmfGkGwNtrnPePKNcNtZ3bsuQNGJPsLBHkBZxNe7KpeF5Lht2DcL",
  "key28": "3VLQqsCfKk3AtQrTe5YGXVReqdrgL7BuLheCUiowmm4wnLViidYDQ7qZsz8eYyjmmMEt1udF8fQ85HRuFRVjuijn",
  "key29": "4hXidTnmydjLPrPLWWNjYsLimvaLCEzZMyNk4AreyJFsqFTBie9iJGp8DKa6A3hbqo7fLV3TzxyNukcGir3gfpmQ",
  "key30": "47zLGVkKePKxbvpeEmNwZqVTVixtan7Z7hqFtoxCv5ji3BVUKUFZUYSqm9Hafgq36h4dSTzm2HGERC1T7QPRTau7",
  "key31": "4e7ZNwophsxNgPqAwtX1evpnX7CX84tXcNKrV5civ9zLyM99H2jwgzDn6RT5CFL3gwhcxQgUWRxGTQX2qwE2ofu3",
  "key32": "xMCYr88w4jmVQKYJX7LMwZbkmW97eANTqpq48V8d6uA4MJUs1deG1zQcJ62bUw1q6T75b2XZFkXnTsKBThwt1P1",
  "key33": "2VtwdUxuDUzvdVQctVpC9twCqctRkYSV4P5J2F5iRZr4xkVVCkNn4Kq5LkTAtMuRChYFKjDsv8L1Bm2sTtXFnWZ1",
  "key34": "4pQzUu9sRtyLLAM5kAnsUiFwRzrXKmSL5jLHSYJZrxazsJCEXViyWfAxeQqrQex9z5o6d9tmueK7WJFbi4Hjmq8u",
  "key35": "3qRwBH8SpJG4YbXZ7sxTk6GkxRHUvXisvaGBmLoUAirzRMcBetPTyCtNoup3qEjpRZwVGdtGdQiu15ok2qL6Uczn",
  "key36": "4TsoSctkoouoPRUGUcB2MGr6J84Hv935F2pnzaiEsgF5B1vFnxamaGwxLpbsDsccyirwJKQGNVNwt9yzocic6Fkh",
  "key37": "32pgq2uVdQ2PdxW9VFxGRjVxvZwRwh8qo2Si6HMWSeEovqNGFM4ModZHfEugTArDabFRuj6EvVtYGYCZFWXT5dXp",
  "key38": "3Gi5bncRNXwyTa9iF4XBbgfDE5wDT1r8iET2Mb8aTHEGzKkwLp1bQqKYVkEQSQDFwRwnpUE429aSe9wJv7pPaXSs",
  "key39": "5tptE4dwczNH4Zbu9frHcSEg14xKxTYp9Gsv9jKytqWeDK6s4QaKkgskx9RNtbTYeoXgjc3CtYNY9dx47YVURsME",
  "key40": "4FHAcyrTUfCaSGnJS6DFBuhTRknydfb48rQLJoq9rXe3rVMbNXXxvLficuKBPWoQCW6KRvZBivwQBKYxjiUeTvaR",
  "key41": "3yiLe1FFqvBAtx35Sn8qqgH4YoU1CayLKUqvUrnJzJvF16CXbYjiSeRThP1sedgjVhLxoeZZxESeXurs9qBtrpSU",
  "key42": "5LhQFTKm9yeFT2PWHd1aqvTjdAcxUHKSnrEXRcxzbTkofYUDQgGCob3NzAWdtX3JxaEgwbCWT94iMKLKAGXsZvwA",
  "key43": "5an92rgXJHAkvo1UfMr7Tn2VnrVFgkuPDTgrmEb7qYmptDCEWVZuNpkD8yXcPYBMSGh4J1ZvFkh8QGPcEjD2igre",
  "key44": "3x6yBHjVaXHo88KSayofsjk9Qj5BnLEx6EjNSFUUFa39JiUBGYpYDBQj3B5mSKRAdRmPMTLPzxDqu29pjkqEvT43",
  "key45": "3JnwLfxpuJNrMr2sLFc9ca3bh7YYfRB39mv9uQYti42k11YC5Vs9QfH2rRFEeCk1ogKREabLHZjuHJWAPGgBSif6"
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
