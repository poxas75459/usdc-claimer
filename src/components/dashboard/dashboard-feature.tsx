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
    "5P4fTbBY6A6Rig5Z47CxwFWwbKJ1hZs9beJs5k3S2r7G3FcJGfyRT84vHGKYFMHRpzRD5MrPqhcYrypzvAScTCon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBMUyNc1KLBDqyhue8KRybmz2w91GtbaghbSzS4XG3FSZewKm4RK4yaLUd1Q2Xp2gxXw32PfHJxD39PQ1suNnZ9",
  "key1": "3Krh5AEwjvC5ExpNR7s8s1rTxZLY6WJjDy1fUToKQZEGvRYcD93j8qrhZ7stWtXUwmugNS1AMQniErCVKQZRyQqF",
  "key2": "4ur5gXiBJ67YUoffJhb2eajJ4hNSbFdEvE4Jcusn3Ai8ba7xTR9VxrkDnPtDQmZpoTVJKgKKLRhpLwEJK3Khx44N",
  "key3": "5DTt29XSAvXLudC6dR47gbcHUoNx59JfMLA2aXPxCHiJ8rzFrvH9UX3czrEtWqkrKxj1snmx59VTqLoKx9wXmzHV",
  "key4": "27AxPhPtzRMDdykQPaaLgVuhVonmBh3PbLj7g9w2YvbbGNHBri8tDbAv6YszwYove7CNAgDKYprFTvjaRZGcwmzr",
  "key5": "3fnqwdEgWxFtFyqgp6X4pASSAHJJxsHMAHuSJxzGQPQbvB8etEnLFoiUCwpeJPQJXZWTMTvnqaW1p4DZnDtZVV32",
  "key6": "4uoWiSqXgYsLK34XVapsA5withuwgPNyZ8kiUKDwwokyzApdW86G5iXLagQTVW4QB7ZRKx3PyEYCRV7G247DY6Ke",
  "key7": "dQLpxF9PNureJWr3Uv9FvX8xbyQLLCdhxMaoKtjMP3evgAFCJbNggnxmwBvDaLPgw81SKJVsk4skZCWuPhSBB4t",
  "key8": "2r2ESQFPxCfN2kPhtywuBGqZZ2tBwRWdq5KLfeoW6zymbsWqfgdEaBr77xVjQviGc4yKoQ1TgdkeQh86seBfiM17",
  "key9": "3ZepmHvdpxe9HSo8yzM5XQxVHubvCUxkvFtqX9bWybW3AGSUNJRbfqRFMeaDHXtrF1Zuvut7bdtGN2g7u2XUvnXP",
  "key10": "2XjuUzZ1Naj5STgLZtWw53fsCJ1sXivSn5KKJAwoVri7rusp6sPKdeES8MBGSzyRHrXmC99djhehoymaqxGnFRKw",
  "key11": "2YWdHwBcEnR7YGeuE9eAp6eFCR8QuY3g7c4JPhrTL36AV1xyhrXx4aJppZDK6J94REzTc7tfJCjtYwEaqmCx4J9S",
  "key12": "4TEeBFHJUvj7eLxH6WHm5GX4ZFNYFpcZYDNUEXevJXLuNbVYU8ohQhKifXdLAwEFWAk4BnaSuSiZDM8fTnsNyoq9",
  "key13": "2BQELVWw6n4Tj9zrp5aVNCqufSUNnUx6DicXRZVCaEGj8bcjeSCpQxp5wxvugDgQF92fxNZYepJfjC357zChwPZV",
  "key14": "2nHdKYqsBvj4Hj2XSisjGDggtTMwWxEkUGFU9yFH5JwQFctqfPxoauZ3g8QpCxmsG8jL6RJa3QUEwk8TPrX2BuXn",
  "key15": "2hfG3evC3ma9Xu7r6EjkEDUz5LDRV9R282t6k4rwNG5kySy7oDRTeSH6ByPXnETmoySHBsogdekziomAmMQbh1ov",
  "key16": "3ZfQBaGRfwxgKWbFysnEQ99ChHc8iR4io5uUQb5diHZJ4CArpWEPGcixrSWD976TLNPQ5XEYNo8h4Dtatu8V7Bxo",
  "key17": "4RXfVujrwJYbqXx4jCoRKZZvCn3XXctf5926ifdSvjMF4VQ1qrmfCTe4GTQ7YvUwxWFvCz2LAx8W7Gk4MRWfLPrE",
  "key18": "34EWCwYrNYiNoiurgmoqjqyuaqpU5VDRMwsHVwV5gkbJFp2BqghqCesNCWRzxkfFfZjhU3MX49TnmwAWr2PAMajq",
  "key19": "2p1Nv9oe2n5vYet3N9TkSb57qY4GrEvtxs89rf8XD2HDoHmGcntqUa3uoju5C4YnUmuFDtZqHaykqrcqvhLNrVnQ",
  "key20": "m6VoUbSnzkdAEvNC9aYFixKQdWXR9Ycg2vAoetuFqFCYZedbGSwkjh5LCshXpQSydYGhZmc9zdSXKuQbdFTGHmz",
  "key21": "4TzWjC6b6rsuTaW268pv78wyHUeGgLHFUKDyCuyxwBUnkaRUE4QALiQ5Re64uHAmF28ZqFeCGm7Rako2bV9uhoAM",
  "key22": "2YRnw6u3r9oVF1cxSS3wSiU7Sbn9pjroJJM9eiD9qyD1KBwWnwG9tndNq5BNfYo79UFXzPKkND1TdW6qEmJ9DSea",
  "key23": "3FNMiQszb3T8Z6TzkqAkU1cqE1ETdqUTiJm6BcwjtRWC9owenkYFzMr2ZjReU2MPDkhHiLiiUkBsGUZgkjwckeSz",
  "key24": "5sm87JdPNam3icK5DLs2gnX2Jb23zy2q69kyai3K2WKPV3W6n92JLaQsoiY1p5FYLqYyMoWyq93r9JXfJuL5YaSp",
  "key25": "2qj8sz3hghwMsgAZFMje3rdRdnPpNj23RuQ5NeHwLTk42kcTzi7jtM877zL294HRbFX5XzQitqz7vu4DRKKo2iHH",
  "key26": "6noQBb3gEcVXtZrNNWzndHGEDurjwGkeBof7e82987TnXQcZvdXBqyridzctth7Sn32M29GiG7kiYJanWr3t6WQ",
  "key27": "3pwmZWVD9t1ZTWxtzuo3iuCkc4FpZUVSnQsce746esqToMY9GMppz53fV9cDMtbRwRtT63knA16mVSxeYbgTeLs4",
  "key28": "9ty8jdQc7RaKzPfQjRumeqGZLbWXm9pdqqjQWV2CduDJEGF64bMDML4uC8Du2TYRwzDbNuSkKSh4fwv5dbsQDVE",
  "key29": "4JoEnja29ZiJNYhmhNJy5TPJw6Ma95FZeeDw4PmfS2e6TRUR5j5MS5Pqjf4S3wBsqVNjfwvAXm3ZwByDqXF8ePUt",
  "key30": "62QXev6CfSMqDegpdecYJfKSbnMaCRRJDaUoTzTU6NmsWdHk1BAwZaTGQZ4ntAgvQjFfP4q118b2wQTKnZpzt3Kj",
  "key31": "nzUSzAz4YPJztqyf1HJ1fkuCF57GFSvw6QGRNfuagrUJTrNSkWB1RWrH7yhS68UTCGJ8MWHFfVkHKEK6mcG8j62",
  "key32": "5wQirzsUnnEkX9zrfZ1EN68G8RwrxWV2Dk8G8dTEKXUPS1ZHxgZd4hEipyzBa8jFr8jySmoZZBg9xkZsfVBC7pZC",
  "key33": "8tvkQgWqbHfREeZbm97ZLooX3Z1TX1a4YuCpRBRRLMETfEXKXKpUENVTccDdZSbmCjkDRcu2a7byJn2ZttPLjCD",
  "key34": "mjGV8BVG6zQs4CQ2HPMZKEToTaDgD2Erih9ZufSFyBNP1Yg4NyzH7uXh9kHPhndeBi9z4SdP4buses4gy5pDb25",
  "key35": "5oF3twfqKhTmUJw36uAZK2NGYuqpS5FrBUUVWCrsrbpW8bATykhS5w8KpdDw9Gf8pPGnYrWecXMGKMzPgK8o6Z2C",
  "key36": "37xH7mUXAYNVxx33vQq4EiZYYZkvLGRQPdMCTzz9VQraeLSvyuH389aoLE6MQmqXJwqj6pT4nm34zopteUtZ8Y4"
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
