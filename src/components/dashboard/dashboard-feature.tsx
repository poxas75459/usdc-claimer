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
    "2z86vDT1CqomRioPRXm2PVwh8uvu9BYJturu2AFuDyXRrNjxe8YqYwgW5cXWg118xatve9yoMbd8cCYGRSvyBTrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oFEEUYhjWUCfad1GgNLUPXWKUj7rMZKpYyVGzPshCjzePUegEYSTqEYdJMZorBWj8ELjGgcgsaUwacg4jvobsuf",
  "key1": "67JEBBEeDAmCxQ3b1zmu67SF8CxDpGThAHydwSSTCoqn8SH2giUQcdGsPra2mfeXsw5y215DLzAe1iEejMMd9cE4",
  "key2": "3WMMrNfsYJnjVpnuPZUFKtB5LdEEYJdxZTUmeqRgomp5h8cPU6hNCdc3Z8vW5uTVp1CPvizENmjXGGDjpDkBFEvm",
  "key3": "3MahwxoGeo4dLk6oZhBgyREBDFeymVCHMfn6nj7ZJMUZLhdxjNnBi9oiphHPwrH168EhwvRtMTuEf9UgmbcUjzBo",
  "key4": "4tpEvuxQLk2W1j5FzgW8t8wiZLRLSbURetPL2EZZooRF9BKHda9XfwZQLtY3hU7FtFfXEjioo7ieqEaXPSuRGNrJ",
  "key5": "4agbjy7edVoRnUUopV6DHvwVPmVuEDvPNmnEQwEXXDsEcMrvaRKS4vtVN9qg57fNPjFh6cEFT9nAWDzwd3N3jaKn",
  "key6": "3ebJCyjrqDTFAviK49b1dX6k6MrkcPDpiAhStkcVNyB1tqikBQ4U6L2bX29Q3EdwFURyuYMwv3PMPjbqqRbtmnkG",
  "key7": "4r22mbhk6cwU1jTeumF2mqkeQXhf4KKzev8PQ9CdepP6CAvStT3xwbkerQTMkxCD9qCrjREbNt9DCbte2RLCv9kQ",
  "key8": "39EvqMNfjVarAEM9H1xaaJbtvERiRWP8oHXfdm7tQYcgkBW9CDYqbxEbdVYhhkiGUBhhCvi8v61Uz4w3aUoyt4pR",
  "key9": "5cRxKqkBu5DtMibfjw3kmxaUupQ4pbhqiwHKSMLndUrM9ibSdnAUkzb6fHLqMjQLkE9rGNHUcMJPKDC8cF5pQdKJ",
  "key10": "3ftnCp9C8nystq8v28B5XYdZak83XBFNV5cp1Lz7gfNBHjSeo3yoiqx7KJaCNCGkD5BwmePVePApJjhfLoQVomDb",
  "key11": "2LSom2PtobQcS6FvJdjsmUfrgcLxTsgdDv3Vxhk67nBTgFZ84aoER5fbFedf2R1KX36JWqGybGpxM3vmJhQ7FauN",
  "key12": "4Fxn57PgKpuSQEnwUCMqRHXYegKwShjieY6b7GtH5A7joGZESS4RULqoAufBUW9Qiz1MAZySkk9AL1qcCm8pDpQv",
  "key13": "MCv8At9BxVXoU9gY55uKJtGiFsoAvHcZ8zJGSQHqJ9qadByDCU6fcB2rduP4wAY9RqzDsfMuuGbcHpabD52xjXH",
  "key14": "54XAgRYdXASLrBJ1iZ94iS5wP8xZDDbxr3rc6RM1xU8tnuRDvPKTbgds7eiYgPAsZy5wtREGTegG6B7HimBEj7bH",
  "key15": "3QqYn9uFvDAx39HfWXe3cwtQtCRnq2EZC9qhJEZeSRr9PxfwMcpM2EnwhrdHnfah9eAaEjM2fSjF9TEHk9LeGnjt",
  "key16": "52HU56YBMgVjF3gkTKCMPhaCtkBEmvVbbWnSrTkaQALnbHrTWfNwKee3FQCNJZNNpgDZMtecCL1VfgTd9WsdNgdv",
  "key17": "u6EiFzoNmzkm9rQZzV2DtAUebZ3n39QwwP2kUsghZrwZRyNRwVkppZm6VZMkNi8i4rx6LyhbXJcj7RPPSzokF8H",
  "key18": "2R5sJmNCfoaAxTPndnCeGD65mKVNMx73ineww4DMyz8bQheCFnQryS5TRctNWvVAZ9HpEGKDdNYGPTDaiFvGo5xJ",
  "key19": "55n9XPhEZJJLgNvmiBLwWb8KHyadhucmHJqykcCgpSVne4QpBjRSzo7tqQqY8dmpHTzs7YXoNUg5viZd786Pt7vW",
  "key20": "2fBUBxZzsADPKTAuYfgxrnanPkhrLMfB5kDgdzse1M6RqWFSfS34aifzUmJDL97AUoMVhnDh8HR255nx8UGT3pyr",
  "key21": "AGAr7zqGyqp7U9v4abGPvY16pkLQhTPfpRmgCGHsxZosnfXWssDrhECdcjEBQPq8U3zfVouwXXdWoWUaMLt8LhR",
  "key22": "4GmU8ZNRaRUhfeyR9SueY5h1q8jmfX5aLSwwbcri55t6ACRNeBRhVQBzCBv4cEjoUt6Lw7QXGdjyTN1U9o7bFabg",
  "key23": "2Tz8A6z6mLrNeobXwNLzZw2NfsFqJTZZTv4wao3546U8jpbH6o8fAKH3yMfEBER2r8UifQqkQ5wovDkpakWKkXb6",
  "key24": "5im9EabcTcLjESkH1MVzrCZcEEmV5HM3mtuiinYmetAQvX33pYcZiVBnDjYaxDmHLh4vUy7JBj9p4XfgqsCsEsUz",
  "key25": "4UUcPqAd2hvR5VGaSPucAxDp5Mby7vbtDTCoMTW8U26DuK7y1iwR1d8NRE8sFrcyjXQpSxTfzse7ConoAW4VGLyJ",
  "key26": "37SFuJboUSMw4iUQTXJ6ZL2NvH2puGFDHixWbNCAeqmyfYrxnycdPAzbwbhkHiF5px6VGqoz9urJkH5An7yoTEBM",
  "key27": "zGNzaLvgUg7UrdifAk74EmFKLRiKmeYtxu1Apv3HgHkBf6o11UT8AZ3hrWUYXTgJc8nBZvwXgcvDZszYF4qv3Hy",
  "key28": "8Y7P41EPi9zYgA1kXuDZij69YK1xoBomNFW8qjNc8yYRqVGr7bXEZrZz7XwkCFmPUWuJd6ViCzFNaBQYHaCNjCC",
  "key29": "2sUKpawKCzFVZBJnGj4RQfWQ4oavrsKFAwg8D25EtLuxQyZgk92NuBUckjrMw552N7LUxBKfdt7H7qmcQLpWUx3H",
  "key30": "5tM51zT9hh6gW6C71khg2dG5Zy7CgQ9zCGwNptJi8rfqMGhyd7QhLBQeBbGaWTwnJPwsvWXVcqXoqCa4SDS4MpJE",
  "key31": "3kJSZBdiu2GPFg9RhVVhJrk2rCNBCfGdzzueFX5rTiJo8FMbJ1SdKGGQu98kmzxiKD3YJQyuRUYREu5Ty8KLsAXQ",
  "key32": "2nQP7UGKn5MxasVSBNKjvbeSUThuzJk3g3gtBWj4XpwSurnJXQFT7n4kdzayt59DVtrZtG5Fp9SBSP6YUrCzpJsc",
  "key33": "2XqhPmvPacgq754VSJ4aGSgZmTr7wFDQH38aKUo8vYuZkN4Lbu2NDU7AMEnNW8SuWZzdHGDBnKK6hYzNse8rVHza",
  "key34": "3hweBUkyUM5ZwQamjCrFa7rSwLfZDLRvVN9xRcup9wB3UNmbSED4px1VgA2DjrLCkCJ32rX6UoUTYmcaJqYBC4br",
  "key35": "4WqPxgSwM3jHLcSAdT2qvUBHNYWUXDMaGrcHHXBwzB6EUsYwyMBPgiPJLmXptEqM4v8wvRLNo4HfYWoTn8f1nRCp",
  "key36": "GjKuqRHLxY8rH7oXeXxT3JkSt215q1dw33MwWPqxwutrotLKCiWaF6VED9Ey4K8aA9Jww98z9jRKtXdv1iUHTsE",
  "key37": "4YeYv5BYdZ9y6U1vR7J3DcznsP877aCV2p4dJLa6LpjCDbWHUcDvz2TeR4uJP9XvrxCGnHaKyqJsJq7jfRnZsR2d",
  "key38": "61KmMTr6jD4qTjVxdCBZzW87kUSKSQjrWrXT6R2PqwVrNtiwLDpqdzJFaYUFmgVy42KTc4PtCPkUBHWqR6s5YgTV",
  "key39": "4QTtHivvdaxr8eJEt6gMDNyEApStQucSgVDt97vV98ghreqRCLEEgKbzDX6zhmnUyZj7McD5Pe63FV8WdftanSHP",
  "key40": "2vce2gcoa5RoLB7bQ7qjmH2ssCzTwfDC4YNjhcSzyPxEsxaN8YakCBeYqQgmqqm5k5YqtcRdoNV5fZeGve3REgaB",
  "key41": "3JpYwQHcvh63qtsV9FozT4P1zjxXRB88Ruzx7tpg6wsaCrY6ZDdiGq6AM6W5nRokBtBXYjSmXRTJmMqvCigzyKri",
  "key42": "2n43GmSr2QoKovHULL5oveu88R2UmsZWLyPp82DzLXD7ntez4j8b5ChdiA5T7nMAgvhAfVdGobyWUKzBk6UW7uwJ",
  "key43": "29CXm5AeMuyL6Nx4euNaCkfQVvYtU9YegsjrsY6LpGQe89BGfCVcZgRhDrSVUKy3QNZAmLz8B7sQqmog4mx8Ke4S",
  "key44": "3pyBGcE4tF41sguKbYNGGPqacTxW6wQn537boCwHdXjcdU24WiVpmj6jpwVQMSfmywaCmncpt7zpbdeT28FMQUAk",
  "key45": "4NPUuow7cpVTk5Vh3JXnKNvAHa9kfVeBa8rVtQkjcFVJVXuKxSmZtMtVm3LYu8Ck7mdMgYUE9aDPjifnLNsqEsb7",
  "key46": "4wnaC3CKdHQCg3hQaPtYqAjah9BahtAXVHuATot6hj4dXn62uRG8aVPGrDeFK7P2DKu8B5nAa7d7B3LpK9g9nL8J",
  "key47": "boRUYyyUrULVsSkMYrSjjVVBHqh3MfDjynXzFA9e9J6NyY5GEpLoB9xfpaeKfdQUPyCTauvezLQEQ7XGYfCDGTJ",
  "key48": "2LvKRPXU3ZSmRYvankhNmMHC1HSchFztStuXSV3Tzh1q5BXnYpYgMUFxaoTCciB1XKDGUh99PJfgcQgBFUeDjmgt",
  "key49": "6mYvNNX7VLXz1RwJK3ob5GGuj5LQ2RydGApzjZeJgKPvVuD2kzNwYEfyxucAw1mU7kEQJgXr7sbdG85FKKhhwEU"
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
