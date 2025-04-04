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
    "4XeihWujiab8iNoWPQLyDEh4ZAVXJgJZn9V3dcVBgcL19AW7Joyohov8HefuiNofRRST3abFGmHXpgb95BpqDqZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFRWTmmFjstXU22Sk4K5GPAZS2v1zUJqb3NHoZfnJichgSjQL6FEHQP8eX4KAApW9N2naYakxFpY96JhNKVBazU",
  "key1": "3TLGZVM8advoRq7TL9rUZAZ9epjSrFTuEKhzk8NzfiQ1rszjEVzeTvhMtYZuJNKTW7XNBEXSkptVJmGAn172Hb7m",
  "key2": "36dHvgiFm22SzRMwMYT8N1QMUFtWJuSbxnjyzGAcYrusb4U8grBwBZ3TZ4MtWgq8kx51RQj88vKEtLbmeX6zn4gg",
  "key3": "4tyQiPNoYaBFwCEaf2XuxpHT5PhZCveE7JHGJxAJuk37MMp5HYx6r6GAam2jATZqrnLfjZfRpJi3FQyZigEp7xx7",
  "key4": "6PCzXbw2UuX7rpeT67jz2wQrfMnAART4KFe2wdJkc5kfmz5pC4LkdFRHUGXFtj1ASfXyZUZjUExKHmJAXQdxBNu",
  "key5": "4BhA8JL95Y11UscCP35fPh5rL4FTD6ZskRueWYBfV6qLiMYnTZqMEQ2ZUyM2HcbK9AvfaJEAudBuMH2qkSGTAkAD",
  "key6": "4DWQLvPSYQoNuNSj3BbTewxHtHVN7STWQ2E5cLrrHoJU3bFNQnaY77FmeYGYYFHUHyyWisGdA2qRnWYkzEWJxuoL",
  "key7": "47FF7KJvKYLHQPRLX98z9iUdWKD2W22Vyfd4anpxEm94QEuNPNVDWNZ5d6wyznCLQxpUsKh9ifU1rcV8LLHgK9Le",
  "key8": "3DsrHJ1Tux8LVJFuCrMnKWS51zB49Sc5BVZSFwAxsdQgQMi9oWgDzFpNEMweHLsPqvTEz8vJJB7jAsAi3zHvq4RD",
  "key9": "2PrfcVX1GLEPrMcKA6JmkoB1fDFzG1KuDbixY1L9SQKVVDDiBxyghUdtKY857sCfMTjWpaYtfSSLjZ9fdvumt6om",
  "key10": "MQ6bjLg8QtDz9PbvM6a27TebicSTgJCdHUUB8FRQWj6mBcEjF3KEyZKzjZNzPgF9TEutCZJGzPhGh7bjYvtAeAq",
  "key11": "3S1s7zKGvphgLgvbHroynLZx16GuorXWBPWrHyor89wmsPXKaABXKyrrWHT8nhdj1yxYaVVvJoD1nT1F64pg7pii",
  "key12": "2YDba575YiqVhhL64fTZ5gwGiWU5Nt7Ha39GTphHL2gJ7ocz1tWf3ENWhuVM54rbLRhd9gAUtEh2YM3P4GDQqoth",
  "key13": "sCwFbYEWGBHPiYBw7WtVYh67JRK6j2iK9yRUK3qxQ3GVb3VLUtk5i5FA3GHsLrZwgbaXfLunS3jzarTz9SFgp7v",
  "key14": "4R2o2r1BtuksvE3fPPWG3wuuieBT4jPjoefTCG6Pz289Pk3YCYJyjj6KKAhmzKmhMWmNmT3Xrmp7sZATfX7tMxM2",
  "key15": "EZYvBH9K229GK6jEKvt9C5WBnutjJ3QXC1FEvcobcwBze2vHJD1zEuk8g3rr17C3adwdXWAchheqbAfHW4zpxjf",
  "key16": "fLwWPiGWP8mGPaHvNmDYDWQCr7xsB81smVf3TapeSzJ2anKE1cw2GXvk9ytCZMFAfPwKfe2e1rFnVzNToPLa4M9",
  "key17": "omv4goUhXqzmiziHP2jkw8qCLvRhmt3sQXKgHLPiHKz79EXoAjyNGbUUBPtjBTm9a2HSx3gBNzQWxKYqMChwM1W",
  "key18": "7X6hTgDBAj8sEaV56wYNEU6nAQBS4rJT1LsSzRXfvFuJ8FikBqGKKkMocFjFdZZytb48iZd8eRWmMw8UrzjYYv5",
  "key19": "4puvHGDhVBTWDaHQbW322LfyG6nY5cNAqDYo6Bp5XcHfg6b5iCdcn41CT2m75YJuGZBZLYys81kwToY5DVxxVZPh",
  "key20": "4ahwpuB1MTS9roTEpoNVh82DUpsKcbiS3Z4D9qnNL4WVpjt9nYtbNabkCyk6iwWxp5whL4wj7JgZkm4EHGvDU1n5",
  "key21": "gUBzqhtKPogkZFYFAtfNGYuKd6QxLs3T7y6SDQgBjLuEn3iUbdLhimvZBn3jWPBtjP47jRTo6eypLXTRkJqnEiF",
  "key22": "3WFUGG23xUney5MrLagGgiBdkCz64sAFrkMVjqDw7dMC2UAUDUsCVHgYbMqFidGVyXsr8Uf9DAjgkYr9MejfLu9h",
  "key23": "2bvc4MMMiboqFtwYrsLse6BqwQzkWF5r569bJ8VJzGWRGwUFAjoJsGRmLYjDSR7D5Bcy2B9mmxq6e3Ehjx9UQTAU",
  "key24": "4yKyQBh6KfK2pdd5xJSKCVW7kKd3XukSkjDUWCtiCqtgjRcakqvsbNiBe3wBYrZhZ7XqDFF7WbrnuHxbSzCtAV22",
  "key25": "4v7h2yfU6YCgxXtpWCXwWW6NwdgmSyHZFxJUpsedPjggXjAXhRwUDtm7SmjiLEn1HzXNwmiEtQ5w4XBYY95q2c1f",
  "key26": "55YhmJindpss4vVMg3gBWiZv3BqVuvYT84BuZLufYpv59cUJ3ZjuiaSGCJs7mbkv9gMASnFiwfVkPFpNUsvYcc2v",
  "key27": "4Lgk4BhYNct7vAP52NY9ez2WkUKDXoa6QDz2yCcRnWkvHh1DxbU31McMsZ6kDCeHszh4gUNCXfGrDrqwHB4tYr7R",
  "key28": "5CyzaiNnKdGyv32qqNcZHYnLTPyUcaJw5kitc56bvefHRGZZcPjUJx8whBfcuf13Xk4QzF16uBGAitZ2ystQSPxw",
  "key29": "e91fXZRbcbh78NwoatL8bjHX7FeGykvZ9UMaYmx7VJVMiz9RTCrQJhmHWnaehzzPfvZZoKLxmSqUREr6c7M51gk",
  "key30": "4kRxSdvo29s8Los7iyBvoxcyXS54VzQsENiBDaW46bLy1V5q9pNkBSXWmagPHAaJbm9gbD7p8kFsTTj3kxKTmWTj",
  "key31": "5dHifg3iuY4Jf9Bt2N6dZ2KbeaTi8iMBvEFfe36zg2TwjSPHHZGLNvXX2ZruRPkbnm2FRtHQdtU2ca4f9NtGSEp2",
  "key32": "2zRSWQsPahX8y9hto1EdRuCi1fiJSzep3GEXUkujMqfjzkLJiP6fFa7TQJ8NuFfcojUwRog3NMpLLhWtz78tXHjk",
  "key33": "4ASwRpHWv3r6VhzCcEm3SgLP4sLvNGPGRdy8Pcxnga5hHiZM5pL3k3hNNKrKAmp9YAXdKzfsNPQBpMWBPTbtVTvW",
  "key34": "523HsgiDjMwpMgWgQympavBYZL7djXKrdGvTkWYYt4Q7dH5TkP69UcTK6XMnX54VZ4LVKLgCJ6eAiRd9VBuKZ9nG",
  "key35": "4QkCNXKhpoMA3YEDWGiCK1Epq94xsah92BchQocmRCc2vWnu5SRHMxu3votBVvMLF3ohQHD4jajNFbw1YV42pBBK",
  "key36": "5AvrSFavoRaD4sTeLsbAeRps7jnVj9izg3bUU2fN31Ajj8ewfWAefGKxKyU3S79jCyZCExE8xBaCcZmTeFPkhDuA"
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
