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
    "YgeqUNRVfb7jJZTyNAGB9Mks819EkRiAE8ehgQfrdBq6AwEWafPHGjQ6xvcH11xay69t7N9NEE4ipGW6yaki8JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ps6VPJTkQsMbzCdTHj41gSYEFX6HmgCmDieVfJWn67tAe6STDie6B69rjoiHDr8XU3GftSHjTV5AzvyQdJK7cND",
  "key1": "4ACCET5BFzqkzD8XhftYfi5HrdxMHbFUsh3izxJyCfCzRgawC5rCvkQ5W17Az1ZbM29rPDzmNBHbYrgrNpTzswbH",
  "key2": "4yLaDKzSHZBRe6jKbgwGFi8aozx79qqNJnLcPEh8JXGWVX3hEFC6zrxMAzKst4KsLrRwrMjCpZqRLHG8M8j6RT4e",
  "key3": "qyeDxRVP7ZwP5KT13T2P4NXsPJoyUoxpdB6yT2AcGDhT6A297sNtx41p7kqkLTuWzG9dnWmNJKeLeUMT3Tsizza",
  "key4": "Kou6YAUUUS8Yx9YKtB7YKwzjtJwbqMyy6ubVp17ctZENaNz91CjMrsNLaGAT3KHXpEoAsuCcX38918h7Ses6AS8",
  "key5": "F4EcjtGpk8HYNDCxGrCV4GBS5YC6VuDQ8eH59GJi8732tnwB7ZdXtC6L5H818SYsTGwPit9DYQuUprBQUH4YgsZ",
  "key6": "3N7n2aQ3D9JYSd9JyHWjbWUvgHBEYCh4PbydXKET5Z5jHvWdDJcTwPvnPd5hJGGjPSvMN6CqZKwbas7f5UwtUk4z",
  "key7": "5rufTusbqpLNyaJaom1uf8ERyQQYXhbwUvkyawe8ZJaKMKgnk1LL4rLSKhyp5xcdSR1uywDj2JexfGAw4k3iH7C9",
  "key8": "2om8gHASMLQ17o3Jx4QxonpFvwUpsEdJXfbHLU8YbNtaWZXpjuJN8QFJVbNdU12iZtryhX3tAUTkpx9TVoCjfKCt",
  "key9": "43RKoEizDrqF23nFCsnE42jtpdW9YsEdMHZNXc6tJRZoeip3DFMfnsd4JLtXzk5q8AYtUZ2LNefkmyMhhUJhsJDX",
  "key10": "5R3oxxCYaWwbDqqb786U1g42mrkPo9DRRXHXZP5mvKqrMUgJdArDvRH6tcPH2Kr9zRowWSr5dVJZPkQXuvApRvZg",
  "key11": "wC2mFijj3QfSzUhnvNWaY4oRjRcpSpBkhnASb9rW6Qjg1nyXc1wwBUVeVxfCce595t3j2KbtFcATCkFCrVdR59K",
  "key12": "59AEWqVYj8ZYMhL7SMbhw4Ah6yybyNG1m5QASPmkrHWaDqWtySyuiSsQU5iSGKQ5gi1djdMp7xAwqKcaQb8prcDp",
  "key13": "egUZdUqrHWatda8ruuZ9Xm8eZjDtNr9wDmK1RJbhqtKHiqRMWzQw6WBhtPDJ21YqPRqktR5VJuDPVo2nA1Tjbii",
  "key14": "oegBp63GcXgZp4mHMLSJL1ynucqawk8Dic7A81hRrsKTwkVFtRXdcPBtGEKF44T5rKm1EeQkdS4LF5v6bTBbDEB",
  "key15": "287UGn7yrYr8G1bcgQ2k7ugXgKq29AFgrKHTCjM9BdRnoyu1JJM8KXoV5d3AyAikxUMtt45qhqdpg6g1HTXYw3sa",
  "key16": "63gCnYgqT8Bp8i5AxcQagKCB6jHcyCKCFDQy9riCNmpbwukwhtkH5RkBN9mtTezoERe5p2JWKZnvmKE7AbzoLox8",
  "key17": "ea7oDkAMF6GcHEZnrstPPRNUxRqQWZjNB5JMKcgvBcusDBf5UCP4ttivfrRYfFN6ZAvycwsJ4shffQU6kbiXzLM",
  "key18": "4rosvQ5462H8tQUA7wRPkHbk6hyZE86KwMvW1ugiYsfrPEtDSMS9N6tTCgnyU1fAUJgF1LAJkAretH3N5BphfN1c",
  "key19": "2wZNayi97oJeY7PhBxND1uyJiUeP8Xt3ZLEvnbacLLh7YGsruq5JpKBM3Gon6tEMoT66kDriYq1YJuf1skVZfAYk",
  "key20": "5vM7NvTAqmtgwxwLhzwSAYgLxN6eMjgtMnuQaVcYhcbeJaW2DaFmZFpvnEwD7SRbnstUUM5moipsSo5nprr2sh42",
  "key21": "3JuTxe7A9DrwgQDAubENcmw3bu6yvBFJi57csnBKZodr4szCm6TvEqZAvhqtFp1L7E1niu4YQcyP7f5s98FBzogr",
  "key22": "2kRtf8hobwNWshNbxmzBGvR3QcVTfCR4xFqVNz79f3mY1BXfSg5QBykjPbRd4BAPdoqcRQfYbvNHa3oW2GmGr7Wy",
  "key23": "f3PCXCnfe6N2W1soemMGR4JiTLCifEvb7DQYP6EKJj1fL6FShXgsdbYYE4pAX39bGC29zQLFVwTzfrLhTFVDhgj",
  "key24": "2wjFycGcxzUo4R4iz6CgVJP6D21ow4U8twvR9yc986Abd8Re3PFEiJnmS2oXHBDfnJV2CH3xU56a8myU2CnsGwrr",
  "key25": "vqDstiLAHgRr12tqv7YNVWzxM9jMbVYVcCCQFmt46GYqnUBVaS4tZXfe6ntmMEb5LNmt9UEhppEFP2vwjdFY9t3",
  "key26": "62EhGfm9uBi3qX1g53mZqmmRC2MxJaJV2nD9WAJQPkWrH2NfWHUQqWLsjAy5aVLidADm1FsKYjWXavkdnj337XQT",
  "key27": "4VWBAvfCwgjZvtNE32xj3ZBs5G3J9YLMKSEPUgUr5gDKoUZsnoh9q1h8eYNuEQB5sb4awE8muYCiRquqrEVXptEF",
  "key28": "zZH6uTMB3fTjH8B7abDpMtAzCVvqXpJk8LnasVbR2yKP1Q9ydSeKsxZbziKqjkjwuJE4hLrMsy1PjvuzR9pQk6e",
  "key29": "2T9AqrQq4pEfYSoT6pfGj6xcpd44osKRYndg5zJp9uKTZL6vNuMm9PWpLPobRvgBwGigYUpkE1ih27LhhhKpcTeS",
  "key30": "2cq9TFgM6gWALTMgyzDmrJFs9JH43CconhNDFsjsgJuzX2TpKaaecZDv5r9XPo9JA1jFjbZRdRZF92DX7mbCU8yi",
  "key31": "4fps79e5jBymseLq9sUH8qbMNftuEPav4TF6psatkBYXtJJ4sivu8GcfcxD3KEtX4V5jzZFnqzN7zc5fuGsGMbvS",
  "key32": "KGsPxFvpGyoq7mRxVV5T2etVxTj9AzyXDFuB3fieHANpUgqZKFPnGT5w9sDwaiXLCAJtvrNuhBcioLTQSejsgkj",
  "key33": "2sPAwcsNeJryvJx6u4TfYxDjLS1rjseKVzErTAew3tMmyTTxVGcqjTToLx2Tveq1JLHWadxhK8vkQW6EpfcoWexN",
  "key34": "3j3Be7AfkNqRRfjkdqpjXR4ethA6nU6nsXS5dfR6vRkAYJ2M9ezYfMGKGT3b4JM4BXisFiVbB2Vnq8rMVdTcD6Tz",
  "key35": "45uUQGiQMnxfUzP6XUboWc2xzvw4R4jefMZEWi8Z8W3S36TSzoe1iwCVDWUnEuChS4KiJB8rnaCrwQcXVNMdFBn6",
  "key36": "2DRU1G72XyK3sQMm5jvTzCVXHb8KpiAUk3eo13Kcxsg3EcN3UFbdF9q7EiQ3eHQF7N4jpcp3uEatHs4ErkD99k9j"
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
