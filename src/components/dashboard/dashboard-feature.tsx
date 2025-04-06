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
    "4wdPCit4qD3fLrwsv27jhnSkhxc2bQuJYH9Eao7un3LdAZjEjF12rSaQzpbtsvbFm83vnHghZkFiJy4JFRD8sppK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSSZQ4u8fLTdai7JkbePzi6JVbwuFuHgLtNdiCDGLEh8vjc9siZ1dRUWmeu4TfVdXaKRBf8PUysZYxRhW5HfbhT",
  "key1": "4mSangfrgG1qYrEMp1cAMLfRuNnDYVWgHSjsh8SC5hefexM9w6SRW8qpvVhEJcHpmWzDeSAVW4UjYePgTGBiPuPA",
  "key2": "2iRHWTGH6Y9kfPjqCnhx6s8L7jbeqKj8RR3K7BY41ypXngaAhSmBE3g66udmY44KHrbzq1uZt3QBnDZ4J462Afv6",
  "key3": "3fQnVaptUYFdW87zRd1BukWcD2bimE3qxUCSDCMx4iYQF93jqLrzhx7zLZ1qMw882t4PyCrHrkfUB3ZHwVG4DRRi",
  "key4": "65KL8Wv2eYRxum5gTSokC1NEtmjcUYYDzZv4bKg4Zt4LCvZaDr9bY2LMDueJjzsq2vRCvYazxXGcDr668p9VpHqg",
  "key5": "28BatVQ8c1Jq5fdx4jTmsX1d8UUHeYJjhHAzzuUNXfEeuoPxH75UveDk6xndxTjhFKHPEW2JJzTYWYmKrjYand27",
  "key6": "2Zt9327NaSC9ydc5fLqbmF1TwUpgQo5eAnqu93uDcEys8D579p1n3bi4UtLjibGAXXVrLREj7kVDP5KX64MoRB5Z",
  "key7": "2RDGmhgknZL3PrBiSQv5NcqAVzyQJaYTYaYcJEeTLFXYDiU6Y8GXrTay8QpEtvxPfqrJHbUzfa5UCfWyqAoiuLwb",
  "key8": "3NzQG9JooNJSnpzcMNxUGTBHTsNtkbiTW9krMJq9FnGQWed5SdWo6FMsnrXGqfsYhgr2T8gR739Bi1ysCKqSi19",
  "key9": "376pGyqDtr6grD3U51wtzo5jokA3X1UX2XRUKL9jhfjVHpiKUR7P7QukYy3eEUaqJz8rEYuQWWcXnNxQoRPVMsNA",
  "key10": "2aE1PRDFn5QgARJiUeLqEv5ALdkVckDQvvBFne5on8j5unCK7uwnBAu8fcN4yVqRcCjudrzJviUgAuQHsmUQYw3j",
  "key11": "LdKVNFSz8XrQoTyuMrra5cN13Juh4NZGLCZtb8zAv3w8Buuesv97ye66cgkBUDedgaShumWFjW7qNcsVqsP4oFQ",
  "key12": "5wXQbABqNkoiauTVV8JEGQDS3FLaYvXSPM6WQGVgTgGdwMhRBpasBw5Q7HTm7bBfTYApApKoZp4udCzumtmHLZJS",
  "key13": "5sz1uFoAhznfbbok46utkrteACwhjwSgKvu15ox4zn7hAkXV9HTeKv2hN9z5EoL3DkBnSa6gXpxQbTZHmPabNVMg",
  "key14": "2DaF2qjjYeePpFPHWpsVf86CgAAaNsjDiaed68NbpmHEo3ptbFTBgKZHmG4Y6tYgxJ1AvmAY9jxsbBGf5fMA13ja",
  "key15": "2kYReFRhfRTjpp4pMs8BgwWU99L8yLhYzS6fkgmf9qhwsQSkMBmRPoD8QtAmNiDtDsM9fUZPqDaQLMuZ5XXV7fqu",
  "key16": "5VBHyf8gAzAiedve7FkrvgEd3qjgTZHN28N91rsEoTRX6xt9kmSPDqJDCrybSuQCfRYRtViwmErqMhsEzv43846",
  "key17": "LybWSv6GFojuzJjvmDcT2wQbExBDfrgAdj7YM1zjhmCv4L7jf2RLjjc2gaY4fj887c79cERGhp3pwAbf7QJ6sT3",
  "key18": "4HYWG76yR3tcJZuSvdSGBCRXYqEhHwTvzoduwH9gBJG9Qqmy1AW1f4asizdFs4fzpaDfNuenMfaBnR892h1Fqq5R",
  "key19": "4XcvYpk4mprVeYZUcd7YngLqStCiDefzD3WdzTWa2UarXVpYQ3Q4YYnz5f8HPSyiEfaqM2H2A8Yh9yBxppGf4zMz",
  "key20": "2HfuVqz36KoakfMhaTF3Uhae9BM4f6mnsGYHg96HuCzxbsJ2y3qhtLPSQQWJuFZzdX1iYH1KToFcCeaKWVsPujK1",
  "key21": "4hkZb66ckQEPtR7P2pNwgkj5dkT9phTP1131KrsxTx7SuLiy4rsHUyueafugE6VifxFUHVRCEGQjMwFkwVe8YyWE",
  "key22": "4Lz4CtPcMoiWwvdSqUgNg4h5YzjSUsa3wjBNR1rF1T8v77TX7JEyv4K8cWtazH8qXqB8ELziKZtkNAZBt3Bp5e7N",
  "key23": "4Jax4eoYRzZSAmx47urkLEbYPgCKNGtfpJ1UQjyQcqUKTZVuLq77DnD7x1so1uYjuoRdKAXonUCpDEu1M5QkvNwb",
  "key24": "2WKVmvsa7UZhAXx13qQT3Jx3nTzxT4dz6Vx53jM5KjGMFjTR4bQCB3WbTkD5wpsxMn81bEY35cd9XQjkJnxucbaf",
  "key25": "2AME14oSzQmUtuot7dgam5tYqzbfq45oXnCaVscswrHdRRAtnmyBsZXBkA9YjUGucn7rYiE8FgbQrTcxYw4BtLoq",
  "key26": "3ehmTxPjU5QvxXz5F4uVuM7Z6j2pcZSQ27dRsAcTDfvwYbmiyxu1DTNpmAfjEhWNhzzB6L3Hcqks4NpKxJLAGC7L",
  "key27": "3Yg4VNtTJQ7FCgpQsDreVFGtxVY1An4xNJPRH8UJef82nGZ7ivisZQUDwxCpS4fUoHo3PcTdeYo89aJNtxeRGuot",
  "key28": "WkgPdUfJVeFosMq4Kgn8wrGAftowmmEwy5YZbFwb8k611JoWsk59T1UiE5vQEHbcbcgKZNQi3pEBhws3qSjt3sJ",
  "key29": "3mn9pHtWAatWU74CkFRsfsTNiFNRpNYJ4wB4sqfMbJodiWC6mc2iDr2pYGuADbmTnj336WibRUMAvf62VHq6jsVW",
  "key30": "k5RnXXjf6avR7XkAWmHm9eGHRDka8Z5XxLGh5nsZED8DFrvFdCLYqp6Nsx9pMjKyXMztpZ3RBrpzv1nkoPKjbGD",
  "key31": "4k3oY8SLgCcCN1P6fGaxWFjm11mmGB2yFXb3C9UcVpWDYymq4WxjAo6auCKCefJVQgNPysRWwTiyReFCx1cKUayG",
  "key32": "55e1Sacmqvp2Zm5ppv1B3VfgtofDHkK8PSVBRtugrfLSFKL3c2XYfDSArY4P3qYMpuPxNm6skvWjejuyR7w3L7SD",
  "key33": "ms2edrbZtxxtYzAs2AtLhz8WAfMQcKUeAJtLhkYHaTpPgWVrG4KZpoCXdJcZEdAp2tTr8bqfAvpznM4W4c7xA6v",
  "key34": "GAKbrc5ZiUyv7rpCksrhyf3Nt9h5HvFfxtdp7ABzD4e1yg9pinsQ5NLCwt6YDqbPpAHGwznwku8KdCVC7hDoD1i",
  "key35": "5Tr6MTtNJQr2FYm5MZgMsT5kEyujTCraRufR8z7G8assZ9LG9JW3tkaJHG4Pcn1qc7zs52LFUXD9ErG2RDA7koQ2",
  "key36": "fqAwih78Waan2NetvgJW2b9knHZbUq1oxxRqHjN5pb9q8G5c2JPFMTS57ECSY9Eq6rTPtRRMSQa75FBzjPANLgm",
  "key37": "SSVEM81SvbZ4mLqZVq9purPE9E9LKWicGbTBsQXJbjHSMvGHfHc4JqwPUmL4PDyAFHpLZLGe8U9BcCy5R3j976g",
  "key38": "29Pm5e7Rr4uyvoJFHsMX1182rTfkgY9HB22t9gKQVNvJTMrVmyTzgBTitBNxvWbDUg2nVEXxKXHvCGCUKJZiYKNF",
  "key39": "36uEYobApjViQPSVyjvcyUo2aNUZ8i9v5zxB7RGXd2VCW5S2jb6F9eUNqEm9qp1EnBx6SSHYdKPTj7y24zujEbx2"
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
