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
    "ZBWEkTmPCfTWtF1esTjzQfdZpgPzYKg2xcG8bebUXdATY9XtTZHpgjVTYTmTRWDZLWQEhs6obBhDvBERJMr7hcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9ypogzWjakGgN8B8YaZReRiVn5EagQEnCRkY1m1jF81TotwEAiCYSMpxonmC7xJKx7qunebKDwYhJrmw55DUd7",
  "key1": "4AcyiswaaFYXz8qXzuag4FKsJLQTXsDak7kcwF47fbP8wvGnQmrdCudv6449sLkjvb2uiUBe4pQuYFrvRczQvQBp",
  "key2": "3NqS6gBta7eFSAPEyjiHyZtt6cLsZEhTm1wqpcfZtBfWzokP46ztgTfxURHwBjjEgPhBWrRFnhtwkLH34S3DFgBf",
  "key3": "3MHXHDC1cMPAoRiPEuFWgfKfZKMjgFhPSxNN3K9sCK3kuZiG6fMmbfG6GzQDkQy3eeZHDB4kr3dmLSDGUFVvn2T8",
  "key4": "p8JfNjAVAK3mtpM6XbeZAbvTeLdnB5G79qHL5NgD2hdquUTDn5XatfA6KYdTU8gMrocv3EbjwPrAtoqBRwGhtnC",
  "key5": "3bewcWFqCxR5bqU7qNMSp2uxR9DKa8QCREaoDhz1vdF8fsywXwFzDJUBSfeXMZxF3Do1GURWZBBjUhDN5BqH9pva",
  "key6": "2ukQXWeyr9KkCvt1MoPr5v8rNNwRUQhbzv2d9tRm7MYMuDrkq228AsHJA6SjmkHmMhVvA837AuVysgRetnR4aTeu",
  "key7": "rBs9NS2MyeyGuFMdDbsdGduayU2E5ufauZDJcCAm6hyB1qscgx4tuvQMxAVDoL1pb9ctfDiw3FDzevrF4Ce6ZS1",
  "key8": "5nX2bm6bdbrNvqAWj4rgdTdiMQFAgdH18aiUUee2NfW4d6gqHh1hoBdpebc4GJJFScewUNPmuh5nBa9z9QwWvpne",
  "key9": "4Bby8poTjYcB5wX7oM51a9ocNuLKMfF4QGhTFCA4bs5DLBcFiK1FEGKzFnnasbSf7TVzjMkw5RbaqLDYkhw27FGj",
  "key10": "MeyzaH8KamriVRTuQC2584JTWRPxzYFacsuFNrPSYtj1ycLygWc2WooRMJGYG8zDFTBvezWmkteD1weSYmsBytK",
  "key11": "4YXHgTyFbuMBN1tZe2b2ZWBjUrnGfDfdaYKswYDzkttaax4NhaGDnQypYgcsMQmfCmqXE37CKUFr13HTgoXJxGLb",
  "key12": "44MTthep8QiCn8MjvcsqwLbXTTTY513GFNnGKv8i31XpKmVEU3hBzv8qUVwMQFhr32oBtS6bM8iEVrUZeCVzn1Ze",
  "key13": "2btyy7DUjg94aeQ6KXm7sRbVXZjWUmG31ayR6Biqk6e3Zewyvk8qtaxaedYXyBhVrFhPKgsUxBAKbCTTaNFJhH6L",
  "key14": "KM5jhp26hDas1ZFwdaXCYHSLztvGSWEF3fk38j5aepqQHTmJnQLkLynHfgZu4ZgTEXvQsqa3KEYmq9wjTooraFz",
  "key15": "35YDqqgVcqc9ugPafkbTZhu9zgrGquvUBAB5i51UyizUMVHAQxtP73NMx8KwRvMwEPwvqQ2tcV2pihfr3y4FbGSh",
  "key16": "2dP2M9Mj2Ja7W55LrY8g9jqVpiLDUcTiJeooHLoFba8NigJc9mMfjZTE1ionrLnvRB7iRRAUy8Q7NHGaSpM6eEom",
  "key17": "5ju4EQD3TFJG8ZxdWJTrmpb4xr36846GxLhYm322DxgMX28L4VhFqG4aVZMh6FKjbAt87VLdyarZyKfeRbD3CaYW",
  "key18": "43DusdLFfhLYRaBQpjzqTwnTBXo87BBsdRzeziuhqDDc4WtWMbhrUVS7LfKwcL9Bh56rniY3XrfRrJSPJzU2xHBU",
  "key19": "4fLoL9rie5kbLJJvevHcBb2Hg5om7XtTmmNsbp12shKyPA4Ybib9sBR5WJZ7N2s5XQ4eg7RMXJoevUs37MHhMREG",
  "key20": "5T8BQX4wgW4ttGgypg9TCTLAHpbqmw1R1ybKdhFiAG27zViY2kG2JsufdfcdsvnKceFYYuZvExpvJMLcf7s1C7qV",
  "key21": "VzKVWoveQBGjDYAsoD91cqMaAyjPDrFosMqm9FMwDVCCH2zX8wkhBkxNkz98tA4Hx8GhpDEh9Ja4y34MctsKyTf",
  "key22": "2Y7zNDFALGCmPcJgjEo2D1efKwni58gx85tfBihRyWa9TgNgU5vEXwGQiuTpbhpA3wTjZLW8QFBFSH6DsuBSYHMX",
  "key23": "3H5DkpaCmg3oXwL81HZ8aw2rDnC9Yya5Yr3emyk8uw1yaELp7THd1NzXWSeiLoUMu2Lts6NtZfDbGjeFrXDmnCui",
  "key24": "3qsygUX9QPVVpQb64RTAffEG7FUfGWf3yEFNbeugNHQtP6P3L82RJ5eotjv2QvbEcY7TZDVY4SLSJhQPTJvdwZTQ",
  "key25": "3XF4G5X1Mm46QNMwWPMarnNFtWU4mFAK6cw7E7ygPR3kuWJobKvSEQjw1EzhEwnqhZhBqJm3VVhhsqkPCc6h8bce",
  "key26": "5icoDWnuUyJcF6bCws1ygJ6UN1bowjPzGQ1rSKgTNK6WjAKbbxqMMpVeTXysZJ1KRZMmvD4HsbykejxgBuwya5sf",
  "key27": "5Q7WYppooyUgWcC7uYC4E9BKKAb78aTyyfXjEHVHHfKqN72fiEVpEP9SnQz6Sty8jZZNHsXFD8qV4caC2YMbADFJ",
  "key28": "3Ba8ndTF7CeJmC5mH8bdFvwtkWHABnGeki8H862nMDkY4gveYE6MhveuE8gSYEH2zYfpP6yESdWRK7tfrEiPRNJG",
  "key29": "2YnSeK9VjUu5ER6YoriLja51ayjvyC3yydGASVucueLvARcHrJLZY6U6PVQpCQennxqDEE1eRNBUDqH5jqRUnEov",
  "key30": "2fUnDEMk1KXGbHLbStFnVfLf6yrhFt74s3z3GMsRVGtpbs42nTyrqSNsXFmuQ3a1Cj7q121p8aTAw3XBobwE6X4s",
  "key31": "653ZnGKRsL2yrWQ7BGGytk9pZvuzysjv3MUmXkMxN22CotwAESYb7cWLbLkHdg5x4JLSE3RNP74yLXiYvoxryCik",
  "key32": "579f85r9b4GsAcHP8kwdRhjfY1HGQoZXwLQ3A9XoYS2ikotKfvoaRTsF3YP1SNHyGC4h3MCEK6mikt1bL8Gf1nfa",
  "key33": "47CLsfXg1ToGuzhBBxex6YpK1EuDmfNn85qUKxogEoxHe8WqtzE7N4z6TsDePZQ8xRpdoJCpAwxm7b7t8oz7Nig1",
  "key34": "5hkdLyUeoGtK93hySFWFr7o4vwdBxa8tivFGLY4yJEbtrBobDLFgRMbpmKvcnbN1CCppJqcwS3d82ekw5Vffj4Nj",
  "key35": "4adFTMGtu66qfjnYUH3rVXmA9BMB9QXqq8kqW55AGwxzZiMNQvacLkW1cyQs1MdcJBnLBK3fUCLH5rJCeaUr9jWD"
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
