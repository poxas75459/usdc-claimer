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
    "4Y8wrrbvrCQLR9RNmTNwXa199TeuZdU7z1Bau9TRs8C76svxp9d3NcCSYLyJ4JFgzLwGjDyEHFWK9vJVZ9YaqPzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tFmSuRqxSbNYBmoU8FdAcZPKj5t9pbcbFbhbdxg242sLK9G2EotaM5B3GWS5pND9AZfZPEsRZT6nxTGjfcA6YK",
  "key1": "4kbZoXsugaS6jKNAnpWSbeBSDLheBmMNHmBUopjVREmScWX3ixepfmmB6gUKb1qAz2b9B16ZbPrznStgRjitNLZ3",
  "key2": "5kwcaCZqjH17LddYAM1FKja2x6Tyt7YqcqUHXULT5Tg8UyuNaoS7A6BXCxZtGg1AWgtK1cynTKbwZybmMi2tZquq",
  "key3": "51QGykoUNxyD1W3F3QNGoXbDkNRwUoT1NraYeqmEcHR12Pn6iGtZTZUSwL5cMuyo9ziVpGjgjcxDzAa77UT9yrNb",
  "key4": "qdbGcvsSMURhbkY81R16767UQQdr55mQV1THzqqcb1Yb1voeSE4zRue4WjfuYDmm1saHf7PgkHNQbSbm59AeC47",
  "key5": "4vptowtJ98GSbqHtmwza1mXDZke9ZzG2qdsShm9dJ3QVCHqfZxttPKo7QsTMU34nuwsYRs2DmFQg25X8XwwgqHY4",
  "key6": "5Qw99a5Y5P8Mgo5AEtZk99Mtj1CZuTdfybdG1AJRABEMNkMwNH63z7nhpp8ePavsoJW5jXSfEpKmLXW3KKWWD66K",
  "key7": "2KgqUQ5wgVK2RP9rZS3gXxS7P7UBjQao4rtpo3VHSkQKkGBiMVHeFDfZdQWrucJY1FfVPQDJ91pfPWUPSwTbqFKb",
  "key8": "4bArXQGHT9xNGgxNaVb8v4EVsab9Y6TEqQPyapHoqB2GyS3mhH2K8yendVwTzprdUfiRMnZ48JL2vE1FmZe8Bs7H",
  "key9": "64ECf5Pv4qCvf9txGp2CiNA8QVgQhqjqjTTq7L6mdKdBDcLLKQCakUcmzPXJCRGiqdkCn52679yGugaiBfz5AAq5",
  "key10": "37gZZPRTMi47ej7imDnXnpGpiCU7g7XGij4vJKG6kv46w2QFcv3DiewKqyUQW9mRsqExVhkR6zpANRM8UdZBwm4y",
  "key11": "4GgPjVhNgXnFuzET1x5EZRkL9KQCGyUT11KoanehBxiXrU9zNeU8Y8CYUrczF6burfK9fW85aos7DQGiEUhxNNWx",
  "key12": "2eCgXKPh4gQ7DhbDdmSSyXZtXiJWz3v9p3Ce9N1sNJAzsSXjddgfokZk8NENWmXTTAtgRKRTK6tQzueg5rsaGX2d",
  "key13": "5QfwGbHMcqoiKkvmo6iUqAogkZUstJYHNdSvPUQqmGLdnmD5EEECjsyBJhVqtb9hVHmCA7LQkVdJ1tVLBv3nPC3e",
  "key14": "3vybr1kXoCh2fP1nnJYASauVL64G7yzWsy9J5K9UMy1Jv8ekT6iXHs6oAUEZfeXMHFrSVEKT2cGfBEXBLMfJu3CG",
  "key15": "2jpSxtVGbopHxYyjHEN9Q5sPP1GPJZKaormo29Tm8BtWVwAX8ttUtFNQxNgeuVKZ8rvLBqCfHqXq8m6uJW6SfSfj",
  "key16": "5nNGMbx3bGC3C8RwcS1aXdtHsZCXTopty6N5SVGCmQiuHit9MAathP4mWjUxe6MA1fBzjrfhum1T6nDkWhWe17P6",
  "key17": "DgGgXC9irUV4V8d5t8CT7XL8tjpgM5mGSTgan166dfrjc6LmYQkYRfJgSnXy2ijZQ1EJqvBxKSqH1L2ThvZmGjo",
  "key18": "66gCMqgp5Ax8YK3Ffa42bTsYBxudE1tVMYSYopHPFm7ZcjXkyi2BMifbvGjzsn7uxr9ed66d2PeeV2FAij5Np73d",
  "key19": "WWEjxy4Xdoi9M5qzQeb1MULrWJN8K4H8VegFtMmNEtSuo9JEaGwLw4YEWUwgoNgmeoU8YHDWCzFVojcAD1bZva3",
  "key20": "5VT6fc4JptxQVo1T8qoEKJUE3BF7bp1jUBU9n9ZxjsBz5Ev1Ufov532u7obnAPFhSeyhASwNCNBamcqxhKm9SeHh",
  "key21": "4kkVsDfRrjMsYKtbjYRH5N92W4j4B31Q9yNz1ydAuSQkPEPy1uFeuLjD6rRuvs5M5gYyxDLBkd2nuSyiCXAkaQej",
  "key22": "4qBw6Vz7jniAsgraYemExNCYuFdcScSHkcu6XgA85XEY7eo6BVuKbYuuroyA1kwGQv1xAigMmEqBEqhEyggrvwMP",
  "key23": "2JsFvRQKxfj11rPAugoXUSreTsTqHCjgSKpqb78hEzJKLf2THx96qiC28mym1zjfgVbf1FpNsKg7UzQtC8wG8VSD",
  "key24": "3JCs9cedMKmfe593PBZihA6S3t2t9ASdSyoWFtFYmkHPmtVsTDYZPYPZ1Tp7PEFKgFHz2bL1ohhBKUYsBSARq8mK",
  "key25": "3QhftHpionHaMsx4F8AaBbthCCckarzhrBnWLkkQhzfqJLEke7z1Mz6UKcEYqHMZ1oTdb9nur7ui69LmY9xtEz6s",
  "key26": "2BrmJanN76i858xMiXem4iWUii1QCWw9Sy4pdDusWiUczgHAXf2bEVL4rSmQxQ2YY6KudQahd4ThDSAspq5GbzHn",
  "key27": "3RGgop9fkrZBepEX1Uqwuo7jiqgNAocjFrD7WTRqGmQmJezwbXjz1ZpFaAYdh1dArpA7ur5Ay9eFStKWrfyFkiEH",
  "key28": "5kwYNk9bc9Wr6oUmSDVoUHqpYcZR5bdxt85Lhg1BBD7PKgRd6B1YSNM1utLSqwBLmcmbNeL9ueLZGqeFqtCTJGhY",
  "key29": "ffSG11RqoC6pqqwWN2MgBi4Wgvah2hnZrtHQp59QDeJLmwBvKPD9SAJe9SrfwwJRxsN3C9kiaUrXMyq4jEtGDsE",
  "key30": "tCX8xfQ3Q3ZewqDRcH4diDz4yEXGLXvUzFNCGt4S1vjrgtx4xDqV3JHrwsEZdqPZHDzcys5XowuAi3SeeugjdXN"
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
