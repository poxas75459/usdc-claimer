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
    "4NpJggcFPY18RjhB8qFZDfusUNAJeHwG71ZhTuUdDfbPZBcuufgvMW2FzeevJYBrRLuzon8ANfwZ5umzccR3gZ7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xszHydwzaQPz4VXukvzC7MLwnqkcyvpG5mKcsPAFq3MoQQJut96te9acnp4zeFSYwJ8fyxemKmNDEbbVm34HNKg",
  "key1": "5ygTVAKQa3J62bLYqmsqcDFcib1ZkCpS7FWCvHer9kotmWYDLq4oeDDT3xzneifbiMqxiqyhz6R72vh5yLvCVLKN",
  "key2": "5MpVW1bdKKwVZUvQ84Yo7fJLjFCjq3wewboXiFNhP3yMCdR4oiEMksapQVH1nLvuE6SKJUrq573T1dcSGjMMUPYf",
  "key3": "4AUwXhDo4xX7aRFy9eowCSsvz4Kico67zqeGtNX1wWfSPSHChwD4BUuNvythzSagcwC76kUxdAQMPKnRvhsKLSd5",
  "key4": "4pGWveVQPt5QSWGsknTdF8HEYNqq1mE5FmZTYwE4bQSvxh2xT7FxXzfwCJLcKZmgQA7NWfTVqjcAckxM2AS526Vf",
  "key5": "4JDhZ4o8HjyUw1W1oY8Mm3YMKjRuA9SET3ojtW4QsY5hh2QfnqwHS2MTEGvxSRNptqwBRe5Sc9bAaKohDQHKeHgF",
  "key6": "5UdpG4XG32Xf5SSfdmHh53eE8mjVpmckjrb5CRJZmJggH4ejVju1xCgQVSzhqrvVCageoDYKfPbWKYPEmWEmp65x",
  "key7": "2FuPiR3v3qoUYHG5kKWt665okiiUUGxB4SrdUM83eCD8abhaa7hqVZa5P6yLJgo6JzbqEM8N4tARKwxMPTTwaWcQ",
  "key8": "5np41TMHpVG9ymgTL6KdyHBUtqr8Y3s19mtCoo3JzpX9swJrWXA2N1YrSEDrQ7dx4i8QWX6qRwLUMUUMjypkF2ie",
  "key9": "3kVQEyLSzSDdSD4TCZWjNtthancvUfCsss1SrnvHhb3WJHKqbZtgWJt6Qj4csymUYRqpus473iodgyJGyBaq2DAJ",
  "key10": "4TRBDoQKXQxiFewaY9AobnrmmujLGVE2uPwhjJ3qrZBEPqjeGzvvnoSa4iPpEgUij17z38BXcBrAnU7XZGChuy47",
  "key11": "Rr9nMZzQhFx1EYdRxWtGh9CCG8mFFiDye7C5UhnzMUvBjW7f9bChn7TwCMrjm1SZ4fLUUhi3d9jsqsXgKsgsrFG",
  "key12": "2XmRYVY7Rn1vsgYVw4JRKWxNYYgr1CoTsxH2UqjujJ6mP4ngWwP295Z5qZqtLGWad22dZSPe7C9CSyPSRpH4MuEF",
  "key13": "3FoNQXcbFJ98n99swGA5Ax654FSd9fz4JWsxdaotXxbMiZoqisBM7WkFE2aKDVqCGAPK4ZuXZzXPDoVcuCQrzVLM",
  "key14": "23M8BrgqmLFhzU9vKKfAAo29Z4yaP2HsAVvLWvqcs8qpT4GsRLg7vYAsxmg2JA8nvesU4mej2ndRGx3ArZgceCUP",
  "key15": "JaMeZgyAtix7YL2wkGQQu8gYtS63jUErU2MwSX6b9fXxBMheGajp7o9yVYeTHQPAfqaT6hDYtSYZ5VfWT2BZGGF",
  "key16": "4bjsMerhmG3JHUUVi4uDVERM3MHc4ekGcesmSEfZ3ggFLUH52bWrje5KBAQTmLTHdvDyJu5Dr2xzdYc5wT74WxZq",
  "key17": "5Qb2aHeCzsaPYnz5EhiXSH1gW4T1Eueh4SB6M6oFqxC8WYVurQ37EhDRE3M4FdQbdKY1dwE8iNEdVx1oDj2FtYUM",
  "key18": "4Wcn6DH4H2ucqBp38Uu4zGHUmA277EowhahpFNwrk7Dqt8wccQWK4H1nJNNdPq7iLvucJg1XFYDMuSwGGUNn8cQv",
  "key19": "rhJ8oYFdWbquVQhUCpePxcAterQFgcFCTrZs4mhso5cRxpYCuFad9iWWCjhWp18LKXmAJTqHsCShNe1EWFvk2NH",
  "key20": "4vdQCuo9tL95MGF7SsSanf1nTpXAZePDeotaxix5XXTDgjcjkpnAfyh17tVzcEMHykPWajazDA52dNJ5q4ncy4Dm",
  "key21": "2bNHr9VDYbcBLnGf9urMHvtAQbDXpQ67V2WGHNndEvzaUAwnrPaMWE1ch5bUbEtc2tqVmL1m6FtcwZVVme6KkWBn",
  "key22": "MvHrPgqAqnKf6vEowprcTvHGZobwcpF59nmAjcydZQHG4c2kotAuSHhMaUQPU3UsCGYLpqTCpm4SFEDpDEEzPXE",
  "key23": "5UJPZCEqq3ahLUT6nc72z9dXYkTtHjsiL8z5Xf6rU8UmLADAkiiXeE3ezhsk4Q9iJ7aKWvvDU5kkJFHwWSe7yTia",
  "key24": "2WvFLEYW4RctmrBFBDsmfyZvjCztX3rVLp6rXmTDqRQXgpbL6Fek68qQssGkCh6WJrmX6SAuw1TbiJf59VyGHcMH",
  "key25": "Di6wx8XZYGgmreWn1t2ZqLT7kRh4cmQsa5qbmQdbsRTXiKfnurZqcfab5PMz3RCua8MEgexZ8BYLzjyyeDvnq98",
  "key26": "4gZKeh9TxdS5yFLZ34vdo14AEaDGchkC2CpXRneQfGTAPSquERTHM1KVHuKwETaqjk2iSRm8jeFVGg5afyZHeg8f",
  "key27": "WfPLr79ygopN5n1xkx6nhVMfSYU9rU7TBhiG7sPeiWwJJ6csJxD9Pg9Jo2dXDmuXhoR92R3T6Hph6vLezfdhyxg",
  "key28": "kFCxvxEyJvqrsr7wuiaHNbPV9q6p8gL2hyqavLPZ7fwuVcMhbJKwSP35Jk9hK9isyBC1uk5iZaUkWUjHwuKL5sT",
  "key29": "3TCX63m588h4rzU5xbmVH1VsPZD4iNy9sEqiSZwJ39yHAx2sHm4HvJLg22rpaRHazYDg5yfKNqcPHjVLTcc6Q7vs",
  "key30": "MWThdHUQzLKb6g8Sx3t4xDStNnWvwKPBKdTPZxbLApjYMVRe2yCwE8ADPUDUdCcjthgTVGTJiNTejQR2FNdHR1x",
  "key31": "4H2n96ax9Ls2xDQcqwHALGAoxWfr5uF682C6FjnFKjdefPzkkeh8ZGzV7QgTLd5CsMUqCDJozKYeniPSqBvY9g2g",
  "key32": "5ad8gzgnnyFZtqyN5kfUdxPc3jeHSSByZBeHDtBPfdn7pXMmtY3jGLoAMB6Q8y6E1UKG4ZDjGci6znNnh493f1KB",
  "key33": "3omUwzqETM3EfFgE1VV4XFBUyqn9QzXZ73CVf3QeFnSQwnXXZy4bpkjFVpK2L2RVFufi44CKP4TGHgvkXjcAFsUj",
  "key34": "3FGjAekJh9sz8oUfUu575aTAJNSwbqh1pzSDgFCQYgCmkXN19gjvmCrX69yqebGWMi6hBbJkBqwstXbGKeA5foX6",
  "key35": "2GSHwyZKnNPmJgy5XsxNh29o9X9hJyNevhwir2txkSe7XubS843tXyBersMQyEBcz4ZhBg4xunCcpigmbfhBR7Rg",
  "key36": "3u1KtrHgL4remZsrzYMgfvKssNL8f48UUSoqDwjLMy6mcVqF51fpsyZHeE1qRW6yLh1vLa6JGufpa6xwAC5EJibM",
  "key37": "5odj9a3qHr97dNzgBknAZDDs8dKrUG13svrYtdaaodxs3kdCmuNeEjsUtusRCFohBujKGhAg9zKBs9aQjdek9g3g",
  "key38": "2QVYs6UpUzRKG5LwkFHtABWQU9Z6GE3mPuvFef1bDzTTAXxr1ZqTbdVhS5QnPZik4VqL3PiViD1oVPp4dDeV64sT",
  "key39": "hHqLaxQ8qSj79T3EUs35Ft1pVaFzH4TDjt5wiB7Epxw8XMvtCQMXz8KoF8hh5eYDpmddZ4wU1jJY7x9ZCTsAJx7",
  "key40": "3dru8ZmdGCuV9eC8HbD9BKJ9ymEo8cRXmaxhACygUhriigUc7uuBaYeSWfbMap1TtjUbtqKUHDys2CMdAjLLtMve"
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
