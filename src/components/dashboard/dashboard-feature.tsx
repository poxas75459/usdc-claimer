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
    "8yh5fgZMoNVLHborizr7SfxjmnAZPjx5K24FtZF4XzyoP3sJpFuBhqT7wsgmCK5rPj9QHGhm78QgoYuh6Z7nVMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KsbcwJDcDFahMYRWBYMCVqeVQEwcKYmAykeHqH8HwFMCLdd12QHapRsDLZH1h5sekgzZvRayRnRnrJ15Ffax8Hv",
  "key1": "244euS6RGxL8SJhjm9omYpqNZs3gChTQQgKVCZkRWQhdXdirbLoZtERMiGHbVtEV3zPZJc6QGS341i972rEioeL5",
  "key2": "3NqewVwwhBnbN1B1N6GE7d5K55aRsuLoPFzZwyiPYXMQZCRBbmNgvCB3rLGmTQG2FhC1uKWo8UZUr9kGY5WuG1EG",
  "key3": "5dkAY8corcML5erDQ5gdBgDconrMktFZ15j6tZqFMDQG2ZAXudzAZf27vQFWEj5EzGTaq79MD5YVLdSxkfvj68S1",
  "key4": "7xDcVpV1KPfxoRV5F4zzCNCEAZVN1ir6xFNBn2HTQBw3BpV718wPTsAmq5LH4ws1s8UsXTeRJ3eHXid3iZTgxrN",
  "key5": "2mvAb1qSoq8XToHSsbWHSxhb5987BMugDgq11F4woMRmov3oameiXUrsNzTCAwxynWhr2bep4oScc5vCsKceRsx3",
  "key6": "qYzRwpe8rr5nXx2Ui61PBNgsMcbndQuuXAgEWDtn6kUCrzoP472EiEKUDk3pDHtP3TaRqYsMj3iv4WBSKND2XrN",
  "key7": "4PMgq5K9PKTKjr5uNXbEBbVBf1rjtAKfu54BfcDHfLZQ4CRhSzJV7D25Buwcn333yphxKb1sTBrkkyuC6Ejc29Bh",
  "key8": "AqDJa5MParb7JvvrFLXGqAFQ8djdpkC3ykU7zWqD2FC7rZAz1yakFU9XGK7kHgudf7mPmmcNTRTsTzHSYDaDQnt",
  "key9": "4tErRsjctgbZ8T4NWAokKeGBSMwF3mKaCxSvFG9iLjxF8mwbfgGug32wD4W9SCVg9Mc56XjhnXXb5aSZqCvVnBuH",
  "key10": "4e7AqA2A295uEbQNfxivTrTnkYjTKDKKvUVzMkDVYQUPw48JTUAhxSJoYoEd6wfcBMhe7ExXfNuqqKNHTPJNthrv",
  "key11": "9omLA7XGU2ytJvmuTPKrANGnQWaJjZDU4oEEeE4nn7U4FSWdwK9SZXJsAKZmzk4QnYSMWHUob3gCDwYLK8vSDv8",
  "key12": "64TxMesdqsVb5G4saXs5stjVU5m3NS2v3yn8D6PPzwUbG8QU9QQSShRE4bTfzRMY53T9ydzgYtYDYHYihqipW7A",
  "key13": "64N3DjZoybKdLmEQimyVDmLim2icH1QiEhBFkcSevhmik3avtMRufwXMRQEVYPCtuFRC5MczKE9hJ5Wsb8M98hLZ",
  "key14": "2GYZ3grcdZdL9fJworeXJAWc7j7Pv784cCFdXcbiqDs24Do7HvmYPxKCCkfMZ46RRQ1B6vJSaRCYxLhvNAAsUUkY",
  "key15": "HCWEgXZJhKaideRXV38CynN2WL4HZHTPCZ7yhX3rJriDFWAaNN9pARMmmYABg5AZpq1uhTBSmYKpET1aWAjyA8W",
  "key16": "4FURadPKBJzrsPj1yTB7KT5QHjjB7mr5DT1FbFgBcVwrpexHUcc3sb6Qa2vcnGbhtnH61pgN5bwXvyRNuCmsmE5F",
  "key17": "3PUDPCpzGHLcAYiZ4SSgfd6d8F6GS4knBMwNRRW1GZnwof5GsntYNuhAKoAPxs1TzYWS5JkHwDGyFF7k65ZzSTnQ",
  "key18": "2KJs2MgxCNZCb5cRk7SjErF59m8zLVeKZNaUxSp47teqBoNvFenuGTwoVuge3GksFZa8zXa7ErosNTszTBHzjCAH",
  "key19": "3ezBEm2bcVqkcQu8dGGRYp7wsk1wFTrDappZb6bcdzLbr3DCzJXYsDQ8VzhYYswofj1Jze2WMHwnUmjQ186BPo3m",
  "key20": "2oApGkciumfyjfLb5weZH7YX9VrC9Zw8cqL5WdQnwzwq8CaCz6o4VqGqX7macDiQE6SZn8vDbmUEt86ZRPGeHZRd",
  "key21": "2DR3tkF5k5ZqtVvZKYsXqQz18RPZeEPMGZQU2v5LJ1VU7GJAUR6uPmEmQURh7eGX9TiXRDpSHEeqe8iurDYJGMWE",
  "key22": "3SQWcedeMA8jJmEJPqPdYGUyMiXezxVy67FzZibt3qmMHxxhTfw644p5UhocRQzoiAeUgKZ7KYxCJf3LNF6hhXQt",
  "key23": "3UEKStx8U4BRb7vFFY51DJFNzQL7J6f7b9LgQ4ZDQybgxYDrqRbWiSkiTaFyM33dUKppdWrr6nNXTwmkwRtDoPJe",
  "key24": "4K5bhj6XPZnttKW9vnsvSR6QgBmtAYvqAcrn3qbQccFqG713bZP5dAaM42LBt1t9U83KwcJ9ghaNJfWiJUCiSf5o",
  "key25": "UZEgx6fvhUqjUXZx4cvrKsZuEcLs2te2itSNfNmsH4ZbNq2waQeNF1k2rSPLbSzPk3kdeo9Jw3z8MFrAtxTRPQr",
  "key26": "5CwmxHiW6KHWN13Jd3WsV1UHzAcCRQnGGymiQ1k7RxxkyBkAk2AWqdGp8rcfmPEFwU1tsPULq4YzRd8piQYHwwau",
  "key27": "2MkNdX9LwCqqrJULMY9Cbzo1kcuLrgBWjFmokRpzUvLLf6ibgv6SDD3v3L8RaTSHGvgyV2PN8qHUTk8Qk8ScDaFb",
  "key28": "56FKJafnxaQCCp6gDdHyhUS3LV9n9aXoFvQ7wXxogeC7PRMKtjz6eGm6yBzmLfD4vGvtxM3xDAtKRJMFYn2Q2MWW",
  "key29": "5fvQRuXeFFZnsdQLvzKBjUaP1LXz6FcfvkY49rvQ67MT24mRCEKqtVZrTXQZqojUr49SwWjo3BhiP9zXgPFzm2FH",
  "key30": "3t4c8Xzjrba1CoK2Co3NW2m2eyHWHMn3XrjrbuFtx1hhNb3c4ngEk6pNh9LZBRY55FZU1D5gZ5KHoXjUeGqYb5G2",
  "key31": "5KNXGSkLbztuEZJhUNH9QD9THBjNxg44Lqk39AmTJBpZjq8p2zN5RRn38WdgAuhYHx6w5gQpS522vnmoKdzFfY6A",
  "key32": "4g5gySM1gGUbkcVURyiGRE8EbCpJbQQB7P2ReA6jpeqQ5jAjr5qPazEyxug1dkyWwARRPVi8USUJa2Ay98z8QEZx",
  "key33": "4iksioJSJUhtoapTRcGAJpocXLatmcU44jSMWEXSZDiARX4MgxTEiYMEcjo3HQ9G7jYxnZEDZSycrmxfwBB9STje",
  "key34": "5fLP7iqQftNJTe8aYxVe56coymcVysAbu8puv2CMJQNmpCtAcGvXtFwLM6BrmjNZC64GFYwEgweqKjp5jGWdSm9a",
  "key35": "bjB96Y9HmVNKxU7VHpKpYzxy7tFfY7tmoQnuXHmcocDdWgGTwXrXpW2ymBsEpvNEtBvMNgyHVyyjZt2VpGUeexp",
  "key36": "33jC9yr93Pva54KLqkiHnXzQ5bjSeq3gE9bW21QUzQzsFcCBVmByDR9qc9i6sFbgLrovFNnV4megggJ89SMWfB8t",
  "key37": "3eHGMknGo84V7HH9wm5bs9ZUK7WZdxSgajYGBencTTKvZfmFUkwxK43mjzLWjxgFp7XvUo5VAJLsDDfCybzJMF7h"
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
