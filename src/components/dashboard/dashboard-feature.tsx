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
    "hpYyVpycyQwG3D6mzF5X7d7KH2W1dNdr167pSDJXupH9D66TVigQCCf8GsAJf6KGMg6HamtYEgjWZHGAbr7wAjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RMyCsn7i8hZzRUchHnLN7EbsKfNunz7PiYus3Jac5GX64giiXAHtp6fXYMMMiZZeFm7KfhsDUEycseGGe3NvQVH",
  "key1": "5NXa4BAspZctLNzDiTimv8yECEQMTGzZkuHoFHFV8WDZG8LftMroDqviC3B3mCnwviEmZqBBxeRipGECtTfj3Ly5",
  "key2": "4nxaPSFrJ2J3fLepRLAaYEX2teXkN5nLF992ccUhJzGcJ6fPQwBVNhKusw91YH4hzXtjUmJCkTAkGZPRBb6eofRf",
  "key3": "23w1PFy3HswGvw93Q1ZkXHFTm1dtyvvk4aBWWJ64rojeAS5WMUiBZ7i12qXA6t28SVyp4QrUWRch364uwGmcaDBZ",
  "key4": "59fHrdhRKCN388ZVVcooaWNErzzsDzgqiCVzBVjynrzpAXE2KXBnVhuQARSrLQGsPyduHmBTnuZRuURKtmfnms9G",
  "key5": "5W4CFEoz4aUYNDZc2oZsVxSordfsXdUaZgHze2kG2UHWxvYZNtagDX4WF3BnBbWoQdi88D9QiVgkQmnXQgv23oTU",
  "key6": "35imv9dozSnvuqQJbNsVGL7YNaj8tUQSS91X8FAaFizqcpKhpmw54HEys8c7gz7qdXQMTM9BmL8JW5VhH6hybmF2",
  "key7": "23UFMNUpU6kLcSM3zoApr93PzS4sMJp6k2UBuiyKYa7q8YRXJHg6gWB1EETU9ijQq8Ph9UpPTG5M663U9bwogQFg",
  "key8": "2KUyFFPSAvS1rL9iBmMM7ZZhkE1jAAgCbFgRWLK3o6YguM5YUrBUQDHtCQBXHrmqh5KJjsBFxUgX5piXSGSwM49s",
  "key9": "2p5jZ3bT8oNrrtonUub59sxQEXkUuSQTDKhDQsxkZCi5HwPe3p8kZbqzWhcRQ7JLy5iYRipLskXPpNT65Qtem2JQ",
  "key10": "3XAhW4AZfFSBCyScs98rA2fmJKZtvy7b6HX436Uyvt6yZEfHU95MSzoH9q5oSMiHtgHMZ9FB5SKS5USSUSxNdVFX",
  "key11": "3fGReutg9tpvpbRwkFfpJFqmoe6rywurzdPHUaoT8nNa4gLvG3KttJYREVXnE4qjKNPJawYghj1k4cSxMDL4Z6Zi",
  "key12": "2qN4T5JtT8Vt7reeVKeZXqHJidv15Uje1J4F1jze33Ly5ndSUoVZLUSjCK4vcubACsBGcNCzRtihr8MMWexb6RKa",
  "key13": "55tRRedHRQ9172UTvZP9vh5YhrXHWJMDuM85piRxuvcGen9GoPLy4kyL2Np5CkMs44M7wZcEGjYtcvW3DLNhJRVT",
  "key14": "2jobn4FXuHZy7QskWvUchcTBUh6LDdAozJYHi29YkRZHU1Mbn5fQv8649iJvbNCCPQTKTSF3bcZ4CrMYwJg7L6cU",
  "key15": "318QE19ApPnMEPWsDmy2gecM779WqxxoE5kgsqxcubpwvBvTbra2BXgtpqqbuY8zwEBav3J7dBsjnv1p2CbAfxhx",
  "key16": "YgzvfcJFQPwYxP2o1VAxDJZSPeTWReWb2FqUAgZETWXzk6k7JXSxLpS9cXoVVDMC5wLPjsq6UxK8p32Hvuaiaf2",
  "key17": "kDCXn9s8W4AkD1ffH8CZw6vxNcD5LjyHsTqzAqVLSjMgajD8VnKH9tDueHcqHrNhtEi8Dmts6sVdy87AHPuoezB",
  "key18": "2P8nXtFEhfHWspATS8M4z9fnLiHtFUum29gjNtg9SnoWJVHZc1WCfwCCKFEPn54NCLq37rUVygzq7bMtpR261pmU",
  "key19": "3r68ix2porud5XggjhMQWC2nKyrMDzHiPABMk4rhe2cxWcZmYUpRx5jjYx1S3o6Y59sMtcHyUapAZAGG4mbBkw8T",
  "key20": "5PYt1AtCJenTFrE873x148p9Hoxwpf7CK4auoQtjUip2sRD5EdMsYBtLJZ3HUykFzhrPp5JUsBG1AX7jA1ZiHU84",
  "key21": "3Vp14BjHudNWhoFaUBuzHJCEtB5Wvcn2gnanPNAgNEXMfEksHSCWxksMvApFuqqwY9HFfkHzAqQ9B18KLyxjp2gg",
  "key22": "2ikwu47cfusrWRYLPSy6trV4oxobpPUoYFsV13jJbAxYb6hZNL4a7QMxEqLibDCn44kEPaamkUWKkW2J8KCnDnyz",
  "key23": "64euPeo9nAHR3g9GLmUKFJBnDVVKBXPcTzBhQwbjt1c3h1XrAR11oqDDQLi1HARADLhmSRbVLw5nS8WPjVowDqqK",
  "key24": "3D5DuDG4Cj57hmBzK1h21ovB3MgpLhKz1BzZLq9FJvaZ3UuNj5JfT5CHPR3aKfUpafiB5fzFD8Cc79V5eRUgpdfk",
  "key25": "47v5XHWcCXfie3iucur3y1StJL5uXYbQgeECLz7yPQyB7xqpUvRiguPrBqA9Ncjim1d5M5UT6qnzqPcv8JdzuCUq",
  "key26": "3shygmDosxAfTZMMUAodE4QWGAnAdUB95MJdvda1YTxbj988ZXx9fYgMy2CUoBc4Snn2Ge2NCm4QoymvVYkmJBgJ",
  "key27": "434582eS9Ygk1dK1gNytA3pjuJ6aqXVVmmrqfz5MUtFn6MTw1jxR1MU9e6r8uTcWj2hiD8ZT3ZbQgTxhnMSvfMs5",
  "key28": "4hsDnQJmGyp9d23diJXgkysmWCS4dejS9Fnh1DLAdidyffGvFVdumHuRTh2eXqeRHpoaGRwLA4XYcGxvJXA5NSdS",
  "key29": "3Y6MP2n8VYc7ieF5RGSYiMFbLhzttsfQetHjLquks6EXW58i8vZLNkNxJyUbTeGpbSaQtgcHwwXE232mpuxxUN7T",
  "key30": "4AFLDkq1BtWr7WtpWV9PFj1SwdRbQboX6Fxf2EBKjbzWa5HTHJEVaJwCM2CXmKS36wWwbXDh43j5aAe7LRD2zqs4",
  "key31": "2N8zZpy5FS5sprZoVLFJ8SYHoGYT8g9WJVHbVjBCZLE3gxEcsGAotv7Z4Tw4qiovq9VF1tgzj7PjytHq37wTZ6Un",
  "key32": "2tekZpAwFqfnsEup6diGzvndXNUgX3nLxjfgPNJ8YVhdWvg5LRzFRVrrW9GwZ5JjfAMMoC6gT1usjZ25pCnYG2Rn",
  "key33": "5fEqcpgX8mqLCQhhY5mxcAosfDpjGq8yo9E6fR9teVu1bdHQng2yLZdju3DN4FwLSNV6sa6zkKas7hRfpxVjSWpJ",
  "key34": "2JqbKMQbcDToN8jcmg8Xwu2juRHbd6ERdqWUedBk3Gj8qY7xpnV5eU3vh5eDh935DaJAVTJJuzoAcQGMVBaju1YD",
  "key35": "syVqE9D12HvifSwiJPGwmpYPfSXXZsxu23y6hae7KmEyZYXZSoGAFe59ADiaBTYqE5yRfgmUUWU4YnYVRpmnU6P",
  "key36": "4e1SeqpBdWG8tmnUzapS7NtdoQH72URw6GBoyuvcLdRAyzZUgwBqUyfGtPyvgKYgnyYWAFYzQ9jR7obhjDNnARMV",
  "key37": "59amh6LNcsncxvqpnyLYTvfqApAX6M1rqZwFDPCAtTK44P8rfdBcxh8PD6PXoVDbLPVBtsE2Nmw8e5EKo4nDkfqf",
  "key38": "d1AAN7sBNGDN1SGADNoCfFVDeLALJxddBwVVN6s4T1HwHYfyjb9ifKN1LddMfDiys8KHfjyk42V3BgcTYRsFXec",
  "key39": "3KWhPUUP6pNywzEv8zgPZ8ENYZx5FsQ351jfh9BmBxsaqMoasmMsaTNVUcWmd3p88yVwaoN3hAiEfi7kC1WnXPCd",
  "key40": "3u3CM2ySLuta7UhiFdtRrLJ2EzM7XuQ7MTV5L1wBt9qChebTYTmYENXPDvA1GfEdZ2HvL8vqLXUCMniw3ssANQPc",
  "key41": "3ZpzdNvnbXPKoRWAUnEus244mCN8xWrAUj6YveN6WRt3eN7uvjv4Sn5zJjnrZAVXh9Ba2Xk7JrkcY4mxBNjE1BWp",
  "key42": "56MedKFaKBjt5MjbnqTUwW4zb7CRJsb9FPgp1N2e1KxauECHBBtvZQn8878fmD2QC7ZpWtFgmq4UDXq7ckdqUmqb",
  "key43": "4CksXq8B3TGvgEktW6E2C9AsEJCcmTC2qpKZUhtox44ySAvVEdWFSHthqWQACMbtoBsvRLeWN473kfZz9aK91jq4",
  "key44": "3TvQxzT5eprPyyyVX7siPUsBn2PSxrJkBXNi8HWTokiZPQdpWtTSGZsZEcAMqsHesM4ZA34U1DrYEmezqKjPDsYz",
  "key45": "2xUjPZ7BJnyUCtLAjxzF21oScW89ACnpKsyEBgqaQsYoHAFeeob5kChmSJoT3qR2o9uvMJWKrFNG1dB54iexNtcv",
  "key46": "5uVGJo4j2gG8LYh2zoN2VaqDLbvPHhhYJcitCZedadMf716Nuis4J2pV7iEQvWWXWDZCfd2eC6dc68vEAGEc3yun",
  "key47": "3rbVhMJDnFToSoCQjibsTQxboPkvB4Zr9fp5W6oofjZu3kSAU9b8Cri1Nkm7r5EHrVeVPUk2nV7nck1X8pNuAd96",
  "key48": "36VVYMkhLfYzVFQu1BHVF72yQianQYPFPNMW3XxvKvwLuXPPuqX9vZFKRp7aCrAYK1sQHkwsatzhpb4xiRiDi7LN",
  "key49": "4z1pA4rmCfUaqGGzPjhYpq2ZoFhtYMUY6LxcJ4fzKEWaHmNHkoKgBtURGFyuiLLCBkSoAsEpkmcdyQCWGd763dZN"
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
