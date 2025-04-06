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
    "3J4Z56bUejoSjmNZirnLhXpBVwxtDedw9oVMrzuADzJSHu95sQheZke7S92bFXpBY3VBgNs1ZeDRy5rpjDBbc2pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4vi7kXP9ETCEut4dSJvUdLn6UuUifPS7rvadwnqwhsgCzLJmRkjX15rzNc8zTL5FqnSn8T6zRxoEypKkmV4twy",
  "key1": "TY6CjXHpPZQiJNGz4ouNHVDxRS1PSm2g9e42f1p4utqJP4tWLiVJxgVZJkTFHQQ35AVdiwys22yZvHnxLvtNmNW",
  "key2": "4KnaAffrzHaasRbiCBZ55QBEyAAbqQ1JcZVSF5XRqMGBpy5qia7Gdv5MCJ26eRQrniwUK7L9j4TA5emZxHS3VFff",
  "key3": "4NLhzen3baFQPJgfH9Ev7sKdXw9uYvHi6f55m1cS93FfiyyaANXZkm3kXvwJCJgFN57mESWAuLmbz8VHoemT9vfm",
  "key4": "23gR4dKQtYT6j6YaKBqUstveSk3qZZtpyZnZiq5UQJXGgvfZW5rmTCCD8YfJf7r9Mzd1LTGsLWn5YMGfLfzgg4gE",
  "key5": "3k4dVEwTotrLKVFSrSxXquy1x6X9wEVZVQnH8jtPWLbcfnANpzbovgMC1MBgrJvYsjAimxzvBa7QhWFNJzrmUtkd",
  "key6": "3dtZgPdPZ8UXYrvbG6oETJE9QjVKceyJuZgqK8d5Dyx2fHNzFuMbf6BRbLPJ9A62jPkafZRfXNfMwCkxuPZH5uXQ",
  "key7": "5TgPFX99q8nGSpeCAV1Cy2E14KpKLZefHCHkZKvRTMJibm2GMjxev8H999HZfHGbh378Zm9MT4pbr6o2PtyJ2y6j",
  "key8": "3ri48cgNkM3roEmHutvQaJ8RTCWDmgZcXMt1Ete7aGWvrTqT65n3Gbq3momCwjfYpTF9iUmdtyKuXaHmKCdyuerX",
  "key9": "3D68m659is2KwxG5DuTGr2Kr8BHNRFEAoeMWCeZNR5m8tZAmDVJtQfZD2XRFWAvkvCZMCBaktEWEHQEoY6eXaSfX",
  "key10": "42yS8kNzzPyBpZwyzrSb3gBNWPyn4f4fyoJ7GeWfvUWoq5WS4By5Ridxs1GwpFo6dDzPsUABjq7tXBam72scUZ5m",
  "key11": "2e5aAqCWCfwiN9C9XvzQAgNUYpiGB37qQbnNppw8HQEXQ995DGEk8CQPijnKJvvhgA6GZB42w94vWP1a6fEwAKL9",
  "key12": "5sCfXRdiUZss3Emki9ti4LDh1hBq5avw5aEXLBYqqXrG3cF7nDVnzu4wT2XBMuAtd68bpWtJYZW5paXwfnNB3YMk",
  "key13": "5wvJTT7t7tU1VefzUvJNub3fkgYi1MvKvj8VjPufQi3vnEFdZT69C4rdABQc8yUsqvCVjJ2HRWn7ycTaiNBFcRu2",
  "key14": "nmzXBFyNDUxAENoYSaBFJHYS3Pkgh7hbZ3sSkd5r24vrBtVX4rgfkeWYwCXyJiG2hRab4SbpWqhzurg8WBPJT4z",
  "key15": "2oqBTkSkekN6FFU9b6z7fp41KCCxse1VRUk1cKsmryez8sH8yGUcwNV3C3wCrjPscZpZiDqY2c7Cs8x3fngTSA8C",
  "key16": "4dnWbj56kerpq7ZcFMWxQevAGW3q1GZNH5bpDshB4md9PGhR5kdkcx4HBqYBkKtALb6R7sDzCQHA2rZQUbQdj3qh",
  "key17": "66QHmh1JMtsxC6LBYssjUx2d9i6nq85EeHsRbzRCNRbzapsdj9NepyazDd9rAE3wGZiKT5ZoQR8rNg3PzYAw92ir",
  "key18": "4eiQzWqxK3V8xEN8WL9Rbf83B4Ms3tJAKQr7iRa96boJxWXm7Ffa61cfF7XGsNNKV5qt5KAXQBhncSGJr73bkL3H",
  "key19": "32WxVDAvG57Xwnt5sQEnyNsZZ7G7pyhDFirFeayHhUTvU7djM8o3NG6jtBwmNw7VTAeZyLPSVwgPmjUPgiQe1h7c",
  "key20": "5mkbET6epHD28XAsNoZjvQuqdt5n7tBGvsfCCRUesQ4VVLuy8tRFsaAj3EtFfHxTadY3eDHFqCk5F8hwKuBVkDb",
  "key21": "rqVMJmANo74oS6F9NpRyM55Kb46u8pzDwtNuPHC4UaaQPsA39FRmwGKvHGCqebh6pPeJpe3N2FKvGXeeRm96aSn",
  "key22": "3Q81BKRekmDc1ghPhAbxxk5YBjaR7tBa9qKGZzKhwBk4ZYFCNkoFYDbJiCdto1KTvgVJJu6A5R96e7iVkUmZscdD",
  "key23": "2A6PBozdgLnxZhcrHazzCG6jeChCWKJdRq3a7PeUiCyRDwLWAM1XWRBoVTYd78q2r4sEc6aSC8UkPLymSxzNoVQA",
  "key24": "2PubqVKkDEncVwEuEx8ePzF3exQk6AeNtSr8zyNF9GCqQoSmq8mkoQhfmahmFmhPxzXpPRzgF8G5Wc8Y9E2FSwhb",
  "key25": "KVMho9GFZkY9uuwQUK9Y2TboSk91dMPN4RtFSzkvnB6SiVna38jCumBxjv3xGYy7muDgkVZtVMmvVm7whsUTbua",
  "key26": "4FCkVvDiNPAS7HNMy766qse2BXZRZMxPkguvjbwvpjc9jGsz2sAzP16vjhhaE517FpWabuudAFjo1i38UPhEGJ8w",
  "key27": "4HutwCRtxhMtBx93U5c9QyXmzg1SvXhdwfgrXmUhGVSozcPqhe9DW8kSpn9PRoCsxhfPZ44KmQTyBD3sbWWWo3AE",
  "key28": "33jVmaQk35fqR48CyYW5VPgb86c2fZoFK4f1Smq3wo85aivnrfozc3EW5nMw68Lsv1KrpmXR4dMxHHo1j9Nz4ZcN",
  "key29": "4AuEZZJ2mSuKRoziH4AymQZTCwdAMySHeszyvQN3a8u7TC1RbA8kuBbayJqawLwPKkYAx1XonPGRobbmTFkqMoFa",
  "key30": "NfohFuBA5ihwixfN5z2Dsmamq2GiYBj6KQHWi6bw5fHEWocB88MWrb8QGuqxnJyY2nzDy41jcyo7hL6YbRkLSuW",
  "key31": "5BAjKowRSiebr385mGNvihFegf9xy1sbT3WoR5DDYGjMBCDvvoS81kCXvLSxtmVkWNTn2pQpdpwxBLPWjzieRKP9",
  "key32": "28ximp9MxGpYBH94caTHTfxLaVexrGFWT7ze2deuvoW85CCn6kMVnLEw1NDwbHvbPPGiph8UdVfXpGstYfgjTKBY",
  "key33": "2PTBD3W2yiz927nf2PJ9Qa8kBYBWtM1urYzkeXxMFS9QW9b3Jr3DP1v2xY6Yt5Y5yRYAW2EAcc8FxMef35KrumbH",
  "key34": "3P5wHzPV8CEUsQXj8YXi7dAXQRZpTbzFyLzHeHzVusXgG1BriGGGTbNvG9HAS8Pyzjm8cYn9LhG5t4Kwef2urTzR",
  "key35": "3bkHG2CGVAbGD8TAecXjQBwQnx31vM2FZLHGZVyTfMSu3W4biM4QpiZKZeiD4gMqDc6pHSq9dzwBVbM7tJWP8S5V"
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
