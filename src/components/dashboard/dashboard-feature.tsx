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
    "YPdKNDbc4gAe8VRMJuc2xm7vk1zvhd6sYi6vcvNJPGLu82BypUZrYVZbs31Ao8wtQdKoMCzuASXVH396AjvJiGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j8zE1Pbmj9yCZ19j2RDQxoXzZ4DA2hWTuzxABiF19z4VsJ1c7m6t6kEZL5E2ZrF9a4XNJDdEDHf3WE243PT7NJH",
  "key1": "3V3N8yZFCCLXnDspRiA5zC6cu6Px3Bq4cKhvw53CubkXSSozqyrfXKGMeJnkeZa32W991VjcodtfgKLUbLr6nDQn",
  "key2": "57T2pbamEWXxZNqJYeH6q81sWwAccQWGXoKSRrYwjkgyoJoBrjvtkwxwGvEBb6oUfDhGUCVp7DpzzMpWBKwqmbyx",
  "key3": "8nUFuoKGTHA1AhyDM9rdpAJatcycQw8YQBcuX9QY9gYi8Y9JwMkSNbiciUBvykiMaWLWcZEEDhzHC4tNR33BrEF",
  "key4": "39MnppnQqufHGeBtsA3Ts8CejQpNLhYL9N4xMTFRtQPXyC7ZUV3BuZPAfJhLgnMeGBeu7G8fes4uyG1GM6HDKmP",
  "key5": "zjrGq2ZGmQov8QDP8zG1pfHPcDaWXZGEHHFvzVx8tw1KDp2UCPZ4rsLNb4EhdfjcqvYC3VXsuKAVi2mJ238BbuH",
  "key6": "4jg5EXidyExnr8XZN2uKS8sGveY9HKQ21WmpddfCPu3DhQ1J1nBJRPfFhAj9jkhLAY4sX1F7BTvRfuF1vJMiGifK",
  "key7": "5u8qASu3wVh2pbLYvp7sfHemGJhdiqnxmPUgXAQb7NkPrDCYeZcq8UdurjkURWs9ysmm4bu1sueQPQEZ9148uoEG",
  "key8": "NPz3EKcLWt7QUd6B2CsBP7q7kVmMcHxmDf7twrdJsnE7MXK1HjPYyBsALdWL3sQgWCaCg3iPyALuqGAEfDaDJGo",
  "key9": "3dMjrRnnx9rCbFPW7JEwBH8qXMcyRXAxfqoUhY4hDwqM1wyhBt4KCSCDPgsDjKvoiZpxPCsDiRYw8s7rGEfTzd18",
  "key10": "5f4KJwARLdKWRjqAtK2LrA9jxT4ja1Xf5EkAZqA9SySTUiSNa6NF9G9PVig127ExcXzG63bnxMvdmaDbJueFu1na",
  "key11": "4bFcMcHpi7q9SjP7y5UJHC516g1YzTE4LfwZnqqdbTmM11EyEbnbb7j1kQ1ktZVboQ9D7y5xKd2rkeYsyjd68Wdw",
  "key12": "2xd9KKic3NDe1EQs7ESr5LabM4gT1zsTg2NVbUTwf2E4aCL47nePaQiS6tssq4UXK9NuHf6BPd8TE2MCMynUEMoM",
  "key13": "wxAySWR8zyb6Vc2DAiAKJJoAvxSwyxz3L2vX6kXQA9SVwkDt2JfLTWq6S4ZjAB4D5Aeu6jcPWUNeCoRmLn7AczA",
  "key14": "4cyPQ7bgoHCmqsA3p4j66k1wmi5nvujgo8M4eKCehNfAqENJaniKReRksekvhE1GTiReiaVJnVffdrV4iRP7pK3B",
  "key15": "39F6nJsVUcbhLsXxbX4r7B96Aci3DYSVLK8FPRPk5cmiEhA55vMtmmr2KdzJGrV9E4c2cY3trizTRsz52F9SKozR",
  "key16": "Xbd9j8MohjFmktN2NN4AYxwYLWfXURUkKUxgYDPXz4iEQj4Z2CQ8MMdiv2CrfdnSC6vtmiuPaBzKEwiqtBcmfQN",
  "key17": "73bRRy9dYbD7jLtSULPFhAbkebvL5RhkrStvNTaP6JsMB22FX88zWqekGGN4gzKPhRdPQHd5GXmhiK1CLmXZ2dJ",
  "key18": "4pU9oL8foH1znM5xjvcC8u5vMFL6swci9p8XpK8bfM8nAcbYSc1rNsyYmFwf2jZqedkfA22N1bwVtzt7tiuCSvt3",
  "key19": "FTnPSKaG5ZGumxBt5KFZAtPMYVoDjtnehVy6nEt3tAETSorugFFSqoCoqL2Zi5M23t8d4Dcf8pHMPxv3X7SwaCu",
  "key20": "5TsMtcU5aFtyiYbwZuPzs93v2HqWpvxjQyduFaJaMq9ZcK5rpphkgCygSvfjHq7CFu3xcB8Dz5u2PkMNMVwVPb79",
  "key21": "3wg9STgv5Bxr14WbHcu3SyFa7fc47d94ZhDxXT4uBcytbwWZW58ki4Ps3fJLFouWYpXp6NbFDVQTBUAWoLgsFzRU",
  "key22": "36RkPKztyGutnCmfZQo5MdLEvKz71myJwetvK619mdg1AieHxhDY6NPMFoVNw19oRGVrVJW9m5UsDQ9jQmZoTYDh",
  "key23": "3aodaFKhatv9tT4RYtEoUmywwLQQLRZaXSSPDQUzqDBieyA91MrLV8cvyUoDQDax6ukq7GwJu4rSetfkq4Y5JwMa",
  "key24": "4nsJqyUp9SxGMnL9ZBUbqdBvFqrHF64ARjPGwy1LfJaVVjRvkrwKW27Y8Fkz8AFENwxQ32xNUmJA5qU5nvTt36Qx",
  "key25": "uHxuwgWANZv8SVJyxTnHaeVrrMvsbP4PVYZ3tKXaio6iequyWxCGoFY4DKxmA9eSUpDJtpeTfBFELw2JfSaGNXY",
  "key26": "8kukwq5tHjEBYRYHuqYWpoz8g4MyVfDC15JhHWs9vjxCiUdmEr2vY7RicKmnZEGqCbKKKS6AbaUfuTkemnCEPvV",
  "key27": "3xzfaRopV3gTaSZvgNyjKGtKeALXsfycVgjxscgAVsEdNxyXzfMMkXsnQeKV3koNNBmtsRLmrrNkNvh3yzJggR6j",
  "key28": "4Rayr57ovPh24tVvieFra9UCxxbuCHXRJQEHAQ6oz31GgqbnM4gQs5LJzD9j1esqE6v7Wv9vsPtbCR3cidaCZAWK",
  "key29": "4rcEhymsew5o6ruQ7JNNwBzn1vLyLmxvtMXZxLZD4DGvwtKTRABgoqSpPtc5RsZURPssQ8zDaz5oXjPTUw8rP2rM",
  "key30": "65iyAZRhQSCv7nP5JC8ys9d1iqnZGwLvcRTSgdQyGi1yFmgf9mhntrzJPPFuVADHc8ucc9vGHJFV7mh3gfVwUCjd",
  "key31": "451PJRKpjkU9gWi5hsEPbUFbF1zf4sraaXNimBXKVU1QbhavLGmFnmq9HTcnpb8rPeiJu2DpAkEoARWGKQ1CVCUg",
  "key32": "2WwPT9CeXqVChQfY8xuYKzm641NmBZXQs3on8ChL6p26CQjpCoYENPH4HG4eA8Xq7b4dkMBm95PxwZp8WsebbAUn",
  "key33": "5K6e2cozDdwnFqa9u6aEYZZEcJLfB2Szbp5XZudL8jTpFXNqzrsCRVjBNp7NV3QLfKWEcsdzhjV51JVhHszL5MF3",
  "key34": "5CUUchuwQ23L9o1fWmHqo6LRDC2pGYzTGLud6zWX4maWTs3SDRw4Fjs6oCz48tddzFjFK5ECU9hHRhAQkyU8bG96",
  "key35": "4umCPuC9w7Fj1wc8fHCa12YmD4hLdi4FYnN2JZhouMvvpWnD47E2kfeKS4JUGPepxpT8UNx6FBq5iC8h8LctWK7o",
  "key36": "4CFumpnZkhyBkG9uQMtncK8N3MpRcwcNWTeUEv218LUrPjnbjbYgAVjSoHiAmVFfmzKEaYGMNJgrLTkc36VFfsq1",
  "key37": "26FTFiGm5ToUwoF2jHiq5ufw6y5uomcTJCtsrjnLBqQELvqgCkasZruSX8n1Nk8h2JqWUZZDggMdbqMg2NQrPZW4",
  "key38": "54X6QXcy13BtuNfnPB8gvpJ9J5fMq7ZbnbSTp6JLeUUus61nLPuE7KJMhC1NxY2739AGUUC4moJ3AUkA34wRYirK",
  "key39": "3GSPaDJUa1G6FDGG2X68hHB4BMhq4oEbzYeWq5etypCRuzsbSjkoszoyhHwsQPZwCcbJ8nRoyAeVNXDf2oEnw7zA"
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
