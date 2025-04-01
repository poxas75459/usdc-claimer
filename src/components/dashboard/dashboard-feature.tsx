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
    "TRiLfoWRqyJtDyMNJpE7cp9YjARty7AAYNnv1giorhQ8xs6ZyV7USMY641NXGKhAjtXtPqGhAHLmsy8hBZKbESK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bEZy4FoVgUBVNVTLGRwkzXRrZuXR7MK3FgZrFoXQdqmqDcKtrHMn3hLfXRzc9WdDWwqreH9JCSL4BVV9ik1Aaoz",
  "key1": "RkeiVowQX9EFHDbfStvGKyWtPEGqrdLrqMB3mqiM3ZfNT1L4xqKsNd7EP8GKuDNeAkZJtKaZuVvV8n7JELvo3q1",
  "key2": "2ggBV3YE8aiUpgrzQFDraArFPJFdN8Qrs3yaWpn4zjFNQLySfzKb7v5VKDdHFFYgZthqx7RkzeanNk51hpV3uugh",
  "key3": "X4qM41usCxSFo3iGFdcaVftTYgYukqnYotSWnxrccQwgPvTt1XuFLBZrRwbTRPPFP5HqfPYy6XsGSMikYYcS3Hf",
  "key4": "4sBg31uSD988JaFttSjUBsUkQaZqxffd1Qw4koiweUN8X8Bo1VitmVhF1o1BqKJ7T5GrG2Zpf5NC18Y9a7FDeBRo",
  "key5": "5L3XUTFRa3rpNpf2TCRcjmd2dBXmgJBHKjLhyx42enYPVmkJCxmvPKYZTKGT8rnDrWiirQfu7Z4w4CSgLehtDRVR",
  "key6": "3VDkGwbqhysaYk7hSKZY6d4HTii3h6DzekvUEAz95d4BTv1dQNaUj4TJcPuxf3sj7E6okudb7sNdjRwZcW4mUDVt",
  "key7": "3GzeShwKhJqySaWmTP4tzQdW7soNGVp1827dMCUHWrfN4qzktefQghFu7smRVXACdgJDcPZuSQZE5dGGigHCijN1",
  "key8": "2SzqK2LvgdHF8YM9Vofe9exNxveQ74TvEVPcpdjmnJ6Cpp1yjQbqVZpvj1LMPuU7Ytu5zMZxcsLvx8CGyHf926G2",
  "key9": "4vaV7TifFjDHtnnssmNReXJixGDyQP6UKjDErJ6uEZrKve5bzzwxVfuyiWCWJu6pL1JsSzZSfTqC1X4Fa3QvZSpT",
  "key10": "3fMJXicz4bFuXoJHpyXAaMk3ZT62ZLAGDaW329WtoUFjsUpdgYmmSeKkgkCQ4RiT47cGWao4UpxE6wugi7za6TRd",
  "key11": "2i7sRggpKt38SSpkgLxqfWWr5g5HseRWhunHNzc2Xe8tG5UtgGcEa6bQPL9TLLQKS3ErJ2okJZc9FaSzVaUfLzmf",
  "key12": "4prtX4Q2yFz1RMMaRSYzMfsbqN78GHEAP98r9A8TnWLF84rbtgSzrTM2aY2Vqx2iwwCYrXatkFgN3E6bSD6oye9C",
  "key13": "46cgKZdwxN86pqFiytx5mSjdANxAqVV6FT6LKc2qBKk41Qqi25p4kM3QVj8un26SAY6dYD8Bphe77ad9GXa6z1zA",
  "key14": "2iVkJWjHTUdj2PSBAuevWbcUyMhJajjWJW1JEGtGJ8D2zDE2y7k5H4xPrx8opGHMMqyEQcMA2FP33mQP8uMZnbtj",
  "key15": "CpEkfhL2EnfjT7bEicHS4Ba2KnW7QR4MhmPbXzSWUZKeZK3AhEahyP4Tj2CXYZ4cwkfbMEazPa8aWs8xX7DSGAv",
  "key16": "5zL4CpjcUowoq9g6hzQwbiJQHtTBbLJ3bHbQpV4HEPWEsSaPbZBwcggDtUh9Fa9V2mWrDjrx4VzeBw9ZAbPHuvao",
  "key17": "2ATJ9Z84PwAgSEXQwEt9HCJqkQTZfwpbnRs1vPo4rngxhDbYes6XujHzaPxiALUgnNbL2A9nNpz4iothjKVbwC3T",
  "key18": "5mToEoN9wtUWou7gRjtcSHfgH7FQ893566f2ErEhjaZYGQA5qqRahBUFxrqJMwEo9531QcEMpEqn5x8uDMcL1Mvp",
  "key19": "3vBCcuBMJynbbw5r8UC1j4b9B3jHTJfjqt5fuH5uoFA5v7yHYr7wD4RGW8PPSzR8bo4oiJnN4SAM8jabhmcuizit",
  "key20": "5h9KqKFwyyc27BBYQgnqZJT1BefPwPUDmUYDVzyaKTJUPKycECQMLAMGLSr19hR7gYntaEhFmfZowoZS5HpMYYL1",
  "key21": "5QhrjXtgSkJ9sk3D4aCr6YNejf23kTegMCowEPbTqzv5hESZw32Xbne4Au4tYGifNJnJHCC1VaxZLUJumTf2eQp",
  "key22": "4QzJRkRGKyzH5FUssF4y6cxoJD2QpsdQzMfEYTNeL9Ui1343TNf83foHujQtxpBi6Z495YN8Tb45bD95siQdaDC8",
  "key23": "3MgXrvUmL4aQkaiUfnkT9n7JbH5NLrxxZwjnMk34BLU3g3wQG5CLH2HPPESF7U13oKPNqKXuFWQ1y2Ze6hP62HNd",
  "key24": "2noRuGTSpgtGF7hW1e4u1w9Nnr2xE3AXLdZpAQ6M1BPbweXU4ypuLzQJGRoPuReCAxErLWCnG8cS5a8MjtPZf6GK",
  "key25": "tNvT8SzQLtuCjUJac2HqEWP67pvLRyoFjatFYAFtJesntqEhScgGTvD6j64J88sojt6N5srDNiSs8pw49HnXiaZ",
  "key26": "56tCAcvjWLQ9FSnkn4BnbjEqLxjyY6Tx8vNk6K297yJkgJe8Y7FgEWczsUGn7BEcDKUjv8ryg5kNrGhKhUDpb8hN",
  "key27": "3wzAC3UXeKnwDoTgeMoaTzJVfPVWFbhhXWFw9pqMzzRzC1gmJSfbhgedYXUXHK6GRkvhEyB9n5ATFwPeAGdoissr",
  "key28": "3ZvAkJhdAi6yo88vxD6udyTpMsyEJGGjx8nV5YV9xMAaLqgMoK6nNKNPBiNygZZjAwDzHwMR4dKSh7zym5cZYk3R",
  "key29": "27PLRG3K6Gv6zNNMbzyXEGCYcXtmtJ2F81eMeYptVUtpxbpjg39uuFbApGELZKMphBPfS3u9i4PDxFWc59Ypi6se",
  "key30": "4hbKJA3AJE2gYyexuRksFmsHgrgfPfRZHwkdJsLEaZJ21XQQMnGmQhP7q4yETatnuxpdG5wKN14jCdg3RVw25vjA",
  "key31": "43XWsvC6BYZLF16BgwjKQ9XGKVV4TyUQZKGgk5Ah6a3wETee3Pw6LXTBwB5yxFeRnW3Z33sxpNewEFCfuG344kWN",
  "key32": "4fxAfa2cCgdW1KmKQtpfCLkxTh8Vret3mQvn6VsNNmkQQnSMHykcZDxadqcBG1HB9WhKPmgDsh1CGXAhRVJzC8V5",
  "key33": "C2XpcjG68cUvE3hWuhu3msqwoVuLaVW6ezXnsdVe5LtSaPJT51hyFL7JEiqodcnALCX8tpy4cqL1ayZK4z1F1v3",
  "key34": "4mDoQwiHT1fjYwqnLUxZG4EYugEtzyKNTaSfD3CNUfUamFnX3PwuoiQ9w47fXJd1YQumW2GJ8QG46hy2sWvviGCJ",
  "key35": "52UhrUS5bwCXbqWJUyPDuQrRyKSKD9iVrzmMUDn7yVxaudPbcG62JSoLexXwQhBVRRAipPByi69RH4pKXu13tbPQ",
  "key36": "3m7Jj3GJELz7unid2Ck7YUM9GdziVbSk4Zzf8orJCziFLNxvBcxZbSoX2gBKhypRYaBr9mRWRrj8dwDZJ6SPS7mM",
  "key37": "3NDhx7arcYsMUCCmzsDwvYQdj1c4czWSfBCLYYfRSXru7z8NuR6WsfuSFhCBUCZaw3q65NXCsQ9Ji3JkVsJdKigL",
  "key38": "49CxEDZv7fsgZ5LKjZJHg4eYC5kiR3pgKyZPeRS3sYEhCpZB2m72LefNqUqWxNhRQHLcaaXJVdkXApcnxsWH17Mr",
  "key39": "3uEVb7qhXmyUQAC2mP7vXgVtANADDPhXQuwERm14VZjQ4bCkbLunVvVY125QuwcdyXEwRy1XVuwiZT7bpc8VUG7Z"
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
