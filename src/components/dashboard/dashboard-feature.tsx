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
    "2gfYNsLHw4L4U83Qcq3UibTcXGHV6swWjg1W5D53Xo44hfGk5ExcRD3FuF1n3Jg79kFCW8Rdd6V6TUhV2LebCJdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U59T3t8dwaGidHEjD6sBfkdsoJb1EDvDE8mKxW7QbhjUbK7sRayoQo61vCBDZb3dnq3bGycRj6qVM7MSeRfm22P",
  "key1": "2YSBoKnt9UytcZBGzz2KxzXFGkY5ypHwyv8w9TRt9QarELoxEtNBUUaKUMPdAYbB7faESqqRR7gzwaRLPGufqeTj",
  "key2": "5DjEt1xgJjiTooUBVNnhbwtMNjtbfWNkyX3WAUzAWWeXtQNQZhHk4N3yA3AwEiWtJCXRfyPtS9UkEc9M6adjHPnD",
  "key3": "5NXwy9YQuDLQdc2cEiKsXtLXQ3xxAzENDbGXWBfEsaZ7mjyKrGcHcT7DMWmBcsmw3RLLHEAbQsKdCjgJWw1cDHGN",
  "key4": "3NQJ4dbihgWdg15AaETmhChM6zW7zsVWZ5UXvBhh5kHsrvtfbZYFRtaGRUA8aRbxbsH34N2kmNvXaJyrHvKe1nvc",
  "key5": "5gzSLw8aqzAQcC84Tx1sReudeBY7wYebg8yUjt54A8WJMyQV1GNGpX5FLHzsaKYLLTjxYz73HZ5KWotqUX5oz7bW",
  "key6": "Rcdm8ngeSW5Pju9zke3MRCpD1j7Xm4DEx5oSKTm2FJReLAJ6bgE7K1ux8xUKNPs9tVmETny21UEeayEkvfbyNv5",
  "key7": "5eGZgAfpCtXeyFgxWnmixqVrU6fmU1eG1uwqBpiq7p1DZWJavjDnKWF9q6S7inDX1UjQuLbRazeNii4piSp71Wdb",
  "key8": "5M4R2Yjr4Z5cacjQbZyXKskqb6ALtKnRpciyQkuPdu3zDUZWd1LRZU5wBLz9TadzSB9nawMTvEwv1QnpB5gmZPaJ",
  "key9": "3D61swwHE8XadDC5xK8DzDoW3yt7rRdzHzNKhkC1x4uKYLP3km2qWM3EucRJb77FueGVfRYUSTM7tDrE2UwFDotN",
  "key10": "4ipCBqb8qGg1zLNPv2tKdymah4ENejtq8fFF65jjC9BGNUoJuAfy7s48doqokjvK2fKJ5eyAKZ6KTzZY41bVyo4W",
  "key11": "5jb7U4y2Jpbd2ZToW4E17WTfFF1HgAoCVe8oaRK5MxjHGXGWJ78oNGZy1bTWGS874g8ejLQzB3rRXfb4pysBtAmf",
  "key12": "5mg34t9zFJymWqX9xicSBFwZxJ52N8Xedicqki4VKJLoGg8CKm2wQpeWB5EJp84VwEt9toyC6vwAWyo57Jmh1jMy",
  "key13": "4uVVKUnxeBiMnEjkMw6g4HEmYCM5SVTNvuFaPaYLGt3a9GAUQ1VyjL6LX8AZiVUw8anFs3zgydt9k8cf1z2G4A5D",
  "key14": "3oYcpK8kTftrGETH8WneRQy2RKTRVD3HTr4mH3xe8WHEofYvDA6j5fscwv8d41zffMxMdkjiKneKJirX7FD2nYJT",
  "key15": "31ftcVT958VouwJ1kiY5NmK7WpeiSGFbxr6shkbhAWcQfXHXUDhdQCXW4wYHHoS7BohiGerusK3EdQn1H7k5XGth",
  "key16": "5D4YVHgcBehNQXURCRp6SsSRc8FhpCrzjZTgrLJvB2EY1idmePZGsFK1rrEvhugHqZnDqPs2HKEuXy95nCKuzewc",
  "key17": "4JxAc684kCAyiXLXodZgD2DfurHt4eZfhJDTU3PtrxxrKuQSGb5xyoiyAVnSAXcDdh2JYh2pQYvdDg1ZAV5md4dj",
  "key18": "xtH3djsS7bbop1iGqjU6zY2VFJHr74qNtLxgsC19m5N8yMLL87B6W9PYjXxpGBc7c5UbRivLBAXQ5UUP4C44yUg",
  "key19": "39tCcie8i1rz3gH48BP3zvF1eBWvw5N6ehiHQmSeAUTzgxmWr3kcYRoa5yTWzRkPPdnwkFZLY6fK3av6qqz2gN5R",
  "key20": "45NbGmc7XqAcmC2jv8jjupvgfqZhpJ1mApBpv3i3wtXvJewecWg43S2NN5VrzbSPXb1jJ6BeR2R5vX4Gu4bEPgUR",
  "key21": "4hkwRPtpCg4RGvnMmLZk4dq3dnX9pjhJgb8h6Da2yMb3xburE7Ki43xASiR8Fp6FPXNDiLwgbLn9jHFGT4pDrEVA",
  "key22": "58H9UJ7z89ezr31SUAygcqX2AUdmYG6AjyiJqiSCAFizsmcAiP16DGp9MurJQNzztZxAUMuqQ1ExD5VQ9pndCAjJ",
  "key23": "2AQNZonVtFPLEzpXcZiqbANAgjprcSSoSUTE6QeFVkoHB7n4kxFk9UbJQ2MWu5CkekDKvehpWsScytCMF3g48Mtp",
  "key24": "5oqBABmaQ1cMLPUsF3cynXxyhrpGspM7VpssKbkQHUwDyB7MBGYvgqaRTuuQymi5sHSo5XngN4GUMYnaWnkmxpWT",
  "key25": "QHNRq7zYv5sCYk4Vy33TqiLriVeXqQ2H8qmb8CaZej5mHftpjNkS5F5sCGFiWMmHe7ZScRRS7d6oSyPwvNSwZcg",
  "key26": "3pruU5pWGvWmMRK264g6cZoUoVA4zgsHo2huZybPpfAgNZL8ZiAbR2DEk7uoRBBghMB1dvnmsP77v8mMRiz9YCd4",
  "key27": "3GZT6NK6BXccGprsesCYHjt4CGGDwqb7aL7NZMSRxUo6CggEFxkLnbhL7yxS4HgVHN3raQX2mNBza25Z9AT2iYWN",
  "key28": "2gpKgXMomAyL1dyMJgpPJo2j84j94jx3QkrtmjjfyzdNf3Tv2hE7wcawqsv92NMtzsKCkcRmn6Ngv9kh5Cy6Kw4v",
  "key29": "4gdveF4DBEMV8xAVYkmsTVJcHhP2hdLBsELn5mg9qVHRL6gi7CZuY7XM8Y736CjwVbcn2RHQrpuivqj1DaPnFCgs",
  "key30": "3booHCyH8ZHx98YwHrpy2T5ngPnkV9vr7NxW26BTc1DpYPyX8dpVJetv2YSi84HyVC6oNyggz7SZzovYqcavTMmW",
  "key31": "ccpQtaged17awMZo8BVeHFV36QEPGqKtwcJixpKajzWPSfaf27US5pr3By1JL5LGraNuWhFK875twUdPr3LY4oK",
  "key32": "93VCvqP4grtQn3Ro5rvDUsbyX5xMLHD9eLL8sffS8SvrTQLYE214W6kne2wMBQFX7mTxbuKYgzmavfhdtsjp2MG",
  "key33": "4hvKAPpnLPMYnieUjXn9TnBrQy6Fdu1x6PFptvBhrDTE2v1PoxSL7gKAwVYMp8CzDNWKadT6ZJi92jGudoEjPSUQ"
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
