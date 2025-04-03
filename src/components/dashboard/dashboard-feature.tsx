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
    "66f5T6bVBRAMuBkHLHD9E3C7XtTKDmjFRgckrsr1SA5uqtkgovMMqTUQsfFco8oGxLh7ciT31yrsVs4svbmubxFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FX4JwBYt9Ab7K6tWNbH1q1QY3RHdDkpj37GmtyFeguTBEW7Xv9o9rdubRMxjTmstavUe81QodWzJ72RE3rZwXAw",
  "key1": "3jkynBzC7Ugd1dDXvtz3jscdqyCYiSF8Gn9gMnmC3yKqG3WQy7BB6vCu1Z8Q3pdFkNqkdhzTRmCnhiMKfYWGiL5J",
  "key2": "28mMrHmvfcmX3RVCRDyzFtBQL19omtoBPuBQyJJZmpLw3qqGjZFVs2fuKzJszJfKYoYBb9YtiqBPRgvXmrpsPqcx",
  "key3": "3eETGZw4xE22AJdSpDVBG2HEUiQan8qykwz9tjwwKC5QG6gGD2Uj2MZGoUrZWAhzheAQShoKgKj5Lk7rVQETwUk",
  "key4": "2GV9aobHxWa1BvUHxyGYCoxxr3vtA4wkS9qi87H5UEUFVHwJfKRELyoraTq9Bx92fJb7gM8MpQrZX7if7bvqhrV4",
  "key5": "5EYiFLuEc4m9miuK5gaLwGco7gL9RKcTy5vEi73pkAFM5qf7rDfguCd65Fb58DDQixg5uTe1BNgitGXAp6jftuaq",
  "key6": "2DffFRjzaiZaS1J2tXfExnHY88gjnpyAEubz13sNsJYj3fVRSayQP2ydVv4ywqTzPa1bUxwUimKyvzzu3VcG1Y8G",
  "key7": "3YCgH4K7td4B97rHWqHkc8ZADNvDG5HdudRPeivYsptWW4iVow3EUyWmHXZAwBhieaLUbi3jFcDpPzHkWiju1nn3",
  "key8": "47gWCtmkYQ7uPuuiPvckx6M3wakKdT16R7rzBTSbH2A92za2CK7jgoPnJ1Y6vR8HFNdQYEmBRyMDk243LoZextnQ",
  "key9": "3VexzUtpnpDrLWjE3AzKeWcKb82oxjp4h8kZBmaxAygbDnFiyEyQTX1BaWKwjVxgVKTmJmwsgnayN4horXjHZpdH",
  "key10": "5JvNHeeM4MsaYKi8t4RFo3xURv6mHU82H6T4pRJfbMvDXvVqC7Kx6X7tE7Lw11NJbN4VUU95o36igMCjty94njh8",
  "key11": "h2PNrCCu3yzgdj9fmSjouRJcd68Hdr4t2LmJFrcZgt4QdpCDAVi6w9rNoXDw9LVSKg8pPyKVBM536YGK9xRKCzf",
  "key12": "3t19wuaWCdJVVUZzgKEudX8N1d7SuXoHGpzsLyLtvCpWFK6EpnMGijsJQDPgfrH3ZcZ8vsXcJWCCr7Q6ZPyqhPZJ",
  "key13": "61TAYtffh54vFrah9zVdqMHeR7FrGNHRTMyypJ4JSqw6tDvobm6rfdzHM19AM2JG9egwp42WVCnWbp2SUbdsSU7J",
  "key14": "3jPSohTgv3pAGBbixPF8USKUoMCbYkKBXRH1SZnsZRzmD1acq9co6PG1wUV9TVMQjr5hGqvo9LsaezYUf24fzKB7",
  "key15": "613hCVGBadznNwAczyKjBWKocbtz1YihafT2Zcw7KdnW1X8VCRX8bUTjRfJJupoLW91tywWkc19RU4XWiSnL2dem",
  "key16": "4Y2qC43gJLEn65MP7Ha1eqaDPGcpRri7XLCjPor1amqda2ZWQJk8wcmnS4uASrtQDEKCdwKTp9APs7ueDHwUB8fh",
  "key17": "47PwUeQtX1NYyPtimrWyB6i5d7MVAM3KL9vFrpiXMAzq34eMCYEho8G7AAGUw6yHRVtnKQzFZLhM5gFNoVeJDPFA",
  "key18": "3aVqu6QNm5sJHZh9ikaKxYzykJV8z9JTTRYG42m2TAzwgjM3RggcgyGQbobyBUWiDsU7hcogSanvc6PLGEcWkobR",
  "key19": "5kD3gL5HPgAFhFYB9qMo4vzKm6kigC61pR7n1cNhmD1VgD79uCqHH68B2ZREdZbYW73oVjJ2XA41VHBXHCezZa6G",
  "key20": "GR3n5syqhE6KNJf9UoXXvwyshFr87C2uB7jGVn9U1oP4Wf9jSqSfngfLWFGLYzsV5n6Kz9XdEtcqXdjQgpw66aA",
  "key21": "5YjiNBsR7nQnSHSJ41d9UNsUuxKWK5u5tkbZAf7rvsgGxZWyvYfwXn3qhtQi1n333FJX3tdotVm9X4WRTx22eeGV",
  "key22": "wLvWQHXsRf7avFm1nWotXcxeqYXC5G3hRR391vfUMGvqmefihMzKqcaUcnAiKxpejsdUjbrMKLmjH65DJxQZ4zr",
  "key23": "aUSjLGT8REiE7CNtiGbAdW6xrKqhS8dcCSMErhMcSUhzRodV9c5ojeeKFZVMgLjrh1sP4dBVxw7LPnqvA7eS6MQ",
  "key24": "4WZ5skM2e4ezXXV4AVKbVDZpwyYQn4iioMZsom5HXGKg4ifBcQzMn2yP5Pj9B4zcdEV2zfKKoJ7ukxSyR8kJ28E",
  "key25": "3rJHLmk8v475S1bqpspQv7GGRfkCDEgx8NFkpMkbgXycwP9FyvJFMEe9X48Zs8Ea2wEy5EaKo6EvfhUQaanANLVM",
  "key26": "5uYKGCo2ZxSm8kbnLR96jsUAAe1EzNxgNWQNr6FEmb2VPVeKTbYK42i7ukj5BZdpuXGjpUgrKgGnGipVZ2Au26Ko",
  "key27": "5TT5QMzMoTGju5zpk3nTnNxLhGJoYfKJd8164ukHvL4xd6RhCrmcz8dx7ody2t1AubhnhvhfmBdCUEGh1ApoHCMm",
  "key28": "21Lvj1bjqQNpSTRjdV1TRnWyRRgKavMe43sgowheC3cqtXrGFunNnxP2LS53bMqNZd9SQtJa7dh38YW3rAH6NLqY",
  "key29": "4WdKsstURuiVsLhbNPapxxGTwSHKk1xm6EbutF6WJckPpZdc8HE9nFVGsRqpHnDCa1usDhhvs87DD3bgQrsfiMNT",
  "key30": "6DMbhZizZjK7TSsxYHqgNUu63KMkG1SFN1Nk9qTXXC4CiBrQJ5exWNqLenT2hVPFu3V6tLLNVQUCUepkigZT3Le"
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
