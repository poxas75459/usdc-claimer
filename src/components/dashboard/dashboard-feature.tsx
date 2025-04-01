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
    "3vmvfuCrfMc25nRFJ5mLzgdLSY1o42K1CPvgWjZGGqoxu7tsFxJGoSZXgi2y6GeWBb18MEXzqxeUYWxBaQ3qK1Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dW2JaH3nyVG5UZc5vhBNVa9DZCrqozJHG7UEup5uCKXN2ZgeDDaNdCN9gcBU8NrqvcJdh3xGbU3TJdojAiF966i",
  "key1": "61rCR4RXFWAkR2nCSaTJGj2nGhw6WMVSwKRmQTqe6xYjsxH66mSc82TmjL9sLUgVUQ8nosK6GjrrsBAd4NXS53Mm",
  "key2": "HhxriDAcFajeJY8mYuV2dSF62eUE2Xo9uDsaQqydYPokKF1jDuWAngamx19oqyhTvUG9gzrKKywf1aP1HsAwJKY",
  "key3": "5VcdKmmqQ4biQSgqzYicMnLTZzVHK6LaF55AD6W1yjEhgEfZSYndPMFw6s9WezVcoGUvyiSjbamwVuQAWeU8sofk",
  "key4": "k538Rzw8THNEUDs87ek6Pwu1rj5vuDUxbAmwYTcZu8cHJ66PWqZ5CzBZYkouq2f6taEf3gNg2ftDbszLYYU99Kb",
  "key5": "gpSUFQgVU4AsakmboDq7ATpjEMCUmi5dgdD549BwBXvLPawwfZRahnMsrmzWGujNceqoqnCiZVd9t7wNaiuWZC8",
  "key6": "4aEuGAZ5sEM2NeWuZeg5K7rydrWLkUDtcobg8d6f1fB79MfjPSfCqDSnkYjF8VxoNiGBNxK48MjAUXm7ApNfgjU3",
  "key7": "4yg2b3GjrWACggFiqjC4NjUfcECHhbSWZrS1426PPXPoqhVccHALKyr4rykEq8on78UFkWYiB32t5AFMhDniL9Yc",
  "key8": "avckXusSyJTUgSZiccu4tJPgkGW9GcjTTNt5aCjVquTxXC7Ahe6TF7E6nqhNQKgkwmN8XJNvQaxYgDpCKDpYdFb",
  "key9": "K4QH4NdvzoSTPsFd9sta1sZuPUEPs8J5devmnDYx8ZRWzWq4RTPxRe7LYu21KH436KZsvtCf7CUSLQzvX3ZwHwz",
  "key10": "26oTUvBNpZdUNcqtqVzV42uAxcVUq1TWq1enm2UusLWm66c1KuMjjeVMcren97ZBfYvdrtfjRMDwu348CrudFSr7",
  "key11": "5AqzhvkxMHfHpgogYdm5rdXiBxmCrCbk8hNLcF2AwnZQBupCmdJcCMZJhCVbdWWsE3xhABqqoqe7EYiPoS4rSgP4",
  "key12": "cRmK4iXssfviFLj7PKYDcAQnVSXkEm4BYB3Nv4EBzPs9DAqSX8DboYUZHwHfpZtZ3AL7vpFomi6KbTkoLuYuDxM",
  "key13": "5aXHyiuqoMKg1sKjsADpDY71wB1WhSByU81w2ssaL4iMkA4wWETAtTrHVvdcmVR6ymEPjGBSSMEYf4j133zMri8e",
  "key14": "5kwZtBBXXPJTvnCiUzFcN6DZAo743ikCoo6Z7sNGxppx6g7GCwiHAAkQPkuoJuPRqgwR55NMgCCERw6CwdhzFq38",
  "key15": "2s2YyKBdbaKqW9sZzjQ6QFaZxWDKBmvn9uPVK54YHwmc1GvMFJrxZzoMXPwYXj2eQ8A1F7CYsWneQ7zjtSCphKaD",
  "key16": "4jh2rGfwqBGJu2wssCSAQmWAsxKm13yM453VALzbrnNa7gVNuFZuQobeCBp8ypFf4X4K59cbY5uAfJ7kSVQvcaF9",
  "key17": "4jEcLpYGGhFaLqYd5yFo7UtF6bKLJeLGsuwp6CnUR9wJEPNgv9cyXkhrscQvoEPNZfTL7vJ6ARBSJESASG2e66a",
  "key18": "3s7xAqi1sEd7mUg3VRhdT73eSokk5QWQz4NjtSuqgaQfLn621hSLHjqeU9HPoHHQF6X8AHKhq1SrkdQq3CmP7WQy",
  "key19": "3J5XK4bRSpZptWo3dMi4Dd9VDWhkKDLSWaxoeFGyS88CyCmSXmQGAeyywbVE6buSFxzrGFqtx7MxtSX9gD5dVGnR",
  "key20": "1nHYTPEAqKzab3dZsNcNWNELbtPyH995BCSdcGQuUiTygJ282huT9EjUDJckUBnKkoX4iSqbYUFadYq3NhAGa99",
  "key21": "UW2NNFrbDqg2sQqA7VgmVrwpVzBr4eoDY7LKSiTmesuc2sCqrAxYQXLwJCHVFdKhXoRBS3YcSUYDMGyNTvtUmug",
  "key22": "3cTmfEaraULPNcrUiDB3NV7y7hHUh2ed9fSCnZXZZfCq6Gijy1rVbL9t1ZFYdKPFcQHg3EYEu87jHp6fc7frHisF",
  "key23": "2s3RT7HL2VA77sXaCzeh2veheDor2nCnC8vf98RrjmUBfBMHKiwdTZnTaRJx6yLkr7Us6PXwbxzWNS4HNhH4Qpdr",
  "key24": "4caAYxLL35i62nPAe9SUGcxz9mSukMTdhvphauNjpg2CPDkyEgqGn4ieA6yiWkfViCVqYaDTEjZ4gJ1tZhPKL7MF",
  "key25": "3ypnR9D4KF7s8evejorsBfwjPpmgdTN6FrrfXiUBRpQ4cQpeGeJhTPEh8AKmMH3wTRqnruqUQHBvGw7Ck6QzoPMN",
  "key26": "2wgFgy1iVdfcQqUU82D16MNh9ZepKcdsENxMvLHp4qSB27SpY5nMwE8Ensy9FeC12cxyCnHUuGjBiMsCSsCvQjKg",
  "key27": "34j1RV491mL6FVGkjN6MTHfGpGt245SAxCwnCyE3kzfgk4zKNQnp4faVmdtZu4nEoRRKmxTtTmrvcf1PAndfCD9d",
  "key28": "Q6vGbzJmq8GDPpSCfEeks4LS33DorTcMDUrZu93aS3JbRyURGKyT4bgJyyhHEZ96ihFpg8ur1GajDHK27ecLAag",
  "key29": "4AYHoR1u22rFYna5g6McFb6zeo4qKrTWtA3imZRWrZeNWC8jW7RB6guiMAwYni8LfQAvHzF6pDPDfLmBmaXD5Pxr",
  "key30": "4qE4axuCsTHqwMofdp7WUcxedFCNE4nxvMKkP5rBYrNrLNpawCueqAXTXTA1VVVKwcgdcs3S3dV8SauRAVdHy2FY",
  "key31": "43g2uMenJSRc24p2HBEH3QTstsmXQNeYdFoa8mZVGVG4WusaTmdD9VKVPuFyrN96swhhSnLaJanzZUNeTjhYfHSb",
  "key32": "4ypvHT8G7ZyBDHSu7AQbrbLRiGEHzA1LfHyWF1pwyB2fodh9QzZazs5YwjrEXsxB7MV575Ah3VzhbuKBGJXBadoz",
  "key33": "2cgRp4CQxXsTSadYUqmLwCmoGSWrwJLbwDyAuB7p8shpTc9V9YgNe7YwFVreyj4xUfFwCBvdhBJ4d9a6zznGvJ9e",
  "key34": "4AU8UUjbLJ6rFqeaQzkkupKPPmVRM1cGCr3qAFrVd7ySaZF8DXE3R9Bhg2ZoFvYEYAX4sC1cNrFVY7gSNEGz1dpt",
  "key35": "3GP1otP2k5N4f5K2G6kKEMHhBvxqbonguaQUowguaJ8W5a4zhYAYZULtYkMLTFQWWpRXTsXeEr1mWEmxR8FyG9YF",
  "key36": "48126Ebhg74BiSDHX4YdiBhMFL7U3pLyzSeRx5TrRsJqvUMKswum8VfrC4HvPoawMqLXkV6tmvRvqBhhzV4grYJX",
  "key37": "2gRfHG4hFwynAq4tAAdwEz3pgSC7agshbJ6cqcKmPgCZyd3oomMs3Wk4EyfBKgajvQDsHre8Y48ipnFjf7adVHec",
  "key38": "3gYh6fN4jJxXBjrp9EAxUsEmzAvvSAZUprLuEyMMBWzLNZzMV8nPBJi3qdvZ6xHuaAW2DdWeGDRMkS6BNJ1qe5fF",
  "key39": "3MH6jEEt9BCBVerUHnoUfpaz2d346yK2fqb9siwayTtLyv44NiUrVj6QZ5QLVtkSiFXjgWyYgSDzAdevtJhucFJV",
  "key40": "tgPzZXjb3YLFy7FfUxaWznLzsEZsVUjqjvZQDB7QaZ4bxH6BhLi2UKx9t5R8HGMfiMfLFm4J8NVjTp48zBiQina",
  "key41": "4jV4QPPsh6xWW5gv72guQvBqBbFduob7uW6E68vxJ5jwUdi6Pt4x166rtSWZisRze4v2jXHkfPwJRYcCePDZNGfD",
  "key42": "2fbZFyigMdnP418RnLdN5xtwPFtSPFAQ3mLrQFX96g2BRZ8wbmn8Zq54pf68Dt1Fuf3rmPJrRhAB7jHfFZLQ5VXR",
  "key43": "4MpeccKVX1LgksWhfzTJwmyzHat6u3Zx28rERLTCHbBC8oCYdkUh2sBmjMXcatHPGYv4QgQ7EqLYXyNoAJ2cKWxN",
  "key44": "2hNMT6ZMF4uJzBRW1Lo6xuvQdkSKdbHPPzPjR5maZw65MPMkAWY1ebR7vgQkidW3dZ77BQi7wevpHedwRi6WvHM4",
  "key45": "Ag78obDXcCEotxFP9bsjMeMWbAjhTWTdjW21fx6Gna8Tx6RcfLoLFNzc8KLxruCF95k25MSjriKuDSd6GqT4WN3",
  "key46": "33C7CuLUEQQVyfVVRdk5Gv5KyuXKP4f9mtF6DnFLsujNVUsnQh6qeKh57soniFAbaAHXkzC4tk231mcaaw9wi9B4",
  "key47": "3NoDmjb7NXENDDuXpty2P92dNDz5wCpyryT5AtwCeCCXmCHoNAbwtt4KeMM3PBEZdDbeKp3acXp7hkWAnvXykVuW",
  "key48": "4q4otUv7YmugQkbrVSE4NjjEGyU5vLpxsQCaBF8oWYcE5QRZpUgo2SbQ7nmUr5EPPaDhgyqb4yXhkyTBEtsAowif",
  "key49": "2X4ZBRdioTKwtra5Z9X19CyzzmKY73nLqBTFAEiK5xCCPruQZ1wPs1LjKpNWCydutjm6bbys7BEYBeimndouBDh3"
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
