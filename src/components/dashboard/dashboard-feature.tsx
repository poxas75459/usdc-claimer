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
    "5PENCSKP7jg8VtHtYBS8LWQ1sMuMPYuesVzvDqX7KqaaGhs2EQH428ryWNpPdS8dGth34buruMbLPhLDWC2bXj5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D4UcJY6N8pDb7NEXDTSs5856RJAF4DYVYoQhWE6uivG9MjUkbFFWYCWpjbNopReR6DZiuu61Awfs7sWAVMvg4cd",
  "key1": "5eei3S9Efk6KTjdrH85kYFmR3AYDMGsZmxoSMBLq2ixcG8RfPxUpgSLbFzuZV3a8cUGzJeNcQZQ3YiE56MGgSDR4",
  "key2": "2Z4YrR23a8mtsAJZTLrm3CT6z6JDL93kwX1p9bkTQfeswoEC24g3aTvaZQAAGt42tyJBsAf8VqaAQwbfD6rGvQxi",
  "key3": "5EoayYmpNCh83Uw8zWrzf3V2rBcWMv8z9f83PruQuKi29mCPYb9HW3NARwkpYpJY4cdiorwJ4d9vd176iyuWbDLm",
  "key4": "5hvGFYXzmSaPnkpMgjWvhTqbqs42SSGRGJn5rAmL13vdXHN7ShUFmZwpXmyuZ4sefzXmNVSP3uE7fUdzZ4BX3H5P",
  "key5": "4a7Ct6M4vNjzsRvKtNfPkJXPmnmivwLN5XcZ3647NHhCTzgiKR2Su9TCroYXmxtUqiR5m5jupmndquuPumuX46Yc",
  "key6": "7G9s3gaPr2PkJKTPgYYxd1Eixs1onYrGiVy1HcuMXxBwooTxPTYQdDgCMLvZbE4mRTDV1wYQ7gvYsNaGEE4ciJf",
  "key7": "44nT46A3qvmTLrCthLzzV5d2rJNLi5U7MzyHSnNpShGAG3un36rs1ncmdPuEZgwtNZsdEbzH9kmJkRh62cKB5nMF",
  "key8": "CYSjNY383WaEFEF74cHKU7JY76LJaNYs6B4k74q9bLDTthewoZrHxrQArPuFawZNsqJomD4V3tJ8PuCEmZuwPKd",
  "key9": "3VgQWkRAQUnQZzR7nNgmnRLfoHT6nuLnsAKn1n2v33heGxp3bD6hGs8FRt34CFcjYCgU54MTzaSWX5o8gerXmi4e",
  "key10": "dsQJzZv1Em2MikXSCY8esNKyKqZsvR5cDvNsutfgtZHwCuMWt6Rdpu4Bb9XhD16gFUGpVRTCcsXoxdmVcYjNzZs",
  "key11": "2zke3At7HrsyHWiBAvdBLqfCvCZ7a8tA3Spj9q8xawCbmBq7dW2gBLHWKxNLHNp5bqDN5yFq2aTGdLk5i2Q4N3QW",
  "key12": "2nZfviM1VPANspd2n346z9aPghNmDaPevhcahvkbm8688JhoswfGPf8SZvmijMyvjDmu1unXqsKHDH4ebuPJVR7f",
  "key13": "4wKLhE8PMiPhCEfmKVugGBvbMyyxbzRsd8mJ3Ks4vzuacP2y5aowWPzcUkZNgweThsBgzGe7uQpNZDCrNxMNRKnr",
  "key14": "A4r7ffLeGkW5fhqDcHB6Yi3jEafmC9YBgNZBb1Rc86UvAND7s1tnfyQbfNnVyHLt33pBqXJ9f93u14FApc8HRAT",
  "key15": "2nSCthSc2od3XiKrMXeDDQ3EbtX73crFochg34qbmzWD5mErLRK4EfiGH9ByN5iX1gkut5RS9efjCjz9D2kFX1vn",
  "key16": "2pHzVNiarsBPzsJPTzNTY24rbjV5Z3XpcLNa1Q6Cx3XXZ597SAFqhW3fc3GkjRzHmQRwJ876rXDzxEcYaxCe1zaW",
  "key17": "2XAM8XvpRarkvHKWa6FTVjW7t6zEAR9wSr6jsx1iGpsvnXDdX9jSZ1NqSLR8QFMpA5BUzcqyyUdDxU2TNLPUNPRJ",
  "key18": "5NBua1j2vHytYy5jgGxvDR2VqRth6KJbaNtXPYYXfUUekRCQqmYXchiFs1Ur9sEYFbD4EF5edJ3ByBp2JkSTJimN",
  "key19": "3kbsVGRHwLJ7uMowgiDft5UsDFJHYfJiydFkkwUsy3R1MZszC42N4WrZGRJr12vgig4vH8NdoRPvEZoadw1RJe5U",
  "key20": "y7njtGEqnwtjfEMvU7zswLRz4Zc3M7K2sW2VnL3KkG91sWjwL61YABe57xC4Y7RN5rE7yLueK3DRXpch4SPpFW7",
  "key21": "5ECBV8oLQYru6eVfVKzxtXVHdygZ8A7YA4FQENHFtemBwyCADubKv23H8inepdNN9Y86riz6jjb6UedwXKUvRMcj",
  "key22": "3eqGrnkr6kud3yHM2QCJ1AG1WCe77wV96ZP6ELRwkMVVsCP3YckgtRLUUSTnYFNFx4wCoskHYJ7Vy6ptFnE2S7L9",
  "key23": "5Pyz69R9MHqiZPKqDhXtmcWtzk7vGPA3r9U4qEL4rC2fLPAZfTZC69J1VMrMCQjqCwqDbCvxcrcfYAy3Xng7uEGH",
  "key24": "9RXHgvyNxhDKM91LjyjsFEdKRbZQc5KZVbU142us9jkeevkxdSFfwkv2rAspZTRDDpzxwxN8PTHj1DVWH6XzexV",
  "key25": "2bFWVXbFra8UAcUYRjsAYsw3mVVDFfhq1jxm44m7Nvy8vm4Anv3DTPx3eRvS1iSi9qkd9dsFoqoTdfoQduhy49D2",
  "key26": "3KhCFfAviSbdZMQZgKaB1jNtyhjtydknwLWuNaQKERuZGD3HL4gfy7eS9fGhKjv41iEM6jTcvx9q53GLnHsj5Je1",
  "key27": "aYVZig2zhi1ZFDn9y6J3FkwfUNk9bCnxumaqxQXnWYDFLzamng66ANrUar1MYrWxq9uwow45LE7MocztyDBkXYg",
  "key28": "4fCWTgjFX5GCoHox9YxrijKSrcXs395vbnMjjkMK7otgFQeKqDjn2EQixGzEK9cQfvyzTdKcCHmt4X8ogUxr7TNo"
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
