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
    "NGtrBCmqbF2LMuo7JSus8eD62qci929K3TtoZRVfEe74zVZAkDvZvSSDvtA2TWeoMGRdvKs5JVBd1rcVxCGq7jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4os1txtG2FqMvo9Wk1jUUPRWGma9Wez28fsbL2RMoTzkpbiV5w8xNN5cePBRhykEoBmaS7K4C4q4HdVZUB5rSBqx",
  "key1": "DTwXRJKS5vh7SWaV5v4BnrydfFAnN7gDUsRMu1XWK7HkC2oGpH64ES96dwhMehcr7bxQocHFvzrwxtanBoxACWa",
  "key2": "3GC3qEtyVYGvMPLeRfeUMBobfhQyLTrPqcv6Xqq3sK9NV7uttkk9QuqDc2npoPSrh6Z3QFdhgPV7WswQPPkjYb95",
  "key3": "27pEJbLm12x4GWctF7QzUwWKyq6mysseLfHYFS8YMtVf8PbyYLWUkSUDg79MeDpRxxy9ZvJxRK2TyUBgNcuoZUrC",
  "key4": "3ewZpcwU3pnFVQnBpMWHQc23Q2TaErwDfY2mr3oFj5FqDe3CPmnpNrtyWgXpeC9UfKf7s2SfkzPkQkWqHysyHfKB",
  "key5": "64TpGtvtbgh1vvg1nMxB4n2FxeMVSFwwMWQdw9ghtXwhxNnPxqWkzzCuuYcaQGZsPjgSyJBGJnE9zGveRfY96CWr",
  "key6": "3SDu4Mf8JBgZMepQ9irEjXEm7m6QRnNRH1U6pkDtB8jc6HR16ux85U7i9T5fs6gVjvUMeijXFMztAdGjALtG9FMx",
  "key7": "4t9Bcyp2DuR2jcemskQnY1apPTwpWnWzPKxLQdhkeqA5guGxeLomBEBgtaTApwvFuan62Pc9GaZ5BsfrKnPbCxXM",
  "key8": "4EhvD4vkAswDFMndMjutyVffiFZAR5zXXeCFnBYZpvZDhUZ5tACLvBu3So1nStyTiMwh4937a9JA83eBzc2HhGeQ",
  "key9": "295GYYv8JDKpckiiW8BbR36qTghU4Y9uLZ1qRkZj3Q6kCEsopKgdKTa1c7FPMEBiYysboyzzXLbBMmziiv45Y4ii",
  "key10": "5vwXJWvSXM7fQTWin273sut1Yt57J5AH8Qds3UkMsS53q1igug6mUborfX2tuPfhwPmUDQuCW5y2quBDq8RFP8HE",
  "key11": "4kyfXiDdcYRQVz7HsH3pRbAeET1r3sYLcRyLUAChBYgrkAbcFGgPXqd3BzwCpJktLmpUtj5o5WyGjsjQfTGi9e9S",
  "key12": "46BsG6jiXUfkGYXRv9L8dQGGEroCURsDoZaTwouNgQYEjYvasfgLsB9Kf4o8tcS5nqyG32KLPTcot1jpWVkmkpPG",
  "key13": "aRAeyBG7sTHZi1u8yHhhGVApYHyw8KXdVkUrv8PpKRqCr5LJ1K7RVp72WPf482Spt4tpyLdE3HU31r9rZZT9F9G",
  "key14": "2wWnQ6MHQcnwzaFnuKvkWshfAcCYJnSfHEEueA9Be3DVR7X8v3QDmoaf2HTMbsdyeq3XJKFmy2YGvPFwLSgEvK6V",
  "key15": "3U1zPdALCM4qq4RgHLE7Nq817YRs2cTzHMc76USTNdbA9vEtFarGKQMxS7iwhbseWqG4n5JqTTkgp5DGsk4JDqz7",
  "key16": "5xs63KX2C1avg3dKCyKCdfjMzKVv23tySyEYAHHyZJxi2ojkHPQKre2Kxp9j33C7uaNVEmfka9aLLrcgbPMBbJNR",
  "key17": "4NgwMymE7Ci3JZSQkzBJGEMycHSskQaGP72kNvHwGPwMjNR5q2CATzgq2aE7KAVCXgppoYx6ksXvtiRtGiGVHowg",
  "key18": "4wuCLBcZX3fdQhPdYKbS3LX7L9WRRV5JCqXT2VvxN789zMBCzoHc6hGLCf2XcDEMq7hdFfQ3J8LzDf8BxEQUebY8",
  "key19": "3S1tn1oWntvZZFVBzC91AR68zJT6uRGq7cPtMRt8kNdCDy2xZHAN5Ek1TKuHQNYta3SydQCQ3geY2FsEt12tZZvJ",
  "key20": "4XNxRYXRY3fvHkS5DerVZK3woBw1njWg9vdYnWwZTfQZ9JW2nQMoZ8whbRiuUthjsk3aYaAKkLegMvJhFiBr4Bmt",
  "key21": "fkChtMo2DVuKpCpFvzHykanaaZBFBZa6UDEJKw6gMnjm39ZPLJ6KtUpboQrFhuxQNMRwGQxy4ZqJ33pp8iQkp1g",
  "key22": "4fV1NXgXvLaQcqtZe9YUDozZxR4Ncg9wwG8bimtTU9ZSufDVbW3RZ2Bpjw3Cj4hunFYn5b3FspevegnZqXPR42gM",
  "key23": "1qb8BHz6Zx4qqDUdGQpibydLjD7HbWXaYLXKwj29yyTCb27EoS5KdiyrkDqrDgeVqR61tRdRtv54LueKVPJpkPt",
  "key24": "5rFQDyuZWxfNiAcxZ2ioJNcFR1eC3gkQ5fCqe8BR3RE6QkU6CtFsyu6AVpvs1fnvTek36eQNMFqU9ik65hjL7etC",
  "key25": "VX5ZcKybk8MJv3f4UJdW3CFazGbo6TtRTincdNXUVyjYWwyei8rwoNGBJPgt6XToJorZU4381DZ2YoPUoBht7fZ",
  "key26": "27t8hdjtx5LSZmEmY727ACNYHwrWwYGs5AHdb4aaqiDYnQBC8rMMqaf6PzmajByAaVqbafRkFQKWkZRiga7nU9of",
  "key27": "4BnED3tt9XACxjak3YiqkKXQvqhUerEpV44nWxTKaa34976CPkBwL4EY3iBPGKpApENqPR8AWa1LnK3v5doaBx4g",
  "key28": "599edxMD2wbGWF4M3nPm7fbgprD4XohMkdbhfmUxTgbiWCdgreUi9zKX5A2vWExTmAyG4s4GV1ZE5k8HWmT88YFK",
  "key29": "5mn3Sdb7PovPK6szksEgphpp7epbSrzB62R9vTTG6gGP4wvYdJsJkRJ3QxZHd8LDAM21qs1ea6AjJnX5wChvnvKE",
  "key30": "3UudqMUrsEoqaYAq49E6gMiuJQTuc1wMRkX4q46aBpFYNou1FD6QLPN2m1zr7tAKNTaCeYJi4Brhf69c9CgFRfXe",
  "key31": "56LWQZdeGTvLmeekV7HgVkumnMPBuzdKf6a12CWMYGV59rytM3A9YLgUcNbE8kDLRBCEnkqfu3zhYbPvcGPFx3VG",
  "key32": "5U41741jPv93vK8hKuCj6eithVBi7ddfGKVfDoUyP9fZd2ipxDn6dAoeypn5jBsw7RhAvEHj6khtra4xV6VCEBMU",
  "key33": "32JoGzFGXk3Q6CZ2nPX7eZvAJ1NgYY4RwGsZTQRT8toH4oqABxQUTrb6eCUNznDeknKAv8aa8uSrScFFYUo5ioSx",
  "key34": "3KAnmFGzmaErfRWqBycNWirdqeK2fXirN9v36exBaYpM6u9oVtYwDo7sdUtXwR2Ky6uXARGRKZsfJ8tBTHudtMMi",
  "key35": "J4ALMzka4sqH2Q9hDhg8E5WirqHrgnb8wSyCdoPPqX38SWTfLy9ncTXFye6Hw5eP2wZiyT26Jh488q6FJVm4NaG",
  "key36": "63TgHDK7pe88224LwysnazdkFEZSwC3CaKf5BKyeR5h5TPH8bH7yRmmMbZ26syC8v6fFr9TLGEpX4CJsaR4rHE8Y",
  "key37": "51VKBYBHUrmKHJzeKBD1hpLaNXHxfLfXthX7SrCxd3ukiso3C3iX2rk1aAUCtUHxZ79GxNR4hv2ZzjwzK8Yj6wVx",
  "key38": "3QxR9RMvpfLSvDdCCoXmqi67UYiSfma1Z7AYZugrVuDjDZg4BZtR9MKvXWCJdRZjE38WqwoWN2LeaK9ASPw5vvB8",
  "key39": "2d3QqoG8mG1ZjQP3epkZJ9JiJg9RjCRgwfu1pvxjurRkZ8MCMu8MWBksXH2hRKxVp6RntXambUKA8UHSveuhN7fu",
  "key40": "3CViBfUzDyfaHhi2edpyBuEo4dGSimB8unJffn5NJhJAPC39oauPL41CZ1uwLw5JngFRMso1jNyddC6T1CEQvhNZ",
  "key41": "4EQmrJ2xEjy9UigbSYBor5vhqaqJ5jtRS4JDM9BuJLY1Yy9e7ZchUYrw3dUnfaX1xJ7sf2344D3HVMsmeByvyWE6"
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
