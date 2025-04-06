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
    "HE31hidhDs7LLqtath5St7nFCsf7LV6ZAFdGNqqwMEzS27h3zGZjbNvy9q66W7yYKmXwpw6tGPTY7WkVQT4JxQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZopmsL33R1U9nJCioGaapt76p6TvRZGJBoBphY5YzZ4u1SePN3X5mULzzK8g3do9kP8zqE3Zp9KxKWEv9utoUn",
  "key1": "5SFDzc8GjTVcobmjiNpqRQE2iDsYPqSenz8xt3FY9qMPxn1NikZ3sh3bjiaa4xmJSzozMaQJdhs2DoH1fwoySATd",
  "key2": "3zsi1yVZcdz6H8FNt9GfoJqntFqPmEm32YfFRikYH3kMbpzMLmdSoYDLLHM6NRUkYjoiDGWgZEHe5Jzqo7ULsBHj",
  "key3": "5XUip8upVKDLvLAkBg8JqWuDUnjmZ3xKQQDTLNx9aYaSqx9uDSUscv3x7YsVFFu42o6RuAaUK2BKDdBgpYkArGAn",
  "key4": "4h6NLa8rNU2HF2A2aRtb8Zv41aZcdCRL2Hc7FQX9pDDAd9SpuygxXkEypiqks6EwtKqa5DQ8uYryY3nXaFedkHMT",
  "key5": "4HBgpeX5hJbZ4ypX2aD3km1YKJTFtpYM9nzVBcQZp2jXue9sxoP45RRpGQUoKmzMNSTbK3yvkCffWbdo9xQbEpPR",
  "key6": "2R24QdgH1BVaM6dnGTkxVmJmSuyr3njUHigzZ6T1gd538ysD9K3J3PspGWW5aEdYJHeeXeWY2VsYyPRiJvt6KbJu",
  "key7": "4EecMbWVnMNjjvytchRdGpcYhw44ac1yAFaGk2NV75sLsP5hmSQbnqroTLQP1tWEQb3Vza9sEuAtYxbQmKujLd9c",
  "key8": "33ExCVRFJKzBDMRFuhEmFMWQpYgyWrGqLRYPrviY75b8sMjet485NU2qQ5FnNde6x67pXt3i6hnHwyFSne1ivMPc",
  "key9": "27dwSnk3uhVQEoaCSZsNLjYU4ZKzJD1M9igrRod3WJgwNk2687G7sahcn9bkyx9o315KenMtZZgmqtJxdWxfu2Tg",
  "key10": "3wZbNQyMRo3jrQX7FooxZ33mJW1oJ6epLQYwvWoiT3vuPcaWDMjdWTQR258fnhCuaLMFy6PVLFMmzNBqq9vPawPE",
  "key11": "34yAfqftFngWhjjJN1d4Kg9xLuRnCJzWoWgDGFHSi3GLJGP5eAfZAXw5SD5mPBkscs2wAmXsdsZA9tbRK2tmoX9A",
  "key12": "4d87DzBMeDBT8DQYn25r8fngXeDqExXKt4aUwNzLMKMFR13AsLtZsdpGr9Zcs5QRsmSSejcmG5KmM4Ckq27wmjGk",
  "key13": "2TBwWA1WM3xEU7BZ71YKeB1czhTvXBpfqkQuRYZveT5JEBroivLeZtVYn854Jivmz1HGnRF7Pcq2Vrv9mLrAsocq",
  "key14": "4CupDzgqbXWH4Th7bcw5eMmXnSVoDohRbWgje6q2G2Q5zYrfAmGkUEgZP4uCkUPchgnsSthyC9FpZtRHYAbxFVby",
  "key15": "22R8M6fwqBLEKQnzAFGLFSK3LGXnYMpqJU2mNN4aK9TBA3s4vBujKrb3fBencxCvezS8YYktqo65EUSevkeQ7a9k",
  "key16": "3ys1SLms5bJdJ2aGShgqXFj7ZgzFwr8EokwEKG4cyDWQ2DSXXn2fZipLCC5rVqqsz43L6HD6mkTL5UtR7QY2Sx7N",
  "key17": "4TwBzbKyf8k6Qt2y18tkkPq6qBcPxBPxncP5SFYjfTPCAyp1quD4GqPGnoFPwkvR7NMZQavPntimoa5wExnu7EkN",
  "key18": "eDAqMFnB1ZUXc9mNczXcpS5U2sjwN5uB468K5yQQZ41qseXYNDGzaWn5P867CR8Au7BbebjMSNwNX7L6dqbRT2v",
  "key19": "SBVf9HheaaX8rhiYxyvUZSsLZ75mKe7Tj3q6GRkMSsi4s9xy6Xb6JjtT9suVmPQkqFWvoJEpjDghaSvtRz9APbZ",
  "key20": "53KUXeq8VsBEJ9VkAkM6aHYCZLrUo7HHb3u8jYZuXqFc1qPym4SY79B1tg1ta7826SLMtLeStstU62vtfEZS9MDE",
  "key21": "5QgRdwwyMcENPomYnX4gE26g6h7f3ZjHXaGgSBZAaGimR9akxQH4KCjkSVUQwuc1q232LM1Q7zmufyjdTMvwZsEu",
  "key22": "454VvySnKNs1muHRGaYD8FYDUz1fvZrRGuAwsMPZ9dndcc8n7i6ZLuekZs4iGnaUD4w83i8UmpjctvNMGGKkZUnu",
  "key23": "nDqVjtt43ZQ5L14fnHJgAEMUKo3kQrrT8vAbtXdzu5LbK8XXsXkeJtbmF1kxRrQbq2CmxQLRA6qd9tC5dnscSeh",
  "key24": "QCgJ4BrTyABHZ2o55639svCW84adKFMAnhRSA8rguQafTQRNMGfUQREt5rmybZ7ZWutVEst9BdHQAUc8tAXvWFF",
  "key25": "4EAjige1XTbxfpkGvt62X5tp67s46Xv48c5EKS3ddDdQbDsgReSJrZiFSKkCWVxQuKsZGYVPehZ8FMmbL3XxH4R7",
  "key26": "23nRk1P6JAX8HnLyrXxd9nk3QRhzTpVAJYCeYT7riHmmGPKqeEg3LLbQchtuHgux5RtnJW7E4rNdwdv5Sy2eh5FC",
  "key27": "4QQVnzzhzRmec8K5fFN8f2u1QB8w3EXwigckqSegBhKtCT41Sqw4d6dznVyDic1CxNwbpFiSfxZE7Sz4ZYRkheGK",
  "key28": "2yZ76ur1jiUKViziBBGBUfoMYBd25yvaUskyZdvgC8agVT2PzTMHGrCFpvVaGX4HFBDS4tDhNEWJ6hTQiZsERY4d",
  "key29": "4ic88VW8A3BxGDkroMjqeuBMuFSLBQ2PLhQJqf5GQojg6ArpD6341zjPwcNzawycRs5fbDhWtp4Rv1D9VXyamZg7",
  "key30": "66vsuo9wmuxd9gWTR18qtSuzjdD97ADAUNDmSKXAhzTW9gbkF4fdDLSuW5FydUZ8QFMa1eypGLscyXx8figJgxKf",
  "key31": "5WMAN4ZhR42PSuNrZ87VJs5sv1Ehk1dXKHbYQkHSvU6aqeLMA6WpdpunExRYnBCFURShf4sP41savgKZf6yGGhr9",
  "key32": "Szu7vZYy8FqnwcsCQH5awA7hoMsdofUa7auFHR4ZPvuj6k1gULuJffnkbgNhtQDtBLtfuLJwQhMKnL8uwJXw1k3",
  "key33": "3VgRHSgzoAu8YJxafcjbCFkEMuyvTcX7p9MkLsdXdzVacQuGJEieZk2N56dt2NovRBRA6o1dQcszrCmCieKmqAKk",
  "key34": "2wKcR47RbFCSoWwipTQQSzREFmtAtfL2JLUtFNKDCfx5RF57KAzkNeSwnrC7RHgnqczTtxbjLdQnn93fCbcQPBu5",
  "key35": "5SoWRcsiFFdkTVRjiSfYRx7XTirLHiV6hixjaZBqttsUBfAr9FpZ7YUAZKBRrK6Bj3gG9WGtbtx7HeehDj2cd7qt",
  "key36": "cLYCXnuoydMZKsGAFrRSS5ntDaa8ySViKZXrg6W3gQ41UWNKFfCe9LrCrz3Xfv4H8YwE2scZXusKR8CYm3duPQy",
  "key37": "2AkS2Uq5qkZDXg32TrSRCuYSZSUHc4sKARn4M7AAxU2NPegJj9XiN5yWUbqibcispibV9GtoSYQVvbK5rkQf6W4X",
  "key38": "57351AvdeVXDodRF9czE81r7ZQKiavqgEg5Dui6M51JvccP2oqYt1h6qwCoFs7gfDGPevc6BVMfp5Ati2jjJ3Qgf",
  "key39": "3JiAKZDEBPgssNErv9Rr16QQcwJQUeX4wPR7xrQMKX3PJViWXhtgi7SDYU4u8kWrxcduWgmePWoH1tcBUJuYF7EB",
  "key40": "5UYquseYU6x2m42QtsbjsXtvgx4UD26NcBNY2KmmHTS2MM6zRyhn5puHuANKwuuPES86Rp1pmoxrvBo1sgeJxB3b",
  "key41": "2q4RBYNhkZDXh8uLb6trvT2Cf2j8bkPZ4spLPV2MLW63ZSvqsznDRcxkj38fW2cCSw7Rs83KQsjUTphhuAtNT4kV",
  "key42": "3N8yziqZt5QBiGL8fjrVE3Ek84omp3eo39fwxCWD2eyTZVxWQ5Gx6CqUvWsxe1iLC2f8qsGjvdgS1m4osr6CTtET",
  "key43": "3JAWcSN8tVwpnXySMcDaPYsiHQxFmVNTgvmSwweVktdqVdkv7FwELw9hafb9BsbsqfVKPsFtQzTBkMfeps9WWCdv",
  "key44": "4kY7UqrTvWS2dLhr9BXduSco5KRnmbJEjxsrMSo25aacUV2bCxuuVvogcJ3KYFQiPwRSTJZWtHFAb2No1UNRJNir"
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
