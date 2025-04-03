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
    "5hfkWVG11rEpyERAg3yzEHAnHtCNcuSmFVWivPrPuYig7wSMvFRNi2VsZeFSmS4p5cbHBFPDeJdrE6QpkQwdnFZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnPd2GYVBAGM6DhnbCHMC9TU8QRgxdDEi8NJ2qkghovkaGHxRDLB8o9KCQ4dqCHY5eNUQfXaVqXrT5sPr6ULsRp",
  "key1": "4v5tFJ6tY9YEDqq6rbeLakXKU1NPve6GDtrh1VTMU6rw7NGoWdnjxtQW62GPMv1xm6fU9fVocwympVrPv5mZj1de",
  "key2": "5Gq5Bca3RzpUc2Cnk5uc5ZibjTTawQdV6H58S5t8413D85hbNAc3boWdLSqY3yUGQ949rBJBd9JYzSQBMv438e3e",
  "key3": "4VPuaC1PytmDL2jbkfdzb2kUjFQjnneZMRtfxtUmgAwahCFS1MvkkJh8G2deAzpdhvu7fchPJCtwrTTRUU1oDznL",
  "key4": "2gkt2KVuEht287vQFijwPTnhDkUXKo8xf1mTVQsASP4PeeangF3sM1sEquUfGx3i6qDaisww4pNdvMdjiH59zrA8",
  "key5": "2Yqm3dSd1cr96wQLk7tEsgsod3GD3F3vzw2Nd5LrXJ8PogmN3oFCM6YEGiWqjqL7JZ5tiEhc6oDeLYw21sKKN6vP",
  "key6": "3x4k72oMvtuEBECDHtKxSNgCqucnEnEvUWh1of5pyNWpsT8Lt5gB2oqpiBdA4prZq6w5MH581ktmEPgHCgXsd8Vb",
  "key7": "2r7ZcgvqRtpu7LTnhp1CzTaEJVz5ZCD1dGwE9jSsUcDwqdhcGokPbUsYpg6Qioh7JCK3LMJACSgnKcFAgozLiiSS",
  "key8": "36Xi6jF89iRyrbK1jgHfLNh8G9Aq1ivh7yh2nQ5dyVEx1MVMarrWUXKckQeTwsTDNXKwbbGzYBo4X1LpjFvt5jvm",
  "key9": "41YJ8JriYFd3HE5x7Y9aQuMoJ6HCeL3TasuqGvEUr9umENXx6h7oCQqkY5KhSS8Bcpf3qudemyKtPQD7XxXei4Lj",
  "key10": "26GYQJoozR25McbbDJjAEbhXrSC4gcszu1T17N1QbN4vACrS4cHAt4BwbopAWrECtnVgNiPLzyPqymxLmCKQEVmN",
  "key11": "2WEdMuX95R8YmRzA93VFn4kiKuoMRDb5JCCMP1PkXXFKrW7mWyrQmfSUPA5t442ZPvU5ACuBdYFLqsPJfqSYZ8yZ",
  "key12": "3aFwj1MwzBZqnq8sAoGMSKjxktc3a4ZY3xuXBydzVcG27AKM9ZWvkdLzdFEeR12SH18K1P67YyefqKvPBW1S74XD",
  "key13": "4SAfe1bNszycTj7X7AcM5rKUwuh9g6wbwnWn8jc7v5dszK6p3DjypYBpFH8atJL5Dp2VdGLNuYCpfeHBazWP9rJQ",
  "key14": "49mA9LGT4KZY1BbLA4fSqDvYw9ktzeqsrJAu3pGAdV5MymUd5Mrmme7wqKQyeHFCDAZVBEjHXvFKq2S29V4jxq1o",
  "key15": "46XsXwDHDfG9ZnuK9hcsbQgUFptW3morJ2CcUsXAjfkfeDTcQyrefPbhD2vEgVVaDfCBQoKZ7rwKKpsY4ee9EwuV",
  "key16": "4QBid9Lm1mRhQnVA6EvRWPR8BJAffd24gaXMiktDC8jFNaXMwf4j1Jae1RjUAV1kus5ptooYiBHcPLwMibx8JyRJ",
  "key17": "4Xr8ADAsHuz77NLZzLfwfseAcA2eGCT8vVyy6sXbh1sJiQtrRLs57qu1m5B3YngkYHnDWucEPGLQPjHaYUxjLpfz",
  "key18": "3ZSqFyz4psDxT41ibbffHfY93D6wu1AMFNyJhyM3ZGYbunedbQq4JpxX8BFPGw3JWxUg5h5uodSRd7HDCsuBxgvL",
  "key19": "3Z6bxotxjd81AWeHFDtRSR1TqF51Wzmc6R9MJP6eG8tbHWKfiMsPYgTRpkYivGKcmh9y6TBjzaH91rncHrgEAZwG",
  "key20": "4Z4WjMYLscQtqrGod9TC2ut14TK8yBNJ6gnoMPJQk1QijHrL9Liob2yuBPfxurxzwAVKfofjt5VAeP7piPPS4xfQ",
  "key21": "CZEEpwVF99oCfdKQn4UPKLAHyR36qvZWmhCWP1wHc9RjhHnYG7wfojz2ZGgFLfpqr4qaGM6wsqjdT1Qvs9D6bGh",
  "key22": "3ed9fcG2Pp3zV9yhMtbRWH46XRVzFv85YaTXj5qDy3TB7BBTNAnJvJ11zxudwZyiMa8nzimfXYrpELrpmfagpxZJ",
  "key23": "hXb842SQKvu9TvcKut9VUvfGYsWQNxowoM4VsJ7qYKmgiNZMY8pA5dwoh8SAwU8YwVy9SFhiMCXBc9o7ABpuFay",
  "key24": "2eGLXWZdw6cSfnynq7HxwLhSN8wyypnKw1EVe8ovhbgztk8PDQA3j54eaQrAn1Fkp7xsd3XXkaEXPFpmcmJvMCxZ",
  "key25": "3WsDqzR87za3z3EdhuZW2tX9AH6ZxCKRe8QvjB9Rt3hzHkPq3TVeTydmBnHJCiNBNBZYS6okyuTRRMrWmgcyznU5",
  "key26": "6fZEkFGtnjNNvtKoq1MTxf6CRuFVvdEJKEWYE7goq4NUh3L6jeRe3z4YtbSB9ZMMwtX8yy92a4veqT79Co4m4QA",
  "key27": "3wAdjCHVkDsUDxs8HrbyVr6jNapkfKABAqvMdw4wCPSf15aAJ8TqA7XQJqs5q7RtcXyp4wb6azzorCdVWMEKNHyT",
  "key28": "oZ5yGaVEf52b3FxrrHuEm1RfdzRegUT7ZmfDftvDLf6kV3iWkAwJxcpQwhnGkaycM4mdKb21r1HkLWa5K6m7EX1",
  "key29": "58WHpCKub2jXV6YH13nJoyUNTsjLPX56JCsMczEFQuEfLb2uX4Bjrm8wmwSqWRvTH59yRbojURmbVcXtMvtZpanP",
  "key30": "5hKhRn9c97tv3WG4vUKoj3DywbFyhoPdivDNYKuHS1R31uDbi57kZJkNfThSA4g7fyuQVam75Yfhm7iQtKpbkixJ",
  "key31": "4KqeWJvytJW3qJTYiuk4ZNTR1HHoQjujSS3XvF8XPRtqP5iWfMchSnSGA1TvxXPHfqv2eTjiDzJ1A7QRmwV6XwTY",
  "key32": "2xcL84eeLAgBxbTrZrXyvT2Qi5uCZwYeTWsm1AX9q28FQ78kkJcw3GxuDQVhbsC6q54FvrhhTkQNdjHLhxsAb95A",
  "key33": "MkPKMfA5HJTSQhzRH3MGjEGc1638atHfghuh5XLJ5tvNSW8dWhnecKkfK9gWQGwLsSVkFJR3ZuSR7NAK8xzbbww",
  "key34": "5jmDvjq8iSEunsqFPXBdZhHLjeVxwqfzCFd8Nqmk9swViJCt9oQH8vp292uvCH8gn3T7P9oa4wzvX4KbkmToi42F",
  "key35": "4QgMnomJc1CKdUiiNxZEGj33VCn3sQeQGhhVvHu5Z1Cc5TSwsSmejkcZTGJULcnZKjJJs8RqbHryqRsi4XmwMiCS",
  "key36": "qfcQ74vpUZWtxSvZuwhzrKUSqJTvEMVyt6r2Zg6ffZDTSswBHhZMhY1vgsF5BudacwwkcBBhwVe5HBbwDRFZnMX",
  "key37": "s89rBtVWrebs43mLsErerNe8pLVWsCUsodKubyuw7qtEvXnPw3eQRWf4AWbCmH267bXncgdAMmouTfCwZsXZbUx",
  "key38": "K23XQsUSbpkVJJaseJFiDjyMcDzyvSeK88jkUurnVzFaz9yHHdhuL7J6uNnBHm5isfryYZbr8Upp8Dvw7s79Tov",
  "key39": "2iNdZLyrmVzyvVUuWrcVZvg7yL21s3Rzh1KnE4MJb2xRiNdVs3geHxoejegVQcxKN3uwhDSpPn5mo9cFpkQpxUbm",
  "key40": "42CedjMsMyP8FkBdSRyZW72NmcCkG9BzCBZgfbmd7Tdrmg2rzJjQGtgEZQFpLzvfirziQ9tPxermHwUJZk4gBeYa",
  "key41": "3RN7G3qLCb27Csba1motiwMATueY3ekiQLSEihsJ4k2qi2kyguh8KMpVNTqY8vxyEnvGuHqxKX8QGS6WoRFPjo7Q",
  "key42": "QAq3esWrezDi4QUCZRjueMzB5s2ppRMx72fYQ5QUjD9ZACpw55b2EffqP53bsJWQo9zwXFHoqrAHDkxvm9dq1LU"
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
