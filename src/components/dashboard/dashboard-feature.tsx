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
    "345Hc3eVs3JZWwkTGNjhhJCVMxW4yFrPmbobXZMM6CNVBDY3fZoPhK8kUPdDTKhJvsKM72idKc2f7hUdEfesyzo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dyHHj6XeKE12uobEHA3xyjaYEnyWFq8u4UoDNhUAiXJ7FZyHUid9ZTUvL4Fvw6AT6S3QuLsF3sLhCoRDw65zkC",
  "key1": "24VmggmEFvjYgACxjyDcCRGJtnfCRGbU4A66U6fu4MuaZQYUZ2JkZcyHTffUJ4oh5yz3fWd9VmQbkocbwDfD7KYD",
  "key2": "GZhsoCpvcvLL4JqbcZxnEeNvXBJ35Fd3ji1YYV5Nv18YHu9d2cqqCU2EhLyKYtyW3AX2Gfgc8quyihopLuJ7GUD",
  "key3": "4S9xiP1xD74Nmbt4K1MfA4bqMCQoURizqGxfjAeq3heiNkAdSjjGnDJxcKcLGXnUgHFj4Bq6EjwavWVCaW246UZq",
  "key4": "2FVch5Fc6QpQsRmTnE1ioqmXvf4u1HEhdEF6psXjuvGatjHQ86cSJdKKtygsoCKvwnHSbDxvzSrc6d5Pvk73nW2D",
  "key5": "496gAbYGc2yPU1GoL4vyRZi8KwqheU32sp1mJya1KJax3utJMVsADZL9R8eFDaLB1NrSXVwUqmLVtfPGUfuAbHVf",
  "key6": "3xUozCiMSVCSnSmKzQ8ffxp2mqhbxUmshcJG2JH9q61QJvWbXGM7P59gdiLSxtafxuLGJP3iFVCUpZqgEQRLzNmY",
  "key7": "2YEqKAzxzKkS3mfDnSgoVePaXk1soii2UZQeZHGyrHNFjU1H4x4V76hZvZcF5adEdbNAjCwXPwFJSxeGaYaa5GkJ",
  "key8": "i23f1vfgyMAfzV7eLcgLjJT8qsxoERXDfV3PaC79itSvFta1qzH1aADuqauYNtdmrYqL3LCDKptHkk7gWKtdThP",
  "key9": "4xMD5FWxDme5cougJFJRhiAB6W16MXT5hgV7PB8g9gEmQmhdD3aBmuRUQeeEP5dLgTChiGwcJh3fyhTMrEmqVDRm",
  "key10": "2dkbEcmkKRmi2qVrq8eneCkj49qW2z9WT73mwFrvqjqu995NAnA9BVFzv5nVhm2t5jbnSqSjxfztg1GKKvGFdEAg",
  "key11": "5bo2Y39oDRGkrRQF6R5BC5NC475he5ZivMAoxM9izspTWYMyHgwiiynXFZidiheMNBkCpmN2FcwxuVePVDajm6sT",
  "key12": "37u2v8jAWSg61Zh3583zWdQFVjAFBKXk1Ld2Fx6kmKbe4bA8TcszUGVetyky1g6NHqyHy9CJXDgd5CKQPRBVM9Uz",
  "key13": "2mzTvvMRZDwj54aQHp8L9hNE29Bp6PpVgzPMPS7a9CBo9RZcQGjWQwhbQoSfqWdzgZf2Dq279pjwx9qnyNMBS6yw",
  "key14": "vZw1fdy9vmyG9E5MaCD8UZxbgvq8Mn3HuU6iaK9EZMP5pWd62k9mLi3XvwVqnCVrEwVNw77U5sHmfb4xTqkZ1zj",
  "key15": "3zJNZ95EFW4bDYvhgihdWN4PgG7eS3AVtcAZA1S9Kj8ncKNRvf6mLKu8eNRMD11QvNNp26muAuckERjtYtUMw9Lx",
  "key16": "4PRJb3obkhk9tfJkidg2RdFQsukhTekZcNKWtdKoLd5b2kWxEgyjRdr1hv45HoAYfnwYGKqjhCnPECEXhNCev95E",
  "key17": "3BfWxDbLugqS9iY4JTbM8TWd4MFLHb1Zj6KAecMrQjEtGGDb54wtw9f5CGHP3ZZWuuRpp3EG1pfH94FtYLw1uasP",
  "key18": "5dbZWZbRpy8PJgciYrTQ6ADKsgnfGNnPtmLQjA1NZw6wk3QTzF6pE9Mnirm4ArqPW2XVzVH7yuDBi2SjCCpQ3y8K",
  "key19": "3x5ZLSYeD8RbpLvtzvmokM4uX2YUwfDitFj1g4gohzNPmcWNWVHE45QfmdH1BKorGi4eXYXbqHuqsBaV6KkqgRSH",
  "key20": "47u1x9vEoPgJHSHPzzo7bbBnQGzKUE4KfUsDwS3egDQ7dwWd9Xtwiwm4t67Dd81niGmTJEDJajtihfh2wpMM9cLm",
  "key21": "537RmGmyPQCHddJuvNNSbQyU6JTCkw3zT1oMeEnZLXeopcDCaAev1qZ9v3sVgKdwn1gXh3szPEaGDy9CbcmyuTVx",
  "key22": "2UPXsuLcFHPa625Ksy5G2vK3ekx8hmFuk84b6qEJyPr5H6xd7wQYCwBj3csw6SNS1Q1Xa6oNNchuejngviq3WVVp",
  "key23": "7AKDKY9UkLitESx93sL18ZfYVXb3YENu23smDTn8TPuu5vEQ2EMFdnYemRJDocuF5hgxYgV6Tymc15QTCjULWCV",
  "key24": "59vCsC8YxwNAxqic7ZLzQqKgRKvNoAJ91Q7fBadMWj4w9GAYuq75VxLFyEWownuZ8sHdHau78WfGx8GXuhCDE3Te",
  "key25": "5tBZBjUe5rjM5jGAPAerbhM5hXa3P7ywERqYmx3W4cNTMyfPV36HNc2eW8RqQk6PenFKuNCtKxZote8jMeQJ4YCZ",
  "key26": "3yVd4YMaKkWcR9UUM7q9tC65WE3UAmq2KKx6VipzxnbnYEYEJF6VhSBruU4nx1o5M7YyMmqTfMQLzLBhmnncQeKm",
  "key27": "W5vhyS8mJUQhgaEoxdAeAi1xBvM6pBR49zWXEz4NtBLCvPrZMHE2u9Coz6vzds6dACwhZAXoQ7dH5kxdNh2XNQF",
  "key28": "ebDzfCaBxe2DyyuKfAMiZ5LRvGMiRnDaB7JvavnbdvH8dRRGPZSnVw3fYpK2fhq1EojrkMLALidxwoSo3UA3NZc",
  "key29": "54Jjq7doFnGYC2p6yvgTkaWWMMyupbxWzqjh1fx9qtXrzma9tKnB7AQhVwAxj19UCTUx4XTxma4qjESsTzRip9TD"
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
