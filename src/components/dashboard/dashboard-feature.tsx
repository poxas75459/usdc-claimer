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
    "4258wW6xk2ti12G5Hzmztq4GEvm17sDnjBtDbjBAJY6CrFg2WKsYR47rhWUA1kTGpa5wwtQondqJ7m6UjWthSQyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCqgvSGhsgBW9fGXXV42d4PiiTh7jKXWZYTzX3svSW2YMbLnfjQ59qDmTHMoJixVA8H9Ysk5PrBbr1fYFhqByxb",
  "key1": "4yb7rman5qGqLYCAiGgGAyhenGbLcGzehXduMNtJw28o1hHpMLFX55YQEf33iU3Fv6Ak3mwH6f66Z3b2zKZmFUhZ",
  "key2": "F79r81Ptv5sHW3p8PYNyyYZ937dBWB4iAHv4QQjDiyyx8g7cuz7CfJnvAzGQ8vYR8mmSfi66zKMCdKMpdjzsRtj",
  "key3": "5pJHwJmPgcnoMf33ixooiB3HPPordXkrVLcR3HrZfsDMtEQQkhJqffs5Q4ZHjtGUpXCwsedGPwSMp5yQEvkwStf2",
  "key4": "5NmD8mLYNQHpqUaDi3rSrGXqsadhjFCviKdY85h22cYS8GeJqJxrn9E7eW1MU7G6tNvai7gfgcUBKUG7JGNXw962",
  "key5": "45yBPhwaMC1KZsLsT7gCXj4AXmymTPzn6FNEckAbj4e1vZAVJfZVj5VKehY8znPnQtvBMcMw6XkUf1rjKRJKNrmY",
  "key6": "311gyh6udZXmqTcHEPvDiFazzoY32WW6uh2ys4C72tyJJspqHtSmbNBrb79azy5iNDDGGGeyzfeBEj9mhyy89Yhc",
  "key7": "36JXcGk5nbX3zixpCHeTnYW1wCsN2PeCvfvT7Si5yqatGtfeEu7QxgUHiNGD9D46sjA72GW6yaRf5jvmAMEUeSCk",
  "key8": "5m61vtbcjm54oiMC7UbUYQ9H7MQVhdcb9xny5KBfbRauarLRx9bwd8ZZ8GtrUBJsiGHyH2qUM6ENL5qaNjs4XaPD",
  "key9": "56PLNA1TALKvBb2awtnrLRYNZY2EaPtfBx15bWHKjQQj85QPAuc18iy63jAvg86GpD9L9QMN86RdAfYxbGHiWVnV",
  "key10": "3eSDwBKGhSTBiKaxvHLAuxoXMm6eXLmWkVsqSmttzwUBdWL3qPnAKwyVtVn6ckyDgTjYgXQJd8xHTXLaXk7NkMSP",
  "key11": "sWnBMWhnCf1ebqjh1mJo2jruHyLJYtAtpQ2PmMhvSfYj3SZ58Q1VVtC4WqVKFUwSFWh3iJzv3aKhbt43i2AbVgE",
  "key12": "3Q5onxzVUfGuNWoBLDtE5AHZoQBfotRjxTptgsM19gNUVZ74hozpe39jLc4CAhuQ5eMEiituKcHG2Kp4tpwRUAbH",
  "key13": "2xTfhnq3DFQziZfbnvgG37ntc4PcjsbLhpg7AQQ5FwXusYx7x3y48eb4K6DY4YAb7YpCvUZfEoiBcDf7cJS28hoK",
  "key14": "3WpxFbPemeq2ibsxTuh2Gb7hGcwaCDyS6BxENeCJZJP7LWRAwm1wHhNrcFPBs3zUyS9ck83n3EQdxwWLytN2pLty",
  "key15": "4k3t183HNr3AKe9sCNAg9V8vbr9yQkrWaw9V2vmm2gDc8rPdZ2mxWJ3wzxR3WEtv42RmTocvVrYqfs55rnpJmgz",
  "key16": "2fJFx3yLYHC5YPhFqC1gXemUX9LLhj15jdRfyVk7N31nHHxX6dfERKAh9C2Q9YaeVQ9zuPHmHA9Ch72g7Kg2zKEm",
  "key17": "5BX5da8srN65rHK1hTc72TT1RAha4fw93iNaMRTQbgECBhgrGX4JQ9ejEXHnEKvEEsmpVVtjXVXCnGTa6ktgQQpW",
  "key18": "4RLf1K45ppDkXPaRVJgpeEFzMKRnop7i54cpEjuzTwELe5fb17XfzDhzm9cnKV2hV9u6xS3nDjbCu7kh9PaGMhJ5",
  "key19": "58hGn8bmeB5cKD11MeJQFsj8xKUrNbQuHfoqNt9A57pRFdqWXuhiCGgEy3XCxLNzwUF1RQjXAL67sQ7ka7jaBHzV",
  "key20": "5m4QWTh7Nha65S5hni94cGJf8jFF46AFrBjwv9fd2zehYidZf8XTsUJg8E7DgqmjSpbCXtSH6Zhe1swhMctefx9Y",
  "key21": "3svsxzUQoFi5EoGvJ8Vf8SfzjoN9qzVd9P93umCJ9RR4kU7kQqXrL5wFLexMi9dpxJDsf8QoN22v3GFbpazdsopN",
  "key22": "5MP7kCB15WQkb1D7Tp1j9io9S9NS8nUUoBFuEbih2EJrAV2jpdvvNBFxvXccLCqEAKfo2dt4TTTBTAdZueLdqF3r",
  "key23": "2dr68NZuBFgFpVToJjWPxZKXN1DB6tY9uPtTjyYbeatu2fvzjZFfjZkBjVmUW8H2oN198GQ287PN8CRyXCRemLsC",
  "key24": "4eqqtLxn6u4chQYFQDF3Uop2ej1mm4Vdi2nHvYtNPHJNbWhxoRRf1KkkHgsEikpXxSbr5e8d2tYC1TfGhrvBvCsF",
  "key25": "3rYRRfW3CTuvwEN1VUwow2eteZNt8mhdRv3CwhRfSBt3EsJBhkdWQMc86mmjwNGkvnyXhmTcQ88Ghs5NZPHVFkDa",
  "key26": "3Pphy9rBH6j7YBKGaUVNwmfydbdEwAK4ReeQVWe1ahtTKxTqrkL3BancWHem6pGrtdU7DjLfga7GJDnwEJ754knK",
  "key27": "5FFxh2PFHXQwxcCZA6hT4zVbjKtsPuPaJgLqzajDWhwcYGRd4Cp7sKUvJcqnFSR59DnSzTc6caiKWQszV37biYXz",
  "key28": "3DUJsAheUXVJsJbgpmgJ3HNMcfqTjKRx3TehRGjAyouJkBdfLtY3M8xSAKs2pad3qkVzg1JdzgtebdeSEmJ75Lx",
  "key29": "3GfpynbJdb6VaKAFr7FwGUdDfYjUp2fFusGaxe1QJRgrJ6uYYtBsQ62RcBXjfzmWNAPsbj9hkJJ7B56hi13d8t72",
  "key30": "tHdH1nv4jqdHnRLphnFAxxVLjoEG33uvEUQGeKxGeDXUbfMjMPRH6H1ZDhTxmdD7F2Mgak7SHBWqLnDZHwqYemS",
  "key31": "4ngTVyo9k5ihHKJZfcPYx36ktGGsjjbv8y7u8qFbBvnVqgr1Eb5Y3PdrsNyn1fsmjFoDRGGacwhB3Spq2snu9Xtb",
  "key32": "2sCJZrMc1yLVy5eqjr8ZtTssiz5ALTFmE4eu8ymFLfKnf3FQnG4uB7aqWaJ6Tgs4yDKSPT1z5kdz3qFeYLK3Ep4m",
  "key33": "4sKRicHk6AQriDGH49NGS9W7c5iZCNxv5FWKpY1s8FLbAY1cuvf1hc6orv4WRpAgaJ9dEhRMhxeuTDDUSWKgTmDN"
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
