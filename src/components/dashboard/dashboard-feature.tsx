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
    "4smSb6hyHbDqPm4QWQeiro4VhRKrt5XEvEXd5d7dW31cRxBTiEc27b1HCWqLBhBMDLartVMCHh4LdpUazjCVrPqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRUin1qQFp2tZk5JzYugrF9FuS6gZuqEGQV2VFrAv77rCXGx3cZjXGA5ExdxrQFDvJcz1YmCmwuWvCkhuP68vez",
  "key1": "3A51xhEYKezSpSuFkxvp9xAg7KY13sVWXwxhbSRXyHFyvUz28DF97N2RndBsuy69dW3YWn3U7CBuBUbgQWW8gGiZ",
  "key2": "5CgiYoFv8QFMi4M2EjZvLk8saDYk4kH1DSdwHgqj417JXQ2xfnT5ySj6d6c3U8mH8qu74TkpHgdkhYHVSmJFJb5k",
  "key3": "2cFZBttC4tAXLAo12NQJaGG7ri1DymH5xbvxHzwcxs21V35oupaczzJG53bHqsDdAq9PrWhE6cHwC6dXYvw2W36R",
  "key4": "36psHN4KNnzLNJsqbHmYWrRi25poUd7Mia9Ci1kB2gqxNB14EaHqZJzfCFj2HcGASy9iFazwCCr2WXsFnZTr91Z6",
  "key5": "5uWYP6Kv88db4gv8kpcDtoUhZNtBc3zhb5p3MnbMnHbtSuLUMD1zUJknjM2AR9hXRAZ3FmzLGtvbKfgpyWZKQie6",
  "key6": "3TnidbVwzdz65Uwx6W5AspyPuEHVjj9FoSCJBS5e2HSNmDTouUcdHvjRUkAhN1t9Sq5VkuGHeAixAUrY7Q1BrPZQ",
  "key7": "4d4RjhryBhJGUkp1pHvwZb3rBHLXJzku1Seq1FZwprGvauNL68VYgBETR8qqHRtDtVTvs7ooSwjExdZiSH1VMQxA",
  "key8": "5LCSZMv4zuB9Bw44TbrTs5pJ9uyhoA4gx6FQtnt8q8ZRuzykLNP5wuRYLN5U5cVEkUt2hXCxt2Y8wQMMomiQY7q6",
  "key9": "Xs5T3SfnFmEGrEmELQVnKdRcUWNmood7Me9RF2CsPobZvMgaoeiZdJcrFSPjamRhDTri8oARn7uPdNJ9UyHd6h8",
  "key10": "5dq91zo752WxzJQ9doYGwvk9qRBS9Ed8Z2AtwmpuLfRLj9rnCcp1kPJ4zeSHCyopzMMRi2N4YANqYsJPkyVrz9FR",
  "key11": "pYGhkm62iQrSNwnpac8hBTSETugXdNUT3ndHteXCiPfBkAcwTdoTFdC5Cs9xRYDYmDuyPs7popgpaZC5A3zbJfE",
  "key12": "28kNXQPYipsTwTbLrPaFuby2xPXUfi4xYEMyjkn1CcQ8D7UPaB1Uj1uwKRiJTD3q2kNVVCxQQoMEmoAqaojj2Ysp",
  "key13": "2q1xK4jmgYmtsh7BZLDccRowqJ5xb3qZQ34XwAP1YihmpDBHv81rLKCYNkACRMwKS1GCewAAFpCshZXvZWLyB9VN",
  "key14": "SEjMrqhgSkpS1RB2DgiJsS82LMiAhyz2qBjvFrEWEubQRyhh6FRrccf57MawfWJXpJ7Ra9YMpmJF19EPtNWJhk2",
  "key15": "4ErRpih8FvqhebUfr3rtCAx4DwxUhmYaQe5c9hiGE8f6TeUZfDaJjnNGsDMcyi6cWP1zX3mMBxveX7P6CWJLSXAc",
  "key16": "4C8cU4u74oL5Kvf9oQCjiq3fpfZ35CLZNYn8n4DwTc79PidBCv3BfpivAvFZJgCbD6AXK4KWEQaksZ6qGob5CKdz",
  "key17": "HXZDPKoaP6LmsaHfopJdchYZSdQZioxJj8q2ZDLuuWkrMNS61nbjM8XxvU7562aukzotC1XmczCd7sqdkLBL9Hg",
  "key18": "2dFho2ayaDYS7PtRT3ztQedYrqUxrKWusztfbhX4S1WreXjB8m1FAcQtKArWAkHApFFFDP95rGPgbBXWFLbvRYGW",
  "key19": "HEnSMGSxTrTVxSpec9zSLce9Xgdvjr1yDpNy8TqqV4qR9C3jCzEjJDC3G3RMDJCnjBiuepmJPbgVfnBsSw3UT1X",
  "key20": "66Te8NUtyAbFxLD4vqwuiXqE3hBqBB7u9BiKbyZGpRYVe7izBGMCS4tVCdoC2gSiM82mNEs4b361TkSfdYkLxNTQ",
  "key21": "3T2nDCrXysFQzCanrW8k7Q8LzmEz4EKV3KD3Sd1mtaAq8wN4AGu5vgGrArD2qKTCoaNzEh7DKeScFrwL1Gj3h1Hp",
  "key22": "2nRGVpm4L1aCLtSgfZNZ7Szs9gZQ49nR372hwiuu28UZ5LxB7YipHNawwgWYJoW3ZWd1vBbtELGMVVaoUrDra5KN",
  "key23": "q7FGBA4LcpN7sU9CDna7N9xDgvmsBqKidGNLXf8RywuTScjdtmYofsDZg2XhYfF7pxaoc4PLrEGgEz4bqebfR8e",
  "key24": "K2QtgjiDvJWeqFbFh4L6Z99n8mVGezHd1kEAMikHD56P6Y6UaheQxBVoDNZmX5EUJ3F2iPCRh9dZaPTtRmZi6Ci",
  "key25": "3hsTdxfYKmpr4JKgSdCqw41ocft99BCwpw2edx1hVKPRZ4t7uqiUndkVsj4UPAXKdjSckx15htBwMg9Jqa8Gd1Gn"
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
