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
    "5hBVtXUVzZebiLyC6S9KhcDwmgKfg512s6L6eAxvLTawveo2RyaEpMokypZmop9WXQ9NKMvymGNjMeqtoG1gVGZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdJ2pbRwt5NCmCTxebqEC8VL1vqfz6JriAUWMQoshyvARqVyoDWYiP8VQnmGz5CmwXoqPUUkE9ZzAveRy9Fk594",
  "key1": "55iuSXJn2nwDGPbDaDgzJwjhvYyMZEES45xE6h2kPfDqaPGU2icju2SDJq7XjZXxfo7GjZ3931znYV5B9hDjgAMt",
  "key2": "5FVa3GqXz6cJV5PSZgZgEN4TH7rFZNkBtGLDnMh9wPBgQCyveoHYqeYZzcN9SRkQwXb3bJhVcyva337JTR2E2XAC",
  "key3": "3jjfZYAJqAv9tNP6sPHaDMXWCcFtYCAoUuXncU8CDZnbRVoKL3A1sgtNkP4PzRv9WDrJaCoCtYVawgCMtfdAsXXd",
  "key4": "6SkukvrvJyVtcPUiEuCWFJAjFcf2mdssC8N9LdKmoqr8Jst8dcL8sej7q7f6iUH2y3AGLGJuudzXzzjkD8awsDT",
  "key5": "4So6rtLKPf21Bbrg8dj2zkV1SEQx4oz7MZyqqmYa6ZfeRgYgmpUKyRgD8tSPAYRmMtzGjPua1bfdMyaNoWoCF9Bb",
  "key6": "4JC9yjJDHi7gxGZb9fygtTqWkhMKnoxyemfqfJNhPMCuNGEdK9dMFwxs4UmEiPmqJc7P9cWCEKA44BXEV5rGuaad",
  "key7": "4FRxy1mGQZmnyVdKRnQuVxfsmecNAPo33TLZsucCo9ShNGB1vVLh6xNBeP86ys52MEFuPR2bFxixyCy5hbARdDRn",
  "key8": "Xgk7DW4u8bh5kmHGtvq6PTeL2gtQX3ZYczWTrmjT81Qa6gH9FQdubX62gH8zJN5SxQDs6AyczdHrGksm5ooJkgc",
  "key9": "4B6eh1UB4TtFRQpkoQJiscVyTMXzQkRkkDPuPF7BQgjK9YC9Rta86AbLeTL5ZtSRzSTeSUU1AgHc2juaan1ozKZC",
  "key10": "2wMd5ZB1WJtdBr4CcY7wJuD5UdJjHkPfwBGP3gBqiCUd8yJss3XvuZ7NYszwAkdeDjzZq6JKuqjuv7jGrZUayf8S",
  "key11": "3osfgPHg8fYqYC1BbEgQ2tF8wFyg5TCoUpJEs5KVCrxh6qcrKyDGVdNGY44DxneNjEWqQ5ypqRmVsjthbet6a5cQ",
  "key12": "61sjMgk1pbzoHhdLmkRbM8dLp7V95WiYTgTKytZGMR58yXZNKHwuThWKANcHayaySjtM1s5PJjjcuwxYEwZ5c23w",
  "key13": "4rwenFmAV2ig4DFzDUK1kGrQ3m1RhWEdSjUXV8cWo2zn55R1BWpdpg1Mav8ogxhn6mtk9wQRb6oHsRDSjPLW6mxy",
  "key14": "G3hCW9KAiBEY8DXNByfLsQswnCbCmELhN64SWFWv8tqCQhfoqCTMcTQ7rEMYi4i1bxQ8F1oRnrN5RCVqedfevtm",
  "key15": "21QZJwrJpcmY4GFA5cSZsMfu4kFuiELrRpr8Yen3kFTX9uUkib1wyiPUD81Jr6GQxKZj92yynozviak3oTjzD4jh",
  "key16": "5FPHPyzjKjsrVwYZeRrYttpPy1D6M4aY9drQWoexi5WL9F3VcTdjPgb9BezrLAaqZv9L9m4s8WZ4tDqPrfqsHwvL",
  "key17": "2kv8Ypk3THYc4QzH3PJ8T7Md3of6smStVAJW8AjFJwDMFjzWYMsTSCBghUXeuyrEgvA6f8HVgFK6TjiNcNARv3HU",
  "key18": "CS2pfjL3VRPtAQ2xw6TQ64kcvzMcTSPyVedFSpw1Rw2zBEqqpvEzxV7rJxcS7hzsqwpZ55YPsZYASpzkN172fiE",
  "key19": "2hVQqrVabTb3qxm5xuHsamKDZW7SGvrwHhUwzCya7aJjQxuAypktHz9CHyQdiMecr44UDkymBon6JQxjgXvzr9gw",
  "key20": "3t26atnEQEKSAPSBRTASQK4SkBjgMYwiJzN12cqtaAsNfBe7hY7KAw5tJgfGKZeUTmM18ehrBDphFp2tSnk1t9Vb",
  "key21": "ugaEUkgkZpEfyiU99SCPTh8rMK8aTcgMGd2ieqyK72fHqatGwUs7Gqx3SCWUxkGFXMioGqGzcikmt1Hjdcj3tZx",
  "key22": "eYbd6vLNm1WWpzyVWriWJmaUxfGdhPHrEUSVQizEC6ZEpCmFTmg4z9TAwpDpuUBtSrXFtwAFdx9Df8hcotPME6j",
  "key23": "5ZByMF4dpR8XJT1T9iabe3hjd8mBQEafR2m68JRgkbBrWA9N529p59jcXXmkMMTRyaDzJEnf7StYELaoMBsozWKm",
  "key24": "5iJs56Y5Nb4UzyzgZjnyrMitPUStsBDMamhrruz5Pu1DJv67aeD69eJghpJAm3dJDHvTgNt1zhKHW5up3niCx4cH",
  "key25": "3roDZgTrefixqWfroCVewmxrTBDUpGVrREdNWC6PwaoPb43JWrSxuMj5vJipwdPtYKic2fq3Yca2ugHtdAQKSYRR",
  "key26": "BygzzXmBiS3j42CFke5oH5TgFgfD9VTi9ronGyX4qbLZpiqEeHtVrDRhiLmRrKB8CBhm2a7PPNXdDpswcciA53S",
  "key27": "5UGMDysjsRrBCyuj2shTtfSf5mguSPUh7My7mQrBFbkcPmaG8cTbSMg4F2wGPvqENrRy3NwiAkDpBybCLFrvrEoa",
  "key28": "23gvfgtjAZyczGrmYJT3b9aWo2Sfg3N4mPPehwm6Vk8pVjFD92f6wSUZCTG75oAHJL7LqsaGyZd8NRBeQChLMRRk",
  "key29": "5SNwUF3b98pz8atQnLYozjqAQunFQeWSyx7MaVgihw3pkHqMUCJoG3Q9G38qMCJaoUqrqUjot4rYqM5TrBV4ancc",
  "key30": "35bFrZz66k8FDCduBgjNdAQsnLqgKLpQSnZ4AkyUB1sjFrJw9RJPu7nU8wzmMXkmCbjkjLyoyyQfvuUV2k94G7xt",
  "key31": "5ePVsvoGD4sSx1JKaiDm4AUM8n86RcwS8U7FgMrsq6Pj6vFf9heo3vtk7Gm1EhFj18VVpd6uscp9Ce2jA1UU9ChE",
  "key32": "5BZ6mfu5X3uzkDCKT47JYtcqe4vneLrUs26fo7LvvvkRCUvK3RDrGAKL2cC8DwMnmkR7sqyMccNs8LugUBFreRg2",
  "key33": "4VBWmWTniFyUnRyjQ46p4DQcaB45WYKEeuNTcGyMQDCUCqaHfZ1HKADFpEAURP3C16ZKGgj7ripoSJHAivb8qqqv",
  "key34": "2hKNXNfVourWvSiMxcCXpUWimkiPmwax5YvdgJL64Ef5Aha1jgJjmwRimLaGKZpw2y47NUF5UdBTFjJNmXKxkFsG",
  "key35": "qernY57oPkWnwyChQb9jVUNCxM61Gf97icvwzr1HLcJQiNHEDBkRPs4xX9QwMLg5nR4Eh16tAXvzGgk8ZyBGK45",
  "key36": "49WH1QJ3MmzrWCbQyUfrQHoSDVzMziccKrxcnHHvECffvccsFfoo6a3v9sz8APdWuw3PhDuUdo6octCS5FarKKjB",
  "key37": "2izQCKp53J8w4zTybLRPYXF8tunmvF33hKHJUS3XfASbBUQFLd1yyRMJYVmQ63v41CzoN143y8GMNQBucSi7F1b5",
  "key38": "2ncnzkTMwyGjah1hkfpWvRUqbBAHTybMxqCxrUdEnaLUbAzbQE4GNLP4tqpn1pYpdjmrdaatzo3eQuLSVU89gLer",
  "key39": "5Uh2VUNNj7zMkjrZNE7yjkMo3LphAvqubfAvRYaVfioVTy2UkqTpP7dfCvHxZYFNgxYRLH3qoy63eWzkumVA1XeZ"
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
