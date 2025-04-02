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
    "3CxHud8oB7Q6htfEPGGuXMEwaHdgRSWVST6TV4N98KBuLT9Vgat4yU17mCbEQtbUQh9Z8Tec7dKc2RKTuAP2C7jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZEViiGLYY76SHyJRs3ivxVqeTCvz89XgRE11N7y2CUGZzyPWARd8GuJGtd11apuWC1r2QDmvBm5jVSr1zuakmod",
  "key1": "uhcmsF3SEdbtHF7d87oqLQoVreninJLLHKuGmziPK45R1vQtStt6bUJBUXg2waFUr31bC7WEF2nuHonTSXxba8e",
  "key2": "5L6L2DaRqTBRfRz44KcJ2ujYMaFcrw9o1dy2cDghwx2J7ngoLzqPnP9mN7nXR23ff9d8dSQBQr2yajEfZkHFEmKk",
  "key3": "4RZLntgzBc8nrfnyP2YvMs2FFLcpp5zcHr5ksEXPxZgJfUrSKF9vnYDNLjYVrtdcnqEjBZxhqtbJSwtMJRPhgQjH",
  "key4": "59TF8CcgeX9hEcyYCGgND1VDy4Zu3zzhVFP6j9h5nBRnmQBZ3gnhu6kWkamHscJi33ieowMcVK14HyfraUyXPtAf",
  "key5": "41UvCBTSUpK5ya4bKasV336DedT6raehp1MrNJGYJRjgA6tgpdjANJoAohcfvP8rJJwbsgbPNbkg9Me6cceiE9WB",
  "key6": "2MyHZP1H3RYgz3RqEWBag9qkFjLQ8RHWqF8oaDATnWCjgoESPYV5hwWNKc8uraqU2G1BT3Z6do8oyXXZtMprSAQo",
  "key7": "SF9VhwrUpckhUoQx3Fhrjbmss8XJfzwcBVH8zZ43EzT69LHb98RfFHpA46CQbwARz6foUTvtjERYe2ZcSMeJUJQ",
  "key8": "4HzSy5yJKvzKmMSkJV671qHacNuNATp4e2w6oACN2KGpFPp2oWh8a9FXaSxgF6eVrB4Mdy5SFMouCgWET4CoTY8G",
  "key9": "5m7SuBPLR68EXxAAGYCUQZgV5YXELkM43mSg3Mh4v9Dmh3MaecViVT5W8TkVL3dA4gPtfjFMLWWqE7mWKQrcryap",
  "key10": "4nRQ3crEuZtdGoDAho632bHxEB99Q3s327mhupUeAUweForE2HrbP3oJZQ5nT14KgGJk8NNehQZG8r5ph7VPeZhi",
  "key11": "4HmyQWdJfTS5nZxpCmaJwXHC6yWKzcNX4UkQduPsbnsSGF8PJEnv1wxaePUF1Z5qgALtxbBUBWvi1RFntxz7AYs6",
  "key12": "3NPc44UKkoLLxKpRGQdDiH1bokiyCedKHvTAqKBcPdg5LXLmuZnh9XGjiUyMaiECg2qiH8mHEw4Ub5wWi2qMYffB",
  "key13": "2noTPq6NHt2TRxnJBAjh2U7dnXqRZbzoxZvsJUjSv4DdmvNJ5vKmijCcnjZf8epL2NG5HpD35bZe9UKRZr6ACRFj",
  "key14": "3zQWxrV3yz8LtF9nUaHCUqbk7UiwoV7jVE2K1pR9aPKcUFbgeNAfnEDFBdNdQcwCosD2iLhSEDimm8RznQPWUPA4",
  "key15": "4DCeDCXHTF2kUvhV9bWH2QMSRiLiQyvGssbRBvmvofkajzGbVYt9FxZCvd9LwrZgHZJswU8eq2Ykhap1ePp3WSHd",
  "key16": "64VZNzW74G9pa7FpcjZWL1SP7XLce3JgpC2wM8Tfa87svRWXdjPhPoca1ZtjTe4PiRxPzLSRZ6zjdEFK3so826ze",
  "key17": "2Q85oZUWW3RYH71XRG2qpxM65MmzdApuvv29CBFU4jzDhMjPDbuZasb22W6jjE6Jd9mZRnzKRPTXmKJBvCvBvCxa",
  "key18": "2CvATjRapbXVdVY9CdRuLUtphossLvVdoevo1rGkXWgVutBxwJgBXgLndEit2yZBTpEHQiFxCmKj9CCFQueuU6E",
  "key19": "4HS9MYozaig22rGA153wMgZzv4rF7KxJ88giHQZQybzyb92YLWUzihTcgc93CDKPCNhPGviMSAScPEruACCgTPuK",
  "key20": "65PxBM6GCPX1DiDZbWZ8h2gBxzhTQpY1CSHQY7thks4VFv5iDpykYvcidoACEsgNcgbacfKwMePooESPgyPyNxAk",
  "key21": "4XxdpBak99cuMq6mhxLYc947YwRdsBaYmdkWZAivXoX8SxgQX7jdaH1vmHZU7EuoUU7mzyLmDmdpnsKU99dD97qf",
  "key22": "ZG5RqGy6MRSRDYp4XWNxesT2a1qW2fQrj1guiTY7otaReCmFEGbMGGP45qQx81Gkq6fiX6uBwEDv7j7mHKHiko4",
  "key23": "4ZeP1WWMcx4PeBMeMMToVMdEPoNkn7vJEEDR8ZNTuL4sXUR9tDuTV6bwGmisjad8ZM2Yjo8ih8m3jpsxWJ2r5bfs",
  "key24": "3SkjqHpswpqGLL22u1A4vjjPwhU5gZytdd5saJCv35VUWEWHXyUXoFnzvhd13XyZYiYERaXMnUWExDTSq6K4qfsa",
  "key25": "z4ghRcSejsGAcyd4o7m5doxMse6YLxceKCbuDU2rDg52ZobZCLbTb8DhuzLZV4zm98JDW53uuGnL6LUA7QWUi5d",
  "key26": "3jodKbQxud9UBGXHZk6bpYXGJQR7FfdtYq3aDpMxBHS5T41Bm4AHFioadfjqvKjoUFJqwZaYgUmMQLKwcL1UuEFp",
  "key27": "mYQ6ezuXaFHtPyXfGq5zyMCGWFeggbVsqJknkdS8Q1tCQZQeZDcCkQgzX4VbsXh5DSizQDSNBPzNVQSpg1efD9F",
  "key28": "2qq3zUKnjmgaEHjhXvZeSMR7Aw2M15vrP3xAQFYbPqiZmPjjHFB3E8UU4TAJ9d21bYMc5j9Mq8ab18FagDcTHaPB",
  "key29": "4yMEV2MM9bpFwcMy3pgZw2MrzV3Vx65qYTTxiefMCMEkav9k9mBhraJRxtA9BqUSsR3UekyNBCbDioN5ncukRtF8",
  "key30": "3F3G75NwkLFyVa4FcnuGptYbtVZMByr6fb1qC26CvAZqHUSihai3qBxjCNq8ocSpsCZabw23jfmRkJq3kuFPxUdQ",
  "key31": "2aKKwU9sMzhZovRCQZ8ywMfnfy21gGFe1TFmriNnBEkX8W2G2Y7sLkjG1ppFACrfEs2ZpQM4GM7Nta328pKCRTLC",
  "key32": "45BUCgm9RBao2pZN6Hwhe3Db6n5Nkz567M9x42SCyFgrh1K2WLZqDfrhpMx8icqZWCMfMYnZXRSvKU854481erLc",
  "key33": "2EesXeyUEu8ZYHZtXj9J39NY3EBwnEQsNhSWTGxMcWt39UjfAkcnaZH87YaCXwm4gPezv41ihnaVZJvn5j3qt7XW",
  "key34": "5xsWpPbaCC9R8n79j8jUm7iqjEzT8QEc9SQGQDpVhFAHN7k7bWidPoPs7bTtJF8ZENNnoZLhTWMK1JQ2zcSecbUK",
  "key35": "5BN2QjrGRJFByHqDmRQrqJUtHLRBxTrbFZS5xyi3k74b7PTovQjqfF5DCr4PVv4PxrRH9gi4FFBZBwqPKadsrQtZ",
  "key36": "4GRWjGz6pAfFPPVafkQyj5JXhvnZpUQp6FXXQLCKxvvQzknPRGt9Nn2uDwy4cht838fCsuRoyswLLZrE1r3vBkUK",
  "key37": "2N5Pe9CEh4kBWF7Ljp7isopV8GqfwRbj1wgogTzsuQoVMdXcnekyYifQHKRFMW1fU1NFnBUnvTrNpCgu2eQb1ZDD",
  "key38": "3xVeQQHVGZCXsAY1Nq8SfjjkDzoRQS8CE7JPR5Wmh6ZeKBuASikkCssNQAkGgJh71uqNVo2n4QRiA1Va98bn35N2",
  "key39": "2unnpvVfs1XKp3UkCekG6TxYCmLhp1b8rY1nxuL1N5x93cyE85CH1BhX3QtntcE57eNAmNJb3h9N5SvBxfbKtYGR",
  "key40": "31fAPL3SKBRiEZhzUhzmxmJqNxTmYAf7Ceh3E9EH6WhRBi7EQPKWmVgWurKR5nbfXaYTBzVmYGLkpxBDujtkKsCW",
  "key41": "5mngutmzrRKCWy9aw9doKy8wB2pHB7FUDmrWaP2USzAW947VQ1R9aV8Vjc5s3SdjZjfhA1QxSFwnjCuhPYL9BVQK",
  "key42": "aDAPtDee6H5MgKtBUZKMEmrfbdp35VMSykq6mryDBQVps2DMW8ygL2MtapNkWugGPAhLBMcTr9FyRUbUxeRYhwi",
  "key43": "59gqPDWRctadbYSLYceSsms2swTpTQLMbkkZ4oE6g6KdYLW6jMtASkT7Be8KXekDSUDXASCtTsr8SmEEqT19u5ZP",
  "key44": "4wiXEdejYrk8iAutshv9BSyW9tFCYcwUMguHykfoKo72PjAy353Y2i926HuTbevhq52mrLNNLwaPsdQHWwnfYPWc",
  "key45": "5KpCHGf2XARYbvEBWwTmT7fZJzGLYWAQjED7Aiyxzf5LJv86nEmto6cMCb4T8R352ZMHLPkyJYKXAVSGqzMXwwBH",
  "key46": "5EsLGkW1ayrEd48edhBja6258PgcjE5X14Ca5KVN3Vra66HJCmjKA6vkF4Nu71f8HMdrd7wCpHvp1ZTn3rFzScVf",
  "key47": "4o3dojnGhFyvJNkkLw4jxpdjPgqg9HctebGG1no2ijira9Tuhc2aTAe55qiMPzNtdU7BjwyrGE4dZEQX3Bk3tpTx",
  "key48": "5GB8uSUW6YhCBeNRnvWCM9pYgvR1s13jKQv6woERYLjR55vY7XjDR2DH6BgBb6zaYYgYp8CB9PnjGRyhxQc8VrCY"
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
