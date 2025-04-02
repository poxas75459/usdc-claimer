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
    "53i5vXcDyKjjyfW3UNMFFE4Q38xz3YQbGz8DTuYHuQrdXWFw4E1Mcrxwy3GzL7bGzFZJ8YeHg2L7XhwTaniHE7zS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqasYeqcnLKTa26ZvBQKxdrFsKpBWbX4uJu5Fek3BNyFh2eZfe3ZnK3rnCGomPcrwMySn5z7hJLo6XB2aWzcD7K",
  "key1": "61QbJ973DK8PpXLpAEmgSTbES7tjaKCVJiFsxMH9tiC2tVSMQ8UNY4e1tSYmVkCKfM9oRgq97HBU3xxn2BDwVUco",
  "key2": "28tzJtFESs7BFEo2cQonrM1sKPoUMqAex8Py4HCZ2dPQrUJjxCusnqFRcj8nfVj5xngeznoy4UX9639TQrrwn4Yz",
  "key3": "5neKjwi1q5S8d8F9ajqWnNC5VV6Neu7pDkTNYCTuX1ZmNBDu4d3RTnGqftQjuh54kKwssbLmNzNJNcTgrQAaKDtg",
  "key4": "3FdgX1idjXXb6Hux52ojtsXmKd4GKdbqhC3dmJTaTrMN1YLPPuD8vSi5wT6UxYDwhcc8fQbVeqnABN7aqjiowB3k",
  "key5": "3kBbJqhaQWYhaAQSnhKjWvV7kiRxRKhaKkLwLm8yovPJqvCBkeUTfSyv3aFaVcgUjQnwBWKFYWvZFGoeEbuQv9Ns",
  "key6": "CiXEoiqTqJVRTcC3oqvFJczRyxt6nwWJGDqiHnAhreHs2whQ4Sr1YVoR1H6oirDL17XsQAWzAwgPB2MUv2aU1qM",
  "key7": "2X5CjeTqJSn8Zocvz8aRb3fRNpJgBMFDxEGUogc3NCkpbZ5XLpc69WSpoDqgJuDM6PdBCfWdfKEQ2CssW1imzEb8",
  "key8": "3rLsBuAxdywfUebnziWUUg478k76iUuXGh7jy7p13f338aE1yu7ur5JP5xVWmopcLuBpN77hRqxj3oPpruHpUkCo",
  "key9": "sGtxA4kMVZkMoNUkxebuCN1DqzArFetDwN5eXP2uveucLFxZqypk2RssPWSEiyY4BqhiyHKYaDRp1R76mFPVdJ8",
  "key10": "3Jdd1w2mTtCVY8yLGGYkH5Ys75u8sYCPjQtGjYpW7Fsm7cz1rXVL61ZdChQdbf7GMfyghexCZVpYWSybCRCHukpp",
  "key11": "5C1hoH4AmAVkxXyVLuuM4s1a75pJNmEzE27SmGZM7JFLBazGzb8TypBgywBRKhebt3pEuVaqfK7uFQ8dhYs6iC8W",
  "key12": "4NQFVYcXEJjZEbpZwk815jwAPPFtVcA9N1gVKZ1gtauBQg68ongvfSWDingMCHVrdE1e6HFz5vxKirDz9NFTDKRP",
  "key13": "MowNukYsWdpbbLzjEX3FF6wSdUkSmDtY9WwoHa4oWE1Uf4bJ465DmzVVSVrNzvjh98cMv8ggqVFHQSsqgPdghsx",
  "key14": "2rCZLFNFLbF3EaourMojX6K1cTAmZCQgD1i682QqaTeeeAkDgLtqNNu7D664deACduLZNFiAZcSasdiyyLXshCJG",
  "key15": "42pxEkYuJLY9siCkbou2L8Tfr7e2Vs99GF3U1GPrY9VMYMb994mgF1cEoXFcFveEWXPUQC2DSrtRP69xR6j7reRE",
  "key16": "4VzXcaZ5tjDd99aV94XiuCN77WgELibbspE6tXzWu21hY1RfoRA6RzSi2bg6ZBJDEJvETr9QdHWY9cLD6DtuoEHE",
  "key17": "5kEB6iHepU6XFHxsBjShM16xWq5PfmHgrp7aCrpQF7ziS911NHYUqwXNboksYmmXEkTVwhyVDuWw1HwHjBsnk8rx",
  "key18": "33v1dFG5uuyyHD98JhWuAQ5DvNMiQaZv5BvQ3hX9x5d9aQAvE2hixv1gZd7q3RWBcPVJYNWyPinMLdEfGdb5bGuo",
  "key19": "wQRTHFPXinq4tnKT2wjgQCp5aiFFRVgimRGN1Gjd7B2udo5xDMdjHHPzDRvJVzpU1KPYiPbJXZott7ACJjx1KKM",
  "key20": "KiwTtqmEobkDUzivCEW1WY8EKoZEw9HB6m8xBmbtNCN54NG4RxQu7p85cqPUrYiaf9AeQiKgC9kfd4HxVt3T9kS",
  "key21": "5G5PLrqGxN3gCm6p5tPzGETNksFgVxPDRJKA1FhQcMReTA73k6SaGttCkKkXabJjiNALiBWfZpdWBHkm4fdpgVkV",
  "key22": "4mihd72n7hzWz2A4ubfMhucT6ikaqQ4Kfbd6Y9f1VZ5aXQtP2Fioh54egR5xojKef8vGW6kSyf4VBP2ydCoGYRC8",
  "key23": "2nrAvpoUwCZeARKq7ZBU4fHuEN8zaeqRzGkc98NCLnqEvB6bTcYaaac54XeC6NeTSy558iJZJRoCbEX6PuefBvFE",
  "key24": "41DR6akLhYeJXjBnu13Z18hTHLJANyqTqoh11uog7ueo2dTX5QWwWVWx32wR9hNwhV5wdECzyJAxrLbEXQYMoAs2",
  "key25": "Z2jw7LBVqXUuw8nzs6fN7SPGWiu9kX1EtnCoyyiGJADCrSiL4yQqCgGnUQoDXBfu9uQm2F6VANWxLb8WyMkwY8i",
  "key26": "4VUZzHuKR5aZacmPViQFcKuKqyAgYzgXGnmrBWwUZrLKE8ohf6asanom5ie5phPu5UWdrN5E5YNnWbfVHMEhwjD5",
  "key27": "3wgbtkyhmX7XFSEMTmjtvnc3qyucgTnvbbC6vEzAMNzhAdGrjDQfDZAWSSQyfUcX2xb5L1qWwuPJjsTCDCMrEMdB",
  "key28": "5BD4SHadLFeU15X7KT9QCjCqqVQSY1kHJepLNYz4iZBopBbahVF2wQYyrJmuLyTGRBTH847aGXHkBuZMMLqaWZfh",
  "key29": "3pofjpcZ85RyqEmxwzSf1QUyuxKG3ZYBZTq358E2J7N9kWENnUPJP7q9DB6SXFmrzBjrV21mi2FswsfziLiKfL31",
  "key30": "VBLeFC33VNBfMtSFEDAcvTSDfqj28rmXmb7FMiZEgUuVjBitBo9htohMnWYavceiYYqT8V3sS3L117UZXiBTpSB",
  "key31": "4HsLGhDhqUmRdKbA2smppudp6DiaYWCKmPqNpPHN4uCnthmE3mpzva9chUgiC4pHoj2JdH1LzuFMS7E5VHkVwdRq",
  "key32": "46JwN7Nk4KYceYN864kHwnsgg5HvWgdUiEoHpSi1Q894PYRWobvLNYNCSP3G5xvaQkYXvN7UFXZDx7NebcbJinmH",
  "key33": "JFKtWtshKCoW4TfzHdZ4g4ancBh4vunosU1mktDBSmPbUiQyvEgJtSRRviwcKJCkktEr3TffnYbVB2m9FD9G7xT",
  "key34": "4ThMPEAcYhPfz9P1kT5nBEdpntnEWJVwY5nCM7JtmFHokFZTq2cU5aeACTu9yfZubcdkbZXFbuGqpGZCNo8W85Uq",
  "key35": "fYuiu64YMW3F7xb8guSDEfwkQCMhhuCmBB2u2YDtgU2wxLCi7TKHezqcLosR7xcDJ85M1J8yBRFjSS5gLi3Qe5A",
  "key36": "3THMGvUD26Vt7G6CDn8d7wSb7x7329WdCUv1W1n2ovvCSKj1SF2L6f1AJTQBbc4oY6MpKWtEDUBLuSXYBPUEoUFt",
  "key37": "2A4mjYgTv3bdTjwTzALG4Zx7pte6XhRWnU99HbEP3q1uwrp25jSzirJwqzKNwJNyaTfzjJzq8LwHWQa24p7DJzaD"
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
