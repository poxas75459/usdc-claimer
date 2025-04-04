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
    "aGvA4pFiceRsuKHjeN7RFfxqMhzCSPCJ6c7n7kScbVhGV1Wwa68kGwrb97Wscdd7JVLi4EcHAYXXJbJLCvkSAHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8ehz2dkga3KZ7xRDVeUg6NzTkzWbgcxKwe1emVyanAd8Evnthjp7QcfM4qDo3bZGBCirEkWJqJgRCFJkTwCdKF",
  "key1": "2ahZoNNyvj2ATMRUKXwQhuNoMUDPF3H1C6KES588EzpvjFjF2En2fuPqM8djw1WoPFX1B56dGV9RRDbcGjqM3q5V",
  "key2": "2Bp5csLVofWtCcvd6Uqfjm2mmJTLNZLFaoJjfynDvveGNvzVAHDJT5iFcts2yqr4XRKqu81b5fNFbqr5ufBk6HhM",
  "key3": "oNovP8Qp2CmoLhzt3XxrnqrSwxqWwjNcEdeTvUoYApPndHZDgZe9XGvx3nXhNVyDJBmLvxQvu6JvwjFQJNz9HGs",
  "key4": "2PkCMRgXxbowd8H65s4wYs93WdmCV6RhgY6CZq4wKVZk5LyUssTAwJfjQkP8aSPzvJM3xr2hDiCaV1yui2oSZCHP",
  "key5": "3HrxMSiG6GtGhX9jt2b3tq28nJSwJzoR9W36rUaWBdRKSb2Uz2nSgrM7tUKfy1w36Myrkb5ZjYQizbPiHELZbo9r",
  "key6": "Am7cohEV4GYvTsC9Rfwe7U3myKrLwJL5rUsYd9WB7jcRvoKhC6PKoxmvBmqvRB63MSvxWCNo5LGtyAJzDYQV3EW",
  "key7": "5okbvEakZhahqTuwGRyFY9Tqe12h1vLYWG47RzpwZCHNXFBw6SqaVRAZBpHFHACbFQX24LccoZtVA4s8pY4XPEdK",
  "key8": "3iNmLY9r2ScKKXqMZjL77T3zmdpK1xoG17Te4Es4tpPHYrCxFktNuVo7TCxUbVtfe3nE5zHzqvvxHAyL9LJbcSc",
  "key9": "2PRDZahikeXzEkdSCU31gpmP4dqcUeMReYVWePNTFVv8BYxiZWaNpbC2Ryw7H7G8A6A7HZ6x8VwemSrpH8qPbdY5",
  "key10": "55Ch4qD97qBgqxNtWT3UZs1NjZbroxYhQpGGcNzZUZz7LtXgCswWpM46tJy9xp75h9aDd7f5C9Lwo4fnPF7fN58P",
  "key11": "3FnAQezrHyJhaVv9Pf6M8qhHRWVcEwAQo5MZgonjhnwf9RP4dQfbhFkh3xh4fjAk1gfva4RDBnPhJbVq8WABgnNu",
  "key12": "3u1mCmimdhLKgjGUUJPzWYabLmmwuz1s7bLbx1c17SmycRVAgJLeKVGW5ERRcrqySxnLw439tBC7T7cBRmuqsS8R",
  "key13": "2SDGEiJkan4wZZ2UkgXaVgaBqynedNrS7yXUtLL9H1cTpwqZnfWm8Vi7gmtthkpsikxH1Gt1FdcwRTRdDeAhkM5Z",
  "key14": "4enRHEUofpAdtru8AbPHVR1VPU6pWtYsGV32vfmWqAsKgRV11Z9ZSWkthsMhhBzE1W5T6hhEiCnz2t6n8dTXRyhh",
  "key15": "5CXrQPsdPhVteMoBsdsWFUn59K59iV25WctKdUpi6UJJPnvKsbcCBTv1Zi5Bc8nnYN6rpcX7jrLPNqE12NjCXPNe",
  "key16": "523aQs4GsuHSG3EuX23HA4nKVinQtgk1cj7DngbmfHj6aYWQopcFCA95JDFpvubmCgHYruQctUhJBuvP9Z11da15",
  "key17": "2XV5c8VKECUTWPCB6GAqGQqPzCYFQrj9Af7k94maUfksjFHHestYHiMDzB5KEizvh9bSoYFiqi9BRRLhCB96m4QB",
  "key18": "tkdNML6qKkc8sk1PhuK3G5QZ6N3Af9bFJpN1prYsFQ7CrbifXw7P8ZDjaBLGDLsntyXGE9k6qU9aUT83qMH7W9m",
  "key19": "3FuRossJotvJiZ8akRLECaywebaLfwxVJbcnSqaQ2upiDSsAhcBYs95vbWP78Ngp6TbnyYPJpjRiiJyYJR7doAZ4",
  "key20": "4WGMecF1kRwtjaBv3jDyHq62meHZ7WQH4PRhkikUAPohtKd3ZzSuRBcN32hvhX2yuf8H3Skn3i3j4AnKKnFcYRWt",
  "key21": "33CnXfr397SUL3vqxNZD9evW3jcSbDfedC1BKzHbTZcpbCiCKQUKZGKb4DDrTwrL3tmdFDWrFRCkpf3rCWQPWpbC",
  "key22": "5TffR2GWxkJWbZ1FP7x7pKqfB3QU7BmKpBaV4r97kbvcBL8wqqcz65Kg3tdCjtbox1MGifgwR5WkpkBB71mtezmK",
  "key23": "2Y5DMuk5KfDJsNfGtankAmXFjTFunRS6W5JH65DxaVcWnfbZMrtYNEX7GZPdRNN6cE6pwyyeK4zXgwXcj7d6kSJi",
  "key24": "3QNSvxtckMUTAftjjzpLRNB1BgnVEAj2DVdMAV12gVLzrrHrmEFygymEjru5Mgz8z3rxRfnbNhPVGN1ZSQ9aH7EN",
  "key25": "5cQRGF36Zkke5xKN8FN9L4YN9pEgjue5TddKpaVzP3SSsMWQNzmn6Uee7CH6td4xBzVFoEentmjjYmrXgdLibQHL",
  "key26": "kAe4dqeGBaM7jDSt1sGmDxDpbxf4Ed8zWHPx8pAJECCAwwLwT9epotPjc3yiqtokoeYoqnWjosG4JeZN27y1DCe",
  "key27": "2rdU7tWxNFTqXXhpHx9CdVD5ZqSAHkfCw7iw886WqgQge1M1PPG4UhSTo994aecx192GVgLD24izhghv2qp5daX",
  "key28": "4oWYpyyGWS2kgD4fdkiDUzudqnSp4kFMWCk9QBjhSM5LxqCNrCSkgE2TBZ3WLoHJShjHj5etDp7xs9kpYx6qtbCU",
  "key29": "48bJUVKNcFmUv9FxdZATCMKWSu5Cxi2XxmVKmSS9oY5FLrN6ChjP9oTgARBskP2sY9rNqE2A7jj5Hw24ihPby2C5",
  "key30": "3K3A6vanXEhExPn7HMf81FkQVq1CU818mJKZCsb1jLvJuTLdN6QgoJsaNe5CU34u1po8jBgSw3FaRGAEr8iaBxV2",
  "key31": "4BcatHHWQ7SsMM4K8DLUHEezGqjdYPjy5SEGQynsbwV7yFvK4vgxDFGsXBJcWsTn99qQhmu1rJpsEcV9ZLHXoGXa",
  "key32": "5dxUuN5J78hcSTpNksTQMNnkoMzvmA4Zjkc56ev1C39Qkdkncx1Ya2rmLRQQvBD5CUiAVdga5AQgQjMzYSCjWhMi"
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
