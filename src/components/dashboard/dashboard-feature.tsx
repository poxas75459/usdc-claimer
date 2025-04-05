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
    "3SYr2E8k9yGhK3aspvJk9Lu8BASgSsEwEoJZf3HKeFdnd5MAnKYiRiso4KC4Uh9ehVdEd5aH5wPgEaagm3w8Rmqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BuE5LnLXaE4gtLienFeB9xJpMxhLqwJv9ZE9r1SAUBQMatdnJBv15PUAm1hL64w2512G9n4FuAr3Br1LfAxzpg2",
  "key1": "5pfAnEwokRoSzk6sf3CeL9Koi9LxV7akuAMpFAcE1Heg7hDVLYgySRLTehdPoW9939VDSZu1Pyf7mgWUBqSTSnDy",
  "key2": "2gvXzrgDmJsHPVrdUEjWqghH78US9oMDqMWkESRNjPsmbf97LVGCQxiRbAiXo4u2psnQZRSdpwiAUUDftYTEKNYY",
  "key3": "34NNup1AzNrNG4oaFFoaWgcC8833XEbLNd1EfqmuyuY6SxPMBDrQMbHYPUhDDkdTzen13oEaonFfSHKFrQgJXAcn",
  "key4": "2fq2q8CfLqsJCLduC9Yg2Zk5jbanS68D47QpA1UfZqHv3LvanDjc6HgVnyKvtV97QxNENjGyr7p3HWWoYUeoSqdJ",
  "key5": "69f4foWgK2mDZmqk4Rb8vYj1Lz4ERAYEZQqR11bHtxmgGWDPVcbdR1qmg4J7GPLHMAuKDzvH369u5qyfPzooiPG",
  "key6": "sjhxGPL66f4MqCUxtMjjF7jgXHtCcjZaG6gSKnXFpSDsZu75chRMUdGgnwjEZb7N344pocdetFFDPzsM6Dv1V8R",
  "key7": "4BJEikQcYCymX8LpYUWAr4Eg2fJg3Gn6i2VK6Aog1E69SQfxakQ7ug8aqHXAN5McTx4fg2uogkR2PUKZqKKSHRRM",
  "key8": "51j8rUCuLutijG7EE6bRcb8Vs6tob4sC8hXnmULGc4z7qW2f8JZrnsKujrbEUf4rrQ6cMLw7Ny6hemPnna2xR4d7",
  "key9": "2KejqkHZK32RPam3Gc78j8SjuvX2BaF3dL56iBnaWGTyVze1E7PSg1V4rMAj3DBeAsG1NxVKYexFVVDPWcGNwXnP",
  "key10": "Ci9WyaLHpEJCjdEEzxVCM4G9a87iaAgoQVxjrKg7b3cQ8Rb59S8egwdfXpLxYr5xEFo6ekAJQ56gtETL9tdmD6X",
  "key11": "2rJRZyboXYHnEowLd6QwrxWZQo6KMT5gEbact1eLdFyrzfhnRLqAWyu7VwBGkJPbFbC1azvknz4LedkPitPK2H5C",
  "key12": "5zTzgHAhKm97gXGjFBCaWtwF31AsUYm9kFti42QJexx9RxKZopcZaBSAB2bP5VGDXYfCfzVuKA2aN4EAv4ybJ7v1",
  "key13": "63wh8n3tq7PkUEb3Ka2NpYnY2PBo9MmQtbYWnuVam9MppTnBK7KjBWs1DC2immNN6V6fcxvZHffqSbzw7YeBX8rJ",
  "key14": "3pyw68qS1CpXYxH8JT1V387SmK64XaQCAe63ZhHzomcUiMZ51uuLJ8ZwBqCbRM47MnpWrxrLy5RtmgdjZ31RaiWJ",
  "key15": "2qYfCi1eHHBD6AwmnKUxRVtCUwaC3x8wKvDMBt1YkaYFyDs44uNdcxXZjd5vQHfQYsUMCdGx6pj4WGqvzHn2LYGy",
  "key16": "2QwxKtPoobPpEnkoPyeP4xfiKBsNsrzmdVy1aYhSuXyqkMjYZN9JJedJUZmSXrBm6yDNjEMLdA18uqiark4h8Hgf",
  "key17": "3WMZXPicqoQAdKt2YWC1vJcfedoqB5bwKAzTRvHifVhqiUyoTgh3FpxnjJdCcb6hu5J3AW4Dgo225sbwjFbukSi",
  "key18": "5uDn9udsPJXKFN9ycg7f2DRCiNCg3TU8R2zNNohXQ8mZZuueiMzfNMLX5MPcBF5xHmkbn7jcTyx3HRdcvKJrjHju",
  "key19": "FFdbRRpyMFYi6B1A4QoqhVWDVtwUZCGZdyXjtCQVD4yCc2Jed6579dfT9t1LdcoVbmH3nJiMBiQNyh9tSnTc5RR",
  "key20": "3e3viAzqB36Ez58vth6GFSo55NQgKPKMKBZGjVGosJhN2jeGpNtt9TLhfR5RiysZb7CkbejwDwnY12ZqJYWbudfG",
  "key21": "5mrjYWexy3MvxHks1GQaW9B861TNKGbT1SVmpa4QhbRCrkudz8BMMTbF4JCD6QNYftVtRVpZXbZa8m97EfZ17zHa",
  "key22": "2b9RZx11p9vMbMcj4BK7d9q9z1AW9RU35GhJoNGFAZ6bEdcJNe6cHX78iXASVxbGCwy33fhr18CWJ43geKU9DKF",
  "key23": "5CKJuum3NkSw1wbVqR8jrgEmS1d6RUu8dM77j9FZFZWnsdxZN65n2EogSS4V8GzjA7YvFo3nU2oteWyiwqsUeaGr",
  "key24": "4om6YKpw3rpo4dVWr1uNawJCxCLCqFBrQzdPB821GVZb8xm1YRaX8yMtDXtFChFccbJvCKGrSsRCDxWHVTb9Pqf3",
  "key25": "AHEGD1Sqigo23nbLG4PEeQuQQW8HhUwJ4PCmsq2FjkbrpXjnRApj8NoPgFD4FQUPNucna4Yb88vxTvRnE7WsS8G",
  "key26": "62cbWdrCnq2jXKNsjcrZrc5tXN7ExtdrRyYZnWjmLy7y1RVddqZzGjw76xhPabczRqLLb5uZQbmF7DdyMPfYhNbH",
  "key27": "ZkbbGiSurTYAszs853DhrHnGMyLYMqXKkASn2PMuj7f2BicMjXzi2oxmo8yGJDYXDn8BkkLvyhXRwKHwBbU8DW6",
  "key28": "28ioQVV7U58Nmjz88MS6NtnJDCzH71jaT9y7sVA9X2ctdBxfsZLnjdnf61Rviv55YX62yAgQwE1h5E8GtXkrsgi4",
  "key29": "oXGUDT99b9vGky5cH8NmYeiBou6TvbZ5TcBQCNUKKahiEiGFkFNBbZ9uNZp3Qby7t14uH2s1DXJZhPMZxnnZ5LB",
  "key30": "5V7mw4ZSJcHdMJ5tNQYxpr9mxRpfLQX1nA49SoH9omHv7DSVg9CBQVNzSsdEdXhKizUNYBrdPTrEevB9BSjEANdw",
  "key31": "3EGLEoE8cR9rmW7YC5jp7hYMFoG7rPnk62Yd8ac3LeRZ99syc24KURNhP2j4d86yg9yRDCE5GECuht81KiCRT7qr",
  "key32": "h6Y5Nk7tXE6kZ8rZzMwUBqrnvJkd98o3hBHBj9iRZJ4tFHQLWbvCQJLuW4D9qVLpMdEQXqCKUL79Ng5kKEnRZxe",
  "key33": "4fLVhv7s2uEnKgBWVuRLZdNofZu9qsJjGaFwHTbPQhNYKKm8NPZU8cFdP2xwaFomByNqitQo289otADNrYFPDCK",
  "key34": "3fqfS2Ah4Vd4gjzVWaGh6XUnvSjrid4rS2SSCDfUnpLCebvtxiexdARUfAvDN4aVDdPhRK9MW7S4KXVxNnvuXLzQ",
  "key35": "4kuY4Es5WshdeAsxaU7gHRkv7pg3fbEM6YstF9RCT9X58ju2fMifCdrHC3sA9mJcJvP54ehVaUieq1NngzcTZGV3",
  "key36": "55TfDujZtJdit29xN1qsNrS8Tj3dtS3HiGR2opan61NQ4TYofxWWsS9L5khzpocpXMhZbkGmF9nK6T9rr5GvkiC9",
  "key37": "xEnizj1uM7qCUFMrr3d3wR1UsqwaDVW3XjewmGLHQBvsv2rSz6nFqoNdTmUX7GUuPBpFXB52p5QVtJDZgucgNNC",
  "key38": "2Tg96e1fxPSevCthWMdDLymZBL1FsPYHk4BQVAQAtVYqThw1NXFTkWo4zMWTV63gW5CpxD5vn3vsSnkiy1rwMaEV",
  "key39": "2WuA7jj7Ln5vuLPRXMXrJcLSaJwDgyd6fijLF7TB8zKvxzYr5uq7MDBvKKGys9B22MmrRZfzveNvfmoHNJqFu3PV",
  "key40": "4y9YP3gmiuAU4waUcHvyQijNBe7JmDzEzf6SBTE16jBtBQWJDi6B1Uvgz9XSViMgVC9VgLYT8nsBmr5MTNYqedSL",
  "key41": "5S3gPQ3Wg168opp7vdP3EbpYLvgXeVLDeutJ6ar3S67KGxpgeYgziNgbthBqg2qf6eejymNw5H2nKcTnGeF64Dyh",
  "key42": "5Wc7Ui9xCsb4PbcGi8auPZxK3iUbTPmkVkAGW9fjQuwJD2f6UUEnZwn6BFHPbQrtkJuiADu5GkzX4BB3J5FCfvv2",
  "key43": "EXtbkFGXGLaRzdXB9wpx45MRShADXvfAmuN4C2B6hrzoew1N5bsxtHutoeRA6oadzJh26L1rTKtsNjgAFgJNFBW",
  "key44": "vTd1nMkbiAASowVX9mZFDwWnVJb356zKDp5NFbE21ywbqRQPogYZbWBgnt2kRrPjm2zMjTG4zgF2uDTAimdprBS",
  "key45": "2u9Zp2mZ8JAR3wibegnfh7oAva1xdAdz3HSQrneReAS3rL7m5LvVq38zkdXkA6NW3yEEoHjdwxL1ajDXrQCSCHcR",
  "key46": "qoeyJ3uiqnA6fR4BCZUvLq9zMBqFnafgpDP2xFkS3cHimG9DAPqzRZkXX14mx5MQw2audHZ6nFwCQugaEcNmzNJ"
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
