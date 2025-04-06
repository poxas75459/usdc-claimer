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
    "5yymQTD9y7nVsqKeSFqTUxoE6jXzzckTVXuGdBimi5iRGrvh3SqHqEmvo1CShsnDEkhd9xViLCwkkVdFPgfmjwbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55iXpg7pRwJ31xTMkSvkjjEawjnB9tzwdbsEdUi3W7KmeLXF6j7r87otQkmcSF5cXbGiBLw3LsL3scUUL9Y8K3tG",
  "key1": "5TjiV5eM2bzNfTzpaYKpMQgEw6EZH4pCEcpSrN8jmpfnK6HhbzE6SDVJABqVRJakgDSZqn7Q7PxfVfgaaWLcFZFt",
  "key2": "2nq2KN1q2NDxVxMnV14b2GBxFd6YrVuJzBdRFvyPL4YS8ccATfqW8JJG4s6sprfKJi1agMhixX1DfqVxby8EaHir",
  "key3": "pZGd3QbH3wMiv8yA6X1og7Vk78LNMbm34FXwvp1SkmvKH4PBo6cFQvb9qqjNypapSegLs3yYJwkUiVQkX5Xzc8w",
  "key4": "3ddhaDaPzbAMHQBxAmQCv9fakqNFNpo7gvYau7i3cYA6az3K77AAEegPHwvNcEp1dMavbFgVCWa9ybgGtVrZ1BDB",
  "key5": "PjQoQJm3gh77wm9YerrAQxufeFF59HsLeSJ5scEiFSGvaD9YwELZt9zxrbVBCpJjAyL8Mni4HRXU9qS9FHYZpb9",
  "key6": "34nkhMr7fSPNpgtrA37A6ywwuA959ezvDJxNqeqBxrPXLsTsDpLgmLvSK9eM6ZnbYwZeoXaMCFYSMbrk9y9St6y6",
  "key7": "5Y3zgsJVaVopyuGSHTzqk384XbqyGTpDWxf2jKDsHBz4CvHsWLsyXPFMv8gn3KzWJr7GFquYhVQtojhKpAgbEfTy",
  "key8": "4jYriuJ46EyJ5XoH4ya11g1YjWQSmqA9RLE8LTuVSrQAYq8puXH3rUEwNLypJRKHgNS1AAwtCiVGuoMzWHJFoosf",
  "key9": "43bdLu5xZgv1Nq2t2LqUg6p892ZpoxPP8tJ2mAJFRVRyr9hBVjwrhf7JjfhMTXoDAPiQPjpcZ6j4d6SLxN5M8bHa",
  "key10": "5bDbNXTkGTWd54TGWXUGk9DeEgaMzmR7TMHEBtem3MJswMiM4v8DKqtdtv4k8QDbTGz6n4F9u3wJJqwWt6fuM2Hb",
  "key11": "5YzjS9cRgdjrteeqgBC8qcvAtwAhvwjmGcHghp3hManyArUvSF3w4GYF6uW42JQi8NtNKJxTDyU2AnMwVTvTpTao",
  "key12": "7EZJe2fiimmhSN1DRdH8HyeZ9R8fNCEX3UoGimR4avDSNHj8yHCUjBMYa31zveLa5PCHxE5hzzCMteVmZjFDEt9",
  "key13": "w5aiMpuugmKQ3RigSWfCoHNdsfmu5DxXVXYmCwc4NMFk4a7JETwQhyCEgM3bd7jayPNBCdSgY9gWxTEeceQH7Up",
  "key14": "2HqGdJeG7NRf9VU4azkhX4abSVr8sEWuq2oLXpn5YMa1DHMoupTVyt3kc25rVZBSjLiUiZ6zEm1FWTE6JrbJCiQz",
  "key15": "4bQYXjtjkhh7Xupq5QdZ1znAbAbw9RxyaaVwL2kGKw8QNyv4uc6qQVGxoKhkUafXopCuBQC3cQVmgbMSscRQ2qbh",
  "key16": "4JN1Ap411suJ93F4LUfi5cZrnm72FxWe7CqdYiihojTkZqmNq3JqTQStvtYytnk3Hg2t6UPpbE8w6a2xiviLUSFs",
  "key17": "5RymyLfZvXbg2iXQxfAzfeDRrVWveuihL6E9gbboDm71cDkXzdUbsCXaVZe45xctM4C8BMppURPTEFSTFWhRbWqT",
  "key18": "2UjqUJTQeH6HCWuYUSG3D2AeHZjjcmivUoLJYYH2KxxQSbqQkXEHJqnfJGhbW9PuL3FDqwL2TegTTed4sWvEMxNy",
  "key19": "2pnVPy21ixqAw59ESmYZKw5BHfqpuMTdHv34wS85SXre1qrkAzh1odJrDJ7ZDLFKwF7xWqyYwwtrWBU1UDuyn5kx",
  "key20": "2j4qT6ru2X8cwuiGFw4s9J7U1at6NnoWQBzDQoaTbfN2g2NgACgtGVkuyskQzdMDvRqQLRdMVKSoKJfpeimWXnHM",
  "key21": "5b7gPopy8EDGrsFH5npdNBqJ8dCqSqusynZKG4BhSgaimZpo9DGquFwhDdAbMzGYGgc1WgWUUM3NHjy9qVY7Gy4B",
  "key22": "5AE9jsiFGRnEESFWdTL3wKdmJMc4ZW9wq1R98gYiabw6BHyDsZZrj7mACG8TmF8NSgraVDEPFEi2VwxZw1UhM2ii",
  "key23": "43AWU2CfoAbC9nsGv1oHRDd8EiWrHxYPTuwCvF1Lpu9JCCqpbFg75JWgBT75SGeBZSYNiXsh1AHJQEGdbXMAJ3s2",
  "key24": "5dLqngAijEeeu9kcKiGEZHbN75PdvDUf8ickRQden3RGCdDQsmcJhSghSERZunc2QfXn77V6e9gQ2RebKBuHfuei",
  "key25": "28mwwd9SdrpCKcWx8nKXDy7EXX5c4BAnmRwckwpDZKqts95QR5R6sJcZgsv98qboL1eocrDj1FYD4vruvMsHe6yY",
  "key26": "3KycVV62cFSBDGSFG9oMwYccWad5dnFe7urapLdAWy5GumDgPm6zJxQuVDto8ta3fdUzZR3u8g5QXqhrypj66ALw",
  "key27": "v3L9wct4ykB5WbiGXmUN5FzXHt525NAYPikVkEVkoPRmZoknQUs3UJkiHy2KgcWeWKjSqiHD5Fm49rD4wd74YEm",
  "key28": "66ScDX2HGf6aVGzM2p5XuKbTz8SqnaXBdeovXbZgRXS9Bb6Ayw2awhq6K8fQz141tveNrnskYUXRx7HYhTzqfQsE",
  "key29": "4QjtwCtEZagwwB1JLVwfgcvSpQfF3ZHqBsfqK9ibkWCqkgbtPSq3Nznx6F6FpPgLmZ2oCa5xwnEB59vG4UuntuW4",
  "key30": "5964Xb9Xm6qkxJsojnmgt62grx3XTL7CN3CgxRmDGE3jJ65X3DzNd3cGNJSzjJyvzcGBoxaBMHvo5VqZK7YPfDXV",
  "key31": "4x1ymYRafikC99GNB6tApTzmwkDC8QdRA4LNw3a76SN4bFiD6N32joGGP1g4uBLvTdFWiqxabdtfbaueqPSfZQm2",
  "key32": "31PBpDctMfnb8seR1rr98JnBjiMBwerShodTK7HrJhDMjBhhwDA3XgctHMb5GR5HjjCgrmNuvUzc6KKPi7p1FgZ1",
  "key33": "31HbrZcdiukcBuWWxJh5sb9oxXC3yeMFnKg8zTj97RCj7cLoeHYPLkydU65kC1GsY6BY7crhfQUffQktXyoZ13P6",
  "key34": "743fzDdVunmPXWdK5HtDDG9drwZjHMGR1NJoEfJvRSHxBMpUyo4TARi4oU5942kXZfwXKwriaBLynDKcYhtYvrj",
  "key35": "3jD7siuns5nyVWe9AtRiJ1pWAoUUCdncoX7KFUfuKsSZdwAJN3kpsXcLEaTWqcVAoyLPt65HYjQDGraQ9CMThjXY",
  "key36": "24hzRGYVrrUefGS8kmoJeZ5fzMnqrwHynZazdvZ5SwvxHnhH59qvoPierS67NSbhaA316pGk1sHYvx8R6brWbgga",
  "key37": "HZrTwXRRZk3sKsPJuKaNWTELAEVFvSzgdbzoiGuTK5Z2DaEdTYdEnrZR2RXaUQLaGGRKifoFrYPreWsZ8wS22kq",
  "key38": "5rn8L415sM23XdDJQMr9YQUFPxXjfX9tFj2Jgf4kZqLoLLwwuVWDM1VvDm3nQtWes7qNuzEpcGT6W1MW2eeJwmQu",
  "key39": "476UXL3ukv7fc22KY38497gjh2UgUEmdPqmMmdr6snoYQmfZU5hr51wyiPNL9y9X5BP6vbJhZ5zwtL6KtooCb8Pr",
  "key40": "3Pr66hV3i7e4kMdEvALpaxZxb6fisyPEYJAhbSgyGy29UajfCm1E6dMzLjzWZHiBbzwAa5CU8Ybes4B3ukuQ4sjJ",
  "key41": "4kHiBLk87Sx3RK3CYY5TtFFzYqzbSDtH6rCHcU6xBCvbDaX8sRieaAy4CmXc8DpfMD5BgvemXdixbHUaz8yuELYL",
  "key42": "pip98buyAdFdw9TepwHqiXthKhoWVv57J9baWgXTKJEjSebbUHzVwPg6uuJf8WLVtMLyAWsxYz7A1roYcp8bMNv",
  "key43": "5pbhN9Po52sGVyYJHCpz1JeP59NggDU761mwYqj4CQkKS1wLYPdz5wF12mPnYJDXLzDoa8w4W9TUx9SN5HXBPCgL",
  "key44": "2x6LKqFQTc9T4f9n4dAYEwgYDJLwfdeEQ8FQbrScnxARq45q4YZZbvKtWCTkSmrw3p5FfD4vEuagKop4bZxGKQTp",
  "key45": "39Yzewr4wyuN2JV9mVPkqpgRnQRAcCNPq2oNKtCtwqL8Yr1VxJETZQfTkQ4DeDzHquZ2J42NKsMLw1zwoskDXoP2",
  "key46": "3ENTvuXHZYE9XLq1i55Ez2qvSqg63sgnW2t656Wqa4bPV6Yqdu3hYfRZbU8vMf4Gzejab3LNmYfJRC76noBTW7cq",
  "key47": "35uFi9s5UxarVJGJvWqNhpQ2V6rYBeun12DstabXAW1iAWVAUAte3P6joUtNivBvXPSNMD3zqGiGgWM3Lhmv6stF",
  "key48": "5Xy4C5F5ZQA2a6uGnt2NNAdNj9kVaDQFq3hcBc2QAUGiBCHgpjacxhT3Cc5SCFdbAWNmpZnmznBCeipjyzDZ7HJH",
  "key49": "22P5hHGYgBrkzJ2K7rv4Uv7Ef6qrjurUTKfzxBPqtBn7sUhwhpsUN9je7YbRnakkqsnDJLGJrv6CNiZXCi9VNw9R"
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
