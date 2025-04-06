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
    "5kx47PbgFnoNJhxruiFApPqRdovH8Kx6rbFAMqgaESQtGbzvRA1v9xbUDLi6uU2BJ2VGd4Pz9uoZrFFy1nmCBb4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q26YCvtfD4dqhvRhvkCjNvnwYwrihiREkKqiy4bR1AHKiqKcHJYz9U8YLUCzmA2B61NzvD63Bm2Grnzn5Kh2Yfk",
  "key1": "2oSNufqAjGLjVBaXVnqomqTHiS3dQTs2jnyvppqUqRuph34Phr7NayixsPZyyUnCAsXbnis6PTSWjcBdueCUvMuW",
  "key2": "AttDNMxdnaNXUHMdxmfKZbueS4CNLwTtC7fZJvUrG9eQ5yMHHVAL3vY79rQqmmYYcWEcAYgf9p4mToFbuYNz9Bo",
  "key3": "4UeHBe3bK2wNqvbVuTuFcMc27JSuTfDj3bPynk4N9WYpE81Y3u5egQzGwmRrtxq4N8RVtycoQbdGeR1aSyRcGZuc",
  "key4": "58N6QFWrVowwoWpcbLwHcfaxBifvQ68Qd4yEvAhwvXxMgmsfkUoBprphuyqPATqa38gg9ps113fcwQ8YAVBVLKgf",
  "key5": "4pJrxtq3uQP9YK95Bae2x5xXm8xo1T6Y25Hm9JsvPBABzTWodP2NAFkq2rwc9THqTQ8fVMRgNc8ExgnrmtPWQsiM",
  "key6": "2B4DDEHumBFzcf7qWDL3PDbASPYjSggpNUfNNxV6iLVtTFmacSnEhTSQrHRTML3JaiwASHvKy4eqqFdMgtHGxSEU",
  "key7": "3pYY2HT1cKpPuHgKeNTkuMku37gzE82HS2H8ekR9Zd8sRLo7wjGtapfVqF35VTsek3kHhw8BKWdRHNrPPJ8WueyB",
  "key8": "3B8YDb2ghR3oEth6pAmkyk2AzL2KVDS4R8DKQmktLJ6AZh5nuCsHHJxGdgGEZ9eJMNZUYxd3QgPKzniwv1iNgSJ1",
  "key9": "4GEyAFJRwqMKY9Vrj4Ho3ZzF9PJYSxfmgHXZD7uLHx2SqwqxMvo5QeVzUShJtafYQL7foe3tYV4VfZR5A5AmkTM2",
  "key10": "5PZxbHbZqYCmLfCKJzv7e21sjsnCEGGcMLtCBQMgx9mzqEfLBeRwDE1BtAG5VFaWMrJq4EVDzcM5LiDy3Heh9HXr",
  "key11": "4TG8wDHqNLhjME7m2yvy288ffgAYLUhw9BJcxQN6kqMYbFLXZE9H61hvgMEQKiMon98dbUA9hWg9VhEFqRJmq5zR",
  "key12": "4YpZrU6ZS23yEC4hS2Fpajwa9M8FbUjAGYkHtdTr9z4cepabkj7k2r1tMiNNLUy7gXQJhpDekFJ3zQKWS2cniLm7",
  "key13": "5CfQm22UXmkqRbKP8xQD6SXeLvzwFERVsmPPM8FBThSAG65xwrmuBaeVz499B6eZoKAnz1daoesd7TyVTn9zAdXt",
  "key14": "WJkEZFYJQgrR9xLouWViSFdABHckdQVEMWmtdWuu8pvJmjZGJDHZ8CosFT4334DAkVqBtPb7DS6FJ2gWFfkhvZv",
  "key15": "9Ei2nMtfCbXeRWrNiuanLFZ3qGJfzW8QXADtDLvc5ntXh4sw8gLj6sUK8XuSG3pV18wRdZHB8s8EzLQxettecw3",
  "key16": "uXXMoiunsQzJDVy1CFtjc7n63BuDFiiTA2xL3nEoN9Ans72se491U8wMbWktobpQoCeFJVGhZ7T9pJvkDk9Yg2t",
  "key17": "3TcTEq5Wr1FvdB7hLrNSAec8f1V2s7yTairDxVrn1ydB4FXF21VUKuguFC997S5vmJCUvXbPJFfPZJxsZU1NCGZC",
  "key18": "5zDHU48ciiT4ByVWWrDUd7Kke4vQyohrJeE8NTUAmKj5EpeCyeiqR5w3YoG5geTc5yzEeMZL1cZ3zDH96NxMoXth",
  "key19": "3RDxbtsfyDF2ccuL6sgXABFQoYgvwdfQkzHD1RbYnzkzRQkBhF1UG14CGbLjPD7kjHhbDChxhAQQ7Dja5M3wBVcX",
  "key20": "2Tw32G8Rz8u4nfpqVXmqBeBMHNVJJKcUPuJSEz8j6C4aHxMUjSxT8yfsKuqNNp3BF56Zj3pa5xnLcjatbix4dxQ8",
  "key21": "SzacUPftVgfrcp62A7pKunxZgCyK7gppEL5Vgv796ejn5uSrmA24rQ3z7kDhZ92TA96FtZqkUJWqs1LAnbhJptm",
  "key22": "2fVM5KQw6z7QqKZC5fdWer3aREzq5UqBW4MrUeEGs7VmH15rsNRxATtHtoFe1WgKqFmZiNFJqFBSmfZJ1h7177uD",
  "key23": "58eZAiNrXBL9dnCoLcZJQgjd9xDTALCXYwF5QaS5rwRWQ79rnUy8riv64iiYQGz3KdFkifCF3tRwpCSYavjeU85c",
  "key24": "tMoBwrwQbcKSEP6koioKdQ3Grddat5PEix7mDau3xnUVBYdmAiyiuagQn6Z6Vfn3ik9UeMuef8JKFmZLgPsoof3",
  "key25": "42151EmuSfPU13LsDj1jjRw6xCvN5SUY5BqAuPpVHMCRkckysZjpTbrMWyYp7kigaX6XhRHTFaonSGujUrVLDjBX",
  "key26": "2VJZGZVWgXzAxoKBYaSwGVxN6dSEYe2XjUzME6UoPKtuqvqV2XNGQXbkhkEtrnvF5EGPURxCy2y5gNuDEGLKqFsa",
  "key27": "4uHQxNyKW1XXbU3QHfMkfFNJzkSnJ8YGssDWZH63MphpYLiBhQstDtDnb4dp1hs4neE2c6XtsQuxZBrGfPbGbx57",
  "key28": "33nJHgV3MhAePx3rejS8d4aVVMqNG53u4cTgE29YwW14Vja4dgNMHxUw9TDFh9V4DpLSFwRuaGPMfxB6FBmgc1H3",
  "key29": "4wX6qF5KEjqzukdh7KkFjVJtasjbwihm9XcHCzx53bV7mSp7HagFgTQzSDdKoyjeX643ugxqA2Q6BYQhoqwt2iUr",
  "key30": "4PN62tAV1XyvSYvxcfFSdNECM78byGCvhQrwybo6pHqNiyoNhHE3QGnYp84iV8SDRr8iiMapEqcUGFTHF2Fs2bqE"
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
