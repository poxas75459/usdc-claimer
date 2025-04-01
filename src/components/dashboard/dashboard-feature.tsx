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
    "BWUZ8P2m3A9Ld9R7FLaXHFfCKciRvhgGNripapVosiN1thS1DVa7xh1B2z65RgC3C8dpmYKTGRGbCWc2mv7NKnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izZvtqUTGdBQ1tLXJZMnyNnjqvcZPECXiYnJnQiGstkqGcFYfChMT2DcHULiFVeLNb2yRWvCHDfbP4sUTouL39t",
  "key1": "2TwC5GDAL33p6LdY587F7ij5mpjWnH3kxFFNALtT3CbB7Hsw3HssC2cMwXQQnCzKsKLJcTotGpPdCmBndsJMhJLx",
  "key2": "3X4e3B86guNH8NQnWBeccPaX1aYeNZWQBVYGJPrjgmm2aGi4T4fPpBYX6aDdgSTWja4u7nJv6SnK2qnpbfJaSiAg",
  "key3": "3vDmRCUaXvATpQuF5uusrxxx5fgZ13Gb1juQ2isBzxrJtPJNeg13uMXQxEQX1jo3tfc1CuwxASvRUEK7kVob2LWi",
  "key4": "wb4pyrQfKgZWXeTsYgxCEfVsELsZzXL41Jsrayk1bpLf44Zorxkmmaqnz8hpiMhbLMCNrV4RKpu5QgjVLWLrdXs",
  "key5": "4SFmtPH6uYF5d4ZgEXTx8DnmA42yfzpxgraYRLCmyL5pL1MS7eF89dmBahZ7jbwbgzLavUFhYaM4KN5ipWsqLqtX",
  "key6": "4whpS1Gu5276La4N8ufseYMpRxdohaeUgEYeBDnBUng8Dzvwc6gYVgBGKqRnepEe9nsXgjFV44idvSuzcy6LeVL1",
  "key7": "2CCW62iDhWdpTADnNLYwJFzgHxvKEKWTP41z7hskgNkf7SEV9jr1u5RXPKuGHPzYK3rYMWWPGDrJgKBXUJhx6K5m",
  "key8": "2xQShU3FKNFVbBNEqPnmzuZqDRoiVRSiYGD58VcBuDi9ZDH4yXbbLhFKmG6uJG3o412rqE52amPttnhdx7g7V6Lj",
  "key9": "auhP5Hy5LeJrZDxRNDv8RAUH8cNGfTUrUmKamyi9nnQ6yUR3wuxc22jZwtJM3R1EKA52HYCd7cNad2sdsTSgMUo",
  "key10": "2VJBwKjeQeahoqcB2MEQHJZ2W9KiKLaoa7kPXVDuosL6E8DY8qXUrHb6rXSU4ukEX668iNZ6rhaPVTt6uQpubXgw",
  "key11": "3APwEYxYtDv13Wtx7ezPHA5t5YstWr1oj8HX5JVJcyGbYC5T1DhzddJfo3NyyMcCnyyoFxsyy4GUY4f3nyaLBd75",
  "key12": "B5xUNC432KKBW7Jjt2hXvVjDt39ogEfoqMH7de2jsyeNzVa72rxutpn9421DiV6AGBTCeivGTwGcFbbEpP8N797",
  "key13": "BrsQ5r2WgSzehuWNSFHVmEsrDFN8VW9JK9BhvaVCcmKW3AJyoM1uikQEnSjVHosK2VAq4owSGBnv4XFzpxf7bcz",
  "key14": "34n3DCgC3v5ySPpDFd7WEhGeGa6G3eZt3fcRMHgBbWitd8xLasHb4xMdvAsRHJeHYtRcg6sdVK8h1kKLEPUWYsMh",
  "key15": "21yHZBGXGAHbNENbvNkQfpK8BX1JLinYb3KregMYaKaNFdjzvGuH6cEvGqTRZ5RP7DRe9L5Dyih52ZUu5Vwu5GBQ",
  "key16": "4j4TbvZR6JfKk2b8ecDGfJW6GbQBe38EkHJ8q5tFwpKZcWKs3xYx9J682VKH7RKhgjetBz64uUjeLxcSXySkf9m9",
  "key17": "4uM8wRQjaNf55vnbxQuWHRZsY4MRSRWiGSdvsrVcXvYKKiunAnTa28G8DQumftgN3cuBwLRxEnieeWcZmCV5owzQ",
  "key18": "66LN66DT8QTxqHYoEUNcJBRgiBCzuuSFuQ83agdgxRq7BVJFs7HJjVj5totqweHd28MPoGMFYa1dx2wNM5c8GGQA",
  "key19": "3bsVLTH7MP7ki3fjubTCqU6rnMvCKZ7nB6oZLBLRorwdW8vi2enLGn69xmppNbJ5c3saeS2VprB6ZGD4v2Q1Gvgx",
  "key20": "3xfEg3ycPRH8un4DauxSDhoJaUB7CtBYfWRHuMF9AUDCLTkZ9Ks31fQbRZXNV7UnXX7JfGnrNqLR7oKSMyT5cf3b",
  "key21": "b1auqVvHZCBJCSZiQaJLYiyZnpyCYxQXCK5KekSaNWHC6sQna29fvEVzY25tahb4AGJgBAJCG58PMZmazFvLW4i",
  "key22": "63HTJgBGKv78ACke6Ge9SiUXiivoPGkdPmxVqVpRHHF2XYZ7Xx86guHCsvFDf2vQL7jriRTyE8zh8URfDL8gCgE1",
  "key23": "3hfWgKs7GAWGfs6QLbgNkfEyS4uPUiqm2aC38rctKKQmEdX45xrMabBt8itTRuVP1ZiZhekLRTbMa4XaG8Xgqm1u",
  "key24": "2tKEXZ5T1Sy5uh7dqnF2XY9vq5g4UmhMS4aSHqZ5yuCAwfabY5VHCQheUfKiiTViGTn9KqzCZDyFfKDTqpjHp6Hz",
  "key25": "2V28nwtFfLSc1EgEG3Cn4orr79MSyhAJ9VaUEzsq2GvRT1gXPwXGsqAn2VDGyqEvBheg463knxJa1aVEst1tQugo",
  "key26": "47aS5rAHtN8bk9XSuMnhN8Rzf45hhDjpgVz2gZg7fi7LEdkok2SZUoxbBU45wb6XiKYtKeXRpjJpCeRhh1pDvJQw",
  "key27": "31MF6kYCe49YzW6STPusg9wAr8NDQy9vPcQpHdrF7hyPafQKssL96KTH1gGUwLS83i74wLVTR51NyTVYkaksvHvt",
  "key28": "29srd9oFry5Mz693ExaBQuYrVJnPVfyYsdwNrXXeKFucPvm1WHqcFratucPvbHCqJuchLya2CGbnAKgyjCymva6X",
  "key29": "2C9wnnr6pKvdQ3QjihZTmrFRNpwjV13eGLySG66FaiDfRfsLD7LGuThHHRJaJiaPGKG2nrgcHA3c7mSNEepcDeY4",
  "key30": "bj2ggjd56rJ41W7uAHLsWA8Efuq4MvoPG7beHjbYpFw7rB2Z5mGqQ5vGquLVV67DeEERhGB2W6YZixmSiG8H8xv",
  "key31": "3PFYkN1S92CuqyoVmAnvmmD4abRupR5gz6AsN5GhaL6PTwhSXHnmHfmeTMMcqYKFrVCLSxqRtS9dqMiyM3uwr8hh",
  "key32": "LisDkvSNgNCguzMabdT7ANtgDbiK6792AvPSetPN3j1TsCeh69DgZECSPSKDqD737n6Ry46caxsHDgr66KY13BJ",
  "key33": "jeVKg1XrPty59Pq8S86hJyg1b3g9j1VQgPCPghYfvMZryq8exZFNxdNnCWT5KpWsnAkMNZw6uD6cfym336iB9kE",
  "key34": "2sMFDeq43M4W5vo1tFrzN7o7oEnu5W3phFvA7Z7Nm7AbscNAsMTLS1XWxtjYxQyzhajMtqiXjCptcxtfb16QV1gd"
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
