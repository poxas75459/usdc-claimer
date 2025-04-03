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
    "2WU9dG8Srnf6FynZHYXeNmRAiqmw52bou13Pa8EVYRJ1hAdG123u7VW1eWvsfz5g3PDJbTUea6Afo7JVLy2TYhYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61uTbsThszvJxHMeBFGHehzgaz9Qb67KJnKYpB4zRp74eGWr5ewF6ZgAzzFSRnJ8QueX95SKwR1NKUJkDswQiNzB",
  "key1": "279Cd2PfoTf5tQDTMF2npQBzpPxDi7BYsy7wgBqGqVBaYUMuZQtQ4ybPBU8NnAaXvEvkp5nFVT9ub6UZd3tANnAj",
  "key2": "2guRY9YSHH6miRgrqHt1s6xBHu7m3iPvtRJHs8D2V92rogg8eUPKDtTDXTcHoZydtHrdibek8rXnKvrWsf1oFEAX",
  "key3": "5KiePeMpqxPMqEhUVGZPdsnJRp1Ep1grFu6VDjdcLC6kjrrDgRjTj8tUVKk3VU45WeZy9J5i9rkfG5oXRB64Krtm",
  "key4": "2nhVGyhiAvLWsVq6p8LQ2ms6itFNKQnqwFnXqmjS8AhVXSa5NPUJiVhVrJuoWeVtLHoijx3zrij9Xsah3GNs9ztd",
  "key5": "49NaDyUrSM6dt1eGHvU3eWM7Wj8FwxudqdYwRfS4jaR6PWNXbPqwLLosnyPTNwrNRpFyiKYqirvJVRhdr8KKGWZg",
  "key6": "5Qfah81ypw4bC3ewP3g5b9w9bgypXd74WjtZKHqVxTLyGFdBkvav6ZxaNnptwGLT78KbG3kDmt1TqomWABXfxFzH",
  "key7": "4CpEkEw6ipMCC6ACMuUESBLxhSz8122wzzxFP7H9JWnGUoDTu5WJz9anrZ9tKZ9SEDSF38tdvaUvHBg7dbqVan9o",
  "key8": "9Mbf1dGowD564wPdKYPbKNzSaYUJ1AaQUh3zz9vgkKjHopjdjX7DVPU2ZadEP3pVB4RTzwsXBfHQTMmYBaxWWi4",
  "key9": "42pufFg8JWBWbn4ZjQvXHVUMxbVY8PEYYx2fKZmymTBwMfa8Zfay5rzJ3shLzoz15MpktqbmaKSRN44Z2tHn3tka",
  "key10": "2h1qYtPY1dLhi439CwLFoumc5Kh9gbCHh56eRXB5RJp5m5ypMfSfBTWrjZJxB1jJfbkejfjUpPZMhMYQ4bFqGfZX",
  "key11": "T3Anm6YGHTaqNy1xAfeHeA8aYZ6D4CGMJQvaoB6mqz9SZTtfgYc3wEqeC62vs2q5fgwKEKM1LaFTLqqtRWaGFio",
  "key12": "2NpeUSyN61r9SduXypk7D9DpCYvhKJnsRySi7vgHeVD1E82JPTMVyN4GGy18LVuBmNX6Xo9daQGt2uJJTXxwjvLP",
  "key13": "3zCniZsGQtHzh3rDSvwvaUaPrW1RjXiu8Rgfu8CnejzoPRRioRdF8oijr2vigSpwHKTrfdEQG2UVu3WavKqwoe6",
  "key14": "3KAZdFoii5cvuiCTwYYqDH6JuoSfTk5NwdwduQzazo5fwVChiNhYTPMeaCeoo86xVo9BBWEGFFPZtYP8nmEkrBUW",
  "key15": "uxk8sxU7TxNL8GR639PNxrhLEQv2HnPLA5z5wcYr9Ya5TZUZWvp7dZjFQ6PsWvG51fEQQhxhRL2m5t7TZTsZPaV",
  "key16": "3fXGB9uHnhEi9b3xMW9Vxe7RkmrQHXrujx4YBYtzCRch4Z8aiN9f6iTg4q81LdZTTTXasxYet57rbNztQ5KfgsJ4",
  "key17": "22zv79MbHo5bEAFoteoNbUbNooJwGJQwuJWcBgCb7xG8jJhXt7SZ2GDFHbumYCC6b4xNVHx1zPpWdpycKJWsQnKg",
  "key18": "4rNjXyFKMuzTv54V6LCjv53BrAswfDUEmaVGJQzDn6SqjsoUxPVF22oDCjpQPZRik5pd1uY2DxkqF7aUvzMSCUYn",
  "key19": "4K5HuBXckwfpgAkDWw7w2bHaRxtemMjtLdChbxXWC9rczKqnTjb2nrBLPvm3QCsVx5KS7xAhFHft8MKwkQDdDzaN",
  "key20": "3WrYK3oFoxdBucnQmmJWtmhLPw9qEYHPAhVLcBVbPJoQt5JBxuVNiKLnBXvaAb76iLsBJaNknVnUEetVdEky4eei",
  "key21": "5DGWmfSUTZ9E1EYuHz4V9dJdakQNSysBx7QnCctXQHNkMhsYRFpJX2UuJB5dB7UQpWU36AoxTCY6GCSkTepUWyHY",
  "key22": "42bHh3VYKDdg4GhsuCyaHdk6WfnLuaqeCrfiu3P1w4KvCXoUAbXG1n6MVEMJ8Jsx1iMYcBbxTByf6dTzuxqDT4Hd",
  "key23": "4DeeLL46E7em3ta2Juj55tq75DAQd2y7toEAc4iF5ZvTa11oZMTfe2r6ZucA2LitkHdCJR3ZigE2DqhRsBfCWQiJ",
  "key24": "5KopyMh3kEezGeskVuRKaoT1RfT7c7AtnNxPwV87p7DdBubGwd4BzopE6vMparkCfGEqVEvUapYqYAYYhBFYbGEJ",
  "key25": "3MDgSPaApRNTZJsmcQGor6uoputshvSCenHigJuUVLrCc88tWph9F5ufWQJSqWBBUJ4uRuYFvY6sxKSmskvGJfF9",
  "key26": "uHSEWugo63cq3KdPspHknfZvSeuPEEGK6tLyppJ63k5L8k2ELGGECKeWJ6MrWetsDaH6raeLWt2FXJH6jLy7hDv",
  "key27": "3TS18uzGVSQsyedUuw1us7enbd45oqgm4ycY3ZVhj3dJ2JveWmogbyE4UsjifgbAFj7kGnKQQQpk8t2ZKur34n23",
  "key28": "4kERPspn6k6CU3NBgmhJcGkaZtUtDYvKs8eDrRPbxwduAfCvBWamNSY4G1Pwo2S8K4pLrcQDs5KVBzsFxpZfWkKN",
  "key29": "3W5YFGZoLoYViBnZk2fe2HreNK9T841HrszP2w62iaVjamHXGhhtAJ1kLXFqsBHusL9PkFRbGcTtsUyysKVJNBGy",
  "key30": "qjfaqcFaZA7u2T3UfyHRv8sLi7k4aNL1aW6EWdq8iDB81vhjP7FuhKWB5DdhJdwSrSYix6NxTxAShFwAgsW3jvv",
  "key31": "4QKJ224ykMCcgVsbdb9mTmjbkFSRKUQNwUvf2twtaKe1c9iXL3ufhGpALfMB7GyVu4e2mfmU1SktVdYYy3jui5oU",
  "key32": "rdBPUCkrRHGWc7cHqtgG2qpVNz9VeLi1PMtyfXXniCBUS1srxeLdaYLGMnjAQ9CwNyZZxKiydrbVmgfzTzcH81e",
  "key33": "5ft2Xf2WrsrbMVw2aq2vD73JyKaUVuufKRgJYFmqqF1UhPh6xRQR9PPSGtyLp7D1mbZYD9UueQ5jsH6ie5bPLB3u",
  "key34": "4hCc6a58kFb3ZtKzKfobBKEBeqtchYPoox8MKF58hpeF8ragmko6eARyiMTVSCo6KGeuEhGwEz1PDjE8yaFS9uNM",
  "key35": "4w1ire2Ho7bksMdtKuBgsDAgrbti7pqJCpSrG4oEGm3CPfWJHg5ZQuWjVtXC1RyF4hVX879SHBSwcCvyyL8aURPU",
  "key36": "5BqRU4LfPYjeHGEM1wrjmBW3zF323zT9TYvYWFJ7Aes6te9HrFyEZN8jhvNCoV6SmewNARzoLE4XX3GX1tgWBW3a",
  "key37": "2etyZ6G411rvr2KoYrNtoJxyoTBA2zao6ziiux9dFv68ZwWBdKWKoPrXWrBGUMyFK1fcFuoZdCfchybDpDbETSs8",
  "key38": "3j9rcbK8LnBxLsEmgf5KC8hf6vVoShYo2AbfRrLVqQMYrLy9PiKMbrRY1kTb3qyfwbWduEiMNetaWBMHpvSJfyGe",
  "key39": "hfNMz2i6YWdfLdaw6Amxm2pdgQdbAEtvfkpbZAngPP5v8BZL8spJew1RDNPLZTnJLSRiRD7jbN4pFXbGKupzunX",
  "key40": "5jDswDxcaiSSKdxN9WU4DAiyvydRs8VhnxRpAzwHK4RGXZtsxoxjAJfgMbqDLKCCzTcv1ZVT3ZoFGRViGhkdKPWn",
  "key41": "5acaufWDnygyWbzrAwp3ZqJBksiqwtnoB3qzUypLxZ1dcxNogYhhryW2cMbYcuZxwoBtTuFTQno85VQ5gk9iUdpd",
  "key42": "28CJ7L2Xi23aQ5iCMB9Qo7Hwe7CCRcBkLndr4TUEdvuXxWMuf64NjFy6gVVC1tATYdVowmRN91gpr6Ukz6Zs3MbK",
  "key43": "3vrTbQYa8VLm4fP74ij7K67JWwP6SR72JR8ko1nXkH4E1HEQt3uhcgRMstESiQT7s2zrDeCArcac5XMt3EUoCm9K",
  "key44": "K3gm4wA8hPpqPVF18W8QsgymAqCkKLQ5Vv8LRV4BDSNYxwcs1vpqYaof9FTyAj7Ne7zPBQZy2MP6E7fGVKsuFyZ",
  "key45": "5KvQWAXH6TjShpfwUYyyYJTyggbLehJQtVNuXWUwog6ZZpMoTmi56ueoXbWwHzXTQctUVgRUk1XwNf9x2JNchj8x"
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
