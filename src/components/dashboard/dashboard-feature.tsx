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
    "2QD9PTUPuFAHqUuWXCNr1WcxYYoGhQLBtkUZHknERWNqYyw9ivq5B6Ax3rwweF7vsB6cGnnb3CS8oefYTNocRXRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mmr3wHDx9zn8VNw7nRsVDpiNqJtVwrrzxeqnqHiLAdcJzKQPUiFcMMbB52URjMxS34mmCZvAHULTxDWKeigJjFi",
  "key1": "56vqNy9goQfcwU48181y59ddWtgK5htrVrC1Ypfmg5XCvumQ6r5DhN9GmuYxe1VSBoqxZZsqfLmCC5wUop2ixi3c",
  "key2": "4Er94UVdWeU1F7eUb39GL8dfyD8wLqXwSQpeQ7mAfZKPi7wCyAJGZvjBDvrFVR5hN3osnPHQhyvunZcTURx2fqF8",
  "key3": "4XcSHNYMxd6goGftzW8iiRVzRUo4ue5NJbXGwq2AhVT8di6EJ1aEqBUZwkfhqq9uBCfYcMNa2exnQXFpbQpVjBok",
  "key4": "4XKoR656zWpuf13sHrwsa8taKq3MvVJfRc2VCihkb6oMhtJTWppjwFMVeJzNJ8FWJMec7Ubbv71GNUqwsZX9bDqm",
  "key5": "2pckPkhxVyShjiSZDjgpSJHbyy4Fs8ymEdKPsq3Ayjb6x7jQufyMwzeYyfHGDn645nph6cxESJiGkgRfwrqUemFD",
  "key6": "5fo1QHJcbA3o3nrXyseSop7fvKrgJ3N1f9pS4riDT6qznMJNg6RTDrXxnGJA5ji6A88xDPcQnBrUHzUDmcqtiRU4",
  "key7": "w3Z7o7PkTgwxg3kFeHvBSEkf2RTLcpcxyvRa8ychMQyX5qtFBzGS6HASaztEcF17RPfHz2ZpoaKA3Vbzs1xBozG",
  "key8": "cx85MJogJCvJtFzcVPfx5nUD1UtUzbAaCaduC2kRRwjUHXe7MYBTGqvuRKaTtQMVdZSdNWPempSd1UPQbL5XbiJ",
  "key9": "5vVAzXZgQ3SBaRc61k9qvX6hZtAjCVUwu39kJGtD5VWmGFVASvaai8Bse9A7NWKfVr4ifsJPhLXmYpxr1116BdNs",
  "key10": "3sNodhkgc4Gt2uYhiJLNqtvaHgYBUL7T59QHZRRgF57mJy99ZfmgWA1UZjbLzGMXFWD3YDC62HnKE5WARJyW9GY1",
  "key11": "4fJZxevf1ovW2kHn3JkF9ktnz5vjyPTD3t8Zpn7nFyhZgNVxojQeX3sKgSKunUSjuJiAy27YvAbeAdbE8k27vy7",
  "key12": "34dukw8ZnyAPacWX8gFqh8gqVezBfF1usNdGmbmKL3gt2WAgi2CGkWDRJfppSQWDTNyMszmodGj3yeRNdwCVktEz",
  "key13": "3SwCSpDfKK15i5r5SSnnxdbtv5br5Q6ac749K9WgKgsKRRFJVtrgsUPKsTW1sgpxT3vKL79e9WU2tz6wMw3H9QPi",
  "key14": "CrAShGe38GyaCVxVhDdqpbZe9fSPs9jaLjaz429sorQZxLQdvYtdRnijXt1DeX2dSqSfka7rStqZY8mm17fXX8Y",
  "key15": "5troWw6W5qvyrcyKWwuWy3DuqJsSBTcEqg3rsxraE1iQFvKCssBAQfFJ6CB89wVTVZfiPddjLLcfZNH4Co7JC6C2",
  "key16": "5YRbseK3Y2X2ariiSDhUgVge2nvEmwsupfQQs43hiNRZU5pDKYb284GbXGPvuWPW9aNG4vdPxtVsNiZqGnvZp7wk",
  "key17": "NnX8n1t1Ke3BMAmrYkHij9ARu8hqJZKvgAZkUzzQDFmyrWvvMs2kXSM8FmZJge7VE2EQahj48E8oAMRXcUG8p1T",
  "key18": "4jwiHebR7rW4pfHhn1Evy6yziMpxn9HRfngGjiEuUcW5cGEqvQS78c4rxuxgne6RNFhCQ4dTDY5KGxcwzy3sUqNf",
  "key19": "3NRxCRwjLZjEmuoosmDKganmdDCuNhPWvcEbHu19326jTGtTwXPpdyRjb5rGXQVF4StQt54GBhez2gFMXrfexow5",
  "key20": "3V8DQcqwggvJ2DeSxi3sfJo79j5rVqrANgmZSPfq1gsjWbsPEnWeyQtCa4PLkF8ZKQfvXL3d8ExJQXFQvND9s8bB",
  "key21": "zhMnUGXvQ6wMfkry3mYFDkc55kffKfkdDyuRh2KKJQKVKNfH8C9GUy2ihW5Yr8pHUHFjg778G2bbMaNj5u4Dvrr",
  "key22": "4dXwZ7mtLaoXaUDYHW1X9YXhSsmhpAFAxCHtFMNejk1a52pJwQnCNd52soHv726Jt1D63ZUjB7QaqUzRwRmmnTwF",
  "key23": "42tHqNeTdfUeX23HKxvi7vrEtexuSih7j4Ps19eiFvoVh1tVSg8XmzovotiaBb65X88bKmaGpMqxYRnb1jWWeJm",
  "key24": "w2N9gxiF9w7kkH8da2AFDBM7u4Uj896Kt29tHsM5AhpJK8kUm3N9GFL6neppbWvaUYtaf8Xges2jk5LtcFfrhtT",
  "key25": "36MGVjZiC5RhueCysQPPWkbAWyZy5gZg4s43ZYD1DmSJ1JLFBp17aCLXoEADTSiwY7rBZoQjMdvZFRtWeWB4CsZE",
  "key26": "2eM3bdoHUUXaD6Vp2nuLsUtRrKnpiQKcgtYXmebDZgfEp9HSeeyx229mxQaH1AoyojYpMgRybPLog8mTFpnJKkfq",
  "key27": "2ykb4Fi1Geph78X7qZ2JRHRa2VhbiV2kktdUYcf7D8i3AtCrVUYB4rpPsTZ2qeXGicJ6iZsrV3Wmz8Tkx1D3Bo5B",
  "key28": "5FFuQ3mWtvAaNN7GVF5ZKk9mD5vLY8jV8VbrQ2d6hrV3PEsjFuWx9UC3tySu556ZVdWj41pxeVmQt8ZV4j1JPBxY",
  "key29": "4DHsZvVoVGHqa3kbkyPr6PRj7fnkzTfJwS8ELQUdePh8qQzEYfLsnC3H6piLT3qkFRYUwS2TyADLXuhDsoXj2fWe",
  "key30": "3HR4WZdVoBX6QSdoqm68zQjnKAY7JcChSaYQBnBWBRUPRUKYckzoSu46C1jiHhamFoJz8WZ1NavSkuvd36FqSjus",
  "key31": "5w5UQB3imJsBXiaGnwZnginZB2p3cshUfaoJuA8Lvdep6SeNrNs6N9VDfrmkyK68f4abbjFRZ33UeL625gqoqDwV",
  "key32": "29vMn2tRHkDC9VH2Z1XxQuf7zocto3W7AQmP1zfcF5AtVEQNMqT3k7mUDcQh5AQipQzs3VvsS3HjW46FT6btR5Px",
  "key33": "SydctXL67PkpT3Pxm5XMedXorJT4nr1RtMUC68mu2wpN1q5oQLX1kmpKu9ZX585mRW13gUNakzGNE8dXvwrB5ds",
  "key34": "5RPTpdqQVVPhVvTqJPN5ffV7Q2PpWFufs5565bpSnuAMvNRZdCH6ft45frKi8z51XC64PP9HK5sEe1DNodJ4ADE5",
  "key35": "2wtcwkVfsmX6kEqnYUZDPHDKPGAuvtdPuFBzSg9uYUjocfrPqWUSVMUwqNL6Kt6z7hTafDnzyQjBJT5JXynr5EN6",
  "key36": "76mPtrvu7NpM1agnyGu8GcX5A1oi7TUANm6hGVTDkPrp8Vfgu5BidpfyhyGZQeG87eUZu9Y1H4JcrNwYy45dCwf",
  "key37": "3WLXZWFPqijukU3YJ6BfW3h4638j1XNS2RW1qaqAm9u32uSg6fVzKazCHEZdKjhLNLphLoeZVp3bj8iWTqXTX9Uq",
  "key38": "4T2g2U2nAKi933JFhHrKkkY1gxwQ8QMFVMLMTByttQirei8AY9aD1LyUokMurBCYZHaDqyuqWAXYn8xMZJPKfvxB",
  "key39": "5e31qkhp4xRFbinmt1TvzkmAVbhbsRE8rrdNdv4F2oH4169Pk73PhBBPW8HdNDoq7HxkjsrwvE7tRarkGwqnUyEf",
  "key40": "5oTbCzVD6LZZDaK24HQLX3nSeGn8AcbQaiFaQKXPZeBUSihX51wZLrfnyzWT5o6wfeGGPfLSJ7TPNfW4TuBqsp4S",
  "key41": "559GX1PiHN4TBCtsrwwrFnss18epvJ1CPJDwBpyuR2hMKNq4zvhRTNv3CpfZ4R5uAK6Udg8HcmoEWG7Y88DHmCuw",
  "key42": "LYGYthyhUV1BaHRyFhgT39VQBDT3k4zuNSZLXxXb5s3BnUv3S7PHiWv58QgKu5mNR898C4sAQGVJugd3XNfmZnb",
  "key43": "9V2ptzxMkSUMmhUtL328kSW6YhUwfZX52hQWuyZrAAuSiedRHZL7H6hQDXiSRgsx8N2QEfm4LLbNGHfyDabrHDr",
  "key44": "2qSbmnd19jduHUAYSd9jNJ7EvaonrwFWXBnrPuSERFMLcDC8KLWCwDk5NZo5s2FwE7NdMX7mbScXShDAcwbAb6tG",
  "key45": "35HnqhBEnrdV9ztTgAymtSBnfZ8zXg3H9bec1Z6ork7btBfiXvtL1xdZHLqVE6pqD6SDFCB3qALZtHewCC8sEtAr",
  "key46": "r7B8CjheVzK8n5JE5Zy5avKxLj5S8HUAABNuBJGjviFSe2x93kVHogFsN6NVrQmTTiBTD3mRXAVQUikxMhWoxLU"
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
