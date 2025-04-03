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
    "2BNwFjA6f2DZ1F9MuQTXtYXxS4rc1ZJGr7pekYEaXDJERrsYwdRgYc88ZMdp9NL93XbSxVLTAsZ5vMbKfqXPV6HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yCYwD3hR6hgJNccqzw9xVWsXRRLUxhGK4AoBdfB45WpyDtgfQRjSHhptzFqwbLaVvw8HCPGDTsSpC1ECPE9fPAY",
  "key1": "2fp3iCuKf2T6qTH2fA3Aa65nrx7JeHyevCTdFGDcbccDjs4ErrikYMseUUnUdRWmccTzTQc3PfbR3FFqsFzJmW7o",
  "key2": "5ARjhAyAeEXs3N13FECXVLppmv4UKkc9Cq3JHPJUt5kxGQr2E32Frbxne3gwFX4eV6fP3aZfZuzrygkWjkiDSUgz",
  "key3": "4vsVdrjhnupKtvnA5gATKwkjEA2pijMXTxWyzz2p31Nq5K8h8QtgFRrRsEaZ1TvmSp9DUqTNVzbBCiQZJYL6vY1o",
  "key4": "3dKgXvRezJbrk8gDsaMQyLL1kF42HAuLhR947ZbNCyFdFhteeXUhxneWDkmDmyB8b1MEUBj41GF8KsW22d5nPer",
  "key5": "513EbsUhgFBsYWwPdvbB3cTbxDFNVcsg7HS4Ze19uqYA9UKAUqh1Hs5waM3HMNXe3P1ZVCNjcANUCTbYTq6bZdrd",
  "key6": "5EhG54heqrkwxpzfZm5rucFxArkfJGvSQXVFvpUpJnNKyrTNsCTGW979y84NJUtDUFkruqoFCv11gNA37ehexszJ",
  "key7": "5KmTqDrFJbuP4SHsGRtYbvhzBMrTZNwfYpXLGiii1fnXw8ztnSGq4z5BmZZtyDGCeTiM97Qj47GKEdBdJzfibZwA",
  "key8": "4S3WieNrzxyFGbV1FrSPUBUwZEk1hPNRsZJrwB2yPtedfJpHk27yqjr9AuuVB5PXonoTPoNu1NEtWPNmSV5vEJLS",
  "key9": "3Js1DPXCxpBTqKvpWSER5KrbhJZwfGhvkJesdxZCKMrri3yhvVvxPFZwoJZafo67ycV4xSry15u4H1yimKmx84gS",
  "key10": "2dmDxu4FedqCUNDdXB8wKmpgAEYJdZanXTmvFCLd8dYQaZu4bui9Rcoa36AEQ1HCBnRQnJVf2jsj3T9eAqnVDGFd",
  "key11": "2zxnWah3zoNEiFFTBmR2CPF2jw1PiZ1zoA1EpRFRCxV5rbRtncDwQTJwxsoXFGj1YrTSHpq3aJjWU452RAt4ZMp5",
  "key12": "3zWAWWbjMRov8EdkBEk6bdDzkEAr6xwWf28emykD4Kh3iH8SCeX7Xpa3W3HB8RQ9zjp3CBfy9J7hqSceju7g356v",
  "key13": "5AppEShV7Lyyp1FhhsVVCAm8gU2R6MtvpgYdhVQBZSSo8FeUKXPsB8QHrmuvDbcTNAmU8CGVaJwWUpJwRg9T9hCa",
  "key14": "2bExMYQ3XVy4YqcWvNZdVzKKuQqNsZq2bGQ86nkvcTJyuJF5BWNy1KJBqsiZKjEuA4oG1BcvUHX9DKu7AybW4dJb",
  "key15": "4GXEa5bNyh4YKrV1rE2PspbFZqBPyZqGi7KcUeX8vPZ8bC2HeBY19EowXmW9wakCy7uurucpr8ciEWS28GDTPEin",
  "key16": "2vu9eKEjkrKTiPFhPbLoj8Xn5QABc6QteTemxrJa1zEQ4RgBn89xGeMXvFhRyoxzgDM2tfyVTyzaRHTgn81DLj7M",
  "key17": "631vooZSL9etBk1UA2ZdB15t54t6WdbvMHNzbdxrmY6grQGocqR46tghgNELGxDgcGtW41DPKPhQqteM9CceLLw",
  "key18": "4JheRKFZ6FFB4FNbHiX7fyfLru3rAPfRXsrnM9FELy68p4LhNS6JjN2YY1AAVV8YDoG1TQdpqJ47ArroKT6QEJML",
  "key19": "5cPhZCVBWakPpkB4Drsp7dGRhLKWDgb4Qobd91W6w29ejy1aaGf6bJParGhDc5HA7PTwmZqjXLYU7Tqfqf5jnp2w",
  "key20": "4zn2fmsh37wu8ha5DC76Rs77yDbS6qPWU6zmGKvizL8Br3BjWajiMyuxrNHPbysYiuAd3quddES9HsEwHmMDeKuc",
  "key21": "3V9C4DY2xMxN3TH7U2NnyABgjNsNvUrLsZoPKh4UUyipejU3s9SXY6tksAiQSXFb7se8ih7r8CzbWhpwvKtEBvxx",
  "key22": "3PA1VsU8P9CtgRC96dftWVk3R7y1HSrZ8WmM5vxSJbSLv67ZWgAZAEofpogRtMbrm5XNcGkPNJNPm15nUUoFtEq9",
  "key23": "4GZCEdJsVokCsasDFVtpkPbNaXsNhVrbaUC5kgir3uM3Lzf1Lj5AJEfRdE8ge3sUu8fuBDJumCsPPKR6T182jyzy",
  "key24": "66F2U2A3NQFPFipeRodyWnvs7A9zBCPapwM61tXkoXsY2qfB5Te9hkn88AGuvppv4DDC63iaNN7C77U2CXEn9noc",
  "key25": "gg6gNNnXmSxv8Fos6WBXSRJA32dCVpvfSM6LncKkvBGSwWLfkdEkH82gRoanidSFDwrst7t1xi4CQDb5JGjdcHe",
  "key26": "3snTCWqFVuvAgeTk3Qfv59GosKpB6n76SxH6WVJW1hZan4wwABFpi8YWo4gyijv42e7xKSF4aLkz1yojd4Tg6WQe",
  "key27": "3eJnYtvmrX58Uw9eyZQRZZj9HuWA6ySKd37eigk4958eMM5N1sWPQpPtq1rG4kgTWtEHF7FtKZY8CfCpbk761P2s",
  "key28": "6V4o6BiEj4emjiCZZ9qmCF1y1UqZwA96tsLUoemwCCCbudnbT6VNdSEUt1gpP6W5uzJndbSQ5uUcWB688N8WtGu",
  "key29": "2aFxUWiDzXbvFFTPC15UkkLuL4GACWDUPRXu3fLT5jEJLvNwZc8UFY7tYYsLiJq4XjkpqeMdkzPVTcUiDZB7LgFr",
  "key30": "3JaARMaq4a9QJznTuBK3AKqy4owEQB4y1rmvu7kESfNpK1XLmsJsAhVYTxVbB9risFn9wJ8RQANXkpxrffqjsVBZ",
  "key31": "u3KitoSoGRMsYJSc4TjNLRPbFhPCv8Cmk3ig3voFfGRgQJCox1dWCEM6Xjrmcb6QLHCmgz4zTNsYqCKyeRQdt25",
  "key32": "21GC27wXNeeXJYFeSnXF9muNDvZxsc95xvjSv4yQj5PWjdFmeEQ2XS73kpfMfHjZ6yBkdDVEeBMhwtEAETqUz8pU",
  "key33": "4X9bsYYNA14Vmokk4z1cFxQXXHyGpQ5sbhMiF2WoE8bhixhqEnQeFFCGbtL8gQBW6LToHVKsd4PtaoqscjvK5iHA",
  "key34": "3zMSCcJjvVWCoPkpWHzjkqpAwkZ9w6LGJh1oAnCGThwnAiUKk9aRqXkXwAWQrvxsAvy4UAGB8Yr8nsdK1cVhzPAm",
  "key35": "5gcg4cLXVF1m7JTMkzCTT8kaa1myfTRKDnSD7vMudkUnXHMw2XNvaDo1ZuUHwHCzxax9sbUrRqYKk8MQ8CMMxvFb",
  "key36": "44X2puRnbGWDaQLvmUEtvSbDfDK6BnPPDAvX9a1EdeeHnCGyJVDMWNfBgxZFWR97uE87EZzBQkH6nNjkPFMRsTd1",
  "key37": "45wVdwNFt851iJpsZ3gCEzyso5pn8VvZ5fkuDpEGDdGEnpFCNTLcPij6VHuf3Hd79mktewxjo8L1gNnX3n1A5ss9",
  "key38": "PgfWqjFeHgiyENtdTn2MzGrm5EmjTVQMnouJiSVvM3x9Ut9eMKqXkbFgPryXLfK6pbzqBM3pGAKkh8Pm4XNvVYC",
  "key39": "3UEx5Lh77HUTLMyaJdSu21uMVPDaVvw9HodtPxYpVQPuWYx6RrH7WmPxa4B8Kvdjg7k4H9jeJFoJ88SorZ5qzEiz",
  "key40": "XncGhpPx1EXXefUJe5LzzJp8MKr3EZ27WtaVmXKiaKrfTh9FU8Uyn7W7hWZUdEzkeGrEAd2BVm7mmSF8k5StcPq",
  "key41": "3q2cxXcCV87wKiHWwgWG6ovSLHRMdkYU2wq64CiEHp5aenj9Frq1GwT99EnLcxmE5UBXa2m4WtVjL8YC2no1t8cK",
  "key42": "HxJqiJnUdjvFpiBBbJoLyGGAmUQPMy9WvfwptVB7LgbpEuV66omJKzwYokjVSdWfHN3kjzctJiEECA597fCPKYW",
  "key43": "5sm6CP1xAb8KpUkJUj98t4eb2hM8mhXdMHHoVBU4oMojmVdHGcN77Vya7zbyY5H575xi1jaStbnngGmKCZ7tak1A"
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
