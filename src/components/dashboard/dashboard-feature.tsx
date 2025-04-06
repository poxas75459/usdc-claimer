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
    "kCd6WqGTa4kCmphKder2FQFhzRmVNq3JbxoQykMPLeHvMhEt3PUSe43Ptcd8Fqm3z3rNdbX6UkMecgdWbCdtWE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39VgrTRrzXCjZtgyhEvMip7unBENcXm6E72TKumHXhruVgrga3Z568j7eHbJdoPFCAegJf3J9TEZSCsLZdAgQxTi",
  "key1": "3KfrqKtRzAJt6TaW81DBiuPk7bLu21MLeTEoYH6LyfqLubLi1XmYqzqgHSRDfjNPaCALn8u4C7QKsDWZvRKWAn8X",
  "key2": "65i9c3P22MWMB1iM85Dkuw7JQNWHxmxFLufNkJ9FFSgNrxTbEC3L3MqEqEKA2yVhypaLv1abuJNuiFfx1VW8BxbY",
  "key3": "3knuyLt4FSRBMcqxDsQGDs1x17f8YsYW4Vm9WBPcnQEgA2DKHsupt8pD2HH79vTU5Uaa8Sz6JpdNcp1kEiKhAakQ",
  "key4": "2AbpStgoDy31KjtE8BKcyReTyMV8Q8oBgXxAoxoh8brUpNZZ5aqmXfinacPHFQCm6R6fH1qHJHjTTFeGhvkcuKc4",
  "key5": "4KgPk4b6ywLJguhQDtTKKKTy11BorwvBC87oPJRMN1HESBNX5kUxSh8iDxTEULTaYJbPFJ6TAiVAXsPg7g9BhXJB",
  "key6": "3oT9rsLVRANZWGrPr5yvzk7etBgTHmt7zUZUM7CeE53wgUpk7REFBjk5qTDC1GwVTfoziBtADMzqePqaPaRLr4vY",
  "key7": "3gJGY4utDVsRFG4DhHY2qH4qoYwqAq16DxZteu5KMZaH8jfQTLfqNVt83AnQvm5CjGuKXUBHdQS6QffpuhfThHG7",
  "key8": "54HKgzV7GxgEiuUJFn5itanCYTCqUkLSpZGpy41scc1xn7qeGtLxnX4ZMWoaYC59z7qdLiZKUSW8gAHKLBVYVQBF",
  "key9": "5e7xoW1xCuzf4BPJ4Rwxe441AaT8ykhV3Uu9kDQy9aL9PLGY7DLWnJwdVgHosavfpCKyY7WKM5jhh3p4Q2cTffz9",
  "key10": "2WZDNCQtHJkCQeAHvzQJX6fSEYwdEjpZmmTk4mXq5kEQy9xdfKCcTxJbyWv2kQrUe8aAwQ1sV7PH6vcKCK3UA2tF",
  "key11": "43WK9UdY7v7dZW4bERNWx6SsWEQ6sKVeUYtguVRVomDnScuwdD6XfYHwR65C2BMKj51dwDFmPjpe6Qi1pxvSJYyg",
  "key12": "5XqVAeBEPd9x7ZWQ4WbGk2KV9t3cyjprh3CFDGYorZqT4NQkPzw5q3JpCexFb7pgchU6vLE77v1mhYohsXxhg5j5",
  "key13": "5A3adLh8VaDVTRuzCjGE8UNnetKGN2L8KrU8WAusX8R6f6vHVnK2KNhaFrGhi9paU78feR4T1MFPr4WgBcKGTbUC",
  "key14": "BkwkckdSiTVF6NFnf3MfL5ZvRdhR5Rgt1BMSzpHWULidcfNVocfv7GykHqWapejsrLtaESCy7KgPoEezPqBgyDH",
  "key15": "2jKcdLYW83Ah3z8hLxuFZXGCkDPXSjd666Vnsx6yqpBuvzi2GyNwixcGBiGzye9GddnA2ZWCvbpuDsdTwqw8wDBx",
  "key16": "32AeHbe2xHbQYFBqGuAPBqG8zGB3Gnm7VHLsjoQ343eTh6iUNTUMMEWsaSo1aiYtjVVHRy4xVKAmn25pDZqXGVe4",
  "key17": "3e1ktXzkmYkz5kopfN2QY28Mg35TdGKHNbCd3c19H6CRNszVB75DYsgurJ9CAxj9BV5PoH6yeMfVXdqpbDyhQyDR",
  "key18": "4NutCMn5gnkv4fLokZYZKxjP9TuHkSUgsESwrVrJrhFePFno3Sjgw5JLVkaHPp3YKTuFtXVpgedURxmnWst17pkK",
  "key19": "kSyeEsmaeJ3QwUGbUaeQmrzEcCfj27M1qqsKH8NfHv2BcMdSPPL7kaYvRDvnsXCnypTiAgYeQG9Dqi3HcU4Pips",
  "key20": "Pvs2PQbt2wzozJwjCgQ2vVeQbSg1yn8Ye1TSYPMYKM3XQJaY18VBx9NbWTxc3AXt9gu3MEvd7NsQwQfeqFM264p",
  "key21": "3kdtX1cek2AvpxTBGffcit5r4Fty7DCuKRsviVvvfsJdt23UVS5bCpDi2mt2iPnnQxXEyxyJHZNava6EG2ahYS8c",
  "key22": "HwPwbr9os411t7RCQ2Tyx2g8qLMuLHhDKwpU1rCun5zqGtTLRrCpBcEb9K3MJBGgkyLL1Cm61snoj9u55GBmMUK",
  "key23": "2LkovJG9NieSQRrj5fScgvZpYbHrmk64PPdGJxkhey6YS369rnPZFGLjMFj22VNjJn1EyjjkHf9FQCKz6FvvwnD8",
  "key24": "4NAhGBWNwXsxi96sd8FVEnp2CWjd4UmmEREKTRiuFPT9YMAkVBbQ9t6bDmJ2AtB1gWpTqN2f1JxrUZVfT2rG4cFD",
  "key25": "2MCwKiuJ2WngnQKHK8H3TMck3ZoLiCdfDnxEG8LjcrRzQu2FjnhSSKsxMioNMJ8Yd93yYLgb5q6Jm48VnHV4xPxt",
  "key26": "3XGUKVS2WRvPHTvjahCEg8Danj3b3NA5Nq6cX6z5rtmWMEkbzpDwmB6Mbqj28m3Za5G3LaWdhSui4CemFFZD6P8z",
  "key27": "5x5DrpEvabqdbXgke9qjMHJ2aaRBTXzUuNxS4UmN1SeWM5KgaKKWacd8TH7cZ2otVUyGLcKB3pV2YfxjNXBuK6d1"
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
