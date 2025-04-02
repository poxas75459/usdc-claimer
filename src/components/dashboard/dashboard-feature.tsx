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
    "2YreEirxqSPRGt8FbSBwudNRkKzLbEgreRc2aDFNvtQ94UDwEZ3zbFhHhnCjW7D1Kb62vbdWSR1tifsWFxFHkv5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YoWgviU9iBZTyZf6Lgoe2JokEKbhgBwoTcHLAcR5ZMDVPL4eX4koLo2hGRBPVn2KTwNv878sjdad3nmhKErERSn",
  "key1": "4rB5wFgLNAEqzWxgBVC9JxzV4Wgsj9GRYkRSYh3d4u48jnFY1GL3kbdd9ufZ7YvewfJJw1Ljxv57ufEeQN7fSaMH",
  "key2": "2hUnpMir4vDjc7Epau9EZxusvzUj7WubrdhmzENUpXKP7DqNyCdrnaK2usFCcED12ZaZSxqiAA7STLnCPqFJZzNH",
  "key3": "43dudfa4ad1C7EiBJtAHQngAxjbCEjfPQS63RHYZzwZUJCkbDZmXX74U9u5WCVQs4xBDHiAS2bZTgegQZEnFxqTC",
  "key4": "2hh5VNw9vApkNbXkg444zjhF5wjpevNwW5sNRKmgu2YwAkA9k2mHVhXfEoTfByW68LG6vAF2LHQThVusg9TqogJ6",
  "key5": "T1giHjqFiWRLvGc56W9ZeVvug9Pgf1HXVhAbvWV1Ny6DeM1oWHQmEtU9tKZhBCr3Hm4dmyEhsnunKq9FBRjXp7N",
  "key6": "35TvWPNR5B2aLUmzYjbQsTss6ymBccPNT4T745Cow4aSyZZerdo4tnYRoF9ai4sBJgvHCns8FrcfpA14AMjwwhD",
  "key7": "5JUdvSbFfRzizwoMnvawU7T1VXDye1EWTcUU71XDroyDqFTBVV9ewy4NMgMg3NGFHXSAZLLN4pxuy8FVHXM7zqEx",
  "key8": "41Hze1FYHsB3DrnpE38gf1AydfT1wzwuigKJ4n35npJkRnivtdeh5YYNwb4jbPQdPXvmnJ4ychP8o47E7WNJTqqe",
  "key9": "2jSoede7HdfYnWgujgDrqYATwLJGq3b6i4SXZeKiQAuhNYDR5A8gY8FxNXSYQA9ZRGE1PRfWKXvgpRVCgeWuMRiR",
  "key10": "3ABitPGjRkoSA1X4NgWC4qwgn7ZtKwJ4TqdSQ4QhSVuMSPKuBwbcu9kZ3GMxU9Z3BctKHQtLtqL1vmknzcED9Mti",
  "key11": "5qKaCpmc7XVg4UL2iH19UZidWshU63J2FQpgs79pZx8stYsTEEkFD6pyAR3iyZKJ2Zb1ANFHRarjTMKZrW3f596g",
  "key12": "3uULWgXFM7ZbcTqGDPJYsCF3TjrsiwrivfLZjTgeef7fGpqLkn5THLbW8DA7tD7DQPpJm2pS9t2E5BQB9sSYcnkR",
  "key13": "aEHbyZoLijkgcYXoQpwN3JaYve76DJB8V226w6e9URM6tXXGPiq8ubpKMhZYBAzuJgNYetFP23GpmWZWnsPhpxY",
  "key14": "3y6CLwY9K7a6rwYDoAx8VyVWSFGiMi2J7wP4beQEyqqWoWCaxnLjTCY3MU7mErYF5kuWxMuU5yEbKnswhHJi83UW",
  "key15": "5CXHS5XRix1jnqyRwnwai5ZBYUptrCyJKXtQAaFkmDZZ2mz9WfUMhpvq8db3hVEfJQ8cJnX2VXUnGzArGADQyLAd",
  "key16": "3QtW3cJyo2bRx8TrQxqhhnuVvA3u9QsgKDcBFp5qYzkMnaYjXDUpQk2syWJiMKdMwgUmL5zBargaUyk5pPvA3dcB",
  "key17": "5EDMiUvMEfg3g5Kdjem2g5wmJt23jhhKStv1SpEeszYUbN8Zob6xBbj1LLJW2XgZoZUS5GZfmEV2Sw1ojkFNgmme",
  "key18": "3ENwdzBMqRMvnEu2Q67X4rLKCMcaJxskqHo9VRfUeescxKNxybiQq3XsKJivs7RH9Xm394ThbDwCVYsdnsySQhaX",
  "key19": "epCoTiZGAQd4LYD8Sm5z3jFpR4M3p9yBh24ThJwL4owLCWBC8tTeK1H41dsmY2tSVb2cuNUJaRjLtua5oPgzTWk",
  "key20": "2ys3pUS84vDu7BdzA1oDeD3p3FC2Jc2LeVEGFaYU4DUpmbfpFQF4mmWTeWctVAjDzKF3eDjz3vaLAsVt3uAMMqvD",
  "key21": "3uc6XY1GxqvGKzo37nfJFvCMPa41fskHmEu93dCr4xv7HinueTYjDerdPDscQYsSmZ6kPWYu3qJx3AmZkRiBP6T4",
  "key22": "5xb3khRJmWQ6vt2XwrNV5NtAqDHx6aB93kCybrTxqUUBbA1Htq32MoYE3Edm1rzzYS9T3muPVXoP6KdnVZK7UxdT",
  "key23": "2r4A6hwsJuiufEqBiyViPHNYkokwZjJZCpE9kpcFQ8YUCHtXv7DPWXgKKVQyjhheNkuQbahEEbmSpcSufcF9mJbR",
  "key24": "2PBXBnMs58WF4D7s9PJhZUDREqW4FZuAL1WSqYADFikXYfXL458Cc6vAovr8dgtmppo1ozRXMpBgJvXGxPrh1wxh",
  "key25": "32M69QRoLUPLNq5R5cwpSJXKnfSCWzLCcMoLn8DURV7N4oHFX1F7XojsjWcptpnNNMXuA6VefVMnUJwAEx1pcyrg",
  "key26": "3W55GNhNyFMeCSEizr31R5FEBwDCVZ4uaSLvveSicc7o4xJAuWSu8scxQyHgQANDCSwfwNmEbN6qiH85hiWm7ysr",
  "key27": "2gxfwxu3t9AxoQAeEEf4XFk6Ntw5SGfCU47Ec4mFBVxrZDxj11SGcGMki5J8jGp8LeiS651YF2qb77LSSJmKJhH6",
  "key28": "48wcc5gSzzi1RB6KgJCJUN8Ws6ucbcW1GpYkEmXnxJWjmuY8byxrWbQyfY1bnvHfCayE5dFvTSW7EMub85HLBwqY",
  "key29": "qxunMATEULKbk7mM1PjhLkpJXjapXSRMEwSuzhm7x3i7V4jbYYH6qEUdgmmobprBpYVF7o35R4UouL2uJomdvxb",
  "key30": "5Egjjs56F7WNp5ruDcUUjoT17v7GGK8aMkZcsARouM16BJhAkJZixPrRHBVFVJpgBkHzW5Vr2vXXDnRaL9K5gCFY",
  "key31": "45GA3YoUY2KCdfAsLnAMVfQutJfGt4p8CegkF8YoHLaRC3mLAhykkHvJAhSYNpnYTuyCMhmH3TNaWpCx8UhFR2wX",
  "key32": "5N4dXgf8WrUC7yoC3ZPzyQnDPjGjLzfidRdjAwcvS6AxxqrqmYFaS8oUJMAp9kf5xgfRm6eapWScAym2uTycRt7N",
  "key33": "2WoRNumaxV2BDgb1V7G9oirgbd3NLZVHYZSFdP8sEiMJAfUVx2AyT2dtdD2mfib7X1Kt1Bsa2Ttr6FkGn9sKaMse",
  "key34": "61CUquCVrznZ7vZdbxYjgsccJh9ptJwPeqvgSqxEy5iWqjQiGZXeCmhF8FsTvYdzxTixQbnSWSrcXG5iPi3g4gMZ",
  "key35": "54PJR3K75DVKSKsDLkVrjbvjGNpYUd8g4RmL19WvMqWQamfWwj8J2CiZDW6iz4Ay2fs2Tmnu2gJVbZTRnmdaGLYU"
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
