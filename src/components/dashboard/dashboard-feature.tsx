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
    "Qnof7UVmDW85JTVRfkp4t6hYm4U7KY6jbf1baGNCKf32opQ9A6haNDCLaGbaoLxJkvfqJYRt6gs2ethCYCcQnns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtTWj9DEGLqtMnoWLWP4RsqFELR4LZMmcVKuoSLCrhNxKEbULvjM1e9R3CzfJ2snwZmNA8sNHF4U9P9V3VrPdgo",
  "key1": "3SDMRedRRNkUJTXNWdLQ2in1gRZ2qCC5TkNujyH1yVTRNjrK99vp8vHz2ehJkxwDdNdVrEaZmBBKARW3wF6bnz9G",
  "key2": "3q1FnaFMoTRaAJbZrgXoapvsTHwGFZBEMjsQ9yFjGgsoZGFsqGtQfMhSR5hWuhtanibbJoTJhTRDap9ajTH2eH13",
  "key3": "22a5DS6mP9XeeNToq9dmcQGAVe7qyUvDNyW1vkjWqtVFvbhXdrW7ievinDFonDEUVfVeMsioobuxGYVgFCHScfcj",
  "key4": "2tq1QRbQKV4yQjGAvU98RiZSjPXudx1Kz52oCqGEfsPQYRyD41FCnagmwgQRxMZM8asrgJ5gtsxpGcWeRMT5niiW",
  "key5": "EtKBoEcmkj8smiYxgKckzZoL6m2XaNa1QLwoxBqmL1UcNN8NASzn8eHvg8vwYAmFKqnwXSoRcV2mT33ZDxLtgDn",
  "key6": "E6TyLWpCEABv2t8gLPuvhokfzTogo7StmcytbMWyxPRnyLieUShHFVH6c6EuqXFKE9vd7dLko8Ge6NtFRfBqEeV",
  "key7": "5WH5vYYktHX5ANPAuGzd1fp3mtzLKwF4nLwpQCHUQbSp8AS2U4RRBr1yWfaAfZfGJAzuSzW5tktLVP8zNrRdUMKf",
  "key8": "3BMb3sNQMJQGbCq1t8ZK2z5VJvT3s5xcNFRMYJqZt1ET8rh41WRK6Mpm77pLfq9LBqnTzSbqnD6LBfmjQt58V65F",
  "key9": "WeTyuVarhxpQLZF8dDBuwede3ZLTYEwM7QedyHainFufEJDfpQ6z9NQGDR8qZiotsXxhTCTXVynv93rp84CneS3",
  "key10": "DmC9CaqGLnVZjnY5XU2KMM6EPdwwMZo7ngnCi21XE44caTh24QUUtkioUBHiVrMRJ3EPWwkPqFBAZw7bTcs4kAx",
  "key11": "75frEq6ZMtoDmic6ZBZMBkKeruLkWZBNoEA5omKaeWRzYCyma6zgBS7FiJnQAg7seSaQQRH71rjDgnUjtozU8YC",
  "key12": "3eugxzCqY1sdaUyj6RKgRFpubq5as513gwUr1qT42netdoGgnqJA4q5DkSF8Hfw4Tku2XZNJfoe7Ahrnbwuyncb9",
  "key13": "5zXiVikQXyzL5J38rRRTUG9Y3DTCXogGNDNoHNohoSJ3sLwP8TXurwZ1HMN6fniDhYavX8HUkzrFdh9RbLrNT8W9",
  "key14": "5w1kBdw7EiDu4a2qjycygUNbMUTTURjtYnGTyHgUwWm51ngfRCs44EPpwvi1bJdGT5AGoCL8iUeMHcvXfiGRBNjW",
  "key15": "5FNgahEj9QH3CMi2bbT9rMojKPteEZbamWz6WBjrYe3oFvJKe5PexpwanVc9JLWsWeTX7fNU2VVMChcBn4oGbYPM",
  "key16": "tXWCZ3mmVj1Xewvqxev5LxugqnCE4AwT3dCSoEfmTFKdvnmfyZP7fRwK7PouGHshfGZcKXbVkGna9fffN1X1jxx",
  "key17": "2uYEHX1KRz37nXviZy9yPX5dqfGbj6YMTqn4mSCaKezMwsVinHUtNs6kPMrDc2Vf6iMZYE8WvSWWhRGkRnLzuj46",
  "key18": "EUcbBKv3QUx6ZhrZcChScotTQWJ1rBNoufL1nnpxKaz8P6jr3kAq2gF2WQLQpeG1J69bNqWabqXNBfAGrGtHUKr",
  "key19": "Gmg2WeoSNvd1MT8cWQ4RMZiVztEpPMEob9SyjrGrdNvAj2erAKs3PiTwiGsrvC5VckC2kAgZYcBKHxNqKSnbKrk",
  "key20": "56L9JAizrGtvcNKcFXDVaFWDpxXxxhtQwEbdwwTJ7ShTPJv8Ee9dXesNWM1xZRjYxX96LniQXzWSR5FzHSfPCSCt",
  "key21": "5W64k2wFK4EZutiyQDSpvFzuthAnnMHu86QivbhWLRhUeS3ECwjnMDy4etw2S3iyhxgK2YB7cPhivRjgJD7noHYm",
  "key22": "26sYwK2YZ8QWKD967x1fhZqv9wPDsKphi56Sv5FpBHHdUB7grqM4qUtZ54hDDT9KPp1t82gwNmrajXkfhY7hj5GY",
  "key23": "4sfpFKEzUjTfz5LCjBNLMTMGre6LPRCQaL9yzjsfmASxn58zgGqbM9nidCQeV5G6uDm3XabRqZgAzjzKfzbVjGyC",
  "key24": "4tywa5qxVQKzjNu5hmK2dfZ1J2vruvX53C6Hhv58sKosTeYmu9SeCGmEKWfcMYjnD3JPpW9Xm5oDsnuFYcWrBD7J",
  "key25": "4JpNsXVHHbQ7yKdGqnhXMGJMVhpWXxJ12e9NdJnH3wgH8TUuFgFxyRPKC869sa4ik3hqm4gj1sxh492Xtxx3RKvz",
  "key26": "GNm8pyyDQBcDWhcteuvxqBu2QrqG1RXXMWa6v1VYFzXEScHp7efR7h2FMirsYxnF5A7Mwyk17FMXjcehoBvx43m",
  "key27": "4Ba7BP9XQps7pXCJaTLiY6MsyBgRNPqwtuXyW2AwaJXDz4hYFQDeMDorHmkAbncfePnmdMmjRYkhSwLVtX5YgKJn",
  "key28": "5La69VA9dmxcuE82Ekr2KT5JtANeD6tkJiYNzFNyek4X41qdFQdG1XiRMRER3mEuEUK7HAdMESejXADJSMZCGhCi",
  "key29": "PmTJwfnZWeL8EN4Aac84fFi4ZWpL1ms497JNKwqjxaqUBNtikZpXsjEssFajLcrobb4qnheyMaVeKwNCNHGe7R2",
  "key30": "eXA2oo35wSsK2izk3uTx5EskjAVi8j3YeeCTacSfnHK4CGpkCiG4NP281C3x1mgXMu5Z18LDpLCyNpX1Dfoetq2",
  "key31": "51PGkSTG4Tx1g7S4R9rodvXcFheUxqn4jEdNudK3pZoAF4tjw7LZYdxJCCmPxb7498rAg8T5JXM1dLCxj7Rbnfw6",
  "key32": "3KExBE6SUnf5SEzSASZpkTdpLUgHPLEaBCnqxxHgjsm8yAdDMaE4tmN9CGCWyo56b3hZvLW8idusnxFy3wk5E2Ed",
  "key33": "2aW2rVtCEsVwm3J6HMb6nm39dx9483j114fY2pYzdbtayE1eppkYptUWnV1upGNixYxochtYjPRGg1fiGQuYcaiv",
  "key34": "49WxWZaBJK9n6BfH9SodR9bzNjaPADe6NArMQ6pgnDdR45KDBoV1ju51vnvkHmV58SHe1sFKdKTpizaDkfURP5Af",
  "key35": "3A5H3U51WNKACudf6rJV1wDPpuYSj4hubLcrCs1DJmNoSeDsSE1jFM8u63FxJ5sLVERxEf14p23TYBgQKnABAXnv",
  "key36": "5fnXsPK2jhmcAs3YzTzDbVFfbsbfhgP2sZiqWRsBg6Yn5FAmDucavQSJcrtDb2mtxS2sLf4tC64DrLL1VgxfQGcH",
  "key37": "3piSecwtD5W9F9co2TBhm5fENYaoXSwTjM1khyW7kTXvbN1yAAbwp3m4LnwhF1b7TidUnhB4muHb9Av9DKC7zdA5",
  "key38": "5V3vrt2Rmda1oie3Sz3As49hQy2twA9urMwqUk2m9xxEGjc4MQWuVbkE74YXPbXHKCvWXpcRvLuq5iUCGZANEEGi",
  "key39": "2cKazZKjY4mKDHKcvwdekNNtpvBS6hZMsCw2NpDP4JeGreQU2UuxN66Sy7SWgTToRX1BQyQTvUPJPTfMMGu8NHBG",
  "key40": "2G8cF6Mn5JXy3FTm3XWtAA5GDsc9xrAokgsH1r1UBeVazcTxF2dzZ7mN7NTidD3eEKhYwPK11jRcUxAAN88RhboQ",
  "key41": "4VCTKoJQGc4qkKD3uai1CdM2QRKZUKhMVtT7GTLYi2mBr2iTE7SNiWA8uX4QVoZhCFW5qPXdVZZYNspyRmGK5cjQ",
  "key42": "5xL8zkVHgF9s17t2uSYHMYioqXAPMpyHZZskUH3zZoVWzJj3tGGiy7NLY5A7wefgnshiuAn3oCUR4vPrZ3zBYnxQ",
  "key43": "2Xxmi2bXXttzkidS2PXjYdqFyDjfdJYNWJPfvwW6uTofLxSCaRrYQHjU6KqKm9iwRuhschqw6nmqCiKXiSgEtCim",
  "key44": "g2YmLiBcEaFnWDK2xjEHzEcPQb8ML2FwYxABmpVB94zmiq5brgNauw1MCGDb4Pb8rwSqJqvaAi59F4mGwbjL6ef",
  "key45": "3XQiSstepbyRLxa5piAb3GcaPUoDnvNDxm1obQWDZP4A4No9mVbwGZHhodxPjh5w3en9UGwAYQU82oKBaou76wwt",
  "key46": "2gEDGxv8V4Um61qEPrLC3bjDvJVyg6kmr9QyNDRTTxaB8AAw9nM6jW2s72npTasBUNB9CrxA9mq4Q2dRH2sHsxva",
  "key47": "3o6iGvNcHGbQy2MQ1EAqG6RHBM5NkutbyLBWVrk4MnAQUZ1ebrHJWqhhnwHRyfvNpjDG9EcjFyKgPpvnMPYJcAtf",
  "key48": "6gcJKrufKVy9Xb7qNtx9YMM95ni2awNQrzk2VSasWnwQh1czGn5rngboN3UG6G7Tke11p6Pa3rSW5LCjEU4n7Xw",
  "key49": "4tRFVAQt5ZDzPG7thvRu25cJhAe9dbSRipnug3Fhx3g48zUfCs77sxeH33LxjuRJtzoS1afEZiBw4ttHvRQ1UeQz"
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
