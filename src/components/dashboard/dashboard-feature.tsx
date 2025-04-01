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
    "2hMCqNWWbrQfw9r7Z3XmwKtRvda33oMswuVmY3VJHzCny2jEcFmmDEVbQLvr1H3DKueM1WuZh7rcDR9Zz9Gdc9pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVsBBaM1BE5vS328ZExauQKcDfQDRddY3jWyGNyMJZTJGmQS1qu49kYSGzNzsznfcybpnQKQQmpSgq99hw7jqnu",
  "key1": "u7gtsffqrvZJXeYWC3Gvzw2R2rdHf8hEzSvcHy2P3ceN2uEyQ33XGjA8UFQnJBN1nuo9mnDGar2sRqXtMBQUJKs",
  "key2": "3CY8KMA3JHdYU1kxRNxNaCBCGNRH5DuEAfZmjRX7mqp1t3J5NnU9LETvcqdYRCQxJU4nZ8W8V3gcnBJA1QQ4BsSv",
  "key3": "2FiYT7b6p3P3Y2nZHyqbURBGL9kZoC22XRt3GKA9mzjPmJfZYy1hngD1LkYb5PPQynBQGZXg4uGeCPZQ1uwQ3aTs",
  "key4": "5epbgTfdtgqysbAPV2oLiHeFP1L5jygbATAhycGF4A8oWpgCaHD7kjaXrnWzD6HhBBMGLQKwCQwzPz6vbWH15xJc",
  "key5": "2qERzibgsVA75HY8x2tbuqg9yJXLv57HFiYgNWximLsKacMXV9hErD3JKaiUSkR5aMLJZfGgdTarESvz6KCn2sfu",
  "key6": "nh9dYRsasmyEMbZBEu9PWogphSN5qzfQpJR7rSrjgcwM5V5VDxsQym28NuxQD5bGKe9AsxDhwYFgDkoG2DpFrK6",
  "key7": "4zFutwc4znhJpmqUud9eUfvXt8w4MXDh8yqEx3zqq2ou5UjkCumdAkDggfzu5cqveVXfdJ4Stw84nHBm6UFqM75r",
  "key8": "5FgSb4wxKZiYqVKJvjxsWBVAvLBo5NRvpjKVxXrBTHMHLqRWNcbB2BXTLoK2BqUiS5BJtpvsyYFpYT9TuHnoJdjG",
  "key9": "4ajCyNNfoLHueUCKxVP37oyRpZPGjL9Bwx4cCVvD6DRZxEj5LuD4zWtodvs8bcapg9ApzTUZhgtVPtiTfHZRpqJG",
  "key10": "3LNUyAzV9CqSLPLDVNKRzbqtdtD5Dy1dTM99jKZYAiTfyG7wGKShBwoytX15GVwMWeBVgXD65DG36NVuFKUKyzkG",
  "key11": "2RC1ieDZXN2rXKokxynVhDenaasZBac9nE4NUbgQKhkdWDbYFUa8vTxb6uwDr6geGJ8ZhoVd2TNHLHULWYAKPcVH",
  "key12": "42epufYGvBqLRDEwyoLkX1rkXQ8o2g7Ps914WiLA4m5MYEZHAc7TEZmU6KiCgp1Kvd6Nk5Xfdwt8PkLV91erBNk8",
  "key13": "3EJUM3eATf1KcqUUV9oZpJZfuvxwBwe2oUQ12ypx7XGWHpSWWt3rocYFq7uposHiYL8ajiFCcrcLLv9jJRY3UrVC",
  "key14": "2tTZEjJSctAGQe46RH3i3hrZpv69446rjbyxXvNUStNbibKCXNtprjAu4G35oWGqEgn5TBWZGgFbcZCg2tk5H3o1",
  "key15": "MMMdKWEN81B8kpw9QKLCNv3rZe1XX84BdwcqSjY6CxrwSmp4yjvRMQ6K2qJjmPCCpFcypy4nbKRvKt6cCHeUwbw",
  "key16": "62XU1UuCDNrR6SCWV3RJyBhTwe3hYUqtv7p4CJbbecaHwg9KNGuDJ2zKBDcLoPytWkVCorG4QMNDH7hxXcqeXpYP",
  "key17": "55S6g6HN26kcoeWbNKA97VRaGhbMYwwmss4V7Wk2aedPe7ezXxWH6HPwCtYfjrc9gyA9R7MQotPh2ZxZRhTxLNZJ",
  "key18": "q9Fvm5uT3BpFn22Q58NWvcZ346GjNXJkWSdnSxRyK5X3VW5M78hxfMY5JH1LPDhkt5uiDaMoawxthPEijqDMKHJ",
  "key19": "24MjC3yAiYxuqk2HFrZCNmk7dTr4iy1N8tXZafJaFGvmdychdh6RvkTvuA1rcci4mDTjBW3MvKYfsuePX8fwAtT5",
  "key20": "65j3kiCgguDE6jF1spNgfztyVQiB8o6yspCVUDqN68kWtv4aEyX1SXYG8pdewi31Ss6ATtQcy1nZi5a2tNr1D2zC",
  "key21": "5wQroTMX581GH6jcYtsenhue5UUFiSunobPSbPEenzXGaL1Eq7KdrNCPq3b52RQzYc9FKt3pfVU35bXsRguQk72A",
  "key22": "Sozt1dWXAqx7aNKNPELYaAzJKKsMnUpYVkdTx3FMedpbwc3Y62HnKRFGiSgiTNvb3jpcmp4wd1miw4SXwyYagL5",
  "key23": "5fNpKYSQzgdpk7MX1DJL1XbBdSVrRdxoQ9585LddAPgLDoJtTWqVteptweEFaEZQsVqKRL9YjAMfsqzXGSpfsoPS",
  "key24": "5jihjoyf9qboaoUiXaZ1yf9auP93SGmgu6YRGmaRGQq6TE2SaqX7TXaFmEancEaQhrZTN32D4rBpHH6VuHaSWVWD",
  "key25": "2MyGGtohh5aAPXqacN3y9Ygj395ktZUPzYQZLGKCYLP8JwUH4GZCZKaqC9YgyAEZiN1E6hn4Z5utx4CEqFfYccjT",
  "key26": "3c1gjy74hdzfFBrBeqYTVAeQtkD6xdJr7pGNVZk35gFLeSHTZ2zMr1MAhFvgQgkSfr9JHB7tdJ6pxRWLT8pBVZf3",
  "key27": "3fwvTtSDDKLSuSDiJHxiz5wHF4TNMaDULZW6HbkmKmaWChWywXJdKYs3XuFgiQWC9TRGXRkjXssKPo3Diyv98PH2",
  "key28": "67dVvdvGaR2YdEgpSK6qijxHhVhePN93EahHdfpW2CVHxohaJdhcvTT5A6rLgdNKH87G8TfF7HP7e4aXKt6fotD9",
  "key29": "5RqGzVbB52YTRCs4q4an4gjDCsJajpyM1hmmH4DqRCs3Twogup36PQrfZa74mypq5ga8jLmzP5eyZWCKgXRn4A6c"
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
