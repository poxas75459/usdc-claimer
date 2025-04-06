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
    "2hUmFs5s55sWnetZevPBpRLPe3Ha2ZR8PweqRE8BGbUhedByVCjn7ekmJpABJbwctNxPPW3xfSnnnRPFzC2b98vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzYahC6ExUe5yJ8CiSyLmE3poDJJh12QTLVnjvPCVtpu2uUo6mKSNGLd5UcLov494WopditZxbRUHX8mmWagfRq",
  "key1": "3BCyFfneuwC43fkH8q4aG9KCVwNywkq1zovwPHHEKvLCPg5wS7wGGuBQ9AKsPweKznqbwXd6eDy3gqSYzpnGqvNv",
  "key2": "3KLeJBfZSAoz95zoSnPSzAkkNHu3wXxhyFcNrDVVy3jfULDJgj1KY7NTiLjpXKV3V8pQTGGVVgHvZsHd3Gqo9R35",
  "key3": "64PctefnW41M59LzAaQYDR6WBEAudDa16ev5DtGkRRoFu87NyhEcXi3QWpwYtFDiGCMCJZ3QFmLcHGWPsTUX9nVw",
  "key4": "2iYHXG89EfFBMYGLDr9jhJMxV4GcEJHP1RGGdCAJi95tz6EV8pyk6ZRE5kwt4sGNTvtDDE5bRPbuUEn6vVCrKEWX",
  "key5": "4371u2QU4qCCXctxW8MNoufQbmFPE9sWp6TqjpEvnTvvFU9YpkD8aeaKnCqb9qr44EBmTRHjmcg7oJHhcJQaET6J",
  "key6": "5QJuGLJr6roEGvVyjv6i2GhCDCzprEVuLsSWtxsPxV5CBvrtR4PHZSfy2A5D43VoPgLnsfxqhL9t6qNZxNJn199",
  "key7": "WKXQKAuYyXGsiEYvN3mLoSDd7n1YXssdgnddDpnNZ9izsYJNc3XzyUXnTko3nXNKhjeB1g3vGAgoTC9jvBAqQum",
  "key8": "3xqigJk2M8fxosnHUxVjdrnMbjZGcwB3sPEcRH2zZteYc6uicnM3jnUFu1QHSRxTEUzwpagr2uRQJnqGvgvxx1ZD",
  "key9": "2CBVh6A8Pgo9JhddJpjSkyY3eUDLJZXQ15BtPre1GH12MrVT8SdjhFDkRTRX7G3HPHRazs5wQV1hjKHDZrjegntU",
  "key10": "4MRivCYikopKErFe4tEti1NhVRtDthf8AVUGVRW3gStid5uY9Fhi5naKVk74JSgrxZqGzNUxM92bNGzxFZEDBLnu",
  "key11": "2FxUVT64EkFZuEzTGESW8ssMiQN9f7jm3bveSKPeZpWZBfLzM2Vg99MfVuNqXX6vjipTtDgBho2K4YbaseBs64kG",
  "key12": "2H8zg8rowSoVjZWNnRbovR6RhCUrhqR5XxTqG3kqWARuAQ1ocufW35x1u1Wi49bv9mWfiJCwznPZxiCk1aLkzMpt",
  "key13": "2ohD5WEW8GyfwgSHT7x4Z9BCoZD42opAer91GioATTFqyLNwNW9NpSqfqQYPUxuiPneJdnw83tzpTiGkXQz9mViZ",
  "key14": "2JbsK349hwbBghsUN1a3L8kKVe4wPbU9GMSLSnSzvzzQ3ckSSxUZLtr6FVaWuLSQksGo1zNqpAqpbWYmFXecVTXk",
  "key15": "2rGSroMcD7THLPF8q9eN7cKo5dLtUgvPwRdBfbsYAFZj4T8iL59pD8AJ4EYgcWAUW8qVqZwiSpzYTkmvkuyjqa25",
  "key16": "4bLjFKqzNvpCUcuHLMTsWNMW2hTHeB3BXduu44LWp1tGo5S8YPRevDnmvPyryUVLQZCUNX2RTsy2WhfvJJHM7M2r",
  "key17": "3j89pGctxRbhsb4JwKdjGG1pTYJzVXQ4DM5Ha6jAHGL6NNbTkgxRPaRXQw2kpP7ALjCkSxyLihsaVjWmnkNcxap7",
  "key18": "3MJ5wEWQsx3fEh1VV3fxZJc1cJDzmemaLicq1SMx2Bb1J5uHyddsrzhmfJJPHZCmQNqyeAoQjQgWhjS4mYHaNZX",
  "key19": "3Z91WsSPgbnxQzsyoRUtf8wHydmCK1FsufGorNxDwCzUtkfzwW3wGvzQn4Lxf6vEniEmmkEYT5uxwJhKAGfgZMGZ",
  "key20": "2ebgvuEo9hWQuEq2jJ6kbaxR889Ukm3AumTWkujECDt4LGEDLNyknwcXh1Whh7fbwa15oEordw58EZokCeA1hBh8",
  "key21": "GQK7pasVT35iz59Se2rkoUNPf8wEPcCKvFyfAxrtko1B4oTPF59jE7dpsSqoELXL86LtycEcUrDaSgJUf2Q9jvz",
  "key22": "2jUGRCWxh4XWYN9xYixx1QrApBjxGuq1LwQAYjjci8Hv1CkSgnBdSeZqEUcAKhejhuu7E5d7qVrDny9kcXfGwbfK",
  "key23": "5yacEfKzUg8wmqtZ7JeAc8dGrqbxB3nZJeY5GEt4r7Rk29E5MV2YEqt3RjkNZzVZMCsKzDftM5Tej9qun1Bs8msC",
  "key24": "5gkDxnffAW1xjHoLNgxacpVr5mqApArUBVnLHqkqMKvjURHkgn6V1D9i2UXE4egrmzJQPMrCsWqJtMgij7d1kSPd",
  "key25": "5D6nWgUryX7pkPxq3o9gnFT7rnrCUwVNE5WJLCQps6bA2W2G8CpFQhYVdn1tYpJJt2UFPoxSJ8NrxmVMd4BcJ8RZ",
  "key26": "4aQ3fxh2gsxmcnnsewTLGuX1dTXG5owU4gPJoq53Q5zspxT4BsYeaZNUAw2mHRFZSAqsJ5eA8LApH2d3ogHnaSZT",
  "key27": "m4HTgigLTEYPDJPUawsyAZVpR9HAxoPWJ1b9jtWSK7Hgsgp9TRcn1xu7Y2c8QuFCL5DyfoMNsNbbgWs9A1Crpz2",
  "key28": "65yzg69QzSRZM6cNx2hwfCH3sArAKu2vALXQt5AeWQ264K3AMzEv62if5ssDBtCroM8Lb12Egh9pSrLPhzNpDV6S",
  "key29": "39BXjD3Zf9no6oXKopbcy1J1tcLPGHarQBMG5oN3ekSMQm1EPNErc9WyDoU5b7KZ6GvjBbskr7N8ufro1zHgPy9d"
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
