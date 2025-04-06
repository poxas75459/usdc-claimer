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
    "2STSxJP9684hDLv9eXPvykxn6qWuYA1VqR635WozcAELQSVYFYfDQCz5QnBRQZduGF15Pnq9DCnhyDMn3rPeezZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29b9cNS17UM2oeLr2bigmQxWsmQypqUAh2ysxSTU84FNZAbCGxDW15Cdjy1JLrNawk9Pgnfrs1Z8VAn5ywJHvQ6B",
  "key1": "4tzi4G9k3UUPstk2w8bebMKZZMUz1rc3AxBcsJo2h7cYo2sd5KKcxrrbPgKKATcSAs9quYhhZtR1A8NbAHcrqUBb",
  "key2": "5nmJRBfc6TZetfix55MrLxsiQHoj4aCPGzCN5RZqSCVNj2z8DPAFiKZRxRobZPhgBzbPVfH5Z8vdkMwwd1n786tz",
  "key3": "3PXtS6o7DDuBmbzWma1kkUxioT9E278nDZdwL2jmuiUNoYGhZu6WU5r7MBWVkNSkoTkDEn6VVBw7sP6BcjBYVpC6",
  "key4": "2jk4pMnKsC8BhAnkEe6LPAE1zeBX3NtVngYvzdGm5zihGu6amSaSyTupGpdCrvdCeWrxnmM3HzUG1M4649mBHSwM",
  "key5": "4DhHLBGgneyfFdqBq32Z5igAH8TPoMMbqgFZ2SPYneeVYcWANsAJzBxKgDwtZdsVFvKMEqHZ8ssanZtEhEo95mwo",
  "key6": "28o6ZJYhTarK45MLN6tiaRc81dRtauQcr56njEWi4qajB3GuBeNH7JvpBuoL2rtagcgrF3XCLKF3mBnNAapAsE8y",
  "key7": "44uicXJbhkBhKaCauu6khH6mLux1kERgR93EYLVCaBavghToxMjciDaZXE3ePCqigYfu7JbYRdPMx4iY9FDSvX8L",
  "key8": "5YJeHCHrotnv5YFCawhEo36KgAuXnaQDqGVcFsgjojhnesw665aUa5KJuBcF9u22eTyEgveTbW2jZaXJrQWPMg7F",
  "key9": "65QsEdvir9giQWw2UrfNQfaCQrSXygKeDLQXTNBNCkeRit4cMoi9TWgkeo6TEDZVx7RNvHRfXP8GJ9Z2PRedUwxy",
  "key10": "4G8hfWgvPR33Cefj1C9pBWr5SqeEQ8A9cKnkx83cUAmDuGVmYjh2vfhx8KGtCyzy59uEuSCv3U5qR1kZd5SWJFoY",
  "key11": "jNLiKKpqoK7zSnsobDdhKVSwBGbMdp9oMpuXHNfN6a45e7aZn1SYR6b4zmbN9j8sDMdTAtBUo4jogP2GPH648xe",
  "key12": "4EQXtetJKVRSjgEXCagx8Gy67Gq5C5EC9DfFWGuSTk8KGKytqpXH5iLGv4c1CwcvHHfRp7EakcYTXExuG9HKBGAV",
  "key13": "VqTAaqgDvUd9TKrKjt87Eu1qRyptL4dAHEMfM84hJZBhU9BxfBCQK8ozEM85eNX3QKCjuxCVkMsY4mxurkKRjt9",
  "key14": "2nnEqdN4w8GHhVMSPAimf2iWqxVRtsX1vrMM1fjrM2cKVnuboe2SZvfRcCTTsPuptgHnRja1FigkNtnmpXyJo2er",
  "key15": "BTWGrdS94gjZ55sHMf6wjSfubbqawTgT7Fy11NVm9ZiB3DeKcw155HCqApcjGqk4Z8kaAg8ddJrTmyrcAqWFZAW",
  "key16": "62wAWmwnJHpCzyQVRJrCEwS4YiKjLxWWvov4oxEwuhqEJRUxMDsEudNAWvcg31cxdy3hbv4V5d9gfaUmnmTwnEEY",
  "key17": "3rEDm3KjGih9bHMuWxpQtjjhrCmp98ozz2t9gXC7kRjKdHco24jCxGvEA8f1JNs4GsQ2gA9Qc87djTVG1QdnNgPf",
  "key18": "3XDG3fTLF1dsCqK3MDecBJaji8EeBzyCcdz2m7Ny8XVTK6aZQBB9j5EosoahTvy98q8Rg14aMBpYxZDs8qHMu2Rw",
  "key19": "5KeMPUrqMVwP6HM9KcuCNxefjuxLBxViZ4nbiboJyBPRrHtdiT49qgPmXy6ScywzCorcmdxVj6vNWLHpuXXgKsgK",
  "key20": "32BgXhd2erYgiE9gUV5Kh4UAZqWYUf243iLWKZPtwLEWMvbhpTETZEA8gGERqBymhVnwP2vWDzwQjuSpxCwkeR1q",
  "key21": "fXHuWSSvg9EPmPbygUasxngB8k66etXsPJ17PiWYZJqxr9Dodi65xZ8yWVCvreh53P5jiaiC77SwDqcZ76jofcs",
  "key22": "4m3neg6hNLEpBgou4iRdmXWQybNgS5u22Jd9L2f2cwRnGSXkAT4JXhBtMgTBgTEe3G32GFuZkpZWucUVfmTgVL7F",
  "key23": "5x3JesrKbfHpbSNZ2CLdnP7WWwBzgiZnKy9UKKsotNKtMad1JYH4M7DgmfhUUYFVgM6vyjGAfjrADYdrkiLY5epk",
  "key24": "39VhHvS6mWcBVsNhFBScoXZXSPvqPhX1WEBvUEZd8JRGn1eKmFGYUF1y3NbSNfRPWyz6H2yrKyQkDX4sQrW8NvKF",
  "key25": "2ccJtgaZcc1vJoB7PnBpZno4gTqRkox4oYBcJmdWzhgedKxPnDpLqyzBXPk35CSHtHwCKSYfrPmGD6MAn7m2S3Yh",
  "key26": "5czqcJ38YkAsKAGkS4meER1BciMCcuEGbcpLCgevVgrarjByQPWLPcctjqv7RU2QoHXDYEEujSmktXh2rZ6tcp8f",
  "key27": "YUodEJZNDQasctEAse79J3gka1wZiz6mZZgDrxBcRtFcxWdK7njKMxREtaaCZFUFV4mKNvzWxUsLqGars1mC8wa",
  "key28": "Nn8P5BJviAKd5r1wA6jaYwt3Qfy64J4PxZ8iRiFKSqxr1SRrEGTxZ3rNcEWeM9QbmEPBqNnGRGFkm4XxshQwn2W",
  "key29": "hKd9iK8jdQb8vFVLMaQtc7Fd8KiHQBmQQGmxCwMYwpmqhrJDzHZdkocJHsPToNcVzmLGE3qKYCabcZwFd4Sum3u"
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
