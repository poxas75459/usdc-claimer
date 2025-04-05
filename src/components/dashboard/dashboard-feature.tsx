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
    "4r2UW2uguN8qWStQFar5uzHkNrmBTrC6AdJMso2ugF72hXiWW3xQcxyrE34mk2VjeHrNeuWk9XyMcUnxY1RGATjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YV1KQyQW1Gpde1UrNfkeP2DzP358RmKkpQVtFTRrWw8825FuTUYWe5zWBTB1aSUCkSEesmgD8aDQZJY1E9E8MWK",
  "key1": "5NWoa8Uno69VEys8BV6NAhsdCDLWMBUkGhNRYU7nhdzfCMPcYhZArXNiYChUCFA6YKwSfya3Z6ufx3HYD2Fuqb5w",
  "key2": "s4dnegk4zPFHGnLb5WFmmVXCvJeA15kKujp5F6LG8kJLQvpyuwtFw5Vs11vvwoRds8ohuNJiBPLBxv9DLCWwXVJ",
  "key3": "dXnABgExZzor2gF2faLt9FFCaYc2H8FgewCs84RvzaRxGnpeCuHvEq41ZbgevdLTpTyB9nWwq77KgCF8QWEU2Rm",
  "key4": "3LbxCMJjRBGPKFJvnBqybm9CiKog4dYoP4dpdd5v9FwchFCuK2JqEsi2VdDs9XGwPFPMkwVBpb65TGoW7G2n6fyx",
  "key5": "24BzrYJ5E5neu4yNQ6SQor2MsDkFany7aLkLhgkGGKUboBXgujrnBDTymTCssT82TtLjPbHMCj2fnDArP7ze3K9K",
  "key6": "52KPgrij4XPWuaZ7WJ8fXjzNvRourE9FDBCguvEbZCtw16SpAqYmJ2RkjT2bEQyE2n1ZXvYCqTsdBqTTEgJVuNA3",
  "key7": "4omB5PinDmSMXNY79V7kXKXcP8jo1XhTqvzWLwzFdoiHGE71iM82mwFzQepTpUbk9C8TfRBCRU47DhUpr2vX1Aw5",
  "key8": "2aXwRPkq35SZE5neNtSqR1gQH44HK4kjVN5iYuckwNCqj8txEBa4qSDBfaCqvLZenxh363JtzfZn8zsGnSsBg5rR",
  "key9": "4HXJPFS1LNkBqmfpshKvoAiT47MoeJLtzCDeJFzXiHgZYN5CWQtLFgaLstTDcidySmU4LNRXzeDvMazSxcp5zbwv",
  "key10": "28bx8vFg2uuumKaK2maB41mtgSa9gUbETKMRxaEKeWaw5hSLG5Gp6jeAcE9nHtAaRLp9hrxo7xPezsG3zvnEJZuB",
  "key11": "58PaBPeDVpkupBw1dpajnZqe8pbTWiHmPzzECySqHArcssnrKmGwLAb1N7UikuFZtLiRewKcVkGbKi912TGgZuWb",
  "key12": "3zcbP87HqoXf78wzTpA5bprVHCumdWE2tJ1vW9WbuHPxPWM23krsaaLhnDpzihtAWWFkyWpDFWzWZAEGQAqFVsq1",
  "key13": "3zJ4GVgUZjFbUA3XCiV7B7Gm1g1M3uY9cTevYvcRozVBU9gL9wqX5emtCswACSTunxeC3anrMxXVtL9JkwdnY3hZ",
  "key14": "2W9WxtLDWHWvS2xHsB5jFfPww11joXzGPBgajVZP1WDhn67nykFmwtshzo2vjyKAWosrAVWk9dkoLCNqk8rdHaqt",
  "key15": "65iPfbm9pWfqNJoBx4Ynk2AdCtfeTji1FqtMvVRAUfjrB2DvUVJpDiyvsA7s6hZ7d1oGxRpLVx3MrtbdNJPsmwjG",
  "key16": "5jVsovnhvZAxhioaX4X43PD5AnSg7c6gXonQj4xdxXq6A96CxJ7G1BKmACPWF7msFoEpRL5GHfePNv9v83tGhJA2",
  "key17": "5HQ99TKVLWtqQx9gVUZJeaC71SduLNvykQRQev7CG3Qxhhu5NWsJCiRxA7Qa9vfJoTVyaxy1mFCKh9VZm7e1c3vg",
  "key18": "RPHVeHK1o3F5AySmX7Sc4nGnmdMLt4SrGMDigkE8kFmUQ7spsCELMB87fDBoRqYUgcjWBCoru7KWAY77k9Jem8z",
  "key19": "sPsSoUE9RXFG3J8bmhorp6jk8W6Q1dy3J4oCWk4H5HMJof7DcuJkzDTiEfViHAzVgUSuDWYrUcs8bwy2wyFhPwJ",
  "key20": "UNEnpqiMHtoNeq2jF6fYbsMr9e9gXUgh5Dj77Kbw19CMKd4T3BKRaSDGC3iyWTu2rPSd5LfbRn474H8GzZPer4o",
  "key21": "4rwVZwGJMKEVLtWqYHDJcfQcCdsRAifCyNGZ37LYxszoxJTEzuX1muUtj9GjdGUo3oEpwNaMkAAh5wuy2R6njjXX",
  "key22": "pQF2Y8RsCPtYrT7s8WbfXNXUu6bDa7BAFzp8B2xzCg7cUE51HtUBt1kcQrvzdZDcwxNTGcwKNcw5yMmZW9ih76F",
  "key23": "3ZxSfJ4rwJbFM6iRWkbNhHfRsJSvEm6vh4HAsu6njW7Ggy4C71zWs14SznrTFFzU7uvQqH7uDK4FxhST1d717dbJ",
  "key24": "2TA4MSA8KH8cDJabHoj5nP1Kc17cuf8ZLLSVWzpyrJoSZNTvS8h9bCStfcMTpeJvR1jtm8FXhrUjrqfesMUAAsgc",
  "key25": "58Y6FpNVk7RPMbM7PfBSeFz4UoiXfxmiVRZerARwxLiYi4jPExSr3Q4rpfjEEWJ1URWqykVLKxEPy64KWvbMpjoN",
  "key26": "5gngvxUF72QkLvT7kiixhzWcLFg8bLMhrCSbsxAj9RGqEaPgPkeVAgriTFb7qai28mQYszutX8eTJ4n8TpuEPF3V",
  "key27": "35hqrMEJsqawFHreGKXTeTqycoawB1m9fMb41XdYvfj57Lir5A85PRMnC3vaLsgPJijddALCWsyRLggkKEiVSjG7"
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
