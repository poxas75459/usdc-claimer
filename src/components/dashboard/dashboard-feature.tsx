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
    "2neVFgFzyTpsJyj2qeZKLqpSVJPbdZkJpuRfbbGeyvYtPX9WPEpnfbH8MnLrRs3f4n1AdCUnS8qHDiBGxoY4AHPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jz8L4WLYF2fvWNjUb8B8LvxUr5i3ZSfXZ16YY6Uabe3LtViUbGqg16ARAnmaHMKhpCxWQCqEwLnnE4JZxYV63Lp",
  "key1": "31Mdzzrq6SMX1qCuDcLCzmCzEiNwzDkS9rRcwCMymbrxQFC34VqUSgRMvHbgSVpnXo47ouregbvn3CNqH9ACJBJj",
  "key2": "5xSTfgp1Vv5CJWErkGjKihk7pCm2Cv8bNRD8PLjAbhbEFvGszPoZzHSk6iJoBmTdWdLieYsDWj1eNRKbvXQ7RvWD",
  "key3": "2ydE1oZhmswNKtAs1mHgjZdERjdJkaysPEMXrTkhRgmLRy9ZM3aK1yDsxjfmJ5ABCojABunvwin8tmw1Q3VAqwNj",
  "key4": "4ADW7Yj3ndWDZEu25re8NcVtothp8VTdKtaJLzJLLAoj7hzorRTM5KkQcF1iEnWVD4mSMNvCy7WyqwDQw9ntAX6",
  "key5": "3zcP8Anbb1W3wxAqBo7rKDMb5GNx4UZZExXKx2NP74Lj3deHfAE1xJxMJuwoGhAnhHedBsJrtb3QcGKzPLuBe959",
  "key6": "3hqFDufRUBseBciUPCTYpKrUwxPWVfLjYFcaJCYf46BJU5qiYPdyeVWfzhL9hAGTaCu9hq9ZXTEkpW8RgtkvqpwR",
  "key7": "2KTqQrixxfLr96tDuVCaVc64HResGDwdmPBcty52y3xduApb2xZkHz2dyHtzJRcNwTo2UJo6BTe4JawJZqBo9RNr",
  "key8": "544mqetDzb2qzgav3rPeCxHFPdrfEtud4zCUYiHp5LKsYSUvNgBkfTTCniKP9Tp3B6otYWm6yQsuJLAbjvp7p9r7",
  "key9": "UMcxnkuJsH7PeCdfZyamzKCthFGJJjjf7CNb9Gp699RoULkMnPgSmTiiNKdgwMPJWJnzcRx9qNDqcdGBAth915q",
  "key10": "dvv5EhTtk8aqhK7SYbTmCLjWxR2zyPcD1FH8oHnxXkXpKnjZ9yG2Lrd8shLH7T5KQMkZP8EdDSHZ9uHj56QSrQE",
  "key11": "2KWqPVwJUvVS7DHSyebMP5kaa1F3mMJgBh1kkhpSJkqBxroYED2WFCpD22uPycN9r9sgaJ4Q738FSF6egMUMvTkj",
  "key12": "2Y87CWpmNSbNBQ2wN1t2ogKWWZ3aGuDLfcxwdLbFeRQMSogHVgvALr8gqm925N1H1VXBFv16Z41BAZ3KswVkdmRU",
  "key13": "4XuQfgFuE92u9QRkGwyeGV6mWLgtqyWFmfsUrgzHNSeSYAPBXVHWQn5frsLxYasm1cEPXbUhgXmBJ8SQ8Z22aoVP",
  "key14": "b21ptASYwbmtRSWDzFiWMBR3MVtNu31BVX4T6jREtrTBpEyke5aBDtsn4ugvNSWvyH5Go82G5eKqkJbT9c1bkDa",
  "key15": "3bt2GLqnQHCFg8GoyJxGuaVyfvAXwK5TkQBnsPeSP4u9DtYNoG7L7ucECzX96qzM5KBrammRHQvfAyVdmApHCz2y",
  "key16": "tJ8HW3YUgqgf7qx9Y61iQi9cHTG4kd1e7UqXQaskho4B7Q4Lp1pz1rfTaa6m7exo1joG2ASik61er2ucuF9cAG4",
  "key17": "4ruJgiNhcAzRTFuCAYr2FHtj2EpXYNd4LM3GrXeqa79cgaXjcJsqGFyjtX28afTEojSnWKoMUUpGVC5YNNnFZBgc",
  "key18": "5a2494bSiSPizu3FR2XrN6Q8KhXwx6BVMbNsF9kh8KP9JEYanG3qukKKbgi9gX2RqcHQcrvDacx4erqE4JReLvLP",
  "key19": "4M4XPKgn9JtSjgQAj6C8yjUYiXfjmmnwirAZTaPSvoS3xwJekUhKL58caAaw2C87Q6DzF2KevNM1WQgmwSRidBTn",
  "key20": "5ysnnv5RYPj98TWG5JGhBXfr64DTri7ZCP2q1p7xjrScrvepu35qwYKigeBMpE1vBu9ojpNtvhar5yMxyYoBnWT9",
  "key21": "4aeN6qpFDehYDoFNhmt8ecNWMgk5FVZRRYMmv2EA3PGga8W2zy6VHz52rC8PSEJtEA7bf73LpYGbvrmFJPFHbtH4",
  "key22": "5PHNZbBb8qvnbYqNVKfUv8vznxgtE1BsUzLdA13LhTekzpUhQmgnqpZUac47JXf8Tg6XWcYdchUSj4QNCnw5Jke8",
  "key23": "3M9akyCfq99ZUEyBPhEzgQLCvUTUNTtVxren6K8us1KgZnDZ523hmaTw1WXx3QF1SdeGPEw9UJEhdCgUe1bHTh7d",
  "key24": "2LrfycsoktYyDFRxyjy89QgAqsNCb248v6AVEhmMd7ouvAJG6Tnx6sKUoeAsBGjwGJBhtk6MM3HJVmAcNwUipv73",
  "key25": "mfPAvz9uDbznhL7nVJZRoRAWFqWPSBhuZasXyVMEac2HfwGFujNwag5mbtfPs4KAhMqSnEWJBBexGE4hq2voMPk",
  "key26": "5uCemtvqcrqd7ApW8VFrqtpipBvG7p92JRkw5eqbxEhNyeidWWo3SqBTkeCKirM27zVWmP3nCgDFn4ZEHXESHqmL",
  "key27": "4uPiw6adkgDPoR5RiR9XQPjGkELb5pKi8JYJNG54QGuTiUrvsyTvCAPTeRSRJaC6gA6hcjx2i5sbvhKkAWXPB2pr",
  "key28": "CJhWW4gVt9AUS1Wg7P8BNNNfwHxtqRZria6dYgr2t3dpU9r3qn5Cq4FF1ZeuKGogJNujXoo14f4RDg4m2sEJyNt",
  "key29": "446gbf5ABZoTCGHeiKCfNYuw46ySkiua5CFJzh3RYBnAWSaZ9uYCzjtKUaaW8Wsi1dXMRCaJ1niMvsyhLfT91odW",
  "key30": "32ZGuNiyjbKkgvsCtvWXTrDSbgXLajuVTPmHNGcGu8jcjri4WXddJzgP1UFhZzMXsfxZi3nn1kBC6ZohQUSRqMtL",
  "key31": "4W4NLAr2uWoMVbitWDY9BV8NounqLrYWebZVe8DLRiLunVzccmzEGQAnutrzvBc3DrtfBxaxc81RZ1hzs84qDLs",
  "key32": "4UU9VhLZELJNGaeqqJD1QDFQx3UEdeACa5sGuF9mTYX1gZ4pjqRmFqpQwrYV6GMPCywYeSd1e9mYJ48wkVfomcMo",
  "key33": "2oGgM1ZsvVTbZHB7iVfADNkQDzPhZztaDyH3M3drbipv2jXEq8P7bfJ98kMCzyxSrhr7vRNoPoVCTpFCUnS5Zsci"
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
