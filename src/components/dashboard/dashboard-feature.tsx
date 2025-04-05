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
    "Mjuok2JfMUe8titV2DFSif3fo4mjJbMfEecWR8Ay79o7iJRkxYcp4PWYL9PaMSxKEk8PZc4eQEGvtdXSCcbNgJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qopPnuzEHAkZqUFMXWUGrkx3FTTtt8yaG3tTnTmtxsowGkH3d5cqfwLyjJZPr34rjKaKhqeApBjK8Hr5yYJ3kjh",
  "key1": "4esMQkGmZV7vFYRPHmP94YY5EvBfgNX3zCL6yY3TAwFcxFDwy6CRmh9AmSxD8HsyEPkTSxth7C6pqWHyxgrfwziz",
  "key2": "3YwsA5svWmZwax9ZZhzuvbzQ7fKu29VJDsdULdsMXix2SXp5FSuKBBzcsQRjiRFZHAirFiTY7cSC8mmm593jonAf",
  "key3": "21S3HNWatR5v6YHnMRkEcy4hiQPKFhUQssbuCx15MHFJYDCLyWh9NXGbRjTE9Mcp1HQCT2PV6Lt2nsnP95GaXcrU",
  "key4": "xpkSdQGWocWAqppTjdWQxGN8rSAVV6xRPCBppn3D5Lrt1C6LkXiqy3He2bPsmwHVZYmwLWX4NmiTj8n6fVJH5pP",
  "key5": "3VWnM3VXtFeT3BS4V75dWjKS58qKYnLjSsr7qz24jBkHYeU2GARcLBTxwzSTY8fMWDZuLmcbKNhwBCUM1yMPoA14",
  "key6": "2PMNQrn3UZXbjgaJGhKwZRpbE9kzmXKG9DzTqpDpyZkUBvrB4Yno7a5Zkx2FxDyzoWKr5PanxjHrvNhaVkQHkWNz",
  "key7": "4LFGmGoAoA1NDG8sWxzPgh51Am9WZ1L7hABMD2zHTFWcegedySriwFFxB22i7XGYnbEWGxnkAarQUtpnHpY8zsFx",
  "key8": "v2rVbW18KfxEKz8aTJ7hyGbnHfY3WdPM7AYGXAMtdw3VdF2uXSrJkZiH8CeJGBCWaoy7Qt21Nan2PoToC544WSG",
  "key9": "3cyJkvzCT3gyxbFuMc9Lbwi2KzoD47NxyTrcSeousvFTcMKpbHn9nN6n2PcEjUcqzD2SgpY3SKccbJFkzBPDZZQn",
  "key10": "2kXxopHxCh797Z3Ch7kDVdUqMqCDjSdgfVYxuWgs7woNak3qwKkPx3rWbMb5QH25x3QT9vpRyXhXhPKeTzjcnDEt",
  "key11": "4Dbks6XkbkXHvF4hnLdwHJ3SNAq6XaFFacpVMM1g2LPKp6rAGsfLvutMRRb4LsVZLR5Ahrxag9wSu64xE1oJEVZC",
  "key12": "25YCJsSy2vaMUkPjUvAFFqYQMBJ6DskdrLTsAy68V8Y9xrQ9NHq3QxaLhchPRcGZTEGBpfXkXupAwCfnuZQsPZkc",
  "key13": "49QUbv6hUCCUK4nXXR5F1KXjpD8VVaqML4vYUUA4SbZmvkyaYXBcwFFxw6SeqJtUyxEEPFmno4f1xKVK5JUJh4bA",
  "key14": "4H5xRD5926rhoCqCFu87bExL1o7Z2YRJzQFgTB4YsfjBtE9vuzd4C7rX81cE536s7vKXoJm5MRPPD7wAmdY3xKXF",
  "key15": "2CdfGrMjaJLz9wWCxeCTBDep2Ndrp3KvoPcH79th7qTq4EYioJ3kCXeoQUFrhrY82arLukd3sDoCuyMWMDnBxEu2",
  "key16": "639uUwYBmumm74kWsaSAs4L8ETcddq2XXosQ129f7MthLb6rJVexHZv37aPqcvarHSLQmt2QmxwCtZVrVZi5RKhv",
  "key17": "42RgSH6EDkhV1rCQBmj384jt5menJtb5VzYEt1Lk7Yi7D9HjH49rodZUKLhmofLNiyE7tNk659pWA9LhLNo3er2J",
  "key18": "4MxxGpDEoagw2arZZ7E6W8N1DK74e2QdDTSbfuFffvMyUYSYC1GCYs3pUgigKi1FduDr3bGTZENTPMqwG4BNMBbW",
  "key19": "2kNgLsfDjDAyot1aRVagNp3xLtWQQAy5WNumWpm8gygkHqU5PczcLyom5f6eSECxoieTpnNpPXRgDQ1zuFhuwPHc",
  "key20": "3nemjGsifUpiihFD6qnJoAyj6L5xYd7Vxy4GUfvagxtzwxaHxjrpNL3Gus1BNeT2oGT6PzauAfypNmQ7ueqCCiwZ",
  "key21": "2Liw44YR3XypGriSbxYW4qqGP3pEuKfpfKszLrbA69VAx9jnMCraJdUDs85YM8dnHtokGNhZdwe5LWpWqe9KUKMy",
  "key22": "5dcbpiqECpSd6rP3RjXQ1jzDP8Hv8DVFqoEmE62jeYryGcZuNkr9VCSxsko7fyp6vphQzvczE2UEENuey2jMjAnG",
  "key23": "43Q9Wqjwaf8GVya7Z3w4x87HZA8ERDmALi6zQdWLz3yPRFzuZ2DquKXmtC3eH77tCH6iDH3DUhqHuYHAZy2pkPXs",
  "key24": "oUHH7FbuctZx9QuFrR4Qk2nm37L9pjzubTUudpV9zuCmCoXJYm6x4gRBb5jJpiuYTeso3v5YQu48A4YmVBYziim",
  "key25": "5kZrR1MPwc6EiKM4TAayMvgFjBLXAnLiHMUSYJQ449kKVhq3Sfu3fjh5NvWsTmnAcsdUL5bEWiaCeCx7EPzWH3CE",
  "key26": "3j384vo8PSA8TFmcpPvao6JRVyeTx6eQvy2gTJHgj5kPjKDW1SscyRETPzHW7VEdyPVZpDa9sqMq3nWfxQVgswnF",
  "key27": "5XvKa9WH8ZTWfNcouGiHMNKp5FgQkR8Ac1ZBdgsLmsWsfspEuhX6qN3qpaWazc9b6LUbc3ZCWMjsKDyEV2sdfbUp",
  "key28": "2rcho6HuGEBCwQyqqwYrVP57cDNVm6MUGG1QVMP4YxRvp7RcwzQtMYrdCGWmGHjbrpNHGCxGNfnrbeKnuey5LqWi",
  "key29": "4w9cowHKxXyRmW4kuYzf9KNhXpaXNX5pZFdnD3syXFhiFLsrNDLSHsmYpmJHxKw4iM5s8tjSFfcDmvU7ikQ3Wgzh",
  "key30": "5Hq5y52tx5BUAyuUhWAYY8zvUDfhdrVWYGkPdaUcnRacnmf1VUukz6wj6mRZmXD9zRFsSFRUK65ZtjrQi7pAoxo2",
  "key31": "sXJ5DVca51vjoeYMKHhmW9oFdorZeZWzjKuTW1AyGm6NSQyjcTy5m1BJKPwRTDxBDp2AGy9YuH3ncCGbfpcgt5M",
  "key32": "CmddubWECN9T1TYdt36gaVqiZjdbSGr2BmsQKNv5D6FPDi1w6AR8MnnTisFAJyV2a8VAPP3MAQxYLq7Vas8GXpU",
  "key33": "54vxiKTnS1sX2Yj7ru2GfnxH63r1QG6gJn7EEmfXKCeZBMD9EV3Fs61kyAGPytYfyGRWK6xBpUhSo12f3BBYbQPn",
  "key34": "5nmfnAYmzfJP9BsWEbKebL9DiaYT6WTw66z6yxeNQ14PsSAGTtPuMUKpySSFoRaUyScHxzZrKCiHWBsjch8wH1T3",
  "key35": "4ojoNTTBqz2W69Bvbqin4NbfmE5BN2F1YVbs4cKeVWTEJUc95bzBfh7Z9ismbDN2cz47rKjpWg5KcTHHPcB9YyBq",
  "key36": "5kW7MqX5Pi9yygijTG8j3SQnquA7AqKQ3Y8bz3N6tUMuTMqgoHaRvRxa2tMBc9H8vhy5BvbiMQqGPacqrn5J6xQE",
  "key37": "5QbP9Z54oFSEPDK9MZCUUNJJVA8qqXYoyrh5rrPyHuhE5Sv5sAjjdzkuxiQv1RNmhJP1nRf2E5JYkRzmDPwcutE6",
  "key38": "3u6cAtZCqsnkzAzeEVwAUTVa4nMixPPjdrux4UEYNJNWTJECHVPWz3AfSpoAqt2RRsKfa1dYV18aTbdgkKFXs9Ve",
  "key39": "55nFV1zxNxZ4faxpT2kQboYbRRMJvKZx4T46ZL24Q7ymw2jxXK5nxPqEC4tHRpdFj3La4G2hnET2k4Twon1bqbgq",
  "key40": "wfEPDc7f46HZfvnpLSvmGvDG15ZYQuAzKhuYnETUAjrWyfFAn1zVGxsb56ZDv1MNAjJYPtTpN3tKWiY2CwGZUuK",
  "key41": "5VHn3UqRWwNXqkNTFa3xLjS1P6iQHGkbRXQjaW4rYA2EjHJhTMi3iYJAcP6tnexLHejM7bdZvhMg9hgbAAG2RcpB"
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
