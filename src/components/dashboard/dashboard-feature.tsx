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
    "fSZ6MwaUyZPfrDZeAYGxFPtcxEx2YfZVbxTT23a65u8yJQRPu6D24YCwpCc1y5o5RKiN2wmQzQRXzv1KRHYYfbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8eXMPAfZ7vL9jzZcaBSPqeD4k2ibP5jeRznXSwfC1z4DNCGA8kHJkGhdrnkQsyJCGswWUTZQhAyH7SnZo7eqvp",
  "key1": "52L6uCs4FPTpHUfAopH9SnmJvh93u6je8FUX34t4FB8axap9irHDeibNnzFmEugnvgpSVnGchhqWMrqbu19MQCSS",
  "key2": "2MkDTX9eJ8pbLY7AiJiHQFfaJz46Mf5sxmRKP1ZX8brzdhD8nj2H66maESUMJ1vG5RUVow2wu7aEodQ9VUg364Qj",
  "key3": "4oSZZFg6XzDAw3mVJM7hCjMjd966vWMsEbhumpwMn3sRBmEMYtGPQAVy3CtaaHnWs1tMyDRMWrrAsfJLT5qhNHKp",
  "key4": "5jpSD49PN1i7RjU3u2fMcZ2SmQHVbpy7P5rsvhzRWQnMUKhXyxz76bwK59Q3cBb8tQgRj5MYRxBMnUC6CpfvDbPX",
  "key5": "3bRso8kGoNFrHeabZydGj7Af5goTN6keVH9ESEGjPTL6Qa92BRE9qt3fe8rUxzuV3tie6VnZyZViU9GwVgJ1nPtZ",
  "key6": "4YhydT949wNKbn7xRgGAehXwYjdmfJLFcWCfHi5BUFQrP7kHgR9E49vkt9Vy74jkQLwNFrFNqXfMcVzD8dML8kq2",
  "key7": "2Bn5PKzu3WEhWBZ3ZmGEgL1f6QTpxrceEUrJbvTvvKRNVUF3MAaxE5wxvwm6ivVuvQUfu5kZDpKvMwQ28JEuXyfm",
  "key8": "39jWfqcWF3UVFu5ruHkExTYWBwwzPRsQUvP5sZgrwXjjWSuZon6JZN6AgpWxus8cPhNXHsHmEAuojPcoHoX2X2kv",
  "key9": "44gEiaudU1AKaWDG62soiRq8sP6BNmMUqbD8omm6KMZLazpmeg9LTJuevpV95H4ez63Tcy1RhWbA4UAZGd65zHiV",
  "key10": "3xHrbrWGJBdTZrojCouHHPPEfUEU78H5vTZNTSHzVnf3PNBNXMiZCdvbskAnByEFqQ8aPkQnNmRXMc48Y3uA9YpU",
  "key11": "ZEjxVL3VTAtsnMSiYGiu4cMDsfh21oLAv2ttwNHfWeLHFDGSA9eCSwohQexRioD6RqY94i15xx1uZSuQnPpzuWQ",
  "key12": "UuvnTRn7YhSipuard1VNRqqL8Pn7t37wDuMiFiQq68gwu15vwxFfmTqB7xjbtfjeWRPq4kiYp5PPbbm7WFYZJ5S",
  "key13": "4CaJuLmENt7ft9nD2pW85ghHj1fPFVF2f74AtK9SFGyyUUP1XQ6BaBqHU978xny1iRDb3CR78YgKSkSWTQtYdaH8",
  "key14": "2LHPnSyieor1uYiru5ktdHkwYe43T3DunY7DnvLQJAuVR6F86A6MvQhWZBnxXK7WYmcrvQym6g6mRDKsPKGu1umf",
  "key15": "yyVgZZCn6GEznSXswAcf1qbqzdMgMygrhHLE78aF36YTXeaccq6C7SnjRghzZF3mmGPUEAjA7gZTMTSpechp7vq",
  "key16": "5ThB7c2PaKgGzK999Sp2pSbadRKQC9AanNTBu2K2qBxVV3MWsHu46jhQ9qdZ7CL2C1xtsGfRqfrrDnweK1s2FZ84",
  "key17": "659vp8ECPpqhSQDLL9QNQD5XoCjn9YXSYnXch7Dr4HP48rhtnYJdndwtAtS9m3EHBaP8JL7Yy8tNzp5AFwaU1gsu",
  "key18": "2foXfqToTrHnpDb8JX375Z2onmq2MTYaQUQ49NCGrZYVZvhL6edfBLiqMqh8f9qaDERJvXmt8LyuQFZgQHu3QTaA",
  "key19": "2sjyqZExPHX5eM6Lyx3jPJw3r3dQAKxuybfzRCM1i1Bs7vKJjvECUzLsHnKhwUr5fLcfbS3urvy4WdgiDWg2YkGc",
  "key20": "8ZosmJ8iZUKSUsKJdhq9L3jkrpiozrig5DGD9CqfTuZ8y2J3FdPNwkYNLcnBjfLZqnhWV7LJNTwHyJkziEcFYKZ",
  "key21": "P7PYasUnG7eG4ucS8Dh6Ej2g6m1V8mUUJT6wcUNBoZTyFpRWAmeGRDhC6zUfDScJJdYb8Rv3SX3m6JPtceWSgA5",
  "key22": "5PkYCrpUgzdRxgKFTnjoxZCUFKBFsHQzdxEKL1fA2JkcAakFwjp7cp3xH47EWVUzZo8D1yTbsDMwT6Sfa4rBjZb7",
  "key23": "5Z7AYGgGTYfxeFUJtuc3BktTXtAibNKuBT6EDZuoN5ornZi3FvKgNmmUn77tEVYJn8AMno42eMH2icpAnXJUk5Bj",
  "key24": "4xkM2PcEiPPB3pMbxVLxFZaKwZfpyXgxhrJvfuS5aT7sC2zVRKujXoeN9KJf5v78PqWeyqhLoT6YY57L6gUJ3YXo"
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
