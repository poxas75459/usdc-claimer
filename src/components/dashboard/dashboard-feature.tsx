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
    "3FKyCfG9y54FFYfYCyFYqUaK6FG3LVxqgAvWpCaRGZV3wkWWEHMmYcCd8cXKEEq2HYhEJNKx5Xg6gaFYpzEXzbGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yzx8bnmKCkrkX7LMuET4CKe649c6rMKdwjRjS6sxXuEtPxnriEDdYNx3MFWvSFB3q7FTFmo6pfoL8DpchEfNSyG",
  "key1": "SoCegMnWy4p2Ze7odcvTwhnakoT2fwnXGRFn8PZGfKDcNiAXg1V3tcjqrByCgkVnZYKthSAhmKU9m3JqbVFnmot",
  "key2": "2RLjGiBXbN2MYHrDkCPftaVeKkMepKsD4LaR8kZwkSKBXf7sbiwyYDf19oUAzppuhDz2xPhhxh5TNHbwCaaJD7Rv",
  "key3": "2TStTQiUaS3Rz1Z56YU4Qabcg1hkoYb3QY14xLiPB2aEssFLc3wY46tSrDmN4UHVhUX7SjUVon47e53moHp5aDuq",
  "key4": "XgF4VH2TqYRsspSztpB4iMiVcRbnZR7yFvR252wGWhgYty4uBXk9taYBLFsQS8d5SsDWQUHAyeHQcHn6Whu2w97",
  "key5": "3swCfM1b8gY5VgyogQN8dLXmsiFW5LHLGWgnWiiJPVepC7CiDR169qXMMdaABrLVjN1vsWZaPKrZVFFY7me8a4w9",
  "key6": "3kmT8ULgWkwXY33HSFj7Bg5TySGNZjDKNmgjvz8FRmx76vhLWSE4EYZRwx7r3ooUAbWtJy5kr6o8nPzsYKki5yf3",
  "key7": "3aNcYLQ1MwZ6w4oYuHtkTP96nJxhaUJswecrhJZCYEJ3a8aXM58JgDcKT6ow1DHHpuadFUWvcdphdLGFGA5zCuRX",
  "key8": "2ovGbQwvFMj5j4pe7zJycHVTN7FFd5wHbWtdxZNUwtt8ws2dfh9PhfhKh8SZAvoTzTcDppBZrd1u5Gwwsg2f4jNm",
  "key9": "Qqe9vojYqXHHqtKqJxTkTeckpnoGzKtTjbaq6LMSb7tAVuH71YWDnKCov6mX9FUY8dA9rqcxRDxe7PKKPsZViYq",
  "key10": "2qJmZRRhpyyEYfhxCjShcf8nurFd8jpVPXnrfoZRrnXMEbVbcNP9Z1Q1a7qcZc3eSGkhaZKzhLMSppF3WdkGxUU5",
  "key11": "2mXMxLhnFmgBDjJmSj8G7EPKLdQ4bgcLhTvoQMdF1MCAmPvF7shsr1d6HpF5FNtJAcYW6g6cMxX1Jv4od9bmbAP9",
  "key12": "2itp77VPGh3m9yf6KAAhf6nN8QVo6LjRRsKKNfhgfG4a6BGe3CfV4JeZ6W4aCWnxVbLSZ5LtmtooMKjPrUTS1aZH",
  "key13": "eGn7DvET73LkbxLVmekWoz9Fg1oi3J8aPjXVqdVXJneg3S4aGt6Gof8Dk57YNVmxkgfo6xYFHwuDdXWhhPHaR2p",
  "key14": "4dS7rbfADyAb2uTkX6QB7phnuwJWq6FmEXjrbWk18biMKh3AbJxZvUA7Whk65s1timKs5QmWMY4Bcfuie8jUzAWx",
  "key15": "3bKLoSSVQHdgrtQ7Vut4gz4C5rep6iezoVX1GPENyg7Yz64bVNEsAZj8vs3Wv5Ga5uyFTXvasSftCkVKd7kBpUF5",
  "key16": "3La7j9nBXtWA69o7cFzESrcjWLhmhvVn9WNG4Phgjs5EX3RwsbYC81S2K1wqMwSYKUPPNqMP6oBGqx1LSik78FhV",
  "key17": "2YuLEappCv4qst5N7ietchUj2abuz4NvWrYKb1VQufXag5Eb8PCN9d5WQZqtzKmcQxv4eWrPvKWVjXJxDYuxRgm1",
  "key18": "2vzvbXftpoQ2r6iF6TQ84CANYtE8bR8rM3TxHCD5KRuajY6b1EuPS9a3ixGKUqJvht9GD9rNQjbS2c3wLrVufGNF",
  "key19": "26j59NH1of3VMY9QUYLuEtW1U658KWQK1CXc5KSVXNU5pADVJYRCHJWjcY9TTFocTqLk25ANBDq81Y7kYLF4sgvj",
  "key20": "5ve2PBXYcjGJtv9NKk5pkj5jAkotDBTRVPUiaz3UMeLUYDPxtYtTvXbH8jEF3FGFr2kTqtZhVfvMtBHhbEv9koT7",
  "key21": "i327uptBKVHNh3aUY4KtfdTBtK8LmWNoLZLgKVuMazUbJD6nMky6R8wfhfBBe1eDpAnyMKyMLYFPVUDCQfBJwto",
  "key22": "C1CE68EZEXpRhmjZw1asStbrP8Rxu7mQmaZhbQE2JmFPxbVqjCoREcwj6VCxuUV3Sz8hfeUC8hoVjvnyVvsDBgh",
  "key23": "5tYcifhTuHo3fWRTfy8ipZ4v1Di38ozALyMFK2WCmA89t53dQNCDbFseWwDtDCfmkL4a2g1fEWvi8PaHzvxEVgoN",
  "key24": "2gcbmGgCCaggHFDa6FitmcpbsWi1uNyBrCjhQbNL4BaHDECFzYKDGkJ51TRoCPXEsC9t14FBUuPXzgEC4eozuike",
  "key25": "5SiZCkjPdG95ujuUJ3y7bhkDet3Q1xXUxCrSvHbZ8yxHbMbnQkEuNCwdRg4e2vbvVcLcLcTV3pwmjSbo3frddxj8",
  "key26": "47geTzboLGQh9omVWAG8rU6tLkr9csm6mWqpjyazVoC1KY5eowsrYZHTac7i6irMpXYkYvQhx6AvM9mJsvviKry8",
  "key27": "2rWVef9cqSwzfJsBGyk4vudKJAUdS4tkXTr7MY8bALFhH5AY6c4LeFjMb6aKayoTepLvtBXwP3if8ZU2FUHqW6zo",
  "key28": "2e4m9FfKSTLmfmWQWaDJVaaP4H647vR7cH3Q3krd8A75ucUg82XA4nkRoMEBgkHs2Sdq7CysMrACQ1bn53cD6gnG",
  "key29": "g4RZ8oVtif85TzSofA1jHCnX4XMbw2Qs7aPWigk4ECcvh1aP9Kef5V46myU63XTuQ5yGQMGh8X8ERZjyg2k4gSg",
  "key30": "nX9BotRsBfwLvxFWkEmC4Hofmmmk32oGbxxPaiwY4h47aPRECsaXcyit2bZAoXnoqyJYNP89t97njSuUSpoXQ2c",
  "key31": "hRJ1HGW1n3hhTx35KWpToYwmcARrQ2RstrT4AzX1nDxYdgoPpP3UJG2RnqXwWj6AFvXLp16honogtzzBWxcwp8c",
  "key32": "5S5D5S1mkpKTRTGJckt8Fj84q8bEXJEmqmTMZg6kLPTZ1cbPQFsgTU6kq72Mvre4tE5pFEtHYfZ3jcgNSZ4FUra3",
  "key33": "44u7iHHX9oKbyEnNRuo4tuhPrP9uKwTyn7VkqDoWVbUQkUkp2fT476cDB6HijJxdsmkS2837NQJA97teB4mpuosQ",
  "key34": "QjNGnAA82y3fzYxhWWAQ1REZsxuieoXyw4JtRrrkrTZtZ5DJdzYVadywxSyPGSokanQ5qDTD8hvUqFW8VA1kCir",
  "key35": "2c98HE4TG9XDpi39JiCKfNo49WAVoftBVzp7oH4EtQZinUTvoppdGTejU8Bk7KvdAd5mHaBEQrYqjBhh5xAD8Pcj",
  "key36": "2NE5b6aBoRb712rsuKPcrD4JabkuXbbenLLZnoDPpNnwSnBqRYVSC9NvhpWtvjxsjsvLcjVdoJPkdBMmiMyWri89",
  "key37": "4oHMraifkBEEqa526gvvf2NQGQSXBtMtd6XHjGfsmKwfjM3nwXwtAqJdJTmeqV7PKVkiwcuTN38F3wguG9kLgQiU",
  "key38": "5LxAiKpbVmiL4A2LBCnLW9pu8QxG3oDXMBD6bqrpeXLqEfmBE2GWYtDXxf9NJwTuZBbedqDv2EiPjiFKzeyQMA8L"
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
