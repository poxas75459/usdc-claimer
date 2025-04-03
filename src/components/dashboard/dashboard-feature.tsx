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
    "3zwwyjErs7VzeNJYRhAxZDivaUWuaWxPtBfuLTc3Xwk9s4yhENt9ufWPQ5v2SpMze4n6jJxVj15DeWgvzv9BJMmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5jAV4dKW7Tb8zVJ3UMbwDyDcLxMybJa8eFoEoyLRC55gkCPfF3JGx14UiA5zfL3gZet9VKesHAV7BCR8q8Hr6Q",
  "key1": "2Zcu3aYxrtTCquYDou1XXSQA1bVAkcYJTH29R6KSgJBnr5bW6PAisRDhfGTi8VYJ87T1VuEHbCphqvLC3XvHSEqx",
  "key2": "FnuNDvYZfKSequ5tjCgAxyHahoqTwCQhgUKntrpjQhZNPX3twejSdQwUMY3wzmQeG3bKBCsxvhZshUe7dHYB7ed",
  "key3": "3VNR3X3T5S3L5s6PTQ4rnMvzxhHiBGE7tcFipkZajB62pBTspoQubrJdhVZSU8xJZUxw9S8o5fvd5dC3nouy2gxw",
  "key4": "2viDzwEgs9PPCiu6nTjxn6Rw2UJVHBwLVcXsTbL2eHYqx6BoTs5jBDZGXvAud67ZRWMamiryFtP6NB4FYsaReXmh",
  "key5": "KunWybsn6NGi4x5W2NBPaS2HoCouQZA9yCiKa4yPB4fdbRJuKFxpTNV5c7BHShJmRYdXyEaPShTXCZt6q4gMFaD",
  "key6": "4wgwHN1EGRKFPDnrQtxFQvKDc2iMRmAraJcBSgFxoSMwcsLS3woaU5Zb9rCCDkHCqdGtd92EzK1CoFnCSa3TTVUk",
  "key7": "5BuDKfkt8k91uMV2Q6jBheqBDk3gTYLYWAJwPppAMq9A8kNaudaz28DiFtPamkxbtFy1ZHVvU9znBAArD11q1VXr",
  "key8": "5uXhWhjd6JYKDfXkXKJEM3xS9rz3DrzHVCcPfKCNPqbkjdwLH7y4CceH25PR5wsJ7LzrX5L2TvWp2k5KMQh5XsQ1",
  "key9": "3yWAodyWxELAEgRwhV56DbYmHecchDZNkfEK6R1CsivEawmbx4MikFiu2hLranoABBhWwvio6ctZZyqrcdGsHsNK",
  "key10": "4zmYjn6gZ82XcfWqxB3aZsrFFXJA7JecV21sj87mmeBgx5Xok3dVDJyucF7u9Hs7ibyFPyGyYa8W7whhWy7gHTYm",
  "key11": "2RaBEPWDycCNyGF81EdmkoN2xJQRRo5njjvzcSqrrXpBbsTayMqafS32HZSodjajuVSNYvDwyHfTmyxdy33n2JAZ",
  "key12": "5UZkwZBeWbLEmf54z9kwR7hC7FX7TFhU2mtsQ1PLapmXYQQ4GsQeEWu87SRfdPfXu1dgNs8nHpAQxG5VkFuA1yTE",
  "key13": "3xkLTTt4vrW7uP3SKrVsydxxSVT7KGnbeKPa5Q6cWfyC24NEWfEtTGVMrrW3L4cXvhceBPv9i6fxVjGui8U21L2a",
  "key14": "4MUHGTS8Go9UwmjojzLM88UhC1hGqXAkmHg7wwFX4vjvgiEtgtzNEdXuC9NKYCFM6KWE1yQEGLDgjLh7b2u7t6UM",
  "key15": "3mCNUrAz9ycyQPxtpZYPRLXhqBdvqDqoPAiTFmnpzPvMXEjG2KPucFuvSn2mJjWBssJcqMbHMiNG8VaJKBgKYXFe",
  "key16": "3FZzxQkuWUw3bRJQZzKA8sd8EgvnA7yxcSaY9awJzwoFEFK3NqkSMrTNRLx4mASxxGZZtJDHxwEkaDNo9UmeqrcQ",
  "key17": "5gbFtKGtf9AiGatPifXbtnEi6srThZPbrrBKhUfuAXZsEQLdFRzC2nnKDh3GQmnso8Ja1tR3oPYZSxkYwEMHepJF",
  "key18": "3mMjvBLKNJbhTtxLaXTWqQTz8Hbpn4EKFj6M483YNfyrW7xYeFHJeDFPpMGfQhhVQU2vnPxrdjy2Wscwmb1ey9GF",
  "key19": "5ehJnQqE6qZm8ifCXhsenXFH9FXv4E5uqeJBB2QjQQW4Q19adrgxmsGZFPN3QmcvBcZWz1pu5boawXdDAQp4JhKm",
  "key20": "2QnV4TmXUJL2eD678tRHbRYJQyc5gzsUS7TJ54UirLU4RwRhurDNm4vVPrsYH1zT7GFXUMZhXrjL56yBtEmqnCrY",
  "key21": "5qmMcyPywt8wHYsgw981SBgzQThE5NRnnjsKr9iKXWHQS7uNGG1ndqH59T4jauH552TnYF27bV6S1Yg99uJyXeSD",
  "key22": "n1fFgDj1LKb4cHBnBNWXfWvMu1Sh7cQpyRA9Hktwu8WyzXqmwXLGs8bLsN6RZhasLo3N88DA48YXm3RE3DeYTka",
  "key23": "2RwkJT2Lui1kU4aFCYTS4qzJWbFDyd2XLyz9sP2djFSmyQeaxToD1vvw4AWHZmJCHcLq7sj3cYrVBBjDWCtkgMJf",
  "key24": "5Vdyj22aQGVrCRdWVBFjFs7Xz2eVEZX93PpivaPfxNQTLqDDabnWHUpQTgXJZ87wycKvFhqC4xBgRsUPG1FeQgMs",
  "key25": "2rPp9BE6nkeHMNuPfaarQWEKMKQEZJActnJPPvyQZ83HdczNALNwjBKMYWUA9ZTvZ4WWDEwe79vm1z7B8QhM4bGC",
  "key26": "34wZ6tBCNZQjNeMGR9B8M3R2NuDfcDdToEAM6VPkYSzYsFRQ3B4eZ5DxSsDaCnpkXJWcj2z1yCyHSPD2mVTdbBxb",
  "key27": "58RCttrbju3rM11khSifqkyeAbgBopifE7iXJKn9eqArCYwmGC9bLKnNpHTQSWYWgzPTP8jiqP3GJyfDGYaq3s2x",
  "key28": "271Q22C61UjJ4TPgzFyVCFXckc21hpZBykYdxm3f923a4QPZW9y4Fy8qgAK7axA4zQUNmQzS9FjnCZ8HJZrJ2QTV",
  "key29": "5JryXpSKWkhm5fsBMbTRbvPQuvsbjtuY7dskU2dMDKR5Nvwx4dMLafox6P9PonbpHtVHXwAxqohoNM5GGkXqDSB5",
  "key30": "2vEekQZ1kP8WN7HdL473PPJT8djRQBuHPy4tJ89i3Krt9C33sextTjterdWut6k9vmBDLVYCjfpncvxjqaMwELu2",
  "key31": "2XMR4QVKvXspwPEsPzLo6DfMjaheUZFSPKcB75gP4sMHg98huwUYu1kige6mzSSrLHigUMm159nm5fNX7YRV2f4D",
  "key32": "2YBabMU94ZGWpSk4RDwuDHH5qmx951UwMr2xRYJgJXjYU6oWo5tuJkVcKVcBseqy3FMH1WTqNXYnBVo8KbrTwmt1",
  "key33": "3AoN12t6q9FxJtisq6FpwGW9netNrs6o4AUkeB7yAtifpzPpC6VTxDsPVApLT3967fJG8MRm3aLkSGsqNEXGzMQs",
  "key34": "6SN581q2ZCofbcLang7GLtrvTiaXNjCcagaGs877FWdhKKQB3hJ1d5NVuxHfzEmakzJEk4CfSAqZzXkBC49v5t3",
  "key35": "3mx1JXPmQeFbrP3CADNzEds81HQwyWmFKjvx5w5oz2aRb23L7igwWMyG5wGRUbpeQhhqbkm6R72vy7pyrGTECKbQ",
  "key36": "64Em8QHKmafXoikMQjj6eFgJMfBFgB3A1JaJqXkA97N1jjU6BF9S4g5D4SDb2p3gzA91iqyEfMQoNLLh4Ttrpnqc",
  "key37": "523xVXxspwbTXBkawcJZwnf2Bus6vpAfSjmr6Bfdx1SYbMPY11LaDZJhbyvgqVQys7TLJdh7MGQSWSfJg81iMatB",
  "key38": "2X9qHZAmtgmsfdj5Ndaj7gRsX6HsEmWFZKun2H4sPhSdBX3m42ksikCuNys7RLaatVPthr9f2ayn8mBLkZjJ4qDJ",
  "key39": "3waNEYDY9eUBYwuxhPCfEgjafguXBVLopCrrq45qMpeiKv1mdTQX12hM2b3uokmUYNm82q3e8sejP4Y8cxqfhQDY",
  "key40": "3Zu2EuDhwByEzJEKkEM6RJR8BCBJsu4MvNBQhZazw6DjgCD9Xf4JqJsAdxTnfuEbnECeAtrwX1re99MJVHDy1fhr",
  "key41": "5WS9oLz4oASAcifRUDhTSDJT1Te2usuqxpE6sw3n71qAQT2XayyVUrebUTAPbtNFhQEtKbToBmAZBSr4joLJiYAS",
  "key42": "6U4G6K27t4yQaAFqHvZvNd2xZLrz1SWETFRwnUTrzfbAqe57tRvm3RcEhggNBK1Qk6Sk9gdEsZM4fn3YXZLQMJ6",
  "key43": "3cFLoPbHzndXsyW28E5CXMkZjgxzjXpehXQzpn6MTJaoyJGuUZzJvzqvqDQsFZhuQQZ19Vw7HQQUN3D3jHraXBwL",
  "key44": "5U3dNKwKKXyPQCVzc25MevbAYi9uicVcE65pxrzDUfMsRNSxPY7LNqBafQzrV7UyetJfBpQrCrSb8yyD9svHj6Ax",
  "key45": "4Cxzevjx38LbRuXJvKo2UKsJLPB5ZRiQzFYexhqy5gbBujbiQeNR4krvxbse7CQNFuT11TLPefXfSuGWogfsjDbu",
  "key46": "SpQQUZ6mYrUaFaFKbKyJ6UmSB1ywXwwCCs8pT6icg1mGrpYUGih3PoJ1DatXcRdCirPc6wq5JyoqUhHvPdjytdB",
  "key47": "Sy3U5ToEq7dDZmRZ8apAz4yWDgpckRcamcnw2RnnigXpvfkP8frr6R5Mbedy9T1VNRLZnqywR1Sup8QNpAVNujW",
  "key48": "5ptcN6F2MzzvdVJWTxT8YvaGNVhjTV8aPzQY6ETi6ctq626EZAYqvHgzaiB3PTSWpUhTKnDGAfH7q14m31DEdx3n"
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
