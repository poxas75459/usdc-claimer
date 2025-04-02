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
    "4r5wE3EUVpebU2Bs1uCDwKUPko8CYUiuoBBahLt1hewA5SzYQY3iR7KkrdRkTmJJTDF7JZTNypu4JrfvSotHkcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyNnTD7DighnAeuYa4c1GqaYR5Bf3zyphN2B1nWxdU2kxeL4ynpSyny4Tcu67En8NF55aepTLPPEC4EqiMzfPjp",
  "key1": "3A9ZNje1TTumpobJEKq1j4L1q8x9LSQWZMsf1ns65uYSgLhktUDp5t1twLdNJ6JYyUJcsTMGFgJvnLeLz5iaxsdd",
  "key2": "g5bwKNdyux5Ta4y47Smm6rcyL3GiRVYykYbfKscjARe8cBtVQKSeCAcU3kYAU7Hh6PAygYhdY1xneRd6c7NGvq5",
  "key3": "4HoZ6hFLWzuMX4JYCjPpFaNmPZ6hSuwDqYN8zHYDAwmS4pgWPSKFpEyyEbBb44q3GjXjFFpLRLaSSYVzzsRhGokZ",
  "key4": "5RzLUtbqDsB8LCxJ6mMs63TkdhLj9ZfzWMgGQqEp6vMqz1pNoeaHnWAUGhfWXvgnGmPT2MqGEiyVbZyfsg6oGVuz",
  "key5": "v9XeSK6xpFRKutkhqkgXxccLpQgNZCwNK5Qasbi5kHWoTTzCyAQwrcLcg6MoqF1c6whfsfhook33ysH654t4wjF",
  "key6": "4PcDGz7VW7ERiZq6fG2mwdHwioj6AR4LPnPf7KmCBSQGSatzuJ7bWC9dUVAFxHzGm9pbWzrk6UL1e8XCzWDPfji",
  "key7": "iBFxpt62nnBxGt6Kf6H4QFDpqxBzjs4H6pxfxzVkuvQF1EM4CYoMdon8g7fozoo9tXneX8y48UAv1VeE4WrnRFk",
  "key8": "4FV1KEkRkpaJztEnbar5xqfSEYr5CdSTvvMASUgER1efY8MgM6CZcKZVSubM7T4Kh8xX3YMAbBSDcnwPsBSCMCK8",
  "key9": "zBiWiiTK548sjJ6EZszcxWreYUfiKn7NmhaGocPghPo8NtnLTmDiqqe51v4NKzRXnR2kd5caRmpULLv4uTpkJ2e",
  "key10": "4akijwKzzN264ppL85dYq9PmwbAurzMRC5pcZa6UbNJKpXgxcrEEGWxnuZwKdArtz4sQXmDE4nRpod2p9dKwsdFN",
  "key11": "2ZTJLHMTao9A75Vkn2D1TyqCjwTcoRZLEscTP5MoG2Km3QLtModCHAYQqdqpzqGVDpC79tz7n5MK6qPSDvogpheQ",
  "key12": "32KLt1M7TL1UUYBqqAHdTCSBzpaJwkPkYgD8jxKASYQ8UMymAC6pirVrecrGZN5uGertbNbeXL18GNMAC1riZFQN",
  "key13": "5vurPqQnVVCkJkv2mQZdWF1iEuwrAjNU8CTe6EwomQfff7ZCstBWtaZ6dcNjRCshgP5rdCZjHZi8EUCnUK6wRCRq",
  "key14": "PxVnt2QK1CmKCBFktuT7KdWHhPzASSzgdKbSxofw3rWSK2cXmPAS3bYq7kyCQKMedGNymPg8tpyNxbU2wNUf5pS",
  "key15": "4V8rjPwS4ZPwTTbsnDenEABkEiGsQbSjVskxVGBdLQmcnZzrLkeik9AaJ6176vk8XhFWVX5bAqGGnmpZpo1LjRqj",
  "key16": "2J6MLDBpAwR81Bp4LB7E3qK9yssdB6wkWhQDDVjqqty1QnUr9van9UoV9Fu9JgVTt3b2K42MXiPbEqaBoxY4kwbH",
  "key17": "5CjjNXn78ERThQKC6GZgjxfUCbes54cYAu8gQn9EmPjc14MAnjerCn5PvKbSbiC3C8RrY5rCTYfa73znyShnGnWs",
  "key18": "63Rorzy7x7v8jNtPizvYW8b7hCH3w3VJnvF7yj5z3Yu7BS9kaiTsxHyDkmt3mvMNv8YRikjtwAWJ4rdX1ZqzH4W",
  "key19": "2FvTi98fBdHFM8B4gxoNR1Y2vYAz2gmDFNiF2BP4FJko9SD3UkaMHT3HcHPFnyDNhGfxgU2gWBKEEbhfruaow7Fr",
  "key20": "2WSGTQBWQc24hY3m53XBSfNTW1xNPV7LM2yPUCMQUqaLEUGNU23guLnDhjjCZDeh25XUwEDkBSXZNzr6RDyAnjCd",
  "key21": "4z8bhQ8GNrg66D3SBxPBHEDcfrYVLqLVKwsK8xubgrQFeGPREYTr11Y1A2LYJTGifxynFitXxUX1ZLxz4AvYqJ5s",
  "key22": "2CQ1aUDfQCqg7gY5NPbMzquEWgawhrwZXtLju3TnA3XYk2o1Jh3btEG4ZPRBDgugAmGoS6C8CZKJLyPqgsqgSCF4",
  "key23": "5uAvYivKafuWC93Jtt6RmBVy66itx7JEH9jvSjVWma2eBdL8cGCaJ61JEZ5ZBio13MwtZY5B5KovgM87nUQ1oXv9",
  "key24": "5f195k2PJHKmDA2LYfc7ZUp7uaTWu9L1WytXWHYQQiejX7FYXkXpqY91w54QUkAefTDAYD6sEzDQGwhhfTucqy8J",
  "key25": "5UHKNXrDcVzR6JcPeRwe55YRWxoSPNM6Dbm9UwTT56gzSk5HyJhwourxjwiZnk29Fiw7NNN9mvwxcmBvbBR5yujW",
  "key26": "3AwETjVRNPyHq31ZfiA83hdaHSGAqZJqSCeGGsmCGFRYDorCEoYjaBUB1qnCwsDN7Sqjg4xso8eoNwSE1iscWfvH",
  "key27": "4H3rnGL9R2CfbnGQg2RpRcHX19bMJarG1BSby2NPCta2cn7YW65nBjo129N2XXoqAG3MAZt2C6pKqUuDcKddXcAv",
  "key28": "4LBwdbZRqqXn7AVJiVTntUTzwxmbstPR4boPEcXe8WxbVyRjfKjk3R5nM5QGCwpuHt3WYZBPapWqJ49N8mHTvocE",
  "key29": "4pLNfj73HtEW9U3xPibAVzZTARSZHxVpfyVrxcA5ji9242xLQAip9Rcc5KbtjZTduYHzMR6bNgmSR8GFZquHZSVz",
  "key30": "2u5vTV2jBiNvjxWfb7e4tyBs2TpTWjUadbVHBbbGTygbkorNh2vuvEgUvPDDXiTk3CScmtd8jmkzLJsRMfix5Rdg",
  "key31": "3YCA3gBVMKC7pWxpC9GBN1LzRdqzH8dBS4ZvUarUVdinddQhu9c6SK4p2zJN4zfzZTNEmCNcbnAPYB6DuijEvLtR",
  "key32": "23zQYcP6dh1MwCPGdERZbgq6jQVXVPKsmHmWuNHhsaWtbMR4JPeZZL9Z6bqR2yLxhbBYpXzyfULoivAfP116KpJo",
  "key33": "3nHpyYYvKDdhLqpS6XFUXQjqd5xHv7agyBBXWYB3cjUa145wzhkTP82RLppJoN9mjfr5RX57Udta458bjHANXSFo",
  "key34": "3AAn5sABBTzpM3yqXqfcCeepKwk1TQ1rrpcarKbzBCPahXKCn4CUoHLbLk5VqKZWTYCnXhWB9sjSS66XkBmaLBw7"
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
