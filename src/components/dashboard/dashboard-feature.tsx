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
    "2BovT6so5bhfBVEnA2D3SbrEVHPFFKL9yGyrzXZeqpyqXbRcERkENg76avRC1pKkd4zbFAtjLrn6FujwbUAgkPNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnBfHTGX9QaZHYNMHBZJXcGrN7f2vJ5oFgZQUSa1GrYZoi76AtWyV2ng9sgnvbAPpaNy1WdDattGxTkjLWXSAhM",
  "key1": "VJuNCVSN8YVfybMGv8KDKHtfzNpGUaAjEA35HH9ssmdqC4gmyr3Dkuuug37wGH3Fe69CKTJt49Rj8pnMZuMpYHg",
  "key2": "3SfyFA6ZZeyjuZCrWxNofNBptDxWkT5VRXtBX7LfuwSGyjzctpRCUWYUFVUAVvAi78xtXTSKA1jBeMXVzVALBTMC",
  "key3": "4Yy512b3rrvjyGsFLws6UoE6evuzxpvmcSvYUEqAWcGyVeopA1bViqSQtTToEWFhrP6Bv81zYzaYJgXrmQALHYVj",
  "key4": "DeG199HjgAcfcZrk5bHY99RX6TXTpzFoczQ8YPbMJpFtPDcfXLn7NeH1bt3sgT1gMHzhHZTdZyCvQV8r2Lm4ifC",
  "key5": "5uwAbQ28Gpiske8aMJG86vKoeFJhzcQV41mMdVq1YgQc14nwxxfGxJCq5iCFCsB9dXWbN8R2YhUvKddAqG2xM1V4",
  "key6": "5K6LZjpWoCZEkurSJjsSEeACW6VjJZ4c3PLUz8a8Y3K56fCRhc7zrG3pJsyNNKsg7xDVBudMU5UC6N5PngWJi3fe",
  "key7": "4ABwMwwj9SrgrMhUvozzXmhfqeZMYzTctEjnUoSaamF4giwHDaUtUKJR1vwofX7GQvztaJFcxzdvkvcVVgbD9DaR",
  "key8": "47GNfZbX3DB1yGcyWm9yLBMASJZzhaeJzo2FYB1BkabnyLAcXsLCabvEaDm7rYCUcSYjkmZwVqZh6GC69GfqFnmL",
  "key9": "56Sf4kHgV3tvPUWExfmVuGx9L5866mUG2G9mq2VD5ZXCRdwPSvQ6aoAP6jrqwtD9owiunN9U7yvn8UcJzWn6zgL1",
  "key10": "41SQmY74kRqmgMwUWc4TAZWWUpxmRbZKjKjDst2tsa9RSrrudEgUx734vTdDkoLsnAdy9yg4n8EJDD5TUNsCQaUS",
  "key11": "57NYAr4Wy3gkKGuXEKz81idCrhSvKktz2EyWzf4vkgvaZhagwUYw5MDWzWRpnx7JvQZEVyQrV4nZ63CbX5RgmugU",
  "key12": "64XNHVXh1UWM7jZppCi3vTnJTfUxUGjqFMh8Nx1K4mUWAwsEdeotuD1KKvqBnY9ZrSRYiTTy9ix5r7WJxeyYePqK",
  "key13": "4VifvJM38TJuEm7kGwyzxVHvgh1AfKr8s41qoJWh6gbH6gdT7rpoVBciuQRQJm39zrn4XHcjEMD5WoTD913jPDVK",
  "key14": "4SRj7c1Ecg59Z4gWBSZ7utk7R7T2U5NPvtbLX2uTk2gBeJ5quFwCq1566r5YNdvzy2cEjSGZaPdveBu9PVgHbT9m",
  "key15": "56YMhJGbnABvaUP8mKtkuJH6NYsdX6jbmyh3pzeE1tZSLggZkMvWh7wgQKaw6A67C1AxmMK9m6WzfhXBbYH2332T",
  "key16": "7HkpsBRWNXabXyRVktBaqFBPNudQyJupD5SVQ6fe128sSjUg8djZFkHbcseJmTCD5VJTg5myy4JmbzXxphw31J9",
  "key17": "HZjDaGpCzYspVatG57nwAoWJRyV5ap3VmZmARpvsuvdkM3ffyXoYuCvHTUMRhphaC8mdfDBDNWqC6WCb5b7Xnd4",
  "key18": "4UGqd39PcaDGFiHSXoxVZy37k7TvPZ7eaS6YufDjsD8P9zvQvKqCfQfU7CMBAM9VGwW2PsGiAbXhN4qPEJKZETUV",
  "key19": "2hwQdsyWi9ghasg3DMMVBVTTGinFuy6GT7J8w92TcXUhx3L9S3b3ndZ54NEAeZqK3iGpjKGZuo6SWjgvnUY2i5wy",
  "key20": "4xDNk6YfvCHmPeTXoSLx5pAxmHnPUhYKDWFGMDn8GF7h5YUjeTX8SC9Hz8tApknWtyM3ZipucPYu43toCB3D3Tom",
  "key21": "2HWcWeZ9wPeeAqyjfo8aSRojEVv899kSp9nCZgBPGL6JPUeYPv3V3aexr5YHTLeRwdQSfBBMcvgbMTPbHg7JsEZj",
  "key22": "zwKJAtfexVFXkRQLuE6p1x6ksHox8MV3G6T1NgaKHPb47Ft8uEgmMJHzcHa7gEsEYtZXP6sxXfJCJRLpacX9FD2",
  "key23": "2iMEdAe3fAajRaTyuYZBTF6Z34KXuWq7X4df7SCq4hJQE6dB5hSTGG54qpgFuZfNCeKktEipveirybEizYkfBiAj",
  "key24": "5SXABJ95eP5B252u5JVaPf6y4k2M3kZtZUiAycyGWenWTH42d53bWjAco8QfZSnHDE7g1pm2817qeDy1sZwKMaSN"
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
