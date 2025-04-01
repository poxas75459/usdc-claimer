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
    "3fSC6yL6eWQmeCGmwG35R65aVH99rcrq4ND81hwb2owyK6GZVhEpr9HLMuhRSrz5s4TA3EgEHhjtiGGxfNduSECB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ba2UwndFqhrcwtLHg4NqAgYhNS1H9AQywknXSchqRNCKwoX935VWc9KTtqVtgfzZiFZYLwABunHrjS7uvEJEiYE",
  "key1": "4hkXWEwz8CjvtWamxBcj939anLfgN7PmoRKpPPb5rGp3KLSk2xV31LbReygUgVF3R7FLeAEsbqZSk83MNSayvx9z",
  "key2": "4rBEwKG3n98R22GoU8HYjsjpHmU1cniJdLX6Ys8yLRtcFiHxoFJBvS9yMGt8J8my81WrUuT6MRcetFT8VHHLPwt5",
  "key3": "hNFpkDyqAax5kRsRQKhk6wXqpQrwjNVZvCFyzVc9rHEZfX4fty4XSEaDe2jXPy3ZJAiwD6hxuqqyk3vS4tqNnZm",
  "key4": "4frk1TvWi73jV1k9XhM2WNeZqN86AtxYDXNoMTRaRjbaHWg7Az6QC3N2y1vAvfdW5goxiik2tbNHd6S5n9um1mXm",
  "key5": "6jcQ4xyNmfEmEeB9QgzxFYgqQ9DE93Ymp1HEEXzrX5wVUzYmhCMSD13cSrzwsHCqywjmWkHcJLb7bYsebNgFT3q",
  "key6": "5CpWjhc5kB6bTHWxVPux8yR8duerrCz2Kk249Aknc6dDAKLSLUgiAUNfpq5SiAtM8MrxB3HTeQvcJJfwHrWPEjGz",
  "key7": "2AKnVEKXkjLKJQqiU8rzNArDAWCPVYhdHG1o5qDbFaakMUL9Epv3QTB3eMtWkULa2QXeKthrWQCGhDqG9jZigyg3",
  "key8": "3qyoPuuopt1yEfza9FyStKVBFNkPPoE4mYJixYqQQa2STZv1PHFsHdVtbHitJpGPtECCReJtBjvjXGQT4sKSexQW",
  "key9": "2ns8JzDYxcctBfL7JQmr8CGx4bZh656LurF6tGBRTZvunHZDUiZtby8ErwSukZGZM6xS4owHAJaKuhbXjPNWXk9o",
  "key10": "5xSrwAZBdsdp1WRBo7PDYLNgzUsHjGzz63yp7R1RRdinbgr9MBVaTnPkakfJGbtq6BvUiDPM5fWzurH8p5nqCfCm",
  "key11": "gSTtrEd6T4zVDPP7chAYEVGJ4yvcNj6jAnGrVBE3iMf9EvPDQc2PnnpL2HSfZ1DdtdwzeYeu68ad7p8tBfzCxPK",
  "key12": "2jDt16KYbJtV42uXqKHeb4rYM8SP2cpTYBMYkkAXxdA7Y9kfjbh1HvmueSFXs8M4ULrjQNcYWPwmbGaDrcApaRqL",
  "key13": "5snxv211jCW8uzjAVDcZNPggwW6dCMJDuuoMqT89UWHDyCvU4wg5fh1tpLXyN6opKXRjjqJN46i6UehGYGg2PYQB",
  "key14": "CQ4ZJwfsLaAfQRjXS8S4uK7pVGbvoS5zc3fBZU7rC5euDtiXfuM5UKSpetQrjTNmkDFgdZAoyyAe6NgYkRqruXS",
  "key15": "3iQvweo6ffcTHvz6m7hVW1YCbSfEoPhX3jbec77sectGH8nhj6oarL8mkX5bnmC2NPUMLp4nco6F3RQ6ux9n4PR8",
  "key16": "eo37qUct1jsHiifV7cZVfvUrvWhYjJ5dzCvsXpDp6KHUvpqBmCpRg8Z7ajGrV5TkS8H1LyEbwaUoLvFxFJ3z6k2",
  "key17": "4TPFvntrWoCs823W3NHt9AuY9sPyatLs8JydJ8F9GVzozFzc67rftuc5CAQeBNQQrcpDW9PXWTf9qTKRuZom4BPh",
  "key18": "4cdKEmPeugpQBgFt1ngxCtagGGxVX1jDW633fEvKxuET574VGYEyccCVB7aWCErcJcmenj4c4dbNeeBfHZfpTz7X",
  "key19": "4qcJsFQH8ZzGjyd8WCyfVkxPs3R1Yar2NHLSumCUNADZL6WGbpNQiz6JhHXyjDyVTpd2JAAyWdXAn4TULMRnG1Ht",
  "key20": "sBFJTb1d3xzVmb6WCwvyuRnj4Qc5sQYZ7W2NxhPVwvUVSMCLb4YQM2FZCT6iJLZcgCMWSHSc25TLBUPuhSsVmjR",
  "key21": "43akdGjd6AprgqSGDE6RjX7sScp4azUfuziJ8Ent8uCxBJ6HHJ13dbnuX2rZ6re3jcWN8LjWGy1sCUj7pUFHt15j",
  "key22": "4rbSQnE3QN8BgfkfFkeeSbEJaB3hr3952UPeuYkUtg4kyaMLk5MzpViifBckSY5Yjpd7rMpPZFeJK2LFvUND3ENf",
  "key23": "5XwHsL6JyDi21e78JbZNnwaMcFH7eSE2G2ggrLic1fDgc1fcYjDRcFBudvYXMWZeRW8kL1mz6PXqd5Y7sQbENp81",
  "key24": "2CWzRCznLZb1n3bzsmbfG84JrvBASDEA9hmHytf84W4oKssEjCgKE7WaKpVkLqpynm1tC84tPSkHwaUD8iEJcVFd",
  "key25": "59B6iYt5uTqmcw6pgkqaLWgj81uG1Y1QCPFk7NeVD9ZRv77WSwKNKuzNjfhbZGu7JRQ4VXvPvdgpgFrrLsn5xnvJ",
  "key26": "5rb1uXVAZ7Gd1J9GK9zsxERrrpXaap2RjLFYZZY9hWA3co3Ke3sG98BuAP7ePZtcDTnurRwLhAkZwXQDxGq8AptL",
  "key27": "HQKAvaQgauSqYsnx9vJreTSm7J27RtcV2wc3iJZRSew8E4Un8LWSfS8N2Cw4g9ep1MZe2KSJaZAwvJEvcKLxT97",
  "key28": "5Ze8tqgY54aKn5dWK1UrALAfGfYJr5xhQYwRCgs2ASdbMEyfup231oGZdPBJrrsy2y56CXJZiYFYaX8d1dzqypQ3",
  "key29": "3pdoioqgmeoNVrurDF4LXhXTWrr4zYTWC19mkS8A7J3Kb1VwCfsmgdKpYioBEkjiNQAfFdytUAWwiqXaU2xgiG51",
  "key30": "2Xs8NaZvLTM3btsaMkuoCf4ScDe4va92gEEzZYiNhZSYvX1p1ywhiG9hqieCrDRXNbRAsqDsz8FRbygHQKkujqmX",
  "key31": "3WU7MMr5hSBaTUrdW74GhxrkVqfaiZWCdc5RGJjs28ZLPoBjgyEn4Z3XHQHhK9E6QEB5vL5MEhfnMYpE34ksS8hZ",
  "key32": "2Ar2x97HW58k5k3D8xWsNM4wo9eBAR5W8FVar1UMYKmKtpnMMZhsSseV8MpCzvQ7oUtLqsHFrEJwDHRQ8HdTkL9d",
  "key33": "4wDwx4bFojPZt198ZB4iTBbmQfAASbEWQnmf5szEsZurwWhnDujZgvkAFD7GYaHiaF9ZK3DcdDjcARd2YURH4ndL",
  "key34": "4zK56CDPaEhCpGPmYy8rRfH7RivvsGzTCGRJhiWLtdCnSMQrJ6h5F6UhPJa2sqm7vat7Z1J3TcVgcjb6KojVfKTL",
  "key35": "4fZLGF3D8thX8JZr4p4cTCBonTV9pAShtMRuxne38VJwwVV85B2RJ8eBdRQfBa1ZmZkBE5CPzEFDPmFi7xVy7Ajn",
  "key36": "gU4nCMcpJgAqvf4R5ZnDAUh1hztwm6nEnr3EewLej1qPhsHYxbqCuuyr36ZZT7CXwcAQrmxybC6WCR8dtexFFV1"
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
