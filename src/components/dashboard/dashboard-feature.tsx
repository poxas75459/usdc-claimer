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
    "2yeGXSLQAjVBfsupPioDuyKWjTJyZhKTj42Mcv2tcVXxbhm7Bfd7oMXNV4tQSf5it9sVfa8VNrFGyFmw9RuSk4kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRNCzddkYYeaZJGpm4qNG2Jnq82Bi8qvg9ci7jpVJ9bgCcEqCEFJf9QpfV7t6qcfdqAA9GP4wZEEf2QpqZn64DN",
  "key1": "2EbavkyT6BftXqKH5eeDu5G8TfrxRrt8ajRXBHoua681SyQTKv3dxr1QvvjSvyF13M5Enrw9jB1Mi5iDfy54mW49",
  "key2": "34FVN6gcj4qZ8umjQY1uWfLuGdVaFrFwhKLfMVV1D56ufVGGvDJ8q4UpSgKQHma43Pg8uTRa7nZp7W75HxtKUehm",
  "key3": "3MB8Z2UWF9uCJWgqtbKxer9mN3p9LMDzFr3coTee4Nc2yrM7E3zKr87EXrsKNA7xSA9pMVXcisnKhz6qkLhUCa3Y",
  "key4": "4Tfu6jJ7CZkbciHQ6o2zaicibBHGf7voS5rHZRaJMWVJgP5QBi3y4t3agRbX7cURDRg8pHLyzXXMNRQSAwjA6T6c",
  "key5": "2U34AusunnbD8gZbJJfBkUCSbu1unvkUD16tqAyoYA1rBVcrStDRztugZe2wt7oUbG3H5ETqpVVhLuMj174qt82e",
  "key6": "4tba4AFn9FNwS7UeNL483DpLrbFTab4FWmwS4zNhtA7ZGmzSfPQUD7RKc9NtaZ3eD9rJQVaXWFTYFLZotpfyb1oU",
  "key7": "3zC7Sr2KhaG4bYrQfwPVkGVdXam9aneZU5SBNRd9rzqusZ8aZYaVCcuogMZ43uaVm6ZbeWjsYPrtsdCvoBTb3cQ7",
  "key8": "4iY1UCGV23Kvq2pJ8giC6MxXgKjuVJZGYDd3v96yWQn1w2HQBdYtQ4orneSz9ujVDRm5tyE7DChJsiRZzrZngT7P",
  "key9": "2Yjcr1Lv1FejjNUbdADgxSiYVkVydXNT1QPayg3NzcDBzcBKx4qjF172RDpwa9sjfpQcG571rQEoYwBVHDdDLVD5",
  "key10": "HzBjWV6NBvw5UR8ewuwmBcNeinVruRD2MmuKF8jUMcGTDQWLjHG6wcCAf3jJ1En84rLPiN2gbuuujAsDszgwJb1",
  "key11": "H1UgcDUf3nSSiP87txorra35cbDgFYGJ7H7UFP4MSqaQdDHiLFhSZpUVAMqKFLPXKq12LY69J6fRmGpfuhmByd1",
  "key12": "3T6s1Vn4pAxx284g3YvLC2fixcPt5a1ZtUjb7anNRVZ2fjmwFGGvLUSuU2kZXBmxCqoGZDML5e7SL2bf8SAPJQ8T",
  "key13": "eCGGnJ69No4C1GSEUDwryRp3HFAojdaGB7JVCfGrGvZQNot1PW8tmvfuJhHJBMq6CCtNqUEeUQoMtec9Zc9ZHDd",
  "key14": "4WPuiRFP5HnZ7UNh3WuzHL5Mfd1FSe25ovXeicmiAzeQabDotFKJxxDuJxmsLv7x4fwnpiAsW9kpo3W5YFC5irnT",
  "key15": "YQigLRmSrFYDyD1YpA4NoKsSqta6cDzcV1gnqMchwBUW3nWTrCudjkT34JpaSrzoqF7KV1a6o6Hq1Cyc5wyY4u8",
  "key16": "3U97d2G4zhy4VajNYTrvFtPBgcUmJBbsA7m9CaE3tYH2R7836fsjbBQqCMDicY1uaKeT21RcZLmfqmd3bTqSjw5z",
  "key17": "3CS4zZ49dVHDr1fKhqhHWYhuo1NNU4DpgkMEfsvrsU53cYrHnCZfXH8bfjFNwrrn9QVX2VNv2AiE4HxXHn7V6ASC",
  "key18": "32zjidHNKbFoh4xYED6Q1bVYS3g7eDz5YzwKyhqrq9tY3cbN73aMCBePjA9HJT2a1TMfXVvYgwdHsJJzVvG2UJur",
  "key19": "2BgtKSWRJ8tQ6c4moU61LZKYqyFhWGJ5aMPDEEViYAn4edsu3TfsFSBvgLt4ztxQ549JvRqNRcQJbc5yFeNQxzKK",
  "key20": "2kfET5HkBKJe2RJNRQCmAFhGdzDKjsESnEumjRYYigGLcBPtpv6mW4xTKpp4eh9x1pcXR56AYmr4n4qL4X1gSHzs",
  "key21": "3beXPnvMsKJKmdEzFuHxHg9BSzPG2skeDaUUUVau28bGAfrC39gho6NscATqiTqPwPSumkdqeNDpgx9HBo7NgqaA",
  "key22": "4Phy9mnoYecDTAASxMr4ZgbF6PaV7bPZBt3H72zf2hF9G5k7ouGSGQYmKrcm89mrc9ohWEiQD7r3KRoJznM1TYm6",
  "key23": "5DXJV42gSRoBnHs9gPSWwa8T6A4jv8YhLRpzjqevWGnG1pA4ojGvnXu2evi9uSHqzLQqw8qjhCZKzqBDEhbxpP8j",
  "key24": "3jVAj68y52hzdqwvEqHqDabZbdtUxKR8Ncg5fPvzAzdNKCLWt1RLKsVSSopS9yCSx51P68FiqBuP4uEaaSR3hvwd",
  "key25": "5kp4fzsER4hGh8QtUGRxmaCHnRq6Bp87Gk8i7ZitKDr2sqdfDCcQwiEWFZDELK95CLvdbzRHk6wPLCkyFZhWmJFr",
  "key26": "4kd6wTqHNWhL3YWcQDTc3tyHB8gtGm8FwVh6fjCks3U3KP5AoRv7GPjvm6efhEqrExkoYhCLe3H1zKyNJVvFtWNK",
  "key27": "vHcP1bM2c3ZTWkZsR1wpTPCyLWjgZbwetz4wymjFivgDEjMgPngeGjMKrthcPrbHTskGjrafvgUaUj2X5grkoMv",
  "key28": "FsM3T2n8pyemSQZEGrhjYA3qf7BreWU9YPMonSTM8WbBw6JxyceivWsG81rD76godk6f95fjGV3FgG6ttwfP1TV"
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
