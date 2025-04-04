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
    "5JvdwsNP2tQ9e2vkeuvaFzVHaJFHZ3fHqsrs2zVKU4Y5itWK2eqdq7y3FszW6CDo2B4QDWNshjp4GTpQuDBcpwTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "317ESwF7aawS6mmBHeyU3d822EZVVvj79PEoS8NtKMTgbiVUPUacAPA97wUEzQwc5iAZ9wC3afECetL6722Hv1as",
  "key1": "4ktTrSQjZV1psQRc8yFJBj11Mox9pwBh3epFatQbzTHqEjBszB1WHVVd9o4gJQmfE36ALrs7AFJoZFet6ckG7acu",
  "key2": "2qzKVc8tMzWyKvBukDRV3nGTysQdLtgpN1JxpQhHso1hLoUeM1DSpdjveQ46aQwTcTmsWJkxDA4sK3K42Xye72vj",
  "key3": "2SppD6hVvLKTCBJxgdcaZXySF67K9KdWU6cLMToNBUhyswgfbTMZB6TMqG9TDExHjtmYiUjdQRouaboXcDmj5RYQ",
  "key4": "2kX1gnBgL98pAFGydicxJvRJxqXKt62LDcpppWGc11bDgoUBn4KCLTGVhwWwJLzNSBQq8GFm1gfvM79EmekZtLB7",
  "key5": "2w3hcKbsd8GgNzhANfatUS56tzLNJfLK1fhaCnD6GHEpxH3EbMXhL2f4bszXNpbMANQp5AqLhw7KdjcKcRoBNmAB",
  "key6": "2nRYs5c7cisU7TJVSMsij7NZqN22PJYwNekFMYWtoVk5spjtfEu3DWAPQCizdNBWuQf8xDVFgEN3qnfKnndrG8V5",
  "key7": "3iPvgn8eywGDTPHcZ9ZJ7JqFcmBwDeAonSmCCAoBQHNyXd9tC4eZzzfVFrgKHFMYMhTjZd5LzRx6XacHzg96Gf8J",
  "key8": "5bD4mrvNxn4BqkwY6S97ZJZsNpdhSqayRX1KwbG5Qupf73pGzeubXbh69X3dcjXKEjPWx8whpnCRCkvADZDs8QYs",
  "key9": "2raHm7eyWNWQua5GAwusvotLr8zK3RSDrf5nK1aALcrPMd1iQtVtvRxDxLTpauTgkyiEdkUJcsgqZWiyV9sGSUYw",
  "key10": "21N35oDv1ywhmtyBo95XT2hFsZ6C5NAvnHrPWzZz7Tfu2vg6SMYvsQBppMjdY8dE3q5rxuTQNvXLMCeYmvUzoQ6v",
  "key11": "4B2kUaxSqytgqeLcDW7Bty4EZcLHUyCkuruiNcsX2hqBgHGU5jo7K4b1TYNcJf3gErndXNYL66cTrZCzSUBYJjeC",
  "key12": "51ADpZSHvCPETfPmSf2PVKsskmsED52ZKga9L7KK4hdoRbUgxTrQRjLQQS1wNaKqaZ3niZr3vJPVs9MnYuX1f9zp",
  "key13": "51jMsGQV1msHfRYCV5ArfdXx8dPiG4Lva22ubQZYD1J9oNmkXfHkC4DbqrK2PbMWjVZp6N5uqTrRh9kTHzTsHNmL",
  "key14": "39rSpbdgK3KsZKmoQoNUTSPfPB52XD8WZCLzhkiyEWe4KKy4SJVYPvr2yLtkqd8gDgdU3Bur8V4yUGGwvAJFpm9x",
  "key15": "4wMUkby6Zjsg1yspZJxzgLHnjP17UhCrXoSWeSPR71UhVHEYSPkSa6CqpaHrbJqgSgqCLcXMnJciTMaHUhhYKJVn",
  "key16": "3gFTercUBvUqsVWMfDR3VNeWfpKALkjBSYYPoQvi7e7jT114MN5mMCFpm7pEmLBWRWmorm99BXNn1EAxT1shkuYt",
  "key17": "3MJhtaR63VszZAtsAo1VPvfbKd7uHKZpVPdJXz8voqakmSvt5PH74B9PNYQ5Fx4RKPWQcbV6Bij4nt9MzWDwWP4D",
  "key18": "Kyx4EfcvQ31Z3ak95PtPo1ZcXnBaQ5T9CCbUPkNu7WN4pd48vxFTciGv5ep1hoRd34jiatSTUUmYKnzuJwdiwYY",
  "key19": "4f82kh5z2hBbkPYEchCAgCXY2TU1sa3aVF82xPYbFiJWwuSKvGaLvyNft5DXb3gim4e6XTuLxdhbGikZion7Ye6K",
  "key20": "29fm8CH2UaAJZ3LxjrzYV3eVcRqRGdLx5Y64yeEh9nXqHjtAmpsj9vCzFbepBzwVQvN94FamoDd2mwRyCczSssfo",
  "key21": "5VMra6Sv6KPC9ERcqFCGDSMEqTqLPRqjtRy89ji7WwDGLjAejfUDjeRa5yaqqRMZbMkxFeYCaVArtwt87nwEkZ3T",
  "key22": "jbfoRuj3rUyYZdeTsfumre2WSiicFv2VUBV3aFu5NzZ25VCV5tkznkUJsM1GKkqAKKSGbQ9xJUMCDQVsJ6h8Gfb",
  "key23": "4hTxxjsTJdhZBuEUqyyRjC3jZ5raPCiRLCdtdjYZz6zi6EjC55tqSjXKPFMtSgMbHngmBqgM9cZ5jMKJJreozuC5",
  "key24": "5iUVRMJcEJRJFxwgehH46AD4NsL1zKQLMKv2SKoXTKym3wRBWprimHb6x3QAMryxtdhmJ1LmE11aS7L1QcCeiLiB",
  "key25": "kh9bc8nevNnbzF99ZorfJiesg4k68NjLwXhvFKzmTXE1Q8uSy5j351F48fjaNcEHB52UC9LDUXht5kHkSNA1mq8",
  "key26": "5bYinjeg3VU7nPrGsx4rhRf8BY2dwnN4rpS2qGfcn1mPHz1x7R84hYxyssEb1RXkTN5Rwu6azCpdCvVy8JnCTJhx",
  "key27": "4hK3D8fd6j87bqxgE1uN3FYMPKH6hofnYYcXZJY4m7VSoQFnmJ79PD4RtcU6VbWkWnEmg26HYbxBz89fzYtgGXeu",
  "key28": "3unosqFviJvCz6wAUzSWNqTNstakBLLLmB5YDt7XneUZShbGmBXwEaE5GhXhKDpjh6TkFdisuAMUk6QRMSP5K8tA",
  "key29": "4ESW2pExvB1PcpmgN4jm8Dj6RRajBbQoL9aGGXDr9EF7EwY8qGh2bVf8s9DXybKFfXk3XtqN5D2Yd9hBXfZW3S9F",
  "key30": "scd97zoyF3GGMyuFnn4PsqAChxnsaL5aCbqTBiEdMHFbN52ECwaXbgyK4R9XFvmjxLVcVwD9iMrCntMBRepd6Xn"
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
