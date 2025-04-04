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
    "2CXmSpXUUbUxxpZgd5p2C5Y5GizTjozzeYMyqZdM33au3ag4pTsge3JYnFkLwY48wHG6788hoQzLYQDwgQCHUKBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j5FpRXXTzmZ5MJ5Zv4zj3KCDhLAEzgA8csw58ZULTv6DHGMM2kGee2nVb9SqBoALN1BP3dSKST7iVbU3h41cF4V",
  "key1": "3wLW2dk9AEjsypSfa9QDvY62sNRW3LD19tkKwH7JmVq5ixpxxsDYjiDP5mxEtrcgrgLVMGEw8cewzNYx9Kq8PU73",
  "key2": "4vhaB63fbBNsdTpFAyivfLQ6ms4KqJF6oVwqhHiB8Q4MzkpmD7RxAL23uR36QpA9a1LfiSvqygMSdmDLz4e6zTnQ",
  "key3": "4ggqNGpZYMGxHDzSt4vGDdeEa9P5GBRD5tiTbL6bchWFRqpovn5Gbr8aTTAnrENRq6zQJWkQmVvY8FWrpK85Z9Em",
  "key4": "3dwxnYGLhmWHNS8BX92QQs9L5xVP2DkjmPCnqxD6cfTv5ED2mz3ccGK6yZnNJDTV8aHAr6vRX4sjy6jbrDwh71zq",
  "key5": "5LhWidS61d2g3UXHVVr37ytTQjdVvunqUaw8LgZAyi4Tb6AUcktYFZzoyfbNHFCmPhZqbA82M2Lt35U5JiVzv4xS",
  "key6": "5qnGCBU4GAuS1guqFTXTbunFoSbrSftHR6imVtRp9actmKrXdXnmQuxvvAjMBARYRa3DbWUqa9SWVmt1cpP2XP8A",
  "key7": "59Sw5o9KtymEea6kAYC8ixDxruVMofCeTKqaHtbjn9E9VjRzre7b4do4pmhoxX21teyx69po3WEXkUukPTsqxHvP",
  "key8": "4FGEZGZKs8dHFDYtbrY7YkaU9GBhSgxLPNT95gwe4MU2j7Xstd4c3jEUxVTjLfJBUJ2rGiGoTESLRtnwXM79guiW",
  "key9": "oB5GoCQ5KUUZ9rTyV5xBDJsxCasQfmUz83LSv6E1ex57SMttnmtkHMziAxvss5YLCU6omaNJ2YzVemJxckygsZt",
  "key10": "3xhQdzYPyGWCF44UnJjoMJKRPvXFS6muawTcKDo9Q3zaK8FZJJsFYp66D1Hd198C6iDNxZqKUQBcFFkcgz6P2qhL",
  "key11": "4os1ekD4aQNyaVBXDAb3RpHpf2SDJDhvAqzHwsiyffttjeJdbFm1y925bewCVTmYb7SjbnRav18ZczBkDc9jpTkL",
  "key12": "GEBMaSLCwTYMzqG6Xx9yqCo96uD3eKGBmC2aKSrDvETyV2zmahdziPzJ5KFVEmNwGWCHUPkpJKsoPJvNf9SHhBi",
  "key13": "2AZTqWK4rwSDW2CJycgmBp8dk9DDbUw2F4RaPVEbwjbUCzN9b5wxvuknuuGZJ3BFyTQp9gP9wb4d7v1uqYzwmEMg",
  "key14": "3U63ZMa8qd4MwrUZFCfoteeDaUiVrtdZaXe4rLBzWmmc8F97YeAqtPP9LqaAyXvynUQS12Nhx4gWU9dEhi6PP8L3",
  "key15": "3fYTAWLHE8LRmhGPzZAq3dq7DWCKYoJWjNEkFiATnFeJyYUTjarFUSUMtzsrgZi5rd1WMfq2WcW99x7xjgtXkFEx",
  "key16": "5C1yWtCjwR9gYXZy1udeoDRW38jB7kYFvyCid5g9XEfXHiUP1hvEjx62N4Bme3dynRCkApZf6hM3wdmowyz93SQ",
  "key17": "5y6zQPqLP5BgVCLzSM7AvPt4d59deFPui2m5T4rRQxNbrkdfRJpujTj1a63Tgdbh9UFBVHbpQi6ZyeC4QuTSA1N3",
  "key18": "3Qfu4yes4t81rSWA6Rw42MYHLvevGJWxMtSZpSJm1PsLCJvAZYtUESdhqfFUP7snNukKkb4pByNx6fdKYkSwanj",
  "key19": "4Q6wS3zGhfexvY5mAUG9gmqj5g33RSysd6e7qtAydHaSVzfubfFfPeFUD2Zq9AbvNPZaJTBAMFoAKmuJNwaxjERf",
  "key20": "y4zDKKtBsbNAAUiX3UYoCvumPfeAwa5KT8bsBDvHeS38dWGQdGHqEvUuuXbrfWDFkZn3xuCpJK8MHdK7kdEABk1",
  "key21": "4CB4nXej2bPNY2tCQJbM61RqMZEjQhDjJDv4mdtJvVwNMsT72HDsFrDvG1MZaLexARSzYeQYgLxseW4onRnQkX3W",
  "key22": "4Leah2Qhhxk9zPJoMM9d4qM6Trh1TTGseKvZyTQfvJWCZGahPGU4PcdDfHtoykZuu2eFWFXLrjuWUL4TUsRXBpXm",
  "key23": "5NxmrgzkDNpHyKTx85GeBAdj3uvEKjnsEysPV5E2tNFdEh6233dGT8JHWBbxMvmS5j9ZJXVhe4Znh1DRZ4Ygx6Na",
  "key24": "R3goyyWBVy4NeNZ4XXofUuUwP32ryXLn9ue7LWeqzs7Mw3pTsSatGsf33F7REMi3RCygDHggzkk5ag6jMddbR6k",
  "key25": "2WakLhoGXgU8bx4ChUstCz46BjCP3fpAPi52dcCXouEgNYgXpfYsr3UXDd8nhkkENFoMK2FRZFKW8BJ1dYXHT8fC",
  "key26": "5PqXkPXCpvCsAJ4Ab928hi4w6CyvdodXJh69QcrqLa9sZJxFLzXFEFCpXwbD5bGFeFfiGvWf1jCJGVb9nvezqGxd",
  "key27": "2ohriuAwkR9aeJ8go93xBxGxSQYQe2WKnY1xwpHs8sSEnHAhTwbcNoDwxfgMA8GPztsn1L7wjWCSJxBWzD3s3kZB",
  "key28": "3GPxDi3W1KWNCmFWymtBpTqiAMTffhtoVzZfogFEUU28NiiB3tUS5GkVHTxhfTPZHYKhMa1yB71DFAXYzVFNJhm4",
  "key29": "5o55Dw6hKo1YH17tuyq67LASiEmTteDQjbq9m8a7fy8aRLfaCZjKBaY2K2BYXWzekw9dE5rxMrWEEgMSTeKx4jtz",
  "key30": "4R7GZwDuCmW3mhnhq3Q16FGYkikgkTDc76EtsG8tFwYbTN7WZzHsB4iiFMJv3dP8fsCHKyd1zhDqxJtv58F1Zmwn",
  "key31": "3TWvirUhGDirSFiimoW4HqQBg8foECRVmqzDKQXAxYwkF9ztigvx7R9SnqdqSAdCSbRk4kAzhaxoY7vf8b7h2yXq",
  "key32": "5PNQpmEA8DMr7xhyHKtCjEDunJQXEQ7A34uzzP3hBHYVShroWBM6ghu7igG6t4ZKVVwxuAcsSvsVcWst3tZx9zyv",
  "key33": "2RZCqRBnQ36atpicThHUSsqpjzgCMHBdcKEqFfLEYru2hw7Zs39hrcXtocezuYq7jGqg39npSX7YUMfs3rDDPTb8",
  "key34": "pvX26UNLVeYTinqjzbB7SNTREfxUpCF6JAXGLXkS9H7eKdAMzNYwwkrtyFcYJ25uFxgZUpFnfdLC4uFruHv5pzK",
  "key35": "4WFSEw9bMdxo69KseTAKQVUctf6KBkWHRjHrd8goKTEQzpy4huqotjHbr4NfP9pMbuaLmQyzX21PKdDxYVVwyaDA",
  "key36": "3GrNHABrSca8ry7Ma24cviUUU6gj4Px87x2YpTuu8odHT4W8JHCd9PHq6cXpiEki5rQywiAp9Ck3cXgLKDnW4eEo",
  "key37": "5xdkKinRUnyaEcraLVL6QWLzkKqiCVKTQrdqYxrNX5bTYkxLEBpKKUeGTWwas5UkLdUEbrwPqgGe8GvWZyCWK3t9",
  "key38": "2LCbUriyn3zqxBRrAMD76M6aRr5BduA2gHSDKonccyHBZAosSeMKKSFg2c7w63mQ7NPDDzwRvr57KUrJHC1J4uLZ",
  "key39": "4agKp1WLZAUrMANQEfndivipfBa8JhtLuqrUENd2bKqXfZr85DvB8gKjeEVpYHsGeMxTcxfsy1uFfUwJfRQwuJ9y",
  "key40": "AqP1ZooE9CZHRJkbJJmJtwmfzCzawXa9ywrtTGJUs7QyXWeXYp5RP4ZHvM1EfDstDYFfshNw1q8QK9DtV2FhpuV",
  "key41": "3bYYBx3zCHUdB3bmkLinUqgYBFgjr9sUrwUufj6uQDRLV1C59VgpiqMDELCb5H8DjgQwLN1L3qc6wkiHZGvo9ycL",
  "key42": "4JwGkuNZzHkVGnJebWfkPDjUvFi1cgPE8ZoHaZY3vwEZW3WQbiLPbGg5SzKaT9bAj6kjyJwjQcMR1jLWLhZa1fKQ",
  "key43": "3Qie6HR1NhW4T2iU2nskR5smxXmv99fWz9v5eXcW5kQy7Q5PQgXTQQtMwUQmfKmcxHdcQYxZCg1ZH4i8RK3euQym",
  "key44": "51NfCowvBiFL2vnyqYGWqqH7MYgBiMieJYtcBdgRQcQvBQU6G5wQBGjQoUjvSB5PE4tLdXantTvhaL1QdmmoxwBq",
  "key45": "27M9gZUSjRYWmiX2zmpNHUjY5XniJdo3E4UzyHJwPmsswiLSQ1j9ZRCWKmtsQ7sAcW8KztwbYs66x5r3jgE6FKgi",
  "key46": "5d1jueWoY7qGkQH758mZd3r5kAgRA1bKrXnbrvwHbxrnB95EmrzvbkhnZAL2LAQuZKUAnPscEvmheMvcJ2nJDbQN",
  "key47": "5d3QWbgTet5vZV9V41xx2XqLGCcRWLJyibLyu5oVL6w5iTYtb7ywSS4aqg9pcdP1z9zvRpFGkN98CuLJmX9YMPQD",
  "key48": "2P8WU9G4sCUx7yMnnKiV5t6jvpeKy37Vek5wNZhiMhrbAtxEsCDe2J5nBvDyd7MtYiifJqm1XXRBEeq9FdmNEXDX"
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
