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
    "5v52z9fR5TjNiDRW6U9nwLt1kB9Fujp2VRfDcHdPSACsV26YRwGQm3jL7KAHS7Gj8aJADpaSx6pVeFCRWBfcQ631"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FtQVfTvqT2Lzqqzw8ersN6XKZhZ8cT979g5kxBXtJNTN2fWudqc8GN7rGQDvL6TVjFeBDh5BVDxteamFNdY4GSw",
  "key1": "3y8MAxHUAiKHGxzo4vQT95ESw2pDgKGd1SGRTFmAcksVvUz2VMbV6tbjgNX1gpEBv2noUZMVnu2JgUYntwF8GGap",
  "key2": "3cb6RbWpw4iPAoafzZNskhSTsC2FUEYTLyuHR9vB71JjskJRhfForJZU1mHPab4A8k3mKSM2EJG94Q7rYTZYGXus",
  "key3": "2Ayoo3SwqbTdUr3yR2wMiQzHqgiWCfARAVp4ia9zKgReJRJchuU2KLR9X91kJWuHSmh5r3XUxf68mRaZ3qP6ZXh1",
  "key4": "3SSpVW8RJPNrdmrDzgjs3NBdMepUVHg7RMNTnMraRCkv6NHBFrdxgQQgjnh2LUxGRfCHWeLgoc74pvVLwjduvSFn",
  "key5": "5yx2jEqpao1T3YsyCgXRMRhNxS16BFdm11CsLjCUt9YecLMiB71o9hFKkhadjJThevsJV7zXD6VY5GQ8kK1eMtji",
  "key6": "2ZyuYjvj5iK1mXZ1HhZ6yKxdBkR6pmCysoAsyTbtkXHx7HMjXeszbMwpFBAy2JViEvEKNvDhyZRzQPQm5THgCau1",
  "key7": "dmR1fja9v6sJF3Co3M6T99WDPLgmR3MNqDqfw3qfkbJ13oXHWBbN5xfTW8AWucuFDTqrqYqZ6X4EGSanX6dRwu1",
  "key8": "5BkbaWzZUQdddBCSEmzE3iBW3UUt3Vs58kavmnm8fH48dDWocZdrKfxetpRvVmuA7YmHJ45QU9AC9NG8M9KLxmFT",
  "key9": "2gw5ixEN4UyjQY6oC6giHTEJ6PHwNYxbwwx6rpA4mgRmSVn49TC9mPquw7XwQyCNBWBhCeN2coHfLh2D1T2ieRWh",
  "key10": "4xQfszJvQNhRGj99icJZbUkwZMoCieSpRKq9PUuGgMNZvgbJLKo1Y5HwD5yLt6oEjSeHXcqc3WLNMfASVjMxupzU",
  "key11": "2rbJc67Y6qFxVgxuY1A9PgX22AGoUhZuwyqpbXb5MQCe3fo9CkrhMVWe6BWqt8hoowcPZ3Z1oHs3z57W6odsjcwk",
  "key12": "b4sjRuUaVPzFi2jZ8pTTFq6k4QDTbyxrcnDPjAesE272EP1V9dKZZsGMakmgz4M3Zh9MgVfvpsyyioHEdJHWstB",
  "key13": "4yAnxvBjKcCeYkh8F7FwPYxuwGAjC4J5P5eCQFtYQA1aBinXGoTWNFor3PJfeEcGXWuMQofMgiXzETwZ9dZgfwR",
  "key14": "3AGGEBtGXas1xeT95xahegkJcYkktxKoM2srBHjUJ4tnTBSosbAbpW2jeogrmy8NcjJoVXJwsQenayCTXh22z6Hs",
  "key15": "4Z2rnLDMwtr9Sw37THqPD3Zs2Pz2xkk3nLj8AYjgTosK4pReDf2JCEhtpsPDoc5UvKawiyeStei5DFajZEMx4tKM",
  "key16": "4P23rUekiUYkcuA5CxKbS5MNqgKFenkHC41tctoqyj8P8J5xg69t2LEfPkgcsXtPanioa1AVQGUfs8txkHjemV4V",
  "key17": "UvooBTyCLR1rkKgCH7ALTtUuVdA1rSuQvshZDoFSPzGfEgw2UH5fHVLmvGaScs6z9c1CFhnZPw8PoPNTts3xX6z",
  "key18": "p5goqHmTXAsgLmdRzneC7cjQEA56CkJqqpDJxRD3TqeNd6dtKMAVsmH8cKs1c9uL4rAnTk2FbkmgLcHc2nZrFDk",
  "key19": "5Q4gn4EzMZ1LupH1ZcgJg8jQjVc2rfRKRg61xhADgEsN2xhy73UNU73tVNEzMLrF9TWNBHFiL2xsmurgWowCGH8C",
  "key20": "3ihpMxJoXyYdrDjRpHrfSXNFRpJ9KmTdzcdj7F34zf3URNUFpCBzTKHPaBd3QfqpNwgTgkYbT5de7asvHrf8rWrK",
  "key21": "5NsRpxEfVPJWx5vmXPrP36M1ee16Yjg4xvwbk8SRpRfDFYEqvzTH5drF6yDEakRRQ7pZBZGa7nz8eRLDb9c12Xsg",
  "key22": "2XwezEGcj1dHXiyYFF1zEryFxyfYkKo8TfewzvhHJCWQN6ThpmufodfmzxR6xU8QHah3uBp8DH1qgfxbmgPu5WUE",
  "key23": "2sCkLu84gGAByvbM9pMtfBZXTw7NMf3AHRTtCDaFq1EzvSSeQXHPYMaiP8dvg68vrv3LSSTNr8fubyn41NvVev8Y",
  "key24": "5k9eEiBqC7oupv7NqR25qrmqpqgAayh3TRqXNPXHTsUKKrj5EhhGdQ9RXenNtxhiHRWydR5kRZzg6ovZmLLkr6tF",
  "key25": "5dJQswX2F7Xxw5FxFSQrwx5kVNDVhrsa5GBQ8z5Rt6aVor95QP6x1YudTV3rU3bsBkMUgiqAL4Dgj4RrXZv7vtUy",
  "key26": "2SuCJMJ8HgBLpir9Ujj4BYBeqn5Vfo1H3tEiNucPGMEqhZ5hVyHULPzVfUtnCe2DZJ8p53bdrfvmEFSigFnaSdKt",
  "key27": "2tjQoXoP2JB2JWAQqedY7YfVLCgTiFHtfqv3W2xRcoVcXfLrUw9EWuucwXZFB5xAeGBCyLAQbPW3RpszwmXMCo9Y"
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
