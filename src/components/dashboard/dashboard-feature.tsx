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
    "Ni4anUZkHLcF2asSyXoS12XMk9pp2He5gwFuMH1sR72innP36MM3FvgFruioxjDsKo3RcfYFppyDcTF1DcNVtom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLtBrWbZrfyP5xSsG7biPTTvBAtfP8oXUNSVpmBWf3W5wNLzRmdvg6KBYy2nC5KKyz5Kc6AwSmXzAifZYMxNGgk",
  "key1": "2JWSieFXTTuddCzUqmJbM3f2eaXY8jsWFRAGL3MdTxDEdvD4L7CWs6KLJiRAtSdX2MJ8sGg73S9oqpnJZjpg3iqe",
  "key2": "7s8S4CbfBFaXLFCFx5ChaK3gNw7DZtuuwC4k7bRYETnYRZTJpeAU5xHkQ3iWihvopikcZYAVzLbhZRtxic7mKDg",
  "key3": "3fvJdkgi6cdezKPaKZAzjX3m9kfPS2DuGvvnU4aqmExMmxLCwZPts5R54TbD1JiajDwVPXcgE7Uxmb5uHEpE88Ku",
  "key4": "3hw6kLziZsFzHqMqvZPHbgn5jxEdmkiQA5thLoDhgjQsU43bxR7UcfoaSWm8pnnpoxky6CZCBrdBQgJ3ZD6m1m5q",
  "key5": "KDSmBTEkKaaoXtnmbcyQ9mEETEYztq769mskNB8cr6iCD2AmHA7keLATUS2fUMMUn8V48uGVcr7jp5h7QURi2oi",
  "key6": "7FCdiKLfK52JdTENE8QhzuZYYJzNnK4koQCXC5vzhz2du8r9LrdgZFPqDBbKz6toiKUKWdVBUZiEyMq2ZY8M3EC",
  "key7": "4szc4ScJPzeLL6AiDwSDai5hnzmLUiN1Y5AY73p3zYAtHRJaQmvafhcVhjENFyQDnbdcTjnG2jxinKRn83nNb17s",
  "key8": "5QowSFMKjv7MmKR9T5MnZsLJDdjNg1juUsdt9vGvJXquEWNAkd9Fp3x5EAAT2VC3DMdDWyXfr8J8tkhBvX47EJAA",
  "key9": "5CWUkPFB64d7E6WMJJHCjPHbUs1r7XbPa6VtcVDN5XenhaBpj4wVYF2Y3xFPfR3Ao5Svug27LbmSKQQvbfi2hSXs",
  "key10": "4nAiN4Vh1vum3brwT45d5jjeQr3P5B4dD6JkhDdwaHxhhKpKRTFAt7KbSMHZdP8meH9BikwUALcpa17eKMTiaUuj",
  "key11": "VhphUg1tJAZ9Gzs2z7qaxbMqrCfRkcm5XFbPA7mveYJKiYUtbSxik6ihCeGZYkVH761HEARcLpFtanuD1ZKM8o9",
  "key12": "4JAe94v2nVjwh8LSwqzTtBhFUpuvzeC7Eiiwmvh6VzKWYu7Pc6RqTxyr2m35d4LSd4DMuen1xcVnSt8wNPjMbqqF",
  "key13": "3A8x2Nk92To7XQkqMQCzeMnAvbxYq7YQQU2Lbath3uWLaCKn6YDKBgJAW4rrkUFEPGoK9Cnmhkv9hCR5WZ6XB7CB",
  "key14": "5nnfVTs3pMdmowyJMgynaamqcgSJhuuhTxbhsV4CspzJtnbYJUa9uTKaDq86VCw125AMgGP9nSm9avkkJF7LvF5B",
  "key15": "5uzQuU9YeBC16dTF3SJpdBBXU8K1YMBmCgcW4qwQcqLyXZdopYksADNkCoCPze6Q78LrLhh9YHfDN2R7g88s7HVL",
  "key16": "4WcxCPskkbcm61XAHDbYXYDsAch4Af4ZsRFDCMDp8hSiF2YVM1sQkzuSH59Kxa8YBwayWCpr3RiNXSizyACynnpv",
  "key17": "22Ke3TWQipESWF3JLWM4DWm44txDknJEq8KMgwrcrRN5zEouK3X2bk6xJaQ8aKwM2VJYCChmP24hrt4Sib18RyYS",
  "key18": "2FG3uLJ3uLpshAzWjrHX5XUMWgtT3iiud7bD81JkDeT1JbuAzku6fuDApx48j2B2E7McfLuDLfErVb6HndF5LvCB",
  "key19": "48dFBjkAisD7kLjFXkRynL2cAwcs7eUUftrnZtW7gaw5mFsJvKua7VwCFzQ4nmmeciFzNQiT7f6GRMDVWFqCdokg",
  "key20": "3grsjCYQy6fMwiJKreERb5JkP6xFkTun1sXzQfska3YucXHFAk8WkDxM81YH2gefHEETVo3TnJiDAnkDWiDpmcx1",
  "key21": "5VZUkFxgfevRnFDQpuT9vkmCHbYsvFE5XNYqdW6i34WrAPzY7SX7srKuawgd865RmDQA9DF8nrz2CK4abRwVNuFZ",
  "key22": "5B7LCvE1zFMFQaL6fPN6RyET9GLGpqTALzkCxaLg6g2zPwUoNV1FYVytree59im8g58CiH1cu5FPX5bw58v8wEZp",
  "key23": "DkcKjjxbLGuWrtU5n23cA6oQCCVK7iPZTBfZv8F8nwkVXt45fk7Axb4jszMqme7NJpNgtLNAHHuypmedQyou9LM",
  "key24": "5DgMGRnYFBbt7q3cQWt4XKvxPrg4cBDF9Tgib2RcUfQrZQPFpL3Ep1vJZsVX168SxHAWRLjjBtMCnZgynY1gdoxw",
  "key25": "3QeyGUq2LinQyjDJxpqpz8RkyXq5CTeBQNYeTFQzZstkaLR7zjN6RKyUnhX6FDmFTq5XesMwR4qsvXaTphYxXPCJ",
  "key26": "2RDb8GQuSEMrebZH6Q6F6CUiadJwPxGftV332JD8KKYHKv6X6T8kMK6rmX9VkmfCA8VfWK5mjTFfkm6BPRYbob36",
  "key27": "54jcRciaHCXyc3s8zeXxSKwydFUQEm2QxLbYUdwczBRJX4D1VuPEdKVeTnoTiHCEdBezsy2qZW3TJyCsDoHJi9vE",
  "key28": "4iyMiLtDUmexsvPrtcVPujppuGpe1WJd59ioq65cppv4WoewVw48Hkampq5vWhU2V61hQtC9gVnYuiceS1SyxrnZ",
  "key29": "fpxw6u34L7SbJERDmXqcjQkcXWwYJRJxjoqfypjiGNWZAQHpjhE5J453DfLxFxvAKseCqVawLbR1gh681Zg8jKo",
  "key30": "4MsvA4TS3TJU8tRYGQEFjZhm8MUVQW2eZzzjZeu6gkDs2T1GExps7n5ouSxtXQfz2urxM7PVKg3Kf9jH165xrd6D",
  "key31": "22kPXijS12y4zLTSp3pSv8SJQwiGjfFMtXDoXAEJCB2cUcELyNtASV2YPvyqHpcUyQVGY5WZJhCDyq8UWHtW84UN",
  "key32": "2JJkbVBnkP3UF5o7hXygjgz7FffR9ouJsgj9PnVJEVQ1GA3uQGDhHmdSqhMmb6FkbYXUB4NQjqVrF7B4jB1WctaE",
  "key33": "66opPLwCPDJ82MKd4HN2TJWbQAkDXrR6YVPEvWFt1izTzmnV7HNj8NZ3GW53gdDiaFTCwqQ9rgmP6pvp4t6fadzc",
  "key34": "3iGFCzUvDy2aJ7YCZuuDxdpEEftNJDZ4hATDXaAJ5dyAu5NAPk9qnx2x46zc48FTToaoKiJ4SATx4Wd2ivbRTfNZ",
  "key35": "5QqGU1pirXLXdYBf9qj3TqYzuQjinGtEYMT29UXNhCYSEBf6B7k63zAWjpDfFq9EScFyXQPuzRsCCv5F339cdFZ1",
  "key36": "4mrxudouH9x4xX5GayWYguyXc3KaemhLf2ZZ3is5bSYxXMiGWNvWcDFtGSmAqitGHjSjqkvzaMq6zKqCW9tzpJPP",
  "key37": "3cdrr9rNySLFeX93ghjqYkMwPzPpfQ9NaGC2a8EbEN3ThKdbRVqriygjDFov5HJ5vgRQdHMYTGgtTbAdJvrRLwa2",
  "key38": "5PBxaUYkv3rsZtFtjUTqSDSk23zQx5z64XFzVaFKx74fkKVBov9jKzyzPM4YxxV1VE36jdcsfrAhQCfrfv699Qd6",
  "key39": "4gdpb8qhMFZ7PLxQWbmYEPbQ72xUpH4Juc7UeWgCnEYGW3W8U7Rw6j3wPAteYecrk2JYVMjQZTToh56GJQ4Sx1v"
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
