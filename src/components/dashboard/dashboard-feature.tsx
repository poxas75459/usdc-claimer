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
    "2i8dcAPw9XhBuapjCs5ZnX4HGwMMj6Wv2qmJwySSMnSk9xfbV4neF1iC2Ro9iNiStGVrQrfwU3QgUST3qLnbsXYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSU4XtbFxX43wh8xU36pdQjGRmy5XwWyCh1WkEM9z3geCkUjsPVqBiRXyEQsgXYuh1aSkF9GLiu38U8Q3SC8piv",
  "key1": "59Hi1dJC44VDTtSaqzrwSpYFtoNJBnTS1xBZu7if4VNcQijbpWAGvuJpiP2PCxk6yQc5dtpPSaKNThcH5zvh2T3K",
  "key2": "38eH6BSy9yWv6dtCJPNupVSXgejN9s1NMJZaeW2oJTRd658MoNAUMzoS3wDdoMNWFsZJ3QWnzSwdQZqAZfTi4B67",
  "key3": "5AcrXUjY9n54FfdrFU8W99zPUU3iiSfpHKVSfKJrsNwfNRGDaZdDSB7dbPAhUGNr9A3dUaYdXiuZjrpJeAb6xEj6",
  "key4": "Qiw4k2Vk9CFoBjcfGh5zVmRJyJXovxjhWM9U2qFLfXJcdw4hLRdJyNCF4mWn8hDyLswM11UbK4aYqrLNaANyp2m",
  "key5": "4JGY2z6NNd6yUsbB7n9s6nErsb1DZHSK6rPSg5B9KECUCh3uvXwmFdhNvssEaJdkPDea7pHdKRB3U23XyYyXdUqG",
  "key6": "3AQy2VhuV6uuVsMuY8XGhbkASFU1SJZZbSz5R24VV4qw3n5XPjtoftfpMNP3L2nQPUH1S4zXQKmwrGesQpUDuv67",
  "key7": "3j1RrdA4PpwMUkPmXdzMyFhRSJrDHxRYw819Y3DwWtm7neWY1EwUpbukNYeurdR2RgT55dMoFYohmY4JUF26tgMe",
  "key8": "2uuVHhgZG57n7ZeZTcyfC9D2g6wx4WKz1CGZJdX8ZEMF86rdoQ44PF9paVomXEyqKaPcMBwP7Usa4BW2jYSLucCz",
  "key9": "4G59bQeh87wDeL2RwjGLHP2B2QQnR5DRBJW3RQmrZuUTNwRYuFVsbVRK2YTfZaUueFpj9egqWgoUJfhmooSiatSX",
  "key10": "2vG7HJN9RJZEjFa5ori5zcWup1S5jFCWVSypnRBqEwWUdR5BVTJcAUfxMm4QCTeffENcLz7GHu7gjNCsHPcmdkXD",
  "key11": "4DGFwyZCvFQAhocE5sneTJFpN6PicDvZpYkuH28mYe5ZxkMBTvADCQiKZouRszVKZboAZMJHscEpL62zByAvdppo",
  "key12": "2hKUyNpm3Bus7Jh2B9e1D4FAcoiG4sGK3xF13Dk1XnTu6rjhBtFJFm9wo5GEwA6w8uvujuK27eFkVeGq5q1kCmJk",
  "key13": "wE8knbhTgVjQ5EqmCaGx3PWhGFyQPaJLBeLT9rhCS1rMDPhtHb55g9NeeP51i1oKcgrnw93vUyqmMEoK4wEuhJQ",
  "key14": "Btii1d8Y14NrNcfsUFSvYhZa5qQtg3hnizJyKtuccMeZD7jve3255GCDYYtLauHUY33dkpGDU8VNswRCxT7bBkw",
  "key15": "4QMxG4NiVeVBeDgwcPzqaHqjW1C6yAiod5jJNjXYJyJEnBn71QLC4LPNRUUvHpF6jtmkqdtE2oQAv9drvgEnwxxJ",
  "key16": "48zPW1YKS2ziBS594h2EVgaja1jpoX6brDTZpPtouEuBgCCAYJFTkeMT8ncx4gQmEBmufnM8JNUv1Qh53KEC233j",
  "key17": "2Qv68g8i9SPRje99Q6HnvhDuuaPbM9HW7hrVcMyVQXQmGr6bbTXgJJraZhgiz2qquDqUtymjUMP1AEbSrRNp3kYD",
  "key18": "4Q7unFdCYWpTDVYAtZjDGP7qDM62PE2Tn4jNC2KhBP5LHQY12maZQ38Jh8AxEsEZt83bgdxu9AypRRZQCFZRdX4y",
  "key19": "3nQs42qTkQcruQEUo52wx9iA1R9vUhsFUnigsDEA5WDf1RiohAEE5MDcmqb6e867rFgsLMPXDsRwg975bunD2bQf",
  "key20": "5Nx1WvyZQbsRAXhfCm7mcd9UzUiosmAf4YDMpVATZchdmMB2Z7PGkpkURfpSDW7uWwaZYhUFBWbMTxmiHe87Wixn",
  "key21": "2Af4v4ZPSESbNaPeF6VnQBT8V8zewtWjuRmpf3YV57jmaQqd7KJBVCC8cg76Aw87szpHnS8KqyCmEDAkzjHjyjZD",
  "key22": "3Ko9p2iaxLDR842gBGWzD9oNbhQJ4WHdh6nwomSpXThk9vEiTS7cC3n5hxFDjBWP7z1yaFQJ8JX2UhyfcLoVyfLb",
  "key23": "2ozKW4zSqU3AkRH2De8dR1qX3472d7GzxgCc2WN7nuYoPhHReBVGQiVcwCFa1k5UUGGvU7BcF7h4XtPtXe9pi23u",
  "key24": "rL2aZMa9UBbd1B1Ss8P5xcZTwxhCw7fa68btuSmtCpy1oFj9ZpX5UaT2Km5U719nFKbwZC7T29McbTux7Hs1R3G",
  "key25": "4ETqfnXh9Je7B8vGNUU6KSMkzd6YUC4rwTJ96xfrFPLci4mf9zj94FbViPmKNtGihpDhXFQwm1gbZv2WN7Thm1Wm",
  "key26": "H2cYt2TZyBddhF7AmZ9Pz8UeFqp3HHrzPi2asT7ptF6oUR4BSsS6WfUZ5NpfJBuZk9taDyzLJaa2hj3PNVKXbgS",
  "key27": "3LSobpvv1frjQiNvRfLLnPZY2oUiJbYkYLKcfjGk34bGGpewppy9wYbdgFkoD9z7GgdiVsjW5iSnZXXmqTPpafxV",
  "key28": "2wESC1GxX5LNcJo3Tnh1pG3bdBhRdp5KMz26V1fTZVi4aQBgSpv2H1nquiAdpDcgp3kSmNUn9iDeSTGqEnQgyVfa",
  "key29": "4jY1FVpjfCPkBnnm29bKe1wt7Z9GgwxAQoXqAarocjow1UhwDEbSvpepWumbH5C3cLJAGwSPGU7tC9GYJMwsG2Gz",
  "key30": "BQiSHPhAKd9VSK7DP8697k59Z9JZxUpLEhaXu8HjZXu66GnqNiFTsCtmRUfhTRVA8CvzjJshd8UvVRsXaY7WxSY",
  "key31": "3ssPhtTidjGigFE4DBKWpL18S9SF5TsQMusie53AFn6EnNFwAbF7vZssB9AKZkJWrHBqb4FnVACYztJ9vhTAY37A",
  "key32": "3uWSjRqJdVYpij9KC5NNjdhGeSHdEfjqApkDn9ZoMqy5wbXQLRTr8GW8EtJvXnBU74zdUXmVMPGjhbwNCishwb8N",
  "key33": "4P4FxRKucM1kcsr5PDJ9XqzyJx5NaJXXaFzg6wx4vt7mDCyJ8ToY7cJA7poNWEs5KxVP5VvMDEJ6p9y9tVEM612h",
  "key34": "4BNWay1TVNLcX9BkHotuRoMP1kugoEBgwbWC97cMwYBf5ALwp5ZnozM2AmKgoUorLruq87okcnPeQcp3So1beAtU",
  "key35": "gpD5d3CqqaqSq2om8BaVMU6yQT4fvbKUMfuU5uyxRz1ijbUt5h3z1rKS11GdfC9vmyWaX1ywBGNxXkPphwmPM46",
  "key36": "2RfW6SW3egMvDkkYi6dXKnpDJ16WaJPcwYDj3tRcmhVEinhKJ6kVPMGZbPjEFWsZCRVzhuj2zoY3h9Xmo8chBQeM",
  "key37": "2nVRAh2extGL6CoXPz21VejZXkH8UkTYJen3x1C4zBK8kpWfGzTiiqDmbDLxvZkfH8u4XW4Fe2fMLpyceKWTL2A3"
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
