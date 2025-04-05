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
    "3nhAsiWXdecNh6RVwMo8V9HusHY4DdW9kJ4enL4YHGjMoUeTjTTunmrM7XdaNSSS5wL7Zjyj7jAcF3kjnHARhAVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aVaha3ZgirkwtU2JaRobQCcnXH4WgjNRWpeKG9JPsaoofp8Ci33Ao6bTKcBhkQXY54XmZAK2atPfU3sRc3exfrn",
  "key1": "24ECbx2FbDEypnTL4n3w5uGcYkudPHBP5NCLjgzW4ghpnMJPRzBy28ynEhNvoBZrHYrUS3qsFGc5qRJtGkbz3amD",
  "key2": "37nx9WhFsN2xz4gSTuzzGXfr6om4K2SdDDX6Td3vAnUvfNFroAsHiZcEiJrufwc7yaKkFudBgZ8mxWSZjoL6U84A",
  "key3": "LBrKx9JvtQPdXX5QLbCEbjQ9em8seWpXYK6ovxPiKaN2qgJaGtZAseN866Et67jjocPkPqdW3TGPSKoiBEs8B9q",
  "key4": "v6pshc6xWJcTrG9JpqBMaXVJ539nFBH3bMLfw3jJCRdC3277HNaFjMgcYnVBVo8sKNJcDLiV17zMn77UK2nEKhL",
  "key5": "4DemcTbF6NxunaKGsZUrMTdokjMjZtFVd6UfPbNqCDgztyHsTVFBr8qnwTUGpvaCtw2TN4zNz9s4PeGiT2D69qfn",
  "key6": "4beSwwN5Biau7r6NJVU6GzUSyE458xC6RKYNz4SDWa114SyNhgiPSwDJrj8YZAcBRyVpPGZa1T2yGxxkWTm8JoNu",
  "key7": "2j6T1f2wgkDWbMZo1mSoK223naXt313fLAQ7cSvPyAgcCgQ2LHVaF2sppWhxm8ieagRa3hQf4S8fupXW2Yc8aBms",
  "key8": "2Am8trR4iCbh3cFjmR6YeXW8b8WAasPzubuYwt8LWtypBgkWVVKMvxydaEpanvYiR8zwoUnxdKPqC4ehiaYE2aNZ",
  "key9": "3PCZ4aVQeyLCRi31dSW18iGQnWqtEdU8J62Yj3PpSSYE1e8GJxNNuW8wDt4V314MsoTtLec7fkiJRfYDkccj4bWA",
  "key10": "FS1BQgqF39YZgQkR479GHA8S5HV8UDmexVfxLxX2VbEXjeRABgKxKjKH8AkBSDnoG8Rdq8oVYGEJrxjvk1xKz6a",
  "key11": "2ivmwFdPqNEQ3khhiePzFR7Pfb5S4kaGAiqHT652iK15AqPsnrhra3ARkcDHTn9sukFoSP5dauc7hcRCBtuvBBb3",
  "key12": "23s6XshJVLkkPPG3TcBTENhZDxv24NNtf1Ns2XFEjSGBcMRptWEBFquP31UkYD7cKLCFZZRV1Tz27h4fQwueVbZc",
  "key13": "5rySjWkZ7XM3N7sSdEyoFPddjwLvXk1s6pZ9xNFAgcZD6R4Abqy8sjRi9irmzzWkPb34X8s1WwyVd2JCwPUfknXu",
  "key14": "4JKDhg6e2vBe88KC3Q7G2dXhRjhJxnKGG14TrpyyuqEjtBs4vE6jDzhdDS1XNof7YgaFaD1kWJ8t8SUUzRuDXBeU",
  "key15": "QGaxmXacFFNRK3jG5W9m6JNkbTZBsK1qqAT1ZaGfbVe5DDUqBhNoMGK4Ez5kq74BiidAMQ9diXyK8o9LA2dfbJF",
  "key16": "5cS3sawKz4uiwnA9Fcyjf7L8pG2sQSwBrTsaRzxUTahVd5TDtHNst5WVRPbvMRpf7ToHuYi1t1L4ApkcQTHxiNE3",
  "key17": "2nE8ioZaENGvA2XEMocRxVqw23ydjFHSkQf7urHqYLQgoDzHRr87r46F6LALPfPZtggozXu5XLAjjtCNSKKqkCmQ",
  "key18": "KnJ31Gww19u5fephq4KaUzbQcQBnrU1HpVqbGaXvJWGAJi5zZJEmD8sMCqgJXHsE5hK5Kc5PTnD9uAc2nGMGVgY",
  "key19": "2vjw3tL8pHaZcdaYN6nZCx9gaLYaaNoXT9jzC77bt1TBKSv3izdQi4FjcBykw8biFuWQHYhiksgNiAvJZs14spur",
  "key20": "4wTLPrJ88KzarpHAr23aZbnzXLFsadPbgcBZtmwwh4bepoTGXoyqXtRNYSe3WMjqzoHRYy8uHtnFVALA3uC4391P",
  "key21": "VucTa9o4nUetc2GTQGW1kz8mpf8HgeJLmvq3DTBZM2o9mQZK5jTRX3SSirc8HDTWbRwrbDZFS5rQ2wJrrjrYFD9",
  "key22": "48tabQszu5EK1TvDL4GdQm2QswsuYnjRe9DVFSeR8srqNrwPZh5HstFTcrkx5A32YR8oWggC2QzAstUsmu8vqLoA",
  "key23": "3oZiCba2nZ8VEsXEMXH6QEGKtHmyHaNUYXKc6yiQXzHMUA8HDU5ThXtREHnzoqzMbSaPTnrbmGXkzWonKzFKLia4",
  "key24": "4zoLp9kxSjWjGHin67utCbV24v9xGBX2Mq7T5EcjEMLe5t2AHzShnxjonqkJfZKJGqyuzT6iHQ1Hwo5XCnuNgo2Y",
  "key25": "4u7YqP4LLY7XUvXnZodg7dY4tRpaVEWKpoXcPUWuZJ3AneyWZhekEU3HNBusMuWrWNbNYrAqKkjMn9hv99qpfFna",
  "key26": "4UsAxr28BNviziPy31MZ7HQMmDTGGgS9AE2cktDr6C6VVVyWskyRfNHuX9u45fUZok7LQLJPEjhrF3mJPsVQTcJu",
  "key27": "4bL1qeqUxAvJqkFxAp7ZjkdFpLyDcqXxHRPVPssYS4SZa4tKEYdABf5WHNiPxHPy7XmbbkCPGYvQgAPgGzLY21EH",
  "key28": "4wV2mGBys791Gw5FUt2xWZtHgKd7cxmK2szPVMeRdi2doS3zFEnj33xQ65NY6PfqYf6zDaV1vfzk7uHLpnNXFEfN",
  "key29": "btyxR6JVj1XmWF4gfiy4S4BvZR3q7Y9zaRBL8hBWLLj2vGjfBo2rKCSQQLYb3Mh8HaEq9Ka2dmmZQVhJZmMijrQ",
  "key30": "4Q295q9AnyKsbXA75UG3ZbSkMejYYtooMqcem5RQgDqnFHWDjtvLe2e9xWaHxAPDVcVXtA2qe8HZSCd4chDMnzfL",
  "key31": "2UxrKRZTczKNBZwYHknsG8X9Mmzcmg7kt9haG8VPMLp8bEGGs2fDNrq8Pm8kaWvjorx9gf6cnpDM6cZP8nrZW2dB",
  "key32": "2RPhjZ2KdrdfrLpj1EkvVCqt8o7u5TvC9MjAifeZA3fpdE5DvRjNT7PPQ66otavKXJpTdvbyJ3RJ5xr53dmztThk",
  "key33": "37eopFugsSYsNUm71NLx2Rg1qahLFkCBzm6MoKMwhfTfP3c9vrTTDw1X17umG2Y9wsdDw9w7gYAUu7fgW1BNEyQH",
  "key34": "48VVZ4cL8KyHcec9FRkWwvEDHZHNMfW84mAmZhi4S96g3HKpqMx4YfPL5M79nDLXrnmbPrZUChf9LvuR1W7rzZXW",
  "key35": "GMnPPCf1uRhbQFyBZaPegu4GbS4Mwua3dyEkzh3bmCTw7ZV5N12rJZ5ue8DHa5h2w53gqiw1FBEDcmEF6R3JGsL",
  "key36": "5NwggHLQJoYykNLFCUXmaKTCmU9Mee4ei71ZNTLT8S6imm3TqgHnECCa8tuzWEMugPLx93yDYTWPjfNfrQJ2xfcY",
  "key37": "7NJJixo2CZv9TWAiNC6kmMexpTHZDFyeAKFVJBJjyoJZikA7CEahJ1Wv5gJXakCkv75h9qEc4HYAcFsdLx4GJES",
  "key38": "4uwj2URtuZihBH7VvCqrdC9zi2pphsDMJJ1muYRfB2cSMHgzYpDuK5VBgdEG3u2a7p5VzBsDD4JQ3RMFwLVrhqYK",
  "key39": "4ACvZPTFH9L7xReEKv4nwn6pBzXoaELjTJV2Y6aC19xJGxVuEq5ub1YhAnG6PqUZ59QVQ88kYGkjooPY3en3fi8L",
  "key40": "5qY3SNv91wXi32HUyG5pRQQTtewB976cnopjHfnUcVCNuxV3S3nydF7neM5UB12FnNv1LfaZyDCyAUsZtjR2hzWB",
  "key41": "3WnCAqu3chXGxXv3xf5L7DiELmB6NswETJSEcXRfDkhSA1HhRTFtd4qgd1HLDqA6KaxTqmSr2vrpFfAra5ojZUJM",
  "key42": "32SpSrXCVJQpX7VEwSeRekNTP6xZtWowf4Qf8meWrzG6FK4pDXdeTVU4xB3KM67NK8sJMpfo5TuGvxqs9pGu36aA",
  "key43": "4CSnJXGdBPJ2coDncddf56BJFv8mAP1EmGgfcJDTo45xZYoiPbMogfqijH4jDU5jNxLXwvwoj6PfRmL9R2Ykgwx1"
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
