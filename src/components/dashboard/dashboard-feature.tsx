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
    "3LdfumHeCReaCLdAFSF7asDWkgT9bHzNzu4WVawzNmV5xyAwpKSgUo25x3sv626v6iX3RhL5xaL1vfCNyFp5gx1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5yhQu8hywzvbkgd2wzaUcEBScPJhFLbU2XSPRwgUiyZRwUw1iNnfC7kdKhkmrn2dPddgPJkCE3aKBQGWvvyfJR",
  "key1": "3nrBkGrMEpUZd6xjrn9JPiEbz3SM8FzkV6R2Lbt4xvBED7fnXNGK4vWnsuTSpM93BHD8KK5ZEfau3Sv6KKanGMyT",
  "key2": "57NoEJxHbm3vqhiQZYRTf6yeg33K6RwXmmmPwKdJ8kZEkLemzBSpEbAKwwsc4v8nxKdCA3KhuuDvuCeWmjuDVxvm",
  "key3": "2hpXHQ1NyMUWxyFE66Ghgc2BcizcF63DW5uqibkef5MATitVDpkpAoYgLmhf2mB9sMLx8L4YaqWNdnuK9bpeRa22",
  "key4": "41zfEcPaBQYEUx574G4ctjbDXj48CwnPGBoUus7CZzoBeRDHSor8mPi1qcQwLLkMWsKaDQfa5Fc6GYqsGCLzrYoN",
  "key5": "2ArmPH4KS6GmH5WxBhgXihGyeyApNboN4xjxrNvfaM7F27rggD1iFSGSdDFC8fJMsqhX9uEEfE4sMq9bqDVcJPdJ",
  "key6": "3dngL2kTuRhCtDzSMUFL1V9w4C6uq2Ebv8ULc6YogD2eVMrhLUA72LFrJcuTEXFLVRs1GcDEhm9Qi8WRaqyuaVLs",
  "key7": "4FoCeHZotYPMgYGPnAfp4q7bfGf9n7gWDfVDs2uF7vkyA7oAy2YG97G44rpxFk94sNsmqkNHnKJU4SLyzkuVVTq4",
  "key8": "5FBjEo2PRtViBUitdSz19FiiEAw5E3QjmuQ4oRJ6D5LFrSwSm4PbgHBpQAZkXiEgCDvsmoU9cKzEcWWfQ9VbNta5",
  "key9": "5FjZTwpr3jptiLjdc5o9minndEdCbQ82EYd6vak849BvGh2YAWtLMTotCBXC9LmNBL3pM6Hx7YgeKySFT92nsCoS",
  "key10": "33Ma3RVZnYingAk93h4n65bcX9F8DVP4ohZ3YnarVD7Vn96xoUBAN6zC4EjRtrykUrrBSGNHxPUBFb4PPBcKKKKK",
  "key11": "vDSjYtuoGgfwR4jgcNoxaDUwMXRSw4re59CCAiMXtoEDhoHBpWuKZBiU8ZZfiUvHpdKNRnMkT3P38AFPdL1fzg9",
  "key12": "4phsCF13RAcraEhWkdYWn4hMavuSrNyzEkwp6kD1t5jgZBjspfxy4MobQPeS8nFYWPU6iQk6KY27cignMzcPxyAq",
  "key13": "5q2jBBUHJaV6gZXswKZi8aqa3NqCKKSRJcw2LPgDvnPms5zwRw47kATH4Fo4LFj9bkTtC9xrXfFw8YFEsfJcFotP",
  "key14": "3e29y44aYEdUt1Bcn1jBq3jUWPT8gAFcxVSiYMEqqhkSnDUVNsxtULqZqHhdA7Z64rT3wvG1xf2rNR1cXhiqUvz4",
  "key15": "4CPudYMtEjkULjpgXFtcSEsUb7xjcgvH8vKnAUKNreGBPozMspXW4rde37DR6j5XSJRjFewk4EgRwo6JmYYAjPsP",
  "key16": "3tpV55SmCNYpph4oJF5zkPMCmEhuJdjLiU114TDEqvjtWC8JPhy1KsdpXMGofwhmVozXJhvUvSHpcvN5pAY4idas",
  "key17": "5DMAwuiHe81ytrz58GHUqd3ZocUQHMEc8x6Qi6LczdmYXzT7o7FqmUY1LdRes5768yoh7uRQVTU6HwMq8oN3B9pj",
  "key18": "3CPL1E6R4eXhEHiSdsugkbZnr3txZbqrBKpqcx8eEQ4HtMx3R9mL8w3Q7t4JpHcjwdbY9RCM3538GqvzzxjS4AUh",
  "key19": "3eX3STL3i7fViiWN1965Yo4pkmFRAcF8C2DKDcC1fAoxf9xWLBMDyKa1d745pgbz1RYJ3oxcMT4WuU3TM6Nzkuf4",
  "key20": "5M7zi1aXkc1s8AFt7bhcbYzMGt8juTwKUiSb7jfttUsqoWye9TeTxwXpZX4Dx3ySg5zEjnp75TDvffaumVADQ9yx",
  "key21": "SkLn51SBVtqHz1dso7d4YPxEzZpArzHE499YRDrv52NMmvFU3Kpm5vwFw7t1A6WDbghzVk4oMEWjDtDHU581fLs",
  "key22": "2KZPLQSoRekmsyP4ew7uvC1N6Z2Xax7GjdG9uBWURmdpZgfqiDZi7dE3BwgR6MYiJ5YdcnXHc6qZyyFH63MFYzud",
  "key23": "32Byf9e8NWCKejmvrhmxQwQuW18sXwGKw5peFrfG4ioCxEV5nVQK16A4NdTEv59DquqoQzgkeya7RMrdkrjdWq3C",
  "key24": "5RJ4vTMVAyotusumnCPbveop74iuWhWURMUihmC9z2omx723nycxXZMM9CqZW1keRreosSnCxeAvX7MbGRvT3V3k",
  "key25": "2ZcX52T2yZq8FMq2zbkrx84seqmskCUnTy1t5NWYPR6d8MaBDSBPh8hMse1KMDqJtWv871yc8HrndesbRR38Fvq6",
  "key26": "2fN4oYzcARXfFM987Hu4kkFoAk5GHBfqKaT88iMfCVTbyhEjp72w4Ne1Nc5JKQen13ynxJyyWkt4C6cVYmGfvUhR",
  "key27": "5mfK9fF1UGFwVGxv5RZb3kYQ29bXdHHpXYjZFRMFdhq1YgqvrKbjhHjg3ivd9AL55Z6MdtLoBuTjSqBjBHxofvve",
  "key28": "3wHJgRxFctrNHY7WzCMNiUrudjBaaM5uqjGmUicCrDCh9zMWczCCD7BoHhiq5J8uAUqn5Xd7Y8xBhDKYVcGa1EuP",
  "key29": "5KiZVTVtXwPpbDzdxFUPjrm9P51F9YPtXKhkm28nhwhoLid6aweKHa25gebpWBmbPkwBQgCvdR5gDpWQJmnRQ6Ei",
  "key30": "hYCD2LKNHmp9PWkiUbKMaQTFvVkX9JUynsNkNRWh4r9rxd2qsFWGSUf4H6FhBBVqP6QzFrv3vYCkKQDTzkS6XrU",
  "key31": "3DJBR1R7bQyvUCx1jJicKgx5kxmhVdL6T7nqwCSthKAjFeRabcuodjTosWWeYZLCqN19SzRLfiFwx5QbFvgUcauF",
  "key32": "4dCvbSZeMewNZmxZkj4qAXCMNtM7qx27xsgV7rUNKMc6k9fXPseNS61RxCPLqiVFMTZfVCAJJPR7F5GiEvmEnhHm",
  "key33": "vKsZRTm519UMjE8sQyzrcpo8DYAKr9YzSZucHXrVA9QHwdJAwhSHWL5Dw8A8DJgA66bLptWvXtMxrUBunQ66U9j",
  "key34": "2cpEkv6kmW2GpYA7LZDvXa9JUptBnh8Uha98C4rAzeBbrBsF9EEvVdCDqnhp4eaQav2Q2WeCnUPmwsQDATW6ej4w",
  "key35": "56Qshi3M8y5ijfDaDudVEwPzmSWVLu6L6c4D42o8Bg4aaKmT8VTaFgFyR4Tw3ZExjJoiDecsZ2Rpy8bt5kVzZo3t",
  "key36": "4qfp8GDbAFkJBZDzTm8jfM8S95tYsMiA6zNsd3fDkhsG1oE91UfpS1fEoKBogExvHvmg3C6RTrJ4JoAKYmY9R3Vp",
  "key37": "3UQb1Sp3c4zAc5LWe2mEoEKsiZB54sVa6HEwsmKffn63WN4Nj5HduTyRJhk68tgJnhcXGwWBAKTAtGUk8ZUB6BLA",
  "key38": "3qijUiDXcqWvSoSv1QykUVjLWBvUdaNSWdLLcTwRfEMjuVoDFqR1XkVBqTeWcrZ3JC1u43BwhkL1P2Ks86bEFR7B",
  "key39": "52ktdm3AiLPgtNXFEHMWiCH41qxd25QcZJXNEgtAPPNeoMa2EPnFdKjhRE3EFLxjW8DLHADTUTqguNKXeGWvh9sH",
  "key40": "2YKa6npr1uTg4X4dm4a4sURcHw3Rp8UAYqiiVq4fFLbbwxnrFpNAqEVDbZKX7BfkiBapgCosfsnAk3dpPAfVv7GP",
  "key41": "63UwAs8VZqh2eF4gXMnQXMqFvZ1e6wxwatZuBSgLAQnbJ3gxvZUDQSUWGDMXWiQGFoGrewrUJKAcfMiD9DC2A9rY",
  "key42": "4AtYfQGiXzMmhodTNoALvDrpqGeLQgzyZ7wuNZcWkHxonfYzyLnfjWua9gKevoT4c9CwmFZUiFhXB1zfXTeH9S9g",
  "key43": "3uoynCKcCvuE9tLz4iSy32a9htXBPMo4xX55rN28nFvn5iKLM79HiPFsk8LpP8ECkoVZ1ZrTfHVKEGHpMUV5yLqc",
  "key44": "5rmzMqUU9b8aakm1qfkjxPo7HbxxbpGut7VMscXW7omY4GfinivsjKgMYcYgpijTPU4V35AJtuAh7hgS9esvDeQT",
  "key45": "4j77Z6ARMDp6XMBJPJPC1ZqjPfTnMVnj7SC5Ca3abzVFJ7LSMxC56YH5G3DA4JBUyosRU9AjqpqzFqCYc8b65Kh4",
  "key46": "3sH38BLJ171S5yYM1GxToDMgRHiHqkGoonNQM8iWaorvE26kaG4qBaxyPDM72wU8LLJ8Xd7FpXfj97Hm85m6RyLg"
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
