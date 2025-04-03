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
    "2FDgW3GGxDwbzAPkaSRRYBG9rZ4UoebG5Z1j5ZyPSURMfk2dwdeLgkbqDdESJjnu62WuAf9skFDpMkgEaHzEMvoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntVL2Lau2bqhXRPE2C5HgpnZZXdLMNcqacCmRpTquqM6SZ5XWYumUmbVAo6FvL6aaZAKzFZHXb98ToY84CrzGcb",
  "key1": "2quxDwayoum8HGXBwDJRD5AYZjbZfy5yjYsR9G1yPz468pMTHa9x7paxVnZwmpcMETef3ZAddhxW155L91tYv3sB",
  "key2": "nu5ETJ85MKBKfNQE2i6aGymAbhKV2PrxVdn7HiUgXHHaxVNUkAxPrnF2pNQRBMDdKtQWZ226ctonKSWBVZKANKD",
  "key3": "324yvBVhnXA3HXpCSVCsRiNHppkJTdV9XFonSyWoBNeRN8zK92WTcDVxzfgHqCH4PgiAcmyBrFref6T9MQTHC6rL",
  "key4": "3ExgnM6dHy8ffKP67qtvEGBB8YWb6JQQiFrYGBBX3F9PMp7XkiS1Y8QJmYzgn3d4dAdYVrhnHcr3V2bgdxjdUmhL",
  "key5": "63fa5GJDFqReFrVQety4DgyEpUPgVysCmL1sYnzikkUnV5obqUqjUDFsJQrEEaryGvjFbuDjwcA1S3kUGZiVehB1",
  "key6": "kxbdTtp1FEBpx42FHrWtbHrvg3wMrvX4wYqWxLjDHsCnDLBQ3GxF54e11CCaEf2KPMyR4un9eFm9rhhQCVt2Myr",
  "key7": "2ShoConuBvuYmaF3LPrGp9pJ2mZKKxRuyaRX5pvBM5ZwfNAQ4WyT5YN4mNpeJUXfcEN8mPcgc5FKHw6BXK2iHGvX",
  "key8": "2Ut1xf73GQfGf2sbGzEPqRJdLzFfgp2PSriKdZ5YD6NuB2s1NyLy5y5TvRyLWrjafS5zX9A5CwSWp4BpFu1Pw1cR",
  "key9": "X5HQgqmKXiMUvVqg4Sx7o2NHC6Mj1B2uyEW4quuAySs6ePGXgmXaE1b4zBTusWkjXifBoVL9dYX4uRKBC2pcZBF",
  "key10": "3cRk8tMSQiamu9Qv4x8cRJNdvVPbN5VotXHzfGgadzgcRMEfZBqQ29c5rVQ5eexcGQz1fuzJtGddoKQjFKmHWw61",
  "key11": "3BA51jFk4eyjEszYgVwnMbs62RMhboRoY5nHQouLAJPXUTHErb9uohEkf8536GuXUVxAb9C5xhG6pMR5WFEgKPkt",
  "key12": "4HT77LvqMdAximNo3b1JsHEBM16Jd5xCLLfQgL4HgM3hfuF9M4MEXcwx5MrG8MEFLRY5HNT9G3MnBrczovxWPVVr",
  "key13": "3BMjUcn5vbCiLf26hCyuy2PaDewAYnzUVF23m8gvk7E3Vr9eEXiKpx9Hs5yAmRSWaVFW9ySRqjLkecg6rBvwYWiV",
  "key14": "Y7a4kNeycvUZ6tG9aPNYiYuNS2FeJpHEqdosfbz1p3Yb7guSk9P7udzThhR2gENWL8UBSBMuYUn1QfhAAjCth6f",
  "key15": "5WXH9JnK88uxZuz2sDmi5em23Sm5HqsHhD874spyys6qPcb2wbrtgcwcyd9A2ocxZZkvPisLvTfumxGThKeceNoJ",
  "key16": "2jUW19VGWPrs3ZcqgdGGx2GVMA6NVHjGBTdzsqQxTLP1R9jxD1fCaEVsqG9ySGNkBN4BYrcfqmdxsAMuYGATqqjF",
  "key17": "3nWM6fbW5b183fwucu3cegjE8Zeyt5vJi6Y8gwyUsRGbSt7CgpphZqJUUFFv2sG95PEfsr57AA5TEmrCNdGtsxem",
  "key18": "2ceHJ6Wz41WoXcE9VNu95cRB2w5WYGagbm2T1utAVhKaRijRkjFnt7eQaxV355er3P3zynW9bQ79foyFswaoeXje",
  "key19": "24HEfNgJo7STies8YhWP71ZSGjE8vixu7UoirkfwiQNYqY9xEJ7NsNYzFc5xWNnEpFKJgag5HQ3KMnV15C5d44R9",
  "key20": "5Xndj5ksTJbgqaJqeg7i8X9YAvvAyUFLcha9dCX1FghgdZxx3BsHubinBjG4jMiGMXzV7qWf9h1o6n2TfF6bfW74",
  "key21": "3QNbJGrRooaRg2oLxYKRpkCRZi9FNGi6VVLMFTNh74WRP5MmAU2We6q8FNqggot9bpoLjU9ogvzPDC7eiZrLwAbf",
  "key22": "5bV9fpgN3BQnQWEa3eJw9FsRZadPUKia83ZMMyULHDpKGZCos2XnfnqiMxr3WuwPcEFmkPQrxnpjWVgNCdcHkQBB",
  "key23": "5PnXczMdKTNM5hXyCuRwqG318sYhPDsgZTFVcrFNBrNGwgPi7qc5HMBBDgSzf66sc4MkygPHUbCgqZu2HTJEs6Hv",
  "key24": "3fxm4s6tkCvZC9MQw95x6RhBTvMZ5DMvGdwi8ZPgxufyJWmaajXpqk6Nro4ZssfTjvETLjQ1KQpxmzdfb8qhGbua",
  "key25": "wZ3oT6BcDySXXjEbEQB9UzDogB3V6ZqhcXBJodD1RDfbkCj8vRBddsiuE6Kdsp6y3tovAhbwuGaQ3AB2tvUZdUT",
  "key26": "TzmYjynFTRN2SxJQXyFNHoNCL2KP5U7nbyWiHqpjaeaT8igJn6qFyDbwpnLjAZBoAocTmFNrb8JEtczPqCzY2Um",
  "key27": "63be1AmkoysRCpdafskL1s8s1g2crnyMLwyiy8Eg4KQAazmTZb1bnYV3JE1i5Unu6K8jme3BuSVGDPRej4uJ7S3F",
  "key28": "vUCUZ8KscMfPu6QxA6CqZuuXsAp3jXaHFdJ7LxDQJh3S1mvPkXLqZH7uFMztUKc7GKrHV2hJnY8FqJxxjLMCgaH",
  "key29": "2jc7NQteFc8yWXrvL8Bgo1wg5Y2bjEepF6rvK4QBrhvG4DL91V6LSHMqUAcS3DiZVTecaFqbfToW4Qt71gYCu6pX",
  "key30": "3FQ4oDnPayS1SvcuKKE6NSV547J8PX1c4tQEjqszV5uBsC5fxbYaow8Y1GKzx8SZJitaV84scKcSoVgVgk7NEWgC",
  "key31": "2ftLamLyQ9H4E58i8FxTNaiLTQUb3tSqnHri5WfiU7LfHeJtXAG8NmkdB9VvaakNphcFFHvvYovo42CqtnFTaq4W",
  "key32": "4tbu7Xm2xE8tRkK6pTAKzZgzSKiuY7Ptyvx1kUmNbvQWaWKYXYm8wiHHJtF4EXV84RNdfh7oyqvK7HHUMkSFXfog",
  "key33": "328YosLSkbxSzoMAUW8anTVu6P8F9xBvTSkpRq2f8mZoayMhLT23bdPHv18jwDJVG1hs5Tr4WrXpPnXD9zW6tk3w",
  "key34": "x5g8Jipf6Y5ZZGuLQPEjUAiLN9ouktCvu8u5Pg8K9Q82TEhm8nw1xQafMsxNHh6YZR6wEAmwjZLAH25ALj2pjTD",
  "key35": "5cXAf78e3JsbgnnsRNqDcEi4pKXeGAhjX21ZB4bznTWGTYAfVwDACfSHPf4rwZTvLsohuyBKXpE5xRSRRTxzXqkw",
  "key36": "66a6Wh5xqL7oKxrq6c7t3AhtTsEyGbKvrZn8qexET8KomiiwhCGCycFjJHZb8uHM4JRxDs8ABcVtK95VtS7Zm5se",
  "key37": "4bg1oiy2CfnQFYcdMTGrtTmZeh1XzGzE5tRfNwusekPJYXyn8dEWupKzmdtvBhiQeoKc5fh7Wv4PJbM4mZAc5o9e",
  "key38": "3Xk3eRc51M8RRpTPaiknjzdWeZagqFsyJaX8fjeqhiby5oxNmsa7noHbrr2ANbLr7fcrnSCcCnrheiwycEQL9BD",
  "key39": "4RAfDWV6S52jcRmGYgDan3bPBxfTkzTuwyF6hkKhE4wkPsakUSK4zreZKbqLLDFCUzd5QBBiRdqBB5iwDvdB5pZJ",
  "key40": "5J5PKFKpbwbMMCXN6Wb19zi8C7eaw9XBh5h4RxjXAVn87wAPVpFy8vZrn8mv8RfLJuYPjUJoq3SJyJNeU7cZ9H6q",
  "key41": "647KYrUPMUuLZ3HjNW75fJ6i81nFVbWkXv4xYdDcGbkZmWxaUzXn6K5bsJLJUm8imd2YKvCxqfhfHS1zUyaAFY9w",
  "key42": "2AMeTkALw5dBCqZwa8QWacB6sTcxJgKKwimPwWJc6Vz9gvynk4nvwYuTgK8fH69kU4yG52wtgNYkHa7G9hQcbfXE",
  "key43": "4YPyJb5trwZigWo8oJZ8yQ4zej1Xd9qvHbtS5q1VZ8rygE21GERJmiDmVURtg31AvmAEBjaqWMhrTd7LWRZ8rpRG",
  "key44": "3KJKvbsBnLcKQ1ueh3CsEEVSGmPyQ7FVMYxUiBChsgAU69GdNjyYjMQQ8hZVyEQr34tWeYCGDZo25EBkA8S6y7Sc"
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
