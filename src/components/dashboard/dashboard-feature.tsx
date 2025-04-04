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
    "2C8jtPoxh8x6J7NSFm44K5eBRdLCnBj6nH6vWDBMuVTSvT3CunLZMJ37nznmXyeY8J7ZitQr2upCCBWbk2J7DSuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NP1mmCtLuiMdG51qTVTz1GEEC2GCZ7vedra8M1ygSH6FcjmiXHZuBnLsUjStRrUD6jVbEqhoGm5i8h3f24RLvt",
  "key1": "4zzw2NXLXjzCT5Qq9w6q1PN4CJXVA1w7ZoPc3JJ4mS2xSfkiDrXSQb9F5AvU27pyxN3iiBuvy1zFjLzKHg1Shaib",
  "key2": "3r61nrUAMUpi8Fi1upKnWGcaaCdLtp5qzzFdHN3mG5HwB6ew5hRsCJhjR3WoQnKwM4Up5Aq6CQLnpEcGVN5xBn8H",
  "key3": "yTAkLM15bS95vmKuf7BxKUsPZqxxzMBN7aLUuVm9R7brAATD57EhKPDDu5aoqEgE5Cj4KvA9CX9WnahHFGfgooL",
  "key4": "4gWfYDEk4Z2EjskmAtuRNddVP3bFSPV1zBAKWMBkRDTnzQd6ZFXK5LmvFFrJTN4grpLb4nkRbfLpguoi92kCneHP",
  "key5": "4zzsgAY6h58Jcnp51kdgG2ZjwYTknYfBfXpeHyHBFbp7gVKZ9wCJLurpo232rxxYGESSAM6KfsBxJSQ52eVyfQXg",
  "key6": "3Jg1nCxxn5xkTgXqPB6epNL4G1MYPZFi9DoNb7qYkf6XSGDA2NE5k5W5YuKgNQWTeQFfwdnGJqE74qYHcsD6avzK",
  "key7": "3zuB6PD5VDkARndo8z7qnfJDhmXrdhXBxAvjmHtFdUJz68ZA6CQ7X2ESeTFnwZAjqiQAHCPapB1KovqquTW4d7mK",
  "key8": "4nGeADcGNzR1UzrdnqRXrcGwDtEbFAQ1fPLzq1CURZ77nXSSvBZCktQPYyamtbPWnR99XgoCSe6ajU1D6Hy6uXau",
  "key9": "saAVoGD7WiENJfmCEmEqowhhz2h86fuwmhpJj4x4XUEZy6iWDXj5RRKvnMEePyqgzGrfdBXGpfhkwWT8Fd3BFXK",
  "key10": "4wRonq2X5qGME2kt8BjSWovqWq9oSDrqK3DvMCgsVitHZCP1UaFBUvsHcRAJ4QBzKY3mTxJLvqJFfWJF2z1wGeYQ",
  "key11": "4xj5L4EQWacyFd762Ja7TjLBuGixYSHiCyBTvnKk6ytDY6fzEAFqcALPQHaDq4Fxm8CVnmpL3MMmo7yzTsu6wx5o",
  "key12": "3mz57dZK1dcFwY8x5XDETdQBFmK5dyPjzhzvD2HK4pTcTGj1sCaQimpYSyZPr7RufVk7J2odhtthzsUmPoBcrFxd",
  "key13": "64G8x1PxAt3h9wf95cCgqNwcvFMabsANZvtGrctQeaz4SmHEGaUuHRMHzDV4Ft29Wpdv51F3VEDqBVhaZYsb9fiD",
  "key14": "5YZAizZaLScqnAHbxSiNKnbrGAcTvpKnTZfmFarQ9gP1RrNu2fLspH11Zp2jAesWChiXdiDc1MMFe753jxcXc9cX",
  "key15": "5jEB6jnY34ggMXmLNXww4uvQGT7rB3ikBdL9s5w7wANTK8NCZEQ7VoqV7bfKZmyk6okpnJpxMMPjY1NtWsJCuBM2",
  "key16": "BVxk2dKab4CBhGcD7DqaeJNfgBjygboKAVPHbfZSfGtzmaMakGDesRD9mV35rKzmvFp3ErDP6an6JAMvoCmC9eo",
  "key17": "4v7zU4EpFCA7fBVq8hESybqh2GwLvPcej4J1AgqdGYaXnv2upgi2dhpUHuKGdBgqkv6efpyVe3JW8UtgFuQR4Vyz",
  "key18": "nZHqLoZUEFh6EdCy4hoCpDyNftGdj2b82YnSNcNunTMESWAgYHb25czJGcsDDWkY1eZig6PTNUWtyQAUSxwas7z",
  "key19": "mKR48LuWPhhBf6CnaBnCjS1PTYGLPg6pKAY4y4qqgL7q15AGkANnrjHmjXtDbufj4Sud8R5ndY7hYKoDiqbrP5F",
  "key20": "BXnqDDs5C3Wdsh2WDruNoRVcDaEMU8wnegkpT897Wj6Vur37W1vBbnXBcwWC3SndyYpMUCmRwJCq3ecss5DuZ39",
  "key21": "221phzPyszb9fy4Gt7kK2rxtsdS5idZvPqS9JGcWHsfFVFdN7yNwnmD8AWjLob119nEVL9kHhmnqDQJij8eHQkkK",
  "key22": "3vQgfYxYWj4tNRsU54FCJg5MzubFfQiJWCimCiH8K83uVRF3kuSdLdB6YaF5fFgJyNhNZ3J1R8SraU9G4thXdRG9",
  "key23": "43uMCPWTMeozCV1W4uZSJEgMYjY4xq8o8TRBzfgZXeoLdqSYdYEFeUK4AoW1oZVrDVuZb6y8Wdt7ArUsEY3ZVZ7z",
  "key24": "4XubUbqTUhHsiKeuozVYchyhEcQz13sVTEZq3UXet8ekBdq3pqHrRN6tMrz25STbPrLdK9kKB94DoW9nC8bptzv5",
  "key25": "3TmRzB9YWdQTR6qDR6UYBgd56K9tDSekadKep5fSb3gxp3tLR3sYzJZZJHjvH94SFPybVFu9CMqADeiKwfriYeVW",
  "key26": "4V4P8v7GmnCr6Wu1GC1RDWWRbExYbZxzJDcchtMKoUD5nccJdt8UnZexcuLwtMuDGbKpLzt8dnsi68tbab5BZR2n",
  "key27": "4fupDdUb7kQj4Fqvw3FwQAXokxCN4ahEFiNaSnqZgmFwGMgxnZFycQ8QFuR1guh21cbef4zEAWcsaafL5EV2Woac",
  "key28": "fhaMxAFfK61CY8zMhHHY5dCVqACjoWkgtAjitQoScviGt5WnWzxxBechybSLvitUxQw1AxtdWFZKmfhLRmuaxXG",
  "key29": "4CbuKfb4BJdc5Azgf38SeQo6XD3uv8jSkQg9F6gTwQvvekcER62uaxtyqGxoKZUwKphxsxBanLDsA8hJb9Xw64Ny",
  "key30": "4P2qdZmR92SeFXfQ99kHsG1AZXP65yJAfw3L1iMXBsUT4jGGBHkh5UYAoj7puJzTFjKmwRvna6LGyer18yf1v4Rj",
  "key31": "2uxf9YxnmCXsA9w7VKsmdUJmGrL6QYdspJEF9MyehcB4oa65TisDdLtcAP1viNb8P6KTyGzdYH4sGjZpAeNW7kPs",
  "key32": "5cvRH9r5kZfssC6nZzadRKXG7dxxbhApcYBkzV9wKmnwnLQTBKwUUEDGLQ9xAPEtJ6srnTK2DFHuBDp23fGcJtDv",
  "key33": "4rbtPT9AMqMSNuNsGqpSsu5qnnpsuWfTH9CmDMVbbJZSDKmExfB29fCd72qsZ4b7Eeu5tDjvKxBcf63xtKGXTfqx",
  "key34": "5a5ibjhzbL9vsCkKWS75cxXWB1PPQGY1TBGzehEoR4ZaiE4qzcsmw8MzwS7Dvr7on9Vmsr3yd4V7JNETwrSpg1PP",
  "key35": "2zDR3KFhPJgandCqY5KHsuenahY5zN2gparwPAMkehNtDcMZr2aM47Yb4eTc8ZZELAcJcgcH37RLMYzqZHLVH3nz",
  "key36": "2BmAQbFRLjPDQGJbmMeuuyMcJJuZ6eUbLdrJQdk7wgSg29itojbzbVmBHe1s3uEpJea5m2r4TBZyvXcJxzuBSMVA",
  "key37": "4V8tKSLSPJUmN4pEYwysckMyuAaYS3vTRAeqGxXJ9RpXxrZGMM7mcMQp7kHVB7Y26bNVAJWRzSWmV2E3DRFN2Ljh",
  "key38": "Be4kxzCUdCHjMhB5wYf849bVdAUcLbMUaHCSew4kS5uPeMUfey8YgN1ivrf9ry8hhFm44CFsQHzjCCjFYukkuhF",
  "key39": "3ngS2jSgm2hndqXSySKPAYxnw8nNrpwzVri6bTZLR4SuyFw3p8MAbiT2a4yNnwYTJHYRe3y38vp1ApYStsNKUAcn",
  "key40": "L9xycTFdR1MuqD2U7wfTUL45nGqDxZGkBMi3jWeVgcJjHzxRkiZr9Wapdxjp3LSgsMANtdcyX3d55smzkvm91mb",
  "key41": "3hDCR4nGY2x7FUZiMhYxWVjVK85gEtnedshhMC1cRKGc5nL2mHDzaJT819opxTMVfLVVtfKpMN3Yeo8YcdrPhKae",
  "key42": "5yZZtQc91YLQDHU7z3q1tXzcVbWKx8Pju2tAqr2HNNMyEzoFnaeSD9aKPAtbVf5rZ57Dp3AVyo3pgzLsSiDG8JuQ",
  "key43": "5bhyxKCByWdzsPxMmDkRTQz8rk6X7rwmQg8yzD9WHX2E3uKdc69PZg7kiaXBQo6iqdSuuBycbszL3ArWjh8dbP95",
  "key44": "2wd4e2xxi1ZwdhhVLkPbA4FtwwBe8F6c7iSUh2JFxBRWyYnvLrSj2Kk5YWNwF84YeRDMAvjH85KSCdspoqd9Xsp9",
  "key45": "3HbTviDc7yEJxQZGJHiXK9Sj1CikPq8LzxRmX2C7FNF9XWftpLGxg2QTboV6KnuC43k5vKMxD8Wru3LfEG4wZD2Z",
  "key46": "4H2Uv9dx2dMTz4waugdNq7fftuuUXbnV5qrQGVwL3ug4xPC7pxT5psS5uodQWG9JBb853Mb68QJ75vzMpVmwtNQb"
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
