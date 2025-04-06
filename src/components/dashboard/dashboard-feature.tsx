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
    "4YzsRcyLvtveqLLvnogE7N81QYf5BjECSnqrnVW27RwHf4bBUbxPqTS1QHo8nzQvw7DLdB5YsEGxQAHtvRKj7M77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tXt3ASL5PMa4qUJgphdqdXM8xsrjiKmPGbmXkEwKX9qBmUo3zU5ww3W8VVNXDRoJPF1tzRp5rm3qWWxd3K9vat",
  "key1": "5twpbSnyFrFjhRQNGD88YpTaXbMV4F9rnYRDs9mjNeJDgJqsfBMmzFvpypoNxtxACceBey1bUqnUhVwwPTFnCsCr",
  "key2": "3ifdp9xVSLaFYWrYqVEto5ZchYomjpp6RLKvwQELc9P8qtbF2hcKE21Rw3DTVExx6ZmqkREUngRGqCJaYs3FKYrv",
  "key3": "2HzGubtGxs7cZas8iDfh77KmH7KWzKj7YSg3L6HR5nyWXEFGiuzbWLtJDHueY5FUoM2T4DNf8dP8RxrVkE7BhGdM",
  "key4": "4eDv6jsqAqYi7VrnuJyen2VcZr6xYfwxgYvBBd9oz8G933BxL5o2gc8AGcdqHiVo9yE2uBR225e5uFzu5wzytgA3",
  "key5": "3TezPmWmFELUPnWvhRPgoWiQLtYs9HX83YfUsRntq7SyBeXX565QQ98VPs9kUbiaU34tc1n8Y3u2qMvFr4NrYcp6",
  "key6": "5fSaiMk8TxiLE2J75NwhZPP7JrZsX7pEoJCesdLytmYyeDQGTJZeB3MbGJy2cANGphPxsRhVocwGXEWuAH29Hs5e",
  "key7": "3dZsy13EAbv4Su5vqXWdU8jL81KRy6vpSpH4rRUr4hUFtY9J8qcoak5BRkYXHd7FVej1Lhr7AmAwbYkiW7DsYv4w",
  "key8": "3ppzSrC7jMccBjrkPvFoq4AF2tT6Qcxh6qFkd7G5zSorQAS2wARvLtpWqiZ4JnDrNy49nAnEE7UPpaie4FyFnZ7k",
  "key9": "2NPNoKi6oMLkQ5v5qtQe2rRrecvw1r2uBsRzpUZxHbroEhr3xKV2WFx5NErTrr75B21xvEc471DwwSnquqMVSB9N",
  "key10": "4HfZ6DSj72M5euqKXaq8XoyBspeYpyUaJP4XiTf8PCQiE9fGwWdjXHsytDp58gkiAeYeJcbHKR8SRgjSmEAeawRz",
  "key11": "Hh9XvXGoQBbfKFmd83eeP1iUunkHTSfqprSYiC2GGMJVGgfqEbEJ53rrUrgt4zsfVUz1FuBmQEfzHPd3onf4cMg",
  "key12": "2y5eZt73SUTUKTJ7kATVZCFYDVBiS9ZmMkzwtCDxrmZWEKHtyQugig1B3XN4jnZMAUHbTHSKTCmaQGGcasTGg44Y",
  "key13": "3V9ihBwYVDEEdJ1ar699NqT5kgsM2Ffb1ipwiCE5QtA9xjZLFizEz1oJoARhrRmsbXXPBwiqBmggVmcn6L7yjTtA",
  "key14": "2L47b6XQ9NBB2y8EAhRVYYh7N1SrGzmcTiugQPqQ1Bj9HegyerhvouMq6mNmSWmwy2TY3hMmMqjLhP725y2XGU73",
  "key15": "53s8Z8aftpbFZwvN3ynDtudQLmb2NJcR24Cxt7hrExq71R8h42A3JAxBeSmnUbQYbep82GhEh65icymHuTbFrAQL",
  "key16": "3qJnng1ZrSyA2nDexQUBnCS14UEMr3gZdXSn7boZ4nDwyzVw6qgHV63UhRWy72Qr58iLMK8t8Hn8U2kdSpHdC6xe",
  "key17": "wpe59tYh8gJamiwt3x7uBNL4nGWTrMQ9bUjx342Q5yG9gaeMTqhnVAPtjXadtvNkg1ttjVRBai7CQTyMSabTYjV",
  "key18": "QwH3V7kvDBP2y76usx1dKvfvsdyaGt1iafoZshdy9iMhY9uQkM89RQJaEn3qPig2pYxqFbBFAF5v8u2v3SvH7tK",
  "key19": "MFKdjjXKHaid5ZASsSvEtgmuJqErbGqq2qHinCV7nSWBP1hDMR6C29PfEYKah5YuWJpHUmNS8upNDiQhPXi3gJw",
  "key20": "2nQ1MxU94DLRt53uqxBXkX3rZwAscBuotXepm9HEP2uH8j4TcX6ziBEo6pVq2iMU7cFTTjJ2Qb6paVuTMM7HJJhg",
  "key21": "5MedN82VzneNWXJiNkWJfEqdquk32a9dXVZ9De5AQQMvw9hpm9bAN1SkDvXArFj119zFVebcQFTxA4nERirfMABs",
  "key22": "49wgpkaPDSZkMNn1qS8DzQHNnYUV6YFbcy1E72K5Z83jjDfCfTucZoxGNUZiNUVSV3rsWktnxKf3wSt5aHcGyFwS",
  "key23": "3MdFKASsraT3LizHqirPugiMrHMMiX6nxJn7UrH9zDp4GWhUrwLb1ZYxkg7reoUBQT22zGuK3R7phFB7xWw63ppX",
  "key24": "3htnHofg3Ffhfy5phZ3nj4LLBTTGpDFkGpgSE1uN1jN9ufFD4WLe31govsxpN6H4jfrSQdVq3MsU7csLTA13rTem",
  "key25": "5qpKrzv8Jzd5QokuxWYVWztTVXa8QynqSAcqv96Fsb1ua7mQVXX7nG1U5RwRoCpERA5WFs4qKybqxyGDpkMChE8j",
  "key26": "5it8iWQvfcovg6E6EAEJqq1qoS5zS8bJXzp4EXFoYxKQn74kyK9CY5t1Y9G5wWAiQye4sPhzX8rqmo1CDUxwwuRp",
  "key27": "5eHa2b9on2HEMfsw1aCiVgseHMMe85oebX18SPXLURKMzpLF7Szpdztr5A2G6WGsuqAXwL14LnX2u1bg1YfiC8a7",
  "key28": "4GrBf4DGEq6vii5Eiah95RXrSd6xoSYYwKDF2PzXSq6oDWuGq1DKS9YsRS3Fz8L6an9Vjx6myJDCUr9Azhroz52y",
  "key29": "5CxNKckb23iuhKyS3bg3QeYSWGtCZ1pTSiq13aKFGb55ynd9ave7H1b2a5ShegAxLcCkcDuZwdcLwTMmUcY8daAD",
  "key30": "4wwYCEwNXAvKdAWfJDZ8bHsmbZ7AY5t6dkqBsMcgeGw6w3oKN4EyLAw1r5JSqi7TnfjEgN9bFQvg3NA8jortCFc6",
  "key31": "3GBv6VNxSyioL8xLyvPdGDDDAgxBkp9eYoikWVW9C66pRyJB4AkGzGWfvkdbQwS6ZSqaQ63j6DuxyMNDqY5sS7o8",
  "key32": "6MyYJFLSnLJDg85JrTF6LAPQ1UB8Ft4HCPAJzxeUmcpJRj69rw13yyfGfwUd33rqdQbpqCRgxX1Bm5sTDjZogde",
  "key33": "222U18LTXHnPgf2NtiUDYnM4KQMcX4zMhGqj7qqXt1nTRfNtWs1gBCWZ6yR2tkZWS6C91nK5ZX1iFkHGnEbtYb4C",
  "key34": "4EMfmLyoA5u8dVPo3dzNm3JCXm3jkx4TFN3UE3FqnzCgYeDsq2qT6cCCesDc2vFP9JmAFGtVoYtDn574CZowgvQP",
  "key35": "2yvkrPyna8jZmYGgCHiS8Jzvj4ytt7uG1VZZkT7Af8qAd4cVjZu3fxyMNBndQudfJPv2aK7K68NbaD8Uz9R3vtXE",
  "key36": "47GNJPinMMoRKrkqugjt1XticcSDpErSpFRnjCbWGaePLknPSWPrvu3D9K3zDN21LjFfYZ2NyqbBiqnLNe1p6P3g",
  "key37": "58RGxMRwFpeZXMtpVHm1MkZ8DCNSY4Dewqgv4D5z1fAQdVUAeBPjBU2MqcEPGtMBngtwEoWt4efkqgqAdS4KfmaU"
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
