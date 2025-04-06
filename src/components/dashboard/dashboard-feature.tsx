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
    "hDfrsmUTiBTbmxMdTRK7S9ssz1fXcJNierHZKZtd2BQ3BazJFxG4taVrWVKqfHPsdBTtN19a4PwcC4hzLZw3xKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ANRtxaZGfxAT5CG29xQj7dVU2pAYQa88w2i1QEya6PNh3qxwoCh1gFnZ7hcn8UPuc6AB47b9Rq7d1RUCqVkjFNa",
  "key1": "5TZfe9rB8GcyMiYR6axcNHjecLoP5ZHcKya6S2YVYBuXzvKBjq6LN4m42TynawG85QBqz9HW2Z29Vov1Knfm2NtS",
  "key2": "4su8W8wiJSX7AomiowrdhXxEaj4uLCqK9rdUJEK2FYqmDayphvkxr6jzZ3epR8oKwaM6s3ij9fVzwtU5nb8zJU92",
  "key3": "4EXo79VZyuuTo6fTe6PXkW8vGHWU1AauUmgz3St7FmpAgS52u6fLUFifW3ERTPxjsUkkgm8FL4DEFDxAJNZu5Pwb",
  "key4": "3jFoJs5J9mZxYGUa2pbCoQqdQsHpbSeyLpVxQHP53eM4CeYn4v7sPkeAC9iWRHqJZzrRb6m4DeLvxeVZBpyiFnA2",
  "key5": "4mDNzSFotx9mUz6uFxCzUScUCQLyqm9mmDGLjdSKbHASTSuhgST8qtdpngoo6JMwx31uZNERu9kebYqaov7nNQb3",
  "key6": "4qL7AhvZNtg3okrEGUsGjP4GZRhJfGG8mxekDFJrDXTGkbEsfb1Wj24HytUKJPQVt6h8wwLvu1aSgP5wXHDKJmrT",
  "key7": "4ZpnVLxTxoeEXYhzTiYv6MmSZf97Nu59YXXEj38dQPxzT7jFKoncQcY8jkubBjE4zScHztVoV6y9FLAd9qyzLt3B",
  "key8": "657Uq9mLzUSuXRtXmZvikZoUq7grRbVXY7ueup8zk61KcjzF1jyrLwXPEPNCQCqYSguWcAcQYyWfkAjCJaQvMViZ",
  "key9": "27wPniNsE5yCSEJRL1YefjgSLEJBtaqgabHgumicnKxx7iA72gSjZG2i2FqkEFq7g1ABSfjQzzvdkgiAx99r2nMy",
  "key10": "5HsPGdhPBtjwyR1HBvWxhhCeUjuHMxWinjKytTsE9B2kogLLMgRpsyfGTXdaH2VPcPLpCACGnX7REfmnuaiQDaGP",
  "key11": "4m9B89kP5QaCcYKDc2B3vXZ5gqX2iBPTjEaHXDXZiWXjwwq62fqNMDpWygKoJVHrYofuCJrtFKpGJoFjgk6sJ9Si",
  "key12": "vZvthEVge7KqL7x9WQLvq9jHVHn7UsxN2Us6VFeKnByeYmNn3nAzAra2KN1twTWh5wXY9LwtwrxHL7Y1tkdunRK",
  "key13": "AySZ51D5MKYF12exvr8t5jdeofus3GQkG9oZvsvRHa7X3kZ2BBtFtZpdez4FvdpqR2xj7UHk7j7my4CeZ9uA8mX",
  "key14": "4sZL173DZXC2rT8Wu1YFKi9rcP3AvMksVv2V1USi7GK3oqWFdZxkQ4LG5Ef6mQPAyRaGk575X3ZbX1HAL8hciQSb",
  "key15": "VG2W3j1pWXmJTzuoM8DQH9YhDxiPH9Zf5Ng7jKy8KwEBiSsiTvdC2vZC1Nigvpm8BGGxrCpjkdJ6cobxe7juA1o",
  "key16": "K4NsXxann7rRYfjhiNssXd3P7WkiZZonPmTXCJ5qEUMDSLkpidNTKdf9xgfdvLrb4bSLTM9K6Lo1oRyAX7zsaEY",
  "key17": "z4vZ3iVTGBwLEiXNoFNLYnH4K18EaUjpmWLN7FkpDphzjQ34WyxQZiagU1PHLAKmPeVqRgT9ismA2Pm2wpBAvF1",
  "key18": "2a5kR1PBKZJoNk6vQh1YytiU5PoFT9NXKetVDwj9YGSvB97JjtMw8uHSnNb2DyRUHVeNjQxveQRPX6Q17NJRRzkU",
  "key19": "3THu7NujxuvsaGVVsnZYDGAgQoyBXn6faSCGWF37szZNWBqiSH1tfnr9DRSruVWpLKnhdjehpTjMQ6PGNJJHq9Fu",
  "key20": "2ebwVkPqjfcEwJ8CngxvsBz6cMmKauaZFD2HV1956R3eHQzgFPVhCjkYpFJEYnikvu7dtpaehx6adEiucXquufo8",
  "key21": "5m8jGssQ4Pcc4u2DE1JwyAth8pSo2ED2bDixYvt69BsyBPjtiq2oYwE8XcUDxe1Q4pMMuNhG1g8c8xUGF8j4DrXh",
  "key22": "8bTJgVCntVrF8fLZmQ4zeP7bprLHgHmvcs9JFBZW8JnGdFHqihHweok12K16tuJ1ErLeoSCWyVnmpWseUBZWJid",
  "key23": "5M1qMEEuVVNUmczkm25NiGHKrqtrinbf6U2trhmqk3n4Fztms9E2yxEvBsUMbGwxxpkotrA5HLYYPfMLEj3W5Gap",
  "key24": "4EZcYvWsDujdTrTWS6a4buYg92uxJ8adRVFJko3frjswuHCpMDZ4cFmNLypEmrMD9qkfgqyp3eP8qhoESpeCdtsK",
  "key25": "5GGW5UxvueiUbLPjazRvWQPorybuDbK2iH2KAmVnptvy3KQPsSm8STULacYQDf2xQfaePk8z6iJLwJDSzCg4LwDr",
  "key26": "2XEsSx3FJtoTpM5F81j3m7pn3Xj5yMNNn2G2qzBGVgcNrcJsZgQKeUmhDS31LxWR2env4S5dt4UG3hbX3U2Sbu5d",
  "key27": "1cuz6ULS2m5XDwYwoRrJFLaabP3KoZRMyErFAyEHJ8Bd7BGCQMAYM71V9gZn3zMbYxVvgk46ZvqQcaHwGSgDEXk",
  "key28": "5iZfPXMR5Eno8Ek7NqxMyu3jd3kA1CA6WShpa9NxCijxNJ2gPwNded5Spuutv9Aq613duQF8nMjeqWfNWzwDF8Ae",
  "key29": "5oJF6KKaDnLdXqruUmLNC66whZq4TJNTHBjYUuxQzqDAgZ4f5Wtuzgvq1rR4VR5XuVp89TzVqigiyrt6Ho53LL9k",
  "key30": "2BijuNp9MLX34KBbpdxFp4RKPiALXYnAFgstQMh9jCj8mxGNe17JcjkeV5FXXvUnq91xa5LJGbtFbydRGRoXju1o",
  "key31": "2u7BiJ1tyiVJusX3tKBdTsbzYo1Li4J1jkyB4DrTYqcgz18s5ZXXfK69bumJVEwSjrqjtcZSQUeLGRzr1vPcz88A",
  "key32": "zkany9QCwEazfPh5MsBevCRhiW4aUrboS4DvSqdP3328XJoFtbDj7oKfNZB8xz7F1RQWBrF9VWPg7XrYB2CWaPV",
  "key33": "4mYSG5WeCgDho4UbDh7P1RYML7FwPViLx8GvgeJ9fXDdK5ixW2PseLGdYypQne92Gg7Q33Kr7M3f31FhbanAoCS6",
  "key34": "3mk2cnxj7F3fc7aqwwfhzaa4qS13E2Kmtu5Bv6kYuPxn4WPv4CLEHYVALthseNCeakWTc6rekAa1vT3LJxGvhchD",
  "key35": "qmxrKDHyWVvYWkQdCn3jkJ2HUkYcJWnyzsmSiMo1E8GuqqdLzsvQ2LGDXUMJB5wcNCy5XMxdDUCLPxAJyw9YdXr",
  "key36": "jc3xRP4ETiHLv4nUdj6g6MaFPyWtEPosgph3iQxGfNDpsbfSaFCgs8ATQ4rG6AjyQ9m67kBefCYRmstH7bMo6cQ",
  "key37": "4ikhbUXN18gTyNw3tCw3mfAaHrAshJhSV9HynS4FaxWHNRXGpmDSmLQQ9qnUvDqU3tkBGkcYoGHwUwhev6rfBgBw",
  "key38": "4S4jzQiKHxpEYSKP8MBudhujfPsSsZUWuSTLRbNQjZinhwzjkE6ytxc2N4YgdjRiGCyPJv11WQfeJ4DvZxgXESvQ",
  "key39": "3B5DuYcmoUMFR4LcG8TQjErCDYdNLR47MUbnuKrxmxRUnSrJQB3Y2YUa3zHTXChWFAtbmSxU7QwuyuDgBH1W3uQT",
  "key40": "36YgTEtmBKUwfnCwbPgFipufVLE3syyVfRozowzyophjc8EwGGfNyPwbQw6j6Q3xTn5a9vHHgh3B1qH1NMwFeoPt",
  "key41": "BxnSAeUnp2nWUoWDYopRp4GC3dBW87iLYhi6djqXWM5WK8SdQZKpcps6nKKdvefYAK676x1GjacowKgv3v3HgJ9",
  "key42": "2R8Hev7LQwrEMAwNRpr9zjRcbDt2fS9hDbLcUFcX9xA7smV5tux6AtKZ8YQito9ZSW7kMhHnr243wMVDR9agAmiD",
  "key43": "rVVXM7LcqbuZNAFk2Hc7RhpPta3aryUK2tt5bMD6vfSwg9WffMpJMqYQ3hnDJLf2pcMo4JEVwKtNPKWygfuREMT",
  "key44": "szs4j1rc3wNg8tt6mgGjZBftv4U42RjEcHFtcbdUbo3C3Thj9s1A9QCKzpF44rFZaCkuh4ap7bDGYWwpvkxthne"
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
