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
    "7u2azCMgJceUJf9fqNntkVVzSFLLHxAXX9LFgJXMAK5ocbLcVo9FDmcz1a66BgDAH75xYDJhwqpoDkcKLYPo9KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8Jg9B9CAw8YrGhJXw7qPCmaPPLrpR7Z83hS8xMRQbFVA6oVrU4ZAVTYXc2nXSDbjTdUYAR1kcVfSqdzXUspP8y",
  "key1": "2Dc4L7G4QaHp5DLyCBCB4Wc2jSXs9bCvz9efwtdB9RPHf9YUPjFkjSzXozVqR8uNwDfxja8QNQVV7bmWhFH6aNys",
  "key2": "X62eDHfshNXhccFkxshk35Dhx9x5k75UYD2DPNp2DKQARvBh5nYLCVvwm7nQP8qHuBS8cg4uKHDAP8q6FjkZtpN",
  "key3": "593xpifmbgApBZJziwreSrcZnMsa3m2Vqg7jwn39UBFuPq5Mxx3jivPxof21ck2edevZSRPs6dHNQPgJqBKSgPXK",
  "key4": "5Czy4HozhARMPWD8obAT9GsH1Zt1ZRMgTgvTJVRLycPtCQRUbWEBuw38Sqah8TdacqtNjRQt9C1nQ77gJmXo4SET",
  "key5": "3ZZRWj3p8Pn3iqdSwFFL9nmaWdypLQgMdoExqXAmUb9CEmircyxTvcc2JdAu1QH17BX7Q8w6k6G4iDriYJUhMVgo",
  "key6": "2Lp1yhWsn2VzF3ApaEgL92LRV8vaKgiGdSWdTtiSdL29etG1s6g7hTkj5mD4td1wwytuUry4ewTEefwEoXdr2y7x",
  "key7": "4otE6rVhDNr4UPXvBLq82Z7FTYXLSstk3DhZ8c2aKRsJCXYJtrQLZaHYTGAYJ32LKBx1aEwgZMCe8NdkLYCHDi39",
  "key8": "fKdknWihBauDhUEMC2Xceub5Enho8kgoro1bEUmihf7GDkHVVvJHZSXu9wkQtaNF2gCYGn1xAH7Qx5XUdEYDX7X",
  "key9": "4MHgfCvpygymKC3jBD4XEQCCVv5Wqb5jZVKDGvUEYHpB9qWPJAVorhBNrqW3u9kDDpMQP7eNjcLiykYUWTHVHqEg",
  "key10": "63a7snCAqfEvUSi2juATMAsVMLNL8FByeKERSjQ9sTc4ZFLv5hMk8Xv8PKgosFn32AnCi9XoM9S2GuAFSN7RKV7Z",
  "key11": "3v2h4TT45K9mYk55fPkBAgqgmr41bcFNdwQrMzHrwuK1mM7KqgDggniGN1v2ZVihvJ1iTQ3tLoYGGYUuDNdkEjGw",
  "key12": "63eZNtRjqCVUGL8qLdjmu1xkdHcJTc6XeBGaVX3qihbcDf3c4ELbynWd5tgGihL6nTtLbsHXasPwLwLLqP5WNomG",
  "key13": "5Zd9fMc4vh2m1uDsUf6t87AXc4SkhGo2pb6n8Y5gCxaTXUKxW6iBB4HQXCEwUJyGd4iwofCY37BDD5ExZjkoQwdD",
  "key14": "23xwAPLiSqQGRnFjQ9t2Y15oFfZQtte3qfM54hjikZZNq6n9q8QC6KTjjLDbEhVa5wUDRgkBEsWeMZh9aQ5kK24L",
  "key15": "5nWt53WGMxtqXZ3i3JLA3pM71HxUbFcok7Edc2iHTcSeC6294QfAXT3yhWFbLuyi6p1uMG1pLDC7N9ba7GTp3NG7",
  "key16": "2TU4386D3TDF2HYReeWejZdtPAjHMTL1LRDZuK5uuLk3y8PY7Qch8ahcudi6xzT62RXuNcuaKHrhZRL45NEAu46u",
  "key17": "3xJnRdyznMahbCWQkzS6rpB4ZwFPDW4Vh33jk7HPvi6ZCYXw7BmHoYcbdSgc2ruNakiVS9RgwxDZgJi7yLLza5gf",
  "key18": "26ExSKc2MCHJVpQBu2fsNej3yCpx82wZe4qx2mpCh5m6VQZs1Lsa16CaRnWdkQasExYk15JkSDywy1yqcUGQVYC6",
  "key19": "4D7PRi9z6vBsScc2P3mVEWtGUyga1cJTbNy1ykEU5M5vpZL7GfMiTT1QJgMYUrjFgGDBKHU7sFNuZ55JZgWkr7EK",
  "key20": "225vAtwNEAhjysPRdSXb1uDifqgtKZfnqeiEc16NVVWvgULrWABNvSaUstrmELgA58thVD8oDuTu23hYkasFLiRF",
  "key21": "28vyN5bhd3caqezEAyTK5wa9BNRftpgcv5m4SX9GJ3vpW4z5KDQfZ6U3dumEMjHXnshpqcLUSbU43CY6mrF4YXDe",
  "key22": "3YRNbhD8AcMon32JV946v1oKAX4ts5tVrGq68gPXxd5Pp9wWqStG5CGcL1NncHtQ23mh3jPaLuPp7qiWdQfJTXj7",
  "key23": "2S6MzesxDSZBrQeUYAxhJhoNPjJVQKRtkyB5oW4GAx4aCJPe4TUkaUxaoJ7LUkJf8StgbmfpRxVZqW1rcszWLFtB",
  "key24": "617GMrt8hU1Jkg4kGR9eNbPzojFhGXHwsA35cniP4uXxaDWXartdrZm2t5tEqpT7QwGPWVRkKKTjhHojDajW7WU",
  "key25": "5Gb2r7AvyyA98q8oFhsXCWoFXomBNDJDi3DPHAP1ZhBrfyPHXjDD6t6XCEsjed4CbFXfWGdJRTciheQZFKGtsbei"
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
