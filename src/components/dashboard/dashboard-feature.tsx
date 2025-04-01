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
    "36xfiAU58Z99pNVpsYEKN7W3CjD8z7VKpgRd8XFRPU3n6f3Lc5wRUbj2SN5qtPQp4BAP1hskQsKYSobemhGfzd1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oY11MFNhJcVVSaMNDqzWkFGZs2V7ATL42xo8JxZMb1vMawUjGhjqyQ6uEVGjzYuVnrnBDExiUG49XUkhfPinjaD",
  "key1": "4eN1rUhqJVKqDrBSScqPrRcZMP3frr6vfeMzUFRG4eKNHzFGgxyyb2cQsyP8SW4oTUpXipYoHSz1PQkSVDCWPL1a",
  "key2": "3HNK2TF1zY3ni4CqAEzLHQExRK9xaGdaTarToZHpHuCuALEteEijk8M8UNSdKGDutpPugfoLgJHexDm7hgcmjdw3",
  "key3": "5s4kA4HuwfouXBgnpHF62iYP8CkTbtAzQHvPR6Li3jBc2eCmcGy9g7ZtjAPDcgnU4Rn5WLXmDSRMBjwAJXrfGN3q",
  "key4": "5TrQDAJu8Q7SdtyupcvvPiG6tk6duaoyY2uD9RLEYEWoJ3iitAAM351AZ7fhDPFGFVq3wbATtB9eWp5mWshy8B8L",
  "key5": "4wM4Wtbs2Q4aYG2nteXqhYmtZE6GxaG7EmZbX8r3mGP77rJKQj52TvuXcF6Y5kqu9kVH7cbk93Hu9WWSLg9j2hhL",
  "key6": "93hPampZ9U6S7ZQkK3Kv24bpg3u5hEf8Vt1ygR6REohctHq7FNjgiF2UQ2nXkP7uNFDtWm7TU52frCfVnWrpywn",
  "key7": "dZokjfdByTTqYsbTjEWyRiMt5Sfa4RSGR4yrnAcM43GXQDTcC6aMJBfvxrw2VJbMXEYK9n7nKS1Fcm7b89Caex7",
  "key8": "8JbVG5pUjPUvJtfW5C6G3WNFAxQ5nuC9h2ACofriPzrBrDi4pNynvK2G9rW1KWgjZtp2HxpyzcLSjQZ6yezUCb7",
  "key9": "5AvKsi6Lmcf4jbeFuRNgdYRX2r9L3o6nUmtGwRYuEaJPNAhipxKeEBPFEC2WXTtD7JFe2BkKt659zuTmFDfpQUkF",
  "key10": "5orjNQzgZq8x2tQ9n6AeTT8g4zZ8QLGyWzKSrA7C8VtHuJ4fuGv1FNfHT6BeP9T5fS8nG4rubv5mbCwbcNnBKYrU",
  "key11": "2NQBLuh1pDWWx2d1H5ufGdQtP1RJhLHajSXyyYen8DkN5eHanDkRjbVauF9bv5zTUNGqht4zGig9rqaf8KGv59pT",
  "key12": "syZWCZkofu88SsvatNuQbFJoVZ5iN7BYDnyfD1XkhxfLzzn6PihyKVgtDK4j3pEB1Lr4HmAC2GfwmANSTto4FrJ",
  "key13": "53mKQJuFwaJTKcgm3iS5L5XjE7KHW9y2s2XPW6b5YSkBTUVPWfeuZFaXzEeQZLbBaKuk5gRbTp1ToNf5G4PK31c",
  "key14": "2hCtNCkQETBw3iMYa1FLtRerutjEiUhdcTCguwunRau1EMCEVjpvYbNpZpe6VMtfNqHofXQY9Ge7kMbbQwyKECN1",
  "key15": "5at8N2GqFGvDHDK5whKoptUTpmoKqxpw1VD71jHgWDsncwQPC9iZyUUpypu4VkTHaj7YhenwjKVQHFPHes23fmz3",
  "key16": "4sjbdctUdeRmBeE1mjJ9tLshdvtPZydrdwyNQ8vS1V9yx6oRpKcnGhXLuUDVA9Pz1osjmPUcSRGUgdQKQS9f88av",
  "key17": "2Eq59UD5YG9CqMYNQMeu5p13GZqjnv8SebQaFYf1dDK1ZyVCaGwRgCBS9ap33x4mbWoxZasbDEixGZsZ7gz1VfnA",
  "key18": "2zkns2LMMkW4tmZw8sARnyx34jbhrT689jfLhAqpkAZ4PCqFXkSdv9Gs681HxZaeMTxHuuzyBtZqQtFcoRAPiR38",
  "key19": "2cheuZLc5AHLGuzNG8diF6K3jeX2TjKGEqxwFCERMNGQj6Aqx4Y1r5QBAK3uC6kPp2BiSV7QhfMzFLLWiZybZZuP",
  "key20": "FkH6vQtUQqgQGybTSMgoMsqGGnHh3zW7XvDTi1WnNCzFtwrSKBsnCd4ToJajfpoc3JD3cp4FDRtXZKyoGHNoH91",
  "key21": "3LvTNUFSLUUHPBCs6LHDQ56d1U7VLh3KCR6EcqyEwp5YxbUUR2vLE4hZna6NLXo1qdVC85zLQpDxvT3x3vFshAk9",
  "key22": "5H4GswtcdXLCoG4WfwLYgUZ4Xq9bKXdqddALQ43v8C1CexgeoHMMGusGcMm6h2duNEQAmL8i5JVG2oY9be94igY9",
  "key23": "3uZoPaqrkaxs7bR4tH4LhnTzC3GdEh5K9xTyZCvHaCJ7o6Hhbau3gE4QgEHK5beiVD3aC4wrKqXkKcLXPXbA5XrC",
  "key24": "3KZjn2nZYhkVwhdfqceZKAqPrAhjkN1Qa5szgeoXrAQzuaVBkF4EkfxJmc5AXAHLRmN9h2L9YFXUywxgT6M1amw7",
  "key25": "3szsSZE3Nu9NXtDAvZ7Qd24LgVk6ryWUmzg88y3JwL813CptPzAFLyQDUWavi8qVU5zTsFpmaCrH6K7R7tDW7fu4",
  "key26": "BD46yfSiRiNehnDhvfLjQQ1RJQFeK7XBqa959KN33vKH6kwtGt6TpxoNtUMXSrSG1dWWJfSoANyDsFQvsEJJe1Q",
  "key27": "4NTHuibPmgReBjSZt1Fo5GSa4noo3rQXDdRewpacJKDmrE3LcAH9urZs6f5DALcngb8k3nNdfBxpYqV26prpuvC7",
  "key28": "5hQSvFFfB5KRD7Ku66ja47umCJEdBvVnGxPGT9vt2NGJ2f53Gf4pJMmgEfoHvLR2ESShscH34kSMtUm5bCyHfHB7",
  "key29": "4KFXw6FcT4L5TBvn5dkEqd6qsKCRmaqk6Z6VcsJR42JzxqSeqsbVEW1d7jZoqVMyeMK9LPP2g8bew59NM9C7JoUj",
  "key30": "3LQmRPkPjPLxEX8f7asGrMZHKd3bNcJpZtiomDRrHXguQQFULE4Jwzk9GTRa8Zqq4Ec4TFyuuQCWt6zopp9fBmYB",
  "key31": "5MmCDBmL4kj7QTWmR5RSQrCg3UAThwpYgrPBVqvztGCk5o43n1kJadvBMtC532w9bWENScAgR1dsZrVzuAqY2Sjs",
  "key32": "DjbFGkwUeQMzmmvK1nUZgxH6RPa9afW39eSjxd32G175ahe6V3RceZ85grZ3uA16SoVo8mSpN28wa4QVuqDh5KN",
  "key33": "D9hSwD1nP1QMsa4vP1UrUSkT3akUDDw1rTma4aFB4XYoFFsrq8PWWPyqCE5mcXokNiRDsyVgZ1iSSvubbcnsaNk",
  "key34": "5Q4FBoGTX9LztXhMssF8Whzbvss3SWrkEHzuqc1EEYDsP89v2tiEPWDcBRnpgAFzmhVSr6y2FpzZwCmMqckTNjQk",
  "key35": "4QHdp138fVw3VDAKvayBUQcT1B3XMro4b82hAVMDovQ3uWudPYGzcpLBWAEiv6XfxPam7n3sdWXmns6SUpEASGNd",
  "key36": "5bWjdsMagWThu2evek2MiRKnJruCktQonFpjAZqsxfc6bVHj2UzepCrcoa2fyvt2aHLU6Q1sEgviisz19xgc9MTE",
  "key37": "4eSPEqNqw37aNNWx4RciwqsvroereTXb1hCxbiEPgBP8W44LCxMbixpe8hYLzD19ARQ1AKGVtpJnV6848GEfoeUN",
  "key38": "4wqW3f73jZ1YBzKq6nuxvDiW2LYxHvyEu6dYNcQs1bzumDFGTB57LVzgLvwQMTeGGaLzCjDmaNR8sgSNoYjrX994",
  "key39": "evAMDFNGKbd6uWQBvBJZ4nBbdu9aEPpY6579kVipLFr6ncPvaYgnxM8EE51Y2a98U2hTBddHVmbyckp4Tj3aGiR",
  "key40": "63cW74CzVXiN9gN3thM1d8LrMySDHfLH82hFe4cNmqEvsjYFH7L77GjaeDNQKMXkTjaPMVKTyW1Mqx74DpzpCng2",
  "key41": "3DjsFt52SsHxDFBveupX5G89MgBoyNJtqRsmTzwUpsAGmCL4hyfpPQyKoWxQv9ZUu5vkYNjEw6bwL66zvuhiLW8P",
  "key42": "5tNqE1t7NfnyDT9u6CSUftuDQbTrRKDfJcQCCWJHGjvDy5KaU1SbiNMVRJkvjP1Bqjk4dQeeR29trKtonJxDgAR6",
  "key43": "RK6bgcEBpjMK8EHVF3FhoJL6kesajHjpRcJvbeAYyXrRzEVkNKtkaQnNgf4vS4Sp53uqxatdW5s9R1qrFjEjsZf",
  "key44": "cU5x5r3GVKiJLLG1246EwSwW1y8ig6DS8XCC94MbbF58ZaVpRGdZgFqDHssqY4Exp2iuGiYRQ96EUZ68DshC9ar",
  "key45": "5SFQGi652af48WPsc4Seh89UctsobdTxMGSh49FtnqswkVoEjpZDZmhMd57cDA1zAizmYiNv9GW5NExWbaoKaJAo",
  "key46": "27rG3Mq3AL4R9ievWMrEpDd51S9hS4sv1ZoVfA747NXwUuBZv7cTUyeTEdNxpDL8hFjqJcbEcntkA4RMGxjZqEkS"
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
