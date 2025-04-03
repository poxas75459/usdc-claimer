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
    "614Tia3WLMwU5WiffA5tYb1pRtHuRo8XPx6autmNJDfRaCcS7Yw2kJsjF1sjVkPFMRTiVU6C5EMv2dseaT3WaukF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAZRGvbk9dEMzsfh6Q9g1BgTjHd9NB2d53QC5JLoiojiW8wC1VCwSo3Qtu8gVUcLrGHUdLRstozDctwo5mQiGgF",
  "key1": "4pGdRL4qHSAUhfNevavDPu24PeZpmcoovaL5WNSUpsPK1iSEJneNxEU2yZonHNGHkR8WRHe19gWwSetJeBMoobdc",
  "key2": "419rD9DXXeVfcYeo4LPJmDJCHdCtWfKRJyKqDha2EuDx928dQVQJpJjN9CWwq2yTToPmaqEaJzNnJdHUZKiSYcnX",
  "key3": "3XnsDbsm5pczbDmRnUu2XgaF65LVHf3WShdFasnWPVYminuPfBdKsvYP8dFp36GqW9fTNQNDQChMAk6kTRcKtypN",
  "key4": "2hyQta7PEHT387kS2Yb1NLR5in4oK7ayJS7MJtVkJVL4gdV9MQ9pbxfkXGS9FhiwcyC4SWiGtL5sBKJVteMgBY3W",
  "key5": "gr58AZUrhuLE6QKPoQijrZJJHFvUZWUq4LVUqZ7ggNUaLwr5ibQTxXgBTkf2J8xyWR2ZMPnwQx75QCBryymA3fA",
  "key6": "59JZWP1LgjGFDNLZdvrKTrPAtt24SALFiHUjG913KaP2P9r3hYUkTWMW9ndDGrrtvpYQwDhDndq8PrkSCcVqFZQb",
  "key7": "2uDasiWJqGRDF3Bu8Ek4sii3RvLbbHeebZSAzyJzifbhN7tVnnNQ1tkm6GzfVs2RK7dds5NpSZD41yGqcxTgG16R",
  "key8": "4BX1XDCVceCxv2jVvbtDzS5eYCpWNkAPekAuxfUpTekaPPs4QES6mEzNwkvREJzTNxanYXNFGFsjLtMQmtTZ3iix",
  "key9": "3G7wXHc16L47KovvW8jYL89As97S2Fj332mGK6HndaHn8ymchN5TaPM5jq3pCwiQX1u34e3MbzAei2k8fmCGQxfC",
  "key10": "5bM1bArvKbD7Rv2K1ewTXwK2nWbu5r4EyxfS6xXeYsoqwyYL55PmR9KiSmDkedmJALq6qWJ63ZCKakfrwawWo7JW",
  "key11": "TpCurwBp9uw1w6XjwfLY4w5zhECrn7WBqna7F1EkTZF34aXCYm3DWJ6qraDfftVsXn7WTkyxMCtciouMwQkUYeK",
  "key12": "2kZGgt2bvMoFNnqkhURDrtQZtjYwndRzMe84v7WBaSkhJ6Fp9UrBgKoovTYPcKt3e88vcQG58nakLXhKqqpnApM5",
  "key13": "2Yg8k4gN1YsLpqHBqyjzpw5yUzDW3dtcPPh3ZrJjE5VBFwZYq5UmCDPX5iko8PgrRbU9Urcu5YhfKpXtEeJshNNY",
  "key14": "3NgRfvpZ3e8VCZZYvPcmQtLeyc8gPmCEo923RrBPeuLshiwotV84ww2NbrkQ4iPsCDgWwEWTTJPsnciTDE8zgNE",
  "key15": "2CZG6nx2UqXXWi2ybMr2yqVXUw7CUcb9wNWMxFMRT37Z1QHtCiXRWGUtjJD9g7i82tH6TSmGoqmgw3F9dc5xPgtk",
  "key16": "2UuCoSa6w7istK6rtnPemJiLQLEVQXthNU9MQVhjjN2FThuzjiu914YsRPVV1nwTRjqVxcZxMnC2RDwRoXgwTXqa",
  "key17": "3TZZVygnvuHXCG5h9A7pRor1h2QbYdiLJ6v5WjZkdJeWDz6oFumUX89D3NRKVuEgKWpQE6vrn3CKXqyPYLnYZw68",
  "key18": "5Dp2hsnCCDfhxpqmiDXetm9m6WQ5fT8MAU8X5MkLJXzsBMuGgiWxTR6CWvMx2gg4vpUq7jbFv5Puy3eHbRKJ3iV5",
  "key19": "2f5qGJyStz6BrbYVndiiTKtorDgVAyWzcfdo1XqoXKE8hmHZSnt8Khdyz2aBhZtNhnLW8to7dCcAY2hW7kGABJv3",
  "key20": "2gxumTBs6PJUrPUgsDiVHtGPLKWbpitZhBbroCs5mUQowWbe1YvLUJmUsEQi45y7XBw4U4ufcdQrNv3239ZPJTzR",
  "key21": "3yF3qxbYNRuaFVLfssYK98Xriwd2fbUkYXN1t8tYydUaFcenfQivNhfkjcPm9NEqj6V8Eovte4SZQWxPXa2WBkh3",
  "key22": "3Ni76NUshQaAQ8oYnAwonSwReCXyu3sGNznz88U5dUNeeC8dGTjvScPgrRTEYah8wZskY6FoVV5MaomvQQdjJ52g",
  "key23": "2uqAH15h5P6riyayYsVEgXjZZNLgYG7WVMYXKHJXYRRVCbXWw2sUZXQQ9U4oe4RGwKJrktVUqyZbZZvN2JQvcuac",
  "key24": "5EtzmNCkyhcNXdPVp4wfS3mjd88QCJ9oXJwD3QFHQmqRiQipTT1mwkB1gcmwcCHxUNh7dg77bfzdNa2a3DLrfxpm",
  "key25": "wv18aRfqjKkQLbhZpr4YMFqKbav22GQhTKtQDVfSQarb7Xi3dqGVjZnPunT8DUi9Xo9fSxM6RS6ATdaajgwdZWX",
  "key26": "5K6ZPTypnVS2x8VbXyHQHdgLrnHuTzCPuxUHmKLopQWBn88D8aCEYnoDF67Mho7TZNhKcbBLMZj4zc5Uu3A8TBA7",
  "key27": "4Ye13bvLMehZvTX49Mj6hLFZS2zLzYvgcKvAzTXKDfmqr8jJ9B6fpkcQrGvH7T2TpQe4juruLFv3mRfjQSfgN93e",
  "key28": "3rgbMoWSJHscF4EMBDUYE7NygEosxPhmo81fthRNztr4jQcofhfb4jCsJP5LP839U3wyuR5c3ju27UBm1Yz8eSVx",
  "key29": "5RLmYp3gY5dPFSCxMemXVw9qafN63MrBoSu9BsGaZdis38by6Ri5AmtyDYbeoqQMw4bCbuBZfMhfnTd3XxPSQ2Rv",
  "key30": "67KfwH5995XpsmqgscZkf1niCEjqQFkJrBcqtxoqRN8qqDnqJKTktf7zNm5zfv8RGbvKyLZ14z3bVmpcmtPgDY9K",
  "key31": "5Ee5inDjZ6uwuJXsHax94NxYqGcbgsDGmsRS92vXkbToQok4fMj27AiCWi6sFSk9EamvsmzmYFa1PF9bpTMY1Vma",
  "key32": "2tpCQmrU5RcDnzbYVBn43em7Q7HHQRJpWh39r4naVDWfUxfTRjHUWJMrUERmWEaD1RAE3cu58mtgEDqcNL65Ra9W",
  "key33": "4AqA2razZKzfJCT5DyT6oTepHbDoVngQnGndk5P7WGcmK5U233L2gCC1Fdntgdo7nKTJP3qW5dcYthoZpqikjjiz",
  "key34": "4hYqCRPt7JjA5p3ZRa6gH2GphioeeVoa7J5CosxcMK2rDgV1jjR358SQtqMKgQdE33TTe5NfWSC6fhc2GSq3JTUW",
  "key35": "4LVHu4jknDNVbbFQY1k6MdEPF13mT1TdnKnrufABMBgpV6Vh2bbfTA4baMqEef9igztmUapf3KRsvzvEwKD2Fre3",
  "key36": "4CBSqtDMvc9C5TawJNaJTFEuU9GsuNnBZwQwDSAdzUpgrXW8tnWm3HpRBrcF1zfqyHqESYBd6VSdaPr8Df83LCg4",
  "key37": "31CyBddgvsq3AEEcwmYnqJBgPw4bHxg9yqWSqvGd2AtcVWBvrx5pH4H4Km23UMsqNipTJW2ciwJgoiF7iTSv4ABf",
  "key38": "31SEEffJZjiz2mZ2wt3RWgDo8pCUqYJBdEemSd3fk7MB55KPm5FPDE3YbSkLWH37QvUWEe2Qg9qmBVuvr936JZYU",
  "key39": "2e8aUFbvZE3SBGKnfMkZKqZVJzhcw2qcoerEtc23Na1zDC7Fry8dWFkVXovx7UUAXn7w6SQKEGMtCWDiv3DMMDGz",
  "key40": "5t6qEY8y3U3bMi6NgfCtnsVi1VuaQ25a8NYNZ4Z4qP3Uze8RMngTHh3brMnKHYZg8jU3viaZ9Xbma1ugG8WHt9nX",
  "key41": "63eKR2gNApoQj7bAPTLozMCJfcNamGgVtpCYjVUok1XTSoQVYX776zFMTonSuwZppnraH3GWpJFGsqRry5perL2y"
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
