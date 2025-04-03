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
    "SwWrtZY6st9HwUbtnktSDeEJhepMrLpomCcyBHTFvd2zNycqciTNpz82JQpJciUmUJmmwE6XiyUPWkxJ4PhCtr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LETeXn7rNbqw7UNd4ECYbu7WDUfN4nFLLukUJgZxZjyhgcZ1iDgfSV7CdAUFChMakXqpspd8CVGwSu6yiGztMuc",
  "key1": "2ZNjbFL8f3WpAqaActnRz3TLgin5P5Rpi9DXFEyATZCGdZHrgUbXpTB7xR4xQ3kyyEXf9E6ayJsi9Rgaz6vKnfkB",
  "key2": "swY31i6vjRwjvfF9x37KowvDsLHCzuXZYTizb3YQnVtASvJhUQfdfAkGag9PAwkgKEMdfzNFrSvdCUdxF8isur2",
  "key3": "43JZkB5QYQL3yGv6E1YWbjhS6Loi8gj8iswhp4xW5Rb7c7JUyu57g13bDnbj9EQkSqLxvoimhphT5pPRdAAYBkXv",
  "key4": "4XGmMF1rpRgAKFAqqSkbjqMZSSKw6VPwWfsXjoFVZNULauqUWnDFoX1Q4s41RDcwJrhHvESa1RQtHnrmcLDBmUKp",
  "key5": "T31JRkVpN97FP8NkBukQPkLgWo1BnJJMiMmwUxHX7cBaHE7BxAEDBkuRcM4mHReXxsuLXD4j5LEVyVMCozThCCX",
  "key6": "46P74WhU6bLRoRDf2UFGgp5nDMPhkhGSraJEVYyKcJRxxV9Wnbi67GhEhMQvVMaSmx8ZrnagLCGFo3VT78JkLnMv",
  "key7": "473hj8wSPBFKBSVC4JU1zUUTq8NLE5xC46pJUCmevkheRtDZnPSMwAVvxAQ4XNeZNQE9sFE6bp6Le9T8P9N8q1HC",
  "key8": "2kySmpP9vEz952QaPs3aoEJ7JiSXR2CdFwJWQpvdxpxtG7HP3P3Yig8xz99pK6eojQ5SWC8EWdBFFLBsjMosnZXU",
  "key9": "3CWTMGwLngEwdrzaH1CESyQ67q6T6gQyksLB1i1VGtmipD2tWg4HpjmVtB7yCPt8H113Xa7TMNpEs42rYi2nvJhF",
  "key10": "28WTNdHZTrNbk8rTdKmCA4DchW8BQJSUFTUzqFgzKswEVHjDQoBZgzf4c5szFSXURErP7tLLKfzouycZ7GQMzp96",
  "key11": "26t6MgXgf9oStfahZYVVKAnPYFUV5t8y5AXTNGwMfv53Ho5V6iotxEz3ULGzq3dMy7y51TL4BAzqmFhZXbJBmpYv",
  "key12": "2WqGnEazkgAqrJ3rEV5xrbGU4oXRR3peMVcmi4KEXSzuyUbKF8LruNa4Y9R7JWaVQyek6iTEQpVH6DtqaZpx9sVG",
  "key13": "dYqWUfakvdVQ4SbZUSE9P5AhuCzk6Ag3XgGMXsB9c2yaeidU9gPJDBxTbGrhkvyG7iZzF9vpieYfZxycGK8iCFo",
  "key14": "n8H3AFV7cznLMqB5XTn6nHx5QaKzjdk5D96uqy4KEZ6sbg58GE2wps6r4moaDoexBYiNFAvNupnnhtMETJM1xZm",
  "key15": "3fVDPefYdqqHWhMosm6SnwbbJtEvyaLiN8nhLc1d1teNUpzZRbCBABVBjv1W4LRov2iYocUqLckLU8PwPG8PzZY4",
  "key16": "28PJ12c8jqQ9ws8uJFhL2aDHY6XpRJUVD8ZZs5svVhsx3nc77xp7pT6h24hnraAogUwkNKjQTjLZpY5d5hkZhmup",
  "key17": "5pEFFbYFqxrcfV6aH3fGE6tFMomnkfAQd5byWCSphdU5iQJ7Ct3FQYE4sG83dHxHhimi2dSnndYYd5e6e2D4JqWL",
  "key18": "2faUAWuXnJBtRqc6qyNS8XxAdGookrq2bdYUdbJHZszfYzAZoVSDf8Hkrr4QvkW1WD2r5wHsojbKYX6vWP3Ww69C",
  "key19": "4ff966gSo3Kzt6MQquv2smrnnJTmcLnkJ4b55Jp79tLVXFLM2UScfGp1TPWEHJb7sv6P6F3cC82creBKrbdoBnbS",
  "key20": "2dHfz8JMcwpngeMDQtKwSkjYE1UJt2Aw9NbUD8akW33mpGMHHNZmPbZBsZwGQF4WeNLQN611QxKb4GpycsH1Kk6s",
  "key21": "53AoSNFumZUmuZAQ5AyGDqREcgA2WgiC6JdFFo3G9mDyvWMeE5v7WiwQ7iGpyVXZ2XQVNpQidKKaxpLCqHstJ7pE",
  "key22": "3FpXMuiRx5oLybYDwcwJhrEWAa3aMeAMT24s3Knd6GDqj6ueDjqCw2wTLdsNrNFynQGRxok6BL8BBas4wsYmTX5y",
  "key23": "2NynfsN6Stb98xt3NuwdAmRs3eDCnEzgUha2dnm6kdcTbZ37au5NsVw7eM7WDmYwy7yVDwLfBdzZoAoC8XAHW11s",
  "key24": "3cFXppoiVqHvLAuGtPCJD6dTiCEexFMEs2zHAULyAa69w7rme38PiQ1sXVcmziF3hCr2kHxJNPSWdr7MPY65nbM",
  "key25": "39JQQAZ9m479ofaAokyvLvFAQAg1BZrzcFqxk6MvzeFwC8pdz3NhL1sHNsxWX3ckqhk2TN77B2t7ANkHKuhATSuq"
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
