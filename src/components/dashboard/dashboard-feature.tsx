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
    "4MpvynvDMyfcN9XwRLTRsTrP93R6JMfCYvu7mdXFmxEb53DBPityoGm1tM9q2EPzEq6NZeoZ4CboaPMxaN7mfSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKHBwGnTrPF7a24PzGaiEZppCHFguo2CRy4DtKgE8P2AQ76YZC8bpAGHPh6MgfmSh7Gh8Yx2NwUZ2nSYg2JX77r",
  "key1": "5XUgZvprSB4V9kDAGH9mWUE6nehr6z5Zxiir54y8ZyMkmrUDmAHCkuRmjw1nKSCQnqHxWj3wehXFAGpjLcSEzisv",
  "key2": "5Q19JvRem6jTWeNKQ8SKS5Yk43h1GvkRxb9gzGXxfxPahNepKo17n3X5Z19SyUgAt8CT2YBxP7QUxZSKHLkTJTXE",
  "key3": "5SWeSLUaR1CnzzKiXDJXrq1JDTPdedd9HxQMGzVBDXjsrat9hmDcQ2DN3mQSWccqEo2kT7reQGTFfKxezeXDyPBd",
  "key4": "kqWy8GQB84vJDrzhNh4wbsmvtM9dJPM1BZkSNpmzQkFEaQHCpBhSTbzx5nVJ4ktLwg31etcsoJsYUd9aQqFwLzi",
  "key5": "5Amq7Zhre4kXq6ksPuMcmVZNhB1w87GRDm79JoL7BomRfD3xhcPCsxKe4gtW6RKV8swvbNhsKaBdA9fseQjsfMwZ",
  "key6": "4ugUGbDttXp1VKJB7BWyvrhVGVahemYkhdy8Fk91qyb88wpit2zWb3kKFxrcSUoG9nqvtZUbw2DAnX6Rv6sfV53H",
  "key7": "2QU4XofcP2KoUEhVNkrFzZcvd1gUxHb65Km1FA7ckxudKhhKW8RPiTX3QfjoPDBQm6aWsscw7bsiBVCMHo15T9YG",
  "key8": "2dKF13bpTLnjKcWy6uhokecWG1RcGzfKGip5fWpqfFSzLBERtS3HJiNHtmsRfdHiGh2h8Vv1RwV4Z5AwvHeSaASt",
  "key9": "5nUqpQCaWXzQpq59gUf4bQnKXbXauRfRYkmsg8tKuUPDoBMY5Q2SemZJseWBCVHJi4kVjZ6XSYqwtS1YAkTv21rL",
  "key10": "1HVT317kXr1xJjogvdvVkonLiubdPRkoBSGoDZCwimHHDS5iKrXb6SHY1wMm5WUf8NoSgnYRSNevxMicPMU6GjN",
  "key11": "2nBuxzjoFyKQ6dgQvDEirjnVCdkxiYib4phbdookppY3TXHWn6UQgD8sarDXLAujs8ErtEVL9GKaR4is5RW6SvbQ",
  "key12": "2ZqrqHZMwX4T8teQtcrry824bPTsNuGy8J85Rx163uwVExZNRvKqsSy1kLV3XqpDTnoS5n3XHXaqJko4d68aCVtQ",
  "key13": "3SqwWieJRc4k8RshE7hVSpdXUjM6ktc7jZ3STov6k7zujNTiNoWAWievpxmqbqr1rXhbnwAaPkPs7GA8jQqc9S3b",
  "key14": "vHumovvNmZa6vtYZuD8k5jAb3PHCmcC1XxdNR1JTG7NGA8cNwwhTHChQEHgg7Hc9V5gmZ3ScZDSSrgpLAKvGVuW",
  "key15": "4FGcSb1aS4M7ZQFtS9NPUTbBK1ZgvEBcM7VTug8GDcHWrYJndCB4G578gA38buEdkHQ1cAhq272rbp3EoVZLheb4",
  "key16": "jswvbjok1FPKq3kHAxu9nq3BHmAUifbS72S46aXzttLM2C1AB4pK5wKnmXG9qaMpga67gzq8BC9tLZYF3uRD5pn",
  "key17": "2yBBcSc1k1c1amwZgnZVpvXAvhwnpCYg6VaJgDgMjJdbzwPd98b2V2aGGDVuqvC6ziLoRhAauQBQ6FDDLWhRC5S7",
  "key18": "isQKTeooB16TXZm6giQJQbZWjNEoKjGb46UHisHdsVq71PfWhMz2Q3RgHqNfMyZ2EnAXTkEf8mH3UKB9j61dnEB",
  "key19": "5veSWxL2udznXmej5xK1qxD2JxS8r9br2rcUu1DmUvSkpF6rQJmX66YeK1RXyqFNbwz15LN5nKfyCoNEg2af9r7e",
  "key20": "5zUyNjzqt9sSDLYiWQKLaH11N4CRH3qpsS3riXVSUgweBr2iQxXKgzbP5DUgkwuoqJJiWcNmoixCyJoVJHvTn7ZL",
  "key21": "5JR5XrG8rZxk1cPHr89XqW1RMS59cfHvvVkZzsDyvBnPxQwFVw5myjX14PjcWED91LPwMMJM69ADGjd8b8pDNgzR",
  "key22": "5CRvDtepgyxzZhwdjyQfxPbNZ2S42FbkKP12x2WfFCjFbCWr3wcRTDq2VXKkonbxQprUFgzHB9zaZ18vCm8ppYz8",
  "key23": "64ZK7XtEMBytoUzvUyqBuU9kXuHufNKyPgf8yCgd7hYQVi1eF3aFgQyZehY1NP2aNtnbFebfzSTbfCzbmoqtGmmL",
  "key24": "3qckssmCbE2QV27zUdedJXpuL7Brzauan5TvhT1DDjzEi1zM6tZwbP4UUotyr6Ak77f4da1uEidfPqAemBbkZRcM",
  "key25": "3Kz9THGGeUpuzEVopESrogpSZvamE7XyPWNPeieZuUuYcVoBdGC3NghMGrftEJjhT49JG6NMvYTQcNNaAvXg3Brj",
  "key26": "24tkiDyqqi5bKN5QpA2BPU91fg4pZxkfmqTG53xjuoUUau5EijR4SxJho9CxgajUwmpyismmgYdpL5BGZEvQYTxA",
  "key27": "4mLR7ycrhzQ5Hy78QnGGwJj9Fb6x7Jd1fezKwSe69JnMTSTawaMofXYnQqZU1rMoDGcowrUKPWmPLacjQ4reBmwC",
  "key28": "7kkFv5EsRwdMZUWofjYYfRWtNh67DQ6DhDtdm35E5JgiJKkVKKqKaDnyXmEHoiHz7rQYXdiiRkn87JdfwwoWaXu",
  "key29": "e7rw9B1ym3X7utyZ8DaqztPWhmmXeoLSAS7huap1Defpc5p3FrWLP7dkmYkwxR6bdokT6ZfHYcGNWHKHFxBnSBX",
  "key30": "4q6hKTaS6hUuBhwrCE5p6Pdc1azSdUjoy6MwhYu7VGceUVhxdRTynjzMyaCaqrNFVSnconG54CqpwvWaZAKJKUze",
  "key31": "5YD9G4FS8rSMjmEK4Lyc5LTGi7mqrbsNNhiKmKgZgcc2iTtHFArJkDtdYdLnW9UBWjQhMRsZQDTyt8i7neQCeu6m",
  "key32": "tZM4eDy7wMcywBTtZxGWaus81ipXrW49LMnGv7GtL4rVAaDhdN1eo2on1qrAnuEi4b7cN67xCst9C8x32uXXFeT",
  "key33": "2kTbqtPkfRcGXM9Gar5fowPpeUjhzKpJVi1r4yJZwT6v9NL2vea79SDktX3oK7u6WFnGHFmEQTq24gScgRxgDVrP",
  "key34": "2oKmgp9P9ttFHFmLGzg6xFXjcZyPzUa8SuUwmXYTWmZMeVzMCSMXEsSsbahKHSrSgvgK8rHN77d5vgP1FpsHU2aB",
  "key35": "PSvbiziZAaW7drRAypzccWCawWZRCw6rraSHMKxCpJ6KA2yjLqXrjaSSR9haiFtx2H8Mc4v2cVadkBBoCQtAduz",
  "key36": "5rgYmpngvLgtPVs6LbPLExeswq43eVkCzoSGi1Ee6kARwyqJ3UrUyATKicRs94XZK5v1fdAK1gE59wEePHswy6q7",
  "key37": "3tqmZWpZctsbDPTVEEoKfgt8unRXunX9uxKFmZXQ5d1KkL3h4VCx6mx77UzrNdYFsmM2KpVhf8sYDZ5H6DS33wdN",
  "key38": "4BRSbNkCEcZ72EBwZ2D268jgetqFvF5jdk9rwyJFUrqH3EqJKww9mgFQDoP6ofCCmmXkgKv3KeS59Ex1Cjt4B31z"
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
