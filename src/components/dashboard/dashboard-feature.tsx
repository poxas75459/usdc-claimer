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
    "3J5wvQy1gtXqhVSBfqQA45VAbH35fhXBJv3QmZcG1g1VPYLcM9mmMLf2txzooUGqKgJxFttDZ4UczujhF2syZbqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVd31HtWWKpFHSd3i64B3HiQd5hxixGH3hV7niZaCFYUz66vYT5wZavX5Z4bjK9nbkfCfs6mSFrpQBayjxtq7Cm",
  "key1": "UUcMMP8pqYbEcX7CvP5Nvc2agSqR2x5wdYLfMvnkChUiRentsM7mFQyUDoTvkAdGnGmEVkK8hdnGWt31sLbENfL",
  "key2": "3oucwqu7b8RDMjYg5uD9hPXt7SyDYS2FjCiTEF1S92ExP6yYbvhcmFPHAzoxV2nEebHDTvFh6T8SERJpkMWZNitf",
  "key3": "2YrNZ1KiWGaMzGg6Gig4Tt2a9i85kd8DRdHcTFkY5QB4Tf1e1Ft9KahGT3oCzQo3TALj5caPCjd1bSsjmwaRMc7A",
  "key4": "3W1pcYE4NfkkbywrAT3zyf9sgYNAZmQvB2VxegMz1RdB8wWPeZ8DfGwtChsr1jfFvKkp4oErNt3Z4DmnLuXwUpVG",
  "key5": "4Hvy78aFhYqgqWLiPNBdyMogbJ3UTh9HzERqgQyWjuJj9rAFm4ntS448FQ6wfFb1cUkmnzxxKdPG4FzC8CKgnwtt",
  "key6": "2KFQrsJa9QZ4y4oRybHzU3zg7YWoprvXfFXmKPszJSrAsJtQ12zHtFCmKKyYmdV7M9AsE138UJ6Yri9EiYqspAGQ",
  "key7": "31TaAXxARZxNd3PMq3auxCHiB8LCrUz6mfJChJ41LVhD9g199Zq5i8B5c8EfM9nTA8ExSDQwAwY7YJkeP7uZ7C2i",
  "key8": "5M7XcE1qK93gizmfXzgie9qZ2JpNPToRTuBeh5gwGzu3k5iXsmL9rwxQFj4jPNkch3zNZa56bQJS3vrhr3q9UqmJ",
  "key9": "2ZTepM5XFeknSj2GX7B15ZAEHkfw3TkFbhxZAMZtxVADZFbuGbMsL27U5sCR4zYT6upP21J79LhmiXDZSiBXPEZn",
  "key10": "5uHH5oYe5kAHpzWsYm1Usyz5nBnp5X5jR1x2TsXMqjiRr14BXQchejqsqf398AmbTJ7Chnt9JwDpmNbvVeDbx7yv",
  "key11": "3ZWZ1uxXSSfWna2gmoWYYoxiCwyEwzgUdPF2U5bVCcV5b5xPjopZjPxzJtBVyRLtU2tNy45pKNPeYrUjGiKVvjUt",
  "key12": "5jzHEPuJjMSDKiuUG8vcMm5ZXoabMwGJsHfNtP6agjJL77xA9YmwWotXon7ft7enssd7RUTp5W7PZjnz28e8zcac",
  "key13": "5dou6UpD5mJsfwppNPV6dpTdEDHp5RdXhxsXxqe1Dx7icnx3HPB8b2pzPC6yxHhHvYruC8K8aLyTaVK76a3iN22U",
  "key14": "2LnRbVDzNKwRjS5ZMv2NLppC8znMqy2RBHJiHh763UiC4BCmDyLnQnhUd5eVKsT5xnWvs2L4oNszzKNBtqJrYha3",
  "key15": "3LMrovzuitXfDJHWSjbtCw5g2vYUYvZj39Pi4QGJ7AXUrdJLLymGaigePmPrtCoDU5eZ5yQC5j6RN7DMoKRArfW3",
  "key16": "Sh6FBVpFwfeyGMrhjLtUjwvEgJa5ZrrBYsbcxBuyRVkPXTiSU1GBTtghsjWHRsHvVVw1X7YVcMybqBTUmer4cXo",
  "key17": "2MCfknScojfGJP9nUVgGxzjYeihBdY7zVChny1WPy26KjLzCeZJgk8EctW2xPEVw45vkiPtbFHTpzvMtw7CJVZj2",
  "key18": "21E6uRDjZMDYMzANekRQzyiSAvXxEiGQCyCGbcCcK4dNujmqBH5en1prHZ8LJKGgAjcN59UQRxhqWyaovnmdwzK6",
  "key19": "5ZNfXvJS2bv457MdE9rcen6iCRtMSSkCfrw1XuFxKXMMBjQm9ZLo41MJXdRLf4xtJHuJ4EPiPwV8hdosqv1vcPeY",
  "key20": "2wMZuDgKLhMi5FZbugGTe36VGPmAxhkuU9DUkyaDBe9ohE5jVC7QeNjz1rFp512TnrCBkcRPYh3kLaFYbbBzCCjz",
  "key21": "55QWfhHELx9fb3RHMdQp1sNJifXmnXCG6LBaHJrUPU4UhK5F4NoALasUPaR7tDb6oQWuGm5pEJAQEKfCmacMgA4w",
  "key22": "45s5NQszVZQeLetedqTvETbAGfhQXviKB3sTmHeQELbe1nS4dCHcUP2nGVHfDfjZWpsic1vy31ExmYQSp6CP6odn",
  "key23": "2YyfeQsA8Nw2f14voF6zrvd2eoHtJp7nyHwentvE9aNy7v7Rpt2CGLZEaiWSskCDcnMfn9tMx2ysQoJuzyPoSgcF",
  "key24": "5Hr8k9Zt5aNx6643QLgTtrAupnk4MHTjWBoK4uGxmw2fV5LiAKNvDKMgAMze7pTv8JwQggyxwaWwW3it7gAHRhkM",
  "key25": "3a4Rm9SqRsujzsEmroj6NbMnzMRjvi5Zvf6T2H212X4qgL3e4WcwZagd6LZnTEHHmzCZRwiFez2MY5KsR9GKGfwN",
  "key26": "2E13JQfxQeXrdxaHtKU1koczRD397Js7VuV4MVKYuSJzycmKvuMXgyWyKotDwQPGMvZYg2DZza8AjUquTc6QqnJu",
  "key27": "2KHagQRUiv2rpxxCVCh2UrHVnYJp7L1JRw3tetwTfTENa8XtBc82m7PNiDES3LF96NscL33FkhrxBZcKi3rL1BPU",
  "key28": "4AnNFV4Bp86nQi5VUhJTMYhXJBXbe1mipc84wgTJVyiWNoRn622K8tknTRWq1NUtHiM2Fjtgbzzt48dbbTdoBVAg",
  "key29": "2Xs9egybJXaTRKtxSt1xEf2R8MHZUYzhcer59ZYQUXKvdg9upe27G4WDQjHFRrCucxPTDo4fo6Tyi7xc5vH3SRjj",
  "key30": "2Y3B7rvbcRVdzo9iboVB4kNqishM2vcJJbpUp5Jfdh4mz7meHXw9ZDYd1xTdoe5UfCzX4omWip2pJWxXiP3yUpmm",
  "key31": "5VpdnYzd66fpqZiBZPuciSMw4C9fR1AcHvQxHaYTQUEs4p7vg4G56LPKkNGMKLKv4BMRpRirmeSLf7WmFGoqXRUH",
  "key32": "4HJPgNdeyt9aAAzWqNF2zdCEPY6KLspqKjypPBXWo6zB6vVmBPg1ib1wHBrxENYaxTzkcjjb3ihncoiTFdGuwAGf",
  "key33": "3XsQAbVjMFg9K49gXRNBa86bqHQBrjWxSW8TUHSwRZVL5T3WsXBnjV3T8Q815hdZJ9zLVanKY3Sp657RVkFBiwnj"
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
