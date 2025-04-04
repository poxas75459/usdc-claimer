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
    "2yZu1DqQAUKNFHcPkcT1BQsSENy6HKmnGp8Te3c3HS4dAaW1B1fyBgZujyrL9svto5hQNUE838fofX7qyfv6Zjpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oiMBGJBJ5wB4dabbYXG4Dx3tgGNW1LLC3nHne3UaMMVuD3Lxhax1UpNuB3jJhRGwzHY5MtZaPPrKzGBwVgJAcxw",
  "key1": "2hUZqzW4o2UixoTJCESgSounZkhErR5gG5qrAeM3JMsUyTc58TEqFpu1B1KjRYX3mUoCwExwUWaPW9etwWd2Ge4g",
  "key2": "5AxYgoEkysLQQq7SSqKFJoe6B6qm1jNWCbS9XzaXeaJQMRzKgcXMMtKi8evgB3ZhrGhL7X89ZYH66SegLczHNSev",
  "key3": "5dd1HuUsPVC1HgCBn2y5fehVyGK5NoE9G39ALidyuq2AN6tx8y6NsNfVHjFe2Bksq1cFj3ppA7HYu4j7MX2BadE",
  "key4": "5yYD4yxSjnQ59ngQWowzk5QzPfYyM3VjgaSgJB9fEEuzn55pG4CzR6N7U71ajEdvAgrvStshcHcwNhMxFaXiNzTt",
  "key5": "3ZGugXQctQCLw7mYgXqudCdg5cpLFVihV2kX6DEHMearHmK7648yrgo1iGi877CqGgWzQFnzvdiXGfj7aepJfgKG",
  "key6": "gFGGP48PDkWA3cPBxK27cwHYfV42qNZbfjbo2LkFXQreiwric2JKTm5BxSMiuHkeN5tUQedBgBsJUDryPRCKFfV",
  "key7": "4eHJ2bxRTWWtszZJSbMTLcM2L2zx8AWLmg3h43zGBdhXNVRbVQoPv1iJS4EejSTRq5b5yfTWTMZp3Yp3KaSKgzKe",
  "key8": "2oJnBvXkh1jTjsEj3MyL9DrdC75xL9CxQg6nPGhpQxjqLanS2wXvSg1ePGTWEEavVGt6pi4uQ7zfxqZmnU8YAQwh",
  "key9": "42aHGA3deXMbEYPvTa1h5Cd9o4AbnsgNGJHijZTZpjJEgzbMHDDhWTFT23TtF8ctTwJTPb61PFWtKoria1xR9FVC",
  "key10": "sevwWSMwSd98r1CEWFdAPdz9N9TMZTJ188auu2AkYyCKzc1kcj91hpLMYiyQkgQyobjGkpnSAabjRhW4srt6fGo",
  "key11": "3LUA2oPpVKzxMyCramQg99Jsp7S6FjZmS7tUGk72dK95XUSAXdCRtdFTaCw88YSUYVZ3v8GqhPKA2gxLLm7W52kS",
  "key12": "42jS6xRHYmZ91MPZXoJtKQq7sDH85jLNJLurQBp3FRYDPu3gbBhMxNSSGjct8RHvFhzHM6BMCNmeJXWUr4zSZfmU",
  "key13": "5MemCyHzkc2evggCknvzc72wcdA7yKZF6enKRn4BDFarK9UNFPLQapnZgaU1xtCngH9z981dTuVzTRZZERbwYZv5",
  "key14": "5bYhp5ozak9pGfAn9TZzhNqNFLRkzFv1AqsBGGNHZRyjUih97bHznQG7VaSL6oEqtCwp193p93QS9nTKXQP4W8T4",
  "key15": "3jpQhaPBu7GjqegCuWEiCfUdbmpd58jD8cfuRb7MWkA3u9xEQJCbhwop7B1FLjwQxd2QPnZQ6ikwdHGAM6M4rQJB",
  "key16": "zKMk3nu3iZERG2NfSL6Kf8XqW2j9WRjZoRf7y4gE4aDToGatPLpTS9SxH5s2dDf62ff7XNmVGtgXvePeS5MnoQU",
  "key17": "4kfkgSQiSpH8rVkVRDqzXJMn1UXfiSTmRnsm3DhNqyt4GN8fQWRYmj6yexYAbhs5vtuxDrUynh8mULNoTsc4L2pU",
  "key18": "5rhjUzx5yJh5JvQ8QcdaYxjf3sv1EvWj4HBZfN74f2mLjUvBvEyPhc6mYkj1VJaN6QYVr16CpYMFNUEeekxhBPEa",
  "key19": "5ujTHiYuNnRBUK4GbU3eY3nTubp8GrGe6ZgBpNsuHP2afJzJTk6JZM2B2yJJC3zEJnkDdZaWB6KSFX8izjoARdDP",
  "key20": "4cX8r97wvpqYDjN3g6wd14WkZYBZtCMSaScwtrQphvRUUzxuVUYG1ex1AApBRa7hv6bAxkPjuk9NGen2BDNBexWD",
  "key21": "4RhETpgkSmZk5SPwAJnYM7BwviyjRFzrRFtxaJsp6ZQHSGRnxTE2Z6ebab6jofMG4T9Pz3gSTrpt6pT2CMNeENvN",
  "key22": "2mYgh3yGDjqTnBpoP4r4p8h62XomL6tC9PKi1UPqZz47mYsao2JPgvMvKcJinF1S9zQ8mLkLwnL4TVPsxAUhoqrR",
  "key23": "295M8yU2EHFRQkWF6VhEWv5J9ppQk7CkwhpHxkjJ38YNMifXgCWxYECapHht8ZKdeMD8AxJDTcipya9MQvcnXLpK",
  "key24": "5BpZ2U9jfdJoLGxEz6QVTeDtNTMFhvbBqFBgT4UYx4ZNgUM8gLy9AVncCKaQ7knHE8oSD4rmnhgy1nzySWpyp88e",
  "key25": "2e1wX2sbqhugfE3NmSNWarKhRKCL7S2NLKyjwsbEoVwNdxras9LM2rvHBr6hbDhHMNNc8nnssTreqzbG7BZDEek9",
  "key26": "Js1JrQfkKVKFggYhCA3GECxaTfFJ6hbnHwwue5AJiuBdg1G91t6EQK4vD34nJwSAkWDemTh55LNgk6u9Y1oASm9",
  "key27": "4NWgW9sWwzySjmpLCUiJKnuVyyuxpyDsU93G152XgWd4SJJwu6wqJieDL8yu9Eqf9GFRkjex3Wo2pMo5w4gLr9YS",
  "key28": "22XHtCFGzv2qHV2yRyk5xoZF6749fGBSN4Gw54EGyRntxmcaBw9dsMYQ8TmY61A5VGoyHwD3EYkepzyNM3VRHNtK",
  "key29": "45bgcaLSrpdydAsdwKkBtkMdR6Q3Z4Dn6yD1HfUxaMV6in6NJLbzt5oeEPzieRnxxpfzgDFpxx7rPEjMGu71DAac",
  "key30": "5q9RU1QHDpEu3WqiCEUHiw5ZYJpvbByAj2Jri3DB7huZnonYTZdh9YBJjTf2GCV3o4xpUSFSVorAXHiNjuwvtT6M",
  "key31": "3qfCkWDUBYy8sHRfVuqGMHzCeAEbyVxaqgnEwxo36gvmH6zvKgGH8xHBGhG7pYHBP63YYDriFRt4Am4xAeC4ytgK",
  "key32": "4CkA1Ks6o73DtAErujkDdGEerS8cWCdkBwrs6gXjuNGv7wKWtE96fEtTpo7WArKU7VgjNXesryxdxVG1yzbydpaq",
  "key33": "2EFFRSa3ungFbpKvQvzkEH6JH7mPB1bCHPcySfZo3PGv54weyqbPQyf8WAZG3bAKmjoDKiHi3vk2EfpukzDPs419",
  "key34": "66BSjX5MzvKJPHDQbHwB758jfgti3Q77frUwCfFrgRU6rcZFSkN6BjEgc68makBFXjovSDJPR1hRmdeNEqqJNzeM",
  "key35": "5E4mCCtVcRfv9gRBngQGCWF8NCu7J7sjkf1V1yJ7GNZDSQuRAEfZ2VnVYekNtxtDbZ7ud1JvxhDVJ9TqppCf2Cv2",
  "key36": "2rt6CUXNmHiMuT4bkc7QwzX9DQ8jSUt1hFNuV4vv8fV1vt1tStEG4BQtWctsWwUyqaErFaJApyAvyRVDMFc629x8",
  "key37": "S2g3YBn3MxtN3ZLy7arE55cXyzxh4wy6Jxdg7tPEZoh3TiSCnf2QvoU2gQhVbci8y8aH7kqr9AVMD94sE6vYB6N",
  "key38": "4UtuSFFzaVXJ5uRx3yDE3CckLqM1rrTqLqqmpGCNe6mJPxjtA5QDEyhigeUFARcMxR19jZtmhvXvL49bpGGJQEpC",
  "key39": "3nXmtnQHmM4XyvkeeenMsb9atdF74kSCFFKLmrUaZcTune5JWKv8jMT554S4iVYwv4Rs63CRVhf4BszcqKmLvbrQ",
  "key40": "122WNfjAen72sGi67jNHreKK4VB7gRLR3bH5widetRCepAUmEDjAf7L9aY7TdaHFj497YtnzVVd6o8qqY5RKvxud",
  "key41": "5Kf2brJKN7WdU38bexPjS6mk5EywHvdtpfSUjh7E7dLDGusXk2ThYajYkaHmXeh5PiZaXLz7hCLV8bdtuxCs6sQM",
  "key42": "3CSuzWfcVQz2rw7Vhy8hj3SN5KQbJgUcDU119pZKuFWFRhMRViTeorpgodUWezfEcXL5T9EHB3dL8viekrMTgJVJ",
  "key43": "j5ZJm5iMRVW6Yp5cjtZroogHjcPgKJm3tNsDAqYYUvqvVQYkYkFX8XbjjBaqEFR9G4QAdGsgEy4bSsYaXNwTiRz",
  "key44": "3qRx6LvyoMhA5UdJ348ogkLYJfj57wC86d24iVdKxht6H4vKCPG9a2XobFLyChajL7QRMbAM4mUiu8pBESzMEsex",
  "key45": "8xsyhGFHEhvTVrXNEZwJyGfoRiQaM5diWCiXeoZudGPJNiQurNQyk764L6rtvAQfNR2AbqCAEvDu9RBv8EfpBBc",
  "key46": "3PMiz35euBpw7fxdWpHKozo8sqQqTJzrTHqL9jJ618Jmdfn7cxUyHXwXysr9xZFsXCXfqWZd8sMx9Hc3AreyjPGk",
  "key47": "4gCjkdFhixZ8BBwxdGiEkWa7S8HpPZjRmHn86JYnMHYW2KyTDHPu58QtjcuHUvsbMqy61vr7t2tG1E5aVYDgwmYM",
  "key48": "2kXevneZKRCtZhjaudH1qa82ixvwMrWk8FP6SZ8aV1rLCMeFJuX2ngxMjqaDT1JMxawX9D4fJgdeqkv3egjvteJq"
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
