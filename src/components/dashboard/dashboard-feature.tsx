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
    "4hzXpjMC6bfMRXz7qKotXuft5v8Hr9ndjHj4mitVU6pXSHPZDNqaywA7YogUccrrPoFp3Q9iqY8TaMpMfR2shKMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t7RoRhdKMRinRvZP1Xv2GuWeMY2NaSvvKPGbaNrcHB23EcdGPHEdLqEhw5EHV33odVxBTTe4JYTed6jjzKd6quZ",
  "key1": "3uyNQ97H7qvzMJ1cXu9HzDEzhbR4CH5nUxDAKTheoS2bwRt75uawkuxnze18Kc6HvPX31SZ6VxHJCh7Q8QZkasAr",
  "key2": "AqszaUy4tvoPXh6zUUkVs1krg5jvVTkWWra6A7b3mnQdHL829nd6xaG1Ec7d2j4LuRcQfdEMRVYxhZTvB9bpxZy",
  "key3": "2cEMZ7bsUumiJ1qC371k4xn1bqzET2usLLg9X6veLmCyycDv1GKUsxzD7aT8yyuPoApgwVxqoLLoMUnKLS2Vcaom",
  "key4": "62Vjb7jnKvLPGMpYMLEoKyBvBEoXLX4D5TvnWcEp51xNVFsLEPHVnqtcBDMYAv2nP5DdPjELh1z3vqo6akWiZ3yb",
  "key5": "3e1wt5ZrM7hUXiw4MfPdjKGYPfEshM1GWaM1js79fj1seDNCJG4VDVqJV4jBzNys8CEAuMnrbL3NioPjRMpYV5wi",
  "key6": "22Qxf5KWGvzmHsdQ3GYbci4UZZQS8rjV8xXkY3tXqAhKjG5oKcypNo7Qjy82XnUjka7pySCmUhArvAgoVfQerV2r",
  "key7": "2ReuHinKQmNoHJ6AU95ZXPpJ2ySKaFMHcPFaq5jadBAXCh53uxCugdQ2YuJMiRvv74gYzwk4VMkcYp57PqsjtaZw",
  "key8": "41h2uTWKzT9zSPvxPg6wm2JvcqRKMVst3SiQtDNL5T12711RK9Bm68EGSsprP6dAF1nHJJC9cyaihRbGJp3cM7HN",
  "key9": "2XozwfeWs5LNfX1dpfaAgMXrtyq1FRY79MnrM6Vd8fsjdMijZ3NPCMRGswfyXkxF5XDh96tUev3uG9Pj9o7C4eHj",
  "key10": "2wR3qe8L8dtibQkWAEE2daKPyfzhPZ99ebJTxAYBcqfsXQjLLTAmnSknDgmvjQxgrsVeWU4YFcgAD7pGqC4czLJ7",
  "key11": "ptPPUWDyvf3VJXxb1g787vthtt3Hos9zdtnU1QHKUZPUC8Y3AryaLQdMuGuV6BJtrqUWMoAP1M8dxsyLRdTU3nW",
  "key12": "M8FKhvuQKxCnsBJoMrpnzss3wSgkfPgxHvaFcNQuwkpbjUq9P97yxumWiB9zqzDmRWGdf8uFPAhy39FdLQB7suk",
  "key13": "5Jm9qLAWRyznRLTZLoqGB9kMRM3XwJ2VUTGby8Er33vZqHgvXuMrcL3GykZDzVTEbKfqhtHsVZNnw79US1AXJ7qT",
  "key14": "47cSFnfQ5J2D64pZ3MawouXSqHsuEJ2aw7Xp52brbL3NQNrCqQAJhvykAQV2aivbK7CxcSnn7MYZkM7Gy5xJ3Tv6",
  "key15": "42dk753fv4KejEeErkWX23xx8RiH4fig7LeMhZDsCbW2PLoVMBRcgAtVpRfcezcSea15V9DFTZPFwaScbh7Rz9QM",
  "key16": "3cpaPZWRXyjk4i6P8rmddHHCL6iW6kiLJrJmVen3pTekjAPUgwK4qa281CnBMivC4UqKYUvU6szMejkq2pWvadXs",
  "key17": "5741tzHCVMnRA9YvQ13NPcWWTkZtdtr9keSQJHo4WFmxRQKyK7sK1DdmE5KNdkXnHi4aiHz4E3r3Ab1nCJXNjWKX",
  "key18": "sh48xEwbhEf2t1rYSGGQyxz7bFD1Qa83YeJgMH1HAdFA4rcnW86Hvovc9bHqZ6D4T3w6Y9AzpQkU2byWCz5aw8D",
  "key19": "5SZXwGJfTuDJjSPvPEQn2YhZWXQTohappWrK5DAeDBGsh7QcLiUSydcKqWga9MJLefHvgQxutYwVHUbqY3RQtpy6",
  "key20": "5wc5aRY9zgJQ3PYPpUdsortQbyi4U9MP8QazW1NEB3v85hiVWShL5jG7VMJFY1XDMjygFqvS8CfQH4nyMGaVyQ7U",
  "key21": "tFcq37pceit5sgbnHK7QdwW2ENzoREysD1Dk7tvDcS328bgRSXk3y6MPvP8krZF6gDdW5vZj9h49YWdGSEM9UB1",
  "key22": "2NCCoym4FNHmtcpJpfgM9zV8t2AAvY265DJDgFnBkY51R564EwG7FcrmmAND6wUscztYBkYcMKsTDdQwT1bikLRX",
  "key23": "5RuuaXinefts1eRwMA8cqRCDx1jvdD4Cruyu27XThtNqtn6SqEwcopBj9KcodJgSS7AFQzMRKqx9iX7bGNqoX913",
  "key24": "5YMnGmL4SkpCztN12Da3qvFBah43kVdDhvP7F8SXLdqCtZDUnwBT6amPPEvxCg1jAoEMFi9U3TLaJDqvtY68GJHi",
  "key25": "5zPQGAtwohA4vmRnvnsX2gCFYcebQb5NpTf7GasMiwn6J3tgiB2fJKZb5NAYYVhgr3WBPzPGw5uUocdYo7gdKqUM",
  "key26": "2Dzn7ZnFkqaF1mHgLM5YhbE6aseRQqHvoSoNruBTyW3o5sYhokUEz3JyLpMWUc6Lf7bRyiWJQRwrjmShmvf8Tkta",
  "key27": "5UhuCDx6X519XC4Zb7uDd2k8Qx3pYSHXfgrAXqP4atEsGqTYWP3RHuSS1Ybz5c84bmNWLE79aNhWTTVk34nWQ9fD",
  "key28": "1qfKmcTMJwFwmwEfQSJkfPdckxAH4bGxyRb9VfNKM9Jpd5hyYcMe6ywSLk2wydT9X6GzVQgEzuMrM9onFhbEcFs",
  "key29": "eSbwKFcR9weCWpQR9YTdjdhEiELFcxCm1VsdujCcs6DFkdWnxiyTvteu3nGzzT39R9JDNaWRGMLdTuBWXXbmCMD",
  "key30": "zoB25dvNixq184X6X5E5U5ytrh6zaYshxWx3sWqxVPKS6zjCFAvyqjwdyGHtZxTKP7inWK6C8FTGEVcnohoAqeM",
  "key31": "5NJJqZs94N5DQgPv9ZnKZ4vUDfhqz6q2gLhrvXA9KS7HdZCQt5Ume4cPDXfTxiuKnSB5jBSwT3t7qokqBzT1z3sc",
  "key32": "QPp2LSVLeZbujU6LfH5QxMjeEHMygoNtJgRqT1dMvXCVFKi824Y9yVZqmZNF364L4mSBVYEwzkLmpaVZkvCWLh1",
  "key33": "2FPg5cSEz683T5ukssf4MsMKNuTqAo3pjPwX82o2AUpvwnk77eq5b9ioMmAWjUoin76oE3AafXbAdXK8rHPrYs5f",
  "key34": "SxXmneW81iznwkqF8VQC4QxyYXtcufJb4WC28eQ6VGkejH8581JHqKgcjwhZZvyXk3FntWWV9wv1g58xftfz5mC",
  "key35": "3aW6HKp8Xi8grswMNUJpuwCvp3cNvKTXeNGtkWJ7FjwosGeRKQEGFwwEDAur97zXxsyRJqJRDAgvZ2gcmF2JGvfw",
  "key36": "5bzWZoBWdyU3EHzBkghpqMd4H93B4rC5C7DwBG11uHJYDd7F8NKU7DPVxyqtp1eE23k3At2ETqB55av9av2aXDn",
  "key37": "cJ9wJwga6dV8tBt1hCLfkG6BFtXFTVzzhXoUEVzTS4XjMyApQnNeUdPc2m5JqfjTjBMtPnD72uuYDQ5ZuJsWChV",
  "key38": "4R8hcXezvbvVQBWSAyjpZ5cCGgoXMVq1CKv3qab8nPUcVTXv5w4W6fgMGyhNPuFTrqg8dyjNQz5cfCVbaoZipPm1",
  "key39": "5KBfLKEKTcTgHTxmMGXt469Vg11DSqyDaEWCjPisBztZYSCvfZecwSFCMSiwvZ6EEWCZhGuRbfPeEcoNLNuec3e",
  "key40": "2a8dwQ3gSuPGe8NYYAriyNv8dMd2nZvnJ4gMQQR3Eey4ftgRg5dYhSVoNKgovCFkfX4c9n8uaFYg65A2tqTVmdEd",
  "key41": "5X5MnznCQogKFSUAYR9STEgxhu85dvrLjAsLit3xLbef8cZSwXLbYpypL6PvPq4b1o5xLuPFBjKygbbV9Y2hBZxN",
  "key42": "3wymUNirpTrirU6cpBuqFxQmMu2n8XWDhLZyVFAKiw7tBcucxzTG2EcNqDaGhwRWP47J4JeQ6maSDqnKaEnqzpzj"
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
