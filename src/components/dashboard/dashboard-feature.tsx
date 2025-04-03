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
    "2entW3FShkBcdfQzsE9J9197mXsCqRMYi9Ehze8Fe1e7xVmXTcH1cfYdQYxwPZx1DiGZeQq2kf94FAKwS788qPsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5hKon1LzRWJDmCJJ2DtuC3zovX9tFw3Hi4B7u2KkoMX9h7swn9ZphstEMZA76S3wvpwDHH9meJhVx1qfU8NLw6",
  "key1": "3LtzPjM2trdqGTTQi4QrrYeEfYCnXB98CvXhKBzjtCLd8Gxf753Hs5k3y8uX1DfVrHJH8UbLxmwAvfvUpEnfyQHs",
  "key2": "3emvK2eEDDo9xBZtyrPEGt9DZ5LSAHfG8NciqLNRVz1eRQXtUBRTb5g1pEKRsM1BFFyzuYNGjep3o38RBWPY4vFe",
  "key3": "4yKMad5GeappW5TbzfBREVjwe95NTyLyv6k8p1dDhERcUifpNbzn6XEp4yZfwkYUtJD1GD6afMNN59aE4RmZ6VEh",
  "key4": "64gaEHRPLhm9T2qM2BawD9LhqRmf899J9p9BUxbA4E9mtMCe5HXTug2tvEb2kFDMshwfJMJNmjpy1L4iYRkW49nW",
  "key5": "2ZMbradiTpeQ3XFT1aiNkmKyhUAfAZTLWH1UZBdS7N886pS2bnASwj5L16rBSU6PExocYDuNW7h2quqe6Vcj6enb",
  "key6": "5cnbBoPH2MXXyWsPzgUc9vUpMTzYJnuqSFVP2cRHHbZJ2DvxycMFVGrtdTBZzGQrvCmJebxeXwbYo1aiWSwiuCnA",
  "key7": "5ajroejycAZJkL9LAJn2FHtxXA3WVAHovTmWNU3NKY6wjjZU9bkBKF56F4vsrvmHpCp7DewhoFw19hq87FCAiGkM",
  "key8": "3xxbv7azLtjaQXY96ve6vXs1Sn7LVyGwJ4CNLFS1b8Wd3K6mfLhQ9w6joBAKJJbqZitaxQHN9dEreGKXj77Wj1Zj",
  "key9": "4PvWEqMHT8jV8VB5UzCsbyjaAZQmf8kxpnDjn3L3N6k9AnGTwhMnW6pgHm4zLBmMx6CcmadkFgamUZ3dViZzrAV4",
  "key10": "K8PxzwkY7P1dFLLc8LaDXsvL6HYT6S1X2BHfRAZy9cEEWtot3AjBwqT26nwk6nRpj4qTQLFUyveC1zXi1aB4x47",
  "key11": "2TSDQv4sUzf1jR74fnUADP3hPVXLXw2DXbizsbkkftMfvan82yEAkDYWamumb8vR8HTqwNSYrY2WkX6hnREBYn1z",
  "key12": "299VscuQett5FozZUxngA8xae3FdAtYcynkmtdBKza6KNNckDQJfGtF2sMXQUGvKG22U9jL8sw8Nzgvp6UmBVDca",
  "key13": "4b6GTQWVFpateRxf1sF4RFTH8AXhSQo5VVzFhfpeoHgzXKda4RLmgsTuPLj49V9BLwLmG1Yb8WTD2pE28Pnv8CVG",
  "key14": "kpDpUdMSQcfZRCzede77tHsZUso5BydgH7GNM66YWL4BVSor9ANrT8jv9f3gaeh1VsZ2xnx4EY7d8kyYifVGywi",
  "key15": "4PrxXcTCsEKwyg4wKvK3wMERj3ReuPXdNadJjXFUu28YxP8BgNCqB1ktwJZvFPpG24dS1DdHjaz939VS4H7wYtLb",
  "key16": "5xTwsK11Ap4sM1BWQjwDBQByxvj7gBh8Y6yAqYPdgBPDjFwnG8WZA4Cg3mGgiBtxciYM7t8aoE86AzwrHjj1x3TU",
  "key17": "vVQ6YBV79f79XdeP8AtiZJQoiUyJn2YVhPHaMxqromscLtcJSm3ny3LdBJKRqp9gUqNApBPoNnDkU5jK2boHXiR",
  "key18": "3D3JqGDhNebcG4zVonWfj2ycRLk3UapgzmaHPMo9BdehdC67mmTZFexSnP1WL2rjPGenkT5AbYtcvwZdRvxpZ3oT",
  "key19": "447qwWvgTHQ6wxWG4ALVheFTEqWPnLYg2UmuWKzkLDkhCC8ixJwcekuU8zhCdqVLXvkVdL1jTPy3xn7DWCufd2GM",
  "key20": "3RuPqsw8dxVD8YEmvJDLHXLBncLx1JokqHN5CQr7CZ5J9vFS2rYg88QNB6YKHcbBH3x4HQP5QfTukj7XA4sfrqFA",
  "key21": "2gKLfxBPxn3AJN52QqvPDwJFW9Ktu56U1b49jrhDm2K5bytscXMw75M4dTBueKQHVNNhM1kW5Qi5FpZa6m3LTQAE",
  "key22": "66Vi1RjuS2d3UbD8bN9SjqXW1rpza4dx2MUE2qJgG9C62FvdqAAV3HRniBK3NsZKLRYTvbJ7N13jiwX9i1Uj1NVW",
  "key23": "25EzXYoEw8GLtaYD8YCaV7qzaqDy8c4uG8PtmHvsaeKayMg32XxJjYYMihUbmeeV3PRyKqcN1Wpx738Ynam6Y8zu",
  "key24": "zzLJCU4mAkrSPqc6qJx9vhaPrmcbt4BR375Ne6orwpjZCby5rDoEAeLBFSyV5eMKogekkhtD52KNTKdEWSFz2hT",
  "key25": "3BRxak6iu36dp6LeKKz6RRtK45z555sRn99NkgCK39eWqf6PzBVwd1v4ciYtqT9CqnSqBVAdhG8C2HzfCWPDpuJ2",
  "key26": "4XVhhNeFaFJeyJoNkJYHWHtmLucv7HMyRVwRSMEuPfapsT274oyWbCNyXjyYSuYgRTkshizGYpJ2NXPXBpT3begn"
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
