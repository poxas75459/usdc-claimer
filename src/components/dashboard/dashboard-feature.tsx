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
    "2rDuaussrPjSjn8pm7MuW8omNJeEx3sLxZVGoGSdNwhA3b7afF3VBnqMPBFiMgxDM7JiMJmXfXFSz631Fzm45oJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4LEz5Eyem3Jf4t81oMfq4Vokkdn9r1yCwvRUgGDqcFK248hkhUGwjchYGLE4AMKgU5dCdFZbUryDh1FQbAZ36D",
  "key1": "5ifdw9DG7NYyn1GVL81s7frfKSRJ1NN617XAs8Z6THroiqdDN4nbk9pBUpSYY9hh1pTG8iL2Sh6dVVF1DcZRYBHK",
  "key2": "JnqWePDgr2LiVYoyAUnbmj9LhMPfNiEPm3uh6NyH6eNNtQu57UUeQPDatHpfYKuu4JGckRC1jrmRmgbb2TSKH5P",
  "key3": "5Rb2xh6oUPTcYK2qVv3gh2NcJ32Vmi1zA7YmfiuuCkNwneXNRba1e4eKeRhF3hukqGjxbFkYiJma7zp1nr5xzPTo",
  "key4": "5WwjCAm7cs78D5Z7UVBXn5cC7KGTij9K3yUJR3thxX4TU9DLiDm5FR1M1bmcK48UPhheXWDHKYN14Dv5We6C9eqB",
  "key5": "HGhfQHzmRJSN1Kp1VGQrZS44cUjthDNEvhfr1ZPPheqW2iYURXyE4dJHHz9md6pyhnUdyug7uPjgBkKbovwzTgq",
  "key6": "3c2N3qGUeBsMPdKGgQr8eqnRHYyuhMJr8PQKRtisCE3DEGm3hecsKJttAtAvQCsUHCcUKfJZaxdHwJzavXB1Hro8",
  "key7": "5Hedjt7xxcKTe7PgQfwRBGkXzmehGjgt17d181oHoFLCR9sVxhbnTvzJqUMVoDBSTzM8vPXMQ5TMzbryHdZPEiUg",
  "key8": "2XHmQiFhJX2b58AJGYkQi4p3ykdkedpdFhAMkmJQKKsFuxrwqeJ5QopBmYTkgPEyNMEan8W6r4ahCzhahK4YrR37",
  "key9": "5DjfXdnCGyr47W6JE8aEYKmx7b7Ggy95cV9hEzErjLgccrP37H5ASMZSEFnbN7Vf4efGogpPEX8ywyhPttr3dDnE",
  "key10": "4XR64uQzZ1cTM9CPCj2cxz1RjCdETH4sVywBzn7J6u5z8LGmhppMECpDkDa45mWqWpP2DDmzJfaxZFaa4s6fFNQo",
  "key11": "3CbK6PfCSP1sCZfV1gFwmj9vWXGRSGKZKViQuCgRnUbnMPjFLnWmMbr4hHW9mdTeC4MqSeMBphm1hQaeew4wX5we",
  "key12": "5vDtmhEtHyXiECrUDkQ54iLvyZYeMqmqEWJWvzExEoEkhy6wAQF1gVfvRXfMPUBtYP8PjjzTWTGR7FhrCjhBNdCy",
  "key13": "3gQrZimWos6saTNXxSKRvoKx3yfKHENbEFqme7ubpQzUKcbtoKi1K3uHHUw4SGGyEHeZR7MCYBGfJrnzTgGUUWfJ",
  "key14": "212sDx3x75bfhBKNLTUSXSR9KKEjRULzCq8U3dPyTBBoQFDXF8buPdD2qoQ2JSCrPwGpN7BaKuTRQMEz4E13johi",
  "key15": "2cTJHCfMtbm97DgygcE5QHzynTVToAW9wUvmEcq3qyR11f4qAcNErDPtwyZFcyBmEFczVnL7NPAayJf4yjeC8Jbu",
  "key16": "38tnWE6XVFKpCyRpL7zbmyGF3Vp7iW3ccVkLDGDxM6H1aEN9u2EbrRCPkBse15YYi7bXZwWtdGK1VjweyDcGatn3",
  "key17": "4sjZJ3V7QUKvG1b25mLEoLjyT7AyUvDeWe3A7Saq4xvFuY8j2w12ALQYomA2avnQtRNVDvK8sWLQJdUZbiEKWhvu",
  "key18": "2oJRkou1g7dgKDTcsZhtwT9LSVzaCkq6XYvbD7Xg6R4AeYMX1n2gULFmJ8WkMJXKwX1XBHPf2R24amVnU8CMyoy9",
  "key19": "4QhbXuhm1RJp5tcjzvde9PLghiBUCvb1UvUoqp5krkxyKsS5gNk3VFSU1ove5ep81pwMs2YmuHdwP68x5pbYrPha",
  "key20": "4D2qAdwSam6NkXqvayFoetE74qLnB97DBFCYEiN2qn4B7nbrZWoaTsJgSpmzxRaTckzQbfS3jr3DHE1FBB4oEMzm",
  "key21": "4MsWbWu1kimgD9jRCvKC5DxqEH24cjJNAgSaT1oUjUnCx89qGRMFNLd2BL9z57v9Sz39UFFxkaCpfb9Z3PBkDrJx",
  "key22": "2NLwjziU2cZxwYta1FRhKQUFJw4Ku4hk7jV4X5yEgudJTuCfvWUdSArZNEJgBjMhBjARTUyk1RtmTzui2zoBtt9F",
  "key23": "PL9YUDGm7qz6WjG4NMmjohSv6bvLP4RdvALz9VHy3yPrixU4KE6b6eSJwZr3bsdPnGbQMpRUUB55DmDpaRrghS9",
  "key24": "5eenG3369fLJ8THryfuLCUqYkH3c2C4v2hJ3iFQmjjPLXDdHGiUNZgMRbGm31SEQBxbXLjowiEA3CGq4HM7rKeuN",
  "key25": "4jczBszSJospVGb8RiQEaHKgHXRiRcuLin2ZYw8qsWbp8gAkP31dqUWKyxa3ddmwwL1625FhtyoPrDWJqs98qoyr",
  "key26": "3xQAvHDsNooHHCmU3uvBNumNpehVvgbDFbVsQv8DwYJ8Fn3RaWJ8AsTSUMoSGGBMvJJDsCYWjTbzzpN77WJ1EWm7"
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
