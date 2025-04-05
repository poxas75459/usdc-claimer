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
    "3vExKGAhEp3SgMMmdSMk8Pgr5poVqeRbwA5e63Dn5RS4n5EcGXS6jB5WadNaUFeRfu1Vb9SGm9Vkb9WVGnq69dst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rj9noEFLCSxdvedWf7uwqVAwYuimmxUZReXgazPJ5KLNc7NqBPS34VLHXrwehLRpcVNJc39Rq16Q4hidPZi7zpU",
  "key1": "X577CBtstPxaFbCYEkfaJ4TUMay4Lixy3ZJmnZGMJXxwz5PWc5xE8UoxFdm7u62nfrSGvFn3vdcjJx9v9bgwtGi",
  "key2": "4Nfro4bGuGAiMZT5UBdTsJNHDXTF6Zsn4yCNZYvJdhwgGPL4d1hArQMJc6uAXuqRD6FdoF7zhDFU7CHn5QmG7v7s",
  "key3": "4jkmM11ryPvwu1vXZgWsYc9QLcVtyLGz28P25ekP682kprwAyjjd2ZR8NbaKqu6VEgKUWsrFF8wsoQsatwZtvAKT",
  "key4": "iQ3uXdvmAMWPssprXooifAM8TiSRV8oQ222qfP9H6WxU23bFhCskjkxsfQX9ECH5eRLw9L5cTNtJmm6JgaYYU2c",
  "key5": "y8biaQu2TxGDgWYhrA6fxdaZWtgg2XXCtXkEij3hKVGUyf6ZPoCGhpjnF6B4avE3SxVhNDRWNGFgX79ouN1pVWA",
  "key6": "3DxDJoCCxfcR6p1sbC4fk3fiURb9J3Y2PkzZRArmAfDQbbwmdGZ19BMjssZzBRTKhWP1xBXNPpRVQ1FzVA4g2cCL",
  "key7": "x5CECBPfwpziSZcam2ELcUbgbcsUzxUu8oj3UCwy9a1cJCDcKb728hMTMHJ71pUp5h8WEbVtSnP1xdouPoQDc4q",
  "key8": "3we1ckaQapBGzuQ7DR1LMf7w1W4MKYtcfmPvHPrWhpDKdf1s5HNqQzdZMcCiWHcqp6w1RCMuM5ybjF732jCHM6ZV",
  "key9": "3XweDw9FsKxPWpAuTSek4YLnraGgqrdCp9UEbfHd3Jio6zNA8SAK9CyHZnGCkpV7XL11VWWvYG3voxM8bQ7ZeU5p",
  "key10": "3zpMLVZmaomV5hC8jHnNoZtFiDs1tzcKT9saFtsQQ9B2iTbJn5CvpeQNmnS9zBmrpmxrGz4z7husacLAXMqefEtw",
  "key11": "21H56DCwGBn1UfKQBfdtEehHhRPFYEgedr8Gm6Dr5rJHdGiUotjmxF5bht5L7RAU5Z3cUPMBAA2BkPnZ3G8VJCeu",
  "key12": "LbwPh8DsPcgaHFaRXiDx1bmyKaLPejHSEVjWMgkyd1Kf3Az7MpY4FJfxqs3ZgDtDQTwqb8Bi7v7z2bDaaG92HqQ",
  "key13": "53nanWGfw26d6NWmtBWwdriLfsYyhTBX8GSZqMvzaH5x8bzaVrG4sPWfAebdX9iYavP7Ft5fkWpJ71ZrRA7GfsUw",
  "key14": "4cHMtUiQKCcEB2JH132B1Qubri3LB1D9ucgcZYZ8hUQFJPx5hwDYBVpt5KGFvEtbjr9fs43Lpzzr1fUUcWEkmut7",
  "key15": "8N7sB7H3vnxAo7zGmHDZeE6euVujoeGjdCBWdUbB6qs66CFqs2wtBnnfRi57nNRRoJ8Q5pDDDS3NBR5m7fB8Jif",
  "key16": "tV7V1HGJkG6U1cvgutoihaRdNhVxnpt72NNH7MBcdQdvMrQiS8CAdmwxMnrDUExVGxckUVC6sPC22BPscFcDUvL",
  "key17": "2EKuQDvC619QdTHCZ6JWsVs51bmN9gUsRPZrCcA1eyokcrbhgZRVkXhFt2hsr9Nq8EPCaYRUqVXMVrPk65G3psXV",
  "key18": "63L3NQdrDkiHEZKxBCovTV62NJNXrFEqSsFSV9pzJhmhNm1epGEuCWSvBGm5fZcVWtaXxQ29bqrtHdRvxhGuXhbD",
  "key19": "fYw642Rn65DocpiCzUKCN6pgbQDxPWx3k3SAQiiSWbQWa3iv5bzuCZVH7npSswJ8D84JfYVCw8BSvvRQurB3Kks",
  "key20": "8asczYVNL1EsHe49faB71BLqQ9tEYC9a7FSo5VuUanwpxNWuUyQpMNvkMgogjEjxnq5re6bqrKqhQCGSbmRWihX",
  "key21": "r2ou1wc6GF59kRCSBJZfG8KiCSJVXtgU7bqnq2MyypCxQZHxCrR6UEawpf3sKF9Pc1qRJTmJchfN3kNDc3NRUMe",
  "key22": "3C7HHbyDG9vSou6jW4Q292RurszeSQbWSzHqiY6y63tau2otUdL41T81Jz1zUf5C82iUCX2XMUkDFUs7442qyasD",
  "key23": "4AEoBNeMLL4sZ5hTZctouvTquG2svGSb4CSqLdR9b3rtWLL7JYKqKWEczAi3KgvxwqKyNkD3sZrHbz9VXtvYtyYE",
  "key24": "5DGKXWSNpiSqBpCGTc7NyEwWmtKHwoM8bDS7vsWsT2WvSGHykj55HmmbhsKCBCBhwYAG8gwtkFQU9U9kZp7zLfbj",
  "key25": "1h6BqkxR7Hx6hu5rcjiCm7YvVLhEkf5sKKovhi27ENkSTM3k7NcuJgUGRhHKoKM16qyaddy4DhVLFkDRR7pBGuL",
  "key26": "3mxwwW814XbGXLwTXA9LUm8w4Bpn5FArB8FnasyVcZEkLKoZURjPyexHCeajpq37zbtWU1KNtncRvMtw7YvqzoRt",
  "key27": "d4p5kJpCzGtERVakQ3ax1oD1stxMhSvAT2B9An9aDCwAQSKMLRYMbeXfzu1pFjcnhNNMMJbfNiypXqYMK7JeVWc",
  "key28": "2askpX5EXqdPszGJebr87jPsLmKQNyXRXqYm1vxkukrF64Q5ffqyW9MePGJyHyRYNbpzjDffTyTaBU5c8TVkLv9e",
  "key29": "WZzmh4imsWznrM22MkuyEhrswjNUm54V9cxxvTxTMu9t9z9Dm6vjK6i9vcoeDFcZ4PLvMQnUnRDGxuMGKDNM2ny",
  "key30": "5DAykTTcGgKx3y3mgcBuHxQ4Y2nWzzYyfdXyqZwJePQqiCx1vcgrF6TeE2TFYMPQitewzZ19iSxgpuySz6UXvNUc",
  "key31": "4EapdH1QFsHS9mJExSDGtRVkzmsB9i3ZYdpYuRhFF7rfW4darWeBGxKCV56VRgtTktEBjLHZVLNRDG9B9eJ6SUgp",
  "key32": "5JYpguW48ctPk5KRgDbnwjohTaHkRyXgBqZbYwJNyqVTfUBHA8ZGvz2Czy9M7uaLcLgzfV27NVLir9uhTZrpLeGU",
  "key33": "2FAERTBapKEiW3YCxZ1dBhWzTy1iV8Mu36gQ7KmF6Rvcy362Y1JTiFML9EKrknGMHccLJ7UhaBEMAqJvpf5LdK5A",
  "key34": "3LZYwn91dvoxLsSEk98uz6GNsYRmdBHQQwBtjJmZpqkCfGi42b6qwGjAk777Cu8MKdJCPtTcuW45xS8S1bVLxBty",
  "key35": "4WB5s7GTPmNo2kGRzwBWDvVhfXy2CWRwmXbMiUaVASufR1TJWsbTZc1Y3MqE7WYf544BzRvptv8vEi5nGVcaq7E5",
  "key36": "YjxLFSDnkZ6hovx9jwY9R4PvEFokzvJ4HCHSmTVXHFQFSVPyPN9kKZp5r6KpwcyQ7uPMjLAPTLw7i2dLdbJKgEj",
  "key37": "4mRLyCAFyvsj2HAPbRTsq4aSQaN1SHyybwwMSDAAUNCMV8ckbDAvpmMGuNAUjynwv7ifxf8gBBGAd2KVmrqfVrb5",
  "key38": "5iPXndUya8aKr1UTZzDSeNo6wwsBToZ46WM9zGA4CXrhjoYDCoFFis9ms9PEYLbV5KWoc2Soxfg5vkDQrukq7gZr",
  "key39": "2KVxEnxpoYSYRRtdYwSLg4J48w4NXw8eei1KTr2eJaddHEG9cAoE1RvCvr9g7vNDhnuV7dsT29jxbTAtojbxiqkj",
  "key40": "3rtim1v7RGGVoi2BgtiPou6giHQ8JJMN8efRjf384BaLdkTzpib9UrjVCxk8VAxcFZA6vNbrWsLVeQt2Zguhy6RT",
  "key41": "4SZMvkUQ9R55FjM34843NKBv1SCsbPJ99uyvqe22c7rCbZDYB93MGMR6CUd9fv8pSHxP2Z1oj2EvSiCm79qc6WhV",
  "key42": "2QS9NqF6pxJKfeh3iyU28TW5zxqbGmbAwsAgssVctWGw6zQrN3B99S1Pk3cNB1xoewP1mZa3FdUEaoH6cjRve4kr",
  "key43": "niJPEXGFmPSY1esF3RdUu75khk8SDJmou57gosRp1LSzMM9QkbAP47SNmSNoG8sRVS7LXmbBS9RXzoRrqjR5dvE",
  "key44": "2x9MjzC4exoF7QnaZ7XX1mzHL9SD1EdR9pkndqrb93CTEVN6BZJJqXjieYyxs7s6J6FRCD3Cgj8ZPmBUcGxyNtZA",
  "key45": "4KxYhzFaLYKd9pq7r9Qt21VzeXcEvgAnpUfn2dBCqUKXFWU7Ap98F9SRf1G9WtV8kNh4kxU2RzWU3boYNqQ6NP8o",
  "key46": "2uCnU4BznHB4r87ng6VQEGrXcoS8HXaDFtyiSAHw4Sm7EKFNxSK8GrHwAXAnkoJ6sEyvYKfLrLLTKY4r95R8sdS",
  "key47": "27SnACnQJVW948pF2h2H9PeYwa7RHUwjzi9vZpVgg5aUcY7mV9EPEVwjwRmpibiBfpk8W1NzmAQ5ndegLDRH1TMF"
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
