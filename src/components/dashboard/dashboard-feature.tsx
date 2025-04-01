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
    "67r8wgTdNJesAv2vocWhpL442nPZzddYDeXCWfP5871Gsh5TRo2csvN3Tw7BYwNXKq4sUirJiZcUowuFnPhs2naB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kNHD1YejrdBJbmfoYyE2YAXRjWSqyh8X3DAHdbRMHLQaCAhBvpktRMh5C9Xq13mzcqKi1YaySRGR1vujZtkkAbB",
  "key1": "4nUPBW3RnqPZf74mexFQQsMc78BaCResPFYoaBfRLV4HTwYsbfUi8LYB7Ph8FCP7QdedyKyHAeYBwEtJoYwK5mK5",
  "key2": "2GkWt9sWTbT2gUjUxbtG6ZFNG7E89uiQqVcr4GNZWnjrihx4Rn6SqHjWZnHamgvjVQUHcsECyp76ygiJfMb5LfBZ",
  "key3": "hb9pvSbNCPXTM8XqwbG62wKf97fN3TABHkHsm6rEMpsFC5VsxDycVbRi81zakVUsztX9xw2nNyREqoPGjPvMb97",
  "key4": "3SwPdPK96xJCC2Rh8xoy9i6Uxmg2MqAUQ3QDkENQiy4yyaCD4Eobqy1EH5UfZUs8Mg7RxZpC7Cp6ETscxsj1uxeU",
  "key5": "2MDttztE9kMGsxcgAaneSommpA1KQxRqJzHoJosLpQ4ZHR5AVuzpP7P2uvudjHNDYcES8FE4TwK9z7JkqvboBaAf",
  "key6": "TJX2ta9W8Td6nqJpLUv2LFA5o3YcmzUz7Fa2amyEoUPeDaup3FABi614fN1E1tpnq5aAK8oQTwjoej6WKPMAVPG",
  "key7": "QdTcFrENF772f8EGeUZMZ4vjVXrXigyVsKXbGfYC3MFQVNHfkjvt6jZeZkkCnPZKhN5ZaD7XurtjR17tSExxZiD",
  "key8": "62ZbeewmPgKmzpS1K4mneLyeqZJyMcipwD7E6EKwDohMAK8wK9ZTFptC6GfxcxeHzSf435KKc3sNQAus3QWcWWyR",
  "key9": "2esHu7VwrXTp7omTbJnLvsZoYD8N5V2BqdQNaJte8RvtJNmNoFg18VfkZLKmN5oYVJxP38fNwaSV4rNynGPy6uJw",
  "key10": "k5W2CPRomea8T9MCdTJCpG8GrvDpWo4xBYpNVspNKoqGNMcp78oun4AzdtfR6fuvE13qubrN8BEQ6WNPRXL7WCM",
  "key11": "5eBHWZErn3GM5rk6XcAoThN3vy14ZFsjYASoiXEBSjrQ41JN9w3zNUmJWkdT7mDfzjkeUufbCidygRjaDR7JL29J",
  "key12": "2ozpkcmzrCvs6es6borfJeonpzT2v8zy9yEkdF2JdkUReCYsFpyVkccfoCmbiV9GwnmwfzF4ikzwVXtFVNcmF5K1",
  "key13": "3kxoHJZUMYLUs4kPKLH9gZf2rpYErXUbdcbQoAA5aWyRqXWKrjpfVWfbZNGsdDjSbK7q4qB6p4di9q3VdUqjCk5m",
  "key14": "3bquxnfn8X78cS3Bv8UYmSHckXy7yiJFeSihTpESxUqdH3CQHpgPrQsHwXwFqeKZfjkVoShwyd5C1U6fhCjjN2cc",
  "key15": "haswBvfLMuuFsYqbLtEuQkFnnyogTFcbhtWhC8U54n1y8qv9B5NmfC1JmDFfRjh8LTDqtuju1zCVQyWcRZNNJFn",
  "key16": "28ntNi3PvostCqfQFXFRezxi5tjTVxDBCix2mG8MoTnsu77E536i7Sfkj7jrbPjzcFUreTgbWYo5mY5iKLLeNGf9",
  "key17": "ZptDpZKBF8bKEhnFdhTCQF2sb8MZFS42832w5nNSTBubpqEXCmd1hcWXWwpMpqFtCFr7NHvAsnypc5FGZDAd4Ld",
  "key18": "2wBm2epKKXPqBkL1JgpXqghCC9FkY1vNWHwZ9BeBEigtGMG1nFTja9rv2CZQNiBtGMX5ZJZjRQgYXQoddVCdnumC",
  "key19": "3eYQHzLJK2PoYushvnTH1QRpop1nkY4B9W64bZF46zQuKwPsJ2ugN32byX7GR4R7oShxeFLdQs6ybPYA2m9n32ci",
  "key20": "3xH1k8y5fdV4HuvoSXsH3ArMJ9DxVR4KbqkLAqMG2bTvHSvogVkyrNfVqMQdSyCMAjdYPPmAQg2JKfsFZmLmM2mU",
  "key21": "2o4R4P778i42w2Ct3WrdLMw2ttaxcEpcW4pEdFBgpaxRxTSMGeBuadnMyhm2vWVcqwtpdJoEsE9VeCMDQCbVag1s",
  "key22": "3z9XxL7RneVVp9TfVAJYuhL7fFLVu8Cetvm3pyypuF349HtLiBuPtCGd42MFdHMxAHQVCE6ukspHuWDW7gq8Y6Lm",
  "key23": "44x3HiL7q9tEQ2KGbve7LSA42Ay7uA48St3J5cTQeYdPqibC7WoCcn6YBwjy2Rfzk8U18fF3qYpFCi3JKJbX9uxf",
  "key24": "45KmBQUKSxwwtgJQCGTbgQE5fDt81h5xX3XMnys8FjnPa7Ju8vkMEk5Q5PYUtZPFYwL74xhpDv27chWgriTS4szv",
  "key25": "B4G93ZH4WPwXbCJZhtQfSGchMvEDsmBfgT8CK3ourGcZACMXLdhjVP85ajfhfCsZtg6PzkkkYAF48233RauMr6b",
  "key26": "2AozJJdQuLZUoNEC6Ls6sLVJvu38bfwz7xZd5WNB6LUW2HKV5RjS2GE6QMNMWjGgeXKCqxYHKnQNLB9emLocKZhe",
  "key27": "RL94ZqTaqMG9GabAXf474f3vkNYGi6FzZ2jbdRdYeED4CHunfopdbo7ZRZKno1eXb52m5hxdqeRUu1NyBv4aLSB",
  "key28": "DRuhzcdzo9TKXhHGAdwxHsDePb8aDMYxQ85sc2oed2hupezVED18BsFiNFgH6HMEHy4KsJSNcLKrup6r4ZRXPRq",
  "key29": "TjLPXkvrYwGot6dcmMeZQYxrbuTXq5vZmAu1DjL8vkXBmefmEcXPELbuLSBypszfoAzDfsot5zUrWoFUutHbvXR",
  "key30": "5uDy1zZymahKQoVn2ed3Bg7TBKLon8sdU2TmUq6wMNsrY5jr66YnRrouWLKXq8cAGB1ytUvQ4kyRCkDm7cXWjjTv",
  "key31": "CK51n5hcFzcqH3xBWVFs8kED6LANoZM3VP5he7evPYTbzoyqK5ZMr6KRPWZ9v2otWv741CaUp7q2L2y2JqUpv3P",
  "key32": "2JUP6wLvrNp1GHPGtG5zAV9W7D6t4EnYnHAwK4yQFdy3YdYRc3eunSzGwpGQx5VmxqWbJZj97oDR7UdNtKko2j7M"
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
