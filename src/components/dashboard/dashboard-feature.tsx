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
    "2qyWyzDaBTjhNbqPZh6AHJFbZwhbcCa4fMY9HkZAx3J5JmpzzVBq3gmwXjpw24D356ciCHWncnuMxkEZRp6Jygiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qF6R5g2RV3Qzjro5WkC9UiAE2orsojpRoNKeXNReZ1qYBTWcJzDHhqPJi94S7KNDAfDujxxGHL2SLQ4HufNTRJL",
  "key1": "5AgUZcFs8PnXWXoVVDsm5GYcuH5xtz7YV19TEc4QwDwmJxyUBvLD7YZUPwrHDkKGfuWhmoj37vL8yUFMFp8SZrJX",
  "key2": "4SJ7iHLDomZPrdaJT7vNtstxaHqUQzYzVLcDkDQRrXSrmPE8dFuk9zmMg3GPudbNha1HP9PxZEUMT6QvLR374a3Q",
  "key3": "LjPb9rA7NnkDaopjCAu7ZbTjkdeFzxiqGbb8Ppu8TEkEv2SAP9LhcLbXMeBMEvFexzSABjtX36x33kNunmnoQx1",
  "key4": "ttAe8uHuhVcwQQ9aLr3tLhivNtpSvSZtADs13BWnrCKunXotMHhc6hFHjzT35mXvL6y8M4RDVX79Zkxn4gUkeM1",
  "key5": "4UjgWQC9AvoRGjhXJ4kQkGiuu5EnpU7mPgSCzWVg2pt4gGn5s98bqzNKUKnFyWivUwj7Ct31YsTyDZxXhhzov6mZ",
  "key6": "WGJedJgcWapVq1e16qmPxVJ345APLmJriVvE2kbZnym6LiY3yrMQTSiGJeQic6Dze4cqUiSdeBxMGKgTtNPaBsC",
  "key7": "58bf2rHnz4CLXEVga83hmd1QBqdJTXZ6xgP4vZeijdsvtEQ6m8vQm8p1SMyqfWPWqYGUsfecXkiYEGEsKMMMKbEL",
  "key8": "2J9VpuECBKUNHN4o7KMcu3qaUjcds93Ecbyq2KCmKjBxSyeUhTnkC6SYS2HozG3dZ59gfZGDBMYE3rvRvqFCjgyH",
  "key9": "3VLLvtBuRkAvxR6KGGY5qfjzUpyoEF3qGm6FASNk6EFJaj3M47Kpyz1m5gTRda4AXk2eni9J4ZxpF5D9PMVfVJU3",
  "key10": "kX2Xy1KFfRVPDai1J6jKb42morekaCWoHpwvdFvYxmwExDM6R7QeHDK3fqWgbHiZKzfW3XjfyJBHMJbNmXraJFx",
  "key11": "5qr8BWkWKMZPs8tojgFYaZHoaEJcBVkLMoqYu5MogeHaPjBY4EVv4k9A5YCmZzdbyNVDABLkPuDTV3Kp8rLY7BJS",
  "key12": "ZS67rWE1b3RfSR1Foip9kbrM2VDa27UDxi22gZZFRN3X3opXk82nNizqu2mtB8qeK8HzkW2whSRmgNz6VhUq53U",
  "key13": "3fYDRw8JurjPtR9kAqmi7CTK97eJrdDxhTaQVx2UvGuvNkRfcga4zSpi999dN6joC34ah7y6cYZe635JvVcSPd5K",
  "key14": "2aT9TgBC42HPkJsEzt5CEnYaUbBDjQ7tzFR4NLpKte6pcgbFSvDh2hRbmSF5BDt8aE7vjAgy16y8oiUSYktSFuwQ",
  "key15": "2UWGmq2fz81MpqUH4sstRGCWuFUtgKJRkLKnVYEn4W1oniT9iqkpva9m7zq8nY6LXqc8CbS8cST2uzRzSobVgXuE",
  "key16": "5sRkyPdCkGVuiKj5vLv9kazq5pE3sjgLB6V9E7hDaZxTitTCZwYocyrgj2JMuAy1rTb1HExarouFUU5NsFdyXTbf",
  "key17": "585BPsF5Sp5oQJ2Bf9AfsEPTjpdDLwo8RqBd6c4i4BgRebFDVrJfPiRgtityKUzRbNoxvif1wXFJBYYHUZTJ8VyS",
  "key18": "4QpqzczXQfLh6kq9cpkE4qVpX3nN5BwtwhvGL8VnGZk81ZGGYvWeuo6J6G3gNP3DeN74oprov393whpgpy43XGtG",
  "key19": "5QZqWYKZThPk7ZKG8pyVC93TRLimoZP8hnEeVppXz3XLCXw8vQkHRsrynvnXT6yKJq1wLoH3qzUBg9rkk7JJ7oCf",
  "key20": "3AgVRbmf3URVEtMJHMKeizP6y5AxZDWRsSiizyaxrCHyDHsrJa6xsPu8PSYA1ZatQjVD6hT6RygG8xZ5kFbqyfq3",
  "key21": "2eAnaksSNHb3N2GgeHbR4W1dgW2hWGe6uVtW1s4agVcaQPjX3VMQELKLQi3s6UpT884dxueMhYfqTECMjaobfSaH",
  "key22": "3rLcKuQjju5bgENJuDQ4oJDNoWQN7qydJJiJzv1KtPbN4y5W3zQtmVUSe872nDT9dummLfjQ4eyGV55phxaM5iK5",
  "key23": "DnujP649ojN95WwYxEtRQ5Vre8f7EqcEj9d1Cijzx5pJuMwRXfBMcBttQgLP8AzfozK2NYfFuKy4YB6fqTaJmGB",
  "key24": "25YTWakXzpFnwe2mzyEbaJ79WEWNAR3SuZmXtP4TWddfKxfsDJjPwwiY2PvEuo1rykYKt2BRGwvZRNYNxHDswbWR",
  "key25": "5fSxroX2kYdbZmkS8ALukNaxmSMeMNvb62a7Lni5tj8hTBc4t9uoK8TFsRYu5MqQrrHGiUw9yjaaqdbX46SnVhug",
  "key26": "2FTajNmA1wgTWNmr4wPwUUxhDBnKnXsNtHQYU7bTBC4oVqtKUVtPNuB3iUXvk28Enwa3xBDu8c7KShyf8R3C5Dbx",
  "key27": "42V9FwSyeP7119a4vpvrofrq1MQJLVqewGJ9q6YWg6LipergyddvDWCY1Me2dKr7QZxzuNN7iMXc6aWrj8fHDtV7",
  "key28": "5BMzGwHrzL8hX3BnCDDtm7qdP7Pt2iYBJGUJAELB9a2a6APW8GoyL8xLHUy5kUncn6FLsHsi4MesURzLZXCNqQZe",
  "key29": "gHHZvVmv56QM3qseWhorYSUYq2G8e7U5o2FQjmGYopJvL9nvKvhkPFS1rkpoTLf2JnZTBtvX8atH9Kgdz4QoeKw",
  "key30": "5GbSQgEwAJ8sTJGifjVhbRc1bVTKqqzo8S2pfKdL9eEcxaDnLi3h1tA3dqXkMXptFdnvyJtjyoSMkR4615vtqcm5",
  "key31": "3Hnv2xPQ9G2CCm6XEXVLcq1YqsdxHXDCypdwUi4VaheVH4UYm9nfEcUWQQPpNrR7ViXgfNTx5wZ4PDoqt16HzJZ2",
  "key32": "35qG888RCoXid5iRz1HKhFVrbwfg4SFm5nFXvBxKmPReCuFvnE3xSfv29gqwMTsqxnrAx1odMVssBCSMVueb62xj",
  "key33": "2E6ncsX5uTd4HhVboiEugzvWF3AFuo1GFaeHCY9J6KT7TAAkdjeCsQda8xRXgmiBLaQmhn4JCYfethiT4UAkETV5",
  "key34": "3siCD4NMje1mpUxkGv8kScfWVZtZXSA16hnqBoARzZiwov8t9qsLgA3dtc4ijMZMxf4ghUavoJkfSZhUeD2vE7Rz",
  "key35": "3NRKJ6zTybBEMqRcWCTiiz6WEg5HU7Jjj3VPrjeDfUowYKoTPW3KLaRSBxhY4eJydLK2HTvDqvTjH8dAMcG1TLG4",
  "key36": "3kSfR1HRKzT3WSMGLYDDZY2wpNunGe92LPWwTGAxxjsKxcdMkyny5i19PBhFmxgAbBf65tPgTFbyw1Lr5wR2HLgG",
  "key37": "2qepiZL7PF5X3nyYhSAKCRhWga19HYDdsPg1shCtp7UofqnWWYgXsEJ3FJpNR518ajQNu2eu4QD5kbR6sKdpe96o",
  "key38": "2i759eeKXc1cABtm6mVHhQDoCrezhfoY4Y3UDAAVZRUpYHpkpaPXMJEvYvy3WzLBhUHHMsujrcQA1Tzx47KRHa3U",
  "key39": "4tSJYFCvXeS3fcYeeFeXdbJjJcPWEDy2XJ81PzpGoqy3PbmTLmJbeTruUfLYrRHFVfu4RYne28TjwMTNP96hcWZ2",
  "key40": "4KX4S7KX48UeZqPWJQjHT4jHcYBdu6iGwZjTikq9Y882b624dazv1WUv8pxVMYzAMRKsacbQerrQisVnZjore1o8",
  "key41": "mcgTPrs2cKgX9cX5hrFbAW9brcMSAzzBxTNez1veygNfEmEaFh71H5ZSvqQE37vhFK62zwc9onLrMV2UMExUubZ",
  "key42": "4tohuhXT5fcrnY2wbKqYBqJWPDnrGkWAQpPLd2j1dCkLWNV6gJfbRVqzsEbEuUyNjb6zxTiWxZcGrtd5vPW1q2UG",
  "key43": "3a2xa1cidd6KWWjNmmy2suqVfZWEbPirjMQAQ7njfJ6f1SV9YUFuLDEYBPmwZgZrPqrTqZ6mw9kXBpMFb8b5YYR6",
  "key44": "2QvfLx63QQhddwWKs4JVUXAXWtBZ2Dzgm1ZUbdZRr2F7o55zkEUuGcrNBtw6E77qPAwZWbTerEqiga3TojMaTRvg",
  "key45": "4B3rHFVoKpqs3ZoCSfNgFGr3DZGu7heCQZi916YxNW6wMjz59DvVDq8BWP1x3RnXZXJ84vjNgnbxTLh4TTSUjnNz",
  "key46": "3YC2beeVsFEv2UoqND9K4LrawSfQb2nX43DMXi1yBzM8WFYTfJCxZL36vA2D9vESvpe5YdJa1GtG7rKJmXtzwKEN"
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
