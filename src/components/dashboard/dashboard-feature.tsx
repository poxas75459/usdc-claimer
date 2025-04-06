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
    "4NWvxqLtdRJRezJsK9uesWNw9a2wnvC7kGH6sEtjkPxXDRLswCJPaYmmirjxG9b8Y1wM7iLGu4mfounLUBnbtsge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7jWihMjwtRjdNqC2AddbeseJvqPBWBfR61BBcusPyncsS7hzLsfqUuUaHNAXG5aLVdELMvkC36cMjXwfMXjaVB",
  "key1": "kxGUbNHaebXxtuRJvcJBjTCrAcTyJgdENRubWGYgGkqFyJLYZcqURDnUsEwZbkCC6YFop49d5DdFNAYk8xigTE6",
  "key2": "4nzDKSEqW69qzpFnsrmGgqxVkQbYYt4dp6xiQCPqqkhLb87KEzpkeyGgBU7BGJBeKTesB4BVm3XRAwqx4jZBNq7e",
  "key3": "5HZraxSBwyXKbZSWyYYiztLKXHMTKhwANMxSgKXTgHc1rmvWZJCJXhvubCJaCDCPvnn2mAo78VFYuE3s49axfCqF",
  "key4": "21a3GTKdsBqAih1UAeRwn2FFkqcF6scWpRmm8uKHy6nQ4F2MhN57FkLr7fNkK14CwpZxUMLqda6noLeKmYG512gV",
  "key5": "GKHrhaSXcCfxYTpMRg2Czmbacimh2AvYvXZBvrSm75dxkJJR12t8vronSsxyjtcRLmNM6YcGosQAL6wSwFrqFL5",
  "key6": "4gKWX5WwYTuuQcxzL4CG1gcdVHdmcESs1Hj7kqYuqzdhkYBbD7pvBEaMS2ECKKeoPnr2qXA18tsFp2RM5vJDsbvq",
  "key7": "5LU1gq6sRUyXEETZNkXmfCuvEeHZRHs9nbBg8t5JzqcAUMrUvDqig1GpzqXpb4yRZywgPbBHAT3UuWriYHL4Rf7j",
  "key8": "5HJSCNs5HRvMChDvu5gFrE6EeVxjbBLdjyD3dFMax1McpaaCAt1883sKa36GesJX3VrUEkJ6KFfAkqDJuHUSumhe",
  "key9": "4nS7XYHVu925MYAgwxPbWTCndPVs9Bd3qvDwify6xQQRkbFvhdnyFvfFdRN6UUbE9gDc38VMjJX9VzVF9uMaNBFR",
  "key10": "2PvsrThNaMykNsMtyoWJL8Y6GMYge3rh16akoSWWTpKfNcRcDDRNmBSs122xFegi2fyYASKamUxefXVyqGX88WYq",
  "key11": "upZw8HGuP5H4DF6QBZFwM4bAa2FQrQg5nkZ2K8SG7uM9GQtFdqsb2rJTSfbppoMptfNPTqnuK4QvC9A8GgBN9iT",
  "key12": "5wnHbdBk7N6gxsXeRFSMLZ8fbZAnGENawDYNWw3Vy7CJ4qNtB73PqaNBnGcZVYDFzoBHBQYz7GWekxh6BQ8pydGC",
  "key13": "5JDCVBLg5JJhWbRRpStCyBa98GawWrnZDbSiimejosvctKgCkqNGfrPVUjSiHQiYZ2pwXqQyY1vhRLYWjDszmTmM",
  "key14": "3aushHbQ7oMHZcwURVtr9capVWX8fdn1HAeJGfLRPeSmJXp3E4dP97uZG5V8ajsPeyXNnfgLvahzcEb6LRL9eM7v",
  "key15": "J3bJ2pS9tb82mEfVJGxFFTLbLRPPqRGuARgxusuuENQAWq8URRCW6WZp7NfDX4YYviXLpvBsVYuba5bTZKiypVv",
  "key16": "NVUiz1YN59PJYtMkYgYTLYLT5KFvKqq6u4eUapbQFjd2d6XtzNT7MhJ2vRxzjFzGoeK3kCnmhYpXza1cBsCKyJK",
  "key17": "3PTpjembC7dXuwbSNeyWs7ToHXLscayZmLpwg7roegKQwKYbccVNo2H7o87M15GWNzVVykitMkrW8SZNHukRHq9u",
  "key18": "5rvrutCcCUrYm8giV1YYQkQAaisZcSXVwfoQUFPzwZLkREiZDF76yuQ2nFrUotwoN1J7X5eZHeo1QBLAGxjgjeXf",
  "key19": "67fAEUGLeBYzi6fykSowBTdXhNZykf6aPu5D8tQACzrL4aLA7kM8vaqj3LDFBeoVAqTSA5QBTdoG4454YwL5U5F8",
  "key20": "4CifHy848wdEHHx1eRa3Ez3g3CYZezo5e2utNep5au9Ft3vCrj1yPdvSdR9d1zWHnPc8ZSrVydfNq8uamLwN4HDD",
  "key21": "3bkGtTcDFVMUxTCi9HA5fPxnum9QHBRMWogYJsU8WXWGL7LNm34xY2uKCdTsbwF9i6nKTxCMdBfK79X129PmFFKy",
  "key22": "3UDvY4pH3teefvfSijdt8Tm5pyGdhW6zgvtERx3ZPF7tdwiKGGs5xi5jjd3ffvkGSYenzgT4QYKbMx5vmP5amfNf",
  "key23": "9d9sJyB5urCR7d4585wTxjuygM6pE9h8yFeigLNS6hcoPsqWYHxsYQrcw5UeUF66pUY1nKK5AWi2JNwBxDbGaWP",
  "key24": "4WKaq3vU4SK5q8azYrSbtVwtGJbreQRxWVVpDyzUQ7iYz6NSd1PLcqU7WyNvDVfczKfMg7WfvQkmVyzbMDWn7zXP",
  "key25": "STaCEFzPPwKdLUdXfsjm44nT6sVbrMRPDfwCGgKzVQR5hKb2R7QxwpLQEY9cd9G8wWMtnZhJc9NiiRcX8L3otSN"
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
