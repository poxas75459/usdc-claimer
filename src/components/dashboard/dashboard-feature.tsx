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
    "2dQ1GzuX9npcbg7gKLfKQV72vpiMwkHQWZfShJarjJufN32zSG4qd6Ko2X1CvJFDNSpsSfeZVRSHoZHsL1vY1CY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pz36JctjJRexngotWc7q1nq1yxGuNUARUMiSnPKMLj3xoUdJY3qSiHhg19Yg4e4MBSWpUbWYcxaPpQ7j1zS8VYD",
  "key1": "uHeNAQZE13VVAEK8B5jxzYw1nevanGmrvxVJGboTvGp3mnd5n52fGcmC5cXZM4mkzET35P7u933LdjEAPyMCHtU",
  "key2": "B1M43qcaTmZPm2pFGQFskkSP9JdyPw6wwkP1skaRrGcfXhXbgtX8iuyRiqy9B6P8THenkSp9WJidzMXA4xa79e8",
  "key3": "3DpxW4YQQonoBovZwtoK3t1DK6xMszDy8AyhHwGH4WiaM1AfoDF9FdTnf4PezPKbsPHq6GEd8mDk2vdKG7GjQyFu",
  "key4": "6ib2JvdYgYqKV22gTdHLD4AJ9ufcK4UStBGoegZHUt5PCmH9HsoU7HX9FyuJL8dRSv4nNHUHdJBcRmUp7tm4PXA",
  "key5": "4uX4xzoEyMRrRWSdExV1q1oRAtL9bmUCkSAQopbr7t74vmNzZXYtoMU4AACL13U96JMsJ3bSXnnpM8Ttht1LVBD5",
  "key6": "2TDLxjKW8oRULeA1Jhta4Yjm7ifqedt6ufhBjVpbdNDbEz9UnRrFhZaXHadSbK89yFoSP2oG3L9Y3qWvtKTbWQxM",
  "key7": "48Z472av5Jp2tR4W92pAQEFdUEdEkSQUb1KwK6aqkEUxscEtrMYFNTevewybKaNJKTP6g2FsrZz46DCXVtfqsPdp",
  "key8": "4wdRYzcgtiPzdr5BeBP4bzCuKtk5oVLH9qSrBjXLM6pH9gqVHiufGo9AbQM5pcEgBAziQywzmUtRnQqZqpKtUgZH",
  "key9": "2LoSNbNuHrh7pCLisngsTVUx3WMApX2QxztNqqZnLYNtKrw46UdCjyuiZSHDV271Buu86w8HwWYEm8GFsj5wqWXX",
  "key10": "2yTBam25sqL5et9w6Vbm5m6yQnS6bc3o9LtjQbAzvUFRDKC4iUZwuEdTEWoQGomf3sbWZKNRfGX7iywSmYr48kWP",
  "key11": "RpEJ5sHG9EBxdPbcbed8ipe799tkYvnuqECtuUQdDXe35E9tt8P9b4jLdwx2MH579apwWqZ7jpgEtUZkokb7hah",
  "key12": "49EiisSpfoM8wRd6YS483NDWBVMZWYWQaxYM6JjXKiPXpqCyKtqWRZTPZQeaXmDJXAi7WjTXQQvWF8j76TfaVjHX",
  "key13": "sQrPRVe4ugTKu3LEEKyjQEFQNeDpzEZfAsm7LQwsyyQ65PVZZK2cbisG9HtCNnpnuB1EXLiTd5zZ1bhXDnXGM3Z",
  "key14": "2HXrzfw3U4ng3J7Ww1XYkK1f2YuUEMuvj5JvHaeTfLUfWkoH7EqZsosmmJdBjkCLAH9gmFcUP1CHdvNywGBZhRFr",
  "key15": "5oGFGkxAfEDHMjwwhhH7jnanS6VjDDFLk5WGenMENUK1t68Zxsic2wtb3scVEeQQzddDkffAEdm5t8nATdxziCGU",
  "key16": "5NmrtWh7oeFNWNDpxe2zebKyWNFXuDPmv4JaXziuHeCN37zWrQqC4syH95N1gFpryZvRuKC8pM2HRSpK1Um1rPHp",
  "key17": "8Yn8o2aNqzJQSB7Cf3t6h6B5QeF4uKf4kFyHJj9ByGgWxCJ1AU24myyPQVGW5ssEfmA5jEpz2D9cU3s4cAZbVq1",
  "key18": "nekiStB75fnCasbk6vLsPYNPYRit7gRZchdTL68xNb6BmVSWynDe1q7gdD1zL9peNKx2ocnwuW5LPgNbm365rbx",
  "key19": "2ujgyv4DvjCiBs6hew8zRdrgYiCZCEmReNhjUJ1refgQa6fUzWfsiuj6eruGYsV48cLwP3TbUQfNwLDS5kxWgiZy",
  "key20": "5xQBbvD2Uc6Ni48qojvhrVW92DoNfGtPT6ygAy6HX2aNLj1GdxL1vjCnWHpCqLEU23j9GyFfNDKNtJ9fhnUX5Sk1",
  "key21": "PVqPsKp48MwMv6GbUFRCmxPawQaJR4xZLc1VUVkbz5GkyBgTSfafxs1mTybU4ufCkpPtF7hS32iTGRNZPhRYVmw",
  "key22": "54h18rh4kgmFUE1mWetEta56eZAQzCvdjwrGnkqfSyNRAQXFL1wHKAESJVB2kXJAsyac5Vop88EKrnqyVBrtyDGQ",
  "key23": "4en7ioH6BPr9MisUd1t14xwK9Xy9emCUVQuhtXpe3wB3VQ8FYBZDGXdy5mS6UYjJ7ES8WsSNficp3chvu3WKCwgj",
  "key24": "4vBnT71ERTpgjdBGyGjLM973bfijDuC1dCieLePbPnm4GXJGbJWa85HQfF74BjVGYeAMTmTRTCSP3bTznM8KG6Ts",
  "key25": "Ve5f7Nt5d46wvLtvWxTgfznA11t3RSRuGQsePeqdK5kTiNY7EP9U4mVxLdrqbLivx7i1bHPmKsPrKR9J1k4jdip",
  "key26": "DLnmFFifcPWpM3wHXPz874GBoekPanzekeBpiozyCk8wDGLMQ5tu8xviCdsBzRjRseLNH2PDaiW8Gr6MCvguYoJ",
  "key27": "28yM1Ry5BWrKZXCSstMJYDrPfr57MBNBbe3Qzu62LyqpEf8VDw27PPjeqDd6TE8atXxGHucYGcsjiiGQzaymLHZN",
  "key28": "27cqRR71eLAyqHEYbQ7k7kGA468qWL16cdUKDjijvbZis52muxbhqshK981cn7LwbZuxEYiGqLbokAhp21snTJbe",
  "key29": "CyVssv1ZaeXAbBSLZZS9Vu8DxfQeBxdhBcGE6veqANY1hat6siAgMTWTmkvVmGAKoC9dTwq1aLH1NyFs73hSBPy",
  "key30": "5C4ZHAYpBmdsc7usAv2vW88GG2eBKZHwBGVc5QvA7KXupvi1pn2at6dgx8JudxXFGDcBcYTqpfkKuznX2hzQjzdL",
  "key31": "3Jj6x1Jxf64RsLrW2j8WAwRUtmJZtH1GrfoxPGGghzgzhpc9cwCVrqJChPtwDMbxKnNbaWi9huZFAmVya63W27na",
  "key32": "2vMAhAVrNc5pJyN6B319AtnwrjbeEuuL3BTQEBq1VxK6y2usK4XchCADCzqVKwovA3PXsMKS7KnFxRNPNmxEpVp5",
  "key33": "7nBx8q1JvQRXfX27kbJvRUxY8ExiVD11fMRwBoXAfk6E14hVtQmLzXdnFheEgL8BY1ELHpw12k7WwBRynDe5My9",
  "key34": "vKfKyuvo3uLm7JekkHziVp95Fm9q9KLZAEqzL3tN2dTfq9rdpxNfFRq3DJ6mdVCLYC2EpLjJy33eyyN9HAUZm2s",
  "key35": "QUZuzSXSCMBW3AY6DzuN5TRNLep5DDcxy3h6diDBRRy2sjoHgUxHn86XubsGGK7BVibvvwN1ohNwdwUBNJFTeag",
  "key36": "5q7SHJGg4iCcX4g9bTj5cm6QYUkhrLtTduc6c724gSE4QoWJSTZtKmRok1TQC4198S9pkUpu9xmnFkr6dfWC8hZR",
  "key37": "5hedJm2Hxji4rhbxBgFqVBjL34wFy3EVvDJzYK6R1uuVVxYg2BLtjhd5Nj3SVvqELuyr4Yd247Diks2h1rHNi6WB",
  "key38": "43zRbgHBKPnmjtGAAsrvZ7ep1zzY9azvyAhP5RtWYmx5ixBJuNBV78Pb4cSoN954UHiaMWQmp9QFRi5Pj4qupgfi",
  "key39": "4XN4BhQEVFUtxa4QyFrVKmZNv4Kd7dPDqWdWzzoMeKSBmgtnHHVCx37CEof3S72aSzJXbdeu4R1P1dU4YQQQTqNR",
  "key40": "A5mAAwfRsK2G1psFTfYoJ1QmFe2QvXkvqT17SKhJbToR5R3Zir8p7SfMGNoSXMFE9BfWHdA2hrezdd8T3uFATWo",
  "key41": "4nfKzDpRGyHC8UCZo4zckiMZPp3jD9EyXqV6n8fELbbZBXKTXwKMFXnyY2C32fr7dEKaZ3zM2TmYWAffMkR8wyZp",
  "key42": "41CyTiaQ5MGToNxCzuZJnHKZM6uC6ctBiyjV1i9oXmufKmdrNB5xHTPxkYQ84BnqBntaR58Nq8W1zXc2tiHwd84r",
  "key43": "2RZxfrdHpzTNw6sqaaEmMR8YbT2qkN1NfYWe9ck8sRLu4aFYieKPtbufBoy7WDzEHwAwbfnJihr7e5zww9FoxEWB",
  "key44": "uKRi58tXP6XGQHfmveq4wKH5DP8UmAqQhbeTKVNqbZFPooaDDgeUaH4mJeZ7RCyRnvnGXu2sTrxpKbZJ4HdrMmy",
  "key45": "3Cw3KyvdajFjppAjyjomAK98HtKBe9RtzdtbvaStKZKDBYMwVYBX7rzBzjyzf8XyW27X8yj3ra9f628uTYWfuShD",
  "key46": "DAwrz9Q9jqtGZMBHoTsjZdvVVkMv8rNuX6yCNA7F4HndxyNuznMCxoewQD4To9bKGpPfsK5DrSRAqPsXhon7QrY",
  "key47": "4QEtQztZCay1oLB9JqGhDWCNwMk6FyLwkhffPs5rRKK4SPVu9BaeC6p4SrNkN4QMaF3z2xRAcyLtg3EMoDsaFfE8",
  "key48": "4YG2jDUenHR7H7QGeffknHcyQ4MRcQGZzbGpBG8oaspyCWd7YMdNVcQ32h8vUsWL8meKLb1Ew3sVUphpwRoYuLX3",
  "key49": "4WtXRo2CWJVs8nBmAmSPmKE1LGgs9X6mBFBiC1fPpCDSNPW7Z4rgTSGNuCSev3JL6vb35DxTJifamr32SaLBC4p2"
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
