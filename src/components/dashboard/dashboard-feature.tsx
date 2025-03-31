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
    "snUX8yTzJm8kMyyA1wsoutQhr1o5rXejBQuep8QAizQKegBMCTN5d1RAaCNNQyc2QfkBui6h2TKtsGeLZSEmcEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmKy6fzcaMhYvZLhg1r8kbn89cVRypS7UgLZ4SoGaqpkGKDVe43eHUQSQhi7rKbFuuiXAGy93zJ3RA46upoyRwH",
  "key1": "62YefjxoTbdnYp1jgeY7xmBc8oGam88XLXxp4bqiV6yc3WQWTWJfmsWrabrcmtxrNMkMxJ1vk8yTegH6aPCmnXg6",
  "key2": "6522ynPgouWtkKSknqDzQA7cyMMn3LWz5HFdJ7RQ8XA9UmSDpx414q1WYPBNeMdmqcQvn19FrySSfaTnCrWU73QC",
  "key3": "2eezPzbSBYffwAfADJARZswhuH3oYashXv9zRHoSPVuY4JzePCPNnbQvFJVmU12rEbx8v22dfAASwwb9bQ1ARsR4",
  "key4": "3aPSSt7aVtAy4SJXXwCB5VY66GvRGx6jaz2uFkvpUQydcUyzypHcYUZNJt2se8zsfZyuyHPLkqEJEkzb5N4G6fd9",
  "key5": "2TKy4fKG8QMWH7TJWZuvraExoetuCVm4Afx126MNSBdUgzE2FLctpA9CtJSXhKp4Bw2iQc2rkPVbiUNAchJGXXPH",
  "key6": "49D1MY4cbosy6bHTrsD9mK4y4QBuLqkCtVVntkawgi8UL9UfsRoAxT23suVnrkf25Z1fjyeFGqjEP2CX7gBFkX9s",
  "key7": "3RUxRMX6d74qgDP9ocpYPH26jtW2CgcMVVTQiLuEScqsh1Us9KyhvVe9Zpuqo1iswb4CixiG67SBZf4qLqXgfR53",
  "key8": "459QFB78QnwKmcpNyS7eqBWBVc1NaEwK3eh2FWUDWvskpyqLkSq79TnEeRii9JKUQqr2RqWfP2DZD5Vb8xVUDYCz",
  "key9": "2uKmhXffQKn1pRz2iXZwwFcFBtRdFy6o3UWfdrV8bR2H8Yni1g7uySL6BupFiveh24v4u3Scbmctcsd7Ts7Uuu2n",
  "key10": "48TkXpsjCAia7hyFu9XFU3nESDoj4y4PpPGUev8wGsEQryQ1TYf9pTBJhaeMac2362eZzTSRJbetcwqerMrKRCY6",
  "key11": "4EUfJaAEcch39nB59wFg3VSKaxCRBwVZY5ZkEJ8WbyjatEajNQmhJdKRux8QPwgN6RZtDDm1PHcMNVXJ5fbkDis4",
  "key12": "5LoEx82tz35WFLU6MFLVSRXt2yk5Dyq4pTgi39zt4E1ggNvNDwSYtv3svHRLgaSeq6Ge3MRpyuwmMFjhuyFKoCzD",
  "key13": "2GEskrUcB1iitjM5T1Ljf2cKAvvQ9g3nhJLChs9ZHD27XFfTyYqCiN4uoCApJeKq3d4Dzs6zMjadD6HZaTQVokPW",
  "key14": "5rU412oGvD7EvgZrAV9XePEuzqP16ed4dpGVJt8t9LJYfitfAjgEnGxQc5tMnPV4VDJACVp3WKLr8jRfpwxbkzC1",
  "key15": "otDTRrnrRDTE4zRhyYEZCZWSQgkyYqGomuUKtkQaHtBSGa8PrDZoW4BKb3gMupx8ePQ8E6RHaSkMM7Stq9neZov",
  "key16": "4WbVxppEMqQQbzjL3JgmUVt9XorAsbYVxSENFTGfPYZCCPaZmYcUzqJ8vRwoZQ6m4iakQKCvxVtoKJKRCpjVG6z1",
  "key17": "EWTBN6wKVgkyuHx2CnFYeyJieSi7GY3fpkxjE5tATt59KN6YAVgfen9DwyBALNNfo3CJdMzMyx2HACikgWdNMP5",
  "key18": "57wao4t5kySV2P5xeu21kYDJdxaBWx5ihcobnQFaMqNGmu5QUmAGFTarWkn8ESJyKFeS3dChsgQUHzXaEKbdg8KL",
  "key19": "5oVWrWJGtKd6WxMnbTuRc2pEe8tKG1zgLmVC6jCYtev4tHhgMGBeJNGpCu3PvuY9moBUKZXd9XF4XLRbKERFtPXB",
  "key20": "2fHYBxqtZEMVimTYL9BfjrUYYjW1GcUmAaS1WYLPrGsErzTyWNJEnZNJ3e7J4GCoPCKU443EmofHDZEbTpxMiYWN",
  "key21": "bWkUQXenD5rCMBWsjwFCSrzapkjmzzhweBYpkWDniWhTnYytarnLfWuJHVYbqym2kBUKokULA9iHen1N8BMPmTE",
  "key22": "29oFobtcA44Stu4MZkTLkTeim8j155vMWyqbdLMKcTCPWuW4BKdm6jh9jNqSLfVLdSGUuqhAaikqfXqAxrMCfdzN",
  "key23": "2ef6zLkScGjJegqSuWZcm8XK8b2wQcZ4tD8KhTbSAF1QGpLzrNmwoV1Fyd7UUK7dsParZxvA2KuGHAj635HxsK4j",
  "key24": "3fRxRzxZWovEPRaQsAz4SqysC1bMa9wJQMJMvjpeQxVKTgJgiQ99iGghbvBV9AMdojq3Dn1ruSePccVUnLuB7NQm",
  "key25": "mkWSJdSy6xHKmR14HVN6NB6TRECcpA4k6gEjk6PZDCGMeiw1bLME34oaFghKJVGbsyumYrtU9A2HEc9JUQUzBZv",
  "key26": "3hkpWgdNizBcHpUpsGA4PFsAAzyEhHMdzxb253kVeoWRFrjgVsuA7Aa4GJx3mLHfXg9XP1dJW9nxT8Mu1RLAX5ty",
  "key27": "2aWWkr4XHcPnBoHr7KQiMFbuGbwWjVF4o64mg7gbG4DfBqAeWuwgDp9psuAwU8522UswZFTGqVHkXL4tgvkGcKi8",
  "key28": "4qbPz5aoNn5sL9avYqHfsx8D3mPWKTaLRYHFCVBZVSuxnFQkd8qHeMgB1zMcuTHRDZUiwRzHbcjZ82cycHUDFw4b",
  "key29": "1uwGhSKTBqCX8vHxxFgwGL9y8Ys8CMp3C7KXiPRMvdr6wtkmgogZbsK8p8krmMeXKUusrTJo7b4C7c6ZRaWzY62"
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
