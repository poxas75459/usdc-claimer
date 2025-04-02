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
    "24U6anKfWcYojCdGG7wZ4Uq3BAkqtaxxSvw58JJnbWw7ZuiJCM4vQz7FDT312gHfkZA7XJfYjX8YyJReyh95txwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHfmNWUX1f5Yxda5TLK5XEYCjhCWAi7s4mEsZ8axiPZC9tnVQoDDHn5TypQjamPrRg4QNHUz56XuLvBArtRXFiQ",
  "key1": "1Dk16LFLHW5TW1gKSqyAcfiUjWqD6kjHQiJh26VispowtkQkJdVjRVuZieYJ5R7UVdRkMMFeQCj59LVX72UyihF",
  "key2": "4CksiZnrVeBFt1cN3h5BMNEvVi55yo5oS6CiBkz9gcnnY2MeReDbpgXhUk4RLGQtDQCmCUi28gqnd2u4d4z58YrK",
  "key3": "4FK5JGr4RkfCq7ykqpo9Ew6pegFcvSMbE5Gi5X2LsyufAYxP46P9odD7TJgwBZ7sUsZEmBytRPZohfKTfXgLzQpP",
  "key4": "F9JHjGbN9LnJ3h6BPuMfZVp73ud5tTJQi74BDfBCJBzNAMnBNRpzKqhS1YF7SmkrgnNX2vEBiLpGyGHCWt3avb5",
  "key5": "37vSeUGYwTAZ9y1hRNEvZzNarqpWPGURZRrGtzvM1emuKWtzJQJn3sQzFUgNTnt4CSUNxhhjWcEduJ2eHNGPC2Z5",
  "key6": "65DL8i58Zhn8LLauXMSYCax4Dm8UTULg5A267Bn7w49PRot18j429Yq5SzxuYb6c3xvfKKnMjtLFrN3UviC1pw8t",
  "key7": "2h8bBsawSCB6QKvk1xrUaKHvB4qa5b7rPL98Heh7ZBUtSmzjhGw3QLu5m9HjkCwh5jEiknyBdVV5mqXPo27tXcni",
  "key8": "5PDMeoq9gFW5RGhk15bhHvBcrw6sAam3gimqJyi8Hj6pg14VhEFfhCEi1iuJajXz3j7wcrzHwLp2dRXiPDWXqTUH",
  "key9": "uV5HfX8MdWAAbDJyQqHLpaWf1Brn4BjnrDH9p74XvyZshThA7CoG7K86BN4b7dmfQJHxPGrEcsnU9PNq2LbScWg",
  "key10": "49trxez569uQTMJ8NbCyi9sVsVMajVJ6g7bYEUshP2ko36c9WHh169LgHHhmdrU1pAh9XYix1uUHF3moJGZ2UzgJ",
  "key11": "5s74oPvkZqrE9ogckuaK1CUAyTUCAkLZeiHvisk3UMWtKBrA9H12GKnzudLR5gipU6QwxnHFnrQxJ4mCuuNrKKUH",
  "key12": "rVpZmSbXbkQ8xhFXhdiHYGxZwH4HnWdxDvXEMAwaK6oW5DYdjh87Et7FiTJT1DcQcPwZZDAykZXyoV8btpxs5S8",
  "key13": "3N1FY2d2kjjx6Bio2L4cwYXxHkUtiK3fyoEktRt94Q18jKvpt8t6NB5ykopNskfQJqr6c24vbY9vfxdGgnPVHsj3",
  "key14": "2ge4i4X8Xe12BtQj7pdsSCFuLqz7A7aGiMnL4caPxJpkvzWe39iNH4dDeEKnV24rF7VPxP6KY59X58gCxGZb5W51",
  "key15": "46LrytVhAfGVUsZYob6NN1UptxYj3eHxzboGyTcafS4SSGmP1rKY5duVkAZt9uMTeRzth6N8nbPwnc792XAycsWc",
  "key16": "y9itJc8r39QHbpRBQ3bQQtU11WTfokwUHjeauArFobNcUtAaDhLkNuRFjQ2Uaz6F2hFjyfLRv1vFzVNN8NDfuQm",
  "key17": "4dsDHAKVnU9xWSmZKx85MuUh5Vbka9vuSmKekMevzJd4BfCxvaUSKapzsGkELtFP474KmmcRaDG5b1QHJREz719z",
  "key18": "3JGrVc59sxVJJMh3quWd3TBM9Li3RH96Db7LuHP4JJR6qf8y2tUawFCK9v2kYokkBmSPLZ8YFBT62QcJvWJss68j",
  "key19": "4ndikmgxRCbqmtJRqDDzZdHiXCfi6D7esuEUxRZ2q2SEeyWoq8nEhZrh7vryoJqnG6BKQTV72YpP67JXuNXVcfMz",
  "key20": "5xfbgFRCVTQXLxrfEnbeiZfnXE8ErFzg3NiKj6pGnAMTCPN39jVmAHFJNCteDhtkX3qkUZTmNMyHazjz1Myb5AtC",
  "key21": "5suFarnHbavwMuM7ETwFmwBpUMPK7Eg8kpvQXN6bo7SAzmKaK6WNaiu9UXBU5eobmBVg3pk4WfLsscJXXtDKtxAU",
  "key22": "3gY9UDabYtz6P3HqHDYSycPe8p69eAEFemLmwZ7yJeiqKyV3RE8VUptutJzE2U7T6ZKdce4QXRwqGiLP1dRafuP3",
  "key23": "ivcbcXNT7ERRYDy56cmnBbYSwizXKsDx1naXD86oBK5FBk9BDGc6v4UYm5bKnP1796CpVVNioMEDYUecC6NrDDU",
  "key24": "zQgjEJyjLstG1t8rTnRFk8o7VDjurQdox8JVHGBo1E1NKedjoSp33q4tYBxqrHF3Tc8YH6pXGCdj5dvdi5yK21A",
  "key25": "2Zr1jUSjpqJSELvshTg8XJThtrLJDcJyvGQdZ9iY7uYYpNAyvDuKrWoUhTZm92poWLA3kdp3pPnG3wjJdGmtBKez",
  "key26": "4LU48CPpqA6PmKYnYa3Go9iG87sSR3VgveAduj5UagvmSshR9hTsejSagyUsPyQPyE54XBxa7YkmZvjWnF3pGjcC",
  "key27": "4bkSU4L4UBjgzMBRH7biPjZfC87jYTGxE7UYoatfwVuyo3RRSSSmzWpAdKcJLGbRQ2uq3roQyEaQxXwp4Ytqksf5",
  "key28": "2MJYL6tQp35WAJPGcnuN6fYjoXRYzPp4sgek2B7JsG8YLZGNjRRK5pq86yq1ECXR1AxocQVgFQHjT4TQ4J1JJYSc",
  "key29": "2TKwTuzjtGcWPLmzRJvMoEBctPbkoT1nYC9wN6MNK3QVHS3xEN2D7rccnGCdF6X3KQxaVbcPHGFYiUzXc5KFGfBh",
  "key30": "5Xea93qoMs4GhbRbHw8jVSSngwAqu3Fhye4mjpvJQVBhZEW9LRDEYM8ec7TbHJKbDiwatEAMKypFTA9B8QUzNbdG",
  "key31": "5wnN2kcNQcW7UeNqsSTWuVoPreGkJ8ije7sqTTMTVArDNi6Gx9RUfaCQtQuJ1y1RWW9s7yn5qhBTEoSEU2UHrhvH",
  "key32": "356aq1AJmTb7Qzon9W3KCfA82PfjQkn21g3vucBg3fiDvg9qhgYUHFGCwKE9RRTzSvcqWWUwiwdudB8Dq42KfTTx"
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
