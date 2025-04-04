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
    "4vScJunZjTBaco3m46pskT4WvFSzbEZCxXuf2QYeWMg9FdUMCXm6BaoY7c6QUpGt4S8iQcJFamDTGub3aRjcPD4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YkyMeaeEKFk7KfqFM4R4SMw6iW8FQoC5ifKWqxZiY6sodC7mgVMJowhF1FQd8uhbMrEcATqm2uZiPdWHsz4U7ps",
  "key1": "3G7nyLgXuz4qJ6FEkt5TsNDqjfqpsE8aeVaDUhNAC3sBXHz3e6B6af8bMZn8gsQgsJvsxrPQSJ7jwvpM2g1uWPMX",
  "key2": "3TY3honbDadkran6vd45GjAL8qUMpYEVxBihVsVmGWxfgtVvs2S9B6KE329CJyCy68BL5ZSayzStV1wiZb7ThMiy",
  "key3": "5k8JiqithF1ueGEWMMhKMKALdSSufPVfZZ3qkyjFSZPrnqwWMYjjT64XcjuLmhJAwNSr4NpkzSTpSYV9fuKGLm2q",
  "key4": "3F81qgnAjR8548NwL85vfAsVohS9hERHvqFD81m5dUZiXxhTJaefFaACvcFxr9QHbxGyPDTZCWZY1wYaF1Lj2SMK",
  "key5": "4zbyTmqXm3bhM9hapzWqSQ8JTbb9UE5aRvwA6eTjfDgVsbNsWu1dLc9mqyr4yExwchgimwrRoaPXcZyJzAtAvt9d",
  "key6": "5EGWisffM1RHWzspPc4kYeGLWtzikEct163noVe6bLEHed5sAUBHvTP3ykD7B2Adm4epzUejxAaSoY3tNwDQcg9k",
  "key7": "5tPtSDfbaQ8zQxSXavEWhQFfPcZr23Hk512PzYiJEGKHF75iqRnH5TMMdXgCfw9ZavA4Z7Zq2FUkzosYtVF2keVw",
  "key8": "uFQcwXwy2kKszYMwfNDdbU3trETY6RR8hMeKckuXCEpApBxLdcMUXJzYr5XBjWfmjUvQKGo6Z4xcYcYPvmnmhHb",
  "key9": "et34SxQXfmZowvumg7VFsLB2P1EuYihGoYcnM9NtzNDixCR8PiKxAzv9VYddZFUqwrSRnqdSPYoSiaeoEGS18gA",
  "key10": "HiMeNzVMcG9n1kD96psxZpZjTxYJjxDph5cbXaRUPhddY3hZ7k6XRQdHifiwCDxGkxfFbVacKz8VvXMqxg798cn",
  "key11": "42P29gA9eDfDVh1SaBkFAucj7ngS4rkhohJrexKREmhSytejUw2pDvQTfMkJd15EXtv8xFMZKnyyezPyPBWgmknJ",
  "key12": "79bv9J2yUBj6wMh3U1E2vr2VUjv5xhEk2G3msjN5zQLKzEUVhGsgu59tTJH2B7efcz8uXZpdEkne1snJEGxR1e3",
  "key13": "4DgP6XYRdm9Dr9DjiMJAGGoWChMVM1hrbvJWMsiNz3weeC6fyPjfV4sB6m2KL9ihLEVR6dGb5tFggUXrkNHynSZL",
  "key14": "4yhcJpsYYLE5YKHRwBP1TfecHa8KYv47n2Jyma9FjuhjZPJRPizpz28oLkGafh1CP3ZPM11xHFQVgACCrLtbVawR",
  "key15": "5hEk4uWkxNJ7kKJy1KGTjBRwA229NWssRTPK8mjxZs6GHNhyQftBcFHVFPoxWssfbJV5bvcETHHnUrhxuMoF8TY7",
  "key16": "HvrmZkE6KSDew3GmmTZdc4KN2V8Wxrjdg7BxLN4aexG5doC5aJCAb7gxMRnnmk982ExT796nAB1vs4MnkqVci9U",
  "key17": "aBy6LYSM9K93FKgRw8RAFtCNAmh5wu9SNJeTjV9H7z6krT2d4XYiaXUXhdzvirX6tmuVmLF3sCqNyMDuMWGLnrD",
  "key18": "4yBtgRD9GxVCrYKMYQFRShAw2MXnFpZxJ9gr6myTyEnZ5cuaGec9n4J8grT2xUGx88vYEMpQBC51h9iCv1MdrcwH",
  "key19": "EjZRXuwx5ybaaT7657gZrwuDFr5db2CJoq6AbmPAvJZwbRV7VibZhdBw7hUTetthEjjJrSZ8oVKxSJdBY5B1KCf",
  "key20": "2FRkZ8SXtL3ZRWeAGhxvhwoZxp1eD882QJZpJSSJswGgb9redEQso87232nMG3yJVFPnrSzU22zDDdwtTnR6CyJ3",
  "key21": "3eUBEmgfKwGs8XdMLJDUimtEH6twi794BhPaVM3AQmnYbrQEivbrvvyncb5hhGKMnkLrL722QfTLb3ru7e5Y4fqr",
  "key22": "3t4KmdPQeS2sL6nAHGsi1HwucC3sDbGoVsjFho2FuEbe9h74hJAmM9NniLNqpWKFdYmuvv4VKqkpFxyzP9qcWW1T",
  "key23": "2exYztapnpzVbDmgVeq8C4h6UgUxNW1BHKjogqpBnGYdCsxyKPeQGMe5PctHJDppavFoVcmPnBErmm8t1jXyH1Hh",
  "key24": "4goU42q7hzg9HabwyGFcjS6VBDrpxwKTACuQot7PdgykPzMDshTF5BdHdgY6kcCdYS3xyB7kMvs2Wki5Sxr1vnV8",
  "key25": "3Ez2TUxef8uYTgxrGtBBkEPubcfHz3nuQQiag2ttbrM8FfJ4fYsA77j29jLXSHs882oL6XrFy7hkWaFXFsRvgeSC",
  "key26": "4MVtKbVhZs8SfKAF7veYK6nwwFtCux7Jn6Nws2zEZqxmvv8KavJmxWQusqo96f2hJSTF7xAbWUXKV6ZaSFh8PyAT",
  "key27": "3fnaovDzSg8Q63mTcTCjpLATXAdDYPk8isnWMT4Dm8U6YD8MvTrzM9CatdUjsvJh5ixNEfJyucRuTEeACWmJNrh7",
  "key28": "y5ELAYBRBXLGfYiVcjxQfo3aAzSo8r33XVHiRtxNh1zaSQdroMfjKHoCcDqMG7d67amsP3B7ebr7BPG2uT7brJR",
  "key29": "44kotzxHScU43gfmmUvpxoXbSbtZe1BEXW2T8paUvoXtAs5kEDyAZUPKTuabGgD35xFev9woBTGJjKGGoxVe8iAK",
  "key30": "26orCcd32oTy8cqPPS2w9Q56v3A9FELzeRVwn8SwFrX7SPYjrpMQZjtg3BF7RTPVyyAEgLhxVegwWHUyQkAN1tqM",
  "key31": "c5CyucrQ1g3nVXGtm7ZCkKscWz1Bty3yFN1QNa6D97BRAF1iQ8f1gua34G7nb8gm4sxGkoW3ZqG5jZ6whj36ecW",
  "key32": "2Aruh1BdBFbR5fadAjJmsnBYBWW5BmVLk2LAbGqEKLYcvmSiWngct5By72ik5LzJGynkQSFXtu9jeGF4AS7h8Bew",
  "key33": "3aQbxyc7ejbecS3wcayo7J8EifxbfvDA6G1RwREUmayjTZvh3nDixqNqgCjhN7qgGoQ4Ydb25g3iLsejg3kRVgLk",
  "key34": "3rjXkgCVaRsLT9RE8mFMBdxr7DGwFCYPje4ZkAc44J81JzZLoGuLaX9aQvGXTt7Bj1Hv1Jgnqdn9CeWJvHg2nHUC",
  "key35": "usC5RsfAnGybCeRDPiRch7b6Nx3CCrcJ6L7VBENMLUx9ZKRVY1e8tPx1AAbPxx1xhRKiKfY1sWRP2kH8Eby6TmJ",
  "key36": "4evo3uMCQqMordtJB7wURLETTjz4zkibUjbofxGCgKUCsLLjvN5ZQZSueunZVjkJ3f1TE6LKU3nxjYjxyAgqdVzG",
  "key37": "4oZt9nsB9LkfBikLgzy1nGJxcSKV5aL2tDNBWaMHLGoWvCiWuM6CUV3Lf3T33NouuWy158YqfTiV7d1obV9D8W8S",
  "key38": "3r54wEEfKZvCSuep1wsQHDBGXYSTDQ5orJsSW4Jco9V1D43buMQs36Z8T9MXED5TEKHFcadMv69hEyzqM7Zq4NJn",
  "key39": "3wEnyL7fqenTaMFvmgBNWW3LfQ3zYxxGsY9Jd8MbNaF64UtUq4v4DfbrYn1PqTbk3X1QTkcg28UQPufJMvZQ8U6a",
  "key40": "5ijp54ZqBinKE2JhgP9jq2WqrwbYS8yc1wL95gg6NQYX4TKTFiV5xYhH3fh1Z35NuYdBnuFk4o6vLRmREZyojzjx",
  "key41": "67J8zy1jC6WeVkD9UQEoruNM5L3ApLEJajfCPHQikks2y793Y6suBr2JnPb2nPQENLZWtMmFXLAVdcsH88zPUN2v",
  "key42": "2mxssMTHY48aAkDMsh8C4tncPhPWiBHyj4WzcHZuDjnrSzBSa3zvq5Gh7ZfQPcEkoXhDqLwvGng3m8bs7Qeyf7jy"
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
