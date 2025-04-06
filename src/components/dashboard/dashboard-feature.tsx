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
    "AV1mWNzGzLtM7hrD1GvRrdvRz7sjcjDsapdj9Bn7J7UvfTRkNTsCjASFKc7UB2p7jA51BZaur6ZkcGAtPkGmZNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mTpAQefZELNviqnGVLAKprEjfxtvNFLjoPaePD5Ca3uuqMYWdK7zUyK19J7g5oD52KAxqD1ZAhxLB8m7DqR2v6L",
  "key1": "zPwY4kHKuqhM1JrGu5r78kLUu93FyA1BHvd8yaWkAfiJPYVEnmKnWWFzc4qorcmbqBFRn2iBJrgkuTSmSqnnYHu",
  "key2": "54MyvjB3rmNio8onFgk2yq2zFPNnBpk7oUBjNBaqTX87wVzuFi9uNs1T2JioZEEN13sAiaGkQV8r37doVj45pZhe",
  "key3": "3v6H25ASGZQDWxNZNfr8bJZKDX6VWP6xL3gcKzCMZhQZ1JegK8dvWDpnouYGBb6qaMZ4LxWxPjnXA3oZXHpzaPbj",
  "key4": "4Qx4ReYoBboDbBKVNjDpg2S7pFjyNa5ZTFCWbMRazNZUYVbfpaRxun8s78yxKawv6jkzaHKXvfHAVjjh9zC5q7JQ",
  "key5": "34ymT2h2xzgmSoQGQjmFD8GVEUocKW9rfUv9zYxbgyzJV7fLS6w97Y7gVbFQFcP6DbX5ZUnBaTqKyXYTR8Ltmnxk",
  "key6": "3CugyHkDMoNLxFob4vKM56BMM8JWGGgXkbexmsLSof2UHbbAqvqh3pbTMbuyngVXK6bWYF6or4rcPkCuAAuRDsEa",
  "key7": "2WqWWUr2y3CNh7jkbMJVAZxqTiTtwr38RADQHiJGJUBpNDthNnyVaJKipie1u2GFcLbMqyECb51cVGhUAbG69cqq",
  "key8": "5zERKRk6KKbqdnQ4k9VN1RcFydWgk5yiwyBvpTqHBWvGy3fV9kPGQYfDsZHcFj7QsECvjV25YdEczdBXWwwxcwpP",
  "key9": "4aTdECCS6JKrUrXsn7jHu8WhgM6VAuC4secX8wtYNbBcGNnSiGmsnzYTobP4paGe8J8Kn93zJuCVktSyFywXr4Pv",
  "key10": "2Z74p5xcQMe7Q8V6wxg3gpHJJVvafdhm4uzGcnhfeyged5cnriPjEEmSH5jzHLkWjLBYpy5wYGZqC1pLZhWJs7Qc",
  "key11": "5aDyCsDbipwW7WvwyZaSmNvVMGJscHTjwoPdwKddjyXXp4fBQSyshuxJWPfkydjcovDUpYCxBmR5SFQdsNYPKTEe",
  "key12": "56kvt7EFLKyfFxduSTL1Ey5V4Ff8diWtgEXyQLLZSUCgcC6TisFhE8jJ7HDt6wM7jj8iVoBAgjbwur4hpBQVCdvt",
  "key13": "3BFGqXKbTqADwi5zfGncDAK6PJGg9cpUf2YAjayjxNPe3EpZJYVZtASyq182p9nfSM5dbZ8rTYfzfNgWy7KMymeK",
  "key14": "64kRCZQj8mszSeHWzt3CmVwd2xeKy3XPNQKKkt5si3sXpyDARJLLG4rtKr78H61DfJAYWXzPVynyqdU8atwLe37E",
  "key15": "V1CZnhSqHWqRTe1r3mWwo6gf8gtbMJ6uCkz6qJwdFpjQCMX2qxBzJauv2xPGqNvptrekR2Ktkn969R6j7Bo1CpT",
  "key16": "2onSbnYiPBynspAkKuRqorJdWzxSy5QE5uBRVUc4kNR91fjyyYyhgfMZDB1LPYKbhLJyHxep2RhknwQ6nVqhtXKe",
  "key17": "38dJ9AyGTMHnEDBoL4WzPxnh7qWZQKk1kwdqGFxEgAQtdxQ8iAJZbCYws1jyz4t7FnjuwSprewyP2uK5x7jEtmbT",
  "key18": "pGQ7f8nDHzfU3j8ZFQ38v5AiA57bQws85HTsQjVuWFujHb32wqH3gULrrkpmtHvrbFhsyC4ZbWRXKbRnUc89Ksv",
  "key19": "64NnZVP6BM4qS8nxQLZJV3EUiuHhnZbe2bGnuL5DUzwxqVZFHvrAY7U5WkRXS5swgSS4zFK4y74a7iSY8Xwq3t7a",
  "key20": "2WjCk7KbyVkQ31kh4PNpA2ZT8P2KwdPEeKHEoUwxmZyv4ro7zAWahkSAzDZQvzCwgd6wPDuK8TPMWoYtdVTu1Uq",
  "key21": "4qB5SzrcB5f6ueTjcb7te6RidNDTxTRC6Y9wjT1o2qxVu7kyQYVu1Nq1v1bNNaXddunQg7XWXZK2ZKyt3LEJbSyQ",
  "key22": "4hBzarVaPi8JKpw1jo7RECuE72qwRmuon4nG1SGvUBQBASXigTsLZn2dBD3t3CAGNvfZzwgU5RVH2foXiB6TwKkd",
  "key23": "4f7kezwkAsrPFrYY2vBCuXXSRSUqELhbrdLcwJSHiTUEMnn8s1iJ11m4uVR4VSo6SE3xeBHdtALPESFAnncJQgkv",
  "key24": "5nPcp3dEr3UNwJf4TByq5eh5tj96U6TQH9eG85wJa2eoYyCvRLxxSpVFuTYM2KhRnvosGUag2YeCE8frUjM8aC5",
  "key25": "5ZvhsqPDwnfgBnVkSEbVKgrsP734V9TkFCWJJHXr3VFXHJAR88UkTAri6cr3TN8MmbSVh4r4F2fPe4oCdJ2kAZ3k",
  "key26": "CJ7boj8cqk73vnUhphxPJMkeTmuELTbbjcj75AV16PRayTeT6a8dNYUNkQRbZuyuD7yuUE6DdzL4XUzfgJ4hV3z",
  "key27": "3AbsHxJBLA5wsM7oQn79dNMT9rJQV3CNEAv4S1hrPUGxbm67J14i8kZZbdckvmj3pp6SQGyyvagEQyCF9DG4nm5",
  "key28": "4gFQt7xiyvzJQSwxf7WUFbdZC7PgJJUvAvkP62VJpiVc85WBKN4MhkNm9xmy2SjGrdvBqUmfueqakh4Q7fYXhALL"
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
