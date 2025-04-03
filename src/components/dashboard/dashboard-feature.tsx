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
    "3VJjSHPjNmFCR2bZ8petomupg8YZvaaMydpXM4CZrpSuKw1yYfFrDJwkK9JYmS3QENCKrkJENbGowgfJoowvWM4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5rEgXEqNWM3PvYDeKs11bYtvQKF5QfpYcnkU9FgTB7AyHURxDtLre2HUWMopCami4yxzUDa7W2o7sVUmCvR9JA",
  "key1": "5iEmda83UQUA23zSLDt7VZ5aMJ5AieVMHGd8hv9TkxKRs3hf4zqHjeEPfURHRgkSnFuqgRXxyfcRjNBAU7Jq5pda",
  "key2": "3AwB6gzjdfxS6fdtopbQbby8HbsizVX2kYPZeJJY6vnj5bUHq8gJZhC8vBD9Z5nD8bdS62uBXrqweenr6fh2H87B",
  "key3": "4YTbkiUjmVve3vjA5zaEc8xJjegQRwBc1n8RFAbkdxRSJpdYzJKALyBvZ8YmQUCW2cNTFtmUhcdZgid5bmpmcSmU",
  "key4": "3cfLF4xYiPQn6h9KTpKx3bbDxun31MfmESFh6ypmCp1ACziUNXHz3GEBc8S4T2iNm8kQ5xSwbrZLZLdjAirGTtGC",
  "key5": "3kQiX8YNx4LMKkGHEcadXiW1B61hPagKMSaTB8FB7Mu4AXTK7et8UkSYX9umdTZYiUnWUQD7Exuqh93Z3299fpaA",
  "key6": "LsuNuHcLuG6N28qQK1GsYBh6E6SW4Xct9QXaiVn6ivDKbNEsDMfpmV93atismvRnMwTENZArfBxfvEh4x8SQNoH",
  "key7": "4wP255cfTmKcxvCGC9Wfoj6MyLbtxm6yUwbN2vdWDsBEtzosixNTqjRTJnxXwWop7EvfuGDrKGPBFNfLWePkk4C5",
  "key8": "n3FerJYibWNrN22QX74mdoSXcQ5kGRauJmVyBsn7guAVbnikwV1wHg8LbS165qZj2sC5bnRsJZBCBy5FWwyapUv",
  "key9": "E1Z5soR6ChraPWQ7Eh3c8HSruYnuLfNFsrAAp8FNZrjsG7N1sJBsBeqUxUYJuTf85u6bdZ6XE4X3B4MVF6yaaVh",
  "key10": "5bUvvCMCvDjbVA5c9gMNVTfQGXR87DvaXz5uogi18HsJ1SACr1MQMZRcwfrstysLFajBJ76h1K4ChBnpWNBvgKMJ",
  "key11": "3nSkTP16TTSb8f1vU8r9FdfhpLuiBTB7gVJMBHLKHWjc1idmGoUDVdeecYx8Dx6rubKStrECttFftKWeLAkvrFCn",
  "key12": "4MdiABcfi1ZMjPaqmRvqjJ7eD1uvUdq5AtH5BdJ1mDYnuVoXLmPer3sdSSN9LvXZeuBxmxuxtk9NgdJvoKtXyXuw",
  "key13": "5Fnm8KnJDs7pMLpjCn6bbme3gsPwTBhut3xDTckC65G9ocpWMRP3SsymzGELx4uVuvVGApUkhZoiwpG8CR6iV1K7",
  "key14": "1vCMGfBeVVqpyi5u47M9U5Z3wdDLnUxPMx7P795mPsDo3jXVQy7DTDKqnUCZ7YbKXA2jQwuKv1ZFfj362tDmwz5",
  "key15": "2VkyyaFpzURJtzaMrLK9MTBnKi8hiwKcT38uzMJ9b4tMg9Xz3Le2t9fdJNRVZiRkeFbnuDoaZM48VDnACqPzN2E9",
  "key16": "4Qikc9WWG4BKKcfo4W5QjMpgwJAKEUBEoYjYozBhs7Gayt2mBeDus6MnEDrsLvCQ9NqyWQLXx1brahP6D4Q2kD7u",
  "key17": "3eqbRWsRNus4nBRd2GoGjEAzH8fJtqwou7s2JV9JS5pnvguJeUyv5FpT3XthDjcR6iSzRAdZWeuY8MAwUKEUXSZE",
  "key18": "32Qd1JGZMSaWu1XJxaqRWHKLwmBd9eJHxrSY2LYUNzhBafvsgiJmP2gdGp9ZMecXtpmvd1Az39H651taFYWDbhdf",
  "key19": "39B5RsdNqhNCpz6eWryCt9Xt4B5kNyLVTQQGvVLezdUnUKQmBUQgeNuHcASEFAthoKgnGq68NJhmdDCUEzxdcBXg",
  "key20": "4ukA3DMQqfdfTHggCe534AVjDWigUrY3wZpSFJYqTMBNmmTrJ4LE2CQ94ZhZrodREca2SyUauYSnHoNakiLZNVo4",
  "key21": "45BERsAnhkVPtmZT6bZgGSF9kWqUhqjAdbGEHgwT28wcGEghc9VJUZExrijBXHNkrTRGxdNVBwPGxj2HbLYZXzoN",
  "key22": "66uGBoZufnpTeqercRCcKn5LM1kdvp64ThZ95sdKCa4r7zfvZATKcLi9LD84o1T43195VaqWwECmtXZzQMZjt9uj",
  "key23": "2P1ce8byxXnZ4BHvzaEpTucjuaUwsVVcWqwzRmWHgEsy8rZAcXPBx2mAFcoM9AGDam8T6kj5YVsP49eSWEcW1CT5",
  "key24": "8QpiE7hzhkoMRXLmp8r4aNq1UyPNhXRcJvtFdjKLiTDHfqwAna6qbUWsfcKXt1ehoWZ4isnXu95rpBzwudXVdWG",
  "key25": "3xfH6DiL3R8aiME67tfGqLLq7dc7wEWFBqYAdtKvrB9NKYCpRvL5rUy33DJU1X88SxBN6WKW91ev1rnvu8WrsFxy",
  "key26": "2ikztbCfw9UygqJQotd4FR7EcrHEDeCg5ksNrojF8v1fGxk6k6N3ppCFPdzmZYoqbUs6iQE3wiho4LQ7Deph5mUv",
  "key27": "3ZAwRC8DZr4rndBg2wRbhEoQVTiSiQB75x4QRhHFpVAaCQ3DGtw46x41YrumzPZ9J37bHtiseoyLq76FiCSh9iM8",
  "key28": "2iWgxdRyFS2qJGyjVunEUqy3CKpinu2fBvcHerXLkLrn9cBLGNVfufKtwW9He8nPmoiYNJD6fzz9xThs4LxeqxDN",
  "key29": "JmBp6ueVzW6FBTmUvXRsH3EirrWEWEmbtLi9YCbChcXWtPQ3kBPKi5hGY5LXmxuQJp4Mx8GXDNSeK3bXb3Cy3Ud",
  "key30": "4gxVujbNPXzoVgYRf1kuRY7o5bRB6N3aTVkDoy8663j5u76bC7cvVjZ8NZGmW2udMPGkctkAEP5Ndj7zLjDhxkuP",
  "key31": "5WqWdH9z3FjRutQ41ehk8ihMes3iboJTdFoKCad6ybYpN8iaUhjhV1XKbaVNH4DKbJR1ifZNRi1Bb9MVpxnegpm7",
  "key32": "3fs3HYj9FMUYdtkAcL4KDwyQU5jFbzXLcUJ151MPoMFFVxJY9HsAtapRGJypJZ9aBqorkzAVJUM79YYPw8iURPWo",
  "key33": "4FTworhEusPRV6LCg7JywgUyqFf9vJTZpTsdp5toCXRA2KzkRjkCKZGmkpem65XstMsu75EAHmsHaUShuAqD8yWJ",
  "key34": "2MApbTJUmGvbctuBsi3mjFZDjcWj6rj9FNxFp7zdnR3phpBX2Cgi7zii1C6jMvPYhgTU5JZSZHNigMMAcZPMsbK8",
  "key35": "3p6c76nVYRP6y8a4N2V41UR5KZYrZceFJULsia6YohyqNZBofFYuQsvefg56Mc1Qpb2NCjVoQUKgoTF5JdaTao6t",
  "key36": "4FWsGoGfVasB55Y3r35Lj7aXa53eYGz59yLkdegqUwRiun3FGpRLbnj46H8AT8TrnWUYpsDxsnPcTKxkCxH3cJBe",
  "key37": "M2y7KQHHLptBZJ9iWqcMdJMDaxF9A3AuXZMkXVsAvGDdu5fWepCzorSLeWddgZTP3spyvZy4x6bqWX3HaTCyDg9",
  "key38": "5ALVoDLZjjvDJdQLj46XqX9vvTt9ezCoAzVmSezypNZP8eW22sR4RfPuFHUA5kqbQ1GTCKGCzBh7PBovHfAc4kX9",
  "key39": "22Ee9NPvkrWT6eXhTKzCp221iSXYxihCMUZ27y3TAmNSfV2UWnLxSBDCPucyTSgARqdi8tonyUvVmxo2uboUZ8Vx",
  "key40": "5Ve9hiyv9VSMacdEeo8m5PQN78MQyvx774BFcNbc9bBfVnQTbBcip2eiCT6iR7JqPAjGUnUSsH6T58KLxiozzewG",
  "key41": "3obzH5TZQZejgPv9gccc2mLJom5mHqYV2N2zTb1fXGKbR6zgNrv2vYZaziHXLc1UTg2BpLAfsxStneMUTLKwTajc",
  "key42": "58m9CS1qzXwahXjmPz979oJezxA7xVCvVwrypP9tmj8F4ZzZDugW2t6S4bvWrc1jggWLpNhjf6vWDVWR7K9z3gQA",
  "key43": "4W5zt3Ei5PzuspnRWKwjWqyq3rLAUE7beVkFdGp72Q8a5ChciXhRoAGb919h1y38CBesn6i8g93E5ZFhY11GA39",
  "key44": "4sjuXVzfWjiJ63QbcQT8eDz5cAzhx6p597xzpyHLMhWPwjqfCTeViTM2EHNU8pxtSs8SSAi7yBqUDceUTySXNQtE",
  "key45": "rbXHhpmjnDTVxjrbk1NRjT5uaYB8GKz4R2XTkqbAUcMsZhbFf19ifuJriNm9RhFeFgxemwMWm8BnKrwAVX2AEZN",
  "key46": "62PTJ1aeTXHcGz2mUhWv6BW4eDv6CNAKApddMsFMHGJDgVFCiVCEmBJjfRG57ZpzB3mMh3Zq65MemdhLW3253zYC",
  "key47": "55Xwbx2x3KwuHW9j7MCwoDTfVUn3UorL9T74tZy9FjYtDXV9ZvSzM6GsiJfJePrdCPNhnfZNzHYDK157zQr2Rf8"
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
