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
    "nxbdKhsRHNVkhVdAovpcbCbxRQbaMLbWEKp9PToYhXeCe3xzNE5zyP5RAUEFFYAd4x3MTGocgqTtUM9tUPtTdEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dusufYGKGFj27Yvxk6TCcdFcjPiTsFdDovEGjpr7pSErjG3s3eG7uGokH9G5cy2xNDuLppHQTXcCJum8cYe6w3V",
  "key1": "5S6B9zEwFTbihvSPzYTMEEwuMXXDUwn4WCrVVPWBeC3Fiy4nPJKf68ZMArF4h4YghcQqXv1GgkbqeSi3KyD6pxCq",
  "key2": "D5pa3WMABy7RC5BxzDgXbLroJE7SUKUyX7rKbkCCXfCarwwBNQpBgyTid51LYmAXKqprpmoZZgXRPmkHYnStBFM",
  "key3": "4B9hE2fbfsxyysRARNnokes6exSFTznxA5T8aoiqi1SPfQ3xQWnrAoAY7nCeWg8ED8yehdZesTDms5wwLF7aKiwG",
  "key4": "2CqHTi8jawHFwCxU2nQQn928pj34LiK7cHLF3Q9vxAMR6U1g41a6jANH3SiimoJ1WDoaNx85fikGewrmKx2RnHgf",
  "key5": "2kSBrfy272rWxNQjvE7iLP8sTJYpJ97et1xwCozFkKfS6RWqSZvZSK1zNZnd5Ax49FyZaq4sMwF3cAFXP8WLsAJD",
  "key6": "eXbkuemTrZfDSVhCU5ZUu24qfRZkzb6T1efbuSyFJHAJsSVzMKJTGZNJrSDhFxYWaFxzeBxGFjSNL7zVo6WRP4U",
  "key7": "4b3ekirT1Y8ayy2Ctt8ZF7zo8hR3qeWX7uwxU9Mv395hQvEuzvkkXcCV7Lc7AjxTuu4MhxdGdExD4k1A1zoxtyeg",
  "key8": "5J8gnC7swyJRDwXxxqpRryFR6w2bZABjVeHkaTCDPoQKXXVvEyw2Sd21nWgkwka8z88rg5WLRRhqrYbdJYbQtkbe",
  "key9": "4L2N6DR6yzU4j5aKWsMivPDQY79SRxKdaENqwuQt48bk63d7vLWx3RSnavj3mz5c626owrLXG4CvHHBKUhMLEE8a",
  "key10": "3RgCbkhykUfY9swrBonAxtdzaWayhGCNGZnKdycnuGnb6s3M4FDCSCp783z9A9whk1zH2mrFiZM7HV69CsbYRRZc",
  "key11": "khxqavfSoyRyJNMpQ5mS3ijNsWwPMsn359QboiXGMwDK1tRQqDhmAyAAQBnsM61mxpd9poQ8hvRRT23aS9tPWvD",
  "key12": "3VCWcgKtuTuSPLZBTbRg7gLLT8yN2hrdfCrqpTteDC2biKFSp86wsgQrSbzYHurmzU5zuFZV5A62YqPtsTHY4xFh",
  "key13": "2KbovjUT8ZwPrqBCpzvWnzt3wQSgEpuC7xJXp1Db7HnFLtZDC8UEWq4FR1jDJRTQ5fuuiLNmRkVYfWUfWfnZaRyh",
  "key14": "29gk4wJyHUD4kLuSaiPpbTP7habZKy2yGiQ1onkL5WQ64pdmbpSrbEY3VZccEtrMBiiS7G6g2BHQKsYLdTxadheT",
  "key15": "3foaAUwfKJX9Rojn4EPFYcp2bqSsUU9onR7v6yVBcNqgxY4GLWM6W49WSWp6La74D7zqTFt7pANT8R6m9pSzihtp",
  "key16": "uHBvnK2NpGHfLsaTNvMJEWK51q5Gxr4tssZbtAMEbvtWmB1VZqRPR7qpP93yEzMzJXKMgJveCXGsUizyfpGqZER",
  "key17": "5p9Fk6BDNfRc9gAXrf1C65dXmbVkvn4KK9dTyFKc9GnPBUzVXjZcs5coBQHmKCNdjEhuQv6wA6T5kR8cL2se7NCS",
  "key18": "55BM9DoA5C4WSbMeKzJoHAH7xPjT141UxVf6h6Ut6GJxF7WwGMRm6uTiM7QxEaP9GJk9QTCKo53zLJSdGXX1mwmq",
  "key19": "3R79G3FxSFfWx6Lsuh3YE62pdy6j88N6D7hkPtRj7QzmyFRSAmRgcfUKxjwJJXbFzeuEXP6ckTQ4qoQr9WjgBxnh",
  "key20": "4eNusJSF8zUqq17bvfmTPDZhoGtHHLNiQCG9eeTMos12CRygfsdjVGS6MtfHWR5L5ZvQpsnQKxN5aQG5PkN6mzxB",
  "key21": "3NghqmPvyN9x9iy4Mknnc9p2PyDw9M4g7Ziy2w2TcsRAERraFBKz8FpycwCYBKNTrZvSBNRncavv1RmY8JDvjD9E",
  "key22": "3KmtDeRz22kFtSVEUpKUXRneZ243uUUaeq16qY5i7ref1yj3SjSGAk11wFNRyrj9zDQSzwBMmmBLMgjpXrQ1XKA5",
  "key23": "2VxCfvTrMjyaxu32Sjf3KPZk8EHY4cbexTuJ1mKPShbEe9RPwkoPAzyBGkaasJMDLd5xUfcT8B7wt32RcErqnvWW",
  "key24": "3Fk7PAT73hr8nY97YvFwvgQYy8VwfwjSifwGNdamxchzJg9dBt549q8vzeHYUdwfcie4zu1a96QeF3pXyM6AoqMV",
  "key25": "N86spHGjgx8zUwM5otdJ1ywtz2ejLW4T6gPMPyB5PdG8WcYzGkUoPcg9hMwWe8QEi5wRdqi5rC1ZoXo3FLJpB6e",
  "key26": "2hH3vfaARqV9xtzJGbaLZWenu3UYAK83x75rnTaKQ987SJotm5o7MQPTEZs3ZiUdqTW1pyd8FQNGxWkDWTL4unEJ",
  "key27": "5n9EvtHodjuWNm7vP9PQwkW6ozF9ueSgyafkknoDuvrj9nzCSvQDfUaNWUgBToE3bXpMGYtuvxL6pf9vADpAenFA",
  "key28": "2eSjXwDGaUZK12HCpVRXVjJkqjSaS2YN88sUPK3NFjzDoV8Z4vyqGKZ2qGDhLS6WCKEmAmehpct7DdtBX4qxfQyS",
  "key29": "3fvL4swyvHtK5JL3bt6wJTNcBXrMHdf7QSwTZ2yqTbntPxnRugFLEaCFVXWiybMay9Kur4icmN8QKPUFQ52yHSAr",
  "key30": "WtKezQUHzg9VNyqxYEmN2BajNTLYbCj9wiNKHUXJodUZuEj4yGyZ4mWcdPq2BA7F2roSe4gwprFovVgHnPcsvzb",
  "key31": "5Uf4t8GtZdkUuyy2k72squ6U8i7PpEMWQXpjAw7f2YU6ucdJspkCSPzqpiKQNv17EhFDcu7LVEBQBuRhcd7FYXef",
  "key32": "5dWu1cXQvxvgDnkdT66Yj6mAmLKNbygJSaLcmhsxt1wSz9pJPYFdzPRKXCBajtwjPdfWGJc3EKZLNRJ9K125J6QQ",
  "key33": "3wNDy8qnyPGWQ6sWY5rndikfDKBZAxYmTVLMh2n1xjdpDz2Ktry7CsiZL1PrguW65oqQMfrdXvhJWTQB4raCM92M",
  "key34": "3KxH3dea6nvgCj6ATtEAYGpbHxYdPPC6tc8a9LtsHydrdwm3H7JfYLZfv1fmN2qfGWCgKGVaftopPCTaWbM29RPQ",
  "key35": "52zuJwWp2MgV9vz4RRof6ansgHWGMc5qhSXjebTXsbHDxQNA9epVBEmw9dYc9vgRBRSyLednXMzhubypxtFydaTK",
  "key36": "rG8huPUAjG174sY1R3tsMpCJ4hitGdn1dyPm66AYQtbfMzWoaJALvWLAbBGYJQWu7z72sEkFivnNZJ4HM7CNnCM",
  "key37": "64tPhxsXnff6sq8D2nbPQd82GYmE219HS24kRHPjLQQqx6eenLNyRYX8A2uHxjEG4rjG6gmDkpfDPS5qKsNJsyTd",
  "key38": "39wUEornJ7JowATzzuyw3XCGJk5VzNxwRzC5CxiWv7kfxrG2vdtByUh8q3dowdS5fw7pLjRsz4TtvLiHrC3J2ue1"
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
