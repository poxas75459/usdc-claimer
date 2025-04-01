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
    "2HJHLrDATJk1X5uP6bhhpMpfnx7En9naHM76kpAVuMbZYJcn88bvWwweRvigWok6F3YuPeqTMRfWpfkWayHwdsHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ka4PHUAxiZkNKyyjzDinuM72BzfrcYhCpbiaxkXSqZ96CgtcVURheXd4M4cD6fLTokqASrDzb455JrdaDuMg3j5",
  "key1": "LU81hRRt9aKgxprNUUjHnYqCFDqVrC7Do1hiKtgZNHU276hvBANkb77FSwKyytwq7dBHkdKGnjy7ojbEVUjtr1t",
  "key2": "51JLe5nBGBc1n3wizhFvU1tYg8b1H6N645wuMJTwnvCdByfiS2rpvC9EmDdWgPHDmyBF6bcULAxvKpye3un3Dc5z",
  "key3": "no812Qzvz7apo22CsCUDH8e2QkxwxfhiKv5P7BD1ymw1mQ5F4gGWaVFEU6YniVafRseesL5Pp4TaKRYwwzPTbjp",
  "key4": "4bXDSYCneBVor5tTz23GDGFJNy6xGjvLXy82Lus7QtwUwBXy3A8nJFXgqCjeUCTYtGvE9BHrLFFgFrBh9g8UxhWM",
  "key5": "3UGcW8aKdD7Bf9ScoKUvnkQappStZYQP5Zo5A3DKa4CfFN4tTgSkDgAG546eL2ChdKPfqjXL6XT1Bn2F1DPrgnMY",
  "key6": "53HQRerC1kC7Q7Ax8S9avnouTcz8Qj7e4h5RfGt5aMq7SXmeBRZtnwcW8SorpRetjFHx2nAtBPnmBH8y9Rn7Sw7r",
  "key7": "ZQvXWsHWn5L1YCNuBHf8ztAbfh99sXRKxvpYjkRmrVqPjDUP8YLZsyMvFjLa2fSbsTNbJ7RDELxVwT8GeQDtjjT",
  "key8": "2c1KyaP62VTtxy9wPaXj7K6oNLF9yYcxzqcnaVeCh9hZpunQzK3a8WoUKmYDQoBNvXTn8ZaEeRXtfz845uH84ja6",
  "key9": "YA4h7FUybgPYkYf6vVLT1hhi9e8mdACWK3zjqEDED5UFjnHNdY4nyEdSfZP2VRR68AVDA571PduPXfSfWHx82VJ",
  "key10": "2Jasw1xEzMXT97Py1N2yThmqymSV1sBLzrtB7dKQhFzZUdvWGYXbTgzz5p5StEAcwNhJ16w9KDS1pu5dz2HTX5GM",
  "key11": "3W2rDukfb1kmatqqh1QoiuQQF2kDzCVP3ExGqSSxyePnwpZafUgsYbraDdRGLG75GNnHu6jFAjrECionE7vg6tgF",
  "key12": "5LpqYcPck9DeWvaXBrCfBQgkLFS9FZuxh2EdFN8GsLcXVfpDrG8MFnNLM8dGmMLPec5ySiV4zGe4zP9mrmVDzD5R",
  "key13": "5puBEDpwV9AfrxWLgBV2yug2fiWEEwRuGXwhvzuxBn9TMzHHGaaAYMCB42quxNjT3bGUCqQgVyRJrcg9cL7MKqDf",
  "key14": "5bUb91odL17yMwqqB7zuJKu6ekPFzAVKSAYxxC1jWc7rGbVZvqkpYosJZbvVMhDJdFJuibXqw7DWGzpLhF92dNLK",
  "key15": "MqRm3hA9k353rDc7HF5U5St7oU7xza4GUt32hLJneTYNdanG76d4coUpQSCTi68VvwmrVjyK4yQ6QcHj1rqnfdm",
  "key16": "3Ueqmne6UQ11yLcNtquYLfzfniAntdhxApRUt42rdPq1jWLNwu5HceJFb88d8eZHKgEBT1KHBFQtQxBqLFXXUQsc",
  "key17": "3wq2WLVYTFup3aVSoULTgeoXiETZgtMSN14i23fXqDMGyFdSuiTAxxqkzLSKcGrf42rcWWM7j9wyzPb81cvNmbMY",
  "key18": "XuMFpEVz3xxLXjQ379X5LCaovBy9hzvLx1G1FZXemdWnNvq71AMJ1PzPSVSXyG61aJN6uHn2ERQ5TBV9qZemK9w",
  "key19": "5HEQvrvpLxvJFs4AUFfWUBtUGL1FY3xVL5k7YoTzXNgnL5yD4pm2ZTbJi8DxkxHjgyMoctQNkpZuH69F2wC7YtSv",
  "key20": "3dcvMnHJY5P7EFposHeZDVbPrhbBUQ9HEiPF1NqBYXE3tmeHnkYe1cbAQvmB2ofBNRf7uQcj4FPq5DahMDu4MA28",
  "key21": "3BSiFPmmT9atnYHFNXHQsafWvZbvU9vQ63FiFLbQns3MgxdfPVMUem91rVs6PcZCk3wniUqF52xkLSZnJ6Ji91mw",
  "key22": "57BqR9uzF2oozAU9uKoXiJSZPfXnXYprv6jErMw4qBu8wqwXpBDMFnVq5exK5HE73TVh96fZBFEDhAuTTGkGvaog",
  "key23": "5L3eqmDwBNryuwgWrsq4Vkwfj2huh4YDVky8MrnUcfTDZcw64ii3JsGouqGtzQkD6YtzVXhsot2gvXsfmi3STdQ2",
  "key24": "3ECRRgpZVw25KHbNEFfNU51Sasd2fS9eoBbDW2PoXxpeTQWxn2HT2dX9GuT9acYtoujdEC9LCz57mKQKTXe9TF8p",
  "key25": "3gF7SofpATLNAT8sAeqnsXy9pQsniXVnggSPzwqJZSV32LdZJBgTfcKreh5Ss4dFjEtpEBMdJEBGFT3566jWbgDf",
  "key26": "2NHi5YfXL7iWcGEAakWAEBno5NpfhQZLNx3ZNUzjoirzPqfrdfDtp9JH9SnY6qUyJgbmTdZqEXVYbgjN1uk63ngY",
  "key27": "5bs5Hw1vfgdJNRJnXum6cSmUbLPrdS3BjtkL4wEdQFthR6J1Tnmp4LiA5RBx9fRtsP7mKAfeTAADDNNxohAZxaWx",
  "key28": "5vXogZ4KfneHSFhYojqBpKJHER2YbrgB8Fv7YWLSYhzzEDg9rTUTgAGktnr84sSXgjf8nGZh7h77biPbHMBKw3hR",
  "key29": "RaHr9ZGaGPfrywA9rd9zQA7C7iMteMZyagTyWRc6mzwHd9p91Jdn3VojuT6HyUS93RJhUUFGpqtcbztG84JNrWV",
  "key30": "4BdLC45Czw8APqLd7NDMgqFvxLVcV3Te5dZWqvpMX8VcJpxi7kc8EMNiofnshnrsNdR87kceJKzBShQTwG2pHBpp",
  "key31": "48oz2q5aUvGEYNKz6pFwt3M142p4R5KV626mF3dCFjTWEuuq8zK5Enejv4vDiFZ7mFbMeyf9BpE98UPqNmDwcUyD",
  "key32": "42tS1dZ6ukADrfwUy3KXEgfrkdt6dFJB7vrXtS82X8ctTnDhmg2U8asZtF3y7XKdG7MgdoK4YrYLugb6d8PGoYU5",
  "key33": "4M8hi4zZRJYWkwzm2SGZk7RMDsRoFcScHhCESMRijYEGf2fCRuQxxhBiwUKtGp1cQVtHiSbJTjF4nAQBjVq8ue8H",
  "key34": "3QPo1Cez5JKCdPYeGd9kSBhB4hi6bvMuHQM2ux8ioW9i8Uqp7UmGun33yb41CTQC6Qma5brcqDDgsZiARYgQP4D2",
  "key35": "4sRp75WjqfPaMgcEDHRLMSzyhdVUt1GTK4tGJWzu1uMyj3A5s9Kap5WSdreTmbruwaAhsjvibk27ALJs42hWsUSv",
  "key36": "5t8x2ajSh4PJhmF6mV4iuUVWqvc1yBq53kDwskAvkQ7EvGPcdmuUJ3Yuvbbt1KMq6vrjaXB1Xj9oFFvdexZUo4wQ",
  "key37": "3gkvLbWhC5Q37DPXVP3Zdr4DFhdXfHdGu6S7S4gPXWFb3xfeiHNfFdjgX3XUsDrS9DiMWfeQorfWPoQHDH2XEYU",
  "key38": "3fVi2HVdn8RXXnJN3KTQ3WoE8r36HXtLRGWmiyeAisQ6a7mh5QKNu4Sun63ieDJZVB5Wf1uZHR5dCEiMH1dx6Lcg",
  "key39": "pJvj4DMoQTn8d3TDKHvCtynq28FjoTWAcpyb2NWdSx3HqZmjzv69QWSbz8kyEcJ5FqF3m2HWiA3Lx5vXg8eMuto",
  "key40": "33prwvqVSH15NVjEmjjSE48p9LMpd2qHzVYYYFeQaQpGLmGFuHXN82vuQwDARzc291M8fXk8qivuBsKU2KvQa2Zm",
  "key41": "4utHt7E3DWypWhh9Xajhb9scDqh1gw7Fyudtwmtkok8ofsnosZMRtAXmT47RvVVMUNKpPg5SZt64tHRBGuwfetfi",
  "key42": "hr8E4jtJ9kRqVtBuahqtq9cdNXfzLDmsJ14GLQQrRxQqjirouEAf5Wmff8YQc1ewAKZSmnw2Vns9gJB1Qbe88A2",
  "key43": "3hcqU7zXBVTwad9M5Sf8w8EbD7MbZ7CrweCRYWHKGhKePo17p3g3qvJscENZ6FbGcoE31pFfWT1KKFWi6r8ySJo6"
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
