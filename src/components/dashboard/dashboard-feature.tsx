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
    "5sn896WnzF8tqJfZnYpCDBgQEF7GPbC7YPbBhP9o7RSsQG2dxPhB6FRzPjAtAQuxXbvXXTZp6jDpEqmdBPi1WAQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuTMaz8CC9cpEu4Sfceaz6ANVb5LQidRsqtjkQC4fJTTbRip7FUcppXZ23XmPwzos4PMxcptXs3E8uNVvHM4f3F",
  "key1": "4MQmonizSzNJKu9bHB3mSNBUyBJQ3bJ1oFcrEjXmgdSxQUksAvBgoxUWHR9bqsvn2yLPDjMZgG1YUAKUBjXuxj7",
  "key2": "3g5eCD1wHcmyU71xaoqjkS4uR9bjzcYQFLiQxuMuG9gQBUqPVw9vZuNMtbwXwxD8fQ2nq6gNTb9ZnhBai1aeVs1Z",
  "key3": "vgdE7YAnDuidxKZaVuiqJjKkMM1yi5NDvUeLh5AYd2QYBCxtPw5mvcocaRLCApkPNduBc2YCnZyepXvhGt5D1Sa",
  "key4": "Ar9Juh2uY6m4LNewF1A88Jk3mrTMsULsxEdaYruoe5Ltisy2nk8G8j3mm7Yk5VmBuRwQS6Du939NSVqrtvTVnyW",
  "key5": "5NRWJMqrRX3poUoBq4GGbhiWj2THBHHmPUgzu4TceV3QK2Y6jiuULYb8gu16WaKZXAHPioH6UeY9LrwdEAwropvs",
  "key6": "AGgST6UYd4oJXEQyLHUYCUpeXkzgPSz5VvHQacuNxj6wmMG24WHD7QfjmqVwY1USa7RExWV1VcZCueN1RTkkdPk",
  "key7": "3KhJgGYBEugXDdKycTpRFMkwcogJsShcPcpf9qD6re4ohHw5ZZ9jSVGypiT9EJWXvifzcX3JWdCRSwFNSTMwyBRC",
  "key8": "29zon4hPJw51dyFWzVJ6wDkzN8rGQo2zckN3mVEd47mxQTJeZvW1UWPmAVmKSziwzAiWQ4ianfa9y4RMzbwAbn92",
  "key9": "5c3Cgh5iBTZfvkDLGgS8Akpj5DX8zhG3C8kRDs1qpL4Kxx5SEdjP4owsoPz4uhQnb1VvDr2jRgEkdjCLcTfsFpEC",
  "key10": "34WYVpVoDgWJQKpRmVLFu317KTDPmfgA4TW2CHy3ntQE7KcjtUPNCM5K5zmcLjvRZuRznXN6wTdx3pjZjVK16com",
  "key11": "4hMRxL6sJ6Z6Zi4Xhc1Ei5K2CkeD8gSeLNDYCU2tjj2WhSjeRrFJUYFbRWkGE1Ud2FXjjsgLPrUMcFCQDcmPRops",
  "key12": "tcV4CrzcYFvXBiPk6Tt5tBkGnCKx5AoBoJbHtMdZNoPzze63jbF9xwQSJubVhXQDaMKPYUU9ZXJECKS98hYrsnX",
  "key13": "2GGPbrJQmCb4RQYCEUSiRxZU8Z798CkxZH2pJzUonQZpm4YUuDuu5qnzud1aUaG5J94tvAxz1PG1ZBAf8cENhzcN",
  "key14": "5qd1VqHxpCznjakvrXKtFQiKpciRLXfAnqMHRttJTVn5UEqexWGEakmxopd1tHguTL36JU1UL8HspdqTE5sMxYCt",
  "key15": "2wwRmKe5jLgMuc9iu9X1448MUfhmT68xgnMRPyGJ48VoY1KeJgG3DeXajyEaawgfMSbEcdvU7e3YH3RYn9huLS6G",
  "key16": "3j5cfEzbC7hSvnwA47gjePE6sYSkWEpocaHRSXPSw4YzAo6WnPgNPggE8XwmF1uHjA4fFgZUKm7V92WdHJvtxewD",
  "key17": "325TJFkgHYLzRMrmLruYSV3pFGyR1Np7iT57uXig8neJzcw9e35UrdjGsQFTeYGDv44HJLMj4iSgCVKvxhqaaK7u",
  "key18": "5zFHtsNzas2yEKiBhKGwrwJGRq3wx8Dno4FCBG4331CoxfZkKKJTLGQr2VjSDzu8UvDT8JXvgyC5eoLoXeiqURvK",
  "key19": "52xeosXNhJHcALsJSGAdxYqNJ6QTEYZhkMk8ojT3efDoxKnqfEkzhFGceArY1Jed2SNPjkGR4681bvPzYX6389ZM",
  "key20": "5kH7MjmDgQGyaJvZKqkm26jxSfCvx5inPbqy4UCSDVpGZtA1r2yojRLynXziTkF5p27Umm1coi4iVPAdFNR5jrRB",
  "key21": "2KUehigwPcuoEaY7UUQs1N7ToxrPfynxze2sHHR9Us29fdfzNHGBjZKQqARM4krgxB4PwnXP9jQ7ZgwmdvyniAAy",
  "key22": "fS65sF4XzuD7y2LkiihB1Rd6qP7f6Kf4KgnjF2GqgUzoW35KbXUYSjvvvm5aVb8rSWNFsLeTxwHHNEQdqukDuEJ",
  "key23": "22wHCHrsU7zsBAzwfwvzxXFeydTtfQhcEVPq2Dw5Rs7mkhz41adCazB5QMrs6h7Kj2RYYpCZLayX7zqbPxDdjY8g",
  "key24": "5YcpYLaitvhozJewU9TMe7aqZaGCsKv1yUds7rbSqa6PPdhkGBAmsm9QCC3Lwy1ayzBFbS16znEzrVjywFmJoizt",
  "key25": "5sq4y6yJYNPBUW7eLfBnS9vsDVJv6wadQD4mvz87g9X55tXc6NSwDzEwZz2sfKgxajdxUNwtSJCY3QBfALWqqyUh",
  "key26": "3f9J5CoFQnttYoNsMVp9Jpf9AvZFw5LAdisWw1K1biFAF284Emgp6q6T7RiR8yLBJyzSujMiKZW82DWbtxdabX2h",
  "key27": "294azha7ESSiowpPx5FKvAsEtRyCwm9igZ4Gpor9jj2nGvjKJi8zYXiZytreb5A3PtG1evEf7qgBejq9sxiu2bZp",
  "key28": "34u7UczqbusBhzs1AsSHPRWKfUpu3w7jUQFCvptT9KK9kt6WqDY8csYhKPHsrjtqEnrjx6T5UEd4ZxwBd8wK5XWr",
  "key29": "2yGPmggdic4pT4QYhHkwzBPBUDkxThfCtFSxccojJsVU3JjZtUd5qMc4ecyzPB8qeP3ztU7UqCSwjwjBVsXyJ5Kw",
  "key30": "eAaW1az9TrLw6ZYMSxnzam7MExTRQFtBXuRWdQfdKvY1j4L76F6i6evQVKj45GkJXZvvKeAVbePMZCPni4YZ7Ua",
  "key31": "24aJf4rTzPFJCbhn3p5kVS5CfRcfhaJ39gFCMiRAzLa3EJBeHXYvU7cPKjrEjR934y4i9Jo6motupQAnthWXMpcv",
  "key32": "3s2Pz9YabUFQZCzeaxmVzLWnjbdkhQgJZfqbuMdarnJowuhBdDdy1Fy4gbiNpH56NXwPQJ3FppwQjGUJAUMbG4hj"
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
