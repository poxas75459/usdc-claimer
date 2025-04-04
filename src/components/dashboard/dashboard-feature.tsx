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
    "66B9jvy8J5b9y3TgUqusCr7k1rYpEQv6nDeYDZ3o8HYa2nSzFtL2yMwot8doiKPJDoD22hrBB3RVKtb9MUvpz75t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nR5ydoW4MUKfJ8L8uQ1uHVxTy9uoSp4pRz4rNnheiBbsWzFBdt7yd5a11fSnbQwLcsvrMERzmVhZhpNLag1dyhS",
  "key1": "5DuQucuZeGyoUq2ZCKALY6yGtHEn5a7RDjj4g6wMUaziMvzUVXzGA2zNScb4hQ8dFQhyGAuEZzMoK1G2PHHjSZtZ",
  "key2": "2WdxtrMwoWLbd9fqJ4n7svcj4PG6iqP84DijTFTXLWwXwwDp3t8ezEAN4oUQoaRXeyN11Bf3TMZyrjzC6fkxCxZL",
  "key3": "5ameFxyBLmmAKdX6iUv7M2FK7dd1CWQ7BM6F261VWqzqrCdwgGe2Lbuv9t1snbmEua73EpS3gKwaKoYWHJB9a4Tm",
  "key4": "2V43Y1Lh1mQdZLXJ3EKADXb1shNuYgnmP92nWmXTssitqznTJMDXbYGhfV8dGGFezXiE84jYLtbsKeLKs82qT9nF",
  "key5": "5BMsut5Aj7uXyfCT7yy8qn8eJTEdvrafeVFBgCagkTPjDkK31BNjfD3Eux4byUGga9HnWT96eKCqE6WnxYNJjZzq",
  "key6": "461Lt812y9kwdSXBhA4wqmMRLJJDQsG5fTgiJ6usD6Z5bCT9epLm6XuR78Nw77kD5qGb4PFu4zLXAyS3NgxQ5ZNx",
  "key7": "4gZ2ZEzA9YuK6gtcQ3XCB1jKbrJobyXicgWmuLcUA1iUkz4oWT2NAKc6vVtrpViVe8Rw7qdrTiNhxQFwmh8b2UYF",
  "key8": "nbHSEQfG1idLpxM71yW5g99HnUM8rzwyA7WZnwopNuww3DVZC7B23JxpGyJiLSvCkNxeDApdYyKXLizVYKztr2T",
  "key9": "38rCppTE7VKwWhxjFQMRhCxoZJaTPWHrkjxkznifuH75uCpDeyREhyVB2bafnz9MjFQALpEdjFwhdLHNrEGBo7dy",
  "key10": "3AWcntU4LTvbZshoefoMxnEFQzJzK6zcMWvNnUm7P7qa9UZrxRhLo6qEBFdnaWRB4F5zw1rv7c2WRnUCVjSKUTnx",
  "key11": "3sazQWPCgDJeTRWivstnJ1PGuXqcvu9iFJ8DemxEWHTGAnSnDZekw1zaqMfUZbRAajD6zs7xmJYnX2K66o6KYq8Z",
  "key12": "4ER8Vx4Sok7zhJWpCr2c1BNz31vnm7oSjjz9tvWMbyPj2SJKWDH1SA1jtXge3nj168JdwArsR57N4WtTsqPUp9DX",
  "key13": "3rp6bGG6EZWQSi5TuUCKFnGT9wtj5V6VZYvoNL8RdBSPgTjXVMFoVPEvdcn9sJaKjAM8SEPi2hXswCc3XbRE97t2",
  "key14": "2TesPcUgxWCdHB2VYFWTshE331QQphxXc9H1FLxngUrHZVCU3WrCi7q8WEWGHNndfxAgGuZh7MfzSzv1hn5We65D",
  "key15": "4XxwLDDe24PcVm6BWTxrwKFKp8GBM8UQvmLZzw9Hd2VPYaQCSJgrFkBqgZExejdYTDtJDKU9yYK5GatZRyVvKXV4",
  "key16": "2yZYpvqK8dvjZZcMyKoTbnaAKkFxkrHG7kmiwtbrw3gpSNWa4aE5TGyU3WA4HTwJ6xoMKGLZACbyYpSUTwnQopHH",
  "key17": "3dCtVTTNv3p3dvqfh1bD6B3dibfggdfBHGnAToeiKAzx58deEeMFAGcQRCHPq7WMrhzmaGbEUUPbhg5WrEHqoG2n",
  "key18": "uD3HYTwzBibSY27kEHLKkeQJXXHn9fiJu9kTiuaB4Ysp9tvvibMgkDgvoPNzyHopeggrU6A65vqQVn4CbVigudw",
  "key19": "2Dc2kx2ShCZNLMd3Qb5xNi6VNGS13KcPofNJUvh2DdeZvxj4uKVerHSDQWtM5LbwZHqhyVDQ8mWR41PhaX7GQ2F3",
  "key20": "65EHMdqWkmqXzHz2YB61GQhz6YTQ8eZ9Xm8jhS2m9CA1v8GDFJyT53k6xogRF31mq9DNhqkoCEJbCcwsMYvU7WFN",
  "key21": "2EXytBCdd42YeEP2aZt4NriaaHYqT793TYkJ6qNPVxQSiqEoCbBP8rCz76KqECcn2Z3wQZYCUTzqmExWUQXFp1bM",
  "key22": "5oHZfbGzbHWkovFLma1z46Re8qqcDPThq89qdQJyonmrs9vGTtXzCMJXN9fxSxGLNcbNsSwPjjCaShx8f61KgaER",
  "key23": "5Vn6GtMTjEA8qpGH2FNHeEJbSTuvSF1qJdvNheHdn6bUeDwor6BiHNsVRLpQg7Vdw6tRrCwuGjHBhjPUXvvUrJ1Z",
  "key24": "4GBSSvYYv9V9TyemANra1qRv2r5JRto8Xb55MCwwkxAtTQS23EctX1sdWaBeDFrUJhy33AgxkW63XLjRwFBsyuSV",
  "key25": "26XnxRvoHWA2ATkXmQEBYQNJyeZ8qDgpYm8Hjgjif6gsnmXBEzPrGvRTSuxsi8UQxVNWQYVTNEyAvYjgd87Hv4vZ",
  "key26": "23A5qFfpbYyN7jMCWqvX7HrKKPrqsAGkxAexmVqPMWDgVLD4CCW9iAmyKMM2ptHvvEGfJ363frVw7TMTgWBms3oX",
  "key27": "smhhijUwyZTxB4Fy7L5V2XrHZouFMG7AjD6WtSbKgAZW9WjXHacerCHcrKYvjMniXVrDkY9Yr7a3cefjAwo1QyG",
  "key28": "4iuaxCG6y7nUWyCdQbPVjqiFEsnXrWRBQMxQQNEXv54LYEzhb3jhFTQsRJQAPik9AYeCoo7E98XCAnb88LYT9yYA",
  "key29": "28WReXvCe5jytM8Acnn5q1yUpnrez6eJcZXQUfAzZdbkwdHHeXQ1YpH6pYQhUrthNSbS3ZJRFckwm7VrrvnRX9ds",
  "key30": "3CC9CbyzwC2cUJvHmLNy6uNqQybzg4ZvGGNgCP4MhyjLyK8gaiSS5wkKEMC9UEzc4YXGREjkYDr8VCz8dbKfzyVw",
  "key31": "5XBhzQAwT78ps2X9HiQpfQ1fGfGEYL37SyjUGQQokrNopnucNGzYyJR1hALz9CC2t6Mp6VWerT22ByEouHm2ydWp",
  "key32": "2AojqR8SXzu8ByJtPA1BCnjc2zejiqJV8g3JV6mYnFyNeAZ8QgkJFgF524h2rgoLnZ7a4AmchbDa5EQQrx9T1bse",
  "key33": "5THrmJ8bZviibGABh5JabUUijixb4CNYSMR1WbjWtMdCaZuF2y4PTckJAXJGPBEQdihRYtoAQy15PS4jdWdNpB1S",
  "key34": "33WHpnbpnXiu2Q6YuaQSNAW6PTpuXvoEZzp7G233iHU6zgGTH9FLxZ4HvVrqEtZtRyi1chGiJP9MaLSWgdbfPH3b",
  "key35": "3skp43dv1KdW4e2weGVKcXEJjg5r1Qzri3H7wAtZ15r1i6GsnLfnU9XHkpWbyBheFqbL18so6KjcH9H9w6JkCGzo",
  "key36": "28hG9QVdo28KGc7Wdkwwqhy9ztrRkGCACEAxYrZduqi99K6a9XeAjfwSCgVBDJFjK8z29z6qAMdAVdZuyt988qX8",
  "key37": "SZPBnxp2zwJK6QpsCRuMarxieC8awW5a2FC8zPUvTqvsZXy7hg3VSZc89erjC9GJW8Ywr5iwgKZ9i18Nzk3iyjj",
  "key38": "3dVVQUL4NaVeyFg6s6rRLoZf8RMMgCXVYKQ9EdAFwECcxWePzNEbyvaAqoo3T4kBeoSsBWLf38pXFZaRLUksR5dR",
  "key39": "4PrJCub4W3Ek8S2bBLo3J3zKHmBPYwhuSnks5PFzMozMmZcnTXyKeFeEWUqMdRGP5roNbUFiYw3ic1ki6p6Vmrhj",
  "key40": "2RoP41NwcbKxnKEGJKs9kThDkTuWptANNQn8fkhgquWK9pVR813PK5dGNvzCHLqsWfuhgAmpPq3BnJp9grXtg3BR",
  "key41": "48S3VrdBLnEMBsZdaKPPR1DUP1MqFtqohoxTgVgqszH2FLxL34ut8ye4VVGQhe7zYLBxUhe8Lv1b7RXA1k2qoUEY",
  "key42": "3he3hZNqhr9EzJ7DmiCsxbDkyLn4btqfxjK7fJkPU6Bf8YN1ndAwHJhouFuCgTo5UXasfwjZBE5SjAyXTUSso44w",
  "key43": "qoy9CqMeszpcDPJPfeoRXf32vUKFz5kkNiMiM7ndipxqC2hhjwo845wjYerrBpCrFxAAjYSu8fVD7nE5ZyPn2eq",
  "key44": "4EqzFsCc6XH9U2anpsBWHUpkx7NFmW8w4NyHiKzYGjd8no9Dwb5GCpX98Wb6Pfn9RELH1qMRykD2vxR38LaVRVvp",
  "key45": "3Kn8ooqVH6zepHuUDMhwXz7dRKeF9gWKtsKourVKDb2xEHA1pTCoiqkdhRJtUWksJKmy4XqoXFhtqa6chff7HAcD"
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
