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
    "4zb2PNwTniuvaV9p1WaexLmybwmshWR1wHfhcM55HrGFo9NwDyChdkMgkKtGjSVXy8DZU5zZk8cGz7iPAt6GiedC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sVthLNXG1YjSKSoW1zkTfcLFELfbtoZ1xRPZvpsXMnmcomVRumPEvHfH519KrYWDm81R3u8a5TEjXjoW4MpzxT",
  "key1": "5F8oyXYadMFhLPPrFUn9mTzkCHwz93mo7uSxwVtWLv9RrZRejhaJ2ApV8sm8oCea5oC9S5dun1SZhiaLdS7jUdnT",
  "key2": "2GNYH3p2WGSoP7t4oujVZr9iroR3ZQY6iJi5XdDzh45zvDnvJgj4dYFxbfQSJX2NzcAfwnfZuciuMx1ajzjg9e9M",
  "key3": "4Wy2Un7Uuavu5RFs8q6qcoMzRQYXjQ5hvG2A6LcZH1AyjCxET9cCK2gTzstmzE2ZRcxSK2gwjtgffYuwKUjtnDgL",
  "key4": "3r9FsbBJeqvJDP31SghzQbCzSziwuQC742Q8L7aatXD3YkNQzEJK6YdHCJBQgcxRKbGYNMHZEqtQcN4quuj5viCJ",
  "key5": "2t7nNrdpcqPBSdhy5ZphYevB5mFEmkibLUMPM2xVheNTGogQTwWamdnqqH4pWCXQBUt6JAbg6RHcqgD39r2jGZes",
  "key6": "2xLQjSDm1DCsgnArS5Wj86qf1SqXwXVSqCqoLBEjT2x2A3sA38mHDAoQcdBEV5HnCSqn5tRwEwuJjxHHKk785Z3f",
  "key7": "5UJbUKntuKTjhQgMHtKD6h1Pk6wvoWe3hMV4pozttfghCt77GpGroSDkwjhjLiFohbu9Bo995kP7obE4WLU2Lvxm",
  "key8": "2w2cYQm6XN3UN4uCozU99dzhtP2daVETqUxT1tiP5VBJdewaZc8ZezJn1JEitFnHCzAfToKvMa7ijGSaiEjuJnvY",
  "key9": "TrfkvTtq1CbWqkvb5SxvKTWghT1fXgyZ9oCaXWfhPvm9tBN7AwWmPvhLc1uhL9Ls8da6eCJdqA4FeEgLukbaxcL",
  "key10": "4szHgm5f9DqJAM8MFovEcW44isa3nqEVWjQ8mv8nx85QZLazDPWJyTRyimwUpmeCn1mNGv5ZbFcok4fEp2rFMXk8",
  "key11": "2mWpmWr6no5tdgQYEW7vyMULDpsfQnN3YuFYPQMsXUDxWLNBz54VegsGHhL6bQpJHZpz7U7JzQZ5rV5rMpMX8dYK",
  "key12": "4pUb5U9VQsVq5PTjGgFCV3q8in73DsxHgn1AM7zHRpE28yyLpD8xgnBQ8nq8pQL6gsB6Vb2vjVi8SLQA6vzeoBQ",
  "key13": "5HrnjAVskHyJtfNBawqSmCeepcrFt9B2ij2hnMWsNbuT636LMk8i54dm8Vvcv9BCJjiCwQVzYUF51cttshgngzeQ",
  "key14": "3fUM33HfbrjwZPcLbgRkCp8VsW7RVu5Gne3VmcTQSAhUkthM9ojCzcgc4k4eMUnxGSY6PimBumQCR4QGgiEuaXnM",
  "key15": "3ZdjJuL6hQqtGkwcGSPFEm16FQ4z1aNqcaPoeqvQEK8miGMh5bKFbKMfQfwRb4Cz9kidGF5175F1DXpLfoQzqmwF",
  "key16": "5tdNzgMcx4vwkbdsEfnsDfKYZhSkCD41XzsNYnqvGDxrAT6ArCkwXTFLd7nFHiuHWprbyAdFYtgVDyLFEejkXsxo",
  "key17": "2L1oXKA2veiWDVzRe5xeLEHDvRMJhifwc7tshAPZ2Z7zVCAQcU9oaGVLmBKMHeJMpRD5G2BnoV6vvNBicpcbXV4h",
  "key18": "5YY2zAn5SAY19hYHJ8NBspfxNXTiiV6VyR2yPkg7iqfM8zgZkU78kvsH2oZboBBem8vnxydShRw7htU6X6BPr3i8",
  "key19": "jLaohy7DPTEhZThborZGa1YVYeVg5yDfMBPnrA9GYmsC3GGKPUJZNUkzgt6j6Jn33JrkyRR41qTmJrcMdda58dt",
  "key20": "5JCJRrhVdd327CbneQTSKpwb5cVrZMdxMJJwFZVqzU5GJusbCsY4geHqvBGTrBQcCQnvPSPzj4EKa2GyEYtNbCC",
  "key21": "3oSxLDKLQ3eCuvgWMyroEweJXvyDfTdrS2eXPNFvS6N8Kx7jvyYysyPQmbjfAJGzL7UrzEJYip6KyHgYFJqri9B5",
  "key22": "3evjUbzgmeYcAAjFPUe9LJfb3t1X62gQsTpVCbVyQLmGNeVWgG9mZbQwsb7vTr2UHDviJGjeYG4hHN4AkC8ekbTz",
  "key23": "2t7iYBGMXidLNfqvLWTVq9RMgkAFusxUbDyZcLGz6vF9qdCPmiZc3RtEi3HeM3EkHzwTCRuKBX42ojRwbJ6o7Dne",
  "key24": "2Z99fcf9nCVhSG4UkGpbQB7NJ4h7ouUHgtwLimXDAX9HwbYv3GnPcedDDYcksWGa7iqdWimPZQmdwENE6cGgyvh1",
  "key25": "dDytrQpn1cfhhYweXCsJcnQPBeWQJ2SmHjgyjg14ej6UsURqLqJU3uyfRfV8NobHpXRdPBzjBkLBgtLgKh94Kj2"
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
