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
    "3Dh5B8nKY3ZHoTYXx7x8QzDxbvad9D16YjrHpJXfRfd71QTHdhC4oXJ5aTkcgaHRWw6gyL3D15SnMrVadi6mHF45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bETABhA3sVZR1yiyrUKEUvhrCCp7n4uJQVgB92zD2NeKSMuZm3UagCDaHw6mzMeH6cz7LR2zV2N95axyyD1u2ta",
  "key1": "uZj6poo9h5rGYX7CjtyKNL6GrcKFphuHqc28LjnjUR8N1tMCRoNLoY7PE3iLqr676kznPuZJyYFQ6CKqJRRdCp3",
  "key2": "3oa1DATB2761ecNDdT3kQk2pWcj8pxdU9mTY8TFQQhhUR7roU9moJ8s3uMWGEjDMTaJwQoigHQcm5X6yNTP6Lhgt",
  "key3": "42mEC5XrhJyGM8iPS8FR9JAFg1j2tAUkLSVvJfVAQ1uVbJJ71hxRTK2XPyM5PQvpg19HtyCrMs3t3konwEqZBvdX",
  "key4": "4sMcuQrZ8BECTGKxCNpdgY7gDwibKztCD9qso2CpzD2tbNJZBs6nBnhTzRGwkk1kPZojGjauzJzatH8PDStHg635",
  "key5": "66VoAibtvWKEaLaNdF69huQEqVHMXWYnMY3H3gRLPAxPmouS9MyCJGqWtiRcrqPuT1KNMWdybuUqpiYZPvn8d2Ut",
  "key6": "2sbwcbB8R1953rtaBF4QHf7uoHZRVhrc8ehPhwL3CPn8E3SAkbQAJEz49J5bCqPD1hW4iiKMXB589rnAM78UUYom",
  "key7": "5qk9NCQmQizAKhPxtGScvrd4jb6cx3PQHD8yYG7RVUArQoP6aVrE9787v4FfLJxhiPQ2vhDeP4xpBVdzgLpeytaM",
  "key8": "jyf5sJm97dkj59Yf3Mb7BVsqGNrXKgDagZEdx5CCUeGcw5nAYScWYaBXLba9vzGZNQonoKdQgMx15QxzRsAqJpQ",
  "key9": "3ZV55yngNQPDUVWVf9hg1FyeYHUSE83iHKuyY12p4PDyohsevxHxr7feTrxpLhBghSovM7SSrywxW718rWnLv91p",
  "key10": "38HrFWnHkPPt5yJmfS1xDvkbC9WZC3qsqvuxWCAD23W3b3K8YTKUxXtiFfWqd8cTiediozixJVy4mLguBTN2n4Sm",
  "key11": "3qx4m2M49fmWtqAeUfJB3ehw99uBv3YgkusYTMGf8SmuscgnTTVgjcpLD6BXuGkvYzcyuGBHzqXhrka3rn3GEyz9",
  "key12": "5Zwzh3YJjV9txqzwPVoQ699aPf5GoNDdwbxeeCqsGFBN3ZgannuCpEoLFob7cqpvAnm8mmGigcVSaM2eagWa4NeT",
  "key13": "36P2kQbK5HryGefKoaY2foSvhXA5S33yusXiRz6xfxnUoHwB8FktmXCT1jdib1nYUchT95aHZYZ8N9K5BP3nSiwX",
  "key14": "4TBVCtPGQZ4FNMmVSw6SNX7wo2ZFqrreRAp96WWPzgWPg1SABxZZRcynUHnNW8uuBwYBjLyayBcEfJTCALgstX2u",
  "key15": "2UXBoDz7cNotqAeTqrexAwCfvQhSEcMwk1LHKAWWsLEeVjJsKgagR1KmmcGZ4ZJfuzwnjTRGgeWJhzC2Z6UQ7DD8",
  "key16": "4NAsqFkRuYAEVY5zaP98neGss46ahXHrDRmpzG7BGs5rgw9cAux7Jmu9Xy7cQrzhWuZpWU2SzJeYfJAqVL17YpVW",
  "key17": "5MGv9yA5XsN6dhCCWnHpALgFVfJqsWE5ThcUa2kKMvt3dxvc8SkmJrdfnWaHFA5nxZdqwcSn9KyRHYRQ6G28vyka",
  "key18": "2ZNWqmtu1zaKbBGtTwDJP1p8Nz8LkyhSnjMV4P2vq2gb2VSB2kc6whDNV8jg62uNoujMuKkWxiAHY367UnvXN7vY",
  "key19": "tuMs33VtRZGgRY5StgpTt8WWqHjPdiupPEisNZMxByrWASyPejV2dLkoABM7YYkERS2t514CWCCK1f4yo9HMZyn",
  "key20": "4dy5BMjQ2bAC2pDVno8DRNCTcAeSGnpxFYwrNnyxQmepVxSWqwGP5Y3QMC3xpXSPw8CzZ5Rvt1sAWg46r8eyNjof",
  "key21": "3q7rJ7amSHwyiDYpVsCToiEHaBpk3yPcfLjwdNb75DfsQKBrbrR9QdK43ikTn3YmMPSQLUcGZwebuZA38BBXvChG",
  "key22": "EEtyabe9Gzcso51myQdZehTjkMykPLA24mqRa1DcXVKDyUUUeUe4fAcAFxk3ZEeNhpcV5rLNZVztvgawFRb1Lda",
  "key23": "4HB1T4YHV5aptnQLPbSvN4Cp1sVbBwLWyudbDXW3sDVgoVtvnoVrt1zyyg1ePazEFnoiyZZ2cV3HXU94PwLD6ekr",
  "key24": "3JqtxwBnh9o4qHmFRan58Fif65bf5kyPXH47ZzhJFEUPJtQeKWKMLoPSfmw2vGLZZJjtvDwoV5S4X6oJcDHjUJ3h",
  "key25": "2fJsNziuRMpz9zt8xJDFx26jAPrjiyip4dpx87f7FUe57KqE3aeXoB5mwK2sMP8b4xp4yM4twonMV8akH2wNP119"
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
