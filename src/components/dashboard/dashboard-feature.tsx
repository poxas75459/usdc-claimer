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
    "25VciBes8Emn9s7k6xTyXKTFS4d4uAHS7k82TzPjoakLUMjSnxjQbGrAdUFupiaSDZgDKVKKaEESUYdxqVTebuxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pwhF3AMDA68LD6oDNq7mMDJ1GTi7QvAZ4WYgW5cEhMoB6PqXzmvjRjH9DWgEiMGQvY6MRzRyBkWvfNHwQR2R6f",
  "key1": "4ZknM9zRJVU6pUJD6J3pbyciFta7eHcTFpSmbbFJcoTth1wqRu2beXzDqRn73btnJGCtqykv8GvSHrjPL1Lv4k2C",
  "key2": "5m7bnihY6NmPw5qiiGVByJwFhkeTwKd3E4G3pSWeKMqV2jTxFNMKAvHezv4ZzSua9T6QBVPNMUGdQt4rkmxCjArA",
  "key3": "2esSabsa4GYy5J17mjGBomM2Ka4tLBzLbU6JeVYiqE1WNetrAutZwxsfYwysPUcZbNcwMyBupi558w9VihyCR6NB",
  "key4": "BCmnJgzjJ3jThDYcQYgkE3wBGXVdrC8ab9icdwmD4iYeJMJqBbExGei57SnSB5e8pUuDLpmVXJqUGt5WFKAmXZv",
  "key5": "2jqwZJRoYK5nENGhYjm6hwPzRvyBUGNkbjmNDE9dby1J4DufMPkzhUu2VtfqMdHmpwAn3zhRyLK9hSE4p4mw1LTW",
  "key6": "5AMhBHEPyvsSXwFLbhSXBCLhqcmkL5FQEgLrqSQVmfq7kBkHQPCGiLz6Y73r9FF2WgZezhNu5z4uwtBirWBUQP8S",
  "key7": "3WSQc1gbLfwhShVkSg49Nt6wWDdz3sWEytNn2aFCM3rWbbCyQsNn6kGWS2Xn5LZMDtFytTpVaoTvRJeuBwWgqC9x",
  "key8": "32DgKRtsV3a6Xw1u1q1jiXT3TFmNPkpLnE8qJk63LyjACJBoi2w4aGPPScToiUzsAR5ARYnvuShaSM9BtZiig1sg",
  "key9": "57yULGPL8FEiF4jzqfW96NMiEb7CwGrLNikgisLtEkMRWRhNiVocszkpSJW2YyJXH2ir23U2rQDr834t2sbP2KGe",
  "key10": "5R2v7SkEssiYSqeuV7FZMWqoviKjUttYPPRKGKLAw6MtuxjMWEpimujPQAbQEwXio4CkticqBgh9qch3qz7qrwF9",
  "key11": "sT6bo2fquWmCaCwuNtMkP3F3yJg4cAsTYqZCCMYDk5LnoJw7dxM5CHTqSURznMJuTcv8bnj3HwYtDCX9ncsMUR4",
  "key12": "2xp6mzmWUCftVHa8N2HmnPyX1uVRjczjRqLRNh1FqEYiwi8D18nCfe6769bnHEPGgkP1y6xT6dPB8pof1g2W1gcE",
  "key13": "4MHTaMmx4UwRoYWtZDfW3usLgvUWB4ErdVvnfSJARcFzz4QLDF8hZupKT7LdQwJjYbTardPKdpy42aBb8va4x9ZL",
  "key14": "5FpX63LWzQzPouwXBXfLRP37iKPFSSENS9gzvjmur6tv1KQhyjKjHzTmVW9jf1DEnbpWKcGkKs1YLR1hd9LCnvep",
  "key15": "5GNeHziWcR1bWkUCjX7Bc3ZQokoFQpKF85bq1x9rMoLDtVR8eAUZT4LuxAH1gHaq2t47GqALwTR3kqEMnAzpUXVn",
  "key16": "3VvogsoGryGEssBZxFQuSXyPkaTntY611nU6y34KSj69rDXAbBSTUdB6bV47Rpx295udc4yg5eEbHwEBUohZxBgY",
  "key17": "CimDYcntsx7k5zMGmF6hn2ZrsMNZfDcq3jnuyr7fTjrc2NKQS2BXaxXXQgaksgBy1jhpXd1hevLN8UgpmoY5jGe",
  "key18": "5c5zHXuMR2CNUHJGejosbR7UmPjxbTajJQMVd8AJjy6uYkuYMUyr6SiGePWqqv8SyJqJphCuXyC3pkpMT74RPBUe",
  "key19": "3JZ9TCNcTa9JbCmW5NZhWC6TKNYK9FCQbNj6tQ7pXN7uUtAvUUW1egVLm3eC7fQ1TrNEVUD2FQcpBbfjUFjVCvZM",
  "key20": "3DrhzAFVjkM1tsB2cXcucarN1gKkcLLrWZsCNpYFJFXzKjYcCvA64X2mSfZdyRnwTfmFvJ9XWe7V51skLZPkj3Qx",
  "key21": "5zNFrT3Ay8zAdodWBC9egZRuYAYiRGpL5BAMVEbNoz4Grg3FJHCg1hRwrbMeTtn2xbtrZ32AhGtCL6kKisCWccsR",
  "key22": "3re4UfKbacneL5E2itfTruBAS6PQNRaydDwADs7T5Y2fjN1vJ96mKN5m74Ydh3PAnSxa86FVVCPKAJpY3haDoTZv",
  "key23": "2VdeEPZo4QP8ZFDPFLpgeXsgURs93h4wv4qVt2aCKtRLSn9SayA9RHRvNZ67WJfcL1tBfz4E6ndzSBqdPuudWJAE",
  "key24": "2Rx5dLqGfGSrJ3TYbPfaBJ1Enth4Nt8f5qJiSwSxdaUcYJHVacYbQQ9jzrRRXqhAmMuhbqNpcp1oXmmnXXSfSE4w",
  "key25": "3hxTQ7YvXipdXKtpsNkFEUSynYnVfuHhH5ni5bpdfdVjr49wGgJsr6DEoSQ16xqxpDVFU8ischMULRCg77fzdopr",
  "key26": "4sn2hMwVrNj26naKFyuBEuzPubo477g1UijDkaa9ACbLhH4B4vAiLyGLJHPAE2c8iqRUoT5i82FNFvQygKpx8mec",
  "key27": "2kP84qauUH1jDFuB9nthfYXSdH44CuTjK6sUnS6jHQjZsfabrMNrfu6e4sKJyYgdB6bf3RTiSt4shrkw3eVgrVqq",
  "key28": "5kL1YVsHmA6u7gq1kRDdUXEjBQg9jViSNpyj53tLhTkg2dSGzTNt4LSBdprRFQbMsJnDRLuJM6t5GHoceCoS9fGX",
  "key29": "4Udxm2wrAS41y1rf6cAUChzyjZWJQCCFVFcDhMHAtnJYApVwjtPjGRyHgpB2SMB5YMcwXcYFY7UUMGSTgi6cxHEj",
  "key30": "4sHsBKLmKbxV3kkiRCZRmWkBm94U3qCfoWuAJJiafKjgVGUoegi32nU4uETtGJQPmD676u6YxjxRYXC8sQ2MgoPF",
  "key31": "3tLY58QzWPf6nf4GbnGsMEtyGd82WgiC67KMdxSsutDDE2W4GNRCXthNxzFuWnVFD3g6CjXsyLGfQFcvBHE4DuUB",
  "key32": "gc2YX997Rw8kJEEzzRqMz82mRN5Z5HZZjXoFKXGv5shcjGJU6wP1GeTM12C4U6BEAvt4vbWxZQ9rDD8QUcFyBQo"
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
