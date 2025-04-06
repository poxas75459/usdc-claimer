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
    "KBJ3hTyyJcetbES2wc4Ehrz2rUbXaHqWC5B1LnNHnpN6dhNGJwD7AQnmRehnRyQJe3rXpWCXtrmqyCURigD16D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XANZmAtWESfXV1E8VK4odKcdyGtxXjgH6hfJSsiCVAagvxYjjZGC1ngNyjxJen62tSMaqfd7DdSxyRc581eam14",
  "key1": "3iq7ucghJ6fFPiNqHAXVVxXNGQ7qrYvVjsx2L7XhpwPw75kv3LuXhmkXm53XZCgJyQpPLtvZadn75e4RzP3UENiC",
  "key2": "5MBF2Z1Y9ck6HzE2E7BvWoZcnE4599PpF8ijAPE8E3M6d2mAujTHxww55T3tqRZAMgR3Fw4SKCAxytduHTKVXPnW",
  "key3": "4UD6gUYmy1UnHGr1y7UTuL9yDEcKRjz1DBPJgVYuexfcSByo4WxjLvndeSvJ6JrpMCHTQy8ETwUQyga7z87jQksg",
  "key4": "4hq9Rxvw9B11UCqZ6nnBxNgDuBt68SgF6zSW5YgG6mageghXhFc5QZd5VEZWX8UeybMWphg4DbHD85htGzQRJ3sv",
  "key5": "5wjRJU9YgkNmkBaSM7vMTfNJsM18Z9s3G4dMPSxXLA4hK2HghDGFzMM3K89bUhazV6qa1DaXLcGbwxA2xm31pfUx",
  "key6": "3Qisdsnwyfh5bQA3MwFupsZgLLcbRNPzUpFexgyL1RzmDps5joL5FGD7ME5tZdggfpdxrRGgJPzrmekcnLbgjMgG",
  "key7": "4aHSaBp4MUTRhpqMuZtcHFoaYBmzRQNVyoqNB7myaSah7JQoXMaC9o7EGV9Rxhv71BnsWYunCMpUSLJsDGCT6FLq",
  "key8": "44rhdurBDwAFJbmgdcySRSn6thsiiNebRoy2Yo6A4C12LPPVhnzSKdWrJdm2MeLyf6ZHvfZNAcbxD6LNWvvNmHwm",
  "key9": "4js3kQ1j52mH9z5xnRMNTTSTYzNPkZkfkL5MB4aeL5La3rMbBZ5rqjAT1eeqyaA9PWNepPsNYrkRU7wFn7p3vLg8",
  "key10": "3w8qkkh77jEjxb3Ko3xekzBpgDNYzTN5qp2KvNWTuqJwmxHZk46NWrz9FPXJn6qXfbkZemjGbzrg6fqoYp68CqyF",
  "key11": "58AenGY9V6zxKgZNJXK3Y8NSKNSNnj65CX5esRvTBcwDEMep1GcRtP9BVrQ2MExjZYBos5qWLxH8CTGzbmPomuB9",
  "key12": "2yUSwYqeBFLq7adUm2YHMSVY6S9Yn57bM3enwmP11Bm8mhjNFcC5iPnn3gJzonCuscLJQWQ2zSwt5VpCYGf3Yecg",
  "key13": "28o9bXJk9x8ENazFWcdYzKVkQGuGkQ2ejCstvBCrxmAz13MCC3smndEqGPHJHCjf36Gk6xjsahQhSWFFiJjSijfD",
  "key14": "3yT3KWBXPpSbBm9kqvBrasdVTo2gXLVGqHnd59iw3EBtGusF3vErRke8A2kamv7c3fzHyvKgoV9MAa3hWdSXmzNG",
  "key15": "2Gxo5SNyXE7jdBD1VzzVaBugebY7zbpiiTRQ5qiPrZ3mC71Z8Ge9DJJVzrpeR5Wh8CFvord33oNJkjsSkxbimJYW",
  "key16": "479QSEjGJq5XwjCrZa7Hu595gFcB5hC2DYtTUmkgV6pawNB2j6RQwjfxCypdeUxUkwzwAj8A7G1KnQdc9hVV8hSf",
  "key17": "4UxYuRWVakrNBdDVA9Q6qNMMUXoW6UdLzzEcbXjZjoDyYMXHHKdfS7vJ7pT6SZcDEtUzCfyafocchZWyHyNL8jou",
  "key18": "JsX5hB9hwiZk8dMztSY5RjqyCJMoj3W9ZNEebzrfpusED7oj8wgzhxVavm79T6VAcumTxhqnTsdUoV1JDGa6St3",
  "key19": "3jihhSXFW46dwhqAE4waHw5paFZJWJEaGTCY9qnfftrgLq7zAtY9931kgVcwzC6dM1WMo3WEKrfZbvEYoDKzSqTF",
  "key20": "5cKrPdxyK9KFeFHDLAgnrpF8ZHbZ3dtfDCHqB3xwLVDD38es8jrr2wXAdgZ6iZtoU6fu2xgduAhMWy8DhoNGGpxn",
  "key21": "3HcAzGcJ94JA8zSboZCG31gQ33yKUSqYKaMrhpDmJX8Ppucm1AcNugcumQ4CMT3gEBnrDWuJbQfU3n3ufmWGwN26",
  "key22": "52tTLCZhd1pakS2BakqYFfqoG3PxVxM8bnN372qGjnfC3YQQ96yDgD4M1m3s62mWXJzLrrdqdb4gWeNWh1qiGiGG",
  "key23": "XMMxktzpb8YiftL8msgcfRn7wHvmXhuD8QrfViwmcnnUkg52uGzBBgxVv2Y4dyUF9ckduP1yppgysRRv3KfR3gQ",
  "key24": "2JsFgdHEByXN6nkzyhoQrAjAkWmkTAsn2Am59vmygL9jhrEu3oZgX8vmbtVgHZ17WMWckTDNWFpVwVunUVaKmdLV",
  "key25": "2fkgj87QFPgTsDNuyuuzcLBA2mXNmVQneWsPGGeYQFSJuSaskW5BMsfYNn2DZdnpECAMtAkKTuqyP7C87pGuVR32",
  "key26": "58EfrC2QCMFSoERKY4DgV9DvhMviDScNTGJB5K8pT9PqJujpiLBgtAf8nYfFRAo7MFc3fYiRZ4nLGqzj78cY2y18",
  "key27": "2Wzy7AN4mjFmVZCpGzCSpjVKpEK9K1YUYSQPQMg7W3YLhKN651x3MmLfpPLo1PSmQoVGXkjdnWGHo6g3krh9FMi3",
  "key28": "3RF5ABsKmH8yfNyHeijwWEvCi93fNj316pYipKLNfax6t4DHrB9Hq5r5Zdz8hMXgdNbZvm4U7CRnmfX6fKxtYo1k",
  "key29": "3pQ2QjuezFpegddno9vvLePzDDFbLPwRi1spHHm2V1XA34SFFmT6QoEbUeEckZnLqFSp5qB4HJqP314itSt9NJVE",
  "key30": "2avrFfZNAL6q4JkA8k6FXMxFX3wc5bTYrQx2QcwLi5Qh54znnUezoAqojfAr3H3yAxzhYYRXyooDFtwz6Gc7ZJeb",
  "key31": "4QibyogcTGQB3fkj6HAfWpVTwWAAmi9VHRKHwKQ1PZ68FSrYHjetmPDZp8srLL5ZpDRr9jAb7eWdtynHe4VUcxby",
  "key32": "3NsV3YcRUDAkP497NSLc41X595Ry81N2Cx24ujxWV9YgFKfuGbux4xj7TErUCBUfLCx22eFmGaGAi2juoAzdzPhX"
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
