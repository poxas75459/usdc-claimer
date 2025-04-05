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
    "BF8RNggTqANbKDapECUV3AT5EbDBEUmknMFjpZnXgtFvEne8nGJD2Urqr3JCKz8sA3n1o4CVYrdsVJ2yZ11AEFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42J8uQTweojmdmoUjkWMyXG9DvknaHDqJq7RKppwNAuEKQHLPmxsucweM8F1SpMzHbBRAdk1hJa4zv6zxQVxpecU",
  "key1": "2591a4MZznKvHsn5pGy2zJpjP32GVByyfSWB4tNySB5LsR5nfBbheFxxC9BYXPJ74E9pdpzhDt1PAGZuJpxQLrVW",
  "key2": "4Td5EDphAv8A3wo8GGr5SzbQADhs4z8E62KDF6RFFtN6aUUCV23sZs9VuVW8BAhh3Vsoqa3xvDzQYT5uJrEdS9qA",
  "key3": "4y8kurdvfwRcT1GUPaKXSHudJ6GPVbggyz6Ye1ZHBJPUV4VtUF2EBFcUfwLcZDrNprzaAJcbJmfa5AkrD1XFdiR5",
  "key4": "3zxyahtZ5JQ9uJKfp1DeLr9iUESe7VvwddcWfebetkNLkRoz4Crdc1xk749qaNN3rjzNsWSkF9S71aABeidUFo1k",
  "key5": "3AT5my66kVmCSi96P2y9WFqBGNNf2aR4yAmGU9DgafAGkqKuYbmKksS7xJMjaLGKcC4uDfgnpGFxg4mzWWcgzVuw",
  "key6": "41V7V4TmqDZir4FbkRkKtDVpYzzYjsSwJ4qrmFq4iKzqkjNU6rLkWxXY1uzTyKX1JNdDeNkHvMFqso6SUfpf2NFB",
  "key7": "33x9ENsgSSrqnYfAk7pK2sX9Z99dnqoB6ZWBA3K2LCwDx2FuT7k7vDNxnJvcREdujYc1hA1pSto7yQVtyAjqsTgL",
  "key8": "5CST3vRwi4g663KMr3LUgQfB2AJXnE5wYu9eti8hwD7YujFBQbDU799NN7ucoYkaNnMP486pqQ4ER6EkLTeNjo1q",
  "key9": "cdgaGc6Px7FH2rjbdB4x4FZkdReqZweeSRfa7KU78n3ziuLLjHMLgKXXzkKCyL6ycgT1zRzpMsKp1XGRXTczAGd",
  "key10": "5T3ZSqx1ur8QDcq3g1BcJhepYiro837SfmjHiTCHx4iCMHSg4cVqQJVS4C37mnEzhZ4rvMackkKYX4ZGtqmmELo1",
  "key11": "49fhT66qwJJ5SeTati7Tkqr7RomrrJVDw6Gd9CHtpYcoDwG2pyiNkaJdneZc9ddyZ4hdDhGANYyVJHBvLUqEFjx4",
  "key12": "3h7VdQPm6QnPyLNkYNfH7V2Mv9Dgh6wiW7Rb3vyRj1JeMdwDVPNztxNBmQgzA1sWe8KG6Abs3WT82EvA7hvyVSZM",
  "key13": "38Y5hZw9As8Q4YBwHAHJLEE5WZFFNDDc2QFiqQSsQK5f5VT1E8vki9QubzJcdd97tbMTEZBs74Fa9EciBvn87gde",
  "key14": "5NAfTTij4ckEhbRym8qpHUC5rd6fwCZ35bBLrR6AzQG7rUxEHnHLuy8KCEgaBgQHCR1Boq5RNtxwtxC9fSz4sXkd",
  "key15": "3vnuKwkB4bK3JzFGuaDqPUSJZuCgi7ow8uJ4hTwDG9LU4tz6QDLHpysxFehtt4axPmHyUqG9gCoHeJjj7PqA5Lme",
  "key16": "5kSsHWf41Po9mBcFVhL7Vp6jJvSxuBTLZf26e4EL8Hnv4uELfNUAoBAyS6ojem4RKorLDXiMdFZqSLZGWhn2iZHF",
  "key17": "28Uwz6hxBTVH7s1gFkyfyUzSi4P8Xg6vnnrXy2Pfd9zJXi5zCmonmFkuL9t9876pYDhNDJtEHiGcHifqgX1mvc4x",
  "key18": "21fsupQwJL9o7wFkbS4MAoXDnTHEXeuYWyYCrjP2SQ5pryaLcJhMUxcYfCbqL8SeWb4QM5RBWmb6otVT9VtjGgA9",
  "key19": "HfRZSU82AYa7jrYJASbNieNsb7rM2vMFHPeGXFLXKn5ZyUivpWjRxwZ5i4PPE9rTd87z2sjXkCkSgg5mUunCGuX",
  "key20": "3C7rAmexZHxJfxbx1K7Vwkw3wMMMgJwawUNcb4QE6y3NQq5vqJq7eKkVXqNx7wFcYNWS7K8kF8A9d6yrsFuUZMgZ",
  "key21": "42mw6quA2cBYxddYTcAHPDE8QasUB8XMoC3d6SGL3ouLav3QZ2LYEzt3oW1cmLwreCZo3P7jY6WURG157GAUUTqy",
  "key22": "2PbzhLbghXvdsQ3tQA15HPnTq8v6JH3X1rYsDVhafy6LYuDW2HqRpdhzMGo7RqD6n8eHP8h9Y4a22zGF4Df14eVu",
  "key23": "5TtPY3k2dRZf9HtqLA5S9QWvL5X25DSQ4tBZQGkjrpqD1fQAYMNWDJiVccz16Q3g3a5gYcxttwxZ8Vvz7zqE4Ed2",
  "key24": "5dqfHV6D2zvEuJFYyADYabWdBz7Prssu8S4tKkaRyuHF2JLAB1VAPeh7AQehh4dPYaUPbkgEt4QjYQGxzS5bgL9N",
  "key25": "2PzfvNQTHjDVTKGLhdx9eS4WfoQzidXsFB5Vwk1ZbShwZetfZCBG8caeghAqtFaVBR6ij8DRwU334hKUe6k17SB6",
  "key26": "3GNF1z4ygURbG9rmrCZ9WWnxZnnvM8zSgEUiRAWhMdfLZt2SSNb7c89mAkk2NFeGSX3MykuapdwyTohntsFGMoGd",
  "key27": "5JZgr1ztj9iNHcmbx6XjtVgfR7zhp3hNPcK5LFAxYicnus1E4diDQwRYpRnyViYSsGrju1Yb11rfNr43qwqNfBeC",
  "key28": "3uYeqLmaczHJBuZSSgJTpTLGSJmMUDXQBJS3ShPFoHbWX6B8aKWE8VhrnyVYCnqUfP3bBq4fv8yJM4Uw3FPqfp7i",
  "key29": "3ZijnqH6phopCK9tH7W83wos2hZtUwcrMrgMEj9Jd5KC5tF9q4kpVi1yYUASu3fmHenS3nedRmSSoqr6qSsaju4A",
  "key30": "4taZma1apgnzx6wRFT81vJbfZYPGxi3Wtp42sKTdpS1275ozJhwmidNRMRhbMm3WffHH5b7anDjKhtKNooptAr7h",
  "key31": "3ykNAg7Lb5ANi7DbSM71QJCBLqMH2t3PgcsMtU4U2y5g9XnQHj7oKs4fAQ7pLQRUMvBmEdaRkg6fH3qT1PN35aqp",
  "key32": "2ugwKLzbdgqHgRwN8kLMy3MPgXB8KTBeRVwhhkjhz5UU8SRvhMjgGSm9udDrRS4DkLAZS7PECEHxYoUEDj354vPs",
  "key33": "3GJ8sx34wK3qF5XVMzJ3CEf944EvY97cmi8MxtARojFQknNNRWiFsHbAuFR1mPcCH4F3mhMNd6fCcHDh8ckQAPDq",
  "key34": "3CwZLBmxaEshCJhyLhB4Sp2RgPTHZVBStCBoqrY96cxpVddSLMB4jJV9ifbAhWvsiVLFYsX7E1ebZm2uDniUm1uL",
  "key35": "RxpCLTt6HnwHP9gjKgfYUyxc9KEN7MCHfsxRd68u6BogpkJDk9JLnfXb6QGDkgZMLWeM9Hb1o52o8TRp4e9bhjV",
  "key36": "5waKynv9ZHcfwEGmHDamrb5RGAVZ1QhWG7GzD6FUwKJggME7sWFc9jVMLmRvPCtM5be3CXAvRb2kEunLEAPmsHfU",
  "key37": "3HZEaE2CrhB8JcxT7mYi9XmRftM9uxtEEAkM9j18TLZ9T2dDVD1TaGgfpspfJZ4vvZxsAxM3cmWprLsWHF3g3VLs",
  "key38": "2SSf3j3WtuJEhB6tbgH7pj4eTHHwskUBsUdaWoWyNoDdDXRVTnKijEJr4igGH5WvgDkF2VNhpNRYBEvQNPvhVH62",
  "key39": "5UBRJCfHvd9auMEK2y56wcWjWyr5Y2BFBCMYWg6qXSSeHm4MfmQp3n5up8r6v8naJ8mNuHjHP9aQk8RH2fFZSCt4",
  "key40": "Sr5cfLRmzNKCT4DCqygX29GWq4vo5UKx2yYY4Vj7sZ9boBuAuNERUtoF2UHjkdNJbrGB9eCpz98Ry566w5eJr27",
  "key41": "3iNEFCYUKVf6tSTjqRuzUBJ8zDyaQWpo7cb663fMSjW7dV7HQZAku7KMKqs7qFfdjf1PDfE1hmY6x7Uu8CP8zPSR",
  "key42": "3H95Bs7YzKLSKW2gxDHvtaPwmjEGifi4DqDVFtvMYmy6CBmvqm6VuZbpTpdoA1BMXRcJZhketjFXgKWbgnY4wM9L",
  "key43": "5VeJSCrDBdQFY1YYMEziU9Pe3wViMFEF3Hf1d9HE3f3f5hrgDMRwJspQp7GyVSA3va8AkmZHB7A9LR3Ta3gELxbK",
  "key44": "QzCeN4XgoPGJZxUpvoH2AvsLE1tCUGVsxNhhoiEhv2WWZHMd7qGtmAaUV6zfTjTmzsxhBW9J5bvweC4kHJiMs3J",
  "key45": "2137nEuBFAaJBvMN3Y1Lm93gcx2QAyPYshyasS4XRpzuoPwXFP89Adpu6sbHfcWnVBa9gqh1KumU1Ded6NiKd3iV",
  "key46": "jqVA92ZAjk7E5a8heYPHjbFMY22bR7twukWfgBjFAEVsQ5JFYaCoHBgdX79V1G2CDW8wraHbP7TQ61tCgRRyte5"
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
