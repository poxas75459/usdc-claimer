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
    "5hXv7w7okLp7xUzCpS3ejXJkHKUE7yqnnC3cn1c9bC8XdaYvhjNVSphhJGCadTMiGoS24rw9X2FTNSWX36K4sQfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tcs9ChVxezQ6b8xqp5oXUPcZeCzaH8JNNqDKKizisspMeY72GHJ9d9FCrzMKHK2i6JVf1ZvwU8iYgDQfvyZnxyh",
  "key1": "4et7wfEbMspsjSma79ogidgMKMyzRUxTD9PU1h4Jq91yeWjQiCL6PrHYhFyYSaTQbmWkPqLmGLitF1YShojk37MC",
  "key2": "4oGHUYmpD1PYhgLPT6wrkSENGQAHQfFWCtebBT4GE79vftFu5q6CnC7eJ7kZvaSCLvJHpFy3Er4mS9Xqs4jkTnfd",
  "key3": "4FpbHLWBVcibwGVzPaeTdnuKZgCsRejJnwNeZmdnr9jstoXD3NtqyL2jTLKP5JQy7jfLWhUHNLoNU5ZvA3WXANCR",
  "key4": "3CCPCuY8aKegGB9rgvp2mmtxLqGX38pCcwaNR2KBMK4orXb6WBCFkf2Be13yrWFm7R9xeZJkySSYYASY2Xe9WbkZ",
  "key5": "2qpJZSWDScfistqaxLwamMg4DK5WgrjP13kUKHrH9ki785B4Y4hHL3g2BC8BuF4HaTqBdMDMXnie3AeSTCqLnzFW",
  "key6": "3AnfPxQ193HzQuk6yMPXdvquX2SExLFPVn9pxd4RMFyszQLw7R3rdHxqVS8RQLKyfeTDRhv4tRUKRejxiqdUmMxP",
  "key7": "3b7PAX1GMSvdoooDrjH4CZmJT3XF657z346GKP4mRAirQ4UuT48ZnAoop1PW9MYgoMFh3963fNEJ3uqSQ2tAG3tC",
  "key8": "4kxCnet6EmSv78ygXdzFJpoTjaUcJcuSg8uCyAPA5UBskh6LRVP1WjhKMP4Vs7LbLMLC4WVjHLagx7ZG4PNLYh2V",
  "key9": "5DfyeuD82F4P7m9XnDrWRBVYuhTFAK4ySwkWhKHLpVUm7dBDFD9pkCb9TqNY9DqpLj7XnEKfoGAvheYsiTVdNQsA",
  "key10": "4accPPNnZ5x3uc7ckaFEd8JRsEwiA2aihXBYcccCqSR1NheChP1ugJ5jbNgM6F5inHqqUGdZfoKW1sUjqKzJZrrQ",
  "key11": "41qxAjiCWbveDiXope7GrfuJjAX72vi18rPsmv8RXmUekb3R5YE6LJkUkvjh1bzfWqZEqpcLDMUnsUcYQcFVuA45",
  "key12": "JZBegyB1rcF8cfTxA3PMSZBgYg6CSwQsAUa6umiNqtVnLyJYwk7ZJerDoFdc9VURt3VFqe8Z7RELDCLcH8yFYK7",
  "key13": "3Pewck91XKwXfvp3TW7vPjhL7pbMiRSDYGPb4usvhkkYE8o82jogz5kYrR2Njhh2CNd1uUAk77mgCWtziA443xqX",
  "key14": "3w4EA8BtQLQ51JLLxpa8hEqJf4dpyBaeRcsto6ADcLKQwxMWh4XVf9F85jsp4hji3SeH3XZppWpkLsGuw3hwyrJF",
  "key15": "66oF3s4EVGhygwqDGyR1uByDuTCEQpfJZNybc9LQHKFxjpifs47U7gAj1x71WBwQv6E8xWWhVsCvRZckFHLdv71C",
  "key16": "5iPSiKbyWoqYtKgsCgRVfUq7isEqefQY41hmt6wom8eraXRMHh9D1grKsQ3BoHmHJS86e8pznaDbJC5m599bw9Ko",
  "key17": "2haD2Uwvxk4qiE677j88rLDq2PtFCh2hguSQk6ZXw8viMoYHywZzyus7S3vHNEKqCHmDTrQS84Ppm7EGGryBKbtC",
  "key18": "4WA8emQdM4nETXLF8FFQ5irQeMoiuFAR81thfQPmAyavNCyp6DZc7PBYGpktvfzNofgsbm5345WnHpGmo9hjMAaA",
  "key19": "5JFwskpeYz5dvD3whca2ujMbrKfWVnRFe1Vo9b91z5saoFDPtXJ4F8YF9NDNhpDrn5YnY8TNkJWJ1b36yaK9nVYs",
  "key20": "4prKAg1ArRrAEeNTsdFUjvbNskDd2ZmawFZBKKqk8YDN7Kr7k3iG2NDQwHwcUz9hjyttFzGqd1LEGMRJBG1gYvXC",
  "key21": "LjBwN54SpjreE3WeP6WQUoLNWYc7hPwRnnApe6htYh82KPumx3YFz4aodWUVVLi1asiGmKJwHERRxVdLa36fgNj",
  "key22": "3v15Niqw2QeiaZEemYCmyMwFGZQ5KfMRvf334yVHDvAktNQinypq2g8m6dBYpXGnAhfa1rKim5mCa99fVVfmcWAh",
  "key23": "4sr3Cc1Lbc9nCHZdrWPEPAEakXY1Hn5xJknss4Z2WH6xBoKhzQaxBmAM66ABzDP3rqpgGkuBcKtKwNYYvkebA3t2",
  "key24": "4huiFmwgh85MbpkCNAURy8ExQpDAEFZxF5Ugrvf1XN64ceuHEgcbX658fiUBQfkSeNDguuyA6BNQ3TxsWoeSwyw9",
  "key25": "oCUQ7HxJwhCTZpBFJVchci37JvY2dNCtapYuWSSvhWo9m75HN3mZzpMVJC6qqMEXujMpi2ye9pbGbkpn1txhYnF",
  "key26": "52Fd4Mcg6NwvucfivALRBVtEou8y3G3vuaNnp3Pk4BpXc9UuHzf61nXGtgXzBRb1biRgev9hULa6Lgp5pyxLgmCL",
  "key27": "2FxCeYGqx4p6GJkvD43wxjSgwaAH15GAazSVGbCiCnyjhCTYkWonD5qFxKAsV56Da1nm9LK7Fp6STVJvFX3iXf6L",
  "key28": "66Ht3B4wiWsbiER3ahs52bWxxUxpswQe9ni8rww5uvZCkh69ZYZ8ta2QumCUtAcnb99F86yBMGiGdXW5nn71zjPS",
  "key29": "4PkE3sdT2qwG3Xo7ZQjKUsVzYqhbmaiN5mnshvtbhhHjLXjgbmZdeUTZhaJinYfxVLEKDrZ1sy8WucUZ1EjAazTJ",
  "key30": "5zjfjsq5ZZGiHKLAgAvVs1uAoxmHunnrVU1TEGBTjpwvi5iU6VApUdpmDY6zV3La4SjDA8FkMgKJDJaVv1o7MHhA",
  "key31": "2NS9bNuBUftnF2uoZYMQpQws1Lq9UynWPEhH4w5sEWTv2ca1u1RBgNi5JjdCQbXy1RbdjCY94mH7jp8AByq5P9od",
  "key32": "4JrrNi7Kb5oqqzRh5cqaVoweDL6b6xVfoEocNUn2tWgmKZtB8C4B9vo4VbZCa8LabPq7ofJXvcM9Q8yLJ1rJRGDs",
  "key33": "ZVP6xgrsBLYLFwWQaJ8muTGXR8aLreiycfEBYo1pUiZPytctEbSDZqJa5pXwxeX29QcZVy1A23LFLT3BAqBZpNJ",
  "key34": "2LHJH7NmC8wiqt28veRwzDpa9q9JMYoHj824MzwRQTZCAhxdRpTBhBQstF4tPkpv5wKFLG83Hvq6QMNFe4pwf6ou",
  "key35": "2g2tbaH67zReb9K4cqmJKeFisjehsaVGuEvCj9dyCvEYSJrponFT47ucUp29nsULpq5gvoaZG4UgJaNpk18Bnm8F"
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
