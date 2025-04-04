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
    "5cUxrLKBjPLwAJH9CA6QydJd1cJNkDAg6N9QcUX5B7bDeXXAaMjszh1T8Ee6HUiSQGQkjLxxpusKCmwwsSbjewE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVL7aUyfZMBem64NQscPUGkUfwYYF3NW5BYjPiRbweSMxG6vQQMhxRxCv1jjgbHLA7Xg51tT2Zu93tqi39WwFc8",
  "key1": "5ERj911jipV8uBBZoEmbQbmbLH7XNzD7fMDJ3A1eT61D1YumDuQH3D96LJaBjCsYpV77HbCFJCqPHddYbTqT4wkK",
  "key2": "5FHfiEZUCubNfy4tKXHcwC2T7PzL5JhS56ofxNQiBCXeTosFFeUXpXaD3xKofruXrCKZg7FxcXETeL6vFWTsEKoK",
  "key3": "5dsk8PEQYXnCSrseaAQonjwofq8FtVTVxLPCtRaJv3hdFmXC6J8UYjYVEKgSmrxufNa5LGk4FVTtUh9coHdVxm4D",
  "key4": "4usJQjWFRyHwtdaT19meFbWTAPm9j3YtWwCyn6VXtY4e5jpVGna5RznVjNcgQwiGUPbz7ts2rJK9gM48eZtJNVXa",
  "key5": "3QndhLY2E4t3oxtixoa1PBnWNSwRx6jBFUocE8oWVKYZTZZzBTrN7ZHs5fPBBsyqFy8XJLXfmYNGhHfboRjxPc88",
  "key6": "67JRbazjtTgqHNq3FKfVevPu3Ja3NRuQZ5NaZjqpMyVg6Np7hhDfnqTLig8XNSs6AtfUpufpdapAfYWokQWNokWw",
  "key7": "33CAiRSDyXzbp7Wvc1xPt9Dzvpq9zVT7mTJcDtUVSdg1dVLRRZWcyNZR32P41bcgsQq2chSJQbwaTzzQkcD8q469",
  "key8": "2uEUxypNQWcM4KRuZHVoqDdRTTFYjCbqvYGMZRnEJ77gNU8c1HKfKfZGYtX5ne2xSNzHbDuF29gpyFXKe94wWgHH",
  "key9": "4C76KDeMswi2JQVtm5hKMZWCzDinTsLgDom5L3TYMDiDZuBof1B2DjQW9t9RSNXcUG1AZ24AkTT8zRpFCTYoQdFH",
  "key10": "4LNVt4g5xf48hMMkyErEHS2UwWid3Txc8iS1TgchHzFyJBCi16Mw68G6vngzo6gfgRcmxYrTe2b9gHDnr3d4icGd",
  "key11": "61yz3mjJdLmwxRzd9EVfE8kNXMAYewmvtAdZngkvDSJkKBdc6HPnjkHLmzJ91JCFfTT7YAVQVyY5c11mKctxYozT",
  "key12": "5vV9PM2H8H14GM11o8V8XLKYkLBZoZ6gRS88SDETDQYEgNU8gaz6VTNSP2R2r9F9bp2u9SA8tZH1oRyc6f1qLDTQ",
  "key13": "2bCX3SApU2iEviByMtJJiVtQYaThpbKnHS1PDrxFaiKDe9KWrLnr4bKjqmLgFXBLUXM2TfXmGK5SPiiPAC8orrCp",
  "key14": "4mRmiYmkad3GAJT6qFiyAUaqqsAAVtT2AyW7zRZLpot9Hu1SDsJAs3HEp9vPBC2Sg6Qn876xY9JcifbKpdNnJn2K",
  "key15": "KtL1dPjR3HShdLhLSfhGoYaraWUP3KBqDShKREgKvu3xCpuS14PfpQcixD1m7iq3ny3kLCjRARNs1chXAgY6oZc",
  "key16": "4rdGHJk4KPHdcA7UJnF2qPqLtU3VaZBmh5bBbN6sqzEN8HMkHAFdVkggEDyGCgNRNY8c9secsFqK43zJ96hmnbpU",
  "key17": "2zSLF3f9pn8ZYBrvFyuMqpvuaeeFr4mL9vCy6qC4pwrMgLsZXnAo4HT8DdaUnLd6XRTKqbt6Ec7TsCMpzuEZSRVd",
  "key18": "3uiaBoePYcAG7LRGWSUwwnkoaLiHhs7tq55n5PpDTE2DTiWJW9EWpJ6A1XT9xs7iMwFwVV9qdMBJSuNggd8M9MkK",
  "key19": "42YZ8k4RWSpkuvxNubJKhEoPG8BhLj39za4aP5WTDRwwRQfhtgg9LKti7iHgHMJQSNimHJFPQkHRfUrpPAAThgrF",
  "key20": "2dhaoe32q2C7ySGm5zndTN7U11uX5u7wKdZt7m8utdU6j6RjqS9XBCdh4PnWao7Nco8Mtn2M2o8KWrrZtw8FPr2c",
  "key21": "2qUE3xP4QeZmedkzzEyxtEqCWAMy8M6oYu9FFA5LRnXEJQYb9RxgkCSUcFZQfRcvKzaT2cZ6N5hiuAPNZRtLV5Gr",
  "key22": "3djT1kHtshi9F5wBvgG77tECmYwAg3aEAf41Scyr1pjpv2KKoJSpHmuuLV3nNM2VdVapVFq1YuXkijy8DbpXBcpU",
  "key23": "5rPyX2L3cUy9RAbsCrX54v3Z49knhKMrkW3yae13WYMhQfsRAhAUbyGLhThwV4MvuYJ1eoRFbun8BcxyBxY3UoFz",
  "key24": "giMuq7EB7cbuxxNch1U9bEdgUwFydEQ8uzPACRpgTjzQZtutvQSfgFYH5TzP2VcE1QiG1815HzVNgc79mJ4xC4x",
  "key25": "5FdXTA63wnz7qC3fMRHzdCBbyS5Vtbj9wWe1AJBtCKG2UBc54krcktoKk3wo2NC9hKJVNnGXWGjVgotyXxW6boRV",
  "key26": "2892DzE3Ytsnee1C2wYShU8qJXZdsynejmNKFEW6PUjj35LLojiE1baXFWgNGqMqdysMy3b8X8pejXExTWwCqfqf"
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
