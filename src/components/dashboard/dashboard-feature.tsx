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
    "3VY9bGqqFbmdx7HzUY4izg2HA8BHKedhuQapupXMpRTciuK8arRx4qvNbsLrm2Z7yshsNjrqHQK9WTQ6X7of5Ace"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7sqxTeoi5XECXTthsoU1LP4no4MidFMJU1y6Zr1cUSfsTfq5hLGgmFfDyxZ8QugJ7F96XDSWmwTjbXJAB9u5D6",
  "key1": "2w8kN4KQLJsm6aTPKYf7ryU6YorcqSHKLjTZYoNpknqYU5V6wjf7W8AWi9UjQpsDpJiCpi3M9DW9DLRDAgfFZWV8",
  "key2": "51QwS9mRoMbvpbBfRxKJRmPx3FcPuRe6jV6u8SKjgVqJGd5rd3txhPPFh3SZkdg41oqnjLawqtxaBGnQUkQV3trv",
  "key3": "1N5CCS8DJMjpprNzbdDtrMZxZcyLQSrxKEenfk38hdbw5hYvuL1hWEZ7ZQfbYnYDuDAX5bkz8mGycJFJdDVxq4d",
  "key4": "4jQ1A1yriWFQMoL3ECMGv3c2mfYTGkPg9pbRXsuDqcTnrnuRaQmeswqFbL4kPdrT8WoRwUckBNr2dx51Kfn579aY",
  "key5": "5GeSxXkEvmeLUJycmpAkCwuuCc6QJhqr5VRQim3SQ46kgrAXCrvAdVYoGHMqDZTSJjLTm1AsQRrZw7ebe1khNiub",
  "key6": "499Rt6zwmLiBWokQ25xVuCfnZ5K2upUZe9FAANFz8BCJ1eQpPDtWCnxkoJ7dhPMj2BDGKyfmkPS7VYmNi4qFHz7N",
  "key7": "4RQkfXcfpKepCJMbiXpFVNqB6K9uLQpXoWZ8dSdsataJpTGDE82BkRzVFf41styYChoYfY75pH8oEyYdYvewPedz",
  "key8": "4M9SWd3D46iR7m5StR8TdPy6QR7NJuHuK4CHRRYyi9KST7vG7BzzjnxNqk6KLk8MVjruyAw6baT48JWJ83FLXnu9",
  "key9": "5t73syBBPtcxbte89g9mVeW7LsYyVhpnxac141WerzqWrXTXEFP1nGjWHJ6NY3XbqpDeRac4nz9M7x8gc7JpCCZm",
  "key10": "4wyDvV7YHafvf3g7FKHxeJmRWwe785S7ZpMSrP2EKy5teRucgFMDxLbfqUitZ7Gd2kLznVJJqJtqAxt7JcEesFt4",
  "key11": "5HgQQneBRv6uBwALkFrrpYz4Y6YM2WQSj4tMHinpYNBkP8tmZmcVfoqFbo7ACLSNWQB4VLMnXdQEwHQGckHCcYgT",
  "key12": "9Qa3uQzn3yDf71DHQ3xsNTLfbKme4mC7hQB2nupqKLVK6erFNv313we6huPYAgfsNi1EVfzory1iENGqbyiKT33",
  "key13": "4gMrffjRpFTbkqDfmvMMPwVNYWEf2uAD396d9XDfDco92GFpsfGsbSq3M8QWXT3UZQbZVznxA63xyGuP1984cCah",
  "key14": "43Y714EgYkqSzw3gn6HXiUnwnPCmnF45Z3LFosWeAbL4HDhhC8zLnw68EKYwtXVEMaLQBnrtNGsGjatdShAgU6Lg",
  "key15": "4eZHayomBofDjKx7f7Nqe59TkcnX9GK6YdVwtB4kMppUipEhTGdWdALwuZQnrByBnXuYEEKvTb3gfP6o5L7rfrk8",
  "key16": "4BmpWrjrn3WVq9xCFAm6XKrwGfGupw855G7AjxAnSN1rP3VTwiSiuGvGr9qdJp8omwVZ3BEZS8LRDBwKeSeUif36",
  "key17": "2wE8RdceatRVvT4VwSnCgBxyf3R7hqTU1wfmaUzeFqsZRre6u1zC79Unmuw5j6Pyn3bRyuLe9VwL6tzDvCriUqUD",
  "key18": "534aKQwYTZN6X6yD222Dvw59yarzuogCbFHnMEdsMovsRPP5PUbSXn5SbtNeJ7udoAu95fCW5G7dDSdFWxMP6ygA",
  "key19": "5vkJ2CZEhfQ3k232KCyGGnPnoisf5rGj3hsaaepADDYRtjbnQ4TYJXDusN9TNSy7pYRYvLKkjR1PQcu1hARzZu5F",
  "key20": "25uYWFLcDTUAx2MpSqo6xzNp1FCRU6yASUKS1hSvbeXMrhN6ime9CLmfjxKNEJhuUy7JGowmYPLmDYWUsHnxQaCt",
  "key21": "36ccQdzjsBxtbFwVeQiCRDQywDvZ79KKMETSM1at4kgrZ2fNrH2Ded1SpmAbocCNKfY81ruXjrc62H34U1XcVgtz",
  "key22": "rkL2yoo1pvxMKVu96WNrrfkTbo1b4YsuGY5VcQPcjxPKFPahk3uSmtV4ZmYfX5KtWco3z3SxY8VfgNPt3a8o5av",
  "key23": "2PfnLouPeJgYL6F1nGciLAmjRdvc4H44nhv8LtfVjK2gTkwPvxmS8Da2JwRSKg5HEwCShpkwiPKvgGqencvNFt4G",
  "key24": "hg7hnSyzty2L3ifM2MesgHhXo3i8rpELTdeFeBJ841dr1KbVbpZDoBwsBAueuAEoi8rkFthzvXDuBaF925SMJyJ",
  "key25": "3XqcWfSDbnQ4xJsPoEvd9wrMzYRqULJ7mjwZAkj44mBHA4PuaKhCn9rYBYaESAQBts1oAkqnHxiPEHWmDLBXxjwB",
  "key26": "5c4d8hbD4umBU8nUa4RRVxXTqM1p3Ln8FgmwrAbWrUweRKGkMvYKe3xyNNbPVpg2twhRuPq8cYziveQFBHshm9Ai",
  "key27": "4h7kWryo5qnvgkbqQ6oNDGL9jPMfvsUsqYc3ZcMCJg2nm9SRZB6MudrinwWwGmz2Z67NNJy4r7f9frKxpaFTqte1",
  "key28": "5GNReeu55RAhdKLQAPdEiTduk52zXond291ziQefiMv91DBy3CEX8y5gCxgL7zDA7iC51Nmi5TFzp191T7dfrYdv",
  "key29": "PwtqBz2EpgsJSX2XbC5E4gA6Ju6SHpWh15JXSsheC7Ye94kVHPntnPrTe76rQFee68FHUmsoj74r9zCKhCspWqP",
  "key30": "2oisURsvtYH4NTZ2unEuE6ija839iBkCC9yNr9wU7WrhwGwhTzCWTdmznye11rBCHsz42vv2emv6W49CF5zrPFUg"
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
