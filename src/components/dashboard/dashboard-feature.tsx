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
    "2atEHJbWt7vWuXcyUVFqQPUM8kXkxyo7VEELtS6a9S95gSnbhMRLyNkSYeiAyAP9uJNmBpYsa9uSgXLA8UFUmSmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657SHjJt7ANuBjJbqoopkuSb6PMuD12rkJPaGDN6krZWKXuEaYV3UeqnaweauFyRb1DZ2YtDBnE4tjkSrTyZ7d8e",
  "key1": "2neqeuS3G9AcZg2CUdRoc6NMhfUKwFf1wintDNvYAUJVu1yME6zXmrc8K6CJHeip9qx1tFN4jM6JLB3Ls28qo3u9",
  "key2": "3WMr15Va1n2vBy7zpTsvn3UnkBk26r4dJ5phu1nTnEjh1zBjL3gQiXCnAUTWrqAQV2dEAEALnde2DJrZLfE767Pk",
  "key3": "T8uhQSTMsLSGJEpomF5SyK5q6Zh6wu1SGTnjYHRVuLgCfaRmDJoCNXpV3BKhAgMhLr4C5mZPWFmopX3yYPEYx51",
  "key4": "5GDWTTZdMXsrp5cZQ2Cn7we7G2sLfZ5GZhch2qwD9NsgQNCCRQ1Wj71h6jgn9L47RkmNGR1t2SnkzS6bdfD8Q3ar",
  "key5": "4VySXQTSW2xpUg55kbCZw2bdYg6A1kPoTNqtPxp2LpimLoErpQ5hz6o5tx3VfBsjcnmog5bbyLjfu7hPKGsif66V",
  "key6": "22AzmEeRtcKVJXCPvpJQrXW2aVjQHQDaXRBuwCStt91yBGcztxXAhHYZzGVnqYh4wBcrx6zG3SjJAX8tK3D3B3HY",
  "key7": "4z9K4E3E7m4kjsJp7hgGUjmcUhtJHqUYN1NVuTnuEF7o8nQKFYL5Egiy8u3ivXfaVWHh1gqKqn5VAowPeeVStjRS",
  "key8": "5NwEUdWa4F2U5vpSyFeWvTrX3VsJPjBKzjVQANSGVZzWpUAB3495k6hFXmMj2im6JPgRgX8GX5uyR8T2wbQANQr8",
  "key9": "hbUQUAUYVt4m4gSjKNzCruK7kS2vX4YvUm84z61ef5GHhqaqS1CcU1nZPCNEH24Fqcbk9QELWHiXzpCUSWrgSnu",
  "key10": "4rbNHUb1FaDGNpBTRgoV8i77Yr7cJm578WYfPF6J4wh8Ws9QipGxumfaviXwM1jyjTwoVAR2Vf4jjXH57RsEVCae",
  "key11": "2Xcd3fZbQJ2cEiFaJkGSJBvyTTXs9SMVUwcxWc1ZhcNc1HHLhhqhavszDccyFhgTnabaNbMSDi5WPwn5mpYvbBa2",
  "key12": "3g5iXFNTCsQqyLNh2GhVEyzCs9Y2gPjVqCDwY19C12QmWbN24anM6FwyXfy5Peo4nisN6LCjc47N3wP8uEXpFLdt",
  "key13": "4W57NDPntnA4TE2NHrxSme2f2ekqKZPSXnx2kMUwHJj1p9CPcJ6nZ4vm9AEpbaRS8SbXcaHvMGRCg92aEkKScnYQ",
  "key14": "4DXt6y8G3b9ouSm9Vk4BZ6UJQx4gknKvvpRX8WUUSj5N4Q1Q7qC61rRmjf55NuDdmvUiL1uLZrhGKKuoRBHdkWu6",
  "key15": "4bUMSJjyhw8YJ8wEbfJrifTBkMRLDGXCnxmsRrcKfXjH9tcrDaFiLeyLZaTMPaj5FSFUME8usE8tw8jr7g5BFRYQ",
  "key16": "3mLA7MJRrc4V3vcevWYAc11jfVyxwnocQ1JGiLaFMpk1vt8FUfztiEtXEN6EixtosuRLz54A5uxXkWDM4QKiV2gc",
  "key17": "8mtwQh1mf1Zw9pr4ZdaLh3WHZdFXDSrCtReyDvXKmr92csSCF2tYCgGUtDRxDUmeEjZneTtGN1Be7VtATd1xsG8",
  "key18": "2U3bqPC2sUMNJqTwSk54DkMSEUYZnyVKz1LK6GxY8H1Gsz2qmNNhA8Kp8T3jSZeY2N3hQxWHWVijt3Gg8NRXfZzy",
  "key19": "AgeqFXNZcp2ePAaqaA2ALeVMkPfYnwMsAJSwLtbwnaLgJkKTs8SWMrveaZWh1Z3Dp2hYY6nJrPZfRDUYTjQF2ww",
  "key20": "4bZmyc8rLxkE2FTchDZ59qyMZZmT5t6zayHy33oQRhvvRcxMJGfXJTzsBSkrKi5FUG3ZLnZFZgiZvdxkCBYbWPEW",
  "key21": "3wN5vKNJP9Ti3erk7mQhF8SAnWcmUi6P3nrN2M1yxABhjzzTTkZox7wXPDk9jk3fxprq1dkKinpNpHFgcf5sm8oA",
  "key22": "2wWE1NJLpzWEf4zPVASCHNEftS5XtqgfsagSL7kTyv5kiTwRq1wANaVyGjcDZGqzr4zuyA8b1EDKFwiLJfc3k81w",
  "key23": "2RFJTbvoAS5yqU16AAnoVw4QnQQBeiViM2dUrKeqyfzDvCU9N4eY363ENnX4JXSDZ9FgueT5m4abH86RYGmEYSGf",
  "key24": "5Yw1U5eiHAWKBLepFFE9qFmEHiErsWPNpi8JNrsHkFnuKtFRPGLQ7xJEGMF32So68r2ic11H5uKXhSdc85Ngufqi",
  "key25": "McgrfGcVWmYuDwbsjLCzPKEwbfRRnwMZFag6u6vxnJzf2aMb8x12gLbarKbUYU1hL3ocx8HjW7Lo9wMwFXpnTm1",
  "key26": "3q3WjM7PePV69X3LGtJDafysx7NTnD9wpUmqunX5BNum9mU8SU76uEfeBJ9DRufjhtJ5FtuPNvgEfTqPpxLTtzM4",
  "key27": "2GPBcXyhXY9SnhAjutEVDfnEaJu5bKvwhqL1dHXLq4uUvvJRBG5FMCDREhZsBkufF8BrMus8rS9drpMG6tzB2sBs",
  "key28": "44EfanJJwsQBPZR1H3Viqh42gFxcMGZVmhBXdbor6n3nVWCXexD5vigkq8xZBJihNrQ9GhXAKRrxyi9c8b2XreH4",
  "key29": "4pr2rZkxSfufwoHLG1tpHNnHyTXgc13qbnXRZXQNPbQCfYp23pXp47CKEaxEJLksT1HmnAHobJosoQBMQnNMW41Q",
  "key30": "4DkkgAbggvJREXYxM5VYQBM9W8xVT6RnLEMqC7w7ebkWL7UFJnZsJ235TsostG72hau3NV3Qv7ApokATSSYgKv9j",
  "key31": "2vWrJPB6TRYEAS5QcwuRwJzpf55HTAm6cyPAUQqScQpYoWNqy1ZBUfAD7yGR6CgyytRH2PBLK1DDpJDmBGehb9df",
  "key32": "2RoQijySuwdjBgy7eGyboX9axUhjDmmf2HFT1X79ZtkhAW1Sku2bdwZHaLkbeLbAyqwjKhh3vd21HMz2A3vTucYX",
  "key33": "5e4kypudszjVCrk2KMihefjCqMwtzpSfJj7Dzv5fPiTXBY2qGMBiUBHpYCGP4gxg3cMxP9ubZ2hW9x8r5HUZbngq",
  "key34": "C5QjXu1bT7teHrc5jFXWuKXP2qfQgmpMM2xAVvqL3a87hsdFViXjPu3ju841eNbBQZw5dZkhoSKxev7XuvkZFew",
  "key35": "5P9NxrWHbp5c7sLxDACPYyquKTUVpufS7Bf2Vj2TvZvx7jEseaw2Ykix39bJxa21wzBQMATBQgtymTdypi3AFsgS",
  "key36": "5G8YGsQuK5K3CU8DhtZqLq4w9YeN7QE8PdxCbgU5F3353w3nmoLc8g5FvwSdcsgaTFEKNSRj9eSr8BwevH14EVhC",
  "key37": "4G3DQMfdMhwkVspkwQKq7BKBni9kzGo9hLJT4FNQvW5GZrwnMadbpYKW5D4F15iKb65RFJBs4mf633Wsa8eeFiiv",
  "key38": "543h18Kufs9kzCSs4zyJGzzPR2snGV95j7sSLbhhJNfW6P8gAcoYdjYP2PzVV1qGy2disYrtuMjPvCfPEEYJbZSH"
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
