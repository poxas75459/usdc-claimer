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
    "3TvibRhJgayMM7s8s5KxyoYgdGE7jvYbrCdCwC4x6hr6APSb9Tg85zjm4CjJsjHUhuMcZaSSVwCPu9wH6AuZPJzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgAy3q6DDP5ZJ8kJthJEST5b4YkhLiZ7SMYzAHMHtWuTbe3uBzYc23AETuQjXZu6SMcKX5CuY9w2YYc652cxgCU",
  "key1": "39dn1ygGPcpNv5pvA9xACtwW1cJKeaaYvRxc4F1oxFS3kcuq2Dw3s7DLTUepZPFT4L1Qbh2KrpC3MWKRRbdxnJLh",
  "key2": "Y9UZs2iG8TvNg9FUeEyLqMdpxDpRuEjB73rtZvjpMSX9NhHkWdadgWGbhCnQCiFH2qhzAu8H4tigm34qPE5deBY",
  "key3": "JF2Z55iuKCEVGpYCZNKxNhTrTxrtYqp9XojWe3BkV8ikdwaVsDBQSSarEEbhu2wPUVu1LCNr6a3WBBmZVjUyoC5",
  "key4": "3YDuZL7FpCoe1HeUdeNt8zHgi3sEfWNR4QjxNM6EEL7NCqthCp3V9dCRsdWBHNXcanesv9F2teT1VSFQCYHWrzvS",
  "key5": "5WXCTQpHT6Ysh1iMhFxKjjqDWXQt5qpWFsAahXA6kh8F8xjUa2ZTTHK2MK768f3Eypb7JwfFeDkATCQSApgXFN3x",
  "key6": "3rUqpyAiyw4ta6rJmGmdA9exGFzttHsjfpFoJRVZzZ7Uy7LnFNQvt8Yha1WGkS3pwreb3wxkifr7ZgH7H8dCaZ2g",
  "key7": "2QXYnPt2bEtGvFeQmBfU4mf4JDBBKCXbueuC53zFp3hvXnGWUp3qgVWgY7Eagc9GPH2TF9MJaGQWLSmv51triYtN",
  "key8": "3u99B2ShWQJS89muTCcQ8sjn276FqLiPTQ1RwbQdsxyEiHDzSEyftZNMqwJbvCBhJGZ6mTVPmBVH3eU487TyXJT",
  "key9": "4dw4KcdqE7s2aTfdzXVu74DvrSzaQZbm25WiBmJPh8rYUveU4K4mWJMBSeUmVMWaPmPxzAqjhh8sG9RJ42WzTA31",
  "key10": "63sR7LsHsgfsGeqarnxXmU6Tr2yDTbV6iSw7gwgi6SaQst8wLyoqzDHVWQgnCncK7cXyrfPGRWHwcKNiaLu59usD",
  "key11": "yRJ9KAQKLzUzrwtKLidfN6jPxK5YrF1TSE75gJu138yG6yignSqPVLVCYkXjCrK8Tzre15oNk19jGcR6hZbPG5A",
  "key12": "4Z4bkeX4peXcr6e6759aPVBp4aLMGyt78EWajqyDrfbkVR9rioQcjcpdbDc3TtbdJoAPk5oRY4n4phyV2CqxtBEy",
  "key13": "3tk8AiKUUmSpNrKAN3fynfAcjwYadpN6oPAXqma7pjUVQ8BMUAapzrb8kz4YRPRaQyJhEaneBUsL2PMdhqTfi48m",
  "key14": "2SSU28ns1LbTVGy63utWSkSi9BnQr4QxZAm9gZTJ2oy8fRGPPHswAgnSFwMBwEap4Fe435NayUwnb1VYq7bzJYq3",
  "key15": "3bAPp3bhNEecEgBQ7AKtdZxHru9tDW47qpv1GPEh7w7iVv4kftkSUcTNWzfcyFw9dc6TFSUq7QxARjZSq47XVtZm",
  "key16": "5kBRWBsTV5mY8GWP3rr6wRCCLCdv9jYvRGrbbgiXLp9MWYJg7GHA3LkLdic3pNgPeBjCyCKXRAqjkgtHd3gj9bFv",
  "key17": "3zhuFPTmx1VGzfVByMxXSUQhevrDDN9ovHwRrm4N8q6oT9nm1ckNv5vY2FM93Ps7qyA8QYQysrHJJdcCaeWkerQT",
  "key18": "3r9gjDRAU6LqBLibJd78nviKwNurTagkM8tdvmpqzmZ2VdbkXMzGbKtXFMX2TAQmnysFCeB5RhQ2dHgjFkWm9hMz",
  "key19": "5bxVuBAnMJukCSWAV5JV2VLz3uziV15vyAPpVq6mLHvegiN6xzjXFnRPsy44X3muDXVyx7LCQD3WZRNGRJeJWmUS",
  "key20": "3jD8f66ciR2JkawunsRE9CuaPx7wBX1M4qdDSpsCqbfbciy4aG9caJgSMXWUyxraJvKPPGdMzAoishXC19bj4gG7",
  "key21": "2Kvf1sm2Ne1sx8ZKcigaeuEsM5Az9wdta9smewJJt6cP5nsCMay4rP5iKn4ff9YgdUH6X3JpMpDG3kwd9tUM2Z7B",
  "key22": "5D43WzJPJ91iWpWAkGPVAZvLrCix5LzBwwJhWaWAxjnq8QLWD26LYGLqYJismxEv9kEG9Y7BfbWpm4yh3HZ9JWMp",
  "key23": "SNNkoKe5xPtFaoB4L9Qy31KTV7mcGRYe8go9MQPLNjGa9Gix6gLvk7ss5DK1kYJtXQEHNSaN4YofzyTo2gQnAhn",
  "key24": "3iDdwquyh1cS8KE1GkfEWZoR1ZyboX7LykpFxLfuCfQbFBvMdQ5z2SwdHALJU9MRQtsdJHDhNoA3EM1XgXJT5uCj",
  "key25": "85cN6JQmNquwp2Qfzdt8ZwsJSNvkSJE3QUjpCRUCfnWbnqfv5V7JdD7bGGdqzF6YQYBP9iXwCYPQKyCjx2iZisW",
  "key26": "Gdxs4WBDRtjotEmoS1PwQHgPgXBbCVHJnH5X6eps8EC7C3V1GxYbKoKecmUexpvqvD8zjmse6Lk9XGfMn8pp3y9",
  "key27": "3wCpfbqPzACzrZ6gvHtyuRJ4iqegj2wXARgTrzJ9yYiCQ2wz1uhT1UCrN9E2neLwaPQUTLMj8VpAYHMuMbcUQWGK",
  "key28": "5Ru6n176umF59zM2R2uBSp3DDxgHxGriKjEFWN2HhA6KgKCyzqhJvJudxmNGyPCwiBVkKZXJqWnXxh9eSFY5fGkQ",
  "key29": "3GSNG6G2AgjUMcByYpAJnevoRcyDcvXvBLY11wSr3aidohEignNdRH9x8Fitbwh2hPucw9CPYstkJY86dWYonyhv",
  "key30": "3aNSHBFyJCrMrqr9SFgd5GriKsNSqYcHupEEchWhaidRcUASaFBjko8cDPLf5WViRbtTbxs4eLqXpb5KTjgG4eWY",
  "key31": "5zNyfvFXwJ2hwRb9qkLjt4xS4HiJhKSh6amCAkC3bJFgYrgUhP5RmwTr54MUcHmpVpq5HAKqjYsYrrefquR67Wjh",
  "key32": "51n1ukrPmH82Q51X6NmWrZkwCVK5mfHpJLiiRQCFWkSDGrafm5AdZ6atBM3X2FuHStt8RnCAgAZpxMnC8reV7AKF",
  "key33": "4yGHpZ31ojLBBY4vJCfw3TXvek6zeQ4fiSrwC1vx4qv9Pvt4DX17GV2Sfk5csP5WJrvJR7fMAWuDy1JXSqTEfGWW",
  "key34": "4FN7UAVh99e6pvuMqKJvbcUoqNpMMFyVJVyXAGejQS9ZCqx7ub9tnspe5rCJ4F7jgFpzJDFrsS6ikawD6jWuSFWx",
  "key35": "Hov1mSeYWSXDdawrApySxXW3mi9YUcUEKmnFRNQhc8ZPag3hsWyGJeY5rYM9FPYYZdNuweWv9eXH7YqEiFZc3rx",
  "key36": "4jQZ8PHt11r87CKd8B1QqWKwfwiEQp3Wxc5Y6A1YiEPBPXjVSAYyfGRpA1kNbzqbhx2nfpHeonouTBoFGAdbKbVY",
  "key37": "P1nfR9VfGD71vC5Xy1teaxaXvR3sedAPZsT4Mse5wbfF4Di57FR1em8XYDKZDUqU6MrCL6AHup5XMS6hJYe41BZ",
  "key38": "JPfpXdHpp7KLhfcMh4Jk8E1s3NEi29a9s6tPTDLJNPZdpBomDDTkTEYp8R7W9MEQo2VgCAntwpqtRy8CeTMFEou",
  "key39": "5eNWU6KiydJ41iufA1fubT5yUNqUMdgPBqA9zHUiqUdUSdwN8M2oaBSShfH6Bj3dYNeWAK5L1omzvgaAtszUoUKD",
  "key40": "2WYqx8iw6cGDoAMSJLxjYAfPBvsmAH1oA2cCTPp88AAz914NnnrUgibjdY5eni7i8FVint9db112nFAiVFYhHV8A"
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
