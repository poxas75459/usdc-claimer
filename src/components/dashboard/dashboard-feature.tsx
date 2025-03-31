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
    "2gQgAMUb9MNCZToxmtTKeXjztJZKJNjuyYm7EN8gVQzWXh9BBXHHE3vFV2DMpTCvvw7ADbVDkMf9Ztud2b7skmJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adK2LuF3B4kPS2QvXvPmk32xZHkHrEnXDnJNfeo8HJcGQDaAnnc9w9CQKYrZv9C9eL4RaasPWE3773g2Cy4SuUv",
  "key1": "3BGBJzCW6MArRzUAz9k2kpndhrgNzNHUMjxVeHBYjMH4yQBbDdfz6YcgmMyhVtivmziHgeRYtnDuN4U8pKb3hUNX",
  "key2": "3k28WQFiUAoAZHeNzSx2yKKorWFaTNHtAuzn9gc8Mb8TgxLYQ79ej4xF17wjeoc54UFmTzRMmytugddgN3888ZqY",
  "key3": "4iu62rxDLM6SRha7sLnKwRs7nLdE2JTGXZhLmV8DXnwzKePyu7sxmnU4qC5ojsCYohazh3cBR94ybEs41HRiLLLs",
  "key4": "ebUx27qiJMJatLTdbxJPivpSniSMpMkJsAnsC6pogRU14RSxTq7ZMsrqKvX3xt4GjDhNxJAjmfgbkj3AgwD5E14",
  "key5": "poCEuTGR7wBWpu6Lr5YN4UErB1u4m1ei2qUj13Bn9mR5oJcdEeUsufy6BsUCroxoPF8s3X5rAAcH3TFzwswaMeB",
  "key6": "2JdKuszYBhoWN6ZaVESXQ522zfdzwkSMTk2gQ88Lf5MTz9npPjfwS92v7otTja2F985cm5BsXrZSudTjszaq9wJJ",
  "key7": "5cgAVYi9AwA6rbm4H1LFzgjMq5AGNCbWS9vkxD7zprtKJWvuD5ywnfFiutm7pB9fcDWudB3LVBgFj7njtUSPuzt6",
  "key8": "tzVubTh1rgNpiTWTxmraTxddQVKMrUdguwDRCxRvJzN6dq7DSEQsJttyTXvBgwMUF6JqNEpzvPKikjZWJ6u7gAU",
  "key9": "3MhF4QTbB4aHusXETrjsdRLUrEgre8pyDVrdEDJrs3YXWmT3UFyXcF5AzjBZ91sbho74gaBQ24Q9wpTABihCcabn",
  "key10": "5BzNDvdMGBSVYdsPhJCRPwJnHSmiZt5PUXrYYewPs5KzF4s1WfP4EU21XpTud3jcDAYyBoxR3r1c4cW75TE7sUzw",
  "key11": "5iSbRiN1T5rP1dn6E7j4CN7Q6Yv8HcuWKGtnW1ghCLXk6qNvuZcSJ5TVaSterd7ppDmsmhSRHuA3a1cXLxmrALBT",
  "key12": "PNgkPXUKkCdakMfY2xSg7fEPTPiavBvgpGb3Gcfh2YFmn6oesX22evJNZre9nZVWg95xDrydCCDW4YJ9pDtCMxe",
  "key13": "4YmmV5y8HHgoADJpyLwakx8QReZGKPxpPfqrX1UbXKLLC1SKpGHtR354xoSytSoFuiQnH2FJ73oypBAvYcGuG3QW",
  "key14": "3hCiTbE4yn2N89tS2FTrx4iCvMDQ4Pv3Lw3fDS26EpNH66ric43i9EVUd1aTcBkWbsNtgSN1sLdYRBsHXxV498fF",
  "key15": "5Tz9LbNCzpUooZxBye7Swf4GqcQLdtWZxU7yHGBfLMkU6kC9sCbGXyT14Q2B22UpD4QEqH1oqe5oovmM3hsseY9d",
  "key16": "Kc4RANB5Ydz6TtaXVEgUZu6sbCv59QfX1PAWny5UhkXWqD4eB8QKWEiD94Fypx8qA1n6NRi7NKQaKwzDc7dYyfD",
  "key17": "4FbFjuTEokSaXdLa67VqEQhhERCHFSSvZ4EJWxg6R1y7ivo7e1v3kuQXe82td38jw8a15iSz7H5HJitDxA3KhCHR",
  "key18": "3YppKk7T6gScBegJd4HmNMGnUFvmXrWtkmrxSP15YGrCnyZSYZiSm6vkkYUKABxNGoUQc2xCyzJQCCdJcGpPvVZj",
  "key19": "4y5dYZnHvwt6esyUnEVhaaiPDosquVNZQDNiiqZCC1T5GiH1cQhw2xeQcj6f99qhXST8P1MJNwuXVQjUMeRtehrA",
  "key20": "4BJ3F6QvqEDFstiE8FTEUTG293BNauVoR3pSAFahxi4ACmWnCoXPXvonHFE8G1sLq1zBXKz9xk9tAKUQUtQyRJFw",
  "key21": "461kAezCpnkNT6hcBPo6bo5tMPwadUkznovb4QgnUCrWfzFYtXnjGXsLu4FbhLscJ6oekrt7o7gH49xPXKd4qbxj",
  "key22": "2LhzpbgzSwD5mSwVHTP6XFzQnewgohvNJVQFGErieP1JoM6KYGHJSnAFB9Ud7e2q4ydayFHbPu3JTc6MvJoWjynW",
  "key23": "cNxBwi4LL7EbFSjxyNV6fNtRhGKNWwYgTb2BVpeTNzCkqTNEP96ZT73b7kZ8xUQQ2auMFh1wqS3H8rh3FTnSoVe",
  "key24": "vwcMmxhD7GLPJWaLev82vwc53nSEG5wMPGXJY5UCBbtuPZhzpW2c6q5t6UJnDtBo5h1v2Bz5KhF7VQZ2hVxdHqJ",
  "key25": "5KRqqsaf3nUT3M335BfH8Jt3sW9hCuJnQdCVDdCAaqQ1aNjpMJ5ZwZEwsoHoBRWVSL3yEQiwqSHvo5wesiJMY4JS",
  "key26": "4UbibieDmqTw6V4Jv1wQD7yo6Ww2sL2hWqpGjuC955VwKkwx39biG5oRuYCS4LHKisZ53BFiej5tgDzBvmozQhtZ"
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
