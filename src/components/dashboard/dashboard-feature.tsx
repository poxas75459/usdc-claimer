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
    "67opCidYWYEqmD7rsMnrVrJDkqdTzRs67f7R5u7ww6HNWYRGK7tCgKWfafG4BrkSVMXNs4yVgajdzqqhzDuLfMxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2bamyZpXhRyNNATU7reTAbFY3n1cMTMetH3KTCtNEx1m5ATVwPhtdJ6iw6zKjc95G646BQNEHHPo2NUtFRRNLe",
  "key1": "3MrqsP11GxNSH4wj3bCnbQ1B8nCcz9WCkuvfju8LCPYeFQqaFW9F4iaaeragsbTKwbY8GB7oNKE1gej7VtbRWW5d",
  "key2": "5Rd74kPdnEvJ5xThwFAuM2Ytn32H3EDBTWMs19Zr4gLW7cEwDtfN1AxWppKQ6KBcpyyPHo3B78fgVvhaHSAisqRD",
  "key3": "5dkS1kEDzF2jNoP9Gf1NhdheuvFNdk2BJu37vXv9U9mD9AT5RP2rx8aH9dCRNsRssD8fWVn4km331JsRYsF1gXf8",
  "key4": "5PQqmH93ypNVXPyooenMNqbz1ci7SweXZG1umAcRq5kAVGixrzK6NdMgVjrQMbe7jSYFteYnBMcVxW5Qv4owwegv",
  "key5": "F6a9JG9RAhAumVvk1mdbdFWKx9MipQqN4SqhsZnLFmypyUuA1ZZvoZjAKhCFVYbUzGYCUawhXUcqXwTt5HSCMMB",
  "key6": "2tHczFhernS6djSWUix2JyF2qE1UgVcG8vvrE2GwzXupxMT1ZfVy2Y7oT4mcPACbXsYyqiv86Um97XxLTdmVTFy3",
  "key7": "3sCiLf6GXKZZQiV99Cb1tccuPa6bgPgt9xu7f2g4sABkPt2WSA7o6EnnCpa5tb9v1JDjyde3CLgzDqDPJowS9NP3",
  "key8": "4cbeMyvxTjbEJX4r7vY4jrmKQep7zYhxdafCGPtz9VthpuxpqQr4J16up4SpgZmYmvRT1aPH2d6af5MZ8nmxDAMm",
  "key9": "3WrvVdV8kQWC5uYjGYCnVNZFMrBggVWpxt2xfhsRZtRvpDX21cj8bQLw8KhAhVSrAUNHdZBCQzeatR5quURpvXm2",
  "key10": "4tEWr8Z5L3AmVMY4qnGcPGCsbK8kvTDo1si1mEZjvj2wQo18PpdXPXj9Nhpn5FPKS4nQGe4zqAYqnbmeTSfSJ7wn",
  "key11": "3Z8bRB9wphKZiMM9efmGYZEV1FodZWjhbe7J6dUp4XWGRhtemzVdrAcrGeRchGRyex6Xg9CeT7jZg2SX7aMGFCVJ",
  "key12": "4G1jBYBghBtC5hrk3eCszsQd2h99gq47aUVnwoNu6c5BYrVAWtY8gqpxnNovV7LgSUiozvKrvchsXW7JkLpDXvuq",
  "key13": "hUmPF89Q6zEyjUbCXQsBcQxygNKBdSMNevPzVp34Z84ekm4wYRg1zMjjh4j2Bkhqws8GnfdMvykAkidBvKtSRpQ",
  "key14": "2QQ365DUd6uALPywfQFkFUASrYFjmRuZ6VpgvYy2RYguzsZiFB7gJwrxNCetirbndPgMBTGgfrpyYXsf765DAbAo",
  "key15": "3jAZzgCzdzaLt6ewgtN6cZVvAU7RCeTfZHYoVXkYjjdT1e9ix9QMPHLeESJjCG9bMyEyJJjV8VbjDccVB5SX4dd5",
  "key16": "4AgAo8Jz6hG4fW49Pns3dCVhTgWJKncjMTU91JBviwZsge9VjcdHgTsJV7TRMmdDoz4Zs4rNfbCjzHw7J6b8Axf9",
  "key17": "5Dega9ikacfG8oYbt1bFKjzYWM8jB3DaE5d3qYC6MMKxL2LPUvi1bffutCpFBn7NxMESaNszVh15X4a1BKRHfZmz",
  "key18": "5EX4ukePZXUgPHLdH9fBWVmRVRDd7AwuZpRsvAKBcrwEyE1qt72qfBz1fjLEtouVsBto4kzhzBjj6A6ZSVqQkY5F",
  "key19": "3hUFc4mQo3ouKKbNJk6dv4Wp8DtxSAsBxpBrbt2MDahsRKe7R5QEr5Dsbzi7QsS1tM7MLNAWQpCV57C1Vn4VAZQV",
  "key20": "25gzyxiy4Xqb8PG6ctkZDhR2XwE9UjLr7iYFyVtBzWmqsucGCATc56uzfV5CN29Xe5K4EEKW7JraBNawHnFy64ap",
  "key21": "4KziYEciM2FByJ77k4Xny5vnbmNEzmZYfbSd1AU9FFq1QmWQLDuFQXkiRmdjDrTsPc3Gj4PrJGmTbhi4tcYyvMZJ",
  "key22": "3uUFsVX5ggMryv4DD2TtWDLDiPaVCfLXBjF2CPwbDoVZFvSJut8GKUdEjvCN5GzPv3SgVvE5uxRUHvt1Y7FVCtEi",
  "key23": "2p6H4pHxKWL1YSzRxwRwtiKS9cMtATxc27vYa4nNTHnEgchr3u5BSWzZRrSCW6aTqjZtzz7QvjHLTMRknAjm5MMA",
  "key24": "4KigEP8zQG49tR1MwCQVQtWetChbxNLmWqe4GXdZTF9qapxq7kHEHZSf8DYXcVfcjcyxX7UiwJ8wBdHGLLjGT2Ae",
  "key25": "2h7RZ8zhh4W6CNMYhy1ccQkUqRzqLWt9DVerWGHAVcJsWHH1kWMHiH9BLYGEqs8KM7deJ7CXts7Kp8jRaYQCpaho",
  "key26": "2JCZRdD8s3fhj5Vz1T2jEUNT9wkBAApuCKvyKqLsoYRPKE3x6vAzkHiEisrkKfMvN4Km7qWJamUcrKi5VpvteJ5b",
  "key27": "3gNkvtVSr7Lebsg6Ep6xWZtkJSwa9LK7uhsZ6DBbVFXdRtwaHrHhCpTqyoBxpme96Qzb3V9tZSTVP39FMbW3Dzgd",
  "key28": "2HJcQcypep5Mg1u7WZVMKgFcgeCUbgUD2YefL7AFNpoTP4iYA5tBNjfv5z3FatbR72HLw5zbHoWcGrgFCBPiK2ri",
  "key29": "3zZQziA865szL4jP54bVZG84DPSMfyEiagDPfkYAB5qtiQfM7VABwgsvg8PyJMMDALtTrB2mfREVivCpXSVE5RjN",
  "key30": "5wqX5GTPUd2EHTXxyDwf2TTzxcBBrpR8kaxJRQYWKbdYdyJynC3VCXB5UiJCJVHxZMjaBREvTgfuxtHZ8EuPD72o",
  "key31": "5vNT9x9bMRhhr3Qkej34J14f3gyCpuUQcEvjtPV8BFve337jKno9ZoL7zMmaqtfDhjm3RbWK17RtACRjE9c1hJew",
  "key32": "5Jv3LoevmBKSManaNjSag8NTPqY3qgXunZAkuWuyCvwopTDP43u1dKkt2iVzpkqnrzSQm9cH11S4d1QEChgrCcnQ",
  "key33": "gCrjYRW7nCctwSvbMjjRtxKPN4fK52TQMReTbq8McGa81YVhEcaC4bQsZM8bMyRdDvPMqFFdwtRUZV1XZqSYTSf",
  "key34": "25ixM54JXPquGZaxeS76nWY5VbmMBjD9H6YUwYjiqnZjL2mZt1rGgdfTnpdkUcS5XF1zrc7ZrU5XyUGtVe6Kf2f4",
  "key35": "36HJERigoTYGswvhxMwUfBz6x1aMt6h6j3bwHqb5VEuERhRVQGwCivoRJ2LLKe9B5UYMwnzstB5bN8vmCmY9rGJ5",
  "key36": "62iDEjAfv6f3LyfrpUR4MTJhpjGAvknvBhW1AFLq8AsczkQWgh88HyyFeaEcZuKo2oJxfZFhWgxCQFhYUz3UAmpK",
  "key37": "65BnfmEG8iwPiJZANFU5newcoRvgFagg5RQorrL2fYq6K8592vY6kKDTAyANNG7LNmN68nHZVAAusQc1ZuuD1XAK",
  "key38": "28tbwYUM3qe1PtbRF2ereZGbDR9kDxpYPxMqJVehL7BhbKBXr2aJvQKgpMwDYms8f7WsY9fb4qGB3SBYKTUadr9x",
  "key39": "auD2ze5HHeD6mBSr2sgMefh82BpoQfr7tJc8xKmkgpSDh3y3M8FsFLjNb6ZwJUmfz9H1NLRCEuSop4fmB4m2gqv",
  "key40": "545npyAiiN4SPX3si4gYDi8GtxQByonLF2hPiByGJGH1VuaF3hUPXwkagDfuqsX7d69MJfdGXxL74ar7HeHQerKj",
  "key41": "3FYPe2y3f9oFAYB7Rfg6FFtVadf5i3JbyEijrSBhUR7dbufqfKFDXP11CXc3NddsyeaFAdgYDyShCGEuhkgCREG7",
  "key42": "42U7vgtmWuJwN974ybh5YxpXvGSTLq6fnfBTcxXrMEK1HTy9LydtfHhfDRXyh9mVqsUznwLKDf6rFJ55EcH6DmGJ",
  "key43": "4rvgtdxRvHW88F6TPRYi9rTCUHAJdePXbbKxaXPCnvBLLPdqfXTK1ggAD7yHuzcYYN7EmCCu2SwECMGaLeP26hTM",
  "key44": "5vtdEUpftEMYg9nSw9iQS9j9t2J2rJB5JCBZZ3XrRemH5kULF5vhPBs2qvCfiUsfiZJdPJhapK3Tx9jKkdHqeRVX",
  "key45": "4iAzmTifCRz1ReKx41ED1tJGaZn1eyTxthCdPEucKyGMSSiyzsnjtBbchK4j2vPYxP1f3G1B6L7Z3HaHhQVHEfdv",
  "key46": "UgbXe4xmYE6JR8G2RbXsm725JNUHuFKHnzbcdxXpWVDFgAx4bsQ8SeUdbggckZQmpYTpGYxdcmhCG7vY7Ueqw1z",
  "key47": "5gYfUxCiPWPdcFxqQc4iHChcUmkYjoGHChs2mrxCiXQ1RWJm2zGCkbHaUxvLrMNYUgMxU43SXAwMUceBAXT9pewW",
  "key48": "rhjFxLa3kbcDZ8Djkc2rDrrxucZs1pkKMS7ZbAo5vY7sWp4YofYxVjrYtLGmoSUrPPMhGt1jbqUgkH6h92i735F"
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
