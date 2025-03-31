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
    "GPcLjqz1GJTbgRHdZhcdTWh3wY6yhKUvBwgKbmZ7RZUxRvCKTD9XBs11EiQECvtXhgtaANdUkoajFue3UUpbsZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZRHYwZG1wthCXXqDgi3vxYDWNmeqTjWMNR1JBTCBjWxq5RNtyGMoPWtiv35x3ktzmMuE3dBALRjCYSh9qfrQV6",
  "key1": "338DKRDusnh3WptuLUuEKJfGckkgEQc4zTb7Vuitm3M5JGotEayWurPosM1J42XqTYYG34UUq7q1X2oNnoVsUGxt",
  "key2": "3gU4eTzNmuLfDsb86xUYhdbrxfvhsywJWg6e8NKbt1YV7y2VheFoFYbVEtdpfMSEQXTz5jwJFrvsK5ukXKVyL3Ss",
  "key3": "3dcejnii2orzESqZzhFvpZyTXL4G9K3zsBYvq4LHSTewpPcyPZMVg8XU3c96PanrsQsYurkqmZftwn3t2XkrGn1R",
  "key4": "4h19bmKUSPLmrrCTKMuBvzSFvT37d4hEyRypZDb9fU6RCwUGyjnuwfaPwJjfvYkrnwXaiWCW91T9tKxA34yPWf5j",
  "key5": "36H82wGUXUrazbm9L56WrtxYpy9bf3CPkdNLjKtQgL7ChoEYKDJ4Bg2yMpZP5a9EPZj4iJ99tLFFf9Rx4Ffth8k7",
  "key6": "3oYaKGFZrZqeREugM77CspmFxhfnnZVCqhZ9rPJfcUYWsPwPcGukrVR1zDe5q1Ekt5AJrnEjP32BJLXD5moE2gaR",
  "key7": "3cerZaYrUxEiBpMqTAvLiCxa5YPgyhrqUcm2g8P3B89J95MT6r2jWCBH3wLkuzLKrjQ1wPeNcFEJmKTzZLDQckBU",
  "key8": "2u7q2m9zDwT25awM5yRuY1Qcj31qpGTb2NMMMMNE51C4oQ3x3rVbMhCSS1MjZ14JcqS6ytcTRDRfHn4JFn4JDMj",
  "key9": "AgUVDYi7HogfkHsWGHXf6D7mZP3W9LroZaXLk233CvQYkQfbQE4gd72wceH6aJK3oEYu17abmCoCbUN9aCZRuWn",
  "key10": "3zqxNCzj2tgAPo6YnuBrn1edxXCiHVYBrPUwzef3ewwQDB8nTGv9EqtSPbZgbwVcFEYanREkDHmGZaaH8B6FjEWv",
  "key11": "5PVVB5wpc2UytJJRAKVyYS6n5FSXSDBRArNqDi6kofNEDvyehxDkKmuEXfpGLQuzcVp61BpiyWeWWj1LY9eUuuTr",
  "key12": "4k41J59NZq2tZWkBhnrWk6UY4qARtwiUqnzPu6wwQykS6bNMUEntA1aMQqTXXAdR83TqgERcS9q1fLoX5UxmtnxZ",
  "key13": "2rQeD1D3wdXhz3vcBqNRUM4LXaXHTyfBuehdrP4LCR3QiCkoDMyrNZZdn99A23DPgcsSUKAqd7r2jeHhw1cnFZp9",
  "key14": "XnAUTKzXXPYxVao8aWHDGhjktJJtDMVeo8QhxLrbuhMCJxcJLBrQ74BYPuWE2QzTEqqTT5tgXZJdhy4yYfR2bL8",
  "key15": "3eRvJW8YWaThFmQeJhVH5yxkQWqAxCMWSLuRTUWVXaue7svnoFtecTtdSo7msJZuXbyDVdSd6NgghUQsxAnKjH2y",
  "key16": "4VACiZMk4AnEMetTK4zm4zYeAZNBefp7ypfBjqfaipXDb4EWH8hnrwZKiwJKLLSLAGJ2CyGJVrPkXFsF1uTG9eT5",
  "key17": "2fRQZWcLYaJ4fy83zAe2XEyrhYSbGaXG28v5FYYZzti7FUq6aszLk8bsdTa1Gi4pXzBrqJUJ46t2rGLfWjz3SKEn",
  "key18": "5mRf6grePVmQ1GjsfgRzZUo6nPZ9MP7Jkd92LaL4g24n8gR1kaJcAuHZXurYHVqHSkmnUKtD1NdnPQyzHE11HaPi",
  "key19": "Gh5E6XfjWX7mWCpA258xUtzX4eho7kXuZWqpTE4SAhAHDVvArir2P4LRJvoRbSD3CtcNQW3yE9a1jPF3Q6Hom5F",
  "key20": "3pk6zcq1o2RmtBfkB8uzUFR6HSY9L2J4n2iAMNHw3AJ9FyK5UYEtBLGnseTcH5F5YQeNDyt5yWtX6ejEJWHvuWqc",
  "key21": "a7S5o21siT6gPy2JEKnGnE3qhpYVX1t2k8EYHPQ1jprs8pah4odbMjodpQgTDS7rWoAY6Va4FAo75WWvmnM6cZZ",
  "key22": "2wde2ELujiuEgsG1PzXUSo5aegaMG5WH3QowM4hFk5uoioL5GLDrQQNqjDVoikEAQnv9hTdb3u4q7iuLRGtUFnyd",
  "key23": "Qn8zJLnQTeVrsT2YR4rrcLA8XAUASKPWMJgfkovdiB9GqTCwPhn1ZDt3zuDtpndHn2rhHrvBsag4Z1b9yvJ3jon",
  "key24": "2HLwCaT4UBQHyUfALE2d3Am24oLEp3B1sdch5Fe7yojYD7Taai6RRxrncAaaurtcfUXcQHgUE1FL5LNdN6tEBYTE",
  "key25": "5Znn3NWJF7aJuQwhgesVFmmJYzGEXTdpbTAqK9DadAFAXmJQLSJDsY1bxVutYEXbm9zuiQ7hqcNTfmH8JCMSwL2y",
  "key26": "4tJ924R6BW2kDcjyzjpoaN1baKMv51257YjPwzgwRpCrt238rxvUv7NQcwaqfbw5eMeB9Q1nsv6rA9b5xMDabDLW",
  "key27": "BXcuuahLBhVovMR9Xgn2ShYrH2iTdgHGjL7kmocgug9GVfR9hFdbJj5YqS7J48rVC6kP4autR3D99YnqoAmnB5c",
  "key28": "635V8BJxdP3P9HYXyEY1UkxEBPRdTk5YPfyHARZ48MfWjL7cCQAurpUTx2wuqCPBRU2idtfJ4kUjRJPgHVSaeh9w",
  "key29": "3egUXzBjEqxsNZqPvQRZ5Ugy8aBUYZ7R3dLxadb1uuf7kUAC62uiWuRPsfK2Hz83Yq9j1diq6152jYVREgesyaFs",
  "key30": "4bCkN7pHwyHKMepu5xMnuyuM6gTU35otFgJqp4fnzhiWZhPVgDeRuF58JpgetU1DX75WEWygEFB9VZtNLr5bjSuK",
  "key31": "sQgiVYUBUv9dyPsuoAHuAUricb8U4HdiGpWJ5bEJcECL8seDuqBJCUR3dfkBFQ7M4UUFbJH94BED4qT4bGEXZc8"
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
