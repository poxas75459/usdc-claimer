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
    "5kTAqrCNEMCBTcP3HChutvZra8wPqnEUN9jt6dg6eB46wmS3YYAvYZjueyMfDbwhH1bwAkJiYcGRoKNwi6xxaBYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4oGVkhsxpnBxGNdxtrD1jQ5Z6Edx9Ub4aq2Yhkowm4tPB2Xeb8NzG3kWmkqY3p8L1XYf5gUen6Ji4u4UsN8che",
  "key1": "3LuzfutSWn5Mbis6pSNTNLSxkEnw6rAu3KS2azw2Ubp7SLEdBvnNfCnK1EsV1jzYQZFZ3yB1xvreABPpT29UMi4a",
  "key2": "5XaAjBbWdgCFnbWRJw6xDkCreGyHbB9hhVPXWteZXgfXncnm42bQisFMZCwNXMKB1yc3V5PkbXGdW1N2Dz7AMnmk",
  "key3": "3EizWz6BzzWSpfCjVKEMG7ZzrUzUz2JANGLr54rm1U4MAMhf8dqK5fDvEo2PpXJWpGxgWkfGdh68bWoPAd76xhQ2",
  "key4": "2XM8X9uMYnrXAu8ct4KqjKynVAX2ANn7r8h162wT6b7uXUf7dtrdv5z5tknmFrEssESzUhBNBk4HscrbzPzXJBMm",
  "key5": "2ncDo5W7yKMRb4wnFQr4VJfYWaWAFf7f2hLBUtSqvds1rYkwjizNEmfCnLXQxd25ophtCQstLCWtJrNmRs6n69Fo",
  "key6": "2awwokyUp6HmqgPYstrEpPbuYDEgAiSEw3d7iDty151GzGAgUyWKgtr8qKNdLqw1M6bqWjLRVz8vfL2fLFb7UCLW",
  "key7": "2pjFtodaiz2gaaSFV4tREhL9PQE3MsaKNCUmno8KowocSXWgqF7Lu2wjYsAWm7n7LGTgxMNik9KQwB62xVf9TzZf",
  "key8": "3TPEwgvLcjLd3bcWzhTGMCqjsaqEqa4NCvB7v3Bt67JtdnkFAbEr67NHvPqDmpGKPFQfseKYNK5a3ZZHk3UzGJTt",
  "key9": "51pGzCpRCw7RiUqfCQDwgSE5eFxvk61jVZ1Zdj1q9sD34DwecJvEiFYvsoAuc2Tt6e9mDDuL47pKVoLoGa5THn5A",
  "key10": "3biqcVHV9ZcyLf55VrUouPWGZtKAqDqHVJUiA5k78v2cUHkCxyYfuj7jEuQptTemUMumFCh8m3RVbdT8xgkUfEfU",
  "key11": "51cgCjq8bX3XYRTytHtxz8wGoCB7HwrqUGBmoyw3brf7mjmyM6nAWESJuBWSkias2D5or4ft1hnrmroVeZuLDPvd",
  "key12": "5nXRkttCxvB2iYxg11buvAvDoM8oKuBw6UWSRLX5sbWU7ayji6hc1ZamsMQjfJ3CtKKjCbhUMFHa8JBpYPrxDSot",
  "key13": "2imJrnYkKXozvjAsKkKLH95Q2ig1UvwJKb9YpJpvf3uu4KPsdRnf3BYA6q3BooR8Nx1QYGiWRqcgZvmhZSFPL4AP",
  "key14": "4Nqh2GLtTSUCM8g9B9wVR2bftn6XihhbpSvggFCfhqTDdhzFYwmE2B1SgfQbyFv2aHEqFGARDgCVz2fZNrK5LMF7",
  "key15": "47gcPvrzAA29DeoKp1oUY1Ejk6EcR9xPR5autBk7rAFszeLaXDsx9496yYoPH977iNRirxcShZ5SRvvLfeJJ6MnC",
  "key16": "bF7Wxd9ABezdaNrkLrqXKmVhBHAY4gqNhwZ7GuLBThDD44fSVa1NPbSDTBVY5QtANLN3woQUGQvdR1FGvoDAiKc",
  "key17": "2zjnqj4nZYMfJXbK1d87eZVqRGSwxKrcWhEfmMwYLW766R3RJevjdvjX3USaAbtyxdkPPhLzZvt96a8fVKtcfaNo",
  "key18": "iPifEAMMi6LA28hLLfHU4d6Z78nc4ihrX8W6iv4woSpGyvB4R1JRgW1Soy4bh4BUKSwKKhrU7e4nGEerARAck2J",
  "key19": "ZAMuKtzkgwWkeJWoPGukMkLPkMnmRf6oAec38nthg5xqy4DCzx12t9dVCnUG6RiGp1yKAZ3kDayHvJnjNnpgAGx",
  "key20": "QHXjSxmjRcAtjJJax4yhejfEJpJ3AGanaP8eWvbXi75MQcDy44TZtXUMWHkKn3KhA2yD9ycvMep9mBk3dg17nBn",
  "key21": "a8KyErWAZ7ymSZPTcAeQcmcP6giPeNKoUQMDQPdvv2W8P6ZyB6hSJTrvfZj4fcQF1faAkyipKcGKVMQ6omHzyHU",
  "key22": "3na1un25GinNAjGKkWws5SL7VqPqtmmtVhVWqtYEJgJf4oGAKc92P15yn3QPzAMFJsM4RvszALftfSNgQegaebaE",
  "key23": "31gU3x74QqBqd7oV5wUCuQ19nMfUFdLWdwX5x4ZeBB5So4Dn2a5JYXiHHm5N3dWNaEAUFYqDj6Gvn9H4aXWdD35m",
  "key24": "3rLF9y7SyQd2i7VBvTApi8LE8HBRxLzPi7ACdcf32kvfXode9rdgKsZ5ZkGbm8YQYdfgYLmaV6ipp8ks5jTH5aYE",
  "key25": "2UxXgrRwFfSWDem9eZdjH7jfW3w52ZipBrF1rfZCcqQiW3RQLa3g5CgvkGVMUxUGEXHC7WqXcNMji98CzPSuCoUF",
  "key26": "3CneedguTZPnWKHS4ThuFDonULDncuioUMaJX7t7t5CoTogPzkejnFVX2GKCyoqkfatwWorU1ZnhBch5p7x4kicD",
  "key27": "5uDrzSc4Bgk9p91yxe4X1bCy8Hzzu1mAXp4P88UBQZZAw67C8oZEa87tEfeNkif4gbek2nUoQkCDoscb88Yi2x5G",
  "key28": "4TnrbJp4S2Q64Qah4PeLS8Pd56U7DdvvSmk2h9J1V5jU6b5qpi52E32q7TYjcDt9wWeaPa3BDrCirQEC7uQSGzTd",
  "key29": "2j2SuLLeyRPgqY6qwD1ALyzyK5GXHBviQ59eEkG5bmQ5ezHnrowczMkjhuKWnX6bmKKiL1Ti8hodfMx6fiTT6u6g",
  "key30": "VsYAAE35zU9sr6N4dJaBGynM9ft26Zo2mTC32j1fzpZFMf5xfm11wMsC1iR2A2UeeaxxLmxZQ38xRCFrG4mLbRf",
  "key31": "52mwea9uVj9YmnsJC5yPbEJm1bu5j2aKcRWemR6PRrCCt8bGgpi2Qz4SzN111SrsT1HH9WmwKg7xjAyGwV6SVdej",
  "key32": "3iRF4TGsQA9hB2kGJSC22uS4PZ7W9X5EC68W4zGZW4HxfCbjHe5FvCirWGim7XitZDjSG71F3uy9fu4ifJ3LxfYo"
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
