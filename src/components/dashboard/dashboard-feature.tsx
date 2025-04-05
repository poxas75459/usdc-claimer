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
    "52g1zrBX17Y2jiktF11xFWhCaoHSu9ZoeySLoecgfQ2vhX88Nea62JcuBSCL2MPYNrtco2XwD8Ab4iSPNWdXZbSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJW39WJQro3G5MrK15S6WV3Uw2pnF2PxtF6Vn5UTpJ1VFfk82LhUcPGYdj3EBgWzDEKH5Wc1C8AeWyospkFocSx",
  "key1": "2JL5bAwptN36vq3s1GdkSt1mrZqkmMKyiT5dQgxNcBQuvFZZ4Df6dWm7sKtCGmBXdPiM4dsYQhLygBkKpXQcrVLg",
  "key2": "5UQr3nHGZoY4vihjsrXyGxAWd5jyceqgh1sqQZEMjY6YiFo35ogDPygf4wYMqCo19Fr74NzSafJFQj1CaNhg4nJu",
  "key3": "52DpC1wz8RMdwNUC8fMkV3FgocewizPUEp8YqftB4ezDoms9rrtLUHipSCJ9US2iM5gYAsTbyJQJ9LxeNTBg8qkQ",
  "key4": "3kYVRuovTJMEKyajC8XV5eYRGrnpz9Aca7oDfRn2vmWGtVMumyPZxSxpi4mLMtQ7uPz5Zv8YekwbUWugxN1LodiJ",
  "key5": "5HQwQyqjbfCMtAqvU8TD6bmVwdjtKPrzTDPtbvkwP97hZJZxGsMjaddooU8z7oR77q7ov3WLmPxnc8vCQwsJKVVj",
  "key6": "2zXQsq5hM8s2MA3t6qi3xvvzu7atL7AW6M5Ym5mwDZUEWUZXvY6UXXT94e49AboSDhoXWDUvm9iGHmEa8K34YvuJ",
  "key7": "561ptdqhkaQjKu12EbAA4SvMJT3V4v1DeTcQLbmqM3WCqHoJfGqgXNjKRWB8Sx7w8Ur54PBEKCyDWPqNzYBjY36i",
  "key8": "2MuAF86N5ZgV3JriKytzWuMGBUbtmQts9aQy5twhfvVfj4vLMv469JCFSpPfQ8rr7saMgqFp3fXfH9XwHXeCymXM",
  "key9": "5s2Fpa2A7K2ireKWnowHiz6GRWaXXQk9tc4snK9jUzhGRFd56LUJ7VntGRBdhrCyCctJhBiCuavehzfGBijYQJec",
  "key10": "2AwVGwsD3C2nFfcWFZBSr7qSgVWdmJZBtnVAse9PzfHGq4qCXm5yXYn49saQPf7YVHuExKQ74ayHKXhWTDur8kHd",
  "key11": "629CSmAvjVMJFhgjuhkNw8XwWCVHH5MUK9o3oXDZLBjbnodPtrevNhWFpdesZo8BngQitgdwL699GS5Eb64rkxnH",
  "key12": "5fyQb5D7mbbr8JpD1UDPbZJVQA5LC7fUBDjMmKoi1iYgqSVTNfEwQsGv59CvYrn4AfStX2bd8hzZ2k156L7rX89j",
  "key13": "2VH8A6MzHXfGmXGAvFSzUuu5Qu3kweQ4HmRg3T2N2Y4Ju1jJkcht9kLo639FYi2HuQN9EHn3TpXTPM4ePVDwQhPc",
  "key14": "4xdEGp9TDh2vXvk2Bo5pSVMJFBHLZPBRXF5vN1b6abRuKEXYsJmVuEk4iBAbiGfvsghcH8HMMGzD4VmGh4z5cmin",
  "key15": "5bri3LsenkAzba447QFrFtRCawCvsjA1WC9uoWHNqAt3Z78grioj6AwrZXrtAMoSFGpS3CBBNU4c5K7nH59fEZ6Y",
  "key16": "4mMzT3TiHh4vehoDwBBvpEtRXoN45PKzU9kshjkfTrj47WHCLafLWnyrJP7HK3zZ6f7ErQzUEfvuNgNZ6DhLCrCP",
  "key17": "28PeDfhWiJkVRMrweg6cpYjsDhE2F878Xmc8CLq7s9nBw9mqGyq7iZp3rjizP4r5BxQDrX9pDmdGJYkYPu1ZcEdV",
  "key18": "5b4CxJ9JoqapTEe5BBLawX3zAEDCF4hC9MSAW38R43qVbwZyhAmwQWpBD85hiVz8jgKUzGiZxhNMhchHfQxLXmAM",
  "key19": "KQp6bcky8bFbJRq3cL2wmGwtwJygejyFcTcBSaNntzfcgXAWgbqnRSfov59iZrnXQfW4Zc8twoC7M4H5ookfC5o",
  "key20": "kseZNjG9dACxHNw1pRW8ANWsBYi36MTqzbWWvbjD3p9a8fTvkZZi5NXqCCfNxLtD2W3njvL4cyVAnw6GyG6qZBP",
  "key21": "3M3itUjQaZ4PCLzc45ifif8j8fcuLoyrFvSxfEqi5443CBz29ktSf1gHATkp32S5t8HFBcKUM5D8thVT9sbbhG5z",
  "key22": "fQxfDD6HtAEaHbGBJBxvsjCoWSzfmugqoU3Mdm53AnioxHziTNkMAKXNgn3WUX4h3PcJzegxyxNBB9S2zXZxHpp",
  "key23": "3QX4tW9BSimxa7wbtZ53xPKJsFQQug2GQvLbTB774GMS926NgjZhRxxjRxpvZBfLag27qifBLB81LpNys3WUsnP6",
  "key24": "1P9yc2ADQJbmB5ohbzBTb4ESvRmKHf8mVrXeRZknJjSdgkm5qAx3kHnRy16VWicvbkxgyezYrzDorh2rGata24T",
  "key25": "48uQhff9Xsq8k9vtqgdz4kC5mdgjEE867AjToQpj1BUjmtWD2ZWApeEh5GeWoSkWHXHpf2MZ5fQA4tRWNpwzHBja",
  "key26": "65t96tJqDqAdozEUjZYRneXK4mV7AxXVi1KLPn1aw8w6UxuUqRhDdtg3Xqx2ap91Py1JLMaMzyg5K5F1NHCNMHiP",
  "key27": "bAX6pRMxitRLw3A3ZhN6675GtdkMvsQ3Sryc81McxNQ8jC4vvS1LAnPQRhm7KxzTGw9VdDncBAqwGJ2jtSJGJHp",
  "key28": "4vSFaQUCxKMesDzEVwhdY4PoVai4NkJMsv3m5GJJaeDCUdAK2VR97kaoDnN2z2FFEa9upUMuzrkwcb7F4Ruw1t6V",
  "key29": "3SQdQjvS4CVeomnikHGLFiE34wXMa1NzUzAyawAR9iUrh5aXyxg4R1Wo8picqyoyVvzhWaC4XP85D7STxCXs9z9L",
  "key30": "4F4Q1SMoM6HkbXyMD7ZbQ2w96qZnharWwo94XvAvSu7CeWmLuvVKSCnQNqBeVTonbjxX6JQmQh1UTsSd7rxAS3qd",
  "key31": "3RoMNcAt4G9EjFqHgyngTXKkPzDsBuSFZa1ooQqx35WtAr4xJpu76JtDhjiFarTSEAAKTg23UdUPvL5SXPviqwcb",
  "key32": "4BSCxWkxYxqJhGokJZHsaMRD9XyUCCuRLkZ4vQBbCtLf6eQLCeKZMfzaQXWno974NL1uAXWh1nTjFJg3twUjDEAy",
  "key33": "4a3r2PuQWJDLwZdfXMEqvihkg9ooYfPG7teSBT29pNXsUcW68PeXLqzTugssCLEDXXp5oqZ3exXGF8zuej3GzmGN"
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
