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
    "3Qgj1b6F8eGcunyEfMmAceLhnXBi4p25d1zbFGuu3h41bq2WCW2HkKbkMDVWtxSyBRMe2PsB16e7guRuFN1JsCnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "it2RrCyX8sZbZ67oAetfKwxnYzAGLppP94axw2FvPC99mCT5J5QUxaFYpCxRruEBfuHvBe3UkCFj7aQeQ6bAE4k",
  "key1": "2ag7XsqvCYXxdVYEkf7E6uJtyW2vMPGFVrnPZ3YgAzT5epp6qzv9HQMYgXsRma3x5VYmFeRWFQxHktqKkRAKKgcv",
  "key2": "4JiWkN6PrKtR6YGdEaE1ssKfWtywKv1bfY5Hg9QJgjm1chQuqLoJrZ1syxsXf6cy6PQgdfvuQJ4BuAXP5Hj64eDC",
  "key3": "65rZpLonTb7sCKKWGWmnKvRAG1Bqf4VyfSxWietDR7MwiSfR7t33otr2xLxoNbG9BF9RCu2dipAtXXVmEzou6bNm",
  "key4": "4xRiKWBGELK1CAcgxbUszvXBCDffPZF3j12yAC4j8cFGg3FiCXbU1cxVJ2LvAtbtEzf5K4YWjWEjPdDHQ2hzAEhu",
  "key5": "2duzP1xszupHe53r1bkTivMfaNhWXPVTHCwior1L3uspy3N3f5ZF1DhqVrUqmsCfoUA2gxr7hHqezG3CgfAjEQnp",
  "key6": "2kYAtFfVvPNBvTgruP5fP99mRCGY33idc7GrBDiG9iDCENghwNixu3impEtovzhBD3Vhcf6Q5HjzZiHuWdAxELaf",
  "key7": "2zVYRFkDfT5YsAhMxxAKbUkCXCBnTm8LNDxFkK9WAfyGQCsEdvT9xRxc1AkNtQG5sv6AgprN7CTyh2kb2EXtYvP3",
  "key8": "2SqLb3vMLgqrxCZsXaUDyrMtBQatxhc8JMRhfSoc1Sp1pJfeTsvJYWHFRvuXTBYEimQYMgyxKM31gNdVC2PXeGf4",
  "key9": "o85xB294m3wvT3QweCnngvrv23Vsqd9czuzKQCxaAQGkdq8n2zNj9mUj4Vbrj5McmYNaWz2jCJ8fD65facCJ5Zh",
  "key10": "2rWUU6ZDGSCAPkEXpEyqqeBZXC2MAnkV1VvdVrVCTbe137KqCNcCmuLTaxdDk14NcDDn78YD6wcpuPnWwk3NXCa8",
  "key11": "4tXrKtsbcQ9kNyBvnHbQUGsiCGZM2zniw7GDJVRjJbHjuc8z639kdMonsgioSDVRmJqpGTjosPPgpTVSXs5wcVyV",
  "key12": "5NF4rGMmRgtZJ36pubyCYZdCqK5VtomDoGQL6KopPb3qFm8zaBAwFa4uZjr7StoMzLhmhkuwreCpmYLEintubsSR",
  "key13": "4PdWd21hzMugHWfNZh1XYx1p6GNSzi7CURPmDd6nLZsNJ7A1BCv438UB87BK1JsjpEZEFc8WNqNNBtx6vbPU7RsB",
  "key14": "45RXQzdKZRiHYYTfrxwNNtaE9rqWBJTaYxQ8TjhPzSCZUgZYHfjTecVm3kZphc1FsqCdpoUuJN1nfekWQVP4HiYr",
  "key15": "5ZPnX6tQbZGC9QStUesZNc1pnsxFf1zacURg73LzfhNNSiKqnYxDXLrokQWNAztnQmaiwV217r1saCSzB6UnbY4p",
  "key16": "3H9QmPgFi2snmsxa3CyhYyzWs9wSSBqos46yNkuWtNGxWbDbNRmUwEQMr2ykLe8HboxmhRTmvNXQuVRurHxJAXuF",
  "key17": "49TYLBxGbFVUQzD4S4EQizZpHBhRpbBw9D99qepKWhx1hxLUjPqFsPTJgbAk5dHVwZHRXNRhqJtVtLrr8yaC8t44",
  "key18": "3iTMQNaU3xPLes2P5ysJsCoFQtSikkwCskJfujLuot6Nz1BgYWytZsfLVEoWdd7dANMyQSkGsxeFd1AEVhH8R1SG",
  "key19": "32omP8C7FH7qBQbYj8JTZpnoCT3vu1mBkCaKTVmjP6QbckKjrxAWGqNjP7B9WbZD9Zt2UUzSbEj3GVXjxW3JTxa1",
  "key20": "61MWNfvn5D5aamoYmW4PTxwXriFShpCHE2tH9xb8WLRmx8C9gYWTrnhpgoB6VHMryvMacF1qe4kAf9DwVYA97bZQ",
  "key21": "4Qx4DZBeYHQkPTLWdxYUqLqpK6cjpDjzQiuJ2RnuUSWwTxUWNt7uu5mMwLtax9dRKXj8tY81n49f5vyaQTD6NgHx",
  "key22": "3xJqtLLxb1a8J8GKXszhVN4mNhxfwZFXxSGEBxF5FcxYD5Rp4pdtfkc5Xs9VsByWaFxQPbk2cjwgFktSYJ7iBLTa",
  "key23": "Nt1jv9af4hanaUAtZHfhRmUmihtmX1SiEQmKo4Dr2ADjrsJXZedogY1kGsvdUjy1YDAd522qHznFkmPkGTGUn7X",
  "key24": "4vrhJspdL3SgzrzektXptb4NqWDvnGUauRNg7iUQTu7GSjB3mmuAEAWPp733DQMwCDyd42S72Qjf3Dc4zmbwuYM7",
  "key25": "3nPRKkVVf1vyk2vqxBn3dknyRPKGSz9i1WxuTdcmQKpJPnRBWaAv8CgWghRqZpUJ5P81H96JZuSPV5UCuf7fJNUQ",
  "key26": "3b5RQ14DZz26SxisTyKHwbqcKew8WS4eoN2E7h9LFkQs3sU4Hrh8Z58UpYB7fZFySYeQzr4Uf5M9CKHsdfCQxyGt",
  "key27": "3swZwjfNUH9coxkLU8pYmXGCMinsNgm7GNFRakVcGse9NZQeU9WEic1RWhBDWTua9pGrXe24frU5Y6JejawRDFSi",
  "key28": "mULrScgRjAiAnwDJHx85VUcRKyzjGdqvRfwYAB17NyG35qUd4bphWFPgLnxbqfwvQZyoVWuhbFxV3AVSW4JqgVB",
  "key29": "46QRoJ7cr7WqWkLYxy1ET6LEnZsJp1iogPA8hEcfRzz1VeAdN98zqMMPDViYjy8dWHtfFAM54e94TbW76ibDdzji",
  "key30": "5YinCN32tJRoEDXWEuVR7z38aayhTeNmLqf262aUpnaPTpstVMLKRhpsZFozuMh4MKFknrwVxbJujyDYvFbPEbmY",
  "key31": "4mLUiuehh5f11qUHVfa1xANpG5PmqF9odckGniQeCj4BZXahYsJBqqBBuuvAqNGwtgmcgp7vLvvNTCV4sZbEskPd",
  "key32": "58nWkgNdN5SMmkbEaDjbwUzHo8Akdtih5BJeqZEFMEnhiCoUWgBVt4Fx46hbRC9JBCmTLtLYbV4aTRrNtREkMVA4",
  "key33": "2kycFLpcjQNpqL2xw3us2eDvBeTEQc6d5KfcThqRnQtGEpaHTmmhh54CpofvoydAP1FKWyc6ATG8PmwHSFdMdoCG",
  "key34": "3eDUHrBsPDJJ7fSDuUVziXrTnvSPWo1MNuznWWwwVyoLhtLDnz8a2ALZ5Ats4hSFQh6ffWzpH8sYR4CCn1AdhZHa",
  "key35": "2UoUYnqdhwyj2VRSgtooToCoaig5eCxm8pEMZoqriCi5DHNik6FBG7DHgnsc4Cj5FT24Zatea1HeoVh9eH6BrkKR",
  "key36": "4fjBu8fLh6swDKrHjwDFrcnFbPpr9gpxrEJCyGy8E3LQKaBDiaFmhcrQq7xCaQcEu2dyR817ucQqiCkWq5PMRXp5"
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
