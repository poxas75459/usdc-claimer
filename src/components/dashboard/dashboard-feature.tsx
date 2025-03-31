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
    "3JnG6fKje7CqPUURHy2aPMKifbCcjUkBrMzn5uKLHK5oYZSANvox35eanUEHyxBPsJ2nZ4H6UBvTQeFhsH275f69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRg66PKXug1YPPYGt2kCgLosdsWxqjPrDFQtZQjhgQPeokLSLqZYSVJYnRnFy7aw4V3PK7zdx12dx4PKBYWBddv",
  "key1": "5DjnKxhLJUhbFsTfwWgKR3Gr85zSKLxiS7GMk58vtbkz9F6MiLdUWKWRfkzPuhurbGr6snPCs3Ga1SaqYqtNHUet",
  "key2": "3Gw3uyADecYumArjMPxcyUBdsUFmhq971BXLcQwLiWZUDKvPC4x3Eo86pFeyf1DEZ7NphzjfvHX2E1NEqayq3QUD",
  "key3": "4X6H3Lc5xuFiAqEdkaEA7ocS1G7G1jnVesvf2Ts4NhhRrcAERywMMtfy5BP44tWN2Jm1aeRD8hGbNXRcxHbLY1dY",
  "key4": "4rdFoLxDvNQESbUwVXDbdJzbvLPB8RxtDBGFnPkvXXKeHeXLLGnjKVZF55AkLRNAGHc3woYJGDT1fRHoyTaz3Saa",
  "key5": "26aGbv9RzztzsX2gzr8orQUNbnn3G3b8GnKkYWRX4ufa4WPo9iW4kpzVufpaRsjnHSYv4LTNknJDNieMivQTtQDj",
  "key6": "8VUqD7wHNddqsbUdyB8tGhFHyd54hPpL7dNArS1Fz2D8QNpMvSQEkRGWxT6R9rzdcWsxPqiFrPaq3RskokzbKMR",
  "key7": "5nQs6AmpxiVv8fjPU3Leepz33MvkqhZaBQGgkfiQT8eJc3YrrqkKFjyHmJ3aMTgyc5WadyYpCF2ZYJS5i2mfJWCG",
  "key8": "5FiE8imGT4nyJbbP1rFWdXTEKXBaSm4W3tk5StzhVEPHq7BxNVMQCUhBp1ikuKgP9exDE9haZrcoNthyVDTA1YVu",
  "key9": "5iB7HVkatZkJUCiURS98C6Ef2eP88LMMFGFEMJ7ufYTznP3MbZhLLZXfe3rUF539kavD5TXhoTSeJ4QzjifWLcsL",
  "key10": "MhGaEs6RJ59FJzXHLMMkWkfAL6H55uHVu8j2G9KjdssY82mP6rGAAzXsNEZVBM9i5CioN6WDnDehQPdfcAD6CUE",
  "key11": "5xnv3J1NTdFPPrVqVwM1ivBpWDfJvVCXfz7A19eK9SPgAANLXECDZvtXbCXhvfSj45iDD7BcQ48ENendxJtSaJmg",
  "key12": "5bAgHrzK7cf7375cyoujHYKNqMHkDCzuFcG95suYxJ1KQV6LWLwADqow3FWU7qyFeUD4m43BysgGUNvXSjHh5Fnw",
  "key13": "4yEgySZwCDJ4mRVCwbbaYN6JpS9SPrNqRcPugPH9F9VRVMPEi1R6BavWLN8bDXEeZ631y6MX4ZMCwBk4hq6RXJSQ",
  "key14": "2BWHinUJYPwwqiH78w4m2jg15iFFNvvccSdzD489JLPLzgEwwKQCtedN3KnbQWX6z8rbFfPd6vY5sdbwRYydzEtG",
  "key15": "2kbpybaF8fmQPGaz9k2JcK5KWheVFDbz3nSo89LF8KXYq1iBEPPnN8h58qYpPhrSADgasNbDSNbHHvEmzcvnBFEp",
  "key16": "4aMbZeGjwbS67QTXWknjZnVGUu8byjLK57GA85U5wLQMzASif8sMRjmLnBrJeQaDgcBmgEGaUwiFccG59eN93sXR",
  "key17": "XiKxYxg55The8hAXyuYjj7ekmtm4ZjubPq5W9mPFd2mWS2RThUkQeMy9p8wCkWaXmNJUtJR7KryTtVMmAZ14mYh",
  "key18": "4uzBJ1XNEaDSEgaTNEKtqWMRgniLMrKVy8pVshXNDemzABw54DfQicB9FCbNK67iCaQvNHRMxBjG4DzaFEAaebRm",
  "key19": "5zBXPwQAeWmFfmyJKUUH4WQmGQsr3NGsZ4RPAWjgJJENsueMojhT2HbBkfWD4D8w9nVcV9VzrAMdm1onwfj1ViSs",
  "key20": "617c3ehunQKF8czPbXuxnaUqsoyUSLdyTJ1EW2PFd5eNpRKTi6mAqYPW4QxcanKGsf9vZ7k6hneVcp8pwYBw9Cxn",
  "key21": "y6CcRsnuauoWSyqnRVAYbXbYX7yvL4pci68fSszFUgPUP4tx9BzLUhbhF3nrcAKnqi4JgEQnFN9K8jD7dtQWp9U",
  "key22": "3qHKu1qY7j78pARoWEd39Am4XW4ypm1KNaZ51u4PD5Xxtdag9E5d58PeJ1scJmJzrQoatzDzQdHBxDNW5UrMBTee",
  "key23": "33mHSSHqrbcqj7MPX8BiL3nf1kpSTW9YMgNvJsEz5eRtz2tuBEau6iZrmtTuucNzQMagCi4gw55EWq35FUHUcjaF",
  "key24": "647Jaz8NawU2MzQ46Y3ihJV92Y5j3B6zqEUpdgxoBwP9vfQNaMQ11VbpRP83WmD4TiCQbdtfSwwfeaHdkYjAeEyC",
  "key25": "s3jN5no1V64rukxtjsk8Pxkn1MFqB6CUKpjUjPw3HJ7wUsU1WaHqW8HbyeuU6DkeNQRgci8xNMFEQ2WmAKLL4iM",
  "key26": "2tkfxSTEUP3aeYraPXyT9k3HfDrPW2JZcuxkQKRxpkgYA1zj8nybh79nmtYeBzJNj7pXCCeTLVKvLzfEnN1ZSFvL",
  "key27": "5Wa9Hm3qEnzjEuDHxyVbWaDGseDG3qwLBhDttTfYo2vLtkAt17fhJ9dRCrsLzoKSagck3KJ1JvhccHL6eMuJ5zdp",
  "key28": "bU4rWz9GQ3sa3iz9wNBr1etBjiAifzAon4tq1n8MzLyjBnZpY3DEUbqyVqS8F4nJwReurBv84bVyV4p2sRTmebf",
  "key29": "5vnRoWNZq3BwgTr5qzKuCwLdWnuaRCuHi5piPxLT8Jo4DhH4Eu6n6TNqsMDrTiaUm2GT7AfLPhppUnbPBGRFJmFJ",
  "key30": "62zs6hA7UngPZHrWL5qLNu5zVfrYCJPKSHHVthxU2myvMP3dGs299NhKr5uEXcbf9gQNbrwCifyvBsSr8U21YwrQ",
  "key31": "43U8QeB4xMqrzdAaDih41NCgQv7PYdy631BUG35BwWkv5G4ZvvhD38jh2YdrHwvnW37bc8NENpx5Y87uW9ZoP5ry",
  "key32": "5q7biVBvC8yBbJjsMdC6cfUXoLYYrVJsLgenNLeaSJjsHYLxhKdi2VVuVGhGCV1fDMoPyQBWcH51Yu2qo7ZfYFvB",
  "key33": "43uWGzDkSQmYY4duQe4J3EswVv4WFmDzCEtRCY2VyMq8Hy6rkvi3uxeemEgX9E8RbfVzfrW3qPWjGHfip39rL9PJ",
  "key34": "3P5tnjiAbxLYg7UtJaAe2HsWZcFWsV1P9sHECgPdjyojaJVLH2MewjR4bcniMZggj2zd9JEJkhihPtgbNPjsRz78",
  "key35": "4LNpaMKwqrwr6e8E93GEiS1b2qVdTLy2bzrtjbKwiJ65UXNgNog4C3hdsL4nv5QjHV1ehJkcqaJX4L6mya6G9pjp",
  "key36": "2dn688MHSqqddeG23QaS4AyypSnW51Wca4mgaVx58kaFGwwdDGCoPXpfcVkFYukGEdqHrxKwSab4oJ9mEWfC8ajP",
  "key37": "2UbbcQdmQWfFpCnU8KWBzCd764arZhkqP4z2usgDkjhm9yXkCkPu7yRrtM2q3bUdY5yt5kKHBNN2Mwb3a1LUR91B",
  "key38": "5m7AZ8zrAjaGqhPVMew84aPTKPQWfiL96tcAM9MGxDe9Fg2gCEhE1ZkvKmBhq1fQsKezJXPSKVaXQmJL9zkvBvew",
  "key39": "4ALebHvGE5N7D5bnPx1jgpGdMwyzLYWXdcJEVbWuy9NphFDH8ZxNpg5D6NwGQaEyGbUgUXnNfd97RYvM9bsqaPu5",
  "key40": "4Uey4XkQgaAPktoDjghvBxHR5VkHQcTC1sDG9ovKMoJtsdzdL6KcSd2gQHfsxZeEk93xHa7Pp3Yd78WNVNLNEaGt",
  "key41": "5xvwL5eP5pWSsgaYwPTZqH1qV12wwhijhi3kqXSsYrS3St9Z3TGHCDmuNVRh8wxpDyhxymMXsqx656xXrGyE5LCT",
  "key42": "5ieW2nk66psxBR6JNvxZcAc78uwBcHWMEEqRC5xCQz7eHWU6m3j3jFBVdG8BcdBTzRw1KVM46WyXMGYPV5gLiyb6",
  "key43": "GTtU9REaiGy51GsBesFCutQ9i192P2SYLx7TmrokjELQsGhqn863YyjLmBaPcCu39FKGeL2AavhL4ypS5RQkUuR",
  "key44": "3s3xsWcZUePf7zTGTWCU7iHVPA6xZoMGAQrrERcXF76kS3tPPZQYgiyJtJzdPrza4pCgyDu53tpzCtBtx4ygck5G",
  "key45": "3tnCzxG85SRSSjE8frYrTfEc3aPC2A9Vatn35AasrQPvtRqf5hugt11NMvFX9s4MT2FvT9usUYMJXspcvTte7Sh8",
  "key46": "5V6hqMGZLyi5GFkyswby3xwvAwHFPKKYVTgM2pXN7Hf8TpznWLRbvg9KvNJKkeyjCexeP266XtHZJfF2x5zKdvkh"
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
