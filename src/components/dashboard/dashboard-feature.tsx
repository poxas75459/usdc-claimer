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
    "3kPJoDmvAA113eBtwtJk9zBNqwR6VLFjC7SecNgkexqqBDQEMCHoyR3xVE4HyYbTNAVckR3PBgx8JtmwKnHthKUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvNsRkieN7qFbcVEFLigrGQJfEkYY9FqdLcLmhPnVr2LzVzKUoy9QE2qwjjnJqfWdwE1ZRfFjejEMPEVNNyzcpM",
  "key1": "3yjkE5UA8uwroPatkGBku76CkG717hrTUJARgQEM6kQexQvTQUjZYEVYYdKGDfvxHswr82nJqYNSHvnxvTfHL498",
  "key2": "522iebNoH4uQeEjgVtwjchuQpnGKWejTNsXDoY6HWhQam1YSHYe4cdVPerxyKoGZUZUiXg86pkbx3BAGSegSRSKe",
  "key3": "2hcEkBy76FuHd2RzzPMsJCaxkVEYeH73VW5NxnzRkfvsV4GUsMmmitsMF5WsLZLQHq9yKQBcMqdzxubzcXvnVmo3",
  "key4": "5wN8Vw4E5t99mzUwQsZjt53ptQ9e4nAsvAQj3zxKB5cGuVX9hyTXg7A6GgAnUbo8fuZWpBCV37ugEVViaXhXN6Z",
  "key5": "4o9JyqG435c81RGgkjr5mfCG24yFmwYZnVswCFvZprEiDASBmSnibJFdMx33biPUaBJN6R4db1EYxUjLA8k1t4yi",
  "key6": "y5Pc5J5snTLP7vHKWZTNnzVaYjSHn9zPvq63Y1rz87e9UBgoUpjbKFt8xCstw2TEpZmPX5RqrBLUs4u7E3WRMTW",
  "key7": "4u2jnS345bf57RpeZoiQbFfTt4XqADPG9h4P5s2FkYnNqyAnVjxehxXerfEfifeSJc8KJnXBAFf658i2MGAa5VF3",
  "key8": "34xT7eTtyN2HsnKW6Yg9yqnNNamtroXq3WVVFTZHT4z8Rv35NyHvoxKbtCVukmcrTgrbLhY9teorUFGoYbbpiXM3",
  "key9": "44HfbNRzMgstPaGqQSSrWo8j5U49w4fqvRmYbmDTPJLudR4NzEbgfdsqqRsizGB9grS5gdCqsarZCootF59P7hLY",
  "key10": "4grDP8Gwiq9iV4mVG7ncZS9V7s5684iAuVHRm5L42TwSppp3NKPf2Cc5cVukxSYShVaFUyhFFMoauhUVawykMF3P",
  "key11": "4L8LsVQ6LcBv8Esft3maLMbuAg7dSZmNrQGZSe49jPqHx7cYoFrCt5Bui6ShHpiASYZjrrv4LYRESYJgp6j2tGoV",
  "key12": "34KbbEYsJBoRGsGJL5hGVUBYvPTgYJck3EofZAmiL5quwag1ALFEcVkauETpgF9urNRqFFRgKrAyF3LrkPuQ5624",
  "key13": "4U5CXhYQpaneo7RhF8bWPhSXWdTzNto6Qj4BxpHbPRGwLGo3pNYSTnEq4Dv4TbkQHmazcvfgVCvqW7A33Sapg9zw",
  "key14": "5tM6J4gwk9XtesU89K6TzoiWvDcd4pw321VP8iDno7VRQaK4yV2iSqV9rHAr2B43D66aCzV89oK58c3R1KX63FNt",
  "key15": "zqvwJmnaUf12ENGMzh4WFs29wcA5dU7k9BU1SdJMCLn9okCWWvSAufRfpXYLUaacRwswWGBb5sJtPKHJwHe45ay",
  "key16": "3LsbAoFdXg2zXLzZ7VEc2uvtsupX1fZmp94trhALxvkfnc1jqcgtSg5j8rNUa4hH1R9T1b94ipGUyKxVJgsQnrpK",
  "key17": "2JfuvrFk8LQg1iRpJXJjFL5d6QUY5xFR7apcx2wMnNvDcHCWp897Uv7dsnoPshMpRxz6U19He6QDmr2LZNQL7HsY",
  "key18": "3bjSRqEQ7o3V8rCpAeLKXA1KRrUmoqBU63VY36BbL4fppsoWPBMeQeBUeuPDUyeYmgo5MLJEjzhDiLBky82SAX6d",
  "key19": "3m4LP1EocNzdfHbCXKw7H9vXLWtAc1e15nyrAZK9JehMuYJA4daPWNNYobyddXJ1mMUZ9aMqq9p1Z9TWypCNX3fU",
  "key20": "3FtFWRJmDE8GwVsqCrECA8qu88CBpSzDhreiLk3g3t3UMMR9kHYMqn5MZBYb1jbbf1QtXvPhiTLjCqAvdHYJbugX",
  "key21": "5AoVKpiD1m1hAJbZFvEfBkbDSYHsPeU8JZZ3p4JYCJbHVAZsrF8erZQmGZPkJx5gWUs79HP9Wi7VwuDewL3T2Wqj",
  "key22": "5qpFtE6d8Bskz7ATVtGcXYwEaqZAwveZHM6yT7SDvvHtx5yq3BVADuzKDtzDWLfjGg8M2ZWSdNdNBnN1BtznjrJN",
  "key23": "3YJzGxEj1EjzaBF9svCrhY6YQfqBU669wpAR14gbFsvKx778oxudm3UY4YC5o6cN5vyZbqJH5J6Nv421xo3vf3uq",
  "key24": "47Fd8gofvDu4DoQHtba3mrnoHFmtLQnyt6cuhuMNqBpm3KMvDUHfT1pwRrBcizGfFSUZFY6hLgRxBeni1xve3mGg",
  "key25": "yWasmoeyUwzEb2GwrFs7VZtc5XxiuXWj4VsVMDyCwMoyjmJGyMGtmmN9jPEj4VbDQd1Zf1wbXCdxr8vmbrwSYqs",
  "key26": "44MAnwaHUMrYtFZstyNpwKqrGvsg8uEHiefF9MW8VqhX9s8Bp1MVfKaCfcTeffCrpqeKVcB2DtuY6tZor9r6vNVT",
  "key27": "uB6W4KcLTs6tjDjmNoHS5rY1TH128DfKn2h1LCg8Wz5Srh218MrZKXSbGVorD4Yuqpgq2FPntbhbCajf8Q9MDju",
  "key28": "4gSfR5pRE5HQeCdWUn5YCZ1QNABNsvCboR3syf4bNQCLLH6RrZjtNiDAmsNMXCDjyKugQuxsi33hTSuTmpAP2VhU",
  "key29": "3zsQiiDSDbohKs5uTJhrVfua5ap8mrYE1CqmNRcwhfCjrB8T9fAaXhDq5mKD9LARHKPom3oqSAq11RJkzo5EG7rV",
  "key30": "KKF6nEmkMG6LsJezzYZ8PFTHTYGvHWy2M5opd7GuGj5jDDfQpzL8HCJhKMmkByyJTLpYcPy3BXneXq2YV6KYjtb",
  "key31": "3C8d8AywjYuSVFqrsQTLZsShpJzAz8kkZhQuwoa5U6AtiBoHiyHawRyW4AvtfWUoFNedDFBMETPKqXg66uFPALCC",
  "key32": "ooqsQg1nj81xTPw6zf7MxAnnSGMyg7mGczwZkK31FgRrWvzdZHiWeGrsR5pS4QhS6y4WbKLbmBT2nYnSw9r4Df1",
  "key33": "41khPGkZ7GsXmkSJjCoZczspvEVBNcpfVFoMiVXc6cFeiT73nMiFSxj4GHEFQKL5vGEqskQN5iPZqpBcQSqMnA8n",
  "key34": "2s1LcFpn3PqeaPHmYBtrfD36gt2QcL7FxKweQrB4Co1GBApgMFbBUUocheFLNdW7SYgN2ATEiHtUj34MzLrM41R9",
  "key35": "3v5ynFryfkhzFKXyRfsg8R4mNbPBkX7kzedtbDnwKpZsoNWj8NsCSAJLmRE6pYfjANfqTN9qHdkQFHbhnGPUefiN",
  "key36": "H6BrBC5m8s5zkfBqbwN8b93Ksno3ANtcfsdFHMXZFXLTDpNgKmnCyARUxNwPrwD9VKwCRheaNXZmrqmxat1h7Q1",
  "key37": "5sy1H8uZQbxBbEVvAGaPXRodm9R7Ui2wM45kyEMyeXYZco5ZdjfNY1n5oZCnFH4TkYcV6jrNJ9F4H2XQVzdamqZN",
  "key38": "4rm8ixqfbhnWpUuRiYgyPms3CEMYbHUDDfWZwAiH3JkZk7YMRSobpEmGHHhfNHJmAgSxvdktMhpqFxUvpbnC7vHQ",
  "key39": "5N5V7QzHJEtC5wGVUxcwG88b6PMHMiTjEpuaTCqBhgB8qtmBZ9R1tmZqax5awA4i77ps4eJwi6bMS9CzYXJPBPLr"
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
