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
    "s66bVHsyxPrhFh5n7rztKVCSqeB7kcvXJBCKdhvP5Ltg3ChxjPh3KTU1HfiaBdTFTskgpv64oRwjcJRE72UV6RX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xy3B4tvEFJ6MFrZjLLv7BJ87iV7SbULuFN1qjDuKdtKaQJPG82GcVz2PepvQeKGnUz6hSz1YFCWdn9s6FvZwJZt",
  "key1": "5CurT3wY7pLuTyG2gZMbw6Gu35wofZ3VihBzRMzUqUeRtA7Es1ntXjGKhDb5TXJbYTsHL3EykxsGvigTQZmXfEcZ",
  "key2": "63ERmxr3YsTVigCt6p5EvqyCnGD1DzFeyHpguVKaVP8qCwzsGE1kye1Qe2ijqtYwgtpDE6BTnjtmxbzhSoCMe1ES",
  "key3": "4VUYLSZ86CLZfBdDLbawd5KrKX4qUcQx2Dt891uyxZDpX557syigvozpXrFiYLbogKkYbemxg2kwe8nTJjvqmo2F",
  "key4": "59D9U5svdW5ksPYb8JaZjZc5ykBMHvMemcVhre3ce1n3Eka7vo5mrkhwkox1D22qhtpFhkSuqWxUigZPzSnfFTrD",
  "key5": "64astaX8ub32RQdr6m1fWhmUPAtbYVpS8PwHpJig5ZWDXUEBnKAPB9ZLCYmhXNbaFTpiq953So3w4pnb212CyfDs",
  "key6": "asTYWpWDX1zHEqcFh9SfD7L9YTcSvU7TdJKyR7hhuB9knUFZ77pgZTXgkrvmW9tKEMUvVw5HpkJtGsdUVqUt6NT",
  "key7": "5Xw1bgmQzvh1bzZ9f9LUsmBzpA8mZ2j6XSfiEA66v5hJbpzHAcyk5euM4hdd5i8RDKQ5HRsAPwjPGDpDiA6MM3vD",
  "key8": "4fYDxFy4p7CCSXxoMG4Vu2JSrCfx5K77cYErcUkXWUjxqwc99ZbrXBbqx6F5nWVaGYnqYu8cuLhK3hUnPnGVzZid",
  "key9": "5zEeTnxA6wnXAtSCPYUMZ9CnhkpJ9mkot1VTfYmAyBUQyphpRD21yoj82LmvFnDHUSmf6PnfSroHpZTPH2B774jT",
  "key10": "5nxzkPq8koRpsp1fWBuRxXsRt3LkPMAaNGhMF3gzZUpuLYLu9UM82CUBPtwZsPZsTpGTKXbm7D6ZXEzVDNGvYhS7",
  "key11": "4djxJTvHcVAY7syBWgR58feJwL6q8fuhgoCXnGbHbU8y8WPKwrB3gHcRj3PumEuxVyKBRSJA4ggELahoyMuBBJNj",
  "key12": "4UDoiaaUPxre4q7XZ8LxdPzpAJe6dPQMzC7tsBZ671LYdN5XUvG2U77V1prb45RrHrhxAM6U8RHLd9iW78rErPNU",
  "key13": "4NeDWTYEHiHP8hra2kpz4BUj5RWiM58XJjYkAoRHdBgGjmvJjEZTMdTuArzNeEMW8Q7FSusrAd3SatB1QjHUW6NK",
  "key14": "5ZRWrGsTRb7utpXNj1hpaKzPJ6kon5CM2AFHSDMH38Ft4mEoxVBXmyjF51yUP842WdWrB9pqnc9DWYMASx89VZ9h",
  "key15": "3SybtcZ548aoRFTmCAdGNihJgSvgkBuiyYgBiXJz8q69ubVUo2E5gV3osTippBALnfeN6E9Std6WP79y4AGfnQn9",
  "key16": "fmQSW6qGGCX5BqmHp5HCf5NE5CDqsrZL616zzu3ZFm9cXiuyQRS2j39qhPEYserF5nBv256BE9BDwHPZCqUxP6V",
  "key17": "4RpVLDEc2FU7XpXMZzYv2tY4YZMShE7gYMzvsekx6Qj8iu6DyxQ1MzQCu38VH4351r5CwBZ3y3MAA4ekdnfcPM9D",
  "key18": "4H1tPUXD7PvqDQc2CRkdgLfGAUhSsiRTFGEMqEiHYU6sxooGsTiXpDRvr4HMnAyuf1NF8eWd6Uksf5ei417mnCKD",
  "key19": "heiC5FcSowFFE7KCyZBS8K1CXYrKVTh1u52wx6oftFUHaG5xBjdZHYxNyyFvNAwEhmxpEq22y2pUHkdb7m27TDW",
  "key20": "uBVr4h3wkAcuP3GyLucbo5BowVVYUBMyE1pKSczxxpFDahYoDdYkY6exHLdSXrKNfr8TezhJy7sr2YT3Ypga9Xk",
  "key21": "2HL5kW9io1UXzyhU63eKrp7p1cWWBinxFcfP913gNVSSZmfk9bt4qpFDcp1ESAhrVm8hADeKc4XWsg4uxefEYsZM",
  "key22": "1631q2zprmx1dpYnSduHWaXk8f7312C29o7zumTGnBEQn9PLXqtimETQ4MuqjViaSE84HDKsP6HQ3H7AWghVyTd",
  "key23": "2w4T5jytesASymCijSFZD4WwPmaoQSQcj9CMz8n25tFtStxktUYuUFu8TySur6u6uK1EBF3s3m9Um7fxsuhkyydM",
  "key24": "58G67CFhuXNCB69gArVmRtNCGqymxkouFZVG6wgYoE349RERj65fsiyU2BQHVsZsgrXPWkHnvBXL6eKiZ9BUftCB",
  "key25": "3h5eLGTL5fUDJkStSKne77TLfVFjsAK92sAmPr7MYTdj4pBqVTjUdEmDrqQuxW1anerdjTugfYDrEEp8haGUQTBa",
  "key26": "5f9q9xN5jYnvM7ew4mEpMEsEc4YZQfYBLdYsJeo1MzCz4qLuFCmR3EfCSLiMQYtDBa6NBaPYbQfwxeX7sZdQ7mfR",
  "key27": "ErRHEZNNb8i1iWKcC1je4fe37vq4HYCAo62ATRpc62FftunMoJPuVFXKYENNP4cwwjkaSCGhBKCPW6MqokGMEVr",
  "key28": "Ts1eqaY7yrKm4KBuvacbnWfUAzX9ZhSWp7VtnJq6oLrsyFBjoCQVnxcTdDSJScq3pPn3uECDSZqp2dKWv3n67sv",
  "key29": "64Sh5aXiL48t1ZzqbEMqNm1dEnZ5JiH3hnabzreGePzuAP1M6Zw6879hVdRkt4JDT1MkYsc9fUtz9u8wkgxwt2VD",
  "key30": "3s7gZmJUoGtMNySN7ynwtqV4gtDzKFCKqsUB6PoQCmbQpJc4qbNe97u6jSEXqQFj9gx6yEoGZ85vnBJkv8LL6nX7",
  "key31": "2zEvDvoAbVnCgVsT8CnGx5KGdvfJ6tenHKjFm9KvBfKRHu6FgB3vXgVRCS7Yupvh3SxeuJwbmaS6rk3jrmsiRFKo",
  "key32": "55U8DqQ4RDrjRcXFsP6nmkpcLpW3hJFQ1tXkAZbcedSJEZwLmEAhLH7Vz1ZCVupCr2SqjknfLj3HtsagubkkDo3K",
  "key33": "FJPxFmK37n5jDdxGckzy8hYJ2yp2F7fGacvHoVkx7uSxd7rsregisktN1XHBBKoQY39iNNRtgQo8ziKNGCp8ron",
  "key34": "cVBKuyc1A5aSgjAczFLAWh9XemqTuPxX6PkNtJK1iJoAuV7AMzkaHHmnfReeg7cBB6cc8TUsSC11HDSdayDGP7e",
  "key35": "5iGKDpbsH12ZS3WsGFnxMzoaazcoiPZ9xqU9WinX1ZX9jeFUMuEoZAxX8RTZ9Y6d2x7d3zRweaQJwRNpj9nV9Yop"
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
