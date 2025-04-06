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
    "3d8EwDR9gHjqs59N1vH6XcE99Qmw9j4x5D6vcW9BFQKuoGaUwx2bWWCg2mW8oKQxWRRu9eELiA1UzZkNuXaBXLM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EoDmwpo6HvGgsp5fjn7TR6WaorcNzTJyh2J2BAxTgEAqkDSZEjmaPibgro94hDutrn2gPZPUy9oMCZd96z88Z6B",
  "key1": "2VE4nzzC5dAnLZ69vWXaY1oJ1x7kr4Wc29WoHBiCwwdQ6fsDE1ApZP9o4q2SUU1hhoyQqgXH9NKRbAUnpm4bFi4S",
  "key2": "hxeYSJpdpGc5oBUxHrbF32i7DhQsprewrBuZpTsCRhs6Rod9nUcQCgnf2V2gWKWNxrwGUJfRDH7jZhR5Sz2QqhU",
  "key3": "3AkadtBdjNgcDJiVWYxuG3KHqXeerNqTUwmMBsZoCU9zBTiTiKvjGB8GjZQNWaoSuAQDgxYHhqrz16ch3g8EaWzG",
  "key4": "3WUEirrc1xzmckEyCSLC7RYb6ydDEuxM43UjoNMvS5ak5DutzDGWbUUk3m2aCzdKB9fTPJKBPBEvU5T57uMMxuov",
  "key5": "2PeudS9gAj87wVJD77tBn2mFDKD4csyCiDme4iMVvPqZZ89nzDVjeyJCsTiESYaSg7h9F2DEVpgLEBivCD3Wq2UL",
  "key6": "2tTTVJ4rrGbeZhaX57xeng6RENHi5R44fBjyxXEG8FBi1gvZLgfPbCKF2ZvMjR6JhAUUdJtaPydnAgspykRr6cmU",
  "key7": "5FnTQv3yHMgfoyN9ZCkqvWLGCVxnm9XMjwP9UeM2JKViVPxzFuxdiEY2KbsJL8ejNkuKNtTrKProfDuuNPk5qWWK",
  "key8": "4L9m4ygRyb2BKAsaRq1xBKK6ribF64aeaG2w5wVWKrrwHANDcjxDjrzv1NLYAzcuFdgCH1mYvQRTgi6y4PLm15Ww",
  "key9": "4GLwHAjvfQvn8iyDpeqWWp8V8j5KtjMwwBjVxUn75RXaj7JcDYu6yxWSAi2v9vsdbrx6Ph9rLCEFqaH4ERoFusKZ",
  "key10": "2MpLZMqEm8q4hGSwMAJAeokGGx5XHjucaXYEowZtzHjhFwoHh9RnRnbEKWPGztzukyGkDSY6pXNWk9TsgsW1ytZ2",
  "key11": "3H35QYTQjYd5dDS8B631Jwv6BCPEJb4H4MvnFKRZsLsDrbsRTWpBVfHfPuvtdVqBN6BFqcJpyPYchBLhJz4ApMkA",
  "key12": "4dmHHBLp5iHvCq3ovr16EJPZNPJkNrsirmEHpbnxUA8hZ79utc25j34PFYKrV8xbCSF59vpKZF64LMAJDwwXFsHS",
  "key13": "2PT9m7CYHEKvVYJW66farEkT6xaLrHvuqsmPVNFXsRMJ5kYVVqA9UC36wzRHkKUehgJmbjDeAVAjWjFgdbJ1AqVB",
  "key14": "2GYxGpNCe8Cf1WcSF4wn76aUgy49zqxcqyLC1t5WnqZNgfsYqqCW8bs4Uirb4xbd1s7PWmaxZPprhvg2CpWUdem7",
  "key15": "JJoQMs3EyQwX5hBvB2jpGA9TNyjY4FQJ6MzucLsNZK3m5f9nyx89tPLNMDXUx7Skv4n82XZVt6YcuW4Ck6iaV9K",
  "key16": "4gGzZqDAsqcPBzzMhpV6s9m1aWiExnsopSyjFWN9x1sez6N4vPSg4GASiox9s2kdtKgkxwm5S3xFi6BunPmn9S5V",
  "key17": "55Ybbe4UM6big8ybBrojMZb4QHmoZNPTJeE5coF7KH3VxmhpvPZoM4msSjUAJv3krhySQrq6X9QeGipCPCTnQxSA",
  "key18": "3rnRmT3JcpRTCMr2Z8BAWehahk6V6Z3znuvjQyNFakBjc8cRcu7gM6o59gFDCPCzuC6GVTUbmXTmXGmU8Abm8qRb",
  "key19": "237uxk3pJGxfsuUr7tJcz5bmf5JsrPtThjTMzofWtz5cKctD5k9b4PH1XeVd4FkeQgTGLxg77tnbXMJzUBynycG4",
  "key20": "3hkErAVnzJyZsyinCoDtcNHdX8EX54ERK3FMpb9BuobekFwxLcfdxt5Tq16SEg9ntGfNUufW9xXjMR4ZeaTk4tcJ",
  "key21": "2Lz12XuR5nquo54m9ov8Trd4E6Hqp4vdfHATm6UVnoYtbv3fKBJhB1452vfWt3BHJMUd3Hk2M87AUtd1Bt26FZgh",
  "key22": "3wLnd3Je8Zbgbdgikc1JwC2Um1BdV3L29vgy4oWabQyK1SBMi8DmA7QdjGKhfug8V5uZVabTgyv3ysUhPyLfTnoy",
  "key23": "4TEDDcv2T77YUmhtJfwodHHbJqFtD8ejK5C3Nz49iNBz9Mn8qg24MAMUewH9pLvcg9m9HULBvvUiWABqsgd6W3h3",
  "key24": "3DKq9qbwwYvwwZYLi4PVB5pgdib4o2aHFpQnqqkemMx5DeSnyaYxPddnPhCCYZJCqrhM31p5sNxXBf1sLAbheWdR",
  "key25": "4CLrooMnFdE3uC8FA1pukwLs4ZA4zyBRro9hjR8neCBiXDHhYVzBvNK11BJ5RBm4NXsSAGZ4uuAapRtecWmBNKDa",
  "key26": "3AvWtFhPyD5BBLrfcHaS5g3yYXyuaiXX8qkQgXS3NoS3nN6fXnea5xYMRW8h6sprAX6breVUPK2PMte1QNHCQbNR",
  "key27": "34t5C6Hquah9Fzy76cEVBwk1ebnBmBJfka2KGfFndMd8r1zFjHNzVE7ZgznnD3X8ZbnSZUE3UifU7bhJWxqf5S1v",
  "key28": "5wQEX27TdUrEMErdK79NXrksLwKKmb6PWhVAZMDh8PVwjQXQYDx18LZfUPfvRAk88y8GGWX8pVA3AeVHDjC77Bnc",
  "key29": "2V2UTM4jW4TpAeK6qFHUa4DAiundyURaZpD7dd2Anq9Qa5nEg6JymF9UebEn4q7DmQfK4RBLRAEYYZkmj3cfCfLx",
  "key30": "3oMf7RxeQzzypYu2ttzyN4vLWEf6sPkCWsWAiA1pASJG2PVKQfSYcGCRTBKG2z9jsjrT7K8JpeH164xwH6aPwAPL",
  "key31": "43fRXdtfWF9mbFzcmpHGwbjxKPS7YCKaJDnFd7mubghHuq8NfLBSnzTsmkoHHDShHEo93tDJ9hz2PXGeg8n2FsBx",
  "key32": "3VnnSzSBZuXC4t8TjD8YJAhT97Yxou8fG416KTAcVdd9M1xeFDxFwth6ooXiFqNH1QUqLfNhVJQk4FsU93pBxWbP",
  "key33": "4Bv7pQqgqjzsSFnHGVe3AmAMyBg9Z1YssyjhPUdP4baSHWxSQEjU5tBrU7dvfnavUz6xPaFiYLNwQhJ2sGABueqh",
  "key34": "QSGVtTxXdXg7qj12RtNMAB2J6PrQFRRGcZFq9dVLXRRdNcDENfJZJ6TkDn8AkdPr7GW6rEPuZBytPrdmux5rMEJ"
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
