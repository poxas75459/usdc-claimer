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
    "32MNGwF2pSZsEwQAKtGwMWRhypTnrEytwbYkqffteu58okYE5T77M5Y1NPd7NtLwuGUVFoAKxPwod3mAXx2DhEah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6FBKHWi2ZGZxaMevi8ZJyDHJn3WqYcRS33JfDCKbTdKkdq198wuYmNcsQRZcNMzdHmAXFkbR2Q9bDHVHF2hhv6",
  "key1": "55tXryH5gCzmomrSKY5muG75GHdx8qf9db8tsXumXZUiixU5T3o6zj9QZWpLwjDQgnm5fciUFKayxzdT5dsv5oGN",
  "key2": "35zNZ1sX9mANp9XfgeK2ckWkWKywya1hFpMRaaFgE7vXbCDUZohK2626oTWcnWdNKSFVy7ibwd2B7x5mVKWzvzba",
  "key3": "3zHozUmNw8HYxA34TUjM3CuSvwFQ5Vmfoa1DB5AW7w9VaEp9uQPQ1uzeUkdAnUPw2XpYKph4vXYWeMSxe3YqatbV",
  "key4": "2S1RaApSRMUopAgqxPfGoMqfYRJK3kwUAgidUh6LdCkE9vBvSLtDdfE1tn7z1ZJHsDAhDDRFYzympb38yMLbNm4V",
  "key5": "4gCLbYUEafsLYUFx368NrG2gJLS98UfFA5hG5YsRYADtT8ANvmVfDqoHiDfD1BfY8w2yiRdJH1Z1VTJ8NUWpCwPH",
  "key6": "snfecVRPtE3g4agLVGLEHTpeTkxLe2GZiZ1h3QRm2LVtQCmBgWmw1zpHVrXtxEAYSqxCdPWJPRU1YamtAF3YfjC",
  "key7": "5cuheWGZTDbc1aP9sFHXQbGh9KJXXz7bYvtrzbtkNdyxiBDErFi4pzAUTDqEnjhTyDbm78chZZHhNREqV2fQbMwS",
  "key8": "HmjwNJWdW4qoQn6AqDwmQiErHwDt3PxivHPr5ZFcgMh9na2gsU2GDxoaPakbW7F8aMkXsWfcuvfYYRvDNBA1WQn",
  "key9": "4B6E2euwkfbVzfLMFGLLdhy9p6LR8LQZ4bfMbssfAUujbXtW5EHcHx9KKFXrWKbZ4tq183WseqiNtG8Di1H3PZ7j",
  "key10": "5243KR2LjEbpdTUJiCYYGqFnP78zqDz7uZndBx9qJ4nfq7rJqV9FTi4e4BpdpxPsGU7LsYFaN6dsAUD9LkWkxuu9",
  "key11": "43KDwawc33aAf3TJw8Av6a3eQyTcwSh5SsL3ewrHEvXzMYrnY13rWYDsa9HXRarsLNKB8BpoiQ6uHAqB2nUS39XJ",
  "key12": "525J5Fc9UnTXV2XpZpHrJXKKY2tV3WoNKxJEGp6YtiX7Jnh5vCQYYZcwWbcTKqgCXKMbzY1zSgfRK8jqoRSXKnVK",
  "key13": "4XcMLB6fa6poPBSEmZvu6JsobLUeNVKqUanrHEyShMooE7rq71M19KwaEjKun55LQbiYtfoGazwHSiAiSTsRgzet",
  "key14": "4QTUuUFRox67KCjobyG7ZASTtCEuik7DcRXZpznnXJUP4aSmmCscHeB6bwAQi9WJ2vPEDXKBMmgheDNRQ7zzkMwV",
  "key15": "58ydK4d41KJNrFpfn3dfcnDe1NsYCZnjvHHQoppwXZ5x1zryURjXDAhRu7w88touoCk6jRm4fBnsngibGxuCrZ9r",
  "key16": "5b7gZmuQ7E7xs3taLPqYi6H7dnPaJLxRjYHPg9ZE7HLRGSFdnY8268g6svZ2weRyjW84beV5akXMiPUJrvFw2HyA",
  "key17": "5ZPug4zf47B9fu5nsUY1mrz5cCmKGnZVvaCyjgeHGKQbLEF7s3NvKiRXFcDyZJhctSj8DPczJ5g6xocdPN7BJB3M",
  "key18": "rnCfjf8rtXkovWsh4rJu9jK8xUREHVbSTLEShAKyRfRQtYuzi8QfGueNKJEgWyAHvotnT7rJD2sbyPjVp1t1oep",
  "key19": "2GpB2T1xJCEcLtvkj515b8hvdKrKF5bQExYVbSvvspgHP8Zih7q9Txvj1jwe4Zp7sGhW883wpfqqh1xACLprhGBe",
  "key20": "DMFAMqb7Kx4DdSfeXhjb4hPCWUa9vb8ZWLApY13BfeyjEX711CbFVntfbD82vWttWAmdRsFzAySKX5xoffin7ZB",
  "key21": "yX6Dw7wQfUBin8k8ini2E92fBsoZqZJV216qH8rYJgVNJn7fe2vL8Gk9jDZjUto4Ah6ChLUVPpayDdpBsPsnrBN",
  "key22": "61Zd3ZDRDrBdXXUVwfzigLVk6XxjvWG9XQxY5ogjiL9y8c8nuZXRW5JnA9WzJXZYUgVsAHeXTnpm8Em2ptLDBpVQ",
  "key23": "5cxmywgG3E33QCPjY1CcboUsUwjvYkVm6hUBrLhCQaTSKtrF32ZAhhuyv91hpdimKP1sQe4XyeoYdLZ8PmNvRMhd",
  "key24": "5d7ww7fB3GcTm6FHyFWWPy7k1hCxqgfTamdpkQBWVJnhw7RnrvjBcEXXYVFibLbabWAtpoA5F5oA9neiNvaC226R",
  "key25": "2ASwSn8BRGT6aahdM8pfq3UfWGrAEcbZFAUarBi9YXmxyshFoZzLEsk8mGfFHWr2bPwgeJtFCN85EJZQrju6D7BM",
  "key26": "5JzsAhkgBqXbP67CxoDPmD2NuE8z9P57Knjn4UQg4LKErKqXL6UXuzKLLQaAYeN9F5FNzVSPxTxSWKQDBfZ6bC5J",
  "key27": "3FWh7Lc8zFG3jPKvQPjNkqrLEJP7yrVrVmY7aapJ4TkaFd8ayLbkeNBMhVAwDujdKr1TCFkbQsfKbXLkzwQ5b2pP",
  "key28": "3a4UdvKzC5Akracnm2tMS543PeB3GZ76vsQeZTmWJv1KDrT8vDiwkypBmk3sqVuFz4oqQsuEwLLv54oZKU9Eg9Ur",
  "key29": "3NkPRcux6u6GgVa1AjhkxyiWyA2sKbdHwu9nBefRXUFca6UqzWsExCpWjVhCHrW717baCb4GptTqKe96XThPfx9X",
  "key30": "5xcCzui1AyPNbSvmug6jCFt5MqeSb8L6t5sp9XSgYBHsVFjvJKAejnhNYnriEFh2PC5MRVMradVxLvA51pX637Xh",
  "key31": "52nusJEjP4bF8mN2pgD9TmwJc1dLaSLyzir2sbfo8E11dRQtg4L8ckUSuHPEsM7KLygjGwZx2onBdcZEG5GW6XGQ",
  "key32": "2GQ97E13afq6prVzjECMPBMzN8oJPUXtvvqjmQ3ym54bY5YEmr6yNRdUheqcCtxqWumda97kAdCLARkTQ5DoiM4K",
  "key33": "3eTsjZnyRkaKro8V9Ge4L6cDuLNtQGbEvFnPtGG9Yvsn7j6wZHoed6cSAqYdsQX9zWEjeqrQjHvm9qkZrBPXTpxc",
  "key34": "332Vjeg9nscgKdPZhCn5sFz2WCdA9YEi8yusQ2h15EF38tzxUeWTWWyCTrjiQREQ6DkwwctmfD6nH2p7xtn6kVzT",
  "key35": "54bqXmAzKHEyMtmcR4ZcF2eF17YAYaQmAw6qepVhnQze3duPLiC5K7as38jjZEg1MY2qJMjUp2VN2bgbdnYLGjY2",
  "key36": "22qENM5TWmSgabhosyXm8ew9CFRGyQKqDSwLxMzPuAb3DkKNFnDonS3vipo6j1pUiWPHxjBn8gMgxg7sxEXhkVuS",
  "key37": "3qSSfobWbVYZqbr82sAoaJrUwmv8G9joj4yixoirCqqhGR5dfcbCwnn3bmXQVDASNgQ4FM6JgP7yEETJhFgEty62",
  "key38": "27aj2UhH4dizsiSvaDiwDv6sQiVQfELmGKpk77cgjXSP6TJGEQiaEN8tEpEQkKySxUFZD4hJ5DCfZ8ZVUkStdoDx",
  "key39": "Xy5jBopJt4dGePoTnhCwTg74vUbBLAoCTVr4xCtMZkJY8RCNbYoFdW954vyU5kkhJY8PYUvAhZZ9vERZ2bbx7QM",
  "key40": "3k4fNMg9gtCpit6Q8R5d6CAPqaKGE4fWbKishBdjgEqzow9ofk6Zndz2662cJxvL9EXbPBhoNTTAQvmrkeosPk1S",
  "key41": "5in5TWa5EVPsxqTmfzMa5ZqQ48g2JUAJLGEBuzJNXtKZhmepNkns5pAy5frGZd8uqVocDHqR6gwveU15wPPs2at2",
  "key42": "5ryHzCJ6tjS3eTt9114ruRPWyNrtQfSRbdfj2aF195MQBwwkTkQZcH1UPFoyvZBhjf7WwK1JLN3YFkK3DZWA5PHw",
  "key43": "Jv16tB7G2Sv4nAD6ftvqffBpwcSc8XxTRwrLirU2RxGeExSFbJQFeNsnYTrc8P5xdgST1ruPh6E65318FSazGVa",
  "key44": "F1UBZUVMkeFtYQWKEC9uMpZouWtY2cchteJeTiDfJstsntAZvebzmdSgVuz2DFdYZ594UWqSDdKqxhvkRS4Gwzr",
  "key45": "2nHdQoaPGvrCx2uQnXazym8ZVpt1rK7dNyJkxBMB48Fc2Do94Xt6LKxjMQgYHKnuNK92voBbP4zCbg468uhPM6G2",
  "key46": "2uFMBWqY8W3oKzRtax8F1qwUAHqfT3WyRWYpQkERSrTgjH9KxRjUNaURS4TNm3Naj31GksNikncanDNkSBhyrtpu"
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
