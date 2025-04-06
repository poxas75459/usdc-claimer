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
    "WwFs4YYTKJHk5PMKNUfEEuoS5HgcXSWqY1NFFwkxBnrKBstXVVjWKMHLUEXGVyUQajupVQWZu6AMi7DLqmhLuXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dmRAG7Z4Q72PgX3tDvpQmANuRUEtbHGvQiBmhpRsA2NyR5vA3CSewwV5xm8yN3cqe1scx9NGUmTDKM8371Tz735",
  "key1": "3Aq3zjaNVk25TRR2n6vhS2AFaQHpsbyxQxZin1THV7JyfVpgkpKb4Ap8e91p4E2DZzDDikxoBPcx1i6t4AZbVexS",
  "key2": "2e8beWJxF6G4CDbeCpyBa6VMZs2YdXZZqDKqDbNXtS1715qtu3o7KkiVpsuY5FyZCct36XSzmxVDcuyUTZ7y3JUN",
  "key3": "gxg6iLqz5J9Uyng3snR53KrMBwHYLThXsT9qfjo2WMo5S1mpKHY5VHLXf5cmAk87fcNLePJ7pi6RZKNXkkZF4T4",
  "key4": "4B3T1mMwWeXaW3GYRo5VE5izTtFUmQxwAbLjZ2Nij19ssa7TfGeHWiT7ffiC9hRxnaHeoVaBNn24tgvEVypFt8Da",
  "key5": "5DAz5KkEFj8d9iUe2cD86CrtnjcA5X6x2n6yR6Ey1x1HA8L76iCD7fF13FZK47ixRaWiWHmE4k2cxFtJxTrcfU8b",
  "key6": "3doJgVNySTm7mkF2gjPwi7J8uLJfE4JcDcyTfvPL5FPVoeBXahF472QHcAwJPvjMDgiHHWsJosyoGhYMRQGJM9SE",
  "key7": "7WZrJEsFA4eiGcRhAhcoWaM4hyp16BNQoUCL5iSerMXNYEM4Y6Mnd25VyBUDSq64RXcPJ5ykGxezhqTWKhuKAFn",
  "key8": "4nmw25NP8Vx2aeE77kzZhdLdcuiRXbQyw3ERkPuzfLSsTCmbSDRVdfRr8u7RkKLPvV6gZMLrcjCKLuVDqFBe6mds",
  "key9": "5GsX3eubCaQMwo2Mp6FK75DXTHPqjGWNEkKc1pF4S1CjjLdcGvn7iZdphyK6hw4D2aGdNftiecjCjH8pQQevvaPS",
  "key10": "2EzsBBodYyh1XjgQtKgzPUwSDR6skEpAxSRF2hKNS42Xjbfo49iSzTAHVJj8M8KoGYcqiyTgRbKkTfzQNKKpCnwU",
  "key11": "4M6KwDGFxf5Ek9yMzVdXHeLDgBE5TzWJ33ty5nKb28E9j1ngoyjWckSawWtoMXyr1fKNnmmgK97xiLRBePXFjxMZ",
  "key12": "2AgVFpPDn8aokBZNZpWaXXBAkSPFunCU6pLk3eeWrAz1HAn8nNbn7ynaJnbutSehgFy38N8PtV3Y8sJ7xoRyTtBJ",
  "key13": "299tp4nyYSdeWUYBT4bsbm8g4HUwvt1tUWYN6GF7UcXiXY1WE73Q8XexkZ3b6GQANd9M44k56pgGeRtSs2fw1cdg",
  "key14": "3RMJ43Wi7DdFLEk8zqc86RcdJVPQ3Lq5Zrg6isXFeZkFJmr5tFmvGk347SzErhP9jF1Lbi5T6bFK7STjffSV5zV1",
  "key15": "2mjsdxFGAsXT8VER844E6h63j4mFC1cJa3jY7mbyzx4LpUPUzWoMGUKRhmUzAL8umM1RfEoKZrcppRv7xQKRXvA3",
  "key16": "B2Yk4HViVPaczEdpyJ29zkKGrgHsfUSi71KqHPTP98kib5XcXQcLsQ4RxfHN2DKJkDWqvEEtV8GRD2BMv5vmawQ",
  "key17": "hUsto8kcL7x89s9XzfSpyt8zvTrey46XYNfbSegGSKsVxc5x27ig8eq5DMW6C2XNuAdFhXJLC2SB48C5PUjRKAt",
  "key18": "crPpiHCZtk4yYsXmyjdcUuPNaC3o3KSLKYgTMiNG49pjw5PJSGfps7F5cgCkVKJmzohpdXptsg1FYbHigKWPmux",
  "key19": "sWzJK7Yqs1eYPtZnhVUJmDiLDKWCTrgAGQ6x3bYykn9UiGb5thANiyqipKuSrci9gtK9uDEzkamEAw6917tAnyj",
  "key20": "4KjmbVrayUESuDkbbxqQZLNfTV88PJyPpEu2Hr66NjVRzqEjKYhnUpY16auhunT3x7iHSznFNCWogz1Q7w1RYRQ",
  "key21": "2PCXNfy5RwyH2SiJef4A8JsPgWt1qa15WdU1wZQsz8UvqD2J9mYSwfMxdPBTMgXfNzSD3jcMjjPP2R2313sMxWwD",
  "key22": "3hrnHKXv8yQ7wbdVxTRoSDhMds1zhA4iwLNbmJqBLMkUgFbqvyxkrHJMPXFiyotfB6qdwqxFomCEcEQpukANoUJn",
  "key23": "ursbAaMCLMXayUKTToT4HaHLCUBafh1ixUrLBgtPRLcvw3uwLfF11GjCLsRSU2mzfuJ2HkaBGbQD3GAFFKoYxAJ",
  "key24": "Wzvn2H36qRDmFNVtpM2HPTBy3YaWzNAuGYZJTw3ZhsfybBxcbLWDh9qFk1wQaY5q3TRUFwSe4Y4eRZU5rmo6K9p",
  "key25": "9dRtySGnWRs3hsDCMZx8z9jXw9nKYPp5zdScbk9wvEveeB1Uk1QiWYgdLrgwXuvzNNQCLWoUG3U21hQJRqviSCm",
  "key26": "4Kh4hvrTVJoVGHBLc8TCtftiq1QgLcbeRAu3WEuKV1K83oBYHjTbDddCA6KPW82tXRmZnp8DRXxCGa7h7BQdwV7",
  "key27": "5NrT8R7LERqaquZwJ2u4SPMUhxxnEVws7vzpRtQAa9aZXZGxQWfWr6dA16jVE8UUycUjb21q5RrgriM6H6b6SC6R",
  "key28": "3F9BVXov2sMPEfiPAqFjBda4U6j3ynLJbNiwzFPsCe1P4TAHzmB2dETEtKke7un2yJD3qCdya9bbTrvqGYopJ9z4",
  "key29": "2k3oqsNRXNtS3wJaW8opDGodcb4CZPAqFBmDMspHEQ9VCu1JuEtPd5V3m78LV5smGtGH5vEqykw38cmujXhjSxbq",
  "key30": "3uCoKaAXLmJop3dpCFGbGwojxLX8UK98Bv7qtxi6WF8a4vNjzTnS7dtrZL9Zv236C5NgsyeC16h7XwqhHvdBAx2Q",
  "key31": "3oVBXf1eqxGwZUDC5MkSWo6PmzRmJGP4MhE53pW5iWsZgskDhSmioENFmBHVJxBttP71Y6h2o2MYY5EVWqYHwxSM",
  "key32": "5hfTZEY3UyJ2AmbVMYeHmufyEnzCdZ3jNSEeiQQJTLuy7vQtz7Y6ucLC1ZLtpun9ds9acsWMRPryUkeC14H7GXGN",
  "key33": "2D4pokvRGjrmMXXhsDkjXMVw7s4bvjmSFKdzknoqgKtwWfZf92fHhnojYHkXXLrn2f8KzemNHW3jG5vdPe1StXgg",
  "key34": "n1HDQH2UQs1P1A8SRiarGmMtoXgr4Lt2mUUbKsWP7e2g1eH51EP76wJxTpEEodopV8qCSDteFLaC15SvDxtJhPM",
  "key35": "3ZTRKjpY5o8orLvk3nLb7nVHcgor8Q6zat7bQQ1zMfmbZDgYHkUkvQP1iKZ793712e4AJWTazzeHs3q38XwKJ3MM",
  "key36": "rXPjk2EyXAjz1U4hAToCCaZsYBbC5tuvgququ5VKB6SJ26VJgY5ByueJEGxCejHqf7v2QCM2sG6BWeBiUwGV6tL",
  "key37": "5yWCo11sr8RQTTznWtCb7FNTmap2gaeoDKqT4gD4eXXfGKLvkfNmpbXdHqv7c9yVzyLefUYvrXLaPjwdcR7XQ858",
  "key38": "mXPNEBbHhEf9UnSkH528UGbnx7tVNqviUjcKXTYynpAKXZAPUaHPLPD8FhUHT2AH75hGwtj6xSjpXefB2wnprJD",
  "key39": "iRSAVDuPJLDFYe5a3QjwU5hyACKdZj83LdTxWZ2ix9N2brhdf5BSw9TMRo3rwHH3Xkne22BQoFrvjvjsfJARzGK",
  "key40": "44MaUuecFz4FmBgFtMCNHXBKpa8v8qwCfH1NHNyCaHtidb629Fnfw8qwRESgf1bJTqXjyU7MVg5ZNEr8TsrfQFvh",
  "key41": "nMkp16osyc1yAnZBTBvtSTLSuP82Af4JQp7keW9BPUEaqumuLYJuQkJgpSDdZUusGDafR3iy2tHu4wzoCRuvpPB",
  "key42": "5DWFU9DNmuJwBxQNpdfqMCEjXqW1ynuoN8cWK1y7HkbisQBu5X1NkwyzBzeZsuKPR3yuvkd5rSRYdVQ7LGxd2Hz5",
  "key43": "64E4SbqTGdjnaiHvsWrV9zMJ2aRDAf96n5tiSXF8Med27Amh8zwGPy3jB5yGvbNnAvW41s3jAAYjuVbNG5cumy94",
  "key44": "3NtpPxFuLB8Y7MvHYSLNedyfvLsgn828B4mUjEPiqeQjmgj2vy6pUHhFALMkshKEDUHQMvpZxZkkB8GiFCRm1Um9",
  "key45": "5oUSY1UcLXNva6kZN1CQLghDhtWhoMV1MbRHfCGNp2zhkzvfv1GevDDW3ag7ZZWQNNLxtyADag3bWQTthsDkWtk1"
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
