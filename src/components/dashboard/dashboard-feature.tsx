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
    "5jCxodXkX3yzezwNYUpP1kE8n9FVx96aS72S8DDhJ7DbneJ7tUYZ2u4yoq7689cNrqLWiC9AR1naPW8g9jGjj9oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GdqvMYPMFdVsCxFHP1RpnWb5CeZY46toahbbYm294qSxx9brKXX2oC8sViBYGJDKD5FwsHu6usZjp1weKcsDoXE",
  "key1": "3tBicTjAwQyS7yPpMutUMm5qRq9XfXiikGCc6LxcJ4KjWE6ytor9DP6SynMfv4KJurXWfZquidtgcZQr7Ei1tzZ6",
  "key2": "33XDVAT6n6jD4Auav7YwiQCpxRs9WpeEg2PAqhsyMbS6935CuooFpEdE6z3r9DPkD9Xr8WLmmEJSEaLkoGeETSrj",
  "key3": "5j6pJrBJBnPWNq25jkannUWw5hPn2e9UWh2nGkkUyf8yG88e87jE2tJRqqs36XVZdq61pAQhMixkA6JgoiwE6RHN",
  "key4": "5GCnXdU8dzGpvbqxvBrDkVRQ8gypZJpfHqifm4zuVBCv78iVo91WjuLiP8Ukeqe18MH6tfZsUdAEnWX3rMFnvW75",
  "key5": "v5zC78gJ8ibfZHYwHKZ7EK6it8apCo98JLMUGryJGn2YX9K4VhkdMjrN4Pn1tptWc3dUU6MMubVLKZ6xSKBLDMu",
  "key6": "39XHonWDR5TaxnA1b3UFkgBHUUNFbFzwmTVSMhCKdp5sUq2Xbrpf1w6buSzNTqjYTJcVRjstPxsPDZ6WPoP5QPmd",
  "key7": "63qrPAGPTuoKBoKHBNTPCrrE6p2MY3ry2tKqdpvmyPnqHMh6cmvK9CEWR2SfsAtKjvX6A5cpxCM7ym7FDVgwZCin",
  "key8": "KJ2aqqEh4LXtBSeXwtQAgPnPNHFDGkwq2iTZEARmXTrMFE9KqfhYEkQKAzKWHJCYePmjVAAsGzK4pSBwF3d27L8",
  "key9": "4ohHfeLVwR7xbs9EQP5Nj4R7gSNFhiYDpDnXL47h2pLcwvqLPgGQGrNMv95f6z5aPpDwXneLCuJF6z4JQ66suvHV",
  "key10": "2EoSqnR7uEz7ub4KX6Vf6E71CTmN8xeK5fc3p1ioix5YPos7rP7fSHzdDoVLm2ASqq9C7puA53bEeuC4xYK2kHPx",
  "key11": "4hXiKmUSwaUb5AaJL3MkEFvbg8wqTFebnAca5HjRF2VjRutfHxDRkooDXtFVhPQ1vBwbWH1hpoPS8LiUHmLBQtxz",
  "key12": "3hU4M7YKHN3eUWKLML7ZwXijHUHRfWaNsPeN3EuJKoEgjwLYFZjCFoYDR8Jwgayx65X2CfNVG9ssfm3Ws6Cuzae3",
  "key13": "2CYwGdqFYD3eYk3cyvKCxdL9H7MeyQnZAXoaV82txSSdt8dn3iN7Teonm2V4Et9md696HXC2y9BXY3ZoJP7juQEu",
  "key14": "24pyeNGeX6YFnuzCPd9zbs3fabMGWqTK6tZ3w3PKm38PXAgBGWNQs35dBgLnnZBN2cafKXngvpCS5GwgXF8mDjBs",
  "key15": "5mawPNpweZpJi52vxZu3V6mzZC64h4FnhFm9jdJPrQ9Pi7amfDQzrobaFE9v6SRA1iPDEfA7SVPDd3uUPDo1Yu36",
  "key16": "35tyxJE9inLD1QuQfhfXQWm1dVWpZvJfVdt1trqZLhsUKq1faemJu8NLSP6kVt9V2cpvNURimumjj5FaKvV8Pn1T",
  "key17": "5hWiVXh9XNydyJWbmnQu1qG6ztprXZhdSj1VX9CijNBUZaku8E8LpvwYtitW5fGHwnzbpAN41t1X4Mps2SNUUsB",
  "key18": "fZhBTHp1HJN8Z91yk5eb7EhmZg9gGSV5RL1BCXBNx6jVL159CYgydQJhdBkh5DCLWp97JgKeiNPJDyEr75PqE2P",
  "key19": "5x7mhHvfVvC3JuorbwqTU7CkWaMyb2VbnQSU921azgDhdBDUYYFSxHihiYxCjXMTc6oMACju4ZbvXbidJi7PYqqg",
  "key20": "55NQk4kzxS6Yhtuef4znYQW6VFwrBx3yMxT3diALuF3dkcY1bEHTFhRPjsSwgfzYyPK87e4K7ym7z5cWASkwxagU",
  "key21": "HD8j3gXDaEeKNDaibz5xrVJt3yC49BAtKDwFj2uJBzC6iqxhE9AGbABFe5XZsRirWLNNMardvVqu1NMopT8tP88",
  "key22": "4s8RFRxVZdrNpvyDq7xhfq2amdkixiDezVsTUdrGLpLfGhvmw7x6PzbKKcx9iBPPfcJBep9BTR7uLv9VfQ1Ld67K",
  "key23": "4D7Tk3ryZnmse62xz4u5cC9UDLBTVpKFNNPWp2FHZ1hAGtsEFZ4M8djufSudxZqBCjSwVhKhGiAct65PFCKp4ko",
  "key24": "3MgfPZNqpeqwF4cXSjVKEc6D6E8e3yoxxo1RMY3bGCZYWzRm9MUPV7kUPbGpkCajbvvk62GZZYmAdUekFtNvrDYr",
  "key25": "3yxg19d7GS2QbipS7f9yqphU6MybyuhZoLJjo7GK8rxYedYnDSw1GNDDJ9ZzJCLnb1Gr6g9vxuSqbdHk4d4VZPUs",
  "key26": "5VZbBzVy1mtUpoTMCsJRVfLmkDM3me63mYNp4S85ZArr4jamkcBtjeVo7DMPLLRTnqusSJRuy1W7PN2cqNGXiQfD",
  "key27": "2oXarFMebMExfB7ZPDvdtueFeJa3zrEpgT3tLERzR4JuQoXTzgJDns3KbhW3tHmsaeFnMiASMGND9JNAL5FfgCoe",
  "key28": "4ANoAPw2o7QNPKbTBvJn6fVJqpWVSpyhD8WJPkHPbs5ugKMsscCdnbqfCjZjBitAF9MWztm39qF6e5MTJbXQCRz7",
  "key29": "3yFjR6jcdjqrfsvWwe28Jczr4YtNtERUn8SgezS8nfw4aztXa8KTjEaCpv7rgQJU5fTKVmmoNiP9PtkvCrqEiKfn",
  "key30": "5MGp1m5o2NP8HBs7W4UZ8XoM6eJy2ADvZw8YgkaAiPp2iw8wRAM5vmD5iYavMinngECmnQZnbjsjWYXXR6e968VE",
  "key31": "4TrbEUSmevBHNqDBcTz93SaMqNxCewrSQTMkXSoEjmYxLDW8ydj5vmcPFxS3wXJBj7V31f4Y4PUH1BCG3e8cggPf",
  "key32": "61HUTnq37GbSwDbLv3QYnexo6eoPmzSrV7vf2RXgwy9ikPS9aDgfGx1XfoMJJ2sbBBsYTBQpaagtAq65QYdi9x2L",
  "key33": "126hHMcrZnT7BNDcj9sd4xtFRVqHMmTSX6TGnAyMZW5nSUHddqVDzG5ebqiJU6ZgKBVDPJG2xj52MPUhQC7X2Nev",
  "key34": "41LY79hrgBB4BVsMcPFvwarKD1HQAr8BMJR3rhFzrRfS7WjgArd7PHY3ANr29dCy9JVcxja3c3mLjEfkWPLRGSF5",
  "key35": "3LouNXzkfU6YkNbukuPKHM1ENKHJjohUq4RiB9TfgsjEMLeguyPReyBEKST6f5pRHQtYZ9Ykmv6dAjGBDwVycR7d",
  "key36": "iQ4pvrgytNmvXoaTiQURnSma7yZgzfLNe3WC3NP5mHRnDTCqw3yqv5qa6n7aiE4nnEcBBU7UgPkYeKHuXKFusFY",
  "key37": "28Wt77fXnEyAz5xT9NbAoCpoFENS4wsmKeRY97Y8v1rqWbNH3LdU9SW9cbqaYTgCrzvdBGuad7oFodSBpJrupr2p",
  "key38": "2nC3Dee6NXKMSDnHQNP9JCgXmyhED3sZCkyfCKHqx9K7T523xc4XjBxGpP2krbYdNskKYYainbnRVrW87So4WjTo",
  "key39": "5EMYJXWG1MQJk9ujDJhUFY34Et9Z53ae6tHCjVSoQLV4wZDNvTuMJcwL8YDqow7KZRGgEUWkwiSorr29qMGa9ASe",
  "key40": "jNNK1jrjRES4tc6zqLsSNUHXr9uqjBGuozym379md2oehyWfb6nsNMRny9JymcTUPTXmjBCFbPYqGB7oxnsTtU6",
  "key41": "4PkC6bzDexqSYcQ1Cm74NhP9rntSwTqL6RpbfVovypbnVvpAWYHnZz43wWWRAEQAMABNRZkEfC1UUL92AYUKkmts",
  "key42": "9bhH1rZe2CZBkGGeAvJQVsbgTie7qz5RS1QVLrnetdhNidchk2CqDT1UodGmTP1xb7cPogEcqcxiRDmepjKCjgU",
  "key43": "5RU8uB7g9M9NnQxWCCS4mK9kCKyG3Yx8utJ566ADJDjF4f4CcQsNEpZZAMNvCxXdoEyfSdcQXm9ws6pBQUWdiof6",
  "key44": "3phofXCiadPGHgHyJ6GPswzxkVB7mf72cYpvnhuQTpeP9wohzCK8WGqmLFqy2Kgb7doMYAuyuAWaRxXinN7rdTKF",
  "key45": "25BZj74cyqbvt5yXnoseg3hcicja6pdNMjzD266Y3r1GzNyGucxKzS1NGCgrQiPecreefd9C6Enja1SbJ8KeRLrm",
  "key46": "3kDkk4hqm4eLj8A7BLohbmhcjHbVJkRQx2kFFQab6h7KsaqVai3sVBQNiabGZMRbXLXkeJTGaFB2r7hDkRATJdbk",
  "key47": "3SnkvpPdZpEMwzfX5Bbb7cQkqmtS5YCA6in7m3wB9ySVnSwCytY2j57vLmGE3E9jxQAvLhAZgi2z5oEvAQMyv1x",
  "key48": "6ZBPa4CLd6CvPBdGzrbVKh5vSW2gbCUS3NrWTKkDgnbgjZTqUDnqmvW1iDsvcEJCWiWzF9MSpGmvjoBSZDuoori",
  "key49": "4TM2hj4ip4oqPJiTit3q5rnDBQxkHWVFkF2WawQh5ihLhkFPgehrSPWs9P2F6bXWiNoZiKVWeCzw1Qw9rbx73Dwy"
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
