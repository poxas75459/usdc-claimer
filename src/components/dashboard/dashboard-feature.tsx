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
    "4EbvcDrq91ZGNpHxvADTh48VBo4gHNvzbj6mSaqXJSGBXRXbdafd29r7traoFoYzpuAbR4WEjkFodNpi7Pv8XhSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z4rdnrfVxiXj7Zb4X6fJ8EFJGLLfuVmCE243MLAVjdqZyiZWKtVbu9uVnTgDtbFYBhPoXL1LpMQsqyxCCciVQAW",
  "key1": "5igPWi9bQvzMutKHSoYp32QQfz3YN4chUqjTQmJpvNdEL6yvTiouFDGmvAUh9WQXnTNWh8YmM9fJ3cMPpmmpG1CE",
  "key2": "4NPEjqNiFvEtJ4VNgG9MxKbppw7mCnf3HbXN1naXxATcSBTmNtRjmBnT7vo9akQWKzVz1agpcSJdeQYHpjqpRSMf",
  "key3": "5tXfsjnSjYHgjC5SQq1pqMx6VBSiM68W1fwHv1KApTh2QWsUQxA7EcBebQusWfnqvgPhW1nZ8UHHUP2JU4gPKBnM",
  "key4": "FrHKGkx7o8uFKGmthhvApnPyU7QuPT7He9er51aDN515rJxFtLKSdff7T8fCxB1cF7Ya3HQnboaVi71bscUstbU",
  "key5": "22wmRWVXb973FWtoUAXuskUBnHoCtSsxRRrTwAn4oCWnsMP11AoqYWijJivbQgxaBwSRvB6AL8oSwVEARukSCV21",
  "key6": "3W3jJZHnxHjoa7UgM8sqrsj6DEUKK6gVrGB6LFGAZ5fvqYogh2zNaatA6nUnAseDy5YvND8K877bm42P4Jhh2Z2N",
  "key7": "2vZeLaHuZ3fxr32Xt6cebiNw3LixWURpJ9utAdVmDmh1FTzzqqmXwUEnXYYeTGKihePyHSs4rUCZ8LTdoaXwv8tm",
  "key8": "38qwXzh2vvpYqeN7HeKWByo8Qfjg1ixs2Z125BQZcef63ySy8Vn5FganbJ4t9nuGPemuxB14AtoLNZ9cNbsQv3a4",
  "key9": "2uWNzpBeydLd3aUK8toqedJ9AhcPkhSmtGoKW43pw43qDshhMwFqdqBDuKDCnsv2QSnMpx1sSNBR4hLFpvfvZLk9",
  "key10": "5sM4TDSoFa8X4tWtvpjBfNKUXB7bg3wVw2KwwfM6zwDhmiQFERXzes2Pp31R2nW9HgYX7pmg9uTorfDXJ2cF3MKg",
  "key11": "2gJ4SxTp51Cb1fL3fWb22aopXJM2GDRAcVATHpomXfgEmdPF5Z4kiPzNHrL6QntntJFWsrdsxKy81W8CaorBX6G4",
  "key12": "336zkbdQC9Sr4gPpWnx3CpWKgX4w7MDa9vbXX9zpmRmvYEuNMZRbDncfdFYbEpmKjJJ3U75wFFeavkfBvjZDLJX4",
  "key13": "bmpKjDbTcRtH52RXArinufeMeKckjeLc88Mj8kC6VwoGy1d4AUrZEevKuvwSiUZLwyzUgC1bcKKwnA568vFrgpo",
  "key14": "3N62cH59b2F9q69kSh4NTzCGX67AFDfFSadcvcAnEzeJ8cizggpLumFUnPsYPcUBfXzHFSbCV4NWnskpeFK93cn5",
  "key15": "5D1c37f9omQMJwhbKPoRByLwzXjzJ5pf4FwYSwtVLTbYExnYL6YWU46iDrPKS6q3PRXkefmkwTWxHvRnkMUvgDkJ",
  "key16": "4QwxSxpqdMu4myPZ5otP2SPteNF9oz1QhT8LDjHfW8aFSp1qtEnU3vJNn4eMwRuWJPjmUa25HUm6QKsPRZzeyA6p",
  "key17": "JYNaqXrYwLNjfhh3ia8PZwgNUy4zv9ePs16hnrkBRm69wERh1rYxUzejeLxPfyYSnct7xUsoK3bTMQ4G9PB4rac",
  "key18": "4piE65izYTfDJTe2pA6VuxxGcCm3SqqK6osz9CVaw1gf4EjL4i9VzzU2edjdgQr1tMDYEqQHqxE9kyDtaovWQsih",
  "key19": "3cX83XF9ciXP75vscC5zzakCtzxUDhUxvKjCZwKcVCBN2RkkvTsRtpi16jz4eVAQJNwgVgeGzR7XykDvqesuh7u5",
  "key20": "542x8YhQq1HNNUxXgNzbGRtKjzdSvpKLtSi8g8wYpSZnnCAG3JBN8pBwpCUzohWjHVnPmC45mpG2XHu3JJXmzmQx",
  "key21": "5TEuE12fZptniiN2LGZqwxMG6C8PFETnoyXxCLc2xFU6iubZzfVjV4aqoKABq24NQqKBEfWk58QEZRafvizZtBjK",
  "key22": "2Z27G5ne32qAEAx65QhkXgieqfmHxeRSiC8NqcTd9YHzzM6cBehmjd2T3DeFpDHuMC38Sbk7kKGkkVAfTqLCjg73",
  "key23": "3SBq4V4vvSiSsfEm3kXXUfGm81LK9oNQNcEeMA9Xa3jM4fsMmqfLzQfs8DU4o15DJ8Smaiu6jfsKG58d6hCDPDdV",
  "key24": "hZ78dAYRzfavETqLDcHHVv2vDochoH8zqxKvubfqrzttwzVeTMXNaYnAvSbFJMfzr1aswNPiWwyxEEkBNDRfeUX",
  "key25": "m1jGtSqhWXU4z2uJaK7FShZznDzERFtzz7vzWWy2u1mdNKtgfTpccsBJDdA5x2yHG9iGcJzTyKoARssh1yRj7bN",
  "key26": "5nKqV1YD5MwhsvNQKzYCi7F6WceGCGt2mCM8VKcqPFQMvgfunvYqjjBp72oC528dDYcNXfSKU8GfT8vycPyGwCT3",
  "key27": "fsDgjjRTZZVyYpWe3Y39immoEE4MvfFDZFsUanSDgP9GRipRLzKLcd9vncJDM81q6jCHH9SB15qAkMgB3KyhSR7",
  "key28": "43CiM8fL6NWBNYwEuF69A7P9CB9kmFbXC1otXp6m9rZstkAndEjjurSNfrr2N6otVr4QhTYeHSzjRhPMAMmr9Dju",
  "key29": "2XeYABRjTBiM61EbFHJpBkC34qHUwoHKGrKerMyawnJfxc9PuPaw4q5HPxqFfo6jexHgt5Z2JjATr7oceJjGC2Yb",
  "key30": "32mZcvsFCcjw6MYrEeg1nv85Tgy1NYpwDZJBVP3jTCUBt4TpmGDGKanMB9NUGftdDS3HR9y6x56mr4rXStXNpEso",
  "key31": "464WMT49FHS2KDRLHdxFS9bC4kxr7ag7qxVYaZuMyb26ooJZ2ojYBKa6pxczq6MLvHZoYrY1BcQryyiBginMvqM8",
  "key32": "4ZuDVooZ9wHrkdXddQefTuE2KcKEyAvnDBaexZKr88MYJKRCAxeChLm4XxPS5MdTbR4Zuy5kQcWe4VoseK4RkGK5",
  "key33": "52iWYK3f4ncTb2kr7Bf8E3vUhcWd2ogb9KzYA5xXQfuS3yF4yBvVDnsBEFyqXQhr7TCEeuvkU4tyHa1pAn6bTQgo",
  "key34": "4sghUYRfAKp2RUYgNKGVQpDhesekmffWdEeDYhVhzgwhXPg3f9ECWmKm4E3osSHGUHQXSufNVTRdtrDw24q8Guu8",
  "key35": "5c5b31Xxr3EfJcA8Pmbsk5k3vzcz3gh5RYSKLpERwdiBnK22nrUjQMFVsRXEHDexXPAxroiZHKAniJyLHNCPxgGW",
  "key36": "2DLJEyQ8sQPknH4JWEP18rucfqL4kTnt1gT3paVuSWiEFLaWVjJucPE2VJXcgP1FMpPy6gfjqKSiU6vFgmU9aYsm"
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
