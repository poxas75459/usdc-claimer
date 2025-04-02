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
    "4Ej5Tm2FhbvFZYXibGbqBmNo2cgnLZ6zwhtCb3pn6Shsa3FfU2Ls7ytm6VeUTLH8Rp5ys6ufDuz9SQRt6ox57MCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4Yvq1cWY5u5MYGGycKhiRAzaLoa8G3DG7AsG5vvPwhxAR56Zefw53tifLubf45Q95mCoPfMuXb4TmzyBhCmgLK",
  "key1": "3PwW8xY5Hbv1dVh96RknCu53KBQ3FQHL3AjbkyCWDrCvbnw2Ra6L9UTGVvXTjPeyrRK96e7PqmLNQu7fw1trvL8X",
  "key2": "cm2emtat1GQm8n4iZb2QAE9dqRxX1wG3J6QjEcf22MRCXypwNsexEwhAo8o3nAYfy7LkHj8Xr6Lh4Y5PabXZ7gc",
  "key3": "y58LgUcLSW51eS4UPJN6QHsrWdCLMhEffqsbdvC9wAbDeCjZvML4LZGADaGhhkCMosZQoc7WD8XkjyQq8ZWTDzG",
  "key4": "2iLPG1SMN1QxkkiaYu2RioLYinCTAMCqcuUhDK8mYgqZXC323g2DTWNoUnS2dbhMksAJLAPgM9Rrgirc2FTfjuVf",
  "key5": "44BCwS54YXVU4e4uTKy9ZHus1kLAYjoU2NRT4qQFtuitmp56uMPY1WMDyMU3EXCwS2CdazcvJ1pYeqyb7Tp9HbaA",
  "key6": "33ZWxe4CVx2zqJutExv8PdDFJs89cX9TKCD7GeU7mZbDKDevAQZsnPw1odxmRTwmKmUWKKxtPp1B23GxgUXMyfqM",
  "key7": "3pfxazzUjjUznuTHzehVZLhVybH7WchxxFvaBHqXjMnadZdQP1uZRtbejSBe8PhhiFYmyAZXypmtvYnmKnfmyhF9",
  "key8": "55uT1C9ZNUZfHn4x5A3PREgqf5W7fQNbsRnEF1xa2TnSQ2e7gUjhSU6KNvye7XWfmtYWSKDtP3yqMnQgjyiHsBdY",
  "key9": "5FmkzdqkRJMeW3gw4faQoA9pQ8nxZQRr1GAFTRdBUsXgTyB8TqJHVtPgtdBDneKpvBERzo4aPMeGNUWurBjD4P6U",
  "key10": "4L6BjaSxZ7SXeuQ9pEoA4KX4qyhprX7HBnBZpbypb4yrDzq9GmS9EQRmuDMDTGhgB62cLf1EY6CFz35CEfeyFNyx",
  "key11": "4LRCHrLFAeReSKYyYpzfLTub5bPnnZY5HNWxDtYtXsebCDMjtvzrezJtUK3wFjPtSdzo1hZdKdWNmkiiqEhvojRY",
  "key12": "3jL2MUG8PHYNL3wFkXs4LyuHHdhvCUkVdYKAsa5KpsVqPLZjDVDvBunMZeawTgzVVU1SVdc7goH6fmcp6q4GadR3",
  "key13": "2Ci2eGfBd9oF6Ao7ujfekFqV25ae7esny77UT7nvYzincM6JAyysFx4L5po4BagqieGTBvpzs5edHsBjZnFd7NLV",
  "key14": "4QJq6k9ZD68t9F99jzpmTTqrud6xYVYEqdFMpVJjVGdF7MsFLNKJqy2UG1rUs3N4h8g5ExTZNq9SXPaWXbkrJ3Lu",
  "key15": "2iRCZRfXwjaYCLfPmXkttVJNbhXs2RBYBGCg1zB4Jhrj3x1EKTHyo1uHX2zybXpkJES3VQbEUM9BmYfUwXcngfQL",
  "key16": "3AqqU8XZN8UPEjESh4po4vGxsHZKp9grihS8xJ4xRGdAj7p5pLTzDFDvB24CqF4MwrWg9LUvL5BgojpV9whdRHWD",
  "key17": "48Lwa4JAmu6ds5teMruiDYLxH9chXBKoyHm8GwE9YzkuU2Nc3WgAiRZAJYgzvb9hkpdvvYqvqixFHBv6SN3iSvYt",
  "key18": "2WpaJtQZwCmfLcxoQrZphWc662jSD8xSoPEGzjXwMCZE5go8e9CzVHzNG6J9tREPHkDEWwDfJDRfnWwf2cmiAex3",
  "key19": "2YY97oBMqXaiNCecG9pyXyL5tHAToBHunibPSC2XjDkfDwnVcNfsB4c3iov6vLC3rJH4qUf23sicCeoypigPc9j8",
  "key20": "3amMQpuG3pfmzdmqefhKGeudxzy4jNeFjSWJ9CERFKasYm5si1PNf2m7nzydYxMkCeLPbuzaH9HLY63EtyQ33xz1",
  "key21": "5nu4vJjDhNc9CbLaH6UZHzfSaqPgYetP1C4cTsccc5vabkXrLc6WfwMZrLKN6k24foFydgNgFgQWNx8ziDkHDCXA",
  "key22": "2T9acQXaP6NFXktH8Nn6cYXjFLAVtNQy1RsjsCkEZVT7GekUNEVVXLRG2NdiHBjUpRvDfH5gbkGJgLpsaasEtu2j",
  "key23": "4xedZsEWE9TBjhwY61i3YJ4oWRbTYX9ZnSEjbA82jEhSSTpKsf2pPTzUNGgBZ3aEUrMSSyYiPfwFaLfbsGe9Tffh",
  "key24": "2bTDeWrMeA9tcLxCo44kTuEiUeCKpkWiU7Pt2zEv4D8x2KdDYJ4W1ZB7sgrxbgDZEWjqvZ718AFn2TvXxySoHo9t",
  "key25": "5L1PxvRoKWnuE4ajfTBwGB3bbSnMXXEEndL5zYYBBaUMrVQPXeCmdxCWRkTswyT7xzCsn8V8yTBAdJ1Cq1mKpEoz"
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
