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
    "3s31sx61LusmC7HJXiWKNPRrQDvnmtYf5U1PgL2SF38n1azvSKPtPHJjwsGuMdZb5hTeZ3hMhgtqkYR5CJ8aDTTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5ULdG8SfeWSW8ztYuWkSsDivaJE8QLk9tjjrrcqYrQaBZkTZojZaRvNc2vmgVA1RP1m3t9PdoeJJToaFuDxAwa",
  "key1": "61RSQCwHJ6uTT6yBeM9wHbUjQxueUQDPxCD78AAgTVmsPay3pYWtU5e63wXuLH22n4oWoNC7f8VkMhdMzYibRG1s",
  "key2": "4uMA5K3gEeqy7YGVq8M5FBwjvat3yZFRc6UT3ztSFkrgNsQnirXYKajUSAZJBr7sZ8areC1NgNdpWsp7ccZEgthf",
  "key3": "2WweYxRoaa6hBDjNhFgjXBvzMa7sEBUZwkzLQcToswNu8aKaeaAfPGTv5F1bapwKCEGop68PkFoMXbgGWPrFSZKD",
  "key4": "2fsJsqU8LP5hmFAHLaPrhC4wJevcPWZG1BkB5i73jP2SuyKkTjC8HhMfj7WPCHU6bufWpXx3yZNapByfc3jYUvkd",
  "key5": "3KvWkVPwXXDqv7snmS9Z6UQb2eSr7qQLnzw7d4VNpF2TndJXiNCH7Ti4fFyB9UpSptFVcfbu8ubwznKU6eqoZ8hr",
  "key6": "55fY6S3i9i7VDVsn1pgUEZPynmwMJpJ4BP1D9apzxbMgRgtNqvbw5R59nnYdHw48DDJ2RytzDaApenHt277aszuy",
  "key7": "4jgD4osDwq7YNbWzbZLdo4xZWGM2w4YYjCNDgEpx8gkMk8dYwxtvMqFstBoo8u7bYr9Lyj8biG7Nuz4bji2QbiU1",
  "key8": "4oxPuURdCXco8KMTFPLs8Lk8K1p9vo5YmcZcxXviEGMnmBxDBLSkW5jhC1yMf9XZeQtNfFEA6Bb43K97TBVjRgH5",
  "key9": "26WoNXubi6hiMjQZfjNydZoBRnMe1Cr6sAyKNaAfNKBq7K5ntoQb9h54nvS2MDp5Q8aVpuX286qFoeDNXfhfUnU6",
  "key10": "5284tbEKJCFut4hXk9EqjwBXRAuB97nuUk9ARqx8NyWt2A8sKhxp94L3ynuHsrkoGdUYUoBsBAfAJs6g9FFubdc9",
  "key11": "53Ujps1o1uhL8xmokGQHneiHSYZLWYsLNUNwe2J6MzdqKKEos6JyFkQ2BoN946672fxwfDtExdmE7Chpefy9DosT",
  "key12": "4vPg8AQgt18HD6uc58w5PA5JLuigjRSdy1fy1niFhW9K5U6SsbniQD6SdkJL5cBUz7f8n8CTRQi8UTSYjLLnkeiP",
  "key13": "3EP9jRoB5vf5BvmU4H3jHem7W6TrxrHEk4muzNvHvRPrgPK5kktsf7T6HzhB73PVTKRzQu7hsixgSYnhWM5AESYL",
  "key14": "67C3GvkV37e3vFaHEDXCmso8d4EWbVjncVq7fxzyeJ6862ZJVbKnDTzE2k2a4fqqeexWU4YMRGQvSGvRrZq9mJ1x",
  "key15": "5KsFo8qJzLiAbs4sBtygbm7GtgN2o6qcaRjHgTK9pbnktTSBUnmRZRZeFCQBAvnFUiNz3VskR2ScgJ5G1fb1f4AK",
  "key16": "2nBPyKsrQU6uGzn47A18pgFRhY7TspVXt3Lt678tUqUBvxjGeziZWWkeZT7T9QZCfh7KJfv5Lo2NEwZvb1Zz2Qyq",
  "key17": "2JSS4kT6KYvKJKWNjo9ZmiuPR47ADU86RS4DPcg1DxLAi1kYXwGCJNWUvxKfbY2QUU8VVynTzTmLANW7TYDUhzyJ",
  "key18": "5SpUUzPcwzTUiCqCTMXwYHg4GEJ8ntTJd2amo77g1yEABeY9Np9t3rTveiRuHXMKki87Eo8HLMp331JGTmc4vkkD",
  "key19": "55bKQ7siokQCWMtejzR2bVryf8iDtLxkGM2sR8CFAyqu8QCQ9xTiTcZg8SmzMWgFjRKJATWh88divQk8vYeSkWcA",
  "key20": "2dbnGWd8MRfa4UNW1rR42qKPFMBucSw6BS46FVsj2jLpJ7YLPESj3rP4umtE6y9ZiziERVz6iunH46Vjg2yRbGQv",
  "key21": "5BHUMJagvUzW1a7wWpWgcKZpGJUZoL1BajU6CbCnFvwSvi68bcjELgzsJyeDZTrMES7ms7CGUvogbDKqQg8mp3aj",
  "key22": "3BGgEjGUDo7h7F64mNKotdoFp9HifrPB1FmjqSQVE7MpcRFMoS4HEzZ9iWM88yNPxtACCkkCtPNrSS1uBJaTdqDY",
  "key23": "494JNqWST6qrj5uDEH6xuN1DZy4qYC7tBb8jSNmuQWbyoEAJCVnHMQPFC5EinRAJRooNgyKCcuMfgXAaBZyTWZiZ",
  "key24": "4ntU8ZYdPbrg2wYZbahxmjq8r631iZBoYFp9bJk8YG9i8ctZTGy9x1uF3Txu8vJYZXvAPK7aahesJXribJGkBBv5",
  "key25": "3nftefQygTbXzrKHSNHFtCMQ1QV5QoRcnTTK9J2RARvxiX8EpZjNb6k6MzvLRSZy8nYrBgWVYhF8JahLGm6zosx9",
  "key26": "4Ap4o1QhKiXfMed4f3rVpBMjGrVguJwkP68vGMg9ebArUtQSUSpjoxjdwWonp6LPz1FoyFPxZW5Y4zkAxa6BFQR2"
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
