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
    "4BrHtuWTkRJgA6jJncjbGUV57n3LyX18z1rKupKBkzVCBqE1KTfj3yPnKJhoMCM948JFUnDHcjNgyk5LCFPB9tQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJwS2PfrBphSGV5JTz8ohowVNTrpwpUZGLDqyUd62HYrGpyX8i4HwZuhUBDbp5ERJpr3XFw8yNoCBLZZoDAiAmN",
  "key1": "5RrYUTG76efLhKefHgLp5JFNez8iFnAUQCtKeDj2QEyayhiRkhDZCiic9DaPTF9pTMghba7g2zMKwPDEjqGhzQaR",
  "key2": "4RyowoC6f8VuoRH62x2MwtuqF5PkUpqBXR2VWyewBu9GtEJxvQEv73wGXEfnTxwts19ETBok55iKhx8kEgvjy2wq",
  "key3": "2xGKps5k5DcTfU1C2kukCwnUarhaU1y4d4QWm9onB9kqHpGvWv1ZnaRUkU1hrtRSXmDxxwwUSP9swVBq8RZvwkF3",
  "key4": "3JUmMNKNEEY4AKP1VCu46LyYZmHvASVVzAD47bQU4PVGH415ueRj77aapM2HvhUfnTsUWbdQjJYcUiNjdn4NcEbE",
  "key5": "b6Nsv8xzL5YM3rLVtGQ82CSCka5s24BqPqXK21qLQg61QkXZc7A3rakeEQfyVazELY1g49JvFmNiz3mny1X3M4u",
  "key6": "4LAPDNoZTSTqzxxeR6EcdPeNmbDUhpNtdCZ3P5uGJLo7rEQfngeBx2KYvS65woMgpASLnv3JvTwFT3AvkNDsP8t4",
  "key7": "4oFuPpvHvMyCizBPXBKWAbVL4yy2yjFfpXqCFTfoHD47zfmP5x8jU6guyCAqdhjFAzSvp1MnzSWCVApeoGax3jey",
  "key8": "2yqQUtaFgteA5rp6nirTj4iRPidzdghTDptszi7dS89HQ8NgL3Pbv8NBW2sAfRYaXZy6G7FmpE76BRvMZk6eKQSi",
  "key9": "4QUNF51Kifukv7HFz1wgijBN8LaptZEWYAYJEsUWwAaH7vQ9xwfKstGEZnHgcmnGDL2AVgdt12WE4ryB6guyK6RS",
  "key10": "3nYByPCFmyT9tNUXrx8AP1JVpCVxjgDJH5hkoNAH6j5emUgHAa5qr8gAQKtkDEU97Maytb8gCbjAJ4t28YyXyLt5",
  "key11": "4GgWYfJin5YN3tGmzjrRZF55KSCE5Yk6jkSqLrRPbD5r15jwVNzY4mhP8CyXauF9r6Vq1mCZ2abDzwAUyzgbNoMm",
  "key12": "2TpcDtVpQeynpPLvMfouXwQL4pBBXSh2BB7XxDNy8fpGumGENqcJZK2RVYkhvhxo3fijhfYHVzRPwayaTK7neNdR",
  "key13": "4LjwjLN1KPQHBjdSJ5DFC5Jk9rH2Qhq3Wqj1ReH28Lq9xPiCrbzzdek3CaukAiVr7PyntCuJd3nY7m8VHGGmu5FH",
  "key14": "4t5PHDBJxMNytebNx9PwLit3Qwdvcp75McMSYV5PxqAQeYoY3Mw3qwF9eXgjTBRbEsQGFbpHrNm4DaGgVCKaZjG9",
  "key15": "4RvkNTQZjCuTiYdGeTEHZ5ZLB4Q3Fanrwj4ZpuLUQGUDnFkZ3Ft6WxwZGAZGuWBydUjEat5GVwivahwjfR2goGpF",
  "key16": "4oNKKBFr4zXxt9sopy2uabeA9sRk1Fs9HL878GBruHjXozXL2RQqQv9cHQ7NtsApb5o73Eo78YvpQdgDC4CbhCDb",
  "key17": "4icXapSNekuBZgGmjX6J7HFNvZ3tebZYYYjNuCxnrU4RsDXU6unMv27zph26phpHzAd5bLvKXgf9AeTzgNMTdVR7",
  "key18": "2jZfUKTQmtR4ZU2qHpdzNdvKAEEThRr4PfU1VahQsBSfxmSXXFzdqVFiohCadMwYU2sRcyA16prm8Lf9NDCAD8qn",
  "key19": "3zx3L1SMvtsXmBhgoXva5UKs92pBctdHqBiQmx2c3XY4aDAZCDamAc2yit266PtoBbH5BqYx3xFwiyaBANZYSGzz",
  "key20": "55kwoENFvvKfxQ2cWZQah3db3CFuZPnm59dMbeHLZEgPKhLeeGhHvLaqgQ1YAJgjJzaerMTDf1doSfZGs6B5Mayn",
  "key21": "5ebwm5rGHfyrPJAEggRNAyKnvtMxEzj3ChAdu6r8VDHxfWrBNajrcxr8p5tc8pBFLN3KsEpVaKywpKMt84JjLPE7",
  "key22": "3251UVuFvAMRYew1MMEWTK4AguQpGSr55m97SMyTdbTpBx1oGfKnFL5XLM2nsAZQgTe44udWaUij2Wan2zZHU9vK",
  "key23": "2Zfdzdokt9rTrv7kCWJ5gaYcpuSJcC1Zt9KJAAYkdFD5puEjQeWVdYu5no8G7Pf8FU8Cw2M6geyxPuwewSbNd5gM",
  "key24": "4M2937RRt2CgybbmdPoLm9zXjqjzLu4vhgRGdqp3A81wR56XAMTSyJGmzvLW1S78zHfbD9GFyrhbdTjzyCybpCwX",
  "key25": "4qxgwyzyGDcU8us2wXeY2GuVRAC7WhwqWDAAgDL1zNqSbuCsnvtKshXc9KufRgtpQK9LQHHhUFeQEuRmHeGWUm6j",
  "key26": "3Bh5vRqPjm8xjMuS4V7ogrCm97kswxhK9braEzcGDku9pNR21YZDaFqMYnKLbnK8kRo9ggDdoPkRdFssJGQqvsbY",
  "key27": "EBXuyrZzDMSUmCGZAToj7U27ZW5X3sAF1S8B4BFhNAUNLPxkGZNQZEtLPDtYRiJnNcJfqaXZCzAz59s3UTubZun",
  "key28": "4fB132WN6eXQw7TaWJQcj9kvcrTnGDpDx7ZihsHr4KvRqLUe975TfUJoJ294En3SpfuDxgkpgUzw3F5sZCFcUVC2",
  "key29": "4L4kNjWvaRWsTwEFZVs2ZC1DGge6arYjVeHAiEFoPwN4B1xvktfREjNePDpyEYpZT1tZ6J4edQfhRHapsTc7ZRJf",
  "key30": "488oD6MiMBk6NKVNc7PKmNNCP5zteVyhBswgvQcdAvwtLmhq3u1hiBMTi3igCDHe4sokLdwVM1NHb7fg9m82HzA8",
  "key31": "mTzcFwoqEZEjRwzUzZbksecLtTzCjkNEtUjLwshABYpRM4H5kzvkLuxNPdkKHxxv4m6WnhvB3HPsg4JBjM6kfn9",
  "key32": "4bRHoddfCLrGfMMNBZtJqDjja1hWBpuuKH3zpkHokddWDZAnvqxpJ4Joa1qeHW4hdQPpcvW1UXagfkBoNom4JCL4",
  "key33": "241pgYMC8ioh2vbC4WJ4HBFVJfKHeYRswzz9NUbE7pxevaN1XnzoCtjvS56KYCduDLpTG3a7aZqRX1KDo6xVC8qB",
  "key34": "5iVe4R9JKzAC8U3uitxRER2VVKkfXo97EbkccgM3G97YGiVz9k3krNN5PRLVeE4ao767ys4wxxq7V8dmE3u8bp5y",
  "key35": "3LeGHpFB5giZV2VVNWBH1ttN5ENzwt531nwGF1ZfVV9D5TebcKWupmqz2boNMrTRr7rk8SXAvbKUV4NCW2MjNkdK"
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
