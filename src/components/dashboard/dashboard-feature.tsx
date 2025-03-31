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
    "3VdbydabyoosX7fsdfz4wYc9EKBjyATWuUJSnSGYo9YHMT1fiXXzPupguAQrtb4BFUNbJDzqocfH9ZNoKAbTwxfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2to7LTVbZtgzL76BFg3GAMwNrXMKiNonE5snnqFLgs93fzMrDseRr2GPQ3H8rJHcnnoX4NiP4UVLdjnRQCY7pqDv",
  "key1": "4X32gnE7cm71fPfdeLS3pVUo1eeYp3XqM4WVL2LPvXs72RVLpX5PAMtZDuFvGBCy5DfKT5DU9Mkfrz2RqTW7BjCG",
  "key2": "3iCbyUCQHBe6sQZHLNheDeeqKhSNxsX2z1nKsB7eqCMAqe769x3yPVYq8ZKUAHtzyFaWhTCn7FuBdc2o9KsKVSk3",
  "key3": "4DogebyUXa7Uh4FM3tNtqhVrrJB4cT3ZNfxKu4VcibAnd9fjeKuPDcDfvDxpwJNvxXJSE3Y1vX84wCsuJ8LbHXeQ",
  "key4": "5XmHbDqCASZqvNwNz7KMgNEHPxSn5wVR9soh7hVfxYtYcpd9cqL9u75Py7AcL2oRqBCCRBnbx3zyW4eXmijNXsiG",
  "key5": "3ZSSDpgoAvpZJXD46yQ2MCiDuLw88v4vp9Gas9XzTHjkMZCetMm58zvZqqMrx3irZ6LKw3Fs6z8ABe9NLQWmPLeB",
  "key6": "4M3brGMnrj891fnKGMyhqzGvgfmHR9sNoKL6NyUFgtDWfSUFJJainurqcn4apcoPRMT41DUov5m6y9yYJm6ZWrup",
  "key7": "61CkBc1EQ7k2FNSgmVYy8WfqxeTui93No7wDzbWrSSGUDxpR186YUPLq4RMmc9xaCJorpQSz8d1khLShHPVNf3DM",
  "key8": "56ghtzqcZcCvYrEv7PqAS2mt5hYqK1poYfyvWLVTEGMxQBNN4ZPvg1y4yGMzLD2T8D7TJzkdWx8MXwmzRHM4F2Ye",
  "key9": "3yBxuhvMEhEChUeGQrwxtfiF8FRoJeQgFTxeLf7vm5gEa6wvoRH7XbZGmxAWCZysSBafQiHx7sDARd99K7BSekPG",
  "key10": "4fWu7Hrxq4WcKtdUe7qXi2sFqR6t6Bz5hnauA8cpfxAVCPt3mFeRk7QFe1wiu1t52nZqKppu2GxF65MT9FGyQnPm",
  "key11": "5zuan2oyRN6Un363DCzCz1hnEjrrwZJYgyiQLo9qrBGja1b8b6EMNKP7LXvSAvzXh5udedXfPRLZy2RbzfY3RK1",
  "key12": "1hmjjx7hiuMaEMDqxfAziXk6A5dgii4Qj9CJoVm18yLmqB9U4hDfsGjgbryKsbYr1VhCGzLUUJgj1vABT4f8t7U",
  "key13": "2pc3WR9AodqvJ9XycFnvoxEhgQVc83NUtKtyFKmE2bMt5KJWSD7dJREzXz8cZVc84ZozzpiuNccbAoeTVkgKS1Vt",
  "key14": "2QiDgap783NnSAHfknNXJFiZY8MQEwei8ik3DoA2uxq39PJg9pifHw8LRKUmVUS95j8HorYB2F5mqWRdicMhLz16",
  "key15": "3xarrWBHRujE9WPZx5zpdLmdaUSryF69CEqnBLkEqHBGhKTedCR2ww2jgG6W2rD7jXideM9Y25QAHkKdCvh3gRrv",
  "key16": "55oPZY8ceC1R67QXqLYnghi1GV4761p3rzriRm5qWBpRF8djKUR7uFPwKXMH1ZNPyhEk32Z9g9WAxE8ZfU3KS7QH",
  "key17": "2dTGfpfLGxrnzEfgi6Yx85KTUqvvNW7Q6bHv2zawsQi1Bvb75oJNbJJo6UXwzfZ6doaiDNf7QKmrjRuzc7gtPW9y",
  "key18": "2nhVnw8iKSSzD75zWF352tAuQvWq7XM7s74ZeCeBpAQNDv2pGMcUwXbX6VcYfXUYKFHmRearnmKkXH4fkZzpLTTT",
  "key19": "2SjX88c5CsJXHDckh4o1UWVJGfpeAaTBa4bxQpzSy447hHq5aoTfABXgLo3DKQmuHV9r5xXYJcWLBg9xgtQspSHD",
  "key20": "29jBo6HaKQuCZ762ZPX5VWtkia3ASgM9hPS4JxKe8ZitFqdtrQQ2XharaYVJVeKyMJZHvRYRvh6yBBLDnKFZhF3R",
  "key21": "4AR6kkNQDDEZ4ZszR5PgH9KiY9FteoyrWH1qpAcczBKTJo1newdGB8VSZu4t7KXN6RXTamqDvwUVgx9urbFadKji",
  "key22": "1AMGr4XfgSpkUJDZ32B3BPYQYbSvgViWVyDpLcAe8KMUEcbv6kDn12ko29to1NtXW2se7qHdNjcYkE1FSgygPza",
  "key23": "5zScdpnEgPZ6sbCgLpohR8zjfYphVXjRNShE6kkGFTjBBucP9PKtjC3pijV5zn5LKvS7bimw65nALhB3PP8NQjxP",
  "key24": "cvtEZKwMqRVcNjBryPMwodAEZPs3StFoWvkbNbQjDPS5ZqqS2B4zgqpuGx9P1ymtKTwkx7Pp1mzooUDz4dtRMz4",
  "key25": "42ovUxqDtPuG3nk7oCu1FQWAPff4G2L3wukDcCe4wZYHJCFqaqMFxvSfLbCxqwExZHHUKrhvSb36R4XsdjMfSHJ",
  "key26": "4YXUajHg2UGcKsmtNsTfjDhGdvH81ZRjEFygqUPm5nPWw7YsW6HbWMeutx9Kmp8LQ1QLFNXXBQhceFmWSVWTVJGL",
  "key27": "4H7waYtBTArDmaNkqiWY52ZSdnST419MGkK1iy1RLaBWMhXwxFuJt9HipEm9dmxAGgtxCpVswokzRtEe1FSjcbEk",
  "key28": "2RZaRBou7Dd276LFQLMWUpZ1qdsPWMuPwTGYTMeqphNXy7JJ4WYAoLnW91DXNK3uz5jG8JJL224nig5YY2B2Lm65",
  "key29": "5xCh1j8RKnNuKPUJvgQTsixoYSZGt35Dvz6zBKoc3xnufqkqkwogSmphcNctGqCN3z8aWLj9g9Bjt1N74sZcdCWA",
  "key30": "5fBpnYGNMCNQLuAJp4FhVnUUfpRb9U997m8kKsjWW21uk8zQBgWSGPZU7cLnMXVq87TPrHToATJet4ZSpNpJArYe",
  "key31": "3B3eCALGVPQ5YVyqyW88nnEgegs4tiJMaZubtstygWdcLLC5HV8Mih3jAbFptwdL78if4La7GHRxo9aCwF9g8DEe",
  "key32": "49dhAncwziF4gM2reQ3hiUzm2DKE4CW5Vn2DpKGDZdY7zeuZeumuBJJSW1SEpPPnY9nTWQGYtWGwxDgrUmreaFYA",
  "key33": "64QSGftBzLkXqT7FiJVfwYTrPJ824nqsPio8h9uzrBTK5RwjviCmfssUVYHCJkCXgY2aaZRY2tzQF4qoU1YU4BHi",
  "key34": "2XWvHrC9pngVGFk7NpnbAhZWvEELkjssieuVsityCegp749RV3fEwyUidWqombHKijJjh1AkN2TQWu82mKQgoo9j",
  "key35": "3HRU2u44L9382MRTep2v8UmnpAjDMq1cenUCs1EBwPFnGTD57j3tyH24KeTP37K2VnnoXgA4EBK6R9zF1Pp8aQUw",
  "key36": "5AmvY98gmnrzqE1cUuv3epiN4HJN8gbLXFduVCAqueUqQuPCBBJfUuxb9fDqJUj8augxtvPEFfPJ4RBhhnk8vGAu",
  "key37": "5JbxsZcAaLfwhb3RTDRmxkB53j5UPgaXi8suXxTb5nzsDWgaUsqF8q4NfZ2EPqhLhYoWpx6wYfwN5Nhc8K1wnkz5",
  "key38": "5X2RGxnGgtcsQtsekT9E4b314Qv7fPPvN1FFFcAd9HAMLxN8uYeQdbAWGUVS471NmMkNoYizqL8waaFKXRJmpsNC",
  "key39": "5UzsfP2xWErojqtBxnMdEtFB1BMyZjUpHdaRbfmBtZVGeYJtAZxb472pwjVBCx9QJFWYweT6jk1KjBMc1479FJfp",
  "key40": "3vZ8qjHPL1qbUTFxPaC7BUf8tkTCqdz1wVhiFL1mpin9LAM5t84RBzge6SJ7WXEG56opXW8CYoC4xqfPwkeeiYGy",
  "key41": "4KC1X6gKEnT9xPv3cHXZHDzuJwKDppKLCXRPTfkY6VWwzFcqVFJbasto5CeDqypV7Ck9xwfr6jEBu6BQB2MTzoJK",
  "key42": "3nmhcHmgyNDt66x1aCp2E43MyR3aQm44R9v6hu6RDBckfAy2HxEKQ78b7MCTN691BGdxHz4PN8TFHST1yp8rqYcf",
  "key43": "5TZXFxboKhHDvrqsQNqKo3dtp41NmUgVwiqyCdh258z49YPqzzJm1cVGAtyyetSYdPkpWurBYsRGd6DxEgjsq6z4",
  "key44": "t6FQDpfkFLDqtSZ33no6Y7Z1DRcp6uTr3gS3fdBSADEwgkxVywoNxzeLftmKrez7eDUasoVtXCfVC6PHFtCycgX",
  "key45": "3vk5qeD7pf2V4hTrg5N9eBEKGoYwWYgwytFbXaWxELUkjoSbLtjqWt8wvbShheGfdB9h3Bcjb9hnxLWV3qNhBoSB"
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
