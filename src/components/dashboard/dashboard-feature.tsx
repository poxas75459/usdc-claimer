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
    "4UEgPg1HVD2yVM91cWGTBexjyxh2ZAv3giezPsoxu6fCysq2Tsa93WYn5Dpjq7RtAoomjGto6Nxtn3SPbtRWm6xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TfXLLxfUC7XFfbvw3WTmEKWaNFP5UepYaHckRwuvRBk4PKtzLjDUSZdg7H8P4pwi6Czp8PAkD3H2X3TrSRAUuwF",
  "key1": "3V9zPowjhyJo3UYjny8SL1UrikJVj2UqBrDh4rQjcE44sqPsBY32Hy7jdsCYwGmewbGMr6zRNwZ99pywPYMAePnG",
  "key2": "4cQCcictJ5NFSnsDmv6R3hSRQaovBR4XXVuae69Ck9mR6dsNXWAbzmyuRuokrEmxtNvTrSJnhsc7NyEEZLft1Eam",
  "key3": "5JR2ukYJpCrc7aYWvEKisMNz4xbHVbZupKJj9JjCzfVgB2airZPaZKtWaxRw2UxaUKJ2mSQ8yeemLMVEgNM39YX6",
  "key4": "5F52sE9viiZzXVWzEDf9B4ys5yJVn93q5BAwafiz5TXk9bzfu9HFaGsNEHtX69wZgo41qye9bebPYpGpfv75Kqke",
  "key5": "2he5qBKb2AWVxEVkbGwpadrS4jL6B1cUXitJwedtmUU4CxMWvuiVpnSqPD1Nv5hjsqXMe6X2mBfHX3QLjQDxrsSX",
  "key6": "2h56PtHwwVfN7fZkC1QUKfe8JbBC8Gj14jaxZhiXefwXWQeD5jNSfMMAS7upBtgwiYtDjbZr4hPkRRUNPTpthmZf",
  "key7": "2ApACDdcJeZ4MCrU2CZWEqc8x8HmuTWwz4peg7UKuL1AMGfSfdmNUAy96WZBpC9NELR1Roi9BYtnNT2DmchJbVzU",
  "key8": "3Qw1Lh1JYwFHhAUPSqyVhgua65LpXFLwx4uXdfz8cv4jtkWqXEFhStfa4EgudaMm6fgoThDXju2Ap7QzshgzEZet",
  "key9": "3df9enHXQoohyzz1x9dhK7gnne8sUoZtZw1rNiZhiQ1CGqvh6sYoRAnXcTN7Pv86nEjHt15VfiTE3Npn1Nay5BwZ",
  "key10": "4Ha2YPWb7smsByZg4eJiUMviEYK9hY7qtRzYwzFDe29JTG11KYQpkPTGhnFXQ8wec8nZFqhWzzwBc9wHpBDQdqbQ",
  "key11": "3uUyTVUzxk21e9HmHwazA5r1LtXMHGpVsauTbsq5T8mX3pn3UMmRn55BzVoE9cgnXokvtVATeMrg5axBttsvyL3M",
  "key12": "5oqudTsXWxBdVtSQa8yMXv1JcP9KvmEGh3e24bciunG1kDQxP26wymMetfQmLEv9BVC4hrGujL5mpmX2D1FXKX2g",
  "key13": "2Gqc9ZQRS2aAtVXrpB7wJDCo3ji2PdjGug9VW5LtiC7i6bZnVZGfmt4nW7AJ9VkypUT4JxkUChWYTBbh5Ep5txav",
  "key14": "BuAifNqcxFKT5gj2geG1hDFSbHcNk1rdMUByAdUGU1p29wMTNkVgi5iunQXZqLMBhttsmTKCBfGrctGgsyJmBDC",
  "key15": "dMKJHh6wbod699YyVmxJG3wPTFzEhbFra85o8GCTM5bLZ4Z8WHgH4K4hoZz9ncNCkMHhey1MSu1HRoDVwJXeehA",
  "key16": "2qT2PZ93Scr3AbgfemJF3TGbWMHB4c7DeZPnpKP2F7gZxzpCBxUEScXmBD6fHoMZt42y8LhT4DJYsDp9VuLB467D",
  "key17": "5ertKhHXVkDP42kDwKGboRFzofMvipFKaLGfMJiszx1LQnhYsKoHzrybr9x1vmLmEas3uAiH8dM2Km2oaZ2hdHAb",
  "key18": "4tMq68rrt1fLbfjedeP14TCaLNP9n1pk6Tskt6u4K5T3ruAcQe9MhMp3wMiV51wrme6rvgjyTMEJTzTMUq3zLbeX",
  "key19": "3YpRmbzBWV9Tmii2yAo9mSHUVPUHquM1Wowc7sNPBgzyGUTy3sjxpDS6YLMFZd2X9T4FpaHHzaGKo6rB1Nt7EH6s",
  "key20": "5jyTB8ysZ1yXqUNGg8RQge1e6zeSJPE6b2fD8H9zsn3VCMy5CsDYR8k3YiPEmhmHCC9UeCqe7ojQusDSP8fr8ZQV",
  "key21": "2LeQBw4rmeCq9X3D23N4i7fwbeKjjaqdDf4uWNYjLms62rqeMagzKMiPKMwQgkS24149fH6Djei95UtRPTppngCE",
  "key22": "qFPfBSc8xEaw7s7N2uGPJX5jVDjxUdwvERVdfGqmWToEJg5JatZr6mNBuXsytoBA1hyCHqU84PktX92o4G7mpQy",
  "key23": "33wjBYNHQ48WUF4UiJpb9mW3ay9sqfiSZ85nkMPbKcAsGPKGnuvRt4oatwNTLqTPaDiEjWqU7JyXnS4p8odhU6gs",
  "key24": "5eNrhd38PVEoWErsDFqAhhPrw2RL1yTEf7q34DZTifMTrSMFGrdtz8Lrdmy7YeErzhFGuQcbonaNvZTkUfSww71P",
  "key25": "4LPWYMVFqYew3Hx1X6PXLHS6gsJgWRRNu31XPvdUWgQUww8hEsq1pQb1TanQCeBrfKv4mHby1AxQUNqfQ7MoSfL5",
  "key26": "pBgfVi36aMESSaUcq9jt6MeVb2Yo7FtEzfqrJxFwXr3zVnjRHqesRyQcbJb3iNt8Vz4iLXDbE4xK4VoRsQAFBwT",
  "key27": "4wLxQGVrLv7qWwfdX9AwNTaKATd2JxsCpwJfGzV1rR1w5wpRBqsbfV7ombtBbGqDTuRFRUebTx4y84Rzn23ddxmY",
  "key28": "3ZpkpqqBg4BNgREcpC7YJQcHLuvwDhhfZmQkaeLYRVxJsMuGuFDtD3ycPi71oYhhx3uEE15Qjzznq6nNXrDdXKkM",
  "key29": "3wCKEbctMkqNtBEx8QZxgJUn1qqRi7dnQiZpdAPvhX7mgesQrbxSZAkpEhwtqxkHMuq9gUFcvodMRK9nkPndR5i7",
  "key30": "5cx2Nu8N29CUAset3ip299G8sYkfLsmDbcqSquobRBeDJFWmhSm8Rg1WnrP9t2SYKf4vBLUQsfRzke81BnN1o9ce",
  "key31": "3txGjtP2uCoHTNTAej3UyZcn9mS4B4auJHk4oRNdeUwaV7mJjfYQzJbjbkABHhmPJvjSS2S7s7b8BKn3Hiijh8ni",
  "key32": "Jxd4YoATWzVCKwpaeGUdMBsesY3uDF8inyn6vu2eESsRZE1f6sF47xAPaQhVUGM6uScmxeM2BMtZqCaBcrT23zq",
  "key33": "3yWcctvf8Z1fz4eG2frute8d8zF6KUMbjftfcc2pnjPAH1chh6AuXr2F5ykcv5UamquazqfpwzNRchCTAK5HjTsZ",
  "key34": "2NxMJpdTZfHu5TRnitBZgA9X3eAtgVxy2oAi51FP3uPQxRrrCHuxDo5Yx12Bg7AYiUkqGDNFS6KdyJLvFjkMU2YC",
  "key35": "631g8n6bU82MAfGR1JaPjWUZjVFohcEFXVf7m2EXEQWvTuC64yacg4Nevjm42rUmzW1wBbto2KPMFZ2sgmpQJUE",
  "key36": "5JjkWgfbnosDPD8xEuyPU8ZXyoQYf4EpFnjwUq2xeqnhYomrVZGJKb9RQfg9Zw2ydBWjcfLGqYUkxXduREtrB7os",
  "key37": "5Ntu69VTdv4e6L63EpyC1MAnZdad2TPcLJqQUdkAixssJJCiwoNxdwtj51Qdjh3KeG7hz7duw8wb8RtwfNdVfgSo",
  "key38": "23JhnxF2FQ8uBQDiCPgkvoJ32XEFQ5mnAeCVcWU2zFYt3WqR1nkJqkKwkgSD9ufPVA9AAMrKpErLxm9kjdAoGK7g",
  "key39": "3FHRt2rQqm41rU2NH5oAN6bGYQfcKBb4CsvGbDJYZkN2CE6b3wTwxCxFiM4Hg6vvGxsa7KPpXofuMiyUUZJxBBpm",
  "key40": "4jpCSEcqTWqtVA9wXXr3tg31SLzGHq1c62m5wUYqUGYosp4r1xxVkop44L6LERACMxyETfuRt5pMdSW4qN2Tkptr",
  "key41": "5XpzzXkqqzV565dFn2Md5U6nMbh4fn5bacSmnqoFNeoicSo7mPZzYq9xb4Yc6U3uyUFnmbWvZ469SXnNhWiDu7uc",
  "key42": "5ge3evmt336iYYEn31uvcajLx3abAWes2JS8z66g2xpj9JpBFJHMv7Y3bGQe6mCTMfyyhxQKsgirVznw822wH2Hb",
  "key43": "2MEfu9hG6vPscrM7ZEAPK6bHYDxoHtScJm7ro6UK8RkC9T7ZcbBobYL6gokSqMwxFUTwD6uzvQnrA5vy1pLRn3N8",
  "key44": "2fezqmDo83njDnmARBh6Wih557LboicLKti6WT5Ri4p5YxNNodZYuyubQMRfftmvFLXSJjYuFrz83hgDJUGqMLqJ"
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
