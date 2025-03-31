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
    "5PydnPXatAh36AnzyHFGHnDNkz69E9GQojyAZcoFHnQG4LLX3Wy6nznkQFyt37TM25gAT9JxptTcPBYZyxTgqq2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvUmGvTU8PKFsw5kKLncJLGdEnevFis2mppzzjhqFz7YJEnh6KiST6sh9QLQKjaWSneCRTAucYEwL6jEQG9aDKF",
  "key1": "58SU6Dt9tLMMtTpJhi3AvjA2ovZzBxxPh3Mec6rYyXFzrvYJcFRpxqx1zarutN1C64D37aD9eP2W4QFRhesfwm7h",
  "key2": "5P1mvvzvabTwquA6vMpXjYayVusa81GZFFKNiktppR8ycbWJV1YPrDmp2nip4YBaykvWKdSnGs9SVUbf6J1MHK1T",
  "key3": "2QeSGECaGYGZiZGUDUi8zXbc4nFjYyaa9uQxeY8gajWj7MBXLqZs4wBngcD2Vr4GechMZkxKLMttqF1q5HXwdfmS",
  "key4": "3Wb6K2tHgEqtdEKNapUJ2CWYzLUrE7KoNFjhTT7ieK6xZyAj2Ms2XrYxZJjZHfSG9BAiqJ3W3E3fQZTKMF52T5VD",
  "key5": "5d2W11E6UdhytJu6ZtvZ3GzNk7EzRYkwWfJ8yk7FozPgNfZtDXzpGKNHZzwamkXKbyo73RDW6ArGGj4RvXV6K79w",
  "key6": "5PRF4hHYu6SGtYHLYLvfEBeuFiRcbZ1FBNfw7G2xxfqLa5ZGpyuMhfg8v9jDuqZqzoVH9BbwZHvckBs7u8ZZQ3UD",
  "key7": "45CaeZTztTykiZxT6RyKBiDjHyVo4xnADd8mkqcUAMLr4CkiYg8dZxBCfB7jATzQwBkhFiKBuQXnocjAcvX2nRFu",
  "key8": "23qTviXvKEAzDivT9sGTrRrTdPgVfTtLaUcaWejmU5g6Pso1bsx46uAhTTdVYNdXRpmev6ECxjjbcVVL4vR5b6LZ",
  "key9": "fHsX7YauRuvaf9cCRQkLyKYsTLR8RNUHejZmXLDx8fDAFPi4wjJy4xx65gjGQMtLEN5NLpR6MQp9686mMPjwo63",
  "key10": "5tXRYTZ4ZPDVmguFSFBbnJ2fHY8bYC5dJF6CkQucGuWLmR5o1wQTuC6mY7WG8L2U9LwgbEDXBHDD5QbfLGUedxJo",
  "key11": "4Gu1q2s81UTPDBo9JwJQZtpgNVmBkVYWY8QE5Fw7hjiNUCayWrzD2Y7tMSewEY9afifwaeN4SWaHPVttLQ5FJoMm",
  "key12": "3ZUXVUJVd3WXmDGnV5bSuc2Vd3M4Hqfgdxh8yhvaugCRcPBDwiKNPC4YV1Fvst9WjdDKMfrD58FskKgeyg3XpZLG",
  "key13": "5CDpmE8Ry6DaPQfjCZVxW3SNEge9PuZn2KmrPryPTYNN29rzipQsJFzvztTTrGRwbF8wKAA4n9zAZV5JHB2a72bJ",
  "key14": "27fHXvNvuYkq19ZJKSnohH9RcUVwToXPRQ5vkSzLnpeNqH2onUqYRc54VHmjwSjDQXjLWjastCmWhZ3SJLnUEPgB",
  "key15": "BXhYfXKzHNSjHCmZQfYNMpuLQPQPcsEkvFZdnhJeLm8Y4jzupHcV2NmVnAkRHzapQg3GeMDS9MLBQivR6BEnwdr",
  "key16": "4n994S3GUJosqCmzP438ExgGQgkxXwDR11HNb1gfrYPUUS6vrmSAVnz84JNz4uw2QxGW2j3MiFrawwgqubjuLrmF",
  "key17": "4U5ycnMZAX7bvj3DHmSMdcRh5ZvBjTsZoiX7FDEjcuN7u7zAdYeS91PipXnc3hcobxgkV9V7Ndn5NZj3yt1JRrJd",
  "key18": "D5pggBHyhftxugsHrNWw2jNr88jfY62ekAY4ShcLVE1ib3vG16sahukrYTv4Bq3Ct6njqkVJEvSaaaTZkgHxLmc",
  "key19": "4okbq27WeGYJpTSS6zCYuNz12o3kRRpzFX4hZs5X2Tws1JXbJPkzBBxUojzVw2dJKnAjrs3853FRjaL6YRZMARQy",
  "key20": "63eY1K2qSo9t4rcH3jpnGthL7WSiuQrpE5aqc1JMnJXXuDoHSd5YqWhjUttyExiwB5xr2KJJpwXod32PKXaXgGLN",
  "key21": "549U2NnibCmeHFczy8m2SAHaZUfcpPFdEGEmqsfh3U3bMZ9e6YL4vbBNFvPmiYJSzSyZ484q8q2meu5W7r4t7UPt",
  "key22": "aKwRSEWP5amNtbbt3JPTNnKxayaNYgbLrC8nA9utNRFFuHG7X18VLXV9QUQPAC2fcUiS67pBBZvFKFTZt51Tizo",
  "key23": "4kqkbRbqwroXxt9PmgqYBQf54tecuiXjGHYXZogXNgz9ML6F8Je22CtkjCgqaXhJbCPQvPGq1T4WTc5rAqV4yh5b",
  "key24": "VG5ob61eKCAyQMUXVjgEvxfuWCCv8sjPgHZUXjgmJfnTk5ZRnqZv5vGbszFtFAVyNREMjJbt2qK23mY9CNorLpG",
  "key25": "4XdqY1KgoL569MZgUYSZ2EvzQKW6BL37mFagvrL3jXcqyVv42HLGWQrPux5s7WA1oPJkaf5L4qn2MhBE58r7RgZ",
  "key26": "2mewVRf8Dtqmvkj2kfaDVcasZuW4dnNbPqGhYMnyDtZPNQm4z18ysKfgqcqAtRePXtKtBYDSQHkcmAiCRqwKwPMB",
  "key27": "3cHzNTfrwsHvrWYxooQ4cArwJ6t7JmQrkoSWHpACnoJ7JFyH9vbDjxNMW5EkEEKuijDkEUWxpt6HWQDxigb6ZBkn",
  "key28": "4rbGkovftTGnrBsc2MviT6DK11sYawHZzGZk3WBfHogzaFwGyfnduY8x7nzX4SbR4Sc9tBfTmVsMgBEVrJeiiA5u",
  "key29": "3zrQRnp5826VBkTawWr6i8N3RXeJ4vsXqMG2WLTYQTg1xgpgk9fDfVGe8DtdeDaLGt2vvGMotdEc1RS1dhQmxZxY",
  "key30": "333c381TeDvP5pZtXnpattGZkuZFsNBQzVkQhZjV8ZUvuq48eBhW1Ezhf86wFxTjbRjftpmmyvGwcf8CA3k1mbsN",
  "key31": "2EfkoiXFVyqvs928m3jTVpQN75QPWsxToUFiSEZWVx3tGZWmSHXNSDqv1imf83RS4cQwH2Jd7XnU9nG6SxU3k6tA",
  "key32": "511FrPVAhatVVfU2DcUk6UppEZnUJCzEXhvB3XP9zzK4o7c7t7dVALASkrH56iWZmWxq5nAcqRzRtURe7XwUaoYy",
  "key33": "tkt4w3cdfmdoJGwZDoCdxEHPWvxeQiKd1oxSmtA2U4w8rMVMqQbXybzBUyozduFhWUdsovF11FdQENxZ2uiUXhN",
  "key34": "2sDVGJ4Uwi8mLx1KVdECBe97Es3oKWSH8C1VZ7A7QjzkdrM5TYWnHZyFadW4HCYmqRPmruUKG4dvBHJAeQCKFxzn",
  "key35": "5A6bzUWbgWUiLZpf6sNTvLotSzyc5yE72w4ngSE4qG73DJRtRGuaYBVS96oA6fEgpVfhSNP943EaJa5DV5ZiaGwB",
  "key36": "3t5CU9m7vJMzP38pqxgKzbBSscE6VchJSZVpxdWvHEBANBRTXKTmQUMnNN8ZDLCTc4uWmm9EfDZh77ZrRimAa6FG",
  "key37": "2fc9kN5Jrkq4tsh2b3KuLfWitqWUjxk44GJR88Uyffnmi4iGJRzZtaZx14am7t76RWbTP1BCNXMJpGU9ZJCwH7rg",
  "key38": "2A7KBR73UPH6cgDFwGUyC7Y9cL1NsYivXH2bybDQiooC9uHr8pnGrpwpVgAb8zoPDigyWNbVYiATsw3itUQT7XPg",
  "key39": "3Bf6twAADEw7tWWmxVKYJtYi4McULHD2wYhTehK82b74vZn26cymkZoTcaKEEFmk6cL5CSJ48S8EyRxSMRnxmhYF",
  "key40": "2vjt5rPTTzYdXLURTwnwXFVD36pYHVM7EHUpR16eu83cbojfW3dDBbs3jNFgU73pXL6xFcGoihpekB2dhC8jGxWf",
  "key41": "44eoAG8yw1VhbvjxkyXMNDbiCSs4i38gJdaDJSNzXQDc3QVNywLHg3bgDjeTjFitds66JqS1ArRKqYHZFdjmmYDV",
  "key42": "3BTwhrjPy61m2cDD2NTJHi7TXvJrRDa4hhCL29GrmzUE7RVA3X5gZcMhVkXZQNpMja1MpbZ8fi1kFVaNQSwRCprR",
  "key43": "ZdvqfAHyXbirx5EAgn7CEHbuVzBeiheeyforFYGEg9qMNZiUtC2QnVoWRoiWDh2PMq1fvXoNMmVBntKmkxSDwFF",
  "key44": "jjFvB2BiWbnkqUVXzpYzoqe7EjVVP1Z5KU4aacmaHeEP6piqJJi8r56zgQU9CkpfUFd7RftW61WpvJiNc1f1Bkh"
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
