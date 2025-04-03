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
    "324YTMPyk8JGwiLP4J7XNnhLhQAzcsandxXWN18yQogTWXfpGyUAZ1r9UNphXxCkYh31F1jtfqTe168sFQGtqHUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrUaiVYLDwhYeaJ4GRWAAAAEz6hkBsJf8F17N1MJCQYxqJGkdg82A8ueT7uDDeQxXVZPSS9Y7sX96jffovjUQK5",
  "key1": "5V7MUHLf2GJS2jw8ujhKFoGnZuzgWxQUHHz1dRkuTh5TN97QxTXWFBCFebFXomRfifFES5KJpMNRztMt84581RVp",
  "key2": "4riNJZ8bFdcdUTD9YbEUyJMgsSwzctArU4iM95aFiMLzihCUnKGJ1QsaJosi2w9Twmzt5qtZgFQv4XM64rKANbE",
  "key3": "3XFQHsicA2p3hb7T4XaJZReUA2SKPNUin8QCGchDrMSRgc1E8PsPCv5qo6mRA7b8CY9NVAUhEnmKzyfjGbxfXE4z",
  "key4": "5dyMD4pj878VJyf3uG4CFdaEFppadHTWXTJym3uuuu3QHGcYdpNABrsyR5MLU1jj76pAQfx4qWotdS3MHR3mU7mc",
  "key5": "2xBZPNouy3YP6HqvwhN2nDQrq8T5bFPwrMTKFhg9vMVtR7Hry7XccUdU8e4qs2sniGvGizMJr6g9cTBETrJUMjAh",
  "key6": "PB5ujjNSUEJ1pABk65Qo9Ef6nu8YJejYt68wYGBNmij73jiVhqvkQS76UeKd1KbtAdbY2VbE6QVBeYTZeSCn3gd",
  "key7": "5yAwxpUjZRzaM1RZkMnKSpBtMJis42nzK9gqKKnxPWuKTRYeNEo88YjVqL75bnKqayx3KdVr46DwaBqeeZmuKHvR",
  "key8": "64hwoyMCs67kU5fTSq6KrQLUL2YgV7pW9STSVbeFX8W2A51CBFKC41vmXNXtcGcKrzqLzDyvqiRP2yWTDnP1zrNy",
  "key9": "4AH1fSL8yehT8osEaNiiBxHHV7wgW1b3QeVPo36fiiSiDxt7VufxnKeX78uDuyNpvqxtqvF9hrBmDiizPBHVXhRE",
  "key10": "63zm1Hc8LxFukCjj8bwWtUdmb7YTQtQDv6goZuZBytUTKhQNjziQw1wMgWzrAsevLpm8pcQs9hDYcdLMfZfAMZz2",
  "key11": "4q7HqLR2dU99jYdJvDvhecE5Qii1KLtY5A5nSxdRThowJc4mvYUf1ACkKpw4zhjE7iFc7pGyx2mmfbEoqiNBVoBb",
  "key12": "qgLPYK3qKC3ME2XhLjh3Sum7M76jNihsz4avaT95CnxCeeXHdZxJT2EBdSNqcrp8FiNDM661F747upJS8EtGDz2",
  "key13": "3J5gXarmvYL2bs6WH6wLEJAfGmXcKJC9RuRC3FzB3mN7z9WNDudFozmTn78hs2dFB9uXKQpzyrojdWki8yJQF9aj",
  "key14": "2yF29Uduaoho9NnfDEaZ3kL62UpnSeHf8jrp1QcxzmnTtfNU5fxYpE2avPuyJSqtSbjbcMZMNBeZoDMXGeNx3b9X",
  "key15": "3M9TDjzav2m8CCwaF3DJPd9X9pZJej65Di6KL3UL1R5tp584i9sZ6LGLY5gsdHCXbwNcaShUsZkmUmcWZoVQRjzj",
  "key16": "kaDEtJymuh2eLxZrT3ypYwP9kWwkrr49VMbPcBApwKHpqNYY8x7jWYJeKdX2XG4GbAvzYsZJPhYVFy9VHdzD9mg",
  "key17": "3vtCTsh9TJSF3pE2mTWyt9Yx5L9EnntkuR1esb6pW6Ak68JFkRwgx1fX89QsPeEHQqLLtkzamrtVZyPRdkeXST7P",
  "key18": "2j3eBoKb8syA5wt1uNYSdoUWFNGfge5WDJWWZvp1wgcQMAa3krJ3CHfw1oTLzhHmk11eiZDBgxDUc3Fz7cFwt44p",
  "key19": "3B77VRYcuFNXEmxfuJeG9XQhjUdtHe3Ccb3ncUjxueBLCHP5vXyK2eMaDsJvj3QSasCbPjS71zupUvBH2MPdSysD",
  "key20": "4YVCFTtZx1n1dcHTKhtUWVLxZnfZHSdy3ga6tTYX5v5sjzX5nzVbzGbTb1aqWoi8GGWVGgckcVEEgUrpDaRUewQN",
  "key21": "299wRZ2DcwLjdUZzEnMnSUHaYNH4kEbV9SoAEij4rSGHyrjtQihooNU6M8bAMSqZHQRBJ3UKBDwMTwJYYhqvBSYm",
  "key22": "2XYwGNCM97H1WpFspmdpwrw8fd8ADUEEX1nxLn1BnrgEJCd2ba6WzToKrxmt2ip4tmQ7UgT4jdswLfhrUjTtVaRp",
  "key23": "zkNV1uCPsKkNU9ZWYUqZ1auASNJKQFwdA9AWPvvWPZo2JpjkdCqVRx2TWbLx9vFcVoiUGM3oLg1TyF242YrZmU2",
  "key24": "37UMNNHGNjJTbr4dnvMcP4UMiz69wFJesF9xHwJdGykKXDhVpLQgSVuPpWUqWeX6t6hNz3MR3FnUWZCkAzJo2JDy",
  "key25": "4UBqWtmY2jQ6TREyRCcNRVywc6X1jD4GGA66RrKyZedzRih4DSmnBSZnhH2W7XR78JhyqRmWbARvRs2DAiiaSdYS",
  "key26": "4HrFTKGyFDrHiekXm2jQVSs6qNMmdMpdsdQLVPHvj6KW5YAm4Xj2KnTATMnY9J74jSKt1WqswChy3RFuZfUEq9n9",
  "key27": "4mAqKuwJFWXDns5DQFyvyqxHhqeH4k4DbSsRWJ32yprfVM2nJeDXDkzPYpqBktwFi8ky9eS3RqKCc4E9kXx2bxF1",
  "key28": "4MFKxK4jeRRKboKbJAw2cHPUYrXCdkGwaGAgS2n4T9RrRfDsXQs8Qn3XFNqNtdBfqANiFqzVTqir76KubDuUEjvv",
  "key29": "63vXz3XtkuDp6PvrqEFfLqjEcQ9242ZFQLLZ8Af9YAo9naGXu5nJiJJBADTckxHMvKVVbW6oEzahT2FeAW76NVFp",
  "key30": "JjRxUMx2nKiDakVAJLnaX9JucNoWFDo4e1gQnk3BxfsAcqnsKCZ9EbPEJMxQRFUfUQC9BnZgwcGZK5XUxjxgaSm",
  "key31": "2Vpn6gC1mreCehUYi5DAmZwvPD5ukaVFgrKqcy7JzrKWjPkab51gzhEqkGDkFGVJaiHSMmtj86gNy43shhcxz56C",
  "key32": "17Ap3gkWQmjDBge5uCkS3685rLwTiWJcQpaFsicHGQj7v7q5J8P2v4tQbjKGhwFXm3fKD6FNVNMeLD7H3bG9oKU",
  "key33": "4mm9gHsj6QLEiyvdp4Tc4Y7c8u52zq2zTdRF2NauUqAbCp1NTebZ8dGSGrEioZXy7g8BvpDkTEALPHkkm3wh4WDV",
  "key34": "529PCsqC7gjHpCSJB2bqUbH4PuasxHizTy8QSiG5mJVxtK2V6S81TjHBQMtMPAygcddwmY5FZ6Ye5BLfe3kEm3MJ",
  "key35": "3bQZXshnJApG7nXcVcqGCWgGtr9hubqf1CYrPa4vwtCDNvYjVKRuCvGbYWAKfNf3FqaBLWtiVc8bMb7UzQM6otPB",
  "key36": "4SRLzjAK4JtYg3TEjs9etqFvjgjBZ51JoXC3zXsGwSTfqvVcgNBRVp3Q5GXx2oWCddPgWjXwrgvDoYh1emsD7PWS",
  "key37": "2y6iQRKyaRiCDstfzacZ6HDb4uP7gMmxgv1ufg8FNXANZNGw6ukcVKeMvr2XvGW6FdCm6v3zCrZt3kFXTiVt5MoT",
  "key38": "qzzMAxDiwB1VLazKCw64AmGD5eVQnELN1G6uhM6XNcTUNmV4iqJHj3ndUargSxhTZwVM3Ww9i4a519vmnu5eVdA",
  "key39": "2YDHonkPdcj3A185XPpLhwihinPKCkGPsHwjV1AnFY4qThghEA6ycvtJVCWMgv2WyKjYeCcrj5ifEvKd2yQTqovV",
  "key40": "wuHwjGGGDcjD25vm1Qd9SFA1MUjQNarRzfCnGZzbs3VjcLHytAkF8vEwGyjbnV5mbtUpdoBdArLwr5XqRjcSnzZ",
  "key41": "4KkGeXaetoPUHSc9oyzmGrW8xYFKkBcGysyYbgBm9HN6D3p9Xdi2geFD1fuvEUsYo1P7mVFxrBzJG8d5iGJJrmKg",
  "key42": "4uRvZqmYphsounBKign4UgXXR7cpoMWbMRHE8qxmGcVHT4BLdsr8q5Rxy1R5ZhTGd3q4ujG7VHLqBHQoYxu9oukZ"
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
