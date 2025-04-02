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
    "52VHKzkHTAvtKxvoo15vVTH3Vx1f8NtwcxHvwrB2jChrqso17aRtx3iy5orEWQyWe62Dz8jDrriGbNVL3uLDTEhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErXrdHEkEAfJJzQFRqWTd1mVb7ML6eXV3N5kHHFF8pGJPKSFpFFfKx4pe6TLFBFHNp3qjLMC7gCvuWuPZQyaNb7",
  "key1": "5bnbebg7WtUKF9faa4Lvzsn1cE9GqsZhdNtaQzRMR8vQ7esW1SVAeNdyhcgx5ajXZwfRd8g6gcw8LrndfNHmC3w8",
  "key2": "4vDMD3NWhMufJgSEFWNXmRZC9gtdBRywZkUuLR2EfPhsWzNt9kZeK1swdFt2CzQmX56ud4zGixJtZfKnQxzQorcS",
  "key3": "z87CatvRQTgmXYuSaamBPiD1CtoVeun2LyqKQjz95vSka2pdMxytP5JMK5rLFbMPfbC84HqomGkagpjjXEyK1ek",
  "key4": "xEQ8fVc33Fr84JCYsDdVLfTA8hjgXFm3gmz3ghnyQvFUYvZ4nUWVLzWnyXLiZUM4gtU98B2JskoB52A1C45HnTZ",
  "key5": "5H7ftn2Xu28oaRHTVxjnjVrfVmp58chw4W2pr2dqGKmRXJH7wjwKQV5AfKQ8JSDW9EGEXYPnLM3UsYvtksrnE8mt",
  "key6": "xG7mW5zdCNUd1W97cNCUbFKAkFyH9PHRhojZAyv4nF5dWFQTN4guS3XZERFDcsaw2wccgnc1iKE2Sy1VF7j8uD7",
  "key7": "2cEidNTBsDoNG9BBnz7srhrkac6vL8oENA9hZiPjyb1sUTWcAgdJBJPop7xMy6sdnqxJS746jtDg5itQxTMRfjQp",
  "key8": "52UUKbXiFvjc4jxWxFrfWYiLbR8FZkpDFjzT6MrtR5WFuqKv7nqJxK8b6ucYyZMzDiSa6eYPc7jV2hvcpVbHHAVx",
  "key9": "2mTHxSAW94QCyt4zwkREXWXug1FkcP5UtUgb7LYsLnAZtCR4EHTfDo4Swhjxug61cT6arGnLxka3hK3H2RCLda9a",
  "key10": "3oLCgYUJn8mTpJSc4qRP63iNrZam4dZRc51Nc1W2zNoLV8SPUPEJkgFneNWYPe3ZEhpqgWrpCuvVp8WWWvm7FYLZ",
  "key11": "32hiiMoc4MCgd1YEtxvHn46znZZeDC3D2runRLcsQ1jxdHz7STLri4yjnBE4a6urFuQAxP8NugxQrSxbhY3xoCjE",
  "key12": "pniEbLjvbuQVbSq4GfGkHmJbEYvQNw5VdSnEuSjUDiXNPqLykBBmRjw3Sdow7fYkBapje1pm4YQYDtRsuhz5ZCR",
  "key13": "xbCgrhUF4GS5uLEVjnbLZM9CaefgoQwRb2f5cdYwLBe4hNNTqBU42Kg8NcxgwaenykoL3zUPM9bnpogqhgAuBFg",
  "key14": "LZgDjY1TsfNaxvhE7gGXdLG2pcQiCetvCY1dzaVktxmDGYpaKqSHg7WrhaTmMe5kZy6DnBn9ZTGPSJgWKezy798",
  "key15": "5z29N1Q5HR9BP8k9uDdQcvdzme8hSt7Z4Nx1Ds3WTuybjRKLKVdNvSNWpL59p1PYRxwq2FGVyTCtepMqgk3DLa6z",
  "key16": "3ikakhdSUBBGLuVLYEzQoFedZMLcWweGuZ3cYRMSXcg145rsXBgSUuG99ewnV5xzj45mFAf96XvJSDfzpYB6APno",
  "key17": "64tHHxF7AjAs5NsDGwdt2W5KRZHiDVhNiJqDvctavtTGp178AVyYk3bkwN5N42JhTuKRt9fc3SD2DMrxBtPcP4FG",
  "key18": "4ckSbHNSMvzVxmaxTQ9o5DjCnSdSPnKcqqRVNE3A2siTws8aQPhjSLNSquCW6AXaisMwn8D1xYe1FHXKaC9KgZ6a",
  "key19": "2bNNm2Ati7do8UDhhxXwtpLgXxds7CoEzbHqFqz8ohC9QR6pKuTzRUovUnCQrszFkzsCfFkBMmGJ8MCre2J5kYL8",
  "key20": "3u11kRthJyMZzygcMGRqe3bHz7b1ztb7dYY9iv36kgt2rM8J3TesugaV8UfqBxwpYMkzcrQHMHXnG9Ks6drMzTDW",
  "key21": "3CsB1AYanh8dVCxPsyEKBUCwo8SFaQ9VM7u89dW2jjSDKWb9qfeSaPFTJvcwJQP6Dg5LA3yacJGgnz1bXic6oMph",
  "key22": "2Z9zY5HNoE8WkfuWbuJ4qbZB8quV9orPPathdLskteafhU8YgLK8A9tj2NPRW4ip3VtfJ1BadG5TfAjU8ys7hLBy",
  "key23": "4sXtfw9peKDwMXjHwziuwmkmZh2wcpZiUea23P9sE2rMfxDnzLKxDM8qNfBAVwmoHTXhe3NZonQTHiWvBffmfB5J",
  "key24": "44aaDYddTD3jnBKFrQswmS96ar7tP9sCajFYpK759ey2FPaq6Q1pJ1MpSxmAEguMqC8UQyBHiTYBhCm8wzo7QQQf",
  "key25": "233yHBRxUK5wbhCrrhQsw5LSg4xCfaxFYeF92GA627RrPUwqX1c5XFR36xpdEvUwCkiNUzwSvJXzprAuK7d8geqC",
  "key26": "55Q7NL8A4yHbVDaKWdeWRMGNkbDBrUCvyR5t9YV313NKt6MXFsRMKM7uhbBPQ5Dtk1FXntwX2muyBBGUorcuMsM",
  "key27": "3ekpLyyooqZPeMsbTqswUBQRrBLVRvj6cV2UTD44m8a5gVEcA1peDk59kUtULMVxjR15avNE7dAVuaxeKxAXQcKM",
  "key28": "4qfG5jnQvxiVTzWsDeeKcpvnYJnkgXCwxeSQdFrBP6bufbP3FE5HvQXZtJ6v9gkNeZDGTd7qgrEr6dDca2W5UZ7A",
  "key29": "4c1wT14jTptPty631xr6HWdrQjntMGFYpXHcc2Jid8VDJdxQPtV2D5LBs6NGq2i7VxoZWjjTwJKP6CJr6HV89bj1",
  "key30": "5KmmBgiNH3qHZq15jfib5L4FqHr2Ba6gPJZCmnwr8xX1GHgvvyiY1yaJ5uUad5M291TJfLACh46Qvihmaiox1yNx"
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
