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
    "26ddJcZNtHaHhPmXwVPEBj3UCbLEhrgYPRZLopLjFyVuGqVbRC6fVkWBvc4xpEHE6rrZ38vWJmMRpeR9Luk5vSAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jWHDBgfvvjBuvfxhT8a6NuzR5KqLeCqsebUicSqy5sKBno5HXA8oQfKRpXdao4pwCnkkREBPZ5voVhL1951s3K",
  "key1": "3WhCUxxqDdyUTYvQZL3LiPYzkQHXndHT3ZBwPN1Y8jE5biM8TrFbNqzuoaqCqyNauXGnw2zDCkTy2TR76PaMs8rV",
  "key2": "3udX2oTodWAx6hPH3cjRfk1gzxFxu6Bv5ZQJb8M9zpgazNtWckk63B4EuiyEWWWH5kAFkf8x9d2CRkdEErnoPHGD",
  "key3": "4UVwJNktL7oFghRHKCbzJbWTRfcoP43c85NhBkzRUToEJ4FgTYWQCoN36on4GwAsNZLU6ZaJrqvZtxZNBT1biG4u",
  "key4": "q6RN6P15grC5T8Q3rXbW32gdU2M5CfGKHaeUgVQp3Bynt9uM5iYrcyCtsR6QgupW93Mw6qsukNvqoPcTyXDBNSP",
  "key5": "3F2RrBUZbLyjVxcoqihJrMxNdvcJUmtLwWgLxjJGBhtcEdCiSowCxJoLuDipkxed2JRp8VPCMWpv41CGHEp3UJ5V",
  "key6": "4f2B5j8t5zWqXJaihvWALPYwvUh4sxL8P5BroL3qAhmiJe5xjnk1BvLGVc4rLg7w4fz4dbtHe9f2V8qwb9MMsuEd",
  "key7": "YWpvwKAovXenuuBVyq3Y7GdWfHUpuTpSEPfAEe3Agccpi971VDxSjuU4QsFSzJhqGK1fuWPzwgD19QAoiCuUSvR",
  "key8": "5rYrjQwq2JaSjF9r5cvMufk1RA1w6Y1xVW8kXPwVR8EUHKCjEDsWTiSQLS998JKPN218UbU13wRmJf1YWAq8DMJQ",
  "key9": "3ir5wf6xzTJaQETPY1SMnu5JUYRRWGwdwgdWUFWjR6LpVbPQYcdvkoAWr5sgVMW5fwXeK3UaoBkuR7sNk1BoN1L",
  "key10": "4Z86dnxGRxMiSLHku2aHhZWzX3FJKKaY7XehkvViGMF9PgTp9st6e8DS79G6VZfT2EYdm15716qV9RD8gJset4ha",
  "key11": "LgAsUVF15yWRd9Xsy5hwh2DSYTaWjMhqNdxhxsa9Y9s3tgmfFUcbpHrGzMsZDqhcZKQGjtrjH72hTL9CeCNN6it",
  "key12": "3RS5XiQF9AkW4fk1Gj7tngLPqG56H5MQ988XSmQftiZUoxJ3SqiT9V7UfwQScHc7DCzPtiAKgmLD3KUKA6HnaJtY",
  "key13": "2yYwkGvpt1f8vjMwoSfJvuyqUtDzeUrj7f4MaFS6jwuUBt9cVdWdJzugH2vr4pLdQMoxQkE3YahdoP8P5ugfEYAY",
  "key14": "K8jJkGhp4zBDLPjfnhoTjWxiStGZmJ7F8bfsxUqsgwPSA9jZfqGY8AGH2CGhvBX2isa4tcZXHZL2wAWLrJpFYaz",
  "key15": "2v5Lus6fskgGwHJJ8VupX57Uz7gwbrLNRWzmW6EC6c91jT5uHWggzFHTGSkMkj5YaL3x6vZCFJdwB52E6pnzsKKt",
  "key16": "5NpCNErdyYQaD7wxG5PUftDR2nR2MBytKg2Looa2BsSeTU4qRaM3AwRchcET6smkg9tLbWjq3KjFVhvy6bFXLcQi",
  "key17": "564LXaRF6ZjhVjB16e4j5u8Q3qytYK4rc11DkccrzMhXcd1nUCmuut2HrJkQXjC5jUefErW12cfSuq791WB5gY88",
  "key18": "3FiPtrmYMSUPKXLdjbJL1cvxxQmfGyPHxoYDNsfH7tMw22Xmmi8SgFpeGQUiiaDbrpBw7B7PYX42Mu8DvFR2QfTh",
  "key19": "oGWy2Bxg5gxgdZQep1pcPaBeWzEGtjGm4MU1d8HR1qC4zVwSS3XrbUqSSRNzKGkr6oaKqfq3A1EYrEPQZpnWM9m",
  "key20": "3bh4k2zwUdWxQWd1JbttkzzHiY2K4pZ65YTjEvkBMbAz8zspTqggAsNk4xgVMZHidqzN5P4SPDGaTDFunEXZktRP",
  "key21": "zbZ6RVLevY6z6wiW7T2VYBToijHCt6Rbh6u2RMWtq77G4Lp1kHYsXcheWwSR7uqownJ5sSQiKtrrGqgpkkEtZRs",
  "key22": "4cdYKFsoo7WVTWsmEHTpqCNgLGkRB4FnkM3yGVn8UK5z8pDr5amFD78jf24j79d618xc98YJTttCYWs7b4nQ45s",
  "key23": "2EVoKcdxuNYq8hYQ2pEYeonoExjuAKLoSEcKovufQUaiTQAsyj6pt5wWkCARAJwgtVwui9tgQC83KPYUafUDJG7j",
  "key24": "3NPLm57WiAHMD3Pc5wy95nQDUcCUBJEPmFkc7EkRYXKqfNHk72XzbpVwDcbhDHPseShuovaMAwqEyNb7ut8J2tcL",
  "key25": "iM635p79GTUuN2pghiXn7tvSSpHof3ixujFqXEJyphkV8imDEu5oHznc2uurbom3YWEpcG45s698XsCdUMGEzeF",
  "key26": "5RkWogZNavfonLZNt6bf1gUTRtYKehBS5HvUNu6zHKep4KKXTVCt2Jmk5MnCgzdfz2TX3qYPQJXGYcMFcf1Vk54w",
  "key27": "4z2CMdDPMRXReSo4UurZHuSNYShKuerPnwM3gBuPhdoebw6LEAW35PEuc5K9noZBtmkACH1uBUiUhnZuZFmbRqBQ",
  "key28": "6onUjWwdLTYPun7ayQvaFKChtrhY6hVQb3injV7nL2jGFoo9rUJJD48aZkz76StBV2yzqc6u37sf9sZzXMGqccT",
  "key29": "4Ft5VFroS5BECcky3eEFq93cWMyAR731wUnUVbRzuqWQ1SbbApnoDevarXWKboMmmv3VotzShxrCkw1pqYUjdbms",
  "key30": "2i3a7j9CPBh9fQLZAHfJeZN8LaaKoZ9ACvZ2xpUjRe4XZN8V3pkGQnL3G9SKBTZnpoohLbMYXaT8otqSTFWKD5Wc",
  "key31": "FL37b8sacPBgcCXvqWtEkRJbL11duGwQ87juFhDf2NuoWxuzuLgCtZ2TFFWGKzPi4JbzKqSTdQYHSEfT567Lxd7",
  "key32": "2opX7LFzBvyFuN74fJr3erfxYYsjwXqKL626VTLZWwKu8dF4YDUVEWm5LQbmK1Jda4PgxkeyLF5R9Dkp46cCj1z6",
  "key33": "2nxz3qFb6MAT5fYq7yQUnpg4u4ZwVzaZ2fHDSEZgV1WjzLcJc8AKnE9yiMUSZm8AbdZN8JjddBSvG72khh1DNa7x",
  "key34": "57cuuJ1X2ZUPfL4tcrsPesNkem6Mx46FEVNNUNxk56aHthqion55KqNzhvKWsvER3De3njjk8tgp3kmZeUSrdoQJ",
  "key35": "37tjjhG6njx9nF1YYV5iddf7Pgchc8i5zafahcaEqzcjeNgiDe9VRAYua4nhv8gArwJg1n8hNqemwrxrCua8Du7M",
  "key36": "5iX2aDFwg45VjQvmzHjt1FCUHyV69mMRHvCn3CsazrET7bbx6w4btuJfEjg5dXTjeaEzLG4oKgxVJ1gGFQdEDDTk",
  "key37": "7kecuJUSqBAwi7og7RmpAQqZZuLYetkje5EQVFtVWgMpA9dFo2Xp8B3VYK1VLaEUTabRozdRCoB6okMxVuxoBCT",
  "key38": "5gMAr91A5zMgbRTKXTpHsRQiB6586shjSVxHsZZs62aZRm6Dy4vHicefBwYRELT7Zq68fjH4JHqcGzpPQiKWryWX",
  "key39": "3e93tsH1BouezxEpT8TSX6TM769dntCbXYFwEwo2JK7WQVjd5TAcUzVZERDXgPu2id4Ft2uHkYdtQrXU9dxzo6Vk",
  "key40": "3kfGQmhCxN15wcHK52L7v7TBqERr7TsBuifNDcFT3KVVTYfEEnvwB3kZeXuHLFw9KmYjCsyqwFn1wSyiBndh57XD",
  "key41": "3nzaRd9zyadyuXMduBTKYqPmkmGCCSSpsCUFPCtedbj1LFsNifaTYbhbpzG4o3DrPsSJnhrRnWpr6Z3yKM9LJyDS",
  "key42": "4G75CRDYtddgKfV1WZsPSXke5VtrqXc7ufVVosavNsc21Ay5s85V4NEmxbk961KpKXhAUz1ZFjabjS5TLgiVLP5u",
  "key43": "5vFUM52cG2abaUcTg1nSbdBhgs2j9cyrPhk4X5YCbi4GqGpTRdmswZFiJi3ajN6g5uEMbaUC4QWuraXKWL6o6sr6",
  "key44": "34cyCvnRMdwUuUNaZXabCvsVRsNVBGrZH9sA3gLexqJzQoqCZHwa4hXFAs2iBRwFCpZD4ghEucsZsVvKTKyShtWC",
  "key45": "i1AJa8xjhcbNFAKvTfPiEcEd8WRVVcQrzMffCYSAQPxfXYjniEZ3ouPGoCtb1b7rrdTsQ298BKrNYvTTX5D1P19"
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
