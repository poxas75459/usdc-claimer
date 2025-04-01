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
    "5tTqadZNStEcMDiBqM6fQGKDjz4tXucb9iz1PcRebtrMHEVNQrGf9xgTUrmCFdyvFLChqyS6qf6k4SrLcV9Q6oEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FASQCJq8i9qqDcJ9GgJTMdKsoMRiNcSUq7GpTxG9LtBL7hkRzC6DfkfJGQfCXdTqST24mQ5NJqwuqV7TMQKra88",
  "key1": "5wC5Ut7wM6V3mcJjiDW43noK5QMrRjnVBWT36QcVbbpQHJs78zsLZRXwwxSgNJLjiWkh77L9qY5njHEEMiAMiM44",
  "key2": "3LKGhC4DwS21L3i8GrRUUJJuupx2ubqCa1X8WtUKsLPrCfNrZ5rxMyNHAv39FNdSGVxRfPnFUfFG7YjGwebCfNNs",
  "key3": "4reu6GAgiGXTeTvXKp1JAXkyJ2gjorFnLhj9GDV3ounuup715kPMFnCa4UvaQ41KUyr9wkBH4kqzbJ2J8p5QqdCf",
  "key4": "UUNjX3QP5zRL2ZH79khXeAR6CB4Y7m9nVjDaPdkt6Y6Ci9S1ewZqrtvPCMe6ugj6RwHjUHhoe4HYGKXm5e2TwfG",
  "key5": "5LzsXmzZRj8Smeg5Gfkq3HetJrrJ391nRbUewNx8cK1aJytXwSTnpGuhL7mjJJWcy6XjSKtm6iFDpaSk1S1CMRkh",
  "key6": "5fQbb6Frxwe3DhM7qdHcczNnvL4E6GnYRhSpdf8pohTERq3Z3fWMoCe9j3aC6myEMA9rCaNZ87N9b2uYHeSRFWB6",
  "key7": "3yCCbWo384e3dAdLfZzW8uocTcSMg33kaPxTrcE1GUKsotS65WYEb3fjGvcxmiLBKySpGL8aVtwbGUsib3pCXYge",
  "key8": "3ZCyPCKPS5ubPFLyUJMNG7LATx6fmyfEsLWQLJ7gpmJtrbT6HUzQt54H6kuPneHAcRRYZyQ3DJ8jbVZJ6ckAT4gs",
  "key9": "4T42nC1xuEp6aS6mdY9XXKZ9hcmFdAHtCCKeB2vnPaTBA2TTAZmzN7ktz7RiJNUjW5bVoU1yeMhnAxk5QDdVLuUU",
  "key10": "67SgrC66vkaMVuJWf9n4k7fRGCcBFnVRqcRfsVecWsjfqGHQT77LYYJRdMGqSrsxRzTMJPayPhddvhVbs1jcWsMM",
  "key11": "4T5QRQokhQdw5N7srS6c1e67tXjYh6gXQbuYZ4677RWZ3LoefrKv5duJLgwynrKXMsA6DBUtGwizey3a89FjYCos",
  "key12": "61kceRsLVmPRixB2YT1BU2d9nJ1mD6J2eWMYy4yETWRWzio7dpLUbksbnKXC8vNVJosYQzuQvA5VvdmqvLcbzxUi",
  "key13": "46i7kRiFQP1CY6QzVAmWWHgxJ13e3AX4tFmgdKUBAjFjEBNFbE2ZwLMhFsB25H5euu5kmridtQwpto5AcyVHnXff",
  "key14": "ZyV6kQ4g8ctuDhg7ZisdGHw88nPtkxStXtGC4g8s63cZHzPdDwSv9fZmQY1ufAo2bg52yfgzfBopSwT7ssCKpks",
  "key15": "BjHT6wtcQguecswgc8YPG2wbvXKWJXkX9BQ1kTFUXMmh83hV7syVwMStBNUbTx9X8u9712GTTEuYU4w1PGzrM5v",
  "key16": "2gcpKMDJvD1FrLJ1bpNUMGgaYUHbTYnuHUvaVYqv3EawKfh6VECARG3ueGiptPatYtAko2y9YJfkHzLLKe65n1NV",
  "key17": "66xDjigSvJcn6mFPdECW1qfZLXFqtTmRuvzTPkN5DReXgtZZcdXZgRKXbn9ZUYHE8A84L8oYRAu2AHqtCqcNeJSB",
  "key18": "67gghBKR77uajHQA3XadLK8Usf5RaWzf9atYpfA5mHtM6PsUQc1aTA6JPA71VPgEmWeVc94A8c9mprgqnL91KFh1",
  "key19": "24d3Y6FYZqgXDz8bUE84gC7isMcYR83R7EzXBLbg1DX1M295JQYjym5EJmr6SDGGSQo3CBShbYfB7xcDZL8Zo4zG",
  "key20": "5gK6JSx616s16QwtYkjrpF5QSJGrK8rkJirzn7CttKCV99ZQh2usJmDE23tH7hKMDqR45FtoVJmEEbXfvZp6cYSA",
  "key21": "3CRhb5eHSbzpTHJ3mFidKqNEKXnHF9obkncePf6qEnRiyUvs99xKaJ1rgzWJtdpGckXdz9XMwANDJAFqZcx9wwTj",
  "key22": "4ZBs2JwvjnmxBec14Hpt9HkD3nr5pjVSdMPBVuCQTWJLU79rM5BTFLvRKoFHUKHd4r4Pxv1QrQ58u2RVBrDtZf6b",
  "key23": "4scFLop8Nx5YvUbNr8cW6GcvLnzj2obF1bEs8FKmSME6cvRDnTG8sQaCmYNdfV4JvD6URaaNTiRS1S2iowgKh89W",
  "key24": "5FtJFCibHyMHVnSe3G4hYUubNTvPkcfXuBzyEJCvx4kvpy2L6porfFhVDMUADkepTqgRN49yFvGZJpXaJQ1BzPp8",
  "key25": "4Td38qJevnQEiHrbWpMswoV9qPQHXmwjqAS4b55UqqrtzkZscWUgtdjL5i2rqJqUXsk6iyaKq7PygqiHkynYFmXy",
  "key26": "41hWf5aUBV7nqMK5fBwWpCE3csv19qafhguYYc139tTAFpeMRJr38oo9JEuL6BtX4f4PEANnG183gm8YnsVpSzT4",
  "key27": "5U3dac47ZJvxj9tsU9psCxVc1ssR1T7a58Xaov8mFQcJsoQPkCcNF7FLLNVPGeucFxQytVhn2VLEbiNH5XEWvmef",
  "key28": "2XSky1QHc3MW4guELF7Zb844dyheiqMroF1mawDfgzWaVV6p1AkpsNVW6zuJhf3X1HXpXcji8zcCcCFTmfydktHr"
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
