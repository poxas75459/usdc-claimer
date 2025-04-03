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
    "2uJQxVvAmQ7e9fUPRsnUinPfcvdE13Yaz9M72EtMDu19wBKpGbiSUBG86qaMPpQVCkoLvfJ8bmD1DvP1Ly5FJStV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3kdoFpUniDLqghLNPGYWveFrDCZyVjWwMLs54TzAUR8YNqoaDNvBieipgLUs9332VCaXonURmUhYCGmaC5ybpf",
  "key1": "iQepX4ek9TiZwSqC8ZiRHyuXbkQdavrAWQnaVDJfmK6AA57RsguUnzXhYyuxAmE6sso8qNzGbFnFvZdeBVYvybf",
  "key2": "3kAoY4iMXLRcpyDaecfBGnQLMvmFz5Yx97xLHNSrQsyqKsd1rM2HuVTcYwFe2mthTJn4jJPWriXwkh29ZDJYxKs6",
  "key3": "C2R1UUVbNdmms9AHqq5GXKDyxWBvLy9aJLu7VRyZRV9dZ6EYbQqWimkbbHm52H8ea4hd8yt6vWzJPvTs9Sx1fJ6",
  "key4": "ENqoQz9euMv1Kh7eNyw172vCtYPfzoRcV8WbUzGMU5TrnurXUdW6FziS21KNDnvguAqxLEgJrmF7o58kpmN2ZxQ",
  "key5": "2388SdSANkBPpmGYQ8Rp7ZmG7SK3SZpRYS6sogBVAL2FRLQipQ9PkAMWYm7UnQCXZ7mSNTi8PDGUb2MAj3YyNFUc",
  "key6": "2KeHK4XwkhkHcjzyErQFvG6wtF48eu8iwEYseV3aULre83XfXb99VJozCZTyUFZ2nc6jFEUnMrAfbaBf9PMj3gtA",
  "key7": "pFyRPRgXR4mBtrgVGTSpf3FLXVhd9zdiBFfGXb2DkuLuRxVUhHgiuy36hwKeaMGYjLNjUQSzzr3rLCwB6tGSwjC",
  "key8": "4iC6vNegiiEB91UpbibUPQ4zX6AHczQeY9ATJZHjDQVm4bH6wGs6my8rbvXrdpReQfUL1YjnUUmgyyg1zp7m1vac",
  "key9": "3nhoof9vGFSYuQ6t8xT77VhwhhxxyPptvQosCNnLfKKTDfS86n6WWQ79CbHMypWZkmJtovdEgksiEJW9evTYUBSE",
  "key10": "2TAYQBvkb66Q7FKVxtG1qZKaboZ6pw1hfB9jLjqW9uK3U8929UDVDFPsohBWvkFDWisAMNstPpqQPzycQzSu11Cz",
  "key11": "XR9QyAsqBGdMAfqDScCKskY7rnD3bspRNwwgejfyLRHsKNhU9QT7YTnoeBM1HE8KNyi8TKmtd5m5kZiUmwSN5tH",
  "key12": "JwvqediDDaL2X6pwCJZ7w4yrEEEtpKkBHGqHTB3GwMkjeMPNX9FsKefmXxRNhdjZAFn4CchgfSVuqqL7DzGxZk7",
  "key13": "4nvmG9nGKGRBfaBbnNAc9W8gY15W5oA3PPEbcr21mpEEXJGrCjncExbtovmBnDqNFBZZUK8d4mEtTA51TnGTERX2",
  "key14": "25L6woE2a2jMZ7gwhezxf6HrbZ2Bjmvok9AVjBin6Gida7zqWDGaCEhcEjBHtSdaBexoffGDQEdhXWCxAVwHbLh9",
  "key15": "3NUg2z88eQVLvZ92Jj4LLpHYDw5vcqon7ffbWGyESPfoAv739htZ8YfTyD1MomLiy2SnWZvxLnikLepnrYzR2hdC",
  "key16": "Ljf2su1xHUhkx327YzJk8MHEMYK48mCTqxz2ewpdSqHH6zJgmJKX4btRxhydtigbBGCQAR24jhotNXvKcHMohz4",
  "key17": "284ca6aqs3kYgQGHkF9V1YaPaNNMcPjYsnfYPX2sftJpmmTVi1HxQTnByYcEd6pnRUnokk45chQYPxLE479dZ8sN",
  "key18": "7fWtiC31zRXXsxp4YP2DABScfh5i4L31rfAb8QkQhUZ5izyBWWRWqzkzrkGphznhhfLP73gbVwiSmMPFa7JEMzq",
  "key19": "5dsnNpLBGZJXBaMLBC8w6Uo4f3x4DUbM1BRPZsoJeoNKTfuBLUEAh7zXp8s5tQFj3miKGbSRWDR7qdDo8kU5zNBX",
  "key20": "2AnGpck21Yvf58DPUczcDDEvEtAixUMydPNoLomavG5QpXv34RJNiiGywGzS3CVq7Q723vT7TCNaMPX5EJKwDhdP",
  "key21": "4xPaXwZjpAdJ5hRbSkhT4H4ZkU31aYX5Rjf88j9hNPZCuSnE4uutWLgYq4xiQCzL5zmLdPktyKPTVJtHoXcP6aTq",
  "key22": "2Z8KMXCokpVjUgChsg8J6XBTUmsNi8QV5qL7vzMas6sQVVb4fsuMKL1ShuNxSXb8LjEkc6WZTrMcGmK17J8Map1v",
  "key23": "vqTxMFpMphhk357qhkhGw8TUqzNS4yWZNwLgf1r67rLeos145MZBZ1w2Yd2y9M1d7ujC95T8hBGQaukyPoUHDGU",
  "key24": "5RMbXtyetbksZdiixzfVQ7LwvGZRGy6uPReESjnthLrmK4pVov1WuUCUMpt9hymcohZfBLRYZfyNqdPzxpV8NE3Y",
  "key25": "4KShFwTqYvKEf5N8DCULUBSRJevVfibg4JmkvqeEbb27rBQ7dsU9wt5SCN53ewWzq6NyYcuJEM3b2GLEBznykN8f",
  "key26": "2UXSuNSPrYhuAKiJo3aNGjwqgkK6iRtsJkRg5MZ3Zte7hfE7myRAaeXmNs9d9wSzBsjKaMKSgyqoA5xzVjdKspAY",
  "key27": "2WukwFGe4my5z58nDgHbK3owKGSSBiy9QCJhrFvNTSM7oXRkGT7ftTBnNW7UNgSKz1Mu8SnzvSP1JER3tHAvVvXj",
  "key28": "3HyLBahcZ6VJusRNHdCBwZLmx826Bm4NhCatbFXipZXWki2WYiw7Q1zbohQto4eDcrTL7ZvXiy4TH889NdXQs43G",
  "key29": "hNtUtTtG9VKPXJVUetsN6CLbrHkRjvqmAy2dpxD2uHWUDcLFw4LQH2RcboziA52Jcypc7UZNF7Rt2WoffVLGMzH",
  "key30": "3xFWhqgahArqjxyhvnxxVnvRSEXBtjphL5xbjrtKWS6sQXoa6vbZ6bm8TDUiyux1BdFEpAxJpbLhUZaoUBBdWPEp",
  "key31": "3Q2zvx4Zv7FTbTgQobBwWwab9B54QXLybnV1eC8QN9H9zxwbUEophrEuXdXB6PAsc5dGjZKAhU7TLnAMH4AqHusw",
  "key32": "5888VDbxHtZPcdTMRke6XEtRQkwQF7qwauX8hBXUU9Dwb1TxuVMFV5fsTFXRjFF2J9sGACHSBNoT6E2qZxPbAANd",
  "key33": "3pkKZvXS8FXqX5dhJpGPLZ4jgkuJTcWvS21XroHpzDmPGKwiaF2jhkH4w53ptPocm7ixckLTWcZZxSPy142bi64G",
  "key34": "ZVUZuJgzrBRuxNufBrLHaPjj2SU5LDH1qowVL1JYanNRTSRtYPiP9JDqrPeWBSYdzRfKqzL6v7Gf7CEA8PRVbX6"
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
