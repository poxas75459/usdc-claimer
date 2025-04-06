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
    "2NiJnyLDi6S47LSZF8EGX7Tqh3Y6GKQek8SpDdaVKDvQnUF6b7r1iwWgwnHgFZDesJRYxHHCZyME6y4QMX7ssp8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2djL4anukhjCJnoZfckYr4739wP718QkpMz7rqMYGNdbZ9RZEmt4dvLR5bpgsQg5D5LXcVEwujokjnehUu9qMssc",
  "key1": "25FpsXL9pMdzwE2EJhgAypNxDxECdUcZaUefvWs9gMHFJ4ivsmTmTwhbg64dRJKorDjQDE4ZcNM72cQLrooFn3mf",
  "key2": "2wVrAMBemdoNyT1xW6HaW6mSJXiVMJRmz1f67fPSSGW9N6ZqBZqK526zbFS1ei1eYv6Koszza63SgWpZdY7gRTFF",
  "key3": "N8P8U7pQYb1T4Ayi7pGXGhjDkc9qh3JBuHDNhs38uyLSTESiWpgKX7rVQqTCMeaJyhbTcf789qbT8oXV54TPqt4",
  "key4": "4LQbhMkYK4HG4mUiandprKFXctkjuWsKk4daAKdtQE1CrQHSdm4N15xk2tEbXxS1WQFA7LYUiggAQKbqwEa5Kk5K",
  "key5": "3Aj8SR9NhBFgy9zUu6u2aja6bPffwANeayM19Nk4zybGmsFj3evPv4M7z2yEP5te5tQYMjLRjyT9b4cCDDeBJKzJ",
  "key6": "4sjwmtP2dhpvYRyQu3SsKBaSSbjKuwNTioR7gCRETnuPRww3bnS5tpZrsXixQ69wnRGqXzKyssVDwpwCrZT5be6o",
  "key7": "5obZgB1GUcB8Zgckn5s7DVja9MGR2hSo4Qce2r2y1UykvRoARoCocnC28xdXynjrCYEdHafbgNhm492pousfV1cJ",
  "key8": "59iPypTHfBWiyE9fe3fmTTrKa3Aj8w7fWAzLTzZ7UXkZ438ZgZyHiPwPRcg1nkMtwwgqHCznXgYvdfDq56hnCmYn",
  "key9": "2CKbuGKPfAvo5sVj9QgQDiUraDibLZC79mApxUaHtzeBnsXPNqAcYtkyLfZA8qDWqMBzQUccfYBhCXSzuSjWxugr",
  "key10": "zBXP2qvhiaJ6TokZ5nwm6EwR2R6ccxgAscGvoNfqfrXaYg1yeKH9zhU4BTKB1jz74gpMtzPRjCYwkvBMbxbVKuf",
  "key11": "4TQJhn2W9iBkm52afX9WhdYu5H2fjk165idJBgxLSw2sX5ZUnxmChQfXfW1kwEM3zC41nj6GBdvKcDjtwF98wUAL",
  "key12": "35B4uuCdsTVxBKfLpejT7BRQzeREs51XDgDiVDw4YvGpwU4HrW1gakuVWaSyeDpCBTDdAUYZt8dWafzcTB8pyqWv",
  "key13": "5oeYH3vcgwpxVgnpV9Sx7187dZvLtgK5v11e4rcPK2Zia4nk8csBJCV3HT7jbX8vRPYohy9WWhMyiP4LweFeTTfy",
  "key14": "5eHsyF7cbHQGKsVba1Hx7yQn472HjkB82hoYAoEqcUH7uxncZmUYzL3Sb3PuHNZg9dtavsP2HxNUEy3sptJxdHGq",
  "key15": "3XBUSHTUWfYq9TX1h6yGcRKcKAL1XBfS3WP1fkQNNunvGahvDQrHiHYziF62QsLtprCwgEEA8wXfyHm1ruNike1C",
  "key16": "4mGadjA9LdBoN7QuaKXiH9MhsqwDnDgyPdxwazgrHM4CbRk28JiEHvcg6MhvvWA47cGH4d6Grj5Zd5PNco4SEFM1",
  "key17": "66UUyR6Yf7RfwCVePNJmxX7hVDwa1EvbSVpxW94panhNzvuSZz6Jk6j1DyEdthfxTvkJB51b6we8aAiRgpXLbzgM",
  "key18": "XqurX6vUH9MzWydmuuvZLawcJSQ1LzetY1ZJam7s7wf8KLBxXS4seYv5UfSDx3tfemoRvWuR1Vbh8UjMkN9ztDp",
  "key19": "2JxrD5X9ZRByHenJcHgxYTrfF2ds1WgTRUZJuMALbrL85SQQvrgEkks21UuzwgZCqA3pCppprtv9kWZBZBZFYYgd",
  "key20": "2kMTSgLnFwhVPTbdm5n7wNSZ5TBZeSwy7BkTgnyN7J5X9ZigSXMSS2GXykrLuuwu78Gi9xkNf13PDpWXoY35F6rY",
  "key21": "4KTcLrrQoimecLeDVQNzRp7eqyRMvueY2QAYL7ficTQHfeU61z9ckoPCJpYycuuZM5TjnEKt5vEbbiaQzggi8E6S",
  "key22": "3K2KC3j6fyAueYKscKtYeeSReRFCSXfpE3bVw7NHqZ8pw5Pfsnmsq13GJCsqFTHGQA2sVFRB6QiW2dzEuvAQX5zf",
  "key23": "5mr4Ss2MHyLX9SxL3Xb7g8cBo98wsCJoTbjdSn6Y2xvW5EfDUJivnC85SFdaSnf4GitQdMjtde8AJzgCC9Cy4pVQ",
  "key24": "5QSuTZFuK4YexoEymT3bUy5qnEtsNWZRk47zZUYLdZTLXWU6YndKFu4V8GvHYHk8NdKavBDLtyEX1MhiriyQfQQZ"
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
