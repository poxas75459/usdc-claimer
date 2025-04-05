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
    "2W3epW32ZVPkpfsRCoKgwEGXYM1xgRArGAcQsQQV9fEUK3AJR6HKs5BUpzBXyJV6mBi58zDSmvRcCk2gdS8qLr1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FXdQotv9Xpm3N393BKDDa6bxwmjusWKTQvgYbpQFZ4awvjfMfaBaXk5j2dU2eXkaPtYobNSaT1x8M38aPKigmA",
  "key1": "r4cwBvaAgaXbjexZPr41BL4o9EyqmbMLte1GyWRYqy57mATAKg2CzcZPf88BJEvg9s6SH7NK6wANzRrPuGH7kRs",
  "key2": "3KLptcgjcVs1uUvXGy8eKVYRwgKjuXhyNtu1kAqoJuJxTwojczsJsHZWRMQ7WkVPyPMQwtjPSXZiggKkEGyuV7As",
  "key3": "4z5ySyxHiwD5bdnBPXfoojgNEn5j7f6kBfzMZ91yA3FDe7WLE5QMWYDsgKmmbbndstDaNVVp5UbAKztzRsBJAqoy",
  "key4": "64M43R76rovJCAGKiqNnNyjnxCke4bVSg842hjSfMUvq1ZpUTHoPB8SrqmkshRiApNebC5xnXLkxYW2gGTJkBDhB",
  "key5": "5hmNrEK3EqufAWGnBahNjbEgmrArmMAwjX2U7rzWqRiAMUseyYy8s1zQncBU3yzQ61zwjdK7TyDDuERb1v7gpuNg",
  "key6": "2ZHkbUq6aVnD9jSxpitr8ZLvjmNdAPcF871hxsCELJeHg9mKXrLBXVHmhoTiuGSBQS9VaKDfAA6AwinjaXVSb7Ts",
  "key7": "4cAbdXQaxZm37SQJ9cPj7CcjqdUSBvTsPQRFYpYYTzrT8xfEDkqUcLTM7jQGFWart4FHStQzTiZKAE2cNBk4HrVL",
  "key8": "63snAEeYbPPUzbLfsMrVaaTzMB5KpAwofuLgiiGZJi14Kj6wTAaXjSvhnfvYdNkJQtXRvhwVWgqTr8S1Jp3xCbRV",
  "key9": "4qF4xuZDNvSEoczA6cwjYZi8v2ZSDcpDiJUKqQ5SymZhnUHeAtkFFPMwp75C59BuCeoLa61yDEHG7KmdQ1ZWBdtR",
  "key10": "57mycobpDaheNATnLMnLsVVGZequ8DGiimx95CfbLC6KoSxxD3Xbmzsr63kKkqXwfUWR9iZk1e4pgXbCikCNTMWi",
  "key11": "592YStvNjVHprmG5fJJQRaJ34DSCJskLJ1hPdfEjngjBjEFJGeqR1zQzKybsNhMKhnzh2ptN91BEuNfyPHfwp112",
  "key12": "4HREPqKfCuwdm5iJf9m7fzCkAYvb6SzqW3iYL9tGGh9Za5G2tyQn2L5SseGyjmYL4kH16BZsN4eN91j7CD3QQHR7",
  "key13": "3cwjBKjDGr3eiHea3qdzbhi3CJD1dz7HC4DDiYnCYnN34zPHdiE7v5TnGPJ5r7SrFVR3xW76NZ3AhPmJad1yTxGr",
  "key14": "G1cXWPegrvo66mTiT2kVkNvrrLodjg7eKu1p6Xo2gnrS55J89QQFHvfDdySgQGDqKfG67BNofFezenwH72JTqQx",
  "key15": "KCGpnNwiQ7aa7fJxtSXcYaQovV8K2MZEyH6j9DN1G9bz266UMgkWVQ34QyXfvEXSjrGPtQoqGZj4Fi9jgnecTmt",
  "key16": "4Ey6294NxV4DBFFvHNCcDWGMS5uWNwdE8Yk5UpCkDTBEH5YErUt5i3J27E4dvyJ9BDVqaKVQUKdNTTQVzPrFr52p",
  "key17": "55LgmBjzXqXmUyTc3mB1vW1QCqBPHQRDDWbb5DKV7ps68zoSeR4qrscVqG77EQXYWC7Z7MDjUcw3pu7KxTyRRWkJ",
  "key18": "Q6YNF7tSbDZtqnYZ95AbFwBvAsERzEtiKSvwFKmbQNgeBYWPLbCwohZhJAjDxRRc4k5B8AsvRjewVrTaz2gSVWe",
  "key19": "35pnrT84Ecwkw2RSKwGsNrUc4W8y6tMHgF89kcA78zxctNe7dvVukhETVw9ZWJjirZBggrj5b5E6NA6nQfx7L4iw",
  "key20": "6nYtrPHTNVHxwhNjz94yVsZbAXCX9e6XpSsZUYhJAeaqbTxf35dLwbXXeWWuDcnTzxGzXFCAarofabuAnK3UeLc",
  "key21": "4bXAzHyju3L5g7bhQL6t36WuTajxDckPTwQ3TsR251y4CwLqDBRDqh29TztYTETtLVfKR8APdSLiKhTAEWiXixu7",
  "key22": "5xbbFBWB7d7SqGJpdRFDG3zCQ616YHjnqPLn5Y8ayxNQMoJyiEm4W6SzpqFBhxjAp85kkmRT6ZDeiHVYnb8yu3FB",
  "key23": "sBLadkZmW3rYWq6zF6fYnyCvGADk1oUzDPT6C73p6fgNtuFb9HbZyFStrySqdheuUAwdhddhDFvQ9BhinqRa36e",
  "key24": "4oQdbCiE3Q16TnMeB2ngmVmH16AA7yQ9LVxbgGMaCLMqgwfe3bCBi6U86VqMquEfKpjuf1dhEGdS2GCWuQKJvorn",
  "key25": "2hxQqXvhyMwXw5c2LcRxFbv5gcZzs5rDvRQKFWmb3pXjrnBWjvYu4u5JAJpLJ5qJ5j3hwRtE3hQYLUYie9uBjXoy"
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
