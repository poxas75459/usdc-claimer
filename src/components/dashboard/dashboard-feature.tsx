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
    "3afZ17Rbuk8tLcvpoAPSoquFKxCJkov3YWEWfS1aRXNVjvyRjfqAiDLnf3RGyL7eiS7prBoxqgaDUDYoRr4pmRQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PiWwRnRgnHr2K51CiLMkbY54PXpkkXwbLvJK9CqrsyNYYTgCLBrxLsA4TXSnZkcGhKwWH4U8Sb2V3jgCHQUjgfP",
  "key1": "USc3W1SRgF5Cwf7CH7q9ismbp5WUCRqmNRHdR4Fk7t54dCcGt6ybU25jHSCGBrawXdNypYPrG5NJ3svAVQSnsau",
  "key2": "4ztEtEvEGJMBznFDDRq7xmwuK2W9tghLPtif8EjxaJSuMZcvLootNcPBsEX4strWtacP2QhSB9WdRMvbyJRMjG7S",
  "key3": "nxnWwF1t5NxT3RbR9sCjXCCL2TEmvtuR2sV2MN8YynEHRghKdT1mrtXYPuhPceahVFyhp6dxisqto5KEFSpW71M",
  "key4": "3dgwnMtjRD6SSjAyNTtSfrJSAyH5ibWi4uZ7Vk61MEBxjt8uAET1soM5mvk2mnY3ruBeuLd8zyyLDZLAXQZRxkoE",
  "key5": "538y5dyRd4TCFGjL5yqZJRmn1vHZg5asBXd9dTXdMDRG7enNzCFwTQp6t3zWhNm2zzkerjhTBcvWt2EE8dtZWpM4",
  "key6": "5kHR33MVYnVYDny4FjJQn9obPpuXy75YN8o4abEMvvDG3sPynURpDE9o4UY14U9eJeRPaxjZTKVDz2W7QbWK6NaP",
  "key7": "2ZTzjiBV5oxxD8JF8qLNoEoMUpYXoGenEiyorK5PDHbYBkaFw39ZbnbAaCjLUhcexHTvVzbXbt9GiA2zsyykGVDH",
  "key8": "5baABLSxDc2CtXLmFq6XQQRpkRjVu2V6askh2cDf39eXotoxrmuYbpPasN4SpsdSvxGAvGEtQSdbxuKuq5gX2QCL",
  "key9": "4r8QfsaGXk3WquzWUrzVqMZK838SmUJkqs7GZJsPU8LHxjWcMnPAfMx2Pg8wscwzei6Q5y1pBiST2n59fMYVzXzg",
  "key10": "4vbAhodF57c4QzgdiiRMFmuhAX8cbTSxmjKgHKgFMRcLZmrd92RFQhxFnf4x1X23uVQQTKyDvpYTeJBhK8Fq9Mfb",
  "key11": "2fes3CYLGgUh7P6XfvgdsGCJLLhGrKB6ZEsNXHgpm3Ddpq7ycNesVWdE7NDbZhthFwcT3yQczJbAYWmfrzqQw7gu",
  "key12": "3mungGfYXmFe1x6gJuuUpTUGxixxkUW9REAAcEBp7LNaFKG7zGebdq7EgLNBuNfpV54y3TshKzHf3duzcaedezVc",
  "key13": "Wg7tLCG9TXQSKuJqD53VLtmtBQUnqTCJryoBzyFWLW7c3sVAu9bsrwJcxKihKG2QG9XzLuyNKkjK4g3myCn9Gr2",
  "key14": "3Vb7KB7B1G6o38ABmtGM44afzuM7gkra7VUCy9Cz2WWTXVs5x2H7JT43hCAdmcYQtauFV1EM8MaJGGTgwPrz6xpX",
  "key15": "2TopcqNwD7AWFGXTQFUqooZXYFHdBwS48zF5hy3mSD2mvXhD4Mwv9eUrvrZtoGqrzKL7KgGX9JQbSdKziJDudco4",
  "key16": "3gGh8HtLnVxJoFiGBmCTMvTBBnijL2zWoFHQjVv1rUfVnxSLPsfXXZSYY6VW8oyyx3mdKXeBTYYDh8dbKrvRgbEQ",
  "key17": "2F93xvjeyvfSdiErB1NFqfecKhvXR71MyjYspsQyJpDJiKDvegDYfxx9h8oh12KGEBUf5zkbJgrrw7fMcbPr56JA",
  "key18": "5F3jWEQXPDbEht6pJ4HpPkC1yKoVFo1L9CebytesArahfEt7KpJh25EZdTHo82tU16ADg5XqExk793r1Utt6kikx",
  "key19": "4smDMpgywmAM3sP9RF7L8tfUbXqwqT976zvySZLnvk8VVZ9D65kk3y35ZUwzRW5X6TeCcr9kD43AQwYweMNbMPoq",
  "key20": "5feuVp9HvxHWPkcZvW2Jk1FKgKHHH2EYnbeThfyGeya7ZwAP9wfvE7FdXraHQAsuUxXt8XNNHjZq81EE9FqhkCun",
  "key21": "ivevELYuhDaX8rqza8dMCKRBWaf7wQenAxqjgLtX6DjQs2LPrJdCLcaohXXNZnEh6TD6R1pXLQ9UXQiqnYUbyhY",
  "key22": "nZupfWciTKhnFc6nHqw9i7nzE7sKAQP8RKLjQ7DbDsxRCJ8CPcrjCnus6Zx1SNsdg5tiptaVYsdSavLv5318ekQ",
  "key23": "37mdSaH3ZtH8QcMy9VaQdZp84ZirdHnpfrz4HMHphy9R1UD1MiTw3bSrJQndHhkUJqTAW8gd4hVdCWAH4EUMEaAz",
  "key24": "2u3wn3jsDsgNuRGM6JeKcGuBVKw5qLR2YPeGHx4eW43s7sap7dBSWabkzoBWm8uadNgKZSzwLbeFj7eju3UfwGXx"
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
