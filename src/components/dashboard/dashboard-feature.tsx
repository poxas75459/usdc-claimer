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
    "hEwJyFpWVD1T2Bb1RQgqHtCx5sHKGQVPE7r4bQcg6z4CCnH6eydNxbFjpPkxUy8JjTbEzkJRpMMy5HXpjRvM5Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ChrMogBSqPHcQQ9XvZqAxj4syQm88wt976rhNLyGSuUECxWeyekQ5dgXZXQTXUF7aAd32Q4a4EVnrzG2NqXexTF",
  "key1": "2tDcxghf7fK2KgwAHCyiJfnvXVMTaBtwHbQ4n7NtnwzTn2psLCnJHDQAkY2W9H5nZxyH3wFkBTjtDTd5CqXG8Lwd",
  "key2": "dxvLjP3VpuVM59QK5cXL5pM6BX5kSPz5pZAajTWb7FNMSD5vcBEEWtFtwJuNtWNJux4tzvqUXBfHYYNZKECJFRj",
  "key3": "3eGHpLbzN8gUqXk9Lq1cnJYv3bKCFduL3mREwMF7yX4ksbFWKx722jWL1LYBzYuDv7LttZnNmAyZeQT7dsoP7YGm",
  "key4": "sQfhYkEgg9VrtfvMcFXQTAZ7C7a5tGJ2GUWYrLvkdyyw8JAkARiyVfQHfz5f23srByQKQxYycGAef3h7tHf6Hdd",
  "key5": "uZwk2rPpYV8yu1sQD7K4DSoWC42rv3DexsNfDQPY5wkRLCW1zj1KVas7ZhBogPPtbSSytXaMqkFSs56LfJAMZtR",
  "key6": "489s9MfwFJMJ4bP5fYafMM1TsjkfNp6HnRoydRDypnVoynsLsMtwfVb3nWvBBFv9ekK74DU9Q59EdJVFQQnjAP1A",
  "key7": "61gr8GPay44DjsTwJZJtm8M1ZYztmtHZfoYu885JYdWopE6yaqTsPYb56gbAQQpfkogsfjU13i449BRApyJddqb4",
  "key8": "2YGgnxMY4TcGHLCY9SJPTRFzjGYeDBfn5dbwV9Aw4AURarSpvKu8FsCGCxfLkbP5Qm17FPKAK6ZtbVBWGu6Q5oMF",
  "key9": "EBcGQzEJa7uuVE2zrwBBgHRrs6PJMchXdC2ofRo2PKjsHZAM6KxWFWfMN74zgBwYgZLTXcXRmvtazgKxwjqjNgi",
  "key10": "3ZEPofPG5LFgR28y2JyTguwwSoiQuGhvEzkzHoNJYCUaL1FNVcVzrpDjWfPwM5pa7GU27xJZQH865t6JGUDvLtJy",
  "key11": "4WUzoKQ52LkSiSJRknZofLGu2Pd7m22xa4razYLi9zG97NBAQ1tZSHijFZ8YhkLvAa1JSbGvVAPHK2mAhZ3W31N4",
  "key12": "3fwWpcQJBmTjq7RurDgbRgfwHPGpNeAFEJ2MjxzzvVsR8YpnZMT4HdxnZx8FsKWiTr2PqDtgriofXvJusQBBUu13",
  "key13": "P32bJCDj6uB88sTeqmAfc7RseWGEYvgi5TR85fTfKRXsW2VwpAKFMCVkz4yKhtWKS4U69Cf1SgfToWE6zyZk4dS",
  "key14": "2mRjcmk1fHgQJAQyTz8xgreRnCx9J31B2EkHy22PxKAmJn53KZtUduFkrjF82T3zmYK8imPT1rEEez5LeYC2kMHb",
  "key15": "5xfRdee9eXR6E1tzvHo2LwtxFkx9FKAyZLScUAjEBp7Za3i7DYyaWkXaT43haK3vMe8sRdBEtb9629XYezYshtLg",
  "key16": "46wbYhYE9KzhpFoBEHSgukAs3988WghwtEdgfeZ6ZCJr95x8wh9YXznQdaUwTu4oCB8foGEZ1iDpLHmNf2vnE6cH",
  "key17": "3h56kcVhiLP6ca86WAt8EEAWgT4LHXWRXw2r32PfwXPFqr8bwy6o5A9ugekf5gQCTVjn5SALDkNoebZQRa94hNS5",
  "key18": "4BNMkrCSECuhNLs9aL8c4Nq7z9AgKuMgxFV5TgRse9NwvrDNz2qsPf3oC2eiqcckTfjv1vs5bs36R3WWTcYLgGaH",
  "key19": "2m4AuT3T8fFMpnSFFik3tdRt36YoCeKEG8j4DTaGtkkhgL7wTxcuLynp5wRz3TwJxwTVCeGYvqfxYrQY5ZKcwzRU",
  "key20": "5c3ZP5MjBAxQJyrHLY83FzWjedmu3b66FPxgaGFSfyATTrmQYcFUBBqHbof3ntLGSzQNAsdviGAHZpscrkKtUXYu",
  "key21": "2v6SMnATWCZwfz6FMAF6kcsSxEHceYB37ZypS1TNH7M4LUdADVT5Frw64vJEeiK32XQe92izBKh2txbfoLXSxvjZ",
  "key22": "2zghE7Nba5CKAS3627ceXNbPAy4whP6Q15P4ACgzP3xa8MYYAK4wjRmE98b6i5QcL7GHJoq1VSJ2vZMP1qAniPgS",
  "key23": "chAS42wjqqUrqdYcmo1otsNEDaPGXHfFPQjpTC85wdmtDWda3jSCac76HnPD3TpwtrowWpXU6t5ES47J6dqkqWB",
  "key24": "4uvE6CDoiV3yF4jFNf1HDb6YMAY4m34nNNGzVSNtVQSw9KLDU9wr67ygz1iyE8BiWqAdj42H48461ZqFyCfDFBHE",
  "key25": "566vswyBxJiKvp6P5FUN2dKiWyobriBaRjnvG3JDyVXZRksyk6DCkGEXL8mgeithUgAw5ibWhTLPo1YWHKuG38XW",
  "key26": "4z5aDhyXyJXw12Ft4KfqrfVooyPAWdfswh6D44AW4kDYi52JRNAQTWRujnkZb18KWBZfZanFvNgToWePjjYdiWtS",
  "key27": "3Fr23csrsQhZxg4JPvVqZjC8HgUi1rxeosJYTDvbeDWsw6h1VeVvNqvJts1AKg9YSdy8Ehbot8Xjn9hNEur6WkoC",
  "key28": "5VRV7MuCoXF8tKHddBUfPnx5XWPAAgXEUazpSnWqpDeNotZDsShoNj4vGXSfvuXGiVPsvHjVtVbDjWPWLMcqtXHx",
  "key29": "428s2iY4t6hBmXTg7ovXx5dAPX932pFmPGAaNeHdkETMkm4SxkLeF6KurhEjXxZwkhscUFRJXmx8JBxaNRQNYRHK",
  "key30": "3x2Eh4RSPxJXKHD3nLipB3ycdRsuC6jW45cySvfpQXPXUdyL1Kzzs67JXSFspQnJEhdyuP6cFbVdyiK7Hi88UNyT",
  "key31": "4C2nqDRB21AwR26rSaA2jY1kGATyePwQJdivRqA197DHjvciGHdt4rHqYCj4qyFpng9bEyNDLmgp9Xxps6VK5PFS",
  "key32": "633GhD4C9eBMimoZW81x8HsALMum87j98dqiDPCxKrA7hNU5sDhXJcfR5QQ8u5WjDn3kULr3o6yjVhVwBmbBfFdg",
  "key33": "BDmyKUEREXGkSosQ4pWiTdzX2tgAfnAoAeTQbCHEr5Nk36Rqz58bkoUayKAZD8zRGkcyQvvpVfqbsMPSLGbVufy",
  "key34": "utEjqr2Q4ehaoY7xSJM7moemzmpbW5nMSMau95YNHsHLiNFWucAThd5cgSWpkGZKwHG5Wfp1gc616wb2JNKQBs4",
  "key35": "5xFwaWiMtFEYXGguHLnqdEoYxo7h7sbdvnN15LDA4AAQpYC7wSyw1oXkJgy5GvCXhAaSEQBRCC1wE86LYkcFb1C",
  "key36": "5b3swQt3Xf65e271gkmVRS8FpdHm43qXZwZ1BCyLD7cVSYHqdY4s85SJmbfdzMxoSSLVCk7ee2GJM7M3zz3WvGrt",
  "key37": "3TwEcaUpGJhoT5hVGZhLZwYdPwD1aoKNYyJ2XCuDvZJpc8QhKQTBuWeCcBLUL3GnFf28b4HrgFhX1r2iPxcPbHMt",
  "key38": "477VWDNUv8wPRoFaKJUFKdMJyoXQMWvD3b9VZ5eUi44L61Jm6c5zs1HyoMxxi5e2gKpCMAEZitVbuf8fmngupob6",
  "key39": "2rtvHtq1A7nSyn4omv8cYdVKybWv2yzvWoLdAZcmPzd1jmfsMzc8XNizsc6V2qio9d44msVVMyfZN1kXCULCm7XF"
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
