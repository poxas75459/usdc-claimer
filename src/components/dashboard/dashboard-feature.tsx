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
    "2q4C1v62Gucpz72S4pMFS4RnzSbvAuD8EkgvQjq88RWx4UgZEk7wY2SQrQW8iZrRrLgmF5MaYeuv7doPK9YsKsLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541wXodgQvKnPwoRtBM5JPkKvXUfGSxWZZC4XGbNFtUtahcyPWbXCUUShhzJauXMWc4GnuESVBiGCoyKzoojt7K3",
  "key1": "59Z5TrR6qE2AqZkTKCxFpWBiTtuCJhvgLFdMYCsfbrTEMUePLTjqANr6HzPes7mc1NWTQCEqf9GhocB4xceNSeQf",
  "key2": "563HfD68CkDqhDH9edLc6TunXfgEzcz6yfj4G8RhEQbhhRKfNXKvruCX5VHQWWVfVoDSae16gRXdAeexQ2wrzt1g",
  "key3": "5CtYaPPr4qeDd1cexHDgGnzoiBX2q7aMEZTFHh8byJKA11FsA54tfJYpBbWkPap7D9ByvP2vTWPBSjZd4iJyxbuQ",
  "key4": "5nTgCBVBtDSEkMMLRqwdeLv5ZxTEpGMqLG3Aw9c2b7vxttnMKZsZbLEyK9UM56FnC6NDJYF1crq9G3QWXj3u3YHc",
  "key5": "5zmuTrbgjdGuB7bh8Q6MpAK24FR9gd9v2g4cXgDJPjQ7imFYhHvLdQqnbi9Z2twH4DWNUeYBuoPUxwTDP5WFi8Ed",
  "key6": "5dfs59FEf2e7jnPtHbBofcdnUDNASy87hGCQPdgzss9NwrkfsrocLPqUZxgR292iBUowLYRoCaDZ5cPt34jcB7nu",
  "key7": "67MkvgfneaFNEFQ8VXyaY5wM2Rh6eoTjUjTDAruDhVgQ2UeP1TENqHoj74jW15v8ijiTVCxopaJWhmiaHFmQkjCm",
  "key8": "3UVQUYso6yBAXPVmDUmhJv7XGngrSGVodzFk1x4FzWHbvNYifcLBNHdoGUwxUeJNXTUjZZW7jZDkEjEv4wfjoome",
  "key9": "cz3J3q2AE9bpKLvwStAUozy3SLybB99Vp3USAaqr31nBMbYwCUmhNPiykXsksPWCij7LLJmF5pQWz1pJkYpYP2u",
  "key10": "4pvAVBAiC2EB3sb2LV5BPCqUCdj557YQKwCu6V6cjCbHEFUrobtEZNYqsQ6TYefis2mpvwyeaPrczXF6Wu5AN8hU",
  "key11": "4PbUQK8GV8uVfcfYBukSqEfDWecsV3R9k4dB4B8mGgiCBxrodWdXKUn8d7mpXF674uyC9vCnWp23vCuP4zafP6TS",
  "key12": "2GXbza5dakUqzVLotYi9cYFPrfXWLM37gXLBFfEjYrbwY9vpTRjtNhYRZMow11MLRuUy2ZJc7Fj85r1RPg8ewEG",
  "key13": "5RybmaE5baA4sGu3vu4AppuQNFVL5zuSbbENJ17emY1RaJYViFgNoFS2FJDussFkJ36WzBg3zkv9mZUeZi6Zz5tw",
  "key14": "366A9eFDiUvSguGL5iDvvJ4AYaPQpzzf9Jxa4j4kjyZqofr6nEtv7zu91AJQc4CKFEUG5Uw9smLFWBS5TieQD5e1",
  "key15": "45JEJF4axQrN1wrXbrsXo7cYWQbwrTQYAp9zQcjti3oKpCh2jSLqZQejeZYqJFctL7bAFphacgYLf548RWSFEXLP",
  "key16": "rGXMZ1U8taRrFLkfwBfcBsAfcNVxfcY4WB1o631Cu94uPJfehuNmRGfWZQhbT5QUGn1Z26ihWf92we1sbzxY9CL",
  "key17": "tNTAj8KwF5b9JAxDCffb6J5swF1NoUhUs6fbFsczNsrkosorBQvvfo6HGycsHMakN8U14xMsWGqb91Vsk2ffRy5",
  "key18": "3diG6PBX5g8bnZjM5hyLnbDL1VAs7fx7mprYaxsfLZjHEFnZEcGCP8rrQNkmJDg7dARETk27HD8n9xCAGCJ1BVnv",
  "key19": "4qhEGaZs8pDNFEjn9EFCw3F296DdpncQkCanTXkfAhbRxnt8Yp9wG5HBwW3zhXwWGrQUvjYDkzgfmReoRNEFi8zf",
  "key20": "7vGA95EdWyREC2yN8kVpmvhm426HEDHUtXykbR8dynFCkwCmEAauCb581GZGVSr2CDTrXd1S3zgzX6j58AUK7Jo",
  "key21": "5JkPzM8SjH2239jXGdMZXHipPjzKmbzyisVFQXP216BKdNvDXX91x3QpZ93UbZL2PtiM38kuEqV5nf4EJknSpuCf",
  "key22": "dP3PNHzESdjk8fQDzHYXPkdVY8mU5iKgZDNzPVbWJgprif2Ak8G5CpKcjSXmY1zP6jynWDHZJKsLiioUk8cP4b4",
  "key23": "2AePhe3t35jqw5UsyGA4ytXh6kQMoHuqKVdASU5HcJxrTBjgXFwt39JXgJXzdtgsFoWmav2MVpAYHZeugYgiaHVj",
  "key24": "PKPeYwPBaQCWnjeG1vX5WPCTLKMg9y1TrH9JDHA7N44EFiAtBkncRf6qJY4BeW56UzE95yj64KtMCnJgtRbJcez",
  "key25": "5LVHp8otzXCNNoimYHrqG2rx35RXw5EoFTCQ9GgijB8RCg68zjmyyBZn7PSMs4BibjGSmm6vrYVpEYoGUS1yGRZz",
  "key26": "3XVPCfUqvLQ2MQu1spFtxBidYH6GQ3PXcsvSdLQS88TmaxGNAStdvgc4HHFoV4KswVHJ57M6BP8Ve6mKfDBtz6C7",
  "key27": "M9RWHAn5r1FDzevZFTz6ronRmnpnbip2uzXMoAcWQcVFyCPvQfiMuVb9YnBgj3jKHpQ215xRfJqLEGPgdjWVNrP",
  "key28": "4UWerYeFmuqBff6K5nxk1Rouy1AWommBfN7RSNQCRVjkWkfN4SQBPmQtH2zggcKMAH2SjePVF9Ew5RyDmfekX4cq",
  "key29": "3HGevi68YRdh6d3Ftu7tzSRC4KFsyaJBk6EYguDFb59QLdkENVrQQ17jp4svv7ymz8MekQTexQ7SKsBkVxYAUHNS",
  "key30": "MEdkb1LYrCSFgwX1HxvwQ1KAbfaoX2qHkkX59cW1rgPyLybanCbWeP5srzWmoVP1Qr5ViCej1UYiDYp3FjnjLFg",
  "key31": "3xmp3Fc1tEJ38M9HtGLAox4M1DPbmnUMHGRfRYLJNLzHgstF9HiezB9TkbQ2qai7MHgziiAB3sa8qURVkyhdk8t2",
  "key32": "3frXAkweFBrWHFYYFbJ7YeWc2nUSUwSAVVEUJ7Mqr9b3CrTwtiC8Asu5QKb8pTQhqPjFVpERvUdexFq6ivNCT9T3",
  "key33": "26UdhEWdEbuBB294ofsaPzJxt2WyqJ9VnUuW2hby64xd5oh3tL8Fzn7D5kKTJHNnE6BuvDV6QjgSRANLSyUtBeYM",
  "key34": "59aufEKzuCA3dqNojuwKNsojk4atJmGrUZxWWykF2rT2SnynooVCdbJoia6G9oSBcKdN2UReSCGjQUJ3fcmiR4Xw",
  "key35": "5xzsQkg38PwWinbhwWaN2sc8MpgnG9EXKXq1SwFxU34HJDG344Wjvc5DnTovv9zNvPg5h8GTH7sSw6xtYvVvbFPN",
  "key36": "5c2FMXj36LUKuytf65xiuhgyiW2VzVrYx2Eh3SegjKQnw2b5xB1JN4X9djmZCysXCByygTNos4AK6Cbt4wo1BQ9w",
  "key37": "3KWUoa95P7U6kay93mD8wV7vZYdkmgYQUDzzR6Ru3pEms6W1vfE3Xjriu5nMkM3UESmUMsEFvssybBgDWUGetedq",
  "key38": "5Ts8Wf5mJwiaTBCfEVKA4i9HkjhNahr3gsLCpJE1J2vvDF39LvT49ZGLX1BjmGkMtonbnrRPD21FxfxNcS9gx9qo",
  "key39": "61Z5UA6RaCB4Rc9p5fhCwmtduKSXGpZqVZfiADp5wbTBsdGfd6m4aEqWWcqA12s92fnD2DpUWgtn5ucFTCkSUNgv",
  "key40": "3bgcmmZMy35E85e1b5FCihcHwaDpzti96ctKPCz66Somm7hanxazpew15p4GTfh8ooahxnUXhuuzar5JMapHRaAn",
  "key41": "3SDBSEsphxMKkvUa6eDj8roy4zac6qzLsLdwAnuSSr8nHUu7VbgxEX4wBpUfnEtYz8sRYCbf9m3DUk2UFQhx8SH8",
  "key42": "3FQtLNECgx6xXzF1bzaxhpqbXJPGDWgkgwApoTM2S15AbJ1ndvazfBkRi6wMHmmA1HycrPLyjS2N2f1PvWp93HND",
  "key43": "3p4QbLgTYkumKrj6aqDydemcjxix7ymPNFSEMhMs3fgnYJoYw22ujCxMsnus2zv9Fbk3w9iGe7KiU5MwT6j8Q21r",
  "key44": "WQkMpwotJgYZyfehx7DSHDdoZkdQupMd6bswEpK5FxdwjxC5jPv1jHsRA1BEujQ92uNvmAtSy5PGuMrDXbysn6m",
  "key45": "2VhSknSKPuQvfDcGZSPuek3TnPGSzABByg5pXponxEeuM8YyyDvQUTWGRYvC7o99YqS2U1TjhjgbCx4Mfwd2eMon",
  "key46": "Dw2Wvphmzim4gNABdGS4oLSvR9i4kX8AggzSNHzQGfFvCCkQxy44UB3YCPjhhFfv7pZiqZpSeVkx5uhrH1oEbLw"
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
