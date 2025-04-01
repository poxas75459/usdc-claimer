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
    "5ZXpN9Z6EJt24e6Jscd4d2Q2TWzKTP43KLg5VVsFCkNFShuiNKw3wdtDx8SNzmVvkQG1d958BAe28RWvFoFR5uTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DRihBtEkcdVWY7St4WJakcNrKTYFSJTQ72QetYDtsb2dixQCLwNgUHsrnkVfFsvWk2pfNEktUmwE8MVPDgwk2Bo",
  "key1": "5ozfZPPbVYpGfBhiAfAzXC4ts7XjWCvDJSqzevbQuE5iP1FS1Pp7SjbUeB3BKJYuKAztdDUEPfNhHfN64SHqjqLp",
  "key2": "B3rNx4hJdLYn3ZpjsJCP4r89t9gp44ypV5TgKhnaE4ZuYpz8vxRvPBdTdFDNBUZ1wwGczT7CFbwHtKwTaYa8She",
  "key3": "378TGeCrXDwAN8t8mFbPyqjKHkYz81Vs6Ng8P4DHo3o1mqZCXyud8j5xTahE9T6PwtXHCrvaosegxqimRwYeWah",
  "key4": "54mP4n4V3g2ZR9UVkyyaS5J6pgAy2isXNyZnGszN9SoQgHRMD44WVdrZdaDnxNGiAKWLoYoyeCvVmLtGco7Vy4jA",
  "key5": "4QDwvXJfFHrw8jA2EdsmMx4RfBw6etgpYW9izX1uFaHShoBJ6vPrSDTttTd3S3pv5UE4HemLuGFGM9CaWtyoJrDw",
  "key6": "VPMstaip3DF5NqVJuP98Vvad1xsLF3X3wdALjnEghPepVh8VqDKrxasJ1tPCLnp4mK6AGaYJeJRzzmX6dcU4RDx",
  "key7": "2S2m57fWnKoLwbHz95ak7N8VkvRFhzCuDnRHcjipJqL6DEpxUqVYMNXmyqEqFzQ8jWMidZj9tPUUA5nYFKupYBAG",
  "key8": "3m9kFgi4VYLMFnx6qN6cD4RXddR1QbjFJzXEv8e9ZYut2Co4rWdaMXZu9yscQ58MfZRVoFnKjtVL75hLF2isvFVJ",
  "key9": "4F4kfgoQ7vYCYFh3DT7KEnqEpDEuGXEoxbFNfSGgeuET42M19rzZPN1ZNZx4cdSTiwMw1T5EsZUAo43bJM4MuZhE",
  "key10": "4NpCLHtjZdzv1cJxz2jQPUTuC6TmtiM9jrbuZf6d7tprmNWCUNYhNXfnZ4JZzNwN7xpDawgyNwDy6ZyEiRxjRL86",
  "key11": "5EHYEEHAcC7cbUpzLiQacjQXb1AumNySgKqCViyyW4WqhGpQzRmkwb8nLhbkyQqqeVBtT6Sd4qt5XAwbKG4pC57f",
  "key12": "3T4UDtAkyt1EWr7ERdQ81NQRtqDqz3XyD8AKs1DfesSq23DhJRj6Ne1xnfmDzv5GJC71H85RiF5KBeY7pHuMTf4c",
  "key13": "5z6KkSoPs6ZNJi96hDdAnJpv1stcSK1nT4eyAZtNM6uRrma8PT6SyLppfV9SQeaHkbBCzGwLxpHLSn2HgvAS5sxv",
  "key14": "5AxRNjHriSCHD69Hb3adHSSuFg4FRpbtnRbVNjvL2CzU1jgucUo4MnxfC6J7DUq2KvQrgYHNY6h5RD7yGbQBM8PK",
  "key15": "62Z1kLM1gEdMfuEjmEH8aRxSk7UG629VfVDYd4VN76g962dwd2a7C6oWHJUe41tYSgvMw1gr9SDBt87NhUH9dD8M",
  "key16": "cj9GEkJQg4acTDhgNgPQraH1WpvQ5zRDfQLNzmQRG6TGWycZM6UNFTvyg6BxKd5JLsW7KgTRKb11kK3wR9DdPW2",
  "key17": "38udF35EhqaKUJ5P8yGoH8GHPNU6E1GMX36aiwvCiVCF9yg84fshQ2L1omWNc5C7hfiPbj1RTVeXsyzBTwtbndb",
  "key18": "2srDQsBXmphoDJAWomCfXhswmD2GbeXVqrmLUAzQneBSfkuUji5kLYSoq6FEQS2fzVaUdbjCYADDuWooxsKEV34y",
  "key19": "yQVo8AxQPMKLmPWuRE25Hw1nSoneWRtvSTj6aq7dxTU4a71SYwHoqCPQJmL1ubktykCBbT1DmzfEDtHfNdDS5za",
  "key20": "3shU2WL78wVr8cc1pfBtGg5e1mzfvx6WhjJ5dkJwP7pJn4Rbtn8ysoQ9Ca6vP1dYSY5xAQeNKdf81EjVe6Bssng7",
  "key21": "2Wq6Ygo8r5T1ExHm8yXQcX5gb57FdDSJy3uSLUqh6hQM29s1q3YXgjibZfcUvFrEyyiqt22q1cd9VZk5KBv9zZvS",
  "key22": "UbPhzpEyQUThkdnyqXybHBqv6rPaxvxmcHRCXTcR7Nx86SXZwz1pqxnYLhodLiozcVyC7M2rB5unuXf72i1UXSj",
  "key23": "629ddinWn8Rbhd1SFnaxc3gQdfxUBJ7amuT6n4kbCJ8hVjdThSBq7CSDNf8DHoHjAss3fKbVDA6GxaMNNsb1iptA",
  "key24": "5CZkPg89tabtTQZqsosB8DofZ6q3xkkSgMA55m6pziL2exWku15fCVjY3bhGTCMc11jgg7aj6RMCgRBDcN9f1Hyx",
  "key25": "2VLAZyNUJmYV6D1LptfLr7vGPRkZg44qMdafXs61PSStGQTzPCvsLTSUZdMVo66aspFdDgizRe6a1PnUebXfENUs",
  "key26": "2wCD2keB9hE5J4yWc5e7EUK1Fv9xYv56DQwn7keb7MPm3cGc2MiKqCE86q4Z4jXvaFvqQDKQGMgw2zRKQxzHUKRb",
  "key27": "3k8gJaPXvowZZWbbCizsnDVHcBjjx3pcbm3PCAvMbtTnKzmVPbSskgBtZVqn3GDJ4KdMmvQiyo2H4ynF8v79CSvb",
  "key28": "2w8uG4kVixVyXonGFpUygWTuVoAovciGayeXiCn9J3zZJCiSeq75RXk53rEpJFCqTm94AD7t7SCm6aLMrDehzZJ1",
  "key29": "3cCXryoMpDE5hEMEQngbRnb8pvrXNDVQArqoc56Y1o83YkqJFxDLSUgN653xA5zTGnfDVEJJXygCfA1TqFuGVZ3z",
  "key30": "4L2HMtgdcuZcoPkhsn6W1y95jVrH9fRDepXKJto45eN8HPnF71CephMujJsv6FuRhpFbqLxiDHjzc6mFGwuVrRBs",
  "key31": "2k2UksarGpNNfnjR4Bi3LW3c5YhBcT9MtGCsrzKdCoEcqCieepVvCD5TAXDMcegMUrRkw65epTGBK36RyxbGuGSJ",
  "key32": "XP3JvMTRxMWa5LVjm4ysL7vCcMQ5b7VQQDTw1oCHE6rU8XW7veT6VL74xTEpeBPGyd6jfEjQ6ck1xQ5VS2zD3XT",
  "key33": "HpdcjNp4Wae8UbtutGQGhzU2bHK4pwB1m11zyUpSZMqeTkia3YGDYTQMZkpFR9wTzAncZD6gcNzqACe61NpQ3Td",
  "key34": "3NurECZbHKCwnqeJ7ZXf16QeG8gQjU16HXYixeKsyVzf3x6Vx2ZANrmoMAYsvayrvqXPZ7NHP9gZp3Tfc3bv1cVF",
  "key35": "4CsvKfg3jxntQxCgiqUVytv9Fq6B8YcZsTnvB7xBZinLXc71tErcfAehdBt1EYJyvjxUPKmgLdvUmLk6GxwHmp4z",
  "key36": "35uewuR9essZUyBc7orKSK3XQbzGwQh5LrNWfyM6HEJHnGjZFeRi4CDRU187NxJGXrWHLJ9CR5sBtPnygEFgssHc",
  "key37": "4rKejPVbHDL3iyxRSp5G3ycNjS4M2yMugYpddDKq7xp43wttp5anVmusV4fepdyViMdmZDcGf5w3mefnq2YquSHj",
  "key38": "4krYnfHRrsLxRH1xhpq8QQtKizH3dLYP1KbcMMciogGZbXRZoEwtitJxmhCybJwSetgiKbwxFf13Faijd5ddvx3K",
  "key39": "49bGJtTzx6h2RAG26B543MSNMvjjg2H1Goz4cNZaTCyjxNBoGurV7oPLPBVfSnPLLqgHoR5Ps4mX3Te9ABjhdgQ2",
  "key40": "1279fju2xaa8p5BAMSQF9noVvyVQrxCFiiFvcy1Ack8rEkmSrY2NthsuNtM4dsEsZQBAiJnXvjXZBdM27kM94vZ3",
  "key41": "2oZL19ZubQdA47w5WndbnmvW75jzTmBUrhjptLMsDqToPJ3r71z8739PuTChLVGhtPQVy3vC1oYHoaPqacu8G8ca",
  "key42": "55GFtwQzmMk9B6YJCoWwjc6pwrKbib5boT2ewRJxqJgbuM6jiYFdvSaexE9EGdjHuyBqQJarwnwU79a3LHzebwak",
  "key43": "3FsQYTY8Es8KSNNi29NeB5y6JUsKhZH1NXMapD2Qyr4oG5t3BgdgkpeWVbyGv6jFD75Ze5K8vnNfCiFjg6jNM18s",
  "key44": "nQ4oLTbvDEVcJF53mV9s2srzavcpiEQMVx4z2ZaCei1rZgXHoFv6nKuEVH9iPYtpyBtURcZiBUjMrykYow3GsQn",
  "key45": "2iRiaCkqk73iiPxGd8JYur1LpwkuP4126hd51W8ALjkWJ3wkryv5gYM3fEA76ELRmDnVKAviFtb4fFkMT4JC7XpJ",
  "key46": "4D7iVWWoLiU35xtNUtCRvrG4Xpt355LRVWqJqMK7yZLyMzux1ec3Xd6J7CvW4ALvwD2jK7bY32sVjqRAHCAnDc3b"
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
