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
    "2i6NX2jKXpjmysLw8hGJ7ZSZ5NdQNcVGj4WUiMSHygeGRwpp5pk2U6SxKWyxwGWCBveNB6GZ5acNViQEs9zLEYZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZntn7ZLjU8uuapj8X5zV5fsNmvYnmhNWCExGHwpaa4SmcQCgzJWaBJs43enKXo8jxTqAzeW7BJmsiTzX978MWz",
  "key1": "3quFDxPmVXyenCbdoCgdNwbeV8KojsvTHCWkh2VMKQnxzsnmXjmT3tyZACKz2gTH5d77tkvpTosDBCxja8gvfqdL",
  "key2": "4BWyo3LrvsZ6kRkG6B25PeSfGhu5uhSnxyrNcA7KRgfBZRVZHPvXRApUBsmrzjeAC2WKUSMnmJL5CKSEdNtSJrLD",
  "key3": "3K8QcBAmk4j4tgjv5xDi9wqdNLGyYAmDmZfx8sTjo9kYyqBjeSQV8hZB3osnKA6FWXCL17hxqcBmjYbccRGZzSK8",
  "key4": "4qXauYQpBFUHckMYD5idhdPU7qwqhaXX8kxZWs2JhpPZcwh1jmqW6tL9TBh2HFhvYsxgzgcfnPvtF4aU8dbU4TSi",
  "key5": "5b6b635hfo1GazGNKBHzZAVFAbaX3C7unvDEccjveufLCZJBdYVYiKGDb8wJvETnujUQi5CuERNiSGsAFEgTTpRK",
  "key6": "3nYF3vuFkPsGAXZTQyxheYxVzgSFdKRLSMZ7yorhzGWX84Y93SXmqsfaoKZTLgWEwEA5iUq2jjzJ56TrQ3oGHExq",
  "key7": "pRdEY71uJvsFVMMoCE7SNgsweB2ta1GgNQMTH5dS9o6sV3JLCic7Smctc4rxJxY9J3KvWmD2J6eb8E6nFWuWMZw",
  "key8": "476Mbb4j5GxS14kbKCFNZRYpFewfs22PVopmet4UhhvCLraxp9ZSeXmtYzYhx5RbpMMbPYTK7hXPmnrstbPEt34U",
  "key9": "2YFotCshEVC48W4Zit8np4KqDCz8kj3vfvrw9VhfSevjv6LXBG8UDYCXQ3sr9r5zGK2YYXbi2EmfyrGQRWSZxXs3",
  "key10": "3aqnkBp9DjpAbTkZkSHLXsK9VMgERR1FJQdAtTnNvngh4oBmswVSYuDimQnyZH7LxeLGGP5PHkRXZNbBihugZsWz",
  "key11": "3ZDwXukJW9WAAjYdMbe4ZutLRHNVBvA9DrDTxXQe1kWk9EwSVGDSDh4KfUwJ6QczKkNTc3ymf4mTr8ZbqudUepNs",
  "key12": "5jHKR1yjdqtNTNfQXALthSfseDGEXoYhgcmXry8kGKv4FRgui8KuERiYLYsqPiNHsTmmZjPBv2YeQToiNoFeTCeY",
  "key13": "35zxUYiJxKok2TCKsBVymYXZEdYhMeijNypDQEkJPa8UhbuR9h26kzJCwoXgCenyd5jy22emqc1Mvsxv4Qw48XjR",
  "key14": "2iFck8i8mYN9Kj1NVA5TxUtj7i5Xa85AN7qqzKaAWH1TC4tMgsnqH6oEum7bQb1ffK3zYTHduZAC4xnBNJmKBC2o",
  "key15": "4CCvABbZZ326tLrj5Hpn7e6ZT7y62jffbFXa4fcGLTX5BrPMXWEYp4XUGnq9BYnTeS28xS6e667zozsym5ACRQy4",
  "key16": "QK7TJnswSmmYMDLc2gWm8dE1XyLkQfwPnNGMBnTyLEV6QE7de6eCu7UfsQysX7AsfNfguigrmgDw6XZVbQ6uEgy",
  "key17": "rY97TkC1uEVvLuwzBXG72AfxGq7KZo8fFi782BN8jA1n59gNu819Qhi7UYFoSxwZaDVadt66nsmDHxgLgkXoJpW",
  "key18": "57UMLfvjzjYG1TggxKdFYnP6c4dXpMUYMjfj89Ri9bDzDvcSKq8MLQqGdq8tFnKZMjudrt9cxyPM3PH1e4c7XWmE",
  "key19": "5D6RdFZiMpoF46j3bAuFTSbqa11t8dpAv6hvogs4KtR2ewm8LD8cQbnhY14ZR9dMVx99MvyoUYpwZNC3guELCDp7",
  "key20": "4mL5mBfBprhBQ2WXDtRVd2BneVT9QM2yd8YDaTGYTKFnBGM27fmbCcekPbaQ9FJEpiWFw3QArhwzi9fqW5xivhpj",
  "key21": "5KxRtYhwrAqcsEEvr1pq6e66yeMfdwQekmActKwo3ifTsvxrCXE1RhTXmhoRnuEGd1mQbDnckoLQphFf5V3YU447",
  "key22": "4AwMbmT1sVxgoYzKaNXYMMJSmdfUoLuvx9JZKQ4yhxCyhMqjy7yJoqibza1jUz4vz56Sd9sMU4YZVCsZkK3RzKUF",
  "key23": "3FqgjcxxYjrmAea8Z9pA5fxRot8nCu1D66ZKTB1aFLQ2UMDWftCYLNx22aorRUqjNUgoHWtL7Ybhf5LxRPT7u3Fi",
  "key24": "4LGu5zj7N3zvJEh6rKDUTSfQtPiYPyqCZNsPVh84t4PVCCWJVGA7NipTeFkGTVnPTmYvL2unmKg27FNuuok1vZyy",
  "key25": "MNHryCyqffbxnoGfFg98HP5KgEUFyTV9ebEzpTEbZPpZbazrFrEZrQG7U19XoWDHCJ5jndtNYmQ7PHRL4fq6LZf",
  "key26": "3KSHhZT5jRUt7NzoJEGCP3Md3jZdAjnSTL88AMeUVrvLvxzbrFBYdtNmjuTdcgKosFL4bQxtEqdR6HZffn1VM73G",
  "key27": "efSdxyPMvXudhUQ3PKuMh1tKmy1a1XsNhWrtQqAkvia11ao5zBzzHbPo6VwLxyvGRsoY9wk3trphwfxKtk3G8uY",
  "key28": "5FnLzttzgUtBKuMB8Duk8SaFKyUsJKAKr3yqiiteTrsmFhtdFpWhCY4GbVJuHip4WevSs2qcorqHKPRQMxQcTj2k",
  "key29": "3DJ9hfnaXezETk4AzAUfXQMnFMUtMrhvtwx3BAxcfBaX8X9ouJSCiA6GJoKpzriS32BSUwQ1Dy5QbGQcWxoiDtQy",
  "key30": "2tGdPyG7mjpwAWT7fWSEfzrvfVy6C2V275gkHBQmXRsesrr1BDVhd9UnCGgAoD71nBtWNZM2ubss9bJzD35gKTmE",
  "key31": "5iG2h57GHrsUSECUhF3Jg3AjTXdv2h3CCn8PYb5T5VRqeduhSJyr9HkM6QJhYs2JrEZwFSyHyyYxyUa6A1BtT6WS",
  "key32": "4vX5dKaHP4ER4fQfYBtpipkiQ7FiA7RFDGaNbutQKGNdMWzYjrdS3HonBnqFUX6L4yZgy2bocqA1fSkT9ff6RDf9",
  "key33": "49MXrwjtsosvvP39BLNnVfsBfZnTWWFYL1wd6NiaUS8SBqMzwGQ1AWDXd2WEkJdME7jwx6EHqy51H2gQnHC5CEfS",
  "key34": "34fo3V8SeUNeA1SiMJiTgoNFZKgUYCECGbKEtJeu9QUN5w52kxAPyiGy8m8c4c2WBuwNLj3zpqbN6PMfCEuaCzKY"
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
