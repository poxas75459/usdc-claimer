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
    "5BH7LEpji5KqMLqbgkspWcGYAWabqBwtRFc9usF34FEAiZoQdAr83Cm95e5jeR6rYfydRiqBodtDGG7jJHD8rpNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dytzm6gcPLmveVjSqA6SYDCEspzBkUhYXTsLToPMgf1ASjztxESVz4xwFmFHnwddfXMqvujdLuYrSw5hZGpQiiG",
  "key1": "2PyEhEkE4sPi7Zj8wgi3W97WCs1wjwQsJGGnr4Tknhvfaw2eszbDkttcv5wM4eRK9MNSye3WBn2nGVsMV5kCuE2g",
  "key2": "2uRZk8QwuXp37BFynabuq74CusdVWQ7ewzLaqUbU7GnwejWiKUhDWZyZPAeXW891HhtDGdthSXbwxDGyqgwuAqK3",
  "key3": "3xyjzQwgdykXEQX1uyZFZ4nrPfJyRkdurRxHKCqrc1VCS7FSh1Tc6iQK8mc39m5zH3BMgnyiTxxpRVmKL77b4Ch6",
  "key4": "53Aad4v2aMgAs2sDMwf5U1C6XdDkiUavyVohZ9rYr7NQQQ8AUUVmRroNftPRL4BWJbCaUWaKfca2UgvZR7FC3Yrk",
  "key5": "2LEqfuFn16q6MvbeudWuQGthyg1BL3RokiF2zdngXWcE36cvXQ8TT7aqBzFn9uBbbBgdCnSY6A14BVk4CtMAqkWt",
  "key6": "5ygu5bGTWuL4E8D7CzELFpmUvbVNNXaRN5CHtsDvLUVyBaSzP3uHnnsYHUBpR6u4M3QEjunYSNXUCrhPUPwECjcB",
  "key7": "4bxD7GW1bXZWvS3wvkMFzx2iJySi336c3LTsg5pA9LJWrCdGhHZMfc4QhUM7vKixieCpxb5ppiv8YoeneoS3YE6Z",
  "key8": "62sqww1v9cxawXAkpWze5rtqv97Knuy3WFQ5B8siMCcEMZJ4yjWYUL1pLLuV5AgXqPyQvTEvfBdpnMwYagtkNmFw",
  "key9": "3mo1sEJpeFnHLpovsJSyyt2tgtst29tr1PDAEZb66ZFF4FwzYmzMoe9HggNUZFVLReaiDCgdYiGj9idtzywtLS1F",
  "key10": "5jE7dA831mzghKXVsAq3ModqjTe1b46wLbYYaazfff3zfwMy81RcAipFHXjqYBPJ9HufFk6U2rjoxshNjTUuFUXK",
  "key11": "38yWNHKFJVupEezd3y4MC594MNn44HLkyCsBqwpShdb2fks3KBAXw7BKUmd4V71hKEMN623VqfRREAqhQ3LQWFun",
  "key12": "TgLqjuehfiwVdT1hPvxBvG61HQv16q7dvzqQUfCmc15TVyFTiYZSanu9AvyUHEqiL7z5fJ78XBBi6Xr98X6Z9UQ",
  "key13": "3C5cWNMpWCMZNpKhTFtrKZZ13iSuogc62aZ6VSbvZMZvBL5Gy29he9n1FExRVmUoYopEAqJcP6jfD2mMtxESahH1",
  "key14": "HKTcCPEBbawGZm8tVcdEvN39Ki3LQXveH4HyPLTaZA4eSTY6vqoQBg5XGeNgoXG64DXL27YGUMcZj5onXPhCJmX",
  "key15": "3BtzaNufJazP75g2XvVnbjFxzDjvAo2mv4s7DacdamUZguRJiFUwdfpZsMkTW6DkqtCXc58Se8xFJRTS8Gn6mmvv",
  "key16": "2JY4Wme9EriFrtMJ72uFLAC8W775TsvCi6GSr1AAKhMVXWrbZrSXxFERLhq2HHeoLHHVSeZKRjm17WYDdBP6QTQa",
  "key17": "Dm1TiiTYwAFrFSveebv3hM1SAhqCFonKXqMxGByLbJSxCgv2DVTkN19HTcNaY2Kr5QLTMt2URetdMz1EwV7WC4P",
  "key18": "5dRqrZK6Sgqa6gLmRZqBr2r5BKnC3bGF81eUahbBzGG2hzEBS4CfQXWW6HBSdvXVc7gxTZhF6CMQnoAw8CDq2544",
  "key19": "3nFCep2jb53tXUmgjvWFzekEyDcE2cARoCnJ5uGEjPbfxCnVZ6S6ELiNofySEaChohgFG1fyTFGFci558FTumeMM",
  "key20": "3TK2rEBeNZ1Du6JrP9CcCt8V23atwMk1YXJ3iyQQkho8YJLShAuKx5qMB3BfZSe6zsJKLqrx6Fn5WUgXsNbMxCko",
  "key21": "31yAnoXwbuNoUrFt9wk7kKZSAMW4UdPCRF4VZtFPX4pxahAEvnHgo62RVf1Cd9gKgCeU7Z8RYmaZHqEvN2z2UKZc",
  "key22": "5qYzAiAURiSrUJjfdU1HApFBRaaZMRKTGb4i77NYZH5cawWroQZcSvK2qzQJ8B4u4qr1bzP2w1U8qDc1wUTC79Wk",
  "key23": "25qhXgrsYULFFqXhYnXgL6xYtvescWt7jimW7Jj4KwrLRq8ERywEyvw96hNeCkUs7LXPLJLFcm5XK3PkcN8bVbQE",
  "key24": "2z7SxVHqVKUgv8SS2KK8RbS9j4XeRwtgUaBSq5Que2nYKCkRVopnQXsS8sUcZB64hyEe69KmNYTupLiLwTbjVRKs",
  "key25": "guGx4R82ijCmGn2xBVc2KN4AkK41c9PyXWXjQkECVTYvKy54FS6NRX9tubUHLExCVh5j55RHRgWkPqkz3t9zVSd",
  "key26": "4aYCTrWKBSgyV4TKP1MfDy3BJrRMJJiQuk64VcH6NLfv7TCc5zEPs7YWU3KgN56pp5rgi3WuhAwfz9hhtvBSPV4b",
  "key27": "4qcRxwuBSzYDD2zLg8CbS5MSL13C4GiYWbKApiAtoLxzmdBKA1jQMsGNHUVift48kaJwYged7CVWW8AhM7hMocMP",
  "key28": "5MEtG2oPFzeV4thrakGBryBch6eJpi3YzALEmWBEzVP9A8D96jM6dcNj5FuZh56A1MdTYRB3prCqw3NSQgnkvzCL",
  "key29": "51hQAWV4unwPz4TUXwA9CvQ1UnnfnhesyYV4Tmq1deMkJCi518LXn9jnFF3TwqGovabEuduwXjPJTXEpFc1Kg58a",
  "key30": "2BvbYsbsVKSUgxwXxGHfkmeCsSAtK3qL2i4jib6b6TzBHrikuMVzLDA1yKuBU8DDNZj3jcXV1VJNTHsJNjK3P9m1",
  "key31": "ggVEaE8XvuCnE6hmrvzFwUtpm4JB9uG67x9vsenLqAXZWhktbRzGTJyPsXjw7q1h5UMHvhXiRDU9ya81mq62aWF",
  "key32": "54y686HyGc9rSvabCgKxzFu4syRFi2n5tieX53b4ac8tyi4Bd79jgF4qrPK4NbisNvMNTJioNgzkPRpGwweREiej",
  "key33": "22AYuDrADv6y9rYWtmiQRfq7z6Bjq7RqtsVcsLkNqc5aSDm8c5g3fyb9bYU3feQXcTtruQuPh6xSnYbLs7YLBRcH",
  "key34": "39ZjorkLzmRmCicWkruRLAvm3Pr39qLwGmuu33A7ez8mpcbyrL7pc5JKeRpfXC76byZJjCT9qJre8x9FiHnJyEkR",
  "key35": "32tGLG2ZGBeYnvzuisWwp3EMYtyv4k9sH2tYBpuhpLUHcGsdPBnFERjNj2Meu7n8DYL1Srz2iSEjNT6JV1bmDB1i",
  "key36": "YeHGm4F6Z2Ro8YudREhsnmGTwbmFT91cpJVKoEUzk5ZGuobg2YpBtyBkdUpJgGKMQFAavtqDdtQQmLVjCJGjjT9",
  "key37": "4JoP5gLB3LKB8GfQmFPCx3j9Fra9PD67NusuAL7kGp3ctHMYZMZBjHJuQNrr1emYb5rBN2nrdmWjAsMobvcuFsJE",
  "key38": "65k5c8NA1qdT4L2ek5Lh68muF9ZezL1SJ8Y9JQ6Q7crnfvB1K4Qqh6SKqFZXbyXmaWyjExAxaWepgEdV8oiK56Qb",
  "key39": "Q5rzQozn3FmPNqgsVeW5pRysHDtXEpx2E5CqmrogGNq2p24SXnokdGi5UovuinYMd7o6CxQtAe6RjTgyEYAohhL",
  "key40": "491271suZBME93qvASDaZk4x4M7FiM1os2DMph58be67zrU5dvFuasffYc68JUGzZR4SMPRhdCWL4GL5mb1e6Pho",
  "key41": "4xbYmQmZaWMRGtGm9JMt7x3ZGdmrUgE7gkZgW3CUYETuMWKYj727rQNFJRoYYG1nCRtmnDRHSjCFc93RaDDUAe7K",
  "key42": "3R5jmAG3FYBZwMpsnD9y2bJMCnJ8ox5hB8aVcg26CrmMRjz7jMcumBu5Gbc2cRwcf8PamiTCMazz28EedrfYpZ43",
  "key43": "zP8cv4AvyS8sqUpQkXrig4UXkDc6hEQh8ATpBUhQUksfZEr6UM4D8FYjRFfizgo67ukezXfajM5Pc9LAtPuZX65",
  "key44": "4dsL3rZNB48cNyaDyzvu8WrjGg56NMJRwo6waeVU9LVscdXkYnHkPgqw9eTgcVBiN8eRqpMYbya9yiqGCfxFbfma"
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
