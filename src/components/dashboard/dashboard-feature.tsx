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
    "3yb7mDW5D3ECaguqT13nU7qP4dASe1R6WnE31hZ7zaYHaEDAE9oLcjYfuePsutKdcN59RGXPgb4a6A7AxbxJqHCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3fjAuvFWWdjcU4umrW6cYvt1ncdBpcipA4dw4KARFveHuxfz9C58Uev5rfCz7FpXKwbGm84yp3yuwmdBuTZVYL",
  "key1": "cspGrMjT2F1aWjcQTDYcrWnAkwDqdmLmQun2UDZgSr9pjrG53Fw2YFHvCRGUVKcTVoPiS1Q4PiksRLb2LJw3NKK",
  "key2": "5braCuJxkqGqFUx43UiS9XFDNugyeoCd58uhg9JymBgw9tzHtimzvKAetyZfhYwnuwg9NGutQ6TMTme6j7KrAxzH",
  "key3": "2LYqSs2NEVcVEDvEHSxKcJVXQf5VXh6pV2HADVcFWbf1QZU9Bu4VsBEC3CfN7m4XvTi1hp9d3kpB9beY7oE2wCwe",
  "key4": "PTNGj9G8hQBoUZyUbRnZCJmyaa82BcuWkAcQbMsmqzt9Ta4ewBozxnocFSnEj1UNfqbGWDGP5mtXp38k6GqzDPk",
  "key5": "4Sq3EGWLaNj3UyHgjbqJfGMXV2qyYPGfAFvH1rwyWFzz1ULxrrVozdwRgz4sxgQ7nWEiEhHQw8EFzDqKf1tSXwND",
  "key6": "bYxJNFcHuCyZyVkq3RYCAA6gYeZ2W8WPh3sGQvCr84wDXDMaqFHPDNmE59r3gMeq2JKXkTSbn9Z9t8y1sTLE4VR",
  "key7": "h1L6jieJXTdtFK9a7v7NW4xPJfqzeE4t4B2dCrMLv5zULcE5Ae7552jCvp9sxdBCntyy7tnoe3kCcSU4r4z7HBP",
  "key8": "445MyqJADubtMniyAy4CGn7yT3Hvi4ygHESs9WMr7ErzkLPJBkDZE8RJCDhP4AVcM3Le5o6As7M51ECUHEZsJU4P",
  "key9": "5TZtEu8vytRW9EKfbS7jtJyaPPN7emwehKQHRPqsdiiemSFuBhKT1daNv791DivjEs6ENnXYxmkBStBt5K8Tstmo",
  "key10": "3ejEbzLxgPiyLgySTYR183y55G51Uhs8pCJkd52xMtxejboCkfVZHbxxR1pSqdPSYgTKh1uV11mF4bXdv5hjNwnj",
  "key11": "4koR45VvCMKzkutq8UP1NbwWEGJZvvZMhnYUnc9cAoKXJ2YNQMxNqEASrCNVRrUY2NUJ1L8A8HyrXYkHUwS6CVB",
  "key12": "48JF3gtpNbn9cvrPo2P71yMr8CCpxQiCDRMDp7ruYKb8g1gSCH2mu4sUALrQGsjeh8PMMLhBeNePbxm66kXBZfFb",
  "key13": "FiRchLZQDpA9cuJF7RGiiFozCSF37cEdLe3s3CB3pcnsCyCEnFujTxJM9QcTiykrVLpVYhZZ7XHYTCnZYmxJtXp",
  "key14": "u48TtX3frvBNxmXnXbxcbPXznPmiwgdJH1x2k1EKr5dxeqYb1PzWHXLwN3FhrSG9AVEru2q6ucFxUViQ8A3fPWZ",
  "key15": "5sK1PWy4oxSApUKsbHmDzapPJAEBbdpoNQnRQk1uHTbMyPiSsG1rFpvXy41tpQrRcTT9F8CkUHch1bv6o1Rw2du6",
  "key16": "3TU1erMY2g7pNWidVA58BNBDJf4VVs7dWG9uCbnbDjiWX33EbyQxYVttATpGshufZ5Fb34pBXxLz2bsi7JKKE458",
  "key17": "XQ7dfUPUjRb2SikiQPumE4bkNfiy8RF98Zi6EG82jStwpx3y2bhHpktmu8zD7mRK1Hpwfujmr26L4kSHyeHrFg8",
  "key18": "4qLJVp2cZju6BfsUTmbhqLtV42vJi5zwGUaQkhPXNEwzh3adThrC8aYmFKwv39dLsnkv4G21rHQgKCJMFcpGbzd4",
  "key19": "5bpDNzYEYEr7XTr53Wk6xS9hPj44TwEJvvB226zLrz8q9nkR5o6KqUcmvDCW2sgWqJZBJuQiyWrJXhfrzmB4fWpf",
  "key20": "3FCMWhVaL1opv4KBkXWm8LmB93KHcV2u8zPWEc4G8QuQrxWyPBbYXoQM88RBGkBYYP6DoqLoRj4EoFmLZYVTrm6b",
  "key21": "3DgoQMb46xThUhmBNTBT3B1HYAAXXA81FQZQyRhBLfchhNRbrd7GufCuZCzqCH4xRD7qarcnMHfAChNWHG4M4LeT",
  "key22": "2BnK5SEbgTK6wu8o2dDUUFBiS4kitNt1JTqvAQ7cgMaKuBLuGbctrErZ4V8YhbCTZtDSK5zcF8uieMRdTWpUCK5H",
  "key23": "5oAZci6zo6c8DruieXPZsUZi4YCt9pfy1vPbQEcFBBoZzga9m823co6gC5jUcLYPKq1buBDMwKJaJKU6L2zu7kch",
  "key24": "3PJitnBL8j66DqHRDDrSYaH65GErw8XnwN9JnMvTyVMbw3Lkyy9WB8sANvvdaiCfJGtfWK5pJnG9bLfuTSYzQA9p",
  "key25": "2FHMs4fpXzur77f2tsUFrYF8rUNofFLQTMgXMYnaV8keKoR7u4MiptYQm9f47cXMCG65cs4v4YBXv6HMEfnYBjTt",
  "key26": "2576D3nKMGK2NeyJxyvSBTQYX8ciwrwdBh5Exq6bkQz1LJDa3NRepCPF99FkXFKvUBgyCiuukzLpv9S8Ai5iLwi5",
  "key27": "3ybcK3mWbAczH5TXxu3tK1ghxRPjhQSALaxDQXvntAySrPDynP1z77CpXKUUDzLPwoDfYRSUWTBzWJGm6Gy4cs9V",
  "key28": "4YjBQwuDeTqRxBAFBrL6zXi9g6SBLDzXH5xSVEdfGmahVDeUnWa8egCaz6HUw3JNWxjmJKgsY7icmJKsJP2dtpGu",
  "key29": "29peofZaqeWg8JyRkqgynLkYfRdssLE13qk7DExy9ZAEra59PBdVSGGgDo2jYnPDZRVJAvR67iF5JiuqGXSgZMLF",
  "key30": "4c6tvwtSDcxkcPWx7kq4igDxTxC5CjfXyiTGyHLnzF1BWJGKUNHiJ2mxHL7kNQVbXuPmrBZ25ibV5F6km5uUdGio",
  "key31": "5RdEDjvxMgua78nd6Sy95PTA2H4ev4UTv8zDHTADekDLQhwYu1MxDRnSBt6KU4RvR1yiYw8ybWDRJGCKCRotbBn",
  "key32": "4X8VgEybdvS1S241m8KwQyjq8wq5FZJFdiQ2oRkgKV5Jet2DETKLntYELaQxhr6sotWVhPHbkcVDHAmTEphL85oW",
  "key33": "2Wr4SoqpHcAopTXHSJEYnaynEJ35vCaLSJCfoGfv2PmjopaZdAjawLAep6JTzg76qLuFmRmJVohgev5rWgVxyory",
  "key34": "5AwzS5yBn4iurFeakttiMCB4oKRcXAxrYSR7EcTvdkMrTRLGBhcbkSWJLFxjWwFnKwcKnKAV8KDGC33BQhourhpQ",
  "key35": "9FCSqXMspNWC4acZE7gwxZXzjtb3DgzH1RhLr2fvKGgzEdyj5SGpMY32WjV4ssqfvLbyitkJcWR9CEGAKvBZMAL",
  "key36": "5aviXXTLTENYLpYzR5ZAaoPVNvj9zTuLxhiuNwDwWmAu6VsHDmw3geXFuMfwd5J3KbfQbiK7DwpRMkYwkeWWaQZx",
  "key37": "3my1iKmWYz2aGkssobbNLHULa1ecsG3zPgo7FxeGVVwzQimDmRioEfyUrL8BXhsomXE9HYoXYQNaZizDCwScpGaK",
  "key38": "eGWZ33TetqEe3nGFT8zkbhuE9FWWtLLteTTJevmMUiwu1SrnzFAw2dVjs4JqiXiKvXwPqZgisrvb3KnVFXXXF28",
  "key39": "3YYD1zZyWpQuUVhBVt7HFFL4yHgzZAtfMVACHkKNFKu4n3xa6MptnvF8DfvQZ56RYgwWmxNoeLjWV1kJQeTwSC3b",
  "key40": "2FH4LPZXcVTWqdKRWVoY9PwCZ2UxTn3nsSh7UtwoyvC4HLsT7x14arG2nJkkaJqci6NRCVdoLdDwpgdt5TYbcz4G",
  "key41": "3v7NWiyMwucwN6bzxzCvo5dFyU6FsGdNP7ivucR8XGpaPiwQ6UvCQ9pEdUfSrMeoN8HrkmsyVMCVbqVmuZWq5Q2k",
  "key42": "4u3DytcKyTJCGvCMpgdXNfFXiCGWfjkoVAZ7Yrt4bj1a8UyWX6kCdqVeaCo2pJMkeJ36H33cQanxQ8oFXGe5ie2M"
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
