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
    "5jKzgobo7nbNDNVoHqALVLEN5tGD9KaRsKgYU8XGxGwFDPm62h5K3EitqnmzorxyDnzD2DtzS9BBTWRV3eymeVaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdF4jAw7mZM75yK5DyEHLKJv6kULxhzuqGQyxyjW3CrncUrEy7uxPnptEhLQaWVvsYQW9pzYQbkkVV28cCmKBHR",
  "key1": "2CjvfzNnKPzddd6JH1VqzkSSgepU268PrMKssp5vGWh85CzZRukFdZUfLyPyXCbudPyeKvXVojcFc8Mo7Q2x9WPT",
  "key2": "aqCTEBruxtcBrvFPVKN2uVTNKGdhFy8eVwcjjY4eU3n2htTyHvDiJ4xi5S7Wz8mPBSbGhD5AGnBFNLCaxFYz4pP",
  "key3": "3bqkg4vTcSydaujmY4FtFAUf6Z2MeiGieCZpez67SSXP7ZtqtuMgNwC8TPSn29JeX2tTRoS53ARi5ibyHNQ78LVC",
  "key4": "gebErh7rtjK7ciQbCzKrpERzg4sBo6z8mmricRfgMh5A41SfXzU8cWBQp5dxyRnX7yPzrou9BxgZjDLMaQHg8rM",
  "key5": "2QLVbLoEdoC2qzYgXi2K3h8B31fBjC9i8N77QtMCBaVCS3NvATodXt878EBYh3YKay2FW3bVKHeww9rhKcb33Sjf",
  "key6": "eh4mW2A8n49FkjK1M75sAcpRore2uFJ8sKQpZDB1jkYZ4NjUK8rQnCUMhT6n6R6Bb7KqMtqMnV856YqxW4jv1jK",
  "key7": "5oAhXoKbnbyFjPj2FUHgMjLPDRT7cW2bQfsahw84YpcfR344SU8pburcSZ8XboQB8Hnpt73cRdnfYVhNk8na5Dci",
  "key8": "2DZ8XHiPmwb49uyLDKLky8zsFjUCQ4FvFzTfkXhr8zxaUu6wMRh6fXKVyPVyngSYPGT7Zj2BUzj5PcGhX7ny57KF",
  "key9": "fVrJQp2xYeDASr2zva64pFLucwXoLt9f5NkQYQ7XNfQ3XV2nahi7awUjT2mURuKGJ3P4ZLBuuN9dAfTgtAdTXoN",
  "key10": "5LGjvkkuWF7v6FJBPs1muKwy5nd3mW4zrgnvZKrQWwcYiFUnG6mJvR6KCGeUijKmhHP9LnGQChv2X4TYgi8dn8fH",
  "key11": "5sGknjfhPhqpXRYNGoTxPNPWn2MU85r8jsvDfWHpLofCDFQW4MkM9pL5eckwwCBf75H93JpLarJ9MAwGLUrFLSFy",
  "key12": "3R9kzVquX9tWPW44qmaQ95YFY9BuwaZVcDxs7iopMSKhqycVwLwdBT31H2AwTqZwiwiE8pUENN6vWF3cM54vKoPT",
  "key13": "2oCx5qqcy6nKGHesPPLT7JiAu7TXBYM5S3FAZhVAtkGhgMT5aT3mC6MgdN4qioEtRmr4eV1HL1KJmvxHzjrwWTEt",
  "key14": "4NMD3gSFNLoBrfMv5xDwgNxRPnnCVL6JzfCgMRrFEYBuPqjpZZqPvAqkresiU6Ss3JEtcpUiLQhQCrmQkKdF94Kw",
  "key15": "65c68GcrdaYCnkVSGkHxyE5TcnYjiYwLhuauJ44NGyXjWmgcRVoyMecFtPMLrYPvQXs3G7efrFyMUYGe7SFqu7Zz",
  "key16": "35Vn364XtRJVgLCfbckA148ytCZqnJdj1L81c16PLVPkwjhRgF83vU4HLGVatCEQPQv7dyGJwPYZXU7MxgaaBMng",
  "key17": "3NyJRtWfsJmrqQbsbZaGC8oJs8b6GgKsSinCZMHuPQNbr852VpKhr6n1gQvTcVzv8cP9kELBrphQLgnwJgHg7Fid",
  "key18": "JsEPteM7FSPz4qfL33bXhXmpNZyiwnadNSnGmESH97fq4PXcAa7oCbsq5opzy3PWezvCR7y4eDYCYE6AkR6dYnA",
  "key19": "33SKmEYy5xxEfV3NgeZ2nw6ua1RUbvw51H7JKWYnQZS9n8AG5iofuDuXrCVNWimoyPVsug3ocq2U8oWyqCVUQiUM",
  "key20": "4PY4FprUZuEo3FgxVf97M6pzJKvqboyo9zuPzpznMJXCdPa53ZBvVEoWfdXoKYzi9ncwQvoodvuhkn2WnY7TwZAU",
  "key21": "3zbx4mP54DEY58VefsaBNqg52tgU18y9ejma2nUaBDjhtmRhDpftH5huh6SsQKQR3mpnMBnakmRPEPaaiw7aY8xR",
  "key22": "3HxEFjvo1Ce4jsdkNwVd283ts2Kf34af7MHVhTr3wxcjm9B2ETZoehqTbArKPa41SMM6ym2M7FS8ZcYyhFQBf3kg",
  "key23": "TEQGbP91WvUvZ8Wt1zPRnad2ASQNvCgyNWSncggYEZhnNeHA8AEQ2mHhirRrpEMdJKQtvv9KrWLZvGHsvyWCKz3",
  "key24": "5tb5vGKmaj6Wi7LYcZrYBraJUgndXZArSvfa6f1T25XUNwn7RiWcdce1K2yVJ38WYwKnZHF8iTwJCrs2W7nPXrF5",
  "key25": "2qKsRKHroZbtUcNS2dD4yafBkSjJyeDSdTvar6ZgF8TqqTHFPVQTsbTuVwUr563DLq91vMg4KbwS2aSBDCEmkcdC",
  "key26": "2VrNtP1NiWozCsJpZujYkv5s6a3GrCGoVp7XMqRrmWpiRAGjWysg5F5L4HVihQW22MDKxVUBjEV1k3p7kDU8zzw9",
  "key27": "5Fu7sAty2soEj32gvimVuDH1TBdc5mWefoVcwD58ehTyKTcgfRYq7KD47y7x7WgBjGWPwFtcBwTEvKSc9KBmYwXK",
  "key28": "3XNUEvkhcyVLMNajjmMzsnXmotPu8ywN3f94QbsoUBmiBtWcsFGS2raaaG5aJFjgP9oCZq4EiSrGN9W5x6Cad5zv",
  "key29": "5Jo7Lva9wtfcSr6WMQBQEFqJdqvEKrhiajyuAcZQ7JAE7d6XN9Tbtu9jZqy92urNT9RkC2PH9kchsRkUYhXiM5ST",
  "key30": "5Z713pkBjXL52FZPu6M1GckZn9piZD58YYy4vo2AJrYBGdEPtg6UUciraCEtGMFnr5hcNYk5UgoNSMrzGeM4q8t8",
  "key31": "3u7TW7a5UTRwWVoN8wy7h41VzmvniuPPpCutk2g5oFsxpQzQw1Us1YMveQE62z65QMREivUoxNxFzM2N2Gq7p4XW",
  "key32": "2uFs9PyvwEzDqJD1UgDGqHUqudYa7vfX2ZK2JG7o9rgBEDD653pbum5zmkxz4QHmWdRqjwBwhZtXCfLPXqNJUAUx",
  "key33": "bhQrxoYRrAWFPvjz9RKubDJpJbWLqY2rz7VJXUVFHqqyAHkkRnriw8QSTUvhL5ziw16BG8exBrGZenFzXahLMLi",
  "key34": "58o5YH6A9jQBHL2qPx9CUQimQiGoMZbtQmobh91RPgfVUaUAMKmTBg42BeCiM43b4QoTb28pkuYSoJY8r91L2WKw",
  "key35": "2f54zuhKrdWDNr437kgYLCxZKQrwzFV2ZsUUui5rCTyiXSyP82NVvUXvEeQRSGQhWyFpuwnYFioykaQLVjgPZL2K",
  "key36": "3q4c2L8X2gA3aQfi6PSEir6pthZM4VjqbsZge5iUwiL1KiEvAiNsQA6rCtjbx7EVrREGx75opB9jKcGEqB2CoGxT",
  "key37": "21JCVxs9yzuELh34DNWRyYywmFnNSCf4n4thwGRS22pKR5g1QVZnj4FsKYfCUid44odeuexqPPeXSCSG5ddx1viM",
  "key38": "3PxqdrcrSYcRS8qCKVbacxUfnerPSJDZZfqbs6Zsh1TXhT8EGqvFBHikgnWjwH56KvHTyczQmoHvSiD8FC47dniP",
  "key39": "4VyjpQaPy9JvEesw71PiwoTBba8xAaNxFRAWTqx6jX5GtDUJ98c7fWnvMLDyE8jYvodA5gVUdRKhfeDpWqSSzRa8",
  "key40": "2pRf6sKXcHAe85jy5TGuDW6MurZYhkpTGhpizwTuwxpA1UYM5kPfSAYJFNy8p8LEgx7AYmfKVCPNRux4dcQRipw2",
  "key41": "CjMV6nvnr36EEpAbEz2qoJHnnTfd4HM5VxP7hzxmFZYAJH8XQkGiwX41sejZ5dH8dgviGLnmGyVy7pJv57sfFF3",
  "key42": "2yviJDAvAGF9nyQxMYNVgz6M8k4HTBeMGsqsQWYFQVNd47aSiMGLWbLduVhyfau6mn28hunkmCWNHyqjsbXTYowb",
  "key43": "XUiEXLRdP5UUfHX3sB3UkViFRLs2VTXzEdq5hm8M6ECdhp14gqg6HzkL1XX4afig9gmmCWj1BcfudEkV6j5ne8A",
  "key44": "5YetthvHjJaoyEFUoBACQNGpCVxiuLwzqSAtTb8ZkZUiibhEACxDzK4LKKeGnphR5fttjMpAVUCSLZWk6jDi7yqy",
  "key45": "2SwCuXUAhRNnYugRtY4GXEWz7itr6varsaQBjHwFokeAAoHTA1RTkXCfKJxBRPmErg131991SBff6hSeN9HGoGDZ",
  "key46": "2k6g7ZvY2Y1gTyvNnhxgLJxN6tXkXdV7V9QykPmrxFYsEeNPFPCr4qVBfGPLNWZ6c4g8dYWJB5xwKf9ppUDrHDYg",
  "key47": "38V7vs48HSKwZ9x11Yc5SL8tzJPYiCr3RnZDxbgZpaa45enEue5frnJhybxPCBaLrK1YVSqy2d2qePJFubCwXJvF"
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
