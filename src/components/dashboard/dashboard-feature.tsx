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
    "25JM52qgmHiFx1CPF4MY92fdceWWCyB4hE87YY7HcTDpsJhHnTmNdu1nTYP99rzSPbKH5xxFkdMfHEmrmMBzE7td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWd9z5wR6xfrrfvGDnfCYrXUM9BFtv8dBBtdVT4Uc6tG15EGtDbGAvMWUgHKxmehK2XnDApqEw8HDmbSVxWZSdc",
  "key1": "2ceF2njA7cExQhyED7ctK26VzJtqUQPsu1UZkfgCofW2MhTprfqL7Giv5r1mEwbVkj87sLRHqG2jxKyCxgM6S31m",
  "key2": "4Xvsr8gr9o8aBL6kmB1EaD47ZHiZA4YmEhXn6NNksYpVwtsheeuCboyyKJY4FjN9WTEfUwFA8NNeScd2zfx3fMLe",
  "key3": "3ub3XR2s4zJKcHzrQfnCXDct3vT1sntfMc6tmABBqRg1GGWzhYzkjHmLkj1VXUwCgDMxsNPW1QEprPL9rDZPhUaY",
  "key4": "uug9uwqna6YmKjFj8QoFLtJK9ZnWgzmAdouUk9qH3BXEG7CxHk4eebEnog8HCEewrLmCrHB3pA3QRSvYiCTsoY7",
  "key5": "4QauSkX6PxP6X7CCf1RrGMV2c6fVmyYXoKprSN1zaCVneKv1zYMsQk6jqiuSZdY7uyHRqoMVctNQhNVwT87fcy9b",
  "key6": "2dE3ExLsxwBp2g1QbMTWEyAfH8KD8iQRMUfwKzhfQ8ZvWm4o8CJgrjuQwYFHuzTtyTDrRsnciAQGGFDq3UauAmoF",
  "key7": "5hEu14FUfhZ2e3W4ENt6Vt9SrWKC3Jz7Ferxw6x94TFZZekCLTQtAqHauLmow6midFbdGcEmsVuYhFE4uH9fHkzo",
  "key8": "4Y4cQSiJAvXr72iQbgwoaYPeEcpK4DQBXeKArZZWqziTTj6FGUDvdo5HRvNpuuAP8DFD5q5m6Nod4vx6BgEUMeDi",
  "key9": "2McP44mpkYMFQgcycJqFmS9MTDgDEU9g7Bh5fsWtN8YuTvR7DdYp5H6XJaV9Z9ZpV4ZrTwhtgTPsP8AH7LZK8aMq",
  "key10": "5zLP8qS11uU6VD2xyYAABwU8cTgDFLP6FLwtNgBfLzYiW31X6EEBpRhu459jBsGiVC58Fadj7MirW2hbHnVi9fdy",
  "key11": "3mjHgD6zfCS2niWdnUn3oC5gsvzLYRargkytmimBgHVYUWkdN9V98pzY2sT5Wx3tJWrrms4hHtFcjZBh3eAZTpjk",
  "key12": "2SQmW4VuGTURRnSd7EyhjdxbtEz62jK4nDUJEKHkbwrWoT5upvYy5Ac5VL7RmdsdvkngNQEsVJ1VoWZQWduXUX2V",
  "key13": "5f559anKovCHnYAzBhSQzsXJWgjGWiuQz39Ehj8rK6iZ64oDWhYXJUpQunjaoMEP9UNnJhk1rquzDmCxsa2hgMuP",
  "key14": "59bxABRW1d24yht4yvTV18wE5JdQwQSveRuFSv6EVJA7hiWV3LRjJ78k4JNwyzuoF74uCxYZXhwTR4nUFDWS2A6A",
  "key15": "apmVtC3ewFKK4EHYV9abYAsy9MAD6ybwSFnRdHabvmqKi6WomR5DbfGCe6A3xoLPJMqy4PPikWsGnrqPmLcw8Vi",
  "key16": "3jpU3WvNnDnBEbR9NuNrdeztr19qT8JAxJ7TauDanvsgwJSCDy5tTzxPyGepzsg1NL6sB3gYnR1coFQn9FU8upp1",
  "key17": "2YsKga4qpgcXXgnvHq19Ax9qvypdrXrfuJzwg1JLFfkEFrVjeRtHHMV3Rqver4r4NRLb7XLjazLp7ZHXcaw5T4qK",
  "key18": "4LbKqTYxWXFnHTpAWsQeSuan6cYVuieoYeg9XsJxkBVo7CQVegGmNBfZ73Yhq8kZ8gPRvYZ4KXCNN4h7B5aiVDDf",
  "key19": "2ybhTJEE6bUcDYBvd4msemaQbWQcPx3hYLFEZkBQk9w6scpXJxjKECfHixcjKfF2XEzvB3oefGeaksWpSLm62K12",
  "key20": "jfcEViYHAExUD15nEhiQ1kBEC5Bn2nyfLddouJFdJiLuuHGqLLJEVcr4twUQ1Es8mozTQanVfWDJbV7V2DqwW7M",
  "key21": "dMYYaNbKnKFBcEpW6hStBM5nXiqVvCnMKaiMhmbrhNniGxxr5H7mGXZQ64oLhXtRYjAnSAJzDfnG1vPJ2nzG2SE",
  "key22": "45ALM8VLZ2af4i6Xvqx8wneruCgfw2mgRfpA1mS6g9n9bosyKQM4uyzHftG9TcXQfXwfsJGY7swXZCSMwYMUkAnK",
  "key23": "3VpQ3Pb9hHuu1fpcU9oBHEeM7LXdiNz4QkDifj9MFx5Wam9LeBa4W2T8qWp9x7z41VoZxLhR1XgGeuMr2vHfMis2",
  "key24": "4vx3nvBuniCLirRhCzd9s5fgm45TRdodP5aibeRQgsWUCzm8sK7MMt5VWFf2YC4pam7j9hHvPrP8tHTe5ppKA8je",
  "key25": "2yycS1pnRHhBNinjehurADamHjuBUCFkrmmaFvx1cK43atLxcDpqH5RjTUermRZd5oZhDvU8wHxsUu84TCmgdqDK",
  "key26": "8tptR6B6bTbz5Ude9dfNxKE5LvwQFgAiQ7gmeko2o4zN5LEMuvYDXR9Fr69XLH3x8hKwC5hNWyNhFC4U3wepKM3",
  "key27": "2ESYD3QQSKwCe4yDHxaQ2NaGdZoPNZYbVju6MRnkTbAKRTFYRVRRRVLBohTsc1n2wS1ERmYcyXVRZhwPPJ5afgC1",
  "key28": "2uYScasg3A1BisuUH1yh7PZirnPKejSGYQqyByXwVVV6q6Gy4yQtHkhzWHCn2hrVrCfn7KDoMeb7W7DHrpEXULJL",
  "key29": "3wDG5CP2UdrbUuLhMXzfyKJLPhpfbNuHsMTWf2kYiWXsD68jpZWCwwCZehkTvPRTJf18GqohKnsasczLZZXYw4RC",
  "key30": "7snnCWVnM9FDNtKBVewxWemVBrQ7g3CsTCF9d6ijQQt3yyJKbpWnr7QpW3iLwJ48SjfHtfJ48hyJPHutmnCrpoz",
  "key31": "649NfHX4AANtHHZkNgoTBL8JwH79MhvPU1E9bwzdUsTw6WEmr37bm3UTHMZcvDzMFNaY5Mz9TeEsuQBAj6GquwpF",
  "key32": "432UQJERgHAFgyTXJp6YbgwHq6BoyWs7YNPSjVQFSVj6chTR8kW58oxwQQ1STzxPPFXZwsAba7PAgzqxJmJo2Ntr",
  "key33": "5vPmP6LF4EdXegph3dp5MJFLAfRun4ufkpFUhrEqL3Yu6oLnqHv6X2jpDVqVz9TVZ1EYbZoVMbs6JhsUg2huohgs",
  "key34": "4dJXdh4aarJnxq4ZsP6DuzoAUNagJ1eWkdooFiWx55ZVQ5pPZMDaqutrb9YSXpnRK9nR2ir9dSBgG3tejhTQo8aB",
  "key35": "2aq9hf14ti2S73snWvyABGX8QqpxX34oU5AoFKZ9zaja18j3Hx6DUXuHtauVY6VELLahwbW3VfEWnqHy9JMQ3ABq",
  "key36": "afjY968UKjtDoPwjmXWHnZXFvrjXBiwSFT6xBQm2PjdNmyLPyuf9CQsgPoyAqb16tYgZ7udf6FPckSDUnEbT9Hs",
  "key37": "2kNQ18wiBnAShWwzZtD1KvdJa9CqcC5qZdZk8Z197drxx2qR3MwbAUawu7UHDdxCkmSGEixTGGAv3gx3j8MwK46j",
  "key38": "2cVYGfmBfHA5dk3gEoZ59jBgxULbBer5XhGvJjiHwkVTEbiayEmNup9HLF33iSuBcg6YC7DhQNyJeKdgin8XFxPZ",
  "key39": "2cGTnQEsWhK9dRMJWUQZ4tVZj97UnWQjJvx5MM1Ucq8zMG8BzgHZvV466RGNe6HdmhcL2X9dHBkrMFLtacdy4Rk",
  "key40": "WeE26GQRQsNqn2qR9CXgf1uBgFt7UtMm9Rs5tS9Q1Cq4MJvBx69P5Ui6it1yn6x62HGvnf5VBJhTFZsqY9j5DCy",
  "key41": "5Aq3GZCLpCu3tin5XpqoN33eHHywfmmku7Q4euJocLmdTzbAf8rc2dT187q2Tvcemx3b5vAtzdGTCEzUt4fb1tjx",
  "key42": "5xqidxRsB5FRtDcC6cFsTr6GNxbUHTn72nW6AJ3NYwRFasR4K1tu6eFpoYsUCU8F7Ayw5mnMYtnVhKEG8An6vw62",
  "key43": "mJ7Ty58pYgpN8hH6ZkV6mYiSUw2vxBHBjmo6uT4sAeT3Ym2LgRRqvq5M8oWAor53ffMRrGe5fEupnZpuj7b5uDx",
  "key44": "3MKBDCoTDyJXD3pFoFScxddsWQhJXYUy4U14nUL7SiEYLMVdTKP1nTqPxPJEWVd7wsgWYCTapUsB4FEojk8xGrNA",
  "key45": "2CcPzP41L4XKQaXHJVjYkis2CVC1w3oEzYp1f2GCAtWwexDhARpojLRSE6392qgfiyUK1hP8eD1G4iSjAiPFXAYv",
  "key46": "kuG3WZZHWqbL9jTdpfdg2JWt3mG8VjTenE6QUTT5vjuHU3LuZ2qFUepwBLy2Qz1gCpZyAKZFCrxPUJGQrB1oUHY",
  "key47": "goF1Aag96rTx4cyhBJ8zbZrN4uHPdPv2341pZcYUW7qLSEWKW2QgFUYVq8KeTo4Ei3gSsaCZunqzGrkyftFGTnd",
  "key48": "YcS1BUD4ufifwLqfwvcc1zwVu6qFH8kvL8LnXD8U4QCXt7xmLDcBcEcNqqpWtZwC1VmMag2QeWeSSY9ymXUxj1S",
  "key49": "2iAoK1Ui8VFNyCCnQwwdKhgePv7B89FhH8EEHBCh56QbHYPRW3FTwR3C3D51s4pqZ1neP5EbzZuumG92rMFYx2zM"
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
