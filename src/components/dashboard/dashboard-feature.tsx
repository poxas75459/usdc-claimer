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
    "5WdvGgrSzAA3d4EFYuDNttWJ2cBwwt1HnJTpSCfxdhGKKBTriPw3tBSAKoeFZ7fEvAJBGrunjX9roAXUErGXyZYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dWgH81qFxuYS3EcVU6gT8HXH1CzKwVEGADS2DkWftvLyAFUfHqvTS6mJa46ZefCadxvdFnuRZixgo4XYh1he6xC",
  "key1": "24b3YehrQbyhEijcAhnPT6skF9JEK8HoFbHGUQG9wvmGQudnEHzJBTQ8xsKN3Z17yfpK9ggD8gX5NKzwgh6Qssfj",
  "key2": "65eZjAdJMpJaX6eCWn2DVsE9hKPVvzZs2ztgc4MbNE9Yz8BEQPGfa59xS2zWeqyBUzuiq6MPETvY2CZqv15zwN49",
  "key3": "2dv2AxAGDNHxBQKeoY9qYZnYVWXSUrqLCr7jGUttWBNcFKYKtEy95BxVH1Qm3gobBdBg9RpBf8FeajqEY99VgjeC",
  "key4": "iMaPaEmk6WcGdaQvf9SVgzN27Ar9keJFz5T13edZBuZJxJJPfMpwLHoHfF3N9TBVNeFrSFbTvsgsn8Ttd7BNQbD",
  "key5": "3g8wuXLAN6UVYBqPRNu8NjSdNftV9xbCuTScfhz4jhVHhT6vwy8AELsi36KS72FqnHCi71Gpcg7HZf2buN6GgiL8",
  "key6": "2H1XzdRqnruhB2ZkfqWh8LDJQqwHmvMj7ToxVzfuStMQiu7en21EXpiBAPZZc55pDKHnk1Jv8dsnMV7sszBN6qDp",
  "key7": "3vHwfx9z2x8TBt7MF4UqKrx8ADaxQ46CPjARQoRz83aUBmxKsYw3JFqhgbzwtdbLXPYteriG5uSZbrN2g2ZoMybV",
  "key8": "4gpz6wL34ox6iDbzNDjc1ekxMyRfHzJeTxZHeVyXkWFTUvpfFse6Z1zAxCUr7ZtLzvaJBcZC9t8HMxxdPQ6Svakk",
  "key9": "25nEf3Fb7UyVTSTxyzuBUJ4KfgrWJME2whjH2idyam4FRje3AMEvHoTNKDr6Po5zV791if9GxrYRYmgv9tzPcCC4",
  "key10": "eBwDJTUrDL1eSR57bwZVH9N8CeX5XbyoYYJkoqNCJ6t86uVA4sAJMakDJpMs7AGa8YrT74BjCCR4vgFq1BcRpt2",
  "key11": "3VacqqJNKuHNpimk2FGZnEAacMk8Gvam9CiHamYuLDQgaxJmsHZ2ERozFdgXfurrpWnT4hfLdVd3NfDy3f6RRFkf",
  "key12": "4KLdW2Jay5BXE6sMMw4SpEH4f4HY1MGRL7ygXJ3Q8YH73QF7ah6taJvuHDRZDxAaVXSkeqPp9FMUMpwKxxU111E8",
  "key13": "2xn1E7xjPZeAzPe8W9kqFaRGpeEgo5ASEAXJ9EUmiZVNj9w9P5HLU5dG2fBhwxjNwvm15K2EYV8WkiKxWXwFYHUJ",
  "key14": "5XkdARBdcza68Xd7dux4xW5FC8GWTza9FFxeHcQFsSneYjJZ4toF8QJsL1M9255b5uSWrXcjYjUjDtBWAzfsJGNQ",
  "key15": "3xLCXURttQeKwPpANZc6SYvw7KcZSZP62uysUR83w2kYv42KR63kokqTytjxjkVJgtKCR2NDTm8RA1nCqVVbTZtu",
  "key16": "Nh973RpKeaCV2hSvt1Lus55WvciHWjyZMNH2RxhZRNvvHHyoVVpva3fugeGDZfBz19YtVy6E7gytJAbCFbdUwRD",
  "key17": "CrLufmsMkXsn6G6p5RurFRBovr6ovFkoKEhYGAc8o323WvXkiUJqZQyZL3CpbA4iNGgqUeeBa9EDhZrZeJY2kry",
  "key18": "425HYAi78cQZmyrTaAdJQXMX5gD8uapkP6ex77P2TFG2FnuJb5y9oQLqLCRACU9pD7AitzY2LCVPHH78TJzr6GU3",
  "key19": "Yos2tZz69PVM8QEBrgjPbSrtwAdPVtG9vhJdvwGJryjjG1samK9VATgGg8F55pqNq8Roih4VivDHroRiLGfm1vF",
  "key20": "5LKEZKQan2WaviHhktVA8D52f2W7Ge68G1brPax3Y38LjoPdk2ApLfbhFBLgL558dVYXSCAF41cAVif5UP8ec8EX",
  "key21": "3V54E85rzKmqcnsezbRYKuEKiSQgANnarqMmhrABpxBwZFy7aPsvCEsKvvCwFQdhP84rt9n8KgKdtp2ZouvWhXU9",
  "key22": "55PegzGr7LsUzWRkobbAintdDgWg8U6SV38puZNRkmGpdrwcsv4cZ6Qow5ms5DQoKRbTMGX8JgMeCxeQhtsoUFaq",
  "key23": "5tXZ5StJtbuaoXHfAtaWMNzXSAiiq2vR6PTmysh9vJneop8KSSMogSzG9aJAZCKDR5Fqd2qZH2qqxvExzF5fFASX",
  "key24": "4aqwgTGN8sUTwTDQoK3Eyi4quC9MjVwciLfofjK5qEPzTLPp4Kg3GgL2qVoTZ2hhJ9LdCAyW6nfkCfXbyA4c513h",
  "key25": "4M9rMz8S76i1XxiSKoCGQg1T7MARQZ2b5Gs79GJucNAPogSSKQJUG8VFYZ5MXiUoEL8vsurZDgSpZfXjrDiqCx5z",
  "key26": "55TuSNnoF4LDzjmKyBcZQNXvKJrdAf9ZhLGeHpVXPFcY91G5hN9K1ppE1CpFeqnewxHL7Yox5rwGVT8mVkBG152f",
  "key27": "2VD3nTJ7w1yYxRp6RTQKyJUSf6iJ4uFWgWVpttxP1YoYsSrmbzEdmaBwfpLjj8LVexWTkkcYboZWk8JBC1uAaCor",
  "key28": "3RxSqKZqr73EyKW172HfA7byhnxSEfA2g7xtd8P9kVDD5FuWNFHoRtLQw2tgdGCMDyKGnBHKxC1gPW4CXNsnZJ78",
  "key29": "5vZyXSiAH9rNtp9pu88hAFyc48C38jiDhPJuLXPSpUphVvNqdYUcZpZWj6rndzXE66s9CpsfGGPB9Y4ABKnkXEdu",
  "key30": "jEHppN7PPhtdYiRH8bW8VH4vyjG1F6Xe5qTyVrfdhTiWQ2exzhTGX3ZpS8B9buaa6JeJ4VAhZKyMAvkbDKtEah3",
  "key31": "7XTVkGZ4VDKYP3RsXmJPCpBne5UPiy5TV2fKx3qzk4R8C885snwpVHrwtbsMGxexxMDjb4YCy6CqQeB6REwxc4w",
  "key32": "55XzYAvCsVR2fHF8bkxnfRY9oahsXzUvgj34vqtrXhnghFhR1k2vDPRL6BCToEYY2fVzS8wuPF5wo1GyHvmr1QwK",
  "key33": "3zWEUuPoq83Qhv7V24bWurfLv9UK9kSKD1ekL9YkzLFK42fd99LKNNzFYdDWu34inPqpsSXBgmPua76yc1LB5UT7"
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
