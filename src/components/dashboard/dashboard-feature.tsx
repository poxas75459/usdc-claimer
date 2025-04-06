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
    "2h62zze9NFsnPcGew4icpVKKi2RNLAJG4RdSQeMtYWN7qhgtd81EWBvLijtNsXKg26wdXYUy5oMbkBxPJogv1Tqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kjhf9dqrggNtJwp2Jqphg5a9QbBWmqw4wKgv7J3kVF571tX9JdtiT6NA2LNfqqRypHrCE5whbWcEzwB8LA47Te4",
  "key1": "2aA1PhnoDnQtAUaUhoxLmKcJ7uLq29ehi2HKTbnzv6Uc4d2why1xGjroS6VX5QHY7cvS3eWJbGXtfF5eLb8qQ1Pn",
  "key2": "b4SCREv7FzW6s2j74keM1nrtjKzxCJjcbWt6uffQHTFCMfU28VMFEN5MXKSdgTfDiPXLo2JPCrvvgGT7YMAHuNy",
  "key3": "3PkBDBPg3CXmxQXv1fBG1ZdwBrHVY2oqJijZK8dNuUk4bo4Xp18Mv3xD1tGwM9dSoWpkVcqoJqWpYv5bxMMy2oKp",
  "key4": "3U9iECLxxMe6p6CzDuNowaJf7hVEPJwDppUeLv4iQKNSZ7C4UqSHUi4qJNnNu392p9otPMhobwdktabNJGiE8QJt",
  "key5": "2udBpFoKdUgHj45n8Y4p7F3jmkpaoLMKGZWfP7WpwQzVUpxu41fVJiCDxjDUCDwLuycZKvQthyjxxuGjRQZRZfSq",
  "key6": "41wvT3LHkxn6wQMr3km4a8JaV7DQtr1My35djZ2JLV1KdAJnNczNmahJNQCVPYmpov8Ggx9qXwRND62favW4VnBv",
  "key7": "3g34DeknXmcnqr2gSAWerDJW9G3c1obPpcvEKmLStr7SkHoskx3FkR14jjKphjQBCPZyRfiFUSxqP2R67jZB5YZW",
  "key8": "62DkDJcuwt7jFXFuUcMmDaj5zbs38iWYv3ATa9LEfKt2FRLBVpnp1HDDdvZNt5TRnYQgkehbHvNZtADLyEGRSDQQ",
  "key9": "412LkBfKaY3uEUb4dvmbW3S8RVYrn1BP66HjiinYUeJnNZ5jU3hG4zVir34cL58iHihmkB5ruVhxXnATRYcaJVuQ",
  "key10": "2njsf2eDoAzSHQUxS5W55Nj8UUwd9LYH45msPLTWgqPmniseS242CykKy3fUkEuMKefo4usbCEMsnXBQuY8yVxfm",
  "key11": "2kaRd1atwFsJoBuxCznLniydZjUJcfZHugt4BXVb6bfMaeRyAr13mUTUAnDmz8tLH5NjwaRB5t3zAfqsX8peodvH",
  "key12": "4QwuDFXRrc9C3iyFfo4hiE2EXj5P7chU2NHTqm6RgKDq76itvHRiU7W9MPTjaP4dmUcXpSUt9Lqxs9UCLf3ogbfD",
  "key13": "5suPbqp1PBZd6eT9dY4UnkJYq28S2gU3okWRa2AsR2aPQWwjFXXVSGLXpmrLxd2FaCeQsz7bhx8ZaJ6vmQA5n73H",
  "key14": "NxmUEouGd25oXLA9Ybwez5jXri1PAZC4EEZ6YVDADTbThdG3bYGVZtwsJ9DvqfJQ6UR3oaNichxDjhuFVATrbqY",
  "key15": "zwVS9nbbXhWDs2v4e2wSprYHP1JWjPCbUWaKJ7v5cWav3R2MtX4rqZboMfUXQ3EVp9cF4T4SfQTX6C2oBE9Qw8Z",
  "key16": "35mmx199HRqrodNiLCC4dGQ3L9E79kgfsLbdWJxsjreY4tnTieYXmnjy9rhPCQetbndigtTKqcw7WxzFZ76z3hbt",
  "key17": "VJBri3h6ioWRK112vZdqyZ83rPavVbs4DyjoimX2Aeo6KCKCax7puTicb9uJhBQNAcffV7HWsvgFtpx7LMf3KXN",
  "key18": "3auNBXyAmLXcePnTpQewEdMWR62oQr17vFM84G13VYRsdirnTSVpS4zRUDyGE2cuYEvNJyAEunVbtoLrU5SgLjpr",
  "key19": "4UjXW46HwjCbcorQasrtunEZju2x6MsV4KoFLLULZ7xDjsPj7wP1xP1vZPvAYpHe5DBZJiioM33BR9R7C2V54KRm",
  "key20": "2Hqn2RXgJjqTCWEwDsT6cfeEEzVrQsF6D6KTDbe3QN9C54XSTAG9atVb13GEi5sA3joxe3c2rRzcZVq27BLXNZgL",
  "key21": "4682w486mfcMi3BXXdHf3tZLeH4TcmwSVFZrNxo5UAS2cjaWEDmQvzhjQmvs75MnpKUZkHWH9VV1KLLYZ2Qdrcrd",
  "key22": "5p6Kx7iQWVG37eeRUsM8QzLqi96EvVMH2SJAgyEzhn98y5jHDjSYZ52hZ732T3yRkXLsviAZK3tna9urm92ghVxE",
  "key23": "3AWtRtG6rJETT9YbXuSCEcro42YfVRhemJMoUbWd6PvUZDoyx1U8uhHtA86vfQW8eDCeB3RvKnfBohHnjTC9J3SU",
  "key24": "4zZNw7crBDfRB3i2EWJF8Pxsr8Q8GDjf1zTF1ZdbaqjM2UgrzsVVroiBBKXnvMquMpXN17QQu1dVH4JoxVjHjbqu",
  "key25": "2mv6kNqmMsUvxYSN9LNVdDkDZZYFsK3bQUjYKcWvSRGtRX5ZUaVpatY6x1ew9sHRsrckDXxJxNCvSPM6H2wTxkru",
  "key26": "4WcnxgNSnz81iLb5AcLX5X2zvJxikgqGa3y7N2KnfQMMBbW9Xdic6jzMKbJ7UyuCbSQUbo6kEq9kFXetvFd3eEZn",
  "key27": "HmB92HNCpvn8hE47ksyFHqt7yMKcRFXAPLE395CPBUoZjp4UGo2u3shNEsDSDxacaMwgQvfVfgGyrkCnhhaXhTk",
  "key28": "2WbtFoquiBu4KrErscEKtWJAeQuep3BUynYsVXHXZdXs8ji6KGt2P3QKiFFf2GfDvMfkL9ztTGT8hdnKBmey5MJw",
  "key29": "5e6vmaPyX1xu5FP48LasawgWZ7Q9dd7k2qWHTTgx5dwNa3iGL2Xegjvjz1UtY6AQSgC75MQhDShCpVqfUCdtVNZH",
  "key30": "2PavRA4EikAh9h3zxBYwp2bdVYKCEX4wirPM33yB5yqKqBvM6fsr15BJpDTprcAfmUeorv9vdKFVK6vJhjZzLKso",
  "key31": "5rGKQwEWkcmfW83CQ58XvXa9Kt98sKRyQnu2ZdAaxMQwPGc6J5wPJJ6rioigutx9ULV4NaxEhGt65ckSsEXbvdBH",
  "key32": "3DYHSZ3QUt1M7qF5trScDRS8y8SUNgpYSCHg74EUpWse9cKn8RgpMuQBHA5i6QpgrP1VZiGVtBoiAzPDYXXBkVFq",
  "key33": "Z8rG46L184r4csRrmEYbtMRPoJVR1WrNC7rKxjiuWaVnc5NJW4si7mwzEqvVt7ensphgnFMHqa353YHepafBge5",
  "key34": "2DbcKa1Gmde1kEKpBKDfe4K7G3RZfrmXDLmg8DKjCkd48Lo5jkSN9jPdqHRzL5N2jWTZpznES2dhgwG4orqUqCsn",
  "key35": "AGHkLx7VjuaUJuMBGyHRcfcCYTF9zdoW6Bd4sgZwvPhKLRamt1uTXFrWfxMU14DPuhEKUFdNtTaaGgjzK2c1sS1",
  "key36": "qrZ4CWdKnuGQ29iJrRqneRkWkjLaAG2MqeHqrMNF9L1J3JkwkMfAz4qH33mBUkFvZmcPcWnk8dEdL5gtE8jLwa6",
  "key37": "3JQQBaNpYvCDmmRS8XfwsrCM2QQfjazpLwG9Xbg5RAfKan22DYbAGss2pYi5zSGkuPSrDDsanJ9RZiyN8FaQ9CKZ",
  "key38": "2MVL4VNoqoWC5RmR7kjt197sc9S3Y16ECNy2GFXyegQ8MhWXKKecZrUaJUGp7YFan8Piz66k5gr3x58VvymysArA",
  "key39": "64QiSfC1R5UZgPncaofNmSurSek7TZQVVdyHaeJhpss2BFf8JD5g5Zk5EfqTG7HJSFcNSxQY6Y7PQHy6F3yJ56b5",
  "key40": "52SgpxnwJrhNQwmFmMKwCNPWL9JDpXUKG2mK9qGmY4vcUCZnrFGgxB6WSXA8b7F7curoyqqrvU3HLNvC7oWztjgf",
  "key41": "QBbBZGk8AT4bwtp3RWV9XQVjk3jXUN2154pB3SWqBRX7R1DEEKr1f7xwxiyZNd96UEpABuREv7JCjZDzu6W5fFS",
  "key42": "4qjiY7mKZxKyGAFVZN7QXh7XbB9KtSv9NnPtt71drjppRuE3CsY4q7bnidZgqX3gywvgM3NEm13ZnQhkUA32AWbs",
  "key43": "66Miz2Z78p6vbF66grfaNFwLHjBJYhZK7sVnbehdZxB4Wz7WabbAfm15UaY2T6oyPnZp2zWRpLZNiYriVeDBcbNL",
  "key44": "2vzW3HnMEesuYWk3wNQYKcRcn75F1BRKxUkjDD7wrR8WkXCe1uJkjCepuv1cKAng9efPfch2Z9ehaFrgpKqAGAQQ",
  "key45": "2mejggZp1zZp9ehxCsUhUsn2ybQeYXbvfng9wabrUCUcHvztYEoLT4wNQLinqE11YSD1tGNN8nCsWps7Pni4wuuc",
  "key46": "2vHftYWLbLFs6nSo9BWd3ZboArXW69z2q8JzRb7GUbsJxZbTXhUzSezewGjZfvQvDMYtzUYMoyaz1XbZSiR9LELr"
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
