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
    "63z7fhJLTnvuwxAYVJMiVSzZNxhnwbk6fGyNWwKc4Amr1EVeWEExFY6LsVXrwP2Yaq5MZbex5y7jq8rhehFkpeob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y98iMWuwddSJy5dr8rKR7ciYQZvK1f2mHguwuZQYAPEnDMBB18jCcLEpT69FjTJBVAerjcvYuMp7YGvPgVarKxy",
  "key1": "5wdGDhdP6NwgTEmASD5DMBMHWQmWP74hQSNf4cjM6RdPDmyZLX7Wb9DipQPGL18voAgVkuSCP2WKtFNqDtudguTo",
  "key2": "3jMtDExEPJa5cvcPHqeJutQfRFu1zXMqUgu24eSyFuzm46fmABetLE1AztKLnnQf3s7EUbt3YEus6S8cX4Em95w4",
  "key3": "3fyQ6iE6GcUXnXXHGK3hHtz15A2jvXrNEhsHRvSufhrKFRyPupR53pJo48vDkw247Kf8KykYoq2c8Zr8MLzXLskE",
  "key4": "4qJqEymWH2HLgENoYhGYGpRr4hxjwXfc4xjzxqTTRsUt4Mjvkh6RzF8wHCDoN2A2iGzDeD8wRZNomTQpa17TkTMC",
  "key5": "vEiFUz8Gnz8hUM2JTgDXA1dceNHfmYyBwmKnUYaouzB51RzvKFUMo6gD25LwxtNVDXWcc48ESowybrZe9vU2881",
  "key6": "3SSvhw1kK3Q34GWXzTjQKywZBochm9MWrEzFuYrkodJTKZg2M92Grht5oJ4fUNt54C4ynMuQZPigh9BCFHGQCPjU",
  "key7": "42vB1BuFqYiHuaXgnMfnZ7tGEzRAqCnt6wLUgt6rCN95wWSotyH5jTHRBzeYyXGGxnpxiraMKg6FFkiffJr76Pth",
  "key8": "2xHrYHVehykbkiBCSVeg7LRLr8kZA7EWsQdVKc1U7UGB2iWQCsYbiq9tu6LJiJR2RyKFkM2jpo4JG8PVPQVJRit5",
  "key9": "2MQC4auAiLPZK5B5gkTYQdgVGiztdnYPzfWDfAAJqzvNW5W7FUZDNFhPJPmmhYFoUDq4Y4okGXqo3RVLTqbiZCE3",
  "key10": "2zszQTqYCjUDjCkjmZTTm3s7KQ9yLBYCaGfDUbQeTj4RWcg2PcacSx546AXEvD6NhAHYm39sBbSTjzCpiw9x3fBC",
  "key11": "43a8bmTAxgLSHAsbhm2VhDVgsZAE3Du1hKCLoEBJ7zTGKkFgUqWdYapnVfKMT7ux7RBmVswoF7KL5UeDaQvnNoqX",
  "key12": "5eLardZuNt58g8DR6yPvmKiqCbRmZT9RyGzxBMvZYBfYP4VXgZs857jxdWdPSKeJg5QofugS7fm5ymspACUmoXSz",
  "key13": "kM6ZgZdqWUPQVUQwd3Dc72Vg2o5VCyVUhL2K9cBCqPXxQToj712g3Ebb4azmT2UPzY3v6tYfejBXrw9RbH1fsvg",
  "key14": "4oMhwBm8DSvxnoaXExgt8c7Vw1qcbGaWv4uUCkBH4GnmcWTMfaDmaWesayMT5P4BH32tGJY7v7oJt7HbBT5S1Dcf",
  "key15": "3WvnZvGjE6BwE3D2Q4hU4KNsPmU8CbHisUfXDv65NxmiDSb5Vw3ucDdqzVWGKmzkvtnqkKcYY1T1H3S2G7Bx96uR",
  "key16": "3ik5udrwB3hD4qyvmB4fjH1K7EUXwum79XPRjmR5SEuTjPA9SvCpx8g7tFZgceW9xBfMajJbxYE8ES2C3uktABRH",
  "key17": "G3n3M1h47bkrFsFQNUQoDzh3qkpir91tkMNhZLVeNky4SQmfeovAnJ5qoML1yMSFxmrmuXwy5kC1uN5cmsZcB7w",
  "key18": "5TNRSNTNrNXRNp8NQ6XguUiHGh9ngR71jJnCpQ2ttdLHgNvq6FQYFyKRobjSeTQoEEUh1uq3F5z661p6j7Pv9Ya7",
  "key19": "2GQdbxsGebUWVnZGXYh1Gry3q5iqZvDuXB4mAexw8VXX6obRcidDq5ho5KjXbD6xruCZfsXATARwj5DGYb6rorzh",
  "key20": "2QEjXxkASJtCVqVHarnytUkVvPUp6YYtXb4BgVHJSYMbDmt82zLtfiNLqFuhzXE7a2xwMMBvLEqscQxDkf1mBWxD",
  "key21": "L6Wg6XDyyzc3ta3vDs6EzD4tUCMATfXi6adWfNdSGeAD5xAh7QsuQZ1vfYA4JyXtykT5JTUu36GdnLXvsmhaVxD",
  "key22": "4Q1hpxoLmT7oN3CUu7xKNjzafPZbxbrKD2c3WPB9LGN26HaBD3gMT5NzBYh1TTueNW8XBSb5HYJUbor3Tnkf1md9",
  "key23": "5rJTYSeC2E6WcnE47P3gKgEh4PJhrPEyYzuqB4vLTs3GmEtnG1VWa2z7Q3Dej9uy9MuuTrpibofQCA7a3xUJ5TxU",
  "key24": "36KQCKzG7KoTBV6LRn8jN4Q4JyV6gGU4kC19KWBR5FomiuYs4eEhBLgvSimjNTYxPFHnAG5jGbaE2XcqwqrWM9ZL",
  "key25": "5dzLiHn71jX1NLk2PbXWbkcjLbgC1nS6wk7mQeESm281ewvFa4GwyosW6sbR7njbj11NZLVKcD3sqzCdbkMAvzCr"
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
