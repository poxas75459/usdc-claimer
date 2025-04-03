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
    "4gJ16mMfS78soCa3q6h4KjjVTQS4wBFbQ7TMPdzmaWDkbXmBvJ9V33rQsoHTR9d3NGrzj4azZ3zUXXVEut1pnZwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReWZHY9ZVL67NazER3ogNHiVcG478j9Rbd1yHBMNN8JtGuam1Ug6bXRwL9SxQkXCHyH48Uc2RhdUhRj4VrizTH7",
  "key1": "5ZM1wg5m2AveqDfs4g4uxxXgwn9F9JSLmAnixYu8FmEKLVYHoCNMD3ymjeYjFHki3UXej2v2s9vGnfUtVo36SQkY",
  "key2": "4VTTghUdEi3UhYnWn7eBuZH6noSgnFAUhkfZAB74TeavJDitXNDMjxVXYYbgEk9vhDWqBpSQrPSBcxh9xENrAr9N",
  "key3": "2pxtQNadu3cpX8kvG9LECchxuB9w6nVuCCQ6zQmGnAzhihQ4EyrXp3U6wNTqD5cqfZZH6ArsaRCZzaU8x3XTnYVx",
  "key4": "4XAruJbYoFEMNRRosGkKhUgKbQeNUySYYHBVhkeCfRVhpinEx8JEshyQhjvCt78ZcSfWM1pAAqR2TTPQfUDtLefP",
  "key5": "YFqRtRs4Zeu3GnAvi7V1gT6JjaDRFEkUwesMMdfRV4xKBU3hnhTjc1g49oEksyyyA4aArAGKA47v2ZcbWMAx59h",
  "key6": "45bouioexzQdQjJxpfW6RhJuQ9eYx8EBNGJqzqZ5ADUBScwtpceQUpD8bmg6hYQfc3JRfomE4aHxCsoo5u6hhTjc",
  "key7": "NMsZuSmPuUGWSXbjrDKiY6wJbuBQqqRczyRNt7T8aEKfusyEZPxupGFmEL1RDBiNc8azipcvbXvhSCBKCyUu6Jx",
  "key8": "5vskoTZv4XaEBZbdURz8N3c9eSLn5Jr5U8UgvfWRYAtCb4bwGn8SwQvhEPwYb31GCqEhs3mYfAH5RPtk8BX5a9pf",
  "key9": "3Qda5qAwZmKahjMY244MUdJ2xABPCbAmQh5RhsQjibxAfWFWPzWDAZJnZXmBcgQ5zPG57RCPatxFXxVXoDH97KhS",
  "key10": "4aNaugVniX69AAmsPE6n89FGUfUAPD7bbYXbk8csbhwEnqHrfL34dkLY5g2Feept66GpaTCGTCByVSYCLRcA1YqL",
  "key11": "4322n72RZMojjgYUJtZUHvAt16L5zLhTh5x2eMNG8nfG54QYWZJWQNV1HPGTYHBhPx1AMpsKqpp6ftv7FHXrbhSY",
  "key12": "657WiCeuoPiroTXPxosaCzkcxuRpG5kLdK3k1pRKW4Xi75EVAaU295rK7UXXLDKMMF9T6vjHfjswM6wnpazUNEWv",
  "key13": "478pkJYnqUNwh1GcU5gK4TAgXKhJJ15rUjkXkiw8HiUkUdL69xruJj5Eoq62KQ5rTsgY3rpc6qTDCZWTBBawoDLv",
  "key14": "5k2rFSTaigCMqF3tMKxmBSCRqrpjuXHUXPL8Qt57yfRVB7Ko3MiRBnL4DebsCcESYtdJ5UaWGeu7RrHbBAaPEzAo",
  "key15": "5zPeLXJnEXjYbiJyqM47G95ZDdjzg892Emed9PtDGJok3cGbhVU9sBsbweDW8ZiikHbBKWdpGRn9irqqaixzsXi",
  "key16": "52LA1jcEXS3cUDZYmnduQKYEEDNjesQ8dacBuLHLgkq43pnkzY5xkGUZmF1uo57SJk8T4WV9DFMjh9KQc1QvV8G2",
  "key17": "33seXrQkhcdty69eFfEqHrivtZ37LttQYnnjgC4hfSB3EwgwV9sQ37KFPSdryTfeKC5RH6ZYvL99WDp6rMx8KvWc",
  "key18": "3AHQtEHYHsHjfWVXoc89RBfEaEdk6JHaWyw71CEmruH2X1eoA1QKPd1TySweG6CXsy35QJu1USLogQS6u9fd8YFF",
  "key19": "3hwaUwdYS9wv4XHpdu1v4HJsptPSrykL9e6Cov6rtcTaKx1HzgbzoimkXYuYioyvu3oZr9bKtseLZVH3ndJFARto",
  "key20": "2NsBgoCZxYgYEKdnyPfdZKQCoJkUz1zJfA8LnV6YQRhGZhfEhsXL9ZwtMfqsqU4hK53zkDnKk4fV3C3vjV8ojzsK",
  "key21": "4RyAyhYspmFxzH9HHtSKRAkDnmYYjGfv6Ad2xKQNfWMH7QrmV1jdCuuxZsCfZNj5J5f5EwncJTvWqC45Wsmqkm3u",
  "key22": "67gMW9QQoNt6TcL5bab6NQYuKrBdCXG9ZdQmeGzTvyisJuaQxx9bjUoMiZPf2WS1n9woN66GYTRdG3sdhDFosyvf",
  "key23": "5PQFZ2w1zwdo4c4dDmQuGrP8A1pMXyQKdMn2X9ChXoHZjmUHxhBfYxrHPQqKe98UVdHgezvngDCF6PxyxDitd2F9",
  "key24": "3DaKbqPdyzVeQeBmdV1QZGjkM6x58QLUoqnQCmauXJPvWH2xMcuUDE8m8DibCZanLgUCRDyC7MM7oHZfJrFmG1U",
  "key25": "yferxTkrovuH3YgBLbBKy9NxG4tqLs4RmR2KVfNjPWwBjHtPXRVHPbw22wTB4fM7oJMfTZRVzmJzCizvrPX6nwq",
  "key26": "2k3FmpZNCUbaYBaEjJMhkgCq8L9veF5f8wF6GJKVY1ZkYgsTBm5gbEjfFhUk4SEwbVe18Eyk88PoHDNSetA7ckL9",
  "key27": "3R8a5HnpjzyV4u2WeXVoTqSa82Ltm9cQ2n9gkUJ3UcFFLkSBRAe7HmHEawcAqwcaGcNPyJ5cTBvkJWPZpmqBx5wS",
  "key28": "3gFba5AhLGyXWyngDnF3tDbs3GSycfqmRcJgQAvtYotCyreqcuegySe26MRWeXd5GSPH9k17KHGJUHKtiQ5Yuo2p",
  "key29": "2vEEbo8GJX3gA4cZ17YqCn4Q9bbQkkSoJucr87hECKhPJnurEnmeNAd5tTpUXjAc6SJDq6poncmp6mAF9ZoMLedA",
  "key30": "24VeRqnF89pwqsjk7QpPFpSHtKDSSKbaFU9Kjunxmeqn8DfNYiKv72ESGT1dPPSCyhGpiL2bSdqkHXtoNfu5VHFm",
  "key31": "Mw2C71iLrfHvvgCy4bKoMr2uy7P383HxGjrZLEHLzBiYqBzcud32HKzLLHww5yqD2CS7TcGZbEAT7wJ6yac7ipx",
  "key32": "2JueVEHoGruo753zu3SmyqyGqM8mPy4pS78WWUJbnB8cmvjThbZ2enPTd8aXDptte64PyYD5ouhJqu1gRQqyakPr",
  "key33": "3NF9a5apUEmtn9vN17Lq9L12hkuJikNH5t78DfDs88GNqsafnchbsKg8TYehcELEiGASEU1mSQXCLzEhM5j3EzvL",
  "key34": "4841VosCrMNszrdbEas21v4dQZjNXbQV4kiCueHGr9rP1YtWtDvkBrALA4KFry4UhPArtt8FCnuNFQHFPCUfcfGW",
  "key35": "K4uiPdkQ7so3JR6s39aAqx7qXT4p3r2E4fMkw5JhtriQbYyVSK3d2UUQRaMZGFdbSLDRgTLYKdfa2chbiHzVECN",
  "key36": "5sryzLkXDf7esW1DCfL9r91y56o8tpVWvBjFzcbcQxbNLfTzzhMgHP9ZzUSfRPCPWebmdpZsqDg4BaFZRxhnzupk",
  "key37": "5yGRjxs99XHB8e2XsRSBEJgsy8931tP5g9L6bkcjw4ZweLpJks4NbYuweUgw6f1fSaJkodT663FeVgH2NfjrVewR",
  "key38": "64GpgFobQYQ9KApFgTt6AoiHdQrwTmGUTiMdDvNeDYAata1Saz4JP7iQnefASnu1JgqtTFtsdz7XytYA2jCWYB5c",
  "key39": "42g7ZN38HMeKrGHXGiUQEhfgfpZWEA6yzgsb5vXKtAnJTmNbooDnZRyQYr1o1g97reLBRs2AcC94KKQDpzG1uYjt",
  "key40": "BvAbQw4v7Fq49xgLq3Wo4GxNFTYd8AWa3mRNTPwgsGjxRqGh7geihbpArrQbh925J7K2L41JZ8sRv3Pdzfab7rt",
  "key41": "24SKbgKadwmHf2NzZc2Pgk5kGtQGmZfyLL3g3hU3NUJRX4N9cjamf258htpvfrgrnbxoLsZAht2Tg4VB3DbeTs5Q",
  "key42": "467ZQbSQQXegLAjF1Mnnyjy9KmmgqyraaPuH7o3FgLFYfYn7wvUTyzH43zqxNyHE3aiEBrEcKt9eX5BH7HQKRGer",
  "key43": "419S7DhZMxXL851h4f6QLxn74x4dkkx5H7M8y1M8AJZ2TvwihWX6pD9Lyz8gLe6iCHBcnGsg8nTeLSRShi5fbCzY"
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
