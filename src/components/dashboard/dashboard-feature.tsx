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
    "3gaUN8EM1ZC4hy2XV4hRQaw5NTcqpUgB47c6mMA9389xdPGaA1RekFcgSXkem9rjfUDGnH2htMGotuwSQmB1k1Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F7i72AGdZTHLFGvnrqSvJVttSQcahoNW4CxRypJYCL4pTw1NCULHKD5VbY5zN2SSEjhcpXAmoUDPrAE8dKMY1Fs",
  "key1": "33Ts8bMn65JZrHJ4SBf3tkEVj2oRPFDUJ4MYdjCNdYjXZroFMd53Dru6E653HcNsELBwJdmeTEu4YkbqvVYH4kKJ",
  "key2": "4gP7UmmcMDX2MuJoAVHJ7dRyZ9p4GqheV18acHrScC8VavSgD6se9sXGtAfRhkKUnLBcdXV9SDk8a8uZi1LdxNNT",
  "key3": "4EaR2gu1MTJzMZukuYbtBRAwW6pFXboVscrTUg2rMNs3SCwJndDNWCbJstWEidCxbacgRMbWi4J5871FaoJumvKF",
  "key4": "3AmCaG29CzMRAXQX6dt29jkxHFKjWayvGEVFCTddCgzE4HmJsNJvpvHLiJKaMZvvTjLr8Q1HH1jFBNRvTgZxMxnc",
  "key5": "5cPfuJCpMBDmDGSXy49ktkLM5BA2orydDTgjFUJpLUpr28weXcXU3uw2pS13tmmmon33DmqfLJURuo1PFmfCxod9",
  "key6": "kDZgMeBLYSsyxAq1pHZhkx1jUMnkUprct28Hednc6ukd3fkYixu5PGC3McpWWkGFJFgHjWTcmZmehMkdr9zaY2q",
  "key7": "4mhDz5XKrsWxiiwgdwkwgEFvpxzQS8h1Uajwx9QRzd5hzXEmofRiDD5iSZ7G7uohEnbmpXsoQVySoe1wxmuXefro",
  "key8": "4uBfHVwq5pZ4bR4emWyKmGjfxyfz95iwwEZjkCMDzmnMfT1N1SoAVeDQg6pGm3Bh5FvcX1TSLa2dad1JnLcGza2p",
  "key9": "U3G7JTmgu8sayRDueUEPe5v1c4QJtk1cg4Bt5HJub55AiTo3Qa9ELxTDksewJv3dWStVAjF3igC8CGRRSa8EFva",
  "key10": "2tCygfMDyWUZWUcoPXBC3UQb32F6ioCHg6vwKNUt8sRQc2RYi5hDtoBbmnZJ8QfkPF7Aeioi9U2QABs8vTbUTESM",
  "key11": "GfKWnh7ajhhhTV8QSWKaXw6CoD8c1gTDmhrxNuNhxcKBhKEGP9Ew5r75r7sJc727Hk6ddg33DoTKWPizRMsg5wp",
  "key12": "4WrBrVhFRpkzThri6vGjEXJTEoTtu7bJroBAgejQJX2DkwEUD3YMBYrWmJfQyhwGRaBnN4DWRH732dgLfXquTKBG",
  "key13": "3hUQETLSpXvVdwgbM4RMQVd4MroM6VkCNsm3qYav7uqv35AohqZ8dwg9HrdHyyZqodr1SoyfaJ2PodjK4EGitHU5",
  "key14": "3RBJbEimArRFXPCSfGWTaxnUzJfwGmx33eeqbFPWBQoKQCDk5LshdMBJfWoSMYdyth2QgZwv1t3wrvTy5he3MSLP",
  "key15": "11ERS7cLN5tTWUFVAtcZ7FhdvsCdUUpBZQHYfSGSktgQqvDCPajgADv5tomqhrzgnGoPtycMejfDWb7ufzFoZym",
  "key16": "452hGpK6cWN5mC1apVXTHZT3kTP4kpbzVF4DNeEfzW6z6MioqdDs8UEj6XQDyKJQJAYv59YP7AHyTAunsVTfLei9",
  "key17": "eQzrqLnM1uaKT9ekyjRCcxNGAbkNgAGRGeRDuJJCTA1fbm5fsD2BXUm5pqcDxwzhjj7854UeABanBVDmtAhX2yD",
  "key18": "4pisAVsxrUAgzLJn4sitAb6CQv84RgFv3BxGrZhzuPrbqsEN8r8VoxjnvzkEpDUMDL6jvZKZfiKTryjVR2L3UXB4",
  "key19": "3L25vXadt4CQC7Fyyb3KYgqSfR4YMywGD2yAvRmeNaLPYDDqJVtd3n3UQ958FcaVaufqgCyhx7RESZpYavTvwFWJ",
  "key20": "WvHVcWpRpV3cdXZAXeY2oe8KDjq13HQePiMaMAU8DHj7Eyj7XuTSTFzLEr8fmsfydrhCEkHP2mnd77T45vuHdfq",
  "key21": "1KxWZFtLPnYPjR8ghd8ZTjAJwXKSTizUoHWyDA831tB74bqNtdBdes1XUSKLwjCDAzNjpYq4gT34bZkLopEocYH",
  "key22": "TUXdemt3JMv8UizRtiCaUtQZv75T32C5mg87gPYdnm39uR9xm5gRq12bGPVE5bAnTdf6xAUSbREcNkMwk5YT124",
  "key23": "5LBADwSwnaKqMYiTTuEFUvMcnuhXhybB2Fq2iprXoMErdnAQGJ9PEbQcuRarvpNh9yoezWxW8HRwHMvnT88GaSNQ",
  "key24": "4uRU8H6Wc3NEUfogAkDDSRkGAq5HnJP1A67UxArxPxRGw3URjmjqVQzCmJo4we7Go8jHK19Gi8r4MLDFACxqhTDF",
  "key25": "5SKAJ1QJB2Xegx34BnRjUuB2uTiugf4KVcZmdzc1742eaptfSA915h85PUp9WZZgm4RS1oXBAs432VCK5nf725HU",
  "key26": "4xYkELoos2a5yZ6g6pePxcba1yx5CSi4CaSLwaHG3ffVvJJzfLEPwiPMwHyDKEiuDJE3QK7sosH8yQZjBSF2Hhbu",
  "key27": "2Em3T1WYzCNTAzYATLhofJVV7VAGcMsz3dZKmT9CNe9MxuKSyjupTFEAy2ky4LdKT2hxmZyZYPyoi6RBqMsKnLFJ",
  "key28": "2F73PdYZJy1YY8Y51YQgdHs5Bpih58kd8XU2cCW19kKrhxUak9wJMPxvBM2s7ua7ixd4i7ptyoCsNwv7kLncFWGm",
  "key29": "4rDh3qW5FDZLujDAWdGsA3d9LkAzhnYCWH7RqsHWBHFowc9BG1Lx9uwqFjhLD1HmNKbnCvRRMbLFXRbizX58qBSL",
  "key30": "P7wRkC1pho2ZFssLkPvrAP3YWGdx1fvNqVQPvS6FdVq6txFMaSn2tvwATuKyr3ozVMAuDEuTzzm3KTPAJoP8BUH",
  "key31": "czrks3HJSQsfbshEkeoDxDHmtB3ZUqmR34psMcXUKzVNaGHVwe4XpUMeinvdc6BArQHEzNHnvdS3dpw6Pv5ZVFr",
  "key32": "5aHVRcKPxv4W6sPvKq3jrXZTsFuTLEUGqKnFw9Po4jmAh17NYwqWRuzZ6iQ5E21JyKBBhWXXVexnFXyVU9zwj1Si",
  "key33": "3XCqDni3i84LANHCMdsrN3vppz5QbmtcH8kTTjSgzCB6HYv3kyjgJY87sNfx1XME4vTk7dSVxuMyxbfUZ7Nr1MBc",
  "key34": "5XMoRRayDMFRLLXLnhf8z64iE1yRuUxJmxGpWhsZcPwQDrg8kmc8PyTgidAkRoG7U9Bzzp38GKDBpJScfrYk9f1v",
  "key35": "4k3dSb9tYtrdKWyETR1YAxb7v8DA3PgzQeBTWM55eaitKb5HVyjkcMGyYTW2UDtQk735Qer8jQ3DiGDRdVnuswMK",
  "key36": "2vcmbT7KtQGyzCHMHCyTH3wmXm3HNZY5gckp7RoH8uULUGXkAh2HbpDGYF1M5gUTpYMtoF9ZYjpQriTjE2GrJmN2",
  "key37": "48J4NBzfSJekejEqgGNpcd5bxsvgAx7AJukXJZ53T63aLn2ECfNssKajrD7RE5QXhBFjTFqrZHswi2jUmvp9Mruh"
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
