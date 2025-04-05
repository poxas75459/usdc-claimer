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
    "5iXnMjh7XE1wApUshF3iDX3bZ8aiRo4n3RaDTVDVGvQzPgxHuTDzQW5gKMfGSmdTJDXHT9zhHTTH7NT769UdhtsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxpRo3m8pEzyAXb467rekhMJfAGv1VVHEvZvbwMboUMGvQWTydBkttadjC4cnwEkEXf1D7Nc4m5WVxRTwvqbXgR",
  "key1": "5WzZqTymTwY8NmNwGSojPCvYgsY5zvthzpdcNaj94m4sXW3urocRRnStrSDwCZj8ZUjQGHrL9FKhFE8iNhaVvhGU",
  "key2": "4ZJBoFMo4YetRn5CJm7pjQvyCSv4vbgRNyfTko9up8xydpc4Mf4nKy6LPRjPDmayfk3p21suiSJLzgarudZEChub",
  "key3": "27JUvhLbZx9F59pLrC8NJNhWnJkGFVza2onUMPxiGcVJJMdMwmuwbevoZCjWgfV1VAmcv7S6Cs7K3xrAcyHKcsKU",
  "key4": "5brxdSAJ2sgGDLAEBrxcZEVYLoe3gzkTJqTWbLwtoBkqascUm7zNUErd647o77QqUU8WP4YVZo4wSETM6tFKYxSV",
  "key5": "3K5Hv9RvnovdxriwxuYe6vYwG9KZikJWS9ho5XDeUgjWSgHioW6x5Nbs5qE7jvtBfEJ29xWZNcWNZdv1bqPzSpYf",
  "key6": "2hJvUn29PD3QhZT1mpjpbweLcQw3mYN38eDBqPHboaBvLhA2qfCJTzRupMPXM3f7h19KNgpM3XzAVxBp48D3PehH",
  "key7": "4U33BDA8HARvE5Fy9BKHAoqg8yGNfbK8cvCfmamnJXji8wuy4Drv8EYW8H5qfmc8RvpkYJiBRsistGErypM6pFzG",
  "key8": "67RuTeH4euDtrHEWwY2u7qDBwLaTwhrvqvmS6UZszVvW3Q4Qje9QWoTfAa9gPbcuTcgTH4mftxxygrRJLhPEbbEZ",
  "key9": "5PUXzMZKNA6d8n6kWeLSaXJPvzs6cBHmZ6WuG1qEGQwHTEZpnCHgoHvqXU3Q99Fa2gNVUEc7hLnKtnsh5o3SRnh",
  "key10": "5h2fsvRsi2Abjij4moWHEWxLwpZhXv4L2xTuJ2yjRh7Pqnmur46srLupd98BZWt23LcTnvo6khdEwfQnqw6kGhz5",
  "key11": "4WgciCZcSLwiTY7CXxtq8nkCcCeJs9Zuxf8kbg2uq4hLuWjFXCBNGUSjxqSA4BCo5hD8kiDx3zQZ8yhfNW8QmHH5",
  "key12": "5cBkkoHdraUjru7hXPw71BmpDn3EJZDaHjHKu1i1UgfcME1SRAgD6MiuzbrcA8wqKXqbCJS5uUw7pnSMuR4qgogK",
  "key13": "2fJcahdjw2oktkmFnyBuVc4HuUkDJ5ePXnpUBmz699xbzUTxLVFTi9Zx2tj9bEMxN6q9sx5VMuQE56aMqrpuspcY",
  "key14": "2Zudub6KHHFok1eATQVxE73MBTk1niUK6RQF3tyYsSJK5jM1mcQ7epqPYqXc7LMkyaW3je91n4io4h8tEVThUBfX",
  "key15": "4of78FE9nCHj86ry5dExR2ZHnMPu6iPzYhUbHuT9WMWxKNek3HTMY4ZG7mcjJy9LC2vGxh6Heq9beJSPFXnkT9Zt",
  "key16": "26whn1wRn4wB6GGza8ucDowwwzwr3YY44NKT9vMBwV8NJXpChDfTHWHmCV1DARc3BEQLsn8dYRZg7b3xNpHzksUY",
  "key17": "GZ51jxjWrLrjupfoXHK9nfwtEJdmdd7KcbdbW652bJhg4UExnKMVa8fcNxLau7dpZa5o6cuqikUJn42SsufEjfd",
  "key18": "3caDc5TgzH2UYLDhT4UozGiPECxE6UqQrZoav83gN9HqjXdupW1rEmZecTSkWPKbhs1uF5ti1pjj41BmN3SPDGYJ",
  "key19": "5tic6uGqGogEkgwFapgLY8KgYzd2mpq23EFkFJQLrJ1MYFpqaCid9vVYKcjQRoN11T3AFmmQTGbipEfeWRgWpQtp",
  "key20": "4mhbmKDH4nqx9Rsrj7KCgbgkVsJtqHTMQHoTkZGATPBixjETdAjnxN4GYcwdrk5Qq3bdfvJaPgSB9EUSSGbc7W5j",
  "key21": "wrxMzwLXhbYavgUKqq4b3CZHx4hqNhEsP366hhqvorjqTXNi94mVtBJ4Yn4F1B5Qj9dosxRbUgVN5AmfYaZWpoB",
  "key22": "4bicPP2Pfbr8QEmbF1BkYGTZWkZdVvotRsc3Ku3xwRDJbFn4RggTDZTHM3bPAA7sp9cV9peKW1BYdfyh53gs61s6",
  "key23": "2umVysMyXdR5xA9NbzP7cvmaEXkoe4kmfSv6ZypvKzrBJx6ypWrBAAJkgUWHWknu23M19WVJyFiBxuBEFveMzv9h",
  "key24": "2V44H7oebjedb9UnLwK7VQsf7bSEYEWcSuhen2vziB2LC65TNzxu964vmcD6Aj4FJXb2J8eojjgWnJtZLhCUgDuM",
  "key25": "3zuJyEfsNZX9ADZHuiBd7XWErVoHsaSGVuX4MJYenrrt4sHycADb2FDMZGpoETzMBpuYjWohrfwWeHmfUFNTstYB",
  "key26": "4Y1Sk66eQkEj7K9NJpxhTNYUskaP8wZYWLZaZxZVcDdeUFtZA1NKgBYqk5acDS1KmoWoWWt4sibrnD7wX28TB4Gz",
  "key27": "464SAfuKmM9f2nXHojDgc6zfhLY9bwW2GK25SjoD7AKAApDaztUT6x6UW8XdmqB2muvhJd3PSpdAMZRCdsuDByxn",
  "key28": "4hcSG5VWpJWzjyPgoWRPzEucg1WHKLDKxZD5pJVcu4iDhVuzjVAhjy6RDHWUkARGwAqVXoWbvWpvMtZh2faCxF9c",
  "key29": "2qRWS4zxQ7Y86ZdzLpcjoqxuUs5ufh7L75DgGtFzdEvNY1KM9LKU54qvFSvDY6WM5mZX5DRZUndDwmkNPjBnhpWj",
  "key30": "2UmKBMBErZPw1c6DeWuWNgNmR95zLAnSwwcAmhw3v5pbi8eQGDQP7dWnUhoc69nM9zvc1LNdQpCnoGWw94QUXH5W",
  "key31": "5TB7WWcVEM1xKMxesjkfyJaDWB64CuRFGikf7MrHei7HscQY436fv58ySawA9mFgJmEL7AbuTVnbCvd27KyVcjRV",
  "key32": "2nRyHzzvRQyJsWv2qyS29nxrVK6vDnLztBAgQ3ptvqTJPzCa9zR28NQbGQqqYr4wbnbKnxn9uKmEsVWofFoa3Xp7",
  "key33": "5yRnXwaPtkAr1q8cyxtKvRFHnWmexRcHTqFJ7ciV2Fn8ivLt8mDbHdLw1Lu8xdMTZoyAvV8SFtDw9ug5YKwcR1xv",
  "key34": "45cCMtpPB45krb78SmXiTRNPEb4dzuCEnL8E5APMxF1pY4VAPuSzvECprbkZZ7omanUHb1rCehdpEAXQuffpac1N"
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
