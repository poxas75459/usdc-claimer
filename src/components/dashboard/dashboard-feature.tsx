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
    "CekhTyt5LqpFmq46mvucDtBXLXghKExsMidL26k3psZJSiGoEPtrR4sUT8FE6DJbKn8nKjG8c8wLaXbc7zUtYyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4PL9gW4sUmPhNwjDP4fA3g5ZHnikVfQdcnx1FFDstean7kSp6vraN5djPSqnR4osTPweq7Nf3XpBbXg1GzBf6x",
  "key1": "2SyMRzrwjWL9nxTW3YFgRPwndCZj63YreLFeba6Lap9XCq3tCwJr6F5HBYkQ7oQNVgp3yJXaWcsvkJap6AFuxXyy",
  "key2": "37TztpNwhwzEapjccKduKCFPG46QonkLAaTQFSR8GMg6mVFgco9eHURgmtHiQUL32uhUSmmxJPd6UgAfZYMPEG4i",
  "key3": "2t7cQwgief4bJXJNpSrGU9rQKcmTBUg7js2APHFUhEQbEPnY4jehKB5C3hZVxucueSBspULH9usKdhx8EcZRJJXW",
  "key4": "4u5jX1A8Uz4Lbmj2gRmAC39GDVAcqdjP8k9EDTq54LqmG3AoCeKZZnZkjNxzDnSZy22jsfREoJ1f2sweKaFoiSNB",
  "key5": "sqPdqdpCRVhgZhmEvBpSDTJzkzxATq8gg8UR2VqmGm7yA459eEVBmMiTsdLuDeM9U7ofVHSF78qwy2MJsF58Hji",
  "key6": "82TgTcxSsmqeso44RReQkwhDxLuiDuTXzRPc52Gp3iSPv54fdxMSMUiPrfGZCNdVDdPkXPwq1Wfcf814nMvKvpo",
  "key7": "5hMFzMbqePnUSoHaBcfq1o1o1GGkBxqmAU3SJ6NqA9jz1BZwyZcWmrh1MFEDpqfDJo7bR3yYU8snWdGeTM1WWzBG",
  "key8": "dN7gVcEJAet9fSBttMPfuJ6tmE378nucDxHmsjjhZhAJ1BUS8PCdUZdN4fauU8q2p2rvj7KQkYAorhYM4SKZDW5",
  "key9": "5L3eTHGTMWRFoD4w754YVLfQx3XTjnGQSwjF4TRkEnU2adk4ot5rs5T5nh1ysn9yBjTa2khdXBUJYZrNw6pamvXZ",
  "key10": "3vP2oQ5PZUAfdqFapcphL3gfLmdwVdZerooDzMMBvws1DGpwyM62qE1aDb5pksXGmwxSGGMrKth7mDZoiLUR1q5Z",
  "key11": "3bnRzk9mKfBhdpMA1yeWCB3Gea2sgZFgDTguaMRMXCXsT1qRzW3wCtURdMzuo1SX3Z6hbaamniRaeRzLKw37KDTh",
  "key12": "55YAYnS8kDUJka4mdMSuYvT5EDjnGcYYec5CUaaonFXpvvAy9FtQJuGXsJ291faUXGVuDwL3tj72UCPg7gUAxtjV",
  "key13": "4hYZ2wnQ3aHtHuUFGnbUwqHfPdhqT5ahrXNPjM3NA2GcNV55HeFn42zNroz4oYitK3DM6ixFaf2wnKgixN46YjQ2",
  "key14": "2c2dji8wqduNd2rmDHhoCaEgYSzFwJGi5oDZ9cBNXdcNzwiSyAkkSpTCp4xGnKNe88KtqBixSV7A3vpZwUNgiVWb",
  "key15": "3HJCz3oVUkib2YpqvbUzr4oSQVybxBHDvQBs66WjU6sTg8soP9Kkj64n8yAV8saJEHPHDQKTby2zQmV7z5BufXWA",
  "key16": "3orXn2wPC8jMrdPhbERNbJJvAgamZSKnthNTMEHL3U8DhinQBhAxqq7K1FFDwGuSLFsXKDLV7GH9nk51Nmvpmrrx",
  "key17": "4AV6YDbGF32Ta2Z9ufu4NyJXpQ2HB66X6WYg2RS26jZa8r6yieZjvbgskR2jzmsVBz3Ees56Gt1iFpNgnouaEwg7",
  "key18": "3AGUMFtfvGLkdB4mPv4aDvMvCYdWaQfhb7rVJYJMDJV7yYrvu8uPFt3CbqeKBCmtinBcSCjszMGtHA7v1xZNVKTr",
  "key19": "5ssA5W2zXZiv2juUirt5VkdAE7yG6MSzkhidMCzzSEKR8trWu6PC4Ug46D2PXqGJvf5Z7s3ynKAB7wvN1nZxGcr7",
  "key20": "QR2fpdjcegPVVq8W9TbUaz8BT1uuRwm4ePNa4TjuXNiGTRF3E7tC4BeHVTA4DJKG819L2nRXBxWFoJj4tZPSRPj",
  "key21": "2LLgWNPLmwQu9T8TQwtECvUNkD8mrJXQtgePu3E2CsZvPhfP4vF7jC3r8tXLodvnFdra7mEVLjAAGsHvWy6LowYj",
  "key22": "5xsgcCX2FBk7QLkSr8fqbDYFZwBM3S28vVKyMGqo9boGHBZVtAvRbzELTepjkLfJ2vGHVYDqzYXSThziaASY1NzD",
  "key23": "riJvE3oESoUDmAd6qJoFTPoxLWUsCHVskdfaa67bj8fi1oafTjfyYML9iqYJoDUPigTtSnZT8HBGCZ9y4LT1mCT",
  "key24": "Ay1ESZXeri3FFPupHMJstAxTqP6C8Wn2B7Yf1WFxjmFTWChnSwS6jdMh4JRcEndevuvATs9G4oiGSUGx4cFVaEZ",
  "key25": "GqNcA5JYh7qN3w8BSQjBrQahHNufXd28wwtWh4n57uXaHEu5G3vysgsQxg9an1J8PYKHmcU94jCRCtmjBs7pcAK",
  "key26": "5R29TSFbpKEXw8112MjGnJxtgEtWxM7MeurbMqjQ6hBN3VWWETSgjf86xMt1hYvWx4menNnPHchh9aVqnn4T4Xe6",
  "key27": "FYKaWi7F7Ji1AZTTdPtqfU3DWfokVfw6gJbYEhugRPsgfzy2qJz8rB3GU1WrLQH5GYeT7mEbFmFHAZ1RDcd17qP",
  "key28": "5uBYdZN673q5Vw5U23Asm6pqh5S9cHbxcv6jQAZpZJuwLAqV4AjLXygZRSwrvsPaUp4t9qihUuXwDidhKMA9DjMv",
  "key29": "2fAjcQzGFJ5TfAsTL6bMLuwxXcrYAGtiEaamAv3cTknGPNDUCaaU6fsydued3FWTBGBZs1yvAeys8sbX3yaESxwe",
  "key30": "2ysptcJHEHaFtPDyPFSvJq1cZ2juMXXAvKWCo3A5dtLL397CPKHknoLC5Wrt2ctXr1vLPWJQrwUjBdrSrYfY2Me7",
  "key31": "4zrRnfL6D7Zu5nMSQrNFCUBoCmqFSw6ZHaxsSmCsvf6CCtZEn9gpdXjS6ZHSb6LfTpiYEPXsArUekb2u99EgHYKf",
  "key32": "tXoZfD42rn2XXWqeZRK436BEn2q45Pu7d92UCGTjjnzuoCeeYPzZk3fJrKVZKfWcwp5UkhMLpCHrrtWHQJPcM92",
  "key33": "48xTRoFj2RMRughHE8x2YSaCa9ax6aomxig8RNUi2sH9CV8FFzwbawjhf8qAebZhv4TANogbLzLH5eCpqTiE6nyL",
  "key34": "5XbQGRTEe6Y3VsQa4SRRSqFyMJxMajN2wVttqRT714NSRq5HB5nqqcN7u5P6gJHTfEvL51wnsZhfi85rXD8bDBKg",
  "key35": "4u5T5rGQtozk68N59qZJWRXshgd1BXcj4UTp7PAqKwGJZoWDnYmwTBhviQgzXMV44oTeq6jnAaK9SaFTRyWJiK3J",
  "key36": "2ZB7hBLwuL4opcCR939P6JoVRY6przPKpLTai4DioAULPadGqtzqTkL1zqUw5TDYjUJG1M3Mx21nvPD4YrrsfbzF",
  "key37": "5bzVBAyoWm8CTh1NvHhwALcKaDZVD6ci6cQtnRhe9VNnJ4L2k6Ejs25b54t8AEJ9jsAzcXugJuvDvmPovVbMGmzM",
  "key38": "A2byYppyWz7Ep1R4W5KQ6CxqcxxvpKNHRZhdYnHXs5yy4dB1AMDrUAWCMHXX6ahJEHAX3B6DRMBcVuS8s3P72Pu",
  "key39": "44ty7dNdhr129UfCaUjW6eVAf7LFcMpvBKgd7pK9p3vG8MvZc1zdXAZ973dJfwsLBmTD8TExfaL8jLRh2uKbraEb",
  "key40": "XqEoDUr6oofqi1q8a2zPMj6YhFi1zPHSdpzYQPkCmo7PicWsaj1dnH79HSdUMadCwtjGSxQChszRnSFn6XftcD3",
  "key41": "564rpsd39dndCz3tRNXByffLsXRGhG54M5FCeEtKPkD1wcuNqAuXqomAMD6MTgUkWDhj6cNEQbhkLwZo6K5HhWhM",
  "key42": "5F7YANUKGYxTWkcDkDFzdqJhYiRKMh2GRQBQVh3mUaigZWNJcojD9ULzGhjjrBvDbf9nLRzmJbTsqgL8g8R168SH",
  "key43": "2WMsoggrqdnDK85RqWZKNoEZgsDEYRw4JEAUVCwjpF3DUftSUCTLrspvS28xSfenARM4FctdeJRLkTDvoggQZMp9",
  "key44": "274Kau6TVHJXywzNyHKhQxjXbSQQ1zZrEuCFLUVaVzCMt4nEvVr4hxSzSs6JXm2Q7Wt7nLZ3oso9bvARW3Js5Aew"
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
