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
    "3w93PfebYVErySgynSubm1gTEhkqYczsD4icA2KjXPvVdYnaemPCfHWhpWse3Jx49uCAz1HPo8nwu7ydyvaW4693"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLA3VUAp8c2U8cj5j8WSc29SctkPUMCA52bcnqw8bxNtiJDYopQRCwg9XKunJDJ5TAzki2Zb7iqTU4G8DGZEENY",
  "key1": "22Hpog6FFFWdD2fzn8Ud9xjanZzgAZXJ5rM88F2PmdJ8ACXRAicz5H5VWk4aHmKH8piwJpZixpvkqg1TKAWxTNqS",
  "key2": "5yCnReuFwhBEgk1gaajnNDWdmyD9A9Wq1xaYJ7JmqoXovynz5KCAqa35UApJE6nXxrX37URFLP6fdw8CLN7vJHsu",
  "key3": "2iwe2WBz7oskcQzDT2bbAVUXkbnB2WWrdkF6oRhYYEv1rJHL9jvo2fH2nXJkHp5SSxCKk6EypddURmrBkmTzU4kV",
  "key4": "5ZoKyj5CeMsxgX7RhtfKWE2eLa5K9452LmLJWw5R1wWv2rFWHjh3TCbJZwzn2t6adUueLAkcLs9fvpNMXZE8c1Dj",
  "key5": "4B6a1ZPWUJheon4x5soCJNd4169tZAhMqeRqgDzZhHGpTani8on6wA3dFAzauYHzkAufHdbAtZ9srYqM3GnFLnxk",
  "key6": "4tL4o9zegUZkVrrgfutj9C8rfhUvqbPhfPicpZoQhSevTyJ1UoWkUaX1tGgtwoLwh37BaNA5skbYWouUtpDujbud",
  "key7": "4WZrT3aDB9r5ydWkcKx2fe918precKVKWFX2HTNXZQHw86EriVMNf3W8H5hG5t1EvfZKhq8wYwiWcf4SdLePAubB",
  "key8": "4Xf6G32bTPFEod1y9rsJq6jH7igMDxiJPTGY6Q6wJjYVQHA6hYY5eWabym3nyMfjPcXfXnXVcKmx9SBSVmGHSzJS",
  "key9": "2Lom6pjS4KU8R8i5r3WuecX5KkEnyKESu9UD2FfJjnRcqUnz6jc5VMrS1xrfhhPRRbAgNYCxdTT1PfpUiPUmX7Rf",
  "key10": "5KQnR5yTRJBPTYCFb3EnRHSXQ1zAS644GjQTDFbYNcNM7eP4Wbsemnm8xkE7rfxVKXvggeRW5fbSozNEQvZDkdAk",
  "key11": "GVcmNj7VYqFdEY4GU8FfDAU9TD25SKoWEvawgGi58P6kWodPQHhDamxqR3Br8AhgastEzaqrHQLSvyRAz3GZsv5",
  "key12": "5pZu3KVkjHo8EbrRYXL8hBwnmgWPXJphjiKeXbRbAXYRPtNjnf5vWDD5sg5V5HRXk8EfbmHCtXGyywPcG2YVfCsY",
  "key13": "AodD5o1gCfUPAorheWMjEqumhemucwUGztXbzuJdy9BWD3ZVpVJuY1ZfC61s8Foc9HQd8MTzT73mbrb4LL1RRcQ",
  "key14": "4XYKj255bk4rsVqVTwEykY2hSQfcRVEWSAZ27Xt2JAtfVXAXLmxHnNtX7nkPKkmTB45ezqFHFThFFJJS2TrUNy1R",
  "key15": "4KRH6WDoa1xNmZJvLT9HKR8qy6gybRerLxevmwgQrb7r1E63Bbo3dKN9QkGR5ZyjfQLXtQ6WWSEJSTWz7r7jrdoU",
  "key16": "2V5JCU4SCANA41b1dG8eDWJ35wMxELkYtncezcfxPxiR9CaS4zeC3xKY28bt4ioZfYnZeLn7AN3RCmBtMQZLc4G4",
  "key17": "5Zzdq7KmZZRYmKMxT4hunqnEUeBMpThiY7CGVidRzPeX7dvHtKWsqXeVCiiNduQ8AKqENCKpvHWvN4zGYHCW34Yd",
  "key18": "5nrHsGz3rFaE5pFCFUNZwe3QJXXVrHja4FnPQ3s4cEeYmdbWtBRPUtHfAK5fre5gTAHcYDYP39c8pToFhZPfrCkr",
  "key19": "3FXZJqHrK2azfQzb4sU7DLfbZCzKqdJCahteBnJk8J3NTpSyoszNcTpZDArdnyyKUG4hMuisd2nsGt69SatK96ra",
  "key20": "2suf4CShVDQTZw2wryu9kFbfGkJqXsyKQ8bSSgHk5eiWmX9FCs1Lp2WBk8S5MDAqg3EKZXD89Q2dH9vACGfnBJJn",
  "key21": "2PTTs4qby2xSrYofeAM8G2nvxd3xLUReLCKY9MfuAs9Unorgjhk46F1xnxGjvazxS86C8YobkR15m3igRvszBWyo",
  "key22": "U76Ak2pk32Ya4Wu3YMH8ukVUkB83Dx48YTJLW6vhm77XVy211jJNYxJQt6PPTdgoiFz82hRZcFFXe1p62SMK4Dd",
  "key23": "xN8zMGa4yy6L3GBnYdyCZnrjg7gaJrLCVK13CKbYsFjKcPJGhUZYbmfU9kNvygZHPJtr93YosDE8gBz9jDAiVh9",
  "key24": "4UuLE3v1hG3d4wCeVTsGMEXp7kQS4j6nPGi5J2LuHENA7DR7XirbJjQYHstFwHWBSmQFUh4AC4Y1ruBpmExvircX",
  "key25": "5ABTEG1pWLTrxgGd7WP3pQC61V8UD6qaUQZjvikjSaLPJdvC4t8WqQW7nLb9p6tbG2HKrzSH88s5WUcAf43r49MS",
  "key26": "1gBzoKx8ruSQLofrDWhU1BwwRe6VLAhUkf7Ns5kLqK6DNZkbSsyuj5q1wuZMKy67vPehzmuKD6DnvdAZVC7izi8",
  "key27": "h7G3wNmYBZT6q7xx3iioM2HNJEC71dsPGsibwtECqjsgfngBm6dmkxYqPd51xyBrmyU6ERtUvbM2HMixE8gd7Lb",
  "key28": "3SrbkcFPthrR24SgCEy9TFPoPKBRkSAurRyFaT5KFfdtV59nTB8M9U2hmp4hiEtXLXLRZr4M9fMp1ikMV1N7gLck",
  "key29": "2GgvVweqLF6mVBVKNrHnNCTgRCJorHnRNt4vQpeAdrqMxpCrG5VTTJJEWdnFDLJMwyB6n2cP8eqcxNmuRUzUBgoi",
  "key30": "65GL34h9p8iDkWKwEkaPo9z3Sn4ZKavdp52tTpDYg3qNzxv1XpfohVTrtT6nrUBBhixCSmdiP4zEACyShoMcHdc3",
  "key31": "wuVHDWqkZ9DSKTW57WPFuCYHdH8R5gSrzkzdcu9QEjw7JbCQv6L4GfG2snHByHcVcXSC4vmo4MeWEK7AWk4ttpf",
  "key32": "5oSJNbUe3MEmn4fJhKNXE5DT6jANXdbUFkQbnDLKXVNAoQN5euJDwgguXyPiXUQNtX5WAsydAXXncMFUiVpeYYsL",
  "key33": "2bbTt7UDwi5rwFRapRMY6sZtV53GftXb57vHf8UCB4v2BYknmb4eYR3rVowtPuceGVioUSSJHPb2eAd73XUWiiJn",
  "key34": "48ine9S1QmQYAH8AmHfzkEMii7QGSgd7861t2QDdcXtED2mTppKMm1TgRA3vT2voadD3xSTuRjAHmm5Ek87utPnj",
  "key35": "22KgoPnWkkwYVTVYR1TXauRCHM2vrhXMtD333PvgabqmQQ2j9aVDw2TEpZZszgL6eRbyzDfkAQrZmyMUugoZBAEU",
  "key36": "5m9E5Nphdv2QTRHLiPvoXtG1VsAs48mbtxW84FBcHAf9ACK58C9vLe2FQbm3SH3LHczbpFY9MBU86hXzDwCsGAsa",
  "key37": "3bEiqmJqHqybx9zKvcHz6vx5668t4U1Rr9XNiyJfjy9ygNAS7DWpUVGa2gWaXePY2E28Udp2pfDQm5qJ4ds66mSF",
  "key38": "2MeEGddmz5rtUB6hoj9GRc99hsv4yFNVUPTeezyWXHCEB8SnkoneCeZynUhCGFA8cyZDZoygAPzeDZdUzZgoCbuB",
  "key39": "3CLv5jDQxm4FuwrW81pcxoxpMtJQLSGnoV4uSFhXum6GQUhSYfQCWeW6t39mGLzxCZdaPAmwVFA34biwUL8cjmUy"
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
