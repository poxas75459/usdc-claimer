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
    "2EZ3uFippdwuiEc2pCoJi91KdgvqLouqozwHbPMiCmzhVVFpaBxUZEvASG949c5wFRR13z9izwtKBq7WSSh581wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQdKsk5pqRhRPHckyBqjdXz9FjsWsgmpz1a9QJQUCFk3gtCLbrkM2bGPnSBiM3aPUhxztbzmegY3nJFjNG6fo5s",
  "key1": "5WJrHg98GN3LYLxQaZiFgB5KY32gPocKuqmfQ6vnrQALxUtsghZikamwDmvzgLr4B6uCiciS1mFhzrrsXp7nbX3n",
  "key2": "61KPffiemCkTYQzpntGgjW82BnEvxGfi1yfkz2ZVnf33aUZjueMKiXp5mPNkvi1jcS8zazKEy42tiDggfiGWsA8",
  "key3": "4qsgTtNfd537KJRJbiqXuS1mtkFqua8zKK81dYiadaFJdYy2UoCTW1ANPLDhYiNLbvcagb9Q1N1K8oSf1kiSLenK",
  "key4": "2CERVN3Ms6rWQEAVFvkdtovDeMwe3FHZVmePNBiWoxcoNkcqosSnmSj6eC1UaU3hHqjmQzbiDbBqTHv7xcwtD3Zh",
  "key5": "4GxXxmZ9c92ecWnUnbUAi2hUcXeybz9H9auR18gcqvVF62KPGsXsBcQrjN6TmXWNwt5XQT3wnXiP1ZdFqfQEd8hX",
  "key6": "47E7wrV4DcFETLzwwZpor9acmkypRKogWVW8hRRsvHSMMdrCwK35TUnkhsgUhCoHn9fgxjWXad7f3HAbeoPzfRCK",
  "key7": "2Xw2Rn5NDaKQGnPBQGud1J6gGzep5Fa1kuf5fZH7QQZ5sY3X8dg7ojuSYLudieqAYuCLv2U6Hm5X5QsbfmPM9biF",
  "key8": "4j52gZVan6PDXv5xq6vjtgfc8PbeTBMUeH3os2ro2Rk77WSZLzJgsPjBiN14yYhSCKb54ohv5xxDsX4E7ES8qjxP",
  "key9": "5XwCaNkuK3uiKC1DALhp6L1AeHmgZWWUDe7R5FvRq1HTVhhJZ4suyvHV39BPrE3HTShm72ojvrrTak4LP2xEuvvG",
  "key10": "4gKCZsyz1NNJW6TYLtq83kPa7yHrvGR54tw9PTZbg7n7A651gc9mxs4MRHyGL2jyzGeHQCSi9pgma5v6eGoUQ7zQ",
  "key11": "4E2hQ4pUXQ8iqLsy4eYNZ3wXK1axeSZoqYpjpMZvq5WgLHVaNxkykEWXa2r6BgaVhqngGgDhG5oqsVNMrkiD4Mwu",
  "key12": "5CMyNzMaVKeHYdkL6vdWsDRFSXqsxVR676yCtP7egkDdjVRLywmETEgPYoQEjmsaLrPVA4wHpdt7CKEa8wx2Jwiq",
  "key13": "4nefo2AuiGGcDDEyQ1pFVqPGBD9pNGEVqtgTe6UVaZu57dGBiTWyCJrgJgiJSWYPWpeB6EoARKvaxZdPaxUyBDSb",
  "key14": "oTfSxKcwVm5JeCjn6Yh9eHHdcXHuGwqBgHUjJURTSbAxxeu7P8XnpRKzfZyXiTWC2PXb9Y4srojBspewPsXafpa",
  "key15": "2ekxgq2ZdrTTEfRCbhngvyywqU468XhQMHHBD2HsUn5N1DcqUoJ5LN9PGjhwfQw5VERXxUQuGUjiX9jNUVD2wPBN",
  "key16": "syTNExcCt6NoqxFsG42RT9CSyJWzty8B2RcDMm72aLGdMD2LWYqjsbZjFQDCY1N5e2nRDP7X5MkEzM8F1xdm2ok",
  "key17": "2UooWYXzeWbZnRw1FSgyEqYjrqh8EahpYxmAAKV8g2Fnmi8ypWhxSbhvKj5LMLFCS3u6QkHyQEAUhFf9dMN91B87",
  "key18": "5b8b4SjTCR5XjfnQN6dGqhVxq8cskftsaiofUxA8wgFNH4N6qLJygNP5u1eVPG9tZF3hn7Jb5UKMLWgmG3ZLyAme",
  "key19": "51R4Pfo8aQ9DkxRcC2dwfNcvs5KaEG2B9hmCq4iEy4naDLuktHW3ZQdDW755Aqp2uYgBwNXXAoXCtUysE6k4grhc",
  "key20": "5gLaGJq6g1Dstjh7JmLxXsf8o7uEXz6EzKsTFZsiFagp8hG7dUtbQ97rYicBUTxHhzS9Nv2Xn69aM6zY9Bb3JGME",
  "key21": "3kp3v5443RkEfVnpChpxamgR6qS7iBgjCiA6XaiWSpxvGmFiZph4QE5JLX1mwPc4SPobJWNLjXFRiZZynUdbLUgB",
  "key22": "4zZcsQuwdtDqXEu169Q4jBGRthg9brWHJYGPJf2A8yJgDoE1fXcEUzqBaxmH1FS7L6oJQZyemHr11v8C6hsQW8pm",
  "key23": "3mEovQPWdtE7etEJoYEfhdbWan4hFMknsMuMvdAAvQyXJ72tzp4DLTciYk4YKDU9KT1Ux1vMQYYTnomZwB72x8HE",
  "key24": "5zHaQuPgcjWYoaXmAQJMHh9Ug9NrHDVAetZi5Lk7bCB9US3yrLpPGnpLFdJy5d6mKkQujErCsLe7KjZEFpF5q3zo",
  "key25": "5frdKyiQKyq2UAqxL1FsrAPv8DEq7agW8aSbGB8hD6Mizqj86CGB4D8HnYXq8cNnvCpzKhzgfsyL7VDFR6zVaVv3",
  "key26": "4ab9LUiQuM3WQGuyJdmv1EfyUweXJ2uUHhQ2idKqQ7vU9Q3TtRU5nbd9oiDjWWpn4FdQXKVU9XmNL9ccyATJ9QBG",
  "key27": "5uyCNLYvxGkRhgMWHTGghqgj13wW5Uc62NNN63tDKkx3PSXSBqNCYnjEzxcSHoM9g8BsSnPuckuJ4gJZPuiAXdnC",
  "key28": "2bT4WfpP9VmPhtVq89G84ETeUi5Hhx5wDyGyKgAcUwR2vxWdnGMXMy7vQXzBcyDaHx58GidmazdGjnhkHdMWrezC"
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
