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
    "4UdXDpHT3KBMH6SPEATNASzLiztRW6hzW2de6grvAAHS9vbMM1pUjN44aJVtVGvhZkuw7BGYCzDTuiBhP1NfzZbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYVNJkNQsfodB1x7aQAAdtb8nGjZz2kRqHxALbD6V8u8rkUvX1j4TgdgvGuwrrsmtBAXmNHV1JtJELE6VWU8KB8",
  "key1": "3HgmfZ6Be5YBrJqDNheR81NdVA1qLHeTeqZiYuFmsUdsT242sNy7sf7zszYo6ANTGBGGcwGgQzxQBxxQRUyX6NKZ",
  "key2": "4WX7zFkc1NuiNT9eRjTq5azkDJMP4YtRPiehUomEGPmE18GKni6tSk5eun45T5HPk2KUFwGx6YJaKiovuSz1fs8n",
  "key3": "3E9Le9osXriqrkxiryWcW5ewc38MK9t1Pz7RUQfXpLhyXk4cRXDvDRzJDStmyhkEyK4hzQ8yrMxd8qnBaofCMREr",
  "key4": "3PnYiNQEMFmF9aYnR36GifCFCyZu1xbDVXdwoF38YMBKBeeenWE5378SnUUYfPLeT1LumFbirVx6QtFLsZJLFFiS",
  "key5": "65tXLR9a3wvZaoeaqmLbsHFteZk5UAytyFQq2uQGeechQJTKLmc6shRtnQ3k4Dfy348t9tAdQPY11Uc4i66MTYzB",
  "key6": "61WFdEW1ia367bmUvV6Vmd39SsikXAfJqpNEuvTKZ86dNwy2xTiCKtiYYtigmMMV3VkDufG6ULY4vc6kPp1ThiXq",
  "key7": "3Bq2H4nV2rTNhYMRm9uJW6TyPeKFunuo7ZzJSJf7AMQRCXuEWCeDSkJVR2FZVoXL1L5ZwpkgFPEhqUKhzByjHwJ7",
  "key8": "4ttP8yZLHZqegGwv5vbYcHAQAjsy6CeAHF2UqXkEf8hu3uCjcFg87zQTCFiTnrYFrENHtv6k1yhFeWcJXdkb4tN9",
  "key9": "3aGrhHQo8RwgQvc1BWG5dCM7Tj54eXCRbfbuAaPkbeo7dZR3Tbj8MuvaMnG18sQsZBvy27wPuKwBJxBtkExUSRQe",
  "key10": "5h2XiG1MfwVSemoMfwB8cdbNsnZ7KgBPHHmDqjYXVKzLBkqk4r9XnhwfZeJh7MuGNyhnL1MkL5BYhxy1jmCeEXA9",
  "key11": "52HFpLeDjZE7iqgXpbJPSXH5QeyDT4BxUirxaHvWk6BHTeyrBvefF89srSnQZL5Xb3oc1VYbPGQdFXmYf4juWJUB",
  "key12": "5GdtUQ1i38QpTXVcoPKaGP83VypPEMfei2j8gyaV3C89sdiDPiiDpi4EYaJRty2sEpHXEC1QxzGM3oszBJrjAr5w",
  "key13": "4xG2DHFfJoyEmHKtH55r8PuEuyzLPFvjXqm3HsoBWrymRrfHNFKFAQY9wu6Qf32ZN1JRnudN5zp1cvYDbT89A4N9",
  "key14": "2GYpjEUvHbiFwxWr4RQpP8drauuMvwUcoD7ox5Evhn5WLbNAaFPK3RyptGvEJAA5cCBqxD588jDZ8qFsgtSpByhK",
  "key15": "3BJD5HYeKhhUzRGtgTBQndERgu8tpAc3gZmuJyMXfm189hfdY32YDf8tA5NP7k6VmPj2YhxbpTJeDht68c1Wruy3",
  "key16": "5e5b5WVpapjqrSiLbtEEg9rhRZahXZ3HppiDtkeAMEw2WjLx3cFngKmChzX7JURULouuR9FdX67qKHTsHw1mb56M",
  "key17": "54GjrY826qujdQm8nMQbMmUP9rwaCJzCgXQzCTReECJpPDs8eG2VZrQJ62KTrcEVoPyNEgwHBMqtiq1BkqbifBjx",
  "key18": "4kAn33AcXeC7mCn3k1Zpjm7Cf9AeEghQfadd1BP6rDeu8nXRoe2wf8uJv5hLWQ5YRPkAhfFZGSQWUtwN5QVLRBgW",
  "key19": "4vgwmDnULCX4RZzwn7rDPBnixnVh7TWXobU9UCKPJtnHX2fs9i62QYYRyMkwepvmy477ZvwHV3bAM7W8cuGNZdsu",
  "key20": "CLE94UbsdUcyi6nyxFoK3vPVT1XtFwfLWbQh95rdwyd8Xgj8pmdbzRkgqh9xaA23Up3qShnA4X8WEAMwhmS3FMH",
  "key21": "31JTn3PzxftXikHVe5bZFCYTprv8afzJ3B59D5X1heCXWk9dJPTkCPr4DWGZ51mug5o9ghUjXe6W8hbzYBoSvTZx",
  "key22": "WbcFM9C1FNrYN6mrb27kBFaeXc3GRRVPAGyENK7xUyqGbikzEEHUdjQMtj5mnxmGpYqykPxBERCEikuvrw6Ck7h",
  "key23": "5Lhu9Dm6NViJd1QAH3mtJv2zLDtrSZj7A6Uwa6ZJ1tNsnfVoze9C6Nbp3698X6GANhRf6JYibGwsNWgf9tVN4fcc",
  "key24": "2qrg9bBrA5R7Lb2TfXH9MoFbXFumxqGXo5toK8m57x5qeNDHgx3kEPnKN6EFYNmQjMPSJ67TaKH2gTqJ1z8jCfCm",
  "key25": "3cqURLCMXDELCS86V8v4cUJFishb7pU6WkAoq1RQV2DcWjXTJpQKwubn1pmzec743ra87XYdfW3smHBNn4XPEMtq",
  "key26": "2TH6BET4PX9owAUbUacWdqwVF9XNWckayK3uvNuEkwWeYsry42Wkaqimki7Q5vWTNHXJvinCDx8qMUMEkcK6WX8k",
  "key27": "3nZ6AZWyziQkQHLCDkdThcqnBuofXWVjL5famvEX2SKP6QNLkb4eNXcQm6RFdMYLqTfpm9ipF2WbKXusMaGQbwJn",
  "key28": "46hLDkVWX94kdLbgYoyBqQoBWnTWQjBpZdNB9zoVjVcdWguKmamPVhtQp7LvkGXgKaFEWsZnRau248rQWhBXubpt",
  "key29": "n27sMGao546UM3efTKkAyZz6TvR37mPhwHeTe8gzjU4HQFNwALdXgidUBkjeRW4UhZirjAYnUffJTRpuUf8fqPe",
  "key30": "2aa51RqUQiqggcpVjUfX6dHYFZWmkBEH2Za4G7niZs2REfUDQgdPkyw7Uw62frjFyVGXdV1qHhbzX8hVNZnVVX6s",
  "key31": "5qoxPXfJ9s1ry6d6HVn3QbivbD8AfrX9xjYDKDMru3RTLPYNcLKXj4gZiYH9Fjaya63Xr5nF3BRnX2HTjFKt7uMw",
  "key32": "4wo65egwyAqQ4aZoqTMQ1NfVQGEuxi8kynypHGc2t4f5GUwgXMWDcXEDp4AujKKDqFHVBRUs7fNYFRVnsXLya2CF",
  "key33": "hG3U2X2noQPzJaoVat155C86Kpq62KF4uUp9PE4UoVxPvJ56d1baS4eRXv64mSJ7vbLquJjhn3AqUHefKCqckYL",
  "key34": "nKFHcW9unXUxtxmxjef8GFtzcm8YDUWy3e43SJWPAS9QxE5nGAdEgxf9gR2uSk1Cp8sb5BN3KosXZZyBgAmr7mS",
  "key35": "ppa48ZUJFDN5hXDs7SmviBtMwmRF97WPSN2YKmmXxkBGxBGR4rerzgCwd5EpcVU2WuFVDNHahn4pFk5jww9BrwP",
  "key36": "2sS6UXMzL41tbceNuCLdCKTCuEJJZ85rudW1coBC5rP3pe4D1o84EYgFALZ4Hp8WVhc5X31SHPq7GH5kNi8L6oiL",
  "key37": "2jpRiGQHSPnjXiXS9QV93Gdpoja9Jqhuye8ViUCaJCej44MyzrD2RfyryNwZuAwAK6dYvLFV6iRwQZvWFYkQFtrc",
  "key38": "5R9r2tto92riqeGW6WB4xcf72Dww1eA5tkPMnj1kMjdVzSfK6c8pTDmZ8Ged7RyefqV2V1ipLUDGuNGwR55pMibW"
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
