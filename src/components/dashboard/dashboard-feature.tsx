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
    "HyXM8d2bwEdiaJ3oBJRe4LZrYGdMnycapdyspM39tpkLDWr8jJVD7S1kpqJ8Kd7SazjYV9fn9z1PCqhSPLt3oBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pub45b3nZDgMmEcS4iqE6WDLK6SjAdyRsoc5BansxNGKCy2AyMW544NMVQvqG5XLnYKRSdsMLukmVQHsdUTsg6w",
  "key1": "5as74Tvv4PGRyy5zFFD19Ak9cVzmMqtPZBKZkGu6r65fFVsM5duYmtdnaT1WgdV4iUDyza5XpP9zYVFcShE5xtYr",
  "key2": "2BeD1E8mGTZ9W1oq3sj2nu2WEe8or3Eij5D5ygvFUqvBsgwmvovZTWFhVDCvzaqSrHihWxNMkSTNS8iY8PRmjvnW",
  "key3": "2eucLyCLxU7ukrSNhJKczRPaYGsu8zvBEY9rVnToAb88bHijgLD6e63b3XQvAzhJHhk9u9E2p1SSTohne6KNEZhC",
  "key4": "4QL5REpBSEzQ1XNA8FyEKm6FH3EGw5XkqofqZeVG2dxMCjfuj9VkJXCPw6aN8Y1Zuvd4vJ59mcxW7iihQdwt8XX9",
  "key5": "3Ak3SPdEtMRVkrPgs3ZYBYdQss39zEom4uyrFEoB2ch8ZFvyL1xtoJr2x8Vr5f1N2jBUMzpZCPuwpTMArU3Mx4Yr",
  "key6": "3KzUTRFuJxy1ZAmRQbP4hrEi7RZBAnAFyxBXb2gFgRse7f6hjAjz6CfA1kKGoZvk2ZSzBxjykTGGXv4rx9XW1hga",
  "key7": "wcRU8KBbPsVWhFq9kPXyrqpSDCH57sgtBzmBTQXiW8Kiq8rbR8NrXgc5DBevuFvfZpvTsXPBmA77TUnEAgmMSvN",
  "key8": "3msC5SZRsib1k5Ue618Xewvy7njoLE2v1L4SZYxvX5vM2o1jL4BE8zvcYZsYvFjdmQutKpRwWFskyUjN1dXyc8Cq",
  "key9": "5tPH6WwMsQUrexmTawfg1kGuEYDijd1fFyyjsn2ayiQQjhwXNV9mDRJhS9vbAujpjxa1shYAE9bAHUga7LBBxvq6",
  "key10": "2ShYWZPFmW5rBTgcquJz9n3gKnreuVzw87dQ79oWopqHFSUof7sS74BKd2VSrA5F7S5AAkJqJB8Zi6pHifRSSfjf",
  "key11": "4kr1ujPHEEu6WDL6ajAtky5bTfNSJsuDaDh7yJXwERWPCWccSAAVm2nDmziyMgUBkQeWkpULDyaGeR6pYZvvue2T",
  "key12": "2YeJymfkzvrzamF6PyQQAvt2ab8kfSuRVCUiWFTb3TmTFXCRax3s9pRoBxvVPLrUGcjJKWijQCYRGVgW4DE3ShZK",
  "key13": "2QN17Uo2APghArnYaQMxLt67xr3xkK3gyJrfHjR9zdpxX1vVooZuaeR9aZCb121pDB978PHZBFsDKxwjDD7DZEau",
  "key14": "5VpTvjCobsRwCJTb3czBuFUkLqD9Ti7FyuWBdpYjzVhtEtGcATWBv1d1ucymmgo6AHgtrhNqQBM5nUrtwiWQYQu6",
  "key15": "4WRCfDrLDGYjhxJMczoPshoWAhPioYEWwLbERHUArQ3qScbsm31wdZxefh1UyAq2gkBjcdg3VFmLeejf6sNp469u",
  "key16": "2tJLxPC74fPBDFrUpXeQv956nCqv5KLmdfWJHu5XXxQdnyEYdou662ehvo6gDjMPMASX9mAR7EZVPLx5CVgpWm3",
  "key17": "2kQQ5muQAkbb14bwJg6CKTAn5g9EZ9H2G4xRgMgVtnWLo8WTf8SsrUbqSMpcmiRnRJaC6xSgfFWGErDdAMCwKr4q",
  "key18": "48SdtUt9rM69yb5a7ZG1PLDesUuYfwXCjzcWJ4UkpYHtegZYuA5FwL1y9zPL89AGVvawbeLCmYr5popgkm2S3SAF",
  "key19": "54SULkFie8T1ddk99yE7QcgJ7PFNRLzWV7p4duY81h29PKNSeje4shhZkYq7ReHFRjYK6as9SxZVzzsN8wYvvHfK",
  "key20": "2VfaFhNy8mKKsi5MZvXBuW1DiVyf78MUCVUnL66Yyo2Nzkb9ipSWi43xU4EoHqxU5B9GoHFyNP9wP9uaGYxeMZvq",
  "key21": "4Dc5N9sW9bZHKJB5mQDptapmmk53bAih489FSS596tYriJndGJPsmk6kNStZ7iXocGRZigP7A6TAsmXW7MiRb5zb",
  "key22": "2vjJGMcHivCTLif2DnbRCsnKjtk1cVjX2oYe2gtSeT9kfPrBV4kCrM74CLtXFFeBdMGHEQsCKnCQpcKUGq5FU9Wd",
  "key23": "4GKm8UYdU65uinBA3AfrwC7mvV7FZg9j2wtU7H9Sps7hvx5qsxKdThtB6V9yvcpPekXEcCYKWdiLPdeMZmfxqQCH",
  "key24": "5ZvN7ShqMSzHmnhbikqrCmDPT5tuBDmicnpGnUyuLVeuAXDWZeH8pgPdE1xhLpZoMiRecLmYPJDu4GNM4ziUz3x3",
  "key25": "33cVwym6yMBpVcwWS6HNcN4HuJQusxuU7DkHL57Jh6KXKHxzh9kpHWcwZuM9LiW3KjCxMzQjyiU84xDuzUGBqPbA",
  "key26": "2uZUZknk9gCEHW5qX5ipnoTLCADjted6CRfU6HqMgaqUJ9fgfirXEPjSoGXEFhCLvxQpdXJGtfrrQtyHv7zcMjhp",
  "key27": "3AfUfDhdDuN1sg7sDLwhH1CgjCLK1fxxcbKAoyf4iiF2uLtzdKG2Hf6Fe7LEUmcTZaCEfkEf2MNJd5xgidzPbUsD",
  "key28": "4uXAxpi3rdb5nUwsB48MBk7BZD2RnYDwnfYTeAEa93ga6pQFb1m93XpJ3jBg7AsvUVbxq7ZokJWUYakftuqhRWt6",
  "key29": "22ZsXeETgvDKsmPpP1TvtcEd9j9XuXYjMf9Q6nAc4ZkM5d19kY2RB7EuscnDLiPnavQALxp9yqBh1YhDUoXr1KbX",
  "key30": "rp63VkajBY83321EHwgTmFmM9oJrL46SFG9TYQnXGgKa2FAf4FxD5EctcNfQuFUDbfeqyxEB9Dnsnb27heXsAnQ",
  "key31": "ReQZifi9ius28gMbmSaF5e8nYX15CRDHSpLpTt6oqcxMMgdK23x1eUxpYMrkJf1rdJ3G1VPFTEBKWEmptJWD4TA",
  "key32": "39yW1rAB8mgxUiH1MyRQFvzHTwdyQctWMAU6F1SbhYk9r6ripieayX5gThU9rxtCaQfkyRKvCxXDVkd9v3fzgqiC",
  "key33": "4N5QgUDtGGc8DpEAXhuQKHgfxs1ZeeE97qRZ92wzAGPHCGVzLb9pdT3z8GNQzz8G178ZEBM1RAdnJ7nJH2GAFLee",
  "key34": "5xsH3W9JwyFtSLaeHdfCossbJnhJAs3j6ZbPn412BzZ8G5qB4TEfym9tapkwNRNpB6vrRKuLcbr8hNNLJbvVbDs3",
  "key35": "4x1D2jcKCDVE2zPt8tHUZm5uk3BrLJJkQRHpwCno4uFtyahTkCcVJtou7rESfHuuq7vsFbM5GFWfwVWkrxCyNh5Q",
  "key36": "MC4ZdwAKb8niuFG2ewqqNs4BYR5CrJ4yu8bJcRG91o1fYMFFiiKR65cmdXJaU42Mq4Z58p8wmtvCoFe2xtPeVJY",
  "key37": "4BtYWPmkSfSoSYcHLhMURxiwZSeQKFWryisZkzfvyDGhoATLrfo2nrtPqzz2ggXJBagd33bUDojG8Wdn8imXEd2C",
  "key38": "MbcxiC13pK2m9rQB6BSeZHKRn9j4KpUxUKKKDrv6Mw95c26BMnfEArm7kaqvzSgazpXans2qvcR7m3Cz1ZbDWxm",
  "key39": "5nA1R3sQEtVCgtkuHvEdkKCaiDZ69SGrDYdpTGnK7ZJPmABTQqx451Ko4sJWs3MqvEGyBqVCQpVSVe2HHmPUaKwV"
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
