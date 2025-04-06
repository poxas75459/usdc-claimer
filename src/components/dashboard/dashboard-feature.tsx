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
    "EkTFjTBkGwJTGVHENxXQU8Ayfu2rEHSniZXyCbVr6nYrHxJyuGRQsJw1gRfDrZCTvhoGC13i5FqgoPpLTLph1BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5miRKwAxQKaDkVKWkJYCi8xwwXP5uGRyaGP9hrsq3RhY1WbUUR2jJHwnQ6SJtbcYjzCXVS67t6XwsVmpVNWkXgHz",
  "key1": "4mnB3rtK6Wtoa4wjeZKMP42KynxoheNEiRom2ErgzG776s8V7fKfeAhiDf7o4TQnLgqLYqjReoyq4R21toWbCL4s",
  "key2": "4G8am148xRakxMrTGx18aL6T7gLn6kZwE8epRtZbFTDnZL8ZUAJBz3runeGwqYKj46NHAQSefazp5CtgccbGwZry",
  "key3": "arFq4RftJSVzGsQ1SXYE1K7Hz4KsWUW7YWQcrYAUYLRhBLcsRNRyZinkWB5GNNaBVp7UhTX2Qor9zEo4t7RRQCU",
  "key4": "63veFivMqVihZtSakphrcmENFtjZXvho2EdxboCnJWqHh8qU5z74oL4Qx8115PRaTNMjQufm1p1roHEJjhVoc6ga",
  "key5": "32yzD5mP2yqYGmVf66BDzyjfdz5cDb3vcjwhCrUEdUw8Grvyf3rMEHMNHYxX6FRjrTTbfpfsgPjwKkknyarin5sN",
  "key6": "4mLyMGBrDuaCaXnTzEqCjBSaJ5seUDtvSWXfTytp9ypWyPGNbZX6pSRPrZBCQ6xk51mvJPNeAS8xdph26zUJJBK7",
  "key7": "3qYEGWGMKdt7BZLa3vWncs5t7YAgqHu9CiwaZtopDKcibqgW4obGkESfVpQ6sC7G3d53uyr4eZhMTVbDUtWTnEhD",
  "key8": "23KQzKW6uctNxRM5SZBoF96GcMbNqXywNuGr8bUUcXt8xGoNKHrZ6RJKginoT7wM66J8VcJ4SYUJdPdrdJc5pj5m",
  "key9": "63Aq1Z4Koo4yxPRBGMKEmkvJczoZbZFLNfUaHCXA13CH2tnVSeoNkbhWNr2UQL1dYW45yb7ctuq2HxovtWUrMFYM",
  "key10": "EKoFcwojDnVZ5LSTYL8tgZzb8NfZtZEN9aFJdtAgxVHNA5EsBpiMcS6jedh1HtypcbbYscJexa3dgaFRswaRPaN",
  "key11": "PCU8yib9b7GriYXE9MbHbervT1Mo7eZvdsdCeFPSqYQnneA2VJLmCUwLZe2n4XFkpf71wP7aSYmJoCgFnSoVL9x",
  "key12": "5mB6vUFAWdinnxbxFaD4z4nEbDbwX5uY7EGxzU2NZE9mQyAHibBBLU6jxrdMmtSCRusRE6PKAuaTRN9WhA5zqMEw",
  "key13": "4wHrTB24pMVA1QTCEm27BWa3GwfDXEFfyg8G1yeySvmteq3EFVcSfeD8HFihbWTmRg5TKG8WEYk5SGrWiHP9Uoq1",
  "key14": "3APWJLhn4KFh71zcq6M4JrsBVf9rekDS5DVpUioobWwnhAXsHP6A8oDFVcCvxz1PpNsEpA5XGDfoZwhNgwLrigYA",
  "key15": "5FWqbtaEiqFZPVzZAC7feCfLuhuJMsEQqEv5Fp2AVS2z47bXBQmpBamQXQNmek58x9tkHibNehBpZwY3QxdQnyWA",
  "key16": "5MgsTt5vqNh471F12rU3Nt5QAWQtLD23up2dqTui8QLjLSFVMcbWAaA459mKyKzy8o3qZzkbYS7iVd1vgaFvpSGt",
  "key17": "2F5SBRGAdvNeY3xJxot1uxKkC8M7zf5CgccCPmpCnT9W1sgqxP43YpeukdyEbvtKDeygpN1TSd7MSkQdpChcFmma",
  "key18": "4gmZ8ghMKtVwJ4uddBSRVFJ1P2pS1FxXbuLwbQzznJR78SR1Hztn9imi7TeCrSKiA9kH37Xt5GyEoVZd1EG9Sx8n",
  "key19": "5kZBvKgWuwpajELGAhioNUNn2pKFXZrA7Utb6LZrcjJwt9qoT8aJdF66Bj2FJn89SuiFr74K9onetkV7am9WEn26",
  "key20": "41pAHtnSppw59PF2zfNvVHmp5m3nsYYq6kSuzq6wzFnoHZc3nB967dppiCmM4dWtkw4cXdeTq8ActyQ6t8TojFQ8",
  "key21": "4fMopD5ciZmE1DqMNRKajHUQKjnF5VtucKwLEaGxSVkVmN1d7jXd2tNk4jatj9AtJYtBBMwHV53kNA7aih3N2nYa",
  "key22": "2tmySY9b6bVFvFHgXe5nVzCuB7bCBWy4o7BtqsgLnc1xf1c5NSBzxcSK62FChYcmDfMXfsa2UWHyqVsmtMhzDGJD",
  "key23": "4QYiERbte1WYNrvkp4iJQBQoiqyLeCEd45v2ExP9U2FX5pbBFvHhmErqs4jBFBN2DgziM3CKDpNs6vFr4g4brKY9",
  "key24": "3r7x4JFZszUKbFiWeNXfJMuEisTfViwv5NL2VkgHRVkok78RiMxzr92yFw3ogsKDkqmeQPGibJeUcdMemJSnNUGa",
  "key25": "4tpoaSM4bB7PAmGMEU2vshr698WwLydvbgX7LxCxchyqqiRpT6EtpKRpWkwpxMCY1TsEPiMSaLLR2vXeXZwKGBRc",
  "key26": "2xQm6HD22Lgo3WkUsDJk6BiAZP6zwTcJGKX8Q1x6F2y3CAcA5GuTEcDqUXNN8281BJVuWiN7C6UujN3TBxEYdWCV",
  "key27": "4KugViuVvnxA9hqUtgt85HVRLzYSaWWNiZGkFnhmq1Nd63oYV1atJXcfTbMCzfEt1PGdVNcwvq7Jb5wjG3ZtxNVC",
  "key28": "5XQSFpJw38f4n7Cdg1EQuvuLNaeE54LX8SrfBvc5Ga1hUxCUhF4zfMZ8Wu5Uu35Xe89t5TTGAVG4gknfiV5HGgbZ",
  "key29": "3tyRm4ujwdLmKT74fFzHxpp7ig9Q26qPm3VHGvU6iA5SxxKoFEE5MJievV5PJRmKdYhxrGv5W87aMn43uMTffq5P",
  "key30": "3BgCSPrUb4xCXn64BsHpr8to1aPuUnXTfSneHkwsbZh7KVtZ435cMJBbt7wws8caMrhibVdVAyeYJkGsRZKWb1YX",
  "key31": "5gzLFZhnHHG5cmLBiaAkMCHE8Wf3t6hRWSRzPd8C897TYicuCFAshAk7ZSEwZWG5HJgiy1Txh7GrwfcTzEVTAfyP",
  "key32": "3QhXDuPUeG5gVRRL7D8FgAu8GZLUewcx3BQ3Y9cxYwRwd7Af95p45EfDK2RJzqwXL5RLeAbk9kTEv1Kb7autk6qf",
  "key33": "4j4fvNnMSY7gANU3rAwd9tLdrHnkeeu1ce8NfDsJDb6cz23ijtEN1NRAnEmKxXmDiS3Gmsri1Y9LjL1CZJrFMr7K",
  "key34": "4QXJ3nU8MTRnmy99eLpt4NUr1C1FZ4sBA4WkfKjVV7LNVXoyJTHbGh76H8WJcbfi9DWViXqZwUH1Rnpr7rMEzvPz",
  "key35": "WvcqByJAE78N1hX8UAwvUHjU1dqnRN98ia796dR6UHXh3RAPKD3o9K15ELGCqyg6wP1SVRk4ZNcBu5omYjXzymP",
  "key36": "2D4gjQqt3z29vn47ri6GahCofNVjCsDV6fDJdiEr5sA6mCiWcrvKE4BW2x3CYmeRnfsS3CaRA815YfosQSWsZkyV",
  "key37": "4h1GcYZtWBHDjDAgFrQmGxP9cn33JQ14HJ9mrG4cxoqQuj68a1tFuhEft8dGitZ5yj7SUQbKTAPpN4wsqHpunL6Z",
  "key38": "3nkBJNU6LXL2m6zmfnzQstSoRwZytSUdYQQTqPGBj58bxsM4X19TkWADqAFwzw39kuU6iAPnYC9AQMquqbhnvNSf",
  "key39": "4cu7UWNEHaqHHs54dFec47s4uQzRtwHJE6gURVF6S9iBkgC5XwPcwKQkDX1gh4PYyvpcE2A61uzaEdbQMmK68VMU",
  "key40": "5QMznwNaZB5EpmVfCKgvbS4eqdJg3AAfTgUKqvC9XGZjozvKwo3h5B8HthAz6itYX9rQMRRLM6Z1BgD5n8xM8HVd",
  "key41": "4CSTQu833aPSfikRo4mDBkSYajBHyMxBzwA8L6jfn8YgQZdz4Vy1u2bVpo2oKPLpFZQMv2rT34vJentTJPqtMfT6"
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
