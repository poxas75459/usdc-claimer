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
    "34RqE2BVCWBHMSya6fmY5it7gis387x77SCaN1utLuvuj9RtVn8pbqGnw6EyMLv6JwobkzkwcCrmKRKWkv53LGt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ltp7kouKVTGBAe1xtcHb6bZvYiRYKbphQDvTCnhWbHSS1fYwFZQwPpcVytSNFm9tN8itMkooWqkLZYD3HsU2Rf4",
  "key1": "tiJZ64ZAu8ZrfwgUEr1QeV167QKoZVDumJuUNEvjQkpkpvTLPHkAV5MKhbKgZ9SCzAFsmV28mgfErhQnwufyRdp",
  "key2": "5jiqe9SQJDWVdC7GNZrgj1KeqdSdWAzuYJAWFYuU2Z2ro9s3MDjGjhPY51a2QzTTw6c9iXefcQ43aYLXhjW16n2f",
  "key3": "2aeMDX3tXbF1aQWGszQoWEijnoVFcPMBgJKVkjvgk4QPQUcohWetCkXb35sspw5BbfBYWawwaZm5FCrpzfqD7EaV",
  "key4": "3yK5DM5u3skrekytgXnUmbQvn2aF2Y5CjNZgArSVVzxGg6dr71WVXcLDjhNGdX2HPVNceWb5TBQ7MMkYzk1zMX6X",
  "key5": "BiZJp27971mgaAQGE5uDiQAC2bSnKKRPqGg17kgDfbWwe84v3kpY75iKxSmnfoSE8Y3NkCrEU13JhHrYqA3bzLt",
  "key6": "3ivT9GBnehzJUn41Pho5dYSRZDreEh73EpY6otiKBpLnAEW2P8RaFvJHqNuEZih84VGiWkwd64eqHY3TT9xVKqV",
  "key7": "2X41SiBLu3JH9u7qhmQT9hRLADgWmA7pBWb6f4ga4dydWQqhjbBTKzu9HuBYAxTn3D5xuvtPBw5QeXHTr86ZKt4g",
  "key8": "4rtDiDhAiZZTqYA3em4yNgpDJ387DBTqet9bbmA8rsE4PGLqXN7kfGo8Jn2XLqxKDf6qPWd9yPEcf7jXYuDtb4ht",
  "key9": "57hR2rxioYNmubuSNVUrctXdinBDs4ZR5D55U9XEYPvZYACgHjAiejw7wistFKRNMEPMRgkK1ktftShAK1iVsbHW",
  "key10": "5kwWnz4EkwSfHJjHbzXqGZxM98sM2JA8oV3pPn1QiUatcrkB3eXcNKTJQxJqT9y4Le7UQSECH2LBT3U3AqWSnUeT",
  "key11": "PdoxsQZFNng3Ks8BrcU1y4b2irkdNjisRrsJRAphS6U8pc8GjSM38qLjRYZ4qfeSECQtgXsuULp4NrbTZtR7bMi",
  "key12": "2QdvoyasbZkfCpTes33v5V9aSk2zKkwUscfJnSwMWRJN9Nitu2WerLtcArKkpbd7RTZWZu2eegMHnte3a4T7m6pG",
  "key13": "9d2x4iHPJorbKZ49ZBi7S3e2icVpjfdRrzok5QSEGqA8dZoNPHvsjeU5QvEx68h45xiJfaMfk2wJJRiqgV4o3Er",
  "key14": "5dzNuQgSgMsFu4BFnYS91uaEpFhaL6RJwDvRXPWXaLpz6LQUSvEVbEoxjtawVM9oFaPgqHhMH74uLASGtdULv7yc",
  "key15": "3nB1ip3HdeyZMB2u36YkLLdDowGfQqES4RbBzBwCqkXizpQwU3pKzjgD9VHsMXkwRVAjw7WXX4tEvLi9EEyHVh7z",
  "key16": "5qxmDhKhYKRVTZeRYNuXeNC3nUiBTCYCyxDBnkTcLyRjHAJiEPPGkWqdszmexgLPxxt5ijsAerh3G1LrwhW59Yz8",
  "key17": "2jytED22gv4wtdoDUP1aQ6MQybQqMxHdGeQ9ADdH8kwCMy9kvfMFBuziVse7p2bw6MpQZ9ggwUER8CRWPQYvcXec",
  "key18": "3MKiphRAobsxbXffiBRLLt2KgK84zoRhFHeMPi9ZffA5ZqXHPd5NmDH8zMewM2UNJardy5Cr4KZuwJubL5zQgBmC",
  "key19": "hwr57gMgev1wP8em5o2NbQpYbmVotqRRmeQ8t959ZJA1HWfw8G6rLbwvieg7NPis3znjpsmb81BhS11VGmUZhBH",
  "key20": "4gENyBpUdWMi9yB8ujUFbwfTESgCzqgHqtAKfxdQxybTy1nvrKxVigZTtB6oFV2TySBrvVonNaYpPjsn6AFiGEwG",
  "key21": "49h5ywxXUJNKp4X6nZyrJtJLs9HUaakzmGefxosY3ZvbWq3oB8vyrK1hrkuyPEUtPtNnXKxbvqKnMTFjRN59eZSC",
  "key22": "3nAb3qrWkGXGaC4wZCXbFnY2FgJGrdnb9LEEU3o6mZgh1vaUKDpWukbawYS2ej5o3rAUyHBBp6AcRZLBNDNFGgWD",
  "key23": "5ZJNH988gCTWHd2bg33oQchipK8HbnVCLhZU9WKYtWp1xznQkTctmemDHooJhZzSehuB8AGagYFNeM7LcsNn43QS",
  "key24": "5Yc9kqj4rtHXk6yHssShKouPj8kUfLuHNEAVgZ32cjFNckFwKANT3LT8JXQGfLPMxqsAhwf7NTTBN3dYqFVq6pBQ",
  "key25": "4oXQLZXBVas8georYmfEiyRwNrXYgAUS4Wax99fsfzq7JdU1D8SUCLxbCkbbBSVZjQhLGDj7iEuskjxLJU97Yn5m",
  "key26": "2DBC2ZQ96AJPsbTKhW7bzHJQDFwF1upRnubiC12f8hpxhCGa17EsovAUXeZ5YhEqh1koSKU5nvfbC1CtoM9Scd6L",
  "key27": "YGVajbtfw11KNk35rDMMkCeMShb3YKJnxcv5omDZnvufb8KfaHzmMRn2S8XAj7R2fhxdQfmSjDhP6W2rs3KMzAb"
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
