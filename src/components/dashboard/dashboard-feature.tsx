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
    "2vdFRo8phma84QLsMCjgAmsZyqHf6ER7q4DUeQzH5fXpGkDYSBoVEjEN9LrLtmZEMs9dt44odAqsZsYZiyrLEVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZe8YG886XzAmkHw9kGAXcZE95WYZBSLGmiuneUxAsQC1tJgZH6qcZrQ1hd579M7e1UkiWZdoTtLsdRksfW35fN",
  "key1": "26kp1ZFUye6WJeVW7CY8Efep3rkCYe6kjn1pLqJPRMzc8QCkNMZhSaWQRWVuw9bj5X9eFHwgWqpC1f3NdVRuym2q",
  "key2": "EHZzZiyfLLjaU5dC7mg6hb96JJabHzFzphV81xFbCFuYGvqxAUS6ZJKLyPBVtwkGEgWe7QGouyDMPpEaoKmLbVU",
  "key3": "2K6scQTo66G7pXvQAPBcKWLcQ8XsqCfboueAWRvUzV7a9yDQpRtcmPYHFDD2LX89iLGWSpZUtDDF3yQAnNStaTfK",
  "key4": "5rGniDDzodDprUTR8yngVf3mF5ZgcbimCpVtMvZaCJdmLp84jJQsbUdYjGMmpdTeMUNU1GScqYZ53LSDMZyQ2B7x",
  "key5": "5o1cTZV2TqZpR4NdKzuaTvKRvtaNvLwYCnEpyn11xwGtRstQoZtgEa8tc8R132V4PP4XRWDFgVVbP5Td3RL8WVe3",
  "key6": "3qJgNf4TmYXW61G8McRnzLuh8qxsq3hopeH3xa4tmDukV6kAfGV2fqnSsmJBNy1K8WMvVMMLd7GB2o7en5acr7Ag",
  "key7": "NzCtQNQwsiCLT8d8fMQX6LHgUNqFfEFbYPWoywPRmTjBiZLozkDvmBkdfzWjNeRts4QroyS8WJySMUFiukFf55s",
  "key8": "4SywEui4rmcNPZJ5o59p6HXEFUybh3fLP9X4o6s4gHfBDtSABSNBA89U4KTaKHJWNUyrmRBKSNYMVsDV6vA6ZnPo",
  "key9": "RiQGB2U7AxfH26Eg6qm9YqrLXcZZJRQrFsKYAzZ4Z6WeNh4HYt6a85yKC1CBaH2uZK55mHafiJW5up7Z3rr74FP",
  "key10": "2WXqZhHpeVvbna4RYSSzYyCsn8BM1ZrtRGGRhvywUwEepXCz4GEHzXw1PWWt9odt93zVNm5APwFGJhdqPCpSqDbx",
  "key11": "2CL9SyGzPbnwzDg7V7Up3NAowyhkXhVtpAb4ekoxB1gcRYjtDfVhyQTygJ4dzVZDwrYL68xZgDBMSGs4dBQePMj4",
  "key12": "PprENojQ3DGiPp9abypNZk1NsRYTPBUxtyMdaziJy29VmWMGBGgVNRVde1kpPmgxG9SD4PCnjTSRnEopvXSur4r",
  "key13": "5i1oecJpWe3fTU7EvCAhbA8WPisdAbe2MVJEk8sLqN7DkukQRY8kicF9exVwUKRoc1331Uu55RdU8VCz7kGqvowj",
  "key14": "35g4oqDLvNpqZfNcZg8oBEifryCFVyb5fTgwf1hT2ar9qH9BTt35PqqXPpv68u6ma6kzQVMJVNKKS3KzdWB5VunB",
  "key15": "QBZDKXEvCBfzrFiCbhr3pzCaYt9XQHAa1s8qoMg3M7asQmyfE8NboThQDSWYiQgmNLnzAFUQxVe4rCP2SGJQs6y",
  "key16": "4rX2dEoVvTbh1m4Xt2HfDsvQn1EEi5ESK1objeiiSqSDTAFogJzLgneTAsCiqJv7YZPN1vTCXbr56TBeuhGM3Foa",
  "key17": "5GfEaBRdRrQfK823ZXGLSw6xmK9GxdKDny6PLfMsciev8mkJp49to9jomscND6KxJ8TKvb5yuruwPiGkRg4A1sop",
  "key18": "3jKhM6c9LS6UjnCY35U8mTgu8nV9v3CMpZjjDhie7z6YVJhxwRo13ewMYVnuZHWSSSsbD4vk4T2jmhFQ5453eAtn",
  "key19": "25e1JKsPaDZ1ZSFQhY6vMgkJCeUGbP3QafnXj7jEw73f5YF8mhsXuiaQXhRZcrbrSH6ipuUF4pKwsmg4jd2zjJef",
  "key20": "ceGAwB2qhgNEWiJhxHfdzhbKypn9KS1mGMU9HhtfYqmd9U4ZLxdj6pcvL1i5Kc7JbQ9cUYRdkNub2d7zxZZ516e",
  "key21": "21bbUXPSHmrb75F5sz65DF3XrJQfdDgRMXW4ohRTRgwbGhq1Sz7cHyZ2vMnE37a28q3fobSqhpEjddooRPnhJvgG",
  "key22": "3ZbJNkzBZWzVAVvGgry4JyiTm2h6DcieDCBkuj1R7bAJGmjRKREWjpMHo8RTSZRUVscHLhN3Fc3myFtG6WaQmswf",
  "key23": "4nKv24hpW2bZn1GgEh6fHScUYZLs9BbZwNSzWuhsef1syZG8WDEf3oeRVrCduFYC8C1ffesJrmoUQgEdbGt5eeN6",
  "key24": "b6AxDtHEafbqpmmH2aqzvCW2nzNEVbsZSVs7TCosBtS8bYE88gPgEzTXENR3FLCHhr4YenSW9rjUQgXo23Am9zd",
  "key25": "UBMdaWSqAh2GJzzmMEWmULjreA6CxWoVd1EpBakMP15Xrsi4tnQPmPrCAHL1eFqgkv5xzdAzMxT6ng6q6jWp6PA",
  "key26": "4Fsz4qLPh38epu9NVAqcQoGqXT7KrsppP525hAYH27YLeL8Y1FBC3pJBos4KKyUgp2iHBnEiTn3DkGffM6GtEhrN",
  "key27": "25uW6VetuUHm1uWjXCmxQAHsEN5821D4HodGWawvYSz3xW4sSaoXMdpiQJTfnCmwfniJmVWJPBcJaYm8LuT3FjAH",
  "key28": "5oAE1LkqUUM52y2zR9St7y6oVXPD6b2zMBbaqdvFmMNBqmE6rKRz23119JLbeUXs6F3vqysBZHYn3jnpYU43b3z3",
  "key29": "3CskwC4ywuwUVBX49PsmbLSSr4UCpbPxZ7uUdqYLWwFfQKm3c4aRP4EA7KfHz7TXEi1jfB4nq1oNJLBbs4MeQuWf"
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
