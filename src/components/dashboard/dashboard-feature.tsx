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
    "5rJUKrTzdtWZF3E8xXfA1kZU6n7kq27MfMEyqe5CsNiFHhPtEnhkicJaxZQ7ymwFfWt5kerVmq71TQRdvJ2sFJgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2Xcf6XJzD8wB21gtZ2qMj3f2hQfCqdWsnsMGLpPPat7fApXWuevAtKYbZES2jaMvaXxHtJFbFrvUFWH8TEb71m",
  "key1": "3fVvnJcxouTzaGzKFEe6RyxGBhLFsToZ5mYzsHtPD9fwL4hA5qMY8jJk75wryUB2Xd7sHY8UotKc9akhgUHFJZCh",
  "key2": "34yfcuMkSvBKEgaUbYnp8G9Bb3hw5oo62GRoywZXpMLfguQTqtjEMvvPZhWHSJjB5Nz75nXQ6aZKdoxRaKNjeREG",
  "key3": "WAJnSpyBBXArG8TBWGSgqnmvJCGqaYd9pSghKE7drxztQe3qMkNLDCdxdHpDyvXtQAh51go37AMCUJKL4BfgfBN",
  "key4": "61vbAXwtosYAHTpiEPZyDNa8yHNXFMS9qzWY1RCji7i3Ee6kkMMxbGf6uQuyzTv5DK131bwDBPuLydPxiwQzLVAp",
  "key5": "4fUKBgkbuhyueFjD7yXa2RNVCS8TKd2czmBeWbyiKLCcLBhzAqfvS9dDp9RKLanCDAyeYuN4ETtHpZesJaPcqCQD",
  "key6": "4nmKbkSVPKcQ1jSaHw7CJxRYa6mE78NDtE51eyFxyqkFp5VzzpMBLTcbzFXxLALr85EL3GszrQcGRqPgtZMuRNxY",
  "key7": "QbbHx7CSU4PTdZUpaDnpWDKJZB28b84oofnz32W1R5yD9qLNz59C8Q3Z53dGhJ2bL9HZXFo2TNeK5Hb3iYUMDQk",
  "key8": "2MTmn1RndZEfaFw9UXNcVgvdVkaEW4X7ToP8niL8CfTiZhLKG6oZnH3hYi5q8FHUpgSL5ESRE55occeUyseXpZ5N",
  "key9": "KdE8VwCudUS5fwoKif85q14keRF2Dkv7x8yfEa853hhAh73YsF2YRwbBTywrJoBz3uNA5acADhDdqmoxZ3Lnr5j",
  "key10": "4Mc5jKhmDPJbCmqW6rNG9aKhBomxRrig6bPahtfoMsNpUeJFnYCFC9TmRy5yPdHAfPHi3i9reQRx6B6Tn8YRAHZT",
  "key11": "3DcDeMFcXBZMe93cyAGQqJHKuPpmVq4sDAWVE66ZCEdCMzBbVqCAnaWotYqsaoTHyqdxNeEHnhRi7uLsm3mygp1T",
  "key12": "3gce3rS9HAFzX3vU1516yXeQGvoQNxRVdEF26HxcnAaWoRaD9uBqzZ3663mTaydkTADRuUHg4gtuPQ6SDPiuT5G4",
  "key13": "3AkmKCs5pnaMBfPWjCw6vifrxnWiquwUcEQZBypTmWENzXQTQC3BpQKwXQTg1bsFRAGsUqRqZHapgS8dHHZ6DVPz",
  "key14": "54rx7ebuz2qfuRD5GsNoLm1dws7FnuG5SMUpY9xUZk4yopoH77VoGRNpEPNEbey5oN8T9ik97f5fCw91RDhenwv9",
  "key15": "5xLdHbPK98HJmGc2eeG9EHXy534sbfRTmxEfRsibGrYav83io8H7NCYbYDuy768NKXdZeWZpyufRSP8FQZqX27Pr",
  "key16": "37GbfLQLDaZQxYAGaKDTkX4KH6gsNQFbWpVgx32BYjYyWmypkHgSBYbHoXaeincHTHYmAhBma7t8yVinXskX4JkL",
  "key17": "PtsNgGc7LMHU3HHfvJEnbw48qS2hUPXdPCKsDrMwusUpkX2KTFX8GRskP8Udr1JmWBxMSZGndZUeyGFiPeJcwri",
  "key18": "hEFBkE9xWHoU3B9fCb5ESNg5qK6ei1euTaKeCxxu16NHpuv1dE8iP5RzGQmWdkKAPBt5nZXwVMxpwsLpuhxaErC",
  "key19": "2WpuKksu17devoqwfL81omaX31AmGVAARccemonBejdod4MADmyUWdWS7f3p7HonQrkMffYQMGVE4chY6GvvX5rf",
  "key20": "UaU6wWNE3Mzt1S13m7PaFbMNWMyuguciGxTtP6H52LanY1gGZR2L1oWVujdHmHoApbZFbLmCx5iQQEkByySx7UY",
  "key21": "4bA3hHYvz7AqAFZXTfiQwsaAAmb7t1kXME9cMZDkMSQjwSsGRfoy448JRU2PxwY391VLuW4UaSVtA7y65eFRi8Ej",
  "key22": "4Xffbr5SEHxszuTkvEAx6FJcL2ZUSKMrNnJWHQYJokeqYhQMvVyVkuwmEVLkjki2e4x84ACgFpfQw4WjaRutew8s",
  "key23": "4R9tz9e716ygVLCaGLpruj4ygf1ohfG8DFkbsf1xyUEotCNRKtgQJpixxFzFwGUZUS1upz4fu4xSZ2AKTdR1eF1A",
  "key24": "5UbdpNsS4oiwBjct91aVY3SbprNhK5B8q9dN4mkJ2ZYWGxEvYMVeFUcYTa8bap2siU8JKvBEixseWRz3BvTAZNeH",
  "key25": "2Ejv4APDYtyDQdvtoecom4ASecBFqeMQy2EYXTjpu6mp3LJvbuP7yCz6c45nw851jV6Pz6qcJUxsXLA8SsN6X8E1",
  "key26": "33QDaiCWQPxJvX2RkJfhBNnUKGvLdSDwsV4n9A98AVYBUVj1iX1Ekk1tx2YXmfUFvDXJaCN1ASiLqCz3H2bYwKyU",
  "key27": "YdD1FpxWG4RXvgvRBych2s2rThWXznHFraMR3nQVinmFHc6jP4MtDRGXopaTfX2XUKXTtjQBwUH1CumZcBmzKKD",
  "key28": "2fe1EeNK4ggxbLbozhTesjDoatuTixiRVPh5ue24WcJL6bJgnfi8fzTS3nxyTS4MMi12pA3hqUPVd5QJ1joby2sa",
  "key29": "5NJsKoGJCvzhCNnLqe2e7gFW9vCHedk1qmrAKoKwRHTuT5UsPW9BAjR7J7uZrnRQrvKqGPdRF9qZuThRsHzU3Qqo",
  "key30": "2C8AJDB3EGcmyvxL263hajKG2Jn3dkZMokGMS3Ztv3Qwr5n1R3LdU9cGggNQVsPPe4Tpp7rXraqMnXBwj9kCUr95",
  "key31": "58nKVR1gNPF2JuNNwn4hJgVzttUNmxL54SJYotxsGPDrXYVcmqX3NDb9UhF71RgmZKLPfKsmw4DjvuJ8pJnmUo2W",
  "key32": "4p5sUR2wbcGsKM4EHPXdxA5sVct9bctY7TVZzwAafJDkzo6cpUhDtNvycP4bQWTAnw4XLCqHrVBwmApSfybrYemB",
  "key33": "5PG6BW4UVM5TJrVdXwXVCvGYqkTFtTV2gatfXcNYBxPy8HjsB15teQUALDCLNci69smaQZ3UiRN5pFePU2bKBiCu",
  "key34": "2jBg1HmaTs3PivCvQUd75A73EmHsdL4XXyRMwkpcz7yqYbsw1C7x3do28NDD9CU7BTHYwzDvrrNyy9z2GRoQELA",
  "key35": "47LHJdmK4bSH9VkHLS4X3QfKqWnnX8WDzmWSn6BGVtCP8b1PAFTmyi6GT5KKrc84bdJywRxFckoETr9a9RxqtrLe",
  "key36": "3ZLhRhABtf7rGoJ3CfCyk1NRizdC6nK9ddbLvFpsc1WJZM5zdkEZEz5wCKkWprwPuEKapkQ27yjgcniZ2JdDNfQC",
  "key37": "J4SgT6Xsg2vFh8tGvQahXqhCH6AHHwJcxJ5evMfGotE4eiBGMjPwm9mfS5vBb74JKXuxLdE6nSe8vPZctAr1Mbi",
  "key38": "5fxuNUVYL2eqQc2w7XAi449zXeeLa84Kjh9GHqkemi9S6gxRCwfEDyjgkVxC8g3KPxCXiEmLCvPdU8fagrQGrPHJ",
  "key39": "3BDUSmaJo7mfX64tTreqmKXFzJzSmo1fs2c7Xrpok4bCrekRcP4jmeQxXoZE2nMVV3JS3PFiGy5V4A2ehx8WQf9g",
  "key40": "4RjKxxbvrbhr59jsAaHQY2mjSJASFqaBLgn4SMatMnadwcsJvAv4XdHY1sMAVPiW7CFzq9K7AmcMeM2uADNsT9Es",
  "key41": "49xDg84UTsaNqBheKn5fVcpdmZk4cQPGhPyyApHiGztDzVJniwCgPJsH7gvtm5cs6dcGiYWuEPvg6TNFdAQZDD8M",
  "key42": "3ZVecbs8LzPLnsL1pvxRdnX2rVfuYnQ55MG38muuStpWdHihoQe8RbGfzLBSQVXaxocCJuCvazXpoTKdJ7T2Li7X"
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
