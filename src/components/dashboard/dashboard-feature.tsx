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
    "X7AeJUBbEeahDmbaenN3LXuKtXxTibec2bfmhZYTtSUanzs43ZMm2y6JyWKXjkm9VHYBdbLYABNKw4LNnoPNJUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTY5RuyG2YpGZRZHibDM4rBWbAj2QAKF1NymxnZwkLrUDNnypaaAhLgrq9xYuJtaqcyp8BSfzqKkqsDXVGrsCdh",
  "key1": "2hakxJ4im7dgSJWMke6iJacD1Rdoedp9E4iQKqxDeKg8dLhRw46ZA6FJKhAAevKiBgZPWUMLBuH2j5ucivZ1Nevf",
  "key2": "3cAxBAz7Hsczs4Bgx1aRGu7WDbKd9tTRoURKyStn5Th6LhvxQR1cKBim4tKPoCmgr7CxMioUD7MX9hME2A1qdsL9",
  "key3": "2uEwqxTdNrpVh1kB6ZLayb857PzPLwnfvN4A5zBuAx2KQ7yDjBEp6B47nGyVLYuKu7UCbBrRjKGrnDnCcYBMuKwT",
  "key4": "4KgTgAqKkgzZwC7RSF9YXN3g3xCXT3gUDcdhSEwh6jSFDpHkdpdqreej8BFsEj77v4efBTrVzStJjtFN8RHcwbVH",
  "key5": "91hNfJpWwuwd4e2KApbCa2HKtaviwkBHCEfcdLtRtebEjUakb8SbeM5bQa3Soy5jBAtZx7iPkmNEbqyiHPEKKv7",
  "key6": "yEzhynojU1khGH9wZDu57GwbQzjrHMmX2wJzzXDAUHrNub3nPwUtEECAbcBeD2rMwj3Qv8i8adNd6xjQs2WKSi2",
  "key7": "2ajrnf6EeVP5crpVgQFqd44JK94MYsPvyJstcyZ6fhsNyrUzPKxREH1UBZDvqE7LnTL5y6Ei8xktBLEZ2LWp9SY",
  "key8": "5uL8A4cmisDMWoSwAzsVZCEGu3iJHZdJt74xXKXh5ParSTdiFrNv6SoYsKthZmHqyU8AAPkJ6cJdTq4ygxaZC5MP",
  "key9": "38MY6Xx5htkqUxHAfReYHBQFaB1jSoGGGYk4JsfbXHZCscmcCsBew6GinNGY2T2QfJMB9oDcUcPiCpJD3iFSE8n9",
  "key10": "zKeRBgxn4pUj9ZAb9pkf9TgW3mdfsj4nxipKfx9Q9ri2jysgvZrjh3JZx1P3MQ61qLBijSJXbXfThuktCL2YFdh",
  "key11": "2yPr6m7AXLvCswMkiBU7KUxxQAesPBVhUCa4iZUMLSnZ75NcAHpUbHkoUE5jjTBRn6N3WbSDEMpAoHhQ78hLmdXM",
  "key12": "3sUf8vac6ohnwucvbzFBRDpFK7DhjXacFKTGVKJ3xiQSBWV5h6eoXYHC9Qu83QuRngr42uFrrZd5WyPufS1tf8si",
  "key13": "5438kuFv6jtDeafkckS4A677WY6KD1zPTHSFu4UFSbV6FLLnzc9PzHcsgqVzZAESHooF78PNF2XrMcRCFJyskyBc",
  "key14": "vkqzrmzM1q47fEQM6rttybMekYnqHt5eStbwJfu6nharrCkBEqUs98qiFEZri1Vs7jAyD7JEMbBfBdKWV2w4qA2",
  "key15": "3emXD7ved1YhULnPVnrxmWGZYaFoTH8DoHL9qtSUpa3m6VhQWjrMYR4xrnQg7N1SfogUEboWJy7qr25fqhYRepWZ",
  "key16": "49QgdySoLDpA4AXta2SXpBkdCmtRk5YRCngwgWRarYovcv1JxdVVCbMJmJttCmKhCdzyGbe1jXjbKkCvx3Licat2",
  "key17": "5PcRXnPAD7LfT1Jt7f1g8phnhrBR1rFFNiCZLoWjvi8DB6w2BGjFtLxZyabgfPtri5E2yQRPYBy4w3G1P75WXhh2",
  "key18": "5r5syYvWPPzd74eFACpbxnyQHCWqRby9jWBjwz4ZvA79puoLibefEatu355PmpgppRiK4dCK33QWYKiuugzSCpr8",
  "key19": "2RGUh1gHt7w3Dn9VtTcJTPszpHayfkjYkGcjtbkeMvnprz49akP6kMP7tY6RRUJSejZemzj5uZkFfdksTwtyEqMm",
  "key20": "4eZ9bSv3NV1Mrj1J9BqkoWiRPv4acDUJFvyekBwH7Utr7mye9bvb6XTRjhgYHas2i65dhgygZpWSiAgnpsW7GGMr",
  "key21": "GaZ2iY5ZoqvMvbksT8ohHRmnB3i57RtsmdqYPFKCJXdxuS48znbfdbwj1gMZZAdTfAj9G3mqXPGqNpexyJYuPYF",
  "key22": "5igXCe12ZojaMsb7cMTGWrZSVvjFmFiH9Hv1CupLwjN3htTDFEa6WtTRUeLKU1bzh4PVuWggyF3QWcRCKD4FS7we",
  "key23": "na13NpqthTLbR5tnnVmPjBqNx8KzKT2RKraG7mbZvXZFJ3spueGkkbo5EzNZCZVrWymBvvD58fexzTFeZDJZPVd",
  "key24": "3jcFBUkuSpTjJg63YraZFW9nPDaKztkoxNTn4Y8pJ2mRHyXxER2upeGUcvxfo9nfbQrDJUEMt4NStFCBCZUrXVTG",
  "key25": "2TrxrAYgHj23tpVPtGk61Gn5peNjT4FYjPmCUCBtnmHuH3hdGhWFuU74ZwWdQNxWYm5cmfHFvrYKtWH738wiUoTi",
  "key26": "3q7rBQvVYPJR6Vkr6oYfi4WRGAaqdTxXjxUZs2pA5ZDBUMyCmyyJkyA9dRfwXqqCqtVgZ7F8HnkByur3Y317XMuY",
  "key27": "hupXeQYfuJPMC1XKkT1qobWsp8fTE33A79yrGTmXKipZQNetD71UPiYEp91YTDrUqZjYiTtxwavsjoTrNSUYuFr",
  "key28": "2DAJLjWfMXAigoSkeBiQg8d6S27Cf5tTzygxJQiDmWNgTXPv3aKEgUsFTsPYr2k3NDK8PMwPgYEMZK4dSRSr8xQB",
  "key29": "MjkMz4debxxCc3waP1DLdj6xqvemzK1P9q22f6dxibdub96ivWvBtybB9CDe8JmUmYEmZWkY9b3uwG6i9m1jHxM",
  "key30": "5NC7g6tPRdv5DVWtNcyT5xQYZY1eowDF6uxSz2AZVs65sDdeLuaqimZzPqmdowC7VP3ZEnmNoiiJ2n27xWVwrEK5",
  "key31": "52jGMGfKXZcgiXKW3jeWJJk7MA14udGMmMaDrMRPKuZR95QJDDWBWMDvW9gkqpfDiCrxbg3xhBSM1EjezX1xXx2b",
  "key32": "2Ybn9qCYKhNC5o47B6zT7jSSfFiQJAN8WJ7pxp3R7tbmqyeiXxyA7gfivMVVE9FDL8h3sZWegzAyQ9cBY8q5o8G",
  "key33": "2hiDfriPxaLhwtTmXjjEMCQvxmRLhmQBL19VDvDAhUnnBWDW2cRSg6nqhs4EKgedQ3xbZCrX3ftj56PYCrHhK6g7",
  "key34": "4kV834EBZw8qit6LqassERVCTFkxPBGT2zZA88sTcjBBgbQqCKDBqTrsjnctuozVNzgBVyzekmi1QkFWNtvoWSRH",
  "key35": "5bU5m2xC3KgfXR4YC8Fpv9AoAqtJHPJeojuKjFe1jBWLr8GB5ggZHyZAGs4WW56UiojhbAR8a2hbzmDYAWzGQ62b",
  "key36": "4teCE2o8bUXqNtLyMgfiXswpoUxEkBhBobYJZGKZe9LHwYjkFtJMftnktFBQMPc734Frt44iHcUGmBSZic2Gbadp",
  "key37": "5z7aGH8ZyHimyWcYtxdnWkmBjAcFxSiB6vdFNFEn7PHUKLJvKKKyuooCiBASTyrvhYR8dsgrBBLeoeH5TRvuQ5uE",
  "key38": "5ps73ef8utbpd6TPk7YprnsTPLWrS9hQdxfhegQWrbkJJfkYgfh6v58h3smo3LiHBDhxDZ4L5GMyhzXxM2YWsUpg"
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
