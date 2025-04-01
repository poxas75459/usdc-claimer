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
    "4DnMTVKphKCiDtbx6tAP8AvY4wTR8UPBB8NXLQYJn7JrqVjmNmDe2Ax1CPzKhFTTs5vtmML5DZQJYDAfxNKqeZEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWVJYHb9uQcgksfvqVQoHpnJeKQjL3VdTsPrV4Nq7ZB1v28cZCj5DCkEyuB8PxVW695P8DvpL9QzrbjhHaRyAEP",
  "key1": "5zitWNQfw3GS2iuKgy9tUQ86b8uheFBKxiuvr5jRDdcv7DnEzJxNA29traoejDQBHEzfUKKHsMV8mUuTYmG7AWKp",
  "key2": "5dHjN5YFsFkLg5x16MXAX1Jq7BeWoTqjqZmV2GPHYzouuVWD7uRHkZg8SGQt6aRMRLkMWN3LrAihKqoPPKEA4V5X",
  "key3": "4D8kDEh8HgR7N31rTJAsxfE694ZNL3Z4uLrTKNr2QzWrtEY8vRG5FEMmwzeEqNUnKMknv85UazRAXctfV7Q8SVck",
  "key4": "2QvL4geuo2yci8hthzb65qvB1XwevWryeg83UwjhajT9TN8U9B63KR9MVAT4hJTnm2y9jmZm5bhd1P8uuWx4kn1z",
  "key5": "3b2nK2ZsBuK3fVjEAVcqCZUST9w7ucBUasPigZtkizAEcDcnrECp4icBo3LLnizBbqj2SzX4hMcC83meCaRsvLD3",
  "key6": "5NMYdDZRmVLym5FrKyeTszKZtCAhqfRjsR3xq3VnP2az8FGRLaXosMFXbQSJUf4b5UnEKcUx4KMRj24NoBnT8Knf",
  "key7": "4PoUhucNvmDPoSARsJEsBHsLccCyvj6gWhVL2VreHEZUQ6npYqbe6LdX1HYj1dLLwDTqDNSQDU4PPik1d6161VAj",
  "key8": "5dMG8XbeXmdmVUQzDacZcPeqKbTZXqFML5tAxsppzivQkBidXByAPt3V8CYWDgqXkTk1oy9oBtHrbdCRgcb9zdEX",
  "key9": "47d66cKDaSJvrojNWtvjJKHCuGPbCXmDzqxcMUYscqrtSFMYXRpLE3mzRjJdT3GiKzWogZaJtYaPgFEXLycp5BXQ",
  "key10": "55jVjCqxtYZ7ngJFPvjKHTN8TFQjMoo368nPgusiufxUesYDd1Wo8qKe87NpnsN8RGRd9XvrNUpdxAn1Q1vbHtRb",
  "key11": "YrAbvjijnkupCPLfTgiDCSJbbN6F22961N8Z5gGAsV8n5kn9ByYfujsPaK9zPEMGUmgTgsNbnFNdPrkPhBbnw7H",
  "key12": "24ZjJX5JrpuugFQCi8sdZvvE1AYzzvtAvSd2knN4QR57Ev7ozvJen3C6tdKHEawLfG4rp6u5vt8m2u4ZhZGpRvU6",
  "key13": "3NmmSHQexm3hXaBqBkUpcyKY5xJRSaoueYie4SqZyv8TgvAaKWJyWRnC8t2iQaxXZWXCtTBfyzTWxjay69oejg7",
  "key14": "4sJgtnP3RMcqTtWaJBedRr7doYVTa7StjFYFepwSfbkjVTki535q5f7eNZZ9V5hjF6Czt4KkCZ8uvqh4utFsMBB5",
  "key15": "54hGfApVMSZX4rWuevGPUXwn3QeDusx7xGZPR2hqbcpyTTiM9jbEFHwX8QXH62brzvLePQWCcN25nbjdDpgAidv1",
  "key16": "3ogtynceGXJGR7zoFb2xuD8mgGovWhtfcfRXNPyswV75KLdqduGdA6nWm5WjYfJHDUMbhQA1pAz8GyuHGv6JqRFU",
  "key17": "TLzfyDgeYu9JX8v1MLDGobr31A9CRWBoXbb8igWhtDWcWcweNThQ1JxcQXsjLjuKhT7EA7QC4kBVCJ8zSFFXkzs",
  "key18": "4531SpEzczePemAqZSXM2fhbcNrNHUtx8Si91D7DzP92xzmQvjJbCqxYyiBcESgs11BWhGgMmnusJ9dgi6z2g4dJ",
  "key19": "3n1TbKWX27c9YtzaosKPGkmaBEQ7RzCrr6tHSisUFK9ApG33xBUMiSZ37qdMhNbfzSccCpWiLZE6Dyb6vpW5TuJf",
  "key20": "nzUHSGCuekRJ2DsE8YL5Nupa4iu43sPPnUDoJV6XGLhbzuaqjXDFFhHWaF2cGrYqi9unCtRExAaB1PVX6w3GQ3a",
  "key21": "GpZtCqMhYhLbbQZjwaP7EChj58f3sN22aXeaCpPLznBza8Ewm2JFHm1KzAyKoZsRgL1nBQHPTJSFGMiquACuWwr",
  "key22": "61gUPf4ypo2mDJAb5d9ZQQYucQkQLpCgzS3ztJ9nStgo8k78Zh8PqTqXyfbv9ckuV6ZiZKYehcSqdpbgA4u34hax",
  "key23": "4C84TEfP4qEKBazt5Lb4afQhsh12x8nuzrAonGr5oEeHa5KLKSDATyLkRzgHmBLAkWBTzsbzoUnucADbiCnjdvQ6",
  "key24": "UDkU6HfAhjR6UzUa5QFeu2BK2xeGFs6Jjf2nNSbTbdBy5y5ouKWZjokKxBck2amucy884UFBGQXS1EfEbEvxRPf",
  "key25": "3cGT76FtdBGEnVWJxNmf5KdRzPrEGzWRrdW5ytWWfMy7ppmCuNNicqguFgCESwNAJMbEBoyPwrkjXZsUwTEKvTw4",
  "key26": "4rrzb4CHjJtp1mLidWmiRgN7kktYjmAmZLbGDZcGbU9HAuzb3rdGtdwHQ3qZpnpgid5Ku1YFYaaodeJqSsfFtmdr",
  "key27": "36fnfVA3zdDjvLNB1HeTMHSgahKPxgLLeg8N2o8YT3NKArCNfixeJyJgv4UmsZZ7W6FLwXQ3fDFikiCZDzwu5qcq",
  "key28": "5VFBPMVkPJbq2CQT41ZvWRsgSarzKhKvNwKKcJN1mj3bNXPthoaipkXn5gfAQ6PydmE2nzgoJT4PV8fLjsQrEs13",
  "key29": "3MhEY5evfMrFHg88atp1pf4Uan35h3bWyUwkNLnjac948MKKopLfHvXp5KBLV6kaUK7Wayr8WqjMxJ9pqkHpiCei",
  "key30": "uWH7sjkcsMQBQot7w4RnChQp1mBcu2xxviWkEtgfD7EenXo8qndSoQGqDEDF1PecR4eyLmEqgWnXndsbev9aazJ",
  "key31": "4zz7jrZCr1BvoW5VARnRL8Sdb267yFobLVo78vi2FBNnJZwrGmpmN7SGQboNnatS3rba2ysGQmDX9fFfmpjYDZtz",
  "key32": "34rtDY2H4eZbUWvKeFDix6gb6nFRHtkCkrkFipLWoEDTixp3GFxR7CNLFDnofC7M3YSwc1iyrGpTU8oq4pEEUQ98",
  "key33": "NrYQ4tEA5pgkTuss8nhbBopW65cTUjU8wfdxST3DhyRTR8Lx24bRajoG1PKHRrf8F4nUjyvitmsJDQyCtmNPGNG",
  "key34": "617PGMfuK7FCez9JzqMboC8RQ8VNpjvgryWxkgGhgcv9uKUAbrHgJpuF1zQVukes5A8TZXxoeqJZzZCX31at7Ukr",
  "key35": "46ABsAyTAzLADra33MwmUsDHNnziMekEuVS6HbGPyQc59i4G9xTt8XKAfiigNscFomDxLEpme2pLyqJKCzWtTYyp",
  "key36": "56HxQJPrjwiUMX87PsvisMvVJvG1FPB9Su5kzrCakedumcXivfXAu9Q3Yb4NnzFcZbKa8Bx9T5TtbhyNJCpdSmP7",
  "key37": "3jSv4Fyxsxw418qUeDyEqPpmS3mGxfsUjSmbdJCynqsPRmWNBCYN44sgrwxF6gEhmaf3qvdWMsvFRqaRTENtAXQJ",
  "key38": "xiAPX8AaW96uHuZoP3QZZagfGWqZPrb4gHRuhNYQ95m15iNhUubx6A1D6YmJCX4yBQe47pwQ2NtLZuewjvEHRVU",
  "key39": "5bPZjtDbwhRmdnZpmraxPKJPG4mzwpQExrVBGf4dhp327uLNEa9jfAuNzMtHQxAy4kAKAJZpaSCWWrVb4A17ig6G",
  "key40": "5pZrpPEExropk1f22T9nRdTngWsknEVGLoyTdDden6AZz1AAo1PtT5WXTUVRQtbhfBJ1ZGKufe7YCytNZD3vuoBy",
  "key41": "5MdN6ZNQNrxqGdsmxD6YXk5aHnZcyfUQVoyjfRwNK3oAWvb5SgSwTPVfvvNHCuPhDHFjXiFusah8PZkdetppX1Ca",
  "key42": "mFX3xLMXtTnW2mGnKRZoDo7s3kt7oXB5vTxur8fBbwdWecL8QhMUhWrV56Mm6JCaiPPWYP4628sekrfdEDg9rQC",
  "key43": "3CjYCZLY5x4zjFkKSfffDYALK2Dobis3iFQjht2AqL27vQQGGuHbdUC8xzDJ47u7Mh4MKF78J8gD9Q4DsFuaCxNB",
  "key44": "3zK9NbNvzNDeGV6QG7H8yXM56NTp28FMz7wmCcrRZmSSn4EMPAu1dqa4E86NRr4WJPt7v8r3RQXhr4w6R9kpWkeS",
  "key45": "4XMZ6n4HBT8vpEduc2jS1iELBucrSy4iwugpMgztYfpu5bcF6YGP9XFBpZLYH2VW2STczpd4t8mZAv9xkGRNr3JX"
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
