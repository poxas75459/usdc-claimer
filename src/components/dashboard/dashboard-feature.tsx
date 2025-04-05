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
    "2WJkaWQeA6xpxdjzasXftU68fDUNGAZrxCx3Kpu7X18E3zqEDbKXGXti7XSDPWNdMgLJqboDED29oCz61uzxDPna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FR5U6JXHQu2ZU9X7496XNAepdtQmV1HifboLTNH2eMFm1npAf5Ds7r6q8v6KX2yJSqCLZPYirWpfoSWRML9RFsd",
  "key1": "65yNzQSEto7MhTACh4MQpSRYhCgHLntAySceXhNfdFUEC6YWX6FUvSf7LhG4DSGxpckuwHTZidhepYT6mPJdW5i9",
  "key2": "3nKbb53nj1m7x3MxcpukVyi3Wpgvv29gUFSKuYYV4ZA7B9BBbE8i51LDeLxWhxX977ZZCZ92KVQss74iWTXDzXrd",
  "key3": "CSihnGLckDpZH9MReZfsWBcpzd8GhfwNjhA8kDxL8HG5NJL3zZbyuLLVVhvBQa1jjHSPm66QH5LHDEKz6wYMgif",
  "key4": "3QmoXLSLpdERPast3RLeVK6QiHtn4dtvKYfR64yGuHjvmoc289kFGHroX7M5yrrKRL6KHUNJVHsrwYdsrCxKRJhr",
  "key5": "orPSfMP2Q8DNtonTXToDErpdcCS5HNexqazfXRHo7qn1QmGRpFmcHieDREMULQotLZFZnXQHnsVrn9y8ki74amF",
  "key6": "5SvQFt53ysmfsgFEg8mQdn1VuyemNKqx1YCW8AtmpVS3Fgrne1kjGELAGrcNphEuRk4vNGEXyb5CRAigDPw223HR",
  "key7": "22sHxHmCvP5acTZrKUg42SR2b1r5iPe7pMtRhXkpR3ziUxwiDAXo8durePMh3qTXHnEZW69QfsxNsNyhe46NuJiu",
  "key8": "2hjLNodCAe1Y5bgkEyyfvUJa8giErFy8PZqkw9b3APeHCRFhePYXHzF8Wsm31SCJEeNFULZuWSHAqqum5jy2CeJd",
  "key9": "52zEAvVDPgcH7nosJ8ChmiNeE27rAFwXQ2wRbpmD1YtyHhWtLwXn4sRZSGYeL4zGy497UWnSctjFZG5nLEixTGgP",
  "key10": "DhRaNtPiCjnNfEm5jkLRuzFW6jTKVbfrj5agRFqqnb78Yo14iCjRikVSBJxWrCx8qL3zpozQP7s6MJHaWDP9Bj7",
  "key11": "5MXxSckeXMyRJZA4gYn6tnQskjtY4R5BwTdZzoFtRWwyyi69CEewH7cXjmK3SkSmshe4zttRccG8pUry7ZVrgZU9",
  "key12": "3quiqk7U5kGzNw4qW5KM3GpN98q5igetihPBGG2dWoJ6hxdADX8G8m9TZGL8g49EyknQ9nHuCn2rtWtjXqYftt8V",
  "key13": "65Pzt5tFLCrqEmsRY81bCLqRcB4eXKnU9HpdzSP3pCAU1mzMbcKLLARKGQ3S8N5TbU7LUcEwmPhJTyBeF27fkGfo",
  "key14": "h5JXGkT58EhmaNBKoRQNiunT6FHyGpdKm93Zbu9x8BupKKZJyUFrdJKKerCbQRxMXKa2Z6DA9vZo9QPKEqAnrpw",
  "key15": "28poUaL8M5EjwYDsakgvZJuYrtirDuND46UbkCuit1KYQqdiL62jPitNYjYoF6MxY4ux27DtbGD5Rk34Go1WxNxi",
  "key16": "3PPpkFiSVQ1XRBkvyA6Jq7tSu37vqo5U8xHb8BDCt8Az9hsVSHACK7fJ531gb6XMNJpny8uY2aWNvYiATsWWRMkC",
  "key17": "534gYmzqMRnFfCAFeietgcUACikNcVbVzMU2iGuN8U48s7nbVE7aApju6jdpsZ2e6e7bKpyEk46Xe2z9vnkX3fne",
  "key18": "5z3jzHP8TnQ3DwSNHVToT8qXiCqePy8X5WCdGTBX9CXHnX7yR1DpKXiGfraprL4R4DPzVwSrAKbpaycjnnoJebwm",
  "key19": "5oZ3gt5A4jVT3RaRDE6RzQv8TksHgkvXyYcghvH3g6bc9s8CfPiFX42YgMx6zEAibYdiLA2pFS7cnmCV4tXMVf2E",
  "key20": "qd64ZoDUpDFsQgJssCwccpzBFWhNpax4djmQtBy9rojAKmQC6NH7f7jXwuskhwvffT5GjMaFop7TF2BcUPHufgL",
  "key21": "5QcBd9rfe58v8YDi5PkgUKSRAqwhEVWryZtfWoRFk2a6nXUdLmj3uGYwigXJy3a88J9WALveYX9CZshfVstNt36Q",
  "key22": "nQGYfLj3zjm7HTpZupXsh3gYk67oB5JDVMaVXHG4riStL34DX7zKCcihGp24u8VfgNXnk7a2CweBsujLRTA6CWW",
  "key23": "5mogKc8MazcDMk4VX933A7S9W5x7R1mRdyHRXPJo9rxJG8XRuv2p9p3oG5Hij7E3EvAmTrXc46Qp417GUPV6EkaW",
  "key24": "Mk1QjtUbswWpZtAZPzXJL55Yeu4j2DoE38oGxSZPVNCBMXEhpBzF2pAcer313SBrXJ93GzDJMidxpuEzc86sH5a",
  "key25": "4gFKoktw5GuihHvdmFhsgFNZofRAuV684zJnoYULfUmUwPVP8WgHZy9MBgJ1xFfYe4hETxFjDKMQhdEG4qXktsLH",
  "key26": "4bbn7YuVWQbpYEQiMh13YKKFhfHdUDYufN2GudErt1YcXBh67Mit7d5n4uGNNu2hpJLJFxiCGPCHYFmZF63kEC8h",
  "key27": "4vgzJZyjUJSDjNdNCP3QaTJfVpBXBnMVbbPhQVUr3E4wahx1aCJQ2F6njiLJNYUNMGgfzLumDQVuQKLpFGMTzxhS",
  "key28": "4DSSZ9pJYYGjsqQoUgud9V43vpPvTLoDa8pnrtmQGuvcapQMfXM5b9GpPgRPBQo1uSoBidWJ2mmrKnaR5frG7LRG",
  "key29": "jW5Y363LmzXmaSHyyDg5UYyW9BXMc4LEVk3KdFShenW1414UfE6D3j9huy1X15HofTfaboa7tjd1JJyfR1YkuGJ",
  "key30": "35z1a6Z3qnkBCniZEokVho15VUpwi1ehXcucU1gWV7FZHdVKBxB99iYj3197LBNHJrFTbdGVegV5n8nLStHJ1v2o",
  "key31": "3mN8hMuo6y6uP5xfcB4Xk843AHtKv2jXJaopBkERt8Nu6VZqN1o8M3HK9ZUBbZQpNPmWvFKf4BSNMHXircXngZVq",
  "key32": "5THkxSCFziZUvEairohjoBrMfyQqmshiZxwcSEFQSVzWRpg4godvSmBHPqPp4e2KWHzotTEgEakg2eC5BTNucCE",
  "key33": "hxizbMa7XESWgPWQ84F65SqSGD92E5ypNZZZohEoWuSd58XkpVJE2JZ8o2GRX3PDz2wxJmKnnEgbspRF2kLjQAg",
  "key34": "4WwdNrcMHVQc2rCnhjx8CXRTxPGxxqouwXLQ5MScXESkgY1nWFgRghMJ2xJi3dLswGknHqTU1NvnJvnMTScSvU9R",
  "key35": "3hNSJZwTx82mc2wwqN7hRwXrdvAf8gEuwr6PCP8pprVEwCBPJT4eMiVYLUxRCGCX6brWkz2aMirwynU88yCPZMYj",
  "key36": "3x9iUE62R6UXprak3chKeXRV2Px7V45CMX9aMgkp7c6HZwwkc7MEdPejRqCWX7QM2hyPEqEXHJqEcyKdML4ZqqKg",
  "key37": "5nBotefJq1gqP5U5vp3mDoeaC7JhpwXZC4auoGk5a7TdEEbbE5z6NM2ePmibfdLKWep6z47twaFivLMQ3jb7YSDb",
  "key38": "5PKSa5ynrJ8meRbd9unwp8UTkBwsuhTMq9KcsZ3McAPqfYXcrUFqpi8DYQHGPWqLoJG4qZQbHVSrpoKu6GkL2YXw",
  "key39": "58bbo7mUkwLDMA68A96XfqeEVcNTnYtT7THcK1P6uQtMWuTC8S3inHaeDryZvFCsJ2UCSGLn2NkKkSxyMPhKitRx",
  "key40": "5g4J4jLwLFsJnkzU2qkui4M94SMLLj9L6Dc4U5omCyuSPYsweShwNCmmemoX4XFqKXoD7Sejm7ESzSDwUcCLBZmQ",
  "key41": "8xx8sbjnM4vQDAVad9nHgrRrjmqirjKsv98HQrXF4D6o8QhvfEhrkrSG3nzJsoagV66CaRZfdpTpa9vGnRi4JLm",
  "key42": "28UUsirVvKvfonUcQrye7TM7UA8XBtNcrssoHtGUEJ1HuVugwokNnLagRSup9Q4Ciz9vmokND8ecqFZfqSfZaL2N",
  "key43": "4GcTYxG2Fx8gBNdcVo4KHEKwYkhNR85gVYx2yKbxBAZejUTZDRcwBJ9b71YcCU64aD18njWg5FdbJu3u9EysgRQL",
  "key44": "3p98gaAVb2L2Kyfw2orLDDv53EFrs8ufK6xQvo1wo6Wzm5oMyvzNWVvGPfADJVL643b7uNyH15gqrBBcCpNHxbuV",
  "key45": "3WtrHrHrM6HzvLZvSjk73g8dcp2dvhhfjBskJd4BHhsLTcCNWDg9UkUkBaEL2gdud5xp1bPTCFPZVWpMVhLooS1n",
  "key46": "6vQ81EqQ2ZdTGzwV7bkN6dzoop356MARQDyWyrb666mCousLA8sw9XgPdjiNKzg3wSFEcwzAU8B7LLfVsu47DfS"
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
