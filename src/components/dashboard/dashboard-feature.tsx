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
    "5qLspL1Q3bd2sGaNCDkAtCUcvx12mheLb1AAiAaAVtMFCX3WGRSv1a4H3zP1ajhfo529kHT5hs9FxsK5rG9SGNdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzbvCHRUYrNcS6mDEnqjnxG4U1bZpoCS6mSu7CJ3WcTidHZqPjz2HtNAoaCe3aFBJrHaFoEhR1oRcLQ39qNAwKb",
  "key1": "546DoKLvtRVFopwmtJa8oD4B7RNdZ8GGhERLvexJTZrHSFcGU14XDp6zpGRDFxhsCjA4xkjzzkJVbAZ2xAKi3bgY",
  "key2": "3GPiturMdYAM2eqN5GFm7oKg6Y8anttTwSxE1BZFMW2reFuC8SnpvwjcLMmowSjzPLZZ49pAzb268Qb8yQXjTdge",
  "key3": "5YEJAcnVBQTVXrXhrhyUTJvkzGdcR1fxFDy3EUfKPEKX3ns2zAh8YQFc75SKYUB7F1KvpzTSN7Pi5FEfih9gdRYY",
  "key4": "229QNePWFwhKcv56tL2A1DiPiJRW8asarjhzSU7QkEVG966kHtFezqBzzvGJHyUFqXvvwNCQbWyEAZE7dy4XwTW5",
  "key5": "3zKpFGxd97aaDVMiyiCsTHCoFHoc7ZtXBEmHmynGdtSgbCnRnab9VZowuE4ptVVKix3e9itV9Qsy8gPiQMMPxH6Y",
  "key6": "Ns9UvGWi9JAdcpX9CcH11PaQ6RMCZmk32bPMgTKL4fiWN4XYxEB3e8nEKLDpXAckbBacVnaMQZ7XxWxVgG1XJJ6",
  "key7": "2CV44qcKchboAdqXi8RZPQTAcyjn87WSGBcAnyJBSPshmUqjkauZHQ3ryfxDNuxysnkB4BudVEtU3Yxjy8YPhvL9",
  "key8": "33yvmJgtDZ8gHT9roonKXYy9WiVgqRkExFMyr8EpQebsqRsFxLrHR5Wrr7cu8mCmTTpKCa9KYtK7AcKSFBmtyxJn",
  "key9": "57W9HyeXPi7g82dRYdb64yeifYELQeNNfZv9DtXaBojnxKqpU3cYmRWi891kb2jUPZXGH2uLcRm7Nt3fS2XVJhL9",
  "key10": "36a7ua9ji2z4tWZ9aApF2c5gXwfQMYCnXC6oqupFGBf5Zngvmg9FFWPDo1Beuhawy4dKvyMgPVSiNB4KdTCGYS15",
  "key11": "4zNerZEqnZm9NktcFiNqvvtkGSHxBLPd4ukTGJZDKUrwTQ798K2mbjxAE7YJdG12s2sSKTE9TANbRSqV1imqsPso",
  "key12": "xoTgzKJ3EM1veVccZkseJy43Lt5awgm1N5eiCCwbU9kt54xUeiodXqdzv8q1x6jFASk5C3y5rtwhZQbota5dqAz",
  "key13": "2CHzeN7jhk1GwuseiF91mGknZKwET8uUKnqkiM3ueTV73PK3o3TUxXugj5kHzsJsUH8zVTqnvnhKdve1xz8kf5xC",
  "key14": "5MZz7JEmduWCeJWtL3anCUpmtFVKgRQCXSon4gyWSbpDfmmaH1TEd3Xm1vRYQMfwQoJEDYYPNbiD6AVQzdw2ChX2",
  "key15": "34a6HacmWXFYyDCTESr7QrAxrruYLKSnAk3QUGC84efaFjrsF5pdZq4qnUM4s5KVPve1SgKZayUmm6FrBTtxGggt",
  "key16": "3Ei1oyAgetk7PzpBbsk4xZFAMRjxEiJizXAdDYzQkWicHcbhWra2YtamAmwifAyReiADiFzgEkcWxe7ESSCmdYP6",
  "key17": "3zx5E3SmSjSBKkdJW9gutojHdieVJEZSukkbe8gxJhQREF9aV1mL4aNGEdzmXuThRy8JkfMhEgoJL9SKWKUukAQC",
  "key18": "4RXzmvK53WGR589y9UHkDke2qgpKdS6HiMXRjxB44vUMbJFdC9kTqq4zdzui77Qi6kcZb4E6trtKCVxwKcUXaKYs",
  "key19": "2StNDBkfBeMEHrx5J2jpaiRhu6XgkCsVHv77BqQReGkhRFDZHYgbiULQBq7vvwNUzJbW9nyS1MzoaPyznTFLXnBr",
  "key20": "2ho5mModoTJRAdUVvrgv1aGuB1F2iTgwwGTwCPC7WgaFSJnFkP8Gc9NLzamKeGmuL1X3C8UzU2erJaKNqGqKBk17",
  "key21": "4mZYt9Tr5V6E1ngt8x25oJUaMDLjbxfYYg1bgEcbJPa6o1q7WKGpWb4o6S3UvzS1KnAgNDsa71YK8qZLsjrmbDw8",
  "key22": "Zbm2Fqh7bbPPhbzzgtoSCecop6VeWcRs4ixj1cimZ2fj25g1KmmBeK3xjJcJfgRgQce3WVRmKSzDPYercfSr9G9",
  "key23": "3xJxTRUdah3oDkiBZRCQ2Njdw9iaqTB2QyBsZNH7M9MudsTKyBa62shUgTP9b7XE8Lw2KThBKX9U7BzVjR3LP26V",
  "key24": "5r96W2TUwsabvMm6F2k3AEnyWhniLC5Wd5E9jvQx67tfAT1Z6teWb7Y1RhbRnQBZojx7fHVhzU1BfcomiqR8aYWq",
  "key25": "3mEXEHecYnLJ9prvYbwJQVNnHfi55WTosZDnVPppuoASfzHpXGJ9sSo6s56rTMFpCiXRVsPvyCF2GKiYFGPyXxD2",
  "key26": "UCJSbu2JMuXFWC9ZgcZGhjN9vidgAzgQEMQZomnCMdpLDbbQCN22pfFkJNQtiVBtGfp1knE4nuZaH9ERniEdv1r",
  "key27": "3R7SSyVme1bVtBgC4Y7mNVBNMV5s8DGPzvGHUWTvK3Feb6vJPBcD9921KNJSczpmDqBk4rqMU21D5U4TWZKgAJQt",
  "key28": "5CZnLHBPARioPDaJTtxivrfLmcoDHudpZUzaeAVCKxnaMVgWnXkAPKud1dsszkfgoNrwt2xWJkHrPsYuEtkcKx6Y",
  "key29": "UjtMQ5Mc6tZfZ8bPMgPdbyfHB3NDkcxagMeQRRsKfk3qMYTqZw1dDShhzngQMUCZKoUs2Kydec8LiUmWH8g6Fgb",
  "key30": "YsCESDUaHdDZ2xQT9qLkt1thwZNJkEU5J9UMXra1woNrcoykhhKudqrv6WmwkqY1JMEN4QYP6zT3B9fKc8XfJ4H",
  "key31": "5byQCKGURbxj4qjNsQKgrwy2TyGKF6tMkB9KLPhvhBxzxkmeAeMYFMKD3xkVNipqpq7nNuYfiUSpYLqQLgZ4cJXe",
  "key32": "2yMT87dH7LpKdQM1cSDbQNHjtRHD4eM5gS7Qs3F5mRWyECwSGETCzx5HDK9siW3KFdhKKnNCfgvqF3osNEcJUybM",
  "key33": "WM7ZUvd18xSm3FM5bbZvqRio8fxdYFz9vusACjkaoxLyfi6mfHEHJi9o44CuBY3PKhjgsSR7vJW1LMQCWzWuE7K",
  "key34": "3XYUwobc81M6sMvp33j77gMKrHuc86nqcuznhmeX8of8eqXfFVHnEGdtDxNigBsXu57nCpKXcsmom5J1AeonqGwp",
  "key35": "5h63s6bJcydHpMaPgHHExDof5v9Up3nn1egfdApFCbR7ZpTjuUZoL7MS4i7ZcUvqBwgPk6Xi4ZLfdRHfM52Ng8na",
  "key36": "2Q1qRpQNzFDtWf6TsRfSvVsUJ56kq44NxvQft4DuExxDF47kj8a4tpnYyzRm3KUcJL8VcwWScnFidinQbTC1MT7R",
  "key37": "353prdRnvU7eUjaA6TgP9VVy7SaCtkn4FXgSwTevaGxVUJz1ApqLcgQhW2TvK4hgcNbFixdDSTosK1PdA2XKN3bb",
  "key38": "4ybi9E4cRytorczzNo5voyb4mzTCxebu5oRHnoj9FsLDAbchyj3S74ijbbWo8mNvik6gV2rnnAPEahYqGQvsb8FG",
  "key39": "623hMjEV4fqcffe7cjPaAY9TxoKYuizSwndQsorzkL16jeDMTqW9XWTomzrRAu4KaAh8gQyGqdr1uQsS5uxQyaFK",
  "key40": "qhu9tjsP9JA77YejJ8QvCi6cJheBEnTCcwiy4pGm7TC9Sq7qnkYmFAQoYpdLWKpo5U1vRsKJ1WZgiUoytaakzjv",
  "key41": "5oc6KLb7cDhHzVqFGntJCXAwgnUUsPNMmoqUyNGjhZqEScfaigbALAySiAx8iGsdirU4Gp9dJJYLRgXGuMcHbVvQ",
  "key42": "4jsXn1jiimbXQf5bh6wD8KWB3zTrJ4mHwQeVGX2HBrkjwk9uNECpBwsqhV7VTS5xGM65cYxScLHyXoThFLfzkRAS",
  "key43": "2HW7JupR6GmTYBhg8uYRJeoCsdusMomDj7MKAzn5YwR2dNJ2r7d4a26VSPxB3RDRGpENHwu3p1at3bi7FpncPNfZ",
  "key44": "E2bk8XY8c8oA66wvKE1R5WnznWnQYrSfd2Py818sSRaYmqMTNpErmbyq9MwGqNhgQbKHu2kZRMk4M5R7LqBZKNQ",
  "key45": "34N8DJccbkM9RNAx4niEJHKUji7jHUduh4g5H5zo55VtyTkJzNPcUeUnLQbKnPNoQQPgk27PHZf5uHf1UyGp3n54",
  "key46": "522N4XLZq5b9u6S9sDUV735EZbQ3EaRsaVM2dfFqaxR7QZuZw7yhBSvWbqV1pVMskDG3cXJZTVFwc2QpGNrbmJrN",
  "key47": "35qrxxkxV2XbPopNBTuuttRkb9goKckTPkVAm5hdAoSESEM8oT75H4WZRo3nvUr6x29824QM9HYcNF47ofYSXqgc",
  "key48": "46XLbExWeBj9iN85VBtHybRKrXky7sTtri1FXYUHGaZLuQFkVjZZ5eo1xMfVc2Y47Zvs5hzxSj1wjftjxsVFZvgG",
  "key49": "2wS8zUpTzxaYq4mxXv5gRtuh4bbxT18UwN5yE8vsXA2yUiSf9bX2oWJk4F3f4nFrNFFqnB3dS6NvWqH7kSSArDWp"
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
