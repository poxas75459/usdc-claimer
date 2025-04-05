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
    "3YUMFRjYRLLZW16UVwuYcqnHMeNmoZMz7cHTZXFp1FPWsiiefJz6NmLiy4r1A3SUGDGNkDB6aHzeeF1pdkmrPRqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BVY5zNvnYQni6UxWpDfZDSzduKmnyFe19EjgDwuFtig1xsYdpZHHx4vuG89u7hZj5AdjKHCNsqVTYR8ev3iaQg",
  "key1": "24WnjcHbyvx146cqoSqd3BgY37tEtzJeQEuApHuyArmNcB9Wi9QUg1H3cG5qp3mYYH63XVqjrqwCk8tjWmk9AART",
  "key2": "1KBt4QFfwGL41sND6BKdXmYRtZVzaZC8AhT8fdDjsxBKGWVLDzBgCF4EUyyweo3G7nVdSJJigEJ2mx9sTKH7nAv",
  "key3": "2U46oU4QeUje8r8ftMEtxkWE9p6m9yNKqTYRqrUxfuX64Yn2rpB6Pgc4VZZxetbWs8WnMvwYSbD3Q9fj3Pf4xmK8",
  "key4": "3mJfUTY3cWg57d8VwsLc2vqjP7bijD96KWreDLyBh8Boze9bd12XK5p3Ju6YMYVqCLCnhFwAD75dVL8thP95v2Q2",
  "key5": "4n5kt6EKeKmhiyL6X1zYYV3vn2PeZL564mGcey6QHADftW7BRuZbUbRTrPkXjBgKCfpHzq2VocWBYaywVt48aTDN",
  "key6": "3fK6GMfFvwU5iLqMamuYsKi2483cMK6sxbexcQh6NZVB3uQy2w8xsUuX7bSqyKMgViLxRrw2aPLZ1qS2CekzTmDe",
  "key7": "5f2rkibD5Vnmcv3CoVBpbpvdxo1vMGBSumgAkc3RKLFfnFRZQzXEBfRmQxqZ8iAArKJf2viLbkkYDfV3XA2DVjNv",
  "key8": "4ptLfhnHwfrevKMhuqyRBoSK8RMCvKK2uepRZ7o2shdVSQS9goPJe8GwSGzSnsEjDL3Y72S1oNaQmEmDhKWQkcuf",
  "key9": "3bfByfYrQtTvvv9BgQ7V9T6oqr1Yy8zpjNCumtUA9a7JkpWtXybPm1hkQvUgVSR6pDar7kDTRyQHcJZLTnJ5Uod5",
  "key10": "2HzVTH2S5w7xdcEmfq888yuXkYM7FhmYniHhpQ5Maxn7A2VhmLrsSbSRpmKtakRbV2DFezixseguv9zZoLhASehx",
  "key11": "4ny5a34DJLuVb1QUFJ4unPNv6SZ7wzmnhvjaRC6BW4DZnxT1gehrut6zaHbitTWsYjjhyjTCe8zLKg2v2FG7Uy4P",
  "key12": "3fk52vdx4pQn3sCoksUUQz9ET8839YhwkzegZHiycPLdDBKZsboHLgBigE1hykb2vLsRHBZSLLn6y6MHVehozMSQ",
  "key13": "5HvUjzEgUu466PppVVdbkiE63MGEw4bEyhmFWBVRo5TBp25nWqJkoxU8LSPUp4FD3NA7yRwz6fR7X1sAjAyyHK2W",
  "key14": "5RbKuyBTGyKzD9tKN8dXtYcvdYtDFyXBAFwJ3TRBnQ7nMx3bB7cMh7cP3Nz6YoRKZnTqzydKYUpm6tLV6eEoHh5B",
  "key15": "LXt6etB6MqpjfFkZ96gqDcwycBydeXx8NNRwgroKJh5EBSy5gXZz9VLDwEAREiRy5ypFMSJcrv5ELuoGhPzhTFC",
  "key16": "44aZqXsWRYGv4ULDFwNL2aJG5r17bbGhb36M8NZMygrwZ7EuX2pqApcpKJsxmUra7K2HW5qPVWbNhDbKShpREWu4",
  "key17": "3Lxnu9AVUd8mwQhQpL8xzqVF8ijMtXkT1HaRg9hr6NnfYb97L2bTgsoxcGRjJpMWXayxCAKyCqRgvgmVqYYG6QTT",
  "key18": "2YFxdyzoBNzxzR4Vq2ErPzrKWy9FdtvoZP3rNbd6iPTPEjWNrhs6jjB5K7EoXg1igpYbubVKhPVDqjYaEPhJCb5V",
  "key19": "4KxypZqf7KB9oWqMgxspM97aCBfbcyBydeqJxp9Cfs3xRt4q3NSYS9s41GDhPaAjTR8ta4nkF2gk3qQ35ZptzrZe",
  "key20": "5qYviJkYFhjmFQ2harSpfVidvugy6xdNHo1PQJ3siRNdDR9s2yUijzAi4KXzHAHbqegNQwKnQE2Z6Gi3yvywnP8h",
  "key21": "2UZ6QRQSAHh5PTKug7c8wuFozqZMj5fvcN2Pt4YiyTPTjrQtWFad34wxyGyqo24fvBh6Ps1THXpZeSBimxdZE5dV",
  "key22": "5XSREbvzW9iNKNfoQAKngPkyTev63xUEEHRhLfbALfUfZ9aKxHU9WKsNNXZzphpb8gpeSpRKmPGeB3wJmCFwGDvG",
  "key23": "4Xz1Xiu89nAuNiQ6S6aQMWic35uCzu31fk21rRtZWDwVXao9h3WC36fq8vBHrTmaU6z8xBgFB7DpMid9dLTPpNxX",
  "key24": "4od4ajL6ogQRmTp7STfkKUEnu7SmcYn7pd2F6GCKC1SFQ648g9L6LQtNUFALV6nwjPjcw4mMpqK71dpJY6sxZK1d",
  "key25": "5gpMH5aaVFakwjThbZbxsSvxuDUvi15HxKwXpjN32gktmH93SpTfsPEVDfUPz6pxYzi939A8QzTjhoPcGm3M3DFc",
  "key26": "4ZbvyafBtvNr1gBbppy7RVK2iDzZKVJPURvLtW1n59EiZGn6tpjc58iPeLnckgaCgtiPHj3JhRBRUuz7RoRLzjg9",
  "key27": "37hW5biSK81ymAGjkPQQhfCRaGnjuEbHS1RF9ED76B52cFgQtGTkBLiGbwdP37mKJdP9HbsaAwNEkQE5WpjC5vMj",
  "key28": "38AVzuzKyC2ZxWxUhxPJXPXvQ18qvXZnaB2Gemdh9rVujn53GFTVuwWEcbUHrrfT8tPwcXMVMFh4SCUNdx9UaiYT",
  "key29": "aWxaZQhk4YJSSSkHdPp58PGmQu4MhyNk1YHP2fgccEq5PbhFSo2coj9pyJ4ujgDqHC82C5M5a6MvEMM4hoLpzQE",
  "key30": "4QjP9fuPmUTJd87q8FLHwo2RJXhYa8qj56z9KuQnDSmJTGw2SLeNLtoyNAPNVhumdZpSqNut5xoEVoxDS7XdrPb",
  "key31": "2Rj3Ph8987fB6FJXhDpur6Mp9PQvZTVzMEWZ2ps6zPXyrzXoyA9w9hgfBF7JoKBC8U6FP5bLa8TfrNJGYQjv4KVa",
  "key32": "5tikCYgU6KvUeoH23nWQb4XMuT6gknyB1xLJQrz9VFGPp74ZFKHqE8ZKyD8KcASFsZRsBxXcd9wJ6zUBYqwGpvsT",
  "key33": "3n7TkUr9YfAPj1iy4gZoMv8EuB92EZbMCCBZv7tLUwmGaDKYCAM8bHREFxp6cU8rG67axXrtWLnXF7RR27RDaebk",
  "key34": "2PTjjYyoLeeY62k2D7p1DwPj3TeH4ug6HHsii7BfWgTdAYJ9QuR521434HJ8Sxka7N7d4i6TEGcxnZRWNNED6jUj",
  "key35": "2UCyBLhjQTRvbhBKmfvtcaxoeSveHn8vJ9uP3vWeP7m74h3MoE1HFJ6MntqgSJXkuUbtsZpBcmMr45rAd5iWFci",
  "key36": "3rv5cNxkxdMyungsXVjHngfBHAPwZnq5NejhQqZgNtfs5RFcMr4eP9a6REc2Fs3fSvZz5tnbJa9mhsRsLxpXggLD",
  "key37": "2eYekEWmfB59ngZbHzPnfwp27jPj8P1PRa1YUfog3krMuPijbe4wZ3VxYGc9gZHXcd9y35sPRXcEzGuL3rteroYp"
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
