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
    "2q5HuL3hqStVVuJNSPorzMcqyF4JyToZv2zRDPHne49UL9WxNx8mbnVWvuQEPBy1mW5NGRdCYNRBpq9324NAnAGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R3L6ME87FYyMoBJRuAuApiaV7j3ZG3faX9jS81VtnKt7RpjDD2qrX8GpK7VmdhnqGtumxp4PgpvRAGvNffV1xh1",
  "key1": "2WDTKEZ4uQ9EFDbKjue9zRWH99somsPxPs1UXp3qVuW4wyUDiUwbsEqrbqZEJYYN4HuSdcGDVx6P3i9uzmLCCAiD",
  "key2": "2Vkr6pAaWvkre2STefas4yheBvYHKCxRkzEJQiMGhAz9JujGWZdrbCo4Xow2FCnbtQbsucGbWmUsidE4qSZoacMH",
  "key3": "2bnPJShgKJeqJyKprdmXuFrqEiZRh46WGuZV3onsTWZGMzzdtBsfdatmqY92RCBcwYtKo8Emw95f2duhRJDUpECj",
  "key4": "34V9o6GWJFLt9jrs5VeLotmqyHzNTZruNeBRy9mat2LpsGm6N8rDJfc9Fxbj6RXCQTfpAmNyS18noJm3js5vXMM6",
  "key5": "3kVQNY7HMFqQTbXMAiaNJ8NJjCtnccce8Va9XvmA6qoQijqk7Su1LMFgpiXuKMbTdqVZkxghkVeWc8rN9XfDSqcC",
  "key6": "52KWRa7qmJ7MwL1SD5pvK96rsDxtk3jnXtHtXavQVva8eMDXQy4rmNMzd3CPwo95do1ryZC1PkWNCcLGHj41K4zC",
  "key7": "5RHaJCr5wJ8ToJtthXfNwaFAhrxksDJQ8dgDetpDLQDmQGxXoQNaMsHn8JFVdA3r2iJ4S9tKSe9No4syvnp4ymvP",
  "key8": "2Fu1vUkvMkqrmMUipaUYXXWqJC9uCWVApdnVFM3uMXsvv4wex8VWiEa544CzfnxCkyQnenbBGJTDM82hA98zSiqz",
  "key9": "3gzHzinu2hbdSYA5CBs9bVr4ALoqYrpL9sGRoGoBaGq7Dv3BadA8a2U3gzBM2iFCpywHuWWTZobuYsTdqfxCvdQc",
  "key10": "5CJ24Lv4HoXdXeTVV4d6qxn2WMz2FmgNrCRkWRxd1w7fQT92PRMGXfrk59HA48GGF9yfcTm1rpGaDg28a5JSMdRV",
  "key11": "5xUbTEPu8QxEWxs5ckT6iqSwUCVycpTWYKck6bL3QZDQSk8ahmdCxQALj2YY43SDHQLKkFuWCmbZYCx52gW5uUwS",
  "key12": "2grxV1mcPBT8rycHHwT9CiQrbxkrSKe6PGQqjEgwieVWJXYj6H65CQShhZWCyu4oY5D1dk9HRCyoeq3TMEVXP8Kb",
  "key13": "4myijF6yjPp979dKt88XLVHWpdtdKXLX5Ehe4X1pe9FCB8tMFC4WqeoAxRkiJ7Jojak8o4985aH2TrWLvC8Qr68G",
  "key14": "34wQz5cT4VFovRtw5JPS2Yrnxz2gdQd6HvaNDMP92Pz7vJ9oAvLBb86eMEFoFxyyV261eSu4ZUd9hRmiELtWAMfR",
  "key15": "5GHbz3dbMwxxT8FC7FbE4ERD2EdpGkhXUCyjWruGwmmWHMVCxAdyjetWP7SLNZAhFHcciiUvvawyoZ5vsDiLnbsK",
  "key16": "4ak2xNn5jrgMxAVqN9Aa7v71apwde5S5WVovPkiHbfYyeBzXX5nvQ5YgYYT94jBpefNNfZn3CsG4hYrLkUP2MFER",
  "key17": "2zLcSuDvMnAj4gSrwkRGeMhVZD1cVjtZjjHT8qLViCMPxW74UQsRxa84mAhhjEkSboDcbQQZvkZLQUcSgEoKgU9A",
  "key18": "3n8eotXHVCapeBHavnF6fCYSiWUDKjPJapwteqLk6yBkB7Ea5mx1gAPv883odGUkiGGqG9vy5DaiiX6bRfb8wxxQ",
  "key19": "5A1bv1LPwxbFenj593bXwBzbjUXYZzbUBpp3UTXueURndmu7pPi2wcHMd5TBMvRUE6hVEAcz1CoRTsH3PVvqgtos",
  "key20": "2uN6MTU4bAaTVejD3Yd2UdXKJyzZn5DtfmACZD43rXHzqfyeHRXtMhLiKh4yUziwGSyuYCo78duHquxKW5edVvwR",
  "key21": "2aqK5pQAG1ucPRuHMwcR34iEKetjYXvM3WKdUahioDBzTfvgY3siStYtM3QioubZxQ1FtHjmhr5tXNRdWWsBpjEA",
  "key22": "4bnPV2BxfThqZChDM7FZmpbe2WVZRc4q4sEZT7hQN3VYahZiV8zqEzZdPRXbj4TG7QAAAQJDaRRmirrvoJcHYFPZ",
  "key23": "4ZBkPbJ66HeSvCafAEj9oRzpjRAso83pb4pX5CGYUefKjzdRtCvf6ZQi9N6t4cmwqDbwQZR2zNXcBDJNy6sS1mLG",
  "key24": "E6ZsSmMUC1qqk6UcJ7NCAvmoYJaNuxMMcsas3p3VnbWum38MpUYUViuGvrpoAEKGSMv6JNa4DKMSpwKEz3vyCdH"
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
