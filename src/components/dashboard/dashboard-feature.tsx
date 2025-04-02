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
    "34aqeE6yEgRnfRGqBi7G8XbC13zhkFxBTyxkeGm6KSUsWTSy5n2rHzzbd6oRqfbpWHbgoUdux1mW3spxdHeXqkwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WitL8PxznfCh4KZfebdeihfoEF2Q9pTtZan54DcQXJFzaR5JCTTnDjBWnRuJc8zsyp9GZQY4dr6izuUbDi3wGR",
  "key1": "5szJLghEfQKVrZ7G53y17H6NusmZdrh8oVmrod35d1VvVJvGqZGjhcbwjwfxQPhWm3368RHDqmCZ2gNeoYZQzxAx",
  "key2": "2Ybfy8aqqUo2V9rocYYPhnNgbz9CrKpEvH3dX1YjidUew6eH9BoR4stqssRLedYsGC9SZfheqvSTs7yKmk1GhYXA",
  "key3": "3zjMKkDx121Dxwztn8jGQvy8aSb2esyFPaGzEbHRothed1uG5Zj4xyeevJFi9KGD1UKt5zcpwb1jwooPBRRmgqPM",
  "key4": "5FKNivGDeygAwEWBKfRXeRtSFU6zARNUepFXJLRtnbumQwN2NQ6VZk9jkfabhXpLL2AK9Lj35Dfb5TQiKc3x8xWF",
  "key5": "3iBafSPU96zCQYuYmeKqEfMdwk8X4c7u6rJdanb69QFwXnbbXiJbTKbedyvCk8xf1TErDpzuCLboKjizZLrus9ii",
  "key6": "uyXwt7NnqYF2D29UMsHYGNmjNaQAhyCam7BNzkn1PLhyaEKgHz7P7aLw6CjmcTpm5kAAqYJWM53oh4XtJnvNS6x",
  "key7": "5nFWG95u4dCRfv9JfGB1bcqS3hTpYMmS5URgeKoEFybvo9JEVfD74rSvVwVv3RZVyEzeMS7AHD19cFt3gkXER9VB",
  "key8": "2ZAGQS3ycV5a88XUbgFsk9Pp6ijc7YDUfis1k85PH79ZFu9gxh9MQ3WHRGpPXgf2kSwoYXo5JJH2a3A8AKhBbnv7",
  "key9": "4bHyYc8QfoBDfAwNFqkfg3oGU63a95rFkx3iSYuSvq3KXjeoXrLrrwMjbxsECuzB6oxRXmwknjK7o8VqdMePRmiG",
  "key10": "5zVLsrYDH88Ypj6ac53KAft6EwWPHyzrLqWmeYpnNR2MrxweAivfmTEgxAyuvLtDeGiwvKsjdmgfNgT2BXm6qyUZ",
  "key11": "4tv7TE1c8vD3fLQUPUm8zJezgpCX9pD6wqijZscmYfxvnCpeFAdBYCr58KZnvRoZYBvwgTEBgr6P1g6HboKPXgoA",
  "key12": "5NCjG61WbodP6BkNWdddhMCcboSGUVTixrowVGdeEnQe9T4hkH4kvrYxgiUUKwdkNHzMZ8BZGbvXFnfdXcB4fYwt",
  "key13": "5hHB3pcsUBnq9M3eNCjRB3F27p1u2aowdADUkzcAQF9vUyQhRx4XtjMGexTK7GEkkHf4nqxwERbh5xTkD5sYag9E",
  "key14": "544VAQ7dNnipXZjzy6SvhUi47bTHy6V1ZqPAuu6jMCTa7optxwKbYmoR9Yj99a9z2wtF1S65iXBUdHJQwCnfPpi4",
  "key15": "5785DMn5MGCyLBUmSEqyvK5Sa8kEzNeahEZZjynUkt4gK7Snv5R2iDeNpkGwtdHdkmqRWSrMEXmX2LpQyDMChCwU",
  "key16": "5nzz24rzzsMu7U4eLedvLJaVWmSU9QqYBocQiWTeUEFaQf9M3jyyFt71eTQCFNDCMf34oBeaJgCmbxDqCjUDCF3q",
  "key17": "2g3DcCvjSV8XHuANvKTSVMGkxJTwwLk4WeNz5RJHG3QUVHGgCMs38e1LWcMefCe3aphaHWBZSxsrSMyaZ1v3niSz",
  "key18": "5PATkWgLy36X2VvXAv5yRkyomZT4bNT6zJbpaL9k32ZmyCTSvCG1cs1nBB7f6dhZGYif75sR6gYMQFu6SUKP57Yh",
  "key19": "5keY6knvohb1dKxWyPQoBFYLZPjXXL1E5M5ZZ6KF5vMAfVLrPHo1hkBckyVxwNx9E2RUckYbEcg64xpKoxLYsbCq",
  "key20": "5MPFRfYE9eDLfjX9HAqUCxzx9VbvqNgTSiFNLcKdj63uqmhvZs1mmLVMNq52K2dwp5NbNiohDzdMURvcwu3rYHea",
  "key21": "5Wwu8PbUmeZ8hk4ymWBmm1fBHNpwS9YaRcAzHAagU3nVHkWubAN84txFcfP2K5pWQ1dVWNukfzPPzzzgRUWGftjp",
  "key22": "3sShALh35UWVKAKU5j87qfjvjWy8Cq4ZNLYynLBNf3WzCEScLBjhQc3rCXssceciQXAyANjLM5shyGfqz1zcwa2v",
  "key23": "36VVPuaRNUg9ts22BDGVvFLW7r8ew27KKbwD6ExvrvTStWZ1f1nSQCb2AqZCGKzUwZTSPH8scDdb7dhTNEi7JJDf",
  "key24": "4CH2YNU5WzY4afUpfX84iuq1sDVfjvYSQMBwMtXSTmGi5VStbTkjgN5qwJuzjd9xnPpabvrosXLyiu9JPjYNAEBR",
  "key25": "5Z2mcX71m2aiKcBoYUh2xwDedYuV3dPPG7z6BcDPB2hx4HtvNKbdhqb7SFDGv4VFFHKJEWcJmGGEU5LZfX9Sf4Xi",
  "key26": "ayx26PNqxMEjEzxmn66ZCso7GJpeKVBSW2cJQLq3MVwg9PZJAJYF3jA3KXdBhAd3ybYrrU4VmdFvszuQK5DH8p3",
  "key27": "2UjJYPUHNm4sAYg63ABNAJktz5osCsZSb8CrdtBKUSD5fsdqpPS5twb8GbgrcJZpcDHZBEPvoWnU1BDTaSvZ7tVB",
  "key28": "5cndfXU9REBkXUjNefWazEbXfPTuRg3tYWMLE2PZ1urmxu8E6QWeSoW4nNp8RCL5tLGKvyUG3fTLiRgpvjGGt5na",
  "key29": "5XnN9NrRn94TWnwEZV4cJV64vR8BoAjg7rNCw5Y17QfQyGqsvTNF87nUFRVTLLW5m7X2QArcS9ohDTPBMdEAMhgn",
  "key30": "5peEDWXRcLeYAMKfySDvKVgfQf96i3DJvq1XE5u9gdUwH5q9qzZadjbtkPG6cfEWZhZv1bvThcE1nJw33tmBZaBh",
  "key31": "hDyz6okBgnqLBTL4mc7ZGNiW7Kr7KWP3EZnJPLYuXjixA2m2q4oHETpvMMmh5WKoysCMvgSDYZQSZD2MqQgtAcd",
  "key32": "5JkQWuw9hRnJij1wa5pDUXNQoPCdPmPhjtB3eTtSSv7Vaycej62F9sDwbH8qwAM6mTc2PcQrt6ic5HXQUAWrMWfg",
  "key33": "3eYPBRqwrLFvynWSgVeKg8e3vE8V5VWoAzkJwwfSuYbpsQCmbwkfKQryGo6RjeAtWhP16J4TuK8KZDg2E2zkoeMY",
  "key34": "5Lqhn5G7ay79sNN8MibTsQYGcZmN4x96YGWd81vRSdGnzMeQx5DhW8BQGu9GtwgYMpJ9qkZ85S7f31wGLtSkz3Lc",
  "key35": "2eeKFKL3H8LMU7un2VzpQWD7wA34SndHtrWyuhvbJjeQXA5kEQUqoDEaDkKwqDc9ubkidQANo4EXXPneBoY7KF77",
  "key36": "5uQiEE9BRetxThLnQ6SsJm4XEfH8ZHCDd632SZGpBdArjCAAo8GB6H5sHPLj1KjKbZQ16SHHxmMynTZ7NuGBhGnN",
  "key37": "4qLGPdM2Zp4w7R3ZrwhLCLFmtVELMoU8Ews6y4nEmi1CQqwSiWvBxhB6CXv3haMTJkoPafrsGCoBjKHzLbeXLqFP",
  "key38": "yGDiBPH6ztSEgzSUdAj6vh9NyiULYGipX5HJgtch8PUZkRUGjfStdmat8Q3249vLeLRyJ8coYWXmgHrtDojAydF",
  "key39": "67UjFH25oLu4osHHfjNWvabMxDNyjSn8duDx7PqBUiVK69rTTRdsAAHEVCz3HABU6Qtb3WAVwh4tnbv4NSEEUK4"
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
