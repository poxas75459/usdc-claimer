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
    "4xKvMUWXDLbfNdbrvt2aVt13J8pB9yfsVQEJ6qLLC5YPQhpaQpdv6YwV1gwZ8PUyLHr4ZRsNLpFMEhGqSU6eGtoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYuGee3tLpzZesJUQxZdRERfYnno5rhVs5o6qZ5EfEifzoWDmi8xgSg38jNtUa9Yv7L4gKaz8C93HyPBxzMN8xQ",
  "key1": "4Ghs56yLsneMxrYQw5NnK2ryZeTZL8UjHQrQySxe3QhXLFnWWWTDZnkFrB7Z7co4s9MWn1rvTSN7uXfd522Q48Ch",
  "key2": "4WZa2xDh1LKDLDSSEW6Lk8erHQUcfEfQAZU5SaduVjjCM5kEKqjWPZDKnUWsVFHgu8q6FFqCJNchhhohkavuPddH",
  "key3": "4t1XBgPKD5LcMvciH2YjJNywUYn5WsphQcCbzCt6vtADtQwSa9qUw9aA8wks5md5hciJ8qruxL8x4NAM5eGhzvYF",
  "key4": "Cm7W6vJVwujFtSx5onHns3pwyjynumx2aWs8duQi8RUH45orG3siniYVN5NeKTwJcTxgTkXJWyorJTUhD4KzLZV",
  "key5": "4swSntsGqpKHWs21mNQjGp7hCBDTshKdvUdDt82QF6cDZmHD2eLrAPoQ6uHAocA6DAMm4bw3aSgBkawBz7abPB9k",
  "key6": "4Ab1JAvb6M81KgK7Ss7PAuN6PEGxULTCKDfua4kJa4Cwz6FuQPhw4MSmgWpCdSiq5rVx4YMWBwGGNMPUAh9qsYse",
  "key7": "v4oqEg9DjbbJ2vdcyuogGeCRu5r86ZTCJ11uG7AUbchE1HgyW8JPR4zar5VAqsbbzBRHABJfSTtdyvC4uFBpcqC",
  "key8": "EkdRiTeqFrKPHe2gd7dta2jZX2aHbhnyZ5T52c6ZrjTBiusv4kQ3eRoTwsj3img5X6eXxXYHQW6T2NcPYS5NZhN",
  "key9": "4V6Hw6wkwfGC2B4sQns3omfy9TMocv7oPw7CroiTjbCS3YEU2NtFZy5Ds8qfjaxtawc6MomkCjWfJ8GxXkHeK2pi",
  "key10": "3iTrQPru2trYm4Jhbwp6bNjUCrbyngPtv1UxC7UtFY51bmrK1aaBZN9tpHZdmvGXn8UTMVTKYq1R1KWoWNewLtgg",
  "key11": "5t3EgUMrQe7hJtUfznrmETTtqPyKruPCUhvgrGD2oxrVYuhHhhC7h7q3DG5348yvdx1UJDGqL7L9tmqFtXjBRuiq",
  "key12": "3ytxijuNJSFwBDpyzTQwstR5Na2QGnsMR33ExJZVghnwJc5ay6sAGJChtGwMmhqy7VLLnbY7rRsNsDqUcsTTfZVS",
  "key13": "G66pHD3QowRgxZ3QpuEUSmtTpyJZHPEyGUZwiC1esgRVEQJCb5bbgzzWMPGqGucVbadDgsDbpTXMgAYxsnnMVrY",
  "key14": "DjVsmQWnmBiXvtPZFDnHT6YuD58MkCgUPyKD7T6acqYeo8CUbgiVs4YyCt9NV16VHbFqJb89T8UiRVW1gHDUu8R",
  "key15": "4WNHMkuHAzUFEgUKsW7vSvcNAuordxZSS1jrNz2qeN7S56rDELXZv9qyDNRkX29KVgFuZuUg9ysNxQqLyVFTjhtd",
  "key16": "5TjJaY8NSD74ZrU5Vh3cxpE5iXC2GB4Vj9ZmUVpEHDVZJZnjXRJesZWkz8bB2nHNqzd6jui62QphRGykm2gTVhSH",
  "key17": "mzCLYsXt3bZfLksJH11DzKFh2CGQhXDf5bEQ4m4tupjHFtYSgZie6cZQsent2V6ztK8wPjxDNkqfDcdLgqi6hPN",
  "key18": "2MvWqSGUi6N6ZkAbMLipmxGvKSyyzj9AdWqRnCn4fee5gHwBE5Wa5pxg7wqMS4hMp72rHhHZvSg6JNX6asnF4ECk",
  "key19": "4yjQw3k4qUL6oauJkkHvW4PJU54rcBAkkYSRRkziYKdytNYAQLvqDfXtGiBYQueZEVbAqjtAaRgC4fR8Zi2ib9sE",
  "key20": "4BeX9MsUMrf8g6cjiMmj4yXqVgt2dWmUDEPxMt7ibH7XZ6hmAzVdpM1fjRCBGXFg9qPEwcr41hhMiXLeuFDWLf6h",
  "key21": "6wb77sjer82f2bPbup2ZgZc3JtNpoLoSdfhJq7WBwFej81qv9jV3QP5QT3nrw6RdKytCc29khfe1YUZdNaQ1LdV",
  "key22": "3ovbVV4hVwsWnMvcWq5n7BcSYGwSgSdQTnDKQgbQHM3s8E3ys3Ci3oxnRayH93tSLD3F77DrFX6P5gqAz5xtDiED",
  "key23": "RACHSVD9gBney6bh7i792nhxt9v9BVrmLpk44mcCzsrbq3QRBQHaufXu1eamrjkZykvdCK1nHXCDJRZECCNhDNi",
  "key24": "5cFqmoRiumaTXBVMEKUNYFKtMsTUjDhaEkyDgFFR7wj26imyGyn7uHysviLkqMU93kjAVDYDYX1GKSLLGmtgYeBw",
  "key25": "3scWaxrEBiou8Pp91QvbKi85B9K44o5orHmHNcfgb86tMdVE2hfvArm7HyNR7A6A5uTzf1vjBPDqGb1tAKiouY4",
  "key26": "584KjY4bTbBKjdWQPNmXtUKrA3hKV7ek7KTo1BsbDZ3D32Xentn62KjGKk477KJoq22DptFXXJfGXAmBb7x7113E",
  "key27": "4gGZ4YknxtpDWMbPpSTUYAiuc8yzhnWZCJW5oQprYZdK1JPqkbYviUYh9qB8qHmAHmcQuqcPjKf2dkgVJvyxa2hg",
  "key28": "62TP13a11bJAdxXyXCNoADC4QYKfanuwXFo3QkKoNcVH2c9KMp6LydLWrMu222RiELs6gG7fC6F8aTLkpuFywCPs",
  "key29": "2UrnQdg9neev6dW6voPqeDr4qmuFZ2anp3YXbpaoXYcS2aJNY65ffQ6ec1q3ChyuinJ8FxUpavyYwcgBtoxPKTXU",
  "key30": "4CqF6tRE2eqwcTGbpfHRgoj45pyY2NN5Pz3kTebJ9KX2vQoaHVeGrtLfqJsFJoNCd5CPJS3fAY6wp5sjCtT8oHRF",
  "key31": "BPSdEqXNBKXq9NoHUgnebwNJ6SBKgVwtGmMX7XCLB6aKmsR5zRfLwTc7FsfHRcgbtZAAJ634sKPcTigfmZnJYUK"
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
